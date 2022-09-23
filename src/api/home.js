import axios from 'axios'

export default function getHomeData() {
  return axios.get('http://localhost:8888/api/home')
}
