import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Title = styled.h2`
	font-size: 50px;
	font-weight: 700;
	color: #000;
	transform: translateX(-50px);
	transition: 0.5s;
`;

const InfoBox = styled.div`
	width: 100%;
	height: 100vh;
	padding: 50px;
	padding-top: 150px;
	opacity: 0;
	transition: 0.5s;

	display: flex;
	gap: 50px;

	&.on {
		opacity: 1;

		${Title} {
			transform: translateX(0);
		}
	}
`;

const SwiperStyle = styled(Swiper)`
	position: relative;
	.swiper-pagination {
		.swiper-pagination-bullet-active {
			width: 50px;
			border-radius: 10px;
			background: #333;
		}
	}
`;

const Slide = styled(SwiperSlide)`
	width: 400px;
	height: 500px;
	border: 1px solid #000;
`;

const Project = forwardRef((props, ref) => {
	return (
		<InfoBox ref={ref}>
			<Title>PROJECT</Title>
			<SwiperStyle
				modules={[Pagination, Autoplay]}
				pagination={{ clickable: true }}
				// 간격
				spaceBetween={30}
				// 오토 플레이
				autoplay={{ delay: 3000, disableOnInteraction: true }}
				// 순환
				loop={true}
				// 한번에 보여질 슬라이드 갯수
				slidesPerView={1}
				breakpoints={{
					764: {
						slidesPerView: 2,
					},
				}}>
				<Slide>Slide 1</Slide>
				<Slide>Slide 2</Slide>
				<Slide>Slide 3</Slide>
				<Slide>Slide 4</Slide>
			</SwiperStyle>
		</InfoBox>
	);
});
export default Project;
