import React from 'react';

import './AllLinks.css'
import AllLinksColumn from "./AllLinksColumn";

function getDataByColumns(data) {
  const col1 = [{"title":"Academic", "links": [{"title": "Blackboard", "href": "a"},{"title": "Banner", "href": "b"},{"title": "Twitter", "href": "c"}]},{"title":"Academic", "links": [{"title": "Blackboard", "href": "a"},{"title": "Banner", "href": "b"},{"title": "Twitter", "href": "c"}]},{"title":"Academic", "links": [{"title": "Blackboard", "href": "a"},{"title": "Banner", "href": "b"},{"title": "Twitter", "href": "c"}]},{"title":"Academic", "links": [{"title": "Blackboard", "href": "a"},{"title": "Banner", "href": "b"},{"title": "Twitter", "href": "c"}]}];

  return [col1, col1, col1];
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