import format from './format'
import moment from 'moment'

function parseUsStat(data) {
  const [usStatRaw] = data
  return parseStat(usStatRaw)
}

function parseStat(raw) {
  return {
    kes: format.nombor(raw.positive),
    mati: format.nombor(raw.death),
    sembuh: format.nombor(raw.recovered),
    ventilator: format.nombor(raw.onVentilatorCurrently),
    hospitalised: format.nombor(raw.hospitalized),
    icu: format.nombor(raw.inIcuCurrently),
    diuji: format.nombor(raw.totalTestResults),
    updated: moment(raw.lastModified).format('LLLL'),
  }
}

function statNegeri(negeri, data) {
  const datanegeri = data.find((it) => it.state === negeri)
  return parseStat(datanegeri)
}

export default {
  statistik: parseUsStat,
  statNegeri: statNegeri,
}

/**
positive: 1382304,
negative: 8592527,
pending: 1983,
hospitalizedCurrently: 44514,
hospitalizedCumulative: 149347,
inIcuCurrently: 11445,
inIcuCumulative: 6713,
onVentilatorCurrently: 6419,
onVentilatorCumulative: 572,
recovered: 243430,
hash: "15698feae75e5eabd6dfb65d60f2799be7c5e4da",
lastModified: "2020-05-14T09:15:06.336Z",
death: 78343,
hospitalized: 149347,
total: 9976814,
totalTestResults: 9974831,
posNeg: 9974831,
notes: "NOTE: "total", "posNeg", "hospitalized" will be removed in the future."
 */
