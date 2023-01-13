import * as React from 'react';
import { Link } from 'gatsby';
import { container, navLinkItem, navLinks, siteTitle } from './layout.css';
import useSiteMetadata from '../hooks/useSiteMetadata';

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
  { title: 'Blog', path: '/blog' },
];

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const metadata = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{metadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {links.map((link) => (
            <li className={navLinkItem} key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
