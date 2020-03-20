import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./App.css";
import { CONTENT, WINDOW_WIDTH } from "./constants/constants";

function Post(props) {
  const [post, setPost] = useState({});

  const renderContent = (item, index) => {
    switch (item.type) {
      case CONTENT.CONTENT:
        return (
          <p key={index} className="paragraph">
            {item.content}
          </p>
        );
      case CONTENT.QUOTE:
        return (
          <div className="quoteWrap">
            <p className="quoteNote">"</p>
            <p key={index} className="quote">
              {item.content}
            </p>
          </div>
        );
      case CONTENT.YTB:
        return (
          <iframe
            width="60%"
            height={`${(WINDOW_WIDTH * 0.6 * 9) / 16}`}
            src={
              item.content
                ? item.content
                : "https://www.youtube.com/embed/ZBut_eGa8Y4"
            }
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      case CONTENT.IMAGE:
        return (
          <img key={index} alt="Lỗi hình" src={item.content} width="70%" />
        );
      default:
        return <div />;
    }
  };

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
    <div className="post">
      <img alt="Lỗi hình" src={post.coverURL} width="100%" />
      <p className="postTitle">{post.postTitle}</p>
      {post.description && <p className="description">{post.description}</p>}
      {post.sections &&
        post.sections.map((item, index) => (
          <div className="section" key={index}>
            {item.title && <p className="sectionTitle">{item.title}</p>}
            {item.inside && item.inside.map(cont => renderContent(cont, index))}
          </div>
        ))}
    </div>
  );
}

export default Post;
