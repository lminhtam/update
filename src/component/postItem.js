import { Button, Input } from "antd";
import firebase from "firebase";
import React, { useState } from "react";
import "../App.css";
import { CONTENT } from "../constants/constants";
import UploadImage from "./uploadImage";
const { TextArea } = Input;

function RenderContent(props) {
  switch (props.item.type) {
    case CONTENT.CONTENT:
      return <TextArea placeholder="Nội dung" allowClear onChange={() => {}} />;
    case CONTENT.QUOTE:
      return <TextArea placeholder="Quote" allowClear onChange={() => {}} />;
    case CONTENT.YTB:
      return (
        <Input placeholder="Link youtube" allowClear onChange={() => {}} />
      );
    case CONTENT.IMAGE:
      return <UploadImage />;
    default:
      return <div />;
  }
}

function Title(props) {
  const { inside } = props.item;
  return (
    <div className="titleWrap">
      <div className="delWrap">
        <h3>Mục {props.index}</h3>
        <Button
          type="danger"
          style={{ marginLeft: 16 }}
          onClick={props.onDelete}
        >
          Xóa mục
        </Button>
      </div>
      <br />
      <div className="btnWrap">
        <Button
          className="btnStyle"
          type="primary"
          onClick={() => props.onAddItem(CONTENT.CONTENT, props.index - 1)}
        >
          Thêm nội dung
        </Button>
        <Button
          className="btnStyle"
          type="primary"
          onClick={() => props.onAddItem(CONTENT.QUOTE, props.index - 1)}
        >
          Thêm quote
        </Button>
        <Button
          className="btnStyle"
          type="primary"
          onClick={() => props.onAddItem(CONTENT.IMAGE, props.index - 1)}
        >
          Thêm hình
        </Button>
        <Button
          className="btnStyle"
          type="primary"
          onClick={() => props.onAddItem(CONTENT.YTB, props.index - 1)}
        >
          Thêm video
        </Button>
      </div>
      <br />
      <Input
        placeholder="Đề mục (không có bỏ qua, không cần đánh số)"
        allowClear
        onChange={() => {}}
      />
      <br />
      {inside &&
        inside.length > 0 &&
        inside.map((item, index) => (
          <div key={index}>
            <RenderContent item={item} />
            <br />
            <br />
          </div>
        ))}
    </div>
  );
}

function PostItem(props) {
  const { postItem } = props;
  console.log(postItem)
  const [postTitle, setPostTitle] = useState(postItem.postTitle);
  const [coverURL, setCoverURL] = useState(postItem.cover);
  const [description, setDescription] = useState(postItem.description);
  const [sections, setSections] = useState(postItem.sections || []);

  const addSection = () => {
    setSections([
      ...sections,
      {
        title: "",
        inside: [{ type: "CONTENT", content: "" }]
      }
    ]);
  };

  const deleteSection = index => {
    sections.splice(index, 1);
    setSections([...sections]);
  };

  const addItem = (type, index) => {
    sections[index].inside = [...sections[index].inside, { type, content: "" }];
    setSections([...sections]);
  };

  const savePost = () => {
    firebase
      .database()
      .ref("posts")
      .child(props.postIndex)
      .set({
        postTitle: postTitle,
        coverURL: coverURL,
        description: description,
        sections: sections
      });
  };

  return (
    <div>
      <Input
        placeholder="Tiêu đề"
        allowClear
        onChange={e => setPostTitle(e.target.value)}
      />
      <br />
      <br />
      <UploadImage />
      <br />
      <TextArea
        placeholder="Mô tả"
        allowClear
        onChange={e => setDescription(e.target.value)}
      />
      <br />
      <br />
      <Button type="primary" onClick={addSection}>
        Thêm mục
      </Button>
      <br />
      <br />
      {sections &&
        sections.length > 0 &&
        sections.map((item, index) => (
          <div key={index}>
            <br />
            <Title
              index={index + 1}
              item={item}
              onAddItem={addItem}
              onDelete={() => deleteSection(index)}
            />
          </div>
        ))}
      <Button type="primary" onClick={() => savePost()}>
        Lưu
      </Button>
    </div>
  );
}

export default PostItem;
