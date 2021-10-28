import React, { Component } from 'react';
import Pics2Service from '../services/Pics2Service';

class AddPics2 extends Component {
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

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }
    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }
    imageHandler=(event)=>{
        this.setState({
            image: event.target.value
        });
    }

    savePics2 = (e) => {
        e.preventDefault();
        let pics2={
           id: this.state.id,
           name: this.state.name,
           image: this.state.image
        };

        console.log(pics2);
        Pics2Service.creategetPics2(pics2).then(res =>{
                this.props.history.push('/pics2');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    };//closing save method

    cancel(){
        this.props.history.push('/pics2')
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center"> Add Pic </h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">

                                      <label>Pics ID: </label>

                                      <input placeholder="Id" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />

                                   </div>   
                                   <div className="form-group">

                                      <label>Pics Name: </label>

                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />

                                   </div>
                                   <div className="form-group">

                                      <label>Pics URL: </label>

                                      <input placeholder="Url" name="image" className="form-control"
                                         value={this.state.image} onChange={this.imageHandler} />

                                   </div>       
                                    <button className="btn btn-success" onClick={this.savePics2}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button> 

                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddPics2;