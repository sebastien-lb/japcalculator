import axios from "axios";

export const sendData = (kcal: number): (() => void) => () => {
  axios.post(`.netlify/functions/fauna`, { kcal: kcal });
};
