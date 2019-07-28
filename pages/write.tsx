import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { Navigation } from "../components";

interface Props {}
@observer
class write extends Component<Props> {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
export default write;
