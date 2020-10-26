import axios from "axios";

export const sendData = (kcal: number): (() => void) => () => {
  axios.post(`${window.location.host}/.netlify/function/fauna`, { kcal: kcal });
};
