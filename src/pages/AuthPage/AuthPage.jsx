import React from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
	return (
		<main>
			<h1>Sign Up</h1>
			<SignUpForm setUser={setUser} />
			<h2>Log In</h2>
			<LoginForm setUser={setUser} />
		</main>
	);
}
