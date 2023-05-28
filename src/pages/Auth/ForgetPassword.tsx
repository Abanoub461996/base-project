// Modularity
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { regex } from '../../utils/Regex';
import { useAppDispatch } from '../../core/hooks/hooks';

// Components
import Input from '../../components/ReusableComponent/Input/Input';
import Button from '../../components/ReusableComponent/Button/Button';

// Images
import logoImg from '../../assets/images/Repeat.png';
import successIcon from '../../assets/icons/Group 171119.png';

// Styles
import { LoginConatiner } from './Auth.style';
import { userForgotPassword } from '../../utils/api/axiosCalls';
import { resetDialogue, setDialogue } from '../../core/store/slices/dialogueSlice';

const ForgetPassword = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [email, setEmail] = useState<string>('');
	const [err, setErr] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handellValidtaionInput = (value: any, key: string) => {
		let valid: boolean = true;
		let errMsg: string = '';
		if (!value || value === '') {
			valid = false;
			errMsg = `${t('Required field')}`;
		} else if (!regex.emailRegex.test(value)) {
			valid = false;
			errMsg = `${t(`Inavlid ${key} `)}`;
		}
		return { valid, errMsg };
	};

	const onChangeInput = (e: any) => {
		const { errMsg } = handellValidtaionInput(e.target.value, e.target.name);
		setErr(errMsg);
		setEmail(e.target.value);
	};

	const handellSubmit = async () => {
		const { valid, errMsg } = handellValidtaionInput(email, 'email');
		setErr(errMsg);
		if (!valid) {
			return;
		}
		setLoading(true);
		try {
			const res = await userForgotPassword({ email });
			dispatch(
				setDialogue({
					show: true,
					type: 'Confirmation',
					acceptColor: '#65A743',
					textColor: '#65A743',
					image: successIcon,
					hasAction: false,
					title: `${t('ChangePassword')}`,
					text: res.message,
				}),
			);
			setTimeout(() => dispatch(resetDialogue()), 2500);
			navigate('/reset-password', { state: { email } });
		} catch (error) {}
		setLoading(false);
	};

	return (
		<LoginConatiner>
			<div className="partial head forget">
				<p className='Login__title'>{`${t('Reset')}`}</p>
				<p className="header">{`${t('ForgetMsg')}`}</p>
			</div>

			<div className="partial inputs">
				<Input
					lable={`${t('Email Address')}`}
					name="email"
					type="text"
					placeholder={`${t('Enter your email')}`}
					value={email}
					onChange={onChangeInput}
					err={err}
				/>
			</div>
			<Button
				onClick={handellSubmit}
				label={` ${loading ? 'Loading...' : `${t('Send')}`} `}
				backgroundColor="#01ABC1"
				width="100%"
				rounded
				disabled={loading || err || email === '' ? true : false}
			/>
			<p className="footer">{t('© 2023 all rights reserved')} </p>
		</LoginConatiner>
	);
};

export default ForgetPassword;
