import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import firebase from "firebase";
import React from "react";
import "../App.css";

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  return isJpgOrPng;
}

export default class UploadImage extends React.Component {
  state = {
    loading: false,
    imageUrl: this.props.url || ""
  };

  handleUpload = ({ onError, onSuccess, file }) => {
    this.setState({ loading: true });
    const uploadTask = firebase
      .storage()
      .ref(`postImages/${file.name}`)
      .put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("postImages")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            this.props.onSetURL(url);
            this.setState({ imageUrl: url, loading: false });
          });
      }
    );
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={this.handleUpload}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="lỗi" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
