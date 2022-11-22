import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import axios from 'axios';

const Title = styled.h2`
	color: #fff;
	font-size: 50px;
	font-weight: 700;
	margin-bottom: 30px;

	opacity: 0;
	transform: translateY(-50px);
	transition: 0.5s;
`;

const Desc = styled.p`
	color: #fff;
	font-size: 24px;
	margin-bottom: 30px;
	padding: 10px;

	span {
		cursor: pointer;
		transition: 0.5s;
		border: 1px solid #fff;
		border-radius: 30px;
		padding: 10px 15px;
		margin-right: 5px;

		&:hover {
			background: ghostwhite;
			color: #222;
		}
	}
`;

const Contents = styled.div`
	width: 100%;
	height: 80%;
	overflow: scroll;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;

	.img {
		width: calc((100% - 20px) / 3);

		img {
			width: 100%;
		}
	}
`;

const ImgWrap = styled.div`
	width: 100%;
	height: 200vh;
	padding: 150px 30px;
	background: #222;

	&.on {
		${Title} {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Images = forwardRef((props, ref) => {
	const [like, setLike] = useState('dog');
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const api = process.env.REACT_APP_API_KEY;

	const likeSearch = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(
				`https://api.unsplash.com/search/photos?page=1&query=${like}&client_id=${api}`
			);
			setResult(res.data.results);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		likeSearch();
	}, [like]);

	return (
		<ImgWrap ref={ref}>
			<Title>TMI</Title>
			<Desc>
				<span onClick={() => setLike('dog')}>동물🐶</span>
				<span onClick={() => setLike('travel')}>여행✈️</span>
				<span onClick={() => setLike('sea')}>바다🏖</span> 를 좋아해요.
			</Desc>
			<Contents>
				{isLoading ? (
					'Loading...'
				) : (
					<Masonry columns={3} spacing={2}>
						{result.map((it, idx) => (
							<div className='img' key={idx}>
								<img src={it.urls.regular} alt={it.id} />
							</div>
						))}
					</Masonry>
				)}
			</Contents>
		</ImgWrap>
	);
});

export default Images;
