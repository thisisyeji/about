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
			font-weight: 200;
			padding: 20px 10px;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Nav = ({ onSectionClick }) => {
	return (
		<Header>
			<NavList>
				{LIST.map((li, idx) => {
					return (
						<li key={idx} onClick={() => onSectionClick(idx)}>
							{li}
						</li>
					);
				})}
			</NavList>

			<GitBtn
				onClick={() => window.open('https://github.com/thisisyeji', '_blank')}>
				<GitHubIcon />
			</GitBtn>
		</Header>
	);
};

export default Nav;
