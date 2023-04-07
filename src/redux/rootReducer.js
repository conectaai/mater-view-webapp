// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import invoice from '@src/views/apps/invoice/store'

const rootReducer = {
  auth,
  navbar,
  layout,
  invoice
}

export default rootReducer
