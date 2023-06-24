import React from 'react'
import { useParams } from 'react-router-dom'

// const RouteC = ({match}) => {
//   return (
//     <div>
//       Hello {match.params.fname}, how are you?
//     </div>
//   )
// }

const RouteC = () => {
    const {fname} = useParams();
    return (
      <div>
        Hello {fname}, how are you?
      </div>
    )
  }

export default RouteC
