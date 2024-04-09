import React from 'react'

const OutputEnglishLevel = ({outputEnglishLevel} : any) => {
    // 一般的な必要語学レベルの提示 ex, toeic ielt
  return (
    <>
      <h2>あなたの入力値</h2>
      <span>{outputEnglishLevel}</span>
    </>
  )
}

export default OutputEnglishLevel