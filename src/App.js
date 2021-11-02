import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}