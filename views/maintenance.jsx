var React = require("react");
var DefaultLayout = require("./layouts/layout1");

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <h1>Site in maintenance.</h1>
        <h2>We will be back soon.</h2>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
