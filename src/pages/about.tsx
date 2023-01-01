import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Blah blah introduction stuff</p>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Me</title>;
