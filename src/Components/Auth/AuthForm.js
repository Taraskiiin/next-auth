import { useState, useRef } from 'react';
import styles from '@/styles/Auth/AuthForm.module.css';

async function createUser(email, password) {
	const response = await fetch('/api/auth/signup/', {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password,
		}),
		headers: {
			'content-type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'something went wrong');
	}

	return data;
}

function AuthForm() {
	const [isLogin, setIsLogin] = useState(true);

	const inputEmailRef = useRef();
	const inputPasswordRef = useRef();

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(event) {
		event.preventDefault();

		const email = inputEmailRef?.current.value;
		const password = inputPasswordRef?.current.value;

		if (isLogin) {
		} else {
			try {
				const result = createUser(email, password);
				console.log(result);
			} catch (error) {
				console.error(error.message);
			}
		}
	}

	return (
		<section className={styles.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={styles.control}>
					<label htmlFor='email'>Your Email</label>
					<input type='email' id='email' required ref={inputEmailRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						type='password'
						id='password'
						required
						ref={inputPasswordRef}
					/>
				</div>
				<div className={styles.actions}>
					<button>{isLogin ? 'Login' : 'Create Account'}</button>
					<button
						type='button'
						className={styles.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
}

export default AuthForm;
