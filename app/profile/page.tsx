import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-12 lg:p-24">
      
      {/* intro */}
      <div className="grid grid-cols-3 gap-12 w-[800px] border-b-2 border-neutral-100 pb-12">
        <div className='col-span-1'>
            <div className="text-sm font-medium inter">Aritro Paul</div>
            <div className="text-sm font-normal inter text-neutral-500">Product Designer @ Pallet</div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-500">
            {'I am a Product Designer with a year of experience and a graduate degree in Human-Computer Interaction, and a passion for building beautiful interfaces and products in web3, healthcare, and education.\
            My experience solidifies my skills, making me a well-rounded designer with an eye for design systems, organisation and improving efficiency in small to mid-sized design systems.'}<br/><br/>
            {'-> I\'m currently building exciting products @PalletHQ'}<br/><br/>
            {'-> Recently, I built a complex and efficient design system enabling the team to build screens at much faster speeds by standardising components and leveraging Figma component variants and properties, allowing for standardization of design elements, resulting in an efficient workflow that improves turnaround times.'}<br/><br/>
            {'-> I have also completely redesigned and rebuilt enterprise-level products for web and mobile with components and standardized design systems, resulting in significant reductions in new flow build time.'}<br/>
            </div>
        </div>
      </div>

        {/* experience */}
        <div className="grid grid-cols-3 gap-12 w-[800px] border-b-2 border-neutral-100 py-12">
        <div className='col-span-3 text-sm text-neutral-800 font-normal'>experience</div>
        <div className='col-span-1'>
            <div className="text-sm flex items-center font-normal inter text-neutral-800">2023 <span className='text-[8px] uppercase tracking-widest bg-neutral-200 text-neutral-500 font-medium mx-[4px] px-1.5 my-[1px] rounded-full '>Present</span></div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-800">
                Product Designer, Platform
            </div>
            <a className="flex items-center text-sm leading-[150%] font-normal inter text-neutral-800" href="">
                PalletHQ
                <svg aria-label="Open in new tab" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"></path></svg>
            </a>
            <div className="text-xs leading-[150%] font-normal inter text-neutral-500">
                New York City, NY
            </div>
        </div>
        <div className='col-span-1'>
            <div className="text-sm font-normal inter text-neutral-800">2022</div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-800">
                Product Designer Intern
            </div>
            <a className="flex items-center text-sm leading-[150%] font-normal inter text-neutral-800" href="">
                Suptho
                <svg aria-label="Open in new tab" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"></path></svg>
            </a>
            <div className="text-xs leading-[150%] font-normal inter text-neutral-500">
                Remote, Miami, FL
            </div>
        </div>
        <div className='col-span-1'>
            <div className="text-sm font-normal inter text-neutral-800">2022</div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-800">
                Graduate Teaching Assistant, Visual Design
            </div>
            <a className="flex items-center text-sm leading-[150%] font-normal inter text-neutral-800" href="">
                University of Maryland
                <svg aria-label="Open in new tab" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"></path></svg>
            </a>
            <div className="text-xs leading-[150%] font-normal inter text-neutral-500">
                College Park, MD
            </div>
        </div>
      </div>


      {/* education */}
    <div className="grid grid-cols-3 gap-12 w-[800px] border-b-2 border-neutral-100 py-12">
    <div className='col-span-3 text-sm text-neutral-800 font-normal'>education</div>
        <div className='col-span-1'>
            <div className="text-sm flex items-center font-normal inter text-neutral-800">2022</div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-800">
                {"Master's in Human Computer Interaction"}
            </div>
            <a className="flex items-center text-sm leading-[150%] font-normal inter text-neutral-800" href="">
                University of Maryland
                <svg aria-label="Open in new tab" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"></path></svg>
            </a>
            <div className="text-xs leading-[150%] font-normal inter text-neutral-500">
                College Park, MD
            </div>
        </div>
        <div className='col-span-1'>
            <div className="text-sm flex items-center font-normal inter text-neutral-800">2020</div>
        </div>
        <div className='col-span-2'>
            <div className="text-sm leading-[150%] font-normal inter text-neutral-800">
                {"Bachelor's in Technology, Computer Science"}
            </div>
            <a className="flex items-center text-sm leading-[150%] font-normal inter text-neutral-800" href="">
                Vellore Institute of Technology
                <svg aria-label="Open in new tab" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M76 88c-6.627 0-12-5.373-12-12s5.373-12 12-12h104c6.627 0 12 5.373 12 12v104c0 6.627-5.373 12-12 12s-12-5.373-12-12v-75.029l-83.515 83.514c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97L151.029 88H76Z"></path></svg>
            </a>
            <div className="text-xs leading-[150%] font-normal inter text-neutral-500">
                Vellore, TN, IN
            </div>
        </div>
    </div>


    </main>
  )
}
