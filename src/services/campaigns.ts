const baseUrl = 'http://localhost:3000/messageLists'

const getAll = async () => {
    const request = fetch(baseUrl)
    const response = await request
    const data = await response.json()

    return data
}

const get = async (id: number) => {
    const request = fetch(`${baseUrl}/${id}`)
    const response = await request
    const data = await response.json()

    return data
}

const create = async (newObject: object) => {
    const config = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(newObject),
    }

    const response = await fetch(baseUrl, config)
    const data = await response.json()

    return data
}

const update = async (object: object, id: number) => {
    const config = {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(object),
    }

    const response = await fetch(`${baseUrl}/${id}`, config)
    const data = await response.json()

    return data
}

const remove = async (id: number) => {
    const config = { method: 'DELETE' }

    const response = await fetch(`${baseUrl}/${id}`, config)
    const data = await response.json()

    return data
}

export { getAll, get, create, update, remove }
