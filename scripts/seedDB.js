const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Nightin collection and inserts the nightin below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightindb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


// "Food" Collection Seed Data
const recipeSeed = [
  // Beef
  {
    name: "New York Strip Steak with Wild Rice and Broccoli",
    type: "red meat",
    wine: "red",
    subwine: "Pinot Noir",
    ingredients: [
      {id: 1, ing: "1 one-and-a-half-inch-thick NY Strip Steak"},
      {id: 2, ing: "half cup wild rice"},
      {id: 3, ing: "1 brocoli crown, diced"},
      {id: 4, ing: "garlic salt, to taste"},
      {id: 5, ing: "pepper, to taste"},
      {id: 6, ing: "2 tablespoons of olive oil"}
    ],
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2020/03/new-york-strip-steak-44.jpg",
    directions: [
      {id: 1, dir: "About 20 minutes before grilling, remove the steaks from the refrigerator and cover in olive oil and garlic salt and pepper. Let sit, covered, at room temperature."},
      {id: 2, dir: "Prepare rice using desired method and allow it to cook while you prepare steak and broccoli."},
      {id: 3, dir: "Heat your grill to high. Brush the steaks on both sides with oil and season liberally with salt and pepper. Place the steaks on the grill and cook until golden brown and slightly charred, 4 to 5 minutes. Turn the steaks over and continue to grill 3 to 5 minutes for medium-rare (an internal temperature of 135 degrees F), 5 to 7 minutes for medium (140 degrees F) or 8 to 10 minutes for medium-well (150 degrees F). Place Brocoli in pot of boiling water for 8 to 10 minutes."},
      {id: 4, dir: "Transfer the steaks to a cutting board or platter, tent loosely with foil and let rest 5 minutes before slicing. Add rice and broccoli."},
      {id: 5, dir: "Add the drained black beans and bring to a boil. Reduce heat, cover, and simmer for 30-50 minutes (depending on rice variety). Stir the mixture occasionally and add more liquid as needed to keep it from sticking to the bottom."},
      {id: 6, dir: "About 10 minutes before the rice is done, sear the skirt steak. Pat the steak dry and season all over with salt and pepper."},
      {id: 7, dir: "Heat the neutral cooking oil in a skillet over high heat. Once the oil is very, very hot add the steak and cook without moving for 3-5 minutes (depending on thickness). Flip and cook until desired internal temperature is reached, about 3-4 minutes more. Transfer to a plate and cover with foil."},
      {id: 8, dir: "Divide the spicy rice and beans between plates and arrange the steak on top. Pile each plate with the garnish and enjoy!"}
    ],
  },
  {
    name: "Skirt Steak with Spicy Rice and Beans",
    type: "red meat",
    wine: "red",
    subwine: "Syrah",
    ingredients: [
      {id: 1, ing: "1 pound skirt steak"},
      {id: 2, ing: "yellow onion, peeled and diced"},
      {id: 3, ing: "jalapeño pepper, trimmed and diced"},
      {id: 4, ing: "8 ounces mushrooms, trimmed and sliced"},
      {id: 5, ing: "2 ounces tequila (optional)"},
      {id: 6, ing: "paprika, to taste"},
      {id: 7, ing: "garlic powder, to taste"},
      {id: 8, ing: "cayene powder, to taste"},
      {id: 9, ing: "oregeno, to taste"},
      {id: 10, ing: "2 bays leaves"},
      {id: 11, ing: "2 cups chicken stock"},
      {id: 12, ing: "15-ounce can of black beans, drained"},
      {id: 13, ing: "salt and pepper, to taste"}
    ],
    image:
      "https://www.triedandtruerecipe.com/wp-content/uploads/2019/12/Skirt-Steak-with-Spicy-Rice-and-Beans_MidPage-867x1024.png",
    directions: [
      {id: 1, dir: "In a wide pot, heat the oil over medium-high. Once hot, add the onion and jalapeño pepper and cook, stirring often, for 7-8 minutes until golden brown."},
      {id: 2, dir: "Add the mushrooms to the skillet and cook, stirring occasionally, for 8-10 minutes until well-browned all over. Season with salt and pepper."},
      {id: 3, dir: "Pour the tequila into the skillet and scrape up any browned bits stuck to the bottom of the pan. Bring to a boil and cook until most of the liquid has evaporated."},
      {id: 4, dir: "Add the rice to the vegetables and season with the spices. Add the bay leaves. Pour in the chicken stock and scrape up any browned bits stuck to the bottom."}
    ],
  },
  {
    name: "Old Fashioned Beef Stew",
    type: "red meat",
    wine: "red",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      {id: 1, ing: "¼ cup all-purpose flour"},
      {id: 2, ing: "¼ teaspoon freshly ground pepper"},
      {id: 3, ing: "1 pound beef stewing meat, trimmed and cut into inch cubes"},
      {id: 4, ing: "5 teaspoons vegetable oil"},
      {id: 5, ing: "2 tablespoons red wine vinegar"},
      {id: 6, ing: "1 cup red wine"},
      {id: 7, ing: "3 ½ cups beef broth, homemade or low-sodium canned"},
      {id: 8, ing: "2 bay leaves"},
      {id: 9, ing: "1 medium onion, peeled and chopped"},
      {id: 10, ing: "5 medium carrots, peeled and cut into ¼-inch rounds"},
      {id: 11, ing: "2 large baking potatoes, peeled and cut into ¾-inch cubes"},
      {id: 12, ing: "12 teaspoons salt"}
    ],
    image:
      "https://static01.nyt.com/images/2020/02/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
    directions: [
      {id: 1, dir: "Combine the flour and pepper in a bowl, add the beef and toss to coat well. Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches."},
      {id: 2, dir: "Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer."},
      {id: 3, dir: "Cover and cook, skimming broth from time to time, until the beef is tender, about 1 ½ hours. Add the onions and carrots and simmer, covered, for 10 minutes. Add the potatoes and simmer until vegetables are tender, about 30 minutes more. Add broth or water if the stew is dry. Season with salt and pepper to taste. Ladle among 4 bowls and serve."}
     ],
  },
  {
    name: "Sautéed Sirloin Medallions with Pearl Onion Red Wine Sauce",
    type: "red meat",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      {id: 1, ing: "1 pound Certified Angus Beef ® sirloin filets (2-3 ounces each)  "},
      {id: 2, ing: "2 tablespoons vegetable or canola oil"},
      {id: 3, ing: "1 cup frozen petite pearl onions"},
      {id: 4, ing: "½ cup red wine blend"},
      {id: 5, ing: "½ cup beef stock"},
      {id: 6, ing: "1 tablespoon tomato paste"},
      {id: 7, ing: "½ teaspoon coarse kosher salt"},
      {id: 8, ing: "½ teaspoon cracked black pepper"},
      {id: 9, ing: "2 sprigs fresh thyme"}
    ],
    image:
      "https://www.certifiedangusbeef.com/recipes/images/recipes/1171bec1-4480-41d0-b34a-4048263424c2.jpg",
    directions: [
      {id: 1, dir: "1. Pat medallions dry. Heat oil in pan over medium heat. Sear medallions, browning for 2 minutes on each side to develop a dark mahogany crust; remove from pan"},
      {id: 2, dir: "2. Add pearl onions and sear until golden. Add red wine; reduce by half. Add beef stock, tomato paste, salt, pepper and thyme. Simmer 2 minutes until sauce has thickened."},
      {id: 3, dir: "3. Add medallions, cover and turn off heat. Allow to sit covered for five minutes before serving."}
    ],
  },
  {
    name: "Cast Iron Skillet Porterhouse Steak",
    type: "red meat",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      {id: 1, ing: "One 2- to 2 ½-inch-thick porterhouse steak"},
      {id: 2, ing: "Kosher salt and freshly ground black pepper"},
      {id: 3, ing: "1 tablespoon canola oil"},
      {id: 4, ing: "2 tablespoons butter, cubed"},
      {id: 5, ing: "garlic clove, to taste"},
      {id: 6, ing: "sprig of thyme, to taste"},
      {id: 7, ing: "sprig of rosemary, to taste"}
    ],
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/3/27/0/KC1611_Porterhouse-Steak-with-Herb-Fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1522172643310.jpeg",
    directions: [
      {id: 1, dir: "1. Let the steak rest at room temperature for 30 minutes."},
      {id: 2, dir: "2. Preheat the broiler. Heat a cast-iron skillet over medium-high heat until very hot."},
      {id: 3, dir: "3. Season the steak heavily with salt and pepper on all sides. Add the oil to the skillet, then place the steak in the skillet and do not move it.  Cook until a nice sear forms, about 3 minutes. Remove the skillet from the heat, transfer the steak to a cutting board and cut both the filet and sirloin from the bone. Slice the steak against the grain into thick pieces.  Put the bone back into the skillet and reassemble the steak around it (it should look like the steak originally did) with the seared side up. Top with pieces of butter. Add a couple cloves of garlic and a few sprigs of thyme or rosemary, if desired."},
      {id: 4, dir: "4. Broil to desired doneness, about 4 minutes for medium rare, 5 to 6 minutes for medium.  Transfer to a serving plate and pour the pan drippings over the steak."}
    ],
  },
  // Pork 
  // Ingredients - Array of objects
  {
    name: "Pork Tenderlion with Oven Roasted Potatoes",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      {id: 1, ing: "1 lb pork tenderloin"},
      {id: 2, ing: "½ yukon gold potatoes"},
      {id: 3, ing: "2 tablespoons pork rub"},
      {id: 4, ing: "2 tablespoons of Olive Oil"},
      {id: 5, ing: "cooking twine"},
      {id: 6, ing: "salt and pepper, to taste"}
    ],
    image:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2019/04/sheet-pan-pork-tenderloin-potatoes-3.jpg",
    directions: [
      {id: 1, dir: "1. Cover tederloin liberably in rub. Set in fridge overnight."},
      {id: 2, dir: "2. Pre-Heat oven to 425. Tie twine around tenderloin in criss-crossed pattern. Cover with 1 Tablespoon of olive oil and place on cooking sheet, uncovered."},
      {id: 3, dir: "3. Toss potatoes in remaining oil, adding salt and pepper"},
      {id: 4, dir: "Pour potatoes out onto the baking sheet, srrounding the tenderloin and place in the oven."},
      {id: 5, dir: "5. Roast for 25 minutes, turning the tenderloin over every 6-8 minutes."}
    ],
  },
  {
    name: "Honey Garlic Pork Chops",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      {id: 1, ing: "4 pork chops bone in or out"},
      {id: 2, ing: "Salt and pepper, to season"},
      {id: 3, ing: "1 teaspoon garlic powder"},
      {id: 4, ing: "2 tablespoons olive oil"},
      {id: 5, ing: "6 cloves garlic, minced"},
      {id: 6, ing: "1 tablespoon unsalted butter"},
      {id: 7, ing: "¼ cup honey"},
      {id: 8, ing: "¼ cup water (or chicken broth)"},
      {id: 9, ing: "2 tablespoons rice wine vinegar (or apple cider vinegar, or any white vinegar)"}
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2018/05/Easy-Honey-Garlic-Pork-Chops-IMAGE-6.jpg",
    directions: [
      {id: 1, dir: "1. Preheat oven broiler (or grill) on medium-high heat. Season chops with salt, pepper and garlic powder just before cooking."},
      {id: 2, dir: "2. Heat oil in a pan or skillet over medium high heat until hot. Sear chops on both sides until golden and cooked through (about 4-5 minutes each side). Transfer to a plate; set aside."},
      {id: 3, dir: "3. Reduce heat to medium. Melt butter in the same pan, scraping up any browned bits from the bottom of the pan. Sauté garlic until fragrant (about 30 seconds). Add the honey, water and vinegar. Increase heat to medium-high and continue to cook until the sauce reduces down and thickens slightly (about 3-4 minutes), while stirring occasionally."},
      {id: 4, dir: "4. Add pork back into the pan, baste generously with the sauce and broil/grill for 1-2 minutes, or until edges are slightly charred."},
      {id: 5, dir: "5. Garnish with parsley and serve over vegetables, rice, pasta or with a salad."}
    ],
  },
  {
    name: "Pork and Fennel Ragout",
    type: "white meat (pork)",
    wine: "red",
    subwine: "Resiling",
    ingredients: [
      {id: 1, ing: "3 1-inch-thick boneless pork loin chops (1 pound total), trimmed and sliced into ¼-inch-wide strips"},
      {id: 2, ing: "1 teaspoon fennel seeds"},
      {id: 3, ing: "Kosher salt and freshly ground pepper"},
      {id: 4, ing: "Zest and juice of 1 lemon"},
      {id: 5, ing: "3 tablespoons all-purpose flour"},
      {id: 6, ing: "5 tablespoons chopped fresh parsley"},
      {id: 7, ing: "3 tablespoons extra-virgin olive oil"},
      {id: 8, ing: "1 cup sliced shallots"},
      {id: 9, ing: "1 small fennel bulb, trimmed and chopped"},
      {id: 10, ing: "2 tablespoons tomato paste"},
      {id: 11, ing: "10 ounces cremini mushrooms, sliced"},
      {id: 12, ing: "1 ½ cups red or white wine"}
    ],
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/8/13/0/FNM100109WeekNight017_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589485637.jpeg",
    directions: [
      {id: 1, dir: "1. Grind the fennel seeds with 1 teaspoon salt and ½ teaspoon pepper in a spice grinder or chop with a knife. Transfer to a medium bowl; mix with the lemon juice and pork. Add the flour and toss to coat. In another bowl, mix the lemon zest with 2 tablespoons parsley."},
      {id: 2, dir: "2. Heat a deep skillet or pot over high heat and add the olive oil. Brown the pork in batches, 1 minute per side; transfer to a plate. Add the shallots, fennel bulb, the remaining 3 tablespoons parsley, and salt to taste to the skillet. Reduce the heat and cook until the vegetables are wilted, 2 minutes. Add the tomato paste and cook, stirring, 3 minutes."},
      {id: 3, dir: "3. Add the mushrooms, wine and ½ cup water; scrape up any browned bits. Cover and simmer over low heat until the fennel is tender, 12 minutes. Add the pork and heat through, 2 to 3 minutes. Season with salt and pepper and top with the lemon zest-parsley mixture."}
    ],
  },
  {
    name: "Oven Pork Ribs with BBQ Sauce",
    type: "white meat (pork)",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      {id: 1, ing: " 4 - 5lb pork ribs (2 racks)"},
      {id: 2, ing: "¾ cup sweet alcoholic apple cider (hard cider) , "},
      {id: 3, ing: "1 tbsp olive oil"},
      {id: 4, ing: "choice of pork rub"},
      {id: 5, ing: "choice of barbeque sauce"}
    ],
    image:
      "https://www.recipetineats.com/wp-content/uploads/2016/01/Oven-Pork-Ribs-with-Barbecue-Sauce_5.jpg",
    directions: [
      {id: 1, dir: "1. Preheat oven to 160°C/320°F (all oven types). Combine the Rub ingredients and rub onto both sides of the ribs (most on meaty side). Set aside to marinate for 20 minutes (or overnight). Place ribs on a tray in a single layer. Pour apple cider underneath the ribs, cover with foil then bake for 1 hour 30 minutes or until the meat is pretty tender (Note 5)"},
      {id: 2, dir: "2. Remove from oven, turn up to 180°C/350°F. Remove foil, drizzle with olive oil, then return ribs to oven for 15 minutes or until rub becomes nice and crusty. Line a new tray with foil then baking / parchment paper. Remove ribs from oven, transfer to lined tray. Pour any juices from tray over the ribs."},
      {id: 3, dir: "3. Flip ribs so the bonier side is up. Slather with Barbecue Sauce, then bake 10 minutes. Remove from oven, then turn ribs over so the meaty side is up. Slather with Barbecue Sauce, bake 5 minutes. Repeat 2 or 3 more times until you've got a thick glaze on the ribs. "},
      {id: 4, dir: "4. Cut ribs into individual or multiple rib portions and serve with remaining Barbcue Sauce!"}
    ],
  },
  {
    name: "Ginger Pork and Rice Bowl",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      {id: 1, ing: "1 tablespoon olive oil"},
      {id: 2, ing: "½ cup diced white onion"},
      {id: 3, ing: "1 pound ground pork"},
      {id: 4, ing: "3 cloves garlic, minced"},
      {id: 5, ing: "1 tablespoon grated fresh ginger (about 1 inch, peeled)"},
      {id: 6, ing: "1 tablespoon soy sauce"},
      {id: 7, ing: "1 large carrot, shredded"},
      {id: 8, ing: "1 medium cucumber, sliced"},
      {id: 9, ing: "⅓ cup each fresh basil, parsely and mint"},
      {id: 10, ing: "1 cup dried jasmine rice, to serve"},
      {id: 11, ing: "1 lime, sliced, to serve"},
      {id: 12, ing: "Sesame seeds, garnish"}
    ],
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2019/07/pork-rice-bowls-Lead-00004.jpg ",
    directions: [
      {id: 1, dir: "1. Add dried rice to a medium pot and rinse with cold water until the water runs clear. Fill the pot until water covers the rice by about ¼ inch. Place over high heat and bring to a simmer."},
      {id: 2, dir: "2. Once simmering, stir the rice, cover it, and turn heat down to very low. Simmer rice slowly for 8 to 10 minutes, then test rice. If it’s cooked through (i.e. not crunchy), drain off any extra water, remove from heat, cover and steam for five minutes, then fluff with a fork."},
      {id: 3, dir: "3. In a large skillet over medium-high heat, add the olive oil and diced onions. Cook until the onions turn translucent, 3 to 4 minutes. Add ground pork and break up with a spatula continuously while cooking until the pork is crumbly, browned, and cooked through, 7 to 8 minutes."},
      {id: 4, dir: "4. When the pork is almost done cooking, add garlic, ginger, and soy sauce. Stir, and cook for another minute or two to combine flavors."},
      {id: 5, dir: "5. Add ½ to ¾ cup of cooked jasmine rice to a wide bowl. Top with ½ cup of the pork mixture, sliced cucumbers, shredded carrots, and the herb mix. Sprinkle the bowl with sweet soy sauce and sesame seeds."}
    ],
  },
  // Salad
  {
    name: "Classic Cesar Salad",
    type: "salad",
    wine: "white",
    subwine: "Chardonnay",
    ingredients: [
      {id: 1, ing: "6 anchovy fillets packed in oil, drained"},
      {id: 2, ing: "1 small garlic clove"},
      {id: 3, ing: "2 large egg yolks"},
      {id: 4, ing: "2 tablespoons fresh lemon juice, plus more"},
      {id: 5, ing: "½ teaspoon Dijon mustard"},
      {id: 6, ing: "2 tablespoons olive oil"},
      {id: 7, ing: "½ cup olive oil"},
      {id: 8, ing: "3 tablespoons finely grated Parmesan"},
      {id: 9, ing: "ground black pepper"},
      {id: 10, ing: "croutons"},
      {id: 11, ing: "3 romaine hearts"},
      {id: 12, ing: "parmesan cheese"}
    ],
    image:
      "https://assets.bonappetit.com/photos/57ae12ef53e63daf11a4e1d6/16:9/w_2560%2Cc_limit/BA-best-classic-caeser-salad.jpg",
    directions: [
      {id: 1, dir: "1. Chop together anchovy fillets, garlic, and pinch of salt. Use the side of a knife blade to mash into a paste, then scrape into a medium bowl. Whisk in egg yolks, 2 Tbsp. lemon juice, and mustard. Adding drop by drop to start, gradually whisk in olive oil, then vegetable oil; whisk until dressing is thick and glossy. Whisk in Parmesan. Season with salt, pepper, and more lemon juice, if desired."},
      {id: 2, dir: "2. Prepare lettuce. Use whole leaves; they provide the ideal mix of crispness, surface area, and structure."},
      {id: 3, dir: "3. Caesars crowned with a mound of grated Parmesan may look impressive, but all that clumpy cheese mutes the dressing. Instead, use a vegetable peeler to thinly shave a modest amount on top for little salty bursts."},
      {id: 4, dir: "4. Use your hands to gently toss the lettuce, croutons, and dressing, then top off with the shaved Parm."}
    ],
  },
  {
    name: "California Cobb Salad",
    type: "salad",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      {id: 1, ing: "½ head of each romaine, Boston lettuce"},
      {id: 2, ing: "1 small bunch of frisée (curly endive)"},
      {id: 3, ing: "½ bunch of watercress, coarse stems discarded"},
      {id: 4, ing: "6 slices of bacon"},
      {id: 5, ing: "2 ripe avocados, seed removed, peeled, and cut into ½-inch pieces"},
      {id: 6, ing: "1 whole skinless boneless chicken breast (about ¾ pound total), halved, cooked, and diced "},
      {id: 7, ing: "1 tomato, seeded and chopped fine"},
      {id: 8, ing: "2 hard-boiled large eggs, separated, the yolk finely chopped and the white finely chopped"},
      {id: 9, ing: "2 tablespoons chopped fresh chives"},
      {id: 10, ing: "⅓ cup red-wine vinegar"},
      {id: 11, ing: "1 tablespoon Dijon-style mustard"},
      {id: 12, ing: "1-2 teaspoons sugar"},
      {id: 13, ing: "Salt and pepper, to taste"},
      {id: 14, ing: "⅔ cup extra virgin olive oil"},
      {id: 15, ing: "½ cup finely grated Roquefort"}
    ],
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2006/06/cobb-salad-sally-horiz-b-1800.jpg",
    directions: [
      {id: 1, dir: "1. Cook the bacon in a skillet on medium heat until crisp on both sides. Remove from skillet and lay out on paper towels to absorb the excess fat. Allow the bacon to cool. Crumble the bacon and set aside."},
      {id: 2, dir: "2. Toss the various lettuces: In a large salad bowl, toss together well the various lettuces and watercress."},
      {id: 3, dir: "3. Compose the salad: Arrange the chicken, the bacon, the tomato, and the avocado decoratively over the greens and garnish the salad with the chopped egg and the chives."},
      {id: 4, dir: "4. Make the vinaigrette: In a small bowl whisk together the vinegar, the mustard, and salt and pepper to taste, add the oil in a slow stream, whisking, and whisk the dressing until it is emulsified."},
      {id: 5, dir: "5. Stir in the Roquefort. Add sugar to taste, ½ teaspoon at a time. Whisk the dressing. Serve separately or toss in with the salad."}
    ],
  },
  {
    name: "Winter Salad",
    type: "salad",
    wine: "white",
    subwine: "Pinot Gris",
    ingredients: [
      {id: 1, ing: "¼ cup reduced-fat mayonnaise"},
      {id: 2, ing: "¼ cup maple syrup"},
      {id: 3, ing: "3 tablespoons white wine vinegar"},
      {id: 4, ing: "2 tablespoons minced shallot"},
      {id: 5, ing: "2 teaspoons sugar"},
      {id: 6, ing: "½ cup canola oil"},
      {id: 7, ing: "2 packages (5 ounces each) spring mix salad greens"},
      {id: 8, ing: "2 medium tart apples, thinly sliced"},
      {id: 9, ing: "1 cup dried cherries"},
      {id: 10, ing: "1 cup pecan halves"},
      {id: 11, ing: "¼ cup thinly sliced red onion"}
    ],
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Perfect-Winter-Salad_EXPS_HC17_42750_D01_20_7b-696x696.jpg",
    directions: [
      {id: 1, dir: "1. In a small bowl, mix mayo, syrup, vinegar, shallots and sugar; gradually whisk in oil until blended. Refrigerate, covered, until serving."},
      {id: 2, dir: "2. To serve, place remaining ingredients in a large bowl; toss with dressing."}
    ],
  },
  {
    name: "Spinach Apple Salad",
    type: "salad",
    wine: "white",
    subwine: "Rosé",
    ingredients: [
      {id: 1, ing: "½ cup Glazed Walnuts or Glazed Pecans (or toasted walnuts or toasted pecans)"},
      {id: 2, ing: "1 recipe Best Balsamic Dressing"},
      {id: 3, ing: "1 apple"},
      {id: 4, ing: "1 ripe pear"},
      {id: 5, ing: "3 cups baby spinach leaves"},
      {id: 6, ing: "3 cups baby mixed greens"}
    ],
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2017/10/Apple-Pear-Salad-001-800x1000.jpg",
    directions: [
      {id: 1, dir: "1. Make the Glazed Walnuts or Glazed Pecans. (While they cook, prep the rest of the salad. Or, you can make these ahead!)"},
      {id: 2, dir: "2. Make the Best Balsamic Dressing."},
      {id: 3, dir: "3. Core the apple and pear, cut them into thin slices."},
      {id: 4, dir: "4. Place the greens on serving plates and top with apples, pears, and walnuts. Pour over the dressing and serve. (Pro tip: Dress it up by adding cubed Manchego cheese!)"}
    ],
  },
  {
    name: "Asian Chopped Salad",
    type: "salad",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      {id: 1, ing: "1 romaine heart"},
      {id: 2, ing: "1 cup each of green cabbage, red cabbage, bean sprouts, snap peas, carrots"},
      {id: 3, ing: "1 red pepper"},
      {id: 4, ing: "2 green onions"},
      {id: 5, ing: "2 tablespoons cilantro"},
      {id: 6, ing: "⅓ cup Sesame Ginger Dressing"},
      {id: 7, ing: "1 teaspoon sesame oil"},
      {id: 8, ing: "¼ cup almonds"},
      {id: 9, ing: "1 tablespoon sesame seeds"}
    ],
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2019/07/Asian-Salad-SpendWithPennies.jpg",
    directions: [
      {id: 1, dir: "1. Wash, prep and chop all vegetables"},
      {id: 2, dir: "2. Heat sesame oil in a skillet over medium heat and toast almonds for 3-5 minutes or until slightly browned and fragrant. Set aside to cool."},
      {id: 3, dir: "3. Combine all ingredients together and toss with dressing."},
      {id: 4, dir: "4. Top with toasted almonds, cilantro, and sesame seeds."}
    ],
  },
  // Seafood
  {
    name: "Pan Fried Great Lakes Walleye",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      {id: 1, ing: "8 fresh-caught Walleye fillets"},
      {id: 2, ing: "2 eggs"},
      {id: 3, ing: "¾ cups flour"},
      {id: 4, ing: "1 cup Italian style bread crumbs"},
      {id: 5, ing: "½ teaspoon salt"},
      {id: 6, ing: "¼ teaspoon onion powder"},
      {id: 7, ing: "½ teaspoon paprika"},
      {id: 8, ing: "4 Tablespoons oil"}
    ],
    image:
      "https://www.beyondthechickencoop.com/wp-content/uploads/2019/02/Pan-Fried-Fish-Pics.jpg",
    directions: [
      {id: 1, dir: "1. Lightly beat eggs in a dish"},
      {id: 2, dir: "2. In another dish combine flour, bread crumbs and seasoning"},
      {id: 3, dir: "3. Dip fish in egg and then in flour mixture. Shake off any excess flour."},
      {id: 4, dir: "4. Add a couple of tablespoons of oil to a pan and heat pan over medium heat."},
      {id: 5, dir: "5. When pan is hot, add 3-4 fillets to pan. Cook 3 minutes per side so each side is nicely browned. "},
      {id: 6, dir: "6. Remove fish from pan and place on a baking sheet lined with a baking rack. Place cooked fish in a 350 degree oven while you cook remaining fish. "},
      {id: 7, dir: "7. Wipe out pan and add additional oil. Repeat process with remaining fish. "},
    ],
  },
  {
    name: "Tender Oven Baked Salmon",
    type: "seafood",
    wine: "red",
    subwine: "Pinot Noir",
    ingredients: [
      {id: 1, ing: "1 pound (500 g) fingerling potatoes, halved (or Yukon golds or halved white/red baby potatoes)"},
      {id: 2, ing: "2 tablespoons olive oil"},
      {id: 3, ing: "1 ½ teaspoons salt, divided"},
      {id: 4, ing: "½ teaspoon cracked black pepper, divided"},
      {id: 5, ing: "4 (6 oz | 170 g) skinless salmon fillets"},
      {id: 6, ing: "2 ½ tablespoons minced garlic, divided"},
      {id: 7, ing: "2 tablespoons fresh chopped parsley"},
      {id: 8, ing: "⅓ cup freshly squeezed lemon juice"},
      {id: 9, ing: "½ cup melted unsalted butter"},
      {id: 10, ing: "3 bunches asparagus, (18 spears, woody ends removed)"},
      {id: 11, ing: "2 tablespoons dry white wine (substitute with ¼ cup low-sodium chicken broth)"},
      {id: 12, ing: "1 lemon sliced to garnish "}
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2018/03/Sheet-Pan-Baked-Salmon-Potatoes-Asparagus-4.jpg",
    directions: [
      {id: 1, dir: "1. Heat oven to 400°F | 200°C. On a large rimmed baking sheet, toss together potatoes with the oil, ½ tablespoon of garlic, ½ teaspoon salt, and ¼ teaspoon pepper. Spread out in an even layer and roast for 15 minutes until they're just starting to soften and brown."},
      {id: 2, dir: "2. Push potatoes to one side of the sheet pan and arrange salmon down the centre. Rub salmon evenly with 1 ½ tablespoons of the minced garlic and 2 tablespoons of parsley. Add the asparagus to the other side of the pan. "},
      {id: 3, dir: "3. Combine ¼ cup of lemon juice and ¼ cup of the melted butter together and pour the mixture over the salmon and asparagus. Season everything with the remaining salt and pepper."},
      {id: 4, dir: "4. Return to oven and continue baking until the potatoes are golden and fork-tender and the salmon is opaque throughout, (about 10 minutes). Optional: broil in the last 2 minutes for charred edges.   "},
      {id: 5, dir: "5. Meanwhile, in a small bowl, combine the remaining butter, garlic and lemon juice with the wine (or chicken stock). Serve with the salmon, veggies and lemon slices!"}
    ],
  },
  {
    name: "Lemon Red Snapper with Herbed Butter",
    type: "seafood",
    wine: "white",
    subwine: "Chardonnay",
    ingredients: [
      {id: 1, ing: "4 (6-ounce) red snapper or other firm white fish fillets"},
      {id: 2, ing: "2 lemons"},
      {id: 3, ing: "¼ teaspoon salt"},
      {id: 4, ing: "¼ teaspoon paprika"},
      {id: 5, ing: "¼ teaspoon black pepper"},
      {id: 6, ing: "2 tablespoons butter, softened"},
      {id: 7, ing: "1 ½ teaspoons chopped fresh herbs (such as rosemary, thyme, basil, or parsley)"}
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F04%2F29%2Flemon-snapper-oh-1896023-4x3-clfff-2000.jpg",
    directions: [
      {id: 1, dir: "1. Preheat oven to 425. Cut 1 lemon into 8 slices. Place slices, in pairs, on a rimmed baking sheet coated with cooking spray. Grate remaining lemon to get 1 teaspoon lemon rind; set aside. Reserve lemon for another use."},
      {id: 2, dir: "2. Place 1 fillet on top of each pair of lemon slices. Combine salt, paprika, and pepper; sprinkle evenly over fish. Bake at 425° for 13 minutes or until fish flakes easily when tested with a fork or until desired degree of doneness."},
      {id: 3, dir: "3. While fish bakes, combine reserved lemon rind, butter, and herbs in a small bowl."},
      {id: 4, dir: "4. Place fish and lemon slices on individual serving plates; top each fillet with herbed butter, spreading to melt, if desired. Garnish with herb sprigs, if desired."}
    ],
  },
  {
    name: "Grilled Cajun Spiced Shrimp Skewers",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      {id: 1, ing: "½ cup (8 Tbsp) unsalted butter"},
      {id: 2, ing: "4 cloves of garlic, pressed or minced"},
      {id: 3, ing: "1 Tbsp cajun spice (provides light heat; it’s not too spicy)"},
      {id: 4, ing: "½ tsp salt (omit if using salted butter)"},
      {id: 5, ing: "1 Tbsp lemon juice (from ½ medium lemon)"},
      {id: 6, ing: "2 lbs uncooked large shrimp (21-25 count), peeled and deveined"},
      {id: 7, ing: "12 medium wooden skewers"}
    ],
    image:
      "https://natashaskitchen.com/wp-content/uploads/2015/05/Grilled-Garlic-Cajun-Shrimp-Skewers-4-600x900.jpg",
    directions: [
      {id: 1, dir: "1. Soak wooden skewers in water 30 min (reduces burning of the sticks). Preheat Grill to med/high (400˚F)."},
      {id: 2, dir: "2. Combine all marinade ingredients in a small sauce pan. Bring to a simmer then remove from heat. Pour half of the mixture into a ramekin and leave remaining marinade in pan (You’ll brush on half now and brush on remaining marinade after shrimp are grilled)."},
      {id: 3, dir: "3. Skewer 4 shrimp on each damp skewer without leaving spaces. Lay skewers flat on a rimmed Cookie Sheet. Brush one side of the skewered shrimp with sauce and refrigerate for 2 min until butter firms up. Flip shrimp over, brush second side and refrigerate 2 min until butter firms up."},
      {id: 4, dir: "4. Place skewers on the barbie and grill shrimp with the lid on about 2 minutes per side or just until cooked through and no longer transparent. Remove shrimp from grill. Don’t overcook or they will be rubbery. Brush on reserved sauce and serve."}
    ],
  },
  {
    name: "Pan Seared Tilapia Filet",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      {id: 1, ing: "4 (4 ounce) fillets tilapia"},
      {id: 2, ing: "salt and pepper to taste"},
      {id: 3, ing: "½ cup all-purpose flour"},
      {id: 4, ing: "1 tablespoon olive oil"},
      {id: 5, ing: "2 tablespoons unsalted butter, melted"}
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F681641.jpg",
    directions: [
      {id: 1, dir: "1. Rinse tilapia fillets in cold water and pat dry with paper towels. Season both sides of each fillet with salt and pepper. Place the flour in a shallow dish; gently press each fillet into the flour to coat and shake off the excess flour."},
      {id: 2, dir: "2. Heat the olive oil in a skillet over medium-high heat; cook the tilapia in the hot oil until the fish flakes easily with a fork, about 4 minutes per side. Brush the melted butter onto the tilapia in the last minute before removing from the skillet. Serve immediately."}
    ],
  },
  // Chicken
  {
    name: "Stuffed Chicken Breast with Mozzarella and Spinach",
    type: "white meat (chicken)",
    wine: "white",
    subwine: "Riesling",
    ingredients: [
      {id: 1, ing: "2 boneless skinless chicken breasts, butterflied"},
      {id: 2, ing: "3 tablespoons olive oil, divided"},
      {id: 3, ing: "2 slices of fresh mozzarella cheese"},
      {id: 4, ing: "2 cups fresh baby spinach"},
      {id: 5, ing: "4 cloves garlic, minced"},
      {id: 6, ing: "1 small onion, minced"},
      {id: 7, ing: "1 can low-sodium crushed tomatoes"},
      {id: 8, ing: "1 tablespoon sugar"},
      {id: 9, ing: "½ teaspoon balsamic vinegar"},
      {id: 10, ing: "½ cup (125ml) chicken stock"},
      {id: 11, ing: "Crushed red pepper flakes, to taste (optional)"},
      {id: 12, ing: "Salt and fresh cracked pepper"}
    ],
    image:
      "https://www.eatwell101.com/wp-content/uploads/2017/08/chicken-breast-recipes.jpg",
    directions: [
      {id: 1, dir: "1. In a skillet, saute onion and 2 cloves minced garlic in a tablespoon olive oil for 3 – 4 minutes, until fragrant and translucent. Add tomato and chicken stock, bring to a boil and simmer over low-medium heat until the sauce reduces and starts to thicken, about 15 – 20 minutes. Stir in sugar and balsamic, adjust seasoning with salt and pepper, then set aside in a large bowl."},
      {id: 2, dir: "2. In the mean time: In another skillet or frying pan, add olive oil and garlic, sauté over medium heat for 1-2 minutes. Add spinach and stir frequently until wilted and cooked, about 2-3 minutes. Set garlic and spinach aside."},
      {id: 3, dir: "3. Butterfly chicken breasts, slice lengthwise down the middle but not all the way through. Season chicken with salt and pepper on both sides. Place a slice of mozzarella  over each chicken breast. Add Spinach and garlic on top. Fold chicken in half like a sandwich, keeping the stuffing in. Sprinkle top of chicken with red chili pepper flakes."},
      {id: 4, dir: "4. Heat a skillet over medium heat with a tablespoon olive oil. Sear and cook chicken on both sides for 5 minutes each, until golden and cooked through. Cheese should be melted and bubbly. Pour the tomato sauce around chicken to reheat quickly until simmering. Serve immediately, enjoy!"}
    ],
  },
  {
    name: "Crispy Chicken Parmesean",
    type: "white meat (chicken)",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      {id: 1, ing: "4 chicken breast halves, skinless boneless"},
      {id: 2, ing: "½ cup flour"},
      {id: 3, ing: "2 eggs"},
      {id: 4, ing: "⅔ cup Panko bread crumbs"},
      {id: 5, ing: "⅔ cup Italian Seasoning bread crumbs"},
      {id: 6, ing: "⅓ cup parmesan cheese grated"},
      {id: 7, ing: "2 tablespoons parsley"},
      {id: 8, ing: "4 tablespoons oil or as needed"},
      {id: 9, ing: "24 ounces marinara sauce homemade or jarred"},
      {id: 10, ing: "1 cup mozzarella cheese shredded"},
      {id: 11, ing: "¼ cup Parmesan cheese shredded"},
      {id: 12, ing: "basil & parsley fresh, chopped"}
    ],
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-23.jpg",
    directions: [
      {id: 1, dir: "1. Preheat an oven to 425°F."},
      {id: 2, dir: "2. Place flour in shallow dish. Place the eggs in a second dish (and beat with a fork)."},
      {id: 3, dir: "3. Combine Panko, Italian crumbs, grated parmesan, 2 tablespoons fresh parsley, salt and pepper to taste in a third shallow dish."},
      {id: 4, dir: "4. Pound chicken breasts to ½ inch thick (if they're very large you can cut them in half)."},
      {id: 5, dir: "5. Dip chicken into flour and shake to remove any excess. Dip chicken in beaten eggs & then into bread crumb mixture (press to adhere)."},
      {id: 6, dir: "6. Preheat oil in a large pan. Brown chicken on each side, about 4 minutes per side or until golden (it does not need to cook through as it will continue to cook in the oven)."},
      {id: 7, dir: "7. Place 1 ½ cups of marinara sauce in the bottom of a 9x13 dish. Add browned chicken. Top each piece with a couple tablespoons of marinara sauce, mozzarella and parmesan."},
      {id: 8, dir: "8. Bake 20-25 minutes or until golden and bubbly and chicken reaches 165°F. Sprinkle with fresh herbs and serve over pasta."}
    ],
  },
  {
    name: "Summertime Blackened Chicken",
    type: " white meat (chicken)",
    wine: "white",
    subwine: "Riesling",
    ingredients: [
      {id: 1, ing: "½ teaspoon paprika"},
      {id: 2, ing: "⅛ teaspoon salt"},
      {id: 3, ing: "¼ teaspoon cayenne pepper"},
      {id: 4, ing: "¼ teaspoon ground cumin"},
      {id: 5, ing: "¼ teaspoon ground cumin"},
      {id: 6, ing: "⅛ teaspoon ground white pepper"},
      {id: 7, ing: "⅛ teaspoon onion powder"},
      {id: 8, ing: "2 skinless, boneless chicken breast halves"}
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4538204.jpg",
    directions: [
      {id: 1, dir: "1. Preheat oven to 350 degrees F (175 degrees C). Lightly grease a baking sheet. Heat a cast iron skillet over high heat for 5 minutes until it is smoking hot."},
      {id: 2, dir: "2. Mix together the paprika, salt, cayenne, cumin, thyme, white pepper, and onion powder. Oil the chicken breasts with cooking spray on both sides, then coat the chicken breasts evenly with the spice mixture."},
      {id: 3, dir: "3. Place the chicken in the hot pan, and cook for 1 minute. Turn, and cook 1 minute on other side. Place the breasts on the prepared baking sheet."},
      {id: 4, dir: "4. Bake in the preheated oven until no longer pink in the center and the juices run clear, about 5 minutes."}
    ],
  },
  {
    name: "Crispy Cilantro Lime Chicken",
    type: "white meat (chicken)",
    wine: "white",
    subwine: "Rosé",
    ingredients: [
      {id: 1, ing: "3 tablespoons olive oil divided"},
      {id: 2, ing: "¼ cup fresh squeezed lime juice (Juice of 2 limes)"},
      {id: 3, ing: "¼ cup fresh chopped cilantro"},
      {id: 4, ing: "1 teaspoon red chili (or pepper) flakes"},
      {id: 5, ing: "4 cloves garlic minced"},
      {id: 6, ing: "2 teaspoons brown sugar"},
      {id: 7, ing: "¾ teaspoon ground cumin"},
      {id: 8, ing: "6 bone-in skin-on (or off) chicken thighs"},
      {id: 9, ing: "Salt and pepper to taste"},
      {id: 10, ing: "1 cup mozzarella cheese shredded"},
      {id: 11, ing: "Fresh cilantro leaves to serve"}
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2017/05/Crispy-Cilantro-Lime-Chicken-9.jpg",
    directions: [
      {id: 1, dir: "1. Preheat oven to 425°F (220°C)."},
      {id: 2, dir: "2. In a medium-sized shallow bowl, whisk together 2 tablespoons olive oil together with the lime juice, chopped cilantro, chili flakes, garlic, sugar and cumin. Add the chicken thighs to the marinade and toss to evenly coat. Cover and refrigerate thighs for 15 minutes."},
      {id: 3, dir: "3. Heat the remaining one tablespoon of oil in a non stick pan or cast iron skillet over medium-high heat. Add in the thighs along with any marinade left over in the bowl, and sear chicken -- skin-side down -- for 4 minutes on each side until golden and crispy (chicken will not be fully cooked)."},
      {id: 4, dir: "4. Transfer to preheated oven and bake until the chicken is cooked through (about 15-20 minutes)."},
      {id: 5, dir: "Garnish with fresh cilantro leaves and lime slices or wedges."},
      {id: 6, dir: "Serve over steamed rice or cauliflower rice, and drizzle with the pan juices."}
    ],
  },
  {
    name: "Slow Cooked Barbeque Chicken",
    type: "white meat (chicken)",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      {id: 1, ing: "3 lbs chicken breasts (boneless, skinless), about 5-6 count"},
      {id: 2, ing: "1 ½ cups BBQ Sauce, your choice"},
      {id: 3, ing: "½ medium onion grated (with juice)"},
      {id: 4, ing: "1 Tbsp olive oil"},
      {id: 5, ing: "1 Tbsp Worcestershire sauce"},
      {id: 6, ing: "2 Tbsp brown sugar"}
    ],
    image:
      "https://natashaskitchen.com/wp-content/uploads/2015/08/Crockpot-BBQ-Chicken-2-600x900.jpg",
    directions: [
      {id: 1, dir: "1. Stir together all sauce ingredients in a 5-6 qt slow cooker."},
      {id: 2, dir: "2. Add chicken and turn to coat. Cover and cook on high 3 to 4 hours or on low for 6-7 hours. Chicken is done when cooked through and easy to shred."},
      {id: 3, dir: "3. Remove chicken to a cutting board and shred each breast using two forks. Place shredded chicken back in the crock pot and stir to coat with the yummy sauce."}
    ],
  },
  // Pasta
  {
    name: "Fettuccini Pasta with Creamy Alfredo",
    type: "pasta",
    wine: "red",
    subwine: "Syrah",
    ingredients: [
      {id: 1, ing: "1 lb Fettuccine Pasta"},
      {id: 2, ing: "6 Tablespoons Butter"},
      {id: 3, ing: "1 Garlic Clove (minced)"},
      {id: 4, ing: "1 ½ cups Heavy Cream"},
      {id: 5, ing: "¼ teaspoon Salt"},
      {id: 6, ing: "1 ¼ cup Shredded Parmesan Cheese"},
      {id: 7, ing: "¼ teaspoon Pepper"},
      {id: 8, ing: "2 Tablespoons Italian Parsley (optional)"}
    ],
    image:
      "https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Fettuccine-Alfredo-Recipe.jpg",
    directions: [
      {id: 1, dir: "1. In a large pot, heat water over high heat until boiling. Add salt to season the water. Once it is boiling, add fettuccine and cook according to package instructions."},
      {id: 2, dir: "2. In a large skillet or pan, heat butter over medium heat. Add minced garlic and cook for 1 to 2 minutes. Stir in heavy cream. "},
      {id: 3, dir: "3. Let heavy cream reduce and cook for 5 to 8 minutes. Add half of the parmesan cheese to the mixture and whisk well until smooth. Keep over heat and whisk well until cheese is melted."},
      {id: 4, dir: "4. Save some pasta water. The pasta water is full of flavor and can be used to thin out the sauce."},
      {id: 5, dir: "5. Toss alfredo sauce with fettuccine pasta and add half of the parmesan cheese. Once it is tossed, garnish with the remaining parmesan cheese. Add a little pasta water if it needs to be thinned out."},
      {id: 6, dir: "6. Garnish with Italian parsley, if so desired."}
    ],
  },
  {
    name: "Tuscan Pasta Salad",
    type: "pasta",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      {id: 1, ing: "16 ounce bowtie pasta cooked and drained in cold water"},
      {id: 2, ing: "1 7 ounce jar sun-dried tomatoes in oil drained"},
      {id: 3, ing: "1 red bell pepper diced"},
      {id: 4, ing: "1 6.5 ounce can sliced olives"},
      {id: 5, ing: "1 cup spinach"},
      {id: 6, ing: "¼ cup basil chopped"},
      {id: 7, ing: "½ cup grated parmesan cheese"},
      {id: 8, ing: "¾ cup olive oil"},
      {id: 9, ing: "2 tablespoons white vinegar"},
      {id: 10, ing: "2 tablespoons water"},
      {id: 11, ing: "1 teaspoon salt"},
      {id: 12, ing: "1 teaspoons sugar"},
      {id: 13, ing: "1 teaspoon dry oregano"},
      {id: 14, ing: "1 teaspoon dry basil"},
      {id: 15, ing: "1 clove garlic"},
      {id: 16, ing: "black pepper to taste"}
    ],
    image:
      "https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg",
    directions: [
      {id: 1, dir: "1. In a large bowl combine pasta, sundried tomatoes, bell pepper, olives, spinach, basil, and parmesan cheese. Toss until combined."},
      {id: 2, dir: "2. To make the dressing: In a small bowl whisk olive oil, vinegar, water, salt, sugar, oregano, basil, garlic and salt and pepper."},
      {id: 3, dir: "3. Drizzle the dressing over the pasta salad and serve."}
    ],
  },
  {
    name: "Penne Pasta with Italian Marinara Sauce",
    type: "pasta",
    wine: "red",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      {id: 1, ing: "kosher salt"},
      {id: 2, ing: "1 28-ounce can whole peeled San Marzano tomatoes , with purée"},
      {id: 3, ing: "¼ cup extra-virgin olive oil"},
      {id: 4, ing: "4 garlic cloves, peeled and smashed"},
      {id: 5, ing: "1 tablespoon tomato paste"},
      {id: 6, ing: "1 teaspoon kosher salt"},
      {id: 7, ing: "½ teaspoon freshly ground black pepper"},
      {id: 8, ing: "2 sprigs fresh basil or oregano , plus more basil for garnish"},
      {id: 9, ing: "1 pound dried penne pasta , or other favorite pasta of your choice"}
    ],
    image:
      "https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004-683x1024.jpg",
    directions: [
      {id: 1, dir: "1. Bring a large pot of water to a boil and season generously with kosher salt."},
      {id: 2, dir: "2. Meanwhile, begin preparing the marinara. Pour the tomatoes and purée into a bowl and crush with your hands or the the back of a spoon, then set aside."},
      {id: 3, dir: "3. In a large cold skillet, add the extra-virgin olive oil and garlic cloves, and bring to medium heat. As the garlic begins to sizzle, stir occasionally, and cook until fragrant and golden, about 5 minutes. Monitor the heat so the garlic doesn't cook too quickly or burn."},
      {id: 4, dir: "4. Very carefully stir the tomato paste into the garlic and oil—take care so the oil doesn't splatter and burn you as the paste is added—and cook for 1-2 minutes. Carefully spoon the tomatoes into the pan with the oil and paste and season with salt and pepper. Add the basil sprigs and bring to a boil. Reduce to a bubbling simmer over low heat, stirring occasionally, for 30 minutes. Stir to mix the oil that rises to the top, then discard the basil sprigs and garlic."}
    ],
  },
  {
    name: "Angel Hair Pasta Primavera",
    type: "pasta",
    wine: "white",
    subwine: "Pinot Gris",
    ingredients: [
      {id: 1, ing: "12 oz. angel hair"},
      {id: 2, ing: "2 cups broccoli florets"},
      {id: 3, ing: "1 pint cherry tomatoes (yellow and red)"},
      {id: 4, ing: "1 (8-oz.) package baby bella mushrooms"},
      {id: 5, ing: "1 15-oz. can artichoke hearts, drained and roughly chopped"},
      {id: 6, ing: "2 tsp. garlic powder"},
      {id: 7, ing: "Kosher salt, to taste"},
      {id: 8, ing: "Freshly ground black pepper"},
      {id: 9, ing: "¾ c. grated Parmesan, plus more for garnish"},
      {id: 10, ing: "Sliced fresh basil, for serving"}
    ],
    image:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/16/12/1600x1066/gallery-1458854366-delish-angel-hair-primavera.jpg?",
    directions: [
      {id: 1, dir: "1. Preheat oven to 400°. In a large pot of salted boiling water, cook pasta until al dente. Drain, reserving 1 cup pasta water, and return to pot."},
      {id: 2, dir: "2. On a large baking sheet, toss broccoli, tomatoes, mushrooms, and artichoke hearts with oil and season with garlic powder, salt, and pepper. Roast until tender and caramelized, stirring once, 15 to 20 minutes."},
      {id: 3, dir: "3. Add vegetables to pot along with Parmesan and ½ pasta water and, over low heat, stir vigorously to create a sauce. (Add more pasta water until you reach your desired consistency.)"},
      {id: 4, dir: "4. Garnish with Parmesan and basil before serving."}
    ],
  },
  {
    name: "Eggplant Lasagna",
    type: "pasta",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      {id: 1, ing: "2 large eggplants sliced lengthwise ¾-inch thick (about 8 slices)"},
      {id: 2, ing: "3 ½ tablespoons extra virgin olive oil divided"},
      {id: 3, ing: "1 ½ teaspoons kosher salt divided"},
      {id: 4, ing: "½ teaspoon black pepper divided"},
      {id: 5, ing: "16 ounces sliced cremini (baby bella) mushrooms"},
      {id: 6, ing: "3 cloves garlic minced"},
      {id: 7, ing: "½ teaspoon dried oregano"},
      {id: 8, ing: "1 (24-ounce) can prepared marinara-style pasta sauce of choice I used a roasted garlic flavor"},
      {id: 9, ing: "1 (15-ounce) container part-skim ricotta cheese"},
      {id: 10, ing: "1 (10 ounce) package frozen chopped spinach thawed with excess water squeezed out"},
      {id: 11, ing: "½ cup grated Parmesan divided"},
      {id: 12, ing: "1 large egg"},
      {id: 13, ing: "1 cup shredded part-skim mozzarella cheese or a blend of mozzarella and provolone"},
      {id: 14, ing: "2 tablespoons chopped fresh basil thyme, or parsley"}
    ],
    image:
      "https://www.wellplated.com/wp-content/uploads/2019/08/Classic-Eggplant-Lasagna-Recipe-600x718.jpg",
    directions: [
      {id: 1, dir: "1. Position racks in the upper and lower thirds of your oven. Preheat the oven to 400 degrees F. Lightly coat 2 rimmed baking sheets with nonstick spray. Coat a 9x13-inch baking dish with nonstick spray and set aside."},
      {id: 2, dir: "2. Arrange sliced eggplant in a single layer on the 2 sheet pans—if some of your end-most eggplant slices are very curved, trim off the eggplant outermost curvy portion so that the slices lay mostly flat. Brush 2 ½ tablespoons of the oil over both sides of all of the slices. Sprinkle ½ teaspoon kosher salt and ¼ teaspoon pepper over the top."},
      {id: 3, dir: "3. Roast the eggplant until it is soft and golden, about 25 minutes, flipping the slices over and swapping the pans’ positions once halfway through. Remove the slices from the oven and reduce the oven temperature to 350 degrees F."},
      {id: 4, dir: "4. Meanwhile, in a large skillet heat the remaining ½ tablespoon oil over medium heat. Add the sliced mushrooms. Saute until the mushrooms are soft, about 7 minutes. Add the minced garlic, next ½ teaspoon kosher salt, and oregano. Cook for another 2 minutes. Remove the pan from the heat. Add the marinara pasta sauce and stir to combine."},
      {id: 5, dir: "5. In a large bowl add the ricotta, ¼ cup Parmesan, egg, and remaining ½ teaspoon salt and remaining ¼ teaspoon pepper. Mix well, until the mixture is evenly combined. Stir in the spinach, using a fork to break it up and distribute it as evenly with the ricotta mixture as possible."},
      {id: 6, dir: "6. Spoon half of the mushroom marinara sauce on the bottom of the prepared baking dish and spread it into an even layer. Lay 4 eggplant slices on top followed by all of the ricotta mixture. Layer on another 4 slices of eggplant and finish with the remaining mushroom marinara sauce. Top with the mozzarella and remaining ¼ cup Parmesan. Bake for 25 to 30 minutes, until the cheese is melted and the lasagna is hot and bubbly. Remove from the oven and sprinkle with fresh herbs. Let rest 5 to 10 minutes, then serve."}
    ],
  },
];

// "Wine" Collection Seed Data

const wineSeed = [
  {
    name: "Pinot Noir",
    type: "red",
    blurb: "Pinot Noir is the most romanticized red wine in the world. No other grape inspires such emotion and worship among wine enthusiasts. Festivals are thrown every year in the grape’s honor and an entire movie, Sideways, highlighted the fervor of its fans and helped boost the variety’s popularity.",
    image:
      "https://wineenthusiast.scene7.com/is/image/WineEnthusiast/f/590/33206_3.jpg",
    vintages:  [
      {id: 1, vin: "Belle Glos Clark & Telephone Vineyard Pinot Noir"},
      {id: 2, vin: "La Crema Willamette Valley Pinot Noir 2018"},
      {id: 3, vin: "Kosta Browne Sta. Rita Hills Pinot Noir"},
      {id: 4, vin: "Samuel Robert Family Reserve"},
      {id: 5, vin: "Vennstone Tri Appellation"}
    ],
  },
  {
    name: "Merlot",
    type: "red",
    blurb: "Merlot is one of the world’s most popular red wines, and America’s second favorite after Cabernet Sauvignon. Known for its soft, sensual texture and approachable style, it’s made from red-skinned grapes that can adapt to a variety of climates to produce food-friendly wines in many price points. Merlot can be velvety and plummy, or rich and oaky. There’s something for everyone, which is why Merlot is adored.",
    image:
    "https://images.crateandbarrel.com/is/image/Crate/HipRedWine31ozSHF15/$web_plp_card_mobile$/190411135118/hip-red-wine-glass.jpg",
    vintages: [
      {id: 1, vin: "Stags' Leap Winery Merlot"},
      {id: 2, vin: "Trefethen Merlot"},
      {id: 3, vin: "Duckhorn Vineyards"},
      {id: 4, vin: "Wildhaven Columbia Valley"},
      {id: 5, vin: "Barnett Spring Mountain"}
    ],
  },
  {
    name: "Cabernet Sauvignon",
    type: "red",
    blurb: "Cabernet Sauvignon is known for its dark color, full body and an alcohol content that is over 13.5%, with most Cabernet Sauvignons, especially those from places such as California, Australia and Chile, being more like 14.5% and sometimes even going over 15%. The wine is dry (not sweet) and has a healthy level of tannin, which is why your mouth dries out when you sip it. Many people who drink Cabernet Sauvignon say they always pick up a taste of green pepper in the wine, along with tobacco, cassis, and dark fruits such as cherries, along with a hint of vanilla that comes from the wine aging in the oak",
    image:
    "https://b3h2.scene7.com/is/image/BedBathandBeyond/172001116045659p?$690$&wid=690&hei=690",
    vintages: [
      {id: 1, vin: "Long Meadow Ranch Farmstead 2018"},
      {id: 2, vin: "Niner Wine Estates 2016"},
      {id: 3, vin: "Gunlach-Bundschu Estate Vineyard"},
      {id: 4, vin: "Cabernario No. 8"},
      {id: 5, vin: "Mascota Vineyards Unanime"}
    ],
  },
  {
    name: "Syrah",
    type: "red",
    blurb: "Malbec is a dry red wine that appeals to the masses due to its affordability and approachable, juicy fruit flavors. While its popularity has surged over the past two decades, in reality, Malbec has been used as a blending grape in France for over a century. But it’s the Argentine expression (which people are most familiar with) that enjoys worldwide popularity.",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/31ArGEj53KL._AC_.jpg",
    vintages: [
      {id: 1, vin: "Les Piliers"},
      {id: 2, vin: "J Lohr"},
      {id: 3, vin: "Chopo Jumilla Monastrell"},
      {id: 4, vin: "Sobon Estate"},
      {id: 5, vin: "Coppola Diamond"}
    ],
  },
  {
    name: "Malbec",
    type: "red",
    image:
    "https://lh3.googleusercontent.com/proxy/d1x1y3OkI1h41wgjpsDKtf_CRAYFzXJItM8ROGy0cmj1c-HTZOJgitJ1vFP9T9lh-hZyyNdcjiqicP1nqK7LJTTMqwOUKyLJrbkWCPaHo-BiMXOO-bo",
    vintages: [
      {id: 1, vin: "Pascual Toso Mendoza"},
      {id: 2, vin: "Kaiken Ultra"},
      {id: 3, vin: "Crios de Susana Balbo"},
      {id: 4, vin: "Luca Uco Valley"},
      {id: 5, vin: "Atrium Cahors"}
    ],
  },
  {
    name: "Sauvignon Blanc",
    type: "white",
    blurb: "Sauvignon Blanc is one of the most popular white wines in the U.S. Often referred to as “grassy,” it is known for its refreshing crispness, which is due to its high levels of acidity and low amounts of sugar. It is known as a refreshing dry wine that has a great minerality, aromas and tastes of herbs and grasses and a nice crisp pucker. Across the world, including in France, the wine is hardly ever aged in oak, with the winemakers preferring to exhibit the bright and fruity characteristics of the grape.",
    image:
    "https://www.beveragefactory.com/images/6416-33092815151006.jpg",
    vintages: [
      {id: 1, vin: "Wohlmuth 2017 Ried Hochsteinriegl"},
      {id: 2, vin: "Domaine Fouassier"},
      {id: 3, vin: "Margerum 2018 Sybarite"},
      {id: 4, vin: "Domaine Anthony & David Girard 2018 Les Montes Damnés"},
      {id: 5, vin: "Nobilo 2018 Icon"}
    ],
  },
  {
    name: "Pinot Gris",
    type: "white",
    blurb: "While most believe Pinot Grigio originated in Italy, it was actually born, like many of the most popular grapes of the world, in France, where it is known as Pinot Gris. Thought to be a mutation of the red grape Pinot Noir, Pinot Gris’ skins are not green like other white grapes, but instead have a greyish blue hue, which is what gives them their name.",
    image:
    "https://images-na.ssl-images-amazon.com/images/I/61-1ko8h4VL._AC_SX522_.jpg",
    vintages: [
      {id: 1, vin: "Fern Ridge"},
      {id: 2, vin: "Chateau"},
      {id: 3, vin: "Chateau Ste Michelle"},
      {id: 4, vin: "Willamette Valley"},
      {id: 5, vin: "Coelho Renovacao"}
    ],
  },
  {
    name: "Chardonnay",
    type: "white",
    blurb: "Chardonnay is the most popular white wine on earth. The grape is a near-blank canvas, capable of being produced in a gamut of different styles. Chardonnay grapes are somewhat resilient, low-maintenance in the vineyard and easy to grow in almost any climate. Travel to any wine region in the world, you will find at least one vineyard growing Chardonnay. ",
    image:
    "https://celebrityvineyards.com/wp-content/uploads/2019/10/riedel-chardonnay.jpg",
    vintages: [
      {id: 1, vin: "Rusack Vineyards Santa Barbara Valley"},
      {id: 2, vin: "Domain Matrot Mersault-Charmes "},
      {id: 3, vin: "Bravium Russian River Valley"},
      {id: 4, vin: "Talley Vineyeards"},
      {id: 5, vin: "Balletto Teresa's Unoaked"}
    ],
  },
  {
    name: "Zinfandel",
    type: "white",
    blurb: "Zinfandel is a wine truly made famous by California. Planted in over 10 percent of all Californian vineyards, the Zinfandel grape is an important player in the California red wine industry, creating a big, ripe red wine that comes with some of the highest alcohol content of any red wine on the market (between 14 and 17 percent). Due to the hot sun of California, Zinfandels have come to be known for their jammy, fruity characteristics.",
    image:
    "https://i.pinimg.com/originals/58/e3/87/58e387f5e68890f8446860adefa6d33d.jpg",
    vintages: [
      {id: 1, vin: "Alquimista Cellars Jessie’s Grove Ancient Vine"},
      {id: 2, vin: "Andis Original Grandpère Vineyard"},
      {id: 3, vin: "Bella Vineyards & Wine Caves Maple Vineyards Annie’s Block"},
      {id: 4, vin: "Chappellet"},
      {id: 5, vin: "Cline Ancient Vines"}
    ],
  },
  {
    name: "Rosé",
    type: "white",
    blurb: "Rosé has exploded on the US market over the past few years, especially during the warm months of the year. In France, it now eclipses the sale of white wine and, rumor has it, Sting slugs bottles of the stuff during his live performances. It also happens to be the perfect wine for sipping in the park or at a backyard barbecue. Suffice it to say, rosé has become incredibly popular, but most of us don’t know how rosé is made or where some of the most consistent rosés comes from.",
    image:
    "https://www.amara.com/static/uploads/images-2/products/huge/174155/la-rose-chianti-red-wine-glass-269149.jpg",
    vintages: [
      {id: 1, vin: "Chateau de Nages Nimes"},
      {id: 2, vin: "Salmon Sancerre"},
      {id: 3, vin: "Domaine Piegonne Ventoux"},
      {id: 4, vin: "La Galiniere Ste Victoire "},
      {id: 5, vin: "Tendance Caladoc"}
    ],
  },
  {
    name: "Reisling",
    type: "white",
    blurb: "Tasting Riesling starts with intense aromas that rise from the glass (even when the wine is ice cold). This aromatic wine offers primary fruit aromas of orchard fruits like nectarine, apricot, honey-crisp apple, and pear. Besides fruit, you’ll often smell things like honeycomb, jasmine, or lime peel, along with a striking aroma that smells similar to petrol or petroleum wax (a natural compound called TDN). On the palate, Riesling has high acidity, similar to the levels in lemonade.",
    image:
    "https://www.plumstreetpottery.com/wp-content/uploads/2019/08/Veritas-644900015-600.jpg",
    vintages: [
      {id: 1, vin: "Vom Stein Federspiel Nikolaihof Wachau"},
      {id: 2, vin: "Barrel X Peter Lauer Saar"},
      {id: 3, vin: "Smaragd Klaus Prager Wachau"},
      {id: 4, vin: "Ravines Finger Lakes"},
      {id: 5, vin: "Brand Grand Cru Albert Boxler Alsace"}
    ],
  },
];

const userSeed = [
  {
    email: "negin@nightin.com",
    password: "night",
    favs: [
      {
        mealId: "5fbef776c25152658e9133be",
        wineId: "5fbef776c25152658e9133bd",
        note: "Perfect combination!",
      },
      {
        mealId: "5fbef776c25152658e9133be",
        wineId: "5fbef776c25152658e9133bd",
        note: "Great Suggestion!",
      },
      {
        mealId: "5fbef776c25152658e9133be",
        wineId: "5fbef776c25152658e9133bd",
        note: "Great night!",
      },
      {
        mealId: "5fbef776c25152658e9133be",
        wineId: "5fbef776c25152658e9133bd",
        note: "Awesome!",
      },
    ],
  },
];

db.Recipe.remove({})
  .then(() => db.Recipe.insertMany(recipeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Wine.remove({})
  .then(() => db.WineinsertMany(wineSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });