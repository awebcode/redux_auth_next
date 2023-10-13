// pages/UserPage.js

import UserDetails from "@/components/UserDetails";
import { setUserData } from "@/redux/actions/userAction";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserPage = ({ user }) => {
    const router=useRouter()
    const dispatch = useDispatch()
    const userAuth=useSelector(s=>s.user)
     console.log(user)
    useEffect(() => {
      if (userAuth === null) {
        router.push("/login");
      }
    }, [router, userAuth]);
    useEffect(() => {
        dispatch(setUserData(user))
    },[dispatch])
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <UserDetails user={user} />
    </div>
  );
};

export async function getServerSideProps(context) {
    try {
      const { req } = context;

    // Get the cookie from the request
    const cookie = req.headers.cookie;
      const response = await axios.get(`${process.env.BASE_URL}/api/auth/me`, {
        headers: {
          cookie: cookie, // Pass the cookie in the headers
          },
         
      });
    const user = response.data.user;
    return {
      props: { user },
    };
  } catch (error) {
    return {
      props: { user: null },
    };
  }
}

export default UserPage;
