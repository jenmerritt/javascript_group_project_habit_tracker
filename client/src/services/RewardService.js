const baseURL = 'http://localhost:3000/api/rewards/'

export default {

  getRewards(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postReward(reward){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(reward),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}