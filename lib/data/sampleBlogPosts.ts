export type BlogPost = {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

export type PopularPost = {
  title: string;
  date: string;
  image: string;
  alt: string;
};

export const POSTS: BlogPost[] = [
  {
    category: "SUCCESS STORIES",
    date: "May 20, 2024",
    title: "A New Beginning: The Johnson's Journey",
    description:
      "Read about how the Johnsons opened their hearts and home, creating a forever family.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfq-P93Hfp1lgxIXSvcb8aEe39nqbka8SrMNX62QN0BCZcmmVs9rA0x6EyCRqoJix5-_FFDo6nXV4ofGOfR3gM_aEYa1Z-8ywHxK2jbab6JlckM7y5seXdsk4QNKcyJCQ9u9h97DkotRaea4aANcqhhW8_Ar3dRNGCuSGKm44eQaoCuofHJaoWQvlwRIR2Hb0JvZtYE0pCVhc8BacF1kJZH1fXd0xo3m9_sTFSglSjPNP-3KsFNiDSESGDTiucOVOAV3n5rekeg",
  },
];

export const POPULAR_POSTS: PopularPost[] = [
  {
    title: "The Life-Changing Impact of Fostering",
    date: "May 1, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAL_WeDpZrAzxviVq5NHbEKT07AW88yTFphtiyhbY0q9JZBtlD7EStuHhAkovPcSYbZvcl3KqTi5iVKRYm7pBrpEf06wMQKj70-1AmE7nCGM0LIZ3L8Tm5_N8xAWcfihBGfKB3798CyTaGEl8PVWPn4_64aIkrAUWhc_SCEVqgxpYbHKrmlL_HfHgUPr8C5VxDVzJHdC75I6uAOLAqYEZoeOXkWuMVNeljf4hmYIFs8kxl_6diZyzklwsNoXehMDNCFYCKQblFXg",
    alt: "A child being carried",
  },
];
