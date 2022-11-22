import React, { forwardRef } from 'react';
import Common from './Common';

const Intro = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Common></Common>
		</div>
	);
});

export default Intro;
