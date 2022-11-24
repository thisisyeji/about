import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { MdMailOutline } from 'react-icons/md';

const Title = styled.h2`
	color: #fff;
	font-size: 5vw;
	font-weight: 900;
	font-style: italic;
	text-align: center;
	text-shadow: -1px 0 #222, 0 1px #222, 1px 0 #222, 0 -1px #222;
	margin-bottom: 50px;
	transition: 0.5s;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		svg {
			transform: scale(1.2);
		}
		span {
			opacity: 1;
			transform: translateY(0);
		}
	}

	svg {
		font-size: 4vw;
		color: #fff;
		background: #222;
		border: 1px solid #555;
		border-radius: 100px;
		padding: 15px;
		margin-bottom: 40px;
		transition: 0.5s;
	}

	span {
		opacity: 0;
		transform: translateY(-20px);
		font-size: 3vw;
		transition: 0.5s;
	}
`;

const ContactWrap = styled.section`
	width: 100%;
	height: 60vh;
	background: #efefef;
	padding: 50px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&.on {
		opacity: 1;

		${Title} {
			transform: scale(1.2);
		}
	}
`;

const Contact = forwardRef((props, ref) => {
	return (
		<ContactWrap ref={ref}>
			<Title>CONTACT ME!</Title>
			<Content>
				<MdMailOutline />
				<span>yjkkim0109@gmail.com</span>
			</Content>
		</ContactWrap>
	);
});

export default Contact;
