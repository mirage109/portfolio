import {motion} from "framer-motion";
const Languages = () => {
    return (
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="border-2 border-yellow px-12 pb-12">
            <h3 className="font-semibold text-2xl mt-10 mb-5">Languages</h3>
            <ul className="flex flex-col w-[160px]">
                <li>Ukranian - Native</li>
                <li>English - Advanced</li>
                <li>Italian - Advanced</li>
                <li>Russian - Advanced</li>
                <li>French - Intermediate</li>
                <li>German - Elementary</li>
            </ul>
        </motion.div>
    );
}
export default Languages;