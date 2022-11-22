import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Profile = styled.div`
	width: 300px;
	height: 300px;
	background: #fff;
	border-radius: 50%;
	margin: 0 auto;
	opacity: 0;
	transform: translateY(100px);
	transition: 0.5s;

	position: relative;

	&::after {
		content: '';
		display: block;
		clear: both;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		border: 2px solid #999;

		position: absolute;
		top: -8px;
		right: -8px;
	}
`;

const IntroWrap = styled.div`
	width: 100%;
	height: 100vh;
	background: #222;
	padding: 50px;
	padding-top: 150px;
	box-sizing: border-box;

	&.on {
		${Profile} {
			transform: translateY(0);
			opacity: 1;
		}
	}

	h1 {
		text-align: center;
		text-shadow: -1px 0 #999, 0 1px #999, 1px 0 #999, 0 -1px #999;
		font-size: 60px;
		font-weight: 700;
		line-height: 1.3;
		margin-bottom: 50px;

		.name {
			text-shadow: none;
			text-shadow: 5px 5px #888;
			color: #fff;
		}
	}
`;

const Intro = forwardRef((props, ref) => {
	return (
		<IntroWrap ref={ref} className='on'>
			<h1>
				<span>안녕하세요.</span>
				<br />
				<span>프론트엔드 개발자</span>
				<br />
				<span className='name'>김예지</span>
				<span> 입니다.</span>
			</h1>

			<Profile></Profile>
		</IntroWrap>
	);
});

export default Intro;
