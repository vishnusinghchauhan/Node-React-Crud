import { ADD_USER, GET_USERS, DELETE_USER } from '../constants/ActionTypes';
import axios from "axios";
import history from '../history'
const API_URL = 'http://localhost:3001/api/';


export const addUser = (user) => {
    console.log("user ", user, API_URL + 'users/');
    return (dispatch) => {
        return axios.post(API_URL + 'users/', user)
            .then((res) => {
                console.log("response ", res);
                dispatch({ type: ADD_USER, payload: res.data.result })
                history.push(`/users`)
            });
    }
}


export const getUsers = () => dispatch => {
    return fetch(API_URL + 'users')
        .then((response) => {
            console.log("responseresponse", response)
            return response.json();
        })
        .then(result => {
            console.log("user actions ", result);
            dispatch({
                type: GET_USERS,
                payload: result.users
            });
        });
}


export const deleteUser = (user) => {
    console.log("deleting user is", user)
    return (dispatch) => {
        return axios.delete(API_URL + 'users', { data: user })
            .then((res) => {
                dispatch({ type: DELETE_USER, payload: user })
            });
    }
}



export const updateUser = (user) => {
    console.log("udpate user ", user);
    return (dispatch) => {
        return axios.put(API_URL + 'users/', user)
            .then((res) => {
                console.log("response ", res);
                history.push(`/users`)
            });
    }
}