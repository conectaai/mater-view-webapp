// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Invoice Preview Components
import PreviewCard from './PreviewCard'

// ** Styles
import '@styles/base/pages/app-invoice.scss'

const InvoicePreview = () => {

  return (
    <div className='invoice-preview-wrapper'>
      <Row className='invoice-preview'>
        <Col xl={9} md={8} sm={12}>
          <PreviewCard />
        </Col>
      </Row>
    </div>
  )
}

export default InvoicePreview
