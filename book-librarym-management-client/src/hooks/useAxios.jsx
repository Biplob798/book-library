import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "  https://book-library-management-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.usr(
      (res) => {
        return res;
      },
      (error) => {
        console.log("user error", error.response);
        if (error.response.statues === 401 || error.response.statues === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxios;
