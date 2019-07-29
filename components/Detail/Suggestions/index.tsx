import React, { Component } from "react";
import Link from "next/link";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";
import Post from "../../../store/post";

const cx = ClassNames.bind(styles);

interface Props {
  _id: string;
  post?: Post;
}

@inject("post")
@observer
class index extends Component<Props> {
  componentDidMount() {
    const { post } = this.props;
    const { getSuggestionList } = post!;
    getSuggestionList()
      .then(() => {})
      .catch(() => {});
  }

  componentWillUpdate(nextProps, nextState) {
    const { _id } = this.props;
    if (_id !== nextProps._id) {
      const { post } = this.props;
      const { getSuggestionList } = post!;
      getSuggestionList()
        .then(() => {})
        .catch(() => {});
    }
  }

  render() {
    const { post } = this.props;
    const { suggestionsList } = post!;
    return (
      <div className={cx("index")}>
        <h1 className={cx("how-about")}>이런 게시글은 어떠신가요?</h1>
        <div className={cx("suggestion-posts")}>
          {suggestionsList.map((item, i) => (
            <Link
              href={{ pathname: "/detail", query: { _id: item._id } }}
              key={i}
            >
              <a className={cx("sugg-post")}>
                <img src={item.thumbImage} alt={item.title} />
                <h1 className={cx("title")}>{item.title}</h1>
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export default index;
