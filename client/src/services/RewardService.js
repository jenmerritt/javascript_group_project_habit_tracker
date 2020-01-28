const baseURL = 'http://localhost:3000/api/rewards/'

export default {

  getRewards(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
