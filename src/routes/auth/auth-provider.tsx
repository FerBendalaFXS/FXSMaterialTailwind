import { useEffect, useMemo, ReactNode, FC } from 'react'

import { useLocalState } from '../../hooks/use-states'

import { AuthContext } from './auth-context'
import { decodeJWT } from '../../utils/jwt-decoder.util'

interface AuthProviderProps {
    children: ReactNode
    newToken: string | null
}

const AuthProvider: FC<AuthProviderProps> = ({ children, newToken }) => {
    const [token, setToken] = useLocalState('token', null)
    const [user, setUser] = useLocalState('user', {})

    useEffect(() => {
        if (newToken && token !== newToken) {
            setToken(newToken)
            setUser(decodeJWT(newToken))
        }
    }, [token, setToken, newToken, user, setUser])

    const contextValue = useMemo(() => ({ token, setToken }), [token, setToken])

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export { AuthProvider }
