import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b84bd01a8dbd47b3842fd7dde244eb03",
  },
});
