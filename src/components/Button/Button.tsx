import { FC, MouseEvent } from 'react';
import { ButtonStyle } from './Button.style';
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	label: string | any;
	icon?: string;
	borderradius?: number;
}


const Button: FC<ButtonProps> = ({ label, icon, borderradius }) => {
	return (
		<ButtonStyle
			className={`flex items-center bg-primary justify-center font-medium text-white transition-colors disabled:grayscale`}
			borderradius={`${borderradius}em`}
		>
			{icon && <img src={icon} alt="icon" className={label ? 'mr-1' : ''} />}
			{label}
		</ButtonStyle>
	);
};

export default Button;
