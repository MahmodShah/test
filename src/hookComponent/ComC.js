import React, {useContext} from 'react'
import ComD from './ComD'
import { UserContext, DeliverContext } from '../App'
function ComC() {

    const user = useContext(UserContext)
    const deliver = useContext(DeliverContext)

  return (
    <div>
        {user} says {deliver}
      <ComD/>
    </div>
  )
}

export default ComC
