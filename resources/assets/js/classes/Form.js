import Errors from './Errors.js';
import Request from './Request.js'
export default class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
        this.formData = false;
    }


    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        if(this.formData){
            let data = new FormData();

            for (let property in this.originalData) {
                data.append(property, this[property]);
            }

            return data;
        }
        //else
        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }


    /**
     * Reset the form fields.
     */
    reset(excerpt = []) {
        for (let field in this.originalData) {

            if(excerpt.includes(field)){
                this[field] = this.originalData[field];
            }
            else{
                this[field] = '';
            }
        }

        this.errors.clear();
        this.formData = false;
    }

    /**
     * Send a GET request to the given URL.
     *
     *  @param {string} url
     */
    get(url){
        return this.submit('get', url);
    }
    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     * @param {bool} formRequest
     */
    post(url, formRequest = false) {
        return this.submit('post', url, formRequest);
    }


    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     * @param {bool} formRequest
     */
    put(url, formRequest = false) {
        return this.submit('put', url, formRequest);
    }


    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     * @param {bool} formRequest
     */
    patch(url, formRequest = false) {
        return this.submit('patch', url, formRequest);
    }


    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url);
    }


    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     * @param {bool} formRequest
     */
    submit(requestType, url, formRequest) {

        if(formRequest){
            this.formData = true;
        }

        let data  = this.data();
        this.errors.clear();
        return new Promise((resolve, reject) => {
           Request[requestType](url, data, this.formData)
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {

                    console.log(error.response, 'form');
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });
    }


    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        // this.reset();
    }


    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors.errors);
    }
}