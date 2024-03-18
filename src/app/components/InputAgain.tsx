import React from 'react'
import Link from 'next/link'

const InputAgain = () => {
  return (
    <div>
        <h2>
            入力に誤りがあります。
        </h2>
        <Link href={"/"}>
            もう一度入力する。
        </Link>
    </div>
  )
}

export default InputAgain