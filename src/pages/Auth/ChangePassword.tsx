// // Modularity
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import moment from 'moment';

// // Component
// import Input from '../../components/ReusableComponent/Input/Input';
// import { toastifyWarn } from '../../utils/toastify';

// // Images
// import successIcon from '../../assets/icons/Group 171119.png';
// import popUpIcon from '../../assets/icons/Group17.png';

// // Styles
// import { LoginConatiner } from './Auth.style';
// import Button from '../../components/ReusableComponent/Button/Button';
// import { useLocation, useNavigate } from 'react-router';
// import { resetPassword, userForgotPassword } from '../../utils/api/axiosCalls';
// import { useAppDispatch } from '../../core/hooks/hooks';
// import { resetDialogue, setDialogue } from '../../core/store/slices/dialogueSlice';

// const ChangePassword = () => {
// 	const { state } = useLocation();
// 	const navigate = useNavigate();
// 	const deadline: any = moment().add(2, 'minutes').toDate();

// 	const [minutes, setMinutes] = useState(0);
// 	const [seconds, setSeconds] = useState(0);
// 	const [stoped, setStoped] = useState(false);
// 	const [password, setPassword] = useState({
// 		email: '',
// 		password: '',
// 		password_confirmation: '',
// 		key: '',
// 	});

// 	useEffect(() => {
// 		if (state === null) {
// 			toastifyWarn('Try To Login First');
// 			window.location.href = '/login';
// 		} else {
// 			const { email } = state; // Read values passed on state
// 			setPassword((prev) => {
// 				return { ...prev, email };
// 			});
// 		}
// 	}, [state]);
// 	const { t } = useTranslation();
// 	const dispatch = useAppDispatch();

// 	const [loading, setLoading] = useState<boolean>(false);

// 	const [passwordErr, setPasswordErr] = useState<any>({
// 		password: '',
// 		password_confirmation: '',
// 		key: '',
// 	});

// 	const handellValidtaionInput = (value: any, key: string) => {
// 		let valid: boolean = true;
// 		let errMsg: string = '';
// 		if (!value || value === '') {
// 			valid = false;
// 			errMsg = `${t('Required field')}`;
// 		} else if ((key === 'password' || key === 'password_confirmation') && value.length < Number('8')) {
// 			valid = false;
// 			errMsg = `Minimum Password Length is 8`;
// 		} else if ((key === 'password' || key === 'password_confirmation') && value.length > Number('20')) {
// 			valid = false;
// 			errMsg = `Maximum Password Length is 20`;
// 		} else if (key === 'password_confirmation' && value !== password.password) {
// 			valid = false;
// 			errMsg = `${t('confirmPass')}`;
// 		}

// 		return { valid, errMsg };
// 	};

// 	const handellValidtaionInputs = (obj: object) => {
// 		let validInput: any[] = [];
// 		let err: { email: string; password: string } = {
// 			email: '',
// 			password: '',
// 		};

// 		for (const key in obj) {
// 			const element = obj[key];
// 			const { valid, errMsg } = handellValidtaionInput(element, key);
// 			validInput.push(valid);
// 			err[key] = errMsg;
// 		}
// 		const validObj = validInput.every((element) => element);

// 		return { validObj, err };
// 	};

// 	const onChangeInput = (e: any) => {
// 		const { name, value } = e.target;
// 		const { errMsg } = handellValidtaionInput(value, name);
// 		setPasswordErr((prev) => ({ ...prev, [name]: errMsg }));
// 		setPassword((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handellSubmit = async () => {
// 		const { validObj, err } = handellValidtaionInputs(password);
// 		setPasswordErr(err);

// 		if (!validObj) {
// 			return;
// 		}
// 		setLoading(true);
// 		try {
// 			const res = await resetPassword(password);
// 			dispatch(
// 				setDialogue({
// 					show: true,
// 					type: 'Confirmation',
// 					acceptColor: '#65A743',
// 					textColor: '#65A743',
// 					image: successIcon,
// 					hasAction: false,
// 					title: `${t('ChangePassword')}`,
// 					text: res.message,
// 				}),
// 			);
// 			setTimeout(() => dispatch(resetDialogue()), 2500);
// 			navigate('/login');
// 		} catch (error) {}
// 		setLoading(false);
// 	};
// 	// ============================== key Timer ===================

// 	const handelTimer = async () => {
// 		const time = Date.parse(deadline) - Date.now();
// 		const { email } = state;

// 		try {
// 			const res = await userForgotPassword({ email });
// 			dispatch(
// 				setDialogue({
// 					show: true,
// 					type: 'Confirmation',
// 					acceptLabel: `${t('Logout')}`,
// 					acceptColor: '#65A743',
// 					textColor: '#65A743',
// 					image: popUpIcon,
// 					hasAction: false,
// 					title: `${t('Key Sent Successfully')}`,
// 					text: res.message,
// 				}),
// 			);

// 			setTimeout(() => dispatch(resetDialogue()), 2500);
// 			setTimeout(() => setStoped(false), 1500);

// 			getTime(time);
// 		} catch (error) {}
// 	};

// 	const getTime = (time) => {
// 		if (time >= 0) {
// 			setMinutes(Math.floor((time / 1000 / 60) % 60));
// 			setSeconds(Math.floor((time / 1000) % 60));
// 		} else {
// 			setStoped(true);
// 		}
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			if (!stoped) {
// 				const time = Date.parse(deadline) - Date.now();
// 				getTime(time);
// 			} else {
// 				return;
// 			}
// 		}, 1000);

// 		return () => clearInterval(interval);
// 	}, [stoped]);

// 	return (
// 		<LoginConatiner>
// 			<div className="partial head">
// 				<p className="Login__title">{`${t('Set New Pass')}`}</p>
// 				<p className="header">{`${t('SetPassForm')}`}</p>
// 			</div>
// 			<div className="partial inputs reset">
// 				<Input
// 					lable={`${t('Reset Key')}`}
// 					name="key"
// 					type="text"
// 					placeholder={`${t('Key')}`}
// 					value={password.key}
// 					onChange={onChangeInput}
// 					err={passwordErr.key}
// 				/>
// 				<Input
// 					lable={`${t('New Password')}`}
// 					name="password"
// 					type="password"
// 					placeholder={`${t('Password')}`}
// 					value={password.password}
// 					onChange={onChangeInput}
// 					err={passwordErr.password}
// 				/>
// 				<Input
// 					lable={`${t('Confirm Password')}`}
// 					name="password_confirmation"
// 					type="password"
// 					placeholder={`${t('Password')}`}
// 					value={password.password_confirmation}
// 					onChange={onChangeInput}
// 					err={passwordErr.password_confirmation}
// 				/>
// 				<p
// 					className={`timer ${stoped && 'primaryColor pointer'}  `}
// 					onClick={stoped ? handelTimer : undefined}
// 				>{`${minutes}:${seconds} Resend Key`}</p>
// 			</div>
// 			<Button
// 				onClick={handellSubmit}
// 				label={`${loading ? 'Loading...' : `${t('Save')}`} `}
// 				backgroundColor="#01ABC1"
// 				width="100%"
// 				rounded
// 				disabled={
// 					loading || passwordErr.newPass !== '' || passwordErr.confirmPass !== '' || password.password_confirmation === '' || password.password === ''
// 						? true
// 						: false
// 				}
// 			/>
// 			<p className="footer">{t('© 2023 all rights reserved')} </p>
// 		</LoginConatiner>
// 	);
// };

// export default ChangePassword;
