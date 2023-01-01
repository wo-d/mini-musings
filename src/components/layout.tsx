import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinkItem,
  navLinks,
  navLinkText,
} from './layout.css';

export type LayoutProps = {
  /*
  The title for the Layout
   */
  pageTitle: string;
  children: React.ReactNode;
};

type link = {
  title: string;
  path: string;
};

const links: link[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
];

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          {links.map((link) => (
            <li className={navLinkItem}>
              <Link to={link.path} className={navLinkText}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
