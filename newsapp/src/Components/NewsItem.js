import React from 'react';

export default function NewsItem(props) {
  let {title , description , imgurl , url} = props

  return (
    <div className='my-4'>
      <div className="card" style={{"width": "18rem"}}>
      <img src={imgurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={url} target="_blank" rel='noreferrer' className=/*"btn btn-sm btn-primary"*/"btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
  );
}
