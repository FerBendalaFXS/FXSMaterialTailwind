import { createBrowserRouter } from 'react-router-dom'

import Root from './root'

import Error from '../pages/error'
import Contact from '../pages/contact'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />,
            },
        ],
    },
])

export default routes
