import React from 'react';

export default function NewsItem(props) {
  let {title , description , imgurl , url , postauthor , postpublished , source} = props

  return (
    <div className='my-4'>
      <div className="card">
      <img src={imgurl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <span class="badge rounded-pill text-bg-info">{source}</span>
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p class="card-text"><small class="text-muted">By author - {postauthor} on {new Date(postpublished).toDateString()}</small></p>
        <a href={url} target="_blank" rel='noreferrer' className=/*"btn btn-sm btn-primary"*/"btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
  );
}
