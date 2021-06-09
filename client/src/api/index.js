import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const helpFetchLoadedUser = async (config) => await axios.get('http://localhost:5000/api/users/me', config);

// do we need /me route and why/ how do we do userloading

// do we need to save token in localstorage after sign up/in
// when do we include token in req header
// keep the state on refresh

export const helpFetchAllLists = async () => await API.get('/lists');
export const helpFetchLists = async (userId) => await API.get(`/lists/${userId}/lists`);
export const helpCreateList = async (newList) => await API.post('/lists/add', newList);
export const helpDeleteList = async (id) => await API.delete(`/lists/${id}`);
export const updateList = async (id, updatedList) => API.patch(`/lists/${id}`, updatedList);

export const helpSignIn = async (formData) => await API.post('/users/login', formData);
export const helpSignUp = async (formData) => await API.post('/users/register', formData);

export const helpGetItems = async (id) => await API.get(`/items/list/${id}`);
export const helpAddItem = async (id, item) => await API.post(`/items/list/${id}`, item);
export const helpDeleteItem = async (id) => await API.delete(`items/${id}`);
