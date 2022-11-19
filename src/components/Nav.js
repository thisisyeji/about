import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
	position: fixed;
	top: 0;
	width: 150px;
	height: 100vh;
	border-right: 1px solid #000;
	ul {
		padding: 20px;
	}
`;

const Nav = ({ onSectionClick }) => {
	return (
		<NavBar>
			<ul>
				<li onClick={() => onSectionClick(0)}>Intro</li>
				<li onClick={() => onSectionClick(1)}>Info</li>
				<li onClick={() => onSectionClick(2)}>Images</li>
			</ul>
		</NavBar>
	);
};

export default Nav;
