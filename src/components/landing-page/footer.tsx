import Logo from "@/assets/logo2.svg"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"

export const Footer = () => {
    return (
        <footer className="bg-green-500 text-white py-6 mt-10">
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-between items-center mb-5">
                    <h2>
                        <img src={Logo} alt="Green Lift Logo" className="h-8 w-8 inline-block mb-2" />
                        <span className="text-xl">
                            Green Lift Innovation
                        </span>
                    </h2>
                    <div>
                        <p className="text-xs">Connect with us through: </p>
                        <div className="flex gap-2 items-center">
                            <IconBrandFacebook strokeWidth={1.3} />
                            <IconBrandLinkedin strokeWidth={1.3} />
                            <IconBrandInstagram strokeWidth={1.3} />
                        </div>
                    </div>

                </div>

                <p className="text-center text-xs">&copy; {new Date().getFullYear()} Green Lift Innovation. All rights reserved.</p>
            </section>
        </footer>
    )
}