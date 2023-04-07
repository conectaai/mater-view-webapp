// ** React Imports

// ** Third Party Components
import { Users } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const SubscribersGained = () => {

  const data = {
    series: [
      {
        name: 'Subscribers',
        data: [28, 40, 36, 52, 38, 60, 55]
      }
    ],
    analyticsData: {
      subscribers: 92600
    }
  }

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color='purple'
      stats={92}
      statTitle='Pacientes novos'
      series={data.series}
      type='area'
    />
  ) : null
}

export default SubscribersGained
