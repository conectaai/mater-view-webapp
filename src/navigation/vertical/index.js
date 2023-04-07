import { Circle, FileText, Home } from 'react-feather'

// ** Merge & Export
export default [
    {
      id: 'home',
      title: 'Home',
      icon: <Home size={20} />,
      navLink: '/dashboard/analytics'
    },
    {
      header: 'Relatórios'
    },
    {
      id: 'recibos',
      title: 'Recibos',
      icon: <FileText size={20} />,
      children: [
        {
          id: 'production',
          title: 'Produção Médica',
          icon: <Circle size={12} />,
          navLink: '/apps/invoice/preview'
        }
      ]
    }
]
