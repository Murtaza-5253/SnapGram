import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={"/assets/icons/profile-placeholder.svg"}
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="h3-bold md:h1-semibold text-center xl:text-left w-full">
                {id}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{id}
              </p>
            </div>
            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
              {id}
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <div>
              <Link
                to={`/update-profile/${id}`}
                className="h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg"
              >
                <img
                  src={"/assets/icons/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="flex whitespace-nowrap small-medium">
                  Edit Profile
                </p>
              </Link>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
