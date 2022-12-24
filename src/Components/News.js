import React, { useEffect } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { useState } from 'react';
export default function News() {
  let page = 1
  let results_per_page = 6
  let number_of_pages = 1
  let default_loading = false
  let articles = [
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Shanghai asks residents to stay in on Christmas as China COVID surges - Reuters",
    "description": "Shanghai authorities urged residents to stay at home this weekend, seeking a toned-down Christmas in the nation's most populous city as COVID-19 rages nationwide after tough curbs were lifted.",
    "url": "https://www.reuters.com/world/china/china-reports-zero-new-covid-deaths-dec-23-same-previous-day-2022-12-24/",
    "urlToImage": "https://www.reuters.com/resizer/fO3lkvfc1_XwRxb1b3JUCFVIRCM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J7HVR4K7EZLIXA6SUAO4GUKR5A.jpg",
    "publishedAt": "2022-12-24T08:18:00Z",
    "content": "SHANGHAI, Dec 24 (Reuters) - Shanghai authorities urged residents to stay at home this weekend, seeking a toned-down Christmas in the nation's most populous city as COVID-19 rages nationwide after to… [+3019 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Samantha Pell",
    "title": "Alex Ovechkin scores 802nd goal, passing Gordie Howe for second all-time - The Washington Post",
    "description": "Ovechkin scores twice in a 4-1 win over the Winnipeg Jets at Capital One Arena. No. 802 comes on an empty net.",
    "url": "https://www.washingtonpost.com/sports/2022/12/23/alex-ovechkin-802-goals/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTMFEOEMGBACVK4F5AVXX7AEGQ.jpg&w=1440",
    "publishedAt": "2022-12-24T05:49:00Z",
    "content": "Comment on this story\r\nAlex Ovechkin took the next step in his pursuit of hockey history Friday night, scoring his 801st and 802nd career goals to pass Gordie Howe for No. 2 on the NHLs all-time list… [+6612 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "Andrew Dalton",
    "title": "LA jury convicts Tory Lanez of shooting Megan Thee Stallion - The Associated Press",
    "description": "LOS ANGELES (AP) — In a courtroom that turned chaotic after a trial that seethed with tension, a Los Angeles jury on Friday found rapper Tory Lanez guilty of three felonies in the 2020 shooting of hip-hop star Megan Thee Stallion .",
    "url": "https://apnews.com/article/entertainment-megan-thee-stallion-tory-lanez-92e6ac82c072da5e17feaf0c3ca5b1d5",
    "urlToImage": "https://storage.googleapis.com/afs-prod/media/eb19171223754410885ead3ac84cfcf8/3000.webp",
    "publishedAt": "2022-12-24T05:00:42Z",
    "content": "LOS ANGELES (AP) In a courtroom that turned chaotic after a trial that seethed with tension, a Los Angeles jury on Friday found rapper Tory Lanez guilty of three felonies in the 2020 shooting of hip-… [+4469 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WRAL.com"
    },
    "author": "Aaron Thomas, Ryan Bisesi, Heather Leah",
    "title": "Thousands in Triangle still without power as temperatures plunge overnight - WRAL News",
    "description": "More than 200,000 were without power in North Carolina on Friday morning as strong winds pushed over trees, and in one case, blew down power poles.",
    "url": "https://www.wral.com/25-000-without-power-in-wake-arctic-blast-moves-in/20642042/",
    "urlToImage": "https://wwwcache.wral.com/asset/news/local/2022/12/23/20642882/491604-aaron-DMID1-5xcebrgjw-640x480.jpg",
    "publishedAt": "2022-12-24T04:18:34Z",
    "content": "RALEIGH, N.C. The Christmas weekend got off to a bumpy start for many in the Triangle, where outages meant lack of heat for people staying inside on a day where an arctic blast of cold air blanketed … [+3215 chars]"
    }]
  let [state , newstate] = useState(articles)
  let [currentpage , setPage]  = useState(page)
  let [current_number_of_pages , setNumberOfPages] = useState(number_of_pages)
  let [loading , setloading] = useState(default_loading)
  useEffect(()=>{
    let newsapi  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4374252f793d45d2af70c57ab61f5024&page=${currentpage}&pageSize=${results_per_page}`;
    (async ()=>{
      setloading(true)
      let data = await fetch(newsapi)
      let parsedata =await  data.json()
      let {articles} = parsedata
      setloading(false)
      newstate(articles)
      setNumberOfPages(Math.ceil(parsedata.totalResults/results_per_page))
    })();
  },[results_per_page,currentpage]);

  const handlePreviousClick = async() =>{
    console.log("previious")
    currentpage = currentpage -1
    setloading(true)
    setPage(currentpage)
    let newsapi  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4374252f793d45d2af70c57ab61f5024&page=${currentpage}&pageSize=${results_per_page}`;
    let data = await fetch(newsapi)
    let parsedata =await  data.json()
    let {articles} = parsedata
    setloading(false)
    newstate(articles)
    
  }
  const handleNextClick = async() =>{
       console.log("Next")
      currentpage = currentpage +1
      setloading(true)
      setPage(currentpage)
      let newsapi  = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4374252f793d45d2af70c57ab61f5024&page=${currentpage}&pageSize=${results_per_page}`;
      let data = await fetch(newsapi)
      let parsedata =await  data.json()
      let {articles} = parsedata
      setloading(false)
      newstate(articles)
    }    
  
  return (
    <div className='container my-3'>
      <h2 className='text-center'>News Keeda - Top News Feeds And Headlines</h2>
      <div className='container d-flex justify-content-between'>
      <button type='button' disabled={currentpage<=1} className='btn btn-dark' onClick={handlePreviousClick}>&larr; Previous</button>
      <button type='button' disabled={currentpage >= current_number_of_pages} className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
      </div>
      {loading && <Spinner/>}
      <div className='row'>
      {!loading && state.map((ele)=>{
      let {title , description , url , urlToImage} = ele
      return <div className='col-md-4' key={url}>
        <NewsItem title = {title ? title.slice(0,53) : ""} description = {description ? description.slice(0,73) : ""} imgurl = {urlToImage} url = {url}/>
      </div>
     })}
    </div>
    </div>
  );
}
