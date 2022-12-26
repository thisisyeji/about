import React from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DetailWrap = styled.div`
	display: flex;
`;

const ImgBox = styled.div`
	width: 40%;
	margin-right: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&:hover {
		div {
			display: flex;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	img {
		width: 100%;
	}

	div {
		width: 100%;
		height: 100%;
		position: absolute;

		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: 0.5s;

		button {
			font-family: 'Alexandria', sans-serif;
			font-size: 20px;
			color: #fff;
			border: 1px solid transparent;
			border-radius: 20px;
			background-color: transparent;
			padding: 5px 15px;
			margin: 2px 0;
			cursor: pointer;
			transition: 0.5s;

			&:hover {
				border: 1px solid #fff;
			}
		}
	}
`;

const Content = styled.div`
	width: 60%;
	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	p {
		color: #444;
		line-height: 1.7;
		margin-bottom: 20px;
	}
`;

const Skill = styled.div`
	div {
		font-size: 14px;
		padding: 10px 0;

		dt {
			font-weight: 400;
			display: inline;
			border-radius: 20px;
			padding: 5px 10px;
			margin-right: 10px;

			&.front {
				color: #f38226;
				background: rgb(243, 130, 38, 0.1);
				border: 1px solid #f38226;
			}

			&.back {
				color: #4996fb;
				background: rgb(73, 150, 251, 0.1);
				border: 1px solid #4996fb;
			}
		}

		dd {
			display: inline;
			color: #444;
			line-height: 1.5;
		}
	}
`;

const ProjectList = ({
	id,
	title,
	gitHubUrl,
	siteUrl,
	role,
	desc,
	front,
	back,
}) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography>{title}</Typography>
			</AccordionSummary>

			<AccordionDetails>
				<DetailWrap>
					<ImgBox>
						<img
							src={process.env.PUBLIC_URL + `/images/project-${id}.png`}
							alt='project'
						/>
						<div>
							<button onClick={() => window.open(`${siteUrl}`, '_blank')}>
								Live site
							</button>
							<button onClick={() => window.open(`${gitHubUrl}`, '_blank')}>
								GitHub
							</button>
						</div>
					</ImgBox>
					<Content>
						<div>
							<p>{role}</p>
							<p>{desc}</p>
						</div>

						<Skill>
							<div>
								<dt className='front'>front</dt>
								<dd>{front}</dd>
							</div>
							<div>
								<dt className='back'>back</dt>
								<dd>{back}</dd>
							</div>
						</Skill>
					</Content>
				</DetailWrap>
			</AccordionDetails>
		</Accordion>
	);
};

export default ProjectList;
