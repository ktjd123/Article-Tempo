import React, { Component } from "react";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

interface Props {
  data: {
    account: {
      _id: string;
      role: string;
      id: string;
    };
    content: string;
    thumbImage: string;
    title: string;
    viewCount: number;
  };
}
@observer
class index extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <div className={cx("detail")}>
        <h1 className={cx("title")}>{data.title}</h1>
        <p
          className={cx("content")}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  }
}
export default index;
