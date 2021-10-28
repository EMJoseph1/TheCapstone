import React, { Component } from 'react';
import Pics2Service from '../services/Pics2Service';

class slideshowpage extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           name:'',
           image:''

        }
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
    }
    render() {
        return (
            <div>
                <div className="slideshow">
                  
                </div>
            </div>
        );
    }
}

export default slideshowpage;