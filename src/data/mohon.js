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

async function sejarahHarian() {
  const balasan = await axios.get('https://covidtracking.com/api/us/daily')
  return parser.statHarian(balasan.data)
}

async function sejarahNegeri(negeri) {
  const respon = await axios.get(
    'https://covidtracking.com/api/v1/states/daily.json',
  )
  return parser.sejarahHarianNegeri(negeri, respon.data)
}

export default { stats, statNegeri, sejarahHarian, sejarahNegeri }
