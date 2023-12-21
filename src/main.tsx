import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Routes from './routes/routes'
import { AuthProvider } from './routes/auth/auth-provider'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { nullToken, fullToken } from './routes/auth/_token'

import { ThemeProvider } from '@material-tailwind/react'
import './index.scss'

const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider newToken={fullToken}>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
)
