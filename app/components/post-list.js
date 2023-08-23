import Link from "next/link"

export default function PostList({ posts }) {
  return (
    <ul>
      { posts.map((post, i) => <Post post={post} index={i} />) }
    </ul>
  )
}

function Post({ post, index }) {
  return (
    <li key={post.id}>
      <span>#{ index + 1 }</span>
      {" "}
      <h3>{ post.title }</h3>
      <Link href={`./posts/${post.id}`}>View</Link>
    </li>
  )
}