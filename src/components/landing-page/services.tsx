import type { TablerIcon } from "@tabler/icons-react";
import { IconDeviceLaptop, IconRecycle, IconShieldCheck, IconShoppingCart, IconTool, IconUsersGroup } from "@tabler/icons-react";
export const Services = () => {
    return (
        <section className="mb-10">
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-4">

                {
                    services.map(({ title, description, icon }) => (
                        <ServiceCard
                            key={title}
                            title={title}
                            description={description}
                            Icon={icon}
                        />
                    ))
                }
            </div>
        </section>
    )
}

const ServiceCard = ({ title, description, Icon }: { title: string; description: string; Icon: TablerIcon }) => {

    return (
        <article className="flex flex-col gap-2  items-center justify-center p-3 rounded-xl bg-green-50 border border-green-300 hover:bg-green-200 transition-all">
            <Icon strokeWidth={1.4} size={30} className="text-green-500" />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-center text-gray-600 max-w-sm">{description}</p>
        </article>
    )
}

const services = [
    {
        title: "IT Maintanance",
        description: "Reliable maintanance and repair services to extend  the lifespan of your IT equipment",
        icon: IconTool
    },
    {
        title: "Refurbished Sales & Donations",
        description: "Quality refurbished computers and devices for sales or donations to promote digital inclusion",
        icon: IconDeviceLaptop
    },
    {
        title: "E-waste & Data Security",
        description: "Eco-friendly disposal and certified data erasure to protect your business and the environment.",
        icon: IconRecycle
    },
    {
        title: "Buy IT Services",
        description: "Easy access to tailored IT services packages - maintainance, upgrades or installations.",
        icon: IconShoppingCart
    },
    {
        title: "Electrical & Safety Testing",
        description: "PAT and safety checks to ensure your workspace meets technical and safety standards.",
        icon: IconShieldCheck
    },
    {
        title: "Event Tech Support",
        description: "Proffessional IT and Av setup for smooth, sustainable business events.",
        icon: IconUsersGroup
    },
]