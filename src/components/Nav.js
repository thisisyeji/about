import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
	position: fixed;
	top: 0;
	width: 100vw;
	border-bottom: 1px solid #000;
	background: #fff;
	z-index: 5;

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		li {
			padding: 10px;
		}
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
