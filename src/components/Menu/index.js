import { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menuList = [
    {
        label: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            const classActive = match ? 'active' : '';
            return (
                <li className={classActive}>
                    <Link to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {
    showMenus = (menuList) => {
        const menuItemList = menuList.map((menu, index) => (
            <MenuLink label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
        ))
        return menuItemList;
    }

    render() {
        return (
            <div className="navbar navbar-default">
                <Link className="navbar-brand" to="/">Call API</Link>
                <ul className="nav navbar-nav">
                    { this.showMenus(menuList) }
                </ul>
            </div>
        );
    }
}

export default Menu;
