import React from 'react'

const GetNewInfo = ({url}: {url :string}) => {
  return (
    <>
        <iframe className='m-6' src={url} width="500" height="500"></iframe>
    </>
  )
}

export default GetNewInfo