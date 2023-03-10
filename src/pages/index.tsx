import * as React from 'react';
import { PageProps, HeadFC } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hail and well met traveler!</p>
      <StaticImage
        alt="Hail and well met traveler!"
        src="../images/hail-traveler.jpg"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
