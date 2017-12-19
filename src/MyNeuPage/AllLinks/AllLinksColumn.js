import React from 'react';
import AllLinksSection from "./AllLinksSection";

export default function AllLinksColumn(props) {
  const sections = props.data.map(e => <AllLinksSection data={e}/>);
  return (
    <div className="allLinksColumn">
      {sections}
    </div>);
}