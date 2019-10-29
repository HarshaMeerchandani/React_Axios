import React, { Component } from "react";
import axios from "axios";
class Axiosheader extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    let options = {
      headers:{
        "Token": "dzjhbchjsbd7832jhsd"
      }
    }
    axios.get("https://jsonplaceholder.typicode.com/comments" , options ).then((res) => {
     //   console.log("this is the response" + res.data )
      this.setState({
        posts: res.data.length
      })
    })
    .catch((err) => {
      console.log("this is the error" + err )
    })
  }

  render() {
      return (
          <div>
            <br></br>
             <strong>Axios Header(Token)</strong> 
             <p>{ this.state.posts }</p>
          </div>
      )
  }

}

export default Axiosheader;
