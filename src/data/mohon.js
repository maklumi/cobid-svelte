import axios from 'axios'
import parser from './parser'

async function stats() {
  const balasan = await axios.get(
    'https://covidtracking.com/api/v1/us/current.json',
  )

  return parser.statistik(balasan.data)
}

async function statNegeri(negeri) {
  const terima = await axios(
    'https://covidtracking.com/api/v1/states/current.json',
  )
  return parser.statNegeri(negeri, terima.data)
}

export default { stats, statNegeri }
