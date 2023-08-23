import { isFirstPost, isLastPost, nextPostId, prevPostId } from "@/app/utils";
import Link from "next/link";

function PostLayout({ params, children }) {
  return (
    <>
      <div>
        {!isLastPost(params?.id) && (
          <Link href={`./posts/${nextPostId(params?.id)}`}>Next</Link>
        )}
        {!isFirstPost(params?.id) && (
          <Link href={`./posts/${prevPostId(params?.id)}`}>Previous</Link>
        )}
      </div>
      {children}
    </>
  );
}

export default PostLayout;
