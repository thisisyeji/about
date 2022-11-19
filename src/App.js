import { useRef } from 'react';
import Intro from './components/Intro';
import Images from './components/Images';
import Info from './components/Info';
import Nav from './components/Nav';
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


`;

function App() {
	const sectionRef = useRef([]);

	const onSectionClick = (idx) => {
		sectionRef.current[idx].scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='App'>
			<GlobalStyle />
			<Nav onSectionClick={onSectionClick} />
			<Intro ref={(el) => (sectionRef.current[0] = el)} />
			<Info ref={(el) => (sectionRef.current[1] = el)} />
			<Images ref={(el) => (sectionRef.current[2] = el)} />
		</div>
	);
}

export default App;
