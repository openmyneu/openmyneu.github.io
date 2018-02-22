import React from 'react';
import moment from 'moment';

import './TimeSensitiveFeaturedLinks.css';
import clock_icon from './clock.svg';

// This isn't truly constant, but since time moves soooo slow, we can consider it constant for the page load.
const nowDateNum = moment().dayOfYear();

function createFeaturedLinkElement(e) {
  return <li><a href={e.link}>{e.title}</a></li>
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

function parseDate(dateString) {
  return moment(dateString, "MMM DD", true).dayOfYear();
}

function isNow(timeRange) {
  const start = parseDate(timeRange.from);
  const end = parseDate(timeRange.to);
  return isBetween(start, end, nowDateNum, 366);
}

function getCurrentFeaturedLinks(data) {
  return data.links.filter(link => link.featuredTimes && link.featuredTimes.some(isNow))
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