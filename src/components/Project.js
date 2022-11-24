import React, { forwardRef } from 'react';
import styled from 'styled-components';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Detail from './Detail';

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
	height: 100vh;
	background: #efefef;
	padding: 50px;
	padding-top: 100px;
	opacity: 0;
	transition: 0.5s;

	display: flex;
	justify-content: center;
	align-items: center;

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

const Project = forwardRef((props, ref) => {
	return (
		<InfoBox ref={ref}>
			<Wrapper>
				<Title>Project</Title>
				<div className='content'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography>팀 프로젝트 - FUN편 log</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Detail />
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2a-content'
							id='panel2a-header'>
							<Typography>개인 프로젝트 - 프로젝트1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Detail />
						</AccordionDetails>
					</Accordion>
				</div>
			</Wrapper>
		</InfoBox>
	);
});
export default Project;
