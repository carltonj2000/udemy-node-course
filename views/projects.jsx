var React = require("react");
var DefaultLayout = require("./layouts/default");

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout {...this.props}>
        <div>Protfolio Page</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
