import { Divider } from "@nextui-org/divider";

export default function Footer() {
  return(
    <div className="w-full h-[20rem] bg-slate-900  pt-16">
      <div className="flex max-w-[1200px] w-full h-full ml-auto mr-auto">
        <div className="w-1/2 h-full">
          <h1 className="text-6xl text-white pb-4">LOGO</h1>
          <h2 className="text-md text-white">copyright 2024 etc</h2>
          <h2 className="text-md text-white">All Rights Reserved.</h2>
        </div>
        <div className="w-1/2 h-full">
          <h2 className="text-md text-white text-right">Home | Our Chalets | Register</h2>
        </div>
      </div>
    </div>
  )
}