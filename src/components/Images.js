import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ImgWrap = styled.div`
	width: 100%;
	height: 100vh;
	padding-top: 150px;
`;

const Contents = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	.img {
		width: 30vw;
		padding: 10px;

		img {
			width: 100%;
		}
	}
`;

const Images = forwardRef((props, ref) => {
	return <ImgWrap ref={ref}></ImgWrap>;
});

export default Images;
