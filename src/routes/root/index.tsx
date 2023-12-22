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
        <section className='flex flex-col h-[100vh]'>
            <Header />
            <main className='flex h-full bg-blue-gray-50'>
                <aside className='hidden lg:block h-full'>
                    <Aside />
                </aside>
                <section className='p-5 h-full w-full overflow-y-auto'>
                    <Outlet />
                </section>
            </main>
        </section>
    )
}
export default Root
