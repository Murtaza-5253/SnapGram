import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();
  const { data: creators, isPending: isCreatorsLoading } = useGetUsers(10);
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
    fetchNextPage,
    hasNextPage,
  } = useGetRecentPosts();
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.pages?.map((post?, index?) => (
                // <p>{post.documents.creator}</p>
                // <p key={index}>{post.creator}</p>
                <PostCard posts={post?.documents} key={`page-${index}`} />
              ))}
            </ul>
          )}
        </div>
        {hasNextPage && (
          <div ref={ref} className="mt-10">
            <Loader />
          </div>
        )}
      </div>
      <div className="home-creators">
      
          <h2 className="h4-bold md:h3-bold text-left w-full">Top Creators</h2>
          <div className="user-container">
        {isCreatorsLoading && !creators ? (
            <Loader />
          ) : (
            // <PostCard posts={item?.documents} key={`page-${index}`}/>
            <ul className="grid 2xl:grid-cols-2 gap-6">
              {creators?.documents.map((items?, index?) => (
                <li key={index} className="flex-1 min-w-[200px]">
                  
                    <UserCard user={items}/>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>

    </div>
  );
};

export default Home;
