import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokclone-c31538fbdb8f.herokuapp.com/"
})
export default instance
