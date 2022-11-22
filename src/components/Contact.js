import React, { forwardRef } from 'react';
import styled from 'styled-components';

const ContactWrap = styled.div`
	width: 100%;
	height: 100vh;
	background: #efefef;
	padding: 50px;
	padding-top: 150px;
	box-sizing: border-box;
`;

const Contact = forwardRef((props, ref) => {
	return <ContactWrap ref={ref}></ContactWrap>;
});

export default Contact;
