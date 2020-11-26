const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Nightin collection and inserts the nightin below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightindb");

// "Food" Collection Seed Data
const nightSeed = [
  // Beef
  {
    name: "New York Strip Steak with Wild Rice and Broccoli",
    type: "red meat",
    wine: "red",
    subwine: "Pinot Noir",
    ingredients: [
      (one = "1 one-and-a-half-inch-thick NY Strip Steak"),
      (two = "half cup wild rice"),
      (three = "1 brocoli crown, diced"),
      (four = "garlic salt, to taste"),
      (five = "pepper, to taste"),
      (six = "2 tablespoons of olive oil"),
    ],
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2020/03/new-york-strip-steak-44.jpg",
    directions: [
      (one =
        "About 20 minutes before grilling, remove the steaks from the refrigerator and cover in olive oil and garlic salt and pepper. Let sit, covered, at room temperature."),
      (two =
        "Prepare rice using desired method and allow it to cook while you prepare steak and broccoli."),
      (three =
        "Heat your grill to high. Brush the steaks on both sides with oil and season liberally with salt and pepper. Place the steaks on the grill and cook until golden brown and slightly charred, 4 to 5 minutes. Turn the steaks over and continue to grill 3 to 5 minutes for medium-rare (an internal temperature of 135 degrees F), 5 to 7 minutes for medium (140 degrees F) or 8 to 10 minutes for medium-well (150 degrees F). Place Brocoli in pot of boiling water for 8 to 10 minutes."),
      (four =
        "Transfer the steaks to a cutting board or platter, tent loosely with foil and let rest 5 minutes before slicing. Add rice and broccoli."),
      (five =
        "Add the drained black beans and bring to a boil. Reduce heat, cover, and simmer for 30-50 minutes (depending on rice variety). Stir the mixture occasionally and add more liquid as needed to keep it from sticking to the bottom."),
      (six =
        "About 10 minutes before the rice is done, sear the skirt steak. Pat the steak dry and season all over with salt and pepper."),
      (seven =
        "Heat the neutral cooking oil in a skillet over high heat. Once the oil is very, very hot add the steak and cook without moving for 3-5 minutes (depending on thickness). Flip and cook until desired internal temperature is reached, about 3-4 minutes more. Transfer to a plate and cover with foil."),
      (eight =
        "Divide the spicy rice and beans between plates and arrange the steak on top. Pile each plate with the garnish and enjoy!"),
    ],
  },
  {
    name: "Skirt Steak with Spicy Rice and Beans",
    type: "red meat",
    wine: "red",
    subwine: "Syrah",
    ingredients: [
      (one = "1 pound skirt steak"),
      (two = "yellow onion, peeled and diced"),
      (three = "jalapeño pepper, trimmed and diced"),
      (four = "8 ounces mushrooms, trimmed and sliced"),
      (five = "2 ounces tequila (optional)"),
      (six = "paprika, to taste"),
      (seven = "garlic powder, to taste"),
      (eight = "cayene powder, to taste"),
      (nine = "oregeno, to taste"),
      (ten = "2 bays leaves"),
      (eleven = "2 cups chicken stock"),
      (twelve = "15 ounce can of black beans, drained"),
      (thirteen = "salt and pepper, to taste"),
    ],
    image:
      "https://www.triedandtruerecipe.com/wp-content/uploads/2019/12/Skirt-Steak-with-Spicy-Rice-and-Beans_MidPage-867x1024.png",
    directions: [
      (one =
        "In a wide pot, heat the oil over medium-high. Once hot, add the onion and jalapeño pepper and cook, stirring often, for 7-8 minutes until golden brown."),
      (two =
        "Add the mushrooms to the skillet and cook, stirring occasionally, for 8-10 minutes until well-browned all over. Season with salt and pepper."),
      (three =
        "Pour the tequila into the skillet and scrape up any browned bits stuck to the bottom of the pan. Bring to a boil and cook until most of the liquid has evaporated."),
      (four =
        "Add the rice to the vegetables and season with the spices. Add the bay leaves. Pour in the chicken stock and scrape up any browned bits stuck to the bottom."),
    ],
  },
  {
    name: "Old Fashioned Beef Stew",
    type: "red meat",
    wine: "red",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      (one = "¼ cup all-purpose flour"),
      (two = "¼ teaspoon freshly ground pepper"),
      (three = "1 pound beef stewing meat, trimmed and cut into inch cubes"),
      (four = "5 teaspoons vegetable oil"),
      (five = "2 tablespoons red wine vinegar"),
      (six = "1 cup red wine"),
      (seven = "3 ½ cups beef broth, homemade or low-sodium canned"),
      (eight = "2 bay leaves"),
      (nine = "1 medium onion, peeled and chopped"),
      (ten = "5 medium carrots, peeled and cut into 1/4-inch rounds"),
      (eleven = "2 large baking potatoes, peeled and cut into 3/4-inch cubes"),
      (twelve = "12 teaspoons salt"),
    ],
    image:
      "https://static01.nyt.com/images/2020/02/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg",
    directions: [
      (one =
        "Combine the flour and pepper in a bowl, add the beef and toss to coat well. Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches."),
      (two =
        "Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer."),
      (three =
        "Cover and cook, skimming broth from time to time, until the beef is tender, about 1 1/2 hours. Add the onions and carrots and simmer, covered, for 10 minutes. Add the potatoes and simmer until vegetables are tender, about 30 minutes more. Add broth or water if the stew is dry. Season with salt and pepper to taste. Ladle among 4 bowls and serve."),
    ],
  },
  {
    name: "Sautéed Sirloin Medallions with Pearl Onion Red Wine Sauce",
    type: "red meat",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      (one =
        "1 pound Certified Angus Beef ® sirloin filets (2-3 ounces each)  "),
      (two = "2 tablespoons vegetable or canola oil"),
      (three = "1 cup frozen petite pearl onions"),
      (four = "1/2 cup red wine blend"),
      (five = "1/2 cup beef stock"),
      (six = "1 tablespoon tomato paste"),
      (seven = "1/2 teaspoon coarse kosher salt"),
      (eight = "1/2 teaspoon cracked black pepper"),
      (nine = "2 sprigs fresh thyme"),
    ],
    image:
      "https://www.certifiedangusbeef.com/recipes/images/recipes/1171bec1-4480-41d0-b34a-4048263424c2.jpg",
    directions: [
      (one =
        "1. Pat medallions dry. Heat oil in pan over medium heat. Sear medallions, browning for 2 minutes on each side to develop a dark mahogany crust; remove from pan"),
      (two =
        "2. Add pearl onions and sear until golden. Add red wine; reduce by half. Add beef stock, tomato paste, salt, pepper and thyme. Simmer 2 minutes until sauce has thickened."),
      (three =
        "3. Add medallions, cover and turn off heat. Allow to sit covered for five minutes before serving."),
    ],
  },
  {
    name: "Cast Iron Skillet Porterhouse Steak",
    type: "red meat",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      (one = "One 2- to 2 1/2-inch-thick porterhouse steak"),
      (two = "Kosher salt and freshly ground black pepper"),
      (three = "1 tablespoon canola oil"),
      (four = "2 tablespoons butter, cubed"),
      (five = "garlic clove, to taste"),
      (six = "sprig of thyme, to taste"),
      (seven = "sprig of rosemary, to taste"),
    ],
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/3/27/0/KC1611_Porterhouse-Steak-with-Herb-Fries_s4x3.jpg.rend.hgtvcom.826.620.suffix/1522172643310.jpeg",
    directions: [
      (one = "1. Let the steak rest at room temperature for 30 minutes."),
      (two =
        "2. Preheat the broiler. Heat a cast-iron skillet over medium-high heat until very hot."),
      (three =
        "3. Season the steak heavily with salt and pepper on all sides. Add the oil to the skillet, then place the steak in the skillet and do not move it.  Cook until a nice sear forms, about 3 minutes. Remove the skillet from the heat, transfer the steak to a cutting board and cut both the filet and sirloin from the bone. Slice the steak against the grain into thick pieces.  Put the bone back into the skillet and reassemble the steak around it (it should look like the steak originally did) with the seared side up. Top with pieces of butter. Add a couple cloves of garlic and a few sprigs of thyme or rosemary, if desired."),
      (four =
        "4. Broil to desired doneness, about 4 minutes for medium rare, 5 to 6 minutes for medium.  Transfer to a serving plate and pour the pan drippings over the steak."),
    ],
  },
  // Pork
  {
    name: "Pork Tenderlion with Oven Roasted Potatoes",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      (one = "1 lb pork tenderloin"),
      (two = "1/2 yukon gold potatoes"),
      (three = "2 tablespoons pork rub"),
      (four = "2 tablespoons of Olive Oil"),
      (five = "cooking twine"),
      (six = "salt and pepper, to taste"),
    ],
    image:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2019/04/sheet-pan-pork-tenderloin-potatoes-3.jpg",
    directions: [
      (one = "1. Cover tederloin liberably in rub. Set in fridge overnight."),
      (two =
        "2. Pre-Heat oven to 425. Tie twine around tenderloin in criss-crossed pattern. Cover with 1 Tablespoon of olive oil and place on cooking sheet, uncovered."),
      (three = "3. Toss potatoes in remaining oil, adding salt and pepper"),
      (four =
        "Pour potatoes out onto the baking sheet, srrounding the tenderloin and place in the oven."),
      (five =
        "5. Roast for 25 minutes, turning the tenderloin over every 6-8 minutes."),
    ],
  },
  {
    name: "Honey Garlic Pork Chops",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      (one = "4 pork chops bone in or out"),
      (two = "Salt and pepper, to season"),
      (three = "1 teaspoon garlic powder"),
      (four = "2 tablespoons olive oil"),
      (five = "6 cloves garlic, minced"),
      (six = "1 tablespoon unsalted butter"),
      (seven = "1/4 cup honey"),
      (eight = "1/4 cup water (or chicken broth)"),
      (nine =
        "2 tablespoons rice wine vinegar (or apple cider vinegar, or any white vinegar)"),
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2018/05/Easy-Honey-Garlic-Pork-Chops-IMAGE-6.jpg",
    directions: [
      (one =
        "1. Preheat oven broiler (or grill) on medium-high heat. Season chops with salt, pepper and garlic powder just before cooking."),
      (two =
        "2. Heat oil in a pan or skillet over medium high heat until hot. Sear chops on both sides until golden and cooked through (about 4-5 minutes each side). Transfer to a plate; set aside."),
      (three =
        "3. Reduce heat to medium. Melt butter in the same pan, scraping up any browned bits from the bottom of the pan. Sauté garlic until fragrant (about 30 seconds). Add the honey, water and vinegar. Increase heat to medium-high and continue to cook until the sauce reduces down and thickens slightly (about 3-4 minutes), while stirring occasionally."),
      (four =
        "4. Add pork back into the pan, baste generously with the sauce and broil/grill for 1-2 minutes, or until edges are slightly charred."),
      (five =
        "5. Garnish with parsley and serve over vegetables, rice, pasta or with a salad."),
    ],
  },
  {
    name: "Pork and Fennel Ragout",
    type: "white meat (pork)",
    wine: "red",
    subwine: "Resiling",
    ingredients: [
      (one =
        "3 1-inch-thick boneless pork loin chops (1 pound total), trimmed and sliced into 1/4-inch-wide strips"),
      (two = "1 teaspoon fennel seeds"),
      (three = "Kosher salt and freshly ground pepper"),
      (four = "Zest and juice of 1 lemon"),
      (five = "3 tablespoons all-purpose flour"),
      (six = "5 tablespoons chopped fresh parsley"),
      (seven = "3 tablespoons extra-virgin olive oil"),
      (eight = "1 cup sliced shallots"),
      (nine = "1 small fennel bulb, trimmed and chopped"),
      (ten = "2 tablespoons tomato paste"),
      (eleven = "10 ounces cremini mushrooms, sliced"),
      (twelve = "1 1/2 cups red or white wine"),
    ],
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/8/13/0/FNM100109WeekNight017_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371589485637.jpeg",
    directions: [
      (one =
        "1. Grind the fennel seeds with 1 teaspoon salt and 1/2 teaspoon pepper in a spice grinder or chop with a knife. Transfer to a medium bowl; mix with the lemon juice and pork. Add the flour and toss to coat. In another bowl, mix the lemon zest with 2 tablespoons parsley."),
      (two =
        "2. Heat a deep skillet or pot over high heat and add the olive oil. Brown the pork in batches, 1 minute per side; transfer to a plate. Add the shallots, fennel bulb, the remaining 3 tablespoons parsley, and salt to taste to the skillet. Reduce the heat and cook until the vegetables are wilted, 2 minutes. Add the tomato paste and cook, stirring, 3 minutes."),
      (three =
        "3. Add the mushrooms, wine and 1/2 cup water; scrape up any browned bits. Cover and simmer over low heat until the fennel is tender, 12 minutes. Add the pork and heat through, 2 to 3 minutes. Season with salt and pepper and top with the lemon zest-parsley mixture."),
    ],
  },
  {
    name: "Oven Pork Ribs with BBQ Sauce",
    type: "white meat (pork)",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      (one = " 4 - 5lb pork ribs (2 racks)"),
      (two = "3/4 cup sweet alcoholic apple cider (hard cider) , "),
      (three = "1 tbsp olive oil"),
      (four = "choice of pork rub"),
      (five = "choice of barbeque sauce"),
    ],
    image:
      "https://www.recipetineats.com/wp-content/uploads/2016/01/Oven-Pork-Ribs-with-Barbecue-Sauce_5.jpg",
    directions: [
      (one =
        "1. Preheat oven to 160°C/320°F (all oven types). Combine the Rub ingredients and rub onto both sides of the ribs (most on meaty side). Set aside to marinate for 20 minutes (or overnight). Place ribs on a tray in a single layer. Pour apple cider underneath the ribs, cover with foil then bake for 1 hour 30 minutes or until the meat is pretty tender (Note 5)"),
      (two =
        "2. Remove from oven, turn up to 180°C/350°F. Remove foil, drizzle with olive oil, then return ribs to oven for 15 minutes or until rub becomes nice and crusty. Line a new tray with foil then baking / parchment paper. Remove ribs from oven, transfer to lined tray. Pour any juices from tray over the ribs."),
      (three =
        "3. Flip ribs so the bonier side is up. Slather with Barbecue Sauce, then bake 10 minutes. Remove from oven, then turn ribs over so the meaty side is up. Slather with Barbecue Sauce, bake 5 minutes. Repeat 2 or 3 more times until you've got a thick glaze on the ribs. "),
      (four =
        "4. Cut ribs into individual or multiple rib portions and serve with remaining Barbcue Sauce!"),
    ],
  },
  {
    name: "Ginger Pork and Rice Bowl",
    type: "white meat (pork)",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      (one = "1 tablespoon olive oil"),
      (two = "1/2 cup diced white onion"),
      (three = "1 pound ground pork"),
      (four = "3 cloves garlic, minced"),
      (five = "1 tablespoon grated fresh ginger (about 1 inch, peeled)"),
      (six = "1 tablespoon soy sauce"),
      (seven = "1 large carrot, shredded"),
      (eight = "1 medium cucumber, sliced"),
      (nine = "1/3 cup each fresh basil, parsely and mint"),
      (ten = "1 cup dried jasmine rice, to serve"),
      (eleven = "1 lime, sliced, to serve"),
      (twelve = "Sesame seeds, garnish"),
    ],
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2019/07/pork-rice-bowls-Lead-00004.jpg ",
    directions: [
      (one =
        "1. Add dried rice to a medium pot and rinse with cold water until the water runs clear. Fill the pot until water covers the rice by about 1/4 inch. Place over high heat and bring to a simmer."),
      (two =
        "2. Once simmering, stir the rice, cover it, and turn heat down to very low. Simmer rice slowly for 8 to 10 minutes, then test rice. If it’s cooked through (i.e. not crunchy), drain off any extra water, remove from heat, cover and steam for five minutes, then fluff with a fork."),
      (three =
        "3. In a large skillet over medium-high heat, add the olive oil and diced onions. Cook until the onions turn translucent, 3 to 4 minutes. Add ground pork and break up with a spatula continuously while cooking until the pork is crumbly, browned, and cooked through, 7 to 8 minutes."),
      (four =
        "4. When the pork is almost done cooking, add garlic, ginger, and soy sauce. Stir, and cook for another minute or two to combine flavors."),
      (five =
        "5. Add 1/2 to 3/4 cup of cooked jasmine rice to a wide bowl. Top with 1/2 cup of the pork mixture, sliced cucumbers, shredded carrots, and the herb mix. Sprinkle the bowl with sweet soy sauce and sesame seeds."),
    ],
  },
  // Salad
  {
    name: "Classic Cesar Salad",
    type: "salad",
    wine: "white",
    subwine: "Chardonnay",
    ingredients: [
      (one = "6 anchovy fillets packed in oil, drained"),
      (two = "1 small garlic clove"),
      (three = "2 large egg yolks"),
      (four = "2 tablespoons fresh lemon juice, plus more"),
      (five = "1/2 teaspoon Dijon mustard"),
      (six = "2 tablespoons olive oil"),
      (seven = "1/2 cup olive oil"),
      (eight = "3 tablespoons finely grated Parmesan"),
      (nine = "ground black pepper"),
      (ten = "croutons"),
      (eleven = "3 romaine hearts"),
      (twelve = "parmesan cheese"),
    ],
    image:
      "https://assets.bonappetit.com/photos/57ae12ef53e63daf11a4e1d6/16:9/w_2560%2Cc_limit/BA-best-classic-caeser-salad.jpg",
    directions: [
      (one =
        "1. Chop together anchovy fillets, garlic, and pinch of salt. Use the side of a knife blade to mash into a paste, then scrape into a medium bowl. Whisk in egg yolks, 2 Tbsp. lemon juice, and mustard. Adding drop by drop to start, gradually whisk in olive oil, then vegetable oil; whisk until dressing is thick and glossy. Whisk in Parmesan. Season with salt, pepper, and more lemon juice, if desired."),
      (two =
        "2. Prepare lettuce. Use whole leaves; they provide the ideal mix of crispness, surface area, and structure."),
      (three =
        "3. Caesars crowned with a mound of grated Parmesan may look impressive, but all that clumpy cheese mutes the dressing. Instead, use a vegetable peeler to thinly shave a modest amount on top for little salty bursts."),
      (four =
        "4. Use your hands to gently toss the lettuce, croutons, and dressing, then top off with the shaved Parm."),
    ],
  },
  {
    name: "California Cobb Salad",
    type: "salad",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      (one = "1/2 head of each romaine, Boston lettuce"),
      (two = "1 small bunch of frisée (curly endive)"),
      (three = "1/2 bunch of watercress, coarse stems discarded"),
      (four = "6 slices of bacon"),
      (five =
        "2 ripe avocados, seed removed, peeled, and cut into 1/2-inch pieces"),
      (six =
        "1 whole skinless boneless chicken breast (about 3/4 pound total), halved, cooked, and diced "),
      (seven = "1 tomato, seeded and chopped fine"),
      (eight =
        "2 hard-boiled large eggs, separated, the yolk finely chopped and the white finely chopped"),
      (nine = "2 tablespoons chopped fresh chives"),
      (ten = "1/3 cup red-wine vinegar"),
      (eleven = "1 tablespoon Dijon-style mustard"),
      (twelve = "1-2 teaspoons sugar"),
      (thirteen = "Salt and pepper, to taste"),
      (fourteen = "2/3 cup extra virgin olive oil"),
      (fifteen = "1/2 cup finely grated Roquefort"),
    ],
    image:
      "https://www.simplyrecipes.com/wp-content/uploads/2006/06/cobb-salad-sally-horiz-b-1800.jpg",
    directions: [
      (one =
        "1. Cook the bacon in a skillet on medium heat until crisp on both sides. Remove from skillet and lay out on paper towels to absorb the excess fat. Allow the bacon to cool. Crumble the bacon and set aside."),
      (two =
        "2. Toss the various lettuces: In a large salad bowl, toss together well the various lettuces and watercress."),
      (three =
        "3. Compose the salad: Arrange the chicken, the bacon, the tomato, and the avocado decoratively over the greens and garnish the salad with the chopped egg and the chives."),
      (four =
        "4. Make the vinaigrette: In a small bowl whisk together the vinegar, the mustard, and salt and pepper to taste, add the oil in a slow stream, whisking, and whisk the dressing until it is emulsified."),
      (five =
        "5. Stir in the Roquefort. Add sugar to taste, 1/2 teaspoon at a time. Whisk the dressing. Serve separately or toss in with the salad."),
    ],
  },
  {
    name: "Winter Salad",
    type: "salad",
    wine: "white",
    subwine: "Pinot Gris",
    ingredients: [
      (one = "1/4 cup reduced-fat mayonnaise"),
      (two = "1/4 cup maple syrup"),
      (three = "3 tablespoons white wine vinegar"),
      (four = "2 tablespoons minced shallot"),
      (five = "2 teaspoons sugar"),
      (six = "1/2 cup canola oil"),
      (seven = "2 packages (5 ounces each) spring mix salad greens"),
      (eight = "2 medium tart apples, thinly sliced"),
      (nine = "1 cup dried cherries"),
      (ten = "1 cup pecan halves"),
      (eleven = "1/4 cup thinly sliced red onion"),
    ],
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Perfect-Winter-Salad_EXPS_HC17_42750_D01_20_7b-696x696.jpg",
    directions: [
      (one =
        "1. In a small bowl, mix mayo, syrup, vinegar, shallots and sugar; gradually whisk in oil until blended. Refrigerate, covered, until serving."),
      (two =
        "2. To serve, place remaining ingredients in a large bowl; toss with dressing."),
    ],
  },
  {
    name: "Spinach Apple Salad",
    type: "salad",
    wine: "white",
    subwine: "rose",
    ingredients: [
      (one =
        "1/2 cup Glazed Walnuts or Glazed Pecans (or toasted walnuts or toasted pecans)"),
      (two = "1 recipe Best Balsamic Dressing"),
      (three = "1 apple"),
      (four = "1 ripe pear"),
      (five = "3 cups baby spinach leaves"),
      (six = "3 cups baby mixed greens"),
    ],
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2017/10/Apple-Pear-Salad-001-800x1000.jpg",
    directions: [
      (one =
        "1. Make the Glazed Walnuts or Glazed Pecans. (While they cook, prep the rest of the salad. Or, you can make these ahead!)"),
      (two = "2. Make the Best Balsamic Dressing."),
      (three = "3. Core the apple and pear, cut them into thin slices."),
      (four =
        "4. Place the greens on serving plates and top with apples, pears, and walnuts. Pour over the dressing and serve. (Pro tip: Dress it up by adding cubed Manchego cheese!)"),
    ],
  },
  {
    name: "Asian Chopped Salad",
    type: "salad",
    wine: "white",
    subwine: "Zinfandel",
    ingredients: [
      (one = "1 romaine heart"),
      (two =
        "1 cup each of green cabbage, red cabbage, bean sprouts, snap peas, carrots"),
      (three = "1 red pepper"),
      (four = "2 green onions"),
      (five = "2 tablespoons cilantro"),
      (six = "⅓ cup Sesame Ginger Dressing"),
      (seven = "1 teaspoon sesame oil"),
      (eight = "¼ cup almonds"),
      (nine = "1 tablespoon sesame seeds"),
    ],
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2019/07/Asian-Salad-SpendWithPennies.jpg",
    directions: [
      (one = "1. Wash, prep and chop all vegetables"),
      (two =
        "2. Heat sesame oil in a skillet over medium heat and toast almonds for 3-5 minutes or until slightly browned and fragrant. Set aside to cool."),
      (three = "3. Combine all ingredients together and toss with dressing."),
      (four = "4. Top with toasted almonds, cilantro, and sesame seeds."),
    ],
  },
  // Seafood
  {
    name: "Pan Fried Great Lakes Walleye",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      (one = "8 fresh-caught Walleye fillets"),
      (two = "2 eggs"),
      (three = "3/4 cups flour"),
      (four = "1 cup Italian style bread crumbs"),
      (five = "1/2 teaspoon salt"),
      (six = "1/4 teaspoon onion powder"),
      (seven = "1/2 teaspoon paprika"),
      (eight = "4 Tablespoons oil"),
    ],
    image:
      "https://www.beyondthechickencoop.com/wp-content/uploads/2019/02/Pan-Fried-Fish-Pics.jpg",
    directions: [
      (one = "1. Lightly beat eggs in a dish"),
      (two = "2. In another dish combine flour, bread crumbs and seasoning"),
      (three =
        "3. Dip fish in egg and then in flour mixture. Shake off any excess flour."),
      (four =
        "4. Add a couple of tablespoons of oil to a pan and heat pan over medium heat."),
      (five =
        "5. When pan is hot, add 3-4 fillets to pan. Cook 3 minutes per side so each side is nicely browned. "),
      (six =
        "6. Remove fish from pan and place on a baking sheet lined with a baking rack. Place cooked fish in a 350 degree oven while you cook remaining fish. "),
      (seven =
        "7. Wipe out pan and add additional oil. Repeat process with remaining fish. "),
      (eight = ""),
    ],
  },
  {
    name: "Tender Oven Baked Salmon",
    type: "seafood",
    wine: "red",
    subwine: "Pinot Noir",
    ingredients: [
      (one =
        "1 pound (500 g) fingerling potatoes, halved (or Yukon golds or halved white/red baby potatoes)"),
      (two = "2 tablespoons olive oil"),
      (three = "1 1/2 teaspoons salt, divided"),
      (four = "1/2 teaspoon cracked black pepper, divided"),
      (five = "4 (6 oz | 170 g) skinless salmon fillets"),
      (six = "2 1/2 tablespoons minced garlic, divided"),
      (seven = "2 tablespoons fresh chopped parsley"),
      (eight = "1/3 cup freshly squeezed lemon juice"),
      (nine = "1/2 cup melted unsalted butter"),
      (ten = "3 bunches asparagus, (18 spears, woody ends removed)"),
      (eleven =
        "2 tablespoons dry white wine (substitute with 1/4 cup low-sodium chicken broth)"),
      (twelve = "1 lemon sliced to garnish "),
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2018/03/Sheet-Pan-Baked-Salmon-Potatoes-Asparagus-4.jpg",
    directions: [
      (one =
        "1. Heat oven to 400°F | 200°C. On a large rimmed baking sheet, toss together potatoes with the oil, 1/2 tablespoon of garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper. Spread out in an even layer and roast for 15 minutes until they're just starting to soften and brown."),
      (two =
        "2. Push potatoes to one side of the sheet pan and arrange salmon down the centre. Rub salmon evenly with 1 1/2 tablespoons of the minced garlic and 2 tablespoons of parsley. Add the asparagus to the other side of the pan. "),
      (three =
        "3. Combine 1/4 cup of lemon juice and 1/4 cup of the melted butter together and pour the mixture over the salmon and asparagus. Season everything with the remaining salt and pepper."),
      (four =
        "4. Return to oven and continue baking until the potatoes are golden and fork-tender and the salmon is opaque throughout, (about 10 minutes). Optional: broil in the last 2 minutes for charred edges.   "),
      (five =
        "5. Meanwhile, in a small bowl, combine the remaining butter, garlic and lemon juice with the wine (or chicken stock). Serve with the salmon, veggies and lemon slices!"),
    ],
  },
  {
    name: "Lemon Red Snapper with Herbed Butter",
    type: "seafood",
    wine: "white",
    subwine: "Chardonnay",
    ingredients: [
      (one = "4 (6-ounce) red snapper or other firm white fish fillets"),
      (two = "2 lemons"),
      (three = "¼ teaspoon salt"),
      (four = "¼ teaspoon paprika"),
      (five = "¼ teaspoon black pepper"),
      (six = "2 tablespoons butter, softened"),
      (seven =
        "1 ½ teaspoons chopped fresh herbs (such as rosemary, thyme, basil, or parsley)"),
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F04%2F29%2Flemon-snapper-oh-1896023-4x3-clfff-2000.jpg",
    directions: [
      (one =
        "1. Preheat oven to 425. Cut 1 lemon into 8 slices. Place slices, in pairs, on a rimmed baking sheet coated with cooking spray. Grate remaining lemon to get 1 teaspoon lemon rind; set aside. Reserve lemon for another use."),
      (two =
        "2. Place 1 fillet on top of each pair of lemon slices. Combine salt, paprika, and pepper; sprinkle evenly over fish. Bake at 425° for 13 minutes or until fish flakes easily when tested with a fork or until desired degree of doneness."),
      (three =
        "3. While fish bakes, combine reserved lemon rind, butter, and herbs in a small bowl."),
      (four =
        "4. Place fish and lemon slices on individual serving plates; top each fillet with herbed butter, spreading to melt, if desired. Garnish with herb sprigs, if desired."),
    ],
  },
  {
    name: "Grilled Cajun Spiced Shrimp Skewers",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      (one = "1/2 cup (8 Tbsp) unsalted butter"),
      (two = "4 cloves of garlic, pressed or minced"),
      (three = "1 Tbsp cajun spice (provides light heat; it’s not too spicy)"),
      (four = "1/2 tsp salt (omit if using salted butter)"),
      (five = "1 Tbsp lemon juice (from 1/2 medium lemon)"),
      (six = "2 lbs uncooked large shrimp (21-25 count), peeled and deveined"),
      (seven = "12 medium wooden skewers"),
    ],
    image:
      "https://natashaskitchen.com/wp-content/uploads/2015/05/Grilled-Garlic-Cajun-Shrimp-Skewers-4-600x900.jpg",
    directions: [
      (one =
        "1. Soak wooden skewers in water 30 min (reduces burning of the sticks). Preheat Grill to med/high (400˚F)."),
      (two =
        "2. Combine all marinade ingredients in a small sauce pan. Bring to a simmer then remove from heat. Pour half of the mixture into a ramekin and leave remaining marinade in pan (You’ll brush on half now and brush on remaining marinade after shrimp are grilled)."),
      (three =
        "3. Skewer 4 shrimp on each damp skewer without leaving spaces. Lay skewers flat on a rimmed Cookie Sheet. Brush one side of the skewered shrimp with sauce and refrigerate for 2 min until butter firms up. Flip shrimp over, brush second side and refrigerate 2 min until butter firms up."),
      (four =
        "4. Place skewers on the barbie and grill shrimp with the lid on about 2 minutes per side or just until cooked through and no longer transparent. Remove shrimp from grill. Don’t overcook or they will be rubbery. Brush on reserved sauce and serve."),
    ],
  },
  {
    name: "Pan Seared Tilapia Filet",
    type: "seafood",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      (one = "4 (4 ounce) fillets tilapia"),
      (two = "salt and pepper to taste"),
      (three = "½ cup all-purpose flour"),
      (four = "1 tablespoon olive oil"),
      (five = "2 tablespoons unsalted butter, melted"),
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F681641.jpg",
    directions: [
      (one =
        "1. Rinse tilapia fillets in cold water and pat dry with paper towels. Season both sides of each fillet with salt and pepper. Place the flour in a shallow dish; gently press each fillet into the flour to coat and shake off the excess flour."),
      (two =
        "2. Heat the olive oil in a skillet over medium-high heat; cook the tilapia in the hot oil until the fish flakes easily with a fork, about 4 minutes per side. Brush the melted butter onto the tilapia in the last minute before removing from the skillet. Serve immediately."),
    ],
  },
  // Chicken
  {
    name: "Stuffed Chicken Breast with Mozzarella and Spinach",
    type: "white meat (chicken)",
    wine: "white",
    subwine: "Riesling",
    ingredients: [
      (one = "2 boneless skinless chicken breasts, butterflied"),
      (two = "3 tablespoons olive oil, divided"),
      (three = "2 slices of fresh mozzarella cheese"),
      (four = "2 cups fresh baby spinach"),
      (five = "4 cloves garlic, minced"),
      (six = "1 small onion, minced"),
      (seven = "1 can low-sodium crushed tomatoes"),
      (eight = "1 tablespoon sugar"),
      (nine = "1/2 teaspoon balsamic vinegar"),
      (ten = "1/2 cup (125ml) chicken stock"),
      (eleven = "Crushed red pepper flakes, to taste (optional)"),
      (twelve = "Salt and fresh cracked pepper"),
    ],
    image:
      "https://www.eatwell101.com/wp-content/uploads/2017/08/chicken-breast-recipes.jpg",
    directions: [
      (one =
        "1. In a skillet, saute onion and 2 cloves minced garlic in a tablespoon olive oil for 3 – 4 minutes, until fragrant and translucent. Add tomato and chicken stock, bring to a boil and simmer over low-medium heat until the sauce reduces and starts to thicken, about 15 – 20 minutes. Stir in sugar and balsamic, adjust seasoning with salt and pepper, then set aside in a large bowl."),
      (two =
        "2. In the mean time: In another skillet or frying pan, add olive oil and garlic, sauté over medium heat for 1-2 minutes. Add spinach and stir frequently until wilted and cooked, about 2-3 minutes. Set garlic and spinach aside."),
      (three =
        "3. Butterfly chicken breasts, slice lengthwise down the middle but not all the way through. Season chicken with salt and pepper on both sides. Place a slice of mozzarella  over each chicken breast. Add Spinach and garlic on top. Fold chicken in half like a sandwich, keeping the stuffing in. Sprinkle top of chicken with red chili pepper flakes."),
      (four =
        "4. Heat a skillet over medium heat with a tablespoon olive oil. Sear and cook chicken on both sides for 5 minutes each, until golden and cooked through. Cheese should be melted and bubbly. Pour the tomato sauce around chicken to reheat quickly until simmering. Serve immediately, enjoy!"),
      (five = ""),
    ],
  },
  {
    name: "Crispy Chicken Parmesean",
    type: "white meat (chicken)",
    wine: "red",
    subwine: "Merlot",
    ingredients: [
      (one = "4 chicken breast halves, skinless boneless"),
      (two = "½ cup flour"),
      (three = "2 eggs"),
      (four = "⅔ cup Panko bread crumbs"),
      (five = "⅔ cup Italian Seasoning bread crumbs"),
      (six = "⅓ cup parmesan cheese grated"),
      (seven = "2 tablespoons parsley"),
      (eight = "4 tablespoons oil or as needed"),
      (nine = "24 ounces marinara sauce homemade or jarred"),
      (ten = "1 cup mozzarella cheese shredded"),
      (eleven = "¼ cup Parmesan cheese shredded"),
      (twelve = "basil & parsley fresh, chopped"),
    ],
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-23.jpg",
    directions: [
      (one = "1. Preheat an oven to 425°F."),
      (two =
        "2. Place flour in shallow dish. Place the eggs in a second dish (and beat with a fork)."),
      (three =
        "3. Combine Panko, Italian crumbs, grated parmesan, 2 tablespoons fresh parsley, salt and pepper to taste in a third shallow dish."),
      (four =
        "4. Pound chicken breasts to ½ inch thick (if they're very large you can cut them in half)."),
      (five =
        "5. Dip chicken into flour and shake to remove any excess. Dip chicken in beaten eggs & then into bread crumb mixture (press to adhere)."),
      (six =
        "6. Preheat oil in a large pan. Brown chicken on each side, about 4 minutes per side or until golden (it does not need to cook through as it will continue to cook in the oven)."),
      (seven =
        "7. Place 1 ½ cups of marinara sauce in the bottom of a 9x13 dish. Add browned chicken. Top each piece with a couple tablespoons of marinara sauce, mozzarella and parmesan."),
      (eight =
        "8. Bake 20-25 minutes or until golden and bubbly and chicken reaches 165°F. Sprinkle with fresh herbs and serve over pasta."),
    ],
  },
  {
    name: "Summertime Blackened Chicken",
    type: " white meat (chicken)",
    wine: "white",
    subwine: "Riesling",
    ingredients: [
      (one = "½ teaspoon paprika"),
      (two = "⅛ teaspoon salt"),
      (three = "¼ teaspoon cayenne pepper"),
      (four = "¼ teaspoon ground cumin"),
      (five = "¼ teaspoon ground cumin"),
      (six = "⅛ teaspoon ground white pepper"),
      (seven = "⅛ teaspoon onion powder"),
      (eight = "2 skinless, boneless chicken breast halves"),
    ],
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4538204.jpg",
    directions: [
      (one =
        "1. Preheat oven to 350 degrees F (175 degrees C). Lightly grease a baking sheet. Heat a cast iron skillet over high heat for 5 minutes until it is smoking hot."),
      (two =
        "2. Mix together the paprika, salt, cayenne, cumin, thyme, white pepper, and onion powder. Oil the chicken breasts with cooking spray on both sides, then coat the chicken breasts evenly with the spice mixture."),
      (three =
        "3. Place the chicken in the hot pan, and cook for 1 minute. Turn, and cook 1 minute on other side. Place the breasts on the prepared baking sheet."),
      (four =
        "4. Bake in the preheated oven until no longer pink in the center and the juices run clear, about 5 minutes."),
    ],
  },
  {
    name: "Crispy Cilantro Lime Chicken",
    type: "white meat (chicken)",
    wine: "white",
    subwine: "Rose",
    ingredients: [
      (one = "3 tablespoons olive oil divided"),
      (two = "1/4 cup fresh squeezed lime juice (Juice of 2 limes)"),
      (three = "1/4 cup fresh chopped cilantro"),
      (four = "1 teaspoon red chili (or pepper) flakes"),
      (five = "4 cloves garlic minced"),
      (six = "2 teaspoons brown sugar"),
      (seven = "3/4 teaspoon ground cumin"),
      (eight = "6 bone-in skin-on (or off) chicken thighs"),
      (nine = "Salt and pepper to taste"),
      (ten = "Fresh cilantro leaves to serve"),
      (eleven = "Lime slices or wedges to serve"),
    ],
    image:
      "https://cafedelites.com/wp-content/uploads/2017/05/Crispy-Cilantro-Lime-Chicken-9.jpg",
    directions: [
      (one = "1. Preheat oven to 425°F (220°C)."),
      (two =
        "2. In a medium-sized shallow bowl, whisk together 2 tablespoons olive oil together with the lime juice, chopped cilantro, chili flakes, garlic, sugar and cumin. Add the chicken thighs to the marinade and toss to evenly coat. Cover and refrigerate thighs for 15 minutes."),
      (three =
        "3. Heat the remaining one tablespoon of oil in a non stick pan or cast iron skillet over medium-high heat. Add in the thighs along with any marinade left over in the bowl, and sear chicken -- skin-side down -- for 4 minutes on each side until golden and crispy (chicken will not be fully cooked)."),
      (four =
        "4. Transfer to preheated oven and bake until the chicken is cooked through (about 15-20 minutes)."),
      (five = "Garnish with fresh cilantro leaves and lime slices or wedges."),
      (six =
        "Serve over steamed rice or cauliflower rice, and drizzle with the pan juices."),
      (seven = ""),
      (eight = ""),
    ],
  },
  {
    name: "Slow Cooked Barbeque Chicken",
    type: "white meat (chicken)",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      (one = "3 lbs chicken breasts (boneless, skinless), about 5-6 count"),
      (two = "1 1/2 cups BBQ Sauce, your choice"),
      (three = "1/2 medium onion grated (with juice)"),
      (four = "1 Tbsp olive oil"),
      (five = "1 Tbsp Worcestershire sauce"),
      (six = "2 Tbsp brown sugar"),
    ],
    image:
      "https://natashaskitchen.com/wp-content/uploads/2015/08/Crockpot-BBQ-Chicken-2-600x900.jpg",
    directions: [
      (one = "1. Stir together all sauce ingredients in a 5-6 qt slow cooker."),
      (two =
        "2. Add chicken and turn to coat. Cover and cook on high 3 to 4 hours or on low for 6-7 hours. Chicken is done when cooked through and easy to shred."),
      (three =
        "3. Remove chicken to a cutting board and shred each breast using two forks. Place shredded chicken back in the crock pot and stir to coat with the yummy sauce."),
    ],
  },
  // Pasta
  {
    name: "Fettuccini Pasta with Creamy Alfredo",
    type: "pasta",
    wine: "red",
    subwine: "Syrah",
    ingredients: [
      (one = "1 lb Fettuccine Pasta"),
      (two = "6 Tablespoons Butter"),
      (three = "1 Garlic Clove (minced)"),
      (four = "1 1/2 cups Heavy Cream"),
      (five = "1/4 teaspoon Salt"),
      (six = "1 1/4 cup Shredded Parmesan Cheese"),
      (seven = "1/4 teaspoon Pepper"),
      (eight = "2 Tablespoons Italian Parsley (optional)"),
    ],
    image:
      "https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Fettuccine-Alfredo-Recipe.jpg",
    directions: [
      (one =
        "1. In a large pot, heat water over high heat until boiling. Add salt to season the water. Once it is boiling, add fettuccine and cook according to package instructions."),
      (two =
        "2. In a large skillet or pan, heat butter over medium heat. Add minced garlic and cook for 1 to 2 minutes. Stir in heavy cream. "),
      (three =
        "3. Let heavy cream reduce and cook for 5 to 8 minutes. Add half of the parmesan cheese to the mixture and whisk well until smooth. Keep over heat and whisk well until cheese is melted."),
      (four =
        "4. Save some pasta water. The pasta water is full of flavor and can be used to thin out the sauce."),
      (five =
        "5. Toss alfredo sauce with fettuccine pasta and add half of the parmesan cheese. Once it is tossed, garnish with the remaining parmesan cheese. Add a little pasta water if it needs to be thinned out."),
      (six = "6. Garnish with Italian parsley, if so desired."),
    ],
  },
  {
    name: "Tuscan Pasta Salad",
    type: "pasta",
    wine: "white",
    subwine: "Sauvignon Blanc",
    ingredients: [
      (one = "16 ounce bowtie pasta cooked and drained in cold water"),
      (two = "1 7 ounce jar sun-dried tomatoes in oil drained"),
      (three = "1 red bell pepper diced"),
      (four = "1 6.5 ounce can sliced olives"),
      (five = "1 cup spinach"),
      (six = "1/4 cup basil chopped"),
      (seven = "1/2 cup grated parmesan cheese"),
      (eight = "3/4 cup olive oil"),
      (nine = "2 tablespoons white vinegar"),
      (ten = "2 tablespoons water"),
      (eleven = "1 teaspoon salt"),
      (twelve = "1 teaspoons sugar"),
      (thirteen = "1 teaspoon dry oregano"),
      (fourteen = "1 teaspoon dry basil"),
      (fifteen = "1 clove garlic"),
      (sixteen = "black pepper to taste"),
    ],
    image:
      "https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg",
    directions: [
      (one =
        "1. In a large bowl combine pasta, sundried tomatoes, bell pepper, olives, spinach, basil, and parmesan cheese. Toss until combined."),
      (two =
        "2. To make the dressing: In a small bowl whisk olive oil, vinegar, water, salt, sugar, oregano, basil, garlic and salt and pepper."),
      (three = "3. Drizzle the dressing over the pasta salad and serve."),
    ],
  },
  {
    name: "Penne Pasta with Italian Marinara Sauce",
    type: "pasta",
    wine: "red",
    subwine: "Cabernet Sauvignon",
    ingredients: [
      (one = "kosher salt"),
      (two = "1 28-ounce can whole peeled San Marzano tomatoes , with purée"),
      (three = "1/4 cup extra-virgin olive oil"),
      (four = "4 garlic cloves, peeled and smashed"),
      (five = "1 tablespoon tomato paste"),
      (six = "1 teaspoon kosher salt"),
      (seven = "1/2 teaspoon freshly ground black pepper"),
      (eight = "2 sprigs fresh basil or oregano , plus more basil for garnish"),
      (nine =
        "1 pound dried penne pasta , or other favorite pasta of your choice"),
    ],
    image:
      "https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004-683x1024.jpg",
    directions: [
      (one =
        "1. Bring a large pot of water to a boil and season generously with kosher salt."),
      (two =
        "2. Meanwhile, begin preparing the marinara. Pour the tomatoes and purée into a bowl and crush with your hands or the the back of a spoon, then set aside."),
      (three =
        "3. In a large cold skillet, add the extra-virgin olive oil and garlic cloves, and bring to medium heat. As the garlic begins to sizzle, stir occasionally, and cook until fragrant and golden, about 5 minutes. Monitor the heat so the garlic doesn't cook too quickly or burn."),
      (four =
        "4. Very carefully stir the tomato paste into the garlic and oil—take care so the oil doesn't splatter and burn you as the paste is added—and cook for 1-2 minutes. Carefully spoon the tomatoes into the pan with the oil and paste and season with salt and pepper. Add the basil sprigs and bring to a boil. Reduce to a bubbling simmer over low heat, stirring occasionally, for 30 minutes. Stir to mix the oil that rises to the top, then discard the basil sprigs and garlic."),
    ],
  },
  {
    name: "Angel Hair Pasta Primavera",
    type: "pasta",
    wine: "white",
    subwine: "Pinot Gris",
    ingredients: [
      (one = "12 oz. angel hair"),
      (two = "2 cups broccoli florets"),
      (three = "1 pint cherry tomatoes (yellow and red)"),
      (four = "1 (8-oz.) package baby bella mushrooms"),
      (five = "1 15-oz. can artichoke hearts, drained and roughly chopped"),
      (six = "2 tsp. garlic powder"),
      (seven = "Kosher salt, to taste"),
      (eight = "Freshly ground black pepper"),
      (nine = "3/4 c. grated Parmesan, plus more for garnish"),
      (ten = "Sliced fresh basil, for serving"),
    ],
    image:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/16/12/1600x1066/gallery-1458854366-delish-angel-hair-primavera.jpg?",
    directions: [
      (one =
        "1. Preheat oven to 400°. In a large pot of salted boiling water, cook pasta until al dente. Drain, reserving 1 cup pasta water, and return to pot."),
      (two =
        "2. On a large baking sheet, toss broccoli, tomatoes, mushrooms, and artichoke hearts with oil and season with garlic powder, salt, and pepper. Roast until tender and caramelized, stirring once, 15 to 20 minutes."),
      (three =
        "3. Add vegetables to pot along with Parmesan and 1/2 pasta water and, over low heat, stir vigorously to create a sauce. (Add more pasta water until you reach your desired consistency.)"),
      (four = "4. Garnish with Parmesan and basil before serving."),
    ],
  },
  {
    name: "Eggplant Lasagna",
    type: "pasta",
    wine: "red",
    subwine: "Malbec",
    ingredients: [
      (one =
        "2 large eggplants sliced lengthwise 3/4-inch thick (about 8 slices)"),
      (two = "3 1/2 tablespoons extra virgin olive oil divided"),
      (three = "1 ½ teaspoons kosher salt divided"),
      (four = "½ teaspoon black pepper divided"),
      (five = "16 ounces sliced cremini (baby bella) mushrooms"),
      (six = "3 cloves garlic minced"),
      (seven = "1/2 teaspoon dried oregano"),
      (eight =
        "1 (24-ounce) can prepared marinara-style pasta sauce of choice I used a roasted garlic flavor"),
      (nine = "1 (15-ounce) container part-skim ricotta cheese"),
      (ten =
        "1 (10 ounce) package frozen chopped spinach thawed with excess water squeezed out"),
      (eleven = "1/2 cup grated Parmesan divided"),
      (twelve = "1 large egg"),
      (thirteen =
        "1 cup shredded part-skim mozzarella cheese or a blend of mozzarella and provolone"),
      (fourteen = "2 tablespoons chopped fresh basil thyme, or parsley"),
    ],
    image:
      "https://www.wellplated.com/wp-content/uploads/2019/08/Classic-Eggplant-Lasagna-Recipe-600x718.jpg",
    directions: [
      (one =
        "1. Position racks in the upper and lower thirds of your oven. Preheat the oven to 400 degrees F. Lightly coat 2 rimmed baking sheets with nonstick spray. Coat a 9x13-inch baking dish with nonstick spray and set aside."),
      (two =
        "2. Arrange sliced eggplant in a single layer on the 2 sheet pans—if some of your end-most eggplant slices are very curved, trim off the eggplant outermost curvy portion so that the slices lay mostly flat. Brush 2 1/2 tablespoons of the oil over both sides of all of the slices. Sprinkle 1/2 teaspoon kosher salt and ¼ teaspoon pepper over the top."),
      (three =
        "3. Roast the eggplant until it is soft and golden, about 25 minutes, flipping the slices over and swapping the pans’ positions once halfway through. Remove the slices from the oven and reduce the oven temperature to 350 degrees F."),
      (four =
        "4. Meanwhile, in a large skillet heat the remaining 1/2 tablespoon oil over medium heat. Add the sliced mushrooms. Saute until the mushrooms are soft, about 7 minutes. Add the minced garlic, next ½ teaspoon kosher salt, and oregano. Cook for another 2 minutes. Remove the pan from the heat. Add the marinara pasta sauce and stir to combine."),
      (five =
        "5. In a large bowl add the ricotta, 1/4 cup Parmesan, egg, and remaining 1/2 teaspoon salt and remaining 1/4 teaspoon pepper. Mix well, until the mixture is evenly combined. Stir in the spinach, using a fork to break it up and distribute it as evenly with the ricotta mixture as possible."),
      (six =
        "6. Spoon half of the mushroom marinara sauce on the bottom of the prepared baking dish and spread it into an even layer. Lay 4 eggplant slices on top followed by all of the ricotta mixture. Layer on another 4 slices of eggplant and finish with the remaining mushroom marinara sauce. Top with the mozzarella and remaining ¼ cup Parmesan. Bake for 25 to 30 minutes, until the cheese is melted and the lasagna is hot and bubbly. Remove from the oven and sprinkle with fresh herbs. Let rest 5 to 10 minutes, then serve."),
    ],
  },
];

// "Wine" Collection Seed Data

const wineSeed = [
  {
    name: "Pinot Noir",
    type: "red",
    vintages: [
      (one = "Belle Glos Clark & Telephone Vineyard Pinot Noir"),
      (two = "La Crema Willamette Valley Pinot Noir 2018"),
      (three = "Kosta Browne Sta. Rita Hills Pinot Noir"),
      (four = "Samuel Robert Family Reserve"),
      (five = "Vennstone Tri Appellation"),
    ],
  },
  {
    name: "Merlot",
    type: "red",
    vintages: [
      (one = "Stags' Leap Winery Merlot"),
      (two = "Trefethen Merlot"),
      (three = "Duckhorn Vineyards"),
      (four = "Wildhaven Columbia Valley"),
      (five = "Barnett Spring Mountain"),
    ],
  },
  {
    name: "Cabernet Sauvignon",
    type: "red",
    vintages: [
      (one = "Long Meadow Ranch Farmstead 2018"),
      (two = "Niner Wine Estates 2016"),
      (three = "Gunlach-Bundschu Estate Vineyard"),
      (four = "Cabernario No. 8"),
      (five = "Mascota Vineyards Unanime"),
    ],
  },
  {
    name: "Syrah",
    type: "red",
    vintages: [
      (one = "Les Piliers"),
      (two = "J Lohr"),
      (three = "Chopo Jumilla Monastrell"),
      (four = "Sobon Estate"),
      (five = "Coppola Diamond"),
    ],
  },
  {
    name: "Malbec",
    type: "red",
    vintages: [
      (one = "Pascual Toso Mendoza"),
      (two = "Kaiken Ultra"),
      (three = "Crios de Susana Balbo"),
      (four = "Luca Uco Valley"),
      (five = "Atrium Cahors"),
    ],
  },
  {
    name: "Sauvignon Blanc",
    type: "white",
    vintages: [
      (one = "Wohlmuth 2017 Ried Hochsteinriegl"),
      (two = "Domaine Fouassier"),
      (three = "Margerum 2018 Sybarite"),
      (four = "Domaine Anthony & David Girard 2018 Les Montes Damnés"),
      (five = "Nobilo 2018 Icon "),
    ],
  },
  {
    name: "Pinot Gris",
    type: "white",
    vintages: [
      (one = "Fern Ridge"),
      (two = "Chateau"),
      (three = "Chateau Ste Michelle"),
      (four = "Willamette Valley"),
      (five = "Coelho Renovacao"),
    ],
  },
  {
    name: "Chardonnay",
    type: "white",
    vintages: [
      (one = "Rusack Vineyards Santa Barbara Valley"),
      (two = "Domain Matrot Mersault-Charmes "),
      (three = "Bravium Russian River Valley"),
      (four = "Talley Vineyeards"),
      (five = "Balletto Teresa's Unoaked"),
    ],
  },
  {
    name: "Zinfandel",
    type: "white",
    vintages: [
      (one = "Alquimista Cellars Jessie’s Grove Ancient Vine"),
      (two = "Andis Original Grandpère Vineyard"),
      (three = "Bella Vineyards & Wine Caves Maple Vineyards Annie’s Block"),
      (four = "Chappellet"),
      (five = "Cline Ancient Vines"),
    ],
  },
  {
    name: "Rose",
    type: "white",
    vintages: [
      (one = "Chateau de Nages Nimes"),
      (two = "Salmon Sancerre"),
      (three = "Domaine Piegonne Ventoux"),
      (four = "La Galiniere Ste Victoire "),
      (five = "Tendance Caladoc"),
    ],
  },
  {
    name: "Reisling",
    type: "white",
    vintages: [
      (one = "Vom Stein Federspiel Nikolaihof Wachau"),
      (two = "Barrel X Peter Lauer Saar"),
      (three = "Smaragd Klaus Prager Wachau"),
      (four = "Ravines Finger Lakes"),
      (five = "Brand Grand Cru Albert Boxler Alsace"),
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

db.Wine.remove({})
  .then(() => db.Wine.collection.insertMany(wineSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
