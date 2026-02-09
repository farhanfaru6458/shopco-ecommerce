const { Product, Review } = require("../models");

async function seedReviews() {
  console.log("⭐ Seeding reviews...");
  const products = await Product.findAll();
  
  const reviews = [
    { rating: 5, comment: "Absolutely love this! The quality is top-notch and it fits perfectly.", userName: "Sarah M." },
    { rating: 4, comment: "Very comfortable and stylish. I've received so many compliments.", userName: "Alex K." },
    { rating: 5, comment: "I'm highly impressed with the material. Worth every penny!", userName: "James L." },
    { rating: 5, comment: "Exactly what I was looking for. Fast shipping too.", userName: "Emma D." },
    { rating: 4, comment: "Great value for money. The color is slightly different but still nice.", userName: "Michael R." },
    { rating: 5, comment: "Best purchase this year! Will definitely buy more.", userName: "Olivia W." },
    { rating: 4, comment: "Good quality, though the size runs a bit large.", userName: "David H." },
    { rating: 5, comment: "Super soft fabric and very durable. Highly recommend.", userName: "Sophia G." },
    { rating: 5, comment: "Functional and fashionable. Perfect for any occasion.", userName: "Chris B." },
    { rating: 3, comment: "It's decent, but I expected it to be a bit thicker.", userName: "Mark T." }
  ];

  const reviewRecords = [];
  for (const product of products) {
    // Shuffle and pick 5-8 reviews for each product
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 4) + 5; // 5 to 8 reviews
    
    for (let i = 0; i < count; i++) {
        reviewRecords.push({
            ...shuffled[i % shuffled.length],
            ProductId: product.id
        });
    }
  }

  await Review.bulkCreate(reviewRecords);
  console.log(`✅ Seeded ${reviewRecords.length} reviews for ${products.length} products`);
}

module.exports = seedReviews;
