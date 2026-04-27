import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.allira.io";

/**
 * Canonical URLs always use www (matches live redirects). Path follows current route.
 */
export default function SeoHead({ title, description }) {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      {description != null && description !== "" ? (
        <meta name="description" content={description} />
      ) : null}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
