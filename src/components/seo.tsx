import * as React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export type SeoProps = {
  title: string;
};

const Seo: React.FC<SeoProps> = ({ title }) => {
  const metadata = useSiteMetadata();

  return (
    <title>
      {title} | {metadata.title}
    </title>
  );
};

export default Seo;
