import React, { Component } from "react";
import Router from "next/router";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { toast } from "react-toastify";
import { Navigation, AuthC } from "../components";
import Auth from "../store/auth";

interface Props {
  auth: Auth;
}

@inject("auth")
@observer
class auth extends Component<Props> {
  @observable id = "";
  @observable pw = "";

  @action
  onChange = (e: any) => {
    this[e.target.id] = e.target.value;
  };

  @action
  onLogin = () => {
    const { id, pw } = this;
    const { auth } = this.props;
    const { login } = auth;
    if (id.length < 1) return toast.error("아이디를 입력해주세요");
    if (pw.length < 1) return toast.error("비밀번호를 입력해주세요");
    return login(id, pw)
      .then(() => {
        toast.success("어서오세요");
        Router.push("/");
      })
      .catch(code => {
        const errMsg = [
          "",
          "다시 시도해주세요",
          "없는 계정입니다 회원가입을 해주세요",
          "비밀번호가 맞지 않습니다"
        ];
        toast.error(errMsg[code]);
      });
  };

  @action
  onRegister = () => {
    const { id, pw } = this;
    const { auth } = this.props;
    const { register } = auth;
    if (id.length < 1) return toast.error("아이디를 입력해주세요");
    if (pw.length < 1) return toast.error("비밀번호를 입력해주세요");

    return register(id, pw)
      .then(() => {
        toast.success("회원가입 성공 로그인을 해주세요");
      })
      .catch(code => {
        const errMsg = ["", "다시 시도해주세요", "이미 존재하는 아이디입니다"];
        toast.error(errMsg[code]);
      });
  };

  render() {
    return (
      <div>
        <Navigation />
        <AuthC
          onChange={this.onChange}
          onLogin={this.onLogin}
          onRegister={this.onRegister}
        />
      </div>
    );
  }
}
export default auth;
