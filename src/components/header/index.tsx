import { Link } from 'react-router-dom'
import { Navbar, Typography } from '@material-tailwind/react'

import fxsLogo from '/images/logo-fxstreet.svg'

const Header = () => {
    const title = 'Log out'
    return (
        <header className='sticky top-0 z-10'>
            <Navbar className='max-w-full h-[4rem] rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-blue-gray-900 bg-opacity-100 border-none'>
                <div className='flex items-center justify-between'>
                    <Link to='/'>
                        <img
                            src={fxsLogo}
                            alt='fxstreet logo'
                        />
                    </Link>
                    <Typography
                        as='li'
                        variant='small'
                        color='white'
                        className='p-1 font-normal'>
                        <Link
                            to='/'
                            className='flex items-center'>
                            {title}
                        </Link>
                    </Typography>
                </div>
            </Navbar>
        </header>
    )
}

export default Header
