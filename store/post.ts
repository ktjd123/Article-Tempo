import { observable, action, runInAction } from "mobx";
import axios from "axios";
import { authInterface } from "./auth";

const APIHOST = "/api/post";
const APIS = {
  suggestionList: APIHOST + "/suggestions",
  mylist: APIHOST + "/list",
  detail: APIHOST + "/detail",
  write: APIHOST + "/write"
};

interface postList {
  _id: string;
  title: string;
  viewCount: number;
}

interface detailPost {
  _id: string;
  account: authInterface;
  title: string;
  content: string;
  viewCount: number;
  thumbImage: string;
}

interface suggestionList {
  _id: string;
  title: string;
  thumbImage: string;
}

export default class post {
  @observable postList: [postList] = [
    { _id: "iii", title: "타이틀", viewCount: 0 }
  ];

  @observable detailPost: detailPost | undefined;

  @observable suggestionsList: Array<suggestionList> = [];

  @action getSuggestionList = async () => {
    const result = await axios.get(APIS.suggestionList);

    runInAction(() => {
      this.suggestionsList = result.data;
    });

    return this.suggestionsList;
  };

  @action getMyList = async () => {
    const result = await axios.get(APIS.mylist);

    if (result.data.code) throw result.data.code;

    runInAction(() => {
      this.postList = result.data;
    });

    return true;
  };

  @action getDetailPost = async (id: string) => {
    const result = await axios.get(APIS.detail + "/" + id);

    if (result.data.code) throw result.data.code;

    runInAction(() => {
      this.detailPost = result.data;
    });

    return true;
  };

  @action
  write = async (title: string, content: string, thumbImage: string) => {
    const result = await axios.post(APIS.write, { title, content, thumbImage });

    if (result.data.code) throw result.data.code;

    return true;
  };
}
