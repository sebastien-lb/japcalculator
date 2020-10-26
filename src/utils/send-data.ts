import axios from "axios";

export const sendData = (kcal: number): (() => void) => () => {
  axios.post(`.netlify/function/fauna`, { kcal: kcal });
};
