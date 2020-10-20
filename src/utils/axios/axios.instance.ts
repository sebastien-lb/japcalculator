import axios, { AxiosInstance } from "axios";

const API_BASE_URL = process.env.REACT_APP_BACK_URL as string;

// Workaround to fix issue pragmatically in a wrong way
// Django server return next and previous pagination url without https
// This is probably due a misconfiguration of the Heroku router
// To fix easily we also use the unsecure http version of the url
const API_BASE_URL_UNSECURE = process.env.REACT_APP_BACK_URL_UNSECURE as string;

export class CustomAxiosInstance {
  private static token?: string = undefined;
  private static axiosInstance: AxiosInstance;
  public static getInstance = (token?: string): AxiosInstance => {
  	if (token === undefined) {
  		return axios.create({
  			baseURL: API_BASE_URL,
  			timeout: 60000
  		});
  	}
  	if (CustomAxiosInstance.token === token) {
  		return CustomAxiosInstance.axiosInstance;
  	} else if (token === "") {
  		CustomAxiosInstance.axiosInstance = axios.create({
  			baseURL: API_BASE_URL,
  			timeout: 60000
  		});
  		return CustomAxiosInstance.axiosInstance;
  	} else {
  		CustomAxiosInstance.axiosInstance = axios.create({
  			baseURL: API_BASE_URL,
  			timeout: 60000,
  			headers: { Authorization: "Token " + token }
  		});
  		return CustomAxiosInstance.axiosInstance;
  	}
  };

  public static removeBaseUrlFromUrl(url: string): string {
  	if (url) {
  		const urlWithoutBase = url.replace(API_BASE_URL_UNSECURE, "");
  		return urlWithoutBase;
  	}
  	return "";
  }
}
