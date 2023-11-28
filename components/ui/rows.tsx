import { getDetails } from "@/lib/utils"

type RoleModel = {
    slug: string
    role: string
    logo: string
    company: string
    link: string 
}

export default async function RoleRow (id: any) {
    console.log(id)
    const data = await getDetails(id? String(id.id) : '')
    return (
        <a href={'https://linkedin.com/jobs/view/'+data.id} className="flex flex-row items-center hover:bg-neutral-100 py-2 px-1 rounded-xl">
            <img className="object-contain mx-1 rounded-full border-2 border-neutral-200 w-[32px] h-[32px]" src={data.img}></img>
            <p className="text-neutral-800 font-sans text-sm">{data.title +" @ "}<span className="font-medium">{data.company}</span></p>
        </a>
    )
}