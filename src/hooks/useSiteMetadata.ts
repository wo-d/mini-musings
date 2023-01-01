import { graphql, useStaticQuery } from 'gatsby';

export type siteMetadata = {
  title: string;
  description: string;
  url: string;
};

const useSiteMetadata = (): siteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  const metadata = data.site.siteMetadata;
  return {
    title: metadata.title ?? '',
    description: metadata.description ?? '',
    url: metadata.siteUrl ?? '',
  };
};

export default useSiteMetadata;
