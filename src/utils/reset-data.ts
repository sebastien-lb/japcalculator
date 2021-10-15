import axios from "axios";

export const resetData = () => () => {
  axios.post(`.netlify/functions/fauna`, { kcal: 0 });
};
