import React from 'react'
import GetNewInfo from '../components/news/GetNewInfo'
import { urls } from "@/app/libs/NewsUrlData";
import TitleAndDescription from '../components/TitleAndDescription';

const News = () => {
  return (
    <>
      <TitleAndDescription title="News" description="ワーホリ最新情報をスクレイピングで取得する予定"/>
      <div className='flex flex-wrap'>
        {
          urls.map((url, i) => {
            return (
              <GetNewInfo url={url} key={i}/>
            )
          })
        }
      </div>
    </>
  )
}

export default News