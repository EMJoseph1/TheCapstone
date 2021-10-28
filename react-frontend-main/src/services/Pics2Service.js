import axios from 'axios';

const PICTURE_API_BASE_URL= "http://localhost:8080/api";
class Pic2Service{

    getPics2(){
       return axios.get(PICTURE_API_BASE_URL+"/allpics2");
    }

    creategetPics2(pics2){
        return axios.post(PICTURE_API_BASE_URL+"/addpics2",pics2);
    }

    getPics2ById(id){
        return axios.get(PICTURE_API_BASE_URL+"/pics2/"+id);
    }

    UpdatePics2(pics2,id){
        return axios.put(PICTURE_API_BASE_URL+"/pics2/"+id,pics2);
    }

    DeletePics2(id){
        return axios.delete(PICTURE_API_BASE_URL+"/pics2/"+id);
    }
    // slideshowpage(){
    //     return axios.get(PICTURE_API_BASE_URL+"/slideshowpage");
    //  }

}

export default new Pic2Service();