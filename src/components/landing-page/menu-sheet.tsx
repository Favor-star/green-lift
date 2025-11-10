import { motion, AnimatePresence } from "motion/react";
import {
    IconArrowNarrowRight,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconX,
} from "@tabler/icons-react";
import type { FC } from "react";

export const MenuSheet: FC<{ setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>, isModalOpen: boolean }> = ({ setIsModalOpen, isModalOpen }) => {
    return (
        <AnimatePresence>
            {isModalOpen && <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                key={'modal'}
                className="fixed w-full h-screen top-0 left-0 bg-black/50 z-20 flex justify-end"
                onClick={() => setIsModalOpen(false)}
            >
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="w-1/2 bg-white h-full min-w-[250px] p-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-full block text-end">
                        <button
                            aria-label="Close Menu"
                            className="p-2 rounded-full border border-gray-500 hover:bg-gray-200 hover:text-green-500 transition"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <IconX className="text-black" strokeWidth={1.3} />
                        </button>
                    </div>

                    <div className="w-full space-y-3 text-black mt-5">
                        <a className="flex gap-2" href="#about-us" onClick={()=> setIsModalOpen(false)}>
                            <IconArrowNarrowRight strokeWidth={1.3} className="text-green-500" /> <span>About Us</span>
                        </a>
                        <a className="flex gap-2" href="#services" onClick={()=> setIsModalOpen(false)}>
                            <IconArrowNarrowRight strokeWidth={1.3} className="text-green-500" /> <span>Our services</span>
                        </a>
                        <a className="flex gap-2" href="#contact-us" onClick={()=> setIsModalOpen(false)}>
                            <IconArrowNarrowRight strokeWidth={1.3} className="text-green-500" /> <span>Contact Us</span>
                        </a>
                    </div>

                    <div className="w-full border-t border-black mt-18 text-black">
                        <h3 className="text-sm">Contact with us through:</h3>
                        <div className="flex gap-4 mt-3 justify-center">
                            <button><IconBrandFacebook strokeWidth={1.3} className="text-black" /></button>
                            <button><IconBrandLinkedin strokeWidth={1.3} className="text-black" /></button>
                            <button><IconBrandInstagram strokeWidth={1.3} className="text-black" /></button>
                        </div>
                    </div>
                </motion.div>
            </motion.section>}
        </AnimatePresence>
    );
};
