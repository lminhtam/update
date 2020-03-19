import { LoadingOutlined } from "@ant-design/icons";
import { Button, Card, Spin } from "antd";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./App.css";
import PostItem from "./component/postItem";
import { Link } from "react-router-dom";
const { Meta } = Card;

function Post(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("posts")
      .child(props.index)
      .on("value", snapshot => {
        const post = snapshot.val();
        setPost(post);
      });
  }, []);
  return (
    <div className="App">
      <img alt="Lỗi hình" src={post.coverURL} width="100%" />
    </div>
  );
}

export default Post;
