import { Button } from "../ui/button"

export const Impact = () => {
    return (
        <section className="bg-green-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl w-full text-center font-extrabold text-gray-900">Charity & Impact</h2>
                <p className="mt-5 text-lg text-center max-w-screen-lg mx-auto">
                    Since our inception, Green Lift has successfully refurbished and repaired over 10,000 devices,
                    significantly reducing e-waste in our community. Our initiatives have empowered numerous local schools
                    and non-profits with affordable technology solutions, bridging the digital divide and fostering digital literacy.
                </p>
                <div className="flex gap-2 w-fit mx-auto">
                    <Button variant={'outline'} className="text-green-500 items-start border-green-500  mt-10">
                      <span className="-mt-[0.7px]">  Learn more</span>
                    </Button>
                    <Button className=" bg-green-500 text-white mx-auto block mt-10">
                       <span  className="-mt-[0.7px]"> Donate now</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}