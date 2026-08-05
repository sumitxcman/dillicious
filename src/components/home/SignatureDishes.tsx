"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const signatureDishes = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Perfectly grilled, smoky, and flavorful cottage cheese marinated in aromatic spices.",
    price: "₹350",
    image: "/sig_paneer_tikka_1785912648336.jpg"
  },
  {
    id: 2,
    name: "Dal Makhani",
    description: "Rich, creamy, and slow-cooked black lentils prepared with a luxurious touch of butter.",
    price: "₹380",
    image: "/sig_dal_makhani_1785912657248.jpg"
  },
  {
    id: 3,
    name: "Kurkure Paneer Momos",
    description: "Crispy on the outside, filled with soft paneer and spices inside. A crowd favorite.",
    price: "₹250",
    image: "/sig_kurkure_momos_1785912666433.jpg"
  },
  {
    id: 4,
    name: "Kadhai Paneer",
    description: "Fresh cottage cheese cooked with bell peppers in a spicy, flavorful tomato gravy.",
    price: "₹390",
    image: "/sig_kadhai_paneer_1785912675979.jpg"
  },
  {
    id: 5,
    name: "Malai Kofta",
    description: "Melt-in-mouth potato and paneer dumplings simmered in a rich, creamy cashew gravy.",
    price: "₹420",
    image: "/sig_malai_kofta_1785912685807.jpg"
  },
  {
    id: 6,
    name: "Chhole Bhature",
    description: "Spicy and tangy dark chickpeas served with perfectly fluffy and crispy fried bread.",
    price: "₹280",
    image: "/sig_chhole_bhature_1785912697170.jpg"
  },
  {
    id: 7,
    name: "Garlic Butter Naan",
    description: "Soft, blistered Indian flatbread dripping with rich butter and infused with roasted garlic.",
    price: "₹120",
    image: "/sig_garlic_naan_1785912706929.jpg"
  },
  {
    id: 8,
    name: "Veg Dum Biryani",
    description: "Aromatic basmati rice slow-cooked with fresh seasonal vegetables, saffron, and whole spices.",
    price: "₹350",
    image: "/sig_veg_biryani_1785912716905.jpg"
  },
  {
    id: 9,
    name: "Tandoori Soya Chaap",
    description: "Soft soya chunks marinated in secret spices and roasted to perfection in a clay oven.",
    price: "₹320",
    image: "/sig_soya_chaap_1785912726129.jpg"
  },
  {
    id: 10,
    name: "Shahi Paneer",
    description: "Royalty on a plate: tender paneer cubes cooked in a luscious, slightly sweet tomato and cashew curry.",
    price: "₹410",
    image: "/sig_shahi_paneer_1785912736955.jpg"
  }
];

export default function SignatureDishes() {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Chef's Recommendation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight"
          >
            Signature Dishes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-white/5 flex items-center justify-center">
                {/* User will replace placeholders with real food images */}
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="absolute text-muted-foreground/50 text-sm">Image: {dish.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-sm font-semibold tracking-wide">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {dish.description}
                </p>
                <button className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
