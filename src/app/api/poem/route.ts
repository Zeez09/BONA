// import { NextResponse } from "next/server";

// /* -----------------------------
//    🎭 LONG FORM POEMS (10 EACH MOOD)
// ------------------------------*/
// const poems: Record<string, string[]> = {
//   happy: [
//     `Sunlight spills across your morning like it finally knows your name,
// and everything that once felt heavy slowly starts to change its frame.
// Even the air feels lighter now, like it has learned to breathe with you,
// and every step you take feels like something warm and brand new.
// The world does not feel distant anymore — it feels close, it feels kind,
// like it has been quietly waiting for your joy to arrive in time.`,

//     `There is a rhythm in your happiness that no one needs to explain,
// like rain that turns into laughter after long and patient pain.
// Your smile is not just an expression — it is a language of its own,
// softly telling the world that you are no longer alone.
// Even silence feels softer now, like it has learned to stay,
// in the gentle way your presence turns ordinary into okay.`,

//     `You are walking through a moment that feels too good to rush,
// like time itself has chosen to slow down and hush.
// Everything around you feels aligned in quiet harmony,
// as if the universe has paused just to let you simply be.
// Nothing feels forced, nothing feels far, nothing feels out of place,
// just the simple truth of joy resting gently on your face.`,

//     `Happiness is not a destination — it is a light within your chest,
// a feeling that reminds you that you are already blessed.
// Even your thoughts feel softer now, like clouds that drift and play,
// no longer pulling you backwards into yesterday.
// There is something sacred in the way you now exist,
// like life has finally chosen to remove all the mist.`,

//     `You are glowing in ways that cannot be fully seen,
// like sunlight hidden gently inside everything you have been.
// Even your silence speaks in tones of quiet peace,
// as if every burden you once held has started to release.
// The world does not need to change for you to feel this way,
// because joy has already found you and decided to stay.`
//   ],

//   sad: [
//     `There are nights that feel heavier than they should ever be,
// like the sky forgot how to open itself gently.
// Every thought returns like a wave you cannot escape,
// and even silence feels like it has taken shape.
// You are present, but somehow slightly far away,
// as if your spirit is trying to find where to stay.`,

//     `Sadness is not always loud — sometimes it is slow and still,
// like time refusing to move at your will.
// The world continues breathing like nothing has changed,
// but inside you, everything feels rearranged.
// Even simple moments carry a heavier tone,
// as if everything familiar no longer feels known.`,

//     `There is a weight that does not ask permission to stay,
// it simply settles in and refuses to go away.
// Your thoughts echo softly in rooms inside your mind,
// searching for something they cannot seem to find.
// But even in this silence that feels too wide,
// there is still a part of you that has not died.`,

//     `Some feelings arrive without warning or sound,
// like shadows that quietly sit you down.
// You are not broken — just overwhelmed and worn,
// like a sky that forgot how it was born.
// Even storms like this eventually lose their place,
// leaving behind a softer trace.`,

//     `The world feels distant when sadness takes control,
// like you are watching life through a quiet hole.
// But even distance is not forever or true,
// it bends and returns when it is done with you.
// And somewhere beneath what feels lost and unclear,
// there is still a version of you that is here.`
//   ],

//   excited: [
//     `Something inside you is moving faster than thought,
// like lightning trying to become what it is not.
// Every second feels like it is about to break,
// into something the world has never seen or make.
// You are not waiting anymore — you are already in flight,
// even if your feet are still touching the night.`,

//     `Excitement feels like fire without a clear shape,
// like reality itself starting to escape.
// Ideas arrive faster than you can hold,
// turning silence into something bold.
// The future feels close enough to touch,
// like everything you want is just waiting as such.`,

//     `Your energy does not sit still or behave,
// it rises like a wave after wave.
// Nothing feels slow, nothing feels small,
// you are answering something that is calling you all.
// Even the air feels charged with your pace,
// as if the world has started to race.`,

//     `There is a spark that refuses to stay contained,
// like a storm that has just been named.
// You are not thinking in lines anymore,
// you are thinking in explosions at the core.
// Everything feels like it is beginning right now,
// and you are right in the middle somehow.`,

//     `Excitement is not just feeling — it is becoming,
// like a thousand quiet drums suddenly drumming.
// You are alive in a louder way than before,
// like you have unlocked a hidden door.
// And nothing about you wants to slow down,
// because everything is wearing a crown.`
//   ],

//   tired: [
//     `Your body feels like it has been carrying too much air,
// like every movement now needs care.
// Even thoughts arrive in slower tones,
// like they are returning home alone.
// Rest is not a choice anymore — it is a call,
// softly asking you to let everything fall.`,

//     `Tiredness is not empty — it is full and deep,
// like a river that has forgotten how to leap.
// Everything slows into a quiet frame,
// where even breathing feels the same.
// You are not weak — you are simply worn,
// like a sky before a storm is born.`,

//     `The world continues moving without your pace,
// but you are not required to win this race.
// Every cell inside you asks for still,
// not effort, not pressure, just will to heal.
// And in this pause that feels so wide,
// there is nothing left to hide.`,

//     `You are not failing — you are just spent,
// like energy that has already went.
// Even silence feels like a place to stay,
// where nothing demands anything today.
// And slowly, softly, you come undone,
// not broken — just needing none.`,

//     `Rest is not escape — it is return,
// to the place where you no longer burn.
// Even stars go dim to survive,
// so they can continue to stay alive.
// And you are allowed the same grace,
// to simply stop and rest in place.`
//   ],

//   neutral: [
//     `You are standing where nothing pulls too hard,
// not in the front, not on guard.
// Everything passes through your view,
// without demanding anything from you.
// This is not emptiness — it is space,
// where life does not rush its pace.`,

//     `Neutral is the quiet between two storms,
// where nothing breaks and nothing reforms.
// You are not falling, you are not high,
// just watching thoughts gently pass by.
// And in this stillness, something stays,
// a calm that does not need praise.`,

//     `There is no urgency in this breath,
// no weight of joy, no edge of depth.
// Just existence without demand,
// like soft sand in an open hand.
// Nothing needs to be explained,
// nothing is lost, nothing is gained.`,

//     `You are neither fire nor rain,
// just presence without any strain.
// And sometimes that is all there is,
// a peaceful pause in existence’s quiz.
// No direction pulling you near,
// just a quiet moment clear.`,

//     `This space you are in does not shout,
// it simply lets you drift about.
// And in that drifting, you can see,
// a different form of being free.
// Not loud, not heavy, not defined,
// just gentle space inside your mind.`
//   ],

//   "pissed off 😡": [
//     `There is fire behind your silence now,
// like something breaking its own vow.
// Everything feels too sharp, too real,
// like anger is all you can feel.
// But even fire cannot stay,
// it must eventually burn away.`,

//     `Your thoughts are loud in every way,
// like storms that refuse to decay.
// Nothing feels soft, nothing feels still,
// everything bends against your will.
// But even storms begin to fade,
// losing the noise they once made.`,

//     `Anger is a passing flame,
// not something that defines your name.
// It rises fast and speaks too loud,
// like thunder hidden in a cloud.
// But clouds don’t stay forever dark,
// they always lose their spark.`,

//     `You are not the heat inside,
// you are the space where it can hide.
// Even rage is just a wave,
// not a place you have to stay.
// And slowly it will come undone,
// when the burning is all done.`,

//     `Let it pass, let it move,
// you don’t have anything to prove.
// Even storms forget their sound,
// when they finally settle down.
// And beneath all that you feel,
// there is still a calm that is real.`
//   ],

//   "pregnant lizard 🤰": [
//     `Even strange thoughts deserve their place,
// like dreams that have no proper face.
// Not everything must be explained,
// some things are simply entertained.
// And even chaos has a tone,
// that still feels slightly like home.`,

//     `Your mind is wandering off the map,
// not logic, just a random snap.
// But even randomness has flow,
// in ways we do not always know.
// And you are still completely you,
// in everything your mind can do.`,

//     `There is humor in the unknown,
// in thoughts that are slightly overgrown.
// Nothing here needs to make sense,
// it is just your mind’s defense.
// And even nonsense has its art,
// a strange reflection of your heart.`,

//     `You are not lost, just in between,
// where thoughts become a playful scene.
// Even weirdness has its role,
// inside a bigger human soul.
// And this moment, strange as it seems,
// is still part of your dreams.`,

//     `Let the strange thoughts come and play,
// they are not here to always stay.
// Even chaos has a end,
// where it slowly starts to bend.
// And you remain, still and true,
// through everything your mind goes through.`
//   ]
// };

// /* -----------------------------
//    🎲 RANDOM PICK
// ------------------------------*/
// function getPoem(mood: string) {
//   const list = poems[mood] || [
//     "You are not your feelings,\njust someone moving through them.\nAnd even this moment will pass,\nlike all things eventually do."
//   ];

//   return list[Math.floor(Math.random() * list.length)];
// }

// /* -----------------------------
//    🚀 API ROUTE
// ------------------------------*/
// export async function POST(req: Request) {
//   const { mood } = await req.json();

//   return NextResponse.json({
//     poem: getPoem(mood),
//   });
// }