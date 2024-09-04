import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";

export default function Footer() {
  return (
    <div className="w-full bg-slate-900 pt-16 pb-10">
      <div className="flex flex-col sm:flex-row max-w-[1200px] w-full mx-auto">
        <div className="w-full sm:w-1/2 text-white flex flex-col justify-center items-start">
          <div className="flex items-center mb-4 mx-auto sm:mx-0">
            <div className="w-24 h-24 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('/logo/transparant.png')` }}></div>
            <h2 className="ml-4 text-2xl font-bold montserrat">Maunga Ski Field</h2>
          </div>
          <div className="text-md mx-auto sm:mx-0 text-center sm:text-left montserrat">
            <p>&copy; Copyright 2024 Maunga Ski Field.</p>
            <p className="montserrat">All Rights Reserved.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 text-white text-right pt-8 flex flex-col justify-center">
          <div className="text-md space-y-4">
            <p className="text-center sm:text-right montserrat">
              <a href=".">Home</a> | 
              <a href="/options"> Our Chalets</a> | 
              <a href="/register"> Register</a>
            </p>
            <p className="text-center sm:text-right montserrat">Find us on our socials</p>
          </div>
          <div className="h-[1px] bg-[rgb(180,170,180)] max-w-[9.5rem] ml-auto my-4"></div>
          <div className="flex justify-end space-x-2 mx-auto sm:mx-0">
            <a href="https://github.com/oliwilliams1" target="_blank">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://x.com" target="_blank">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <YoutubeIcon className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}