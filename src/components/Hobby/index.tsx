import React, { FC } from 'react';

import Heading from '../Heading';

import './index.scss';

interface IProps {}

const Hobbies: FC<IProps> = () => {
	const hobbies: string[] = [
		'Voice over',
		'Cycling',
		'Acting',
		'Swimming',
		'Presenting',
		'Dakar Rally',
		'Travelling',
	];

	return (
		<div className="skill-block">
			<Heading title="Hobbies" />
			<ul className="hobbies">
				{hobbies.map((hobby) => (
					<li key={hobby}>{ hobby }</li>
				))}
			</ul>
		</div>
	);
};
export default Hobbies;
