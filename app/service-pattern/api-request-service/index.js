import axios from "axios";
const https = require('https');

export const GET_METHOD = async (config) => {

    const baseURL = process.env.NEXT_PUBLIC_PROJECT_MODE == "production" ? process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION : process.env.NEXT_PUBLIC_BASE_URL_STAGING;

    return await axios.get(
        config.baseURL ? config.baseURL : `${baseURL}${config.URL}`,
        {
            withCredentials: true,
            params: config.params,
            headers: config.header_object ?? {},
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            // auth: {
            //     username: 'nemoblue',
            //     password: 'ApiUser@GPFi'
            // }
        }
    )
}

export const POST_METHOD = async (config) => {

    const baseURL = process.env.NEXT_PUBLIC_PROJECT_MODE == "production" ? process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION : process.env.NEXT_PUBLIC_BASE_URL_STAGING;

    return await axios.post(
        config.baseURL ? config.baseURL : `${baseURL}${config.URL}`,
        config.data,
        {
            withCredentials: true,
            params: config.params,
            headers: config.header_object ?? {},
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            // auth: {
            //     username: 'nemoblue',
            //     password: 'ApiUser@GPFi'
            // }
        }
    )
}

// export const POST_GPFI_Revamp_No_Auth = async (config) => {

//     const baseURL = process.env.NEXT_PUBLIC_PROJECT_MODE == "production" ? process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION : process.env.NEXT_PUBLIC_BASE_URL_STAGING;

//     return await axios.post(
//         config.baseURL ? config.baseURL : `${baseURL}${config.URL}`,
//         config.data,
//         {
//             withCredentials: true,
//             params: config.params,
//             headers: config.header_object ?? {},
//             httpsAgent: new https.Agent({
//                 rejectUnauthorized: false
//             }),
//         }
//     )
// }