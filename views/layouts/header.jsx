const React = require("react");

const navRoutes = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/projects",
    name: "Projects"
  }
];

const getRoutes = () => {
  const routes = [];
  navRoutes.forEach((route, i) =>
    routes.push(
      <li key={i} style={styles.li}>
        <a style={styles.a} href={route.path}>
          {route.name}
        </a>
      </li>
    )
  );
  return <nav style={styles.nav}>{routes}</nav>;
};

class Header extends React.Component {
  render() {
    return (
      <header style={styles.header}>
        <h1>{this.props.pageTitle}</h1>
        {getRoutes()}
      </header>
    );
  }
}

const styles = {
  header: {
    marginBottom: "10px"
  },
  nav: {
    listStyle: "none"
  },
  li: {
    display: "inline-block",
    background: "lightgreen",
    border: "3px",
    padding: "5px"
  },
  a: {
    textDecoration: "none"
  }
};
module.exports = Header;
