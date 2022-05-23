import React from "react";

class Exercise14_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copySuccess: "" };
    this.textarea = React.createRef();
  }
  //   componentDidMount() {
  //     this.textarea.current.focus();
  //   }
  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <label>Copy Clipboard</label>
        <textarea ref={(textarea) => (this.textArea = textarea)} />
        <button onClick={this.copyToClipboard}> Copy </button>
        <input
          style={{ height: 100, backgroundColor: "red" }}
          type="textarea"
          ref={this.textInput}
        ></input>
      </div>
    );
  }
}
export default Exercise14_2;
