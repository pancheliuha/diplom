export default class Request {
    /**
     * Create a new Request instance
     */
    constructor() {
        this.module = window.axios;
    }

    /**
     * Send a GET request to the given URL.
     *
     *  @param {string} url
     *  @param data
     */
    static get(url, data){
        return (new Request).send('get', url, data, false);
    }
    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     * @param {boolean} formRequest
     * @param data
     */
    static post(url, data, formRequest = false) {
        return (new Request).send('post', url, data, formRequest);
    }


    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     * @param {boolean} formRequest
     * @param data
     */
    static put(url, data, formRequest = false) {
        return (new Request).send('put', url, data, formRequest);
    }


    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     * @param {boolean} formRequest
     * @param data
     */
    static patch(url, data, formRequest = false) {
        return (new Request).send('patch', url, data, formRequest);
    }


    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    static delete(url) {
        return (new Request).send('delete', url);
    }


    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     * @param {boolean} formRequest
     * @param data
     */
    send(requestType, url, data, formRequest) {

        if(formRequest){
            this.formData = true;
        }

        let sendingData = (requestType === 'get') ? { params:data } : data;
        let config = (formRequest) ? { headers: { 'Content-Type': 'multipart/form-data' } } :  {};

        return new Promise((resolve, reject) => {
            this.module[requestType](url, sendingData, config)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    if(error.response.status === 401){
                        let event = new CustomEvent('unauthorized', { detail: 'fail' });
                        document.dispatchEvent(event);
                    }
                    reject(error);
                });
        });
    }

}