"use client";

import React from "react";
import Image from "next/image";
import { LinkIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { BlogPost, BlockNode, ChildNode, ListItemNode } from "@/lib/api";

const BlockRenderer = ({ block }: { block: BlockNode }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          {(block.children as ChildNode[]).map((child, i) => {
            if (child.bold) return <strong key={i}>{child.text}</strong>;
            if (child.italic) return <em key={i}>{child.text}</em>;
            if (child.underline) return <u key={i}>{child.text}</u>;
            return <span key={i}>{child.text}</span>;
          })}
        </p>
      );
    case 'heading':
      const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
      return (
        <HeadingTag className={`font-display font-bold text-slate-900 ${block.level === 1 ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} pt-4`}>
          {(block.children as ChildNode[]).map((child) => child.text).join('')}
        </HeadingTag>
      );
    case 'list':
      const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag className={`list-inside ${block.format === 'ordered' ? 'list-decimal' : 'list-disc'} space-y-2`}>
          {(block.children as ListItemNode[]).map((item, i) => (
            <li key={i}>
              {item.children.map((child: ChildNode) => child.text).join('')}
            </li>
          ))}
        </ListTag>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-accent bg-amber-50 p-6 rounded-r-lg my-8">
          <p className="text-xl italic font-medium text-slate-800">
            {(block.children as ChildNode[]).map((child) => child.text).join('')}
          </p>
        </blockquote>
      );
    case 'image':
      if (!block.image) return null;
      return (
        <figure className="my-8">
          <Image
            src={block.image.url}
            alt={block.image.alternativeText || ''}
            width={block.image.width || 800}
            height={block.image.height || 600}
            className="rounded-xl shadow-md object-cover w-full"
          />
          {block.image.caption && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.image.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
};

interface BlogArticleProps {
  post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
  if (!post) return null;

  return (
    <main className="font-display bg-gray-50 text-slate-800 min-h-screen py-5 sm:py-8 lg:py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div
          className="w-full bg-center bg-cover bg-no-repeat rounded-xl shadow-lg min-h-[320px] md:min-h-[480px]"
          style={{
            backgroundImage: `url("${post.featured_image?.url || '/hero-bg.jpg'}")`,
          }}
        />

        <h1 className="text-slate-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight pt-8 pb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center bg-gray-200"
            />
            <p className="text-base font-medium text-slate-800">By Foster Team</p>
          </div>
          <p className="text-sm text-slate-500 shrink-0">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="font-body text-lg text-slate-700 leading-relaxed space-y-6">
          {post.content && post.content.map((block: BlockNode, index: number) => (
            <BlockRenderer key={index} block={block} />
          ))}
        </div>

        <div className="bg-gray-50 sticky top-24 z-10 my-10 flex flex-col items-center gap-4 py-6 border-y border-slate-200">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">Share this story</h3>
          <div className="flex items-center gap-4">
            <span className="size-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-black hover:text-white transition-colors" aria-label="Copy link">
              <LinkIcon className="w-5 h-5 hover:scale-110 transition-transform" />
            </span>
            <span className="size-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-black hover:text-white transition-colors" aria-label="Email">
              <EnvelopeIcon className="w-5 h-5 hover:scale-110 transition-transform" />
            </span>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a className="group flex flex-col gap-3" href="#">
              <div className="rounded-lg overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDH8QgSjO8DkD1BISbhzTevig26G4i0w8RwRbEFFOxN_o1r6HvmPCwiVH5f3fRD4yfF3f3zhn6TiBL_fML0jjlaP1vIz8vd0lg4WRpikrCWY6dLyIJfw5KswRGlIODltq4yuX5HeY3cPwtS-28Igwzp2znUanZ6rzxVtal7kK6zKyoKx_0xL6jtYRTKKzxL2kxldtJBKswSEdDtUL07NFT2BsqXgcsIkVtUMvzzfMhKEwEUUP8tlTl84-i6tLkZTdPPEnS8oRVqPA')",
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">A Day in the Life of a Foster Parent</h3>
              <p className="text-sm text-slate-500">Discover the daily joys and challenges...</p>
            </a>
            <a className="group flex flex-col gap-3" href="#">
              <div className="rounded-lg overflow-hidden">
                <div
                  className="aspect-video bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAfVc9X3YlbLwOt1pPXgYzZCgb0aRFb6tpIKe74uZamBYKgphxRrCO_-NTujcLO-XjOYnP8jHHdZWu1-0-EuJv1ozzew3aI7F4tNbO-uxaITQ9Z4aWL15Y4Yqy3ZrPvp8a_ZgFb-HSxdCZw2670s5mJfV42vRoYeD-In6bK93hQ0xMYHffIJF_Sc2TV34yLD3P44m04xvf4AMqbVpKUzRVaO9kHx0OjoSmmM6H70ehCCaS5PFJt8-j6hp5I6vRKMDxqIsa4flzFQ')",
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}