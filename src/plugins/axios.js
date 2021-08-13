import axios from 'axios'

export const client = axios.create()
export const config = {}

// ? Used in PROTOTYPES
export class Middleware {
  constructor (base = Middleware.baseURL) {
    this.config = {
      url: base,
      headers: {
        'content-type': 'application/json'
      }
    }
    // if (auth.isAuthenticated()) {
    //     this.config.headers['authorization'] = `Bearer ${auth.getToken()}`
    // }
    return this
  }
  contentType (type) {
    this.config.headers['content-type'] = type
    return this
  }
  append (url, origin = '') {
    this.config.url = origin === '' ? this.config.url + url : url
    return this
  }
  method (name) {
    this.config.method = name
    return this
  }
  params (params) {
    this.config.params = params
    return this
  }
  setData (data) {
    this.config.data = data
    return this
  }

  build () {
    return client(this.config)
  }
}

Middleware.baseURL = process.env.VUE_APP_URL