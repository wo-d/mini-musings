import * as React from 'react';
import { HeadFC, PageProps, graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

type Frontmatter = {
  date: string;
  title: string;
  slug: string;
};

type Node = {
  frontmatter: Frontmatter;
  id: string;
  excerpt: string;
};

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

// Page query which is executed when the site is built and the result
// is passed into the component as the data prop.
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <Seo title="Blog Posts" />;
