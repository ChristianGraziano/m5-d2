import React, {Component} from "react";
import './App.css';
import MyNav from "./component/MyNav";
import MyJumbotron from "./component/MyJumbotron";
import MainContent from "./component/MainContent";
import MyFooter from "./component/MyFooter";


function App() {
  return (
    <>
     < MyNav />
     < MyJumbotron />
     < MainContent />
     < MyFooter/>
    </>
  );
}

export default App;
