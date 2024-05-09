import PostForm from "@/components/forms/PostForm";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const navigate = useNavigate()

  if (isPending) return <Loader />;
  return (
    <div className="flex flex-1">
      
      <div className="common-container">
      
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
        <div className="hidden md:flex max-w-5xl">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
        </Button>
      </div>
          <img
            src="/assets/icons/add-post.svg"
            alt="add"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>
        <PostForm action="Update" post={post} />
      </div>
    </div>
  );
};

export default EditPost;
