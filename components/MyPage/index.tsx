import React, { Component } from "react";
import Link from "next/link";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";
import Auth from "../../store/auth";
import Post from "../../store/post";

const cx = ClassNames.bind(styles);

interface Props {
  auth?: Auth;
  post?: Post;
}

@inject("auth")
@inject("post")
@observer
class index extends Component<Props> {
  render() {
    const { auth, post } = this.props;
    if (auth!.auth === undefined) return <div className={cx("my-page")} />;
    return (
      <div className={cx("my-page")}>
        <h1 className={cx("id")}>{auth!.auth!.id}</h1>
        <table className={cx("list-table")}>
          <thead>
            <tr>
              <th>글 제목</th>
              <th>뷰 수</th>
            </tr>
          </thead>
          <tbody>
            {post!.postList!.map(post => {
              return (
                <Link
                  href={{ pathname: "/detail", query: { _id: post._id } }}
                  key={post._id}
                >
                  <tr className={cx("pointer")}>
                    <td>{post.title}</td>
                    <td>{post.viewCount}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default index;
