import stream from "../apis/stream"
import { CREATE_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS, SIGN_IN, SIGN_OUT, UPDATE_STREAM } from "./types"


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}


export const fetchStreams = () => async dispatch => {
    const response = await stream.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = (id) => async dispatch => {
    const response = await stream.get(`/stream/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const createStream = formValues => async dispatch => {
    const response = await stream.post('/streams', formValues)
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
}


export const updateStream = (id, formValues) => async dispatch => {
    const response = await stream.put(`/streams/${id}`, formValues);
    dispatch({
        type: UPDATE_STREAM,
        payload: response.data
    })
}

export const deleteStream = id => async dispatch => {
    await stream.delete(`/stream/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}