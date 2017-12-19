import React from 'react';
import AllLinksLink from "./AllLinksLink";

export default function allLinksSection(props) {
  const links = props.data.links.map(e => <AllLinksLink data={e}/>);
  return (
    <div className="allLinksSection">
      <h1>{props.data.title}</h1>
      <ul>
      {links}
      </ul>
    </div>);
}