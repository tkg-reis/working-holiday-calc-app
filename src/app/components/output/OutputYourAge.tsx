import React from 'react'

const OutputYourAge = ({outputYourAge} : any) => {
  return (
    // 18~22 => お金を貯めるか親を使いましょう
    // 23~26 => ...
    // 27~31 => ...
    // 上記のように三段階にわけるかChatGPTに投げて一般論を返すロジックを作るのもあり。プロンプトを少し考える必要があり。
    // 入力データがある程度貯まってきたら、その分野の平均や中央値などもセットで出力する
    <>
      <h2>あなたの入力値</h2>
      <span>{outputYourAge}</span>
    </>
  )
}

export default OutputYourAge