import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand position-relative px-5" href="{}">
            Apna Cart
            <span class="badge bg-secondary mx-3">{this.props.productList.length}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
