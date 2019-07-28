import { observable, action, runInAction } from "mobx";
import axios from "axios";

const APIHOST = "/api/post";
const APIS = {
  write: APIHOST + "/write"
};

export default class post {
  write = async (title: string, content: string, thumbImage: string) => {
    const result = await axios.post(APIS.write, { title, content, thumbImage });

    if (result.data.code) throw result.data.code;

    return true;
  };
}
