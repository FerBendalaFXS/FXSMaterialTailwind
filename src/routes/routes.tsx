import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useAuth } from './auth/useAuth'
import Root from './root'

import ErrorPage from '../pages/error'
import TelegramCampaigns from '../pages/telegram-campaigns'

const Routes = () => {
    const { token } = useAuth()

    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: 'telegram-campaigns',
                    element: <TelegramCampaigns />,
                },
            ],
        },
    ]

    const routesForNotAuthenticatedOnly = [
        {
            path: '/',
            element: <div>Home Page</div>,
        },
        {
            path: '/login',
            element: <div>Login</div>,
        },
    ]

    const routes = createBrowserRouter([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ])

    return <RouterProvider router={routes} />
}

export default Routes
