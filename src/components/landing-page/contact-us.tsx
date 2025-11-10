import { IconBrandFacebook, IconMail, IconMapPin,   type TablerIcon } from "@tabler/icons-react"

import { ContactForm } from "./contact-form";

export const ContactUs = () => {
    return (
        <section className="mb-10" id="contact-us">
            <article className="mt-10 max-w-screen-lg mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="h-full">
                        {/* <h3 className="text-2xl font-medium">Are you ready?</h3> */}
                        <p>Whether you have a maintanance, IT services, we are ready to connect. Don't hesitate to reach out to us.</p>
                        <section className="mt-3 flex flex-col gap-10  py-5">
                            
                            <ContactInfoItem
                                icon={IconMail}
                                label="Email us at:"
                                value="contact@greenlift.com"
                            />
                            <ContactInfoItem
                                icon={IconBrandFacebook}
                                label="Follow us on Facebook:"
                                value="Green Lift Innovation"
                            />
                            <ContactInfoItem
                                icon={IconMapPin}
                                label="Visit us at:"
                                value="123 Green St, Springfield"
                            />
                        </section>

                    </div>
                    <ContactForm/>
                </div>
            </article>
        </section>
    )
}

const ContactInfoItem = ({ icon: Icon, label, value }: { icon: TablerIcon; label: string; value: string }) => {
    return (
        <div className="flex gap-3 items-center">
            <Icon strokeWidth={1.4} size={36} className="text-green-500 p-2 rounded-full border border-green-500"/>
            <p className="flex flex-col justify-center">
                <span className="text-gray-500 text-xs">{label}</span>
                <span className="font-bold text-lg">{value}</span>
            </p>
        </div>
    )
}
