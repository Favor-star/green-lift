import type { TablerIcon } from "@tabler/icons-react";
import { IconDeviceLaptop } from "@tabler/icons-react";
export const Services = () => {
    return (
        <section className="mb-10">
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-4">
                <ServiceCard
                    title="IT Maintenance"
                    description="Comprehensive IT maintenance services to ensure your systems run smoothly and efficiently."
                    Icon={IconDeviceLaptop}
                />
                {
                    Array(5).fill(null).map((_, index) => (
                        <ServiceCard
                            key={index}
                            title="IT Refurbishment"
                            description="Professional refurbishment services to extend the life of your IT equipment and reduce e-waste."
                            Icon={IconDeviceLaptop}
                        />
                    ))
                }
                <ServiceCard
                    title="Device Repair"
                    description="Expert repair services for a wide range of devices, minimizing downtime and extending device lifespan."
                    Icon={IconDeviceLaptop}
                />
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
