import { Navbar } from '@material-tailwind/react'

import Menu from './components/menu'
import MenuMobile from './components/menu-mobile'
import DefaultAccordion from './components/accordion'

const App = () => {
    return (
        <>
            <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4'>
                <Menu />
                <MenuMobile />
            </Navbar>
            <DefaultAccordion />
        </>
    )
}

export default App
