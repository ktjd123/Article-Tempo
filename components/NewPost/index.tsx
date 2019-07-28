import React, { Component } from "react";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

interface Props {
  onChange: (_: React.FormEvent) => void;
  onChangeQuill: (_: string) => void;
  onAddPost: () => void;
  onChangeImage: (e: React.FormEvent) => void;
}
@observer
class index extends Component<Props> {
  render() {
    const { onChange, onChangeQuill, onAddPost, onChangeImage } = this.props;
    if (typeof document === "undefined")
      return <div className={cx("new-project")} />;
    const ReactQuill = require("react-quill");
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ color: [] }, { background: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        ["link", "image", "video"],
        ["clean"]
      ]
    };
    return (
      <div className={cx("new-project")}>
        <div className={cx("input-box")}>
          <h1 className={cx("input-title")}>제목</h1>
          <input placeholder="애니추천 1" id="title" onChange={onChange} />
        </div>
        <div className={cx("input-box")}>
          <h1 className={cx("input-title")}>썸네일 이미지 (1024px x 500px)</h1>
          <input type="file" accept="image/*" onChange={onChangeImage} />
        </div>
        <div className={cx("input-box")}>
          <h1 className={cx("input-title")}>내용</h1>
          <ReactQuill
            modules={modules}
            className={cx("quill")}
            onChange={onChangeQuill}
          />
        </div>
        <button type="button" className={cx("submit")} onClick={onAddPost}>
          새 포스트 등록
        </button>
      </div>
    );
  }
}
export default index;
