// Modularity
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMount } from 'react-use';
import { UserCredentials } from '../../core/interfaces/userInterface';


// Components
import { userLogin } from '../../core/api/axiosCalls';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// Styles
import { LoginConatiner } from './Auth.style';
import { useTranslation } from 'react-i18next';


const ForgotPassword = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	useMount(() => {
		if (localStorage.getItem('userToken')) {
			navigate('/');
		}
	});
	const schema = yup.object({
		email: yup
			.string()
			.trim()
			.required(`${t('required_field')}`)
			.min(8, t('min_input', { key: 5, field: 'Email' }))
			.max(120, t('max_input', { key: 120, field: 'Email' }))
			.email(t('wrong_format', { field: 'Email' }))
			.matches(
				// eslint-disable-next-line no-control-regex, no-useless-escape
				/^((([a-z]|\d|[!#\$%&'\*\+\-/=\?\^_`{\|}~]|[ ])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{|}~]|[ ])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[ ])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[ ]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[ ])|(([a-z]|\d|[ ])([a-z]|\d|-|\.|_|~|[ ])*([a-z]|\d|[ ])))\.)+(([a-z]|[ ])|(([a-z]|[ ])([a-z]|\d|-|\.|_|~|[ ])*([a-z]|[ ])))$/i,
				t('wrong_format', { key: 'Email' }),
			),
		password: yup
			.string()
			.required(`${t('required_field')}`)
			.min(8, t('min_input', { key: 8, field: 'Password' }))
			.max(30, t('max_input', { key: 30, field: 'Password' })),
		// .matches(/^[a-zA-Z\u0600-\u06FF -]*$/, t('wrong_format', { field: 'Password' })),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'all',
	});

	const onSubmit = async (data: any) => {
		const credentials:UserCredentials = {
			...data,
			role:'admin'
		}
		try {
			const userData = await userLogin(credentials);
			localStorage.setItem('user', JSON.stringify(userData.user));
			localStorage.setItem('userToken', userData.access_token);


			if (userData?.user?.first_time == 1) {
				navigate('/', { state: 1 });
			} else {
				navigate('/');
			}
		} catch {
			(err) => console.log(err);
		}
	};
	const getFormErrorMessage = (name: string) => {
		return errors[`${name}`] && <p className="p-error">{JSON.stringify(errors[`${name}`]?.message).slice(1,-1)}</p>;
	};

	return (
		<LoginConatiner onSubmit={handleSubmit(onSubmit)}>
			<div className="form__header">
				<p className="form__title font-libreBaskerville">{`${t('Login')}`}</p>
				<p className="header">{`${t('LoginMsg')}`}</p>
			</div>
			<div className="form__inputs__container flex flex-col gap-5">
				<div className="form__input flex flex-col ">
					<label className={`input__label`} htmlFor="email">
						{t('field_label', { field: 'Email' })}
					</label>
					<InputText
						{...register('email')}
						type="email"
						style={{ color: '#616161', opacity: '0.71' }}
						id="email"
						placeholder={t('field_placeholder', { field: 'Email' })}
						className={`input__field ${errors[`email`] ? 'p-invalid' : ''}`}
					/>
					{getFormErrorMessage('email')}
				</div>
			</div>

			<Button
				type="submit"
				label={`${t('LoginBtn')}`}
				className="form__submit__btn p-mt-2 submit-btn bg-primary text-white w-full"
				//   disabled={isLoading ? true : false}
			></Button>
			<p className="footer">{t('© 2023 all rights reserved')} </p>
		</LoginConatiner>
	);
};

export default ForgotPassword;