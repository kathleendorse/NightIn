const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Nightin collection and inserts the nightin below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightindb");

const nightSeed = [

  // "Food" Collection Seed Data
  // Beef
  {
    name: "New York Strip Steak with Wild Rice and Broccoli",
    type: "red meat",
    wine: "red",
    subwine: "Pinot Noir",
    ingredients: [(
      "1 one-and-a-half-inch-thick NY Strip Steak",
      "half cup wild rice",
      "1 brocoli crown, diced",
      "garlic salt, to taste",
      "pepper, to taste",
      "2 tablespoons of olive oil"
    )],
    image: `src="https://www.dinneratthezoo.com/wp-content/uploads/2020/03/new-york-strip-steak-44.jpg"`,
    directions: [
      "1. About 20 minutes before grilling, remove the steaks from the refrigerator and cover in olive oil and garlic salt and pepper. Let sit, covered, at room temperature.",
      "2. Prepare rice using desired method and allow it to cook while you prepare steak and broccoli.",
      "3. Heat your grill to high. Brush the steaks on both sides with oil and season liberally with salt and pepper. Place the steaks on the grill and cook until golden brown and slightly charred, 4 to 5 minutes. Turn the steaks over and continue to grill 3 to 5 minutes for medium-rare (an internal temperature of 135 degrees F), 5 to 7 minutes for medium (140 degrees F) or 8 to 10 minutes for medium-well (150 degrees F). Place Brocoli in pot of boiling water for 8 to 10 minutes.",
      "4. Transfer the steaks to a cutting board or platter, tent loosely with foil and let rest 5 minutes before slicing. Add rice and broccoli.",
      "5. Add the drained black beans and bring to a boil. Reduce heat, cover, and simmer for 30-50 minutes (depending on rice variety). Stir the mixture occasionally and add more liquid as needed to keep it from sticking to the bottom.",
      "6. About 10 minutes before the rice is done, sear the skirt steak. Pat the steak dry and season all over with salt and pepper.",
      "7. Heat the neutral cooking oil in a skillet over high heat. Once the oil is very, very hot add the steak and cook without moving for 3-5 minutes (depending on thickness). Flip and cook until desired internal temperature is reached, about 3-4 minutes more. Transfer to a plate and cover with foil.",
      "8. Divide the spicy rice and beans between plates and arrange the steak on top. Pile each plate with the garnish and enjoy!"
    ]
  },
  {
    name: "Skirt Steak with Spicy Rice and Beans",
    type: "red meat",
    wine: "red",
    subwine: "Syrah",
    ingredients: [(
      "1 pound skirt steak",
      "yellow onion, peeled and diced",
      "jalapeño pepper, trimmed and diced",
      "8 ounces mushrooms, trimmed and sliced",
      "2 ounces tequila (optional)",
      "paprika, to taste",
      "garlic powder, to taste",
      "cayene powder, to taste",
      "oregeno, to taste",
      "2 bays leaves",
      "2 cups chicken stock",
      "15 ounce can of black beans, drained",
      "salt and pepper, to taste"
    )],
    image: `src="https://www.triedandtruerecipe.com/wp-content/uploads/2019/12/Skirt-Steak-with-Spicy-Rice-and-Beans_MidPage-867x1024.png"`,
    directions: [
      "1. In a wide pot, heat the oil over medium-high. Once hot, add the onion and jalapeño pepper and cook, stirring often, for 7-8 minutes until golden brown.",
      "2: Add the mushrooms to the skillet and cook, stirring occasionally, for 8-10 minutes until well-browned all over. Season with salt and pepper.",
      "3. Pour the tequila into the skillet and scrape up any browned bits stuck to the bottom of the pan. Bring to a boil and cook until most of the liquid has evaporated.",
      "4. Add the rice to the vegetables and season with the spices. Add the bay leaves. Pour in the chicken stock and scrape up any browned bits stuck to the bottom.",
    ]
  },
  {
    name: "Old Fashioned Beef Stew",
    type: "red meat",
    wine: "red",
    subwine: "Cabernet Sauvignon",
    ingredients: [(
      "¼ cup all-purpose flour",
      "¼ teaspoon freshly ground pepper",
      "1 pound beef stewing meat, trimmed and cut into inch cubes",
      "5 teaspoons vegetable oil",
      "2 tablespoons red wine vinegar",
      "1 cup red wine",
      "3 ½ cups beef broth, homemade or low-sodium canned",
      "2 bay leaves",
      "1 medium onion, peeled and chopped",
      "5 medium carrots, peeled and cut into 1/4-inch rounds",
      "2 large baking potatoes, peeled and cut into 3/4-inch cubes",
      "12 teaspoons salt"
    )],
    image: `src="https://static01.nyt.com/images/2020/02/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg"`,
    directions: [
      "1. Combine the flour and pepper in a bowl, add the beef and toss to coat well. Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.",
      "2. Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.",
      "3. Cover and cook, skimming broth from time to time, until the beef is tender, about 1 1/2 hours. Add the onions and carrots and simmer, covered, for 10 minutes. Add the potatoes and simmer until vegetables are tender, about 30 minutes more. Add broth or water if the stew is dry. Season with salt and pepper to taste. Ladle among 4 bowls and serve."
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  // PORK
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  //Salad
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  //Seafood
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  //Chicken
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  // Pasta
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  },
  {
    name: "",
    type: "",
    wine: "",
    subwine: "",
    ingredients: [(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    )],
    image: ``,
    directions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
  ]
  }


];

db.Night.remove({})
  .then(() => db.Night.collection.insertMany(nightSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
