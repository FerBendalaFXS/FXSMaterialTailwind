import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'

const Table = ({ header, children }) => {
    return (
        <section className='bg-white rounded-xl overflow-auto p-2'>
            <table className='w-full min-w-max table-auto text-left'>
                <thead>
                    <tr>
                        {header.map((head: string, index: number) => (
                            <th
                                key={head}
                                className='cursor-pointer border-b border-blue-gray-50 p-4 transition-colors hover:bg-blue-gray-50'>
                                <Typography
                                    placeholder='Member'
                                    variant='small'
                                    color='blue-gray'
                                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'>
                                    {head}
                                    {index !== header.length - 1 && (
                                        <ChevronUpDownIcon
                                            strokeWidth={2}
                                            className='h-4 w-4'
                                        />
                                    )}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </section>
    )
}

export default Table
