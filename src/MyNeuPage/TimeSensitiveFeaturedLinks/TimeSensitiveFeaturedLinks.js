import React from 'react';

import './TimeSensitiveFeaturedLinks.css';
import encircExclamation from './encircled_exclamation.svg';

function createFeaturedLinkElement(e) {
  return <a href={e.href}><h2>{e.title}</h2></a>
}

function getCurrentFeaturedLinks() {
  return [{"title": "Trace Evals", "href": "www.facebook.com"}, {"title": "I Am Here", "href": "www.google.com"}];
}

export default function TimeSensitiveFeaturedLinks() {
  const currentFeaturedLinks = getCurrentFeaturedLinks();
  if (currentFeaturedLinks) {
    return (
      <div className="timeSensitiveFeaturedLinks">
        <img src={encircExclamation}/>
        <div>
          {currentFeaturedLinks.map(createFeaturedLinkElement)}
        </div>
      </div>
    )
  } else {
    return null;
  }
}