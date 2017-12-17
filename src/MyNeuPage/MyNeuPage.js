import React from 'react';

import './dropdownhoverbar.css'

export default function MyNeuPage() {
  return (
    <div className="contentPage myNeuPage">
      <div className="hoverBar">

        <div className="dropdown">
          <button>Internet</button>
          <div>
            <a href="https://www.google.com">Google</a>
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://my.northeastern.edu">Real myNortheastern</a>
            <a href="https://www.twitter.com">Twitter</a>
          </div>
        </div>

        <div className="dropdown">
          <button>Finances</button>
          <div>
            <a href="https://www.google.com">FASFA</a>
            <a href="https://www.facebook.com">FASFA</a>
            <a href="https://my.northeastern.edu">FASFA</a>
            <a href="https://www.twitter.com">FASFA</a>
          </div>
        </div>

        <a className="dropdownBarDirectLink" href="https://blackboard.neu.edu">Blackboard</a>

      </div>
    </div>
  )
}

/*

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2sdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</a>
    <a href="#">Link 3</a>
  </div>
</div>

 */