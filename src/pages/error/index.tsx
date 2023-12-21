import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

    const errorMessage = (error: unknown): string => {
        if (isRouteErrorResponse(error)) {
            return `${error.status} ${error.statusText}`
        } else if (error instanceof Error) {
            return error.message
        } else if (typeof error === 'string') {
            return error
        } else {
            return 'Unknown error'
        }
    }

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{errorMessage(error)}</p>
        </div>
    )
}

export default ErrorPage
