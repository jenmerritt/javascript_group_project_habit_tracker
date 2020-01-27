const baseURL = 'http://localhost:3000/api/habits'

export default {

  getHabits(){
    return fetch(baseURL)
    .then(res => res.json())
  }

}
