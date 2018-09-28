var React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Created By Carlton Joseph - Copyright © {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}

module.exports = Footer;
