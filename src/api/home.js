import axios from 'axios'

export default function getHomeData() {
  return axios.get('http://localhost:8022/api/home')
}
