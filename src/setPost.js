import { LoadingOutlined } from "@ant-design/icons";
import { Button, Card, Spin } from "antd";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "./App.css";
import PostItem from "./component/postItem";
import { Link } from "react-router-dom";
const { Meta } = Card;

function SetPost(props) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [postIndex, setPostIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref("posts")
      .on("value", snapshot => {
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
    if (data && data.length > 1) {
      data.splice(index, 1);
      setData([...data]);
      setPostIndex(0);
    }
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
            <Link
              key={index}
              to={`/${index}`}
              onClick={() => props.onLeadToPost(index)}
            >
              <div key={index} style={{ flex: 1 }}>
                <Card
                  style={{ width: window.innerWidth / 3 }}
                  cover={
                    <img alt="Lỗi hình" src={item.coverURL} height="150" />
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
            </Link>
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

export default SetPost;
