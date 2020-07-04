import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const NavBar = () => {
	return (
		<Layout className='layout'>
			<Header>
				<Link to='/'>
					<div className='logo'></div>
				</Link>
				<Menu theme='dark' mode='horizontal'>
					<Menu.Item key='1'>
						<Link to='/global'>Global</Link>
					</Menu.Item>
					<Menu.Item key='2'>
						<Link to='/country'>Country</Link>
					</Menu.Item>
					<Menu.Item key='3'>
						<Link to='/live'>Live</Link>
					</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	);
};

export default NavBar;
