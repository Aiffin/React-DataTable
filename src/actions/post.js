import axios from 'axios';
import {GET_DATATABLE,DATA_ERROR,UPDATE_DATATABLE,DELETE_POST} from './type';
import {setAlert} from './alert'

export const fetchData = () => async dispatch =>{
    try {
        const res = await axios.get('http://jsonplaceholder.typicode.com/photos');

        dispatch({
            type:GET_DATATABLE,
            payload:res.data
        });

    } catch (err) {

        dispatch({
            type:DATA_ERROR,
            payload:{msg:err.response.statusText,status:err.response.status}
        })
        
    }
}

export const deleteRow = id => async dispatch => {
    try {
        await axios.delete(`http://jsonplaceholder.typicode.com/photos/${id}`);

        dispatch({
            type:DELETE_POST,
            payload:id
        })

        dispatch(setAlert(' Removed','success'));
        console.log("deleted")
        
    } catch (err) {

        const errors=err.response.data.errors;

        if(errors){
            errors.forEach(error=>console.log("error"));
        }

        dispatch({
            type:DATA_ERROR,
            payload: { msg:err.response.statusText,status:err.response.status}
        })
        
    }
}