import axios, { AxiosRequestConfig } from 'axios';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { State } from '../types';
import { API_LINK } from '../constants';

// multipart/form-data
// application/json
// const contType = store.getState().appState.axiosHeaders;
const headers = {
  'Content-Type': 'application/json',
};

const headersAlt = {
  'Content-Type': 'multipart/form-data',
};

const axiosCfg: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headers,
};

const axiosCfgAlt: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headersAlt,
};

export const api = axios.create(axiosCfg);
export const apiAlt = axios.create(axiosCfgAlt);

apiAlt.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    console.log(token);
    axiosCfg.headers!.Authorization = `${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = ``;
    return axiosCfg;
  }
});

api.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    console.log(token);
    axiosCfg.headers!.Authorization = `${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = ``;
    return axiosCfg;
  }
});
