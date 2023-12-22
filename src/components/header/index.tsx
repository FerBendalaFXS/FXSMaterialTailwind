import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Drawer, IconButton, Navbar, Typography } from '@material-tailwind/react'

import fxsLogo from '/images/logo-fxstreet.svg'
import Aside from '../aside'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            <header>
                <Navbar
                    placeholder='Header'
                    className='max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-blue-gray-900 bg-opacity-100 border-none'>
                    <div className='flex items-center justify-between'>
                        <Link to='/'>
                            <img
                                src={fxsLogo}
                                alt='fxstreet logo'
                            />
                        </Link>
                        <Typography
                            placeholder='Title'
                            as='li'
                            variant='small'
                            color='white'
                            className='p-1 font-normal hidden lg:block'>
                            <Link
                                to='/'
                                className='flex items-center'>
                                Log out
                            </Link>
                        </Typography>

                        {/* Menu */}
                        <IconButton
                            placeholder='menu'
                            variant='text'
                            size='lg'
                            color='white'
                            className='lg:hidden'
                            onClick={openDrawer}>
                            {isDrawerOpen ? (
                                <XMarkIcon className='h-8 w-8 stroke-2' />
                            ) : (
                                <Bars3Icon className='h-8 w-8 stroke-2' />
                            )}
                        </IconButton>
                    </div>
                </Navbar>
            </header>
            <Drawer
                placeholder='Drawer'
                open={isDrawerOpen}
                onClose={closeDrawer}
                className='lg:hidden'>
                <Aside />
            </Drawer>
        </>
    )
}

export default Header
