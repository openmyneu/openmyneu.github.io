import blackboard from './links/blackboard.yaml';
import huskyMail from './links/huskyMail.yaml';
import registrar from './links/registrar.yaml';

import hoverBarSectionOrder from './hoverBarSectionOrder.yaml';
import allLinksSections from './allLinksSections.yaml';

const linkFiles = [blackboard, huskyMail, registrar];

const links = linkFiles.reduce((acc, val) => acc.concat(val), []);

export default {
  links,
  hoverBarSectionOrder,
  allLinksSections,
}