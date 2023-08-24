"use client"
import { useRouter } from "next/navigation";
import { isFirstPost, isLastPost, nextPostId, prevPostId } from "@/app/utils";

function PostLayout({ params, children }) {
  const router = useRouter();

  return (
    <>
      <div>
        {!isLastPost(params?.id) && (
          <button onClick={() => router.push(`./${nextPostId(params.id)}`)}>Next</button>
        )}
        {!isFirstPost(params?.id) && (
          <button onClick={() => router.push(`./${prevPostId(params.id)}`)}>Prev</button>
        )}
      </div>
      {children}
    </>
  );
}

export default PostLayout;
