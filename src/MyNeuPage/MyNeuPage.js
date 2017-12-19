import React from 'react';

import HoverBar from "./HoverBar/HoverBar";
import TimeSensitiveFeaturedLinks from "./TimeSensitiveFeaturedLinks/TimeSensitiveFeaturedLinks";
import AllLinks from "./AllLinks/AllLinks";

import data from './data.js';

export default function MyNeuPage() {
  return (
    <div className="contentPage myNeuPage">
      <HoverBar data={data} />
      <TimeSensitiveFeaturedLinks data={data} />
      <AllLinks data={data} />
    </div>
  )
}