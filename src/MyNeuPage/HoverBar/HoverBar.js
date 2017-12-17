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

export default function HoverBar(props) {
  const hoverBarElements = props.data.map(parseHoverBarElement);
  return (
    <div className="hoverBar">
      {hoverBarElements}
    </div>
  )
}