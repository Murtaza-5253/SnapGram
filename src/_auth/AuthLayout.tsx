import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const {isAuthenticated} = useUserContext();
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            
            <Outlet />
          </section>
          <img src="assets/images/side-img.svg" 
          alt="SIde Image"
          className="hidden xl:block object-cover w-1/2 bg-no-repeat h-screen "/>
        </>
      )}
    </>
  );
};

export default AuthLayout;
