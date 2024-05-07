import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

const AllUsers = () => {
  const { data: creators, isPending: isCreatorsLoading } = useGetUsers(10);
  // useEffect(() => {
  //   if (inView ) fetchNextPage();
  // }, [inView]);
  return (
  
      <div className="common-container">
        
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/people.svg"
            alt="add"
            className="invert-white"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">People</h2>
        </div>
        <div className="user-container">
        {isCreatorsLoading && !creators ? (
            <Loader />
          ) : (
            // <PostCard posts={item?.documents} key={`page-${index}`}/>
            <ul className="user-grid">
              {creators?.documents.map((items?, index?) => (
                <li key={index} className="flex-1 min-w-[200px] w-full">
                  
                    <UserCard user={items}/>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
        
      </div>

  );
};

export default AllUsers;
