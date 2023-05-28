import styled from 'styled-components';
import loginBanner from '../../assets/images/wave.png';
import device from '../../core/GlobalDigitalStyle/BreakPoint.style';

export const Conatiner = styled.div`
	font-family: 'Manrope', sans-serif !important ;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	.authform {
		height: 100vh;
		width: 50%;
		background-color: #01abc1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loginImg {
		width: 50%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background-image: url(${loginBanner});
		padding: 200px;
		img {
			width: 365px;
			height: 434px;
		}
		@media (max-width: 1550px) {
			img {
				width: 55%;
				height: auto;
			}
			width: 50%;
			padding: 100px;
		}
		@media (max-width: 1770px) {
			img {
				width: 60%;
				height: auto;
			}
			width: 50%;
			padding: 100px;
		}
		@media ${device.screen1440} {
			padding: 50px;
			img {
				width: 50%;
				height: auto;
			}
		}
	}
`;

export const LoginConatiner = styled.form`
	height: 80vh;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2.5em;
	padding: 3.5em 3em 1.5em 3rem;
	background-color: #ffffff;
	.form__header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		.form__title {
			font-size: 2.5em;
			color: #000000;
			font-weight: 700;
		}
	}
	.form__inputs__container {
		.form__input {
			.input__field {
				min-height: 3.3em;
				border-radius: 0.5rem;
				&:hover:not(.p-invalid) {
					border-color: #2196f3;
				}
				&:focus:not(.p-invalid) {
					border-color: #2196f3;
				}
				input {
					width: 100%;
					padding-right: 3em;
				}
				i {
					top: calc(50% - 4px);
					right: 1em;
					cursor: pointer;
					svg {
						width: 1.3em;
						height: 1.3em;
					}
				}
			}
			.input__label {
				font-size: 1.125em;
				color: rgb(30, 30, 30);
				margin-bottom: 0.1em;
				margin-bottom: 1em;
				line-height: normal;
				font-weight: 700;
			}
		}
	}
	.form__submit__btn {
		border-radius: 0.5rem;
		width: 100%;
		min-height: 3.3em;
		border: none;

		&:active {
			background: var(--blue-color);
			border: none;
		}
		&:hover {
			background: var(--blue-color);
		}
		&:focus {
			box-shadow: none;
		}
	}
	.inputs {
		gap: 1.5rem;
	}
	.forget {
		margin-top: 2rem;
	}
	.reset {
		margin-top: -1.5rem;
	}
	.logoImg {
		width: 144px;
		height: auto;
		margin-bottom: 1rem;
	}
	.timer {
		margin-left: auto;
		color: #00000033;
		font-size: 1em;
		font-weight: 600;
		text-decoration: none;
		margin-top: -0.2em;
	}

	.header {
		color: #808080;
		text-align: center;
		font-size: 1em;
		text-align: left;
	}
	.forgetPass {
		margin-left: auto;
		color: #1e1e1e;
		font-size: 1.1em;
		font-weight: 600;
		text-decoration: none;
		margin-top: -0.2rem;
		margin-bottom: 1.25rem;
	}
	.footer {
		color: #808080;
		text-align: center;
		margin-top: auto;
	}
	@media (max-width: 1550px) {
		height: 85vh;
		width: 85%;
		.head {
			gap: 0.25rem;
		}
		.inputs {
			gap: 0.5rem;
		}
	}
	@media ${device.screen1440} {
		width: 85%;
		gap: 1.5rem;
		padding: 1.8rem;
		padding-bottom: 0.5rem;
		height: 85%;
		h2 {
			font-size: 1.5rem;
		}

		.head {
			gap: 0.25rem;
		}
		.inputs {
			gap: 0.5rem;
		}
	}
	@media ${device.screen1680} {
		font-size: 14px;
	}
	@media ${device.screen1280} {
		font-size: 12.8px;
	}
	@media ${device.screen1050} {
		font-size: 11px;
	}
`;
