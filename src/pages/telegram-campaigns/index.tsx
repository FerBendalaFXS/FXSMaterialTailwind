import { useEffect, useState } from 'react'
import { create, getAll, remove, update } from '../../services/campaigns'

import {
    Button,
    ButtonGroup,
    Chip,
    IconButton,
    Tooltip,
    Typography,
} from '@material-tailwind/react'
import Table from '../../components/table'
import { DocumentDuplicateIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

const TelegramCampaigns = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCampaigns()
    }, [])

    const getCampaigns = async () => {
        const newData = await getAll()
        setData(newData)
    }

    const handleDuplicateCampaign = async (object: object) => {
        const { ...newCampaign } = object
        const id = data.length + 1
        const newData = { ...newCampaign, id }

        setData([...data, newData])

        delete object.id
        await create(object)
    }

    const handleUpdateCampaign = async () => {
        console.log('update')
    }

    const handleDeleteUser = async (id: number) => {
        const updatedData = data.filter(campaign => campaign.id !== id)
        setData(updatedData)
        await remove(id)
    }

    return (
        <>
            <Typography
                placeholder='Telegram Campaigns'
                variant='h2'
                className='mb-8'>
                Telegram Campaigns
            </Typography>

            <Table header={['Name', 'Messages', 'Channel', 'Finish date', 'Start date', '']}>
                {data.map(({ listName, messages, channel, id }, index) => {
                    const isLast = index === data.length - 1
                    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                    return (
                        <tr key={index}>
                            <td className={classes}>{listName}</td>
                            <td className={classes}>{messages.length}</td>
                            <td className={classes}>
                                <Chip
                                    variant='ghost'
                                    color='green'
                                    size='lg'
                                    value={channel}
                                    className='w-fit'
                                />
                            </td>
                            <td className={classes}>{new Date().toDateString()}</td>
                            <td className={classes}>{new Date().toDateString()}</td>
                            <td className={classes}>
                                <Tooltip content='Dubplicate'>
                                    <IconButton
                                        placeholder='Duplicate Campaign'
                                        variant='text'
                                        onClick={() => handleDuplicateCampaign(data[id - 1])}>
                                        <DocumentDuplicateIcon className='h-4 w-4' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content='Edit'>
                                    <IconButton
                                        placeholder='Edit Campaign'
                                        variant='text'
                                        onClick={() => handleUpdateCampaign()}>
                                        <PencilIcon className='h-4 w-4' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content='Remove'>
                                    <IconButton
                                        placeholder='Remove Campaign'
                                        variant='text'
                                        onClick={() => handleDeleteUser(id)}>
                                        <TrashIcon className='h-4 w-4' />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    )
                })}
            </Table>
        </>
    )
}

export default TelegramCampaigns
