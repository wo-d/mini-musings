import * as React from 'react';
import { HeadFC } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hello and welcome to my blog! Within these pages you'll find my journey
        of the <i>Hobby</i>. Everything from painting to wargaming to who knows
        what else.
      </p>
      <p>
        I've been active in this hobby since ~2021 with my introduction being
        innocuously, painting a Kill Team. A friend had already built some Space
        Marines, and with no ulterior motive at all asked if I'd like to play.
        I've been hooked ever since. I mostly stick to 40K and have at least
        2000 points of both Drukhari and Blood Angels. I enjoy the painting side
        of things and do one off models on occasion.
      </p>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Me" />;
