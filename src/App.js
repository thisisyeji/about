import { useRef, useEffect } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
	font-family: 'Alexandria', sans-serif;
}

menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


h2 {
	font-size: 4vw;
	font-weight: 700;
}

`;

function App() {
	const sectionRef = useRef([]);

	const onSectionClick = (idx) => {
		sectionRef.current[idx].scrollIntoView({ behavior: 'smooth' });
	};

	const handleScroll = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('on');
			} else {
				entry.target.classList.remove('on');
			}
		});
	};

	// intersection observer 옵션
	const options = {
		root: null, // 관찰 대상의 부모 요소를 지정 (기본값 null)
		rootMargin: '0px', // 관찰하는 뷰포트의 마진 지정 (기본값 0 0 0 0)
		threshold: 0.3, // 관찰 요소와 어느정도 겹쳤을 때 콜백을 수행할지 지정 (기본값 0)
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleScroll, options);
		sectionRef.current.forEach((target) => {
			observer.observe(target);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className='App'>
			<GlobalStyle />
			<Nav onSectionClick={onSectionClick} />
			<Intro ref={(el) => (sectionRef.current[0] = el)} />
			<Projects ref={(el) => (sectionRef.current[1] = el)} />
			<Contact ref={(el) => (sectionRef.current[2] = el)} />
		</div>
	);
}

export default App;
