import { getDetails } from "@/lib/utils"
import { useRouter } from "next/navigation"

export async function generateMetadata({searchParams} : {searchParams?: { [key: string]: string }}) {

    const job = searchParams?.currentJobId
    const data = await getDetails(job? job: '')

    return {
      title: `Referral Request for ${data.title}`,
      description: `Please refer me to ${data.company}`,
      openGraph: {
        images: `https://www.lynkedout.com/api/og?job=${job}`
      },
    }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function FromSearch({searchParams} : {searchParams?: { [key: string]: string }}) {

    const job = searchParams?.currentJobId

    const data = await getDetails(job? job : '')

    return(
        <><div> job {job}</div><div> {data.title} @ {data.company}</div></>
    )
}