"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Garima Singhal",
    rating: 5,
    text: "Visited for my parents' anniversary celebration, and it was an absolute delight. Finding a 100% pure vegetarian restaurant that doesn't compromise on beautiful, premium decor can be tough, but this place completely nailed it! Everything tasted delicious.",
    time: "A month ago"
  },
  {
    id: 2,
    name: "Gaurav Kumar",
    rating: 5,
    text: "This place is amazing and the food is too good. I tried the kurkure panner momos, fries and pizza. All the starters are too tasty and the main course tastes amazing. I love the drinks too, overall it’s a good place.",
    time: "4 months ago"
  },
  {
    id: 3,
    name: "Aman Sharma",
    rating: 5,
    text: "Food is awesome! Service is good, well-mannered staff & manager. Good ambience. I find the ambience of the place really good, it gives a high-end restaurant feel.",
    time: "6 months ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight"
          >
            Guest Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-sm hover:border-primary/30 transition-colors duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className="fill-current" size={16} />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed flex-grow italic mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                <span className="font-heading font-semibold text-foreground tracking-wide">
                  {review.name}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {review.time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
