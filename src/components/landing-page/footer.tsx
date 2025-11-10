import Logo from "@/assets/logo2.svg"
import { IconArrowNarrowRight, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"

export const Footer = () => {
    return (
        <footer className="bg-green-500 text-white py-6 mt-10">
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <article className="flex justify-between flex-col md:flex-row items-start gap-6 mb-5">
                    <div>
                        <h2 className="flex items-center gap-2">
                            <img src={Logo} alt="Green Lift Logo" className="h-8 w-8 " />
                            <span className="text-sm">
                                Green Lift Innovation
                            </span>
                        </h2>
                        <p className="text-start flex gap-2 mt-2">
                            <IconArrowNarrowRight strokeWidth={1.3} /> <a href="#about-us" className="text-sm">About us</a>
                        </p>
                        <p className="text-start flex gap-2">
                            <IconArrowNarrowRight strokeWidth={1.3} /> <a href="#services" className="text-sm">Services</a>
                        </p>
                        <p className="text-start flex gap-2 ">
                            <IconArrowNarrowRight strokeWidth={1.3} /> <a href="#contact-us" className="text-sm">Contact us</a>
                        </p>
                    </div>
                    <div>
                        <p className="text-xs">Connect with us through: </p>
                        <div className="flex gap-2 items-center">
                            <IconBrandFacebook strokeWidth={1.3} />
                            <IconBrandLinkedin strokeWidth={1.3} />
                            <IconBrandInstagram strokeWidth={1.3} />
                        </div>
                    </div>

                </article>

                <p className="text-center text-xs">&copy; {new Date().getFullYear()} Green Lift Innovation. All rights reserved.</p>
            </section>
        </footer>
    )
}