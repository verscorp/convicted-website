import axios from 'axios'

export const baseURL = 'https://raw.githubusercontent.com/'

const baseAxios = axios.create({
    baseURL,
    transformResponse: [
        ...axios.defaults.transformResponse,
    ],
    transformRequest: [
        ...axios.defaults.transformRequest,
    ],
})

export default baseAxios
