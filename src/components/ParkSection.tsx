import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ParkSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgClass?: string;
}

const ParkSection = ({ title, description, imageSrc, imageAlt, bgClass }: ParkSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`relative py-16 md:py-24 overflow-hidden ${bgClass || ""}`}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="font-display text-3xl md:text-5xl text-primary text-center mb-12 tracking-wide uppercase">
          {title}
        </h2>

        {/* Content: text from left, image from right */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[280px] md:h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParkSection;
