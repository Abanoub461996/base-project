import React, { FC } from 'react';

interface PopupProps {
	title: string;
	content: JSX.Element;
}

const Popup: FC<PopupProps> = ({ title, content }) => {
	return (
		<div className="fixed top-0 left w-screen h-screen bg-black bg-opacity-70 ">
			<div className=" bg-white rounded-lg p-4 shadow-lg">
				<div>{title}</div>
				{content}
			</div>
		</div>
	);
};

export default Popup;
