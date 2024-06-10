import React, { useState } from 'react'
import SignIn from './components/SignIn'

import './styles.css'

const App = () => {
	const [isSwitched, setIsSwitched] = useState(false)

	const handleSwitch = () => {
		setIsSwitched(!isSwitched)
	}

	return <SignIn />
}

export default App
