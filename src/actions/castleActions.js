import  Axios  from "axios";
import { CASTLE_DETAILS_FAIL, CASTLE_DETAILS_REQUEST, CASTLE_DETAILS_SUCCESS, CASTLE_LIST_FAIL, CASTLE_LIST_REQUEST, CASTLE_LIST_SUCCESS } from "../components/castleConstants";

export const listCastles = () => async (dispatch) => {
    dispatch( {type:CASTLE_LIST_REQUEST,});
    try{
        const { data } = await Axios.get("/api/castles");
        dispatch({type:CASTLE_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type:CASTLE_LIST_FAIL, payload: error.message});
    }
};

export const detailsCastle = (castleId) => async (dispatch) => {
    dispatch( {type:CASTLE_DETAILS_REQUEST, payload:castleId});
    try{
        const { data } =await Axios.get(`/api/castles/${castleId}`);
        dispatch({type:CASTLE_DETAILS_SUCCESS, payload: data});
    }catch(error){
        dispatch({type:CASTLE_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message 
            : error.message,
        });
    }
};