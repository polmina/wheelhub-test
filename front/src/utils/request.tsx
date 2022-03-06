import axios from "axios";

const DOMAIN = "http://localhost:5005";
export const post = async (endpoint: string, data: any) => {
  const res = await axios.post(`${DOMAIN}/${endpoint}`, data);
  return res.data;
};
