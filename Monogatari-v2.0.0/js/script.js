/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Wader': {
		title: "Welcome to the movement.",
		subtitle: "You’re new to this work and want to get more engaged in politics, policy, and activism.",
		body: `
			<p>Activate your political power now. Get resources from IGNITE <a href="https://lp.ignitenational.org/if-youre-new-to-politics-weve-got-your-back" target="_blank">here</a>.</p>
		`
	},
	'Swimmer': {
		title: "Hey, change maker. Look at you making a difference!",
		subtitle: "You're already putting in the time to improve your community and solve problems. You're ready to take your activism and political engagement to the next level.",
		body: `
			<p>Activate your political power now. Get resources from IGNITE <a href="https://lp.ignitenational.org/putting_in_the_work" target="_blank">here</a>.</p>
		`
	},
	'Diver': {
		title: "You're on fire!",
		subtitle: "You're ready to run for elected office or pursue a career in policy. We can't wait to call you Council Member, Mayor, Senator, or even President!",
		body: `
			<p>Activate your political power now. Get resources from IGNITE <a href="https://lp.ignitenational.org/on_fire_ready_to_run" target="_blank">here</a>.</p>
		`
	},
	'Minigame1': {
		title: "Time to make a GoFundMe!",
		subtitle: "Drag and drop the pieces where they belong to build the fundraising page. Click on the link to play the game, click close when you're done.",
		body: `
			<p style="text-align:center;"><a href="jigsaw-puzzle.html" target="_blank">Make a GoFundMe</a></p>
		`
	},
	'Minigame2': {
		title: "Design a poster!",
		subtitle: "Drag and drop the colors onto different parts of the poster to change colors. Click on the link to play the game, click close when you're done.",
		body: `
			<p style="text-align:center;"><a href="poster.html" target="_blank">Design a Poster</a></p>
		`
	},
	'Minigame3': {
		title: "Let's collect some signatures!",
		subtitle: "Drag the signatures to you to increase the number of signatures you have. Click on the link to play the game, click close when you're done.",
		body: `
			<p style="text-align:center;"><a href="petition.html" target="_blank">Collect Signatures</a></p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});


// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'bgm': 'ActivateV0.mp3',
	'bgm1': 'ActivateV0-chapter1.wav',
	'bgm2': 'ActivateV0-chapter2.wav',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'activate': 'activate.svg',
	'emptyRoom': 'emptyRoom.png',
	'ending': 'ending.png',
	'fullZoom': 'fullTeamZoom.png',
	'hands': 'handsPlaceholder.png',
	'rally': 'rally.png',
	'principal': 'schoolPrincipal.png',
	'studentGov': 'studentGovernment.png',
	'threeZoom': 'threeTeamMembers.png',
	
	'aSadThree': 'aniyah/3peopleAsad1.png',
	'aTalkThree': 'aniyah/3peopleAtalk2.png',
	'aAngryFour1': 'aniyah/4peopleAangry1.png',
	'aAngryFour2': 'aniyah/4peopleAangry2.png',
	'aFullZoom': 'aniyah/4peopleAnottalk.png',
	'aSadFour1': 'aniyah/4peopleAsad1.png',
	'aSadFour2': 'aniyah/4peopleAsad2.png',
	'aTalkFour1': 'aniyah/4peopleAtalk1.png',
	'aTalkFour2': 'aniyah/4peopleAtalk2.png',
	'aChoice': 'aniyah/choice.png',
	'aEnding': 'aniyah/ending.png',
	'aIntro': 'aniyah/intro.png',
	
	'bSadThree1': 'bella/3peopleBsad1.png',
	'bSadThree2': 'bella/3peopleBsad2.png',
	'bTalkThree': 'bella/3peopleBtalk1.png',
	'bAngryFour1': 'bella/4peopleBangry1.png',
	'bAngryFour2': 'bella/4peopleBangry2.png',
	'bFullZoom': 'bella/4peopleBnottalk.png',
	'bSadFour1': 'bella/4peopleBsad1.png',
	'bSadFour2': 'bella/4peopleBsad2.png',
	'bTalkFour1': 'bella/4peopleBtalk1.png',
	'bTalkFour2': 'bella/4peopleBtalk2.png',
	'bChoice': 'bella/choice.png',
	'bEnding': 'bella/ending.png',
	'bIntro': 'bella/intro.png',
	
	'cCrySolo': 'caieta/1personCcry.png',
	'cDeepSadSolo': 'caieta/1personCdeepsad.png',
	'cSadSolo1': 'caieta/1personCsad1.png',
	'cSadSolo2': 'caieta/1personCsad2.png',
	'cSadSolo3': 'caieta/1personCsad3.png',
	'cAngryFour1': 'caieta/4peopleCangry1.png',
	'cAngryFour2': 'caieta/4peopleCangry2.png',
	'cCryFour': 'caieta/4peopleCcry.png',
	'cDeepSadFour': 'caieta/4peopleCdeepsad.png',
	'cFullZoom': 'caieta/4peopleCnottalk.png',
	'cSadFour1': 'caieta/4peopleCsad1.png',
	'cSadFour2': 'caieta/4peopleCsad2.png',
	'cSadFour3': 'caieta/4peopleCsad3.png',
	'cSadFour4': 'caieta/4peopleCsad4.png',
	'cChoice': 'caieta/choice.png',
	'cEnding': 'caieta/ending.png',
	'cInjured': 'caieta/injured.png',
	'cInjuredNotification': 'caieta/injuredNotification.png',
	'cIntro': 'caieta/intro.png',
	
	'dSadThree1': 'dana/3peopleDsad1.png',
	'dSadThree2': 'dana/3peopleDsad2.png',
	'dTalkThree1': 'dana/3peopleDtalk1.png',
	'dTalkThree2': 'dana/3peopleDtalk2.png',
	'dAngryFour1': 'dana/4peopleDangry1.png',
	'dAngryFour2': 'dana/4peopleDangry2.png',
	'dFullZoom': 'dana/4peopleDnottalk.png',
	'dSadFour1': 'dana/4peopleDsad1.png',
	'dSadFour2': 'dana/4peopleDsad2.png',
	'dTalkFour1': 'dana/4peopleDtalk1.png',
	'dTalkFour2': 'dana/4peopleDtalk2.png',
	'dChoice': 'dana/choice.png',
	'dEnding': 'dana/ending.png',
	'dIntro': 'dana/intro.png'
});

// Define the functions for updating the current number of points.
function addOnePoint() {
	monogatari.storage().points += 1;
};
function addTwoPoints() {
	monogatari.storage().points += 2;
};
function progressChapter3() {
	monogatari.storage().chapter3 += 1;
};

// Define the Characters
monogatari.characters ({
	'a': {
		name: 'Aniyah',
		color: '#FFFFFF',
		sprites: {
            ending: 'aniyah/ending.png'
        },
		expressions: {
			normal: 'transparent.png'
		},
		default_expression: 'normal'
	},
	'b': {
		name: 'Bella',
		color: '#FFFFFF',
		sprites: {
            ending: 'bella/ending.png'
        },
		expressions: {
			normal: 'transparent.png'
		},
		default_expression: 'normal'
	},
	'c': {
		name: 'Caieta',
		color: '#FFFFFF',
		sprites: {
            ending: 'caieta/ending.png'
        },
		expressions: {
			normal: 'transparent.png'
		},
		default_expression: 'normal'
	},
	'd': {
		name: 'Dana',
		color: '#FFFFFF',
		sprites: {
            ending: 'dana/ending.png'
        },
		expressions: {
			normal: 'transparent.png'
		},
		default_expression: 'normal'
	},
	'p': {
		name: 'Phone',
		color: '#E9E73A',
		sprites: {
			'ending1': 'phone/ending1.png',
			'ending2': 'phone/ending2.png',
			'shot3': 'phone/Phone_03.png',
			'shot4': 'phone/Phone_04.png',
			'shot5': 'phone/Phone_05.png',
			'shot6': 'phone/Phone_06.png',
			'shot7': 'phone/Phone_07.png',
			'shot8': 'phone/Phone_08.png',
			'shot9': 'phone/Phone_09.png',
			'shot10': 'phone/Phone_10.png',
			'shot11': 'phone/Phone_11.png',
			'shot12': 'phone/Phone_12.png',
			'shot13': 'phone/Phone_13.png',
			'shot14': 'phone/Phone_14.png',
			'shot15': 'phone/Phone_15.png',
			'shot16': 'phone/Phone_16.png',
			'shot17': 'phone/Phone_17.png',
			'shot18': 'phone/Phone_18.png',
			'shot19': 'phone/Phone_19.png',
			'shot20': 'phone/Phone_20.png',
			'shot21': 'phone/Phone_21.png'
        }
	},
});

monogatari.script ({
	// The game starts here.
	"start": [
		"play music bgm with volume 25 loop",
		
		"show scene #000000 with fadeIn",
		
		"centered This is a visual novel experience meant to gauge your current level of political engagement in a fun and refreshing way! Click to advance.",
		"centered It is best to make each choice as if you were in that situation instead of choosing the ‘correct’ answer. Please be honest and have fun!",
		
		"show scene cIntro with fadeIn",
		"centered ",
		
		"show scene aIntro with fadeIn",
		"centered ",
		
		"show scene bIntro with fadeIn",
		"centered ",
		
		"show scene dIntro with fadeIn",
		"centered ",

		"stop music",
		"play music bgm1 with volume 25 loop",
		
		"show scene cInjured with fadeIn",
		"centered ",
		
		"show scene cInjuredNotification",
		"centered ",
		
		"show character p shot3 at center with fadeIn",
		"centered ",
		
		"show character p shot4 at center",
		"centered ",
		
		"show character p shot5 at center",
		"centered ",
		
		"show character p shot6 at center",
		"centered ",
		
		"show character p shot7 at center",
		"centered ",
		
		"show character p shot8 at center",
		"centered ",
		
		"show character p shot9 at center",
		"centered ",
		
		"show character p shot10 at center",
		"centered ",
		
		"show character p shot11 at center",
		"centered ",
		
		"show character p shot12 at center",
		"centered ",
		
		"show character p shot13 at center",
		"centered ",
		
		"show character p shot14 at center",
		"centered ",
		
		"show character p shot15 at center",
		"centered ",
		
		"show character p shot16 at center",
		"centered ",
		
		"show character p shot17 at center",
		"centered ",
		
		"show character p shot18 at center",
		"centered ",
		
		"show character p shot19 at center",
		"centered ",
		
		"show character p shot20 at center",
		"centered ",
		
		"show character p shot21 at center",
		"centered ",
		
		"show scene fullZoom with fadeIn",
		"centered ",
		
		"show scene cFullZoom with fadeIn",
		"c:normal Coach talked to the doctor. I need surgery on my ankle.",
		
		"show scene cSadSolo2",
		"c:normal If that wasn’t scary enough, even with the surgery...",
		
		"show scene cCrySolo",
		"c:normal I’m not going to be able to play for the rest of the season, or maybe ever!",
		
		"show scene cDeepSadSolo",
		"c:normal And if I can’t play, I’ll lose my scholarship, my work study won’t let me work anymore hours so I’ll have to find an off-campus job!",
		
		"show scene cSadSolo3",
		"c:normal But I already feel so behind this semester, I don’t know if I can afford to lose those study hours!",
		
		"show scene cSadSolo1",
		"c:normal I’m sad, scared, frustrated, and so stressed out! I wanted to talk to y’all about it.",
		
		"show scene aSadThree with fadeIn",
		"a:normal That is absolutely horrible!! What can we do to help?",
		
		"show scene bSadThree2",
		"b:normal Can we raise some money to help you breathe a bit?",
		
		"show scene dTalkThree1",
		"d:normal Yes! That way you can focus on studying for midterms, and we can help you job hunt after!",
		
		"show scene cChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "c:normal What would you say to your friend Caieta?",
				"option00": {
					"Text": "We’re always here for you! But I’m not sure what to do next... How can we help?",
					"onChosen": function(){addOnePoint()},
					"Do": "jump chapter1Cont0”
				},
				"option01": {
					"Text": "I have no ideas. Shouldn’t we get professionals to help?",
					"Do": "jump chapter1Cont1"
				},
				"option02": {
					"Text": "Let’s raise money to help! GoFundMe campaigns can’t be that hard to do!",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter1Cont2"
				}
			}
		}
	],

	"chapter1Cont0": [
		"show scene bTalkThree with fadeIn",
		"b:normal We’re always here for you! But I’m not sure what to do next... How can we help?",		
		"show scene cSadSolo1",
		"c:normal I think right now what I need is extra cash, but I don't have time to look for a job with exams coming up.",
		"show scene aTalkThree with fadeIn",
		"a:normal We can help! Maybe we can raise some money for you?",
		"jump chapter1Cont3"
	],
	
	"chapter1Cont1": [
		"show scene dSadThree2 with fadeIn",
		"d:normal I have no ideas. Shouldn’t we get professionals to help?",
		"show scene cSadSolo1",
		"c:normal I don't think I can afford a professional right now.",
		"show scene bTalkThree with fadeIn",
		"b:normal Let us help! Maybe we can raise some money for you?",
		"jump chapter1Cont3"
	],
	
	"chapter1Cont2": [
		"show scene aTalkThree with fadeIn",
		"a:normal Let’s raise money to help! GoFundMe campaigns can’t be that hard to do!",
		"show scene cSadSolo1",
		"c:normal That would be amazing. I don't know if I can ask you to do that.",
		"show scene dTalkThree1 with fadeIn",
		"d:normal We just want to do what we can to help.",
		"jump chapter1Cont3"
	],

	"chapter1Cont3": [
		"show scene cSadFour4 with fadeIn",
		"c:normal Thanks so much for saying all that, I love y’all so much. My ankle is starting to hurt again. I’m gonna take some ibuprofen and try to sleep it off. Talk to y’all later!",
		
		"show scene aTalkFour2",
		"a:normal Sleep well.",
		
		"show scene bTalkFour2",
		"b:normal We love you!",
		
		"show scene dTalkFour2",
		"d:normal Talk to you tomorrow.",
		
		"show scene threeZoom with fadeIn",
		"centered ",
		
		"show scene bSadThree1",
		"b:normal Wow. That must be so hard.",
		
		"show scene dSadThree1",
		"d:normal I can’t even imagine!",
		
		"show scene aSadThree",
		"a:normal I hate feeling helpless, I want to do something!",
		
		"show scene dTalkThree2",
		"d:normal Who mentioned raising money? That can be our first step!",
		
		"show scene bSadThree2",
		"b:normal Yeah but where do we start?",
		
		"show scene dTalkThree1",
		"d:normal I can make a GoFundMe! But I need some help. Anyone available?",
		
		"show scene dChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "d:normal What would you say?",
				"option00": {
					"Text": "Yes! I’d love to help!",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter1Cont4"
				},
				"option01": {
					"Text": "I want to help, but I don’t think I’m the person for the job.",
					"Do": "jump chapter1Cont5"
				},
				"option02": {
					"Text": "I can help later. Get started and I’ll double check everything.",
					"onChosen": function(){addOnePoint()},
					"Do": "jump chapter1Cont6"
				}
			}
		}
	],
	
	"chapter1Cont4": [
		"show scene bTalkThree with fadeIn",
		"b:normal Yes! I’d love to help!",
		"show scene dTalkThree2",
		"d:normal Great, let's get started!",
		"show message Minigame1",
		"jump chapter2"
	],
	
	"chapter1Cont5": [
		"show scene aSadThree with fadeIn",
		"a:normal I want to help, but I don’t think I’m the person for the job.",
		"show scene dTalkThree2",
		"d:normal It's pretty easy, here I'll show you how!",
		"show message Minigame1",
		"jump chapter2"
	],
	
	"chapter1Cont6": [
		"show scene bTalkThree with fadeIn",
		"b:normal I can help later. Get started and I’ll double check everything.",
		"show scene dTalkThree2",
		"d:normal Great, I'm going to get started then!",
		"show message Minigame1",
		"jump chapter2"
	],
	
	"minigame1": [
		"show scene #000000 with fadeIn",
		"centered GoFundMe design minigame coming soon…",
		"show scene #ffffff with fadeIn",
		
		"jump chapter2"
	],
	
	"chapter2": [
		"stop music",
		"play music bgm2 with volume 25 loop",
		"show scene #000000 with fadeIn",
		"centered Two Weeks Later",

		"show scene cFullZoom with fadeIn",
		"c:normal Guess who passed all their midterms!",
		
		"show scene aTalkFour2",
		"a:normal Congrats, girl!",
		
		"show scene cSadFour4",
		"c:normal I really couldn't have done it without y'all, that extra cash really saved the day!",
		
		"show scene bTalkFour2",
		"b:normal Let's celebrate soon!",
		
		"show scene cAngryFour1",
		'c:normal I want to! But now I need to get serious about finding a job.',
		
		"show scene dAngryFour2",
		'd:normal Speaking of, I was talking to Evelyn from my history course, and she went through something similar last semester! It wasn’t an athletic scholarship, but she lost her academic scholarship.',
		
		"show scene aAngryFour2",
		'a:normal Really? Fatima was telling me the same thing about her sister too! She almost lost her scholarship when her GPA slipped below a 2.2.',
		
		"show scene bAngryFour1",
		"b:normal Seems so unfair! it’s so hard to lose scholarships so easily that we work so hard to get! I wish we could help everyone.",
		
		"show scene dAngryFour1",
		"d:normal Me too! But how?",
		
		"show scene dChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "d:normal What would you say?",
				"option00": {
					"Text": "Let’s brainstorm and make a list of all these issues to figure out where to start.",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter2Cont0"
				},
				"option01": {
					"Text": "Let’s ask around. It would be good to hear more stories and get advice.",
					"onChosen": function(){addOnePoint()},
					"Do": "jump chapter2Cont1"
				},
				"option02": {
					"Text": "I don’t really have a clue. But I’m ok with whatever ideas you have!",
					"Do": "jump chapter2Cont2"
				}
			}
		}
	],
	
	"chapter2Cont0": [
		"show scene aTalkFour2 with fadeIn",
		"a:normal Let’s brainstorm and make a list of all these issues to figure out where to start.",
		"jump chapter2Cont3"
	],
	
	"chapter2Cont1": [
		"show scene dTalkFour2 with fadeIn",
		"d:normal Let’s ask around. It would be good to hear more stories and get advice.",
		"show scene aTalkFour2",
		"a:normal That’s a good idea! For now though, let’s start by listing the issues?",
		"jump chapter2Cont3"
	],
	
	"chapter2Cont2": [
		"show scene dTalkFour2 with fadeIn",
		"d:normal I don’t really have a clue. But I’m ok with whatever ideas you have!",
		"show scene aTalkFour1",
		"a:normal Let’s start by listing the issues?",
		"jump chapter2Cont3"
	],
	
	"chapter2Cont3": [
		"show scene bTalkFour2",
		"b:normal Sounds good to me! So, is one of the issues athletic scholarships?",
		
		"show scene cAngryFour2",
		"c:normal Losing my athletic scholarship does really suck, but I think there’s bigger issues that affects everyone!",
		
		"show scene dChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "d:normal What would you say?",
				"option00": {
					"Text": "The bigger issues are expensive tuition, low minimum wage, and high interest student loans.",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter2Cont4"
				},
				"option01": {
					"Text": "The biggest issues are scholarship rules, low minimum wage, and high interest student loans.",
					"onChosen": function(){addOnePoint()},
					"Do": "jump chapter2Cont5"
				},
				"option02": {
					"Text": "Problems? What problems?",
					"Do": "jump chapter2Cont6"
				}
			}
		}
	],
	
	"chapter2Cont4": [
		"show scene cSadFour2 with fadeIn",
		"c:normal The bigger issues are expensive tuition, low minimum wage, and high interest student loans.",
		"jump chapter2Cont7"
	],
	
	"chapter2Cont5": [
		"show scene bAngryFour2 with fadeIn",
		"b:normal The biggest issues are scholarship rules, low minimum wage, and high interest student loans.",
		"show scene aTalkFour2",
		"a:normal I think instead of athletic scholarships, the issue is expensive tuition.",
		"show scene dAngryFour2",
		"d:normal I agree, because expensive tuition affects all students.",
		"show scene cAngryFour1",
		"c:normal So - expensive tuition, minimum wage is not a living wage, and high interest loans.",
		"jump chapter2Cont7"
	],
	
	"chapter2Cont6": [
		"show scene aTalkFour2 with fadeIn",
		"a:normal Problems? What problems?",
		"show scene bTalkFour1",
		"b:normal Athletic scholarships, minimum wage is not a living wage, and high interest student loans?",
		"show scene aTalkFour2",
		"a:normal I think instead of athletic scholarships, the issue is expensive tuition.",
		"show scene dAngryFour2",
		"d:normal I agree, because expensive tuition affects all students.",
		"show scene cAngryFour1",
		"c:normal So - expensive tuition, minimum wage is not a living wage, and high interest loans.",
		"jump chapter2Cont7"
	],
	
	"chapter2Cont7": [
		"show scene bSadFour2",
		"b:normal Those are all pretty big issues to tackle...",
		
		"show scene dSadFour2",
		"d:normal Should we start with just one?",
		
		"show scene aTalkFour1",
		"a:normal If we want to tackle tuition, we could start a petition to demand higher wages for on-campus student jobs!",
		
		"show scene cAngryFour1",
		"c:normal We could also organize a rally to demand the University Board decrease tuition!",
		
		"show scene cChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "c:normal What would you say?",
				"option00": {
					"Text": "We should plan a rally!",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter2Cont8"
				},
				"option01": {
					"Text": "We can start by writing the petition!",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter2Cont9"
				},
				"option02": {
					"Text": "I'm good with anything!",
					"Do": "jump chapter2Cont10"
				}
			}
		}
	],
	
	"chapter2Cont8": [
		"show scene bTalkFour1 with fadeIn",
		"b:normal We should plan a rally!",
		"show scene cFullZoom",
		"c:normal How would we do that?",
		"show scene dTalkFour1",
		"d:normal Looks like there are some good resources online. Something we can do right now is make a poster with the location, date, and time.",
		"show scene aTalkFour1",
		"a:normal Cool, let's start!",
		"show message Minigame2",
		"jump chapter3Rally"
	],
	
	"chapter2Cont9": [
		"show scene aTalkFour2 with fadeIn",
		"a:normal We can start by writing the petition!",
		"show scene cFullZoom",
		"c:normal How would we do that?",
		"show scene dTalkFour1",
		"d:normal Looks like there are some good resources online. If someone can write a draft, we can start getting signatures..",
		"show scene bTalkFour1",
		"b:normal I'll write it!",
		"b:normal ...And I'm done! Let's get some signatures!",
		"show message Minigame3",
		"jump chapter3"
	],
	
	"chapter2Cont10": [
		"show scene cAngryFour1 with fadeIn",
		"c:normal I'm good with anything!",
		"b:normal I liked the rally idea.",
		"show scene cFullZoom",
		"c:normal How would we do that?",
		"show scene dTalkFour1",
		"d:normal Looks like there are some good resources online. Something we can do right now is make a poster with the location, date, and time.",
		"show scene aTalkFour1",
		"a:normal Cool, let's start!",
		"show message Minigame2",
		"jump chapter3Rally"
	],
	
	"chapter3": [
		function(){progressChapter3()},
		"stop music",
		"play music bgm with volume 25 loop",

		"show scene #000000 with fadeIn",
		"centered One Week Later",
		
		"show scene aTalkFour2 with fadeIn",
		"a:normal Great work! We collected almost 5,000 signatures!",
		
		"show scene bTalkFour2",
		"b:normal Such a smart move to collaborate with other student organizations.",
		
		"show scene cAngryFour1",
		"c:normal And blast it out on social media!",
		
		"show scene dTalkFour2",
		"d:normal So, what's next?",
		
		"show scene aTalkFour1",
		"a:normal Let's find a way to get it to university leadership and show them how many students are affected by this!",
		
		"show scene aSadFour1",
		"So, how should we get our petition to the right people?",
		
		"show scene aChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "a:normal What would you say?",
				"option00": {
					"Text": "Let's contact student government.",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter3Cont00"
				},
				"option01": {
					"Text": "We can try to find an email for university leadership.",
					"onChosen": function(){addOnePoint()},
					"Do": "jump chapter3Cont01"
				},
				"option02": {
					"Text": "I have no idea. Wait and see, I guess.",
					"Do": "jump chapter3Cont02"
				}
			}
		}
	],
	
	"chapter3Cont00": [
		"show scene cSadFour1 with fadeIn",
		"c:normal Let's contact student government.",
		
		"show scene aTalkFour2",
		"a:normal Awesome! I emailed Uzo, our student body president. CC’d you.",
		
		"show scene bTalkFour1",
		"b:normal  Looks like she already replied! That was fast! Student government heard about our petition and we’re invited to their next meeting to talk about it!",

		"show scene dTalkFour1",
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "d:normal Let's build on this momentum and start organizing that rally!",
			'False': "d:normal I wish there was more we could do!"
		}},
		
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "jump chapter3AltStudent",
			'False': "jump chapter3Alt2Student"
		}}
	],
	
	"chapter3Cont01": [
		"show scene bTalkFour1 with fadeIn",
		"b:normal We can try to find an email for university leadership.",
		
		"show scene aSadFour2",
		"a:normal I emailed a bunch of people in the university leadership but I haven't heard back. I'll keep trying.",
		
		"show scene bTalkFour2",
		"b:normal Some good news! Looks like Gina in Student Affairs has been following the petition. She wants to meet with us next week!",
		
		"show scene dTalkFour1",
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "d:normal Let's build on this momentum and start organizing that rally!",
			'False': "d:normal I wish there was more we could do!"
		}},
		
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "jump chapter3AltUniversity",
			'False': "jump chapter3Alt2University"
		}}
	],
	
	"chapter3Cont02": [
		"show scene dSadFour2 with fadeIn",
		"d:normal I have no idea. Wait and see, I guess.",
		
		"show scene aTalkFour1",
		"a:normal So what should we do while we wait?",
		
		"show scene bTalkFour1",
		"b:normal We could keep collecting signatures?",

		"jump chapter3Cont00",
	],
	
	"chapter3AltStudent": [
		"show scene aTalkFour2 with fadeIn",
		"a:normal Let’s connect after our meeting and figure out what we need for the rally.",
		
		"show scene bSadFour2",
		"b:normal Sounds good to me! We should prepare for our meeting with leadership!",

		"show scene #000000 with fadeIn",
		"centered At The Meeting",

		"show scene studentGov with fadeIn",
		"centered",

		"jump chapter3Alt1",
		
	],
	"chapter3AltUniversity": [
		"show scene aTalkFour2 with fadeIn",
		"a:normal Let’s connect after our meeting and figure out what we need for the rally.",
		
		"show scene bSadFour2",
		"b:normal Sounds good to me! We should prepare for our meeting with leadership!",

		"show scene #000000 with fadeIn",
		"centered At The Meeting",

		"show scene principal with fadeIn",
		"centered",
		"jump chapter3Alt1",
		
	],
	"chapter3Alt1": [
		"show scene #000000 with fadeIn",
		"centered The Next Day",
		"show scene aTalkFour2 with fadeIn",
		"a:normal That went well!",
		
		"show scene bSadFour2",
		"b:normal Yeah, but I still wish we could do more right now. Like plan that rally!",

		"show scene cFullZoom",
		"c:normal How would we do that?",

		"show scene dTalkFour1",
		"d:normal Looks like there are some good resources online. Something we can do right now is make a poster with the location, date, and time.",

		"show scene aTalkFour1",
		"a:normal Cool, let's start!",

		"show message Minigame2",

		"jump chapter3Rally",
		
	],

	"chapter3Alt2Student":[

		"show scene cFullZoom with fadeIn",
		"c:normal I wish there was more we could do too! There's only four of us. How can we get more people involved?",
		
		"show scene bSadFour2",
		"b:normal Maybe we can form a student organization about student rights?",
		"show scene aTalkFour2",
		"a:normal Let's sync up after our meeting and figure out what that would look like! I like it!",
		"show scene bTalkFour2",
		"b:normal Sounds good to me! How should we prepare for our meeting?",

		"show scene #000000 with fadeIn",
		"centered At The Meeting",

		"show scene studentGov with fadeIn",
		"centered",
		"jump chapter4",
],
	
	"chapter3Alt2University":[

		"show scene cFullZoom with fadeIn",
		"c:normal I wish there was more we could do too! There's only four of us. How can we get more people involved?",
		
		"show scene bSadFour2",
		"b:normal Maybe we can form a student organization about student rights?",
		"show scene aTalkFour2",
		"a:normal Let's sync up after our meeting and figure out what that would look like! I like it!",
		"show scene bTalkFour2",
		"b:normal Sounds good to me! How should we prepare for our meeting?",

		"show scene #000000 with fadeIn",
		"centered At The Meeting",

		"show scene principal with fadeIn",
		"centered",
		"jump chapter4",
],
	"chapter3Rally": [
		function(){progressChapter3()},

		"play music bgm with volume 25 loop",

		"show scene #000000 with fadeIn",
		
		"show scene aTalkFour2 with fadeIn",
		"a:normal Now that we have our poster, what should we do now to plan the rally?",

		"show scene aChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "a:normal What would you say?",
				"option00": {
					"Text": "Let's contact other students and get the word out!",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter3RallyCont00"
				},
				"option01": {
					"Text": "We can start making a list of things we need for the acutal event.",
					"onChosen": function(){addTwoPoints()},
					"Do": "jump chapter3RallyCont01"
				},
				"option02": {
					"Text": "I have no idea. Wait and see, I guess.",
					"Do": "jump chapter3RallyCont02"
				}
			}
		}
	],

	"chapter3RallyCont00": [
		"show scene aSadFour1 with fadeIn",
		"a:normal Let's contact other students and get the word out!",

		"show scene bTalkFour1",
		"b:normal  Great! Contact everyone in your classes. And invite all the student organizations!",
		
		"show scene cFullZoom",
		"c:normal I'll get the basketball team to show up!",
		

		"show scene bTalkFour1",
		"b:normal  I can draft an email to send out to student email lists!",		
		
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "jump chapter3AltRally",
			'False': "jump chapter3Alt2Rally"
		}}
	],
	
	"chapter3RallyCont01": [
		"show scene aTalkFour1 with fadeIn",
		"a:normal We can start making a list of things we need for the acutal event.",
		
		"show scene dSadFour2",
		"d:normal We probably will need some sort of sound system.",
		
		"show scene cFullZoom",
		"c:normal We can sell snacks to raise some money!",
		
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "jump chapter3AltRally",
			'False': "jump chapter3Alt2Rally"
		}}
	],
	
	"chapter3RallyCont02": [
		"show scene aSadFour2 with fadeIn",
		"a:normal I have no idea. Wait and see, I guess.",
	
		
		"show scene dSadFour2",
		"d:normal We probably will need some sort of sound system.",
		
		"show scene cFullZoom",
		"c:normal We can sell snacks to raise some money!",


		"show scene aSadFour1",
		"a:normal We should also contact people in our classes and other organizations!",
		
		"show scene cFullZoom",
		"c:normal I'll get the basketball team to show up!",
		
		"show scene bTalkFour1",
		"b:normal  I can draft an email to send out to student email lists!",
		
		
		{'Conditional': {
			'Condition': function () {
				return this.storage('chapter3') <= 1;
			},
			'True': "jump chapter3AltRally",
			'False': "jump chapter3Alt2Rally"
		}}
	],	

	"chapter3AltRally": [
		"show scene dTalkFour1",
		"d:normal Looks like there's a lot of work, we better get started.",

		"show scene #000000 with fadeIn",
		"centered At The Rally",

		"show scene rally with fadeIn",
		"centered",

		"show scene #000000 with fadeIn",
		"centered The Next Day",
		"show scene aTalkFour2 with fadeIn",
		"a:normal That was awesome!",
		
		"show scene bSadFour2",
		"b:normal Yeah, but I still wish we could do more right now. Like writing that petition.",

		"show scene cFullZoom",
		"c:normal How would we do that?",

		"show scene dTalkFour1",
		"d:normal Looks like there are some good resources online. If someone can write a draft, we can start getting signatures..",

		"show scene bTalkFour1",
		"b:normal I'll write it!",
		"b:normal ...And I'm done! Let's get some signatures!",

		"show message Minigame3",
		"jump chapter3"
	],

	"chapter3Alt2Rally":[

		"show scene dTalkFour1",
		"d:normal Looks like there's a lot of work, we better get started.",

		"show scene #000000 with fadeIn",
		"centered At The Rally",

		"show scene rally with fadeIn",
		"centered",

		"jump chapter4",
],
	
	"chapter4": [
		"show scene #000000 with fadeIn",
		"centered The Next Day",
		"show scene aTalkFour2 with fadeIn",
		"a:normal It's awesome seeing how students can make such a difference!",
		
		"show scene bTalkFour1",
		"b:normal I had no idea we had so much power to change things.",
		
		"show scene cAngryFour1",
		"c:normal It feels good knowing I'm not just helping my friends, but possibly helping future students!",
		
		"show scene dTalkFour1",
		"d:normal What else can we do? Let's keep up this momentum.",
		
		"show scene aSadFour1",
		"a:normal We could keep raising awareness for other issues that come up?",
		
		"show scene bTalkFour2",
		"b:normal Plan more rallies, and get more petition signatures!",
		
		"show scene bChoice with fadeIn",
		{
			"Choice": {
				"Dialog": "b:normal What would you say?",
				"option00": {
					"Text": "We need to be a part of the decision making process!",
					"Do": "jump chapter4Cont00"
				},
				"option01": {
					"Text": "What if we run for student government?",
					"Do": "jump chapter4Cont01"
				},
				"option02": {
					"Text": "I would love to plan more rallies and get more petition signatures!",
					"Do": "jump chapter4Cont02"
				}
			}
		}
	],
	
	"chapter4Cont00": [
		"show scene bTalkFour1 with fadeIn",
		"b:normal We need to be a part of the decision making process!",
		"show scene aTalkFour2",
		"a:normal Let's start a club that focuses on issues that matter to students!",
		"show scene bTalkFour1 with fadeIn",
		"b:normal Yeah, then we definitely have a seat at the table!",
		"jump chapter4Epilogue"
	],
	
	"chapter4Cont01": [
		"show scene dAngryFour2 with fadeIn",
		"d:normal What if we run for student government?",
		"show scene aTalkFour2",
		"a:normal That sounds great! Elections are coming up soon!",
		"show scene cAngryFour1",
		"c:normal I'd like to run for office.",
		"show scene bTalkFour1",
		"b:normal I'll run the campaign!",
		"jump chapter4Epilogue"
	],
	
	"chapter4Cont02": [
		"show scene cAngryFour1  with fadeIn",
		"I would love to plan more rallies and get more petition signatures!",
		"show scene dTalkFour1",
		"d:normal I’m going to look for an internship that can help me build these leadership skills!",
		"show scene aTalkFour1",
		"a:normal There's a non-profit working on raising the minimum wage!",
		"show scene dTalkFour2",
		"d:normal That'd be perfect!",
		"jump chapter4Epilogue"
	],
	
	"chapter4Epilogue": [
		"show scene dTalkFour2",
		"d:normal Oh, look at the time! It’s already time for dinner! I gotta go, but I’m so proud of us!",
		
		"show scene bTalkFour1",
		"b:normal Awesome job everyone! Great work! I know it can be hard since real change can take a long time, but we can keep building off what we're accomplished!",
		
		"show scene cAngryFour1",
		"c:normal Yeah! And who knows, maybe by the time we’ve graduated, we will have made a real impact on this place!",
		
		"show scene aTalkFour2",
		"a:normal I have a feeling we will...",

		"show scene #000000 with fadeIn",
		"centered The girls take on campus leadership roles during their time at school.",
		
		"show scene aEnding with fadeIn",
		"centered ",
		
		"show scene bEnding with fadeIn",
		"centered ",
		
		"show scene cEnding with fadeIn",
		"centered ",
		
		"show scene dEnding with fadeIn",
		"centered ",

		"show scene #000000 with fadeIn",
		"centered Epilogue",
		
		"show scene hands with fadeIn",
		"show character p ending1 at center",
		"centered ",
		
		"show character p ending2 at center",
		"centered ",
		
		"hide character p",
		"show scene rally",
		"centered ",
		
		"show scene hands with fadeIn",
		"show character a ending at center",
		"centered ",
		
		"show character b ending at center with fadeIn",
		"centered ",
		
		"show character c ending at center with fadeIn",
		"centered ",
		
		"show character d ending at center with fadeIn",
		"centered ",
		
		{'Conditional': {
			'Condition': function () {
				return this.storage ('points') <= 4;
			},
			'True': 'show message Wader',
			'False': {'Conditional': {
				'Condition': function () {
					return this.storage ('points') >= 8;
				},
				'True': 'show message Diver',
				'False': 'show message Swimmer'
			}}
		}},
		
		"end"
	],
});

/* 'show notification Welcome',
{
	'Input': {
		'Text': 'What is your name?',
		'Validation': function (input) {
			return input.trim ().length > 0;
		},
		'Save': function (input) {
			this.storage ({
				player: {
					name: input
				}
			});
			return true;
		},
		'Revert': function () {
			this.storage ({
				player: {
					name: ''
				}
			});
		},
		'Warning': 'You must enter a name!'
	}
}, */