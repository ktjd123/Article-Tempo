import React, { Component } from "react";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";

const cx = ClassNames.bind(styles);

interface Props {}
@observer
class index extends Component<Props> {
  render() {
    return <div>issue</div>;
  }
}
export default index;
