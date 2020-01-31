import React, { Component } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Main from "../components/main";
import Link from "next/link";
import { register, unregister } from 'next-offline/runtime'


class Home extends React.Component {
  componentDidMount () {
    register()
  }
  componentWillUnmount () {
    unregister()
  }
  render(){
    return(
  
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      
        <link href="/static/main.css" rel="stylesheet" />
      </Head>


      <Main/>


      
      <script src="/static/zooming.min.js"></script>

      <script dangerouslySetInnerHTML={{ __html: 'new Zooming({bgColor: "rgb(0, 0, 0)", bgOpacity: 0.6}).listen(".zoom")'}}></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    </div>
  
    )}}

export default Home;
