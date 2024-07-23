import { LoaderCircle } from 'lucide-react'
import React from 'react'

function Loader() {
  return (
    <span className='flex flex-col items-center justify-center gap-2'>
      <LoaderCircle size={38} className='text-dark dark:text-white animate-spin' />
      <p className='text-dark dark:text-white text-3xl'>Cargando..</p>
    </span>
  )
}

export default Loader