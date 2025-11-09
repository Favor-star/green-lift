import Logo from "@/assets/logo2.svg"

export const Footer = () => {
    return (
        <footer className="bg-green-500 text-white py-6 mt-10">
            <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2>
                    <img src={Logo} alt="Green Lift Logo" className="h-8 w-8 inline-block mb-2" />
                    <span className="text-xl">
                        Green Lift Innovation
                    </span>
                </h2>
                <p className="text-center text-xs">&copy; {new Date().getFullYear()} Green Lift Innovation. All rights reserved.</p>
            </section>
        </footer>
    )
}