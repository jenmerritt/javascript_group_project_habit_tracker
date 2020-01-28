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
  },
  deleteReward(id){
    return fetch(baseURL + id,{
      method: 'DELETE'
    })
  },
  putReward(reward){
    return fetch(baseURL + reward._id, {
      method: 'PUT',
      body: JSON.stringify(reward),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }
}
