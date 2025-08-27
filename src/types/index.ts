declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '@sanity/block-content-to-react';
declare module '@sanity/image-url';

export interface Author {
  name: string;
  bio: any[];
  authorImage: {
    asset: {
      _ref: string;
    };
  };
}

export interface Post {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  body: any[];
  publishedAt: string;
}

export interface ProjectData {
  title: string;
  date: string;
  place: string;
  description: string;
  projectType: string;
  link: string;
  tags: string[];
}