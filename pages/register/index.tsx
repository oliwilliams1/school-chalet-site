import { Header } from "@/layouts/head"
import { Input } from "@nextui-org/input"
import { FileUpload } from 'primereact/fileupload';
import { Button } from "@nextui-org/button";

export default function SignUpPage() {
  return (<div>
    <Header />
    <div className="flex min-h-[calc(100vh-65px)]">
      <div className="w-[calc(100vw-35rem)] bg-slate-100">
        <p>Video/carousel</p>
      </div>
      <div className="w-[35rem] bg-slate-300 p-12">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Title</h2>
          <p>Subtitle</p>
          <div className="mb-4"></div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Input type="name" label="First Name" labelPlacement="outside"/>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Input type="name" label="Last Name" labelPlacement="outside"/>
            </div>
          </div>
          <div className="mt-9"></div>
          <Input type="address" label="Physical Address" labelPlacement="outside"/>

          <p className="mt-4 font-normal subpixel-antialiased text-sm">Proof of address</p>
          <Button className="p-3 bg-slate-100 rounded-lg">Upload</Button>
          <p className="mt-4 font-normal subpixel-antialiased text-sm">Proof of ID</p>
          <Button className="p-3 bg-slate-100 rounded-lg">Upload</Button>

          <br />
          <Button className="w-full mt-6 p-3 bg-green-200 rounded-lg">Register</Button>
        </div>
      </div>
    </div>
  </div>)
}