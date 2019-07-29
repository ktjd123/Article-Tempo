import React, { Component } from "react";
import ClassNames from "classnames/bind";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import styles from "./index.scss";
import Suggestions from "./Suggestions";

const cx = ClassNames.bind(styles);

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
class index extends Component<Props> {
  render() {
    const { _id, data } = this.props;
    return (
      <div className={cx("detail")}>
        <h1 className={cx("title")}>{data.title}</h1>
        <h2 className={cx("sub-title")}>조회수 {data.viewCount}</h2>
        <h2 className={cx("sub-title")}>작성자 {data.account.id}</h2>

        <iframe
          width="300"
          height="250"
          src={`https://mtab.clickmon.co.kr/pop/wp_m_300.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1039246%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL`}
          frameBorder="0"
          scrolling="no"
          className={cx("ad")}
        />
        <div
          className={cx("content")}
          dangerouslySetInnerHTML={{
            __html: data.content
          }}
        />
        <iframe
          width="300"
          height="250"
          src={`https://mtab.clickmon.co.kr/pop/wp_m_300.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1039246%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL`}
          frameBorder="0"
          scrolling="no"
          className={cx("ad")}
        />

        <Suggestions _id={_id} />
      </div>
    );
  }
}
export default index;
