import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export interface ChildNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface ListItemNode {
  type: 'list-item';
  children: ChildNode[];
}

export interface BlockNode {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image' | 'list-item';
  level?: number;
  format?: 'ordered' | 'unordered';
  children: ChildNode[] | BlockNode[] | ListItemNode[];
  image?: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    caption: string;
  };
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: BlockNode[];
  publishedAt: string;
  featured_image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
  } | null;
  category?: string; // Assuming category might be added later or mapped
  description?: string; // Assuming description might be needed or mapped from content
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface BlogResponse {
  data: BlogPost[];
  meta: Meta;
}

/**
 * Fetch Blog Posts
 */
export async function getBlogPosts(): Promise<BlogResponse> {
  const query = qs.stringify({
    populate: {
      featured_image: {
        fields: ['url', 'alternativeText', 'width', 'height']
      },
      gallery: {
        populate: {
          image: {
            fields: ['url', 'alternativeText', 'width', 'height']
          }
        }
      }
    },
    sort: ['createdAt:desc'],
  }, {
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/blogs?${query}`, { cache: 'no-store' });
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error('Error fetching blogs:', error);
    throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Fetch Single Post by Slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      featured_image: {
        fields: ['url', 'alternativeText', 'width', 'height']
      },
      gallery: {
        populate: {
          image: {
            fields: ['url', 'alternativeText', 'width', 'height']
          }
        }
      }
    },
  }, {
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/blogs?${query}`, { cache: 'no-store' });
  
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    console.error('Error fetching blog post:', error);
    throw new Error(`Failed to fetch blog post: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const data = json.data;
  return data.length > 0 ? data[0] : null;
}
