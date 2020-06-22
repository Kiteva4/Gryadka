const GetParamsUrlGetRequest = url => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g
    const params = {}
    let match;
    while ((match = regex.exec(event.url))) {
        params[match[1]] = match[2];
    }
    return params;
}

export default GetParamsUrlGetRequest