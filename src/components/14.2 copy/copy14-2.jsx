import React from "react";

class Exercise14_2 extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { copySuccess: "" };
    this.textArea = React.createRef();
  }
  copyToClipboard = (e) => {
    this.textArea.current.select();
    navigator.clipboard.writeText(this.textArea.current.value);
    // e.target.focus();
    // this.setState({ copySuccess: "Copied!" });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <label>Copy Clipboard</label>
        <textarea ref={this.textArea} />
        <button onClick={this.copyToClipboard}> Copy </button>
        <input
          style={{ height: 100, backgroundColor: "red" }}
          type="textarea"
        ></input>
      </div>
    );
  }
}
export default Exercise14_2;
