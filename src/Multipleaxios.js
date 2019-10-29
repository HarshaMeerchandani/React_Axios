import React, { Component } from "react";
import axios from "axios";

class Multipleaxios extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      commentCount: []
    };
  }

  componentDidMount() {
  //without spread operator
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/users"),
      axios.get("https://jsonplaceholder.typicode.com/comments")
    ])
    .then(res => {
      console.log(" this is first- response" + res[0].data);
      this.setState({
        posts: res[0].data
      });
      console.log(" this is the second responce" + res[1].data);
      this.setState({
        commentCount: res[1].data.length
      });
    })
    .catch(err => {
      console.log("the error is ", err);
    });
 }

 // with spread oprator
  // componentDidMount() {
  //   axios
  //     .all([
  //       axios.get("https://jsonplaceholder.typicode.com/posts"),
  //       axios.get("https://jsonplaceholder.typicode.com/comments")
  //     ])
  //     .then(
  //       axios.spread((posts, comments) => {
  //         console.log("The 1st response is ", posts);
  //         this.setState({
  //           posts: posts.data
  //         });
  //         console.log("The 2nd response is ", comments);
  //         this.setState({
  //           commentsCount: comments.data.length
  //         });
  //       })
  //     )
  //     .catch(err => {
  //       console.log("the error is ", err);
  //     });
  // }

  render() {
    return (
      <div>
        <p>"this is first:" {this.state.commentCount } </p>

        {this.state.posts.map(post => {
          return (
            <div>
              {post.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Multipleaxios;
