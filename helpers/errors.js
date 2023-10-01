import { printError } from "../services/log.service.js"

const errorCodesMessage = {
    [401]: "Invalid token. Please update your token with -t [API_KEY]",
    [404]: "Invalid city name. Please verify your city"
}

export const handleError = (error) => {
    if (error.response) {
        const errorText = errorCodesMessage[error.response.status] || "Unknown Error"
        printError(errorText)
        return;
    }
    printError(error.message)
}