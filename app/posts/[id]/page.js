"use client"
import { getPostById } from "@/app/utils";

export default function Post({ params }) {
  const post = getPostById(params.id);

  return (
    <section>
      <h2>{ post?.title }</h2>
      <p>{ post?.content }</p>
    </section>
  )
}