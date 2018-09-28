var React = require("react");
var DefaultLayout = require("./layouts/default");

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <h2>{this.props.welcomeMessage}</h2>
        <p>Don't matter</p>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
