import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { toast } from "react-toastify";
import { Navigation, NewPost } from "../components";
import Post from "../store/post";

interface Props {
  post: Post;
}

@inject("post")
@observer
class write extends Component<Props> {
  @observable title = "";
  @observable thumbImage = "";
  @observable content = "";

  @action
  onChange = (e: any) => {
    this[e.target.id] = e.target.value;
  };

  onChangeQuill = (data: string) => {
    this.content = data;
  };

  onChangeImage = e => {
    const file = e.target.files[0];

    if (file === undefined) {
      this.setState({ image: "" });
      return;
    }
    if (Number((file.size / 1024 / 1024).toFixed(4)) > 31) {
      toast.error("이미지는 최대 30mb까지 업로드 가능합니다");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.thumbImage = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  onAddPost = () => {
    const { title, thumbImage, content } = this;
    const { post } = this.props;
    const { write } = post;
    if (title.length < 1) return toast.error("제목을 입력해주세요");
    if (thumbImage.length < 1) return toast.error("이미지를 넣어주세요");
    if (content.length < 1) return toast.error("본문을 입력해주세요");
    return write(title, content, thumbImage).then(() => {
      toast.success("업로드 완료");
      this.title = "";
      this.thumbImage = "";
      this.content = "";
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <NewPost
          onChange={this.onChange}
          onChangeQuill={this.onChangeQuill}
          onAddPost={this.onAddPost}
          onChangeImage={this.onChangeImage}
        />
      </div>
    );
  }
}
export default write;
