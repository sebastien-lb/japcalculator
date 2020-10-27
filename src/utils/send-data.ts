import axios from "axios";

export const sendData = (kcal: number) => () => {
  axios.post(`.netlify/functions/fauna`, { kcal: kcal });
};
