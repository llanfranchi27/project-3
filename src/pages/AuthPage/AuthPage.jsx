import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

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
