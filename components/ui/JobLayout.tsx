'use client';

import { useRouter } from "next/navigation"
import { Button } from "./button"
import Header from "./Header";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

type JobProps = {
    id: string,
    title: string,
    desc: string,
    tags: {key:string, value: string}[],
    company: string,
    link: string,
    img: string,
    pay: string,
    time: string
}

export default function JobLayout(props: {job : JobProps}) {

    const router = useRouter()
    
    return (
        <main className="flex flex-col items-start justify-start p-8 md:p-12 lg:p-24">
            <Header></Header>
            <Image className="rounded-lg" src={props.job.img} width={32} height={32} alt='logo'></Image>
            <div className="flex flex-row items-center justify-center">
                <div className="mr-2 text-sm font-normal"> {props.job.title} @ <Link className="underline" href={props.job.link}>{props.job.company}</Link></div>
                <Button className="mx-1 px-0 text-neutral-500 hover:text-neutral-800 text-sm font-normal" variant={"link"} onClick={() => {navigator.clipboard.writeText('https://www.linkedin.com/jobs/view/'+props.job.id);toast(<div className="text-neutral-500 text-xs font-normal">Copied to clipboard</div>)}}>
                    copy
                </Button>
            </div>
            {
            (props.job.pay != '') &&
            <div className="px-0 mb-2 text-xs font-normal text-neutral-500">
                {props.job.pay}
            </div>
            }
            <div className="flex flex-col md:flex-row my-4 md:my-0 gap-2">
                {
                    props.job.tags.map((item: {key: string, value: string}) => {
                        return(<div className="text-[10px] font-medium px-2 py-1 rounded-full text-neutral-500 bg-neutral-100 w-fit uppercase tracking-wider" key={item.key}>{item.value}</div>)
                    })
                }
            </div>
            <div className="px-0 mt-4 text-xs font-normal text-neutral-500">
                {props.job.time}
            </div>

            <div className="px-0 mt-4 w-full md:w-[480px] lg:w-[600px] leading-[150%] text-xs font-normal text-neutral-700">
                {props.job.desc}
            </div>
            <Button className="m-0 text-neutral-500 hover:text-neutral-800 px-0 text-xs font-normal" variant={"link"} onClick={() => {router.push('https://www.linkedin.com/jobs/view/'+props.job.id)}}>
                    view more
            </Button>

        </main>
    )
}