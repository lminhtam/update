import React from "react";
import "./App.css";
import { Card } from "antd";
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
        {data.map(item => (
          <Card
            style={{ width: 300 }}
            cover={
              <img alt="example" src={item.cover} width="300" height="150" />
            }
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
      <div className="rightHalf"></div>
    </div>
  );
}

export default App;
