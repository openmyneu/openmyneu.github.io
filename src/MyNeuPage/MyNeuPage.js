import React from 'react';

import HoverBar from "./HoverBar/HoverBar";
import TimeSensitiveFeaturedLinks from "./TimeSensitiveFeaturedLinks/TimeSensitiveFeaturedLinks";

var LINKS = [
  {
    "type": "section", "title": "Internet", "data":
      [
        {href:"https://www.google.com", "title": "Google"},
        {href:"https://www.facebook.com", "title": "Facebook"},
        {href:"https://my.northeastern.edu", "title": "Real myNortheastern"},
        {href:"https://www.twitter.com", "title": "Twitter"},
      ]
  },
  {
    "type": "section", "title": "Finances", "data":
      [
        {href:"https://www.google.com", "title": "FASFA"},
        {href:"https://www.facebook.com", "title": "FASFA"},
        {href:"https://my.northeastern.edu", "title": "FASFA"},
        {href:"https://www.twitter.com", "title": "FASFA"},
      ]
  },
  {
    "type": "link", "href": "https://blackboard.neu.edu", "title": "Blackboard"
  }
];

export default function MyNeuPage() {
  return (
    <div className="contentPage myNeuPage">
      <HoverBar data={LINKS} />
      <TimeSensitiveFeaturedLinks />
    </div>
  )
}