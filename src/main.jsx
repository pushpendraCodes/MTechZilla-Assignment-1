import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="561629850492-so2g5e7svm0cobcioeqfobcpr74puia8.apps.googleusercontent.com">
  <React.StrictMode>

    <App />

  </React.StrictMode>
  </GoogleOAuthProvider>
)
