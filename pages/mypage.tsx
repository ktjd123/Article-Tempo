import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { toast } from "react-toastify";
import { Navigation, MyPageC } from "../components";
import Auth from "../store/auth";
import Post from "../store/post";

interface Props {
  auth: Auth;
  post: Post;
}

@inject("auth")
@inject("post")
@observer
class mypage extends Component<Props> {
  componentDidMount() {
    const { auth, post } = this.props;
    auth
      .check()
      .then(() => {})
      .catch(() => {});
    post
      .getMyList()
      .then(() => {})
      .catch(code => {
        const errMsg = ["", "로그인을 해주세요"];
        toast.error(errMsg[code]);
      });
  }

  render() {
    return (
      <div>
        <Navigation />
        <MyPageC />
      </div>
    );
  }
}
export default mypage;
