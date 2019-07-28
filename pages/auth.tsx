import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { toast } from "react-toastify";
import { Navigation, AuthC } from "../components";

interface Props {}
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
    toast.success("로그인");
  };

  @action
  onRegister = () => {
    toast.success("회원가입");
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
