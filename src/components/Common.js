import React from 'react';
import styled from 'styled-components';

const CommonWrap = styled.section`
	width: 100vw;
	height: calc(100vh - 50px);
	margin-top: 50px;
	border: 1px solid #000;
`;

const Common = ({ children }) => {
	return <CommonWrap>{children}</CommonWrap>;
};

export default Common;
