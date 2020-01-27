const baseURL = 'http://localhost:3000/api/habits/'

export default {

  getHabits(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  putHabit(habit){
    return fetch(baseURL + habit._id, {
      method: 'PUT',
      body: JSON.stringify(habit),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  postHabit(habit){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(habit),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }

}
