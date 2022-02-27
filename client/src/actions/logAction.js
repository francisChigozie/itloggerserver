import axios from 'axios'
import { GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
 } from './types'

 // Get log from server
export const getLogs = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('https://generalserviceserver.herokuapp.com/api/v1/logs', {
            method: 'GET',
            mode: 'no-cors'
        }) ;
        
       const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    } 
};

// Add New log
export const addLogs = (log) => async dispatch =>{
    try {
        setLoading();

        const res = await fetch('https://generalserviceserver.herokuapp.com/api/v1/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    } 
};

// Delete log from server
export const deleteLog = (id) => async dispatch =>{
    try {
        setLoading();

        await fetch(`https://generalserviceserver.herokuapp.com/api/v1/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    } 
};

// Update log on server
export const updateLog = log => async dispatch =>{
    try {
        setLoading();

        
       const res = await fetch(`https://generalserviceserver.herokuapp.com/api/v1/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    } 
};

// Search log from server
export const searchLogs = (text) => async dispatch =>{
    try {
        setLoading();

        const res = await fetch(`https://generalserviceserver.herokuapp.com/api/v1/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        });
    } 
};

// Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

 // Clear current
 export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};




// SET Loading to true
export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}

/**
 * const res = await fetch('http://localhost:4000/api/v1/logs', {
            method: 'GET'
        });
 * return async dispatch => {
        setLoading();

        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
 */