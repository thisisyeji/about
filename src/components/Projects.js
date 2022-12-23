import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { PROJECT_LIST } from '../constants';
import ProJectList from './ProJectList';

const Title = styled.h2`
	color: #222;
	transform: translateX(-50px);
	transition: 0.5s;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 50px;

	.content {
		transform: translateY(100px);
		transition: 0.5s;
	}
`;

const InfoBox = styled.section`
	width: 100%;
	min-height: 100vh;
	background: #efefef;
	padding: 50px;
	padding-top: 100px;
	opacity: 0;
	transition: 0.5s;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	&.on {
		opacity: 1;

		${Title} {
			transform: translateX(0);
		}

		.content {
			transform: translateY(0);
		}
	}
`;

const Projects = forwardRef((props, ref) => {
	return (
		<InfoBox ref={ref}>
			<Wrapper>
				<Title>Projects</Title>
				<div className='content'>
					{PROJECT_LIST.map((li) => {
						return <ProJectList key={li.id} {...li} />;
					})}
				</div>
			</Wrapper>
		</InfoBox>
	);
});
export default Projects;
