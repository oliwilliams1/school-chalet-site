import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

export default function CustomCard() {
  return (
    <div className="w-full w-full h-1/3 p-4 bg-slate-200">
      <Card className="w-full h-full" isBlurred isFooterBlurred>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="font-bold">Title</p>
          <small className="text-default-500">Subtitle</small>
        </CardHeader>
        <CardBody>
          <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
        </CardBody>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_32px)] shadow-small ml-4 mb-3.5 z-10">
          <div className="w-full flex justify-between rounded-lg">
            <p>Find out more -{'>'}</p>
          </div>
        </CardFooter>
      </Card> 
    </div> 
  )
}