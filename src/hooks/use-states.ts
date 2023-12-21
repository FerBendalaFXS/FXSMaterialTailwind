import { useState, useEffect } from 'react'

type AnyValue = string | string[] | object | number | boolean | null | undefined

const getLocalState = (key: string, defaultValue?: AnyValue) => {
    // getting stored value
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(key)
        const initial = saved !== null ? JSON.parse(saved) : defaultValue
        return initial
    }
}

const useLocalState = (key: string, defaultValue?: AnyValue) => {
    const [value, setValue] = useState(() => {
        return getLocalState(key, defaultValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export { useLocalState }
