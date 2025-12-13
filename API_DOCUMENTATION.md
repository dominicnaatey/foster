# API Documentation

This project uses Strapi v5. Below are the endpoints to access your content.

**Base URL:** `http://localhost:1337` (Development) / `https://your-production-url.com` (Production)

## 1. Blogs

### Get All Blog Posts
Retrieves a list of all blog posts.

- **Endpoint:** `GET /api/blogs`
- **Recommended Query:** Populate `featured_image` and `gallery`.

**Request:**
```http
GET /api/blogs?populate[featured_image]=*&populate[gallery][populate]=*
```

**Response Example:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "...",
      "title": "My First Post",
      "slug": "my-first-post",
      "content": [...],
      "featured_image": {
        "url": "https://pub-....r2.dev/image.jpg",
        "alternativeText": "A nice view"
      },
      "gallery": [
        {
          "id": 1,
          "caption": "Gallery Image 1",
          "image": {
            "url": "https://pub-....r2.dev/gallery1.jpg"
          }
        }
      ]
    }
  ],
  "meta": { ... }
}
```

### Get a Single Blog Post (by Slug)
Retrieves a specific post details.

- **Endpoint:** `GET /api/blogs`
- **Filter:** `filters[slug][$eq]=<your-slug>`

**Request:**
```http
GET /api/blogs?filters[slug][$eq]=my-first-post&populate[featured_image]=*&populate[gallery][populate]=*
```

---

## 2. Galleries (Standalone)

If you use the standalone Gallery content type (separate from Blogs).

### Get All Galleries
- **Endpoint:** `GET /api/galleries`

**Request:**
```http
GET /api/galleries?populate[items][populate]=*
```

**Response Example:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Event Photos",
      "slug": "event-photos",
      "items": [
        {
          "id": 1,
          "caption": "Opening Ceremony",
          "image": {
            "url": "https://pub-....r2.dev/photo1.jpg"
          }
        }
      ]
    }
  ]
}
```

---

## 3. Frontend Integration Code (JavaScript/TypeScript)

It is recommended to use the `qs` library to handle complex query strings.

**Installation:**
```bash
npm install qs
```

**Helper Function:**

```javascript
import qs from 'qs';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

/**
 * Fetch Blog Posts
 */
export async function getBlogPosts() {
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

  const res = await fetch(`${API_URL}/api/blogs?${query}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
}

/**
 * Fetch Single Post by Slug
 */
export async function getBlogPostBySlug(slug) {
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      featured_image: {
        fields: ['url', 'alternativeText']
      },
      gallery: {
        populate: {
          image: {
            fields: ['url', 'alternativeText']
          }
        }
      }
    },
  }, {
    encodeValuesOnly: true,
  });

  const res = await fetch(`${API_URL}/api/blogs?${query}`);
  const data = await res.json();
  
  // Strapi returns an array for filters, so we take the first item
  return data.data[0];
}
```

## 4. Image Handling (Cloudflare R2)

All image URLs returned by the API will be absolute URLs pointing to your Cloudflare R2 bucket public domain:

`https://pub-9f0339c143a747f4991a66d1c709f29f.r2.dev/your-image-name.jpg`

You can use these URLs directly in your `src` attributes:

```html
<img src={post.featured_image.url} alt={post.featured_image.alternativeText} />
```
