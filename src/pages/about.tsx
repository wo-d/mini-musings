import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Blah blah introduction stuff</p>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Me" />;
