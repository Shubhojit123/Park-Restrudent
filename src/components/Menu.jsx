import React from "react";
import "../styles/Menu.css";
const menuItems = [
  { id: 1, name: "Paneer Roll", price: "₹60", image: "/images/Paneer-kathi-roll-1B.jpg" },
  { id: 2, name: "Egg Roll", price: "₹30", image: "/images/Kolkatta-Egg-Roll-4.jpg" },
  { id: 3, name: "Chicken Roll", price: "₹50", image: "/images/chicken-tikka-paratha-rolls-featured.jpg" },
  { id: 4, name: "Egg Chicken Roll", price: "₹60", image: "/images/egg-chicken.jpg" },
  { id: 5, name: "Chicken Pakora", price: "₹15", image: "/images/ChickenPakodaBoneless_B_240121.jpg" },
  { id: 6, name: "Chicken Lollipop", price: "₹90", image: "/images/chicken-lollipop-1.jpeg" },
  { id: 7, name: "Boneless Pakora (6P)", price: "₹100", image: "/images/ChickenPakodaBoneless_B_240121.jpg" },
  { id: 8, name: "Chicken Cutlet", price: "₹80", image: "/images/Italian-Chicken-Cutlets-sq.jpg" },
  { id: 9, name: "Fish Fry", price: "₹100", image: "/images/Meen-Varuval-Tilapia-Fish-Fry-2.jpg" },
  { id: 10, name: "Mughlai", price: "₹70", image: "/images/MuttonMughlaiParatha.jpg" },
  { id: 11, name: "Chicken Mughlai", price: "₹90", image: "/images/egg-mughlai.png" },
  { id: 12, name: "Egg Chowmein", price: "₹50", image: "/images/chowmein.jpeg" },
  { id: 13, name: "Veg Chowmein", price: "₹40", image: "/images/Veg-Chow-Mein.webp" },
  { id: 14, name: "Chicken Egg Chowmein", price: "₹80", image: "/images/chicken-chow-mein-1-3.jpg" },
  { id: 15, name: "Paneer Chowmein", price: "₹80", image: "/images/panner-chao.png" },
  { id: 16, name: "Chicken Kosha", price: "₹80", image: "/images/kadhai chicken.jpg" },
  { id: 17, name: "Chicken do Pyaza", price: "₹110", image: "/images/chicken-dopiaza.jpg" },
  { id: 18, name: "Chilli Chicken", price: "₹150", image: "/images/Chilli_Chicken.webp" },
  { id: 19, name: "Paneer Chili", price: "₹160", image: "/images/chilli-paneer-recipe.jpg" },
  { id: 20, name: "Egg Rice", price: "₹60", image: "/images/Schezwan-Egg-Fried-Rice-1-500x375.jpg" },
  { id: 21, name: "Egg Chicken Rice", price: "₹90", image: "/images/delicious-chicken-fried.avif" },
  { id: 22, name: "Paneer Rice", price: "₹90", image: "/images/paneer-fried-rice-featured.jpg" },
  { id: 23, name: "Biryani", price: "₹110", image: "/images/Chicken-Biryani-Recipe.jpg" },
  { id: 24, name: "Haat Ruti", price: "₹5", image: "/images/maxresdefault.jpg" },
  { id: 25, name: "Roomali Ruti", price: "₹8", image: "/images/rumali.png" },
  { id: 26, name: "Chana Masala", price: "₹50", image: "/images/EASY-Chana-Masala-SQUARE.jpg" },
  { id: 27, name: "Veg Tarka", price: "₹50", image: "/images/tarka-dal-tadka-sq.jpg" },
  { id: 28, name: "Egg Tarka", price: "₹60", image: "/images/Egg-Tadka.jpg" },
  { id: 29, name: "Egg Chicken Tarka", price: "₹80", image: "/images/egg-chicken-tarka.jpg" },
  { id: 30, name: "Momo", price: "₹50", image: "/images/momo.jpg" },
  { id: 31, name: "Fry Momo", price: "₹70", image: "/images/fry_momo.webp" },
  { id: 32, name: "Pan Fried Momo", price: "₹80", image: "/images/pan_momo.jpg" }
];



function Menu() {
    return (
        <section className="menu" id="menu">
            <div className="menu-heading">
                <h2>Our <span>Menu</span></h2>
                <p>Explore our delicious and carefully crafted dishes.</p>
            </div>

            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="menu-price">{item.price}</p>
                    </div>
                ))}
            </div>

            <button className="menu-btn">View Full Menu</button>
        </section>
    );
}

export default Menu;
