import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import PostItem from "./component/postItem";
import firebase from "firebase";
const { Meta } = Card;

function App() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [postIndex, setPostIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref("posts")
      .once("value", snapshot => {
        const post = snapshot.val();
        if (post && post.length > 0) setData(post);
        else setData([{ title: "", cover: "", description: "", sections: [] }]);
        console.log(post);
        setLoading(false);
      });
  }, []);

  const addNewPost = () => {
    setPostIndex(data.length);
    setData([...data, { title: "", cover: "", description: "", sections: [] }]);
  };

  const deletePost = index => {
    data.splice(index, 1);
    setData([...data]);
    setPostIndex(0);
  };

  if (loading) {
    return (
      <div className="App">
        <Spin indicator={antIcon} size="large" />
      </div>
    );
  }
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
                    alt="Lỗi hình"
                    src={item.cover}
                    width="100%"
                    height="150"
                  />
                }
              >
                <Meta title={item.postTitle} description={item.description} />
              </Card>
              <br />
              <div className="btnWrap">
                <Button type="danger" onClick={() => deletePost(index)}>
                  Xóa
                </Button>
                <Button
                  type="primary"
                  style={{ marginLeft: 16 }}
                  onClick={() => setPostIndex(index)}
                >
                  Sửa
                </Button>
              </div>
              <br />
              <br />
            </div>
          ))
        ) : (
          <h3>Chưa có bài viết nào</h3>
        )}
      </div>
      <div className="rightHalf">
        <Button type="primary" onClick={() => addNewPost()}>
          Thêm mới
        </Button>
        <h2>Bài số {postIndex + 1}</h2>
        <PostItem postIndex={postIndex} postItem={data[postIndex]} />
      </div>
    </div>
  );
}

export default App;
