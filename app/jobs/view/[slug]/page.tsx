import { getDetails } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { slug: string, link: string } }) {
    return {
      title: `Referral Request`,
      openGraph: {
        images: `https://www.lynkedout.com/api/og?job=${params.link}`
      },
    }
}

export default async function Job({ params }: { params : {slug: string} }) {
    
    const job = await getDetails(params.slug)

    return(
        <><div> job {params.slug}</div><div> {job.title} @ {job.company}</div></>
    )
}