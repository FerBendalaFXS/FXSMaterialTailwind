import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import './index.scss'

import { ThemeProvider } from '@material-tailwind/react'

const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
