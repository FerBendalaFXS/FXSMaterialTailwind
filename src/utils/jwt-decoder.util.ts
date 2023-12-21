/**
 * Decode a JSON Web Token (JWT) and return the payload.
 *
 * @param token - The JWT to decode.
 * @returns The decoded payload, or null if the token is invalid or empty.
 */

const decodeJWT = (token: string | null): object | null => {
    if (!token) return null

    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    )

    return JSON.parse(jsonPayload)
}

export { decodeJWT }
