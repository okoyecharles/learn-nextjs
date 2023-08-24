import Link from "next/link"

export default function PostList({ posts, searchFilter }) {
  return (
    <ul>
      { posts.map((post, i) => {
        if (
          post.title.toLowerCase().indexOf(
            searchFilter.toLowerCase().trim()
          ) === -1
        ) return null;
        return (<Post post={post} index={i} key={post.id}/>);
      }) }
    </ul>
  )
}

function Post({ post, index }) {
  return (
    <li>
      <span>#{ index + 1 }</span>
      {" "}
      <h3>{ post.title }</h3>
      <Link href={`./posts/${post.id}`}>View</Link>
    </li>
  )
}