import axios from 'axios'
import parser from './parser'

async function stats() {
  const balasan = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json',
  )

  return parser.statistik(balasan.data)
}

export default { stats }
