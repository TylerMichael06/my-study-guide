import { useState } from "react";
import TutorChat from "../TutorChat";
import LectureGame from "../LectureGame";

// Unit 2 — Core Architectures accent (dawn), matching App.js LECTURES entry
const COLOR = "#ff8f5e";
const ACCENT = "#ffb894";
const DARK = "#0c1512";
const CARD_BG = "#121f1a";
const BORDER = "#243830";
const BONE = "#f2f0e6";
const LICHEN = "#9fb3a6";
const STONE = "#5b6d62";

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

const TRANSCRIPT = `[Auto-generated transcript. Edits may have been applied for clarity.]
Welcome, everyone. It's another way. Can you actually made it?

Um, while you haven't, you just made it last week.

But this is a new wake you need to make through. Uh, before I even start, uh, I got something interesting to, uh, to get.

First, before we have the lecture today. But I can give you a quick overview for what we're going to talk about today.

Just give me one segue to open my slides. Um, so basically we're going to cover a few things.

Potentially the most exciting part will be. Will be this one.

Which means that a caw, caw caw stop for, you know, recurrent neural network LSTM transformer because everyone wants a transformer, even to us.

But before we even start, I will just give a few of the mean stuff and then we're going to, you know, get to the points.

But even before the real technical stuff, I'm going to share a personal story that's actually a guest lecturer I gave at a Arizona State last week.

I think it's well received. People are just because everyone's making decisions for their life decisions, career decisions.

Everything is about decision. I use my personal career as an example to share how how much detour I did and how I appreciate the detour happens.

Well, when you are in the detour, you may not have, you may not be happy, but it's okay.

A few a few quick admin stuff before we even start. The first thing would be people keep asking on the piazza Whether we have a quiz.

Right. Um, again, if you if since it's dynamic.

If you ask me if there's a quiz, I will always tell you. There might be a quiz or there might not be.

But again, we may actually trigger a quiz if the attendance is really low.

However, if there's no quiz by the end of the semester, we're going to distribute.

We're going to redistribute the quiz scores to the final report, etc., etc. so everything will be saved here.

You're not going to be penalized by something already happened, so you are not going to be penalized.

But since it's already happened. So don't worry. And for the person who are who who are in the dense session,

don't worry that originally the quizzes are not synchronized, so you shouldn't worry too much about that.

Another thing will be people submitted their project proposal and we're we're grading them.

And we have a lot of graders and a few and a few tears, as you know, they're going to gather feedback down by the end of the next, next week.

You know, everyone now is using that to write a report, everyone using it to review the report.

So what's the point for that? So that's why I clearly ask graders they don't need to write a long feedback.

However, that must be human feedback other than AI feedback.

Otherwise I can simply just put your report in a Gemini, spending a few cents to give you the feedback.

So don't worry, we're going to get you the real feedback. Bye bye bye bye graders.

And also then the team will review the feedback and provide additional additional ones if they have.

And then you're going to assign a to. So that will be your primary contact for major questions and research questions.

And also all the teams are PhD students there. I think two of them are from my lab.

And they're really a I think they're really productive regarding writing papers.

So they have a lot of great tips to share if you want to really make your projects something

bigger Before I make a detour for to share about some of the personal personal stuff,

I want to give a quick overview for where what are what are we going to cover today?

Originally we covered a convolutional neural network last time.

Remember, it's about spatial data, right?

If you remember sorry, it's not simply spatial data. We actually cover the data which are like images but images are pixels.

Pixels have a local region, so they are the spatial properties of the images.

We use a convolutional neural network using the filters to capture the local and spatial information smartly.

So this this this way we're going to cover something more interesting, not necessarily more interesting.

Also interesting called a recurrent neural network, which means we're actually covering the we're going to tackle the data which are sequential,

like a natural language, like a, like music, like video.

I mean, video is also imaging, but it's also sequential. So which means the previous state will decide the next state in the future state.

Uh, and if we're fast enough, we may also cover a bit of the graph neural network.

Usually. Usually you won't see this in the deep learning courses.

And however we will cover anyway because there's a resurgence of the graph neural network.

It will become less popular for a while but not become a popular again.

So basically we're going to talk about these structures in the deep learning, which means originally we learned a vanilla graph.

We learned a vanilla deep deep neural network, which means fully connected a multi-layer perceptron.

And then we go from the convolutions going to the sequential data, then the structured graph.

So that's actually the goal. But before that I will actually make a detour.

Uh, for sorry uh I'm actually close this.

Um, so, so so I was, uh, recently I was asked to give a give a guest lecture, uh, to an intro level programing course.

Uh, originally I was thinking what to share. Right.

Because, uh, you know, it's a it's a debating thing because now everyone's saying you don't need to do programing anymore.

And, uh, especially I'm teaching ACM potentially.

I should tell people you should master other than programing, but let's say that that's a programing course.

The person asking me to present there to share how programing change my life for sort of something like that.

And if I tell them you don't, you shouldn't do any programing at all.

This is weird. And so I think I want to more talk about how you find a career path through the programing and potentially AI.

Another thing that about the assignments, right. Everyone's also asking about assignment.

Finally I decided I decided to give one assignment and that will be released on the course.

That's actually put on the course schedule. It's not released yet. I'm still designing that.

And I'm now going to test for your capacity for purely programing or AI.

We're going to test your ability to use the app to tackle the assignments.

There might be tricky questions and so that simply using the agents won't work.

Remember we have a lot of world class researchers at these universities with

design questions smartly so that your AI may not actually solve it smartly.

Be careful. Okay, before we even start out, we'll use the 15 20 minutes to talk about its personal story, but I think I find that interesting.

Sorry, you have already said this. That's also AI generated.

I mean, that figure, that that image, people need to get a better,

better version of themselves using AI, which finally they find is just like illusions.

Um, Anyway, uh, the, uh, if you if I haven't talked about this before, you will say I changed my career multiple times.

I actually, I started as a computer engineering major.

Uh, I think I shared a story that I really hate, uh, you know, designing the analog signals or doing a simulation with the electrical circuits.

That something actually drives me crazy. So my first job is actually as an engineer and then become a contractor at Siemens for a few years.

Um, and after that, after that, I make a big change, uh, going to the race fraud and this data analytics at a,

at a consulting and slash professional business in Canada during 2016 to 2019.

I will explain why I make such a change. It's also weird. It's not an intention.

It's a it's actually it's because of the programing they pushed me there.

I couldn't do leetcode, but I will explain there. And a few years later I researched I don't want I realized I don't really want to do my job anymore.

I go back to academia and do my PhD and then I'm here.

But I will, I will explain, I will explain how each part bring me some insights and motivation to make the next change.

Maybe that will bring you some ideas as well. My first job is actually in very classical software engineering, which means,

you know, Siemens is a big firm and they have something called Siemens PRM software.

If you're designing a car or designing a plane, there are some 3D softwares that you need to work with.

So that's something called the PRM software. Anyway, by that time, what we're really working is about it's about C++ and another language called Perl.

You may not heard of it's a it's a script. It's a script language. And actually that job is my first job in my life.

It's very useful a lot of money in things because, for example,

you understand in some things and by the time I realized if I'm just if for the software engineer,

you're you're you're usually responsible for a very small piece of the functionalities.

Like they have a huge database, they have a huge code bases, and you potentially only maintain for 100 lines of code.

And your major goal is to make a change, potentially a positive change, without breaking it and check what's actually happened.

So, uh, so so so so so I will.

Sorry. It's a, it's a so it's a so it's a sorry.

Um, I think this is not a version I try to share.

Sorry. It's this is the wrong version. Now I realize why it looks pretty weird.

Um, give me one second. Uh. Yeah, I think I have a story version.

Um, maybe this is actually the one.

I think this is not a this is not right version, but actually I will, I will, I will find it out before I think I put it somewhere.

But let me ask my codecs. Are here we go.

Sorry it's a 7.1. So that's why I realize the story doesn't make sense.

Okay. Now it makes it makes it makes more sense.

Uh, okay. Okay. Okay. Yeah. Now everything looks great.

Uh, sorry that now I realize why I don't feel the slides make sense is because there's no story.

The first story comes back. Like, why choose computer engineering? The reason? Extremely simple.

Because I enjoy playing video games. Uh, I'm not good at it, but I really enjoy watching people playing that.

And by that time, my mom told me, if you really like it, maybe just do computer related.

So unfortunately, I choose computer engineering. I'm not saying anything bad about it, but I'm not really good at it.

I. I suddenly realized that. So I joined Siemens because they have a pretty simple interview question.

By the time there's no programing questions for me, they only ask some very basic concepts.

And my manager was a very, very nice, decent person potentially.

I have a lot of like, you know, managers in my life.

However, those teammates the same team is potentially the best one I have ever met.

Back in Cincinnati, Ohio. I really like them.

However, there are also concerned or troubled by this genetic change as well.

So what I learned at Simmons is that the basic, basic flaws of the software engineer, I mean, nowadays, potentially many of the people,

if you if you directly start from the Atlantic here, you may you may never really see the full lifecycle of the software engineer.

For example, you need to understand the things you want to make a change.

You make some small changes to the code base and you do the auto test plus the review potentially from another person, like a peer review.

Finally, you try to maintain your code as large as possible. Let's take an example.

For example, you want to make a report for some sales in a CSV.

You write a small commits, which means you change your first, the first one potentially just reading the data file,

and then you're handling the missing missing data, or missing sales or the missing amounts.

And finally you test on an empty file. So basically this can be three commits,

which means in software engineering you don't you usually don't plan to actually finish everything in one kind submission,

which means that it will be too hard to track.

And therefore the first thing I learned how to samples are not the same as statements is that how to use

the virtual version control and usually add each of the large firms that have their own version control.

They're not using git, they're not used in GitHub.

They have their own ones, which means there's a lot of like a hierarchy to approve the change of a single thing.

However, in the past, as a as a as an engineer, you need to remember a lot of like a gate command, right?

Like a diff add, push, commit, stash, merge, etc., etc..

However, I don't think people remember this anymore because you ask agents like this for me, or do the push for me or whatever.

And even people don't do this anymore. Just saying just push whatever you have done.

Um, so so so if you if you never heard of version control, you should because the genetic guy is more prone to address.

So which means you should potentially always do version control of your code.

And you can say, still the case where we're still following the classical source control with GitHub to do every change of the records.

I mean, originally this is for the general program in general for intro Python course.

So I have a more examples, but I don't think you need to know this.

However, if you are directly straight from other other than software engineer background,

you may not heard of a continuous integral integration, which means you want to make sure your changes are being monitored all the time.

Which means, for example, if you host your code on GitHub, they have this auto test.

You can design your auto test, they can execute auto test daily, or when a new change comes so that you can make sure your product is always smooth.

So if you have never tried a continuous integration, you should try it because it's a free for public or the open source library on GitHub.

So which means you make any change. This will trigger auto test on the GitHub and they will read the results.

So everything is using GitHub actions and everything is pretty smooth and free which is great.

Another big thing I learned at I think I will speed this up, because I just want to show you how my career change a lot of times,

and potentially you are also thinking what is a good turning point for you to do something different?

Uh, so so so another thing I learned at Simmons is writing something called a negative test.

So that's something agents are pretty good at, which may not be overkill.

So what's the negative test? Negative test just mean.

Usually you're testing what's the expected behaviors of your code.

Right. Like you're expecting the return results should be one or 2 or 3.

So that's you are checking whether the answer is correct or not.

However, in many of the cases you forget how to check the negative results, which means the exceptions.

So for example, if you're expecting the input will be a numerical number.

However, when when when the real case will give you a string, this will actually this should.

This is supposed to throw error rather than just process it. Because.

Because this is actually my, uh, my, my experience when, uh, for, for,

for actually breaking the product line at the same as for once, you know, every interim break like the product for once.

And they got freaked out. That was my freaked out because I never, I never know anything A negative test so that actually I break it up.

I break the product line and everyone's calling me what's going on?

And luckily you have source control. So you can you can revert.

So that's why using the genetic code you should always do the source control.

You want to make sure things are recoverable other than just let it go.

And with time goes by you will say a genetic code will be much more messy.

So just make sure everything's actually can be reverted back.

And after I finished my undergraduate, I think I was, I was,

I think I thought I was a pretty well rounded for a planning to, you know, master programs.

And I never want to do PhD in the first place. I never I thought that that would be a waste of my life.

And I may still think so, but I'm not regretting for doing such a decision, but by that time I only applied to master programs.

In total, I applied for around 12 around the world, mostly in the US, and this is the only exception in in Canada.

And but but unfortunately, all all 11 United States applications got rejected, including USC.

You know during spring break. That's around March, April, around March.

I think around March that actually I fly to California.

That's how many years ago, ten years ago or even 11 years ago.

I fly to California and I want to visit the universities I may be admitted to.

Right. I want to say what's my future may look like?

And while I drove around the California one, uh, I got rejections from all these universities in one.

I think that's including UC San Diego, LA use USC and also Irvine as well.

So I was pretty devastated. But however, I appreciate Canada and the University of Toronto who actually saved my saved my life.

They gave me a pretty late offer in December.

Sorry, sorry, not in December, in late in late April.

And then actually I go there to I went there to do my master's degree and soon enough I realized it's a good choice.

But also at the same time at first, for the first time, I learned something called a lead code.

Uh, that's actually the the miserable life. Uh, that's the beginning of my miserable life.

Because, uh, my my, my my program is called applied computing.

So it's eight months. Of course it's eight months courses, which means two semester courses plus eight months of the so-called applied research.

You need to get an internship somewhere to, to, to to fulfill this requirement.

However, for getting into an internship, you need to know some of this lead code.

And that's the point. I start knowing this.

I think by that time things are not was not that crazy? I think late code.

There's only a few hundred questions, but still the case I don't have.

I don't have it with me. But you may heard of that book, the classical book called Cracking the Coding Interview.

Uh, there's multiple versions. And, uh, you know, I took a lot of notes.

I even wrote my own a few, not 100 pages, but around 87 pages.

My own notes. I think if I one day I made it, I will actually share with the people.

But I didn't get that chance. This in C++, you may not want to see it.

So that's why. Actually, yeah, because the original audience is for intro programing course students.

But you already know what's the code, and the code clearly is not my strength.

I got, I got, I got, I got pretty anxious during the coding interviews.

It's very stressful for me for doing this in 20, 30 minutes.

And I talk it through, uh, it's just too much for me.

And luckily I so, so actually, that's why I took the opportunities at a non engineering firms.

It's the price of the Cooper house as you know it's an auditing and assurance and consulting and tax and law firm.

So which means they have a lot of like branches. However they don't test you on the coding interviews at all.

I just go from some like a case interview.

I'm not sure whether you heard of the case interview, which means they give you some cases that you to crack.

So I totally moved from the classical engineering and move to this business analytics world.

Uh, it's great. It's great because by that time I find I'm the only few person who really know, uh, programing or so-called AI at the firm.

So you got a lot of luxury to tell people I want to do this because I have other emergency or priority to work on.

which is great. However, this business analytic work actually helped me to identify new fields called a fraud detection because we are

working with the banks and they want to do the risk modeling whether to give a credit to a specific customer.

So I started learning some new fields and a student still.

Even nowadays, if you're doing the programing or AI, you know all this.

The financial industry is actually asking for the person who knows it's right, like a two Sigma, Blackstone,

Apollo, etc., etc. even though it's all 2026, everything is centered around the, you know, Python AI workflows.

I'm not sure what will the job description in 2027 will look like, but we will say but still, nowadays people are still putting the python there.

Maybe AI help them to write this job description as well. To always center on Python.

Uh, however, I actually learned some new problems about bank risk and risk modeling, which is great.

I'm not going to talk about this, however. However, what I try to say that at PwC I learned some new things.

I find it's really interesting. So I find a new new new fields called anomaly detection.

And actually this this actually changed my next ten years because interestingly enough, I think it's a very classical topic.

However, when I try to use Python for anomaly detection, there's no mature Python library for it at all.

And therefore, therefore I was thinking, if there's no such a good library, why don't I wrote one by myself?

So I start doing something. Just put on the random things on GitHub for anomaly detection again.

Now you can see how the story actually pieced together, right?

Like I started knowing what's a GitHub source control how to actually write some test and continuous integration.

And then I find that I find my interesting topics through some random stuff.

And I wrote my first open source library and, and actually through ten years is now become an ecosystem with millions.

It's not even millions. It's 60 millions of downloads and users all over the world.

Now, I think recently it actually achieved the ten GitHub stars.

However, but but as you can say, uh, you know,

the very first one started from nine years ago by some random nights or the weekends at the post office.

I started doing this randomly so you can see life is. It's weird.

You can never predict what's actually going to happen.

And also because of the library, my, uh, my PhD advisor got me the offer because an architecture is quite a niche fields,

and there's not too many people want to do it. But my library shows my interest and motivation for it.

So actually, Shea Shea gave me the, uh. She gave me the PhD offer.

Even without, you know, even I don't have a strong research background again.

Nowadays, if you want to do a PhD, it's a similar sense. There's there's so many research paper around, and people are a lot of people.

Great candidates gather great papers. However, if you want to differentiate,

you want to say you want to show that you actually enjoy the research directions that your potential advisors are doing.

That might be a, you know, actually a hack, an open source or whatever it should.

Like, not everyone should do the just purely research papers, right?

Like that's overkill. Uh, so that's why I'm always saying if you haven't, if you haven't done anything about open source, uh, you should try it.

You should try to contribute to some, like, uh, public art, even other people's open source.

You can find some, like, open issues, make some small changes to the child can propose a pull request to make a change.

You know, it's good. Numbers that were still is still evolving.

Yeah. So fast forward I mean it's a library helped me to get my PhD.

Even my PhD. I'm not doing purely computer science right. Like I'm doing a very diverse stuff.

We're doing information system and management, which means technology, organizational theory, business decisions.

Uh, it actually cost me another headache for taking that so-called econometrics and advanced econometrics,

which means that you're learning the causal regression. Whatever, whatever.

I never used it in my life, but actually it gave me a great headache. But when things passed, everything's great.

But I mean, all these great opportunities helps me to get more, you know, awards and fellowship, etc., etc..

Till now, we're still programing. This is a 2026. We already made a around 5000 commits this year.

But of course, I think 90% is by cloud or codex, recently by Gemini.

But of course, under my supervision in a sense. Uh, so so you can say, yeah, even my library now is Atlantic for this period.

Three I introduced the genetic AI parts, which means agents can now do a non detection with the library other than just writing the codes.

Everything's evolving. Um, yeah. So I will still fly through, uh, a few things.

Um, yeah, I think the, I think, I think I think my, I think recently, as I mentioned,

I start a this year, start something new direction called the AI auditing.

And I even built this a small called media called Audit Commons to share the learning materials and the news and etc..

I think the life is, uh, it's very weird or random because, uh,

I do all this random things, even this auditing thing may be traced back to PwC, right?

Like I'm not doing the real auditing, but now we're auditing AI or using AI for auditing.

So so now everything looks like a well connected, like all this random experience now becoming something more logistically connected.

So so that's why. So that's why originally I shared this talk I will fly many of this because you don't need to really know this.

Um, sorry, sorry. That's the end of the personal story.

All the story I want to share is about, uh, you have done many things in your in your, potentially in your past life,

and some of them are, some of them are not, and some of them are not even about technology.

But I think finally things will piece together. You will add at certain moments you will find these things actually make a click.

And it's a it's a very interesting. So don't be too worried about many things.

Okay. I think I think USA is making a good progress on getting this.

A lot of like internship things coming back policy wise, which is very good.

Um, but again, whatever you're thinking this way, like five years ago, not five years ago, I think.

How many years ago? Um, around around 15 years ago, I was working on how to design the electrical circuits.

Much better. Around ten years ago, I was selling the power points to the business clients for how to find their, you know, bank fraud.

Five years ago, I was working my advice with my advisor, which means under big pressure for publishing papers.

And now, you know, I'm just here to teaching you this amount course and of course, have some other jobs to work on.

But as you can say, people's life change can be drastically. And, uh, so, so so you will say, where are you going?

Don't be too worried, because a lot of people are anxious around the around current job situation and technology change, right?

Uh, it's a crazy but interesting time at the same time.

Okay. I think we're going to talk about some real technologies, including, uh, people really want to know more about large models.

Architecture, including the Transformers. Uh, so back to the original technology parts.

Uh, so we will first go through this something called speech recognition, but we're not going from here.

It's more like we're going to using this as a motivation, as you can say, a part of this audio.

It's the sound of something. It's actually a sequential thing, right?

For example, if you actually split things into small pieces you can have a multiple.

You can have you can have multiple, uh, small, small clips and uh, for the speech recognition if you want to really understand each of this.

For example, the characteristic or the word or even the sentence.

So one idea as we're learning from deep neural network, potentially you can actually split them.

And for each of them you're making a prediction. Say you have 10s of the audio.

You split them into one second by each part, and then you predict the letter of the each word that that might work, right.

But what's the any limitation for for for this approach the big thing will be just like just like the images,

the audio themselves have their own structure. For example, they are consecutive.

And the word by word, word character by characters.

They have their internal structures, which means they are consecutive. They're sequential.

If you train them independently, you're going to lose the structure and you're going to lose the context.

So you shouldn't consider them as independent, you know, small clips.

There's some internal structures, and even you do the larger clips.

For example, every three seconds, every five seconds you're still missing the connections between these two parts.

So, so so what we're really looking for is that whether we can really model the sequential data smartly,

rather than treating them independently and other than, you know, audios, there's also the natural language, the writings,

all these things are actually sequential because, you know,

your next word depends on likely depends on the previous words and even three words before so so so so so the future depends on the past,

at least for this type of the sequential data.

And it's almost everywhere for for example, captions image caption generation and also for these videos.

Right. Like as we're saying, even for a video, if you consider each of the clip are there the like.

This is the time. One. Time two times three. So the they're actually zero consecutive.

And that's why most of the most of the video analysis based on first of all like a building

some time windows to split your larger videos into the smaller ones and do the analysis.

Uh, so so so if you remember in the first lecture we already talked about the current large language models are autoregressive,

which means your next generation, your next token generation based on the previous ones.

So for example, let's take an example here, which means what's my example?

Um, like once upon a time. Right. Like so if your context once upon then the next for the next token generation,

there might be a few choices like a time light, and each of them are sorted with some probability from 62, 62%, 23 and N15.

So their probability depends on whatever you already observed.

So which means you scores the next token, which gives you the largest probability as the generation.

Then your next token will be once upon.

And then you're going to the next target generation, which means you are going to sample from some other candidates.

Like this time the time maybe have the higher probability because in the training data you're already saying this phrase or terms multiple times.

So the autoregressive just the mean factorization and the targets.

It's not a it's actually just simply meaning like we're going to generate something new based on the past,

based on the current, based on the based on the current context.

However, sequential data somehow are harder than image data in a sense, because most of the images they have a pretty a fixed size.

However, for the sequential data, you will say a big house and a car on the road.

They have different lenses, right? Like three word, five word, ten words.

and they have different lenses.

And you want to make sure whether there is a unified model that you can learn from the different lenses of the languages or the sentences.

Of course, the simplest way is that if you can pad right, like if you pad two more words here,

like you just pad two more words so everything becomes five, become five word sentence to learn.

However, that's not optimal because there's a very long sentences and there is no sweet spot.

You can break down everything into a very common length of the sentence to learn everything.

Therefore, we need a computation. So which means this can actually continue when your sequential sequence becoming longer and longer.

And they have very dynamic format. So here we come.

Here we come to this recurrent neural networks. I know people are not using this anymore.

However people may still use this somewhere in non-science fields because they, you know, in this world there are so many journals and the conference.

If one day you are doing your PhD,

you will realize there's only a few conferences are worth to submit 90% of the conference and the journals that are business,

they just ask for your paper to publish it and pay for the registration fee and the publication fee.

In this type of we call the predatory journals, you can still say that people are using recurrent neural networks, some old,

old school stuff to to make some random weird papers anyway,

but we still want to understand a bit of this recurrent neural network and their motivations.

So here's a vanilla deep neural network, right. Like you are you are going to have the input and you're going to have the output as well.

However, for the however for the for the for this recurrent neural networks there there might be multiple different.

Sorry. Where's my mouse? Um. Sorry.

Okay. For the recurrent neural networks were handled in different types of the task.

For example, for the image captioning. You got a sorry, you got a one image.

Can I actually change it? Oh, perfect.

So for the image captioning you can say you have one input. That's the image.

And then you get a one to many relationship, which means you are going to predict the captions of the image.

And for another one that will be this many to many, which means you have multiple actions in time and you want to,

uh, you know, make the next action you can actually want.

You want to classify the actions. And there's also many too many.

Because when you are doing the video captioning right, like each time you get a multiple,

uh, clips in and you want to output the current captions of this.

So which means that will be many, too many. And there's also multiple choices of the many to many, which means uh, you can on the frame level.

You can also do the multiple classification at the same time.

So you can say for the recurrent neural network or for this type of the sequential problems,

you have all sorts of classification and input and output pairs, including 1 to 1 and one to many, many, many to one, many to many.

Something like that.

And originally we're learning this type of neural network, which means that it's fully connected and everything looks pretty standard symmetric.

However, when you are going to this real world, you know, recurrent neural network or real world neural network, so everything can be pretty messy.

Like they can connect to each other, they can connect to other things, and the output can be the input as well.

We're going to explain this in a bit.

So here we look into the structures of the recurrent neural network.

You have the input x and this is your prediction YY12Y4. And here will be your neural network H1 to H4.

And now the question will be how can we parametrize this?

Deep neural networks. Right. Because now you are going to make four predictions at a time, or you're going to make multiple predictions.

So one idea will be can we give each of this deep neural network a separate weight?

I mean, the theta one here just means the weight of the deep neural network for this y1 y1 prediction.

And this is y2 prediction. So so simple is the way that you can actually have a multiple deep neural network each for predicting one state.

Right. Like from 1 to 4. So you have a sorry. So in total you have multiple deep neural networks.

This is a deep neural network. And I mean this is a deep neural network.

This is also another one. This is another one. But you will see the issue very quickly for handling the sequential data in this setting.

The setting will be the following. Let's say for the first image caption generation this is a big house right?

Like there's only three words. You're going to output three words here, however, first, separate the ones that occur on a tree.

So that would be five, right? So you will see for different lengths of the structures.

You are going to have a you need to have a different deep neural networks.

So basically for this one you need to have a three deep neural network to predict three letters 3333 words.

And for this one you need a five deep neural network for for predicting, you know, five words.

However, there's a lot of different captions from like maybe one word or two, hundreds of words.

So each of them are different. And then you will have an infinite number of the, not the infinity, but you have too many numbers to train.

And that's not efficient. So so we don't really want to actually have a separate weight matrices where the

parameters for each of the deep neural network here for just like one more,

you know, output, we want to actually find a way so that we can, uh, saving the parameters.

Right. Like, they can be they can be sharing some parameters together. So so therefore.

So therefore for this so so so therefore the cool idea for the recurrent neural networks

will be can we actually reuse the same update or the same neural network weights.

So which means for a new position we don't need a we don't need another separate train neural network.

We can actually reuse the original ones. Therefore therefore.

Therefore we don't need this a position specific network. And we don't need more parameters when the length grows.

So which means this is a so so so this is this is a batch settings which means you for each

of the for each of the positions you get a separate deep neural network and the weights.

What we really want is that if they can actually share the same weights right,

like so that so that we, we no longer worry about the length of the sequence.

So this can be 100 words, but they still share the f theta among all the positions.

So that will be the same weights theta changing inputs and previous state.

But the question here comes right. Like if all the waits. If all the if if all these weights are the same.

Then how the how the prediction on different predictions will be different then.

Then the answer will be simple, because this also depends on the positions and the previous states.

For example, when I have one one predicting on this first position, this will be a car.

Sorry. And then the prediction of the car.

Also, depending on the state from the first position and plus some input from the second position.

So that will be different from here. Therefore the car the prediction of the car depends on both of itself and also the previous state.

Similarly the third, the third, the third word here I mean on actually depends on a car.

I mean both of the states and then itself as well.

So you can say even they share the same sway, they share the same weights because of their positions are different,

their previous dates are different, so they have a separate input and they're going to make a different inputs.

So therefore we can reuse the learned transition. But we have a different prediction set positions.

So this is actually the recurrent neural network because which means they share the same weights as we're showing here.

However because because of the because because you can say the prediction f here depends on two things.

Both of the weight matrices but and also the state.

We call this a hidden state which means you usually don't observe them. But these are changing throughout the time.

So which means this prediction depends on h1, h1 and theta.

However, the second prediction depends on h2 of and theta.

However, the H2 is actually depending on h1. So which means.

So. That's why the y1 to y4 is very different. Even they share the same theta because HR difference.

Uh so yeah actually this slide is actually explain what I'm saying again.

So which means even they share the same. They share the same weights, but they have different states.

So therefore the prediction will be different. So. So you're not going to predict a car car car car four times or four times.

So so so therefore the sharing state doesn't make the hidden states or prediction or predictions identical because the states are going to change.

So for general recurrent neural network let's put their formulas or structures here.

Uh, so we can process the sequence of the vectors.

Because at different times you get different x. And applying these recurrent formulas at every timestamp.

So here's the output prediction. Or here is the hidden state formulas which means the hidden states at hidden states at time t,

which is which is a function of your shared model with f, sorry, shared with or shared shared model with w.

However, this function's input, including the current timestamp at timestamp t, this is the input of x and also the previous hidden state,

which means the next time state depends on the previous and the current inputs.

So. So which means the new state is depending on both of these two things.

Therefore this will be recurrent and you will see this the recursion somehow. Uh, and again now we only need to parametrize this with the matrices W.

And this is shared across all the states. Um, so, so if we look at this a little bit more carefully,

when we actually expand the formula for the vanilla recurrent neural network, where what happens will be your timestamp,

your hidden state, uh, hidden state at timestamp t, uh, let's say, uh, if we expand your f of W, recall, this is a nonlinear activation.

And in this there's some weight matrices.

Uh, so so so basically you have the weight matrices multiplied with the old state and you have the weight matrix separately.

Multiply with your current input at timestamp t. So which means it's a simple like a distribution distributional rule.

So that's a very simple stuff.

And finally you make the final output prediction which means you make the prediction of your y depends on w h y and h of t which h of t is here.

So which means this formula. This formula actually explain what's happening here.

And the variety depends on what happened. What happens here. So you make a final prediction therefore.

So therefore again when we talk about like you don't need to write your own code anymore

nowadays you don't need to do the you don't need to do the gradient descent or the computation,

but you just need to do this. The computational graph. Right.

For example, this is your hidden state zero, which means we're just starting from like initial initial position.

You have the first input. And using the shared model weights.

You calculate a second, you know a not second the first hidden state,

and then you plug this into H1 and x2 into the shared model with you, calculate the hidden states and etc. etc. you can just keep going.

And again all this model model weights are shared.

They are all w. So which means you don't need to. It's very efficient when computing these sequential relations.

So f w will actually learn the sequential dependency or some of this.

Some of them, some people call this a sort of like a it's not a real memory,

but sort of there's some memory components we're going to explain when we talk about the transformers in the second part of the lecture.

So we're going to say how the transformers are developing are developed on top of this recurrent neural network and why they become the bottle,

why they become the foundations of the large language. Models are so, so, so, so, all the model weights are shared.

And and we have this prediction for the for the Y as well.

Uh so which means given the hidden state one you have a y1 prediction.

Y2 y3 y4. Or depending on different hidden states again even the weights are shared.

But because the hidden states are different so the final predictions will be different. So that's why they can generate different things.

And how to do the how to actually do the gradient descent or optimization.

Again, once you make the y1, y2, y3, y4 or whatever prediction, you can calculate the loss, right?

For example, if you in this case is a let's say this is a French French, let's convert it the French to English.

Then you have a multiple, you know, maybe French here. Then you want to convert it into a maybe.

Sorry, it's not a good example because it's not a it's exactly 1 to 1 mapping.

For example, let's say this is exactly like a general language generation.

You gave the first word. Let's say we have an exam.

Maybe the next prediction will be half, and this half will be used as the input of the next state to predict the next token.

So but anyway, because you can make the predictions at a using this y1 to y t, you have the loss function.

Maybe this L2 loss or whatever loss. You can calculate the total loss function and then doing a gradient descent back.

Uh so. So. So it's very straightforward.

It's just like a general computational graph for saying, uh, as long as you can describe how the loss is calculated.

Right. Like the loss is actually calculated by the predictions of the y1 to y t minus the ground truth.

Then maybe you do the L2 norm. So therefore you have the loss function. And then they will do the automated.

Everything will be doing the automated differentiation. However the prediction of y depends on h h1 to h4 as our h2 and h depends a previous date.

I mean, for example, h2 depends on h, h1 and x, so everything is connected and you can write the loss function smartly.

So PyTorch or TensorFlow will do the optimization for me.

Again recurrent neural network actually makes the the computational graph very flexible.

So you will say this is a classical magnitude one right.

For example, if you just want to let's say summarize the sentence into a one word.

I don't know whether this is such a task, but I'm just making it up. Uh, then you simply have y one, you know, predicted predict number.

You can calculate loss here. You can also do this like input image and then generate the captions of the image.

Then you have a multiple word as a captions here. So therefore this is a classical one to many.

And you can also have a you know many to many. You can also pat something there.

So it's very so so. So it's actually so. So it's actually very flexible which means you can you can combine many things together to.

To make your stuff again. We're going to revisit why things are going.

How how can we actually making these predictions. Making sense right.

For example let's do a characteristic prediction.

Your first one will be age. This is your current input. And potentially the next character target will be E.

Let's say just once you filled AGL.

This is the current input for L. And we're going to predict next as L as well.

And then your next your current inputs will be L again. But your next prediction will be oh.

So you will say even given the same current input.

Your next character target will be different. The reason is because your prefix which means your contacts.

Previous contacts so far are different. AGL the next probability will be 11.

HLL next probability will be oh, so. So that's why understanding the prefix or tracking the contacts is very important.

It's the same input I. However this will give you different stories. So you will say where we carry this information is because of the hidden states.

Uh, and actually this is a more visualized version of the character.

Character level language model. Right. Again, by the end of the the hidden layer.

The hidden the hidden state is calculated by this, you know,

non-linear activation with matrices times with the last, the last hidden states plus the the current current x.

So you can say this is the current. For example, let's take in the t equal to one or t equal to two.

As an example this is x two right. Like this is e and this is your h2.

The h2 I mean the hidden state h2 depends on the input from the h1.

So H1 is actually going to be plugged here.

And you have some weight matrices and your exit, which means this easing will be plugged into this here as well.

And then you calculate your H2. The H2 then will be used to predict okay the next letter should be L something like that.

So. So so the computation is extremely straightforward.

Another very good property of the recurrent neural network will be your previous output prediction will be your next input token.

Right. For example once I say h.

Next prediction is e and the e will be plugged into my deep neural network again as the new input data at the time at timestamp two.

So which means then based on h and E I'm going to predict a L.

So which means your input or your input comes from your previous output.

So this is more so. This is why it's autoregressive. If you haven't seen the previous predictions, you wouldn't be able to make the next prediction.

So the past depends on the future, and your new prediction depends on the past predictions.

So that's a very classical character level language model sampling.

So that's why again we're saying a lot of times for the large language models generation,

if you're running something like a large model on your computer, for example,

if you are using a mac and if you're running a small model,

you will say the word are being spilled out like a spilled spit out, like a word by word, by word by word.

It's very slow, but it's word by word because the new generation is based on the previous generation as well.

It's a it's a it's a sequential. It's a there's no it's no great.

At least at this moment it's very common that you need to wait.

There'll be some mathematical there will be some mathematical Details for how to really do this calculation.

I'm not going to expand, but you are welcome to check it out.

But again this is again this is. This is your X embeddings and this is your W.

And you do this dot product. You will calculate this.

You do some hidden layer calculation. But it's it's very straightforward.

Uh and the question here will be how do we know what will be the next, next highest probability prediction.

Uh, because because why do for example, uh, for example, if we have the if we have a starting from this single single word,

should that be a dog or a cat or a fish or a human or whatever?

How do we know the next, the next highest probability words.

Uh, so that depends on your training data. Right.

So so so so what how we're training this large language model is that where we're sending up all possible or all feasible language corpus to it,

like all the language, all the sentence,

like all the novel or whatever, since even, for example, including this instructions here saying hybrid learning experience,

for example, the hybrid next word by this training that will be learning right.

So if you have a enough like a training examples like this, you're going to really a knowing like around a human word.

What would be the next highest probability has the probability word for it.

But then your question will be if that's the case, uh, how how why the large language models can answer my questions.

Right. Because your questions becoming the prefix. For example, if you're asking what's a weather today.

So sorry this is not a. So they need to use the website. They need to use the network to search.

Let me change another question. For example you are asking what's the color of the sun or what's the color of the.

What's the color of what? A basketball. Right. You're going to ask this question.

This becomes this. Then this becomes the prefix or the context of the large language, large language model generation.

Then they're going to say given what's the what's the what's the color of the basketball?

What's the color of the basketball. Then the next possibility that's next possible highest possible generation will be what?

It's more. It's more complex than that.

But the word just showing you that the prefix will prefix or the context clear will decide what the generation will look like.

And because you're going to evaluate, you know, the context or the prefix here, then then the generation will be totally different.

So in this case. So in this case the word target is dog right.

Because this is our training data. We're training samples the dog runs.

And therefore the next prediction will be dark or something like that.

However. However. Unfortunately. What if. What if we're top predictions?

Cat. It's still okay. It's still okay. However.

However. However. However, this can still give you some like a very fluent.

For example in the generation you prompt a sorry u prompt and the model choose cat.

For some reason it's still okay because then it will say a cat, a cat eats or the cat runs as well.

So so so so that's why.

So that's why in the free rating, which means you can continue with a lot of different things if you have no choice, if you give no prefix.

So this will give you the highest probability word in their training data.

If they're training data the most possible thing will be a dog that will be a dog.

If you give another thing. If you don't give any instructions, the free writing will just give you whatever the training data gives the model.

So which means that will be a cat or dog or whatever the training. It depends on your training data, right?

However however, if you give the prefix. So if you describe the photo shows the dog, then which means you get the prefix encoded into the context.

Then if you just predict that the cat that's wrong because you're going to, you're actually making the mistake.

Again, the past depends on sorry, the future depends on past.

So here's a very old example showing showing how how language model can learn how the Shakespeare are writing.

This is if you're just using Shakespeare's work to train a lot, to train a language model, not even a large language model.

It's not enough. But it will say when you're training more and more, then it looks like more like a human writing.

And I'm not sure I haven't, I haven't written, I haven't read too much about the Shakespeare, but, uh,

look like maybe this is getting closer and closer to the writing style from nonsense because again,

they are not really trained to gather intelligence in this small language model,

but they are trained to memorize how the words are going to be the being the terms.

And then the next question will be how to train this language model or sequential models.

Remember, remember in the deep neural network where doing this backpropagation,

you do the forward pass and then you calculate the loss and then you do the backpropagation right.

However, for the recurrent neural networks things are slightly different. So so recall this is all these are inputs and these are hidden states.

This will be your prediction Y. You can calculate the loss for each of these y.

You summarize them over. That's all good. And then your then you can do this one giant backpropagation right.

Like your back propagate from everywhere.

And obviously you will see this is a crazy thing because it's a it doesn't look very simple or Simple, straightforward add up.

For example, if you if you only got six states or eight states and you calculate each of them,

each each loss of them, and then you do the backpropagation, you need to save all the intermediate activation.

If you remember, it's a chain rule. It depends on especially in this case, the the future depends on the past.

The back propagation. You need to ask you to remember everything as the intermediate steps in the intermediate steps to do this gradient descent.

So if your backward pass is really long you need a lot of like a memory.

So that's why in the past recurrent neural networks are.

So that's why recurrent neural networks have been there for decades.

But it doesn't give us anything look like a like a huge language.

Models that are getting into people's exciting and fears or the anxiety at the same time.

So so the idea to an idea to make this a tractable will be doing this shorter spans.

Which means if you have very long states, maybe you just, you know,

group like different losses into different chunks and you're going to do for each of the chunks,

you are going to summarize or average their loss and propagate other than just doing every single step.

So therefore you are uh, so basically you are just averaging things out where you are grouping things to reduce the long dependance.

But of course, when you are reducing the dependency, you are losing something, right?

Like this version is more refined or give you more details.

However, it's very hard to train, but in this one you try to group things together.

It's a much simpler but also add also at the same time this will be coming, you're potentially losing some of the information.

However, it's still a very good way to do this throughout the time and sequence.

We call this a truncated backpropagation through the type.

For example, you just got a let's say three, three, three, three chunks and you calculate the loss here and do the backpropagation gradient descent.

Then you start. Then you go to the next one. You go to the next one.

So, so therefore it's slightly more easier for you to to do it.

And then you can carry the same state between the between the chunks.

So therefore you can save the memory. This can be faster. But of course there's a so there's a there's a, there's a sacrifice as well.

However this helps us to train a very deep, deep recurrent neural network smartly by not relying on a huge backpropagation because as you can say,

the gradient flow for the vanilla or recurrent neural network will be something look like this.

This is your input axis or W you calculate the hidden state here and then making the prediction y, right?

So if you expand everything that looks like this this is your weight matrices for a h h t h t minus one,

which means this is a weight matrices for last hidden state. This is your weight matrices for your new input for XT.

So this. So the weight matrix has two parts. This is the first part, is the second part and multiply with the previous state and the current inputs.

So for the back propagation from the h2 to t minus one you need to multiply things together.

So which means if you take the derivative you will say you still need to use both of the w h and you.

You need multiple different parties and taking the tangent as well.

And if you use the chain rule from, let's say from a very long place, like a, from a very faraway place,

let's say time t and time t, you know, derivative of w, then you need to go through very, very large multiplication.

So this may ring a bell that in the past we're talking about.

If you have a long chain rule multiplication. What will happen.

So there will be two things may happen. So so so if you're so so if this actually is smaller than one.

So which means there might be some vanishing gradient issue which means you multiply.

You multiply multiple numbers smaller than one. It's getting smaller and smaller and smaller.

You are losing the signal of the activation. However however, if you have a if some of this you know, I don't think people still remember this.

But anyway, on the other hand because because if, if if it's always larger than one, if you multiply multiple things larger than one.

So which means this can get exploded. So so either way, training such a long sequential based deep neural network becoming much more challenging,

especially for RNN because it's a it's a long chain rule you need to do you can say this is from t equal to two to t to the t.

So which means it's multiple steps. It's not only like one number you need two times multiple numbers here.

If you do the expansion. So therefore so so.

So therefore we need to find a way smartly to really train the deep neural network in the recurrent neural network form.

Because as you can see it's not a doable in the vanilla form.

For example, for the explosion you can do the gradient clipping and for the for the for the for the vanishing gradient.

We need to do something smarter. So then this gives us a new architecture called a long short term memory.

Uh, but before this starts I can I want to show one more thing.

But again, as a quick summary, before we jump to the long short term memory,

we want to summarize the recurrent neural networks that the their the shared weights

so that you don't need to so that you can handle the variable length of the sequence.

And because of the shared weights, uh, because of the shared weights, the new output depends on the hidden states.

Previous hidden states the current input and they can point to each other.

For example, the past prediction can be the new input data and the training can be extremely challenging.

And then the next part we're going to learn is long short term memory LSTM.

The core idea will be do we really understand or do we really memorize what's happening.

Very very long time ago. Maybe yes maybe no.

We need to actually forget something. We need to memorize some new things.

We need to update some knowledge based on recurrent neural network.

Because as you can say, for recurrent networks, there's no dynamic way to fully memorize something or,

or drop something before we even move into this.

I have a I have a I have a random question for, for people like how many people tried the the math as new product.

I mean that amuse amuse product. People just like look like people don't really like it.

And I'm not sure why you don't like it. Just like Mark Zuckerberg.

That's a good reason as well. I read a I read a recent news which which which shocked people is that I think this a this new new

authentic to a because they can help you to do this trading on their marketplace or whatever.

I think one creepy news I read recently that there is a young lady who asks,

who asks a personal personal assistant to help selling something, and this and meals help to negotiate a price, which means lower.

It's lower than her expectation. And then also find the time to to to set up a time to actually do the in-person to the

to to like to actually give this stuff to that buyer in person at an apartment of this,

like. Actually, they review this young lady's apartment. Address.

And they make an appointment to say, okay, I'm going to see you at my apartment downstairs at 9 p.m..

Something. Luckily enough, the lady is not is not at home.

But when they when she received a message, people asking where are you?

Etc. etc. she freaked out and we got a prediction that there is no clear boundary for for for many of the new things.

And we're actually going to have a more, more news around this, because last Friday I chatted with a law professor,

law school professor at USC, as well as I think she made a very good picture that the,

the, the widespread use of the personal assistant will will incur a lot of like a lawsuits and class actions for sure in a few years,

not even in a few years. I think people are just waiting that there's more suitcases around.

Like personal use. So I think that's why this year a very good, very good direction for a guy becoming this governance security, not a pure security.

I mean, the governance policy becoming very popular, if you come from the background, from like a public policy economy, you know, finance,

etc., etc., I think it's a very interesting point to so so that's why I'm always saying you don't need to be a software engineer at,

let's say, a big firm, but it can be a very good consultant or analyst in a, you know, public policy firm,

think tank or whatever, because now you know enough about authentic AI and you can reuse your knowledge from the past.

Uh, we're also writing more papers and books in this interdisciplinary, uh, fields, but I'm going to, uh,

predict or foresee there will be more creepy cases when people when people are used AI to represent them.

I don't recall which episode, but I am highly confident there is one episode in Black Mirror.

They talk about something like this. Like, I don't recall exactly what are they?

But maybe just like everyone using AI to represent to do something and gradually lose whatever their real identity.

Yes. So I noticed the website you have of audit software, right?

So I'm trying to find like a good website or to just keep up with AI.

And the news is that would you recommend that one? Um, that that was my website so.

I. So I'm doing this biweekly or three days or two days update, especially on the governance and auditing of the AI.

But if you need a general news, honestly, I don't know.

Uh. But it's great.

You can. You can always come back to check out my website on that.

There's also a learning tab, which means if you want to start, uh, it's a very good time to, to start doing this.

Any more general questions? Um, okay.

Uh, I think I also read a bit more. Another I think another big news for AI today is that the, uh, I think that, uh, what's the name?

Um. What's that? Yes. Yeah. The word labs is, uh, acquired by AMD at $8.3 billion.

I mean, it's founded by Stanford professor and other person.

Um, it's a crazy time. Like, uh, I don't have a command for that, but people are crazy nowadays.

Uh, so. So I will keep, keep, keep, keep.

Continue for another 20 minutes before the break. But I realize people are extremely tired.

They are already starting getting the midterms and other things.

Okay. People are nodding, so I think I can sense your people are losing the energy.

But don't worry, we have the we have the midterm on November 2nd. So yes, we have like a practice midterm or like sample questions before.

Uh uh. Right. Uh, we can share the past, uh, sample sample sample exam questions.

But each year we are going to make a new one because I realized we I add a lot of new stuff to the slides.

So therefore, I think the most useful way that we're going to do a review session, uh, before the,

before the, before the midterm, so that you can have a rough sense what should be covered.

So most of the advanced knowledge won't be covered. For example, we're not expecting people to understand the research in depth.

Do you also get a question? Yes. Do we have to go through all of these slides for the time, or will we know which slides to go through?

I think we're only going to cover the slides.

We're going we're only we're only going to cover the slides during the review time because otherwise there's too many slides.

Right. And of course my guest lecture at Arizona State won't be covered.

Yeah. It's mostly the classical one for example. I think questions are.

Yeah. We're going to share the the materials for that.

But don't feel too worried about it. It's a multiple choice questions only.

And don't think multiple choice questions are easy.

I think many of them are. For example if it's a if it's a question that you write a paragraph, it's might be easier.

You get a partial credit, but for multiple choice it's hard.

But of course there's only one single correct answer for each of the questions.

Okay, we're going to cover a bit more of this LSTM before way before we have a break.

But for the people who really need a who who really need a fresh air, feel free to help yourself.

And don't worry. Um, I yeah, I got a very early dinner tonight as well, which is great.

Uh, so I'm, I'm, I'm in good states and also got more drinks, so I think I'm good, so don't worry about me.

Um, okay. We're going to talk about long short term memory.

So this is an improved, improved version of the improved version of the recurrent neural network.

The motivation is very straightforward.

For example we want to understand whether recurrent neural network actually remember or get a memory can help us.

Let's say here's a here's a here's the thing. Let's say here's the example.

Maya lives in Boston and she likes T. And where's my mouth?

Okay. And later, later she moves to Seattle.

So your query prompts will be where does Maya actually live now?

The correct answer for sure will be Seattle, right? Because you can say from Boston to Seattle.

So therefore we hope that the recurrent neural network or any sequential model can

really retain the memory or update the memory smartly when things get changes.

However, as you can see for recurrent neural network, you don't have such a functionality, or at least it's not an explicit way to do it.

Then the question will be how can we? How can we really do this?

So for example, for a standard recurrent neural network, they have this single recurrent hidden states.

For example remember the city.

This is the early contacts you have and you remember that T which means there's local details and then you predict what's the next one.

So so in short, you actually mix the distance, contact and immediate details,

which means when you have a longer and longer sequence, you're going to forget, for example, where the city mayor lives in.

So therefore the neural network gets such an issue for the memory.

But of course, the modern logic models, they use the separate memory module.

So they have this something called memory bank, which means for each of the user of the agents you can build up your personalize the memory.

So if you're using agents you may remember they're saying okay updating memory now.

So they're actually saving the memory into some local files. So it's not a directly remember everything in the deep neural network.

However, we hope a general deep neural network can get some way to memorize something.

So that's why the vanilla neural network won't work for this.

The memory thing, because a single hidden state will mix the memory and immediate outputs,

and you won't get this crackdown substantially so so so so so therefore so therefore.

So therefore let's say this is a so this is a this is where we start Maya lives in Boston.

And for your memory sketch you get a Boston as active.

And you never see the Seattle yet because you only see the first part of the training, which means she lives in Boston.

And then, uh, then, uh, then which means when you when you train on this first sentence, uh,

you add it to the memory sketch and which means you get the current context, which is all good.

And then you add a second evidence, which means you train on something unrelated, which means she lacks the T, right.

Like your memory doesn't change for Boston, where she lives in.

And T is more like a preference, not a relocation, not a location or relocation.

So Boston remains remains true. And you have never seen that Seattle yet.

And so. Which means we hope this new, unrelated input won't actually erase the existing memory.

For example, the preference of the drink that shouldn't actually interfere with the Boston adult.

The location adult. So we hope there's something can actually help us to say whether they should

retain this information from a probability from 0 to 1 giving the new input,

for example. Which means if it's near one, which means we want to keep all the old cell information.

So you can think this is more like we want to design some internal internal mechanism.

We call this a gate so that can act as can act like a continuous steamer between 0 to 1.

So that would be something we want to say. And and therefore it's not simply saying a job or a cape,

but it's more like a soft way so that we can we call this we call this a Something called a forgot gate,

whether we should forget something or whether we should add something.

So basically, when you have a high forget gate, which means you want to retain more,

and the low one which means retain less, and then we have a relocation.

Data comes in for your deep neural network for your recurrent neural network.

Now she moves to Seattle.

Then you will say, you will say, you will say the rating should be turned to low because now you want to reduce this outdated information.

The fact actually changes. And you want to really add this new information and gather all the information.

Therefore, therefore now you got a new gate which means called input gate, which means for gate.

Gate. Decide whether we want to drop the old obsolete information.

The input gate is just the mean whether we want to actually save this new information.

So basically this two get gate to get together will control how much the how much to forget and how much to really input,

and which means reducing the old memory and adding the new candidate candidate's content that can be separate.

The reason is because the reason is because they don't necessarily be the exact match, or there's many reasons where everything is solved.

So we don't say they're the same. So that's why we have two separate gates.

And then we can do this cell update. Right.

Like a way where because now we have the new city information,

we're going to drop the old one and the new new content information will be will be put into this.

So basically we have the combines to retain the past information and this new information.

So you know that they move from the they move from the old ones.

All the ones to the to the new ones. Uh, so so so so therefore so therefore this sort of becomes the memory of the deep neural network,

because now you get a mechanism to decide whether when you have the new information comes in,

whether the old one should drop or the new one should be remembered or kept.

So so so so so so they design something like this internal internal internal gates.

And therefore. So therefore you get some memory functionalities about the deep neural network.

Then when you ask where the Maya now lives in it would actually give you the answer for Seattle.

I mean, this is an abstract. I mean, we're going to show you what LSTM look like, but overall.

But overall, what we are trying to say is that LSTM improved over recurrent neural network by adding some gates,

learnable gates to drop something, to add something.

So they're working together to do this things together.

Um, let me see. Let me see what I should.

Uh. Yeah. So so so so so basically so basically,

as TMZ beats three important gates to actually work together at each of the step, when you have some new information,

they decide whether to forget some old information,

whether they're writing some new information into this and whether they want to output this information already at this moment.

So basically, retain past the writing new candidates of the cell and actually expose everything to the hidden states.

So, so basically all these three gates work together, all trainable to be the LSTM together memory for the recurrent neural network.

So which means. So this is more like a complete LSTM cell.

We're not going to test you on the details at all.

But we just want to show you that for example when you have a when you have a new information in right like X now and you have some previous state,

this is the forget gate will decide whether some old previous information will be dropped and the input will decide whether you are going to write,

which means you're going to memorize this new information. And also you want to say whether this whether.

Whether everything will be output for now to review this information.

So it's a much more complex version of the recurrent neural network.

But after getting this forget gate, input gate and output gate, which means to review the exposed gate,

you get a functionality to actually do the memory updates or become more updated and forget something in the past.

But of course. But of course this is a there's a lot of like issues or limitations for for this, right.

Because because even for LSTM this is very this looks very complex.

And you need to control a lot of things. And, and and the other thing is that we still need to have all the it's a fixed as the state pair.

Which means you don't know when are you going to, you know, drop the old memory like do the compression.

So it's a so it's a look. It looks very elegant.

But also at the same time you can see there's a lot of like a floating parts and it's not easy to train.

And that would be the great motivation that we're going to show you attention and Transformers.

But before that. But before that again for the LSTM, the issue is that you will say, you will say each step.

You need to do this for guide input and output gates.

And they're all trainable. It's very complex. And there's a fixed size of the state.

So it's not easy to use in in most of the ways. Then how can we make the how can we make things more soft or dynamic.

Which means we don't really need to remember when to forget something or drop something or a or or doing something new.

Updates. Can we do this? Can we do this in a more automated way?

Uh, I'm not sure whether you heard of this, that when you, when you go into a bar, that it's very noisy and you have a glass of wine with you,

and you chat with the person around you, but you can only hear the person who are chatting with you, but you couldn't hear anything else.

So this is a I forget what this is called, but you can say as a human we got attention, right?

Like for example, certain attention, certain people's attention may be on their screen and a certain person's attention may be on,

uh, you know, I don't know if we just look around. Maybe some people are already falling asleep.

That's also good. Their attention is with their dream. It's all good.

But as a human being, we get attention, which means we put more emphasis on certain things at certain moments.

If you look into if you if you stare at a specific person, you may not look at,

you may not notice other persons, uh, you know, conditions at the moment.

So this actually motivated people to design the automated attention mechanism.

So which means can we let the deep neural network to attend certain details, which matters for the current state.

That will be the most ideal case. So let's say here we have a sketch.

It's not even an image, right? Like we have on the park one, there's a tree and there's a person play Frisbee and just use your imagination to to

mix this a real and a let's say if we want to generate a description of this image,

what happens will be if you just generate the captions of this image, you each time you generate a word, right?

Like for example, let's say if I start from a person or a tree or whatever, if I start from a then,

then the then potentially if we actually, you know, split these images or the sketch into three parts, 3 or 3 regions,

that will be a tree parts, the person parts and the frisbee parts, the disc features and, and,

and each of them can be represented as a separate vectors and, which means we can use the one vector to represent each region.

And the separate region help us to actually. So we don't need to look into all the details in these images, but we need to we can separate things,

we can separate things, and we can focus on different parts separately.

Let's say if I start from a, you know, a word, then likely if I can choose three of them, I can choose a park or a person or a disk.

And you will say, potentially this person will get more predictions.

And because because you know, by the training data,

a person sounds more common than a tree and a disk and and gradually and gradually and gradually if you're perfect,

which means again, your previous contacts become a person through something,

then the attention goes to disk because it's very unlikely the person is serving another person or tree.

It's not impossible, but in these cases the prediction will be Frisbie.

But for the same reason you have a. This time you get a different weights because you can say so the tension here just the mean.

If given different prefix or previous context, the three regions will get different weights.

So for example,

in this case that will be more likely to be a person highest weights and but it can also it can also be possible for this kind of park as well.

Similarly here the this case has the attention or weights here.

Sorry I mean Frisbee.

And however the person in the park are still possible in the sense maybe park is not very possible, but but even that's the case.

Which means given a different context or prefix, the different different parts got different attentions or weights.

So this is a so so this is a very straightforward illustration for something called attention which means giving an image,

giving an image and giving the current caption generation with or attention will change.

Right? First of all, if we start from even your reader, if even you read a paragraph,

you're reading from left to right, the top to bottom, and your attention goes like this.

So which means your attention are going to put on different parts of the book.

And therefore for the image, it's the same when you when you try to summarize this image, firstly you see a person there.

This gives you the highest attention to to do your work.

And after you, after you, you do this a person, then you go into okay saying what's this person doing?

Then your attention goes to throwing a disk, throwing a frisbee, whatever you want in a park.

So which means when we're summarizing or doing some prediction, the attention change along with the time and giving the pretext.

So because once you know the person, once you already capture the person part.

You're not going to put more attention there. Uh, so so so so so so so therefore so therefore so so so this is actually, uh,

so this is actually saying the position of the generation or the prefix is very important in the,

in the general recurrent neural network or sequential prediction.

So usually what happens is that what's my what's my current token or what's my current word and what's my position is.

And then given my token and position, given my current word and my current position, we will see the tensions, uh, tensions around this context.

So this is my context. Then I'm going to do some process of the features, convert to the vectors, and then I'm going to predict the next token.

I think this is a bit abstract, but I'm going to elaborate very soon.

Uh, so basically let's say the dog chased the ball. It's uh.

It's not. The question will be. What does this it mean?

Right? It can be the dog. It can also be a ball. And how to decide?

It depends on the position of the of this of of of it.

And also depends on the previous context. So so so here's a so so so so so here's the illustration.

Let's say the dog chased the ball. Uh period it.

And now uh let's say if we, if we consider each of this token, let's each of the word is the token.

Let's say if each token began, they got some learned vectors and some feature values that we're showing here.

Uh, then the the next question will be, uh, you can then the next question will be, you will say,

besides each of the token representation, another thing matters will be the position.

For example, this dog is at position two, traces at position three.

However, if you switch their position, something already changed, right?

For example, like the dog chased the ball.

However, maybe the ball can also chase the dog. I don't know how. How would that happen?

But it will say position matters because dog bites. A man can also bites a dog, which I don't recommend.

So? So which means you will say if you don't encode the position, you don't get the representation right.

It's the same words, but if you just get different orders, that will be totally different meanings.

So which means the word vectors doesn't only word vectors alone doesn't actually specify their orders.

I mean, even it's the same, same words in different orders will mean different things.

So all this meaning is that we really need to document or we really need to track the position encodings as well.

So which means let's say the dog chased the ball, its whatever.

This is the position from 1 to 7. And you can say dog is at position two.

So this is the original dog token which means that the word representation and this is the position of the dog,

which means the position two and the ball here. This is the word representation for the ball.

It's the universe or whatever the position is. It would be such a vector.

However, we now encode it as a position five by adding these two embeddings together.

Now we got a representation for the input of the dog at position to and the ball at position five.

So the example here just to mean in general natural language or generation.

If you want to do this, a sequential prediction both of the original word or original token matters.

But however their position also matters because same word at different positions mean different things.

So therefore we need to have this position value taken into account for the language prediction or sequential prediction.

Now we come to we come to the question saying this is the original things we want to predict when we want to put when we predict,

we want to predict what will be the next token after it. This can refer to both of the dog and the ball, right.

So this can be the dog chased the ball and it's happy, or it was happy or it ran away or something I don't know.

So this that means that it actually represents dog. However, the ball or the ball can also be represented by it.

Maybe it freaked out, I don't know. So which means you really need the context from other tokens to resolve this ambiguity.

Which means both of the so so that's why the previous context is really important.

So so so so let's say so. So so that's why when we're given when we want to predict the next token here for, for after it,

then we need to do this a self-attention to say what's the relationship or how likely the previous words are associated with these words.

right? You will say this is a this is a this is an illustrative example.

However, you will say the dog and about have the highest weights associated with it.

It's likely to be 35 or 25%.

So, so so by mathematical definition you're going to believe okay, the dog actually represents it or more likely to represent it.

So this is illustrative because it's a it's very complex.

But in general in general if the previous standards are totally different then this self-attention or self weights are different.

So basically um, so so basically the attention weights are computed from the current inputs.

Uh, in short you usually just like can replace attention by weights, the same thing or how important something matters to other things.

So in this case because of the self-attention you will say you do this as self weighted.

Then you get a context for it. So which means each of them.

You combine both of the original token and the original token embedding vectors and their position encodings.

So you got a weighted sum as the context for it.

So it will depend on all the things taken into account by weights.

Uh, so, so which means you, you think these weights will control how much of the, each value and this vector can contribute?

Uh, again, it's the same thing. The the future depends on past.

However, different parts of the past give different ways to the future.

So. So that's a so that's a so that's a basically a tension just mean uh what's the weights you're paying.

What's the what's the exact weight you're paying attention to to different parts of the history.

Uh, so so so so so even uh, so so so even it's the same starting vector.

Is it? Right? Like, uh, in the past, if your past is above road and you will say, given the attention,

likely this it will be for and you know the generation will be different.

The dog ran and here it represents dogs. So which means this will give you different outputs.

Uh, and things can be, you know, different sentence context will give you different tokens.

Vectors. Uh, and uh, one question.

Yeah, I was dropping another 5 to 10 minutes. Just bear with me.

Uh, because because I got a feeling. Because people are really tired.

And during a break, people will will run away.

So before, so before people before too many people run away with a less fulfilled knowledge in their head.

I just want to add a bit more context there. Even, you know, people are loosely attached to the content.

It's okay. You know, I also went through all this, uh, like you so, so fully understand, uh uh, so so why future tokens must be hidden?

Because, because because, of course, by common sense, if you want to predict the future, you should never know what the future looks like, right?

Because otherwise a because otherwise it makes no sense.

Uh, but this is a but actually, this is a but this is a this is a this is something we must say that for the large models,

you should never review anything like the future tokens for prediction even.

For example, if you want to predict the full sentence, it's still cheating that if you show 1 or 2 more tokens because this is the self-attention,

which means it's autoregressive model, any given token will change the future.

So every single change of the let's say even you just for example, you.

If you want to predict the full sentence, even you reveal one more letter.

This will totally change your direction. So so so so so so so.

Which means you need to actually further anything about the language generation or this type of the sequential model,

The colored positions are okay, however. However, the future positions should never be reviewed, even only a bit.

Shouldn't because everything's pretty. Depends on the future.

Uh, so so so so so. Therefore, we talk about three things in this so-called attention or language generation.

We talk about order, right. For example, even the same token at a different orders will totally change the results.

Remember that the dog bites man. Man bites dog. Example.

So you switch the order. Things will be totally different.

The visibility is another thing, which means you should never review anything for the future in the prediction.

Even just like one more token that shouldn't be allowed. The third thing would be the contribution.

That's a that's an attention worth saying. The future prediction depends on the past.

However, each part of the past, they have their own ways to contribute it to the future.

So all these things together position and this visibility and attention weights adding everything together.

That will be the language generation, which means if you control these three things smartly and systematically,

you can do the generation smart, intelligent way.

That's how the large language models are working in general.

Uh, so so so basically each of the, each of the, uh, so, so why, uh, let me say what I have, uh, one.

Okay. Okay. Uh, so so so so now if we piece everything together, you will say this is a general, uh, transformer block look like.

Which means that's a that's a that's the foundations of the large language models, which means you have some input vectors.

We have some, like attention mechanism to calculate how important the past or are the parts of the deep neural network related to these parts.

And they, they're using the classical deep neural network to transform this into some some vectors.

And finally you have outputs. So there's nothing crazy for the transformer.

So everything. So everything. It's more like just adding the attentions and allowing the automated attention to different parts.

Uh, now, now one more, 2 or 3 more things before we before we have a break.

So. So why transformers becoming the foundations of the large language models?

Because thinking this way for the for the classical recurrent neural network, you are backpropagation depends on the food chain of the calculation.

You need to have all the passed information. For example, for a sentence like six words.

Today is a great. Today is a great day. Five words. Sorry, today is a great start.

Today is a great day. You have five words if you want to do the so.

So for the neural network, your prediction will be this today and you predict it's today.

It's a today. It's a great and you need to use the today as input and then as the output.

And today is a great day. You gradually you need to have a multiple sequence.

You have a multiple sequence for learning this stuff. And and unfortunately each of them requires you to do the full training or separately.

There's a larger dependance that you need to have.

However, for this transformer block, the fancy part is that you can you can, for example, you have a long sentence.

You can, you can, you can, you can, you can, you can, you can actually do the training of each of the small block separately, for example.

Let me see what I have a okay. I think here we go.

For example, the first training will be the the dog.

The dog chased the dog chased the ball. Sorry. The dog chased the the dog chased the ball, etc., etc..

So you have a block of things. So for example, from the simplest one to the next one to the next one,

and each of them are encoded by this self-attention to other parts and also by MLP.

I mean, it's a general deep neural network part.

So which means for a very complex sentence or multiple complex sentence, you can train them all at once in parallel.

So they don't depend on each other because it's a self-attention. I mean attention to other parts.

So uh, so each time you can calculate things in batch.

So that would be the fancy part for the this transformer.

We're going to talk more about this a distributed learning later.

But all you need to remember at this moment is that because we decompose the sentence into, for example,

the token positions and their visibility and their self-attention weights, we break the dependency into small parts.

And therefore, unlike the general recurrent neural network, which means the training, you need a full sequence to do it.

Now, transformers can do can break down things into batches and you can try everything in one shot, which is great.

Which means you can distribute these things across large language like large language models or multiple transformers.

And transformers can train a lot of text simultaneously by putting things in blocks.

We're going to revisit the specific transformer. Architectures and details I think in maybe lecture 9 or 10.

But now we just want to talk about this. Attention, attention which means automated way to learn the weights to the past.

For example, given my current input, what will how important each of the parts are playing a role and can we encode

them and whether what's my current position of my token and can encode them.

So if I can encode everything since we can be parallelized.

Um, I think, uh, I, I think we can, we can, we can stop here to let people to to really take a breath.

Uh, but I will be here for the for the office hour. We can come back at 7 p.m., which means in 11 minutes.

50s. Yeah, I think we can restart, uh, and people will wonder whether we have enough.

Enough presents. Ta ta ta.

Not trigger a quiz. The the lucky part.

I mean, everyone here just wants to hear that. Okay. We will have a quiz, all right, because you are here.

But, you know, think about your missing parts.

Missing, missing, missing classmates and fellows. Pray for them so we don't have it for now.

Uh, yeah, I guess I'm very good questions during the during the break.

And also, uh, I mean, moments ago I received an email, you know, for how the how the,

how the universities are running the faculties are going to apply for something called research funding from the including the federal agency,

including the industry, uh, and for example, taking the taking the taking the federal grants as an example.

Usually that's a 15 pages and single space, including multiple figures.

And, uh, you know, it takes weeks at least the weeks for preparation.

If it's not a few months, of course, you want to use the amounts or to do this like a dedicated amounts for this, but this will last for a few weeks.

And I think at least in this, in this in the last seven days,

I've already received 2 or 3 rejections from federal grants not allowed for industry grants.

The reason I mentioned this is because examiners if you if because a few people talk

about trying to do PhD or other things throughout the I mean this like or next cycle,

I mean the academia of of rejections and not necessarily frustration paper.

Also another thing, right. Like I mean last week are the notification for something called the NeurIPS.

It's one of the important, you know, AI conference.

Uh, you know, it's acceptance is always around 25%. Uh, but still many people are frustrated thinking why they got rejected.

And I think last Friday is the deadline for another conference called I clear.

I'm not sure I think people are submitting their, but this year they got a 60,000 submissions, which is bigger than the last.

Over the last few years in total. So which means everything. The intellisense is crazy.

So. So if you choose to be in academia, you need to handle with the average action.

I'm already good with that because I think estimated 2030.

I think each amount were submitted at least ten different proposals. And each year I got around 7080 proposals submitted.

However, finally, there's only a very handful of the proposals will be funded.

It's crazy, but I'm pretty used to, uh, to this rejection word.

Uh, so. So if we can handle the rejection well, you should be well prepared for academia.

Uh, another thing would be people asking, should we go to a career fair or a, you know, you know us, us?

USC Griffith are coming very soon. I guess in November, I think at least I know there's November 1st for, for for USA masters.

And my personal take will be, uh,

I think at least to my observation or understanding for the large corporations that are just showing you a QR code to scan,

like you are waiting in the line for 30 minutes or even longer, chat for ten random sentences and get a QR code to scan for planning.

Um, personally, I don't know whether that's really worth it.

Maybe someone are pretty good at small talks can get a real referral, but at least to my personal experience,

I'd rather go to the smaller firms who are for example, for the startups.

Their founders are there, they can make decisions and that will be much more meaningful in a sense.

Um, especially if you're just looking for internships and other things.

The CBT works and you don't need to worry too much about the sponsorship at all, so it doesn't matter.

Even for full time there's hope and they try and be. A lot of small startups are helping Opt and etc. they don't really worry too much about that.

However, for the larger firms, sometimes they care more about it.

So my personal take is that chat with the smaller firms, including the firms I'm working with, are also coming to a job fair this year.

I feel like these smaller firms are really craving for people,

and you get a higher chance to really get something other than a QR code to equivalent to the LinkedIn post,

which means it doesn't make that much of the sense. Um, right.

Um, also, any questions regarding anything or your output?

Yeah, I admire people who are still sitting here because which means you really you have been reduced through a lot for the last two hours.

Uh, hopefully you get some snacks during during the, during the break.

Uh, okay. We are going to continue. I think there's another 100 pages.

I think we're pretty good on schedule to finish everything around sequential production.

Uh, we talk about the we talk about the the attention, attention transformer and the major parts.

Right. Like, recall the predictions matters.

And you should never review anything for the future and also the self attention to different parts of the previous context that will be automated.

That will be something important. And, uh, why would why do we really need to add some, like a multi-layer perceptron ml, MLP after the attention?

Because after you get the context, which means you need to combine them, right?

You need to do some transformation to the vectors like you do this So the MLP is simply the linear layers,

non-linear non-linear layers and linear layers, and active and nonlinear whatever some of these combinations.

So basically the attention gets you the context to put attention to.

However you need to know this feature combinations. So basically this MLP layer just trying to uh trying to.

Sorry. You're trying to use them to get you the compressed vector.

And also for the people who need a fresh air notice. I mean you want to bet whether we have a quiz now you get an answer.

We won't. So, uh, I'm not going to I'm going to keep my head down, so don't worry.

Uh, okay, where am I? Uh, so, so basically, uh, so basically we're saying, uh, so.

So basically we're saying, uh, remember, uh,

one of the general designs for most of the deep learning that you want to share the weights because you don't you don't want to create a huge,

huge things which are all independent.

So similarly this MLP are also shared across different positions and also different tokens so that you don't need to train anything.

So this is still abstract because we didn't get a chance to really expand everything about Transformers.

But we will do that in the later lecture. But again, all you need to remember now is that inside one transformer transformer block that will be

you have some input vectors and you have this attention to do this automated soft weights.

And you use the MLP to make these actual vectors, I mean these are all context and make them vectors.

Then you can output. So which means the attention is exchanging information across different positions like how important they are to each other.

And then MLP will transform these features into some vectors.

Uh, and and the actual, the actual for example, large language models, uh,

the Transformers, they have multiple Transformers where they have multiple blocks.

So basically they have a block one, two, three, four, five. They have a lot of blocks.

And you can say more blocks just mean more, uh, more learning parameters,

which means of course you get more computations needed for for the entire thing.

So what really happens is that you get some input vectors. You have a block one, two, three.

Each of them get some self-attention plus MLP for feature representation.

And you just stack this blocks. And finally you get some predictions.

So if you want to make your model more powerful, you just add more blocks blocks, blocks.

And this will become deeper. Uh, so it's the same architecture.

Uh, but it's the same architecture. Same. All the blocks are similar.

However, they have different weights. So which means, uh, so which means you, uh, you get a much more complex model when you add more blocks.

Uh, and here's, a Zen and Zen artist said this a few times and.

But we can do a quick recap again. You. The prefix you have here will be the dog chased the the ball period.

And then this is your transformer blocks to to process to process this information.

Remember transformer including that attention including the positions and the MLP tool to convert things.

And then this this transformer blocks will will will give everything as a vector right.

Like then goes through the prediction which means output you choose the next word will be it.

So uh, so so so so so which means the final transformer, the vector here will produce a score for the next word, something like that.

And and after you have this next word, eat then this all becoming the prefix of the next token prediction.

Then you go through everything through the transformer block and go through the prediction.

The next word will be marked. And you can say because it actually tends to dog more than ball.

So the next word based on here will be barked something like that.

Uh. We mentioned the transformer change the how the actually the transformer if you remember, that's a paper Google.

Google had called attention all you need. Uh, it's a very it's a very it's a very difficult paper for anyone to read.

Uh, I never fully understand, but, uh, but it's a great paper. Uh, attention is all you need.

That paper gives us the transformer. And the transformer change is is the foundations for large language models.

Because in the past, we couldn't train huge,

huge language models sufficiently efficiently across a lot of a lot of, like, uh, you know, GPUs or whatever.

However, transformer makes this possible because of the because of this, this reason.

So so we can say during the training time you already got a full example, right?

Like you already know, the dog chased the ball. It barked.

Let's say this is a this is a this is a full sentence full training sample you have.

So because during training you have the full information. Then when you have the as a first set you have the then you know the target will be the dog.

When you have the dog you know the target will be chased. You have the dog chase, you have the you know, the target will be the so,

which means you have a multiple pairs from the shortest to the to the full sentence.

You have a multiple samples. So you can you can score every next token targets with with the future token hidden.

So which means the fancy part for the transformer is that you can train all these things from the foot, because you already do not train.

You have the full sentence.

You can have this the seven pairs, the the prediction from the to dog, the prediction from the dog to chase the dog chase to the.

Which means you have all these pairs altogether. Everything is ready at during the training time.

And because of this self-attention thing, like all things are sort of like independent.

You don't need a you don't need a full sentence to train the first part.

Everything can be trained altogether in one batch. And then you go to the next batch.

You you you go to the next batch. So you can train a training. You can train in all this sequence positions in a single pass.

And because everything can because this can be parallelized, which means you can do a lot of training all on the,

on different machines, and you can break things into different machines.

However, for the original, you couldn't do this because the dog chased the ball.

It. You need to, uh, you can separately train the dog, you can separately train the dog,

chase and etc. etc. but the there's a stronger dependency for the gradient descent there.

So you couldn't simply do that. But we're going to unlock this.

Expand the details later in the in the lecture 9 or 10 or something like that so that you will say more.

But for now, all you need to remember is that, you know,

transformer architecture enable the parallel training of the of this sequential data, which is very, very, very novel.

Uh, the complete text generating transfer.

But again, we are just talking about the training here. Everything can be parallel.

However, the the generation the next next token is still not known.

Right. So which means you still need to generate a token by token.

So that's why again the model generation is not saying give you the full time full sentence immediately.

Everything is there. It's a token by token. Even you didn't say token by token.

It's indeed token by token. So, uh, so that's a different. The training can be fully parallelized, but the generation is actually token by token.

So here's the for the full completing text generating transformer you will say the

whole model will look like you have the original word and you have their positions,

right? Like again, the position also matters. Token plus positions.

You go through multiple transformer block so that you can learn some representations.

You go through the prediction for the next and the next one go back to the the.

This is called prefix right.

Like different tokens and their corresponding positions and making the predictions predictions for the next and each of the block.

Actually you got some like attention which means understanding the weights to other parts.

And you have some MLP to generate the representation. So so the generation gains that generate something.

Append generate something. Append append. This is an autoregressive.

So that's how the logic models are working. Uh and and so so this is the introduction for the transformer or the general large language model.

Just want to tell you position matters attention importance and MLP to transform each of this position.

Attention vectors attention information into a vector because everything needs to be a vector to compute.

And then you predict for the next one. Once you have the next one you append back, you get a new position.

Attention MLP. And so that everything is a so so so everything is a is a loop or a sort of like autoregressive.

Um, yeah. Again in block. In block nine we're going to talk more about how each of these are being computed.

But today it's more like a beginner session. So that's doing an interview.

You can you can, you can confidently explain to the manager who may not know anything but the check on the website or ChatGPT, what's the transformer?

Maybe the you know, you talk about positional encoding. Talk about the token.

You talk about the self-attention. You talk about the converting to a representation and stuff.

Autoregressive. That's enough for a general transformer.

But of course there's other things called a quick cache, etc., etc. we're going to explain later in the lecture.

Again, what transformer skills. Because for the for the for the for the classical reinforcement learning sorry recurrent neural network circuit.

The sequential updates. Actually there's a strong dependency on the states like each step need to wait for previous states for updates.

However a transformer they have this parallel position because each of the time

you already know the position and you already know their self-attention to others.

So which means you can do the batch the training on the GPUs smartly.

You can train many positions together and break this dependency.

However, the generation again still will be one token at a time.

That's not changed. Uh, and this is important because as you can say, Nvidia, Nvidia got strong GPUs.

They got more GPUs to get more expensive GPUs. and the firms are purchasing them, and now they have multiple GPUs.

They have multiple multiple model copies.

And each each of them can train a batch of the data and then synchronize the gradient so that things will be largely parallelized without results.

If you couldn't break down this dependency, you couldn't do this parallel training smartly.

So therefore before before doing before, we have the before we have this more parallel distributed training on transformers.

You couldn't do this easily. So so so now we covered synchronous.

We covered this basic recurrent neural network.

We covered the improved version which means LSTM which means you add something called the forget gate,

input gate and output gate which to control which things to remember.

Then we move to the transformers, which means they are smarter to do this.

Self-attention weights to understand which part of the path is more important.

Sort of like saying the LSTM also gets their own mechanism to like saying which one to forget, which one to remember.

But the self-attention look like it's a smarter way because it's fully it's also.

Both of them are learnable, but it's more elegant in a sense, so that we don't need to depend on the full future or full past to do this training.

And here are some like a lot of like a pretty chilled slides, which means, uh, you know, uh, it's a you don't see much.

You don't need a lot of attention for this. For example, people are saying, what's our applications?

Um, yeah. Like, uh, image image summarization.

Uh, you will say, you will say, for example, image captioning, which means the image itself.

Now we're combining the convolutional neural network with the recurrent neural network, which means from the image part,

you do a lot of like convolutional convolutional layers to get together to gather your input.

And then this will be the input for your recurrent neural network, right.

You get hidden a hidden thing here to to do the to do the prediction.

I don't know who made these slides, but that might be it might be many years ago.

Some of the this might be one of the instructors before. But but I don't know.

Um, yeah. We created this uh, slides actually some of the slides are, uh, there has been a few years,

but as you can see, we add a lot of new things each of the semesters.

So it will be so, so, so actually what happens is that three years ago that was my first time to teach this course.

By that time I was asking the, uh, that instructor whether I can use his code, use his slides.

He told me no. So that was my first year at USA, and luckily enough, I didn't get any PhD by that year, so I got a lot of time to make the slides.

Uh, so so by that time, uh, this is a start from like all the ones.

But throughout the years, you will see we had a lot of, like, great new content.

But there will be some still like old ones. These are the old ones.

But still the case is still the case. This actually shows you that where we can you can combine the recurrent neural networks with,

for example, convolutional neural network because your input may be an image,

maybe something else, maybe other things you can you can combine a recurrent neural network with another recurrent neural network.

So everything so so so so you can think neural network as a game right.

You can just combine in different parts different loss as long as it's working.

Uh, I think by the time people are showing this example to say, okay,

recurrent neural networks are pretty strong or effective to do the image captioning,

but I think in a time of 2026, nobody feels this is impressive anymore.

Uh, the large models are already doing much more, uh, much more things.

Um, yeah. By that time people are thinking doing this question answering is already very fancy.

Like, uh, but of course, it's ten years ago.

Yeah, ten years ago. You can think that's how fancy this type of thing is.

But unfortunately, nowadays nobody feels as fancy anymore.

Uh, but it's still the case, even for the question answering. There's some sort of like, uh, autoregressive generation.

So. So, uh, so again, even for the large language models, this attention is that you need the paper, which means transformers.

It's the, it's, it's a, it's a developed like 2017 in 2017, which means roughly nine years or ten years ago.

Uh, however, things are changing. Uh, it's a it's a fast and slow at the same time.

Right. Because the fundamental transformers are nine years ago, but this entire models are 2 or 3 years or only 2 or 3 years.

And I think this week. It's their day or something.

Uh, so which means, uh, there's a rumor that's saying they are going to release this, a $500 subscription.

Uh, I think they already changed the website a bit, saying the $200 subscription.

Now it's called the Pro More, and maybe the 500 subscription will be Pro Max and give you a more token usage.

Yeah. Nowadays like, it's, it's it's just, um.

Yeah. And actually today cloud actually released their cloud storage 5.5.

And it's doing a pretty good job. And especially in agenda coding it's even better than uh, their their flagship model 5.5.

And it's like one tenth of the price. So which means so there's two saying.

One thing is that now all this large model firms are subsidizing subsidizing the the token price.

So it's a perfect time for us to use as much as you can, and let's say in that in the future,

token price will be even lower because, you know, you don't you don't need a fancy, fancy, fancy model to do your daily work.

Maybe you can just use a lot of like a very cheap model to do strong works.

Now, nowadays I'm still spending a lot of money per per, per month on these tokens and hopefully this can be largely reduced.

But but you know, as a human being, you're always craving for the, the most expensive one, right.

Like even they're just like 10% better. Maybe you want to pay another 500, you know, per month premium for just getting 10% better.

You feel that's an edge. But but I don't know. But again, if you don't if you haven't tried it before, uh, I think you will.

I think I don't know whether the US ChatGPT guide your codex at all.

I don't know if anyone tried before. It's work.

From the codex to the editors.

I see. So. Which means if you. You need to submit a separate. It's it.

It's the ticket for getting the Codex as well. I think there will be some coda, for sure, but you can also.

You can also try it. Uh, if you haven't training agenda coding.

Or you can just try whatever the simplest, the subscription or the cheapest subscription from whatever the major ones.

Uh, I think the, the most affordable potentially will be a Gemini, right?

But I'm not a big fan for for there are also rumors saying they're releasing, you know, Gemini Pro.

It's not. It's that Gemini Pro four and saying.

To be better than cloud, I don't know. Uh. Uh, right.

I think we have a more application showing here. Um, sorry.

We'll get a bit more. And I think in the past people are showing this example is, uh, these are misleading or challenging for, for for models.

However, I don't think that's the case anymore.

Uh, another thing we're going to cover in the later part of the lecture will be this in the past, the one thing,

even one, even nowadays, one one challenging thing for large models is to understanding the spatial vision.

Uh, so which means the spatial relationships are not easy in the image understanding.

If you are taking a screenshot of the book or something, it's much easier for large models to understand about the 3D stuff.

And very complex spatial reasoning are still challenging for large models.

We are also having a recent paper showing this. Large models are not very good at the spatial long term, long context spatial reasoning.

We're going to talk about this spatial reasoning later. But a quick summary for the general RNN to the current system will be back to 2014 to 17.

People are still mostly using the convolutional neural network plus the recurrent neural network for this caption generation.

Question answering, etc. etc. and then they go from transformer VM to do this, to do this thing.

And now things are even moving to a new direction called recurrent and hybrid fixed decoding.

You are welcome to check this out, but it's still a very new.

However, you can say there's a this is also a recurrence, right?

Like because they go from Transformers, then they go back to recurrent and some hybrid fixed state decoding.

Just like last week, I mentioned that Jeff became pretty popular in making the fast decision.

However fast Jeff is nothing new than Bert for a few years back.

So. So you can see in research people just coming back and force people come into

some old ideas to to repackage and to find something to to find something new.

However, throughout this, let's say ten years of the recurrent or sequential prediction,

what really survives, uh, one thing survives is the state, which means now everything.

Now people are still believing, okay, we're making this state prediction.

The current state, next state future passed. So we want to have a better understanding of the state.

Another thing that is a shared rule, which means we want to if you if you design a new architecture for sequential prediction,

you still want to say whether you can share the parameters across different positions, because that's very useful.

Otherwise It will be. There will be. You know, the parameters will be exposed.

Exploding. And another, another thing that still.

Whatever you are using that LSTM or transformers for memory or attention.

How do we know which evidence will change the output. And uh, and finally.

Still the case people are trying to design. You know, for example, for that recurrent neural network.

You got a, you got an output back to the input or something like that.

You still want to design their, uh, structure dependency.

Uh, and uh, and as you can say for recurrent network, uh, the steps actually just, uh, they're just doing things like the, in the sequential way.

However, however many of the times, many of the times, uh, many of the times, the sequence can be much more complex, right?

It can be a graph other than purely a sequential.

For example, A may be depending on B and C. C may be depending on the switch being A depending on C and d.

However, the D plays a smaller role regarding to A so which means its indirect impact on A.

So this is another dependency graph a so.

Yeah. So here we have. So so here will be a bit more material.

So if you want to really read to regarding the this LSTM and um and since again like we're

not going to really cover this but recall like for recurrent neural network vanilla ones,

you only get this non-linear weights and past state and current inputs.

However for LSTM you get a different gates right? Like including the input gates of input gates for gate gates and output gates.

And you have this nonlinear activation functions. If you want to see the details, you can.

You can do this, but you just get more ways to dynamically control what you remember, what to what you forget.

Uh, we're not going to say this one by one.

We're going to I'm going to use the I'm going to use the next 30 minutes for starting maybe in the next block.

But let me quickly, quickly finish this one.

So these are just more technical details regarding LSTM. But again the core will be this a different case.

But we already tell you the motivations for the gates. And these are just more like a details.

We're not going to uh really look look into them.

There's also even this is more like optional materials that you want to look.

There are there are also variants of the recurrent neural network, including there's a GRU.

It's called a what's what's a full name for GRU. Sorry, I don't remember.

Maybe gated recurrent network or something like that. Uh, and and for the Transformers, there's something called a quick cache.

Uh, we're going to discuss in the block nine.

Uh, the reason why we have, uh, why we have a quick cache is that, remember,

for each of the for each of the token we need to memorize, we need to get their corresponding word.

Token. Uh, sorry. Token representations and position encoding.

Right. Like, we need to know both of the word representation and the position representation.

However, however, many of the things doesn't need to be recomputed recomputed.

And many of the things can, uh, can be greatly.

Uh, can be can be efficiently stored. So the Kiwi cache, for now, all you need to understand is that, uh, there's a quick cache is a way to,

uh, to efficiently remember this position and the token representation.

You don't need to recompute for the new position when you have a new token, you don't need to.

You don't need to recompute every other. All the tokens before.

So you can easily to append a new one and recalculate some KB for this new one.

We're going to revisit this and expand in the later later section, but for now just create a new way.

It's a great, efficient way to compute append for the new position so that you don't need to recompute everything again and again and again.

It's a way to. It's a it's a it's a it's a, it's a, it's a way to memorize a lot of things.

Um, right. Anyway, the KB help us to.

Help us to save the memory and be more efficiency.

Um, let me see if there's anything more I want to talk about.

Yeah, there will be some, like New Directions, but if you're not doing research, you're fine to your if you're fine to pass.

But we already talk about foundations and some this low.

Anyway I don't think I think that's more sorry that's more research. Uh, anyway, uh, anyway, uh, anyway, a general, uh, general thing.

Another one. Last thing I want to talk about the dependency is that if you have the full training data for a sentence,

which means you have a both direction of the information, right?

For example, she sat on the bank of the river. So which means you can train on this way like a Shay using Shay to predict set.

She said to predict. To predict on. However, language is not unit unit direction.

Right? They can be they can be bidirectional stuff.

So for example, you can also go from the river to predict the the river to predict the off.

So in many of these, in many of these design of the sequential prediction, this this, the direction left to right were right to left.

There are both meaningful. So many of the times are you know, they do this kind of bidirectional bidirectional loss,

which means either way they can learn more structures and dependencies of the of the language,

because actually the direction is something defined by human beings.

So either directions carry some good information and a lot of models are bidirectional.

For example one of the important ones are bidirectional LSTM.

Uh, it sounds a bit weird, right? Like the future impact, the future impact the past past impact future.

However, when you have the full sentence, there's no more future in the past.

Everything about the sequence. So which is all good.

Um, so so so I think we're going to use the last 30 minutes to talk about, Uh, something about, uh, uh, sorry, graph neural networks.

Uh, it's not going to be the. It's not going to be the, uh, full session, but, uh, we're going to, uh, you know, have some like, a.

Uh, early intro about it.

Uh, uh, the reason we have the the reason we have the, uh, this graph neural network thing is because, uh, uh, this entire world is a graph.

Uh, for example, where we are impacted by a lot of things.

Uh, let's say you may not choose to take this course, but maybe your friend who who checked on Reddit or read my professor saying

we should take this semester because look like my expectation it should be,

uh, a noun, it should be an it should.

It won't be a torturing class if you took this one.

Uh, so. So you got the impact from your friends?

Uh, maybe your parents saying you should take this this semester because then maybe you can do early graduation.

So we're all impacted by sort of like by a different people or different neighbors or different person who connect to us for a certain reason.

Right. And another thing for graph is that the average thing is a graph.

Like for example, even we're sitting in this class is a graph.

However, however, your neighbors may play in larger roles to you because the closer you are with someone, they're playing more roles.

For example, they're if they're eating something here, you may not.

You may, you may, you may start. You may already lose your attention to listen to the lecture more because you're attracted to something.

So, so in short, the graph is a is a word language.

It's a general language for describing anything about the relations and interactions.

And luckily enough this word is a graph.

And, you know, there's an event graph, there's a computer networks, uh, you know, when the Covid was uh, with some say, uh,

there people are analyzing the spread out, the spread out of the Covid by this contagious graph, disease pathways and, uh, and even the food.

There's a lot of labs and, uh, you can say, uh, the, the, the, the medicines we're eating, they're there's molecules.

The molecule is also a graph. Molecule.

Graph is one of the hot topics a few years back for prediction and taking a taking a subway, taking the transportation.

There's also a, there's also a graph. And the graph is important because everything's connected.

And actually recently we got a we got a we got we got a grant federal grant, uh, on this uh, wildfire evacuation, uh,

in California, because we identify one interesting patterns you can say when certain disasters happen, people will.

Everyone will. For example, if you're using Google Map, they will give you the same route for evacuation or everyone just going to the same route.

And quickly the congestion happens and nobody can easily leave the district.

So which means a dynamic graph can can actually help us to reduce.

For example, evacuations also can be a graph, right.

Like um, I think the Friday, uh, last Friday I was picking picking my family from LAX and it was a nightmare.

I mean, I'm not sure whether anyone around LAX, but I went to LAX frequently.

But if you if you do, if you do, then you realize how bad the transportation is in, in Los Angeles.

And there's a lot of way to optimize. And I was surprised even at 1130.

We, uh, I don't forget which highway we're on, but it's still very slow.

Very slow. The reason is because the optimized graph are not well.

Is not well optimized. One more thing for that federal grant.

Whereas what we're saying is that we're trying to use the authentic AI to optimize the people's optimal evacuation,

especially for the person who don't have a car.

So for the person who don't have a car, potentially we can send the autonomous driving car to to save this, to save these people.

But everything. And also when disaster happens, people are going to call the call center or the emergency.

Uh, there's also a congestion. Like nobody can answer you. So that's why a guy can make a big, big difference in this type of situation.

One time I call the LA police for non for non-emergency stuff.

So basically my, my storage got got stolen for for I don't know what happens but for that

non-emergency car took 2 took us around 45 minutes to to really talk with someone,

and then we're waiting there for another 3 to 4 hours to actually officer to to to come to help.

So so, so, so the graph can really help the entire public service and many things.

However however, the graph itself is pretty challenging to do in many sense as well because we will show you why.

However, if you can really do graph smartly, especially when doing with the large language models,

you can potentially save the lives and, you know, make some real, real world impact.

Now, now we can actually say what's the what's the graph and how things are actually moving from the classical structures.

So we already talk about the convolutional neural network.

As you can see they are usually handle the images right.

Like images are like a grids They are connected to each other. They're very standard and they use the convolutions to, you know, get information.

And finally you just output something. Anyway, a moment ago we talk about this as sequential data.

Like text and speech and language. Use RNN to extract the sequential dependency so we can use our STM or transformers.

However graphs are way different. Way different than than this.

You know, existing structures like this are you can say whatever is images or text or other sequential data.

They look much more symmetric or organized.

However, the graphs are not something well organized. You can say they can be any format, they can be any connections, can be can happening,

and they have arbitrary size and they have very complex topology.

So, so which means there is no simple spatial locality like a grid.

And another thing that actually you can think images. It's a it's a special case of the, of the graph.

Right. Because this is. This is actually also a graph. And it's just a standard very uniform graph.

And also text is also a graph. So basically everything is a graph.

However the real graph for tackling is very complex and there's no fixed ordering of the node.

So basically so basically you only know who are the who are the who are the neighbors.

But it's very hard to model like a convolution. So convolution won't work.

And another thing for the for the graph is that it's changing a long list of time for the image.

For the image, usually they are fixed the same image, you know, ten minutes later it's still the same image.

However, consider this as a pandemic graph, which means how the disease are being propagated through the through.

Some, like a social network or transportation network,

there will be new person be added to the graph and potentially some someone got cured and or they got a,

they got a they got treated and you're going to. Move the notes from the graph.

So. Graph are much more dynamic than uh than uh, you know, uh, you know, their general,

uh, image and graph neural network is once a very popular topic in machine learning.

Back in 2023, it's one of the top, top keywords in Italy.

However, it's no longer the case. Uh, you know, ML changes that fast.

Uh, I highly doubt maybe now the most used word potentially is large language models or something.

Uh, so so the first part for us is to actually, uh, give a terminology or formalize, uh, how to represent a graph, right?

For example, whatever the movie is, or the protein structure or, you know, a social,

social graph, uh, we want a way to actually represent them in a, in a formal language.

Uh, yeah. Actually, regarding the formal language, there's a there's a new direction in large model,

which means the which means it's called a formal verification. So which means the.

This is something very interesting.

Uh, I didn't get enough time to explore, but what happens is that, as you can see, large language models and agents, they are free form.

They're dynamic. They they are pretty. They're pretty, uh, they're pretty, uh, they're pretty, uh, they're not deterministic.

Right. Like, uh, agent can go as we're showing, uh, in this lecture, uh, that the next word, next token depends on the previous token.

If you just change one token in the in the middle, the entire generation will be totally different.

It can be very different. Therefore, large language models are more free form and flexible.

So there's a new direction called a formal verification or verifiable agent for large language models which they are using.

Uh, they're using some like, uh, uh, provable language to, uh, to control or to to regulate the generation of the new large language models,

to say whether they are, whether especially for long horizon mathematical reasoning problems for for very complex mathematical reasoning and proof.

They want to make sure at each step or at a certain steps, this can be verified and using formal verification or proofs.

Anyway, it's a bit far from what we're talking about here.

But anyway, in most of the computer science problem, we want to have a formal definition for whatever.

So we can say for this for all these three graphs, by the end of day,

you can think there are one, two, three for four different nodes and they connect to each other.

And so that's why the number of the nodes will be four.

And the number of edges, which means you have 1234. It's four edges.

It's a very simple it's a very simple representation here. And and and actually to formalize the definition of the graph.

Bear with me, I will. I promise I will only talk for another 15 minutes because otherwise I feel someone look very look dying in this class.

Right. Because we don't have such a classroom that can fit everyone with a 200 300 person.

Uh, this reminds me. Some hotel in office back to back to my old job.

So basically, they don't have enough seats for everyone, but they know not everyone is coming to the office,

so they have this hotel in office, which means everyone just come to make a reservation one day before they checked in.

So given for example, we have 3000 people. They only have 2000 seats, but they got a prediction.

How many people won't come anyway? So do we really need a 300% classroom?

That will be a separate question, giving the attendance in a sense. But of course, as an educational institution, we would expect everyone to come.

So we couldn't do hotel. Um, uh, back to the graph.

Uh, so we need to represent a graph using some formal definitions.

So a graph is usually defined by relatively four different things.

The first thing is called a vertical. You can think that the vertex or node or something like that which means you have a multiple each nodes.

It's just like a one dot here. So that's a that's v. And another thing is relations which different ways two nodes.

Right. Like you have nodes one and nodes two. And their relationship is the edge.

For example as we're showing here the Peter and Albert, they're brothers and Peter and Mary are friends.

So these edges are showing their relationship as a brother and friends.

And the node type. A node type is another thing.

In all these three cases, you can say they're all like a they're all the homogeneous nodes, which means there are actors, there are just humans.

And these are proteins. However, in many of the graphs they are heterogeneous.

For example, this is Peter. Maybe this is. This is this is a.

This is a this is a dog or a cat named name.

The I don't know, hamburger, whatever.

So basically then this there's a it's not everyone's human.

So which means you have different nodes of the different types of notes.

So you have different types of the notes, which means you can you can add something here as the t.

And also your relations can be multiple different relations. Right.

Like their parents, their friends, their pets, their whatever.

You know, the human relations are hard to define, uh, and potentially heterogeneous.

Uh, so, so as you can say, so, so, so as you can say for a heterogeneous graph.

So usually it's very complex, including, uh, including.

Yeah, this is even too complex to complex. Too complex for me.

For example, give them paper. This are. This is one note. This is another note.

This is another note. They have different relationships. Write like publication, title, relationship.

What the paper said. Other papers. And they have also. So you can see this.

This is something called a something called heterogeneous graph which means that the relationships are very different.

The nodes are very different. And so that when we connect everything together it will be heterogeneous.

And and of course, as time goes by the graph can change.

So there's also dynamic dynamic graph which means maybe a you know a taking this relationship as an example.

Again, maybe a two years later. Marianne and Tom are no longer coworkers anymore.

Right? So we break this relationship. There's no more edge given, different time stamp.

Then you can combine the graph with the sequential data again.

So so so so all these are showing that whatever is an image or sequential data and graph, neural network or graph.

Everything can be mixed and match like images is a special case of the graph, and the graph can change with time.

And there is a sequential development and the text is also sequential.

Video is also image on the sequential spectrum. So so so by the end of the day we want to unify.

Not we don't want to unify everything, but we just want to give you the motivation that you can say,

all we're doing for deep learning is to find a good structure,

representation, and trying to find some efficient ways to represent the different structures and then learning the representations.

Uh, so how to build a graph? Uh, basically you just need to answer two questions.

What are the nodes and what are the edges. And uh, and then uh, then we have some standard ways to really represent represent the grades.

For example, there's two there's two types of the graph. So one is called an undirected graph.

Another one is called directed. So basically undirected just means you connect these dots.

You connect the nodes. And however there is no direction.

For example, let's say if this is another social network, L and M may be Larry and Mary.

They are just friends and there is no way saying Larry is a marriage friend.

However, Mary is not Larry's friends. Maybe that happens, right? You know, human relationships are complex.

Uh, what's, uh, maybe, let's say, I don't know, I don't have.

Yeah. If you if we use this human being's relationship as an example, I don't have a perfect one to be put in here.

Uh, okay. For example, this is, uh, Los Angeles. This is Maryland or something like that.

Right. Like a then you know that, for example, there is a flight between these two.

Uh, which means, sorry, there must be, like a round trip that, uh, sorry.

This is the direction again. But anyway, you can make sense. Like, if there's no specific direction from one to another one.

This is undirected. However directed there is usually saying you are taking five, six, six.

And for example, I'm teaching this five, six, six.

So there will be a direction which means the even next among the.

I won't be sitting there to listen to one of the class to teach me this course.

So there's directions here which may not be good or bad, because maybe I really want to sit there to listen to a bit.

And so I think these are a little bit dry because these are just concepts.

But before we actually jump into the real graph neural network, we need to know a bit more about graph.

So there's something called a bipartite graph. Right. Like a bipartite graph just mean you have two types of nodes.

For example authors to the papers were, you know, like yourself like students to different classes.

So you have a for example, you may take 566 and five six, seven.

Another person take five, Six, six and five. 99 or something?

Um, I don't know. Yeah. I think we have 5.9995 99.

Actually, this also reminds me. Um, at USC, we offer we also offer a set of this advanced research seminar course.

Uh, PhD level 6.99. But in the past, a lot of, like, undergraduate and graduate students are also taking that course.

Uh, it's also very interesting because many of the topics are quite advanced and they're research driven.

All you need to do mostly for this course are just writing research papers.

For example, I teach one. I taught 16.99 course called A Trustworthy and Adverse Real Foundation Models last semester.

And I'm going to teach one more. This is a research paper reading project lead.

Uh 6996999. Course called something called AI auditing.

I don't remember the names, but, uh, it's I think I do have the names, but for the person who are interested.

Feel free. It's not. It's not released yet, but uh uh, but, uh, I think, um.

Yeah, it's not released yet, but we're going do this. Going to do this. Auditing AI systems, Foundation models and agents.

It's scheduled, but, uh, we still need to prepare for it.

Uh, I mean, for the person who, like who enjoy the advanced topic, you can try to check out a few 6.99,

because many of the 6.99 are only, uh, are only being taught for once or twice because people are going to switch.

For example, for my for the ones I taught before, like, uh, trustworthy and adverse to foundation models,

I'm not going to I'm not going to teach it again because I think I find something more interesting like this,

uh, auditing agency and foundation models.

But many of these things are overlapped. Uh, so usually as long as the instructor gives you the permission, you can take it.

Uh, so for the bipartite graphs usually have a two groups of the nodes, and they can get some relationships.

Uh, and even for a graph, a lot of tasks can be very interesting.

And there are multiple levels of different tasks. So so let's say this is a this is a huge graph.

I'm not sure what are they. But but you can do two things at least.

The, the one thing is that you can first predict what's this graph. You can do this a graph generation graph prediction.

Let's see if you think this. Let's say if this is a if this is a molecule graph you can predict the functions of the molecule.

So so in the past a lot of pharmaceutical are working with the AI firms, especially Stanford.

They're working with genetics to develop lots like AI generation of the, you know, medicines and molecules.

So you can you can predict what the functions of such a molecule graph also on the node level.

You can also do a lot of like a prediction. If this graph is a it's a, it's a, it's a transaction graph.

You can predict whether this is a money laundering or whatever, something like that.

Or maybe money laundering is better.

Example here you can look into a community of the community of the nodes, which means in each of the large graphs there's multiple.

You can consider that as the multiple smaller graphs together.

So you can predict for example, are these persons if each if each of them represent a party like a bank or a firms or whatever,

are they doing money laundering by looking at their relationships, their transactions, etc., etc..

There's also each level of prediction. So you're going to predict whether for example, uh, so,

so 111 functionality people heads for the social network will be they're always saying making a recommendation.

You may know this person and recommend you to add them as friends on social network, but the major question will be,

if I really know this person, I potentially already add them as a as a good friend, but many people don't add this person as a friend.

There must be a reason they know each other, but they don't add each other as a friend.

This is arch prediction, which means they predict whether you know each other or not.

However, on the social engineering side, people don't really like certain relationships.

So. So therefore, as a summary, the graph have this node level, link level and graph level prediction.

So you can say from the from the from the simplest one to the relation prediction to the entire graph level prediction.

So there's a lot of tasks you can do right. Like. As long as you can say there are some relationships among these nodes are now so so

so so so one very typical one will be one very typical ones will be if you know,

for example, if you know the structures among different, let's say, people and uh.

you are going to predict, I don't know what are the. Eh.

I don't have a perfect example here. For example, let's say, uh, we got a group of people that are eyeing.

They are either buying Tesla or Toyota, and we already know their relationship.

For example, this person's, uh, its neighbor for all these other nodes.

And let's say this is a Toyota and these are Tesla.

And you are going to predict whether their neighbors are going to also purchase the Toyota or Tesla,

because luckily in the same community, they have the same like flavor or preference.

Like they are similar. They impact each other.

Maybe if this two person in this center of the community, they are all buying Toyota and maybe they will impact other people to buy in Toyota as well.

So that's an impact. And that's also a prediction. Machine learning at a graph level, at a node level can do.

They're going to predict which class certain nodes are belonging to.

Uh this can many of the tasks are node level tasks.

And and we're in the past. We're also doing something called the node level anomaly detection, which means we're trying to identify.

For example, let's say if in this community this person is becoming red buying a Tesla.

So which means hey, this person looks very different among his neighbors.

So we can use machine learning to identify the person who look very different in this sense.

But of course, most of the predictions are not around human beings.

It's about a general sense, because any prediction around human beings can be really tricky.

Just revisit the movie Minority Report yesterday and this reminds me the the the danger and the risk of the AI.

Nowadays. We should be much more careful when when doing a human related machine learning task.

Uh, and uh, and let me see, where should I stop?

Um. Yeah, I will stop in 5 to 6 slides.

So so so. Yeah.

So. But we're almost there. We're almost there because we have a lot of contents to, uh, to cover as well.

Um, right. So, so as you can say, so as you can say.

Uh, right. Uh, so basically so, so basically if we have this graph and we have this ABCd cfg nodes,

and for each of the nodes we can know a few information, right. For example their degree.

The degree just mean how many other nodes they are connect to. For example for for for for this graph B sorry.

For node b, it has a d graph three because it connects to a, c,

d and the and the node importance position because node degree just means if if the degree is higher,

which means it connects to more other nodes, which means it's higher.

It's more important than other nodes. It can play more impact to more neighbors.

For example. Just a look like this. D has a higher degree, right?

1234. So which means both CPU can impact can be impacted by nodes B but of course its vice

versa is bidirectional which means D will also be impacted more by other nodes.

It's also like a social network. Someone's always the friends for every single person you know in this world.

Uh, they have a lot of information, but they're also impacted, uh, and, and therefore, uh, and therefore we also besides to,

besides to the node degree, we also want to know the substructure around different nodes, which can also be useful.

A very useful thing, as I mentioned before that this is a link level prediction, which means you you get a you get a you get a graph,

but you don't know whether potentially there should be an edge or relationship between A and B.

For example social network you want to predict whether you know Tom and and they should be a friend or not.

Then you are going to suggest, okay, just like LinkedIn.

They're going to make a prediction to say whether you want to add this person to your social networks.

Uh, I think many of the times they're for LinkedIn, I would simply click yes, I would add this person.

But for other real social network, I won't because there must be a reason I don't want to add this person,

uh, for a link that I don't know most of the people, so I'm pretty happy to add them anyway.

Uh, and we will, we will, we will conclude with a few examples, uh, uh, so that, uh, so, so, so recommender system is a very typical thing.

And recommender system. Now this is still a big topic for general machine learning because recommender system make money.

Uh, you know, whatever the movie you're saying.

The only difference is that now the recommender system, they're moving to a larger models rather than the typical old ways.

How many people are still using Google or whatever to search for things? Yes, there will be still there still are there still few which are great.

So that's why. That's why the softwares are software.

Firms are still surviving. Well, but my personal take is that I haven't used I haven't used in Google for a while.

Indeed, like my new entry point is whatever. The agents were large language models,

and I also believe the future of the entry point of anyone with the this world will be more like an agent for something.

So. So with that in mind, that's a very interesting thing to say.

Whether you can do like a genetic based recommendation systems or etc. etc. and another

interesting work worth doing that whether you can optimize your retrieval ability by agents.

For example, let's say if one day Jensen Huang saying, I want to find the person who can design the next generation of the GPU.

They do the large model search and it immediately returns your name. You got a job.

So? So. Which means that's also very important to say whether you can do certain optimization of your personal, personal or trademark.

In the Atlantic time, for example, you know, in the past.

Now if you want to, for example, if you get your personal website, you can add something called LM s dot text.

So which means there's a specific file for agents and large models to read.

And you can associate it yourself along with certain keywords. And it's more like a personal branding optimization.

In a larger model, time and larger large language models are are favoring certain types of the presentation and structures of the personal websites.

And this might be a business for, for for some startups.

Right. Like they help you to they help you to find a they help you to promote your personal retrieve ability online and also.

And also I think vice versa. We also get a paper to reduce your retrieve ability during a generic time,

which means not everyone, not everyone wants to be retrieved online for the privacy protection.

How to prevent large models and genetic data to retrieve your information.

That's a separate business to work on. It's very interesting. I mean, however, recommender system will matter for most of the people.

But again, the very classical,

large or very classical recommender system just means it's a graph like the similar person enjoy the same or prefer the same items,

or the same movies, or what are the same things. So, so which means if you build a if you build this bipartite graph,

which means the users and items, their association and their preference, their purchase history,

then you can predict what the the for example both both this A and C they purchases the both if they purchase a similar things

or they are very similar in other pictures and you are going to predict maybe this person will also purchase this idea,

this item, so that they will make a recommendation. It's more like a running of the shopping shopping website.

Once you make a once you once you add something to your cart, they have the they have something you may also like.

It's based on sort of like a graph recommendation. Uh, yeah.

Graph based recommendation. Something very big in the last few years.

Um, and of course, people are using this for the drug and protein, uh, prediction,

especially for functional whether certain things will give you certain functions to cure certain things.

So that will be. So that would be great. I think I will safely stop here to save a few people's lives tonight.

It's still it's still early, but, uh, enjoy your rest of the week.

`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "Why Sequential Data Breaks the CNN Approach",
    body: `CNNs handle images because pixels sit on a grid with spatial locality — nearby pixels relate to each other, and a filter can exploit that. Sequential data has a different structure entirely, and it needs a different architecture.\n\nThe professor motivated this with speech recognition. Say you have ten seconds of audio and you want to transcribe it. The obvious approach is to chop it into one-second clips and predict a letter for each one independently. That fails, and the reason is the whole point of this lecture: audio has internal structure. The sounds are consecutive, each one depends on what came before, and slicing them into independent pieces throws away the context. Using bigger chunks doesn't fix it either — you still lose the connections between chunks.\n\nThe same applies to natural language, music, and video. Your next word depends on the previous word, and the one three words back. The future depends on the past. This is the autoregressive property from Lecture 1: given "once upon," the next token might be "a" at 62%, "time" at 23%, and so on, with those probabilities determined entirely by the preceding context.\n\nThere's a second problem specific to sequences: variable length. Images are usually a fixed size, but "a big house" is three words and "a car on the road" is five. You could pad everything to a common length, but there's no good choice — some sentences are enormously long, and padding to that length wastes computation on everything else.\n\nSo the requirement is a model that handles arbitrary-length sequences while preserving the dependencies between positions. That's what RNNs were built for.\n\nExam insight: know the two properties that make sequential data hard — internal dependencies between positions, and variable length. Both drive the architecture choices that follow.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The RNN Idea: Share One Weight Matrix Across All Positions",
    body: `Start with the naive approach so the actual idea makes sense. If you need to produce four outputs from a sequence, you could train four separate networks — θ₁ for position 1, θ₂ for position 2, and so on. This works, but it collapses immediately on real data: a three-word caption needs three networks, a five-word caption needs five, and a hundred-word caption needs a hundred. You'd need a different model for every possible sequence length, and the parameter count grows without bound.\n\nThe recurrent neural network's answer is to use the *same* weight matrix W at every position. One set of parameters, reused however long the sequence runs. A hundred-word sequence uses the same W as a three-word one.\n\nThe natural objection is: if every position uses identical weights, won't every position produce an identical output? No — and understanding why is the core of the architecture. The output at each position depends on two things: the shared weights W, *and* the hidden state carried forward from the previous position. The hidden state changes as you move through the sequence, so the same W produces different outputs at different positions.\n\nThe professor's example: predicting "a car on" word by word. The prediction at position 2 depends on the state after position 1 plus the current input. The prediction at position 3 depends on the state after position 2 — which already encodes both earlier words. Same weights throughout; different states, different predictions.\n\nThis gives you exactly what sequential data needs. Length no longer matters, parameters don't grow with sequence length, and the dependency between positions is carried by the state.\n\nExam insight: "shared weights across positions, differentiated by the hidden state" is the one-sentence summary of what an RNN is. Be ready to explain why shared weights don't produce identical outputs.`,
  },
  {
    tag: "📐 Formula",
    title: "The RNN Recurrence and Its Computational Graph",
    body: `The recurrence relation is the formal version of the previous card. At each timestep t:\n\nh_t = f_W(h_{t−1}, x_t)\n\nThe new hidden state is a function, parameterized by the shared weights W, of the previous hidden state and the current input. Expanding f_W for a vanilla RNN, it's a non-linear activation applied to a weighted sum of two terms: one weight matrix multiplying the previous state, another multiplying the current input. So W really has two parts — W_hh for the recurrent connection and W_xh for the input.\n\nThe prediction at each step comes from a third weight matrix applied to the hidden state: y_t = W_hy · h_t.\n\nAs a computational graph (the Lecture 3 concept), this unrolls cleanly. Start with h₀, usually initialized to zeros. Feed h₀ and x₁ through the shared W to get h₁. Feed h₁ and x₂ through the *same* W to get h₂. Continue down the sequence. Every block in that chain uses identical weights. Each hidden state can produce an output prediction.\n\nThis is why you don't hand-derive anything. Describe the computational graph — define how the loss is computed from the predictions — and PyTorch or TensorFlow handles the gradients automatically.\n\nOne property worth noting: the previous output can become the next input. If the model predicts "e" after "h," that "e" feeds back in as the input at the next timestep. That's the autoregressive loop, implemented directly in the architecture.\n\nExam insight: know the recurrence h_t = f_W(h_{t−1}, x_t) and that W is shared across all timesteps. Know that the prediction comes from the hidden state through a separate weight matrix.`,
  },
  {
    tag: "💡 Concept",
    title: "Character-Level Language Models and Why Prefix Matters",
    body: `The professor's worked example makes the mechanism concrete. Train on the word "hello," one character at a time. Input "h," target "e." Input "e" (with "h" in context), target "l." Input "l" (with "he" in context), target "l." Input "l" again (with "hel" in context), target "o."\n\nLook at those last two steps. The current input is the *same character* — "l" — but the target differs: first "l," then "o." Identical input, different output. The difference is entirely in the prefix, and the hidden state is what carries it.\n\nThis is also the clearest possible illustration of how LLMs answer questions. The model is only ever predicting the next token based on preceding context. So when you ask "what color is a basketball," the question itself becomes the prefix. Change the prefix and the generation changes completely.\n\nHe illustrated this with the dog example. With no prefix at all — free writing — the model emits whatever is most probable in its training data, maybe "a dog." Choosing "cat" instead would be fine, since "a cat eats" continues perfectly well. But if the prefix is "the photo shows the dog," predicting "cat" is now wrong, because the context constrains what counts as correct.\n\nThe Shakespeare demonstration showed what a small model trained only on Shakespeare's works produces. Early in training it's nonsense; with more training it starts resembling the writing style. The professor was careful here: these small models aren't gaining intelligence, they're learning which words tend to follow which.\n\nThis is also why local LLM generation appears word by word. Each new token requires the previous one — it's inherently sequential at generation time.\n\nExam insight: the "l → l" versus "l → o" example is the cleanest demonstration that the hidden state carries context. Expect to explain why identical inputs can produce different outputs.`,
  },
  {
    tag: "💡 Concept",
    title: "Backpropagation Through Time and Truncation",
    body: `Training an RNN uses the same machinery as any network: compute predictions, compute a loss at each position, sum them, backpropagate. But the unrolled structure makes this expensive in a specific way.\n\nBecause each hidden state depends on the one before it, the gradient has to flow backward through the entire chain. And because backpropagation needs the intermediate activations from the forward pass, you must store every hidden state across the whole sequence. Long sequence, enormous memory. This is backpropagation through time, and the professor named it as a major reason RNNs never scaled into anything resembling modern language models despite existing for decades.\n\nThe practical fix is truncated backpropagation through time. Instead of backpropagating across the full sequence, break it into chunks — say three timesteps each. Compute the loss within a chunk, backpropagate through just that chunk, update, then move to the next. The hidden state still carries forward between chunks, so the forward pass is unbroken; only the gradient path is cut.\n\nThe trade-off is explicit. Full BPTT is more exact and captures long-range dependencies, but it's memory-hungry and hard to train. Truncated BPTT is far cheaper and faster, but you lose gradient signal for dependencies longer than your chunk size.\n\nExam insight: know why RNN training is memory-expensive — every intermediate hidden state must be stored for the backward pass — and that truncation trades long-range gradient signal for tractability.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Vanilla RNNs Fail on Long Sequences",
    body: `This connects directly back to Lecture 3's gradient problems, and the professor explicitly said it should "ring a bell."\n\nWhen you backpropagate through an unrolled RNN, the gradient from a late timestep to an early one is a product of many terms — one factor per timestep in between, each involving the recurrent weight matrix and the activation's derivative. Standard chain rule, but with a very long chain.\n\nIf those factors are consistently smaller than 1, the product shrinks toward zero. Vanishing gradient: the early timesteps receive almost no learning signal, so the network can't learn long-range dependencies. If the factors are consistently larger than 1, the product explodes, producing wild updates.\n\nSo RNNs face both failure modes from Lecture 3, and more severely, because the chain length equals the sequence length rather than the layer count. A 100-word sentence means a 100-step chain.\n\nThe fixes split the same way as before. Exploding gradients are the easier case — gradient clipping rescales the gradient while preserving its direction. Vanishing gradients need something structural, which is the motivation for LSTM.\n\nExam insight: this is a recurring theme, so expect it. The specific point for RNNs is that chain length scales with *sequence* length, which is why they struggle on long sequences specifically.`,
  },
  {
    tag: "🏗 Foundation",
    title: "LSTM: Gates That Decide What to Remember and Forget",
    body: `The motivating example: "Maya lives in Boston and she likes tea. Later she moves to Seattle." Query: where does Maya live now? The answer is Seattle, which requires the model to have *updated* a stored fact, not merely retained everything.\n\nA vanilla RNN can't do this cleanly. It has one hidden state that mixes everything — long-range facts and immediate local details all blended together. As the sequence grows, earlier information gets diluted. There's no explicit mechanism to say "this fact is now obsolete, replace it."\n\nLSTM (Long Short-Term Memory) adds that mechanism through gates. A gate is a learnable value between 0 and 1 acting as a continuous dial rather than a hard on/off switch. There are three:\n\nThe forget gate decides how much of the existing memory to retain. High means keep it, low means discard it. When "she moves to Seattle" arrives, the forget gate for the location fact should drop low.\n\nThe input gate decides how much new information to write in. When Seattle arrives, this should be high. These are separate gates deliberately — forgetting old information and writing new information aren't necessarily the same decision, and the professor was explicit that they don't have to match.\n\nThe output gate decides how much of the internal cell state to expose as the hidden state at this step.\n\nWalk the example: "Maya lives in Boston" writes Boston into memory. "She likes tea" is unrelated — the forget gate stays high so the location survives, since a drink preference shouldn't erase a location. "She moves to Seattle" drops the forget gate for the stale fact and raises the input gate for the new one. Query answered correctly.\n\nThe professor said directly: "We're not going to test you on the details at all." The complete LSTM cell diagram is reference material. What matters is the motivation and what each gate does.\n\nHe also flagged the limitations that motivate attention: three trainable gates per step is complex and hard to train, and the cell state is fixed-size, so there's no principled way to know when to compress or drop.\n\nExam insight: know the three gates by name and function. The cell-diagram internals are explicitly not tested.`,
  },
  {
    tag: "💡 Concept",
    title: "Attention: Weighting the Past by Relevance",
    body: `The motivating analogy is the cocktail party. In a noisy bar you can follow one conversation while filtering everything else out. Human attention emphasizes some things and suppresses others, dynamically, based on what you're currently doing.\n\nThe question is whether a network can do the same — attend to the parts of its input that matter for the current prediction, instead of compressing everything into one fixed state.\n\nHis image-captioning example: a scene with a tree, a person, and a frisbee, each region encoded as a vector. Generating the caption word by word, the weights across those regions shift. Starting out, "person" gets the highest weight because people are common sentence subjects. Once "a person throws" has been generated, attention moves to the frisbee — a person is unlikely to be throwing a tree. Different prefix, different weights over the same regions.\n\nFor language, the example is "the dog chased the ball. It..." — what does "it" refer to? Could be the dog, could be the ball. Resolving it requires looking back at the earlier tokens and weighting them. Self-attention computes exactly those weights: given the current position, how relevant is each previous token? In his illustration the dog scored around 35% and the ball around 25%, so "dog" is the more likely referent.\n\nThe professor's shortcut for remembering this: attention is just weights — how much each part of the context matters to the current position. The context vector for a position is the weighted sum of the previous tokens' representations.\n\nCompare this to LSTM. Both are learnable mechanisms for deciding what matters. But LSTM compresses everything into a fixed-size state and makes forget/keep decisions step by step, while attention keeps the full context available and computes fresh relevance weights for each position. The professor called attention "more elegant."\n\nExam insight: "attention = learned weights over the context, recomputed per position" is the core idea. The "it" example is the cleanest demonstration of why the weights have to be dynamic.`,
  },
  {
    tag: "📐 Formula",
    title: "Positional Encoding: Why Order Has to Be Encoded Explicitly",
    body: `Self-attention has no built-in notion of order — it computes relevance weights between tokens without knowing which came first. That's a problem, because word order carries meaning.\n\nThe professor's example: "dog bites man" versus "man bites dog." Identical tokens, completely different meaning. Or "the dog chased the ball" versus "the ball chased the dog." If you only encode the words, both versions produce the same representation.\n\nSo position must be encoded explicitly. Each token gets two vectors: its word embedding (what the token is) and its positional encoding (where it sits in the sequence). These are added together to form the input representation. "Dog" at position 2 and "dog" at position 5 produce different input vectors.\n\nThis gives the three ingredients of language generation that he summarized together:\n\nOrder — the same tokens in different positions mean different things, handled by positional encoding.\n\nVisibility — future tokens must never be visible when predicting. This is stronger than it sounds. He stressed that revealing even one future token changes everything downstream, because generation is autoregressive and every token shifts the distribution over what follows. Partial lookahead is still cheating.\n\nContribution — each past token contributes with a different weight, which is attention.\n\nControl those three and you have language generation. That's the summary he gave.\n\nExam insight: know that token embedding and positional encoding are *added* to form the input, and know all three ingredients. The "dog bites man" example is the cleanest justification for positional encoding.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The Transformer Block: Attention + MLP, Stacked",
    body: `A transformer block has two parts, and the professor was clear there's "nothing crazy" about it.\n\nFirst, self-attention. Each position computes weights over all other visible positions and builds a context vector as a weighted sum. This is where information is exchanged *across* positions — how much does each other token matter to me?\n\nSecond, an MLP (multi-layer perceptron) — the ordinary feedforward network from Lecture 3, alternating linear and non-linear layers. The attention step produces context; the MLP transforms that context into a compressed vector representation. This operates *within* each position. Like everything else in the architecture, the MLP weights are shared across positions.\n\nSo the division of labor is clean: attention exchanges information between positions, the MLP transforms features at each position.\n\nReal models stack many of these blocks. Each block has the same structure but its own weights. Input vectors go through block 1, then block 2, then block 3, and so on, and the final block's output produces the prediction. More blocks means more parameters, more capacity, and more computation. That's the main lever for scaling up.\n\nThe generation loop: take the prefix ("the dog chased the ball."), run it through the stacked blocks, predict the next token ("it"), append it to the prefix, and run again. The next pass predicts "barked" — and because "it" attends more strongly to "dog" than to "ball," the continuation is consistent with the dog being the subject.\n\nThe professor's interview summary — what's enough to confidently explain a transformer: positional encoding, tokens, self-attention, converting to a representation via MLP, and autoregressive generation. The detailed internals come in block 9.\n\nExam insight: know the two components and their distinct roles. "Attention exchanges across positions, MLP transforms within a position" is the compact version.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Transformers Enabled Large Language Models",
    body: `This is the central claim of the lecture, and it's about training, not quality.\n\nAn RNN trains sequentially. To compute the hidden state at position 5 you need position 4, which needs position 3, and so on. That dependency chain can't be broken, so training can't be parallelized across positions. You wait for each step.\n\nTransformers break that dependency. During training you already have the complete target sentence — "the dog chased the ball. it barked." That gives you every prediction pair at once: "the" → "dog," "the dog" → "chased," "the dog chased" → "the," and so on through the sentence. Because self-attention computes each position's context directly from the visible tokens rather than from a sequentially-computed state, all these pairs can be processed in a single parallel pass.\n\nThat's the unlock. Training can be batched and distributed across many GPUs, each handling different data and synchronizing gradients. Without breaking the sequential dependency, you simply cannot train at the scale modern LLMs require, however many GPUs you own. The professor tied this directly to why GPU infrastructure became so valuable.\n\nThe crucial asymmetry, which he repeated several times: training parallelizes, generation does not. At inference you don't know the next token until you've produced it, so output still emerges one token at a time. Training is parallel; generation is sequential. That's why responses stream in token by token.\n\nThe paper is "Attention Is All You Need" (Google, 2017). The professor's honest assessment, consistent with Lecture 1: "a very difficult paper for anyone to read. I never fully understand, but it's a great paper."\n\nExam insight: this is the most likely conceptual question from the lecture. Transformers parallelize *training* by removing the sequential dependency between positions; generation remains token-by-token regardless.`,
  },
  {
    tag: "💡 Concept",
    title: "Bidirectional Models and What Survived a Decade",
    body: `Everything so far has run left to right, because generation must. But during *training* on a complete sentence, there's no real future — the whole sequence is available. So you can also learn right to left.\n\nHis example: "she sat on the bank of the river." Left to right, "she" predicts "sat." Right to left, "river" helps predict "of." Both directions carry information, and direction is a human convention rather than a property of the language. Bidirectional models — bidirectional LSTM being the classic example — train both ways and learn richer structure. The constraint is that this only works when the full sequence is available, which rules out generation.\n\nThe professor closed the sequential section by stepping back over roughly a decade of architectures and naming what persisted:\n\nState — the idea that there's something carried forward summarizing what's been seen. Every architecture has some version of it.\n\nShared parameters — reusing weights across positions rather than training separate parameters per position. Universal, because the alternative explodes.\n\nKnowing which evidence matters — LSTM does it with gates, transformers with attention weights, but the question is the same.\n\nStructured dependency — how positions connect to each other.\n\nHe also noted the field is circling back: current research includes recurrent and hybrid fixed-state decoding, which revisits recurrence after transformers displaced it. His framing, consistent with Lecture 2: researchers repackage old ideas, and something being old doesn't mean it's finished.\n\nExam insight: bidirectional training works only when the full sequence is available, never for generation. The four surviving principles are a good framework for comparing architectures.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Graph Neural Networks: When Data Has No Fixed Layout",
    body: `The last section introduced the third data structure from Lecture 4's taxonomy. Images are grids, text is sequential, and graphs are neither.\n\nThe professor's claim is that the world is a graph. Social networks, molecules, transportation systems, disease spread, transaction networks, citation networks — all graphs. Even images and text are special cases: an image is a very uniform grid-shaped graph, and text is a graph with simple linear connections. Graphs are the general case.\n\nWhat makes them hard is exactly what makes grids easy. A graph has arbitrary size, complex topology, no spatial locality, and no fixed node ordering. Convolution relies on a consistent local neighborhood structure — it needs to know what "the pixel to the left" means. In a graph you only know who a node's neighbors are, with no canonical arrangement. So convolution doesn't transfer. Graphs are also frequently dynamic: nodes and edges appear and disappear over time, unlike a static image.\n\nFormally a graph needs four things: vertices (nodes), edges (relations between nodes), node types, and edge types. When all nodes are the same kind — all people, all proteins — it's homogeneous. When types are mixed — people, papers, pets, institutions — it's heterogeneous, which is common and much more complex. Edges may be undirected (Larry and Mary are friends, symmetric) or directed (the professor teaches the course, not the reverse). A bipartite graph has two distinct node groups with edges only between them, like users and items, or students and courses.\n\nUseful node properties include degree — how many neighbors a node has — which serves as a rough importance measure. Higher degree means more connections, more influence on neighbors, and more influence received.\n\nExam insight: know why convolution doesn't work on graphs (no fixed ordering, no spatial locality, arbitrary topology) and the basic vocabulary: nodes, edges, homogeneous vs. heterogeneous, directed vs. undirected, bipartite, degree.`,
  },
  {
    tag: "💡 Concept",
    title: "Three Levels of Graph Prediction Tasks",
    body: `Graph tasks organize by the level at which you're predicting. The professor walked through all three with examples.\n\nNode-level prediction classifies individual nodes. On a transaction graph, is this account involved in money laundering? His cleaner example: in a community where people influence each other, if several central members buy Toyotas, will their neighbors buy Toyotas too? The underlying assumption is homophily — connected nodes tend to be similar. A related task is node-level anomaly detection: if everyone in a tight community bought a Toyota and one person bought a Tesla, that node stands out structurally.\n\nLink-level prediction asks whether an edge should exist between two nodes that aren't currently connected. This is the "people you may know" feature on social networks. He made a sharp observation about it: if you genuinely knew someone well, you'd probably have added them already. So when two people clearly know each other and haven't connected, there's often a reason — which makes the prediction socially tricky even when it's technically accurate.\n\nGraph-level prediction classifies an entire graph. Given a molecule represented as a graph of atoms and bonds, predict its function — which is the basis of AI-driven drug discovery, and why pharmaceutical companies partner with AI labs.\n\nRecommender systems are the most commercially important application, and they're graph problems at heart. Build a bipartite graph of users and items with edges for purchases or ratings. If users A and C have similar histories and A bought something C hasn't, recommend it. That's the "you may also like" row on any shopping site.\n\nThe professor added a caution worth carrying: prediction about human beings is genuinely tricky, and he referenced Minority Report as a reminder to be careful with human-related ML tasks.\n\nExam insight: know the three levels — node, link, graph — with an example of each.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Exam Logistics and Admin From This Lecture",
    body: `NOT EXAM CONTENT, but the most actionable material in the lecture — several things changed or got confirmed.\n\nThe midterm is multiple choice only. He said it directly: "it's a multiple choice questions only" and "there's only one single correct answer for each of the questions." Combined with Lecture 4's confirmation that it's open book, you now know the format completely. His warning: don't assume multiple choice is easy. With a written answer you can earn partial credit; with multiple choice you're either right or wrong.\n\nThere will be a review session before the midterm. A student asked whether every slide is fair game, and he said the review session will cover what's actually in scope — "otherwise there's too many slides." He also said sample questions from past exams will be shared, while noting each year's exam is newly written because he adds material every semester.\n\nAdvanced research content won't be tested. "Most of the advanced knowledge won't be covered. We're not expecting people to understand the research in depth." His Arizona State guest lecture is explicitly out of scope. Transformer internals are deferred to block 9 or 10 — this lecture was the introduction.\n\nOn quizzes: still dynamic, still possibly triggered by low attendance, and there was no quiz on Sep 28. The important new detail is that if no quiz happens by the end of the semester, those points get redistributed to the final report. You can't be penalized by a quiz that never occurred.\n\nOn the assignment: he has decided there will be one, and it will appear on the course schedule. It isn't released yet — he's still designing it. The design goal is notable: it won't test raw programming or AI ability but your ability to use agents well, with tricky questions specifically built so that naively prompting an agent won't work.\n\nOn proposals: they're being graded now, with feedback expected by the end of the following week. He insisted on human feedback rather than AI-generated feedback — his reasoning being that if everyone writes with AI and reviews with AI, the exercise is pointless. Each team also gets an assigned TA as their primary contact.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Detours: The Career Story, Open Source, and Industry News",
    body: `NOT ON THE MIDTERM — the first twenty minutes were a career talk he'd given at Arizona State, which he confirmed is out of scope. It's the most personal material of the semester and worth reading once.\n\nThe arc: he chose computer engineering because he liked watching video games and his mother suggested something computer-related. He disliked it — analog circuits and simulation drove him crazy. His first job was at Siemens working on PLM software in C++ and Perl, where he learned the actual software engineering lifecycle: version control, small incremental commits, peer review, continuous integration, and negative testing. He learned the last one by breaking the production line for half a day as an intern.\n\nThen rejection. He applied to about 12 master's programs and was rejected by all 11 US schools, including USC. He found out while driving around California visiting campuses he hoped to attend. Toronto accepted him late in April. There he encountered LeetCode for the first time and found coding interviews genuinely miserable — he got anxious, and he's clear it wasn't his strength.\n\nSo he routed around it. PwC didn't do coding interviews, only case interviews, so he moved into business analytics. There he was one of very few people who knew programming or AI, which gave him latitude. Working on bank risk modeling he discovered anomaly detection — and found no mature Python library existed. So he wrote one, on nights and weekends.\n\nThat library is the hinge of the whole story. Nine years later it has roughly 60 million downloads and about 10K GitHub stars. It got him his PhD offer — his advisor valued demonstrated interest in a niche field over a conventional research record. It led to anomaly detection research, then to AI auditing, then to Audit Commons.\n\nHis advice follows directly: if you haven't done open source, try it, even contributing small fixes to someone else's project. When you want to stand out for a PhD or a job, showing genuine engagement with a field can matter more than another paper.\n\nThe closing point: "you have done many things in your past, some of them not even about technology, but finally things will piece together." Fifteen years ago he was designing circuits. Ten years ago he was selling PowerPoints about bank fraud. Now he's teaching this.\n\nIndustry notes from the same session: AMD acquired World Labs for $8.3 billion; Claude Sonnet 5.5 was released that day with strong agentic coding performance at roughly a tenth of the flagship price; and he noted labs are subsidizing token prices, so it's a good time to use them heavily. He also raised an AI-safety story — a marketplace assistant that negotiated a price down and then disclosed a user's home address to arrange a meetup — as evidence that agent governance is becoming a serious field, and a good fit for people with policy, economics, or finance backgrounds.`,
  },
];

const VOCAB = [
  { term: "Sequential data", def: "Data where order matters and each element depends on previous ones — language, audio, video, time series." },
  { term: "Variable-length input", def: "Sequences differ in length, unlike fixed-size images. Padding is a crude fix; RNNs handle it natively via shared weights." },
  { term: "Recurrent neural network (RNN)", def: "Processes sequences by applying the same weight matrix at every position, carrying a hidden state forward." },
  { term: "Hidden state", def: "The vector carried between timesteps that summarizes everything seen so far. Why shared weights still give different outputs." },
  { term: "Recurrence relation", def: "h_t = f_W(h_{t−1}, x_t) — the new hidden state is a function of the previous state and the current input, using shared weights W." },
  { term: "Weight sharing (RNN)", def: "One weight matrix reused at every position, so parameter count doesn't grow with sequence length." },
  { term: "Unrolling", def: "Expanding an RNN into a computational graph with one block per timestep, all blocks sharing the same weights." },
  { term: "Backpropagation through time (BPTT)", def: "Backprop over an unrolled RNN. Requires storing every intermediate hidden state, so memory grows with sequence length." },
  { term: "Truncated BPTT", def: "Backpropagating within fixed-size chunks instead of the full sequence. Saves memory; loses long-range gradient signal." },
  { term: "Character-level language model", def: "Predicts the next character from previous ones. The 'hello' example shows identical inputs giving different targets by context." },
  { term: "One-to-many / many-to-one / many-to-many", def: "RNN task shapes: image captioning, sentence classification, and video captioning or translation respectively." },
  { term: "LSTM (Long Short-Term Memory)", def: "An RNN variant with gates that explicitly control what to retain, write, and expose. Fixes vanilla RNN's memory problems." },
  { term: "Forget gate", def: "Decides how much existing memory to retain. Low when a stored fact becomes obsolete." },
  { term: "Input gate", def: "Decides how much new information to write into memory. Separate from the forget gate by design." },
  { term: "Output gate", def: "Decides how much of the internal cell state to expose as the hidden state at this step." },
  { term: "Gate (soft)", def: "A learnable value between 0 and 1 acting as a continuous dial rather than a hard on/off switch." },
  { term: "Cell state", def: "LSTM's internal memory, updated through the gates and separate from the exposed hidden state." },
  { term: "GRU", def: "Gated recurrent unit — a simplified LSTM variant with fewer gates. Mentioned as optional material." },
  { term: "Attention", def: "Learned weights over the context measuring how much each previous position matters to the current one." },
  { term: "Self-attention", def: "Attention computed within one sequence: each position weights all other visible positions in that same sequence." },
  { term: "Context vector", def: "The weighted sum of previous tokens' representations, using attention weights as the weighting." },
  { term: "Positional encoding", def: "A vector encoding a token's position, added to its word embedding so order is represented." },
  { term: "Order / visibility / contribution", def: "The three ingredients of language generation: position matters, the future must stay hidden, and each past token contributes differently." },
  { term: "Causal masking", def: "Hiding future positions during training so prediction can't see ahead. Even one revealed token invalidates it." },
  { term: "Transformer block", def: "Self-attention (exchanging information across positions) followed by an MLP (transforming features within a position)." },
  { term: "MLP (in a transformer)", def: "The feedforward sublayer of linear and non-linear layers that converts attention output into a compressed vector. Shared across positions." },
  { term: "Stacked blocks", def: "Transformers chain many blocks with identical structure but separate weights. More blocks means more capacity and compute." },
  { term: "Parallel training", def: "Transformers process all positions of a training sentence at once, since attention removes the sequential dependency." },
  { term: "Attention Is All You Need", def: "The 2017 Google paper introducing the transformer — the foundation of modern LLMs." },
  { term: "KV cache", def: "Stores computed key and value representations so adding a token doesn't require recomputing earlier ones. Detailed in block 9." },
  { term: "Bidirectional model", def: "Trains in both directions on a complete sequence (e.g. bidirectional LSTM). Not usable for generation." },
  { term: "Graph", def: "Nodes connected by edges. Arbitrary size and topology, no fixed ordering — which is why convolution doesn't transfer." },
  { term: "Vertex / edge / node type / edge type", def: "The four components formally defining a graph." },
  { term: "Homogeneous / heterogeneous graph", def: "All nodes the same type, versus mixed types (people, papers, institutions). Heterogeneous is more complex and more common." },
  { term: "Directed / undirected edge", def: "Directed has a direction (teaches); undirected is symmetric (are friends)." },
  { term: "Bipartite graph", def: "Two distinct node groups with edges only between them — users and items, students and courses." },
  { term: "Node degree", def: "How many neighbors a node has. A rough importance measure: higher degree means more influence given and received." },
  { term: "Node / link / graph-level prediction", def: "The three graph task levels: classify a node, predict a missing edge, classify a whole graph." },
  { term: "Homophily", def: "The assumption that connected nodes tend to be similar — the basis of node-level prediction and recommendation." },
  { term: "Dynamic graph", def: "A graph whose nodes and edges change over time, such as a disease-spread or social network." },
];

const EXAM_TIPS = [
  { tip: "The midterm is MULTIPLE CHOICE ONLY — confirmed this lecture", detail: "He said it directly: multiple choice only, one correct answer per question. Combined with Lecture 4's open-book confirmation, you now know the full format. His warning: multiple choice is harder than it sounds — no partial credit, unlike a written answer.", priority: "HIGH" },
  { tip: "Why transformers enabled LLMs: parallel training", detail: "The central claim of the lecture. RNNs train sequentially because each state depends on the previous one. Transformers remove that dependency, so all positions of a training sentence process at once and training distributes across GPUs. Generation is still token-by-token either way.", priority: "HIGH" },
  { tip: "RNN shared weights still give different outputs — know why", detail: "The same W is applied at every position, but the hidden state differs, so predictions differ. The 'hello' example is the cleanest proof: input 'l' twice, targets 'l' then 'o', differing only by prefix.", priority: "HIGH" },
  { tip: "Know the three LSTM gates and what each does", detail: "Forget (how much old memory to keep), input (how much new information to write), output (how much cell state to expose). The Maya/Boston/Seattle example shows all three. He said explicitly the full cell internals are NOT tested.", priority: "HIGH" },
  { tip: "Positional encoding: order must be encoded explicitly", detail: "Self-attention has no notion of order. Token embedding plus positional encoding are ADDED to form the input. 'Dog bites man' versus 'man bites dog' is the justification.", priority: "HIGH" },
  { tip: "Attention = learned weights over the context", detail: "Recomputed for each position, not a fixed compression. The 'the dog chased the ball. It...' example shows why: resolving 'it' requires weighting earlier tokens by relevance.", priority: "MEDIUM" },
  { tip: "Transformer block has two parts with distinct roles", detail: "Self-attention exchanges information ACROSS positions; the MLP transforms features WITHIN a position. Stacked blocks share structure but have separate weights.", priority: "MEDIUM" },
  { tip: "Vanishing/exploding gradients hit RNNs especially hard", detail: "Chain length equals sequence length, not layer count, so a 100-word sentence is a 100-step chain. Clipping fixes explosion; vanishing needs a structural fix, which motivates LSTM.", priority: "MEDIUM" },
  { tip: "Why convolution doesn't work on graphs", detail: "No fixed node ordering, no spatial locality, arbitrary topology and size. Convolution needs a consistent neighborhood structure. Images are a special case of graphs — uniform grid-shaped ones.", priority: "MEDIUM" },
  { tip: "Know the three graph prediction levels", detail: "Node (classify a node, e.g. fraud detection), link (predict a missing edge, e.g. 'people you may know'), graph (classify a whole graph, e.g. molecule function).", priority: "MEDIUM" },
  { tip: "Truncated BPTT trades long-range signal for memory", detail: "Full BPTT must store every hidden state across the sequence. Truncating into chunks cuts memory but loses gradient signal for dependencies longer than the chunk.", priority: "LOW" },
  { tip: "A review session is coming — and sample questions", detail: "He confirmed a pre-midterm review session covering what's actually in scope, plus shared sample questions from past exams. Advanced research content and his Arizona State guest lecture are out of scope; transformer internals are deferred to block 9.", priority: "LOW" },
];

// ─── GAME: Memory Machines ──────────────────────────────────────────────────
// Nine levels, one causal chain: each architecture exists to fix the last one's
// weakness. Six of the nine levels have a hands-on (non-MCQ) step.

const svgPark = (
  <svg viewBox="0 0 54 54" width="48" height="48" aria-hidden="true">
    <rect x="4" y="38" width="46" height="10" rx="3" fill="#5fd98a" opacity=".45" />
    <circle cx="27" cy="20" r="13" fill="#5fd98a" />
    <rect x="24" y="28" width="6" height="12" fill="#ff8f5e" />
  </svg>
);
const svgPerson = (
  <svg viewBox="0 0 54 54" width="48" height="48" aria-hidden="true">
    <circle cx="27" cy="12" r="7" fill="#f2f0e6" />
    <path d="M27 20 L27 36 M27 25 L40 16 M27 25 L16 32 M27 36 L19 49 M27 36 L35 49"
      stroke="#f2f0e6" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);
const svgDisc = (
  <svg viewBox="0 0 54 54" width="48" height="48" aria-hidden="true">
    <ellipse cx="27" cy="27" rx="20" ry="8" fill="#ff8f5e" />
    <ellipse cx="27" cy="25" rx="13" ry="4" fill="#f2f0e6" opacity=".45" />
  </svg>
);

const MASK_WORDS = ["The", "dog", "chased", "the", "ball", "."];

// LSTM memory simulation for the Maya level. state.k tracks which sentence we're on.
const MAYA_CAND = ["B", "T", "S"];
const mayaAfter = (v, st) => {
  const c = MAYA_CAND[st.k];
  return {
    B: v.f * st.B + v.i * (c === "B" ? 1 : 0),
    T: v.f * st.T + v.i * (c === "T" ? 1 : 0),
    S: v.f * st.S + v.i * (c === "S" ? 1 : 0),
    k: st.k + 1,
  };
};
const mayaBars = (a) => [
  { label: "Boston", value: a.B, max: 1, kind: "state" },
  { label: "Seattle", value: a.S, max: 1, kind: "state" },
  { label: "tea noise", value: a.T, max: 1, kind: "bad" },
];

const GAME = {
  title: "Memory Machines",
  tagline: "Nine levels, one story: every new architecture exists to fix a weakness in the last one. Each node is a hidden state — clear a level to pass the state forward.",
  nodePrefix: "h",
  takeaway: "RNNs remember by compressing, LSTMs made that compression controllable, attention replaced compression with lookup, and Transformers made lookup parallel enough to scale.",
  levels: [
    // ── 1 ────────────────────────────────────────────────────────────────────
    {
      id: "why",
      name: "Why sequences need memory",
      problem: "Chopping speech or text into independent windows means each window forgets everything before it. And sequences come in any length.",
      steps: [
        {
          type: "mcq",
          ctx: 'A speech model classifies audio in separate windows: <span class="mono">f(X) → T</span>, <span class="mono">f(X) → H</span>, <span class="mono">f(X) → E</span> … each window processed on its own.',
          q: "What is the core limitation?",
          opts: [
            "Each window ignores what came before, so earlier sounds can't inform later letters",
            "The windows are too small to fit on a GPU",
            "It can only output vowels",
            "It uses too few parameters",
          ],
          a: 0,
          why: "Language has context. Knowing you just heard “T-H” changes what the next sound probably is. Independent windows throw that away.",
        },
        {
          type: "mcq",
          q: "Why does an RNN reuse the <i>same</i> weights at every time step instead of training a separate network per position?",
          opts: [
            "Because sharing weights makes every hidden state identical",
            "So one learned update rule works for any sequence length, without parameters growing with length",
            "Because GPUs require it",
            "To make training sequential on purpose",
          ],
          a: 1,
          hints: { 0: "Careful. Same weights, but different inputs and different previous states, so the hidden states differ." },
          why: 'A per-position network would need a new trained network for position 1,001. One shared rule, <span class="mono">h_t = f(h_{t−1}, x_t)</span>, runs forever. It is the CNN trick — reuse a filter across space — applied across time.',
        },
        {
          type: "mcq",
          ctx: 'Training a character model on <span class="mono">“hello”</span>. The input <span class="mono">l</span> appears twice: once it should predict <span class="mono">l</span>, once <span class="mono">o</span>.',
          q: "How can the same input produce two different correct predictions?",
          opts: [
            "The weights change between the two steps",
            "It picks randomly",
            "The hidden state is different each time, because it carries a different history",
            "The second l is a different character",
          ],
          a: 2,
          why: "The <b>hidden state</b> is the memory. After “hel” versus “hell”, the state differs, so the same input leads to a different output.",
        },
      ],
    },
    // ── 2 ────────────────────────────────────────────────────────────────────
    {
      id: "train",
      name: "Training vs. generating",
      problem: "Learning from long sequences is expensive, and the model behaves differently when it trains versus when it writes on its own.",
      steps: [
        {
          type: "mcq",
          ctx: 'Training example: <span class="mono">a dog runs</span>. After reading <span class="mono">a</span>, the model\'s top guess is <span class="mono">cat</span>.',
          q: "During TRAINING, what gets fed in as the next input?",
          opts: ["dog, the true word from the data", "cat, the model's guess", "Nothing; training stops", "Both, averaged"],
          a: 0,
          why: "The loss scores the guess against “dog”, but the next input is still the real word. A wrong guess doesn't derail the rest of the example.",
        },
        {
          type: "mcq",
          ctx: 'Now GENERATING from the prompt <span class="mono">a</span>. The model chooses <span class="mono">cat</span>.',
          q: "What is fed in next?",
          opts: ["dog", "cat, its own choice, right or wrong", "The prompt again", "A blank token"],
          a: 1,
          why: "There's no answer key during generation, so the model feeds back what it chose. That explains how text is produced, not whether it's correct — “a cat runs” is fluent but wrong for a dog photo.",
        },
        {
          type: "mcq",
          ctx: 'Truncated backpropagation through time: split a long sequence into chunks, carry the hidden state from chunk 1 into chunk 2, and cut the gradient at the boundary.',
          q: "What crosses the chunk boundary?",
          opts: [
            "The hidden state value goes forward, but gradients stop at the boundary",
            "Gradients go back, but the state resets to zero",
            "Both flow freely",
            "Neither; chunks are independent",
          ],
          a: 0,
          why: "Forward memory can be long; the learning horizon is kept short to save memory. The model <b>remembers</b> far back but only <b>learns</b> from a few steps back.",
        },
      ],
    },
    // ── 3 ────────────────────────────────────────────────────────────────────
    {
      id: "grad",
      name: "The vanishing gradient",
      problem: "To learn from a word 30 steps back, the gradient is multiplied by the same recurrent factor 30 times.",
      steps: [
        {
          type: "slider",
          q: 'Set the per-step multiplier. Your goal: the signal from 30 steps back arrives between <span class="mono">0.1×</span> and <span class="mono">10×</span> strength.',
          params: [{ id: "m", label: "multiplier / step", min: 0.5, max: 1.5, step: 0.01, init: 0.8, format: (v) => v.toFixed(2) }],
          view: (v) => {
            const bars = [];
            for (let k = 30; k >= 1; k--) bars.push(Math.pow(v.m, k));
            const s = Math.pow(v.m, 30);
            return {
              chart: bars,
              chartRange: [0.1, 10],
              chartLabels: ["30 steps back", "dashed = 1×", "now"],
              readout: `signal after 30 steps: ${s < 0.001 ? s.toExponential(1) : s > 1000 ? s.toExponential(1) : s.toFixed(3)}×`,
            };
          },
          check: (v) => {
            const s = Math.pow(v.m, 30);
            if (s >= 0.1 && s <= 10) return true;
            return s < 0.1
              ? "<b>Vanished.</b> Multiplying by less than 1 thirty times shrinks the signal to almost nothing. Nudge it up."
              : "<b>Exploded.</b> Multiplying by more than 1 thirty times blows up. Nudge it down.";
          },
          action: "Lock it in",
          ok: "You found it — but look how narrow that window is (only 0.93 to 1.07). Below it the signal <b>vanishes</b>; above it, it <b>explodes</b>. Real weights shift constantly during training, so they can't be held on that knife edge. That's the problem.",
        },
        {
          type: "mcq",
          q: "Gradients are exploding. What's the standard patch?",
          opts: ["Add more layers", "Gradient clipping: if the gradient's norm is too big, scale it down", "Use a smaller vocabulary", "Switch off the hidden state"],
          a: 1,
          why: '<b>Clipping</b> caps the size: <span class="mono">if ‖g‖ > τ: g ← (τ/‖g‖)·g</span>. Direction kept, size tamed.',
        },
        {
          type: "mcq",
          q: "Gradients are vanishing. Why doesn't a quick patch work here?",
          opts: [
            "It does; just clip them upward",
            "Vanishing only happens on CPUs",
            "You can't amplify a signal that's already gone — the architecture has to change, which is what LSTMs do",
            "Vanishing gradients are actually fine",
          ],
          a: 2,
          why: "Once the signal from far back has shrunk to nothing, there's nothing left to rescale. You need a path through time that doesn't multiply by the same matrix every step.",
        },
      ],
    },
    // ── 4 ────────────────────────────────────────────────────────────────────
    {
      id: "lstm",
      name: "Maya's memory: LSTM gates",
      problem: "A plain RNN mixes long-term facts and immediate details in one vector, so new words smudge old facts. The LSTM adds a protected memory lane controlled by learned dimmers.",
      steps: [
        {
          type: "slider",
          q: "You are the LSTM. For each sentence, set the two dimmers for the <i>city memory</i>, then process it.",
          ctx: '<b class="mono">forget gate f</b>: how much old memory to keep (1 = keep all).<br><b class="mono">input gate i</b>: how much of the new candidate to write (1 = write all).<br><span class="mono">new memory = f × old + i × candidate</span>',
          params: [
            { id: "f", label: "forget gate f", min: 0, max: 1, step: 0.05, init: 0.5, format: (v) => v.toFixed(2) },
            { id: "i", label: "input gate i", min: 0, max: 1, step: 0.05, init: 0.5, format: (v) => v.toFixed(2) },
          ],
          state: { B: 0, T: 0, S: 0, k: 0 },
          update: (v, st) => mayaAfter(v, st),
          view: (v, st) => ({ bars: mayaBars(mayaAfter(v, st)) }),
          action: "Process sentence",
          rounds: [
            {
              ctx: '<span class="mono">SENTENCE 1 OF 3</span><br><b>“Maya lives in Boston.”</b><br>candidate content: Boston',
              check: (v, st) => (mayaAfter(v, st).B >= 0.8 ? true : "Memory starts empty. To store Boston, the input gate has to open up and let it in."),
              ok: "Boston is stored. (The forget gate barely mattered — there was nothing to forget yet.)",
            },
            {
              ctx: '<span class="mono">SENTENCE 2 OF 3</span><br><b>“She likes tea.”</b><br>candidate content: tea (not a city!)',
              check: (v, st) => {
                const a = mayaAfter(v, st);
                if (a.B < 0.6) return "Tea isn't a move. Keep the forget gate near 1 so Boston survives.";
                if (a.T > 0.3) return "Tea doesn't belong in the city memory. Turn the input gate down.";
                return true;
              },
              ok: "Boston survives, tea stays out. New input didn't erase an unrelated old fact.",
            },
            {
              ctx: '<span class="mono">SENTENCE 3 OF 3</span><br><b>“Later she moves to Seattle.”</b><br>candidate content: Seattle',
              check: (v, st) => {
                const a = mayaAfter(v, st);
                if (a.B > 0.3) return "“moves to” means Boston is outdated. Lower the forget gate.";
                if (a.S < 0.6) return "Seattle still needs to be written. Raise the input gate.";
                return true;
              },
              ok: "Old fact dimmed, new fact written — two separate decisions at the same step.",
            },
          ],
          done: 'Query: “Where does Maya live now?” → <b>Seattle</b>. Notice the update is an <i>addition</i> (keep some old + add some new), not a repeated matrix multiply. That is why gradients survive along this lane.',
        },
        {
          type: "mcq",
          ctx: "Prompt: “…Maya now lives in”. The <b>output gate</b> exposes the Seattle information into the hidden state so the prediction head can say “Seattle”.",
          q: "What happens to the cell memory when it's exposed?",
          opts: [
            "It's erased once used",
            "Nothing — it passes to the next step unchanged; exposing isn't deleting",
            "It gets copied into the forget gate",
            "It resets to zero",
          ],
          a: 1,
          why: "Two lanes: the <b>cell state</b> carries memory forward; the <b>hidden state</b> is what's shown right now. The output gate decides what to show, not what to keep.",
        },
        {
          type: "numeric",
          ctx: '<span class="mono">c<sub>t−1</sub> = 2 &nbsp; f = 0.8 &nbsp; i = 0.5 &nbsp; g = 0.4</span><br><span class="mono">c<sub>t</sub> = f·c<sub>t−1</sub> + i·g = ?</span>',
          q: "Run one step by hand (the lecture's worked example).",
          answer: 1.8,
          tol: 0.01,
          hint: "Do the two halves separately: keep (0.8 × 2), then write (0.5 × 0.4), then add.",
          why: '<span class="mono">1.8</span>. Retained 0.8 × 2 = 1.6, written 0.5 × 0.4 = 0.2, sum 1.8. Then h = o·tanh(1.8); with o = 0.75 that is about 0.71.',
        },
      ],
    },
    // ── 5 ────────────────────────────────────────────────────────────────────
    {
      id: "attn",
      name: "The spotlight: attention",
      problem: "Even an LSTM squeezes the entire past into one fixed-size vector. For a whole photo or a long story, that box is too small.",
      steps: [
        {
          type: "pick",
          layout: "scene",
          q: "Captioning a photo. Instead of one summary vector, the model keeps a vector per region and chooses where to look for each word. Click the region it should spotlight.",
          hint: "Which part of the scene does the next word need to describe?",
          nextLabel: "Next word",
          rounds: [
            {
              ctx: 'caption so far: <b class="mono">A ___</b>',
              items: [
                { label: "[1] park & tree", art: svgPark },
                { label: "[2] person", art: svgPerson },
                { label: "[3] frisbee", art: svgDisc },
              ],
              answer: 1,
              weights: [{ label: "park", value: 0.15 }, { label: "person", value: 0.70 }, { label: "disc", value: 0.15 }],
              why: '<b>Predicts “person”.</b> After “A”, the subject is needed. The person region gets most of the weight.',
            },
            {
              ctx: 'caption so far: <b class="mono">A person throws a ___</b>',
              items: [
                { label: "[1] park & tree", art: svgPark },
                { label: "[2] person", art: svgPerson },
                { label: "[3] frisbee", art: svgDisc },
              ],
              answer: 2,
              weights: [{ label: "park", value: 0.10 }, { label: "person", value: 0.20 }, { label: "disc", value: 0.70 }],
              why: '<b>Predicts “frisbee”.</b> Same regions, new weights. The new prefix asks a new question, so the spotlight moves to the disc.',
            },
          ],
        },
        {
          type: "pick",
          q: 'Now point attention back at the text itself (self-attention). Click the word <span class="mono">it</span> should attend to most.',
          hint: "Read the last word. What could be described that way?",
          disabled: [6],
          nextLabel: "Try a new ending",
          rounds: [
            {
              items: ["The", "dog", "chased", "the", "ball", "because", "it", "was", "hungry"],
              answer: 1,
              weights: [{ label: "dog", value: 0.55 }, { label: "chased", value: 0.08 }, { label: "ball", value: 0.18 }],
              why: "<b>Right.</b> Balls don't get hungry, so “it” pulls most of its information from <b>dog</b>.",
            },
            {
              items: ["The", "dog", "chased", "the", "ball", "because", "it", "was", "bouncy"],
              answer: 4,
              weights: [{ label: "dog", value: 0.16 }, { label: "chased", value: 0.08 }, { label: "ball", value: 0.58 }],
              why: "<b>Right.</b> Same “it”, different context, different weights. A word's meaning is computed from what it attends to.",
            },
          ],
        },
        {
          type: "mcq",
          q: "In one sentence: what does attention replace?",
          opts: [
            "Compressing everything into one box, with looking things up directly when needed",
            "The loss function",
            "Word vectors",
            "The need for any training data",
          ],
          a: 0,
          why: "RNNs remember by <b>compressing</b>. Attention keeps separate vectors and <b>reads</b> the relevant ones for each prediction.",
        },
      ],
    },
    // ── 6 ────────────────────────────────────────────────────────────────────
    {
      id: "mask",
      name: "No peeking: the causal mask",
      problem: "In self-attention every word can see every other word. But if a word can see the word it's trying to predict, training is cheating.",
      steps: [
        {
          type: "grid",
          q: "Rows are the word doing the looking; columns are the words it looks at. Click every cell that must be <b>hidden</b>.",
          rows: MASK_WORDS.map((w) => `at “${w}”`),
          cols: MASK_WORDS,
          target: (r, c) => c > r,
          onLabel: "hide",
          offLabel: "see",
          hintFn: ({ cells }) =>
            (cells.some((x) => x.r === x.c) ? "A word is allowed to look at itself. " : "") +
            "Rule: a word may look at itself and earlier words only.",
          why: "<b>Perfect triangle.</b> Each word sees itself and everything before it, never the future. “dog” can't see “chased”, which is exactly what it's being trained to predict.",
        },
        {
          type: "mcq",
          q: "Position, the causal mask and attention weights are three different things. Which one answers “how much does <i>dog</i> contribute to <i>it</i>?”",
          opts: ["The position vector", "The causal mask", "The attention weights", "The MLP"],
          a: 2,
          why: "<b>Position</b> says where a word is. The <b>mask</b> says what's visible. The <b>weights</b> say how much each visible word contributes.",
        },
      ],
    },
    // ── 7 ────────────────────────────────────────────────────────────────────
    {
      id: "block",
      name: "Build a Transformer",
      problem: "LSTMs process one word at a time, even when training on text that's already fully known. GPUs sit mostly idle.",
      steps: [
        {
          type: "order",
          q: "Assemble one path from input words to next-word scores. Click the pieces in order.",
          pieces: ["Token vectors", "+ Position vectors", "Causal attention", "MLP (per position)", "Prediction head"],
          posHints: [
            "Words start as learned vectors.",
            "Word order has to be added before words mix, or “dog bites man” = “man bites dog”.",
            "First gather context from other words.",
            "Then process what was gathered, one position at a time.",
            "Last, turn the final vector into scores for the next word.",
          ],
          why: "That's the model. The middle two — attention then MLP — form one <i>block</i>. Real models stack dozens of blocks between the input and the prediction head.",
        },
        {
          type: "mcq",
          q: "Inside a block, what's the division of labor?",
          opts: [
            "Attention predicts the word; the MLP stores memory",
            "Attention exchanges information between positions; the MLP processes each position's gathered features on its own",
            "Both do the same thing twice for accuracy",
            "The MLP decides what's masked",
          ],
          a: 1,
          why: "<b>Attention is the conversation; the MLP is each word thinking afterward.</b>",
        },
        {
          type: "mcq",
          q: "One attention layer can already see the whole allowed prefix. So why stack many blocks?",
          opts: [
            "To see further back",
            "To handle longer sentences",
            "Each block adds one token of memory",
            "Each block works on vectors already processed by earlier blocks, so understanding builds in rounds",
          ],
          a: 3,
          hints: {
            0: "One layer already sees everything allowed. Depth isn't about reach.",
            1: "Length counts tokens; depth counts blocks. Different things.",
          },
          why: "Block 1 might gather “dog”, “ball”, “hungry”. Block 2 works with those enriched vectors and can conclude “it = dog”. More rounds, deeper reasoning.",
        },
        {
          type: "mcq",
          q: "Why does a Transformer train so much faster than an LSTM?",
          opts: [
            "The full sentence is known during training, so with the causal mask it scores every position's next word in one parallel pass",
            "It has fewer parameters",
            "It generates text in parallel too",
            "It skips backpropagation",
          ],
          a: 0,
          hints: { 2: "Generation is still one token at a time. The speedup is in <b>training</b>." },
          why: "An RNN must wait for h₃ before computing h₄. A Transformer turns the whole sentence into batched matrix math, which GPUs are built for. That's what made internet-scale training possible.",
        },
      ],
    },
    // ── 8 ────────────────────────────────────────────────────────────────────
    {
      id: "kv",
      name: "The KV cache and the big trade",
      problem: "Generation is still one word at a time. Recomputing every past word for every new word wastes enormous work.",
      steps: [
        {
          type: "multi",
          ctx: 'Generating word #6. Words 1–5 each produced a <b class="mono">Query</b> (what am I looking for?), <b class="mono">Key</b> (what do I offer?) and <b class="mono">Value</b> (my information) on earlier steps.',
          q: "Which of the old words' vectors should be saved and reused? Select all that apply.",
          opts: ["Query", "Key", "Value"],
          correct: [1, 2],
          hintFn: (sel) =>
            sel.indexOf(0) !== -1
              ? "<b>Not the queries.</b> Old words already asked their question. Who needs to ask one right now?"
              : "<b>Missing something.</b> The new word scores against old words' offers, then mixes their information.",
          why: "<b>Keys and values.</b> Because of the causal mask, old words can't see the new word, so their K and V never change. Only the <i>newest</i> word needs to ask a question right now — old queries already got their answer.",
        },
        {
          type: "explore",
          q: "Drag the text length and watch the memory each approach needs.",
          params: [{ id: "n", label: "tokens so far", min: 10, max: 4000, step: 10, init: 200, format: (v) => String(v) }],
          view: (v) => ({
            bars: [
              { label: "RNN state", value: 8, max: 100, kind: "state", display: "fixed" },
              { label: "KV cache", value: Math.min(100, 8 + (v.n / 4000) * 92), max: 100, kind: "attn", display: String(v.n) },
            ],
            readout: `KV cache = ${v.n} tokens × every layer`,
            note: "The RNN state is <b>cheap but compressed</b> — old details fade. The KV cache keeps every past word available for direct lookup, but memory <b>grows with length</b>. That is the trade.",
          }),
          action: "Got it",
        },
        {
          type: "mcq",
          q: "Hybrid models (mostly recurrent layers plus an occasional attention layer) exist to get…",
          opts: [
            "Faster training by skipping attention entirely",
            "Mostly cheap fixed-size memory, with periodic direct lookup where it matters",
            "Bigger vocabularies",
            "Bidirectional reading",
          ],
          a: 1,
          why: "Compress versus re-read. Only the attention layers need a growing cache, so you spend direct-access memory selectively.",
        },
        {
          type: "mcq",
          q: "Does the KV cache speed up training?",
          opts: [
            "Yes, massively",
            "Yes, but only for LSTMs",
            "No. Training already processes all positions in one parallel pass; the cache fixes repeated work during generation",
            "Only when batch size is 1",
          ],
          a: 2,
          why: "The cache exists because generation re-runs the model once per new word. Training has no such repetition.",
        },
      ],
    },
    // ── 9 ────────────────────────────────────────────────────────────────────
    {
      id: "boss",
      name: "Boss round: the whole chain",
      problem: "Every idea in this lecture is a fix for the one before it. Match each fix to the flaw it solves.",
      steps: [
        {
          type: "mcq",
          q: "The RNN was introduced to fix…",
          opts: ["Independent windows that forget context, and networks that can't handle any length", "Vanishing gradients", "Slow GPU training", "The KV cache growing"],
          a: 0,
          why: "One shared update rule, carrying a state forward.",
        },
        {
          type: "mcq",
          q: "The LSTM was introduced to fix…",
          opts: ["Sequential training", "Vanishing gradients and old facts getting smudged by new input", "Word order", "The need for position vectors"],
          a: 1,
          why: "A gated, additive memory lane.",
        },
        {
          type: "mcq",
          q: "Attention was introduced to fix…",
          opts: ["Exploding gradients", "Too many parameters", "Squeezing an entire history into one fixed-size vector", "Tokenization"],
          a: 2,
          why: "Keep separate vectors, look up what you need.",
        },
        {
          type: "mcq",
          q: "The Transformer's big practical win over LSTMs is…",
          opts: ["Training all positions in parallel, which lets it scale", "Generating many tokens simultaneously", "Using less memory on long text", "Not needing training data"],
          a: 0,
          hints: { 1: "Generation is still token by token. The win is in training." },
          why: "Parallel training on known text.",
        },
        {
          type: "mcq",
          q: "Position vectors exist because…",
          opts: [
            "Attention is too slow without them",
            "They replace the MLP",
            "They hide future words",
            "Attention alone sees words as an unordered set; “dog bites man” would equal “man bites dog”",
          ],
          a: 3,
          why: "Order has to be added explicitly.",
        },
        {
          type: "mcq",
          q: "The question to ask about ANY sequence architecture:",
          opts: ["How many layers does it have?", "What does it store, what can it revisit, and at what cost?", "Who invented it?", "Does it use tanh?"],
          a: 1,
          why: "Architecture names change fast; this question doesn't.",
        },
      ],
    },
  ],
};

export default function Lecture5_SequentialModels({ onBack }) {
  const [openConcept, setOpenConcept] = useState(0);
  const [openTip, setOpenTip] = useState(null);
  const [tab, setTab] = useState("concepts");
  const [chatOpen, setChatOpen] = useState(false);

  const tabs = [
    { id: "concepts", label: "Concepts" },
    { id: "vocab", label: "Vocabulary" },
    { id: "tips", label: "Exam Tips" },
    { id: "game", label: "Game" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: DARK, fontFamily: BODY, color: BONE, paddingBottom: "100px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        .lec-tab { transition: color .18s ease, border-color .18s ease; }
        .lec-card { transition: border-color .18s ease; }
        .lec-vocab { transition: border-color .18s ease, transform .18s ease; }
        .lec-vocab:hover { border-color: ${COLOR}60; transform: translateY(-2px); }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "24px 40px", background: CARD_BG }}>
        <button onClick={onBack} style={{
          background: "transparent", border: "none", color: STONE, fontFamily: MONO, fontSize: "11px",
          letterSpacing: "1.5px", cursor: "pointer", padding: 0, marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px",
        }}>← BACK TO DASHBOARD</button>
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>SEP 28 · LECTURE 5</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>RNNs, LSTM & Transformers</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Sequential data and recurrent neural networks, backpropagation through time, LSTM gates, attention and positional encoding, the transformer block and why it unlocked large language models, plus an introduction to graph neural networks.
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "24px", padding: "0 40px", borderBottom: `1px solid ${BORDER}`, background: DARK }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className="lec-tab" style={{
            background: "transparent", border: "none", borderBottom: `2px solid ${tab === t.id ? COLOR : "transparent"}`,
            color: tab === t.id ? COLOR : STONE, fontFamily: MONO, fontSize: "12px", letterSpacing: "1.5px",
            padding: "14px 4px", cursor: "pointer",
          }}>{t.label.toUpperCase()}</button>
        ))}
      </div>

      <div style={{ padding: "32px 40px", maxWidth: "820px" }}>

        {/* Concepts tab */}
        {tab === "concepts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {CONCEPTS.map((c, i) => {
              const isOpen = openConcept === i;
              const isOptional = c.tag.includes("Not on Midterm");
              const paras = c.body.split("\n\n");
              return (
                <div key={i} className="lec-card" style={{
                  background: CARD_BG,
                  border: `1px ${isOptional ? "dashed" : "solid"} ${isOpen ? (isOptional ? STONE : COLOR + "50") : BORDER}`,
                  borderRadius: "10px", overflow: "hidden",
                }}>
                  <button onClick={() => setOpenConcept(isOpen ? null : i)} style={{
                    width: "100%", background: "transparent", border: "none", cursor: "pointer",
                    padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "1px", color: isOptional ? STONE : COLOR, whiteSpace: "nowrap" }}>{c.tag}</span>
                      <span style={{ fontFamily: DISPLAY, fontSize: "15px", fontWeight: 700, color: isOptional ? LICHEN : BONE }}>{c.title}</span>
                    </div>
                    <span style={{ color: STONE, fontSize: "14px", flexShrink: 0, marginLeft: "12px" }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 22px" }}>
                      {paras.map((p, pi) => (
                        <p key={pi} style={{ fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.75, marginBottom: pi === paras.length - 1 ? 0 : "14px" }}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Vocabulary tab */}
        {tab === "vocab" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
            {VOCAB.map((v, i) => (
              <div key={i} className="lec-vocab" style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "16px 18px" }}>
                <div style={{ fontFamily: DISPLAY, fontSize: "13.5px", fontWeight: 700, color: ACCENT, marginBottom: "6px" }}>{v.term}</div>
                <div style={{ fontFamily: BODY, fontSize: "12.5px", color: LICHEN, lineHeight: 1.6 }}>{v.def}</div>
              </div>
            ))}
          </div>
        )}

        {/* Exam Tips tab */}
        {tab === "tips" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {EXAM_TIPS.map((t, i) => {
              const isOpen = openTip === i;
              const priorityColor = t.priority === "HIGH" ? "#ff6b5e" : t.priority === "MEDIUM" ? "#ff8f5e" : STONE;
              return (
                <div key={i} className="lec-card" style={{
                  background: CARD_BG, border: `1px solid ${isOpen ? priorityColor + "50" : BORDER}`, borderRadius: "10px", overflow: "hidden",
                }}>
                  <button onClick={() => setOpenTip(isOpen ? null : i)} style={{
                    width: "100%", background: "transparent", border: "none", cursor: "pointer",
                    padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", gap: "12px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{
                        fontFamily: MONO, fontSize: "9px", letterSpacing: "1px", fontWeight: 700, padding: "3px 8px", borderRadius: "20px",
                        background: priorityColor + "20", color: priorityColor, border: `1px solid ${priorityColor}40`, whiteSpace: "nowrap",
                      }}>{t.priority}</span>
                      <span style={{ fontFamily: BODY, fontSize: "13.5px", fontWeight: 600, color: BONE }}>{t.tip}</span>
                    </div>
                    <span style={{ color: STONE, fontSize: "14px", flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px 66px" }}>
                      <p style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, lineHeight: 1.7, margin: 0 }}>{t.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Game tab */}
        {tab === "game" && <LectureGame lectureId="lecture5" game={GAME} />}
      </div>

      {/* Floating tutor button — scoped to this lecture */}
      <button onClick={() => setChatOpen(o => !o)} style={{
        position: "fixed", bottom: "24px", right: "24px",
        width: "56px", height: "56px", borderRadius: "50%",
        background: chatOpen ? CARD_BG : `linear-gradient(135deg, ${COLOR}, #ff8f5e)`,
        border: chatOpen ? `1px solid ${COLOR}` : "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)", cursor: "pointer", fontSize: "22px",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1001, transition: "all 0.2s",
      }}>
        {chatOpen ? "✕" : "🧭"}
      </button>

      {chatOpen && (
        <TutorChat
          onClose={() => setChatOpen(false)}
          lectureTitle="RNNs, LSTM & Transformers"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
