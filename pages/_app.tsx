import React from "react";
import Router from "next/router";
import withGA from "next-ga";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";

// stores
import AuthStore from "../store/auth";
import PostStore from "../store/post";

import { PageHead } from "../components";

import "quill/dist/quill.snow.css";
import "../styles/default.scss";

const auth = new AuthStore();
const post = new PostStore();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ToastContainer
          autoClose={3000}
          position="bottom-center"
          toastClassName={css({
            background: "black"
          })}
        />
        <Provider auth={auth} post={post}>
          <Component {...this.state} {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withGA("UA-144736681-1", Router)(MyApp);
