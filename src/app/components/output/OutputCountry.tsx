import React from 'react'

const OutputCountry = ({outputCountry} : any) => {
    // ここで為替レートAPIを噛ませる
    // データベースが貯まり次第、国別ランキングを作っても面白そう
    
  return (
    <>
      <h2>あなたの入力値</h2>
      <span>{outputCountry}</span>
    </>
  )
}

export default OutputCountry