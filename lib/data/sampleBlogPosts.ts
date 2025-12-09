export type BlogPost = {
  category: string;
  date: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  content: string;
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
    slug: "a-new-beginning-the-johnsons-journey",
    description:
      "Read about how the Johnsons opened their hearts and home, creating a forever family.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfq-P93Hfp1lgxIXSvcb8aEe39nqbka8SrMNX62QN0BCZcmmVs9rA0x6EyCRqoJix5-_FFDo6nXV4ofGOfR3gM_aEYa1Z-8ywHxK2jbab6JlckM7y5seXdsk4QNKcyJCQ9u9h97DkotRaea4aANcqhhW8_Ar3dRNGCuSGKm44eQaoCuofHJaoWQvlwRIR2Hb0JvZtYE0pCVhc8BacF1kJZH1fXd0xo3m9_sTFSglSjPNP-3KsFNiDSESGDTiucOVOAV3n5rekeg",
    content:
      "The Johnson family’s journey began with a simple conversation and a willingness to say yes. Over the months, they navigated trainings, home studies, and the everyday rhythm of building trust with their new son. Their home became a place of stability and celebration—where small wins mattered and routines brought comfort. Today, the Johnsons reflect on how support networks, caseworkers, and a community of other foster families helped them grow together. Their story is a reminder that love is patient, practical, and made up of daily actions.",
  },
  {
    category: "AGENCY NEWS",
    date: "Jun 2, 2024",
    title: "Program Expansion Announced",
    slug: "program-expansion-announced",
    description:
      "New homes opening across the metro area to increase access to therapeutic care.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1yBADLVWuYiPZTbYoHx-L3wshm4mPYR5RpDvorYwsugoqW3472hgkxHbSifJZOlQBEhGNTtcr_6w_plrAKUpi_-UULHGel4xsSf1DbN2_3s_HCDe1nqIrhtT4F2ND68LXmTAuabIJd6XnuHMwB67gvPKUdyWhMpD4Mv9MccztasiOn--uhqIB5dS7XPRjhbc6rPq8-vA4Ln-V_8JGon9_GpA_An8cCObrVduUHIp6j4pnluTh28EF_yoc2unhzcTywzuxVxMQul0X",
    content:
      "We are expanding our therapeutic foster care program with additional licensed homes and specialized training cohorts. The new sites will focus on person-centered supports, trauma-informed practices, and community integration. Families will receive ongoing coaching, 24/7 on-call assistance, and access to enrichment activities. This expansion is guided by youth feedback, case data, and collaboration with local partners to ensure placements are stable, safe, and culturally responsive.",
  },
  {
    category: "PARENTING TIPS",
    date: "Apr 12, 2024",
    title: "Navigating Challenging Behaviors",
    slug: "navigating-challenging-behaviors",
    description:
      "Practical strategies rooted in trauma-informed approaches for everyday moments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDYo1dthlgD2ua60ZcbAeGV4Qjmq1Wi_qpyt8wmw1rC2vYVNf5YUoaXA2TcsbBtkJYAR8w03dPtf4vsm-MmagWb4MZHqc4Zrp3qAnIfo8eTRbsFx9CoK36rkljz-MENnhrMTN0UOq2UWBnfZH1tAoPC6U11iuNDranqnIfLy5Be8yF0zSRy7cvWHZg6NhjpUBWlHtMz0WmbJbXjyxuselK4_wHh_2kbh-pPkytk2CC4kyqFXx4-aj1PLsJ-iIjRMpTKLwWPPefKQ",
    content:
      "Challenging behaviors often have understandable roots in stress, transitions, or unmet needs. Start with connection: name the feeling, offer choices, and use calm routines. Consistent expectations, visual schedules, and reset spaces can help a child regulate. After the moment passes, reflect together—what worked, what you’ll try next time. Remember to celebrate small progress and lean on your support team when you need fresh ideas or a breather.",
  },
  {
    category: "VOLUNTEER SPOTLIGHTS",
    date: "Mar 30, 2024",
    title: "Mentor Highlight: Sarah K.",
    slug: "mentor-highlight-sarah-k",
    description:
      "Celebrating dedicated volunteers who make consistent, caring connections with youth.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHxM2Ky2YquhLdRVrKCb2AHi3fiNk1fOzTAtlBNFmVbTVvs3hvAC2JenMBAyjz_EIEK1hiomIxBNOTzsQ8RvIe1--H-EPtH6xwhnaLujMNVS60Jp6ElI9AwwViyry5uWjj9I9YBqb0NN2CTfhAj6KzAfJaX1D-R5RXpj5wLgpaFmSkFDagSzh4Rm4kkv0ehpqq9bEWeDzbM9ubEaPlQNwcWxFa6uY_7xFJ0Kx10Ezkpa3p6Dt8TPf29wf5ofqDOecxo5YrDMLjlV4",
    content:
      "Sarah began mentoring with a simple goal: show up consistently. Week after week, she met for walks, homework sessions, and library visits. Over time, trust grew and goals took shape—joining a club, improving attendance, exploring career paths. Sarah’s impact isn’t about big gestures; it’s the pattern of dependable care. Her story highlights how volunteers widen the circle of support around every youth.",
  },
  {
    category: "SUCCESS STORIES",
    date: "Feb 18, 2024",
    title: "Reunification Milestone",
    slug: "reunification-milestone",
    description:
      "A family reunites after months of coordinated support and goal-focused care.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr48lpLNE_RdGD6omTOAlqjazUBPgahNgcLXMZEYu8DwJSdxLV8i4CL7hCoWBVKom0YuLWqlauxLE485Q0hN5W1qyQgD_pa21NIyWDdSInFdOQEHgAya3oKlCm0XRsfFgHTdB-TiNFX2u1x9pc3mJuxqMZxj9Viv5wGBJjGdCwqVoUJ_g6-1PXDrTakCVyanJqHwjUa0K_dMvuS_L8M1euTBSQ_xzL2O_FEbBscOdVG6t466XDwEM4knEuZ8FvfbA06b_JO7Sjzw",
    content:
      "Reunification is built on teamwork: caregivers, therapists, extended family, and the youth all working toward the same plan. This milestone reflects daily effort—regular visits, skill-building, and safe boundaries. As the family returns to living together, supports remain in place to sustain routines and resolve challenges early. The result is a stronger foundation and renewed confidence for the future.",
  },
  {
    category: "COMMUNITY",
    date: "Jan 5, 2024",
    title: "Winter Clothing Drive Recap",
    slug: "winter-clothing-drive-recap",
    description:
      "Thanks to donors and volunteers, hundreds of items reached families in need.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ8fcw1bJ22D2HpF8HYOgcS7KQQxJHXDefrUQzgVL7dnt3lMRziDof4yr2CNgFevZpdcm1t1D4gkh5OH0xfaIqmLXSICbASkbURmsgA3Kbv9pftO8uNyYgzlz28UuXlA6II1Z7WJ4FM7KUCkUi-IImuhEgaGnudK3GiK1CSECxXFtUXglRs3NeDwFwykD0Hx6fttOA64eC8qg5zvxmE0R-84v-9-evyQRp2_cvkboxTWx6arA4qwMyIgfMfoCIESvEpMXXNbq3I5Q",
    content:
      "Neighbors, businesses, and partner organizations came together to collect coats, gloves, and boots. Distribution events were hosted at community centers where families also connected to resources for housing, food, and tutoring. We’re grateful to everyone who donated and volunteered. Your contributions kept kids warm and supported caregivers during the busiest months of the year.",
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
  {
    title: "Building Stronger Communities",
    date: "Jun 10, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDYo1dthlgD2ua60ZcbAeGV4Qjmq1Wi_qpyt8wmw1rC2vYVNf5YUoaXA2TcsbBtkJYAR8w03dPtf4vsm-MmagWb4MZHqc4Zrp3qAnIfo8eTRbsFx9CoK36rkljz-MENnhrMTN0UOq2UWBnfZH1tAoPC6U11iuNDranqnIfLy5Be8yF0zSRy7cvWHZg6NhjpUBWlHtMz0WmbJbXjyxuselK4_wHh_2kbh-pPkytk2CC4kyqFXx4-aj1PLsJ-iIjRMpTKLwWPPefKQ",
    alt: "Community gathering",
  },
];
