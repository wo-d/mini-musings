import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Blah blah introduction stuff</p>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Me" />;
