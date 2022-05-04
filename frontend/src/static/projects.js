const projects = [
  {
    word: "aircraft",
    titles: "1. Aces High\n2. Soaring Feats\n3. Winging It",
    description:
      "Design a program that can control a model aircraft. The program should be able to take inputs from a joystick or other controller and use them to control the servo motors that move the aircraft's control surfaces.",
  },
  {
    word: "cursor",
    titles: "1. pointer\n2. blinky\n3. mousey",
    description:
      "Design a cursor that changes color or shape when it hovers over certain elements on a webpage.",
  },
  {
    word: "dock",
    titles: "1. Dockside\n2. The Docks\n3. Dock Street",
    description:
      "Dock is an area where ships and boats can be Moored. It is typically located in a harbor, although it can also be located on a river or lake. A dock may include one or more piers, or slipways.\n\nA creative programming project about dock could include creating a virtual dock where users can moor their ships and boats. The dock could include features such as a slipway, piers, and a harbor. Users would be able to navigate their ships and boats around the dock, and interact with other users.",
  },
  {
    word: "vampire",
    titles:
      "1. Vampires are Alive and Well!\n2. Stake 'Em and Shake 'Em!\n3. The Great Vampire Hunt of 1234!",
    description:
      "One possible creative programming project about vampires could involve creating a game in which the player must help a vampire character escape from a group of angry villagers. The game could be set up like a platformer, with the player controlling the vampire as they jump and climb their way to safety. Alternatively, the player could be tasked with helping the vampire find victims to feed on, and avoiding capture by the authorities.",
  },
  {
    word: "ashram",
    titles: "1. Agni's Ashram\n2. Surya's Ashram\n3. Chandra's Ashram",
    description:
      "Design a program that helps manage an ashram. The program should track information about the ashram's residents, visitors, staff, and facilities. It should also provide features for scheduling events and managing resources.",
  },
  {
    word: "rose",
    titles: "1. Rose xyz\n2. yzr\n3. rse",
    description:
      "Design a program that generates a virtual rose garden. Users can add different types of roses, watering them andwatching them grow.",
  },
  {
    word: "appliance",
    titles: "1. appliance party\n2. appliance repair\n3. appliance showroom",
    description:
      "Design a program that can be used to control a home's appliances via a smartphone or other mobile device. The program should allow the user to select which appliances they want to control, and then provide them with a graphical interface for controlling those appliances. The program should also allow the user to schedule when the appliances should be turned on or off, and provide a way for the user to remotely monitor the appliances' energy usage.",
  },
  {
    word: "sponge",
    titles: "Sponging Up The Sun\nHot And Spicy Sponge\nRockin' The Sponge",
    description:
      "One possible creative programming project about sponge could involve creating a program that simulates the absorption and release of water by a sponge. This could involve using cellular automata to model the flow of water into and out of the cells of the sponge. Alternatively, the project could focus on modeling the growth of a sponge colony, or the movement of sponge particles in response to stimuli such as water flow or pressure.",
  },
  {
    word: "classmate",
    titles:
      "1. Group project: Classmates in a Group Project\n2. Classmates: The Project\n3. Classmates and the Project",
    description:
      "Design a program that can help a user keep track of their classmates. The program should be able to store classmate information such as name, contact information, and notes. It should also be able to search for classmates by name, and display contact information and notes for a selected classmate.",
  },
  {
    word: "neon",
    titles: "1. Neon Dreams\n2. Electric Nights\n3. Saved by the Glow",
    description:
      "Design a program that lights up a room with different colors of neon lights depending on the user's mood.",
  },
  {
    word: "afterthought",
    titles:
      "1. Afterthought: The Sequel\n2. Afterthought 2: Electric Boogaloo\n3. Afterthought 3: The Return of the Afterthought",
    description:
      'Design a "museum" of afterthoughts – a collection of creative ideas, stories, or projects that were never pursued. Allow visitors to browse the collection and vote on their favorite afterthoughts.',
  },
  {
    word: "clipboard",
    titles: "1. Clipboards and Chill\n2. Clippy's Clique\n3. Clipboard Chaos",
    description:
      "One creative programming project about clipboard could be creating a program that allows users to save text, images, and other data from the clipboard to a file. This file could be saved in the user's cloud storage account so that it can be accessed from any device. Another idea would be to create a program that allows users to share their clipboard data with others. This could be done through a social media platform or a messaging service.",
  },
  {
    word: "shore",
    titles: "1. Shore Leave\n2. Sandy Shores\n3. Seas the Day",
    description:
      "Design a program that can help identify and map different types of shorelines (e.g. rocky, sandy, muddy). The program could use data from satellite imagery, geo-tagged photos, and/or field surveys.",
  },
  {
    word: "butane",
    titles:
      "1. The Great Butane Experiment\n2. The Butane Project\n3. The Butane Experiment",
    description:
      "Design a program that takes user inputted data on the dimensions of a room and determines the amount of butane needed to fill it.",
  },
  {
    word: "ligula",
    titles: "1. Glow Worms\n2. Fireflies in a Jar\n3. Luminous Larvae",
    description:
      "Design a program that alters the color of a light bulb in a room according to the time of day. The light bulb would slowly change color from blue in the morning, to yellow in the afternoon, and red at night.",
  },
  {
    word: "bomb",
    titles: "1. Bomb Squad\n2. Bombageddon\n3. Bombtacular",
    description:
      "Design a computer game in which the player must diffuses bombs in a virtual city. The game could be set in different time periods or locations, and could include multiple levels of difficulty. The player would need to use logic and strategy to figure out how to diffuses the bombs before they detonate.",
  },
  {
    word: "alb",
    titles: "1. Alb'Ways\n2. Alb on the Go\n3. AlbNation",
    description:
      "Design a basic 2D game in which the objective is to collect as many items on the screen as possible, while avoiding enemies. The game could be set in a simple maze, with the player starting in the middle and enemies spawning randomly around the edges. As the player moves, the enemies should also move towards the center.",
  },
  {
    word: "cabinet",
    titles: "1. Quirky Cabinet\n2. Cool Cabinet\n3. Fun Cabinet",
    description:
      "Design a cabinet configurator that allows users to select the dimensions, finishes, door style, and other features of their desired cabinets. The configurator would then generate a 3D model of the cabinets which the user could view from various angles and change their selections if desired. Once the user is satisfied with their configuration, they could then purchase the cabinets through the configurator.",
  },
  {
    word: "mattock",
    titles: "1. Mattock Madness\n2. Mattock Mania\n3. Mattock Master",
    description:
      "Design a game in which the player wields a mattock to clear various obstacles in order to progress. The game could be set in different environments, such as a jungle or a field, and could feature different types of obstacles, such as trees, rocks, and barrels. The player would need to use their mattock to clear a path through the obstacle, and could be timed or given a certain number of tries to clear the obstacle. If the player is successful, they could move on to the next level.",
  },
  {
    word: "midline",
    titles:
      "1. Sew You Midline?\n2. A Stitch in Time: The Midline Project\n3. The Great Divide: Midline Research",
    description:
      "One possibility is to create a program that visualize the midline of an image. For example, the user could upload an image of themselves or a landscape and the program would trace the midline and create a symmetrical image.",
  },
  {
    word: "likelihood",
    titles: "1. Odds & Ends\n2. Chance Encounters\n3. Gambles & Lucks",
    description:
      "A program to calculate the likelihood of different events occurring, based on user input.",
  },
  {
    word: "havoc",
    titles: "Havoc\n1. Mischief\n2. Mayhem\n3. bedlam",
    description:
      "Design a program that randomly generates a maze. The player then has to find their way out of the maze within a certain number of moves. If they don't make it out in time, the walls of the maze start closing in on them.",
  },
  {
    word: "eligibility",
    titles:
      "1. Let's Get Eligible!\n2. Eligible for What?\n3. Eligibility Matters",
    description:
      "Design a program that allows users to input information about themselves and receive feedback on whether or not they are eligible for different types of services or benefits.",
  },
  {
    word: "pedal",
    titles: "1. Pedal Power\n2. Pedal Push\n3. Pedal to the Metal",
    description:
      "Design a bicycle pedal with a built-in sensor that can track the rider's pedaling data (cadence, power output, etc.) and display it on a connected smartphone or computer.",
  },
  {
    word: "citron",
    titles: "1. Zesty Citron \n2. Sour Citron \n3. Sweet Citron",
    description:
      "A citron-themed web app where users can input recipes, photos, and tips about Citrus medica, the Citron fruit.",
  },
  {
    word: "creative",
    titles:
      "1. The Creative Project\n2. The Quirky Creative Project\n3. The Fun Creative Project",
    description:
      "Ideas for a creative programming project include:\n\n1. Developing a new programming language that is specifically designed for creative applications. This language could include features that make it easier to create visual or auditory effects, or that make it easier to generate and manipulate media files.\n\n2. Developing a new application or service that makes use of creative programming in some way. This could be a social networking site that allows users to share and manipulate images and videos, or a service that generates new images or videos based on user input.\n\n3. Developing a new piece of software that is specifically designed for creative purposes.",
  },
  {
    word: "curio",
    titles:
      "1. The Curio Cabinet\n2. The Curio Shop\n3. The Curious Case of the Curio",
    description:
      "Design a program that generates random, interesting facts about the world's curiosities. Allow the user to select the type of fact they want to learn about, and then display a new fact each time they click a button. Alternatively, design a program that allows the user to input their own curiosity, and then display a random fact about that topic.",
  },
  {
    word: "builder",
    titles: "1. The Builders\n2. Construction Co.\n3. The House Builders",
    description:
      "Design a program that helps people plan and budget for home renovations. The program would allow users to input the square footage of their home, the desired renovations, and their budget. The program would then generate a list of materials needed and approximate costs.",
  },
  {
    word: "tabby",
    titles: "1. Tabby's House\n2. The Tabby Project\n3. Tabby's World",
    description:
      "Design a program that can track a cat's daily routine and suggest activities based on the cat's individual preferences.",
  },
  {
    word: "cleaner",
    titles: "1. Cleaner's Club\n2. Spick and Span\n3. Scrub-a-dub-dub",
    description:
      "Design a trashcan sorting game where the player has to correctly sort items into the right bin.",
  },
  {
    word: "therapist",
    titles: "1. Project Sooth\n2. Project Bliss\n3. Project Unwind",
    description:
      "Design a program that simulates a therapy session. The program should be able to ask the user questions and provide responses based on the answers the user provides. The program should be able to adapt its responses based on the user's input.",
  },
  {
    word: "cuticle",
    titles:
      "1. The Cuticle Cartel\n2. Cuticle Capers\n3. The Great Cuticle Conspiracy",
    description:
      "Design a program that can track the health of your cuticles and nails. The program would allow you to input data about your diet, lifestyle, and any changes to your nails or cuticles. It would then give you advice on how to improve the health of your nails and cuticles and track your progress over time.",
  },
  {
    word: "feel",
    titles:
      "1. The Feel of Things\n2. The Sense of Touch\n3. The Emotional Connection",
    description:
      "Design a program that can generate personalized, positive affirmations based on input from the user. Allow the user to choose from a variety of different affirmation themes (self-love, career success, body positivity, etc.) and receive affirmations accordingly.",
  },
  {
    word: "subroutine",
    titles:
      "1. Bizarre Routines\n2. Strange Subroutines\n3. eccentric Procedures",
    description:
      "Design a subroutine that takes an input of two strings and outputs the longest common subsequence between the two strings.",
  },
  {
    word: "townhouse",
    titles: "1. Townhouse Tussle\n2. Backyard Battles\n3. Lawn Wars",
    description:
      "Design a program that would allow users to design their own townhouses. Users would be able to select the size, number of floors, number of bedrooms, number of bathrooms, and other features. They would also be able to select the location of their townhouse on a map.",
  },
  {
    word: "mass",
    titles:
      "1. The Great Wall of China\n2. The Leaning Tower of Pisa\n3. The Egyptian Pyramids",
    description:
      "Create a program that calculates the mass of an object based on its weight and volume.",
  },
  {
    word: "shoreline",
    titles:
      "1) The Great Shoreline Cleanup \n2) The Big Shoreline Adventure \n3) Shoreline Shenanigans",
    description:
      "developing a natural language processing program to analyze and predict human behavior patterns in order to create a better user interface for a dating website",
  },
  {
    word: "insectarium",
    titles: "1. The Great Bug Out!\n2. Insect Safari!\n3. Bugs R Us!",
    description:
      "Design a program that can simulate the experience of walking through an insectarium. \nThe program can include different sections that focus on different types of insects. \nEach section can include information about the insects as well as interactive elements that allow users to learn more about them. \nThe program can also include a section where users can create their own insectarium.",
  },
  {
    word: "dungarees",
    titles: "1. Dungaree Dreams\n2. Dungaree Daze\n3. Dungaree Days",
    description:
      "Design a pair of dungarees that can be worn in different ways – as overalls, as a skirt, or as pants.",
  },
  {
    word: "gang",
    titles: "1. gangland\n2. gang warfare\n3. turf war",
    description:
      "This is a difficult question. Some ideas include:\n\n1. Develop a program that can track the movements of gang members and predict where they are likely to strike next.\n\n2. Create a program that can help law enforcement identify and track gang members.\n\n3. Develop a program that can help social workers or psychologists understand the motivations behind why people join gangs.",
  },
  {
    word: "craft",
    titles:
      "1. Upcycled Crafts for a Cause\n2. Trash to Treasure: Upcycling for Fun & Profit\n3. Art from the Heart: Handmade Gifts that Show You Care",
    description:
      "Design a program that can generate patterns for crafting. The program should be able to take user input to generate a pattern based on specifications. The user should be able to select the colors, size, and shape of the craft project. The program should also be able to export the pattern as a PDF.",
  },
  {
    word: "collaboration",
    titles:
      "1. Pair up and Share!\n2. Two heads are better than one!\n3. Collaborate to create!",
    description:
      "One possibility is to create a program that assists with collaborative writing projects, such as Wikipedia articles. It could help with things like suggesting edits and keeping track of changes made by different users.",
  },
  {
    word: "magnitude",
    titles: "Greatness \nGiganticness \nImmenseness",
    description:
      'Design a program that can take input from a user in the form of textual description of a physical quantity and output the corresponding magnitude in SI units. For example, the user might input "length of a standard swimming pool" and the program would output "25 metres".',
  },
  {
    word: "signify",
    titles: "1. Signify Sensation\n2. Signify Supreme\n3. Signify Sanctuary",
    description:
      'Design a program that "signifies" a message similar to sign language. \nThe user would input text and the program would output corresponding hand gestures and/or body language.',
  },
  {
    word: "algorithm",
    titles: "1. algo\n2. funky-algo\n3. algo-licious",
    description:
      "Design an algorithm that can automatically generate a table of contents for a book.",
  },
  {
    word: "trailpatrol",
    titles:
      "1. The best thing since sliced bread!\n2. A must-have for any adventurer!\n3. The perfect way to patrol your favorite trails!",
    description:
      "Design a program that can track hikers as they move along a trail. The program would need to be able to track the location of each hiker and provide information on the trail conditions.",
  },
  {
    word: "cheek",
    titles: "1. Cheeky\n2. Quirky\n3. Funky",
    description:
      "One possible creative programming project about cheek could be to create a program that can detect different types of cheek movements and give feedback accordingly. For example, the program could be used to help teach someone how to perform a cheek lift correctly, or to give feedback on facial expressions made during a conversation.",
  },
  {
    word: "authorisation",
    titles: "1. Project Verify\n2. Project Authorize\n3. Project Grant Access",
    description:
      "One idea for a creative programming project about authorization would be to create a program that would allow users to input their username and password for various accounts, and then the program would automatically log into those accounts for the user.",
  },
  {
    word: "twitter",
    titles: "Twittering Toes\nTweeting Tots\nTwitterPups",
    description:
      "Design a program that can automatically tweet on behalf of a user. The program could tweet updates about the user's day, post relevant articles or alerts, and respond to @ mentions and direct messages.",
  },
  {
    word: "pension",
    titles: "1. The Pension Project\n2. Pensions for Fun\n3. Quirky Pensioners",
    description:
      "Design a program that will help people plan for their retirement. The program should allow users to enter their current age, savings, and expected retirement age. It should then provide information on how much they need to save each month to reach their retirement goals. Additionally, the program could offer advice on how to invest their savings to get the best return.",
  },
  {
    word: "bill",
    titles: "The Bill Show\nBill's World\nThe Wonderful World of Bill",
    description:
      "A program that allows users to submit and track requests for bills to be introduced in their local legislature. The program would categorize bills by topics, alert users when new bills are introduced, and provide a forum for discussion.",
  },
  {
    word: "judgment",
    titles: "1. Project Judgment\n2. Judgment Day\n3. The Day of Judgment",
    description:
      "Design a program that can analyze a person's social media posts and predict whether or not they will be judged by their peers.",
  },
  {
    word: "cotton",
    titles: "1. Cottonwood\n2. Cottonball\n3. Cotton On!",
    description:
      "Design a program that assists farmers in growing cotton. The program would provide information on cottonseed varieties, planting times, soil type, irrigation, and other important factors.",
  },
  {
    word: "surgery",
    titles: "1. Surgery Buddies\n2. Cut it Out\n3. Surgeons on a Mission",
    description:
      "Design a program that can be used to plan surgeries. The program should be able to take into account the patient's medical history, current condition, and desired outcome of the surgery. It should be able to generate a surgical plan based on this information.",
  },
  {
    word: "suspect",
    titles:
      "1. Suspect\n2. Who's the Suspect?\n3. The Case of the Mysterious Suspect",
    description:
      "A suspect tracking program that allows the user to input information about a suspect and keep track of their whereabouts.",
  },
  {
    word: "dream",
    titles: "1. Dream\n2. The Dream Project\n3. Dreams",
    description:
      "One possible project idea is to create a program that allows users to input their dreams and then generates creative interpretation or stories based on those dreams. Another idea could be to create a dream journaling app that prompts users upon waking to record their dreams and then offers creative ways to further explore and reflect on those dreams.",
  },
  {
    word: "aquifer",
    titles: "1. Aquifer Fun\n2. Aquifer Quirky\n3. Aquifer Cool",
    description:
      "Design a program that models an aquifer and its response to pumping.",
  },
  {
    word: "nanoparticle",
    titles: "1. Nano-Pixie Dust\n2. Atomic Sprinkles\n3. Nano-Glitter",
    description:
      "Design a program that can simulate the properties and behavior of nanoparticles.",
  },
  {
    word: "nutmeg",
    titles: "1. Nutmeg and All Spice\n2. Nutmeg Treats\n3. Nutmeg Magic",
    description:
      "A nautical-themed game where the player is a pirate sailing the seas in search of nutmeg.",
  },
  {
    word: "treasure",
    titles: "1. Treasure Trove\n2. Lost & Found\n3. Wishful Thinking",
    description:
      'Design a program that randomly generated a map with a number of "treasure" chests. Each chest would contain a random number of treasure items. Players could then use the map to navigate to the chests and collect the treasure.',
  },
  {
    word: "resolution",
    titles:
      "1. Resolve This!\n2. Get Your Resolution On!\n3. Resolutions R Us!",
    description:
      "How about a program that can help people keep track of their New Year's resolutions? It could prompt them every day or week about what they're resolutions were and whether or not they've been working on them. It could also give tips on how to stay on track or how to adjust their goals if they're having trouble.",
  },
  {
    word: "molecule",
    titles: "Molecular madness\nMolecules gone wild\nAtoms gone crazy",
    description:
      "Design a program that can simulate the behavior of molecules in a chemical reaction.",
  },
  {
    word: "store",
    titles: "1. Storefront\n2. Displaycase\n3. Shop window",
    description:
      "Design a program that can keep track of inventory for a store. The program should be able to add and remove items from the inventory, as well as calculate the total value of the inventory.",
  },
  {
    word: "solvency",
    titles:
      "1. Grimy Greens\n2. Soggy Sustainability\n3. Wacky Water Conservation",
    description:
      "Design a program that can help someone manage their money and get out of debt. The program would ideally budget for the individual and help them save money. It would also offer tips on how to reduce expenses and make money.",
  },
  {
    word: "hurdler",
    titles: "Hurdles and Hashers\nHurdling Hashtags\nHashtaggers and Hurdlers",
    description:
      "Design a program that can predict how well a hurdler will do in a race based on their past performances.",
  },
  {
    word: "blinker",
    titles: "Blink and You'll Miss It\nLightning in a Bottle\nA Blink in Time",
    description:
      "One possibility is to create a program that blinks an LED in a pattern. The user could input different patterns or create their own.",
  },
  {
    word: "ego",
    titles: "1. The Ego Trip\n2. Ego Boost\n3. Ego Check",
    description:
      "Design a program that would help a person with low self-esteem to build their confidence. The program could provide daily affirmations, positive feedback on goal progress, and an outlet for journaling and expression. It could also include features like a progress tracker, badges and rewards, and sharing functionality with friends or a support group.",
  },
  {
    word: "recapitulation",
    titles: "1. Retro Recap\n2. A Do-Over\n3. A Second Chance",
    description:
      "Design a program that playfully quiz users about a chosen topic, with the goal of helping them to remember key information. The program could use recognition techniques such as spaced repetition to help users improve their recall over time.",
  },
  {
    word: "cenotaph",
    titles:
      "1. Cenotaph of the Unknown Soldier\n2. Cenotaph of the Fallen\n3. Cenotaph of the Unknown Warrior",
    description:
      "A cenotaph is an above-ground tomb or monument erected in honor of a person or persons who are buried elsewhere. \n\nOne creative programming project idea related to cenotaphs could be creating a virtual cenotaph that allows users to input the name of a loved one who has passed away and create a personalized tribute. This could include adding pictures, videos, and notes. Another idea could be creating a cenotaph memorial app that would be a database of cenotaphs around the world that users could contribute to and explore.",
  },
  {
    word: "riot",
    titles: "1. Riot Control\n2. Riot Act\n3. Riot Grrrlz",
    description:
      "A riot control simulator that allows users to experience what it's like to try and control a riot. The simulator would feature different scenarios and levels of difficulty, and would require users to use different strategies and tactics to try and quell the unrest.",
  },
  {
    word: "dueling",
    titles: "1. DuelingGrounds\n2. FencingFrenzy\n3. CutlassClash",
    description:
      'Rock, Paper, Scissors Tournament:\n\nThis project would be a tournament-style competition where players face off in a game of rock, paper, scissors. The catch is that each player would be able to program their own "bot" to compete in the tournament. These bots would use artificial intelligence to try and beat their opponents.',
  },
  {
    word: "shop",
    titles:
      "1.Shop Til You Drop\n2.Shop Around the Clock\n3.Shop 'til you drop dead",
    description:
      "Design a program that can be used by a shop owner to track inventory, sales, and profit. The program should be able to generate reports that show which items are selling well and which are not.",
  },
  {
    word: "doorknob",
    titles: "1. Doorknob\n2.  door handle\n3. Door accessory",
    description:
      "Design a program that generates random doorknob designs. Allow the user to input parameters such as size, shape, and color, and have the program generate a doorknob accordingly.",
  },
  {
    word: "whistle",
    titles: "1. whistle Watch\n2. Whistle Blower\n3. Whistler's List",
    description:
      "Design a program that can analyze a given whistle recording and classify it by pitch, timbre, and/or contributor.",
  },
  {
    word: "step-sister",
    titles:
      "1. Franken sisters\n2. Sisters from another mister\n3. Odd sisters out",
    description:
      "A program that helps manage relations between stepsisters. The program could provide tips on how to develop a good relationship, how to deal with difficult situations, and how to show love and support.",
  },
  {
    word: "hospice",
    titles:
      "1. Life's End: A Hospice Project\n2. The Final Journey: A Hospice Project\n3. The Last Chapter: A Hospice Project",
    description:
      "Design a program that can predict when a hospice patient will die.",
  },
  {
    word: "facsimile",
    titles: "1. Fax Bonanza\n2. Faxtastic\n3. The Fax Factor",
    description:
      "Design a program that can take images of handwritten text and convert them into digital text.",
  },
  {
    word: "paddle",
    titles: "1. SUP uprising\n2. Paddle out\n3. Paddle crazy",
    description:
      "Pong with a twist- instead of the usual vertical movement, the paddle can move in any direction.",
  },
  {
    word: "directory",
    titles:
      "1. Directory of the Damned\n2. The Unindexed \n3. The Lonely Files",
    description:
      "Design a program that can help people keep track of their belongings. The program should be able to store information about the item, where it is located, and when it was last seen. The program should also be able to generate reports about the items in the database.",
  },
  {
    word: "mate",
    titles:
      "1. The Great Argentine Mate Experiment\n2. A Year of Drinking Mate\n3. The Mate Chronicles",
    description:
      "Design a program that can generate recipes for traditional mate drinks from South America. The program should allow the user to input desired flavors and ingredients, and then generate a list of recipes that can be made using those ingredients. The user should also be able to rate the recipes and save their favorites.",
  },
  {
    word: "tankful",
    titles: "1.Tankful of Fun\n2. Quirky Tankful\n3. Cool Tankful",
    description:
      "Design a program that can play aTankful game. The player controls a tank and must drive around a track collecting fuel tanks. The object of the game is to collect as many fuel tanks as possible before running out of fuel.",
  },
  {
    word: "someplace",
    titles: "1. The Place\n2. The Spot\n3. The Location",
    description:
      "Design a program that takes the user on a virtual tour of your city. The program could include information about the history of the city, landmarks, popular tourist destinations, and more.",
  },
  {
    word: "asparagus",
    titles: "1. Leg Up!\n2. A-spar-ing us the Details\n3. Drop the Asparagus!",
    description:
      "Design a program that helps farmers track asparagus growth and yield. The program could include a database of asparagus plantings, with information on when they were planted, expected yields, and tips on best practices.",
  },
  {
    word: "road",
    titles:
      "1. Rolling Roadshow\n2. Take It to the Street\n3. Pavement Pounders",
    description:
      "One idea might be to create a program that helps people plan road trips. It could allow users to input their starting location and destination, and then suggest different routes and stops along the way. The program could also provide information on things to do and see at each location.",
  },
  {
    word: "compliment",
    titles: "1. You're a Gem!\n2. Great Job!\n3. Keep up the good work!",
    description:
      "Design a program that would generate compliments for people based on their interests, personality type, or physical attributes.",
  },
  {
    word: "charger",
    titles: "Portable Power Pack\nUSB Charger\nSolar Charger",
    description:
      "Design a program that will estimate the time it will take to charge a device given the current charge, the device's power rating, and the charger's power rating.",
  },
  {
    word: "dibble",
    titles: "1. Dibble Do\n2. Dibble Dabble\n3. Dibble Doo",
    description:
      "Design a dibble game where players can draw lines on the screen and watch as their dibbles follow the path. The game could include power-ups and different game modes.",
  },
  {
    word: "art",
    titles: "1. Art in the Park\n2. Art in the City\n3. Art in the Country",
    description:
      "Design a program that photoshops a person's face onto an artistic portrait.",
  },
  {
    word: "boysenberry",
    titles:
      "1. The Great Boysenberry Showdown\n2. Boysenberry Busters\n3. The Boysenberry Project",
    description:
      "One possible creative programming project about boysenberries could be creating a virtual reality Boysenberry picking simulation. This could be used to teach people about the fruit and where they come from, as well as providing a fun and interactive way to learn about them.",
  },
  {
    word: "deer",
    titles: "1. Bambi's BFF's\n2. Deerlovers\n3. The Reindeer Games",
    description:
      "Design a program that simulates a deer's natural habitat. The program should include a forest area with trees, a grassy field with plants, and a water source. The deer should be able to graze on the grass, eat the plants, and drink from the water. The program should also include predators, such as wolves and bears, which the deer should be able to avoid.",
  },
  {
    word: "cannon",
    titles: "1. Cannonball!\n2. A shot in the dark!\n3. A blast from the past!",
    description:
      "Design a cannon game where players can choose the type of cannon, angle, and force to launch a projectile at a target.",
  },
  {
    word: "farming",
    titles: "1. Farmer's Market Fresh\n2. Growing Green\n3. Field to Fork",
    description:
      "Design a program that uses weather data to optimize irrigation for a farm. The program would need to account for variables such as soil type, crop type, and weather patterns.",
  },
  {
    word: "loggia",
    titles: "1.Loggerheads \n2.Logjam \n3.Lumberjack",
    description:
      "Design a program that can help plan and manage a gardenia. The program should have features to track sunlight and watering needs for different types of gardenias.",
  },
  {
    word: "stereo",
    titles: "1. i2i\n2. original stereo\n3. boom boom",
    description:
      "Design a program that can take two mono audio signals and convert them into a single stereo signal.",
  },
  {
    word: "aftershock",
    titles:
      "1. Shaken, Not Stirred\n2. After the Fall\n3. The Long Road to Recovery",
    description:
      "Design a program that can predict aftershocks from an earthquake.",
  },
  {
    word: "pantology",
    titles:
      "Pantology Fun\n1. The Great Pantology Caper\n2. The Pantology Mysteries\n3. The Pantology Files",
    description:
      "Pantology is the study of all branches of knowledge. A creative programming project about pantology could involve creating a program that allows users to explore all branches of knowledge and learn about new topics. The program could include features such as a search engine for finding information about specific topics, a recommendation system for finding new topics to explore, and a social media component for connecting with other users.",
  },
  {
    word: "rubber",
    titles: "Elasticity\nBouncing\nRubberband",
    description:
      "A program that calculates the amount of rubber needed to produce a certain number of rubber products.",
  },
];

export default projects;
