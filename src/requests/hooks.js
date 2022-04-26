import { useEffect, useState } from 'react'
import baseAxios from './axios'

export function useRequest(options = {}) {
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    async function request(overrideOptions = {}, sync = false) {
        setLoading(true)

        try {
            const { data } = await baseAxios({ ...options, ...overrideOptions })
            if (!sync) setResponse(data)
            return { response: data, success: true }
        } catch (e) {
            setError(e.response || {})
            if (e.response === undefined) {
                alert('Проверьте интернет соединение')
            } else if (e.response.status >= 500) {
                alert('Ошибка сервера')
            } else if (e.response.status === 401 && e.response.data.logout) {
                alert('Нельзя')
            }

            return { error: e.response, success: false }
        } finally {
            if (!sync) setLoading(false)
        }
    }

    return { loading, request, error, response, setResponse, setError, setLoading }
}

export function useLoad(options, dependencies = []) {
    const request = useRequest({ method: 'GET', ...options })

    useEffect(() => {
        request.request()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    return request
}
