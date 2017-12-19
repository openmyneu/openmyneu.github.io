import React from 'react'

import './HoverBar.css'

function parseHoverBarSection(e) {
  return (<a href={e.href}>{e.title}</a>)
}

function parseHoverBarElement(e) {
  if (e.type === "section") {
    const links = e.data.map(parseHoverBarSection);
    return (<div className="dropdown">
      <button>{e.title}</button>
      <div>
        {links}
      </div>
    </div>)
  } else if (e.type === "link") {
    return (
      <a className="dropdownBarDirectLink" href={e.href}>{e.title}</a>
    )
  } else {
    console.warn("Unknown type of hoverBarElement", e);
    return null;
  }
}

function createHoverBarData(data) {
  const parsedData = {};
  data
    .links
    .filter(function(e){return e.hoverBar})
    .forEach(function(e){
      if (e.hoverBar.index !== undefined) {
        // It's a section
        parsedData[e.hoverBar.section] = parsedData[e.hoverBar.section] ? parsedData[e.hoverBar.section] : [];
        parsedData[e.hoverBar.section][parseInt(e.hoverBar.index, 10)] = {"href": e.href, "title": e.title}
      } else {
        // This is a dropdownBarDirectLink
        parsedData[e.hoverBar.section] = {"href": e.href, "title": e.title};
      }
    });

  return data.hoverBarSectionOrder.map(function(e){
    if (parsedData[e] instanceof Array) {
      return {
        "type": "section", "title": e, "data": parsedData[e]
      }
    } else {
      return {
        "type": "link", "href": parsedData[e].href, "title": parsedData[e].title
      }
    }
  })
}

export default function HoverBar(props) {
  const hoverBarData = createHoverBarData(props.data);
  const hoverBarElements = hoverBarData.map(parseHoverBarElement);
  return (
    <div className="hoverBar">
      {hoverBarElements}
    </div>
  )
}