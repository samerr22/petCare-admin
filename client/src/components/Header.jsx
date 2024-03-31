import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSilce";
import { useDispatch } from "react-redux";

export default function () {
  const { currentUser } = useSelector((state) => state.user);



  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };











  return (
    <div className="bg-red-500">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/schedul">
          <h1 className="font-bold ">PetCare</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/schedul">
            <li>Home</li>
          </Link>

          {currentUser ? (
            <span onClick={handleSignout} className="cursor-pointer">
            Sign Out
          </span>
          ) : (
            <Link to="/sign-in">
              <li>Sing In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
