import React from 'react'
import Link from 'next/link'

const InputAgain = ({yourAge, } : any) => {
  return (
    <div>
        <h2>
            {yourAge != null ? `あなたは${yourAge}歳のため、ワーキングホリデーの年齢制限の対象になります。` : "" }
        </h2>
        <Link href={"/calculation/input"}>
            もう一度入力する。
        </Link>
    </div>
  )
}

export default InputAgain