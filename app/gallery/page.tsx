"use client";

import React from "react";
import LG from "../../components/LightGallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

export default function GalleryPage() {
  return (
    <div className="font-display bg-gray-50 text-[#0d141b] min-h-screen flex flex-col">
      <main className="flex-1 px-4 sm:px-8 md:px-20 lg:px-40 py-5 flex justify-center">
        <div className="w-full max-w-[960px]">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 sm:p-6 md:p-8">
            <div className="flex min-w-72 flex-col gap-3 text-center sm:text-left">
              <p className="text-[#0d141b] text-4xl font-black leading-tight tracking-[-0.033em]">
                Our Community in Photos
              </p>
              <p className="text-slate-500 text-base">
                Explore the moments that shape our journey and celebrate the
                connections we build every day.
              </p>
            </div>
          </div>

          <div className="columns-2 md:columns-4 gap-4 p-4">
            <LG
              selector=".gallery-item"
              plugins={[lgThumbnail]}
              thumbnail={true}
              animateThumb={true}
              thumbWidth={74}
              thumbHeight={"32"}
              appendThumbnailsTo={".lg-outer"}
              currentPagerPosition={"middle"}
              alignThumbnails={"middle"}
              exThumbImage={"data-exthumbimage"}
              appendSubHtmlTo={".lg-item"}
              allowMediaOverlap={false}
              subHtmlSelectorRelative={true}
            >
              {IMAGES.map((item, i) => (
                <a
                  key={i}
                  className="gallery-item block mb-4 break-inside-avoid rounded-xl overflow-hidden group cursor-pointer relative"
                  href={item.url}
                  data-sub-html={`#caption-${i}`}
                  data-exthumbimage={item.url}
                >
                  <img src={item.url} alt={item.title} className="hidden" />
                  <div id={`caption-${i}`} className="hidden">
                    <p className="text-white text-sm">{item.title}</p>
                  </div>
                  <div
                    className={`bg-cover bg-center rounded-xl flex flex-col justify-end p-4 ${item.aspect ?? "aspect-auto"} h-auto min-h-[200px]`}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("${item.url}")`,
                    }}
                  >
                    {/* <p className="text-white text-base font-bold leading-tight line-clamp-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                      {item.title}
                    </p> */}
                  </div>
                </a>
              ))}
            </LG>
          </div>
        </div>
      </main>
    </div>
  );
}

 

const IMAGES = [
  {
    title: "Event Celebration",
    url: "/images/gallery/5.jpg",
    aspect: "aspect-[9/16]",
    category: "Events",
  },
  {
    title: "Summer Picnic Fun",
    url: "/images/gallery/1.jpg",
    aspect: "aspect-[3/4]",
    category: "Events",
  },
  {
    title: "A Forever Family",
    url: "/images/gallery/2.jpg",
    aspect: "aspect-[4/3]",
    category: "Success Stories",
  },
  {
    title: "Our Welcoming Living Room",
    url: "/images/gallery/3.jpg",
    aspect: "aspect-[1/1]",
    category: "Our Homes",
  },
  {
    title: "Community Gathering",
    url: "/images/gallery/4.jpg",
    aspect: "aspect-[16/9]",
    category: "Community",
  },
  {
    title: "Outdoor Activity",
    url: "/images/gallery/6.jpg",
    aspect: "aspect-[3/2]",
    category: "Community",
  },
  {
    title: "Cozy Bedroom",
    url: "/images/gallery/7.jpg",
    aspect: "aspect-[2/3]",
    category: "Our Homes",
  },
  {
    title: "Community Service",
    url: "/images/gallery/8.jpg",
    aspect: "aspect-[21/9]",
    category: "Events",
  },
  {
    title: "Kitchen Area",
    url: "/images/gallery/9.jpg",
    aspect: "aspect-[5/4]",
    category: "Our Homes",
  },
  {
    title: "Success Story Portrait",
    url: "/images/gallery/10.jpg",
    aspect: "aspect-[2/3]",
    category: "Success Stories",
  },
  {
    title: "Group Photo",
    url: "/images/gallery/11.jpg",
    aspect: "aspect-[16/10]",
    category: "Community",
  },
  {
    title: "Event Moment",
    url: "/images/gallery/12.jpg",
    aspect: "aspect-[3/4]",
    category: "Events",
  },
  {
    title: "Family Bonding",
    url: "/images/gallery/13.jpg",
    aspect: "aspect-[4/3]",
    category: "Success Stories",
  },
  {
    title: "Play Area",
    url: "/images/gallery/14.jpg",
    aspect: "aspect-[1/1]",
    category: "Our Homes",
  },
  {
    title: "Community Event",
    url: "/images/gallery/15.jpg",
    aspect: "aspect-[16/9]",
    category: "Community",
  },
  {
    title: "Holiday Celebration",
    url: "/images/gallery/16.jpg",
    aspect: "aspect-[9/16]",
    category: "Events",
  },
  {
    title: "Volunteer Day",
    url: "/images/gallery/17.jpg",
    aspect: "aspect-[3/2]",
    category: "Community",
  },
  {
    title: "Dining Room",
    url: "/images/gallery/18.jpg",
    aspect: "aspect-[2/3]",
    category: "Our Homes",
  },
  {
    title: "Outdoor Fun",
    url: "/images/gallery/19.jpg",
    aspect: "aspect-[21/9]",
    category: "Events",
  },
  {
    title: "Study Room",
    url: "/images/gallery/20.jpg",
    aspect: "aspect-[5/4]",
    category: "Our Homes",
  },
  {
    title: "Graduation Day",
    url: "/images/gallery/21.jpg",
    aspect: "aspect-[2/3]",
    category: "Success Stories",
  },
  {
    title: "Team Building",
    url: "/images/gallery/22.jpg",
    aspect: "aspect-[16/10]",
    category: "Community",
  },
  {
    title: "Art Workshop",
    url: "/images/gallery/23.jpg",
    aspect: "aspect-[3/4]",
    category: "Events",
  },
  {
    title: "New Beginnings",
    url: "/images/gallery/24.jpg",
    aspect: "aspect-[4/3]",
    category: "Success Stories",
  },
  {
    title: "Backyard Garden",
    url: "/images/gallery/25.jpg",
    aspect: "aspect-[1/1]",
    category: "Our Homes",
  },
];
