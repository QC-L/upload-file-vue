import axios from 'axios'

var requestService = function (Vue) {
  Vue.prototype.$request = function (options) {
    options.headers = options.headers || {}
    options.params = options.params || {}
    axios[options.type](options.url, options.params).then(options.success.bind(this)).catch(options.error.bind(this))
  }

  Vue.prototype.$formData = function (options) {
    options.headers = options.headers || {}
    options.params = options.params || {}
    axios[options.type](options.url, options.data).then(options.success.bind(this)).catch(options.error.bind(this))
  }
}

export { requestService }
