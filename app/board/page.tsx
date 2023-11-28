import RoleRow from "@/components/ui/rows";
import { getDetails } from "@/lib/utils";
import { sql } from "@vercel/postgres";


export default async function board() {

    const { rows } = await sql`SELECT * from roles`;


    return (
        <div className="bg-white flex flex-col min-h-screen py-2">
      <main className="lg:ml-60 mr-auto mt-24 p-6 max-w-lg">
        <header>
          <h1 className="font-serif italic text-3xl items-center">now hiring <span className="text-neutral-800 font-sans font-medium text-[8px] mt-12 tracking-wider not-italic uppercase bg-neutral-200 px-2 py-1 rounded-full">Updated weekly</span></h1>
          <p className="font-sans text-sm">{"| ˈhī(ə)r |"}</p>
          <br/>
          <p className="font-sans text-xs">{"1. Employ (someone) for wages"}</p>
          <p className="font-sans text-xs">{"2. A job board that affords the same"}</p>
          {/* <p className="font-sans text-[10px] text-neutral-400">{"No spam. ever."}</p> */}
        </header>
        <div className='my-20'>
        {
          //@ts-ignore
          rows.map((row) => (
            <RoleRow key={row.id} id={row.id}></RoleRow>
          ))
        }
        </div>
        <footer>
          <p className="text-neutral-500 font-sans text-xs mt-12 tracking-tight">If you have a referral to any of these jobs, or if you have a role at your company, reach out at <a className="text-neutral-700 underline hover:text-neutral-950" href="mailto:refer@aritro.xyz">refer@aritro.xyz</a></p>
        </footer>
	    </main>
      </div>
    )
}