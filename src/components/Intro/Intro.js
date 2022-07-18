import React from 'react';
import {AbsoluteFill, Video} from 'remotion';
import intro from '../assets/intro.mp4';

const Intro = () => {
	return (
		<AbsoluteFill>
			<Video src={intro} />
		</AbsoluteFill>
	);
};

export default Intro;
