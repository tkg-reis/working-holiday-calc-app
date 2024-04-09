import React from 'react'

const OutputStayTime = ({outputStayTime} : any) => {
  return (
    <>
    {/* 国ごとで滞在期間は違うため選択された国の値を元にしてaiでその部分を保管したい */}
        <h2>あなたの入力値</h2>
        <span>{outputStayTime}</span>
    </>
  )
}

export default OutputStayTime