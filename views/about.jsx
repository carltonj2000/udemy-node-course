var React = require("react");
var DefaultLayout = require("./layouts/default");

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div>About text ...</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
