"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const menuCategories = [
  {
    category: "The Vegetarian Soup",
    items: [
      { name: "Cream of Tomato Soup", description: "", price: "₹149" },
      { name: "Kali Mirch Soup", description: "", price: "₹149" },
      { name: "Hot N Sour", description: "", price: "₹149" },
      { name: "Manchow Soup", description: "", price: "₹149" },
      { name: "Lemon Coriander Soup", description: "", price: "₹149" },
      { name: "Sweet Corn Soup", description: "", price: "₹149" }
    ]
  },
  {
    category: "Tandoori (Veg Starter)",
    items: [
      { name: "Paneer Tikka Achari", description: "", price: "₹349" },
      { name: "Paneer Malai Tikka", description: "", price: "₹349" },
      { name: "Tandoori Aloo Stuffed", description: "", price: "₹329" },
      { name: "Tandoori Mushroom", description: "", price: "₹349" },
      { name: "Malai Chaap Tikka", description: "", price: "₹349" },
      { name: "Dahi Sholay", description: "", price: "₹329" },
      { name: "Haryali Tikki", description: "", price: "₹329" },
      { name: "Veg Seekh Kabab", description: "", price: "₹329" },
      { name: "Tandoori Veg Mix Grill", description: "Paneer, chaap, stuffed aloo, dahi sholay, mushroom", price: "₹699" }
    ]
  },
  {
    category: "Chinese Starter",
    items: [
      { name: "Honey Chilli Potato", description: "", price: "₹229" },
      { name: "Veg Spring Roll", description: "", price: "₹229" },
      { name: "Veg Steamed Momos (8 Pcs)", description: "", price: "₹199" },
      { name: "Tandoori Veg Momos (8 Pcs)", description: "", price: "₹249" },
      { name: "Crispy Corn Salt n Pepper", description: "", price: "₹269" },
      { name: "Chilli Paneer Dry / Gravy", description: "", price: "₹329" },
      { name: "Veg Manchurian Dry / Gravy", description: "", price: "₹279" }
    ]
  },
  {
    category: "Pizza and Pasta",
    items: [
      { name: "Marghrita Pizza", description: "", price: "₹249" },
      { name: "Corn Cheese Pizza", description: "", price: "₹299" },
      { name: "Garden Fresh Pizza", description: "Onion, tomato, capsicum, corn, olives, red paprika", price: "₹349" },
      { name: "Tandoori Paneer Pizza", description: "Paneer, onion, tomato, capsicum, olives, red paprika", price: "₹399" },
      { name: "White Sauce Pasta", description: "", price: "₹299" },
      { name: "Red Sauce Pasta", description: "", price: "₹299" },
      { name: "Mix Sauce Pasta", description: "", price: "₹299" }
    ]
  },
  {
    category: "Sabki Pasand Vegetarian Food",
    items: [
      { name: "Dal Makhni Pavitra Special", description: "Chef secret recipe", price: "₹349" },
      { name: "Dal Tadka", description: "Arhar dal tempering with Indian spice", price: "₹279" },
      { name: "Tawa Paneer", description: "Cottage cheese diced with capsicum, tomato, onion chopped masala gravy", price: "₹399" },
      { name: "Kadhai Paneer", description: "Cube of cottage cheese cooked with diced onion, tomato & capsicum spice gravy", price: "₹399" },
      { name: "Paneer Butter Masala", description: "Cottage cheese cooked with tomato & cashew nut gravy", price: "₹399" },
      { name: "Soya Chaap Butter Masala", description: "", price: "₹399" },
      { name: "Mix Vegetable", description: "Combination of various vegetables & cottage cheese cooked with Indian spice", price: "₹299" },
      { name: "Pindi Chana Masala", description: "Kabuli chana cooked with chef's style", price: "₹349" },
      { name: "Navratan Korma", description: "Combination of nine ratna cooked with cashew nut gravy", price: "₹399" },
      { name: "Malai Kofta", description: "Cottage cheese dumpling blended in rich creamy gravy", price: "₹399" }
    ]
  },
  {
    category: "Jain Food & Rajasthani",
    items: [
      { name: "Kaju Khoya Paneer", description: "", price: "₹399" },
      { name: "Khoya Mutter", description: "", price: "₹399" },
      { name: "Dal Haryali", description: "", price: "₹399" },
      { name: "Anguri Kofta", description: "", price: "₹399" },
      { name: "Gutta Curry", description: "", price: "₹299" },
      { name: "Vegtabal Jaipuri", description: "", price: "₹299" }
    ]
  },
  {
    category: "Biryani & Pulao",
    items: [
      { name: "Steam Rice", description: "", price: "₹219" },
      { name: "Jeera Rice", description: "", price: "₹239" },
      { name: "Veg Pulao", description: "", price: "₹249" },
      { name: "Peas Pulao", description: "", price: "₹239" },
      { name: "Pavitra Special Dum Biryani", description: "", price: "₹349" }
    ]
  },
  {
    category: "Indian Breads",
    items: [
      { name: "Tandoori Roti", description: "", price: "₹20" },
      { name: "Butter Roti", description: "", price: "₹29" },
      { name: "Missi Roti", description: "", price: "₹59" },
      { name: "Lachchha / Pudina Parantha", description: "", price: "₹59" },
      { name: "Plain Naan", description: "", price: "₹49" },
      { name: "Butter Naan", description: "", price: "₹59" },
      { name: "Garlic Naan", description: "", price: "₹69" },
      { name: "Cheese Naan", description: "", price: "₹79" },
      { name: "Bread Basket", description: "2 Roti, 1 Lachchha Parantha, 1 Missi Roti, 1 Butter Naan, 2 Papad", price: "₹249" }
    ]
  },
  {
    category: "Side Order",
    items: [
      { name: "Papad / Masala Papad", description: "", price: "₹49 / ₹59" },
      { name: "Plain Raita", description: "", price: "₹119" },
      { name: "Raita (Boondi/Mixed)", description: "", price: "₹159" },
      { name: "Pineapple Raita", description: "", price: "₹199" },
      { name: "Green Salad", description: "", price: "₹159" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Fresh Lime Soda", description: "", price: "₹109" },
      { name: "Lassi (Sweet / Salted)", description: "", price: "₹129" },
      { name: "Vanilla / Strawberry Shake", description: "With Ice Cream", price: "₹199" },
      { name: "Chocolate Shake", description: "With Ice Cream", price: "₹249" },
      { name: "Oreo Shake", description: "", price: "₹269" },
      { name: "Cold Coffee", description: "With Ice Cream", price: "₹249" },
      { name: "Virgin Mojito", description: "", price: "₹199" },
      { name: "Fruit Punch / Pina Colada", description: "", price: "₹249" }
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Gulab Jamun", description: "", price: "₹159" },
      { name: "Mango / Mix Ice Cream", description: "", price: "₹159" },
      { name: "Hot Sizzling Brownie", description: "With Ice Cream", price: "₹249" }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
          <img 
            src="/hero-bg.jpg" 
            alt="Menu Background"
            className="w-full h-full object-cover opacity-30 absolute inset-0 z-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Taste of Dilli 06
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground"
          >
            The Luxury Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Explore our carefully curated selection of 100% pure vegetarian culinary masterpieces, crafted with the finest ingredients and authentic Indian spices.
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {menuCategories.map((category, catIndex) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="border-b border-primary/30 pb-4 mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                
                <div className="flex flex-col gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group cursor-pointer">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="font-heading text-xl font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex-grow border-b border-dashed border-white/20 mx-4 relative top-[-6px]" />
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
