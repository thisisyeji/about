import React from 'react';
import styled from 'styled-components';

const DetailWrap = styled.div`
	display: flex;
`;

const ImgBox = styled.div`
	width: 40%;
	height: 200px;
	background: #efefef;
	margin-right: 10px;
`;

const Content = styled.div`
	width: 60%;
	font-weight: 200;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
		}
	}
`;

const Detail = () => {
	return (
		<DetailWrap>
			<ImgBox></ImgBox>
			<Content>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</p>

				<Skill>
					<div>
						<dt className='front'>front</dt>
						<dd>React, Styled-components</dd>
					</div>
					<div>
						<dt className='back'>back</dt>
						<dd>Spring</dd>
					</div>
				</Skill>
			</Content>
		</DetailWrap>
	);
};

export default Detail;
