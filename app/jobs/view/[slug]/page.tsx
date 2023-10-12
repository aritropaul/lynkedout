import { getDetails } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { slug: string }}) {

    const job = params.slug
    let cleanID = job.match(/(\d){10}/g) ?? []
    const data = await getDetails(cleanID[0] ? cleanID[0] : '')

    return {
      title: `Referral Request for ${data.title}`,
      description: `Please refer me to ${data.company}`,
      openGraph: {
        images: `https://www.lynkedout.com/api/og?job=${cleanID[0]}`
      },
    }
}

export default async function Job({ params }: { params : {slug: string} }) {
    
    const job = await getDetails(params.slug)

    return(
        <><div> job {job.id}</div><div> {job.title} @ {job.company}</div></>
    )
}