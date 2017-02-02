import React, { Component } from 'react';
import Marked from 'marked';

import './App.css';

import TextArea from './TextArea.js';

export default class App extends Component {

constructor() {
  super();
  
let textValue = 'textValue';

this.state={ 
  textValue: textValue,
  markUpHTML: ''
}

console.log(this.state);
}

handleTextAreaUpdate(e){
  console.log(e.target.value);
  
  let markUpHTML = Marked(e.target.value);
  
  this.setState({
    markUpHTML: markUpHTML
  })
}

  render(){
    return(
      <div>
      <div className='col-sm-6'>
          <TextArea 
           update={this.handleTextAreaUpdate.bind(this)} 
           value={this.state.textValue} />
      </div>
      <div className='col-sm-6'>
        <aside dangerouslySetInnerHTML={{ __html: this.state.markUpHTML }}>
        
        </aside>
      </div>
      </div>
    )
  }
}
