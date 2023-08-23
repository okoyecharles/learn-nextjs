import PostList from "./components/post-list";
import SearchBar from "./components/search-bar";
import POSTS from './data';


export default function Home() {
  // Blog app todo:
  // Home page renders list of posts and search bar to search for posts
  // Post page displays post with navigation buttons (prev and next)

  // Blog app component structure:
  // app
  // - search bar
  // - list of posts
  // - - post
  // - - - post index
  // - - - post title
  // posts/[id]
  // - layout
  // - - previous and next buttons
  // - post info
  // - - post title
  // - - post date
  // - - post content

  return (
    <>
      <SearchBar />
      <PostList posts={POSTS} />
    </>
  )
}