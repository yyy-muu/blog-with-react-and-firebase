import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login"); // ログアウト後、ログインページに遷移
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
