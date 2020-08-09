const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/campfirestories"
);

const bookSeed = [{
        bookTitle: "Fantasy",
        bookPages: [{
                "id": "initial",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You are an adventurer... Your father was an adventurer before you and his father before him. This is your first TRUE adventure. sure, you have been on minor quests: dungeon crawls, bandits. the like. But this... This is different. For generations, the map to your family's treasure has been slowly pieced together. Finally, the location of it's final resting place has been found. The location points to your family's old castle. Where the treasure is located inside is anyone's guess but it is a chance you are willing to take. You and your brother, Marcus, make your way towards the burial site that night. You see the glint of a fire off to the side of the road...",
                "choices": [{
                        "text": "Inspect the camp...",
                        "id": "choice a"
                    },
                    {
                        "text": "Wait and watch the camp for a time...",
                        "id": "choice b"
                    },
                    {
                        "text": "Move past the camp...",
                        "id": "choice c"
                    },
                    {
                        "text": "Call out to the camp...",
                        "id": "choice d"
                    }
                ]
            },
            {
                "id": "choice a",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother walk towards the fire and inspect the camp. It is a simple collection of lean to's and discarded bones. The fire is still burning, meaning whom ever owns the camp could not have left long ago. A single vial of some violet mixture sits by one of the lean to's. The hairs on your neck stick up as you notice sounds coming from the edge of camp. Could be the owners coming back...",
                "choices": [{
                        "text": "Snatch the potion and run!!",
                        "id": "choice aa"
                    },
                    {
                        "text": "It must be your imagination... keep searching!",
                        "id": "choice ab"
                    },
                    {
                        "text": "Greet the owners...",
                        "id": "choice ac"
                    },
                    {
                        "text": "Hide!!",
                        "id": "choice ad"
                    }
                ]
            },
            {
                "id": "choice b",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother take cover behind an overgrown tree. The vines that twist around the trunk hide the glints of the swords you have in your hands. Soon a trio of goblins break the edge of the camp holding their kill, a handful of snakes and a lone raven. They begin to feast on their prey, paying little attention to anything else. You notice a lone potion sitting by one of the crude lean to's...",
                "choices": [{
                        "text": "Snatch the potion and run!!",
                        "id": "choice ba"
                    },
                    {
                        "text": "Sneak and grab the potion...",
                        "id": "choice bb"
                    },
                    {
                        "text": "Too dangerous. Move away from the fire...",
                        "id": "choice c"
                    },
                    {
                        "text": "These monsters must die!!",
                        "id": "choice bd"
                    }
                ]
            },
            {
                "id": "choice c",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Your mind must stay centered on the task ahead. You follow the map to your ancestor's past home. You knew it was going to be a castle, but it is much more magnificent than you expected! Though the walls are worn, a large turret tower still stands untouched by time. For a split second, you swear to have seen a face in the window of the tower. The map also speaks of a cellar. Perhaps that would be a good place to search? Never the less, the only obvious way in is through the front door...",
                "choices": [{
                        "text": "Front door it is then!",
                        "id": "choice ca"
                    },
                    {
                        "text": "There must be another way...",
                        "id": "choice cb"
                    },
                    {
                        "text": "Perhaps through the turret...",
                        "id": "choice cc"
                    },
                    {
                        "text": "Too hard! I'm going home!",
                        "id": "choice cd"
                    }
                ]
            },
            {
                "id": "choice d",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You call out to the camp. It is eerily quiet for a while... Then a group of men break the briars to see who called out...",
                "choices": [{
                        "text": "These men look dangerous! Run away!",
                        "id": "choice da"
                    },
                    {
                        "text": "Greet them!",
                        "id": "choice db"
                    },
                    {
                        "text": "Stare at them...",
                        "id": "choice dc"
                    },
                    {
                        "text": "Threaten them!!",
                        "id": "choice dd"
                    }
                ]
            },
            {
                "id": "choice aa",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You run over to the vial, attempting to grab it. Unfortunately, you trip over one of the many discarded bones. You turn over just in time to see the hideous green face of a goblin. You feel the sting of his spear pierce your chest and the warmth of blood spread across your body. You should have never come to this camp... You chould have never come on this adventure..."
            },
            {
                "id": "choice ab",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You continue your search, hoping for fortune... However, your curiousity has gotten the better of you. The owners of the camp WERE coming back and they are not happy to find you and your brother. A vicious blow strikes you on the back of the head... As you fall from conciousness, the last thing you see is your brother fall as well..."
            },
            {
                "id": "choice ac",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You call out to the approaching figures. Startled, a group of men come from the tree line. They quickly scan there belongings and glare at you. Feeling their suspicions, You quickly introduce yourself and your brother. After a few minutes, the men begin to warm up to you. When you tell them of your objective, they offer their advice. They tell you a large troll has taken up refuge in the main hall. Rather than chancing the front entrance, they tell you of a hole in the back wall. Their final piece of advice is to avoid the tower of the castle at all costs. A malevolent spirit lives there according to their knowledge. You thank the men and set your direction towards the place of your ancestors...",
                "choices": [{
                    "text": "Continue on your path...",
                    "id": "choice aca"
                }]
            },
            {
                "id": "choice ad",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother take cover behind an overgrown tree. The vines that twist around the trunk hide the glints of the swords you have in your hands. Soon a trio of goblins break the edge of the camp holding their kill, a handful of snakes and a lone raven. They begin to feast on their prey, paying little attention to anything else...",
                "choices": [{
                        "text": "Snatch the potion and run!!",
                        "id": "choice ba"
                    },
                    {
                        "text": "Sneak and grab the potion...",
                        "id": "choice bb"
                    },
                    {
                        "text": "Too dangerous. Move away from the fire...",
                        "id": "choice c"
                    },
                    {
                        "text": "These monsters must die!!",
                        "id": "choice bd"
                    }
                ]
            },
            {
                "id": "choice ba",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You run over to the vial, attempting to grab it. Unfortunately, you trip over one of the many discarded bones. You turn over just in time to see the hideous green face of a goblin. You feel the sting of his spear pierce your chest and the warmth of blood spread across your body. You should have never come to this camp... You chould have never come on this adventure..."
            },
            {
                "id": "choice bb",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You sheathe your sword quietly, crouch, and make your way towards the strange vial. Being careful of the ivory bones spread about the ground, you reach the vial. For a split second, it seems as if one of the goblins is about to spot you. Marcus nearly charges the goblin but you stay him with raised hand. Quickly but silently, you make your way out of the camp, vial in hand... That was a close one...",
                "choices": [{
                    "text": "Make your way to the castle...",
                    "id": "choice bba"
                }]
            },
            {
                "id": "choice bd",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother move quickly but silently behind two of the goblins. In one fell motion, you stab the vandal's neck, leaking black ichor over your hands and blade. Marcus follows suit and dispatches a second. The third, the look of pure fear glimering in it's eyes, runs from the camp screeching. Victory is yours! That was easy...",
                "choices": [{
                    "text": "Grab the potion and continue!!",
                    "id": "choice bba"
                }]
            },
            {
                "id": "choice ca",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You open the heavy front door. It seems like ages since anyone has set foot here. Only the moon, let in by holes in the roof, lights your path. You notice strange gashes on the floor. Your eyes follow the gashes and you immediately regret your desicion to use the front door. Your eyes come upon the behemoth body of a sleeping troll. To make matters worse, it seems the door's opening displaced more rocks from the ceiling above. With a loud crash, your exit is blocked by an avalanche of rocks. The troll, waking to the sound, lets out a shrieking roar that nearly causes another avalanche... You are in deep dung now...",
                "choices": [{
                        "text": "Quick! The door to the right!",
                        "id": "choice caa"
                    },
                    {
                        "text": "The stairs on the left! Hurry!",
                        "id": "choice cab"
                    },
                    {
                        "text": "To death or glory!!",
                        "id": "choice cac"
                    },
                    {
                        "text": "Sing a lullaby!!",
                        "id": "choice cad"
                    }
                ]
            },
            {
                "id": "choice cb",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You search around trying to find an alternative route. All you see are piles of rocks, however. You do find an old catapult... Perhaps you could catapult yourself into the tower?",
                "choices": [{
                        "text": "Try the catapult...",
                        "id": "choice cba"
                    },
                    {
                        "text": "I'm no fool! Back to the front...",
                        "id": "choice ca"
                    }
                ]
            },
            {
                "id": "choice cc",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You walk to the tower, searching for a way up. It seems there may be foot holes in the crumbling tower walls. You also notice a catapult not too far away. The trajectory would be hard, but it would be a much faster way up...",
                "choices": [{
                        "text": "Try the catapult...",
                        "id": "choice cba"
                    },
                    {
                        "text": "Climb the tower...",
                        "id": "choice ccb"
                    },
                    {
                        "text": "Back to the front door...",
                        "id": "choice ca"
                    },
                    {
                        "text": "I'm scared!! I wanna go home!!",
                        "id": "choice cd"
                    }
                ]
            },
            {
                "id": "choice cd",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "Like the coward you are, you and your brother return home. Treasure-less and not fulfilling your family's legacy, you feel the weight of your shame your whole life until you die of old age..."
            },
            {
                "id": "choice da",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You run from the group of ruffians. They stare, looking confused as to why you called out to them in the first place... Perhaps they weren't as scary as you percieved? No matter, you continue on your mission...",
                "choices": [{
                    "text": "Continue on...",
                    "id": "choice c"
                }]
            },
            {
                "id": "choice db",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The men quickly scan you over and glare at you. Feeling their suspicions, You quickly introduce yourself and your brother. After a few minutes, the men begin to warm up to you. When you tell them of your objective, they offer their advice. They tell you a large troll has taken up refuge in the main hall. Rather than chancing the front entrance, they tell you of a hole in the back wall. Their final piece of advice is to avoid the tower of the castle at all costs. A malevolent spirit lives there according to their knowledge. You thank the men and set your direction towards the place of your ancestors...",
                "choices": [{
                    "text": "Continue on your path...",
                    "id": "choice aca"
                }]
            },
            {
                "id": "choice dc",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You and the men have a stare off for a while. Finally, one of the men invites you over. These men seem suspicious but when one of them offers you a slice of meat, your suspicions fade. You are so hungry from travelling, it is a welcoming invitation when the men invite you to join them for a meal... Unfortunately, your suspicions were correct. Being distracted by your hunger, you dont notice the men sneak behind you. they cut your throat and steal your belongings. Your last sight as you gasp for air is on of the men throwing your family's map into the fire. It goes up in smoke, much like your chances of survival..."
            },
            {
                "id": "choice dd",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You run towards the men with your brother, swords raised! The pair of you make quite a terifying duo! The men begin to rout but the largest of the bunch steels his nerves. He cajoles the men to stand their ground. He lunges at you, but a lucky strike from your sword sends the man to his knees. With your sword held ready to send the final blow, a gust of wind hits the side of your face... Suddenly, you cannot breathe and feel blood trickling from your neck. You look towards the direction it came, just in time to see another arrow flying at your head before the fatal blow lands true..."
            },
            {
                "id": "choice aca",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Your mind must stay centered on the task ahead. You follow the map to your ancestor's past home. You knew it was going to be a castle, but it is much more magnificent than you expected! Though the walls are worn, a large turret tower still stands untouched by time. For a split second, you swear to have seen a face in the window of the tower. The map also speaks of a cellar. Perhaps that would be a good place to search? Never the less, the only obvious way in is through the front door...",
                "choices": [{
                        "text": "Use the front door...",
                        "id": "choice ca"
                    },
                    {
                        "text": "Search for the back way...",
                        "id": "choice acab"
                    },
                    {
                        "text": "Perhaps a way into the tower?",
                        "id": "choice cc"
                    },
                    {
                        "text": "I'm scared!! I wanna go home!!",
                        "id": "choice cd"
                    }
                ]
            },

            {
                "id": "choice acab",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You search for the hole around back that the men spoke of. Ater a few minutes, find the hole behind a patch of briars, right where the men said it would be. You are thankful to have met the men as you and Marcus squeeze yourselves though, with Marcus and his belly having more trouble than you. You have entered a main hall, lit only by the light of the moon peaking through cracks in the ceiling. You scan the room and recieve quite a shock of adrenaline as your eyes fall on a behemoth troll, just as the men said. Your nerves still when you see the steady rise and fall of the brute's check; it appeares he is sleeping. The rest of the room reveals a door on the left and a set of stairs leading up on the right...",
                "choices": [{
                        "text": "Creep to the door...",
                        "id": "choice caa"
                    },
                    {
                        "text": "Go silently to the stairs...",
                        "id": "choice cab"
                    },
                    {
                        "text": "Inspect the troll",
                        "id": "inspect troll"
                    },
                    {
                        "text": "This is too scary! Run home!",
                        "id": "choice cd"
                    }
                ]
            },

            {
                "id": "inspect troll",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You decide that inspecting the sleeping troll is the best course of action. You slowly approach, making sure not to make the drooling troll. You think you see a bit of silver under it's huge hand. You make your way hoping to get a better look. Quickly, the troll reaches out and grabs you in it's sleep. He snuggles up to you like you are a stuffed animal. Unfortunately, the weight of the troll is crushing. You feel the air escape your lungs as you suffocate... You are a deady bear..."
            },
            {
                "id": "choice bba",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Your mind must stay centered on the task ahead. You follow the map to your ancestor's past home. You knew it was going to be a castle, but it is much more magnificent than you expected! Though the walls are worn, a large turret tower still stands untouched by time. For a split second, you swear to have seen a face in the window of the tower. The map also speaks of a cellar. Perhaps that would be a good place to search? Never the less, the only obvious way in is through the front door...",
                "choices": [{
                        "text": "Use the front door...",
                        "id": "choice bbaa"
                    },
                    {
                        "text": "Perhaps a way into the tower?",
                        "id": "choice cca"
                    }
                ]
            },
            {
                "id": "choice cca",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You walk to the tower, searching for a way up. It seems there may be foot holes in the crumbling tower walls. You also notice a catapult not too far away. The trajectory would be hard, but it would be a much faster way up...",
                "choices": [{
                        "text": "Try the catapult...",
                        "id": "choice cba"
                    },
                    {
                        "text": "Climb the tower...",
                        "id": "choice ccb"
                    },
                    {
                        "text": "Back to the front door...",
                        "id": "choice bbaa"
                    },
                    {
                        "text": "I'm scared!! I wanna go home!!",
                        "id": "choice cd"
                    }
                ]
            },
            {
                "id": "choice caa",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The troll is still a good distance away. You think you can make it to the door on the right. You make a mad sprint towards the door. Marcus, the slower of you two, begins seconds later than you. That slight hesitation is enough time for the troll to close the gap between it and Marcus. With one swipe of it's huge hand, Marcus is sent tumbling into a wall head first. He slumps, lifeless on the floor. Before you have time to process, the troll rushes at you. you retreat down the stairs hidden behind the door. Lucky for you, the troll is to large to fit through the small bottleneck the door creates... After a few minutes of descent, you stop and slip to the floor... Your brother is dead... There is no other way but forward...",
                "choices": [{
                    "text": "This is for you Marcus...",
                    "id": "the cellar"
                }]
            },
            {
                "id": "choice cab",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The troll is still a good distance away. You think you can make it to the stairs on your left. You make a mad sprint towards the stair. Marcus, the slower of you two, begins seconds later than you. That slight hesitation is enough time for the troll to close the gap between it and Marcus. The troll attempts to swipe at Marcus, but a quick roll saves him from sure death. You both barely reach the stairs and clamber up. The troll tries to follow but its immense body cannot get through the small stairway. With a mighty roar, it gives up it's chase but remains at the bottom of the stairs.",
                "choices": [{
                    "text": "No other way but up",
                    "id": "the tower"
                }]
            },
            {
                "id": "choice cac",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You and Marcus look at each other and realize there is no other way out of this than to fight. You rush the troll.... and are quickly dispatched by the huge beast. At least your death was quick..."
            },
            {
                "id": "choice cad",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You muster an ingenious plan on the fly! You begin to sing the song your mother would sing when you as a child. The troll stops its onslaughtjust feet from you with an inquisitive look. Seeing that your plan might be working, Marcus joins you in song... Your ballad is cut short as the troll suddenly switches back to its vengeful demeanor and smashes you into jelly... It's a bard knock life for an adventurer..."
            },
            {
                "id": "choice cba",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You decide to try and use the ancient catapult to reach the towers window... You and Marcus load yourselves into the barrel of the catapult. You count down from three and cut the rope that works the mechanism... The catapult does, in fact, work but your aim is off. You and marcus miss the window by several feet and fall to your deaths..."
            },
            {
                "id": "choice bbaa",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You open the heavy front door. It seems like ages since anyone has set foot here. Only the moon, let in by holes in the roof, lights your path. You notice strange gashes on the floor. Your eyes follow the gashes and you immediately regret your desicion to use the front door. Your eyes come upon the behemoth body of a sleeping troll. To make matters worse, it seems the door's opening displaced more rocks from the ceiling above. With a loud crash, your exit is blocked by an avalanche of rocks. The troll, Waking to the sound, lets out a shrieking roar that nearly causes another avalanche. The beast charges at you with rage in it's eyes... You are in deep dung now...",
                "choices": [{
                        "text": "Throw the potion at the troll...",
                        "id": "choice bbaaa"
                    },
                    {
                        "text": "Pour the potion on yourselves...",
                        "id": "choice bbaab"
                    },
                    {
                        "text": "Drink the potion...",
                        "id": "choice bbaac"
                    },
                    {
                        "text": "To death or glory!!",
                        "id": "choice cac"
                    }
                ]
            },
            {
                "id": "choice bbaaa",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "As the troll rushes forward, you remember the potion from camp that hangs at your side! You are sure it is an explosive element! You throw the vial as hard as you can at the troll and cover your ears to deafened the impending explosion... Instead of exploding upon impact, the troll unexpectingly vanishes. The strangest part of the ordeal is the fact that the troll's thunderous footsteps still echoed throught the hall. Before you even have a sigh of relief, you are struck with a thunderous force. You crash into the wall head first, realizing the potion was actually an invisibility potion... Didn't see that coming..."
            },
            {
                "id": "choice bbaab",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You think quickly to the potion at your hip. If you remember correctly, violet means it is an invisibility potion. You remember that drinking them will cause death. They are meant to be applied to the skin. In an instant you throw half on yourself, the other half on your brother and hope for the best. The potion takes effect in less than a second. You were correct about the vial's contents. The troll stops in it's tracks, confused about what it just saw. I thrashes towards an empty corner. The potions effects only last thirty seconds. This gives you little time to think of which way to continue...",
                "choices": [{
                        "text": "The stairs to the left",
                        "id": "the tower"
                    },
                    {
                        "text": "The door to the right",
                        "id": "the cellar marcus"
                    }
                ]
            },
            {
                "id": "choice bbaac",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "The potion!! You quickly down the bottle, hoping for a strength buffering effect or a protective barrier; anything that can help in this situation!! You feel a tingle deep in your belly. Slowly your insides warm.... and do not stop warming! You are left helpless as the troll pummels you into the ground..."
            },
            {
                "id": "the tower",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You climb what seem like never ending stairs for a time. As you think you are nearing the top landing, you begin to hear singing. It is a haunting song, both beautiful and chilling at the same time. As you round the last corner, you are surprised to see a woman sitting in the moonlit room at a weaving wheel. Specks of light, almost like an aura, dance around her and the wheel as she spins. The woman, who is sitting with her back towards you, does not notice you or your brother...",
                "choices": [{
                        "text": "Call out to the woman...",
                        "id": "tower a"
                    },
                    {
                        "text": "Attack the woman...",
                        "id": "tower b"
                    },
                    {
                        "text": "Go back down the stairs",
                        "id": "tower c"
                    },
                    {
                        "text": "Have Marcus approach her...",
                        "id": "tower d"
                    }
                ]
            },
            {
                "id": "tower a",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You call out to the woman as to not startle her with your approach. The woman abruptly stops her spinning. Slowly... she stands and turns... Your hair stands on end as you see the womans face. The eyes have an evil glow to them. Her mouth is a collection of mangled fangs. suddenly the room turns to blood. It was not linen she was weaving, but a patchwork of human skin, probably from those foolish enough to have trespassed on her domain before. You try to run but your legs do not move. The strings of fate have spoken... Your fate has come to an end..."
            },
            {
                "id": "tower b",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Having a feeling of dread upon looking at the woman, you decide that offense is the best idea. You and marcus seem to have an understanding on this. You both draw your swords and attack. just as your swords are about to land, the room changes. The woman and the wheel are gone. In there place lay a small brass key with your family seal on it. Marcus protests to your wish to take the key but, in the end, yields as long as he doesnt have to carry it. Realizing that the tower is a dead end, you make your way back down the stairs, hoping the troll has moved on...",
                "choices": [{
                    "text": "Here's to hoping...",
                    "id": "tower c key"
                }]
            },
            {
                "id": "tower c",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The woman's aura scares you. There is something sinister in that room so you will try your luck with the troll. You make your way back down the stairs, quietly in an effort to sneak up on the troll. Your stealthy efforts were not needed apparently. The troll is not there. You guess that upon waking and losing prey, it's hunger remains abated and it went to stave it's appetite. You hurry across the main hall to the door left unexplored from your previous encounter in the room...",
                "choices": [{
                    "text": "What is behind the door?",
                    "id": "The cellar marcus"
                }]
            },
            {
                "id": "tower d",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Marcus takes the lead in examining the strange woman and the room she is in. Slowly, he creeps up to the woman. A creak in the floor makes his presence know and a sudden chill rises in the air. The woman suddenly turns around and plunges her hand through Marcus' chest. You see the hideous face of a phantom undreamt of. Horrible gnashing teeth sink deep into your brother's neck... After letting your brother's body fall to the floor with a thud, the woman's eyes lock onto you. She lunges forward, bloodlust in her eyes. You run down the stairs as fast as you can, skipping them four at a time. You feel the woman hot on your heels. In your panic, you don't even consider the troll could be at the bottom! Luckily, the troll has left. You run across the hall and slam into the door across from the towers stairs. You turn to close the door and see that the ghost has mysteriously vanished without a trace. A set of stairs leading down now lies before you. After a few minutes of descent, you stop and slip to the floor... Your brother is dead... There is no other way but forward... ",
                "choices": [{
                    "text": "This is for you Marcus...",
                    "id": "the cellar"
                }]
            },
            {
                "id": "tower c key",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother decend the stairs, pondering what it was that you just witnessed. you muffle your footsteps as you approach the bottom of the stair set. You peer around the doorway to see that the troll has exitted the main hall. The coast is clear. Now that you have time to breathe, aside from the door you noticed earlier, you notice another door close to where the troll was sleeping...",
                "choices": [{
                        "text": "Go to the previous door...",
                        "id": "the cellar marcus"
                    },
                    {
                        "text": "Go to the new door...",
                        "id": "victory door",
                        "victory": "Fantasy"
                    }
                ]
            },
            {
                "id": "victory door",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You approach the previously undiscovered door, hoping the troll does not come back to its den. Made of steel, this door was obviosuly meant to keep someone out... or someone else in... There is but a keyhole and a handle on the front of the door...",
                "choices": [{
                        "text": "Use the key...",
                        "id": "victory marcus",
                        "victory": "Fantasy"
                    },
                    {
                        "text": "I'll take my chances with the other door!!",
                        "id": "the cellar marcus"
                    }
                ]
            },
            {
                "id": "the cellar marcus",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The stairs down are steep. You feel the air begin to get cool as you continue to descend. Luckily your eyes have adjusted to the darkness by now. You reach a small, tight crypt. Rats scurry away as you approach two burial sarcophagi. They both have your family crest on them. you deduce that this must have been the burial site of your forebearers and feel a wave of saddness and pride wash over you. Marcus notices your sudden change in mood and attempts to comfort you. He exclaims that there are two of you and two sarcophagi, then jokingly asks you if you want creepy box one or creepy box two. You laugh as you ponder your choice...",
                "choices": [{
                        "text": "Open the one on the right...",
                        "id": "cellar marcus a"
                    },
                    {
                        "text": "Open the one on the left...",
                        "id": "cellar marcus b"
                    },
                    {
                        "text": "Ignore them and press ahead...",
                        "id": "cellar marcus c"
                    },
                    {
                        "text": "Head back up the stairs...",
                        "id": "cellar marcus d"
                    }
                ]
            },
            {
                "id": "cellar marcus a",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You approach the sarcophagus on the right as Marcus takes the left. You both look at each other then simultaneously push the lids aside. You peek inside to find a woman's skeleton, adorned with bright gems and a necklace with the family seal. You see that she is clutching a small piece of paper... which you realize is the last piece of the map! Upon further inspection, you see that there is a secret passage out of the crypt which leads to the treasure room! You turn to Marcus to show him your find... The sight you see is horrifying! Marcus did not have a chance to protect himself. A living skeleton pierced your brother throught the throat with an ornate dagger while you were rummaging. Your brother is dead and now the skeleton is rising from the crypt...",
                "choices": [{
                        "text": "Fight!",
                        "id": "cellar skeleton a"
                    },
                    {
                        "text": "Run towards the secret passage!",
                        "id": "cellar skeleton b"
                    },
                    {
                        "text": "Run up the stairs!",
                        "id": "cellar skeleton c"
                    },
                    {
                        "text": "Run further into the crypt!",
                        "id": "cellar skeleton d"
                    }
                ]
            },
            {
                "id": "cellar skelton a",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "With rage in your heart, you strike out at the skeleton. Over and over, you swing wildly with tears in your eyes until no more of the skeleton is left. Only a pile of bonedust remains. You kneel by your brother... He is dead... His sacrafice was not in vain however. You follow the secret passage marked on the map. You vow to finish the mission that the two of you set out for and bring the treasure home...",
                "choices": [{
                    "text": "This is for you Marcus...",
                    "id": "victory",
                    "victory": "Fantasy"
                }]
            },
            {
                "id": "cellar skelton b",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You run with faster than you ever had, fueled by fear and hatred. You just hope that the map doesn't lie to you. As you make your way through the passage, you realize the skeleton has dropped it's pursuit. You finally have time to dwell on your brother's death... Your heart pains as you reach the end of the passage...",
                "choices": [{
                    "text": "This is for you Marcus...",
                    "id": "victory",
                    "victory": "Fantasy"
                }]
            },
            {
                "id": "cellar skelton c",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You decide enough is enough! No more scary crypt for you! You sprint back up the stairs, terified at what you just witnessed. Unfortunately, your first passage was enough to weaken the stairs and walls beyond what it's years could bear. As you climb, the ceiling gives way and you are crushed under a millinia of rocks... The end of the tomb raider..."
            },
            {
                "id": "cellar skelton d",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "Terrified and torn by your brother's death right in front of your eyes, you venture further into the crypt. Not long into your venturing, does the crypt break in to a large room. You are standing on the cliff of a large hole so deep you cannot see the bottom. As you turn to go back the way you came, the walls begin to move. Slowly you recognize that skeletons are pouring out of the walls. Hundreds of them group up at the passage from where you just came from... the only exit out... You fight valiantly but their numbers are too great... You are boned...."
            },
            {
                "id": "cellar marcus b",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You approach the sarcophagus on the left as Marcus takes the right. You both look at each other then simultaneously push the lids aside. You peek inside to find a man's skeleton, adorned with bright gems and a necklace with the family seal. You rummage through the man's tomb, hoping to find more. but, alas... it seems the tomb is worthless. You turn to Marcus to stell him you found nothing. Suddenly, the skeleton springs to life! In it's hand, an ornate dagger is making it's way towards your throat! You reach out to slow the attack but the skeleton is surprisingly strong for an entity without muscles. Slowly, the dagger inches it's way towards your flesh when your brother steps in to help! He slashes at the skeleton over and over again. Once free, you join in the melee until the skeleton is nothing but scattered bone dust. Gasping for air, you thank Marcus for coming to your aid. He has a peculiar smile on his face and is holding a scrap of paper in his shield hand. The last piece of the map! Upon further inspection, you see that there is a secret passage out of the crypt which leads to the treasure room!",
                "choices": [{
                    "text": "Hurry to the secret passage!!",
                    "id": "victory marcus",
                    "victory": "Fantasy"
                }]
            },
            {
                "id": "cellar marcus c",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You have had enough surprises for today and believe the sarcophogi to be more trouble than they are worth. You venture further into the crypt. Not long into your venturing, does the crypt break in to a large room. You are standing on the cliff of a large hole so deep you cannot see the bottom. As you turn to go back the way you came, the walls begin to move. Slowly you recognize that skeletons are pouring out of the walls. Hundreds of them group up at the passage from where you just came from... the only exit out... You fight valiantly but their numbers are too great... You are boned...."
            },
            {
                "id": "cellar marcus d",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You decide enough is enough! No more scary crypt for you! You venture back up the stairs with your brother. Unfortunately, your first passage was enough to weaken the stairs and walls beyond what it's years could bear. As you climb, the ceiling gives way and you are crushed under a millinia of rocks... The end of the tomb raider..."
            },
            {
                "id": "victory marcus",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You've done it!!!! You found your family's treasure room!!! The room glimmers with a golden glow from the piles of wealth. Bookshelfs on bookshelfs explain the advanced technologies your family unravelled eons ago that keep the room well lit. There is even mention of something called the 'internet' and 'email'... You and Marcus pile as much as you can into your bags and pockets. Your forefathers would be proud!!!",
                "victory": "Fantasy"
            },
            {
                "id": "victory",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You've done it!!!! You found your family's treasure room!!! The room glimmers with a golden glow from the piles of wealth. Bookshelfs on bookshelfs explain the advanced technologies your family unravelled eons ago that keep the room well lit. There is even mention of something called the 'internet' and 'email'... You think of Marcus and wonder what this victory has cost you... With full pockets, you take your riches back home. Your forefathers would be proud!!!",
                "victory": "Fantasy"
            },

            {
                "id": "the cellar",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "The stairs down are steep. You feel the air begin to get cool as you continue to descend. Luckily your eyes have adjusted to the darkness by now. You reach a small, tight crypt. Rats scurry away as you approach two burial sarcophagi. They both have your family crest on them. you deduce that this must have been the burial site of your forebearers and feel a wave of saddness and pride wash over you. You wish Marcus was here to brighten your mood. He always had a way of making you smile. You think which box you should choose",
                "choices": [{
                        "text": "Open the one on the right...",
                        "id": "cellar alone a"
                    },
                    {
                        "text": "Open the one on the left...",
                        "id": "cellar alone b"
                    },
                    {
                        "text": "Ignore them and press ahead...",
                        "id": "cellar marcus c"
                    },
                    {
                        "text": "Head back up the stairs...",
                        "id": "cellar marcus d"
                    }
                ]
            },
            {
                "id": "cellar alone b",
                "image": "https://i.pinimg.com/originals/50/52/4b/50524ba8c96b027837224e2b62131514.jpg",
                "text": "You open the sarcaphogus to find an elegantly bound skeleton. It is obviously a woman bones judging by the size and height. You scan the box with your eyes, when you suddenly believe you see the skeleton's hand move. You believe it to be but your imagination caused by the stress you have endured today. You find nothing in the sarcophogus and begin to walk to the other one. An icey cold hand grabs you by the back of your neck as you walk away. In an instant, you are pulled into the sarcophogus and the lid closes. You can scream all you want, but the only one around is your new tomb mate..."
            },
            {
                "id": "cellar alone a",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You rummage through the sarcophogus after a difficult struggle with the lid. Inside their is a finely adorned skeleton. The man inside is obviously one of your family, the golden crest of your family carved into the bones of his forehead. whether or not that happened before or after death, you do not know. You notice, clutched in his left hand, a small piece of paper. It alost looks like a corner to a map... Your family's map!!! It shows a secret passage way leading out of the tomb to the burial place of your family's treasure!!",
                "choices": [{
                    "text": "Hurry!! To the treasure!!",
                    "id": "victory",
                    "victory": "Fantasy"
                }]
            }
        ]
    },
    {
        bookTitle: "Vietnam War Story",
        bookPages: [{
                "id": "initial",
                "image": "https://cdn.britannica.com/41/142841-050-7EA0678B/troops-marsh-Mekong-delta-South-Vietnam-1967.jpg",
                "text": "You are an adventurer... Your father was an adventurer before you and his father before him. This is your first TRUE adventure. sure, you have been on minor quests: dungeon crawls, bandits. the like. But this... This is different. For generations, the map to your family's treasure has been slowly pieced together. Finally, the location of it's final resting place has been found. The location points to your family's old castle. Where the treasure is located inside is anyone's guess but it is a chance you are willing to take. You and your brother, Marcus, make your way towards the burial site that night. You see the glint of a fire off to the side of the road...",
                "choices": [{
                        "text": "Inspect the camp...",
                        "id": "choice a"
                    },
                    {
                        "text": "Wait and watch the camp for a time...",
                        "id": "choice b"
                    },
                    {
                        "text": "Move past the camp...",
                        "id": "choice c"
                    },
                    {
                        "text": "Call out to the camp...",
                        "id": "choice d"
                    }
                ]
            },
            {
                "id": "choice a",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother walk towards the fire and inspect the camp. It is a simple collection of lean to's and discarded bones. The fire is still burning, meaning whom ever owns the camp could not have left long ago. A single vial of some violet mixture sits by one of the lean to's. The hairs on your neck stick up as you notice sounds coming from the edge of camp. Could be the owners coming back...",
                "choices": [{
                        "text": "Snatch the potion and run!!",
                        "id": "choice aa"
                    },
                    {
                        "text": "It must be your imagination... keep searching!",
                        "id": "choice ab"
                    },
                    {
                        "text": "Greet the owners...",
                        "id": "choice ac"
                    },
                    {
                        "text": "Hide!!",
                        "id": "choice ad"
                    }
                ]
            },
            {
                "id": "choice b",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You and your brother take cover behind an overgrown tree. The vines that twist around the trunk hide the glints of the swords you have in your hands. Soon a trio of goblins break the edge of the camp holding their kill, a handful of snakes and a lone raven. They begin to feast on their prey, paying little attention to anything else. You notice a lone potion sitting by one of the crude lean to's...",
                "choices": [{
                        "text": "Snatch the potion and run!!",
                        "id": "choice ba"
                    },
                    {
                        "text": "Sneak and grab the potion...",
                        "id": "choice bb"
                    },
                    {
                        "text": "Too dangerous. Move away from the fire...",
                        "id": "choice c"
                    },
                    {
                        "text": "These monsters must die!!",
                        "id": "choice bd"
                    }
                ]
            },
            {
                "id": "choice c",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "Your mind must stay centered on the task ahead. You follow the map to your ancestor's past home. You knew it was going to be a castle, but it is much more magnificent than you expected! Though the walls are worn, a large turret tower still stands untouched by time. For a split second, you swear to have seen a face in the window of the tower. The map also speaks of a cellar. Perhaps that would be a good place to search? Never the less, the only obvious way in is through the front door...",
                "choices": [{
                        "text": "Front door it is then!",
                        "id": "choice ca"
                    },
                    {
                        "text": "There must be another way...",
                        "id": "choice cb"
                    },
                    {
                        "text": "Perhaps through the turret...",
                        "id": "choice cc"
                    },
                    {
                        "text": "Too hard! I'm going home!",
                        "id": "choice cd"
                    }
                ]
            },
            {
                "id": "choice d",
                "image": "https://ozorianprophet.eu/wp-content/uploads/sites/3/2019/10/fantasy-eyes-forest-300x129.jpg",
                "text": "You call out to the camp. It is eerily quiet for a while... Then a group of men break the briars to see who called out...",
                "choices": [{
                        "text": "These men look dangerous! Run away!",
                        "id": "choice da"
                    },
                    {
                        "text": "Greet them!",
                        "id": "choice db"
                    },
                    {
                        "text": "Stare at them...",
                        "id": "choice dc"
                    },
                    {
                        "text": "Threaten them!!",
                        "id": "choice dd"
                    }
                ]
            }
        ]
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into books database!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });