import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import './index.css'
import outputs from '../amplify_outputs.json'

Amplify.configure(outputs)

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Profiles App</h1>
      <h2>Paul Quemado</h2>
      <p>Task 5 submission screenshot</p>

      <Authenticator>
        {({ user, signOut }) => (
          <main>
            <p>You are signed in as: {user?.signInDetails?.loginId}</p>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)