const Register = () => {
	return (
		<div className='form-wrapper'>
			<div className='form-switch'>
				<p className='switch-title'>Welcome</p>
				<p>
					Already a user? <br /> Sign in to your account below.
				</p>
				<button>Sign in</button>
			</div>
			<form>
				<h1>Register</h1>
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
				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default Register
