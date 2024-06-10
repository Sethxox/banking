import { logOutAccount } from "@/lib/action/users.action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter()

  const handleLogOut = async () => {
    const loggedOut = await logOutAccount();

    if(loggedOut) router.push('/sign-in')
}
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-600"> {user.name[0]} </p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className=" text-14 truncate front-semibold text-gray-700">
          {user.name}
        </h1>
        <p className=" text-14 truncate front-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="ghen"/>
      </div>
    </footer>
  );
};

export default Footer;
