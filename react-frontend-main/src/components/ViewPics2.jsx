import React, { Component } from 'react';
import pics2Service from '../services/Pics2Service';

class ViewPics2 extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 pics2:{}

             }
     
        
        
    }//constructor

     componentDidMount()
     {
        pics2Service.getPics2ById(this.state.id).then((res) =>{
            this.setState({pics2:res.data})
         });
     }
     
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>ID: </label>
                                    <input placeholder={this.state.pics2.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder={this.state.pics2.name} readOnly={true} name="name" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                      <label>URL: </label>
                                      <input placeholder={this.state.pics2.image} readOnly={true} name="url" className="form-control" />
                                   </div>     
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewPics2;