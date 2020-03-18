import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, Button } from "antd";
import PostItem from "./component/postItem";
import firebase from "firebase";
const { Meta } = Card;

const dataPost = [
  {
    title: "AAAA",
    cover: "https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",
    description: "BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"
  },
  {
    title: "AAAA",
    cover: "https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",
    description: "BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"
  },
  {
    title: "AAAA",
    cover: "https://nguoinoitieng.tv/images/nnt/96/0/bby1.jpg",
    description: "BBBBBBBB fnkjskfjkjf ksnfknvkjr jnkncue"
  }
];

function App() {
  const [postIndex, setPostIndex] = useState(1);
  const [data, setData] = useState(dataPost);

  useEffect(() => {
    firebase
      .database()
      .ref("posts")
      .once("value", snapshot => {
        const post = snapshot.val();
        // setData(post);
        console.log(post);
      });
  }, [data]);
  return (
    <div className="App">
      <div className="leftHalf">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <Card
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src={item.cover}
                    width="100%"
                    height="150"
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
              <br />
              <Button type="primary" block onClick={() => setPostIndex(index)}>
                Sửa
              </Button>
              <br />
              <br />
            </div>
          ))
        ) : (
          <h3>Chưa có bài viết nào</h3>
        )}
      </div>
      <div className="rightHalf">
        <Button type="primary" onClick={() => setPostIndex(data.length + 1)}>
          Thêm mới
        </Button>
        <PostItem postIndex={postIndex} />
      </div>
    </div>
  );
}

export default App;
