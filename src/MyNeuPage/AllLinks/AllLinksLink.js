import React from 'react';

export default function allLinksLink(props) {
  return (<li><a className="allLinksLink" href={props.data.href}>{props.data.title}</a></li>);
}