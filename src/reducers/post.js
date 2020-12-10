import {GET_DATATABLE,DATA_ERROR,DELETE_POST} from '../actions/type';
const initialState = {
    post:null,
    posts:[],
    loading:false,
    error:''
}

export default function foo(state = initialState,action) {
    const {type,payload} = action;

    switch(type){
        case GET_DATATABLE:
            return {
                ...state,
                posts:payload,
                loading:false

            }
        
            case DATA_ERROR:
                return {
                    ...state,
                    error:payload,
                    loading:false,
                    post:null
                }
            
                case DELETE_POST:
                    return {
                        ...state,
                        posts:state.posts.filter(post => post.id !== payload),
                        loading: false
                    };
                default:
                    return state;
    
        
    }
}