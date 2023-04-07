// ** Icons Imports
import { Award, CheckCircle } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

const CardCongratulations = () => {
  return (
    <Card className='card-congratulations'>
      <CardBody className='text-center'>
        <Avatar icon={<CheckCircle size={28} />} className='shadow' color='success' size='xl' />
        <div className='text-center'>
          <h1 className='mb-1 text-white'>Bem vindo Dr John,</h1>
          <CardText className='px-2 w-100'>
            Sua fatura está disponível. <strong>57.6%</strong> a mais de pacientes atendidos desde o último período.
          </CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardCongratulations
