import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Basic Meta */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Prabhakar Technologies" />
      <meta name="robots" content="index, follow" />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* OpenGraph (WhatsApp/Facebook) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Prabhakar Technologies" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
