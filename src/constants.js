export const LIST = ['Intro', 'Projects', 'Contact'];

export const PROJECT_LIST = [
	{
		id: 0,
		title: '팀 프로젝트(3명) - FUN편 log',
		gitHubUrl: 'https://github.com/Couch-Coders/12th-Fun-Pyeon-log-fe',
		siteUrl: 'https://majestic-babka-2e99ac.netlify.app/',
		role: '* 담당 역할 : 프론트엔드 - 전체 팀프로젝트의 33.3%',
		desc: 'Kakaomap Api를 활용하여 제작한 지도 기반 편의점 리뷰 웹사이트입니다. Firebase를 통한 구글 OAuth 로그인, 실제 위치 기반 지도 검색, 편의점 리스트 필터링, 리뷰 CRUD 등의 기능을 구현하였습니다.  해당 편의점의 별점과 리뷰 등을 axios를 통하여 받아오고, redux-toolkit을 활용하여 유저, 리뷰, 편의점 등 데이터 상태 및 thunk를 이용하여 비동기 처리 관리를 하였습니다. Git flow 전략과 Git PR을 통해 협업을 진행하였습니다.',
		front: 'React, TypeScript, Styled-Components, Redux-toolkit',
		back: 'Java, Spring',
	},
	{
		id: 1,
		title: '개인 프로젝트 - 트위터 클론 코딩',
		gitHubUrl: 'https://github.com/thisisyeji/kwitter',
		siteUrl: 'https://thisisyeji.github.io/kwitter',
		desc: 'Firebase를 활용하여 제작한 개인 포트폴리오용 트위터 클론 코딩 웹사이트입니다. Firebase의 인증을 활용하여 구글과 깃허브 로그인을 구현하였고 Firebase의 database를 활용하여 실시간 게시글 CRUD 등의 기능을 구현하였습니다. 반응형 웹사이트로 구현하였으며 다크/라이트 모드 변경이 가능합니다.',
		front: 'React, JavaScript, Styled-Components',
		back: '',
	},
	{
		id: 2,
		title: '개인 프로젝트 - React 기업형 웹사이트',
		gitHubUrl: 'https://github.com/thisisyeji/react_p',
		siteUrl: 'https://thisisyeji.github.io/react_p',
		desc: 'Main, About, Youtube, Gallery, Community, Location, Members 페이지로 구성된 React로 제작한 개인 포트폴리오용 기업형 웹사이트입니다. 반응형 웹사이트로 구현하였으며 LocalStorage를 이용하여 CRUD 게시판을 구현하였습니다. Youtube API, Kakao map API, Flickr API 등을 활용하였고 Redux를 활용하여 데이터 상태관리 및 Redux-saga를 활용하여 비동기 처리를 하였습니다. ',
		front: 'React, JavaScript, SCSS',
		back: '',
	},
];
