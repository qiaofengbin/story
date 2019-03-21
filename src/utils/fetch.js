
const format = (data) => {
    let str = '';
    for (let val in data) {
        str += `${val}=${data[val]}&`
    }
    return str.slice(0, -1);
}
// format({name:'zs',age:12})
const ajaxCallback = {
    afterEach: () => { },
    beforeEach: () => { },
    successEach: () => { },
    errorEach: () => { },
}
const Fetch = (config) => {
    let options = {};
    let url = config.url;
    if (config.method == 'get') {
        options = {
            method: config.method
        }
        url += `?${format(config.data)}`
    }else {
        options = config.data instanceof FormData ?{
            method: config.method,
            body: config.data,
            credentials: 'include',
            
        } : {
            method: config.method,
            body: JSON.stringify(config.data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
    ajaxCallback.beforeEach()
    return fetch(url, options).then(async (res) => {
        ajaxCallback.afterEach()
        // const reader = res.body.getReader();
        // let bytesReceived = 0;
        // reader.read().then(function processResult(result){
        //     console.log(result)
        // })
        try {
            if (res.ok) {
                ajaxCallback.successEach()
                return res.json()
            }
            const data = await res.json();
            ajaxCallback.errorEach(new Error(data.msg))
        } catch (e) {
            if (res.status < 500) {
                return Promise.reject(new Error(data.msg))
            }
            return Promise.reject(new Error('服务器繁忙，请稍后再试'))
        }
    })
}
export default {
    ajaxCallback,
    get(url = '', data = {}) {
        return Fetch({
            method: 'get',
            url,
            data
        })
    },
    post(url = '', data = {}) {
        return Fetch({
            method: 'post',
            url,
            data
        })
    },
}