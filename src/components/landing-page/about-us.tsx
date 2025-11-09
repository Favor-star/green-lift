import { Button } from "../ui/button"

export const AboutUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl w-full text-center font-extrabold text-gray-900">About Us</h2>
                <p className="mt-5 text-lg text-center max-w-screen-lg mx-auto">
                    At Green Lift, we merge the technology with sustainability.
                    Based in Rwanda, we specialize in IT maintenance, repair,
                    and refurbishment - helping businesses and organizations stay efficient, affordable,
                    and eco-conscious. Every service contributes to reducing e-wastes and empowering digital 
                    inclusion.
                </p>
                <Button variant={"outline"} size={"lg"} className="border-green-500 text-green-500 mt-8 mx-auto block">
                    Follow us
                </Button>
                <div id="services"/>
            </div>
        </section>
    )

}