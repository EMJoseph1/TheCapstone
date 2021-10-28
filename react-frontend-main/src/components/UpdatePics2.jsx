import React, { Component } from 'react';
import Pics2Service from '../services/Pics2Service';


class UpdatePics2 extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 image: ''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.UpdatePics2 = this.UpdatePics2.bind(this);

    }//constructor

     componentDidMount()
     {
        Pics2Service.getPics2ById(this.state.id).then((res) =>{
          let pics2 = res.data;
          this.setState({name:pics2.name,
                  
                });
        });
           
     }
     
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

   UpdatePics2 = (e) => {
        e.preventDefault();
        let pics2={
           id: this.state.id,
           name: this.state.name,
           image: this.state.image
           
        };
        
        Pics2Service.updatePics2(pics2,this.state.id).then((res) => {
                this.props.history.push('/pics2');
        });
      
        
    }

    cancel(){
        this.props.history.push('/pics2');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Picture</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Picture ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label> Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>      
                                    <button className="btn btn-dark" onClick={this.UpdatePics2}> Update </button>
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

export default UpdatePics2;