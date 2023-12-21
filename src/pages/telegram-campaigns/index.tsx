import { useEffect, useState } from 'react'
import { create, getAll, remove, update } from '../../services/campaigns'

import { Button, ButtonGroup, Card, IconButton, Typography } from '@material-tailwind/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const TelegramCampaigns = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const newData = await getAll()
        setData(newData)
    }

    const handleCreateUser = async () => {
        setLoading(true)
        const newObject = {
            username: 'ferCopy',
            password: '12345678',
        }

        await create(newObject)
        getAllUsers()
    }

    const handleUpdateUser = async (object: object, id: number) => {
        await update(object, id)
        getAllUsers()
    }

    const handleDeleteUser = async (id: number) => {
        await remove(id)
        getAllUsers()
    }

    return (
        <>
            <Typography
                placeholder='Telegram Campaigns'
                variant='h2'>
                Telegram Campaigns
            </Typography>

            <Button
                className='rounded-full'
                loading={loading}
                placeholder='Create user'
                onClick={handleCreateUser}>
                Create user
            </Button>

            <Card
                placeholder='Table'
                className='w-full'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                        <tr>
                            <td className='border-b border-blue-gray-100 p-4'>
                                <Typography
                                    placeholder='id'
                                    variant='small'
                                    color='blue-gray'
                                    className='font-bold leading-none opacity-70'>
                                    id
                                </Typography>
                            </td>
                            <td className='border-b border-blue-gray-100 p-4'>
                                <Typography
                                    placeholder='Username'
                                    variant='small'
                                    color='blue-gray'
                                    className='font-bold leading-none opacity-70'>
                                    username
                                </Typography>
                            </td>
                            <td className='border-b border-blue-gray-100 p-4'>
                                <Typography
                                    placeholder='Password'
                                    variant='small'
                                    color='blue-gray'
                                    className='font-bold leading-none opacity-70'>
                                    password
                                </Typography>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ username, password, id }, index) => {
                            const isLast = index === data.length - 1
                            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                            return (
                                <tr key={id}>
                                    <td className={classes}>
                                        <Typography
                                            placeholder='id'
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'>
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            placeholder='Username'
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'>
                                            {username}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            placeholder='Password'
                                            variant='small'
                                            color='blue-gray'
                                            className='font-normal'>
                                            {password}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <ButtonGroup
                                            placeholder='Button group'
                                            className='gap-2'>
                                            <IconButton
                                                className='rounded-full'
                                                placeholder='Update user'
                                                onClick={() =>
                                                    handleUpdateUser(
                                                        {
                                                            username: 'cambiado',
                                                            password: 'cambiado',
                                                            id,
                                                        },
                                                        id
                                                    )
                                                }>
                                                <PencilIcon className='h-4 w-4' />
                                            </IconButton>
                                            <IconButton
                                                className='rounded-full'
                                                placeholder='Update user'
                                                onClick={() => handleDeleteUser(id)}>
                                                <TrashIcon className='h-4 w-4' />
                                            </IconButton>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Card>
        </>
    )
}

export default TelegramCampaigns
