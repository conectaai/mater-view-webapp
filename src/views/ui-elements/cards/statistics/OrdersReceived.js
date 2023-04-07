// ** React Imports

// ** Third Party Components
import { Package } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const OrdersReceived = ({ kFormatter, warning }) => {

  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: [warning],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  const data = {
    series: [
      {
        name: 'Orders',
        data: [10, 15, 8, 15, 7, 12, 8]
      }
    ],
    analyticsData: {
      orders: 97500
    }
  }

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Package size={21} />}
      color='warning'
      stats={kFormatter(data.analyticsData.orders)}
      statTitle='Pacientes atendidos'
      options={options}
      series={data.series}
      type='area'
    />
  ) : null
}
export default OrdersReceived
