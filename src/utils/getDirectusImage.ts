import appConfig from "../configs/app.config"

export const getDirectusImage = (imageId: string, width?: number, height?: number) => {
    let url = `${appConfig.requests.directusAssets}${imageId}`
    if (width && height) {
        url += `?fit=cover&width=${width}&height=${height}`
    }
    return url
}