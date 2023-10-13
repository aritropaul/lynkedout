/* eslint-disable @next/next/no-img-element */
import { getDetails } from "@/lib/utils";
import Image from "next/image";
import { ImageResponse } from "next/server";

export const runtime = 'edge';

export async function GET(req: Request) {

    const fontData = await fetch(
        new URL('../../../assets/InstrumentSans-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());
    
    const { searchParams } = new URL(req.url)
    const job = searchParams.get('job') ?? ""

    const data = await getDetails(job)

    return new ImageResponse((
        <div style={{fontFamily: '"Instrument Sans"'}} tw="flex flex-col w-full h-full items-start justify-start bg-white">
            <div tw="bg-gray-50 flex h-full w-full">
                <div tw="flex flex-col md:flex-col w-full py-12 px-4 md:items-start justify-between p-8">
                    <h2 tw="flex flex-row justify-center items-center text-3xl font-medium tracking-tight text-gray-900 text-left">
                        <div tw="mr-3 flex">
                            <svg width={24} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M0 .01h11.696c2.376 0 4.386.441 6.03 1.325 1.676.852 2.94 2.055 3.792 3.609.884 1.523 1.325 3.29 1.325 5.3 0 1.583-.228 3.121-.685 4.614a9.37 9.37 0 01-2.239 3.792l3.747 13.34h-4.112l-3.015-11.193c-1.036.335-2.163.503-3.381.503-2.102 0-3.747-.549-4.934-1.645-1.158-1.127-1.737-2.528-1.737-4.203 0-1.736.564-3.107 1.69-4.112 1.158-1.036 2.605-1.553 4.341-1.553 1.614 0 2.878.38 3.792 1.142.914.761 1.614 1.644 2.102 2.65.274-.975.41-2.087.41-3.336a6.437 6.437 0 00-.776-3.06c-.487-1.006-1.264-1.828-2.33-2.468-1.035-.64-2.406-.96-4.112-.96H4.02V31.99H0V.01zm10.234 15.442c0 .64.243 1.188.73 1.644.488.427 1.158.64 2.011.64.975 0 1.828-.168 2.559-.503l-.275-1.096c-.213-.761-.518-1.416-.913-1.965-.396-.548-1.02-.822-1.874-.822-.67 0-1.218.198-1.644.594-.396.396-.594.899-.594 1.508z"
                            fill="#007AFF"
                            /></svg>
                        </div>
                        <span>referwise</span>
                    </h2>
                    <div tw="w-[960px] flex flex-wrap justify-start items-center">
                        <span tw="text-5xl leading-[150%] font-normal text-neutral-500 mr-3 tracking-tight"> 
                            {`I would love a referral to `}
                        </span>
                        <span tw="text-5xl leading-[150%] font-normal tracking-tight">
                            {data.title ?? 'Product Designer'}  
                        </span>
                        <span tw="text-5xl leading-[150%] font-normal items-center justify-center text-neutral-500 tracking-tight">
                            {`at`} 
                            <img tw="rounded-full w-[40px] h-[40px] mx-3" src={data.img} alt='logo'></img>
                            <span tw="text-5xl leading-[150%] text-neutral-900 font-normal tracking-tight"> {data.company ?? 'Google'}  </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ), {
        width: 1200,
        height: 630,
        fonts: [
            {
              name: 'Instrument Sans',
              data: fontData,
              style: 'normal',
            },
        ]
      });
}