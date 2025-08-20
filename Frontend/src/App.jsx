import { useState } from 'react'
import MobileContainer from './components/MobileContainer'
import WelcomeScreen from './components/WelcomeScreen'
import CreateAccountScreen from './components/CreateAccountScreen'
import LoginScreen from './components/LoginScreen'
import AccountSettingsScreen from './components/AccountSettingsScreen'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome')

  const handleNavigate = (screen) => {
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />
      case 'create-account':
        return <CreateAccountScreen onNavigate={handleNavigate} />
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />
      case 'account-settings':
        return <AccountSettingsScreen onNavigate={handleNavigate} />
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />
    }
  }

  return (
    <MobileContainer>
      {renderScreen()}
    </MobileContainer>
  )
}

export default App
