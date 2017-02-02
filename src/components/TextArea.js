import React, { Component } from 'react';

export default class TextArea extends Component {
    
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            value: this.props.value
        }
    }
    
    
    
    render() {
        return (
            <textarea rows='25' cols='50' autoFocus
                defaultValue={this.state.value} onChange={this.props.update}>
            </textarea>
        )
    }
}