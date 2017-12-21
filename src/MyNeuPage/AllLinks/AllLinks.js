import React from 'react';

import './AllLinks.css'
import AllLinksColumn from "./AllLinksColumn";

function getDataByColumns(data) {
  const sections = {};
  for (let i = 0; i < data.links.length; i++) {
    if (data.links[i].mainSection) {
      sections[data.links[i].mainSection] = sections[data.links[i].mainSection] ? sections[data.links[i].mainSection] : [];
      sections[data.links[i].mainSection].push(data.links[i])
    }
  }

  function sectionTitleToData(title) {
    return {"title": title, "links": sections[title]};
  }

  return [data.allLinksSections.left.map(sectionTitleToData),
          data.allLinksSections.center.map(sectionTitleToData),
          data.allLinksSections.right.map(sectionTitleToData)];
}

export default function AllLinks(props) {
  const colData = getDataByColumns(props.data);
  return (
    <div className="allLinks">
      <AllLinksColumn data={colData[0]}/>
      <AllLinksColumn data={colData[1]}/>
      <AllLinksColumn data={colData[2]}/>
    </div>);
}