import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import DarkModeSwitcher from './src/components/dark-mode-switcher';

import 'bootstrap/dist/css/bootstrap.min.css';
import { switcherContainer } from './src/styles/gatsby-browser.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <>
      <div className={switcherContainer}>
        <DarkModeSwitcher />
      </div>
      <div>{element}</div>
    </>
  );
};
