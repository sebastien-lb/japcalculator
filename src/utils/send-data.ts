import axios from "axios";

export const sendData = (kcal: number): (() => void) => () => {
  const BASE_URL = process.env.REACT_APP_BACK_URL as string;

  axios.post(`${window.location.host}/.netlify/function/fauna`, { kcal: kcal });
};
