import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const getAll = () => {
    const request = axios.get(`${BASE_URL}/persons`)
    return request.then(res => res.data)
}

const add = (person) => {
    const request = axios.post(`${BASE_URL}/persons`, person)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${BASE_URL}/persons/${id}`)
    return request.then(res => res.data)
}

export default { getAll, add, remove }