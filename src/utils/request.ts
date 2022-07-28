import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export async function post(url: string, body?: any, options?: AxiosRequestConfig, log: boolean = true): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.post(url, body, options)
            .then(function (response) {
                // handle success
                if (log) console.log(`Post status ${url} : ${response.status}`.redBg())
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                if (error instanceof Error) {
                    console.log(`Post ${url} :: ${error.name} — ${error.message}`.red())
                }
                reject(error)
            })
    })
}

export async function get(url: string, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.get(url, options)
            .then(function (response: AxiosResponse) {
                // handle AxiosResponse
                console.log(`Get status ${url} : ${response.status}`.redBg())
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                if (error instanceof Error) {
                    console.log(`Get ${url} :: ${error.name} — ${error.message}`.red())
                }
                reject(error)
            })
    })
}

export async function del(url: string, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.delete(url, options)
            .then(function (response: AxiosResponse) {
                // handle success
                console.log(`Delete status ${url} : ${response.status}`.redBg())
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(`Delete ${url} :: ${error.toString()} — ${url}\nDescription : ${error?.response?.data?.error}`.red())
                reject(error)
            })
    })
}

export async function put(url: string, body: any, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.put(url, body, options)
            .then(function (response: AxiosResponse) {
                // handle success
                console.log(`Put status ${url} : ${response.status}`.redBg())
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                if (error instanceof Error) {
                    console.log(`Put ${url} :: ${error.name} — ${error.message}`.red())
                }
                reject(error)
            })
    })
}

export async function patch(url: string, body?: any, options?: AxiosRequestConfig): Promise<any> {
    return await new Promise(function (resolve, reject) {
        axios.patch(url, body, options)
            .then(function (response: AxiosResponse) {
                // handle success
                console.log(`Patch status ${url} : ${response.status}`.redBg())
                resolve(response.data)
            })
            .catch(function (error) {
                // handle error
                if (error instanceof Error) {
                    console.log(`Patch ${url} :: ${error.name} — ${error.message}`.red())
                }
                reject(error)
            })
    })
}