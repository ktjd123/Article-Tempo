import React, { Component } from "react";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

interface Props {
  onChange: (_: React.FormEvent) => void;
  onLogin: () => void;
  onRegister: () => void;
}
@observer
class index extends Component<Props> {
  render() {
    const { onChange, onLogin, onRegister } = this.props;
    return (
      <div className={cx("auth")}>
        <input
          placeholder="아이디를 입력해주세요"
          id="id"
          onChange={onChange}
        />
        <input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="pw"
          onChange={onChange}
          onKeyPress={e => {
            if (e.key === "Enter") onLogin();
          }}
        />
        <div className={cx("buttons")}>
          <a className={cx("login")} onClick={onLogin}>
            로그인
          </a>
          <a className={cx("register")} onClick={onRegister}>
            회원가입
          </a>
        </div>
      </div>
    );
  }
}
export default index;
