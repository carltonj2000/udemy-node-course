const React = require("react");

const Header = require("./header");
const Footer = require("./footer");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>{this.props.title}</title>
        </head>

        <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
