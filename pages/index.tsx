import React, { Component } from "react";
import { observable, action } from "mobx";
import axios from "axios";
import { observer, inject } from "mobx-react";
import { PageHead, Navigation, MainC } from "../components";

interface Props {
  data: Array<{ _id: string; title: string }>;
}
@observer
class index extends Component<Props> {
  static async getInitialProps({ query }) {
    const result = await axios.get("/api/post/all/list");

    return { ...query, data: result.data };
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <PageHead />
        <Navigation />
        <MainC data={data} />
      </div>
    );
  }
}
export default index;
