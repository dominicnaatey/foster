import Image from "next/image";

const posts = [
  {
    title: "A Day in the Life of a Foster Parent",
    text: "Discover the daily joys and challenges...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoaQ-5PuBLrHTOmEwVmopGTyJh02gzykZT3pN7CWkgx46u4HhWHOwqVJTDSqFjpbLWOVm0b76CoHLHZTCdh0pF_7w_T-IARpT1UzMpb8OnP0vClLc3Jr9ooeGP7wWPn9joFXERVgVWARNJGDI3uU0e_EHmaxO0Tej2YVU3VGfecKPecGZ_UMFKQmcI3gQ5YQvdjyfVBsSEBBpHjLUTPV-hHFLL10npjPqH6BhU9wsPdbLzlq3YVuddlO-NH1_BTdAjPwm5L5B-Jg",
  },
  {
    title: "Tips for New Foster Families",
    text: "Feeling nervous? Here are five essential tips...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUBmvanOl63ThXAN6mk3lBpGtz7HXWyQVhHFotMFqbc_AdhMI_xYfg0ti1I3hF_w3mDtM_bBpYK_ymAVlBVtwbEzf_AmGy9Ymd4fLEhqKjExspsz2fB69CSCFabXYgEWIV-W1EOO_AfmEATy55YRyEBSAQWBKFN9762RIAnwU7udAi3YgxQkxKhkwhAP9-KJGdzdupyAuVrqs9Khi7NZvTFLZBNu8hMPt451dfwmKQE69sy8RfzzjLZxnjCeUBmUiEhDKMq2Rw0g",
  },
  {
    title: "Community Support Stories",
    text: "Learn how volunteers make a real difference...",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zkElBqVB7emC4jy9wtY8YDjblh-DOOv7OAR4EUq8_y-fAZyFeUh3Sw2RsH3UXtsvn895TT5SgWeW_wFjFMT-yareD4p2EOPDHynkyIOIV2vOqv3oIN1IUBUb10sN8PvLR_rtYBNb9CcRGdc0-QGpS6x4oh9vnj0CjY9JcvR9cY8jaXebxQkPoWMaXu53oSH2HAxBgtzD1ficcAvrxOuXilrQVIkDPRfXWmjEdw9umEsWEzfPasXcn__hoQp7JioX__GhT39u4g",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
          <p className="mt-4 text-gray-600">Get insights and stories from foster families and experts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md border">
              <Image src={post.img} alt={post.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col grow">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2 grow">{post.text}</p>
                <a className="font-bold text-sm text-primary hover:underline mt-4">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
