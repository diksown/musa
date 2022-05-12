const projects = [
  {
    word: "aircraft",
    description:
      "Design a program that can control a model aircraft. The program should be able to take inputs from a joystick or other controller and use them to control the servo motors that move the aircraft's control surfaces.",
    title: "Aces High",
  },
  {
    word: "cursor",
    description:
      "Design a cursor that changes color or shape when it hovers over certain elements on a webpage.",
    title: "pointer",
  },
  {
    word: "dock",
    description:
      "Dock is an area where ships and boats can be Moored. It is typically located in a harbor, although it can also be located on a river or lake. A dock may include one or more piers, or slipways.\n\nA creative programming project about dock could include creating a virtual dock where users can moor their ships and boats. The dock could include features such as a slipway, piers, and a harbor. Users would be able to navigate their ships and boats around the dock, and interact with other users.",
    title: "Dockside",
  },
  {
    word: "vampire",
    description:
      "One possible creative programming project about vampires could involve creating a game in which the player must help a vampire character escape from a group of angry villagers. The game could be set up like a platformer, with the player controlling the vampire as they jump and climb their way to safety. Alternatively, the player could be tasked with helping the vampire find victims to feed on, and avoiding capture by the authorities.",
    title: "Vampires are Alive and Well!",
  },
  {
    word: "ashram",
    description:
      "Design a program that helps manage an ashram. The program should track information about the ashram's residents, visitors, staff, and facilities. It should also provide features for scheduling events and managing resources.",
    title: "Agni's Ashram",
  },
  {
    word: "rose",
    description:
      "Design a program that generates a virtual rose garden. Users can add different types of roses, watering them andwatching them grow.",
    title: "Rose xyz",
  },
  {
    word: "appliance",
    description:
      "Design a program that can be used to control a home's appliances via a smartphone or other mobile device. The program should allow the user to select which appliances they want to control, and then provide them with a graphical interface for controlling those appliances. The program should also allow the user to schedule when the appliances should be turned on or off, and provide a way for the user to remotely monitor the appliances' energy usage.",
    title: "appliance party",
  },
  {
    word: "sponge",
    description:
      "One possible creative programming project about sponge could involve creating a program that simulates the absorption and release of water by a sponge. This could involve using cellular automata to model the flow of water into and out of the cells of the sponge. Alternatively, the project could focus on modeling the growth of a sponge colony, or the movement of sponge particles in response to stimuli such as water flow or pressure.",
    title: "Sponging Up The Sun",
  },
  {
    word: "classmate",
    description:
      "Design a program that can help a user keep track of their classmates. The program should be able to store classmate information such as name, contact information, and notes. It should also be able to search for classmates by name, and display contact information and notes for a selected classmate.",
    title: "Group project: Classmates in a Group Project",
  },
  {
    word: "neon",
    description:
      "Design a program that lights up a room with different colors of neon lights depending on the user's mood.",
    title: "Neon Dreams",
  },
  {
    word: "afterthought",
    description:
      'Design a "museum" of afterthoughts – a collection of creative ideas, stories, or projects that were never pursued. Allow visitors to browse the collection and vote on their favorite afterthoughts.',
    title: "Afterthought: The Sequel",
  },
  {
    word: "clipboard",
    description:
      "One creative programming project about clipboard could be creating a program that allows users to save text, images, and other data from the clipboard to a file. This file could be saved in the user's cloud storage account so that it can be accessed from any device. Another idea would be to create a program that allows users to share their clipboard data with others. This could be done through a social media platform or a messaging service.",
    title: "Clipboards and Chill",
  },
  {
    word: "shore",
    description:
      "Design a program that can help identify and map different types of shorelines (e.g. rocky, sandy, muddy). The program could use data from satellite imagery, geo-tagged photos, and/or field surveys.",
    title: "Shore Leave",
  },
  {
    word: "butane",
    description:
      "Design a program that takes user inputted data on the dimensions of a room and determines the amount of butane needed to fill it.",
    title: "The Great Butane Experiment",
  },
  {
    word: "ligula",
    description:
      "Design a program that alters the color of a light bulb in a room according to the time of day. The light bulb would slowly change color from blue in the morning, to yellow in the afternoon, and red at night.",
    title: "Glow Worms",
  },
  {
    word: "bomb",
    description:
      "Design a computer game in which the player must diffuses bombs in a virtual city. The game could be set in different time periods or locations, and could include multiple levels of difficulty. The player would need to use logic and strategy to figure out how to diffuses the bombs before they detonate.",
    title: "Bomb Squad",
  },
  {
    word: "alb",
    description:
      "Design a basic 2D game in which the objective is to collect as many items on the screen as possible, while avoiding enemies. The game could be set in a simple maze, with the player starting in the middle and enemies spawning randomly around the edges. As the player moves, the enemies should also move towards the center.",
    title: "Alb'Ways",
  },
  {
    word: "cabinet",
    description:
      "Design a cabinet configurator that allows users to select the dimensions, finishes, door style, and other features of their desired cabinets. The configurator would then generate a 3D model of the cabinets which the user could view from various angles and change their selections if desired. Once the user is satisfied with their configuration, they could then purchase the cabinets through the configurator.",
    title: "Quirky Cabinet",
  },
  {
    word: "mattock",
    description:
      "Design a game in which the player wields a mattock to clear various obstacles in order to progress. The game could be set in different environments, such as a jungle or a field, and could feature different types of obstacles, such as trees, rocks, and barrels. The player would need to use their mattock to clear a path through the obstacle, and could be timed or given a certain number of tries to clear the obstacle. If the player is successful, they could move on to the next level.",
    title: "Mattock Madness",
  },
  {
    word: "midline",
    description:
      "One possibility is to create a program that visualize the midline of an image. For example, the user could upload an image of themselves or a landscape and the program would trace the midline and create a symmetrical image.",
    title: "Sew You Midline?",
  },
  {
    word: "likelihood",
    description:
      "A program to calculate the likelihood of different events occurring, based on user input.",
    title: "Odds & Ends",
  },
  {
    word: "havoc",
    description:
      "Design a program that randomly generates a maze. The player then has to find their way out of the maze within a certain number of moves. If they don't make it out in time, the walls of the maze start closing in on them.",
    title: "Mischief",
  },
  {
    word: "eligibility",
    description:
      "Design a program that allows users to input information about themselves and receive feedback on whether or not they are eligible for different types of services or benefits.",
    title: "Let's Get Eligible!",
  },
  {
    word: "pedal",
    description:
      "Design a bicycle pedal with a built-in sensor that can track the rider's pedaling data (cadence, power output, etc.) and display it on a connected smartphone or computer.",
    title: "Pedal Power",
  },
  {
    word: "citron",
    description:
      "A citron-themed web app where users can input recipes, photos, and tips about Citrus medica, the Citron fruit.",
    title: "Zesty Citron ",
  },
  {
    word: "creative",
    description:
      "Ideas for a creative programming project include:\n\n1. Developing a new programming language that is specifically designed for creative applications. This language could include features that make it easier to create visual or auditory effects, or that make it easier to generate and manipulate media files.\n\n2. Developing a new application or service that makes use of creative programming in some way. This could be a social networking site that allows users to share and manipulate images and videos, or a service that generates new images or videos based on user input.\n\n3. Developing a new piece of software that is specifically designed for creative purposes.",
    title: "The Creative Project",
  },
  {
    word: "curio",
    description:
      "Design a program that generates random, interesting facts about the world's curiosities. Allow the user to select the type of fact they want to learn about, and then display a new fact each time they click a button. Alternatively, design a program that allows the user to input their own curiosity, and then display a random fact about that topic.",
    title: "The Curio Cabinet",
  },
  {
    word: "builder",
    description:
      "Design a program that helps people plan and budget for home renovations. The program would allow users to input the square footage of their home, the desired renovations, and their budget. The program would then generate a list of materials needed and approximate costs.",
    title: "The Builders",
  },
  {
    word: "tabby",
    description:
      "Design a program that can track a cat's daily routine and suggest activities based on the cat's individual preferences.",
    title: "Tabby's House",
  },
  {
    word: "cleaner",
    description:
      "Design a trashcan sorting game where the player has to correctly sort items into the right bin.",
    title: "Cleaner's Club",
  },
  {
    word: "therapist",
    description:
      "Design a program that simulates a therapy session. The program should be able to ask the user questions and provide responses based on the answers the user provides. The program should be able to adapt its responses based on the user's input.",
    title: "Project Sooth",
  },
  {
    word: "cuticle",
    description:
      "Design a program that can track the health of your cuticles and nails. The program would allow you to input data about your diet, lifestyle, and any changes to your nails or cuticles. It would then give you advice on how to improve the health of your nails and cuticles and track your progress over time.",
    title: "The Cuticle Cartel",
  },
  {
    word: "feel",
    description:
      "Design a program that can generate personalized, positive affirmations based on input from the user. Allow the user to choose from a variety of different affirmation themes (self-love, career success, body positivity, etc.) and receive affirmations accordingly.",
    title: "The Feel of Things",
  },
  {
    word: "subroutine",
    description:
      "Design a subroutine that takes an input of two strings and outputs the longest common subsequence between the two strings.",
    title: "Bizarre Routines",
  },
  {
    word: "townhouse",
    description:
      "Design a program that would allow users to design their own townhouses. Users would be able to select the size, number of floors, number of bedrooms, number of bathrooms, and other features. They would also be able to select the location of their townhouse on a map.",
    title: "Townhouse Tussle",
  },
  {
    word: "mass",
    description:
      "Create a program that calculates the mass of an object based on its weight and volume.",
    title: "The Great Wall of China",
  },
  {
    word: "shoreline",
    description:
      "developing a natural language processing program to analyze and predict human behavior patterns in order to create a better user interface for a dating website",
    title: "The Great Shoreline Cleanup ",
  },
  {
    word: "insectarium",
    description:
      "Design a program that can simulate the experience of walking through an insectarium. \nThe program can include different sections that focus on different types of insects. \nEach section can include information about the insects as well as interactive elements that allow users to learn more about them. \nThe program can also include a section where users can create their own insectarium.",
    title: "The Great Bug Out!",
  },
  {
    word: "dungarees",
    description:
      "Design a pair of dungarees that can be worn in different ways – as overalls, as a skirt, or as pants.",
    title: "Dungaree Dreams",
  },
  {
    word: "gang",
    description:
      "This is a difficult question. Some ideas include:\n\n1. Develop a program that can track the movements of gang members and predict where they are likely to strike next.\n\n2. Create a program that can help law enforcement identify and track gang members.\n\n3. Develop a program that can help social workers or psychologists understand the motivations behind why people join gangs.",
    title: "gangland",
  },
  {
    word: "craft",
    description:
      "Design a program that can generate patterns for crafting. The program should be able to take user input to generate a pattern based on specifications. The user should be able to select the colors, size, and shape of the craft project. The program should also be able to export the pattern as a PDF.",
    title: "Upcycled Crafts for a Cause",
  },
  {
    word: "collaboration",
    description:
      "One possibility is to create a program that assists with collaborative writing projects, such as Wikipedia articles. It could help with things like suggesting edits and keeping track of changes made by different users.",
    title: "Pair up and Share!",
  },
  {
    word: "magnitude",
    description:
      'Design a program that can take input from a user in the form of textual description of a physical quantity and output the corresponding magnitude in SI units. For example, the user might input "length of a standard swimming pool" and the program would output "25 metres".',
    title: "Greatness ",
  },
  {
    word: "signify",
    description:
      'Design a program that "signifies" a message similar to sign language. \nThe user would input text and the program would output corresponding hand gestures and/or body language.',
    title: "Signify Sensation",
  },
  {
    word: "algorithm",
    description:
      "Design an algorithm that can automatically generate a table of contents for a book.",
    title: "algo",
  },
  {
    word: "trailpatrol",
    description:
      "Design a program that can track hikers as they move along a trail. The program would need to be able to track the location of each hiker and provide information on the trail conditions.",
    title: "The best thing since sliced bread!",
  },
  {
    word: "cheek",
    description:
      "One possible creative programming project about cheek could be to create a program that can detect different types of cheek movements and give feedback accordingly. For example, the program could be used to help teach someone how to perform a cheek lift correctly, or to give feedback on facial expressions made during a conversation.",
    title: "Cheeky",
  },
  {
    word: "authorisation",
    description:
      "One idea for a creative programming project about authorization would be to create a program that would allow users to input their username and password for various accounts, and then the program would automatically log into those accounts for the user.",
    title: "Project Verify",
  },
  {
    word: "twitter",
    description:
      "Design a program that can automatically tweet on behalf of a user. The program could tweet updates about the user's day, post relevant articles or alerts, and respond to @ mentions and direct messages.",
    title: "Twittering Toes",
  },
  {
    word: "pension",
    description:
      "Design a program that will help people plan for their retirement. The program should allow users to enter their current age, savings, and expected retirement age. It should then provide information on how much they need to save each month to reach their retirement goals. Additionally, the program could offer advice on how to invest their savings to get the best return.",
    title: "The Pension Project",
  },
  {
    word: "bill",
    description:
      "A program that allows users to submit and track requests for bills to be introduced in their local legislature. The program would categorize bills by topics, alert users when new bills are introduced, and provide a forum for discussion.",
    title: "The Bill Show",
  },
  {
    word: "judgment",
    description:
      "Design a program that can analyze a person's social media posts and predict whether or not they will be judged by their peers.",
    title: "Project Judgment",
  },
  {
    word: "cotton",
    description:
      "Design a program that assists farmers in growing cotton. The program would provide information on cottonseed varieties, planting times, soil type, irrigation, and other important factors.",
    title: "Cottonwood",
  },
  {
    word: "surgery",
    description:
      "Design a program that can be used to plan surgeries. The program should be able to take into account the patient's medical history, current condition, and desired outcome of the surgery. It should be able to generate a surgical plan based on this information.",
    title: "Surgery Buddies",
  },
  {
    word: "suspect",
    description:
      "A suspect tracking program that allows the user to input information about a suspect and keep track of their whereabouts.",
    title: "Suspect",
  },
  {
    word: "dream",
    description:
      "One possible project idea is to create a program that allows users to input their dreams and then generates creative interpretation or stories based on those dreams. Another idea could be to create a dream journaling app that prompts users upon waking to record their dreams and then offers creative ways to further explore and reflect on those dreams.",
    title: "Dream",
  },
  {
    word: "aquifer",
    description:
      "Design a program that models an aquifer and its response to pumping.",
    title: "Aquifer Fun",
  },
  {
    word: "nanoparticle",
    description:
      "Design a program that can simulate the properties and behavior of nanoparticles.",
    title: "Nano-Pixie Dust",
  },
  {
    word: "nutmeg",
    description:
      "A nautical-themed game where the player is a pirate sailing the seas in search of nutmeg.",
    title: "Nutmeg and All Spice",
  },
  {
    word: "treasure",
    description:
      'Design a program that randomly generated a map with a number of "treasure" chests. Each chest would contain a random number of treasure items. Players could then use the map to navigate to the chests and collect the treasure.',
    title: "Treasure Trove",
  },
  {
    word: "resolution",
    description:
      "How about a program that can help people keep track of their New Year's resolutions? It could prompt them every day or week about what they're resolutions were and whether or not they've been working on them. It could also give tips on how to stay on track or how to adjust their goals if they're having trouble.",
    title: "Resolve This!",
  },
  {
    word: "molecule",
    description:
      "Design a program that can simulate the behavior of molecules in a chemical reaction.",
    title: "Molecular madness",
  },
  {
    word: "store",
    description:
      "Design a program that can keep track of inventory for a store. The program should be able to add and remove items from the inventory, as well as calculate the total value of the inventory.",
    title: "Storefront",
  },
  {
    word: "solvency",
    description:
      "Design a program that can help someone manage their money and get out of debt. The program would ideally budget for the individual and help them save money. It would also offer tips on how to reduce expenses and make money.",
    title: "Grimy Greens",
  },
  {
    word: "hurdler",
    description:
      "Design a program that can predict how well a hurdler will do in a race based on their past performances.",
    title: "Hurdles and Hashers",
  },
  {
    word: "blinker",
    description:
      "One possibility is to create a program that blinks an LED in a pattern. The user could input different patterns or create their own.",
    title: "Blink and You'll Miss It",
  },
  {
    word: "ego",
    description:
      "Design a program that would help a person with low self-esteem to build their confidence. The program could provide daily affirmations, positive feedback on goal progress, and an outlet for journaling and expression. It could also include features like a progress tracker, badges and rewards, and sharing functionality with friends or a support group.",
    title: "The Ego Trip",
  },
  {
    word: "recapitulation",
    description:
      "Design a program that playfully quiz users about a chosen topic, with the goal of helping them to remember key information. The program could use recognition techniques such as spaced repetition to help users improve their recall over time.",
    title: "Retro Recap",
  },
  {
    word: "cenotaph",
    description:
      "A cenotaph is an above-ground tomb or monument erected in honor of a person or persons who are buried elsewhere. \n\nOne creative programming project idea related to cenotaphs could be creating a virtual cenotaph that allows users to input the name of a loved one who has passed away and create a personalized tribute. This could include adding pictures, videos, and notes. Another idea could be creating a cenotaph memorial app that would be a database of cenotaphs around the world that users could contribute to and explore.",
    title: "Cenotaph of the Unknown Soldier",
  },
  {
    word: "riot",
    description:
      "A riot control simulator that allows users to experience what it's like to try and control a riot. The simulator would feature different scenarios and levels of difficulty, and would require users to use different strategies and tactics to try and quell the unrest.",
    title: "Riot Control",
  },
  {
    word: "dueling",
    description:
      'Rock, Paper, Scissors Tournament:\n\nThis project would be a tournament-style competition where players face off in a game of rock, paper, scissors. The catch is that each player would be able to program their own "bot" to compete in the tournament. These bots would use artificial intelligence to try and beat their opponents.',
    title: "DuelingGrounds",
  },
  {
    word: "shop",
    description:
      "Design a program that can be used by a shop owner to track inventory, sales, and profit. The program should be able to generate reports that show which items are selling well and which are not.",
    title: "Shop Til You Drop",
  },
  {
    word: "doorknob",
    description:
      "Design a program that generates random doorknob designs. Allow the user to input parameters such as size, shape, and color, and have the program generate a doorknob accordingly.",
    title: "Doorknob",
  },
  {
    word: "whistle",
    description:
      "Design a program that can analyze a given whistle recording and classify it by pitch, timbre, and/or contributor.",
    title: "whistle Watch",
  },
  {
    word: "step-sister",
    description:
      "A program that helps manage relations between stepsisters. The program could provide tips on how to develop a good relationship, how to deal with difficult situations, and how to show love and support.",
    title: "Franken sisters",
  },
  {
    word: "hospice",
    description:
      "Design a program that can predict when a hospice patient will die.",
    title: "Life's End: A Hospice Project",
  },
  {
    word: "facsimile",
    description:
      "Design a program that can take images of handwritten text and convert them into digital text.",
    title: "Fax Bonanza",
  },
  {
    word: "paddle",
    description:
      "Pong with a twist- instead of the usual vertical movement, the paddle can move in any direction.",
    title: "SUP uprising",
  },
  {
    word: "directory",
    description:
      "Design a program that can help people keep track of their belongings. The program should be able to store information about the item, where it is located, and when it was last seen. The program should also be able to generate reports about the items in the database.",
    title: "Directory of the Damned",
  },
  {
    word: "mate",
    description:
      "Design a program that can generate recipes for traditional mate drinks from South America. The program should allow the user to input desired flavors and ingredients, and then generate a list of recipes that can be made using those ingredients. The user should also be able to rate the recipes and save their favorites.",
    title: "The Great Argentine Mate Experiment",
  },
  {
    word: "tankful",
    description:
      "Design a program that can play aTankful game. The player controls a tank and must drive around a track collecting fuel tanks. The object of the game is to collect as many fuel tanks as possible before running out of fuel.",
    title: "Tankful of Fun",
  },
  {
    word: "someplace",
    description:
      "Design a program that takes the user on a virtual tour of your city. The program could include information about the history of the city, landmarks, popular tourist destinations, and more.",
    title: "The Place",
  },
  {
    word: "asparagus",
    description:
      "Design a program that helps farmers track asparagus growth and yield. The program could include a database of asparagus plantings, with information on when they were planted, expected yields, and tips on best practices.",
    title: "Leg Up!",
  },
  {
    word: "road",
    description:
      "One idea might be to create a program that helps people plan road trips. It could allow users to input their starting location and destination, and then suggest different routes and stops along the way. The program could also provide information on things to do and see at each location.",
    title: "Rolling Roadshow",
  },
  {
    word: "compliment",
    description:
      "Design a program that would generate compliments for people based on their interests, personality type, or physical attributes.",
    title: "You're a Gem!",
  },
  {
    word: "charger",
    description:
      "Design a program that will estimate the time it will take to charge a device given the current charge, the device's power rating, and the charger's power rating.",
    title: "Portable Power Pack",
  },
  {
    word: "dibble",
    description:
      "Design a dibble game where players can draw lines on the screen and watch as their dibbles follow the path. The game could include power-ups and different game modes.",
    title: "Dibble Do",
  },
  {
    word: "art",
    description:
      "Design a program that photoshops a person's face onto an artistic portrait.",
    title: "Art in the Park",
  },
  {
    word: "boysenberry",
    description:
      "One possible creative programming project about boysenberries could be creating a virtual reality Boysenberry picking simulation. This could be used to teach people about the fruit and where they come from, as well as providing a fun and interactive way to learn about them.",
    title: "The Great Boysenberry Showdown",
  },
  {
    word: "deer",
    description:
      "Design a program that simulates a deer's natural habitat. The program should include a forest area with trees, a grassy field with plants, and a water source. The deer should be able to graze on the grass, eat the plants, and drink from the water. The program should also include predators, such as wolves and bears, which the deer should be able to avoid.",
    title: "Bambi's BFF's",
  },
  {
    word: "cannon",
    description:
      "Design a cannon game where players can choose the type of cannon, angle, and force to launch a projectile at a target.",
    title: "Cannonball!",
  },
  {
    word: "farming",
    description:
      "Design a program that uses weather data to optimize irrigation for a farm. The program would need to account for variables such as soil type, crop type, and weather patterns.",
    title: "Farmer's Market Fresh",
  },
  {
    word: "loggia",
    description:
      "Design a program that can help plan and manage a gardenia. The program should have features to track sunlight and watering needs for different types of gardenias.",
    title: "Loggerheads ",
  },
  {
    word: "stereo",
    description:
      "Design a program that can take two mono audio signals and convert them into a single stereo signal.",
    title: "i2i",
  },
  {
    word: "aftershock",
    description:
      "Design a program that can predict aftershocks from an earthquake.",
    title: "Shaken, Not Stirred",
  },
  {
    word: "pantology",
    description:
      "Pantology is the study of all branches of knowledge. A creative programming project about pantology could involve creating a program that allows users to explore all branches of knowledge and learn about new topics. The program could include features such as a search engine for finding information about specific topics, a recommendation system for finding new topics to explore, and a social media component for connecting with other users.",
    title: "The Great Pantology Caper",
  },
  {
    word: "rubber",
    description:
      "A program that calculates the amount of rubber needed to produce a certain number of rubber products.",
    title: "Elasticity",
  },
  {
    word: "processor",
    description: "Design a basic chess AI that can beat a beginner player.",
    title: "Brew Processor",
  },
  {
    word: "centre",
    description:
      "Design a program that helps people find their ideal center. The program could include a quiz that asks questions about what the person is looking for in a center, and then provides a list of potential centers that match the person's needs.",
    title: "The Quirky Centre",
  },
  {
    word: "swivel",
    description:
      "A program that allows users to design and simulate custom roller coaster tracks.",
    title: "Spin doctor",
  },
  {
    word: "muscatel",
    description:
      "Design a program that can generate a random Muscatel grape flavor profile. Include information on the type of Muscatel grape, primary flavors, secondary flavors, and descriptors.",
    title: "Muscatel: The Musical!",
  },
  {
    word: "shoe-horn",
    description:
      "Design a program that can take an input of a person's foot measurements and generate a list of shoe styles and sizes that would fit them.",
    title: "Sole Mates: A Shoe-Horn Love Story ",
  },
  {
    word: "destiny",
    description:
      "Design a choose-your-own-adventure game about destiny. In the game, the player would make choices that would affect their destiny. For example, the player could choose to be kind to others, and as a result, good things would happen to them. Or, the player could choose to be selfish",
    title: "Fate of the Future",
  },
  {
    word: "smolt",
    description:
      'Design a program that takes input from a user in the form of a fish "smolt" and outputs a creative result. Possible outputs could include a picture of the smolt, a story featuring the smolt, or a poem about the smolt.',
    title: "Salmon Seizing",
  },
  {
    word: "spool",
    description:
      "Design a educational game for kids that teaches them about the lifecycle of a spool of thread.",
    title: "Spooled",
  },
  {
    word: "buddy",
    description:
      "One project idea could be creating a buddy system for new students at school. This could involve having an experienced student be paired with a new student to help them adjust to their new surroundings. The buddy system could also be used for people who are new to a city or town, where a volunteer is paired with someone who",
    title: "Buddy Bear",
  },
  {
    word: "bachelor",
    description:
      "Design a program that allows users to input their own love story. Include different prompts for different parts of the story, and allow the user to save and share their story with others.",
    title: "The Bachelor's Club",
  },
  {
    word: "skunk",
    description:
      "Design a game where the player controls a skunk who must spray other animals with their stench in order to win. Use creative graphics and sound effects to make the game as realistic (and smelly) as possible!",
    title: "Skunkworks",
  },
  {
    word: "daisy",
    description:
      "One idea for a creative programming project about daisies could be to create a program that generates a virtual daisy field. This field could be populated with different types of daisies, and users could choose to add or remove different types of daisies. The user could also choose to have the dais",
    title: "The Great Daisy Experiment",
  },
  {
    word: "lounge",
    description:
      "Design a program that can generate a personalized playlist for a lounge or waiting area. The program should take into account the musical preferences of the user, the time of day, and the atmosphere of the lounge.",
    title: "lounge around",
  },
  {
    word: "dancing",
    description:
      "Design a program that generates original dance moves based on input from the user.",
    title: "Dance your heart out!",
  },
];

export default projects;
