import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from "../Footer/Footer";
import RouteNotFoundPage from "../RouteNotFoundPage/RouteNotFoundPage";
import Header from "../Header/Header";
import MyNeuPage from "../MyNeuPage/MyNeuPage";
import AboutPage from "../AboutPage/AboutPage";
import NostalgicMyNeuPage from "../NostalgicMyNeuPage/NostalgicMyNeuPage";

import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={MyNeuPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/nostalgic" component={NostalgicMyNeuPage} />
        <Route component={RouteNotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  )
}

// export default function App() {
//   return (
//     <div style={s.root}>
//       <h1 style={s.title}>BetterMyNEU</h1>
//       <Interactive
//         as="a"
//         href="https://github.com/rafrex/spa-github-pages"
//         style={s.repoLink}
//         {...s.link}
//       >https://github.com/rafrex/spa-github-pages</Interactive>
//
//       <nav style={s.breadcrumbs}>
//         <Breadcrumbs />
//       </nav>
//
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/example" component={ExampleComponent} />
//         <Route component={PageNotFound} />
//       </Switch>
//
//       <div style={s.creditLine}>
//         <Interactive
//           as="a"
//           href="http://www.rafaelpedicini.com"
//           interactiveChild
//           focus={{}}
//           touchActive={{}}
//           touchActiveTapOnly
//         >
//           Code and concept by <span {...s.childLink}>Rafael Pedicini</span>
//         </Interactive>
//       </div>
//     </div>
//   );
// }
