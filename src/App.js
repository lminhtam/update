import React from "react";
import "./App.css";
import { Card, Button } from "antd";
import PostItem from "./component/postItem";
const { Meta } = Card;

const data = [
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
  return (
    <div className="App">
      <div className="leftHalf">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              style={{ width: "100%" }}
              cover={
                <img alt="example" src={item.cover} width="100%" height="150" />
              }
            >
              <Meta title={item.title} description={item.description} />
            </Card>
            <br />
            <Button type="primary" block>
              Sửa
            </Button>
            <br />
            <br />
          </div>
        ))}
      </div>
      <div className="rightHalf">
        <PostItem />
      </div>
    </div>
  );
}

export default App;
