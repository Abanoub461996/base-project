import React, { FC } from 'react';

import { InputText, InputTextProps } from 'primereact/inputtext';
import { InputContainer } from './Input.style';

interface PropType extends InputTextProps {
	icon?: HTMLElement;
	err?: string;
	label?: string;
}

const CustomInput: FC<PropType> = (props: PropType) => {
	const { err, label, ...remainingProps } = props;

	return (
		<div>
			<p className="lable">{label}</p>
			<InputText {...remainingProps} />
			{err && <p className="p-error text-danger small ">{err}</p>}
		</div>
	);
};

export default CustomInput;
