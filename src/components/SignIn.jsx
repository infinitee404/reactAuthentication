import { useState } from 'react'

const SignIn = () => {
	const [isNewUser, setIsNewUser] = useState(true)

	const handleLogin = (event) => {
		event.preventDefault()
	}

	const handleRegister = (event) => {
		event.preventDefault()
	}

	return (
		<>
			<div className='form-wrapper'>
				<form
					onSubmit={handleLogin}
					className={`form-sign-in ${!isNewUser && 'fade-in-animation'}`}
				>
					<p className='form-title'>Sign in</p>
					<div className='input-group'>
						<input
							type='email'
							placeholder='Email address'
						/>
						<input
							type='password'
							placeholder='Password'
						/>
					</div>
					<a href='/'>Forgot your password?</a>
					<button type='submit'>Sign in</button>
				</form>
				<form
					onSubmit={handleRegister}
					className={`form-register ${isNewUser && 'fade-in-animation'}`}
				>
					<p className='form-title'>Register</p>
					<div className='input-group'>
						<input
							type='email'
							placeholder='Email address'
						/>
						<input
							type='password'
							placeholder='Password'
						/>
						<input
							type='password'
							placeholder='Confirm Password'
						/>
					</div>
					<button type='submit'>Register</button>
				</form>
				<div className={`form-switch ${isNewUser && 'newUser'}`}>
					<p className='switch-title'>{isNewUser ? 'Welcome Back' : 'Hello! Welcome'}</p>
					{isNewUser ? (
						<p className='switch-description'>
							Already a user? <br />
							Sign in to your account below.
						</p>
					) : (
						<p className='switch-description'>
							New here? <br />
							Create account and get started.
						</p>
					)}
					<button onClick={() => setIsNewUser((prevState) => !prevState)}>{isNewUser ? 'Sign in' : 'Sign up'}</button>
				</div>
			</div>
		</>
	)
}

export default SignIn
