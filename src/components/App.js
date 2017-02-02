import React, { Component } from 'react';
import Marked from 'marked';

import './App.css';

import TextArea from './TextArea.js';

export default class App extends Component {

constructor() {
  super();
  
let textValue = '';

this.state={ 
  textValue: textValue,
  markUpHTML: ''
 }
}

componentHasMounted(){
 let text = 'Heading\n=======\nSub-heading\n-----------\n### Another deeper heading\nParagraphs are separated\nby a blank line.\nLeave 2 spaces at the end of a line to do a  \nline break\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\nShopping list:\n   * apples\n * oranges\n  * pears\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'

this.setState({
  textValue: text
})

}

handleTextAreaUpdate(e){
  
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
