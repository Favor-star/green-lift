import { IconArrowNarrowDown, } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { DotBackgroundDemo } from "./dotted-background"

export const Hero = () => {
    return (
        <>
        <DotBackgroundDemo />
        {/* <section className="bg-hero-pattern relative w-full  bg-green-100 bg-cover bg-center min-h-[600px] flex items-center justify-center px-4 flex-col">
            <div className="absolute top-10 left-10 bg-green-500 rounded-2xl blur-xl md:h-96 md:w-96 h-10 w-10 rotate-45 opacity-50" />
            <h1 className="text-4xl font-bold text-black text-center">Empowering sustainable growth</h1>
            <p className="mt-6 text-center ">Through smart IT maintenance and innovative solutions.</p>
            <Button variant={"default"} size={"lg"} className="relative  z-10 bg-green-500 text-white mt-6">
                Explore services
                <IconArrowNarrowDown strokeWidth={1.4} />
            </Button>
        </section> */}
        </>
    )
}