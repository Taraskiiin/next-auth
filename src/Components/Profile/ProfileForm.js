import { useRef } from 'react';
import styles from '@/styles/Profile/ProfileForm.module.css';

function ProfileForm(props) {
	const inputOldPassword = useRef();
	const inputNewPassword = useRef();

	async function submitHandler(event) {
		event.preventDefault();

		const oldPassword = inputOldPassword?.current.value;
		const newPassword = inputNewPassword?.current.value;

		props.onChangePassword({
			oldPassword,
			newPassword,
		});
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.control}>
				<label htmlFor='new-password'>New Password</label>
				<input type='password' id='new-password' ref={inputNewPassword} />
			</div>
			<div className={styles.control}>
				<label htmlFor='old-password'>Old Password</label>
				<input type='password' id='old-password' ref={inputOldPassword} />
			</div>
			<div className={styles.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
}

export default ProfileForm;
