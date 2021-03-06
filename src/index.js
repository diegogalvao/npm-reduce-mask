import React from 'react'

import { hasSelection } from './utils'
import PureInputMask from './mask-react'
import InputNumber from './simple'

const ReduceMask = (props) => {
  return hasSelection()
    ? (<PureInputMask  {...props} />)
    : (<InputNumber  {...props} />)
}

export default ReduceMask