import axios from 'axios';
import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types';

// Get techs from server
export const getTechs = () => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('https://itloggerserver.herokuapp.com/api/v1/techs', {
            method: 'GET'
        });
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        });
    } 
};
 
// Add Technicians to server
export const addTechs = (techs) => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('https://itloggerserver.herokuapp.com/api/v1/techs', {
            method: 'POST',
            body: JSON.stringify(techs),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        });
    } 
};

// Delete tech from server
export const deleteTechs = (id) => async dispatch =>{
    try {
        setLoading();
       
        await fetch(`https://itloggerserver.herokuapp.com/api/v1/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response
        });
    } 
};
 
// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};