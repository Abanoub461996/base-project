import styled from 'styled-components';
import device from '../../core/GlobalDigitalStyle/BreakPoint.style';

export const InputContainer: any = styled.div`
	/* font-family: 'Manrope', sans-serif !important ; */
	display: flex;
	min-height: 6em;
	flex-direction: column;
	width: 100%;
	position: relative;
	.form-control-lg {
		font-size: 1em;
		font-weight: 600;
	}
	button.eye {
		position: absolute;
		right: 0.5125em;
		top: 3.0625em;
		width: 1.875em;
		height: 1.875em;
		padding: 0;
		cursor: pointer;
		border: 0;
		background-color: #0000;
		@media ${device.screen1440} {
			top: 3.2625em;
		}
		@media ${device.screen1280} {
			top: 3.3625em;
		}
	}
	button.eye.hide {
		::after {
			content: ' ';
			position: absolute;
			z-index: 1;
			top: 13px;
			right: 0px;
			width: 30px;
			height: 2px;
			background-color: gray;
			color: gray;
			transform: rotate(120deg);
			@media ${device.screen1280} {
				top: 10px;
				right: 0px;
				width: 21px;
				height: 2px;
			}
		}
	}
	.lable {
		font-family: 'Manrope', sans-serif !important ;
		font-size: 1.125em;
		color: #1e1e1e;
		margin-bottom: 1em;
		line-height: normal;
		font-weight: 700;
	}
`;
