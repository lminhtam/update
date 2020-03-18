import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, message, Upload } from "antd";
import React, { useState } from "react";
import "../App.css";
import PicturesWall from "./pictureWall";
const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function Title(props) {
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
      <Input placeholder="Đề mục" allowClear onChange={() => {}} />
      <br />
      <TextArea placeholder="Nội dung" allowClear onChange={() => {}} />
      <br />
      <Input placeholder="Quote nếu có" allowClear onChange={() => {}} />
      <br />
      <Input placeholder="Link youtube nếu có" allowClear onChange={() => {}} />
      <br />
      <h4>Hình cho mục này:</h4>
      <PicturesWall />
    </div>
  );
}

function PostItem() {
  const [imageUrl, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [coverURL, setCoverURL] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);

  function handleChange(info) {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false);
        setImageURL(imageUrl);
      });
    }
  }

  const addSection = () => {
    setSections([
      ...sections,
      {
        title: "",
        content: "",
        ytbURL: "",
        pictureLinks: []
      }
    ]);
  };

  const deleteSection = index => {
    sections.splice(index, 1);
    sections.forEach((item, index) => (item.index = index + 1));
    setSections([sections]);
    console.log(sections);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div>
      <div className="btnWrap">
        <Button type="primary">Thêm mới</Button>
        <Button type="primary" style={{ marginLeft: 16 }}>
          Lưu
        </Button>
      </div>
      <br />
      <Input
        placeholder="Tiêu đề"
        allowClear
        onChange={text => setPostTitle(text)}
      />
      <br />
      <br />
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <br />
      <TextArea
        placeholder="Mô tả"
        allowClear
        onChange={text => setDescription(text)}
      />
      <br />
      <br />
      <Button type="primary" onClick={addSection}>
        Thêm mục
      </Button>
      <br />
      {sections.map((item, index) => (
        <div key={index}>
          <br />
          <Title index={index + 1} onDelete={() => deleteSection(index)} />
        </div>
      ))}
    </div>
  );
}

export default PostItem;
