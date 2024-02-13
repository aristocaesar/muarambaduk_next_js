export type NewsType = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string | TrustedHTML;
  };
  content: {
    rendered: string | TrustedHTML;
  };
  slug: string;
  featured_media: string | null;
  date: string;
  modified: string;
};
