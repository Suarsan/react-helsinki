import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const add = (person) => {
    const request = axios.post(`${BASE_URL}/persons`, person)
    return request.then(res => res.data)
}

const getAll = () => {
    const request = axios.get(`${BASE_URL}/persons`)
    return request.then(res => res.data)
}

const update = (person) => {
    console.dir(person)
    const request = axios.put(`${BASE_URL}/persons/${person.id}`, person)
    return request.then(res => res.data)
}

const remove = (id) => {
    const request = axios.delete(`${BASE_URL}/persons/${id}`)
    return request.then(res => res.data)
}

export default { add, getAll, update, remove }