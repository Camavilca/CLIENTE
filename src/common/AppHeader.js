import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { Layout, Menu , Icon } from 'antd';
const Header = Layout.Header;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick({ key }) {
    if (key === "logout") {
      this.props.onLogout();
    }
  }
  render() {
    let menuItems;
    if (this.props.currentUser) {
      menuItems = [
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" className="nav-icon" />
          </Link>
        </Menu.Item>
      ];
    } else {
      menuItems = [
        <Menu.Item key="/login">
          <Link to="/login">Iniciar Sesion</Link>
        </Menu.Item>,
        <Menu.Item key="/signup">
          <Link to="/signup">Registrate</Link>
        </Menu.Item>
      ];
    }
    return (
      <Header className="app-header">
        <div className="container">
          <div className="app-title" >
            <Link to="/">Integrador CMS</Link>
          </div>
          <Menu
            className="app-menu"
            mode="horizontal"
            selectedKeys={[this.props.location.pathname]}
            style={{ lineHeight: '64px' }} >
            {menuItems}
          </Menu>
        </div>
      </Header>
    );
  }
}

export default withRouter(AppHeader);