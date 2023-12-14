import { Outlet } from 'react-router-dom'

import Header from '../../components/header'
import Aside from '../../components/aside'

const Root = () => {
    return (
        <>
            <Header />
            <div className='bg-blue-gray-50'>
                <Aside />
                <Outlet />
            </div>
        </>
    )
}
export default Root
