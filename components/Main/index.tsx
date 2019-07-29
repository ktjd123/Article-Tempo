import React, { Component } from "react";
import Link from "next/link";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

interface Props {
  data: Array<{ _id: string; title: string }>;
}
@observer
class index extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <div className={cx("wrapper")}>
        {data.map((item, i) => {
          return (
            <Link
              key={i}
              href={{ pathname: "/detail", query: { _id: item._id } }}
            >
              <a className={cx("link")}>{item.title}</a>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default index;
