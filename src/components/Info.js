import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Common from './Common';

const InfoBox = styled.div`
	opacity: 0;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transition: 0.5s;

	div {
		width: 50%;
		height: 200px;
		background-color: black;
		margin-bottom: 20px;
		opacity: 0;
		transform: translateX(100px);
	}

	&.on {
		opacity: 1;

		div {
			width: 50%;
			height: 200px;
			background-color: black;
			margin-bottom: 20px;
			transform: translateX(0);
			opacity: 1;

			&:nth-of-type(1) {
				background-color: red;
				transition: 0.3s 0.5s;
			}
			&:nth-of-type(2) {
				background-color: blue;
				transition: 0.5s 0.5s;
			}
		}
	}
`;

const Info = forwardRef((props, ref) => {
	return (
		<InfoBox ref={ref}>
			<Common>
				Info
				<div>box1</div>
				<div>box2</div>
			</Common>
		</InfoBox>
	);
});
export default Info;
