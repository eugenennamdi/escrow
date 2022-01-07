import {
    USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
USER_LOGOUT,


USER_REGISTER_SUCCESS,
USER_REGISTER_REQUEST,
USER_REGISTER_FAIL,

USER_CREATE_ADRESS_SUCCESS,
USER_CREATE_ADRESS_REQUEST,
USER_CREATE_ADRESS_FAIL,

USER_DETAILS_REQUEST,
USER_DETAILS_SUCCESS,
USER_DETAILS_FAIL,
USER_DETAILS_RESET,

} from  '../Constants/userConstants'

import axios from "axios"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/user/login/',
            { 'username': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        //localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.details
                ? error.response.data.details
                : error.message,
        })
    }
}

export const logout = () => async (dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    dispatch({ type: USER_DETAILS_RESET })

}


export const register = (name,email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/user/register/',
            { 'name':name, 'email':email, 'password':password},
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/user/${id}/`
            ,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const Address = (phone,address,country,city,state,postalCode,accountNumber) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_CREATE_ADRESS_REQUEST
        })

        
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/user/create/address/',
            { phone, address, country, city, state, postalCode,accountNumber},
            config
        )

        dispatch({
            type: USER_CREATE_ADRESS_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_CREATE_ADRESS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}