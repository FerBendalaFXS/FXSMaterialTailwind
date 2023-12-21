import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

import Header from '../../components/header'
import Aside from '../../components/aside'

const Root = () => {
    const { token } = useAuth()

    if (!token) {
        return <Navigate to='/login' />
    }

    return (
        <section className='flex flex-col'>
            <Header />
            <main className='flex h-[calc(100vh-4rem)] bg-blue-gray-50'>
                <Aside />
                <section className='p-5 h-full w-full overflow-y-auto'>
                    <Outlet />
                </section>
            </main>
        </section>
    )
}
export default Root
