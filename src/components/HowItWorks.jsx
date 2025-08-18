import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose",
    description: "Choose Your Service From Our Wide Range Of Offerings",
  },
  {
    number: "02",
    title: "Book",
    description: "Make An Appointment With Us",
  },
  {
    number: "03",
    title: "Fair Pricing",
    description: "Always Get a Fair Quote",
  },
  {
    number: "04",
    title: "At Your Doorstep",
    description: "Get a Door Step Pick up & Drop Facility",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Car Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/car-bg.jpg" // Place your background image in public folder
          alt="Car Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-md md:text-lg text-gray-200 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We Offer Full Service Auto Repair & Maintenance
        </motion.p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-black text-white text-center px-6 py-10 rounded-md shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-6xl font-bold text-white mb-4">
                {step.number}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
