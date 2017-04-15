"Trick or Treat" by Ryan Kehlenbeck

Section - Health

Intro is a scene. "After a long day of school and Varsity baseball practice you return home with your best friend Jeffery. Jeffery is still in his baseball outfit and suggests, [quotation mark]Hey! This is kind of like a costume, maybe I can go out trick or treating![quotation mark] You're not exactly eager to go door to door, but you're a Senior so this is your last Halloween as a kid in this neighborhood. You decide to give it a shot. Plus you love candy![line break][line break]Jeffery is a smart kid so don't be afraid to [italic type]ask Jeffery for help[roman type].[line break][line break]You're a baseball player so you can [italic type]run[roman type], [italic type]attack [roman type]someone[italic type] with the bat[roman type] if you have one, and [italic type]focus[roman type] to check your health. You're a growing boy so [italic type]eat[roman type]ing something will make you feel better.[line break][line break]Good Luck Trick or Treating!"
Intro begins when the player is in the Bedroom for the first time.

A person has a number called health.
The health of a person is 100.
Jeffery is a man. "[one of]Your best friend from the baseball team, Jeffery,[or]Jeff[or]Jeffery, the baseball player dressed as a baseball player,[or]Jeffery, the kind of friend you aren't afraid to ask for help,[or]Jeffery[if Jeffery is carrying the bat], who is currently practicing his swing with the bat he is carrying,[end if][purely at random] is here."
Understand "Jeff" as Jeffery.
A bat is a thing.
Jeffery is carrying the bat.

A costume is a kind of wearable thing.
The ghost costume is a costume.
Understand "costume" as ghost costume.
A skeleton mask is a costume.
Understand "mask" as skeleton mask.

Todd is a person.
The printed name of Todd is "Todd the [one of]Bully[or]Skeleton[purely at random]".
Cop is a person.
The printed name of Cop is "Police Officer Kid".
Understand "police", "kid", "officer", "police officer", "pollice officer kid", "officer kid", and "police kid" as Cop.

Instead of eating something:
	If the noun is edible:
		say "You eat [the noun].";
		Now the noun is nowhere;
		Heal the player by 25;
	otherwise:
		say "You can't eat [the noun]! Try food or candy instead."
	
Focusing is an action applying to nothing.
Understand "focus", "health","hp", "health points", and "hit points" as focusing.

Carry out focusing:
	say "You pause for a moment.[line break]You have [health of player] HP[if health of player is 100] (MAX)[end if].";
	if the health of player is greater than 74:
		say "You feel great!";
	else if health of player is greater than 49:
		say "You're fine.";
	else if health of player is greater than 24:
		say "You've been better. [italic type] Your stomach grumbles...[roman type][line break]";
	otherwise:
		say "You don't feel good... You might want to eat something."
		
To damage (fghtr - a person) by (dmg - a number):
	Now health of fghtr is health of fghtr - dmg;
	If fghtr is Jeffery:
		say "Jeffery takes [dmg] damage. Jeffery has [health of Jeffery] HP.";
		if the health of Jeffery <= 0:
			say "[line break]Jeffery says, [quotation mark]Go on... without me...[quotation mark][line break]Jeffery collapses and is no longer following you. [if Jeffery is carrying bat]He drops his bat. [end if]He will be missed.[line break]";
			if Jeffery is carrying bat:
				Now bat is in location of Jeffery;
			Now Jeffery is nowhere;
			Now Jeffery is not following the player;
	else if fghtr is the player:
		say "You take [dmg] damage. You have [health of player] HP.";
		if the health of player <= 0:
			let quickscore be the quant of scoreport times 5;
			say "You died. You collected [scoreport] and got a score of [quickscore]. You didn't exactly have a good night.";
			end the story saying "You feel like there was more to explore...";
	else if fghtr is Todd:
		say "[Todd] takes [dmg] damage.";
		if health of Todd <= 0:
			say "[line break][Todd] falls to the floor, defeated. His skeleton mask falls off his face. Hopefully he's not dead, but at least he can't chase you anymore.";
			Now the skeleton mask is in the location of the player;
			Now Todd is not following the player;
			Now Todd is nowhere;
	otherwise:
		say "[fghtr] takes [dmg] damage.".
		
To heal (fghtr - a person) by (hlth - a number):
	Now health of fghtr is health of fghtr + hlth;
	If health of fghtr > 100:
		Now health of fghtr is 100;
	If fghtr is player:
		say "You recover [hlth] HP. You have [health of player] HP[if health of player is 100] (MAX)[end if].";
	otherwise:
		say "[fghtr] recovers [hlth] HP[if fghtr is Jeffery]. Jeffery has [health of Jeffery] HP[end if][if health of fghtr is 100] (MAX)[end if]."
	
Section - World

Piece of candy is a kind of thing.
Piece of candy has a number called quant.
Understand "candy" as piece of candy.

The printed name of a piece of candy is "[quant] piece[if quant is not 1]s[end if] of candy".
The indefinite article of a piece of candy is "x".
Scoreport is a piece of candy.
The player is carrying scoreport.

To add (num - a number) candy:
	Now the quant of scoreport is the quant of scoreport plus num;
	say "You took [num] piece[if num is not 1]s[end if] of candy.[line break]".

Instead of taking a piece of candy:
	Now the quant of scoreport is the quant of scoreport plus the quant of the noun;
	Now the noun is nowhere;
	say "You took [the noun]."
	
Instead of giving an apple to Jeffery:
	Now the noun is nowhere;
	say "Jeffery graciously accepts [the noun] and eats it.";
	Heal Jeffery by 25.
	
Instead of giving an orange to Jeffery:
	Now the noun is nowhere;
	say "Jeffery graciously accepts [the noun] and eats it.";
	Heal Jeffery by 25.
	
Instead of giving a piece of candy to Jeffery:
	If the player is carrying the noun:
		if the quant of scoreport is greater than 0:
			Now the quant of scoreport is the quant of scoreport - 1;
			say "Jeffery takes the candy and eats it.";
			Heal Jeffery by 20;
		otherwise:
			say "You don't have any candy. You shed a single tear.";
	otherwise:
		say "You don't have any candy. But your candy sense is tingling."
	
Instead of eating a piece of candy:
	If the player is carrying the noun:
		if the quant of scoreport is greater than 0:
			Now the quant of scoreport is the quant of scoreport - 1;
			say "You eat a piece of candy. [one of]You feel the love[or]It's everything you wanted and more[or]Maybe you should have another[or]Mmmmmm..[purely at random].";
			Heal the player by 20;
		otherwise:
			say "You don't have any candy. You shed a single tear.";
	otherwise:
		say "You don't have any candy. But your candy sense is tingling."

Instead of dropping a piece of candy:
	say "You don't want to drop candy. You love candy."

A task is a kind of thing.
A task can be complete.
A task is not complete.
A task is undescribed.

Task1 is a task.
Task2a is a task.
Task2b is a task.
Task3 is a task.
Task4 is a task.

Every turn:
	If Task1 is complete and Task3 is complete and Task4 is complete:
		If Task2a is complete or Task2b is complete:
			Score and end.
		
To score and end:
	let score be the quant of scoreport times 5;
	say "After visiting all the houses nearby, you decide to call it quits.[line break]You collected [scoreport].[line break][if Jeffery is visible]You're glad Jeffery was around to help make your last time trick or treating memorable[otherwise]You really wish Jeffery was around[end if].";
	If Jeffery is visible:
		Now score is score times 2;
	say "[line break]Your score is: [score][line break][if score is less than 80]You feel like you could have done better.[otherwise]You're pretty sure you collected all the candy in town![end if]";
	end the story saying "You return home after a long night of trick or treating..."
		

Following relates a person to a person.
The verb to follow (he follows, they follow, he followed, it is followed, he is following) implies the following relation.
Jeffery is following the player.

Every turn:
	If Jeffery is visible and Jeffery is not following the player:
		say "You're relieved to see Jeffery! You never want to leave his side again.";
		Now Jeffery is following the player;
	If Todd is visible and Todd is not following the player:
		say "[Todd] sees you and starts to chase after you!";
		Now Todd is following the player;
	else if Todd is visible:
		damage the party by 20 with "Todd runs up to you and punches you as hard as he can![line break]" and "Todd shoves Jeffery to the ground. Jeffery quickly gets up and runs to you.[line break]" and "Todd grabs a rock off the ground and throws it at you. It hits your arm.[line break]" and "Todd is catching his breath. For a big guy his stamina is pretty impressive, but he couldn't last forever.[line break]";
		if the health of the player is less than 21:
			say "You should probably start running.";
	If Cop is visible and Cop is not following the player:
		say "Police Officer Kid yells, [quotation mark]There he is![quotation mark] and runs after you.";
		Now Cop is following player;
	else if Cop is visible:
		if a random chance of 1 in 3 succeeds:
			say "Police Officer Kid hits you with his baton.";
			damage the player by 10;
			if the health of the player is less than 21:
				say "[italic type]If you ran there's no way he could keep up with you[roman type].";
		otherwise:
			say "Police Officer Kid tried to hit you, but he missed."
		

to damage the party by (dmg - a number) with (opt1 - a value) and (opt2 - a value) and (opt3 - a value) and (opt4 - a value):
	if a random chance of 1 in 4 succeeds:
		say opt1;
		damage the player by dmg;
	else if Jeffery is following the player and a random chance of 1 in 3 succeeds:
		say opt2;
		damage Jeffery by dmg;
	else if a random chance of 1 in 2 succeeds:
		say opt3;
		damage the player by dmg - 5;
	otherwise:
		say opt4.

Instead of going:
	If the player's command includes "run":
		try running away;
	otherwise:
		continue the action.

Instead of asking Jeffery for:
	try talking to Jeffery about the second noun.

After going:
	If Jeffery is following the player:
		move Jeffery to location of player;
	If Todd is following the player:
		move Todd to location of player;
	If Cop is following the player:
		move Cop to location of player;
	continue the action.

Section - Toting

Toting is an action applying to nothing.
Understand "knock on the door", "knock door", "trick or treat", "ring doorbell", "ring the doorbell", "ring bell", "knock on door", "knock", "tot", "trick", "treat", and "house" as toting.

An orange is a thing.
An orange is edible.
A pumpkin is a thing. "Barbara's jack-o-lantern."
A window is a thing. A window is undescribed.

Carry out toting:
	if location of player is House 1:
		TOT in House 1;
	else if location of player is House 2:
		TOT in House 2;
	else if location of player is House 3:
		TOT in House 3;
	else if location of player is House 4:
		TOT in House 4;
	otherwise:
		say "There is nowhere to trick or treat here."
		
Section - Combat

Instead of attacking a person:
	If Jeffery is the noun:
		say "You playfully punch Jeffery. Jeffery punches you back, smiles, and says, [quotation mark]That's what you get![quotation mark][line break]";
		Damage Jeffery by 10;
		Damage the player by 10;
	Else if Todd is the noun:
		if a random chance of 2 in 3 succeeds:
			if the player is carrying the bat:
				say "You swing the bat at [Todd], landing a solid hit! You wish you did this well during games.";
				damage Todd by 25;
			otherwise:
				say "You punch [Todd], but you're no fighter[if health of Todd is greater than 69] [italic type]Maybe this would be easier with some sort of weapon[roman type][end if].";
				damage Todd by 10;
		otherwise:
			if the player is carrying the bat:
				say "You swing the bat and miss. Everyone misses now and again.";
			otherwise:
				say "You swing your fist at Todd but miss completely. You're better with a bat.";
		if Jeffery is following the player and health of Todd > 0:
			if a random chance of 1 in 4 succeeds:
				say "Jeffery musters up the courage to fight. He quickly punches [Todd], then retreats again.";
				damage Todd by 10;
	Else if Cop is the noun:
		say "There are a lot of adults around. You probably shouldn't hit a kid.[line break][italic type]Maybe you can out run him..[roman type].";
	Otherwise:
		say "That would be rude. You're angsty, but not a total deliquent."
		
Section - Talking
		
Talking to it about is an action applying to one visible thing and one thing.
Understand "talk to [someone] about [something]", "talking to [someone] about [something]", "ask [someone] about [something]", "talk [someone] [something]", "talk to [someone] [something]", "ask [someone] [something]", "ask [someone]", "ask [someone] for [something]", "tell [someone]", "talk [someone]", "tell [someone] [something]", and "tell [someone] about [something]" as talking to it about.

Carry out talking to it about:
	say "[the noun] isn't interested in talking to you.".

A clue is an undescribed thing.
Jeffery is carrying a clue.
Understand "help", "hint", and "advice" as clue.
Instead of talking to Jeffery about:
	if the second noun is bat:
		say "Jeffery hands you his bat.";
		Now the player is carrying the bat;
	else if the second noun is sheet:
		say "Jeffery says, [quotation mark]Maybe you could make a costume out of that sheet on your bed.[quotation mark][line break]";
	else if the second noun is pumpkin:
		say "Jeffery says, [quotation mark]Maybe you can try throwing it or hitting it?[quotation mark][line break]";
	else if the second noun is clue:
		if location of player is in House:
			say "Jeffery says, [quotation mark]You look ready to me, but you might want to grab a costume or maybe something to eat before heading outside.[quotation mark][line break]";
		else if Todd is visible:
			say "Jeffery says, [quotation mark]We probably have to stand up to Todd to get him off our backs![quotation mark][line break]";
		else if Cop is visible:
			say "Jeffery says, [quotation mark]I don't think there's anything we can do about this kid, we just have to keep [bold type]run[roman type]ning away.[quotation mark][line break]";
		else if Task2b is complete and Task2a is not complete:
			say "Jeffery says, [quotation mark]I bet you there's a way to trick Mrs. Oldstein into giving us candy.[quotation mark][line break]";
		else if Task1 is not complete:
			say "Jeffery says, [quotation mark]There's gotta be some good way to prank Barbara for not giving us candy![quotation mark][line break]";
		else if Task4 is not complete:
			say "Jeffery says, [quotation mark]At some point you should face your fears and go to Todd's House to trick or treat.[quotation mark][line break]";
		otherwise:
			say "Jeffery says, [quotation mark]We should try and trick or treat at every house.[quotation mark][line break]";
	otherwise:
		say "After not hearing a single word you said, Jeffery returns from his daydreaming and says, [quotation mark]What?[quotation mark][line break]"

Section - House

House is a region.

There is a room called Bedroom. "Your bedroom is a mess. You can make out the shape of your bed in the corner. [if the sheet is on the bed] Your bedsheet is crumpled up on top[end if]. Your desk sits opposite the bed. It is covered with random, unimportant papers. Your bedroom door is on the South wall."
Bedroom is in House.

The bed is here. "You can make out the shape of your bed in the corner. [if the sheet is on the bed] Your bedsheet is crumpled up on top[otherwise] You won't find anything on it[end if]." The bed is a supporter. There is a sheet on the bed. "The sheet from your bed. It's not exactly clean." The sheet is undescribed. The bed is fixed in place. The bed is undescribed. Understand "bedsheet" and "sheets" as sheet.

The desk is a container in the Bedroom. "Your desk sits opposite the bed. It is covered with random, unimportant papers." The desk is undescribed. The desk is fixed in place and openable. The desk is closed. The desk is undescribed.

The pair of scissors is in the desk. "A standard pair of scissors."

Jeffery is in the Bedroom.

Understand "make [something]" as cutting.

Instead of cutting:
	if the noun is sheet or the noun is costume:
		if the sheet is visible and the pair of scissors is visible:
			say "You cut two eyeholes in the sheet. Now you have a ghost costume![line break][italic type]Try putting it on[roman type].";
			Now the sheet is nowhere;
			Now the player is carrying a ghost costume;
		else if the sheet is visible:
			say "You need to find something to cut the sheet with.";
		otherwise:
			say "You don't see that here.";
	otherwise:
		say "You probably shouldn't try cutting [the noun]."
		
The Living Room is south of the Bedroom. "The living room looks[if the apple is on the table] pretty ordinary. There is an apple sitting on the table in the center of the room[otherwise] the same as it always does[end if]. Your bedroom is to the North and the front door of the house is to the East."
The table is a supporter in the Living Room. The table is undescribed. The table is fixed in place.
The apple is on the table. "An ordinary apple. Not as good as candy." The apple is edible. The apple is undescribed.

The Living Room is in House.

Section - The Street

Halloween is a scene. "You finally head outside to start trick or treating. You step out of your house and what you see starts to make you excited. Your small street, with four other houses on it, is busy with trick or treaters of various ages walking around in all sorts of different costumes. As amazing as the scene looks, your mouth starts to water at the thought of all the candy you'll get.[line break][line break][if Jeffery is visible]Jeffery says, [quotation mark]Woah, there are a lot of people out here. We better get going![quotation mark][otherwise]You wish that Jeffery was here to see this...[end if]".

The Street is a region.
Intro ends when the player is in The Street for the first time.
Halloween begins when the player is in The Street for the first time.

W Elm Street is east of the Living Room. "The street you live on. There are houses to the North and South. Your house is to the West and the street continues to the East." W Elm Street is in The Street.

E Elm Street is east of W Elm Street. "The end of the street. There are houses to the North and South. The street continues to the West." E Elm Street is in The Street.

Section - House 1

House 1 is north of W Elm Street. "This is the home of your nosy neighbor Barbara. Her house is well decorated. There is a jack-o-lantern on the steps and lots of tombstones on the grass. You can see the light is on in the window. Elm Street is to the South." House 1 is in The Street. The printed name of House 1 is "Barbara's House".

The window is in House 1.
The pumpkin is in House 1.
The pumpkin is undescribed.
The pumpkin is portable.
Understand "jack-o-lantern", "jack", and "lantern" as pumpkin.

Instead of dropping the pumpkin when the pumpkin is visible:
	if the player's command includes "throw" and the pumpkin is visible:
		Now the pumpkin is nowhere;
		if location of player is House 1:
			say "You throw the pumpkin through the window of Barbara's house.";
			Trick in House 1;
		otherwise:
			say "You smash the pumpkin on the ground. That felt good.";
			Now Task1 is complete;
	else if the player is carrying the pumpkin:
		continue the action;
	otherwise:
		say "The pumpkin is on the ground. Maybe it shouldn't be?".
		
Instead of attacking the pumpkin:
	if player is carrying the bat:
		Now the pumpkin is nowhere;
		say "You smash the pumpkin with a bat. [italic type]Sweet revenge[roman type].";
		if location of player is House 1:
			Trick in House 1;
		otherwise:
			Now Task1 is complete;
	otherwise:
		say "You don't want evidence on you hands. [italic type]Maybe use a weapon of some sort..[roman type]."
		
To Trick in House 1:
	say "Barbara, who notices the damage while handing out candy to actual kids, goes crazy. She turns completely red and drops a few pieces during her chaotic outburst.";
	add 5 candy;
	if player is wearing a costume:
		say "You're lucky she didn't see you.";
	else if Jeffery is visible:
		say "She didn't see you, but she grabbed Jeffery. [if Jeffery is carrying bat]He dropped his bat as he was being taken away. [end if]Jeffery is no longer following you.";
		if Jeffery is carrying bat:
			Now bat is in location of Jeffery;
		Now Jeffery is not following the player;
		Now Jeffery is nowhere;
	otherwise:
		say "She saw you and threw her empty bowl at you!";
		Damage the player by 25;
	Now Task1 is complete.

To TOT in House 1:
	if Task1 is complete:
		say "You probably don't want to risk messing with Barbara anymore.";
	otherwise:
		say "Barbara comes to the door with a bowl of candy in her hands. She looks frustrated. She exclaims, [quotation mark]Kids like you are the reason why parents like me have to worry on Halloween! You're way too old to be out here and you're probably up to no good![quotation mark][line break][italic type]Maybe she deserves to be tricked[roman type]..."

Section - House 2

House 2 is south of W Elm Street. "This is the home of your kind elderly neighbor, Mrs. Oldstein. There are a few decorations in places that she was able to get to despite her health problems. Elm Street is to the North." House 2 is in The Street. The printed name of House 2 is "Mrs. Oldstein's House".

To TOT in House 2:
	if Task2a is complete:
		say "You wait around for a while, but Mrs. Oldstein is probably asleep already.";
	otherwise:
		say "After a minute or two of waiting, Mrs. Oldstein finally answers the door. You[if Jeffery is visible] and Jeffery[end if] politely say, [quotation mark]Trick or treat![quotation mark][line break]";
		if player is wearing a costume:
			say "Mrs. Oldstein says, [quotation mark]Oh! Aren't you a spooky ghost?[if Jeffery is visible]And what a cute baseball player![end if]I remember when I used to trick or treat in my youth...[quotation mark][line break]Mrs. Oldstein hands you [if Jeffery is visible]each [end if]an orange, and as she rambles on about her youth, you leave.";
			Now the player is carrying an orange;
			Now Task2a is complete;
			if Jeffery is visible:
				say "[line break]Jeffery eats his orange.";
				Heal Jeffery by 25;
		otherwise:
			say "Mrs. Oldstein says, [quotation mark]Oh! Aren't you a little too old to be trick or treating? I remember when I used to trick or treat in my youth...[quotation mark][line break]Mrs. Oldstein rambles on about her youth, and you leave with nothing.";
			if Task2b is complete:
				say "[italic type]Maybe she would give you candy if she couldn't tell how old you are..[roman type].";
			otherwise:
				Now Task2b is complete.

Section - House 3

House 3 is north of E Elm Street. "An unlit house. There are no decorations or lights on. Elm Street is to the South." House 3 is in The Street. House 3 is east of House 1. The printed name of House 3 is "The Dark House".

To TOT in House 3:
	if Task3 is not complete:
		say "You see a couple pieces of candy in a bowl by the front door with a sign that says [quotation mark]Take one.[quotation mark][line break]";
		add 2 candy;
		say "A child wearing a police costume sees you taking more than one piece of candy. He yells, [quotation mark]Stop! The sign says you can only take one![quotation mark][line break]";
		Now Cop is in House 3;
		Now Cop is following the player;
		Now Task3 is complete;
	otherwise:
		say "The bowl by the door is empty now.".

Section - House 4

Running away is an action applying to nothing.
Understand the command "run" as something new.
Understand "run", "run away", "run from", "sprint", "escape", and "dash" as running away.

Carry out running away:
	say "You run off in a random direction.";
	run the player in street;
	if Jeffery is following the player:
		say "Jeffery tries to run after you, but you he loses you. Jeffery is no longer following you.";
		run Jeffery in street;
	if Todd is following the player:
		say "Todd tries to chase after you, but he can't keep up. You're lucky you play baseball.[line break]Todd is no longer chasing you.";
		run Todd in street;
	if Cop is following the player:
		say "The kid tried to follow you, but go confused and lost you. Police Officer Kid is no longer following you.";
		run Cop in street.

To run (per - a person) in street:
	move per to a random room in The Street;
	If per is Jeffery:
		Now Jeffery is not following the player;
		if location of Jeffery is location of player:
			run Jeffery in street;
	If per is Todd:
		Now Todd is not following the player;
		if location of Todd is location of player:
			run Todd in street;
	If per is Cop:
		Now Cop is not following the player;
		if location of Cop is location of player:
			run Cop in street.

Chase 1 is a scene. "You slowly walk up to Todd's House. Todd is the school bully. You aren't necessarily weak, but Todd is a monster! And he's not particularly fond of you. As you approach, he exits his front door. He puts on a mask to complete his skeleton costume. You [if Jeffery is visible]and Jeffery [end if]run to hide behind a bush."

House 4 is south of E Elm Street. "The home of your nemesis, Todd the Bully. The decorations look okay, but you don't like them because you're sure that Todd put them up[if Task4 is not complete]. [one of]You [italic type]can't wait[roman type] to find out what Todd's parents are like[or]You want candy, but you're also nervous[or]This might just be the scariest house you've ever come across, even when it's not decorated[purely at random][end if]. Elm Street is to the North." House 4 is east of House 2. House 4 is in The Street. The printed name of House 4 is "[Todd]'s House".

Halloween ends when the player is in House 4 for the first time.
Chase 1 begins when the player is in House 4 for the first time.

Last when Chase 1 begins: 
	Now Todd is in House 4;
	if a random chance of 1 in 2 succeeds:
		say "Todd doesn't see you and he goes off trick or treating.";
		run Todd in street;
	otherwise:
		say "Todd sees you and immediately starts sprinting towards you! He is now chasing you.";
		Now Todd is following the player.

To TOT in House 4:
	if Task4 is not complete:
		if Todd is nowhere:
			if the player is wearing the ghost costume:
				say "As you walk up the steps to Todd's house, the door swings open. You let out a [quotation mark]Trick or...[quotation mark] But before you can finish, Todd's father says, [quotation mark]We don't have time for this right now, our son was just assaulted! I'm sorry but this is all I can do for you.[quotation mark] He hands you [if Jeffery is visible]and Jeffery each [end if]a piece of candy.";
				add 1 candy;
			otherwise:
				say "As you walk up the steps to Todd's house, the door swings open. You let out a [quotation mark]Trick or...[quotation mark] But before you can finish, Todd's father says, [quotation mark]You're the punk who beat up our son! We don't have anything for you![quotation mark][line break][italic type]Wow. This feels backwards[roman type].";
		otherwise:
			say "You're kind of nervous, but your sweet tooth is in charge, not your brain. You walk up to Todd's house, knock, and say, [quotation mark]Trick or Treat![quotation mark] Todd's mother opens the door with a smile on her face.[italic type] That's odd.[roman type] She looks at you[if Jeffery is visible] and Jeffery and says, [quotation mark]You must be friends[otherwise] and says, [quotation mark]You must be a friend[end if] of Todd's! Here you go! Happy Halloween![quotation mark][line break][line break][italic type]Not only was she wrong, but she only gave you one piece of candy. Of course this is one of the people who raised Todd[roman type].";
			add 1 candy;
		Now Task4 is complete;
	otherwise:
		say "You already forced yourself to talk to Todd's parents[if Todd is nowhere]. They probably don't want to spend more time with the kid who beat up their son[end if].".
		
Release along with cover art ("A picture of candy."), a website, the introductory booklet and the source text. Release along with an interpreter.