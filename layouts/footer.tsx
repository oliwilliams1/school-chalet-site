import { FacebookIcon, GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";

export default function Footer() {
  return (
    <div className="w-full bg-slate-900 pt-16 pb-10">
      <div className="flex max-w-[1200px] w-full mx-auto">
        <div className="w-1/2 text-white">
          <div className="flex">
            <div className="w-24 h-24 rounded-xl mb-4 bg-cover bg-center" style={{backgroundImage: `url('/logo/transparant.png')`}}></div>
            <h2 className="mt-auto mb-auto ml-4 text-2xl font-bold">Maunga Ski Field</h2>
          </div>
          <div className="text-md">
            <p>&copy; Copyright 2024 Maunga Ski Field.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
        <div className="w-1/2 text-white text-right pt-8">
          <div className="text-md space-y-4">
          <p>
            <a href=".">Home</a> | 
            <a href="/options"> Our Chalets</a> | 
            <a href="/register"> Register</a>
          </p>
            <p>Find us on our socials</p>
          </div>
          <div className="h-[1px] bg-[rgb(180,170,180)] max-w-[9.5rem] ml-auto my-4"></div>
          <div className="flex justify-end space-x-2">

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