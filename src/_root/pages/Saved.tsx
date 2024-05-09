import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const Saved = () => {
  
  const { data: currentUser } = useGetCurrentUser();
  if (!currentUser) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="saved-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/assets/icons/save.svg"
            alt="save"
            width={36}
            height={36}
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Saved posts</h2>
        </div>
        <div className="flex flex-wrap gap-9 w-full max-w-5xl">
            {currentUser?.save?.length===0 && (
              <p className="text-light-4">No Saved Posts</p>
            )}
            
            <GridPostList posts={currentUser.save} showStats={false} showUser={false}/>
            
        </div>
      </div>
    </div>
  )
}

export default Saved