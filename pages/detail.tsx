import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { Navigation, DetailC, PageHead } from "../components";

interface Props {
  _id: string;
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
class detail extends Component<Props> {
  static async getInitialProps({ query }) {
    const result = await axios.get(`/api/post/detail/${query._id}`);

    // if (result.data.code && result.data.code === 2) {
    //   Router.push("/");
    // }

    return { ...query, data: result.data };
  }
  render() {
    const { _id, data } = this.props;
    return (
      <div>
        <PageHead
          title={data.title}
          description={data.title}
          image={`/api/post/thumbImage/${_id}`}
        />
        <Navigation />
        <DetailC data={data} _id={_id} />
      </div>
    );
  }
}
export default detail;
