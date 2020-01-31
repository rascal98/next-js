import React from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Main from "../../components/main";
import { useAmp } from "next/amp";
import Link from "next/link";
export const config = { amp: "hybrid" };
import Error from "next/error";
import fetch from "isomorphic-unfetch";
class BlogDetail extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch("http://localhost:3000/api/blog/22");
    const json = await res.json();
    const blogTitle=json.posts[0].title;
    return { blogTitle };
  }
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link
            href="https://fat.github.io/zoom.js/css/zoom.css"
            rel="stylesheet"
          />
          <link href="/static/main.css" rel="stylesheet" />
        </Head>
        <h1>{this.props.blogTitle}</h1>
        <Main />

        {/*<script dangerouslySetInnerHTML={{ __html: 'alert("mahmut")'}}></script>*/}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://fat.github.io/zoom.js/js/zoom.js"></script>
      </div>
    );
  }
}

export default BlogDetail;
