import { useEffect, useState } from 'react'
import { MobileNav, Button } from '@material-tailwind/react'

const MenuMobile = () => {
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
    }, [])

    return (
        <MobileNav open={openNav}>
            <div className='flex items-center gap-x-1'>
                <Button
                    fullWidth
                    variant='text'
                    size='sm'
                    className=''>
                    <span>Log In</span>
                </Button>
                <Button
                    fullWidth
                    variant='gradient'
                    size='sm'
                    className=''>
                    <span>Sign in</span>
                </Button>
            </div>
        </MobileNav>
    )
}

export default MenuMobile
