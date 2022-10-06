import axios from 'axios'

export default function getHomeData() {
  return axios.get('/api/home')
}
