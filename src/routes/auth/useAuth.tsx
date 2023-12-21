import { useContext } from 'react'
import { AuthContext } from './auth-context'

const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used into an AuthProvider')
    }

    return context
}

export { useAuth }
