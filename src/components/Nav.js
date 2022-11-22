import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
	position: fixed;
	top: 0;
	width: 100vw;
	color: rgb(255, 255, 255, 0.8);
	font-weight: 700;
	background: rgba(34, 34, 34, 0.5);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	z-index: 5;

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 20px;
		margin-right: 50px;

		li {
			padding: 20px 10px;
			cursor: pointer;
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
				<li onClick={() => onSectionClick(3)}>Contact</li>
			</ul>
		</NavBar>
	);
};

export default Nav;
