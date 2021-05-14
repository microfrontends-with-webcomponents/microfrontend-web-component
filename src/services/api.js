import axios from 'axios';


const {
  REACT_APP_BASEURL,
  REACT_APP_RANDOM_API
} = process.env;

export const microservice = axios.create({
  baseURL: REACT_APP_BASEURL,
});

export const randomAPI = axios.create({
    baseURL: REACT_APP_RANDOM_API,
  });