import { IconArrowNarrowDown, } from "@tabler/icons-react"
import { Button } from "../ui/button"

export const Hero = () => {
    return (
        <>
            {/* <DotBackgroundDemo /> */}
            <div className="min-h-[550px] w-full  bg-green-100 relative text-gray-800">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
                        backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                    }}
                />
                {/* Your Content/Components */}
                <section className=" relative w-full   min-h-[600px] flex items-center justify-center px-4 flex-col">
                    <h1 className="text-4xl font-bold text-black text-center">Empowering sustainable growth</h1>
                    <p className="mt-6 text-center text-lg ">Through smart IT maintenance , refurbishments and eco-friendly Solutions.</p>
                    <a href="#services">
                        <Button variant={"default"} size={"lg"} className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition-colors mt-6">
                            Explore services
                            <IconArrowNarrowDown strokeWidth={1.4} />
                        </Button></a>
                </section>
            </div>
        </>
    )
}