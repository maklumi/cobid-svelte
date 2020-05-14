import format from './format'
import moment from 'moment'

function parseStat(data) {
  const [usStatRaw] = data

  return {
    kes: format.nombor(usStatRaw.positive),
    mati: format.nombor(usStatRaw.death),
    sembuh: format.nombor(usStatRaw.recovered),
    ventilator: format.nombor(usStatRaw.onVentilatorCurrently),
    hospitalised: format.nombor(usStatRaw.hospitalized),
    icu: format.nombor(usStatRaw.inIcuCurrently),
    diuji: format.nombor(usStatRaw.totalTestResults),
    updated: moment(usStatRaw.lastModified).format('LLLL'),
  }
}

export default {
  statistik: parseStat,
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
