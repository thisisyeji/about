import React, { forwardRef } from 'react';
import Common from './Common';

const Intro = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Common>Intro</Common>
		</div>
	);
});

export default Intro;
