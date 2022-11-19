import React, { forwardRef } from 'react';
import Common from './Common';

const Images = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Common>Images</Common>
		</div>
	);
});

export default Images;
