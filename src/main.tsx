import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './routes'

import './index.scss'

import { ThemeProvider } from '@material-tailwind/react'

const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
)
