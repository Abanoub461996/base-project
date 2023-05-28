import styled from 'styled-components';

interface ButtonStyleProps {
	color?: string;
	backgroundColor?: string;
	border?: string;
	borderColor?: string;
	borderradius?: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
	font-family: 'Manrope', sans-serif !important ;
	color: ${(props) => props.color} !important ;
	border: 1px solid ${(props) => (props.borderColor ? props.borderColor : `var(--main-color)`)} ${(props) => props.border};
	border-radius: ${(props) => props.borderradius};
	min-height: 3.3em;
`;
