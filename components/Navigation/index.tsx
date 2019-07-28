import React, { Component } from "react";
import Link from "next/link";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

@observer
class index extends Component {
  render() {
    return (
      <div className={cx("navigation")}>
        <section className={cx("header")}>
          <Link href="/">
            <a className={cx("logo")}>
              Dekina<strong className={cx("sub-logo")}>Article Tempo</strong>
            </a>
          </Link>
          <Link href="/auth">
            <a className={cx("dashboard")}>로그인</a>
          </Link>
        </section>
      </div>
    );
  }
}
export default index;
