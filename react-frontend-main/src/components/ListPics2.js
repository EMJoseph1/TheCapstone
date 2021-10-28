
import React, { Component } from 'react';
import Pics2Service from '../services/Pics2Service';

class ListPics2 extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                pics2:[] 
          }
          this.AddPics2=this.AddPics2.bind(this);
          this.EditPics2=this.EditPics2.bind(this);
          this.DeletePics2=this.DeletePics2.bind(this);
          this.ViewPics2=this.ViewPics2.bind(this);
      }
    
     componentDidMount() {
         Pics2Service.getPics2().then((res) => {
             this.setState({pics2:res.data});
         });
     }
     
     AddPics2()
     {

        this.props.history.push('/add-pics2');
     }
     slideshowpage()
     {
        
        this.props.history.push('/slideshowpage');
     }

     EditPics2(id)
     {
        this.props.history.push(`/update-pics2/${id}`);
        
     }

     DeletePics2(id)
     {
        this.props.history.push(`/delete-pics2/${id}`);
        // pics2Service.deletepics2(id).then(res => {
        //     this.setState({
        //          pics2: this.state.pics2s.filter(pics2 => pics2.id !== id)
        //     })
        // })
        
     }

     ViewPics2(id)
     {
        this.props.history.push(`/view-pics2/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center text-primary"> Slideshow</h2>
                <div> 
                    <button className="btn btn-light" onClick={this.AddPics2}> Add Pics</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Picture Id</th>
                                <th> Name</th>
                                <th> Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pics2.map(
                                     pics2 =>
                                     <tr key={pics2.id}>
                                         <td>{pics2.id}</td>
                                         <td>{pics2.name}</td>
                                         <td><a href ={pics2.image}> Image Link </a></td>

                                    
                                         <td>
                                            <button onClick={() =>this.EditPics2(pics2.id)} className="btn btn-dark">Update</button> 
                                            <button onClick={() =>this.DeletePics2(pics2.id)} className="btn btn-warning">Delete</button> 
                                            <button onClick={() =>this.ViewPics2(pics2.id)} className="btn btn-secondary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick = {this.slideshowpage}> Submit </button>
                </div>

            </div>
        );
    }
}

export default ListPics2;