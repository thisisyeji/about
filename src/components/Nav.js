import React from 'react';
import styled from 'styled-components';
import { LIST } from '../constants';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100vw;
	color: rgb(255, 255, 255, 0.8);
	font-weight: 700;
	background: rgba(34, 34, 34, 0.5);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	z-index: 5;

	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 50px;

	li {
		font-weight: 200;
		padding: 20px 10px;
		margin-right: 20px;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const GitBtn = styled.button`
	background-color: transparent;
	border: none;
	margin-right: 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	&:hover {
		svg {
			color: #dcfd37;
		}
	}

	svg {
		width: 30px;
		height: 30px;
		color: #fff;
		transition: 0.5s;
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
