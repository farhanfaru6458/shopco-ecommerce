const { DressStyle } = require("../models");

async function seedDressStyles() {
  const styles = [
   {
  name: "Casual",
  slug: "casual",
  image:
    "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
}
,
    {
      name: "Formal",
      slug: "formal",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Party",
      slug: "party",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Gym",
      slug: "gym",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  for (const style of styles) {
    await DressStyle.upsert(style);
  }

  console.log("✅ Dress styles updated");
}

module.exports = seedDressStyles;
