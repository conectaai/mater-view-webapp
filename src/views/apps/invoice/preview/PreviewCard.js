// ** Reactstrap Imports
import { Card, CardBody, CardText, Row, Col, Table } from 'reactstrap'

const PreviewCard = () => {
  return (
    <Card className='invoice-preview-card'>
      <CardBody className='invoice-padding pb-0'>
        {/* Header */}
        <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
          <div>
            <div className='logo-wrapper'>
              <img className='img-fluid' src={require('@src/assets/images/logo/logo-materdei.png').default} alt='Login Cover' />
            </div>
            <CardText className='mb-25'>Relatório de produção médica</CardText>
            <CardText className='mb-25'>Honorários médicos</CardText>
            <CardText className='mb-0'>Unidade Contorno</CardText>
          </div>
          <div className='mt-md-0 mt-2'>
            <h4 className='invoice-title'>
              Competência <span className='invoice-number'>04/2023</span>
            </h4>
            <div className='invoice-date-wrapper'>
              <p className='invoice-date-title'>Início:</p>
              <p className='invoice-date'>28/03/2023</p>
            </div>
            <div className='invoice-date-wrapper'>
              <p className='invoice-date-title'>Fim:</p>
              <p className='invoice-date'>27/04/2023</p>
            </div>
          </div>
        </div>
        {/* /Header */}
      </CardBody>

      <hr className='invoice-spacing' />

      {/* Address and Contact */}
      <CardBody className='invoice-padding pt-0'>
        <Row className='invoice-spacing'>
          <Col className='p-0' xl='8'>
            <h6 className='mb-2 text-primary'>Atendimento de:</h6>
            <h6 className='mb-25'>Dr. Jordan Stevenson</h6>
            <CardText className='mb-25'>CRM 458867</CardText>
            <CardText className='mb-25'>CARDIOLOGIA</CardText>
            {/* <CardText className='mb-25'>{data.invoice.client.contact}</CardText>
            <CardText className='mb-0'>{data.invoice.client.companyEmail}</CardText> */}
          </Col>
          <Col className='p-0 mt-xl-0 mt-2' xl='4'>
            <h6 className='mb-2 text-primary'>Detalhes do pagamento:</h6>
            <table className='mb-2'>
              <tbody>
                <tr>
                  <td className='pe-1 fw-bold'>Atendimento:</td>
                  <td>
                    <span className='fw-bold'>28/03/2023</span>
                  </td>
                </tr>
                <tr>
                  <td className='pe-1'>Paciente:</td>
                  <td>Maria Clara de Jesus</td>
                </tr>
                <tr>
                  <td className='pe-1'>Tipo:</td>
                  <td>Particular</td>
                </tr>
                <tr>
                  <td className='pe-1'>Valor do repasse:</td>
                  <td>R$ 480,00</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className=' fw-bold'>Atendimento:</td>
                  <td>
                    <span className='fw-bold'>28/03/2023</span>
                  </td>
                </tr>
                <tr>
                  <td className='pe-1'>Paciente:</td>
                  <td>Maria Clara de Jesus</td>
                </tr>
                <tr>
                  <td className='pe-1'>Tipo:</td>
                  <td>Particular</td>
                </tr>
                <tr>
                  <td className='pe-1'>Valor do repasse:</td>
                  <td>R$ 480,00</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </CardBody>
      {/* /Address and Contact */}
    </Card>
  )
}

export default PreviewCard
