import axios, { AxiosHeaders } from "axios";
import config from "config";

const readTimeout: string = config.get("axiosReadTimeout");

export class AxiosService {
    public static async invoke(url: string, invokeMethod: AxiosServiceMethods, body?: any, headers?: AxiosHeaders) {
        return await axios({
            method: invokeMethod,
            url: url,
            data: body,
            headers: headers,
            timeout: parseInt(readTimeout ?? "20000")
        })
    }
}

export enum AxiosServiceMethods {
    POST='post',
    DELETE='delete',
    GET='get',
    PATCH='patch'
}

