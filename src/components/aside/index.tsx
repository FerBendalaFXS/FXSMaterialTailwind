import { useState } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/solid'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Aside = () => {
    const [open, setOpen] = useState(0)

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value)
    }

    return (
        <Card className='h-[calc(100vh-4rem)] w-[16.25rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none'>
            <List>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? 'rotate-180' : ''
                            }`}
                        />
                    }>
                    <ListItem
                        className='p-0'
                        selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className='border-b-0 p-3'>
                            <ListItemPrefix>
                                <DocumentTextIcon className='h-5 w-5' />
                            </ListItemPrefix>
                            <Typography
                                color='blue-gray'
                                className='mr-auto font-normal'>
                                Editorial
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? 'rotate-180' : ''
                            }`}
                        />
                    }>
                    <ListItem
                        className='p-0'
                        selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className='border-b-0 p-3'>
                            <ListItemPrefix>
                                <ShoppingBagIcon className='h-5 w-5' />
                            </ListItemPrefix>
                            <Typography
                                color='blue-gray'
                                className='mr-auto font-normal'>
                                Business
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? 'rotate-180' : ''
                            }`}
                        />
                    }>
                    <ListItem
                        className='p-0'
                        selected={open === 3}>
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className='border-b-0 p-3'>
                            <ListItemPrefix>
                                <DocumentTextIcon className='h-5 w-5' />
                            </ListItemPrefix>
                            <Typography
                                color='blue-gray'
                                className='mr-auto font-normal'>
                                Management
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className='py-1'>
                        <List className='p-0'>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Payment transactions
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Users site
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Contributors
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Users
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Configuration
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Web vitas
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className='h-3 w-5'
                                    />
                                </ListItemPrefix>
                                Telegram campaigns
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>
        </Card>
    )
}

export default Aside
