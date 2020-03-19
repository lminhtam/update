import { Button, Input } from "antd";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import "../App.css";
import { CONTENT } from "../constants/constants";
import UploadImage from "./uploadImage";
const { TextArea } = Input;

function RenderContent(props) {
  const [content, setContent] = useState(props.item.content);

  const onChangeContent = text => {
    setContent(text);
    props.item.content = text;
  };

  switch (props.item.type) {
    case CONTENT.CONTENT:
      return (
        <TextArea
          placeholder="Nội dung"
          allowClear
          value={content}
          onChange={e => onChangeContent(e.target.value)}
        />
      );
    case CONTENT.QUOTE:
      return (
        <TextArea
          placeholder="Quote"
          allowClear
          value={content}
          onChange={e => onChangeContent(e.target.value)}
        />
      );
    case CONTENT.YTB:
      return (
        <Input
          placeholder="Link youtube"
          allowClear
          value={content}
          onChange={e => onChangeContent(e.target.value)}
        />
      );
    case CONTENT.IMAGE:
      return (
        <UploadImage url={props.item.content} onSetURL={onChangeContent} />
      );
    default:
      return <div />;
  }
}

function Title(props) {
  const { inside } = props.item;
  const [title, setTitle] = useState(props.item.title);

  const onChangeTitle = text => {
    setTitle(text);
    props.item.title = text;
  };

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
        value={title}
        onChange={e => onChangeTitle(e.target.value)}
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
  const [postTitle, setPostTitle] = useState("");
  const [coverURL, setCoverURL] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setPostTitle(postItem.postTitle);
    setCoverURL(postItem.cover);
    setDescription(postItem.description);
    setSections(postItem.sections || []);
  }, [postItem]);

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

  const onSetCoverURL = url => {
    setCoverURL(url);
  };

  const savePost = () => {
    console.log(coverURL);
    const today = new Date();
    firebase
      .database()
      .ref("posts")
      .child(props.postIndex)
      .set({
        postTitle: postTitle || "",
        coverURL: coverURL || "",
        description: description || "",
        sections: sections || [],
        modifiedAt: today
      });
  };

  return (
    <div>
      <Input
        placeholder="Tiêu đề"
        allowClear
        value={postTitle}
        onChange={e => setPostTitle(e.target.value)}
      />
      <br />
      <br />
      <UploadImage url={postItem.coverURL} onSetURL={onSetCoverURL} />
      <br />
      <TextArea
        placeholder="Mô tả"
        allowClear
        value={description}
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
