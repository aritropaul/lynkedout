import { getDetails } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { slug: string, link: string } }) {
    return {
      title: `Referral Request`,
      openGraph: {
        images: `https://www.lynkedout.com/api/og?job=${params.link}`
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