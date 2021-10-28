import React, { Component } from 'react';
import Pics2Service from '../services/Pics2Service';

class DeletePics2 extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 image: ''
             }
     
        
        this.DeletePics2 = this.DeletePics2.bind(this);

    }//constructor

     componentDidMount()
     {
        Pics2Service.getPics2ById(this.state.id).then((res) =>{
          let pics2 = res.data;
          this.setState({name:pics2.name,
                  
                });
        });
           
     }
     
    

    
  DeletePics2 = (e) => {
        e.preventDefault();
        let pics2={
           id: this.state.id,
           name: this.state.name,
           image: this.state.name
        };

        console.log(pics2);
        Pics2Service.DeletePics2(this.state.id).then(res => {
            
            this.props.history.push('/pics2');
        })
      
        
    }

    cancel(){
        this.props.history.push('/pics2');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row dark">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Pics</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Pics ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Pics Name: </label>
                                      <input placeholder="Name" readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Pics Url: </label>
                                      <input placeholder="Name" readOnly= "true" name="url" className="form-control"
                                         value={this.state.image} onChange={this.imageHandler} />
                                   </div>     
                                    <button className="btn btn-dark" onClick={this.DeletePics2}> Delete </button>
                                    <button className="btn btn-info" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeletePics2;