import React, { Component } from "react";
import Link from "next/link";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";
import Auth from "../../store/auth";

const cx = ClassNames.bind(styles);

interface Props {
  auth?: Auth;
}

@inject("auth")
@observer
class index extends Component<Props> {
  componentDidMount() {
    const { auth } = this.props;
    const { check } = auth!;
    check()
      .then(() => {})
      .catch(() => {});
  }

  render() {
    const { auth }: { auth?: Auth } = this.props;
    return (
      <div>
        <div className={cx("navigation")}>
          <section className={cx("header")}>
            <Link href="/">
              <a className={cx("logo")}>
                Dekina<strong className={cx("sub-logo")}>Article Tempo</strong>
              </a>
            </Link>
            {auth!.auth !== undefined ? (
              <div className={cx("buttons")}>
                <Link href="/mypage">
                  <a className={cx("dashboard")}>마이페이지</a>
                </Link>
                <Link href="/write">
                  <a className={cx("dashboard")}>글쓰기</a>
                </Link>
              </div>
            ) : (
              <Link href="/auth">
                <a className={cx("dashboard")}>로그인</a>
              </Link>
            )}
          </section>
        </div>
      </div>
    );
  }
}
export default index;
