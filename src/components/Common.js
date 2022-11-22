import React from 'react';
import styled from 'styled-components';

const CommonWrap = styled.section`
	width: calc(100vw - 150px);
	height: 100vh;
	border: 1px solid #000;
	margin-left: 150px;
`;

const Common = ({ children }) => {
	return <CommonWrap>{children}</CommonWrap>;
};

export default Common;
