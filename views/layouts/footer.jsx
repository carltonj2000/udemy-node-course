var React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Created By Carlton Joseph - Copyright © {this.props.currentYear}</p>
      </footer>
    );
  }
}

module.exports = Footer;
