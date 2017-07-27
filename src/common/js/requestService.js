import axios from 'axios'

var requestService = function (Vue) {
  Vue.prototype.$request = function (options) {
    options.headers = options.headers || {}
    options.params = options.params || {}
    axios[options.type](options.url, options).then(options.success.bind(this)).catch(options.error.bind(this))
  }
}

export { requestService }
