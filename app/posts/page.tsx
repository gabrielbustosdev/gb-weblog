"use client";

import PostList from '@/components/PostList';

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-3xl font-bold">Posts de tecnología, tutoriales </h1>
        <h1 className="text-3xl font-bold text-green-800">y otras hierbas ...</h1>
      </div>
      <PostList />
    </div>
  );
}