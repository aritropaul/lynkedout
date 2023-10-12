import { getDetails } from "@/lib/utils"

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

export default async function Job({ params }: { params : {slug: string} }) {
    
    const job = await getDetails(params.slug)

    return(
        <><div> job {params.slug}</div><div> {job.title} @ {job.company}</div></>
    )
}