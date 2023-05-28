/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';
import eyeImg from '../../assets/icons/eye.svg';
import { InputContainer } from './Input.style';


interface InputProps extends React.HTMLProps<HTMLInputElement> {
	label: string | any;
	placeholder: string;
	value: string;
  err?: string | null;
}
const Input = ({  placeholder, value,label ,err}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<InputContainer>
				<button
					type="button"
					tabIndex={-1}
					onClick={() => setShowPassword(!showPassword)}
					className={classNames({
						hide: showPassword,
						eye: true,
					})}
				>
					<img src={eyeImg} alt="eye" />
				</button>
			<p className="lable">{label}</p>
			<InputText
				type={showPassword ? 'text' : 'password'}
				value={value}
				// onChange={(e) => onChange(e)}
				className={`form-control form-control-lg  ${classNames({
					'p-invalid': err,
				})}`}
				placeholder={placeholder}
			/>
			{err && <p className="p-error text-danger small ">{err}</p>}
		</InputContainer>
	);
};

export default Input;
