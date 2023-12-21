import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'
import {
    ShoppingBagIcon,
    DocumentTextIcon,
    ChevronRightIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'

import data from './content.json'

const Aside = () => {
    console.log(data)

    const [open, setOpen] = useState(0)

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value)
    }

    return (
        <Card
            placeholder='Aside menu'
            className='w-64 min-w-[260px] p-2 shadow-xl shadow-blue-gray-900/5 rounded-none overflow-auto'>
            <List
                placeholder='Menu'
                className='min-w-0'>
                {data.map(({ section, items }, index) => (
                    <Accordion
                        placeholder='Accordion'
                        key={index}
                        open={open === index}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${
                                    open === index ? 'rotate-180' : ''
                                }`}
                            />
                        }>
                        {/* Accordion title - Header */}
                        <ListItem
                            placeholder='Accordion title'
                            className='p-0'
                            selected={open === index}>
                            <AccordionHeader
                                placeholder='Accordion title container'
                                onClick={() => handleOpen(index)}
                                className='border-b-0 p-3'>
                                {/* Icon */}
                                <ListItemPrefix placeholder='Icon'>
                                    {section === 'Business' ? (
                                        <ShoppingBagIcon className='h-4 w-4' />
                                    ) : (
                                        <DocumentTextIcon className='h-4 w-4' />
                                    )}
                                </ListItemPrefix>

                                {/* Text */}
                                <Typography
                                    placeholder='text'
                                    color='blue-gray'
                                    className='mr-auto font-normal capitalize'>
                                    {section}
                                </Typography>
                            </AccordionHeader>
                        </ListItem>

                        {/* Accordion content - Body */}
                        <AccordionBody className='py-1'>
                            <List
                                placeholder='Accordion items'
                                className='p-0 min-w-0'>
                                {items.map((item, index) => (
                                    <Link
                                        to={item.toLowerCase().replace(' ', '-')}
                                        key={index}>
                                        <ListItem placeholder='Item title'>
                                            {/* Icon */}
                                            <ListItemPrefix placeholder='Icon'>
                                                <ChevronRightIcon
                                                    strokeWidth={3}
                                                    className='h-3 w-5 capitalize'
                                                />
                                            </ListItemPrefix>

                                            {/* Text */}
                                            <Typography
                                                placeholder='text'
                                                color='blue-gray'
                                                variant='small'
                                                className='mr-auto font-normal capitalize'>
                                                {item}
                                            </Typography>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))}
            </List>
        </Card>
    )
}

export default Aside
