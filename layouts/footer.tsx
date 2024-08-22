import { Divider } from "@nextui-org/divider";
import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";

export default function Footer() {
  return (
    <div className="w-full bg-slate-900 pt-16 pb-10">
      <div className="flex max-w-[1200px] w-full mx-auto">
        <div className="w-1/2 text-white">
          <h1 className="text-6xl font-bold pb-4">LOGO</h1>
          <div className="text-md">
            <p>&copy; Copyright 2024 Maunga Ski Field.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
        <div className="w-1/2 text-white text-right">
          <div className="text-md space-y-4">
            <p>Home | Our Chalets | Register</p>
            <p>Find us on our socials</p>
          </div>
          <div className="h-[1px] bg-[rgb(180,170,180)] max-w-[9.5rem] ml-auto my-4"></div>
          <div className="flex justify-end space-x-2">
            <GithubIcon className="w-6 h-6" />
            <TwitterIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
            <FacebookIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}