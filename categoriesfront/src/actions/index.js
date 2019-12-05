import axios from "axios";

const getCats = "http://localhost:3000/api/post";

export function getCategoriesAction() {
  const req = axios.get(`${getCats}`).then(req => req.data);

  return {
    type: "GETCATS",
    payload: req
  };
}
