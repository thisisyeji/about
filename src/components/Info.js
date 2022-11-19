import React, { forwardRef } from 'react';
import Common from './Common';

const Info = forwardRef((props, ref) => {
	return (
		<div ref={ref}>
			<Common>Info</Common>
		</div>
	);
});
export default Info;
