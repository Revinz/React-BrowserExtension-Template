import React from "react";
import "./HelloWorld.css";

//Simply logs and adds 'hello world' in a custom html element
class HelloWorld extends React.Component {
  render() {
    console.log("HelloWorld");
    return (
      <helloworld-customdiv>
        <h1>Hello World</h1>
      </helloworld-customdiv>
    );
  }
}

export default HelloWorld;
