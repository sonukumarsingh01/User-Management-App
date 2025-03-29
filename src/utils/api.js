import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://reqres.in/'; 

export const login = (email, password) =>
  axios.post(`${BASE_URL}api/login`, { email, password });

export const getUsers = (page) =>
  axios.get(`${BASE_URL}api/users?page=${page}`);

export const getUserById = (id) =>
  axios.get(`${BASE_URL}api/users/${id}`);

export const updateUser = (id, data, token) =>
  axios.put(`${BASE_URL}api/users/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteUser = (id, token) =>
  axios.delete(`${BASE_URL}api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });