import React from 'react';

import './TimeSensitiveFeaturedLinks.css';
import clock_icon from './clock.svg';

// This isn't truly constant, but since time moves soooo slow, we can consider it constant for the page load.
const now = new Date();
const nowDateNum = (now.getMonth() + 1) + (now.getDate() / 100);
// const nowDateNum = 12.20; // FOR TESTING fixme

function createFeaturedLinkElement(e) {
  return <li><a href={e.href}>{e.title}</a></li>
}

// Returns true if c is between a and b mod n
// Inclusive Inclusive
function isBetween(a,b,c,n){
  return (
    ((c % n) >= (a % n)) && ((c % n) <= (b % n)) ||
    ((a % n) >= (b % n)) && ((c % n) <= (b % n)) ||
    ((a % n) >= (b % n)) && ((c % n) >= (a % n))
  );
}

function isNow(timeRange) {
  const start = timeRange.from[0] + (timeRange.from[1] / 100);
  const end = timeRange.to[0] + (timeRange.to[1] / 100);
  return isBetween(start, end, nowDateNum, 12);
}

function getCurrentFeaturedLinks(data) {
  return data.links.filter(function(link){
    return link.featuredTimes && link.featuredTimes.some(isNow);
  })
}

export default function TimeSensitiveFeaturedLinks(props) {
  const currentFeaturedLinks = getCurrentFeaturedLinks(props.data);
  if (currentFeaturedLinks.length !== 0) {
    return (
      <div className="timeSensitiveFeaturedLinks">
        <img src={clock_icon}/>
        <div>
          <ul>
          {currentFeaturedLinks.map(createFeaturedLinkElement)}
          </ul>
        </div>
        <span className="floatbreak">&nbsp;</span>
      </div>
    )
  } else {
    return null;
  }
}