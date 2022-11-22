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
	const [like, setLike] = useState('dog');
	const [result, setResult] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const likeSearch = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(
				`https://api.unsplash.com/search/photos?page=1&query=${like}&client_id=Ox7dtMpFz2TuEfmOOGIcqZ1QcXhMWo-uedQ3eb-LoUY`
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
			<h2>TMI</h2>
			<p>
				<strong onClick={() => setLike('dog')}>동물</strong>을 좋아해요.🐶
			</p>
			<p>
				<strong onClick={() => setLike('travel')}>여행</strong>을 좋아해요.✈️
			</p>
			<Contents>
				{isLoading
					? 'Loading...'
					: result.map((it, idx) => (
							<div className='img' key={idx}>
								<img src={it.urls.regular} alt={it.id} />
							</div>
					  ))}
			</Contents>
			;
		</ImgWrap>
	);
});

export default Images;
