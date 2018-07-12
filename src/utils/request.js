import axios from 'axios'

function request (url, data = {}, headers = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    axios({
      method,
      headers,
      data,
      url
    }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function get (url, data, headers) {
  return request(url, data, headers, 'get')
}

export function post (url, data, headers) {
  return request(url, data, headers, 'post')
}
