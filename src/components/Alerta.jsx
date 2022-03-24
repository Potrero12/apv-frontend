import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600': 'from-indigo-600'} bg-gradient-to-br p-3 text-center rounded-xl uppercase text-white mb-10`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta