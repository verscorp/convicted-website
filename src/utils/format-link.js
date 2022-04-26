import {baseURL} from "../requests/axios";

export const prepareImageLink = (link) => {
    return link.replaceAll('https://github.com/', baseURL).replace('blob', '')
}
