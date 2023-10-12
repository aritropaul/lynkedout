import { getDetails } from "@/lib/utils"

export async function generateMetadata({searchParams} : {searchParams?: { [key: string]: string }}) {

    const job = searchParams ? searchParams?.currentJobId : ''
    let cleanID = job? job.match(/(\d){10}/g) : []
    const data = await getDetails((cleanID? cleanID[0] : ''))
    
    console.log(data)

    return {
      title: `Referral Request for ${data.title}`,
      description: `Please refer me to ${data.company}`,
      openGraph: {
        images: `https://www.lynkedout.com/api/og?job=${(cleanID? cleanID[0] : '')}`
      },
    }
}


// eslint-disable-next-line @next/next/no-async-client-component
export default async function FromSearch({searchParams} : {searchParams?: { [key: string]: string }}) {

    const job = searchParams?.currentJobId

    const data = await getDetails(job? job : '')

    return(
        <><div> job {data.id}</div><div> {data.title} @ {data.company}</div></>
    )
}