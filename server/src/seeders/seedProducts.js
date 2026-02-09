const Product = require("../models/Product");

async function seedProducts() {
  console.log("🗑️ Deleting old products safely...");

  // SAFE delete (works with foreign keys)
  await Product.destroy({ where: {} });

  await Product.bulkCreate([
    
    // ================= NEW ARRIVALS =================
    {
      title: "Minimal White T-Shirt",
      description: "Premium cotton minimal white t-shirt.",
      price: 120,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      productType: "T-shirts",
      colors: ["White", "Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Relaxed Fit Denim",
      description: "Comfortable relaxed fit denim jeans.",
      price: 250,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Jeans",
      colors: ["Blue", "Black"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Oversized Casual Shirt",
      description: "Modern oversized casual shirt.",
      price: 190,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"],
      productType: "Shirts",
      colors: ["Blue", "White"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Formal Checkered Shirt",
      description: "Premium checkered formal shirt.",
      price: 135,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Blue", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Summer Linen Shirt",
      description: "Lightweight summer linen shirt.",
      price: 85,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["White", "Beige"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Beige Cargo Pants",
      description: "Utility style beige cargo pants.",
      price: 110,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1517445312882-fa99b53d13ee"],
      productType: "Jeans",
      colors: ["Beige", "Green"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Olive Green Jacket",
      description: "Stylish olive green bomber jacket.",
      price: 190,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Green", "Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Streetwear Hoodie",
      description: "Urban style streetwear hoodie.",
      price: 130,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1556906781-9a412961d28c"],
      productType: "Hoodie",
      colors: ["Grey", "Black"],
      sizes: ["M", "L", "XL", "XXL"]
    },
    {
      title: "Oversized Graphic Tee",
      description: "Trendy oversized graphic t-shirt.",
      price: 75,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1503341504253-dff4815485f1"],
      productType: "T-shirts",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Slim Fit Chinos",
      description: "Classic slim fit chino trousers.",
      price: 100,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Jeans",
      colors: ["Beige", "Navy"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Denim Jacket",
      description: "Vintage wash denim jacket.",
      price: 160,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Shirts",
      colors: ["Blue"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Lightweight Windbreaker",
      description: "Water-resistant windbreaker jacket.",
      price: 140,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1624378449349-91d4b1f07b44"],
      productType: "Hoodie",
      colors: ["Black", "Red"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Corduroy Shirt",
      description: "Soft texture corduroy shirt.",
      price: 115,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Brown", "Green"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Basic Black Tee",
      description: "Essential premium black t-shirt.",
      price: 45,
      category: "new-arrivals",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      productType: "T-shirts",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },

    // ================= TOP SELLING =================
    {
      title: "Skinny Fit Jeans",
      description: "Best-selling skinny fit denim.",
      price: 240,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f"],
      productType: "Jeans",
      colors: ["Blue", "Black"],
      sizes: ["28", "30", "32", "34"]
    },
    {
      title: "Classic Formal Trousers",
      description: "High-quality formal trousers.",
      price: 145,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Jeans",
      colors: ["Black", "Grey"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Vertical Stripe Shirt",
      description: "Customer favorite formal shirt.",
      price: 212,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1598033129183-c4f50c736f10"],
      productType: "Shirts",
      colors: ["White", "Blue"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Loose Fit Bermuda Shorts",
      description: "Comfortable loose fit shorts.",
      price: 80,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"],
      productType: "Shorts",
      colors: ["Khaki", "Navy"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Blue Denim Jeans",
      description: "Classic blue straight leg jeans.",
      price: 150,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Jeans",
      colors: ["Blue"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Grey Sweatshirt",
      description: "Cozy grey cotton sweatshirt.",
      price: 90,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1556906781-9a412961d28c"],
      productType: "Hoodie",
      colors: ["Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Flannel Shirt",
      description: "Warm red and black flannel.",
      price: 110,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Red", "Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Puffer Jacket",
      description: "Insulated winter puffer jacket.",
      price: 220,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Black", "Blue"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Cargo Shorts",
      description: "Durable utility cargo shorts.",
      price: 75,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"],
      productType: "Shorts",
      colors: ["Green", "Beige"],
      sizes: ["30", "32", "34"]
    },
    {
      title: "V-Neck Sweater",
      description: "Smart casual v-neck sweater.",
      price: 100,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Shirts",
      colors: ["Navy", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Bomber Jacket",
      description: "Classic black bomber jacket.",
      price: 180,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Polo T-Shirt",
      description: "Timeless pique polo shirt.",
      price: 65,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "T-shirts",
      colors: ["White", "Navy", "Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Track Pants",
      description: "Sporty casual track pants.",
      price: 85,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "Jeans",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Henley Shirt",
      description: "Casual long sleeve henley.",
      price: 70,
      category: "top-selling",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      productType: "Shirts",
      colors: ["Green", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },

    // ================= CASUAL =================
    {
      title: "Gradient Graphic T-Shirt",
      description: "Soft cotton graphic t-shirt.",
      price: 145,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"],
      productType: "T-shirts",
      colors: ["Orange", "Blue"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Black Striped T-Shirt",
      description: "Casual striped modern tee.",
      price: 120,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1520975916090-3105956dac38"],
      productType: "T-shirts",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Checkered Casual Shirt",
      description: "Classic casual checkered shirt.",
      price: 180,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Red", "White"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Casual Polo Shirt",
      description: "Everyday comfort polo.",
      price: 175,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "T-shirts",
      colors: ["Blue", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Sleeve Striped T-Shirt",
      description: "Contrast sleeve casual tee.",
      price: 130,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b"],
      productType: "T-shirts",
      colors: ["White", "Red"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Chino Shorts",
      description: "Comfortable beige chino shorts.",
      price: 95,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b"],
      productType: "Shorts",
      colors: ["Beige"],
      sizes: ["30", "32", "34"]
    },
    {
      title: "Casual Linen Pants",
      description: "Breathable linen trousers.",
      price: 105,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Jeans",
      colors: ["Beige", "White"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Printed Aloha Shirt",
      description: "Tropical print vacation shirt.",
      price: 85,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Blue", "Green"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Relaxed Fit Hoodie",
      description: "Chill vibes oversized hoodie.",
      price: 120,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1556906781-9a412961d28c"],
      productType: "Hoodie",
      colors: ["Grey", "Black"],
      sizes: ["M", "L", "XL", "XXL"]
    },
    {
      title: "Crew Neck Sweatshirt",
      description: "Essential crew neck pullover.",
      price: 95,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1602293589930-45aad59ba3b7"],
      productType: "Hoodie",
      colors: ["Navy", "Red"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Denim Shirt",
      description: "Rugged blue denim button-up.",
      price: 115,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"],
      productType: "Shirts",
      colors: ["Blue"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Zip-Up Hoodie",
      description: "Convenient zip-up hoodie.",
      price: 125,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1624378449349-91d4b1f07b44"],
      productType: "Hoodie",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Regular Fit Jeans",
      description: "Everyday regular fit jeans.",
      price: 130,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Jeans",
      colors: ["Blue"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Casual Vest",
      description: "Layering padded vest.",
      price: 140,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Green", "Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Long Sleeve Tee",
      description: "Basic long sleeve t-shirt.",
      price: 60,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b"],
      productType: "T-shirts",
      colors: ["White", "Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Board Shorts",
      description: "Printed board shorts for beach.",
      price: 70,
      category: "casual",
      images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b"],
      productType: "Shorts",
      colors: ["Blue", "Yellow"],
      sizes: ["S", "M", "L", "XL"]
    },

    // ================= FORMAL =================
    {
      title: "Formal White Shirt",
      description: "Classic office wear white shirt.",
      price: 210,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0"],
      productType: "Shirts",
      colors: ["White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Premium Black Suit",
      description: "Complete 3-piece formal black suit.",
      price: 450,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35"],
      productType: "Shirts", // Suit is complicated, let's call it Shirts or maybe Hoodie (Jacket)? I'll stick to Shirts as it's dressy
      colors: ["Black"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Navy Blue Tuxedo",
      description: "Midnight blue tuxedo for special events.",
      price: 360,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf"],
      productType: "Shirts",
      colors: ["Navy"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Textured Grey Blazer",
      description: "Modern textured grey formal blazer.",
      price: 210,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"],
      productType: "Shirts",
      colors: ["Grey"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Vertical Formal Shirt",
      description: "Formal striped slim fit shirt.",
      price: 212,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1598033129183-c4f50c736f10"],
      productType: "Shirts",
      colors: ["White", "Blue"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Classic Blazer",
      description: "Tailored blazer jacket.",
      price: 320,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf"],
      productType: "Shirts",
      colors: ["Black"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Grey Suit Trousers",
      description: "Professional grey suit pants.",
      price: 160,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Jeans",
      colors: ["Grey"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Blue Dress Shirt",
      description: "Crisp blue formal shirt.",
      price: 125,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0"],
      productType: "Shirts",
      colors: ["Blue"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Charcoal Waistcoat",
      description: "Formal charcoal grey waistcoat.",
      price: 150,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1594938328870-9623159c8c99"],
      productType: "Shirts",
      colors: ["Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Tuxedo Shirt",
      description: "Pleated front tuxedo shirt.",
      price: 180,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Double Breasted Blazer",
      description: "Sophisticated double breasted jacket.",
      price: 350,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf"],
      productType: "Shirts",
      colors: ["Blue", "Black"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Pinstripe Suit",
      description: "Classic navy pinstripe suit.",
      price: 480,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1593030761757-71fae45fa5e7"],
      productType: "Shirts",
      colors: ["Navy"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Beige Formal Slacks",
      description: "Polished beige formal slacks.",
      price: 155,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80"],
      productType: "Jeans",
      colors: ["Beige"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "White Tuxedo Jacket",
      description: "Elegant white dinner jacket.",
      price: 380,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"],
      productType: "Shirts",
      colors: ["White"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Silk Dress Shirt",
      description: "Luxurious black silk shirt.",
      price: 250,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1621072118004-e131792fd905"],
      productType: "Shirts",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Formal Overcoat",
      description: "Wool blend formal overcoat.",
      price: 450,
      category: "formal",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },

    // ================= GYM =================
    {
      title: "Athletic Gym T-Shirt",
      description: "Quick-dry athletic t-shirt.",
      price: 110,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"],
      productType: "T-shirts",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Workout Hoodie",
      description: "Lightweight hoodie for warm-ups.",
      price: 180,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1578768079052-aa76e52ff62e"],
      productType: "Hoodie",
      colors: ["Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Training Joggers",
      description: "Flexible joggers for gym sessions.",
      price: 170,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "Jeans",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Gym Shorts",
      description: "Comfort-fit gym shorts.",
      price: 100,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b"],
      productType: "Shorts",
      colors: ["Black", "Blue"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Compression Training Shirt",
      description: "Advanced compression shirt for muscle support.",
      price: 135,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      productType: "T-shirts",
      colors: ["Black", "White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Gym Leggings",
      description: "High-waist stretchable gym leggings.",
      price: 110,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1506152983158-b4a74a01c721"],
      productType: "Jeans",
      colors: ["Black"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Muscle Fit Tee",
      description: "Form accentuating muscle fit tee.",
      price: 95,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"],
      productType: "T-shirts",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Gym Stringer",
      description: "Minimal back gym stringer.",
      price: 85,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"],
      productType: "T-shirts",
      colors: ["Black", "Red"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Compression Tights",
      description: "Recovery compression tights.",
      price: 120,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1506152983158-b4a74a01c721"],
      productType: "Jeans",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Sports Shorts",
      description: "Breathable mesh sports shorts.",
      price: 80,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b"],
      productType: "Shorts",
      colors: ["Blue", "Red"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Track Jacket",
      description: "Retro style track jacket.",
      price: 150,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1624378449349-91d4b1f07b44"],
      productType: "Hoodie",
      colors: ["Black", "Navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Sleeveless Hoodie",
      description: "Edgy sleeveless gym hoodie.",
      price: 130,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1602293589930-45aad59ba3b7"],
      productType: "Hoodie",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Performance Joggers",
      description: "Tapered fit performance joggers.",
      price: 160,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "Jeans",
      colors: ["Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Mesh Gym Tank",
      description: "Airy mesh tank for cardio.",
      price: 85,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"],
      productType: "T-shirts",
      colors: ["White"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Warm-Up Pants",
      description: "Loose fit warm-up track pants.",
      price: 140,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1581655353564-df123a1eb820"],
      productType: "Jeans",
      colors: ["Black", "Navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Base Layer Top",
      description: "Thermal base layer for cold runs.",
      price: 115,
      category: "gym",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      productType: "Shirts",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },

    // ================= PARTY =================
    {
      title: "Printed Party Shirt",
      description: "Bold printed shirt for party nights.",
      price: 195,
      category: "party",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "Shirts",
      colors: ["Red", "Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Slim Party T-Shirt",
      description: "Stylish slim fit party t-shirt.",
      price: 150,
      category: "party",
      images: ["https://images.unsplash.com/photo-1618354691551-44de113f0164"],
      productType: "T-shirts",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Party Wear Jacket",
      description: "Lightweight jacket for evening events.",
      price: 340,
      category: "party",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Designer Party Shirt",
      description: "Premium glossy finish party shirt.",
      price: 230,
      category: "party",
      images: ["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4"],
      productType: "Shirts",
      colors: ["White", "Silver"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Party Fit Denim",
      description: "Denim designed for party looks.",
      price: 260,
      category: "party",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Jeans",
      colors: ["Blue", "Black"],
      sizes: ["30", "32", "34", "36"]
    },
    {
      title: "Statement Graphic Tee",
      description: "Eye-catching graphic tee for nights out.",
      price: 165,
      category: "party",
      images: ["https://images.unsplash.com/photo-1503341504253-dff4815485f1"],
      productType: "T-shirts",
      colors: ["Black", "Gold"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Velvet Blazer",
      description: "Luxurious velvet party blazer.",
      price: 380,
      category: "party",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Shirts",
      colors: ["Red", "Purple"],
      sizes: ["38", "40", "42", "44"]
    },
    {
      title: "Sequin Top",
      description: "Dazzling sequin party top.",
      price: 210,
      category: "party",
      images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c"],
      productType: "T-shirts",
      colors: ["Silver", "Gold"],
      sizes: ["S", "M", "L"]
    },
    {
      title: "Leather Jacket",
      description: "Edgy black leather motorcycle jacket.",
      price: 450,
      category: "party",
      images: ["https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"],
      productType: "Hoodie",
      colors: ["Black"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Silk Party Shirt",
      description: "Smooth silk shirt for clubbing.",
      price: 220,
      category: "party",
      images: ["https://images.unsplash.com/photo-1621072118004-e131792fd905"],
      productType: "Shirts",
      colors: ["Black", "Red"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Ripped Skinny Jeans",
      description: "Rockstar style ripped jeans.",
      price: 190,
      category: "party",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Jeans",
      colors: ["Black", "Blue"],
      sizes: ["30", "32", "34"]
    },
    {
      title: "Satin Bomber Jacket",
      description: "Shiny satin bomber for nights out.",
      price: 260,
      category: "party",
      images: ["https://images.unsplash.com/photo-1624378449349-91d4b1f07b44"],
      productType: "Hoodie",
      colors: ["Black", "Pink"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Metallic Print Tee",
      description: "Futuristic metallic print t-shirt.",
      price: 140,
      category: "party",
      images: ["https://images.unsplash.com/photo-1503341504253-dff4815485f1"],
      productType: "T-shirts",
      colors: ["Silver"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "Distressed Denim Jacket",
      description: "Heavily distressed denim jacket.",
      price: 230,
      category: "party",
      images: ["https://images.unsplash.com/photo-1542272604-787c3835535d"],
      productType: "Shirts",
      colors: ["Blue"],
      sizes: ["M", "L", "XL"]
    },
    {
      title: "Party Waistcoat",
      description: "Stylish waistcoat for layering.",
      price: 170,
      category: "party",
      images: ["https://images.unsplash.com/photo-1594938328870-9623159c8c99"],
      productType: "Shirts",
      colors: ["Black", "Grey"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      title: "High-Fashion Trench Coat",
      description: "Statement piece trench coat.",
      price: 550,
      category: "party",
      images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea"],
      productType: "Hoodie",
      colors: ["Beige", "Black"],
      sizes: ["S", "M", "L", "XL"]
    },

  ]);

  console.log("✅ Products seeded safely");
}

module.exports = seedProducts;
