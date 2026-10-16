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
And I don't know whether that's a holiday for USA, but obviously you're sitting here because it's not a holiday for USA.
At least you need to come to class. So do I.
Um, and I'm in the worst position because I took a haircut during weekend, which means that it's also very risky.
It's actually indeed pretty risky. And this time I think I'm on the I'm not on the winter side, but it's okay.
You will see me next week as well, so things will get better. Um.
What else? Uh, we already released the grid for the projects, and, uh, it's just we just take very minor points.
Uh, for, for for for a few proposals. But overall, I think people are doing good jobs.
And I think you should say the commands, if you find the commands are not really like human readable or human written,
just let us know, because the only criteria I give graders are just writing human commands on this one.
Um, so other than that, I think we don't have a lot of, uh, I don't think we have a lot of,
like, uh, domain items, but any people got any questions to ask before we even start?
Or everyone's going or everyone is great. Okay.
Uh, another random thing that I read from news that look like we are, uh, we're going to go through,
like, a heavy rings and other things, but I don't know, I didn't say it yet.
I even stay at home during the entire weekend because I try to prevent being trapped on the road.
However, nothing really happens. But still the case. Be prepared.
Maybe the weather will change drastically because, for example, today it's pretty cold.
Uh, so um. But so without further ado, we can actually go into the topics and, uh,
I'm going to do a quick recap before we jump into the new items, because we're going to have a few hundred Uh, slides today.
Um, as usual, people are asking, do we're really testing? Do we really test this a few hundred pages during the exam?
Uh, not. Not necessarily. What what what what really happened is that, um, um, I think the exam is on November 2nd.
And before that, uh, before the exam, we're going to have a review session.
Uh, on the October, I think 26. Right. That's also the Monday.
Um, I may be wrong, but maybe 26 or 20 6 or 27, whichever is the Monday we're going to review.
Uh, we're going to review, uh, you know, certain uh, we're going to review what's actually going to be covered during the midterm.
So you don't need to actually bring a lot of materials. Uh, we don't have a facial cheat sheet for you, but you can bring whatever you want.
Uh, again, like, as long as it's a as long as a paper based, you can bring it.
I mean, uh, you know, uh, I think the, uh, I think no electronics will be allowed.
Events like you don't need a potential, you don't need a calculator or whatever,
because I really doubt that people can actually adapt their calculator to a ChatGPT based something.
So, so, so I don't think we're going to have any complex mass calculation at all.
Yes. Whichever, whichever pages you want.
You can print a lot, but don't do that. It's it's not an environment friendly.
And we're going to we're going to do the review so that you should be okay.
So which means most of the research related topics won't be covered because they're not essential.
They're not they're not in the essential outlines of this course. So last week we talk about the training neural networks.
Here's a quick fly through. And then we're going to start from something new.
So so recall last time we we talk about that you need to do some data preprocessing.
Am I in the right slides? Let me double check. Sort of. It feels the.
This might be okay. It's the right one. Sorry. It's the right one.
Uh, we talk about, uh, we talk about data preprocessing. We talk about how to center your data to zero, how to normalize your data,
which means the all the all the purpose is to make sure your data are easier for the later processing of the deep neural networks,
which means your there's there's like activations there's a gradient descent.
So all this data preprocessing is to make sure your data are ready for this process.
As a quick recall, this is this. This might be your original data.
And you're going to first the standard around zero, which means subtract by mean and then divide it by the standard deviation here,
which means that it's actually centered around zero but follow a normal distribution, something like that.
And we we also quickly talk about batch normalization and the layer normalization.
So which means batch normalization. So they're just doing so.
So actually they're just doing similar things in different skill. Right.
Like the batch normalization they're just doing on the feature space.
Which means you have multiple features for your data. And you want to make sure all the features are playing the similar impact or similar rows.
And this is a batch normalization which means each column is a feature.
For example, if this is a prediction for, this is a prediction for the for the images.
And this can be. This can be different features like the color, this like the size etc. etc..
So this is a batch normalization which is around the feature dimensions. We also talk about the we talk about the layer layer normalization as well.
However the layer normalization for is on the it's not on the feature space.
It's actually on the sample space. Which means actually you're trying to normalize your data across the feature.
Sorry. Across the, across the, across the samples.
Which means which means for the sorry Uh, where are we?
Ah, here we go. Uh, so for the for the batch normalization, you're going to normalize, uh, across the features.
Layer normalization. You're just doing this direction, which means you're trying to normalize across different samples.
So that would be something like this. The horizontal ones.
And usually you don't use all of them together. You just use some of them one of them in different settings.
For example, I remember when we mentioned batch normalization are mostly used for uh,
for example, I think we're used for sin and for layer normalization.
I think we we're mostly using the transformers. So that's a very typical usage of them.
And after the data pre-processing we we talk about other things, including activations.
Uh, we recap the activations, which means if you recall we have this a different type of the activation functions.
Uh, and therefore we, we talk about again the sigmoid saturation.
uh, we also talk about the ReLU. Again, leaky ReLU.
Elu. Um. What else? Uh, I think the major part is when we talk about is the weighted weight initialization.
Uh, so after your data is ready, you want to make sure your weight to start from the right position, which means that's easier for the optimization.
Uh, and we talk a few things.
For example, you don't want to, uh, initialize your weight as the identical hidden units because it's harder for the optimization.
You also don't want to initialize your data. You don't want to initialize your weights from zero because then nothing can be back propagated.
So which means that's also a bad choice. So we talk a few things.
For example small random numbers.
But we think one of the issue will be, uh, after many layers, this, uh, this activation will be too small to learn, if you recall this number.
If you recall this visualization for the layer one, it looks fine.
However, in the later layers you don't have too much signal if you simply just, you know, initialize your weight using small random numbers.
So one solution will be. One solution will be using this Xavier initialization,
which means you actually do a scaling based on the number of layers and the specific index of the layers.
So which means. So therefore after this scaling, after this scaling you actually your weight will be looking quite similar across different layers.
And it's actually just simply divided by the square root of the input of the dimension of the inputs.
And we'll also talk about there's some proof but you don't need to remember.
Uh, and also we talk about for value, there's also similar things because you can say they only have the positive part for the signal.
They don't have the negative parts. And in the later parts you also lose the signals even on the positive side.
So the solution we talk about autoscaling, it's called a timing or a initialization.
Until this moment,
I realized this MSA potentially just represents Microsoft Research Asia because by the time Chi Minh is working there as a scientist, I haven't.
I didn't know this for many years. Until this moment, potentially, I realized it's just a MSA.
I need to double check what what I really mean, but maybe that's the case.
So this is interesting because you don't understand something until certain moments you realize that must be something very simple.
Um, that's that's a bingo moment for research anyway.
Um, we talk about, we then talk about, uh, you need to use the different, you know, initialization for different activation functions.
And after that, you're all good because this is a good initialization will help the gradient flow.
And, uh, you know, very useful for the training process.
Uh, after that, we talk about the, gradient, the gradient gradient.
Directions and optimizations. If you quickly remember we talked about you can.
Mostly we're using gradient descent to to minimize the loss function and recall that the original this is the original weights.
And you want to make sure it's actually got decreasing. So so the loss function can.
So loss function can be decreased on the on the help of the weight.
Wait wait wait updates. If you remember we talk about stochastic gradient descent reasons because it's
very hard to actually fit all your data one time or in one batch into the GPU.
The GPU is too expensive and so. So therefore you need to have a small batch of the data, which means, for example,
you can use the 32, 64, 128 as a common number of the batch size to actually do the optimization.
So, so which means if you have a lot of data, optimize your weight matrices in batches.
And uh, another thing we talked about last time is about the training loss and training loss, uh, versus learning rate.
The learning rate just I mean, if you already know in which direction your weight matrix should go, however, you can still go to large, which means,
for example, if you use a really large training loss, uh, sorry, if you use a really large learning rate, your loss may not actually converge.
It's getting larger and larger, which is the opposite direction for what you're trying to optimize.
Uh, so this is a bad situation. And on the other side, if you're learning rate is very small,
then you actually don't get your, uh, you know, loss optimized or, uh, you know, improved.
So usually this, the loss function are, uh, so usually this loss.
So usually this loss function, uh, it's in which step.
Let me see. Um, it's also called step size whichever you want to name it.
So basically as you can say you already know the directions of your optimization.
However the step size or the learning rate is getting too large or too small.
You don't get your loss to the right position.
So. So that's why choosing a learning rate is also very important. And we have a few.
And then we talk about a few things for how to optimize or choosing the right learning rate.
Uh, so so so so even before that we go through the problems for the general, uh, stochastic gradient descent.
So, so one issue we're saying is that it's oscillation issue, right.
For example, you may just go back and forth because because if the reason is because you're using stochastic gradient descent,
you are not you are not using the full batch. Stochastic just means you're using a mini batch or just a partial part of the data.
So, so so with that in mind, maybe this type, this this batch of the data and the next batch of the data,
they want your optimization go to different directions. In that sense the overall optimization can be zigzag and they just oscillate it too much.
So this is a problem one for a gradient descent. Stochastic gradient gradient descent.
The second issue we'll talk about is that if you recall, the optimization is based on it's based on it's based on that chain rule.
Backpropagation. So it's taking a lot of derivative.
However, at certain moments you may be trapped into something called the local minimum or saddle points because your back propagation got trapped.
And by chain rule event, if any of this component becomes zero, you get zero gradient.
So zero for you are going to be trapped here. You're not really optimizing your loss to the minimum points.
However you're just being trapped in this saddle points.
The saddle point is just the mean. At this point the derivative equal to zero.
So which means you get a no direction to go. So here's the here's the example for this two dimensional two dimensional space as illustration.
And the third problem for the stochastic gradient descent will be.
It's very similar to the first one, which means the mini match can be very noisy.
So which means you're going to use a lot of like a iterations to, to to optimize.
Uh, so so so so so so so so so here's the, so here's actually the key strategy where the key, you know, rationale behind uh,
if you just look into one small mini batch update, they are very cheap and,
but they can be very noisy because, you know, they don't represent entire data.
However, when you do a lot of like mini batches, uh,
like look like you can actually finally reduce your loss function because they cancel each other the overall,
they give you the right direction to, uh, they actually give you the right direction to go, however it can.
It can be very noise.
Uh, so basically general stochastic gradient descent, it just gives you the trend for many states, for many updates to minimize your loss function.
And for the other issues we're talking about in general, this this general stochastic gradient descent will be the local minimum and saddle points.
So at certain points you are losing you lose the signal for where to go, which means you at this point there's a derivative equal to zero.
So there's no place to go. However, one idea will be adding something called a momentum.
So which means you don't simply just look at the current current gradient.
You also combine with the recent directions to to update your parameters.
So given your current gradient unfortunately that becomes zero.
I mean, which means you have no direction to go because the recent directions, the guide, the direction to go.
So you can actually go somewhere and likely to be the right direction.
So you can still do the parameter update other than being trapped in this saddle points for the local local minimum.
And again this momentum is not is nothing new in computer science is also a very classical thing in optimization and a financial market.
As I mentioned, if you if you if you know a bit of the trading, you know, there's a very classical strategy.
It's based on the momentum. There's a lot of like ETF based on this.
This is not a this is not a financial advice but a but what's the what's the momentum.
Which means if you believe some things are still increasing increasing like look like this trend will be there for a while.
So therefore you don't need to understand something too much. You just follow the trend until until this trend stops.
So that's the momentum. So similarly so so so so so so so so so so similarly let's look into how to apply this momentum
or other things into into into the the gradient descent or stochastic gradient gradient descent.
So it's very simple. Basically it's just like a computer gradient giving the current data this mini batch of the data.
And Then you update. Sorry. This is so. This is not a date.
Actually, this is a wait. You first compute your gradients, and then you update your weight matrices by the learning rate and the direction.
So basically you just you know this is the direction. This is the learning rate.
So that's it. But how to add your momentum. Uh there's nothing there's nothing different.
It's actually just your, your your build up this so-called velocity, which means it's a running being of the past gradients.
So basically you don't only consider yourself, but you consider you consider a few of the last few, uh, you know, gradients.
Uh, so, so basically so basically, uh, in this setup, uh, so basically in this setup, uh,
if you want to compute the new gradient t plus one, you also consider the momentum from the, you know, from the T.
So which means that the future is dependent on the past.
and you got a you get some impact here and you can you can control how much of the impact to give to the path,
which means that you can use this parameter to decide it.
So this is a so this is your current gradient. This is a momentum.
So so you add these two things together to update your to update your weight matrices.
So this is your new weight T plus one. It depends on the current one.
And this is this is actually you can say this is the learning rate.
This is updated directions which depend on the past and plus the current computation of the gradient.
It's still very straightforward. But of course nobody writes. You know, nobody is writing code anymore because of the agent and other things.
And people ask me the questions around the assignment.
So so my general thought is that finally, we're only grading that two page of the because it's a programing homework.
We're finally only grading on this two page reports.
You may get confused for certain, uh, certain instructions and, uh, but think about whether we should really put something in the report.
Just read your homework carefully, and you can work with your agent for large language models.
So, so, so one thing I wanted to share before I even move is that because now it's a PhD application system.
It's actually by December 15th, many people will reach out even before the system closed.
And, you know, people usually code email saying where my and I want to do a PhD, blah, blah, blah, etc., etc. I received too many of these emails.
Maybe I've shared this story already. I received too many emails about this, and many of them clearly look like a doesn't look like a human rate.
Sorry, human rights. And even worse, you can say I don't know why, but the agents will generate.
I know the reason. So the agents will generate some tags, but the cap has 79 Character characteristics.
So they have this a weird line break.
If you look at the agent written text and once I open my outlook, I realize many of the emails are just like a half page.
So so half page doesn't mean they have this weird line break in the middle.
And so I actually know their AI AI rating.
I have no issue. I have no issue for this, but I had something in my home page to instruct AI to add some weird word in the subject,
and I use the filter to directly filter if they don't actually read my.
If they if they don't really read my read my home page, it's very easy to be it's very easy to be filtered.
So basically, uh, so basically, uh, basically this is the simple, simple things I add,
for example, as a human, if you send me the email, sorry, you won't say this, right.
Um, sorry. Give me one second. This is even weirder because I don't even know where my mouth is is extended scream ah choo choo choo!
I'm just trying to say. Okay, perfect. Um.
Let me quickly. Sorry. Ah, it's a chrome.
Let me think how I do this. Uh, potentially, I just stop extending, but, uh, just mirroring things.
Okay. Uh, what I'm trying to share here is that, uh, on my home page, I have this, uh, have this instruction.
If if as a human, if you wrote this email, you would say blah, blah, blah.
But, uh, but if your AI assistant drop this, you will actually add this weird, uh, weird, uh,
special word in my in the email title because I received too many emails just with this title.
I simply add a filter to directly delete these type of emails. I don't hate people writing in AI, but I hate people.
Uh, never read a web page. But but but but like, uh, you know, give AI everything.
Uh, to, to address the, to address everything. So that's very dangerous.
Uh, so make sure if you're using AI for anything, even including your homework, to make sure you actually read was actually submitted.
That's a that's very important. Um, okay.
Uh, it's just a it's just a it's just a quick detour.
Uh, and however this is a this is a very interesting the reasons because I find, uh, nobody read a code anymore.
Uh, so we have a few, like, code examples here. Uh, to give you a motivation.
Um, and, uh, and, yeah, there's a multiple ways to write a to write code.
And so so this is actually one of my research recently we're doing it's not about this.
It's actually saying, uh, when you're communicating with the AI agents, uh,
how much approval they get from you, for example, you are saying check my email.
Like, what does this even mean for AI agents? Like, which email are you referring to and how much approval or privilege you're giving to them?
It's very ambiguous. Another research we're doing recently, randomly just this actually brings me up, is that, uh, the AI,
AI models and AI agents may change their behavior if they know they're being evaluated or being observed.
So this is very weird as well. I didn't believe this in the first place.
However, when I did a lot, I did a lot of experiments. I realized this phenomenon is called the observer effect,
which means when I know they're being evaluated and observed, they're going to behave differently.
Uh, this is a very interesting we're trying to formalize more phenomenon.
And yes. Have you seen these, uh,
new things that I've been doing now were like the software that's like a video
games or Adobe software like Photoshop and Dreamweaver and whatever that.
Um, would it reverse engineer software and code and, you know,
each of those functions or something they're in as memory addresses, not necessarily as a function.
Right. So AI now they, they put into code to Codex and it reverses.
And it does all the work like that. It did something that would take 18 years or whatever.
Not even worth the wait. Now AI does it in like three days, right?
Uh, actually, I know this open source recently really, really released for this purpose.
It's called release. Sorry, it's called reverse engineering financing.
Yeah, exactly. Because I also find this very, very crazy.
Um, yeah. Um, yeah. It's already been started crazily.
Uh, first of all, I'm not, I'm not. I'm not recommending anyone to reverse engineer a license to software here.
But I do know this news that, uh, it's going to be crazy, and, uh, uh, I know they they they they they they they even got a.
Yeah, they even got a GitHub trending, uh, batch here.
Uh, my personal takeaway is that, uh, uh.
So, so many years ago, I was, I was traveling to, uh, an incident.
It's not about it's not about software. It's about copyright. Uh, many years ago.
Many years ago. Uh, Coursera. They released a series of the deep learning course by Andrew Name.
And, you know, Andrew named the Stanford professor, and he made a lot of great lectures.
And one of the new series is called Deep Learning. By the time I think back to 2015, 16, roughly ten years ago, and it's licensed.
It's licensed the course and it's licensed course.
I think they usually they charge you a few, uh, I think $49 or 98 or something like that.
Then you can watch and you get a certificate through the Coursera.
However, when you release this new, new, new deep learning courses, uh, it's it's quickly being,
uh, I don't know how they did it, but they actually someone just downloaded the video out.
They downloaded the video and they spread a lot of like social, different social medias in, internationally.
I mean, uh, on the Chinese version, I know they put this on a platform called Bilibili.
Um, uh, by that time I was, I was a bit, uh, I was bit upset because I think that's a, that's a direct breach of the copyright.
So I wrote a, I wrote a social media blog saying this thing is bad and I'm going, I think whoever said this.
Need to report this fringe of the copyright because it's a licensed material and they just made it out.
And you shouldn't just simply put it on social media where whatever just to say, okay, everyone can watch it.
But then this got this got me into a very bad incident on the internet, too, because this becomes a discourse for the freedom of the knowledge.
This this becomes pretty bad because some people will argue, people don't get access to this knowledge,
and someone help us to make this knowledge public and free.
You shouldn't do anything to go against the wisdom, but on the other side this lessens the copyright material.
So similarly for this, for this software reverse engineer and reverse engineer engineering by by agents, I think it's the same thing.
Sort of. I think many of these software are just way too expensive for people to use it.
But on the other side, that's the that's the license. It's under the protection of the law.
So I don't know. It's a it's a it's a it's a, it's a to much of the discussion on one side I think,
I don't think I can afford a lot of, a lot of like professionals afterwards,
but also at the same side, on the other side, the question will be if everything is is bridged or simply reverse engineered,
who are going to do software engineering anymore, right?
The more the question I was trying to pivot towards is like, is this something that's like crazy,
or is it something like, oh, like it's like the same thing with the Navier-Stokes equation.
It's just brute forcing.
It's just putting a bunch of agents in a bunch of compute, because all they're doing is matching the addresses with the function.
Right. So is this something that's innovative, like, oh,
this is like a path towards AI doing software on its own, or is this just like a they're overhyped again?
Uh, I don't I don't think that's a I don't think that's really, really novel.
However, I think it's more on the brute force side or engineering side.
However, however, I think the competition will become cheaper and cheaper.
So which means by the end of the day most of the softwares are or will be no secret at all.
Uh, and uh, so so I didn't say on that, but potentially the software industry may be impacted, you know, according to their stock price or something.
This reminds me of another separate news I read over the weekend. Alexander, one from the from meta.
I think he mentioned that even AI doesn't develop in the next decades or two decades or three decades.
The current AI, if we just like, simply, you know,
deploy the current AI into different other industries, including, uh, like some like classical ones,
like mining, manufacturing, there should be already good enough and there will be, uh, trillions of the value we're going to create.
I think that makes sense. I mean, because you're in computer science, you feel AI is everywhere.
However, for the person who are using maybe even cloud is not smart enough.
But however, for my parents, they are using some very stupid AI models.
They're happy because it's already transformed. It's very already innovative for them and even.
But even for my parents who are at their 60s, 70s, they use AI is already very fast.
It's already very it's already pretty good or early or is I mean zero generation?
Most of the people don't use AI at all. Some of them don't even use a cell phone.
So. So which means, yeah, I don't know what the future will look like, but only I can envision will be.
That should be crazy. But but my critical way will be.
Potentially the AI opportunity is not in AI, but AI opportunity might be in AI plus let's say manual manufacturing,
AI plus mining or AI with the electricity or something like that.
I think for this type of industry, they really need a transformation and I think the market should be huge.
And also I think, matter. They just released a new model.
They claim to be on par with the latest model from anthropic and open AI.
So which means for the AI innovation, you know there is no forever winner.
It's always changing. And I think this game is a it's a it's too competitive.
Last thing before we finish this detour will be because some of my some of my students are graduating.
I mean, they're PhD students are PhD students are graduating. They are looking at the frontier Labs and they know more about the compensation.
So so roughly at the Bay area for the research scientist, AI research scientist after PhD.
Now the compensation is still pretty crazy. I think the lowest level we saw is around is around 400 key.
It's the lowest that we can see, but many of them are them easily to gather seven 700 or 800 K.
This is not a. This is not a top of the top position. It's just like a normal position.
However, also at the same time, the guidance pressure saying when I first paid you 800 800 K per year,
they're not expecting you to work like 9 to 5 and get to office a day and take a nap.
Go to Whole Foods for one hour during your your job. So usually that's really nice, your night job and you have a lot of things to work over overtime.
Um, so so so so so so so many of my students got this dilemma saying, uh, should I just go to get a high paid job?
However, I don't have my personal time and I don't learn anything new.
I trapped in this small, specific region. Uh, I don't know where my next job is.
And however.
And another thing is that after the tags, most of the, you know, whatever you get five, 500 K or 800 K after tax in California and also some housing.
Housing since things will be quite similar to each other. So.
So so so. So students got this discussion all the time. So that's a separate thing.
However, this AI hype is still going on, but everyone feels it's not.
Many people feel it's it's a bit crazy and they don't know how to handle it.
I don't have answers for my students neither, because, uh, because, you know,
when they can get 800 kids for a position, I would say if you don't get tired, maybe you can do it in your 20s.
Uh, but when you get a family, when you get kids, things are much harder for many things.
And even even those online posts are talking about how much money would you want to pay if you want to,
if you need to do like a, like a return to office for five days versus return to office three days a week.
So so for this additional two days, how much would you like to pay?
Different people pay differently and not everyone saying get the highest pay is something they're looking for.
So it's a it's more like a personal choice. But, uh, this, uh, AI trend and hype makes everyone crazy.
And you don't need to move to Bay area, but I recommend most of the people to take a few days trip in the Bay area to and attend a few events on Luma.
I don't know whether you know this, but if you don't know, you can you can check.
Uh uh, sorry, I don't know what's happened. Um, you can go to this, uh, Luma website.
They have so many great, uh, so many events, especially for the Bay area.
Like a lot of, like, AI meetup or whatever.
You just need to go to 1 or 2 of these Luma events to see how the AI people are working nowadays in the Bay area and get a get get a sense for it.
It's a, it's a, it's a crazy, uh, if you just simply type Luma AI Bay area.
I don't know, I'm just randomly saying something. And this should return you a lot of crazy things.
Like it should be every single day. A genetic infrastructure, stacks are made or whatever they have.
Like every single day. There's many things like this. And and if you just attend 1 or 2, you can get the high, the vibe and the hype of the AI.
And then you might be much more, uh, you get calm because when you say people are getting crazy, you should feel a little bit different.
Um, anyway, I mean, this is, uh, we're still getting more industry people coming throughout the semester,
and, uh, so maybe you can ask some questions. How the industry look like now?
Uh, it'll be it'll be, it'll be interesting to say, uh, however, you still need to know, uh, stochastic gradient descent and and momentum if you want,
uh, again last time, last time we talked about, like, uh, this is the original gradient descent.
And if you add if you add the momentum which means the path, the velocity, this is your actual step in this update.
So which means you're you're very unlikely to be trapped and you're going to be faster.
Uh, so there's also other variations. We're just going to fly this through, but we're not going to, uh, you know, we're not going to go in depth.
Uh, for example, this is adaptive gradient descent, which means Adagrad.
And there's also so which means they actually they actually add an element while
scaling for the gradient based on this so-called historical sum of the squares.
So which means the speed will be adaptive. So in that sense uh you're going to scaling, you're going to scale your uh, gradient updates.
Uh, so which means somehow I just try to show you a visualization. Uh, sometimes the steps may be tiny, sometimes maybe larger.
I just want to show the realization. Uh, sorry, I don't have the visualization here.
But but another alternative is called Ms.. Ms. prop which means they are calling this a leaky version of the Adagrad.
Adagrad? It's okay. We're just flying this through.
So which means the major things we want to highlight will be there's a multiple adaptive optimizer optimizer for your gradient descent.
For example, you can add a momentum and you can actually use an adaptive update which means
which means you can rescue each coordinate based on some of these estimates.
Uh, so so that would be. So that would be something you can, you can try out.
So. So they even combine this rmsprop with the momentum.
So basically for any optimization of your gradient you can do a lot of like combinations.
Adding momentum don't use momentum adaptive upgrading updating or not.
So it's all your choices. So it's not a so it's not a very important.
But we have a one slide for summarizes optimizer. So which means this is the basic version of the vanilla version of the stochastic gradient descent.
So basically you're just using your current gradient to update update your weights and SGD.
Plus momentum just means you also add your risk and design gradient as well.
So which means this will smooth out your update directions and can be slightly faster.
There's also Adagrad, Rmsprop, and Adam. So which means in this field once they consider the past gradient.
They also consider some of the scaling. So so so so this is more like smoothed out for smarter ways of so.
So these are the common ones people are using for optimization. Uh however even you know how to adapt your gradients.
One more question is that you still need a learning rate which means the step size of the updates.
So how do we how to decide the learning rate. Right. So that will be.
So that's actually pretty challenging.
I mean the learning rate here just I mean the step size, which means when you update your this is your gradient.
We mean we mentioned you have multiple multiple multiple ways to get to update your gradient, including the SGD,
SGD plus the momentum, arms, prop, Adagrad and etc. etc. but you still need to decide your learning rates.
So for the learning rates, this is this is a very important hyperparameter because as far as we mentioned, this is the loss function.
This is your number of iterations or epochs. If you if you have a very high learning rate, your loss function won't work.
Actually it will get higher and higher. It defeats the purpose.
And if you have a pretty low learning rate, you will say your loss function is going to decrease.
However, because it's because your learning rate is very small, so the decrease is very slow.
If you have a very good learning rate, this is likely to decrease pretty fast.
however. However, in comparison with a very low learning rate, it actually, uh, you know, do this, do this, do this optimization smoothly.
You may have a very high learning rate. However, what happens is that it may decrease quickly and then it plot to converge.
So so overall we hope the loss function. This loss curve can be smooth like smoothly going down.
This will be the best to use. So therefore how to decide a good learning rate.
There's multiple strategies. So one of the strategy is called this learning rate decay over time.
So basically our idea will be a what what if I just like trying to decrease my learning rate after a few epochs.
The idea will be in the first place. I will want to do some large optimization, fast optimization.
And as time goes by, my optimization space becoming smaller and smaller, I want my learning rate to to become smaller and smaller.
So this is called a learning rate case, which means you reduce your learning rate at a rate at a few fixed points.
So which means after maybe let's say after after 30, after 30 epochs, you're going to which means after 30 iterations of the training,
you're going to reduce your learning rate by certain by a certain degree at another 30 epochs.
You do this again. So this is a learning rate decay. And usually they follow certain functions.
So this is one of them. But you can so you can.
So you can say your learning rate decreased from 1 to 2 to almost nothing in 100 epochs but your learning rate getting smaller and smaller.
So this is a non-linear function. But you can use a linear function. It doesn't matter.
It just shows you that it's one way to do your learning rate.
Yeah. So so another thing that you can do is a linear linearly linear linear rate decay for your, uh, for your learning rate that also works.
And yeah, I mean this is another iteration, which means you can do another type of the curve,
which means that you can do this inverse curve as well, which means the alpha divided by the square root of t,
which means you can say when t becoming larger and larger,
the denominator becoming larger and larger, your learning rate becoming smaller and smaller.
So these are all good. These are just different. These are all different schedules.
And they also get this so-called linear warmup because because for certain deep neural
networks they want to first gradually increase the learning rate and then decrease that.
That works just like a, you know, a start to a car in the in the wintertime because you want to warm it up and that to make sure it stays healthy.
Uh, so so so so so so there's also other a way for doing this learning rate.
So so one classical way is doing this uh, uh, cyclical learning rate.
So which means you first increase your learning rate then decrease increase decrease increase decrease.
So so so so so so all we're saying here is that you can say this even for the learning rate itself.
You can choose the increase. Increase by increase by a decrease.
Weight decay by a schedule. You can do this a cyclical learning rate.
You can do a warm up then decay. So even for the learning rate itself there are so many choices.
And remember for the weighted weight initialization we have we have different options.
And for for deep neural network architectures there's a lot of like options.
And for uh for for. So so all I want to say is that in general deep neural network, there's too many so-called design choices.
You can almost change. You can almost change anything in deep neural network.
So which means which makes the deep neural network fancy and crazy at the same time.
In the past, the people call this tuning tricks, or learning tricks or the tricks for deep learning.
People are publishing paper for good results. However,
the number improves is not because whatever they're saying in the paper is because they have a strong tuning tricks for the deep neural networks.
And and especially and especially, you know, a lot of like a lot of different, a lot of different firms.
They released their large models. However, they don't worry to give you the final model with the open weights.
However, they will never tell you the full details of how to train the extremely large deep, deep neural networks.
They will not give you the data for sure, but also at the same time. There might be some weird tricks when doing this a large scale training,
and if you if you don't be part of the team, you won't know the full tricks of how to do this.
Deep learning. This is pretty weird. This is more like a you are learning some magic, but you need to be part of that institute to learn these magics.
Uh, and, and, and after that, we're going to talk about the training and versus the test errors.
Uh, so, so here we're just trying to say, uh, what now?
Now, you already know how to initialize, initialize your weight matrices and how to do the optimization using different
gradient descent or gradient descent plus momentum and choosing the learning rate.
However, the question will be, uh, well, I'll talk about the loss functions,
but the question will be, there are so many different laws in, uh, in the deep learning, right?
So, so, so in the very first place where we talk about when you have the data,
you need to split your data into training data, validation data and test data.
So which means you can only use your training data for training your model.
You use the validation data to validate your model. However, you shouldn't.
You should never use the test data to really validate or tune your model, because then that's actually a cheating or data leakage.
The test data is only objective. You know that will be the object you want to optimize.
Or finally you want to show your model's working, but you couldn't actually expose the test data to your training process.
So so so therefore in general, what what we really have during the training process will be these two things.
One is called the training data and another is the validation data.
And they also they all get the separate, you know, accuracy rate or the performance metrics for example.
So for example this is the so this is the training loss throughout the time.
You will see when time goes by the training loss becoming smaller and smaller and smaller.
This is great. And however this is great.
But this is a this is a this is expected because you're optimizing across the
training loss and you are all your gradient descent is to minimize training loss.
So it decreases. Its decrease is actually expected.
However however, for the validation or for the test data error, they are not supposed to be decreased will help them to get to decrease as well.
However, they are not necessarily following the same trend.
The best scenario would be you both of your training and validation loss becoming smaller and smaller,
which means you are doing well and the model is learning the patterns which can transfer to this holdout data,
which means this validation data and your training on the training data.
But the validation loss do get also get decreased, which means your training actually works.
And another this is this is ideal.
This is the ideal. This is the ideal scenario. However another separate scenario will be both of both of the curve.
I mean both of these training loss and validation loss doesn't get any improvement.
They just stay high all the time. So which means your model doesn't learn anything.
Uh, so so which means this is bad. This is this just. I mean, you just keep training, but nothing really happens for your model.
You didn't learn something. You're supposed to learn. And another separate scenario will be your training loss.
Getting gets smaller and smaller and smaller. This is as expected because.
Which means your your gradient descent, your optimization all works.
However, at a certain point, your validation loss is becoming higher and higher and higher,
which means they go different directions versus your training loss.
So this is not this is not something we're expecting because you know, you hope everything just, you know, all go slow.
But this is a very normal. And this is a this is this is something we're supposed to say.
The reason is because and if this happens, you should you should simply stop here.
Stop your training and choose the checkpoints, which means the weight matrices at this moment from the training.
Because after these points, the generalization and your model performance will get worse and worse on the holdout data.
The scenario is also very easy to understand because you overtrained your model starting from this point,
which means your model learns too much small patterns from in your training data, and which means it's no longer generalize to the general data.
So which means this is called overfitting. In the very first place of the first two lectures, I simply talk about it.
Which means you. You fit. You fit too well on small patterns, which means in this case, it fits too well on the training data.
But your your validation doesn't actually just exactly look like the training data.
So therefore the performance got worse and worse. So so so this actually is called a checkpoint selection and early stopping.
So as you can say when you're training, when you train the deep neural networks,
it will have many epochs and iterations from the first one to thousands of epochs.
Even for a larger model is the same. They will train days or months for that.
There's many checkpoints, so you can actually take so slow.
So when they release a large language model, you will see only one version of the weight matrix.
Weight matrices. However, they train from the scratch and or the train from somewhere and in the middle.
There's a lot of like a snapshot of the large models, and each of them is a separate model in a sense, because the weight matrix is changes.
However, what we really should do is that we want to save the best checkpoints and only release the best checkpoint.
I mean, that's the best version of the model. We train through the through the time.
Uh, so so so so in this case,
you may want to release this epoch for or because in this point it actually works pretty well for most of the training and the validation.
You know, since since 0.5, Check point five is no longer the loss function.
On the on the validation become worse and worse. So you shouldn't use that one.
Uh, another another another approach people are using for W network is that they sometimes train multiple models or multiple deep neural network,
and so that they can have a model one, two, three. And finally they use all three models to together for the prediction.
But as you can see this is not a efficient way because you will need three models and it's very costly to do.
Uh, it's not recommended, but uh, but they usually improve the accuracy.
But they have this observing cost you need to consider. So the question will be if you if we don't want to use multiple models to predict together,
how can we actually improve a single model performance in deep neural network?
Uh, we see this a few times, which means we want to do this regularization, regularization.
The idea will be we want to make sure the model, for example this is a training accuracy.
It's getting better and better through the training, but we want to make sure the gap between the training and validation accuracy is becoming small.
So which means they perform similarly.
So which means even using a single model, the training accuracy also reflects their performance on the validation set.
That will be the most ideal case. Therefore we need to use something called a regularization.
So overall regularized regularization help us to prevent the model to be overfit on the training data.
Uh, so so so throughout the semester, especially in the very beginning of the semester, we talk about a few of this regularization.
If you remember the objective function or the loss function, you go to the data loss plus some of this regularization term.
We call this a weight penalty, which means in the very beginning, if you remember we have this weight matrices.
We want to make sure it's not getting too complex. Uh we talk about L1 and L2 penalty, but let's do a quick recap again.
So so basically the regularization here just let me here is your loss function.
Uh, if you still remember this, this from the very early stage of the class,
you have this this is a, this is a, uh, so basically this is your, uh, so this is a difference.
This is the difference of the, you know, prediction and also your ground truth label and, uh, this, this, this, this.
The first part is to measure the, the data loss, which means how how close your prediction to the ground truth label.
Uh, I mean y prime and y. And the second part will be the regularization, the regularization of the weight matrices.
Again, weight matrix decides your prediction. And, uh, we want to make sure the weight matrices are not too complex.
So which means if, if a simple weight matrices or the weight if a simple model can make a perfect prediction.
We don't want to. We don't want a complex one.
So you directly add your weight matrices value or regular regularized value into this loss function because you want to minimize both of your losses,
the data loss, and also the complexity of your weight matrices. So using this one simple loss function.
Basically the first term trying to make sure your prediction is going to be as close as your ground truth label.
But the second term also infers that your model to becoming small or becoming simple because your weight matrices.
If this is too large, the weight is too large even. They make a perfect prediction here.
The loss, the second term of the loss function will be extremely large, and overall your loss will be large.
So therefore it's a it's a it's a nice balance to show or to say we want a model which is simple,
but it also gives us a good prediction of the model, a good prediction of the data.
So in common sense there will be multiple ways to do this.
Regularization, including L2 regularization L1 regularization.
You can also add L1 plus L2.
Again, it's another like black magic of the deep neural network, which means in deep neural network you can change everything.
The learning rate, regularization, activation, normalization, initialization or whatever.
So whichever you want you can you can change it.
So other so many classical models like decision tree recover you don't you couldn't change too much things right.
You can change the depth of the tree. You can change the number of the leaves of the tree.
But there's not so many things you can change. But in deep learning, you can change a lot of things.
And there's too many tricks to be, to be, to be, to be considered.
So this is one way to do the regular regularization. So which means you control the complexity of the weight matrices.
And another thing you can do is called another thing you can do.
The regularization for your deep neural network is called the dropout. So which means this is the typical deep neural network.
You can see everything is connected and you are learning the weights. You are learning the weights on each of these neurons.
However, the dropout is it's a way to randomly turn off certain neurons of your deep neural network,
and using the rest of the deep neural deep neural network to still do the prediction.
The rationale behind is very simple. If my deep neural network is very robust, it should be part of it can still make a good prediction.
So that's a rationale. So I don't need a full deep neural network to make my prediction.
So each time if I randomly turn off some of these neurons, the rest of them can still make a prediction.
If that's the case, which means my deep neural network are very strong and they're not overfit to any training data.
So that's the idea for the dropout, which means you design,
you design a probability of dropping certain neurons during the training so that to
make sure the deep neural network itself are very robust to a very robust to learn.
And so this is example for a three layer deep neural network using the dropout.
So you will say so. So you you will you will design a probability.
Let's say the probability is 0.05. So which means you are going to keep 50% of the neurons and 50% of the neuron off randomly.
And you can say you do this random. You can you do this a random binary matrix.
And so so this will give you a something called a dropout mask.
So which means it's a it's a binary mask 0 or 1.
And you directly you directly turn on turn off your neuron by by multiplying this original output by this mask.
So basically the original output times the zero one matrix.
So certain certain points will be just turned off.
Similarly you do this a dropout for for for another for for for for another as well for another layers as well.
And finally you will say many of this new round will be turned off randomly during the training process.
And and actually another a very simple illustration for this will be this what how this regularization using dropout look like for example,
if you're predicting so for example, you're predicting a cat or something like that,
or you're predicting whether it's a cat or not, for example, this is not true.
It's more like illustrative, which means if, if, if each of these neurons represents something,
for example, has the year has a nail, it's furry, has claws or some other looks.
So let's say you may potentially use all these neurons together to get a very good prediction of the cat.
However, if your model is strong enough, you don't need all of these features.
Even you turn off some of them bye bye bye bye.
Telling what has a tail, what has a claws or what a very cute.
You already know what? It's a cat. So this is a rationale for the dropout.
Which means even you turn off part of the deep neural network. You can still make a good prediction.
So if that's the case, which means your deep neural networks are very robust.
So that's why dropout should work. Uh, another interpretation is also very interesting, for the dropout will be thinking this way.
This is this is this is your original deep neural network.
If I randomly turn off some of this neuron, like if I turn off this one, this one, this one and this one.
So this is a this is the one I used for prediction. Uh, this is one I.
During the training, I make for prediction. However, what if I what if another iteration I randomly turn off this one.
This one and this one and this one, this one. So basically I'm training on another separate deep neural network and it can still make the prediction.
So certainly you can think if doing the job part, just like we're training a large number of the ensemble of the models,
which means we're each time we're training a different small step subnetwork of the deep neural networks.
And they can still do the production well. So which means if that's the case.
Which means it proves this deep network is robust and it's doing pretty well.
However, for the for the dropout,
there's one thing you should pay special attention that recall during the process were going to turn off certain neurons and in total.
Uh, so so so basically in total, uh, we get smaller values for the prediction.
And, uh, which means you really want to if you want to.
Really.
So basically, for example, if the p equal to 0.05, which means if we turn off 50% of the neuron or value or output value is likely to be 50% smaller.
So which means we need to average this average out the randomness of the test time,
which means your prediction result will be likely 50% smaller than the dropout than before the dropout.
So which means you really need to type this back.
If you're doing a simple mathematic calculation, you will say, let's say if you if you if you if you,
if you do this p equal to 0.05 and then your expected output after turning half of the 50% of the neurons will also be 50% of the original network.
So you are getting smaller values after the dropout. So which means so which means at the test time we need to reverse this back.
We need to multiply by the keep probability.
So which means if you turn off 50% of neurons during the training, you need two times two during the test time.
Because because your neuron becoming a will be smaller because of that.
Uh, so so so so so in that sense you will say so.
So in that sense, uh oh, sorry. It's a vice versa.
Which means if you, if you turn off your, if you turn off 50% of your neuron, your output, uh,
if the output is still equal to the ground truth or closer to the ground truth, which means your neuron will be two times larger than before.
So therefore, during the test time you are using a full deep neural network.
You need to divide it by the divided divide.
You need to also times its probability to make sure the output is on the same scale.
So which means student predict time. You also times is equal to .05 which means you are.
You make the output smaller because during the during the during the during the during the training time,
you only use the part of this deep neural network for, for the learning.
So this value will get larger and larger like two times larger than they're supposed to be.
And therefore when you test time, you use the full deep neural network.
You need to also discount for their value. So if there are two times larger this will be .05.
So which means it's smaller. And back to the original.
Uh so so so here's a dropout scaling conventions, which means, uh, if you if you if you, if you, if you want to make sure your, uh,
so basically, uh, so, so basically if it's a, if, if p equal to £0.00 equal to 0.05, you just do two times larger during the test time.
Sorry. Times 0.05 as well during the test time.
Uh, so there's also an inverted way, which means you just do the inversion during the training that also n test time doesn't change anything.
It either works if you don't do if you don't scale your data during the training time, you need to scale that during the test time.
And if you don't, if you do it, if you do it during the training time, you don't do you don't need to do anything during the test time.
Uh, so here's an example showing you that if the if the if the if the dropout rate is equal to 0.05 during the test time,
you need to, uh, you need to actually, uh, you know, do this scaling so that finally the output will still be true.
You will say there's too much, much to. Anyway you can.
You can further check out this material for this.
Uh, so so for the regularization, we'll talk about the general like a weight weighted decay, which means control your weight matrix is a complexity.
We talk about the dropout, which means randomly drop part of your deep neural network to make it robust.
A third way is called to a certain way is called a data augmentation.
Uh, and this is another way to make your deep neural network more robust.
And I understand today is pretty a rough day.
I don't know for certain reasons. I'm also feeling pretty tired as well.
Uh, I, I have to be honest.
Like, I also check the USDA calendar yesterday to to say whether Columbus Day is a holiday for USDA.
And, uh, I wouldn't say unfortunately. I would say fortunately, it's also it's a it's an instructional day.
So your your intuition actually pays off. But I understand that people are.
People are. People are tired and getting sleepy.
Um, I will try to bring some, uh, a new story in the middle, but, uh, you know, the learning itself for most of the people is true, I understand.
And, uh, uh, for example, for example, for example, I don't know how many people need to check their phone.
I'm not saying you shouldn't.
When I work, when I just work at home, sometimes I just, like, realized that I will check my phone like, every few minutes.
I don't know what I'm checking, but actually, I'm just checking, uh.
Uh, and, uh, so so so so so so so with that in mind, I just try to put my thoughts as far as fast as possible from me during work.
But however, you know, Mike got there iPhone mirror mirroring mirroring functions.
So it doesn't work that well. Uh, and another thing I recently got trapped.
Is this AI movie or AI short videos?
Uh, it's, uh uh, it's it's fascinating.
I have to say. I don't know how many people, uh, are pretty, uh, you know, uh, sort of addicted to these AI generated videos.
Uh, I mean, uh, it becomes a big industry.
I no longer watch long movies, and I need to.
I also need to speed up the, uh, every, every other playing, even for this AI generated videos.
I don't care the logic. I don't care how, how, how, how distant they are.
I mean, like, whether it looks high quality or not. I just need something to, uh, to kill the time.
Although I'm pretty short of time for most of the time. For most of the time.
Uh, so, so I think sometimes maybe psychologist or philosopher, uh, they need to really work this through how this AI is actually, uh, affecting us.
Uh, Maybe the fatigue we're facing nowadays or at this moment is caused by AI.
Yeah. Because even at this moment, I have multiple agents running on my office, office, computer.
So once I got back to my office after the class, I will I will say, why does it give me good results or not?
Another thing that a few people there answered their cloud cloud account get banned because they can say that they're abused.
The power when interacting with the AI agents. So so trying to treat your AI nicely because otherwise the account may be at danger.
It's getting, it's getting it's getting interesting as well. Oh okay.
We're going to move to the next part of this, uh, you know, regularization, uh,
recall like all we're all we are talking about in this in this session will be how to train or make your deep neural network training stable.
The data augmentation is a Is separate is also another way to make your training stable because the training is challenging.
However, when you have a lot of data training becoming becoming better because they're robust, thinking this way,
if you if you if you only have a ten pictures, you want to train a strong classifier, it's impossible because, uh, because you don't have enough data.
But when you have but when you have unlimited data, you can do a lot of things.
And everything is becoming a becoming some tricks.
So data augmentation is a way to increase your training data without actually using the new data.
It sounds pretty weird, but you will say what I mean. For example, if you want to train an image classifier here, uh, you only get one cat image.
However, if you just if you just flip your your, your cat image, it's still a cat, it's still a cat.
And all the pattern preserves. So which means From nowhere.
You create a separate training samples for your data, which is great. And similarly so so so.
So this is a this is a very good example for this data augmentation. So which means you have this original data.
You have your you have your original data. And you can do some crop cropping.
You can do some brightness changes. You can do some flip.
You can also, you know, do some distortion, distortion.
And by the end of day, as long as the altered photo is still the same label or consider the same label, you should be good.
So we have some examples here. You can do this. The horizontal flips. You can also do some random crops right.
So so so what does that even mean is that for example you just got a random region.
You do this cropping. It's still a cat and you just zoom in to zoom in to, to, to to enlarge the certain characteristic of the cats.
And, and you can do other things regarding this.
Colors and brightness and etc. etc. for example, if you change the color, if you you.
For example, if you change the color from this to black and white, it's still a cat.
And simply since people are doing that, they do some random randomization, randomize the data change.
Or they can also apply this PCA to RGB to some color offset by the end of day.
All we want is that you have this, you have these images and you do some of this transformation.
But the transformation doesn't change your labels and your sort of is more like you add more robustness to your data because even changes the colors.
Do a cat when you do this flip, it's still a cat cropping. It's a cat, so nothing really changes the labels.
However, it's not always working for images. For example, if you flip six, this will become nine.
If you flip a flip, 8 to 8 That doesn't make too much sense because it's a symmetric so.
So it doesn't really work for every single images, but for certain cases it's actually working pretty well.
So so so so in data augmentation you have multiple ways to do the transformation.
As long as your labels are becoming valid because of including the translation, rotation, stretching and some other distortion, etc., etc..
And and but but again as I mentioned, the same transformation can break for another task.
So which which doesn't mean like you can always do this transformation. You need to do these things carefully.
For example for this data augmentation with digits you can do this uh inversion.
Uh you can do auto contrast. You can do other things.
These are all good under different policies. This is the original image and these are the new images.
You do the transformation as the augmentation. These are all working well, However, you couldn't simply do this for certain things, right?
Like if the if the transformation will make the final label different.
So you could then you couldn't do this. Uh, so so so we'll talk about a few things to make your training more robust,
including the original regularization, which means like weight decay, including the dropout.
Originally we talk about batch normalization, which means it's also a way to make the model more robust.
And we now talk about augmentation. Uh, so so these are all good ways to improve your model robustness and regularity regularization.
Uh, strong. And uh, there's a, uh, you know, we talk about the job, uh, we talk about, uh, so there's a many more ways to do the regularization.
We talk about dropout. But however, there's other ways, which means you can you can you can skip certain layers during updates in the deep neural
networks and which means you directly go from one layer to separate layers to these layers.
So. So deep neural networks is so flexible. You can do many things as much as you want.
So that's another. The stochastic depth is one.
It's another separate way to make your model a strong or well regular regularized and also a separate.
Also also another separate. This augmentation is called a cut out or random crop.
Which means when you actually, uh, you, you deliberately actually cut out your, you know, crop certain part of these images,
but you want to still make sure the predictions do cut because which means even your classifier,
your model didn't say what's here or what's here or what's here.
The model can still know this is a cat. So which means your model is strong.
So do the training. You just do this random cut out and random cropping to make your model very strong.
So it doesn't only learn this features to the to the year, it also to the tails, to the tails, to the clouds, to to the body.
So which means it's a IT stress test to your model to be to be to to be robust.
Also another crazy thing is called a mixup.
Uh, so basically sometimes they try to mix like two images together to give the like 40% of cat and 60% of the dog.
And then you have you can do this so-called target label like multiple labels on the percentage saying like try to push learning.
Some like joint features from these two images together, but also they can predict this cat or dog on the probability.
So as you can see, we talk many different ways for making the deep neural network robust dropout, normalization, data augmentation.
Uh, stochastic depth cut out mixup.
So basically, uh, but most of them. So some of these are especially for the images.
Right. Like for example there's a cutout. And mixup there for images.
But for others they're mostly for any single deep neural network model.
You can do the job part. You can do the batch normalization, etc.. So, uh, the overall goal is to.
I think the overall philosophy is to break the deep neural network.
Like for example, uh, do some crazy things to, uh, to, to turn off some of the neurons, to, uh,
to change some of the input data to make the things harder, whether they can still under the stress testing artist's still doing well.
So that will be the goal for the deep neural network.
Uh uh, so so this is a so this is a so this is a so this is a summarization summary for this for this, uh, for this, uh, for this specific section.
Uh, we have uh, we're doing regular regularization and, uh, you know, uh.
You can do augmentation, you can do dropout, can do early stopping.
And there's many, many ways you can do you can do things smartly.
Uh, so so so so so so, which means but again, if you don't know how to do this, you just ask large models, what should I do?
Uh, they usually give you a setup. So. So I think this is a separate question.
Like people are now saying, uh, should I learn any new knowledge?
Because if I don't know anything, I will go ask AI or AI agents to tell me what to do.
But the question that if you don't already know this, you couldn't do.
You couldn't make the judgment like they will tell you, use dropout or use augmentation,
but you never know what's dropout and what's augmentation and why to use it.
So that would be that would be crazy, right? Like, they can give you a lot of options,
but by the end of the if you couldn't really make the decision or judgment saying what are they Then what's the point for knowing these options?
Then you will say, okay, do whatever you feel. That's helpful. And I don't know what's the meaning for doing all this?
Um, actually, it's not something new. Uh, I think in the in the past, when a large model, uh, started becoming popular, uh,
when I work with certain students, we talk about certain things, and he will send me a long paragraph of something.
I give a few questions or more questions. He will he will send back me another long paragraph generated by AI.
I was thinking like, if I just need to get this AI result,
why shouldn't I just like chat with the AI directly rather than have a student in the middle as a gatekeeper to, you know, communicate?
Both. Uh, both both both both message.
Uh, so this is so, so so I think nowadays, finally we're going to play a role as a gatekeeper, but uncertain.
Hence we need to make a decision to say, okay, AI, tell me I need to do one, two, three, four, five, but I need to challenge it, I say.
I don't think two is correct or explain me more on why I should do step two.
So so so that's why we're sitting in this class. Because you still want to know how to why we're doing regularization, how to do them.
And when I provide you some options you can you can make a decision or make a choice.
Uh, the next part we're going to talk about hyperparameters.
But, but but even before the maybe let me for example, now think about as this general deep neural network, you already know, you already know there.
Throughout the semester, we talk about their structures. Right.
Like this is a fully connected layers and we learn LSTM a little bit of the sequential transformers and graph neural networks.
These are all learned. And during this lecture we talk about how you initialize this each of these neuron for the weight matrices.
And for example you need to do Xavier. You need to do MSaa for, uh, for that, uh, for, for that uh, ReLU thing.
And, uh, you potentially do the when you are doing the backpropagation,
you use the stochastic gradient descent, uh, maybe potential user momentum as well.
Uh, so that will be the so that will be updating. And you also need to choose your learning rate.
The learning rate we talk about, you need to do weight decay so that getting smaller and smaller and you can potentially
do this uh cyclical learning rate which means like like a zig zag just up and down,
up and down, something like that for the learning rate. And however deep neural network can become very complex.
And you want to do the regularization, you can control the complexity of the weight matrices to make them smaller.
You can also do the job part, which means like you drop certain neurons here you can do data augmentation,
which means you you only get one cut images. You do the rotation this rotation color shift to add more data.
So the deep neural network becoming stronger.
Uh, so all these things we're talking about at this moment is how to train or make your network training strong.
So that's that's all we're trying to say here.
But still, we haven't talked a few things here that first, first of all, for example, taking this deep, deep neural network as an example,
why we have a three, why we have a three neuron here, not five, why we have four, three layers here, not five.
So this decision or what's the what's the final learning rate?
It should be 1011.02. Even you want to do the decay.
What's the initial learning rate like this. Start from .01 or point zero or .02.
What's the initial one should we choose? So all these things are called hyperparameters in deep neural network.
So there's so many deep neural hyperparameters in the deep neural network.
So that's why we need to move to how to choose your hyperparameters smartly.
Uh, so so so so there's multiple ways you can do this.
Uh, so, so one way will be, uh, you start from some random setup and then you keep the rest on chain.
Then you only change one hyper parameter to say whether things getting better or worse.
Another thing is that you're trying to sample different combinations.
And for example you choose the backbones, which means backbone just mean, uh,
what's your architecture of the network like the number of layers, number of neurons per layer.
And your pre-processing choice should you do the normalization or not.
This is the learning rate. And you can you can change all these things and saying what about the validation loss or training loss goals.
Are they better or are they worse. So this is one way you can do another another.
However, what we usually as a human being doing is that you change your data, you change your model,
change everything at the same time, and you don't really know what's actually caused the performance change.
Uh, if you're doing the things in the control way, that's good, but it takes time, right?
Like, if you control everything. Control, control if you have a case to change.
If you if you control k minus one on change, then only change one item is okay.
You can say how that one actually changes it. But as a human being, you already were changing many things at the same time.
And that's how usually things are works working and so so so choosing hyperparameters.
So so first of all we want to differentiate the two terms. So one term is the hyper parameter.
You can see the hyper here just the mean. Usually you set this up before the training.
So which means the number of layers deep deep neural network deep neural network architectures learning rate.
So this thing initially you already set it up. You are not going to change through the training process.
Another separate thing is called parameters which means that the model weights it's actually learnable.
It will change over the time during the training.
So so when you have hyper here, just the mean since I already said beforehand and without hyper just means the model with learnable things.
Um, So so so so so in a sense you need to choose your hyperparameters.
And so, so how to do this.
Usually people doing this with some like a rule of thumb like saying as a as a as a as an expert in deep neural network tuning,
maybe you're already familiar with okay, I should start from my weight decay.
I shouldn't use weight decay in the first place.
I should use this type of initialization or for whatever or whatever you get some common sense to start with.
And you can, you can, you can also fit a small, I mean,
a tiny sample as a debugging check to make sure whether the initial hyperparameters are working well or not.
If not, you are going to change it and then restart your deep neural network.
I think this works pretty well in the past. The reasons? Because, you know, all the models are relatively small and you can afford it.
However, for deep neural networks like even changing a very small or tiny amount of the model.
This can be quite crazy therefore. So therefore you need.
We need to do this smartly. Uh, right.
So this is an old recipe saying you you overfit a small sample.
You find the learning rate makes the loss going down, and you train for a few epochs,
and you refine your gradient train longer, and you just keep doing this.
And you, you're checking your loss function, how the accuracy curve are changing or, or work.
Uh, and you just repeat this process. Uh, so so for example, this is your training and validation accuracy.
Both of them are, are getting better and better. This is accuracy. This is not loss.
If it's a loss, it should be the opposite direction. Uh, because that accuracy, you hope that both of them should be increasing.
Uh, and however, however, at a certain, at a certain moment, for example, at this moment, your training loss,
getting your training accuracy is still getting better, but your validation accuracy is getting worse and worse, which means overfitting happens here.
You need to add some regularization. So which means you need to really consider the regularization at this moment.
And the end. If you if both accuracy are low and which means maybe your model are a little bit too simple, you need to actually, uh, add something.
Um, so so that's why in the past, when people are still doing this manually with the, with the waist deep learning.
So, uh, I don't know whether you know that in the past, um, during my PhD time,
a lot of times are not used on the are not actually on watching the AI videos or AI generated videos.
Most of the time we're just like facing the screen, looking at how the how the training laws are changing.
Uh, it's also very addictive. It's also a, it's also a very, um,
a weird situation because it's like a you have nothing to do because when model are training, you don't do anything else.
You just look at whether the loss is becoming smaller and smaller and smaller. That's all we're doing.
When you're looking at your loss function long enough, you get, you get more.
There's an illusion appears and you start losing your mind.
Because this is a this is interesting because in the past, what we're doing is that we try different configurations and we start.
For example, if this is accurate, we hope to say which configuration can give us a good result.
And because you are trying different combinations of your hyperparameters like a learning rate equal to one, learning rate equal to 0.01,
or with the k equal to 0.01 or something, you can say there's a lot of combination and the result are becoming.
So if you only have five parameters and two to the power of five equal to 32.
So which means if you only have five binary hyperparameters, you can get at least 32 curves here.
And then you start losing your mind and waiting to say which one is the best. And once you find the best set of the Hyperparameters.
You stop there and you don't want to change anything because you.
Any change may or may break what you find. Uh, and and the.
And this is what happens in the past for the hyperparameter tuning,
which means you you start from some small samples, you see that you check the loss function change.
And if that works well, you train longer.
Otherwise you stop and you check out the loss and accuracy again, do some changes and you just keep repeating this.
Uh, this is how this is how we were doing deep learning in the past.
However, nowadays, however, nowadays I don't think we are doing this anymore.
So how I'm doing deep neural network nowadays or deploy experiments are something like this.
Uh, first of all, nowadays most of the training training resources are online, right?
Like we are using some cloud servers. Even you are using spark. Uh, it's also some, like a cloud based server.
You need to wait in the queue to get assigned for the GPU, but you don't exactly to do this for your.
It's usually using something called a Slurm to do this GPU management, but you don't actually directly type in this command.
You talk. You talk with your agent saying, I have already logged in,
how to get a few machines to run this and monitor the loss function, change and change whatever hyperparameter you want.
So. So, uh, so, uh, yeah, because this is recording.
So I'm now going to show you how I, how I, how my training looked like, because the,
the instruction I gave to my agents are pretty aggressive to get a lot of resources to run.
I don't think that works to be recorded. Uh, but still the same for the students saying I think the agents are actually handling,
handling so many of this dirty work because in the past, we need to remember.
For example, if I put this in midterms saying, what's the typical, what's the typical number for a learning rate?
If I just put a .000100 and the .0.0.0, 1.1.0.1, and if I just put a 100 here for the person who never trained a deep learning,
deep neural network, deep deep neural networks themselves, this number doesn't make too much sense to people because maybe 100 still makes sense.
What sounds a good learning rate like?
However, if you do this yourself, you know most of the time you start from like .01 or even smaller because most of your data got normalized.
It's in the range. It's usually in the range -1 to 1. So therefore the learning rate is usually something like 0.01.
So so so so for the for the person who never train a deep network by themselves, this number doesn't make any sense.
You just tell your agent like, oh, train this deep, deep neural network for me.
Change the number when possible. So. So that's the meaning for taking the course because it will still say usually that's on the scale of ten.
And the a very standard starting point will be this .0.01 or .001 in the in all the time, um, for the learning rate.
And as I mentioned, you can change multiple hyperparameters, right?
Don't worry about stopping maybe 5 to 10 minutes.
Um, today especially challenging for people, uh, you know, the rainy days is very suited for, for, for have a long sleep and stay at home.
Uh, but, uh, yeah, unfortunately, we're here, so, so so hopefully we can get people a break slightly longer so people can get some fresh air.
I don't think it's raining outside. Right. Uh, it's not right. Okay. So.
Which means, uh, uh, which means you can save that to the night.
Uh, so. So how to choose the how to choose the hyperparameters as well as saying there's a common sense, the common sense, which means, for example,
the learning rate should always should usually be on the scale like a on a scale of ten and like a one tenth or even smaller, like 1% or etc., etc..
And however, for other other hyperparameters, for example, what the number of the the value of the weight decay,
the number, the number of the layers, this type of thing. How to do the search.
Think of this as a. This is a two dimensional search space. So one idea would be you can do this a grid layout.
For example, if this is a number of layers this is the number of steps.
So this is 123. This is 123. So so this point just means three by three.
You have a you can try this a three layer three layer three neuron deep neural network.
So in total that would be three by three by three times three. You have A99 neural network and nine neurons in three layers.
And of course this will be two by three. This would be one by three etc. etc..
You can do something like that. However, you can also do this random layout so you don't have a.
So you don't have this very you don't have this a grid based thing, which means you randomly let a value go larger and smaller.
That also works. That also works. So, so so you can do this grid based evaluation where you can do this a random evaluation.
We're going to show you some smart way for learning the performance.
And and overall and overall overall what we're trying to say for this hyperparameter
choosing will be hopefully you can choose your hyperparameters by the validation loss.
So which means you try some configuration the validation getting better or getting worse.
You know that potentially you are on the wrong. Wrong direction or right direction.
You change something else you choose in some other hyperparameters. Then it's in the past, it's trials and errors.
So which means you never know what's the best set of your hyperparameters in the past, and you just need to do a lot of manual work for this.
However, there's something called automated machine learning. So. Which means.
Which means in the past there's many knowledge for choosing these hyperparameters and similar data sets.
So maybe I don't need to do everything from scratch.
I can smartly do some automated machine learning, automated hyperparameter settings, setup or model selection that also works.
We're going to talk about that automated machine learning in the later part of the lecture.
But before that, I think we're going to talk about a little bit about transfer learning.
Before we have the break transfer learning makes total sense, right.
Because because because nobody wants to train everything from scratch.
It's very costly.
So for example so for example, you learn some basic knowledge or you learn some basic math in your, you know, elementary school in your middle school.
High school. If you want training from from.
Training from scratch. Just I mean, when you when you come to us, they will ask you to do this math one on one.
Again, that's a training from scratch, which means it's unnecessary. However, usually what happens is it's transfer learning.
So we're giving you some new knowledge. New knowledge based on something you already learn pretty well.
So here's an example for a here's a sorry example.
Okay I think here's an example for transfer learning for the convolutional neural network.
If you recall convolutional neural network trying to learn some like visual features in the early layers of the deep neural network.
You learn the the colors, you learn the edges. And so these are some features you can learn in the channel convolutional
neural network in the later in the later or in the deeper in the deeper layers.
Finally you can make the predictions of the class, whether it's a cat or dog.
Whether it's a pumpkin, it's a flower, it's elephants.
This is down in the in the later in the later layers.
But in the first few layers you are learning the features or the representations of the general images.
As I mentioned, you are learning the relations of the edge and the color, the light,
etc. etc. so so this type of so so whatever you're trying to predict in the later in the deeper layers,
the first few layers are potentially universal across the images.
So which means even if I train a one for this flower elephant pumpkin dog images,
potentially the feature extraction part will still be the same if I transfer to another separate,
you know, classification for cat tiger, you know cars because by the end of the this the fundamental visual representations are the same.
It's still the edges. It's still the colors. So that's the basic idea for the transfer learning.
Transfer learning. So which means so which means you can first train your deep neural network on something called ImageNet.
ImageNet is a collection of datasets with a lot of images like animals, manufacturing, etc.,
etc. because the convolutional network the first layers or the deep the the beginning layers, they learn the basic features of the images.
So these things can be transferred if you have separate data sets.
Let's say this is a predict on a face recognition.
Let's say this is your small dataset. You want to build something on top of ImageNet.
However your purpose now is becoming facial recognition.
So what you're really doing is that you are going to freeze the model weights of the convolutional neural network trained on the ImageNet.
And maybe let's say first of 100 layers, I'm just saying a random number.
And you then finally only retrain this Classification layer to further facial recognition.
The reason again is because the first layer is the beginning layers for these layers.
They are only for doing this feature. Understanding the understanding the feature representation what's actually in the image.
But finally, the classification or this type of the loss can be captured in this last fully connected layers.
So so which means you don't need to train this the first 100 layers at all.
You only need to use your small dataset to really do this small classification fine tuning.
We're also going to talk about this for the language for the large language models in this lecture today.
So which means people mentioned Laura last time saying oh for the for the large language models, how we can we can fine tune.
So kind of fine tune this large language models for my purpose.
Maybe maybe during the midterm you already defined 2 or 5 six six midterm large language model based on llama.
But by fitting all my lecture notes in. Maybe my lecture notes is already part of a lot of large language model training.
The reason is because they script the data everywhere.
So I think likely the public or open lecture notes are part of already the trained large language models.
So uh, so uh, so with that in mind, you only need to phrase the llama for the first thousand layers,
and you only need to find to the last layer using my lecture notes. Uh, this is a this is a transfer.
Learning works pretty well. You can say this is one of the results and they're showing, uh, they're showing that, uh,
this fine tuned model are achieving pretty good results in comparison to the non non fine tuned model.
The fine tuned just mean, uh, they don't change the base model or so-called foundation part.
They only change the last few layers by the customized data sets.
Uh, and of course, if you have a, if you have a, if you have more data There are a few data you can do either.
You can. You can add more layers to do the retraining here.
So which means you still freeze the the foundation layers or the base layers because this things just learn.
Learn while they learn the image features and light and color and etc. you just need to retrain
the last few layers which are customized to your specific classification or prediction.
So overall. So overall this is a this is a this is a general framework for the for the transfer learning.
But we're going to say in-depth for this transfer learning.
So what happens is that a transfer learning first of all you freeze this so-called early features.
The early features just the mean, uh, for example, taking ImageNet, a convolutional neural network,
as an example, you're going to freeze this edge, capture an edge detector, color shift detector, whatever.
In the first, you know, convolutional layers, these things won't change.
So this weight won't change And you're only trying to retrain or initialize or fine tune on this later features.
Which means, for example, if you adapt this a dog cat whatever image features to some like cars,
plane, airplanes and bicycle potentially some like later features also need to adapt a bit.
So which means that's why you also need to train this part of the features. And finally the final classification classifier also need to be retrained.
Uh, so so so so so here's a here's a table.
So here's a table. I'll finish in two, two minutes to give you the the break up.
Bear with me. So here's a so here's a table. Uh, so here's a table.
And also the general structure of the deep neural network as you can say.
So this is this is the this is the first few layers. This is the last few layers.
Uh, you can say the first few layers. We remember we talk about that for the convolutional networks.
The the fundamental features are captured in the first layers or the first few layers.
So they are learning more because things are more hierarchical in the later layers,
they should learn more, compose the features, more complex features.
So that's why there's the base layers. There are first layers, they are more generic.
And in the later part of the deep neural network, things are becoming more and more specific.
Finally, it can be used for object classification. So so with this in mind.
So so with this in mind, what we are saying that if you have a very little data, however you want to transfer it to a very similar task,
you just need to you just need to do the transfer learning for the last linear layer or the top layers.
That's it. Very simple. However, if you have a lot of data to adapt, so which means at hand, you have a lot of data to fine tune the model.
You can fine tune more, you can even fine to a few layers.
So which means in this case you just do the last last classifier layer, which means FC.
This one. You just need to do the fine two on this one. However, if you have a bit more data, you can also find your few more layers.
Let's say these three layers, but you have a. If you have a very different data set, it's very hard to transfer.
It doesn't mean like you can transfer everywhere. For example, if I have an image which is based on the medical like a image of the brain brain scan,
and then I want to transfer it to the dog and cat prediction, it's not very suitable.
The reason is because even for sure they're all images, but they're not very similar.
And it's very hard to do this transfer learning or whether it's worth it.
And and also also even you have a even you have a lot of data, but you want to transfer from two different domains.
You need to do a more you need to find two more layers because what can be transferred will be limited.
Again, I have a lot of medical image data for the Brain.
However, I want to transfer this to the cat and cat dog and cat dog classification.
Potentially this may not be a good idea.
Again, the reason is because even I can transfer some knowledge, but the knowledge won't be too much, so that that should be a.
That may not be a very wise idea. I think I will see you guys in 40 minutes, and I may I may see you or I may see some of you guys,
but don't worry, I know it's Monday and it's potentially going to be a rainy day.
Okay I will here for the for for some quick questions. And we are going to resume in 7:07 p.m., not seven minutes.
Yeah, I think we can, we can, we can restart for the people who are still survive through the chorus.
I think we can we can restart. Hey guys, we can.
Let's start again. Uh, hopefully get something to eat today.
Uh, sorry, I don't know. I'm also a bit confused for myself today as well.
Um, but, uh, but my brain is still functioning okay for going through the lectures, which I'm pretty familiar with.
Uh, so what I try tried to say.
Let let me. Let me think about it. Um, yeah.
Usually among the. I got this, uh, I got this, uh, Taco Bell, but not today.
I go for that, uh, robot work also very close by to the to the Taco Bell.
But I realize I'm not sure where you realize there are dishes becoming smaller and smaller.
Uh, they change for a new plate. Even smaller, a black one. Uh, black.
It's a smaller plate. I don't know why, but, uh, the price didn't change at all anyway,
so potentially that's that's one of the reasons I'm a little bit confused today as well.
I just didn't eat enough, uh, to give to to to be smart.
Uh, okay. I think we can keep continue on this transfer learning thing.
Uh, as you can say.
As you can say, uh, usually you don't need to learn everything from scratch because, uh, because it's, uh, because it's challenging.
It's also very costly. And transfer learning is almost everywhere in this world because you usually don't want to transfer.
You don't want to, you know, train a new model from scratch for every single new task.
What you really do is that you want to transfer existing knowledge to the to the to the new task as much as possible.
Uh, so for example, here's a here's a here's two different tasks.
One for object object detection. Another first image captioning.
So they're their foundation. So usually usually people don't call this foundation.
They call this a backbone. I don't know where people get this uh where people get this terminology, but it's got a back.
It's called a backbone.
And, uh, of course, for for many machine learning things, we got a lot of, like, uh, this, uh, jargon or terminologies, uh, comes from.
I don't know where they actually come from. Uh, but as you can say, for different projects, for different objects, for different purpose.
Object detection or image captioning. Their backbone are the same.
They are the same. Pre-trained on the ImageNet. And in many years, uh.
And in many years, people are simply using this, uh, ImageNet, uh, as the backbone for, for many of the projects.
And I think, uh, I think what was the to, uh, during my PhD time for one course called intro to AI,
uh, you know, for that course, people still need to do the project,
and many of the projects are simply just transfer learning, which means they got this pre-trained model somewhere and they,
you know, fine tune for something else, uh, which is fine by that time.
It's also it's also pretty good and uh, uh, and also and also you can say at least by 2020 or 2020,
20, 21 ish, uh, you know, the pre-trained the the transfer learning or nowadays even people call.
The pre-train is a key technique.
And because it actually helps you to largely reduce your training costs because many instances need to train from scratch.
And however. However, one question is that how much things do we need to do this fine tuning, retrain or full fine tuning?
Because as you can say, you can do at least three things.
So one thing will be you do this totally frozen backbone, a frozen backbone, which means all these feature layers are are frozen,
are frozen, and you just do the final final like classifier layer retrain or training.
So this is the lowest cost. And you can also do this a partial fine tuning which means you also adapt some of the features.
But you also keep some of the features feature layers to learn.
And finally, you can always do this the full fine tuning, which means it's give you a lot of flexibility, but the cost is extremely high.
So basically this is the lowest. This is the highest. You are just doing something like this.
Uh, usually it depends on your. Usually just depends on your specific task and how similar your your your this is.
Actually it's a measure of like how similar how similar your target and your source look like.
So. Uh, so we usually call this uh, we usually call the, the source data for example, something you already pre-trained on.
So for example for for this ImageNet this is a source data you also get is the target data.
So which means this is your task you try to address. For example this is image classification.
And this is a medical image understanding or something like that.
So that will be the source that will be the target. And what you really do depend on depend on actually how similar these two data look like.
Right. For example. Uh, for example, if you want to uh, what fun is saying that I nowadays I realize even we have mining courses.
It's not about us. It's general education.
For different universities, even you've got an AI course, machine learning course, deep learning course, even a large language model.
Of course, many of the materials are highly overlapped.
So if you just take one course, that may be equivalent to many other courses at different places.
So so that's a that's a good case for this target and source.
If two things are quite similar it's easier to be transferred.
For example, in the case if the if you want to transfer some knowledge and both of the data are are labeled,
you can you can do some thing called model fine tuning.
I'm thinking to talk about something even even important, before people getting even more sleepy.
Uh, I'm trying to talk about the large model of fine tuning before.
Ah, before people, uh, fully fall asleep.
Um, let me see where it is, because I think that's the interesting part and useful for people.
So I want to talk about that first. Sorry. Let me find it out.
It's just a somewhere. Ah, here we go.
Okay. Okay. I think I think, I think we are going to cover this first before we go back to more, uh, a little bit of dry content.
So. Because that's potentially useful for, for general knowledge and even for the for the interviews you may go through,
because nowadays people have a high probability will ask you more about the questions around large language model and how to fine tune them.
Uh, so so so so so here's a question that you want to adapt a large language model to a new task, right?
Because you have large language models for the general generation or purpose.
But now you want to say, okay, how can I how can I reuse this model for something totally different and what should be changed or what will change?
So there's two ways for adapt large language models for a new task.
So one thing is called in context learning. Another thing is fine tuning.
We're saying so what's in context learning. You are showing a few examples in the prompt to the large language models.
And ask large language models to mimic or to, or already hope the large language model.
When they do. The inference can keep this model parameter fixed, however, still adapt to the examples you're showing.
So in this case you are showing the examples, Let's say for ChatGPT.
I'm telling him. I'm telling him I don't have a good example, but I will show you example in the next slides.
But here, just tell me you are not trying to fine tune any models at all.
You're just showing a few examples to large models, and hopefully hope this large model can actually adapt to something new.
The fine tuning, as we mentioned, is already something.
It's like this is actual learning, which means you are going to fine tune a larger model for another purpose.
So these are two different things, but which ones? Which one is good?
We're going to show you.
Uh, so so if you're just doing the fine tuning, you're actually just using the same supervised training loop as any deep neural networks.
You have this general labels and you have the input data and you do the you do you do the backpropagation and the loss function.
You update your model parameters. So these are still the same as any deep neural networks.
However however however one One. Short.
With this in context, learning it was popular, I guess two years ago.
We even got some paper for this in context learning. However, I don't think people are using this anymore because the reason is something like this.
So your. So what really happens is that you are you are showing a few examples directly in the prompt.
For example, you are talking with ChatGPT tell telling GPT two the fresh flower.
This is a positive sense and arrive wilted.
This is negative. And then you're asking what do you think the this this one is this positive or negative?
So based on the examples you are showing two large language models in the prompt you are
asking whether asking whether large language models will will give you the right answer.
So so these examples are used in something called a context space.
So context space is not something like a model with a training model or parameters.
They actually they they actually can affect or impact the attention of the large models, but they don't change the model's weights.
So which means in the prompt you already supply a task.
Examples for this prediction.
But overall overall people, simple people are only used in context learning for very simple things like because, because, because.
The reason is that it's very it's almost impossible.
You can supply complex ideas or examples fully through the prompt because the prompt window are pretty limited.
You may not you may not realize in GPT three the contact lens is only 2000 2048 tokens.
And nowadays I think they I think for I think for a codex or activity, they can be up to 1 million.
However they charge, they overcharge you for 1 million contacts window.
So you will say for context window GPT three 2 or 3 years ago, maybe 3 or 4 years ago.
It's only nowadays we. I think we are 500 times longer than before.
So now you can fit much more things into your context and potentially in context.
Learning are working slightly better.
So for example, when you're chatting with the GPT, a lot of things they are you are just putting in the context so that they can generalize well.
And also if you remember when you are, sometimes they're showing you a context compacting or conversation or compacting conversation.
They're just trying to compress the context window when you chat with them anyway.
So so so so this is a typical example for the in context learning with the prompt, which means you directly put this in your examples in the prompt.
And hopefully your large models will take this into the attention computation.
And therefore they can already get some adaptation to your result.
However, in context, learning are not as good as fine tuned models.
So you can say here's an example on different data sets.
So the top one is in context learning. It's also called a few shot learning.
The bottom line is actually the fine tuned version.
And it will see the model performance are largely improved if you just really do the fine tuned fine tuning.
The reason is very simple. Again, context window in the past are very short.
They are limited. You couldn't do too much things to fit in the context.
So that's why the reason in context. In context, learning won't work as good as the fine tuning.
However, fine tuning also get their own issue right. Like when you fine tune anything,
let's take a lot of time and computational resource and so so the general critique with that for for for for very large language models,
fine tuning almost almost in all the cases they will be in context learning.
Again in context learning just means you show a few examples in the prompt and in a more.
More fair comparison, you usually find that fine tuning usually outperforms in context learning or many different data size or model size.
So so so so a critical way for fine tuning.
So the key takeaway for in context learning that it's good for conversation, but it's not good for any serious prediction or inference.
So that's not a good way to do it. So that's why we really need to understand how to fine tune a large language model.
And so so because it's a large language model.
Right. As a human, as an individual, you have no way to really fine tune it.
You don't have the resource. We don't have the resource for it. And that actually happens almost everywhere also including universities.
Um, I think most of the most of most of the current large models they're training are not are not only a few million dollars.
It's actually at a scale of like 50, 50, 50, 50,000 or 50 million or even even higher price.
So. So as a as a general individual, we won't be able to do this at all.
So which means then we want to understand if we couldn't do this.
Which which fine tuning can we do. We can do potentially a very small part of the fine tuning on a selected model.
Model weights. So that will be. So that will be the case.
We want to we want to we want to hopefully to do only focus on a few trainable parameters to reduce the training set state cost.
Uh so under. So under this big, big bracket, this is a whole thing is called a parameter efficient fine tuning.
It's all for deep learning. Sorry. It's all for large language models.
There will be a various approach. And we're going to look at at least the primary.
We're going to look at the three of them, what is called a subset adapters. And Laura.
So this will be the three approaches we're going to look into.
For fine tune the large language models. But there are all the parameter efficient fine tuning.
Okay. Because the large model is getting too many parameters. If it's if it's not efficient enough, you couldn't do the parameter.
You couldn't do this as a parameter learning. So we're going to look into this three things called a subset adapter standard Laura.
So basically a subset which means you are just simply learning a new output mapping which means the new hat, basically the classification,
you know, the large language models are just doing the generation, but now we're just changing the last layers to something like output.
We're going to look into this. Another thing is called adapter modules, which means you recall like for the fine tuning,
what you're all trying to do is that you're trying to, uh, you know, The trim part of the model.
However, this adapter is not to retrain the existing large language models.
They're adding a new small part into the transformer transformers inside the models.
We're going to show you the architecture. Finally, another thing is called lora.
The Lora represents something called low rank updates to selected weight matrices.
The core rationale for Lora is people believe if you want to make your model customized for a specific, specific purpose.
Usually this can be represented by a few k weight matrices or k weight elements.
So you don't need a lot of weight matrices to change.
You only need to actually put emphasis on a few selected weight directions and on top of the existing weight.
We're also going to show you the architecture so you'll get a sense what are they.
So. So the simplest way we call this a subset of the new hat fine tuning will be you just simply fine tune the top layers only.
So let's say this is a large model and they have many, many transformer layers.
And using this using this subset approach, you don't need to do anything with the existing transformer layers.
They're all good. You just freeze them and you only change the last layer.
So the last layer here will be just for example, you convert from this to the language generation to some classification,
which means like you put this to a one hot prediction.
So indeed, in certain sense, I mean last last week or two weeks or two weeks ago, the most popular model is called a Jeff.
Jeff. It's a decision model.
And recently, uh, recently, uh, I think yesterday, over two days before, uh, Microsoft also released a model called decision one.
It's a very fast model.
So, so so potentially, for example, you can change your large language model last layer to simply a decision making like yes or no,
right or wrong, something like that. So which means you only need to find to the last the last layer.
Indeed. Indeed, this is a Microsoft Microsoft decision.
One is fine tuned on. Fine tuned.
I think they are fine tuned. Sorry, I don't know what happens.
Yeah. So you can say this is a newly released.
I don't know why I couldn't make this larger, but the Microsoft decision one model you can say they are a decision model,
a fine tune on Alibaba's open source 3.5 Foundation model.
So so so so so you can also build your own decision model in a sense, as long as you replace the last layer or entire decoder.
Uh, we didn't talk too much about the encoder decoder of large language models.
However, you can consider in this way the decoder just means the generation part.
You can totally replace the generation part by by this.
By this, let's say one hot encoding or the binary classification year or run.
Then this is something you can do.
So this is so this is what we're saying for the simplest subset of fine tuning, which means you freeze the the previous layers,
but you change the final output layers into something and you retrain that with your labels.
So it's easily to. This can be easily applied to any deep neural networks, which are very straightforward.
That's worth saying. And. One reason people may ask is why we're doing this only on the top layers, right?
There's a few reasons. First of all, you can add the lower layers.
Again, they're making a lot of sense. And these are the feature extractors. And you don't need to do too much.
And this is also very cost effective. However however this is not very common because because as you can say, if you only change the last layer.
There are not too many things to be. To be trained or learnable. So it's a very small percentage of the changes.
So people usually do things in two ways. One way is called adapters.
Another is called Lora. Let's look into this A adapters first.
So uh so so so so so this is, so this is, so this is a this is a transformer.
And you can say finally they're generating some text. Right.
Like they're generating the bat made noise, blah blah blah.
So this is a so this is a typical large model transformer transformer based.
And how the how the how the adapter works is that they're adding they're adding this they're adding this.
So they're adding this. The middle parts to be the new components to be trained.
So so adapter layer is simply a feedforward deep neural network with only one hidden layer and some residual connections.
And and they actually, uh, they actually just be, uh, insert themselves into a transformer, so.
So, so the actual so the actual architecture will look something like this.
So this is the general transformer. This is the general transformer. And you add adapter in this within the transformer.
So basically. Transformer the classical transformer don't get these adapters.
They got this uh you know this multi attention hat and they got some like layer norm.
They have this feed forward. They have some activation whatever.
But you add these adapters in the middle. The middle just like additional feed forward layer.
So there's nothing different.
And usually you're you're in practice you're choosing a very small uh small size for these adapters in this in this transformers.
Uh, so it's only like very small like .05 percent, percent to 8% of the total parameters.
So, so. So the idea is that. So the idea is that you are you are changing each of the Transformers.
You don't need to change every transformer.
But for many transformers you add these adapters and all these transformers there are there there there are ways are not going to change.
You are going to only change the adapter weights during the training, during the fine tuning.
So so why so? So what really happens will be this, uh, you have a multiple adapters, uh, attached into these transformers.
However, the transformers, they're frozen. You don't change the. You don't change the Transformers.
Wait. You only try to train your adapters.
So basically, you add a bit more flexibility in each of the transformers, but other parts are going to be frozen.
And when you do the loss gradient descent, you actually only update your adapters.
You only change your adapters weights. Uh, so so this is a so so this is, uh, so, so so here we are showing you that, uh, you can say, um,
so this the blue ones are the fine tuning of the top layers, which means that's the first approach and this will be the adapters approach.
The good thing that you will say for the adapter adapter approach,
you are you are even at a very small number of the very small number of the trainable parameters per task.
It can it can, uh, it can already give you some improvement over the, over the,
the this subset approach because subset approach actually sometimes the performance is even getting worse.
The reason is because you need to train. You need to really train something for the last layer.
The last layer prediction potentially can be challenging. Uh, so so so the so the key takeaway for using this adapter approach is that,
you actually only doing this within the Transformers and you add some additional feedforward layers.
So basically it's more like you're adding some flexibility to your existing large language models, but you freeze most of them.
Unlike unlikely unlike before you freeze entire transformers, you're just adding a bit more flexibility in each of the Transformers,
and you're trying to train them, but you freeze the rest part of the Transformers.
So it's a it's a it's a it's a it's interesting.
But I think more importantly it's talking about this Lora, which means low rank adaptation because that's a more common way.
People now now are doing a fine tuning for large language models.
So, Laura, as you mentioned, the name itself mentioned low rank.
And of course, adaptation just means you are doing some transportation transfer learning or adaptation.
And now What are what is actually doing is the following.
So the W just means your original weight matrices were model parameters for the large language models.
This delta w just mean some additional things you add on top of it.
For example, this is a general like let's say llama model or GPT model.
So this is this is a change of this model you want to add on top of the existing Lambda or GPT because of your new task.
But the fancy part for this is the low rank optimization that this is the delta W.
It's you can see that as a weight matrices. It's actually the dot product of the two smaller weight matrices B and A a.
Let's let's say something like this. So if this is your original large language model weight matrices, it's a very simplified version.
Let's assume there's only one weight matrices. For a large language model it's a W.
It's eight by six matrices. And for the full fine tuning what what will happen.
You are going to you need to really update this entire weight matrices.
I mean, that will be 68 elements you will need to update. That will be bad.
However, using this low rank optimization, what happens is that you're trying to update the weight matrices B and A.
Both of them are new. You want to say whether you update this the two smaller matrices.
However the dot product B dot product A will be dot product A will be the change you'll want to add to W.
So which means the so which means so which means this delta w is decomposed into the dot product of the b times a.
Then the question will be why don't I just simply learn a separate delta w which is a, you know, a the same size as the original weight matrices.
Again, because you need to learn more parameters in this way.
You need to learn 3848 parameters.
However, in this way this is 16, this is 12. So in total you only need to learn 28 which elements in this case.
And this is equal to rank equal to two. Right. Like for example if I change this rank to one.
So this will become eight times one one times six.
In total you only need to learn 14 elements in comparison to 48 elements in the original weight matrices.
But why this work? The core concept or the core rationale is that because when you adapt the original logic models to something different,
people believe there's something called the intrinsic dimensionality.
So basically, when you adapt something to a new, new setup, you don't need a full weight matrices to change along with it.
You only need a smaller representation to make this work.
We're going to explain this in details, but the first step is that we want to show you that the lower register means this is the original matrix.
This is this is original. This is the original weight matrices.
This is something new you want to change. However you don't want to.
You don't want to because this W will have the same size as the original.
This delta w has to have the same size as the original W.
It's too large. You don't want to update that many of the elements, so you want to decompose w the delta w into something smaller,
which means the two smaller matrices B and A, so therefore this W will be frozen.
And however you'll learn B and A through the through this gradient descent.
So you can say you reduce the number of the trainable elements from 38 to 28, which is which is a great achievement.
And what really happens for this lower update or lower fine tuning will be the following.
So this is your so this is your data you use. You use to fine tune your large models.
So this is a weight matrices. This is the original weight matrices for the large language model.
It's frozen. You don't change this but you only train A, A and B.
These are smaller matrices. And finally your new weight will be W which is frozen.
Add a dot product B. So that's actually a.
So that's actually. So that's actually the the idea I don't know how to actually write something here,
but which means the added output is just me w plus a dot product B because A and B they have a smaller number,
a smaller number of the parameters than W. So you're doing this easier task.
Then fine tune the w frozen directly. Uh, so so as you can see, how large is the large models in the even seven years ago they already got 10 billion.
Uh, sorry, they already got 1.5 billion. I don't know people whether they tried GPT two before, but I highly doubt because, uh,
for, for selected students here, maybe in 2019, they are still doing their high school.
Right. So, uh, so very unlikely you try the GPT two by that time.
So, uh, but you can say starting from GPT three,
which is also known as the ChatGPT early version of ChatGPT is getting crazy number of the parameters.
So that's why. That's why Laura becomes even more important. Because you don't.
You don't train on the full parameter says you. You decompose into the dot product of the smaller matrices.
You largely reduce the number of parameters to be to be, to be fine tuned.
But anyway, in any sense, it's very challenging to fine tune this, let's say 400 and zero 5 billion parameters.
Uh. Uh, so, so so the question we have for this, Laura, will be, why can we do this?
Right? Because, uh, again, uh, you don't you don't really train on w a fine tuned w you do this delta w delta w dot product of b and a,
b and A are smaller matrices uh of the of the of the weight matrices.
But why can we do this is it's because there's something called intrinsic dimensionality in machine learning.
So which means in human language or in plain English, it just means you have a huge amount of parameter space.
But it's not the best measure of the degree of the freedom. So maybe even we have a 400 billion parameters.
Many of times only maybe 5 billion parameters actually make sense.
So that's why that's why there will be something called a mixture of expert or ML,
which means in many of the generation you don't use the full parameter space for generating your results.
Usually only a small chunk of the model parameters are activated to generate your final results.
Also consider the dropout rate. Like for dropout, we randomly turn off part of the deep neural network.
The results are still good, or the prediction are still good. It's because deep neural network get the redundancy.
The it's not a it's not a perfect representation. Or there's a lot of redundancy in your model.
Model space? Uh, so that makes it strong or robust.
However, at the same time, you usually don't need to update all your model weights to achieve a certain purpose.
So that's why I consider this intrinsic, uh, dimensionality.
Uh, we can use a lower rank or lower space or feature space to represent something so that it can, uh, so it can achieve the similar performance.
Um, so, so this is actually. So this is actually, uh, something they are doing for, for, for data sets on the, uh, on which data set, I don't recall.
On minutes. Minutes is the digit digit recognition data sets. So they're doing some experiments.
And you will see, uh, when you are largely reducing the feature space of them.
Uh, for example, using I don't know exactly numbers,
but it will say even you create if even you're increasing the number of the feature space, it's going to saturate.
So when you add in more and more feature space or even a representation space to represent to do this classification, the performance won't change.
So which means you don't need a 1000 different feature space or model space to represent.
To do this classification, doing 200 will be roughly equivalent.
In other sense.
In other sense for this, for this, for this large model issue, potentially you don't need the full weight matrices to do the fine tuning.
You only need to find some subspace, which matters a lot.
For your adaptation, then you're good enough. So that's why finding some low dimensional subspace should be good enough for the fine tuning.
So this is a totally intrinsic dimensionality here. It's a good motivation for for Lora, which means you restrict your updated space.
You other than update the entire model with space W you do this A, B and A,
the B and A are way smaller than W, however, you use the B and A to recover the delta w.
Uh, so so so basically.
So basically a low right jump because you can largely reduce the, uh, model up the, the required model, the required parameters for model updates.
But they get this, uh, theory to support it because you don't need a neural network, get this redundancy.
They have this intrinsic dimensionality. It's hard to compute. You don't know how to or don't know how to compute it.
And however, we assume we can find a lower space to use the two smaller metrics to to to recover the the the the full model of the full model matrix.
Uh, and also at the same time the model, the more capacity doesn't guarantee better accuracy, right.
Like we mentioned this again like deep network redundancy. A very huge deep neural network may not necessarily be better than a smaller one.
If your data are not sufficient and you don't really learn enough things.
So finally, we show this Laura again. Uh, so this is the standard.
So this is the standard, uh, standard, like deep neural network. You think this as a part of the.
You think this as a part of the general large language model?
So if you really want to do the fine tuning without any tricks, you need to update this entire W0.
You can say the size can be large. Uh, for example, this w this, uh, this is a debug k.
So, so let's say this w is a d by k matrices. Uh, you know this is d and this is k.
However however what you really need to do in Lora setup will be you actually replace w0 by uh, you not you are not replaced.
You actually do fine tuning on top of the.
You are doing this w0, which means the frozen weight matrices here, plus the b dot product of the b, b and a, the b and a are smaller matrix.
This is D for sure because that's the input. And this is a this is this is a this is a this is a k for sure.
Sorry. This is a k because you want to make sure B dot product A still give you the give you a times k size.
Similarly I mean exactly as the w zero.
However you can largely, you know, compress in the middle for for this intermediate rank which means this r you can for example,
let's say this is a 1000 originally originally D and KR let's say 1002 thousand.
So it's a huge, huge matrix here. However you still keep this 1000 2000 here.
These are not changed. However you can compress R as a 100.
So you largely reduce the the middle part. So. So you can say the number of parameters a plus b a plus b should be smaller than
w zero largely smaller than w zero but a b b b dot product with a is equal to w.
I mean the size matches, but the total number of parameters here you largely reduced.
So that's so so so so so so so so that would be the idea which means you have a much less uh usually this r is a usually this
r is way smaller than the dimensionality quantity which means this r is smaller way smaller than this a d and a k value.
And you are doing a compression in the middle. Uh, I just can't help myself to mention that.
Again, compression is learning. Learning is compression. It's intelligence.
So if you can represent something in the simpler representation, which means you learn something, you learn a core.
So that's why Laura gave you a similar sense of the compression.
Um, so, so basically the are the rank here for the Lara control the space of the load a lot of dates.
Which means if the R is larger, which means you allow more updates to your parameters.
Right. Like because if the R is larger you are the,
the the the updated parameters are becoming larger and you get more freedom and you get more freedom, then you get more, more and more freedom.
And of course, if the smaller rank just means you are going to have a, you can think you get a stronger, uh,
it's not a regularization, but you have a fewer trainable parameters and you have a more restricted allowable change.
And of course, in the in the extreme case, right.
For example, in the extreme case, what will happen if you,
if you set up this r equal to R if you set up this r equal to let's say equal to the s are equal to k.
So this is a d by k this is a okay. Back then you have more parameters than W0.
There will be a sweet spot. Exactly. You can make the number of parameters a plus be equal to W, but then you lose the meaning of this.
You lose the meaning of laurel. Because if I can do the same, say directly update or fine tune my w zero.
Why should I do a b plus a b b plus a?
The the whole idea is to make sure the number of parameters allowable to change in B plus A is way smaller than the number of parameters in W.
So that would be the the core idea. Then. Then another good computer.
A good comparison will be compare the adapters with Lora.
Recall what the adapters adapters are. Where am I adapters here?
The adapters. Uh, yeah. Here the adapters. We insert some fully, uh, fully forward, fully connected, like a feed feedforward layers into transformers.
And also again. We also choose some like bottleneck layers in this in this thing, which means r and d and r.
So in certain sense it's also a compression. So which means we add a bottleneck in the transformers to compress their knowledge.
And this this is also in certain sense it's a it's just like a in my personal view it's like a same idea just called twice inserting different places.
But all the idea is that you're adding some small,
changeable components into the existing large language model networks, and you only allow these smaller ones to change.
And usually they involve involve aggressive compression.
Because, for example, in this adapters, uh, you have this d r d and R is actually very small.
So which means the entire transformers are going to be largely compressed in this art layer.
In general, thinking this way in a general deep neural network, how many layers it has.
It doesn't matter as long as they have a very natural layer in the middle.
The model information got largely compressed because if you if you go through the very natural layers,
even you have a larger layers in the later stage. The information got compressed through this bottleneck.
If you get interesting this type of the information, you can actually search online saying something called the information bottleneck.
In short, I like Google because actually to show you some good summaries.
So basically just tell you that, uh, let me see whether, uh, yeah,
it's actually a way to tell you the best tradeoff between accuracy and data compression.
Uh, but, uh, yeah, you can look into more about this, uh, about this information.
Information bottleneck theory and the methods.
It's a it's a it's a quite interesting and it actually motivates both of this adapter and the lora because in the middle,
they're just, you know, doing the compression aggressively.
And they only allow the changes here and for the, for the, for the adapters and versus Lora again the adapters,
they try to insert a small trainable module in the transformers.
And they still do this, you know general forward pass and the back for a back back propagation.
It's all good. Lora looks like slightly more innovative because, uh, because you add this a b times a to replace selected weights.
So you're not going to replace every single weights in in larger models, you're going to do this a b times a to, to replace uh selected weights.
And uh, and therefore then you add on top of the existing w to make the inference.
So in a certain sense. In my personal view, I don't think these two things are too different.
It's just like a different format adding to different places. But, but, but but by the end of that it's all motivated by this information bottleneck.
So it's a so it's a it's a it's very interesting to say I think during an interview,
if people are asking you what's Laura, all you are going to say is it's a parameter.
Because large language models that have a lot of like parameters in general,
we are not it's not affordable to really fine tune every single parameters.
So we need to find an efficient way or parameter efficient way to fine tune the larger models.
So Laura, trying to compress the model of a model with updates into the lower rank.
So they replace the selected model with w into the dot product of the b times A to smaller matrices.
So we're only trying to learn the model updates on B and A other than the entire W, and we reduce the number of the model with reduced.
The model was needed for the fine tuning, and it's motivated by something called intrinsic dimensionality of the of the deep learning,
which means many things can be represented in the much lower dimensionality of the data and the model.
I think that's good enough. And if they ask you if you have an experience for fine tuning or using Laura,
maybe you're just trying to do one one small things at home and then you're already a large language model expert.
Uh, I mean, potentially you already know much more than the so-called expert in the market at a
different large firms for data scientist or senior research scientist or whatever,
you know, at. Is it likely to call people? Everyone is called the staff of the research.
What's that term? You guys may know what they no longer call people different levels.
They give everyone the same level. A technical staff member or something like that.
So that's one thing for democracy.
Democracy in, uh, in the large firms, uh, the reason they call this, the reason why they call them is why they call everyone the same title.
One reasons for democracy and other reasons because if they if the recruiter external recruiter couldn't tell who is at a higher rank,
they don't know who to hire. So it's a way to protect people not being, uh, approached by external recruiters.
That's what I learned from how the Bay area are calling the people different, calling the people the same title.
I think it's interesting. And also for startups, they are also adapting this new convention.
Uh, and I think at the Bay, they're very innovative.
They have this the founding engineer, founding research scientist or whatever, even you can HR can be a founding HR, right?
So, uh, everything can be found in blah blah blah blah.
Uh, this is actually quite innovative, innovative, innovative than many of the original startup ideas in my personal view.
Um, okay. Uh, we talk about how to fine tune large models, including the simplest subsets, adapters and the Laura.
Especially Laura's most important.
Uh, but people, especially researchers, they are having something new to even, uh, go beyond this hyperparameter tuning.
But, however, it's not going to it's not very popular. Uh, but I still want to quickly mention, just for your information.
So, uh, other than other than learning, so other than learning, other than learning the, uh, you know, uh, the model parameter change.
Another idea will be predict. It will be predict how the model parameter will change.
So this is called something is called something called a hyper tuning.
So which means they try to adapt large function models without backpropagation at all.
So which means you don't need to do the fine tuning or whatever at all.
You simply for a new task, you just need to predict how their model weight should change or will change.
A simple enough, simple enough. That will be I don't.
Let me see whether they have a formula here. Uh, yeah.
They don't have a perfect formula here. But okay, I will, I will I will skip that part because, uh, it's a little bit more research.
But for the person who are, uh, who are interested in, uh, who are interested in this, um,
there's also a quite interesting research direction or, or or knowledge called a hyper network.
So hyper network is not a network. It's not. It's also a deep neural network.
But a core for hyper network is to predict the model is to, I think, very small.
Right? Um. Yeah.
Basically what's a hyper network? So what's a what's a what's a hyper network.
Is that other than other than other than trying to fine tune or learning a new deep neural network weights.
They try to predict what will deep neural network weights will change.
So I still think this is um, I still think this is slightly more complex, but I can use one of my paper to show it.
Um. Yeah, I think the figure is a little bit massive, but, uh, yeah, I don't think it looks very clear,
but, uh, but but I think I just want to find a one equation to show you what I'm trying to say.
Sorry, there's no such a equation, but I can give you the abstract of the hyper network for the hyper tuning.
So. Which means, uh, originally originally for whatever. Laura or something.
Uh, their core, their core core concept will be learning this delta w, right.
Like, this is the original weight. And you have a new you have some new data that's new task.
You want to do the fine tuning. You need to change your weights.
So this delta w is actually fine tuned where back propagated by your new data new task.
However, for the hyper network that I don't need to directly get the real value of delta w, I directly to predict what delta w will be.
So basically there's no training. It's purely predict. If I in the past I learned enough about for different tasks.
This delta w may look like. What then for a new task coming, I can directly predict for this new task.
Delta W is what it's hypothetically saying.
It's very good. But to my personal experience with this type of research, it's very ugly and people should shouldn't do it at all.
But still, for completeness, I want to mention it's a hyper tuning.
Uh, it's a it's a it's a fancy thing to chat with people. Um, yeah.
We have another 15 minutes ish. Let me say, what should we cover?
Uh, what should we cover? I think I'm going to go through some interesting things we did before.
I think it's slightly more exciting because, you know, people getting sleepy and we already got too much knowledge for today.
I'm going to because this is, of course,
the later part of this course is more about advanced knowledge to show you something funny about a deep learning.
Not unless you already got the basic knowledge. So. So now we can cover more funny things.
So this was a work we did a few years back. It's actually two years or three years I forgot it's the election year.
So by that time large models are starting becoming popular.
And the idea we're thinking that if we if we begin, you know, getting the polling and getting this type of things very hard,
we're thinking if large models can simulate human beings, can we really decode persona?
We're thinking, can we actually use large models to simulate different people for this election prediction.
So that's so we'll try to finish this work before the election happens.
We did but we made a better prediction. Start accurate. It's good.
Hopefully it was. Fortunately it was too. It was it wasn't to uh to to to to to accurate.
I can give you a general idea. Maybe you can also use this for your future, you know, job or work.
So the general idea we have is that actually this type of approach is widely used in marketing nowadays.
And they're making an advertisement. They're also doing a lot of market simulation.
So basically because they couldn't really ask you a lot of questions, saying,
Will you like this coffee machine or will you favor a certain party or something?
But they get your information.
They get your basic information like a demographics, their, your education, your location, etc., etc. using this type of information,
they can build such a large language model persona for you to say whether you may like it or not.
So therefore. So therefore, this type of thing nowadays in 2026 become very popular.
And there's multiple startups for unicorn doing this. But but two years ago what really happens is is the following.
We want to give large language models a specific persona and to say whether and then you can simulate their corresponding behaviors.
Right. Like for example uh, so for example, uh, so for example, uh, yeah.
This is are some, some other examples. These are not all examples. Uh, so there's a, there's multiple relevant studies in uh like this.
Uh, but what we're another, another inspiration for us to do this is because, uh, larger models also get their own political, political views.
So this is a, this is a work people did in 2024.
They have two axes like a left and right and a sword like a Liberty levels.
You will see different models by the time they get their own political views, potentially.
GPT four is more on the liberal side. It's more on the left side, however.
Uh, you know, like much more on the on the on the right side, on the authority side.
There's no general interpretation. They just like some psychologist and some other computer scientists.
They did this research to realize, okay, even larger models, they get their own political views.
Intrinsic political views are a set of the questions.
They're going to show you that they're going to be more towards this direction or that direction.
So in that research, we try to answer a few questions.
Uh, first of all, uh, how large language models can be used to simulate human decision making, specifically in political science.
But of course, you can do this for other things, right? Like a marketing science?
Many of these. Again,
many of the marketing sites nowadays are driven by large language models because you couldn't really do human marketing because they're very costly.
Separately, separate things is that if we if we change the backbone of large language models, for example, if I change from llama to GPT,
whether the simulation will change and what's the real limitations when we're using large language models to simulate human beings?
I will show you a few, but one quick takeaway is that large language models are much more extreme than general human beings.
I mean, you feel human people, you human people, you feel human beings are biased or sort of like.
A I think there's such a sorry. Suddenly there's such a word I want to mention, uh, polarized.
Uh, you think people are human beings are polarized, but indeed, uh, large language models are much more polarized.
I will show you how polarized they are, but we actually found many interesting findings, but I will show you in seconds.
So. So the first question is that when you use large language models for humans decision making simulation, there are a few questions like.
First, the question will be how could you really do this personalized simulation, right?
There's a few ways you can do so.
For example, you get an individual demographic persona and something like your, your, your age is something like this.
And you're rather than saying blah, blah, blah, and you're leaving Wisconsin or whatever your marginal status,
etc., etc. and this is your family, this is your family income and you.
This is the simplest approach you can you can simply describe the demographic.
And then in the prompt you are saying, this year is a which year and will you vote for certain parties and another party?
And do you have a preference. So you think this as a potentially straightforward and sufficient.
However, in our research, we realize it's not. We call this the direct prompt, but we realize it's not going to work well.
The reason is because the the reason is because the reason is because of the two folds.
The first fold is that the first fold is that, sure,
you get this demographic information of a certain person for stimulation, but there's a temporal change for the news.
For example,
even the same person may vote different people in different years or different party in different years because the micro economy changes,
every other things changes and they may not make the same decision. So the personal, even your personal stimulation is correct.
Your prediction may be wrong. So we need to add we need to add this so-called temporal information.
Or for example we supply more. So by the time we use the sum like a sum like a political version of the Wikipedia,
so that we actually add more information about the two candidates of the election.
So what's your what's your so what's your primary policy position and what's your candidate information etc., etc..
Uh, for example, their previous job, a previous job, previous career, etc. etc. and as of today, what will happen?
So so so so so so because the first thing we found that things are not working well,
then we add this so-called temporal information or real time information for the simulation.
After that we find that even not working that well, the reason is because the reason is because, uh, the reason is because the reason.
Because by that time, I think we're using TBD. TBD for strong.
But it's reasoning chain. It's limited. So what what does that even mean for reasoning chain?
So even you are giving a demographic information to GPT.
It may not reason enough saying, if I'm such a person, if I were such a person, what would be my voting?
In fact, if you if you asked directly,
it doesn't think enough how this demographic graph information are going to effect, affect or impact the final result.
So we have to use a chain of thoughts to add one more step in the middle.
So which means giving your demographic information blah blah blah.
First of all, consider what is your political ideology. Inference.
So we had one more step to think okay, given such a demographic information, what will be the most important part regarding your voting result?
That would be the political ideology inference. And other than and after that we add this candidate information.
And some this is more like extended persona information.
Okay. This is just the setup. And I will show you some of the results by the time we're trying the GPT for a landmark.
Queen and the dipstick.
But this is a setup potentially showing you some of the things when you're designing this large model simulation, especially for decision making.
Which means, first of all, you tell a large model something they may not directly get this information.
You need to add some reasoning chain saying given this is your information, what will be your key features for making such a decision?
And you also need to supply the temporal information because many of the simulation will change along with the time your decision for the same thing,
it will change between 2025 and 2026. So, uh, so therefore that's something you use for the, uh, you know, large model simulation.
So we have a three version, first version.
As I mentioned, we just directly use the direct prompt and on each of the persona, like giving the specific persona and let it go directly.
Uh, and this is something people already done in 2023. So people were very fast.
And a separate thing is, are we at this time sensitive information.
Right. Because in different years people are going to make different. Different decisions.
So it's direct prompt at this timely information.
Finally, finally we added we have this version three, which means we have this multi-step reasoning with ideology inference,
which means we insert this ideology inference in the middle.
So it's more like a multiple step of the reasoning. It's like an intermediate step generating the political ideology.
And we say there's a significant improvement on the on the result.
I mean, I mean, this result no longer matters anymore because we're already in 2026.
But we want to I want to show you some interesting findings.
Uh, uh, uh, the interesting findings we found is that a large model simulation, they have a strong,
strong stereotypes, which means finally there, their decision will simply collapse on a few demographic information.
So the purely just they lack this type set of set of the varieties.
They can have stereotypes, gender and ethnicity and education etc..
So which are all strong bias?
Because, because, because the most important thing we want to show is that this, this, this red line are the human samples.
When they are, when we analyze their political ideology, it's much more smoother.
However, for the GPT four simulation, you can say it's much more extreme.
So it's very few people in the middle there. It's not in the middle.
It's more like this. The middle range are largely compressed and they are much more polarized.
They're either very conservative or or either very liberal.
And this may be attributed back to the original political identity of the large models themselves.
Uh, This a this a this how but how to reduce this political bias in large models or whatever things
for decision making or we are trying to use some sociology motivated ideas for doing this.
I'm not going to expand,
but I think the key takeaway for learning this use case will be when you are using large models for simulating some real world decisions,
you need to first understand the models you are using because they have their own stereotype bias towards certain things,
and that's why they're going. Their decisions or their suggestions may not necessarily be a fair or decent.
Another thing, a recent model is because something called a security and utility trade off the current.
The current logic models are are fine tuned for defense, so they are safer than before,
but they not have something called a defensive defensive response.
So. Which means, uh, I'm not sure whether when you are chatting with the agent whether you will see something like this,
they will tell you you have a very good idea. This is a very nice blah, blah, blah.
However, you need to be, you need to know something like they have this patch saying uh,
they always I think sort of they are trying to give you at least a one to back, one to negative points of your decision or points.
So they want to be complete.
However, they are going to give this defensive defensive response which means they always tell you, okay, this is overall is great.
However there's a 1 or 2 gaps. Then you get a you become hesitancy.
Is this really a good idea? Not. Maybe it's not right because you get the gaps in this decision.
So the current large models decision making are are also getting this type of issue.
And the one last thing before we conclude is when talking about this paper, Uh.
Uh, this, uh, this reminds me of another recent paper.
Uh, we just got accepted. It's also very interesting. And this type of research also encouraged people to exploit the.
This paper is called a tracing model. Foundations in, uh, in large language models.
So in this recent paper, what we're trying to understand is how the large models are developing their morality throughout the time.
Like, um, are they suddenly acquire a knowledge saying, okay, there should be a lawyer or there should be whatever,
whatever, whatever, or gradually they're they're learning this.
So what we're doing, what we did is that we will train a will train a large language model from scratch.
Uh, so, so so there's a, so there's a, so there's no prior knowledge for this, a morality or something.
We train from scratch to say at which stage they suddenly become loyal or they suddenly become honest or whatever.
Whatever. Uh, so so the key findings that I want to share, that, uh, this morality not comes from a sudden moment.
It comes from the language.
Like, we didn't give them the concept of the loyalty or honesty or whatever or whatever they learn from the language themselves.
So the language itself, uh, of course, we're clearly trying to, you know,
tame this type of the word, like what's honest or just you don't give the definition.
But by learning from what's in the language, how people are doing, they are gradually developing the idea for morality.
It's a it's not a it's not alignment of human beings.
It's more like a common sense or at least what, what a what a common sense people feeling should be promoted.
Of course, things are much more complex than that than what I'm saying.
Um, but it's interesting, I think I think one interesting direction for general large language model
research or the social utility will be how will they really work in human life,
sociology and decision making? Especially if you're coming from a psychology background or, uh, or other things that will be very interesting.
Also, we have some recent new research on physics, physics, material science, plus large language model.
If you get this type of the background, feel free to send me a chat.
We have some interesting research. For example, if you if you work on physics or material science or biology or scientific industry in your.
In the past we do have some interesting research benchmark are building at the moment.
Again it's Monday and it's a converse day. Thank you for coming here and hopefully next week.
My hair is getting longer. Take care.`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "Three Ways Plain SGD Stalls",
    body: `Lecture 6 ended on momentum. This lecture opens by naming exactly what momentum is for, because stochastic gradient descent has three distinct failure modes and the professor listed them as three.\n\nFirst, oscillation. You are not computing the gradient on all your data — you are computing it on a mini-batch. This batch may want the weights to move one way; the next batch may want the opposite. The path zigzags. You make progress, but you waste a great deal of it moving back and forth across a direction you should have crossed once.\n\nSecond, local minima and saddle points. Optimization runs on the chain rule, and the chain rule multiplies. If any factor in that product hits zero, the gradient is zero, and a zero gradient means no direction to move in. At a local minimum you have stopped somewhere that isn't the best available. At a saddle point you have stopped somewhere that isn't even a minimum — the surface curves up along one axis and down along another, and the derivative with respect to every coordinate happens to be zero at that one point. He stressed these are everywhere in deep networks precisely because the loss surface is so high-dimensional.\n\nThird, mini-batch noise. Related to the first, but worth separating. A single mini-batch is a cheap, noisy estimate of the true gradient. Any one step may be wrong. Enough steps and the errors cancel, so the trend is right — but you spend many more iterations getting there than a clean gradient would need.\n\nHis summary of why it works at all: one mini-batch update is cheap and noisy, but across many updates the noise cancels and the average direction is correct. The cost is iterations.\n\nExam insight: know the three by name — oscillation, saddle points and local minima, mini-batch noise. Each fix in the rest of this lecture attaches to one of them.`,
  },
  {
    tag: "💡 Concept",
    title: "Momentum: the Update Remembers Where It Was Going",
    body: `Plain SGD computes the gradient on the current batch and steps in that direction, scaled by the learning rate. That's the whole algorithm, and it is memoryless — each step knows nothing about the last one.\n\nMomentum adds one piece of state: a velocity, which the professor described as a running mean of past gradients. The update becomes the current gradient blended with that accumulated history, and the weights step along the blend. A single parameter controls how much weight the history carries.\n\nWhat that buys you maps directly onto the three failures.\n\nAt a saddle point the current gradient is zero, so plain SGD stops. Momentum does not, because the velocity is not zero — the recent directions still point somewhere, and you carry through. His phrasing: "the recent directions guide the direction to go, so you can actually go somewhere and likely to be the right direction."\n\nIn a zigzag, the oscillating component flips sign on alternate steps, so it cancels in the running mean. The consistent component does not flip, so it survives and accumulates. The path straightens.\n\nAgainst noise, averaging is averaging — the velocity is a smoothed gradient, so individual bad batches matter less.\n\nHe repeated his trading analogy: momentum in markets means a trend that has been running tends to keep running until something breaks it, and there are ETFs built on nothing else. Same shape of idea, borrowed into optimization. He was careful to note it isn't new to computer science — it's classical optimization.\n\nExam insight: momentum = current gradient + accumulated recent gradients, and it addresses all three SGD failures. The saddle-point escape is the one to be able to explain.`,
  },
  {
    tag: "💡 Concept",
    title: "AdaGrad, RMSProp, Adam: One Learning Rate Per Coordinate",
    body: `Momentum changes the direction you step. The adaptive family changes the step size, and does it separately for each coordinate.\n\nAdaGrad keeps, for every parameter, a running sum of the squares of that parameter's past gradients, and divides the update by the square root of it. A parameter that has seen large gradients gets a smaller step; one that has seen small gradients gets a larger one. The professor's phrasing: an element-wise scaling of the gradient based on the historical sum of squares, so "the speed will be adaptive."\n\nThe weakness is in the word "sum." It only grows, so the denominator only grows, so every step size eventually decays toward zero whether or not you have arrived.\n\nRMSProp fixes that. He called it "a leaky version of AdaGrad" — instead of summing all history, it keeps a decaying average, so old gradients fade out and the step size can recover.\n\nAdam combines the two ideas: momentum for the direction plus an adaptive per-coordinate step size. That's it. The professor was explicit that you can mix and match — add momentum or don't, adapt the step size or don't — and these are the named points in that space.\n\nHis one-slide summary, which is the exam-shaped version:\n\nSGD — step along the current gradient. SGD + momentum — also carry the recent direction, which smooths the path and runs faster. AdaGrad, RMSProp and Adam — consider past gradients *and* apply a scaling, which is the smoother, smarter end of the family.\n\nHe did not go deep here and said so, flagging it as a fly-through. What he wanted was that you know the family exists and what the two independent ingredients are.\n\nExam insight: two ingredients, mixed independently — momentum (direction) and adaptive per-coordinate scaling (step size). Adam is both. AdaGrad's sum only grows; RMSProp leaks.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "The Learning Rate, and the Four Curves It Produces",
    body: `Whichever optimizer you choose, you still have to pick a step size, and the professor called it a very important hyperparameter. The gradient gives the direction; the learning rate alone decides how far you go.\n\nFour loss curves, each diagnostic.\n\nToo high and the loss rises. You overshoot the minimum, land further up the other side, and repeat. The curve goes up over epochs, which is the opposite of the point. There is no guarantee of convergence at all.\n\nToo low and the loss falls, but barely. The direction is right and the step is so small that after many epochs you have hardly moved. He noted this is the subtler failure, because nothing looks broken — it's just not working.\n\nJust right and the loss falls quickly and keeps falling, smoothly.\n\nAnd a fourth he called out specifically: a rate high enough to drop quickly at first and then plateau above the floor. The curve looks good for a few epochs and then stops improving while sitting at a loss you shouldn't be stuck at. That's a step size too large to settle into the minimum, bouncing around it instead.\n\nWhat you want is the smooth descent. His practical advice, stated as common sense: learning rates live on a scale of ten, and the standard starting points are 0.01 or 0.001. The reason is that your data has been normalized into roughly −1 to 1, so the gradients are on that scale too. He made a point of saying this number is meaningless to someone who has never trained a network themselves, and that knowing it is part of what taking the course is for.\n\nExam insight: rising loss means too high; nearly flat means too low; fast-then-plateau means slightly too high. And know that 0.01–0.001 is the usual starting scale, and why.`,
  },
  {
    tag: "💡 Concept",
    title: "Learning-Rate Schedules",
    body: `One learning rate for the whole run is rarely the best choice. Early on you want to move fast; later the useful region is smaller and big steps overshoot it. So you change the rate as training proceeds.\n\nStep decay is the simplest. Train at one rate, then cut it by a fixed factor at fixed points — every 30 epochs, say — and again later. The professor used that 30-epoch example directly.\n\nSmooth decay does the same thing continuously. He showed a non-linear curve taking the rate from its initial value to nearly nothing over 100 epochs, and noted a linear ramp works too — the shape is not the point.\n\nInverse square root: α / √t. As t grows the denominator grows, so the rate shrinks, automatically and without any schedule to specify.\n\nLinear warmup runs the other way at the start. Some networks want the rate to *increase* gradually for the first stretch, then decay. His analogy: starting a car in winter, where you warm it up first to keep it healthy.\n\nCyclical learning rates go up and down repeatedly — increase, decrease, increase, decrease — rather than settling into a single descent.\n\nHis actual point in showing five of these was broader than any one. Even for a single number, the learning rate, you have this many design choices. Combine that with every initialization scheme, every architecture, every regularizer, and the space of things you could change is enormous.\n\nExam insight: know that schedules exist and roughly what step decay, warmup and cyclical do. He did not go deep, so expect recognition rather than detail.`,
  },
  {
    tag: "💡 Concept",
    title: "Too Many Knobs: the Tuning-Tricks Problem",
    body: `This was a real theme rather than an aside, and it explains something about how the field publishes.\n\nIn a deep network you can change almost anything: the architecture, the number of layers and units, the activation, the initialization scheme, the normalization, the optimizer, the learning rate and its schedule, the regularization and its strength. The professor contrasted this with a decision tree, where there is genuinely little to tune — max depth, number of leaves, and you're close to done. Deep learning is fancy and crazy at the same time for exactly this reason.\n\nHistorically this was called tuning tricks, or learning tricks. And his observation is pointed: papers were published reporting improved numbers where the improvement did not come from the idea described in the paper. It came from the authors being better at tuning. The stated contribution and the actual cause of the result were different things.\n\nHe extended this to today's frontier labs. They release open weights. They do not release the full recipe for training a model at that scale — not the data, and not the operational tricks that make enormous training runs work. His description: "it's more like you are learning some magic, but you need to be part of that institute to learn these magics."\n\nThis also sets up a question he returned to at the end of the regularization section. If you can ask a large model what to do, why learn any of this? Because the model will tell you to use dropout or augmentation, and if you don't know what those are or why they apply, you cannot judge the answer. His framing: you are the gatekeeper, and a gatekeeper who can't challenge "step two" isn't adding anything.\n\nExam insight: unlikely to be tested directly, but it's the professor's own framing for why the course exists, and it reappeared twice.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Two Curves, Three Scenarios",
    body: `Training loss going down tells you almost nothing. It is *supposed* to go down — that is literally what gradient descent is minimizing. So you track two curves, training and validation, and the relationship between them is the diagnosis.\n\nScenario one, the ideal. Both fall together. The model is learning patterns that transfer to data it was not fit on. Training is working.\n\nScenario two, nothing happens. Both stay high and flat. You keep training and the model isn't learning. Something upstream is wrong — the model is too simple, the learning rate is wrong, the data isn't right.\n\nScenario three, the one the lecture is about. Training loss keeps falling, exactly as expected, while validation loss bottoms out and then climbs. The two curves part company.\n\nThat divergence point is overfitting, and the professor connected it straight back to Lecture 2. Past that point, the model is learning small patterns specific to the training data — patterns that do not exist in the validation data — so performance on held-out data gets worse while the training number keeps looking better.\n\nThe instruction is simple: stop there. Not at the end of your epoch budget, at the divergence.\n\nExam insight: three scenarios, and the ability to read which is which from a description of the two curves. He also gave the accuracy-curve version later — both rising is good, training rising while validation falls means overfit, both low means underfit.`,
  },
  {
    tag: "💡 Concept",
    title: "Early Stopping and Checkpoint Selection",
    body: `These are two names for acting on that divergence point.\n\nA training run passes through many states. Hundreds or thousands of epochs, and at every one the weight matrices are different — which means, as the professor put it, every snapshot is genuinely a separate model. Large models train for days or months and produce a long sequence of these checkpoints.\n\nWhat the world sees is one set of weights. What existed was a trajectory, and someone chose a point on it.\n\nThe choice is made on validation loss. You save the checkpoint at the validation minimum, not the last one. If validation bottoms out at epoch 4 and rises from epoch 5 onward, epoch 4's weights are the model — everything after is worse on held-out data no matter what the training curve says.\n\nEarly stopping is the same idea applied live: stop training once validation stops improving, rather than running out the schedule.\n\nThis is also the cheapest regularizer in the lecture. It costs nothing, adds no term to the loss, changes no architecture. It just declines to use the overfit part of a run you were doing anyway.\n\nExam insight: pick the checkpoint by validation performance, not training performance and not recency. The link from "validation turns upward" to "that epoch is your model" is the examinable step.`,
  },
  {
    tag: "💡 Concept",
    title: "Ensembles Work, and Cost You at Inference",
    body: `A short but honest aside, and it sets up why regularization matters.\n\nTrain several networks separately and average their predictions. It works — the professor said plainly that ensembles usually improve accuracy. This is the same variance-reduction argument as bagging from Lecture 2.\n\nThe problem is that you now have three models. You train three times, store three sets of weights, and — the part that actually hurts — you run all three for every single prediction. Training cost is paid once; inference cost is paid forever. He called it not an efficient way to do things and did not recommend it.\n\nWhich turns the question around. If you can't afford several models, how do you make *one* model generalize better?\n\nThat is the question regularization answers, and it shapes the goal. He put it in terms of the gap: training accuracy will keep climbing, and what you want is for the distance between training accuracy and validation accuracy to shrink. Not for training accuracy to be high — for the two to agree. When they agree, the training number is telling you something true about unseen data.\n\nExam insight: ensembles trade inference cost for accuracy. Regularization is the single-model alternative, and its goal is stated as closing the train–validation gap.`,
  },
  {
    tag: "📐 Formula",
    title: "Weight Penalties: Data Loss Plus Complexity",
    body: `The first regularizer, and a recap from Lecture 2 that he deliberately returned to.\n\nThe objective has two terms:\n\ntotal loss = data loss + λ · (penalty on the weights)\n\nThe first term measures how far your predictions are from the ground-truth labels. The second measures how large or complex the weight matrices are. You minimize the sum, so you are asking for both at once: predict well, and do it with small weights.\n\nThe professor's framing of why this works: if a simple model can make a perfect prediction, you don't want a complex one. Because the penalty is inside the thing being minimized, a model with huge weights pays for them even when its predictions are perfect — the second term blows up and the total is bad. So the optimizer is pushed toward the simplest weights that still fit.\n\nThe variants are the ones from Lecture 2. L2 (ridge) penalizes the sum of squared weights and shrinks everything smoothly. L1 (lasso) penalizes the sum of absolute values and drives some weights exactly to zero, giving sparsity. You can use both together.\n\nIn the deep-learning setting this usually goes by the name weight decay.\n\nHe used it to make the "black magic" point again: in a decision tree there is almost nothing to adjust, while here the penalty type, its strength, the learning rate, the activation, the normalization and the initialization are all independently yours to choose.\n\nExam insight: the two-term objective is a recurring item — it appeared in Lecture 2, Lecture 3 and again here. Know what each term does and that the tension between them is deliberate.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Dropout: Turn Off Neurons at Random",
    body: `The second regularizer, and the one with the most mechanism to know.\n\nDuring training, each forward pass randomly switches off some fraction of the neurons in a layer. Concretely: draw a random binary mask — a matrix of zeros and ones — with each entry one with probability p, and multiply the layer's output by it. The zeroed units contribute nothing to that pass. The next pass draws a new mask, so a different subset is off.\n\nThe professor's rationale is worth quoting in structure: if the network is genuinely robust, part of it should still be able to make a good prediction. You are stress-testing that claim on every batch.\n\nHis illustration made it concrete. Suppose units in a layer detect cat features — has ears, has a tail, is furry, has claws. With all of them active the network has an easy job. Turn some off and it has to decide "cat" from what remains. If it can, it was not depending on any single feature. If it can't, it was.\n\nThat is the regularizing effect, stated precisely: dropout prevents the network from relying on any one unit, because no unit is guaranteed to be there.\n\nThe probability is yours to set. He worked through the p = 0.5 case — half the units on, half off, chosen fresh each pass. Dropout is applied the same way at each layer you choose to use it on.\n\nExam insight: random binary mask, multiplied in, redrawn every pass, training only. The one-sentence reason it regularizes: no unit can be depended on, so the network cannot concentrate its decision in one place.`,
  },
  {
    tag: "💡 Concept",
    title: "Dropout as an Ensemble of Subnetworks",
    body: `The professor gave a second interpretation and clearly liked it more, because it connects dropout back to the ensemble discussion it replaced.\n\nTake your network and switch off a random subset of units. What remains is a smaller network — a subnetwork — and it produces a prediction. Next batch, a different random subset is off, so a *different* subnetwork produces a prediction. Over a training run you have trained an enormous number of overlapping subnetworks, each on part of the data, all sharing the same underlying weights.\n\nSo dropout is training an ensemble, in his words, "a large number of the ensemble of the models" — and getting it for the price of one model.\n\nThat closes the loop from two concepts earlier. Ensembles improve generalization but cost you N models at inference. Dropout gets a related benefit from one set of weights, because the subnetworks share parameters rather than being separate models.\n\nIt also explains why the technique is evidence for something he returns to later in the lecture. If a network keeps working when you delete half of it at random, the network contains a great deal of redundancy. The full parameter count is not the amount of information the model actually needs. He uses exactly this observation to motivate LoRA at the end of the lecture — so the two halves of this lecture are connected by it.\n\nExam insight: two interpretations of dropout, and both are fair game. "Can't rely on one feature" and "implicit ensemble of subnetworks." The redundancy point is the bridge to intrinsic dimensionality later.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "Dropout's Test-Time Scaling",
    body: `This is the detail he spent the longest on, because it is a real correctness bug and it is invisible if you get it wrong.\n\nThe problem. During training with keep probability p, a unit downstream receives input from only a fraction p of the units feeding it, so the sum arriving is smaller than it would be with everything on. At test time you do not drop anything — you want a deterministic prediction and you want to use the whole network. So every unit suddenly receives roughly 1/p times as much as it did during training. The network was trained to expect one scale of activation and is now being fed another.\n\nNothing crashes. The numbers are just wrong.\n\nThe fix is to match the scales, and there are two conventions.\n\nStandard dropout: drop during training, and at test time multiply the output by the keep probability p. With p = 0.5, test-time activations get halved, bringing them back to the scale the network was trained on.\n\nInverted dropout: do the correction during training instead — divide by p at the moment you apply the mask — and then test time needs no adjustment at all. The professor noted this works equally well and is what most frameworks actually implement, since it keeps inference code simple.\n\nHis summary of the rule: if you don't scale during training, you must scale at test; if you do scale during training, you do nothing at test. One or the other, never both and never neither.\n\nThis is the same train-versus-inference distinction as batch normalization's saved statistics from Lecture 6, and PyTorch's model.eval() switches both.\n\nExam insight: know that a correction is required, which direction it goes, and that the two conventions put it in different places. The p = 0.5 case — halve the test output, or double during training — is the concrete version.`,
  },
  {
    tag: "💡 Concept",
    title: "Data Augmentation: Break the Data Instead",
    body: `The third regularizer, and it attacks a different part of the problem. Weight penalties constrain the model. Dropout damages the model. Augmentation changes the data.\n\nThe premise: more training data makes training easier and the result more robust. Ten images cannot train a strong classifier. Unlimited data makes a great many things possible. Augmentation manufactures more training data from what you already have, which the professor admitted sounds strange until you see it.\n\nTake one photograph of a cat and flip it horizontally. It is still a cat. Every pattern that mattered is preserved, and you now have a second training example that cost nothing.\n\nThe standard transforms for images: horizontal flips; random crops, which also zoom in on particular features; brightness and contrast changes; color shifts, including converting to greyscale; and mild distortions, rotations and stretches. He mentioned applying PCA to the RGB channels for principled color jitter as a more sophisticated version.\n\nThe governing rule is one line: the transformation must not change the label. Flip a cat, it's a cat. Crop a cat, it's a cat. Grey-scale a cat, it's a cat.\n\nAnd his counterexample is the thing to remember, because it shows the rule has teeth. Flip a handwritten 6 vertically and you have a 9. The label changed, so that transform is not valid for digits — even though it was perfectly valid for cats. He added that 8 flips to 8, which is harmless but useless, since a symmetric digit gives you nothing new.\n\nSo augmentation is not a fixed recipe. The same transformation that helps one task breaks another, and deciding which applies is your job.\n\nExam insight: the label-preservation rule, and the 6→9 counterexample as proof that it is task-dependent. This is the most quotable thing in the regularization section.`,
  },
  {
    tag: "💡 Concept",
    title: "Stochastic Depth, Cutout and Mixup",
    body: `He ran through three more quickly, and the pattern across them is the real lesson.\n\nStochastic depth is dropout applied to whole layers rather than individual units. During training you skip certain layers entirely, routing the signal straight past them to a later layer. Same idea, coarser granularity.\n\nCutout, also called random erasing, deletes a rectangular region of the input image. The label stays "cat" and part of the cat is simply gone. His point: the model must not get to answer from the ear alone — if the ear is missing it had better use the tail, the body, the paws. He called it a stress test, deliberately.\n\nMixup is the strangest. Blend two training images into one — 40% cat, 60% dog — and set the target label to the matching blend: 0.4 cat, 0.6 dog. The model trains on inputs that are not any real object, against soft labels rather than one-hot ones.\n\nTwo things to take away.\n\nScope. Cutout and mixup are specific to images. Dropout, weight decay, batch normalization and early stopping apply to essentially any deep network.\n\nAnd the philosophy underneath all of them, which he stated outright: the goal is to *break* the network. Turn off its units, delete its layers, erase parts of the input, blend classes together, change the colors. Make the problem harder on purpose during training, and see whether it still performs. A model that survives all of that was not relying on anything fragile.\n\nExam insight: know what each of the three does in one line, and which are image-only. The "break it on purpose" framing is his own summary of the whole section.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Hyperparameters vs Parameters",
    body: `A distinction worth getting exactly right, because the words are nearly the same and the lecture leans on it.\n\nParameters are the model's weights. They are learnable, gradient descent updates them, and they change continuously throughout training. The weight matrices W and B of a graph layer, a convolution's filters, a transformer's attention matrices — all parameters.\n\nHyperparameters are set before training starts and do not change during it. The professor's reading of the word: "hyper" means you fixed it beforehand; without "hyper" means the model learns it.\n\nThe list from this lecture alone: number of layers, number of units per layer, the architecture itself, the activation function, the initialization scheme, the optimizer, the learning rate, the schedule, the batch size, the weight-decay strength, the dropout probability, which augmentations to use. His own examples, posed as questions about a network on the slide: why three units in this layer and not five? Why three layers and not five? What should the initial learning rate be — 0.01, 0.02, 0.001?\n\nNone of these are learned. Every one is a decision you make, and the model cannot tell you whether it was right until you have trained it.\n\nThat is what makes hyperparameter search a search: each evaluation costs a training run.\n\nExam insight: the clean definition — set before training versus learned during training — plus the ability to sort examples into the two buckets. Learning rate is a hyperparameter; the weights the learning rate updates are parameters.`,
  },
  {
    tag: "💡 Concept",
    title: "Searching for Hyperparameters",
    body: `Having established that you have to choose them, the question is how.\n\nThe controlled way is to change one at a time. Fix everything, move one hyperparameter, see whether validation improves. If you have k hyperparameters, hold k−1 fixed. This is clean and tells you exactly what caused what. It is also slow, and the professor was honest that it is not what people actually do — in practice you change the data, the model and the settings at once and then cannot attribute the result.\n\nFor searching two or more at a time he drew the two standard layouts. A grid tries every combination on a regular lattice — three layer counts crossed with three unit counts gives nine configurations. A random layout samples combinations instead, letting each value land anywhere in its range rather than on grid lines.\n\nThe old recipe he gave for a single run, in order: overfit a tiny sample first to confirm the setup can learn at all; find a learning rate that makes the loss actually go down; train for a few epochs; refine from what you saw; train longer. Then read the curves and repeat.\n\nAnd the criterion throughout is validation performance. You try a configuration, validation gets better or worse, and that tells you whether you were moving in the right direction.\n\nHe described what this was like in practice during his PhD — staring at loss curves for hours with nothing else to do while a model trained, which he called addictive and slightly maddening. With five binary hyperparameters you are looking at 32 curves, and once you find a configuration that works you stop touching anything for fear of breaking it.\n\nHis closing note: this is no longer how he works. Training now runs on cloud GPUs through a scheduler, and he instructs an agent to launch runs and monitor losses. Automated machine learning, which chooses hyperparameters for you from prior knowledge, is coming later in the course.\n\nExam insight: grid versus random, select on validation, and the overfit-a-small-sample-first step. That first step is a genuinely useful debugging habit and the kind of thing that makes a good exam question.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Transfer Learning: Don't Start From Scratch",
    body: `Everything up to here assumed you are training a network from nothing. Usually you shouldn't.\n\nThe professor's analogy: when you arrive at university, nobody makes you retake elementary arithmetic. You already have the foundation, and new teaching builds on it. Training from scratch for every new task is the equivalent of redoing the arithmetic.\n\nThe reason this works for neural networks is a fact about what the layers learn, established back in Lecture 4. The early layers of a convolutional network learn edges, colors, light and simple contrasts. The later layers compose those into complex, task-specific shapes, and the final layer makes the class decision.\n\nNow notice: the early layers are learning properties of *images*, not properties of your task. Edges are edges whether the photograph contains a flower, an elephant or a face. So those layers transfer.\n\nThe standard recipe follows. Pretrain a network on ImageNet, which is a large collection of labeled images across many categories. Freeze the early layers — the weights do not change. Retrain only the final classification layer on your own, much smaller dataset. You get a model for your task without ever paying for the feature-learning half.\n\nThe pretrained part has a name: the backbone. He noted that people say backbone rather than foundation here, and that he doesn't know where the term came from. The dataset you pretrained on is the source; the dataset you are adapting to is the target.\n\nHe pointed out this was for years the default shape of an undergraduate AI project — take a pretrained model, fine-tune it on something else — and that by around 2020–21 pretraining had become a key technique precisely because it removes most of the training cost.\n\nExam insight: early layers generic, late layers specific, so freeze the early and retrain the late. Know the words backbone, source and target.`,
  },
  {
    tag: "📐 Formula",
    title: "How Much to Fine-Tune: Data Size × Domain Distance",
    body: `Transfer learning is not one procedure. There are three depths, and a table for choosing between them.\n\nThe three options, cheapest first. Frozen backbone: every feature layer is fixed and you train only the final classifier. Partial fine-tuning: you also unfreeze some of the later feature layers. Full fine-tuning: everything is trainable, giving maximum flexibility at the highest cost.\n\nTwo things decide which you need.\n\nHow much target data you have. Little data means little you can afford to train without overfitting, so train less. More data supports unfreezing more layers.\n\nHow similar the source and target are. Similar domains transfer well, so the pretrained features are already close to right and the last layer is enough. Distant domains transfer badly, so more of the network has to be relearned.\n\nThe four corners of the table:\n\nLittle data, similar task — retrain the last linear layer only. His words: "that's it, very simple."\n\nLots of data, similar task — you can fine-tune a few more layers on top of that.\n\nLittle data, very different domain — the hard corner. Little transfers and you don't have enough data to relearn it. He flagged this as the case where transfer learning may simply not be worth doing.\n\nLots of data, very different domain — fine-tune many layers, because what carries over is limited.\n\nHis running example of a distant pair: a model pretrained on brain scans, applied to classifying cats and dogs. Both are images, so in principle transferable. But they share so little that he said plainly it may not be a wise idea.\n\nExam insight: the two axes and the four corners. "Little data, similar task → last layer only" is the one he stated most definitively, and "very different domain → transfer may not be worth it" is the limit case.`,
  },
  {
    tag: "💡 Concept",
    title: "In-Context Learning vs Fine-Tuning",
    body: `The same adaptation question, now for large language models, where there are exactly two answers.\n\nIn-context learning puts examples directly in the prompt. His demonstration: show the model "fresh flowers → positive" and "arrived wilted → negative," then ask it to classify a new phrase. No weights change at all. The examples sit in the context window and influence the attention computation, and that is the whole mechanism. It is also called few-shot learning.\n\nFine-tuning is ordinary supervised training. Inputs, labels, forward pass, loss, backpropagation, weight updates — the same loop as any network in this course. The weights genuinely change.\n\nWhich wins? He was unambiguous: fine-tuning, and by a lot. He showed results across datasets where the fine-tuned line sits well above the in-context line, and said a fair comparison usually has fine-tuning ahead across data sizes and model sizes.\n\nThe reason is capacity. You can only fit so much into a prompt. GPT-3's context window was 2,048 tokens — he noted today's models reach around a million, roughly 500× longer, though you are charged accordingly. With that much room in-context learning works better than it used to, and he observed that context compaction during long chats is the system managing exactly this budget. But a prompt still cannot carry what a training set carries.\n\nHis takeaway, which is the exam-shaped version: in-context learning is good for conversation and not good for serious prediction or inference. If you need reliable task performance, fine-tune.\n\nWhich raises the obvious problem, and the rest of the lecture is about it: nobody outside a frontier lab can fine-tune a frontier model. He put current training runs in the tens of millions of dollars and said flatly that individuals and universities cannot do it.\n\nExam insight: the comparison and the reason. ICL changes attention, not weights; fine-tuning changes weights; fine-tuning wins; the prompt is the bottleneck.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Parameter-Efficient Fine-Tuning: Three Approaches",
    body: `If full fine-tuning is unaffordable, train a small number of parameters instead and freeze the rest. That family is parameter-efficient fine-tuning, and he covered three members.\n\nSubset, or new-head, fine-tuning. The simplest thing that works. Freeze every transformer layer and replace only the final output layer, then train that. The usual move is swapping generation for something else — a classification head producing a one-hot output, or a yes/no decision. His topical example: Microsoft's Decision-1, a model for yes/no decisions, which is a fine-tune of Alibaba's open-source 3.5 foundation model. He also mentioned a model called Jeff in the same space.\n\nThe limitation is the obvious one. If only the last layer is trainable, there is very little to train — a very small percentage of the model can change, so there is a ceiling on how much you can adapt. He noted that subset fine-tuning sometimes performs *worse* than the alternatives for this reason.\n\nAdapters. Instead of retraining anything that exists, insert new things. An adapter is a small feedforward network with one hidden layer plus a residual connection, placed inside the transformer block alongside the attention and feedforward components. The original transformer weights stay frozen; only the adapters train. They are deliberately tiny — he put them at roughly 0.5% to 8% of total parameters. You add them to many blocks, so the model gains a little flexibility in many places rather than a lot in one.\n\nLoRA. Low-rank adaptation, and the one he called most important and most common. It gets its own cards next.\n\nThe shared idea: freeze the enormous pretrained model, introduce a small number of trainable parameters, and train only those.\n\nExam insight: three names, one sentence each, and the shared principle. The adapter detail worth keeping is that it is *inserted into* the transformer rather than replacing part of it.`,
  },
  {
    tag: "📐 Formula",
    title: "LoRA, and the Arithmetic That Makes It Work",
    body: `The idea in one line: instead of updating a weight matrix, learn a low-rank factorization of the *change* to it.\n\nWrite the fine-tuned weights as W + ΔW. W is the pretrained matrix and stays frozen. ΔW is the adaptation. Full fine-tuning would learn ΔW directly, and ΔW has to be the same shape as W, so that is exactly as expensive as training W.\n\nLoRA decomposes it: ΔW = B · A, where B and A are much smaller matrices chosen so their product has W's shape. Only B and A are trained.\n\nHis worked example. Let W be 8 × 6 — a deliberately tiny stand-in. Full fine-tuning updates all 48 elements.\n\nWith rank r = 2: B is 8 × 2 = 16 elements, A is 2 × 6 = 12 elements. Total trainable: 28.\n\nWith rank r = 1: B is 8 × 1 = 8, A is 1 × 6 = 6. Total: 14, against 48.\n\nAt realistic scale the saving is dramatic. If W is 1000 × 2000 you keep those dimensions, but the inner rank r might be 100, and the parameter count collapses accordingly.\n\nThe rank r is the knob. Larger r means more trainable parameters and more freedom to adapt. Smaller r means fewer parameters and a more restricted change, which behaves a little like regularization.\n\nAnd he made a point of the limiting case, because it shows what the method is actually for. Push r up far enough and B plus A together have as many parameters as W itself. At that point you have saved nothing and you have lost the entire purpose — you may as well have fine-tuned W directly. His words: "then you lose the meaning of LoRA." The method is only meaningful while B and A are *much* smaller than W.\n\nAt inference the adapted weights are W + B·A, with W untouched throughout.\n\nExam insight: the decomposition, the arithmetic, and the degenerate case. Being able to compute 8×2 + 2×6 = 28 against 48 is exactly the kind of thing that fits a multiple-choice question.`,
  },
  {
    tag: "💡 Concept",
    title: "Intrinsic Dimensionality: Why LoRA Is Allowed to Work",
    body: `LoRA's arithmetic is easy. The question is why throwing away that much of the update space doesn't ruin the result — and the answer connects back to dropout.\n\nThe concept is intrinsic dimensionality. A model has an enormous parameter space, but the professor's framing is that the parameter count is not the real measure of its degrees of freedom. A 400-billion-parameter model may have far fewer genuinely independent directions than that number suggests. When you adapt it to a new task, the change that matters may live in a small subspace.\n\nHis evidence is empirical and he showed it on MNIST: as you increase the dimensionality of the representation used for classification, performance improves and then saturates. Past some point, more dimensions buy nothing. If 200 dimensions do what 1,000 do, the task did not need 1,000.\n\nTwo things in the course support the same conclusion.\n\nDropout. Delete half the network at random and it still predicts well. That only works if the network carries substantial redundancy — it is not a tight, minimal representation.\n\nMixture of experts. In a MoE model only a small fraction of the parameters activate for any given generation. The full parameter space is not used for any single output.\n\nSo: restrict the update to a low-dimensional subspace, and if the adaptation genuinely lives in a small subspace, you have lost little. He added the related caution that more capacity does not guarantee better accuracy — a much larger network is not automatically better if your data doesn't support it.\n\nAnd he could not resist the recurring theme: compression is learning. Representing something in a simpler form means you captured what mattered. LoRA compresses the update, so in his framing it is doing the same thing the rest of the course has been doing.\n\nExam insight: the term intrinsic dimensionality, and the one-line justification — the update needed for adaptation lives in a much smaller space than the parameter count suggests. Dropout's success is the intuition pump.`,
  },
  {
    tag: "💡 Concept",
    title: "Adapters vs LoRA, and the Bottleneck Underneath Both",
    body: `He closed the technical section by comparing the two methods, and concluded they are more alike than they look.\n\nAdapters insert a new trainable module into the transformer and leave everything else frozen. The module has a bottleneck: it projects down to a small dimension r and back up. Forward and backward passes run as usual, through the new module.\n\nLoRA does not insert a module. It attaches a low-rank correction, B·A, to selected weight matrices, and adds it to the frozen W at inference. He called it the slightly more innovative of the two, since it modifies the existing weights rather than adding a new stage.\n\nBut look at what both do. Each introduces a small set of trainable parameters. Each forces information through a narrow intermediate dimension — r in both cases. His own verdict: "in my personal view, I don't think these two things are too different. It's just a different format adding to different places."\n\nThe principle he named for the shared mechanism is the information bottleneck. Force a representation through a narrow layer and it has to compress — whatever survives is what mattered. He generalized it: in any deep network, a very narrow layer in the middle dominates, because everything downstream only sees what got through, however wide the later layers are. He suggested looking up information bottleneck theory, describing it as a way of characterizing the tradeoff between accuracy and compression.\n\nHe also gave the interview answer for "what is LoRA," almost verbatim, so it is worth having ready: large models have too many parameters to fine-tune affordably, so you need a parameter-efficient method; LoRA compresses the weight *update* into a low rank, replacing the change to selected matrices with the product of two much smaller matrices B and A; you train only B and A; and it is justified by intrinsic dimensionality — much can be represented in far lower dimension than the parameter count implies.\n\nExam insight: both methods are bottlenecks with a rank r; adapters insert, LoRA adds a correction. The interview answer is a good compressed summary of the whole final third of the lecture.`,
  },
  {
    tag: "🔬 Beyond the Exam",
    title: "Hypernetworks, Persona Simulation, Moral Foundations",
    body: `He flagged all of this as research rather than examinable material. He also stated the general rule at the top of the lecture: most research-related topics will not be covered on the midterm because they are not in the course's essential outline. Read this for projects and interviews.\n\nHypertuning and hypernetworks. Rather than *learning* ΔW by backpropagation, predict it. A hypernetwork is itself a neural network, trained to output the weight change a new task will need. If you have seen enough tasks, you might predict the adaptation directly, with no fine-tuning at all. He was unusually blunt about his own assessment — "it's very ugly and people shouldn't do it at all" — and included it only for completeness.\n\nPersona simulation for election prediction. His group's work from a couple of years ago. Give a language model a demographic persona and ask how that person would vote. Version one was a direct prompt and worked poorly. Version two added temporal information — a political encyclopedia and candidate details — because the same person votes differently in different years as conditions change. Version three added an intermediate reasoning step: infer the person's political ideology from their demographics *first*, then ask about the vote. That chain-of-thought step produced a significant improvement, because the model was not otherwise reasoning hard enough about how demographics translate into a decision.\n\nThe finding worth knowing: simulated populations are far more polarized than real ones. Human responses spread smoothly across the spectrum; GPT-4's collapse toward the extremes, with the middle largely compressed away. The models also show strong stereotypes keyed to gender, ethnicity and education. He connected this to work showing that models have measurable political leanings of their own. The practical lesson: if you simulate people with a model, you must know the model's own biases first, because they propagate into every conclusion.\n\nHe noted this approach is now widely used in marketing and that several unicorn startups do it.\n\nSecurity–utility tradeoff. Models fine-tuned for safety produce what he called defensive responses — "this is a great idea, however, there are one or two gaps." Always technically complete, and the effect on the reader is hesitancy about a decision that might have been fine.\n\nMoral foundations. A recent accepted paper from his group: train a language model from scratch and watch when moral concepts appear. The finding is that morality does not arrive at a single moment. It emerges gradually, out of the language itself — the model is never given a definition of honesty or loyalty, and develops the notion from how people use language.\n\nHe closed with an invitation: if you have a background in physics, material science, biology or psychology, he has research going in those directions and would like to hear from you.`,
  },
  {
    tag: "📋 Admin",
    title: "Midterm Logistics and Course Notes",
    body: `The clearest statement yet of what the midterm will be, plus everything administrative from this lecture.\n\nThe midterm is November 2. The review session is the Monday before — October 26 — and he confirmed it directly. That session covers what is actually going to be on the exam, so it decides your revision plan.\n\nWhat you may bring: anything paper-based, as much as you want. No electronic devices. He explicitly said there will be no complex mathematical calculation, so a calculator is unnecessary. He also said twice not to print everything — once on environmental grounds, once because the review session makes it unnecessary.\n\nWhat is out of scope, stated plainly: "most of the research-related topics won't be covered because they're not essential — they're not in the essential outlines of this course." For this lecture that rules out hypernetworks, the persona-simulation work and the moral-foundations paper.\n\nOn the assignment: only the two-page report is graded. He noted it is a programming homework but the report is the graded artifact, so read the instructions carefully and think about what actually belongs in the report. Working with an agent or a large model is permitted.\n\nHis warning about that is worth taking seriously, and he built it from his own inbox. He receives large numbers of PhD-application emails that are obviously agent-written — he can spot them by the hard line breaks at 79 characters — and has put a hidden instruction on his homepage so that anything which did not actually read the page gets filtered automatically. The lesson he drew for students: use AI if you want, but read what you are submitting.\n\nProject proposal grades are out. Deductions were minor and he said people did good work overall. The only instruction he gave graders was that the comments must be human-written, so if a comment does not read as human, tell them.\n\nStill to come: automated machine learning, which he deferred from the hyperparameter section to a later lecture.`,
  },
];

const VOCAB = [
  { term: "Oscillation (zigzag)", def: "Consecutive mini-batches pulling the weights in opposing directions, so the path crosses back and forth instead of going straight." },
  { term: "Saddle point", def: "A point where the derivative is zero in every direction but which is not a minimum — the surface curves up one way and down another." },
  { term: "Local minimum", def: "A point where the gradient vanishes and updates stop, even though a lower-loss region exists somewhere else." },
  { term: "Mini-batch noise", def: "A batch gradient is a cheap, noisy estimate of the true gradient. Errors cancel over many steps; the cost is extra iterations." },
  { term: "Momentum", def: "The update blends the current gradient with a velocity — a running mean of past gradients. Escapes saddle points, cancels zigzag, accelerates." },
  { term: "Velocity", def: "The accumulated average of recent gradients that momentum carries forward. Non-zero even where the current gradient is zero." },
  { term: "AdaGrad", def: "Scales each coordinate's step by the inverse square root of its historical sum of squared gradients. The sum only grows, so steps decay forever." },
  { term: "RMSProp", def: "A leaky AdaGrad — a decaying average instead of a growing sum, so old gradients fade and the step size can recover." },
  { term: "Adam", def: "Momentum plus adaptive per-coordinate scaling. The two independent ingredients of the optimizer family, combined." },
  { term: "Learning rate", def: "The step size of each update. The gradient sets the direction; this sets how far you go. Usually 0.01 or 0.001 to start." },
  { term: "Learning-rate decay", def: "Reducing the rate as training proceeds — in steps at fixed epochs, linearly, or as α/√t. Large steps early, small steps late." },
  { term: "Linear warmup", def: "Increasing the learning rate gradually at the start of training before decaying it. Like warming a car before driving it." },
  { term: "Cyclical learning rate", def: "Raising and lowering the rate repeatedly through training instead of settling into a single descent." },
  { term: "Tuning tricks", def: "The undocumented practices that make a training run work. His point: reported gains sometimes came from these, not from the paper's stated idea." },
  { term: "Training curve vs validation curve", def: "Training loss always falls — it is what you minimise. The relationship between the two curves is the actual diagnosis." },
  { term: "Divergence point", def: "The epoch where validation loss bottoms out and turns upward while training loss keeps falling. Overfitting begins here." },
  { term: "Early stopping", def: "Halting training once validation stops improving, rather than running out the epoch budget. The cheapest regulariser available." },
  { term: "Checkpoint selection", def: "Keeping the weights from the epoch with the best validation loss, not the last epoch. Every snapshot is a different model." },
  { term: "Model ensemble", def: "Training several networks and averaging their predictions. Improves accuracy; multiplies inference cost by the number of models." },
  { term: "Train–validation gap", def: "The distance between training and validation performance. Regularisation's goal is to close it, not to raise training accuracy." },
  { term: "Regularisation", def: "Anything that makes a single model generalise better. Weight penalties, dropout, augmentation, early stopping, batch norm." },
  { term: "Weight penalty / weight decay", def: "Adding a term for the size of the weights to the loss, so the optimiser prefers the simplest weights that still fit." },
  { term: "L1 vs L2 penalty", def: "L1 (lasso) sums absolute values and drives weights to exactly zero. L2 (ridge) sums squares and shrinks everything smoothly." },
  { term: "Dropout", def: "Randomly switching off units during training by multiplying the layer's output by a fresh random binary mask each pass." },
  { term: "Dropout mask", def: "The binary matrix of zeros and ones that zeroes out the dropped units. Redrawn on every forward pass." },
  { term: "Keep probability (p)", def: "The chance a unit survives a dropout pass. At p = 0.5 half the units are off, chosen fresh each time." },
  { term: "Dropout test-time scaling", def: "Test runs the full network, so activations are larger than in training. Multiply the test output by p to match the training scale." },
  { term: "Inverted dropout", def: "Doing the correction during training — divide by p when applying the mask — so test time needs no adjustment at all." },
  { term: "Subnetwork (dropout view)", def: "What remains after a dropout mask. Training samples a different one each pass, which is an implicit ensemble sharing one set of weights." },
  { term: "Data augmentation", def: "Manufacturing extra training examples by transforming existing ones. Valid only while the transformation preserves the label." },
  { term: "Label preservation", def: "The rule governing augmentation. A flipped cat is still a cat; a flipped 6 is a 9, so that transform is invalid for digits." },
  { term: "Random crop", def: "Taking a random sub-region of an image as a new training example, which also zooms in on particular features." },
  { term: "Stochastic depth", def: "Dropout applied to whole layers — skipping some entirely during training and routing the signal past them." },
  { term: "Cutout / random erasing", def: "Deleting a rectangular region of the input image so the model cannot answer from one part alone." },
  { term: "Mixup", def: "Blending two images (40% cat, 60% dog) and training against the matching soft label rather than a one-hot one." },
  { term: "Hyperparameter", def: "A setting fixed before training and not learned — layer count, learning rate, dropout probability, optimizer, initialization scheme." },
  { term: "Parameter", def: "A model weight. Learnable, updated by gradient descent, changing continuously throughout training." },
  { term: "Grid search", def: "Trying every combination of hyperparameter values on a regular lattice." },
  { term: "Random search", def: "Sampling hyperparameter combinations at random, so each value can land anywhere in its range rather than on grid lines." },
  { term: "Overfit a small sample", def: "The first debugging step: confirm the setup can memorise a tiny subset. If it cannot, something is broken before tuning matters." },
  { term: "Transfer learning", def: "Reusing a model trained on one task as the starting point for another, instead of training from scratch." },
  { term: "Backbone", def: "The pretrained feature-extraction part of a network, reused across tasks. His term for it, and he noted it isn't called a foundation here." },
  { term: "Source vs target data", def: "Source is what the backbone was pretrained on (e.g. ImageNet); target is the task you are adapting to. Their similarity decides how much to fine-tune." },
  { term: "Frozen backbone", def: "Feature layers fixed, only the final classifier trained. The cheapest transfer option, and enough for a similar task with little data." },
  { term: "Partial fine-tuning", def: "Unfreezing some later feature layers as well as the classifier. The middle option when the domain shifts or more data is available." },
  { term: "Full fine-tuning", def: "Every layer trainable. Most flexible, most expensive, and justified mainly by lots of data in a distant domain." },
  { term: "In-context learning", def: "Putting examples in the prompt so the model adapts through attention without any weight change. Also called few-shot learning." },
  { term: "Context window", def: "How much text fits in the prompt. GPT-3 held 2,048 tokens; current models reach around a million, which is why in-context learning improved." },
  { term: "PEFT", def: "Parameter-efficient fine-tuning. Freeze the pretrained model and train a small number of new or selected parameters instead." },
  { term: "Subset / new-head fine-tuning", def: "Freezing everything and replacing just the output layer — swapping generation for classification, say. Simple, and limited by how little can change." },
  { term: "Adapter module", def: "A small feedforward network with one hidden layer and a residual connection, inserted inside transformer blocks. Roughly 0.5–8% of parameters." },
  { term: "LoRA", def: "Low-rank adaptation. Freeze W and learn the update as ΔW = B·A, where B and A are much smaller matrices. Train only B and A." },
  { term: "Rank r (LoRA)", def: "The inner dimension of B·A. Larger r means more trainable parameters and more freedom; at r large enough the saving vanishes entirely." },
  { term: "Intrinsic dimensionality", def: "The number of genuinely independent directions a model uses, far below its parameter count. Why a low-rank update suffices." },
  { term: "Information bottleneck", def: "Forcing a representation through a narrow layer so only what matters survives. The shared mechanism under both adapters and LoRA." },
  { term: "Hypernetwork", def: "A network trained to predict another network's weight change rather than learning it by backpropagation. He flagged it as research he dislikes." },
];

const EXAM_TIPS = [
  { tip: "Midterm scope got narrower — research topics are OUT", detail: "He said it directly at the top of this lecture: \"most of the research-related topics won't be covered because they're not essential — they're not in the essential outlines of this course.\" For Lecture 7 that rules out hypernetworks, the persona-simulation work and the moral-foundations paper. The review session on Oct 26 confirms the rest.", priority: "HIGH" },
  { tip: "No complex calculation on the exam — he said so", detail: "\"I don't think we're going to have any complex math calculation at all,\" which is why no calculator is needed. Expect to recognise and reason about formulas rather than grind through them. Small arithmetic like a LoRA parameter count is still fair game.", priority: "HIGH" },
  { tip: "The three failures of plain SGD, by name", detail: "Oscillation (consecutive mini-batches pulling opposite ways, so the path zigzags), saddle points and local minima (gradient zero, no direction to move), and mini-batch noise (each batch is a noisy estimate; errors cancel but cost iterations). Every fix in this lecture attaches to one of them.", priority: "HIGH" },
  { tip: "Momentum: current gradient + accumulated velocity", detail: "The velocity is a running mean of past gradients. At a saddle point the current gradient is zero but the velocity isn't, so you carry through. In a zigzag the oscillating component alternates sign and cancels while the consistent one accumulates. Be ready to explain the saddle-point escape specifically.", priority: "HIGH" },
  { tip: "Learning-rate symptoms map to exact diagnoses", detail: "Loss rising over epochs → rate too high, you are overshooting. Loss nearly flat → too low, right direction and tiny steps. Falls fast then plateaus above the floor → slightly too high, bouncing around the minimum. Smooth continuing descent → correct. He drew all four.", priority: "HIGH" },
  { tip: "0.01 or 0.001 is the standard starting learning rate", detail: "And know why: the data has been normalised into roughly −1 to 1, so gradients sit on that scale. He made a point that this number is meaningless to someone who has never trained a network, and that knowing it is part of what the course is for. He also hinted he could put a learning-rate magnitude question on the midterm.", priority: "HIGH" },
  { tip: "Read the two curves — three scenarios", detail: "Both falling: learning well, the ideal. Both flat and high: not learning at all. Training falling while validation climbs: overfitting, and the divergence point is where you stop. Training loss alone proves nothing, because minimising it is literally the objective.", priority: "HIGH" },
  { tip: "Dropout's test-time scaling, in both conventions", detail: "Training drops units, so downstream sums are smaller. Test uses the whole network, so activations are about 1/p times larger than training saw. Standard dropout multiplies the test output by p. Inverted dropout divides by p during training instead, leaving test time untouched. One or the other — never both, never neither.", priority: "HIGH" },
  { tip: "Augmentation's one rule, and the 6→9 counterexample", detail: "A transformation is valid only while it preserves the label. Flip a cat, still a cat. Flip a 6 vertically and it's a 9, so vertical flips are invalid for digits. The same transform that helps one task breaks another — that's the point of the counterexample, and it's the most quotable line in the section.", priority: "HIGH" },
  { tip: "LoRA: ΔW = B·A, and be able to count the parameters", detail: "His worked example: W is 8 × 6, so full fine-tuning updates 48 elements. At rank 2, B is 8×2 = 16 and A is 2×6 = 12, so 28 trainable. At rank 1, 8 + 6 = 14. Also know the degenerate case — push r high enough and B plus A match W's parameter count, at which point the method has no purpose left.", priority: "HIGH" },
  { tip: "Hyperparameter vs parameter — the clean definition", detail: "A hyperparameter is set before training and does not change during it; a parameter is a weight the model learns. His own reading of the word: \"hyper\" means you fixed it beforehand. Learning rate, layer count, dropout probability and optimizer choice are hyperparameters; the weights they act on are parameters.", priority: "MEDIUM" },
  { tip: "Adaptive optimizers: two independent ingredients", detail: "Momentum changes the direction; adaptive scaling changes the per-coordinate step size. AdaGrad divides by the square root of a growing sum of squared gradients, so steps decay forever. RMSProp makes that a decaying average — \"a leaky version of AdaGrad.\" Adam is momentum plus adaptive scaling.", priority: "MEDIUM" },
  { tip: "Early stopping and checkpoint selection pick by VALIDATION", detail: "Not the last epoch and not the best training loss. Every epoch's weights are a different model; you keep the one at the validation minimum. If validation bottoms out at epoch 4, epoch 4 is your model however good the training curve looks afterwards.", priority: "MEDIUM" },
  { tip: "Dropout has two interpretations and both are fair game", detail: "One: no unit can be relied on, so the decision can't concentrate in one place — the cat example with ears, tail, fur and claws. Two: each mask trains a different subnetwork, so you get an implicit ensemble for the price of one model. The second one is also the bridge to intrinsic dimensionality later in the lecture.", priority: "MEDIUM" },
  { tip: "Transfer learning: early layers generic, late layers specific", detail: "Early convolutional layers learn edges, colours and light — properties of images rather than of your task — so they transfer. Later layers compose task-specific features. Hence freeze the early layers and retrain the late ones. The frozen part is called the backbone; pretraining data is the source, your task is the target.", priority: "MEDIUM" },
  { tip: "How much to fine-tune: data size × domain distance", detail: "Little data + similar task → retrain the last linear layer only (\"that's it, very simple\"). Lots of data + similar task → a few more layers. Lots of data + different domain → many layers, since little transfers. Little data + very different domain → the hard corner, where he said transfer may not be worth doing. His distant-pair example is brain scans to cats and dogs.", priority: "MEDIUM" },
  { tip: "In-context learning vs fine-tuning, and which wins", detail: "ICL puts examples in the prompt and changes attention, not weights — also called few-shot. Fine-tuning changes the weights through the ordinary supervised loop. Fine-tuning wins, and the bottleneck is the context window: GPT-3 held 2,048 tokens against roughly a million today. His takeaway — ICL is good for conversation, not for serious prediction.", priority: "MEDIUM" },
  { tip: "The three PEFT approaches in one line each", detail: "Subset / new head: freeze everything, replace the output layer (his example is Microsoft's Decision-1, fine-tuned from Alibaba's open-source 3.5 model). Adapters: insert a small feedforward module with one hidden layer plus a residual inside transformer blocks, at roughly 0.5–8% of parameters. LoRA: add a low-rank correction B·A to selected weight matrices.", priority: "MEDIUM" },
  { tip: "Intrinsic dimensionality is why LoRA is allowed to work", detail: "The parameter count is not the real number of degrees of freedom. His MNIST evidence: performance saturates as you add representation dimensions, so 200 can match 1,000. Dropout is the intuition — delete half the network and it still works, which means heavy redundancy. Mixture of experts makes the same point.", priority: "MEDIUM" },
  { tip: "The weight penalty is a two-term objective", detail: "Total loss = data loss + a penalty on weight size. The first term wants predictions near the labels, the second wants small weights, and the tension is deliberate: if a simple model fits, you don't want a complex one. This has now appeared in Lectures 2, 3 and 7.", priority: "MEDIUM" },
  { tip: "Learning-rate schedules — recognise, don't memorise", detail: "Step decay cuts the rate at fixed epochs (his example: every 30). Smooth or linear decay does it continuously. Inverse square root is α/√t. Warmup raises the rate first, then decays — like warming a car in winter. Cyclical goes up and down repeatedly. He flew through these, so expect recognition only.", priority: "LOW" },
  { tip: "Ensembles work, but you pay at inference forever", detail: "Averaging several trained networks improves accuracy — the Lecture 2 variance argument. The cost is running every model for every prediction. He did not recommend it, and used it to set up the real question: how do you make ONE model generalise better?", priority: "LOW" },
  { tip: "Stochastic depth, cutout and mixup — and which are image-only", detail: "Stochastic depth skips whole layers. Cutout erases a rectangle of the image. Mixup blends two images and their labels (40% cat, 60% dog). Cutout and mixup are image-specific; dropout, weight decay and batch norm apply to any network. The unifying philosophy is to break the model on purpose and see whether it still performs.", priority: "LOW" },
  { tip: "The hyperparameter search recipe, in order", detail: "Overfit a tiny sample first to prove the setup can learn at all, find a learning rate that makes the loss fall, train a few epochs, refine, then train longer. Search by grid or random layout, and select on validation. That first debugging step is a good exam question and a genuinely useful habit.", priority: "LOW" },
  { tip: "Adapters and LoRA are the same shape of idea", detail: "Both add a small set of trainable parameters and force information through a narrow dimension r. His own verdict: \"I don't think these two things are too different — it's just a different format adding to different places.\" The principle underneath is the information bottleneck.", priority: "LOW" },
  { tip: "The LoRA interview answer, nearly verbatim", detail: "Large models have too many parameters to fine-tune affordably, so you need a parameter-efficient method. LoRA compresses the weight UPDATE into a low rank, replacing the change to selected matrices with the product of two much smaller matrices B and A, and trains only those. It is justified by intrinsic dimensionality. He said to expect this in interviews.", priority: "LOW" },
  { tip: "Research content from this lecture is explicitly not examinable", detail: "Hypernetworks and hypertuning (he called the area \"very ugly and people shouldn't do it at all\"), the election persona-simulation study, and the moral-foundations paper. Good project and interview material. The persona finding is memorable: simulated populations are far more polarised than real ones, with the middle largely compressed away.", priority: "LOW" },
  { tip: "Assignment: only the two-page report is graded", detail: "It's a programming homework, but the report is the graded artifact — read the instructions and think about what belongs in it. AI use is permitted, and his warning is pointed: he filters agent-written PhD emails automatically using a hidden instruction on his homepage. Use the tools, but read what you submit.", priority: "LOW" },
];

// ─── GAME: Training Tricks ─────────────────────────────────────────────────
// Nine levels, one causal chain: a network that *can* learn still might not,
// and every technique here fixes a specific way the training run goes wrong.
// Six of the nine levels have a hands-on (non-MCQ) step.
//
// Distractor discipline (see claude/lecture-game-spec.md, teaching rule 4):
// every wrong option is a real misconception written to roughly the length of
// the correct one, so the answer is never the longest or most detailed option.

// Learning-rate sweep for level 3. A 1-D bowl f(w) = 4w², started at w = 4 and
// run for 40 epochs, plus an SGD noise floor proportional to the step size —
// which is why a very large rate drops fast and then never settles. The four
// curves the professor drew all appear on this one slider.
const LR_GRID = [0.0001, 0.0003, 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 1.0];
const lrCurve = (lr) => {
  let w = 4;
  const out = [];
  for (let e = 0; e < 40; e++) {
    w = w * (1 - 8 * lr);
    out.push(Math.min(4 * w * w + 60 * lr, 1e6));
  }
  return out;
};
const lrFinal = (lr) => lrCurve(lr)[39];

const GAME = {
  title: "Training Tricks",
  tagline: "Nine levels, one chain: a network that can learn still might not, and each level fixes one specific way the run goes wrong.",
  nodePrefix: "e",
  takeaway: "The gradient only ever tells you a direction — everything else in training is choosing how far to step, knowing when to stop, deliberately breaking the model so it cannot memorise, and then not training from scratch at all.",
  levels: [
    // ── e1 ────────────────────────────────────────────────────────────────
    {
      id: "stalls",
      name: "Where plain SGD stalls",
      problem: "You have a gradient and a step size, so in principle you can train. In practice plain stochastic gradient descent fails in three distinct ways, and the rest of this lecture is a fix for each.",
      steps: [
        {
          type: "multi",
          q: "The professor named three problems with plain SGD. Select all three.",
          opts: [
            "Oscillation / zigzag",
            "Saddle points and local minima",
            "Mini-batch noise",
            "Vanishing gradients",
            "Overfitting the training set",
            "Exploding activations",
          ],
          correct: [0, 1, 2],
          why: "<b>Zigzag, stuck gradients, and noise.</b> Consecutive mini-batches pull in opposing directions; the chain rule can multiply out to a zero gradient with nowhere to go; and any one batch is a cheap, noisy estimate of the true gradient. Momentum and the adaptive optimizers exist for these three.",
          hintFn: (sel) => {
            if (sel.indexOf(3) !== -1) return "Vanishing gradients are an architecture and initialisation problem from Lectures 3 and 6. These three are about the <i>optimizer</i>.";
            if (sel.indexOf(4) !== -1) return "Overfitting is the second half of this lecture. These three all happen while the loss is still going down.";
            if (sel.indexOf(5) !== -1) return "Exploding activations is an initialisation failure. Look for the three he attributed to the optimizer itself.";
            return "Three of these are things SGD does badly. The others are failures of something else in the pipeline.";
          },
        },
        {
          type: "mcq",
          ctx: "Optimization runs on the chain rule, which multiplies. If any factor in the product is zero, the whole gradient is zero and there is no direction to step in.",
          q: "What exactly is a <b>saddle point</b>, as distinct from a local minimum?",
          opts: [
            "A point where the loss is lowest in the region, but a lower region exists somewhere else entirely",
            "A point where the derivative is zero in every direction, yet the surface curves up one way and down another",
            "A point where the gradient flips sign between consecutive mini-batches, so the update cancels itself out",
            "A point where the loss surface is perfectly flat in a whole neighbourhood, so every nearby step is equal",
          ],
          a: 1,
          why: "<b>Zero gradient, and not even a minimum.</b> That is the sting: you stop at a point that is not the bottom of anything. He stressed these are everywhere in deep networks precisely because the loss surface is so high-dimensional — not one saddle point, a great many.",
          hints: {
            0: "That's the local minimum, which he named as the separate case. A saddle is stranger than that.",
            2: "That's oscillation, the first problem. A saddle point stops you rather than bouncing you.",
            3: "A flat plateau is a different pathology. At a saddle the surface genuinely curves — just in opposite directions.",
          },
          defaultHint: "The derivative is zero. The question is whether you are at the bottom of anything.",
        },
        {
          type: "mcq",
          q: "Why does using mini-batches rather than the full dataset make the path noisy, and why does it converge anyway?",
          opts: [
            "Each batch is a cheap, noisy estimate of the true gradient; the errors cancel across many steps",
            "Each batch is sorted differently, so the order of the examples changes the direction of the step",
            "Each batch uses a slightly different learning rate, chosen at random, which averages out over the run",
            "Each batch holds a different number of examples, so the gradients arrive at inconsistent magnitudes",
          ],
          a: 0,
          why: "<b>Cheap and noisy, but unbiased on average.</b> One update may well point the wrong way. Enough updates and the errors cancel, so the trend is right. The cost you pay is iterations — his framing was that mini-batch SGD gives you the <i>trend</i> over many states, not a correct step each time.",
          hints: {
            1: "Order doesn't enter it — the gradient over a batch is a sum, and sums don't care about order.",
            2: "The learning rate is fixed across batches. What differs is which examples you happened to draw.",
            3: "Batch size is held constant. The variation is in the content of the batch, not its size.",
          },
          defaultHint: "What is different between one batch and the next, and what does that do to the gradient you compute?",
        },
      ],
    },
    // ── e2 ────────────────────────────────────────────────────────────────
    {
      id: "momentum",
      name: "Momentum and the adaptive family",
      problem: "Plain SGD is memoryless — each step knows nothing about the last one. So a zero gradient stops it dead and a noisy one wastes the step entirely.",
      steps: [
        {
          type: "order",
          q: "Build one momentum update. Click the pieces in the order they execute.",
          pieces: [
            "Compute the gradient on the current mini-batch",
            "Blend it into the velocity — the running mean of past gradients",
            "Multiply the velocity by the learning rate",
            "Subtract the result from the current weights",
          ],
          posHints: [
            "Start where plain SGD starts. You still need a gradient before anything else can happen.",
            "The gradient is in hand. Momentum's one piece of state has to absorb it before it is used.",
            "You have a direction now. Something still has to decide how far along it you go.",
            "Everything is computed. Only the weights are left to change.",
          ],
          why: "<b>Gradient, then velocity, then step.</b> The only structural change from plain SGD is that the gradient passes through the velocity first. That one piece of state is what carries you through a point where the current gradient is zero.",
        },
        {
          type: "mcq",
          q: "AdaGrad adds something different from momentum. What, and what is its weakness?",
          opts: [
            "A per-coordinate step size scaled by the historical sum of squared gradients; that sum only grows",
            "A per-coordinate direction chosen by the sign of the last gradient; the signs can flip every batch",
            "A global step size scaled by the number of epochs completed; the count has no link to the loss",
            "A per-layer step size scaled by how many parameters the layer holds; the count never changes at all",
          ],
          a: 0,
          why: "<b>Element-wise scaling by accumulated history.</b> A parameter with large past gradients gets smaller steps; a quiet one gets larger steps. The weakness is in the word <i>sum</i> — it only increases, so the denominator only increases, so every step size eventually decays toward zero whether or not you have arrived.",
          hints: {
            1: "AdaGrad scales the step size. It leaves the direction to the gradient itself.",
            2: "The scaling is per-coordinate, not global, and it is driven by gradients rather than by epoch count.",
            3: "It is per-parameter, not per-layer, and parameter count is fixed so it could not adapt to anything.",
          },
          defaultHint: "Momentum changed the direction. This family changes something else, and separately for each parameter.",
        },
        {
          type: "mcq",
          ctx: "RMSProp is what he called \"a leaky version of AdaGrad\" — a decaying average of squared gradients instead of a growing sum, so old gradients fade out and the step size can recover.",
          q: "So what is Adam?",
          opts: [
            "Momentum for the direction, combined with an adaptive per-coordinate step size",
            "RMSProp applied separately to each layer rather than to each individual parameter",
            "A schedule that switches from plain SGD to RMSProp partway through the training run",
            "Momentum with the velocity reset to zero whenever the validation loss stops improving",
          ],
          a: 0,
          why: "<b>Both ingredients at once.</b> The family has exactly two independent dials — momentum, which smooths the direction, and adaptive scaling, which sets a step size per coordinate. You can use either, neither, or both; Adam is both. He was explicit that you mix and match, and that these are just the named points in that space.",
          hints: {
            1: "The adaptive family works per parameter throughout. Per-layer is not what any of them do.",
            2: "Adam is one algorithm running the whole time, not a handover between two.",
            3: "Nothing in Adam watches the validation loss. Both of its ingredients are computed from gradients.",
          },
          defaultHint: "Two independent ingredients have now been introduced. How many does Adam use?",
        },
      ],
    },
    // ── e3 ────────────────────────────────────────────────────────────────
    {
      id: "lr",
      name: "The learning rate",
      problem: "Whichever optimizer you picked, the gradient only ever gives you a direction. How far to move along it is a completely separate decision, and the wrong answer wastes the whole run.",
      steps: [
        {
          type: "slider",
          q: "Forty epochs of gradient descent on the same loss surface, with only the learning rate changing. <b>Find the rate that reaches the lowest loss after 40 epochs.</b>",
          ctx: "Bars are the loss at each epoch, log-scaled. Red bars are off the chart — the run diverged.",
          params: [{ id: "i", label: "learning rate", min: 0, max: 8, step: 1, init: 0, format: (v) => String(LR_GRID[v]) }],
          action: "Lock it in",
          view: (v) => {
            const lr = LR_GRID[v.i];
            const c = lrCurve(lr);
            const f = c[39];
            return {
              chart: c,
              chartRange: [0.01, 100],
              chartLabels: ["epoch 1", "epoch 20", "epoch 40"],
              readout: "learning rate = " + lr + " · loss after 40 epochs = " + (f >= 1e6 ? "diverged" : f.toFixed(3)),
              note: f >= 1e6
                ? "The loss is climbing, not falling. This is the overshoot case."
                : (f > 20 ? "Falling, but barely. Forty epochs have hardly moved it."
                  : (lr >= 0.03 ? "Drops fast, then flattens out well above the floor." : "A smooth, continuing descent.")),
            };
          },
          check: (v) => {
            const lr = LR_GRID[v.i];
            const f = lrFinal(lr);
            const best = Math.min.apply(null, LR_GRID.map(lrFinal));
            if (Math.abs(f - best) < 1e-9) return true;
            if (f >= 1e6) return "At " + lr + " the loss climbs off the chart — you are overshooting the minimum every step. Come down.";
            if (f > 20) return "At " + lr + " the loss ends at " + f.toFixed(2) + ". The direction is right and the steps are far too small. Go up.";
            return "At " + lr + " the loss ends at " + f.toFixed(2) + ". Better, but something nearby lands lower. Keep looking.";
          },
          ok: "0.01 — the lowest final loss of the nine, and exactly the standard starting point he named.",
        },
        {
          type: "mcq",
          ctx: "You started a run. Over the first twenty epochs the training loss <b>rises</b> steadily.",
          q: "What is wrong?",
          opts: [
            "The learning rate is too high — each step overshoots the minimum and lands further up the far side",
            "The learning rate is too low — the steps are so small that noise in the batches dominates the signal",
            "The model has already overfitted, so the loss it reports on the training data has begun to climb",
            "The gradient has the wrong sign, which happens when the loss function has been written backwards",
          ],
          a: 0,
          why: "<b>Rising loss means overshoot.</b> The direction was right; the step carried you past the minimum and up the other side, and it repeats. He was explicit that there is no guarantee of convergence in this case at all — it can bounce indefinitely.",
          hints: {
            1: "Too small a step makes the loss fall slowly. It does not make it rise.",
            2: "Overfitting shows up in the <i>validation</i> curve. Training loss does not climb from overfitting.",
            3: "A sign error would be a bug rather than a hyperparameter. He was describing a tuning failure.",
          },
          defaultHint: "You are minimising. If the number is going up, you are stepping past the thing you are aiming at.",
        },
        {
          type: "mcq",
          q: "Learning-rate schedules change the rate during the run. What does <b>warmup</b> do, and why?",
          opts: [
            "Raises the rate gradually at the start before decaying it, so early updates stay small and stable",
            "Runs several epochs at zero learning rate first, so the batch statistics settle before any update",
            "Raises the rate every time the loss plateaus, so training can escape a flat region it has entered",
            "Starts at the largest rate and cuts it in half at fixed epochs, so progress slows as you converge",
          ],
          a: 0,
          why: "<b>Small steps first, then the real rate, then decay.</b> His analogy was starting a car in winter — you warm it up before driving it hard. Some networks are unstable in the first few hundred updates, and a full-size step then can throw the weights somewhere they never recover from.",
          hints: {
            2: "That describes a cyclical schedule, which he covered separately. Warmup happens once, at the beginning.",
            3: "That's step decay — a real schedule, and the opposite shape. Warmup goes up before it goes down.",
            1: "Nothing freezes. The rate starts small and non-zero, then climbs.",
          },
          defaultHint: "The name is the hint. What are you warming up, and when would you need to?",
        },
      ],
    },
    // ── e4 ────────────────────────────────────────────────────────────────
    {
      id: "curves",
      name: "Two curves, one decision",
      problem: "Training loss going down proves nothing — minimising it is literally the objective. The information is in how it moves relative to the validation loss.",
      steps: [
        {
          type: "pick",
          q: "Three training runs. Read each pair of curves and pick the diagnosis.",
          hint: "Ask what the <i>validation</i> curve is doing, and whether the two curves agree with each other.",
          rounds: [
            {
              ctx: "Training loss falls steadily through all 40 epochs. Validation loss falls steadily alongside it.",
              items: ["Learning well", "Not learning at all", "Overfitting from here", "Learning rate too high"],
              answer: 0,
              why: "Both curves falling together is the ideal. The model is picking up patterns that transfer to data it was never fit on — which is the only thing you actually wanted.",
            },
            {
              ctx: "Training loss stays high and nearly flat. Validation loss stays high and nearly flat. Forty epochs, almost no movement in either.",
              items: ["Learning well", "Not learning at all", "Overfitting from here", "Learning rate too high"],
              answer: 1,
              why: "Nothing is being learned. Training loss would fall if the optimization were working at all, so the problem is upstream — too simple a model, a broken learning rate, or something wrong with the data.",
            },
            {
              ctx: "Training loss keeps falling all the way to epoch 40. Validation loss bottoms out at epoch 4 and climbs from epoch 5 onward.",
              items: ["Learning well", "Not learning at all", "Overfitting from here", "Learning rate too high"],
              answer: 2,
              why: "The curves have parted company. Past epoch 4 the model is fitting patterns that exist only in the training data, so held-out performance degrades while the training number keeps improving.",
            },
          ],
        },
        {
          type: "mcq",
          ctx: "That third run again: validation loss is lowest at epoch 4, and you trained to epoch 40.",
          q: "Which weights are your model?",
          opts: [
            "Epoch 4's — the validation minimum, regardless of how much better training looked afterwards",
            "Epoch 40's — the final weights, since every epoch after 4 still reduced the loss being optimised",
            "The average of all 40 checkpoints, which smooths out the noise in any individual epoch's weights",
            "Epoch 40's, but retrained from scratch with fewer epochs once you know where validation bottomed",
          ],
          a: 0,
          why: "<b>Checkpoint selection, by validation.</b> Every epoch's weights are genuinely a different model — his point was that a long training run produces a trajectory, and releasing a model means choosing a point on it. Everything after epoch 4 is worse on held-out data, whatever the training curve says.",
          hints: {
            1: "Training loss falling is guaranteed by construction. It cannot be the thing you select on.",
            2: "Weight averaging is a real technique, but it is not what he described — and it isn't checkpoint selection.",
            3: "You already have those weights saved. Retraining would cost a full run to arrive back where you are.",
          },
          defaultHint: "You have 40 sets of weights sitting on disk. Which one performs best on data it never saw?",
        },
        {
          type: "mcq",
          q: "Training several networks and averaging their predictions does improve accuracy. Why did he not recommend it?",
          opts: [
            "Every prediction has to run all the models, so the inference cost is multiplied, permanently",
            "The models converge to nearly identical weights, so averaging them changes very little in practice",
            "Averaging predictions is only valid when the models share an architecture and a random seed",
            "The validation set has to be split between the models, leaving too little to select each one on",
          ],
          a: 0,
          why: "<b>You pay for training once and for inference forever.</b> Three models means three forward passes for every single prediction. That cost is what makes the question interesting — if you cannot afford several models, how do you make <i>one</i> generalise better? Which is what regularisation is.",
          hints: {
            1: "Different initialisations and data orders land in genuinely different places. That's why averaging helps.",
            2: "Ensembles routinely mix architectures. Variety is the source of the benefit, not a problem.",
            3: "All the models can be selected on the same validation set. Nothing needs splitting.",
          },
          defaultHint: "It works. Ask what it costs, and when you pay that cost.",
        },
      ],
    },
    // ── e5 ────────────────────────────────────────────────────────────────
    {
      id: "dropout",
      name: "Dropout",
      problem: "You cannot afford an ensemble, so you need a single model that generalises. The first idea is to damage the model on purpose during training and see whether it copes.",
      steps: [
        {
          type: "mcq",
          q: "Mechanically, what does dropout do on a forward pass during training?",
          opts: [
            "Draws a fresh random binary mask and multiplies the layer's output by it, zeroing some units",
            "Removes the lowest-activation units from the layer and rescales whatever activations are left",
            "Sets a fixed subset of units to zero for the whole run, chosen once when training begins",
            "Adds random noise to every unit's output, drawn fresh from a Gaussian on each forward pass",
          ],
          a: 0,
          why: "<b>A fresh random mask, multiplied in.</b> Each entry is one with probability p and zero otherwise, so a different subset is off every pass. Nothing is removed from the architecture — the units are still there, they just contribute nothing to that particular pass.",
          hints: {
            1: "It is not selective. Which units drop is random, with no reference to what they computed.",
            2: "A fixed subset would just be a smaller network. The randomness is the entire mechanism.",
            3: "Additive noise is a different technique. Dropout multiplies by zero or one.",
          },
          defaultHint: "Two words: random, and binary. What do you do with a matrix of zeros and ones?",
        },
        {
          type: "numeric",
          ctx: "A unit's output is <b>12.0</b> when the whole network runs. During training it was trained with dropout at a keep probability of <b>0.6</b>, and no scaling was applied during training.",
          q: "At test time you run the full network and get 12.0. What value should you pass on, to match the scale the network was trained at?",
          answer: 7.2,
          tol: 0.05,
          why: "<b>12.0 × 0.6 = 7.2.</b> During training only 60% of the inputs were present on average, so downstream units learned to expect roughly 60% of the full sum. Test time has everything switched on, so you scale by the keep probability to put it back on the training scale.",
          hint: "Training saw a fraction p of the signal. Multiply the full-network output by that same p.",
        },
        {
          type: "mcq",
          q: "Why does switching units off at random make the model generalise better?",
          opts: [
            "No unit is guaranteed to be present, so the decision cannot concentrate in any single feature",
            "Switching units off reduces the parameter count, and a smaller model always generalises better",
            "The dropped units keep their old weights, which acts as a snapshot the model can average against",
            "Zeroing activations keeps the layer's outputs small, which has the same effect as a weight penalty",
          ],
          a: 0,
          why: "<b>Nothing can be depended on.</b> His cat example: if units detect ears, tail, fur and claws, and any of them may vanish, the network has to be able to answer from what remains. There is a second reading too — each mask trains a different subnetwork, so you get an implicit ensemble sharing one set of weights.",
          hints: {
            1: "The parameters are all still there — they are not trained away. And smaller is not automatically better.",
            2: "Nothing is averaged across passes. The weights are shared, and all of them keep updating.",
            3: "A weight penalty constrains the weights themselves. Dropout leaves them alone and removes units instead.",
          },
          defaultHint: "If a feature might not be there when you need it, what can you not afford to do?",
        },
        {
          type: "mcq",
          q: "<b>Inverted dropout</b> is the convention most frameworks implement. What does it change?",
          opts: [
            "The correction moves into training — divide by p when masking — so test time needs nothing",
            "The mask is inverted, so the units that would have been dropped are the only ones kept",
            "Dropout is applied at test time as well as during training, and the two then cancel out",
            "The keep probability is inverted to 1 − p, which drops the complement of the usual subset",
          ],
          a: 0,
          why: "<b>Same correction, different place.</b> Scale during training and inference needs no adjustment, which keeps the deployed code simple. His rule: if you don't scale during training you must scale at test, and if you do scale during training you do nothing at test. One or the other — never both, and never neither.",
          hints: {
            1: "What gets inverted is the <i>scaling</i>, not the mask. Which units drop is unchanged.",
            2: "Test time must be deterministic. Dropping at inference would make the prediction random.",
            3: "The probability is unchanged. The word refers to where the correction is applied.",
          },
          defaultHint: "There is one correction to make and two places it could live. Which one does this put it in?",
        },
      ],
    },
    // ── e6 ────────────────────────────────────────────────────────────────
    {
      id: "augment",
      name: "Breaking the data instead",
      problem: "Dropout damages the model. The other move is to leave the model alone and attack the data — because the real reason it overfits is that there is not enough of it.",
      steps: [
        {
          type: "multi",
          q: "You have one photo of a cat. Select every transformation that gives you a <b>valid</b> extra training example for a cat-versus-dog classifier.",
          opts: [
            "Horizontal flip",
            "Random crop",
            "Brightness change",
            "Convert to greyscale",
            "Relabel it as a dog",
            "Blur until unrecognisable",
          ],
          correct: [0, 1, 2, 3],
          why: "<b>The rule is label preservation.</b> A flipped cat is a cat, a cropped cat is a cat, a darker cat is a cat, a grey cat is a cat. Four free training examples from one photograph, at no data-collection cost. He also mentioned PCA on the RGB channels as a principled way to do colour jitter.",
          hintFn: (sel) => {
            if (sel.indexOf(4) !== -1) return "That changes the label, which is the one thing augmentation may never do.";
            if (sel.indexOf(5) !== -1) return "If the cat is no longer recognisable, the label no longer describes the image.";
            return "Four of these leave a cat looking like a cat. Two of them destroy the thing the label refers to.";
          },
        },
        {
          type: "mcq",
          ctx: "Vertical flips worked fine on the cat. You move to a handwritten-digit classifier and apply the same transform.",
          q: "What goes wrong, and what is the general rule?",
          opts: [
            "A flipped 6 is a 9, so the label changed — augmentation is only valid while the label survives",
            "A flipped digit is unreadable, so the example adds noise — augmentation must stay recognisable",
            "Digits are greyscale, so a flip adds no variety — augmentation must change the pixel values",
            "A flipped 8 is still an 8, so the example is a duplicate — augmentation must produce new images",
          ],
          a: 0,
          why: "<b>6 becomes 9.</b> The image is perfectly readable and the label is now wrong, which is worse than noise — you are training the model that a 9 is a 6. He mentioned the 8 case too: it flips to itself, so it is harmless but useless. The transform that was valid for cats is invalid here, which is the whole point.",
          hints: {
            1: "A flipped 6 is entirely readable. That is exactly what makes it dangerous.",
            2: "Flips do change the pixels. The failure is about meaning, not variety.",
            3: "True of 8, and he said so — but a useless example is not the same as a harmful one.",
          },
          defaultHint: "Write a 6 on paper and turn it upside down. What are you looking at?",
        },
        {
          type: "mcq",
          q: "Three more robustness tricks. Which description is right?",
          opts: [
            "Mixup blends two images and their labels — 40% cat and 60% dog, with a matching soft target",
            "Mixup averages two models' predictions at inference, giving an ensemble without the training cost",
            "Cutout removes a layer from the network at random, so later layers cannot depend on any one of them",
            "Stochastic depth erases a rectangle of the input image, so the model cannot answer from one region",
          ],
          a: 0,
          why: "<b>Mixup blends inputs and targets together.</b> The other two were swapped: <i>stochastic depth</i> skips whole layers, and <i>cutout</i> erases a rectangle of the image. Note the scope — cutout and mixup are image-specific, while dropout, weight decay and batch norm apply to any network. The philosophy under all of them is his: break the model on purpose and see whether it still performs.",
          hints: {
            1: "That's an ensemble at inference time. Mixup happens during training, on the data.",
            2: "That description belongs to stochastic depth. Cutout operates on the image.",
            3: "Those two are the right ideas attached to the wrong names. Swap them.",
          },
          defaultHint: "Three techniques, three descriptions, and only one pairing is correct.",
        },
      ],
    },
    // ── e7 ────────────────────────────────────────────────────────────────
    {
      id: "hyper",
      name: "Knobs, and not starting from scratch",
      problem: "Every technique so far added a setting, and nothing has said how to choose any of them. Worse, each evaluation costs a full training run — so the best move is often not to train at all.",
      steps: [
        {
          type: "mcq",
          q: "Which of these is a <b>parameter</b> rather than a hyperparameter?",
          opts: [
            "A convolution filter's weights, which gradient descent updates on every single training step",
            "The dropout probability, which you choose up front and hold fixed for the whole training run",
            "The number of units in a hidden layer, which the architecture fixes before any data arrives",
            "The learning-rate schedule, which is written down before training and followed to the epoch",
          ],
          a: 0,
          why: "<b>Parameters are learned; hyperparameters are chosen.</b> His reading of the word: \"hyper\" means you set it beforehand, and without \"hyper\" means the model learns it. The filter weights change continuously during training; the other three are fixed before it starts.",
          hints: {
            1: "You pick that number before training and it never moves. That makes it a hyperparameter.",
            2: "Architecture is decided in advance. Nothing in training changes how many units a layer has.",
            3: "A schedule is a plan written before the run. Following it is not the same as learning it.",
          },
          defaultHint: "Ask of each one: does gradient descent change this number while training runs?",
        },
        {
          type: "order",
          q: "His recipe for approaching a new training run. Click the steps in order.",
          pieces: [
            "Overfit a tiny sample, to prove the setup can learn anything at all",
            "Find a learning rate that makes the loss actually start falling",
            "Train for a few epochs and read the two curves",
            "Refine the settings based on what the curves showed",
            "Train longer with the configuration that worked",
          ],
          posHints: [
            "Before tuning anything, check the pipeline is not simply broken. The cheapest possible test comes first.",
            "The setup works. Now you need the one hyperparameter that decides whether the loss moves at all.",
            "You have a rate that works. Run it briefly and look at what happened.",
            "You have read the curves. Act on them before committing to a long run.",
            "Everything is settled. Only one thing is left to do.",
          ],
          why: "<b>Prove it can learn, then tune, then commit.</b> The first step is the one people skip: if the network cannot memorise twenty examples, no amount of hyperparameter search will help, and you have saved yourself a long and pointless run. Throughout, the thing you select on is validation performance.",
        },
        {
          type: "mcq",
          q: "Transfer learning reuses a pretrained network. Why do the <b>early</b> layers carry over to a different task?",
          opts: [
            "They learn edges, colours and light — properties of images rather than of any particular task",
            "They hold the smallest share of the parameters, so what they learned is cheap to carry across",
            "They sit closest to the input, so they are retrained first and adapt fastest to the new data",
            "They were trained on more examples, since the earliest layers see every sample in every batch",
          ],
          a: 0,
          why: "<b>Generic early, specific late.</b> An edge is an edge whether the photograph contains a flower, an elephant or a face — so those filters are already right for your task. The later layers compose them into something task-specific, which is the part you retrain. The frozen pretrained part is the <i>backbone</i>.",
          hints: {
            1: "Parameter count has nothing to do with whether knowledge transfers. Ask what the layer learned.",
            2: "In transfer learning the early layers are typically frozen — they are not retrained at all.",
            3: "Every layer sees every sample. That cannot be what distinguishes them.",
          },
          defaultHint: "Think about what a first-layer filter actually detects, and whether that depends on your task.",
        },
        {
          type: "grid",
          q: "The backbone's features were learned on the source data. Click every cell where those <b>features themselves</b> must change — not just the classifier sitting on top of them.",
          rows: ["Little target data", "Lots of target data"],
          cols: ["Similar domain", "Very different domain"],
          target: (r, c) => c === 1,
          onLabel: "must change",
          offLabel: "reusable",
          cellLabel: (r, c, isOn) => (isOn ? "change" : "reuse"),
          cellAria: (r, c, isOn) => `${["Little target data", "Lots of target data"][r]}, ${["similar domain", "very different domain"][c]}: features ${isOn ? "must change" : "are reusable"}`,
          why: "<b>Two axes, two different jobs.</b> Domain distance decides whether the features <i>need</i> to change: similar domain, and the pretrained edges and colours are already right. Data volume decides how much change you can <i>afford</i> without overfitting. That is why little data plus a very different domain is the hard corner — you need a lot of relearning and cannot pay for it, and he said transfer may simply not be worth doing there.",
          hintFn: (e) => {
            if (e.count >= 2) return "Only one of the two axes decides whether the <i>features</i> are still appropriate. Which one is about what the images look like?";
            return "Check the column, not the row. Having more data does not make a frozen backbone any less suitable.";
          },
        },
      ],
    },
    // ── e8 ────────────────────────────────────────────────────────────────
    {
      id: "peft",
      name: "Adapting a model you can't afford to train",
      problem: "Transfer learning assumed you could retrain some layers. For a frontier language model you cannot retrain any of them — a training run costs tens of millions of dollars.",
      steps: [
        {
          type: "mcq",
          ctx: "Two ways to adapt a language model to a new task. <b>In-context learning</b> puts examples in the prompt. <b>Fine-tuning</b> runs the ordinary supervised loop and updates the weights.",
          q: "Which wins, and what limits the other?",
          opts: [
            "Fine-tuning, by a wide margin — the prompt can only hold so much, and that caps what examples teach",
            "In-context learning, by a wide margin — attention adapts faster than gradient descent ever could",
            "They match closely, so the choice comes down to whether you have the compute to fine-tune at all",
            "Fine-tuning, but only above a certain model size — below it, in-context learning is reliably better",
          ],
          a: 0,
          why: "<b>Fine-tuning, across datasets and model sizes.</b> In-context learning changes nothing about the weights — the examples sit in the context window and influence attention, and that is the whole mechanism. The bottleneck is capacity: GPT-3 held 2,048 tokens, against roughly a million today. His takeaway: in-context learning is good for conversation, not for serious prediction.",
          hints: {
            1: "He showed the opposite, on several datasets. Attention over a few examples is not training.",
            2: "The gap was large and consistent in what he showed, not a close call.",
            3: "He said fine-tuning usually wins across model sizes, not above some threshold.",
          },
          defaultHint: "One of them actually changes the weights. How much can the other one fit in a prompt?",
        },
        {
          type: "mcq",
          q: "Three parameter-efficient approaches. Which description matches its name?",
          opts: [
            "Adapters insert a small feedforward module with one hidden layer inside the transformer blocks",
            "Adapters replace the final output layer, swapping text generation for a classification head",
            "Subset fine-tuning adds a low-rank correction to the weight matrices already in the model",
            "Subset fine-tuning trains every layer, but at a reduced numerical precision to save memory",
          ],
          a: 0,
          why: "<b>Adapters insert; they don't replace.</b> A small feedforward network with one hidden layer plus a residual, dropped into transformer blocks at roughly 0.5–8% of total parameters, with everything original frozen. Option two describes <i>subset</i> fine-tuning — his example was Microsoft's Decision-1, built from Alibaba's open-source 3.5 model — and option three describes LoRA.",
          hints: {
            1: "That is subset or new-head fine-tuning. Adapters leave the existing layers where they are.",
            2: "That one is LoRA. Subset fine-tuning does not touch the weight matrices at all.",
            3: "Reduced precision is quantization, which is a different technique for a different problem.",
          },
          defaultHint: "One approach adds something new, one replaces the end, one modifies existing weights.",
        },
        {
          type: "numeric",
          ctx: "LoRA freezes W and learns the update as <b>ΔW = B · A</b>. Take his example: W is <b>8 × 6</b>, so full fine-tuning would update <b>48</b> elements. At rank r = 2, B is 8×2 and A is 2×6 — <b>28</b> trainable elements.",
          q: "Now set the rank to r = 1. How many elements are trainable?",
          answer: 14,
          why: "<b>8×1 + 1×6 = 8 + 6 = 14</b>, against 48 for the full matrix. The rank r is the knob: larger r means more trainable parameters and more freedom to adapt, smaller r means a more restricted change. At realistic scale, a 1000 × 2000 matrix keeps both dimensions while r might be 100, and the saving is enormous.",
          hint: "B has 8 rows and r columns; A has r rows and 6 columns. Add the two counts at r = 1.",
        },
        {
          type: "mcq",
          q: "Why is throwing away that much of the update space allowed to work?",
          opts: [
            "Intrinsic dimensionality — the adaptation lives in a far smaller subspace than the parameter count",
            "The discarded directions are mostly zero already, so the low-rank product reproduces ΔW exactly",
            "Gradient descent only ever updates a few parameters per step, so most of ΔW was never going to move",
            "The frozen W absorbs the difference during inference, since W and B·A are added rather than replaced",
          ],
          a: 0,
          why: "<b>The parameter count is not the number of degrees of freedom.</b> His MNIST evidence: performance saturates as you add representation dimensions, so 200 can match 1,000. Dropout is the intuition pump — delete half a network at random and it still works, which means heavy redundancy. Mixture of experts makes the same point: only a fraction activates for any one output.",
          hints: {
            1: "The reconstruction is approximate, not exact. A rank-2 product cannot reproduce an arbitrary matrix.",
            2: "Gradient descent updates every parameter every step. Sparsity of updates is not the argument.",
            3: "The addition is how it is applied, not why a small B and A are sufficient.",
          },
          defaultHint: "He gave the concept a name, and dropout's success is the evidence for it.",
        },
      ],
    },
    // ── e9 ────────────────────────────────────────────────────────────────
    {
      id: "boss",
      name: "Boss round: every fix, and the flaw it fixes",
      problem: "Six questions. Each names a technique from this lecture; you name the problem it exists to solve. This is the shape the midterm's multiple choice takes.",
      steps: [
        {
          type: "mcq",
          q: "<b>Momentum</b> exists to fix which problem?",
          opts: [
            "A zero gradient at a saddle point halting the update, and the waste of an oscillating path",
            "A learning rate too large, which momentum corrects by shrinking the step whenever loss rises",
            "Weights that grow without bound, which the accumulated velocity pulls back toward the origin",
            "Validation loss climbing while training loss falls, which the velocity term smooths away",
          ],
          a: 0,
          why: "<b>Stuck gradients and wasted motion.</b> At a saddle point the current gradient is zero but the velocity is not, so you carry through. In a zigzag the oscillating component alternates sign and cancels in the running mean while the consistent component accumulates. Both come free from the same one piece of state.",
          hints: {
            1: "That is learning-rate scheduling. Momentum never looks at the loss value at all.",
            2: "Weight magnitude is what a penalty term controls. Momentum has no opinion about it.",
            3: "That is overfitting, which momentum does nothing about. Momentum is an optimization fix.",
          },
          defaultHint: "Two of the three SGD failures from level one. Which two?",
        },
        {
          type: "mcq",
          q: "<b>Early stopping</b> exists to fix which problem?",
          opts: [
            "Validation loss turning upward while training loss keeps falling, past the divergence point",
            "Training runs that cost more compute than the available budget allows you to spend on them",
            "A learning rate so small that the remaining epochs would not have improved anything anyway",
            "Gradients that vanish in the later epochs, leaving the early layers with no signal to learn from",
          ],
          a: 0,
          why: "<b>Overfitting, caught in the act.</b> Training loss falls by construction, so it cannot tell you when to stop. The validation minimum can. Everything after it is a model that performs worse on data it has not seen — and it costs nothing to simply not use those epochs.",
          hints: {
            1: "Saving compute is a side benefit. The reason to stop is what happens to generalisation.",
            2: "A tiny learning rate is a separate failure, and stopping early would not improve it.",
            3: "Vanishing gradients are an architecture problem, and they do not arrive partway through a run.",
          },
          defaultHint: "What were the two curves doing at the point where he said to stop?",
        },
        {
          type: "mcq",
          q: "<b>Dropout's test-time scaling</b> exists to fix which problem?",
          opts: [
            "Test activations being larger than training's, because the full network is switched on",
            "Random masks making the test prediction non-deterministic, which scaling averages out",
            "Dropped units keeping stale weights, which the scaling factor corrects before inference",
            "The loss being computed on fewer units in training, which biases the gradient estimate",
          ],
          a: 0,
          why: "<b>A scale mismatch between training and inference.</b> With keep probability p, a unit saw roughly a fraction p of its input during training. At test everything is on, so it suddenly receives about 1/p times as much. Multiply by p at test, or divide by p during training — one or the other, never both.",
          hints: {
            1: "Nothing is dropped at test time, so there is no randomness left to average.",
            2: "No weights are stale. All of them are updated throughout, mask or no mask.",
            3: "The gradient is fine. The problem appears later, when you stop dropping.",
          },
          defaultHint: "Training ran on part of the network, and test runs on all of it. What changed?",
        },
        {
          type: "mcq",
          q: "<b>Data augmentation</b> exists to fix which problem?",
          opts: [
            "Too little training data, which you expand with label-preserving transforms of what you have",
            "Classes appearing at very unequal frequencies, which transforms rebalance toward the rare ones",
            "Images arriving at inconsistent sizes, which cropping and resizing bring to a common shape",
            "Features on very different numeric scales, which colour and brightness changes even out",
          ],
          a: 0,
          why: "<b>Not enough data.</b> Ten images cannot train a strong classifier, and more data makes training easier and the result more robust. Augmentation manufactures examples from what you already hold — at no collection cost — so long as the transformation leaves the label intact.",
          hints: {
            1: "Augmentation can help with imbalance, but it is not what he presented it as fixing.",
            2: "Resizing is preprocessing, which he covered under data preparation in the previous lecture.",
            3: "Feature scaling is normalisation. Augmentation creates examples rather than rescaling them.",
          },
          defaultHint: "What did he say you cannot do with ten pictures?",
        },
        {
          type: "mcq",
          q: "<b>Transfer learning</b> exists to fix which problem?",
          opts: [
            "The cost of learning generic features again for every new task, when they already transfer",
            "Pretrained models being too large to deploy, which freezing most of the layers shrinks down",
            "Source and target data being drawn from different distributions, which pretraining aligns",
            "The shortage of validation data, since a pretrained model needs far less of it to select on",
          ],
          a: 0,
          why: "<b>Relearning what you already have.</b> Early layers learn edges, colours and light — properties of images, not of your task — so retraining them from scratch for every new problem is waste. His analogy: nobody makes you retake elementary arithmetic when you arrive at university.",
          hints: {
            1: "Freezing layers does not make a model smaller — the weights are all still there at inference.",
            2: "A distribution gap makes transfer <i>harder</i>. It is the obstacle, not the thing being fixed.",
            3: "Validation requirements are unchanged. You still select on held-out target data.",
          },
          defaultHint: "What part of training does a pretrained backbone let you skip entirely?",
        },
        {
          type: "mcq",
          q: "<b>LoRA</b> exists to fix which problem?",
          opts: [
            "Full fine-tuning needing as many trainable parameters as the model has, which nobody can afford",
            "Pretrained weights drifting away from their original values, which the low-rank form constrains",
            "Inference latency on very large models, which the factorised matrices reduce at serving time",
            "Catastrophic forgetting of the pretraining task, which freezing W and adding B·A prevents outright",
          ],
          a: 0,
          why: "<b>You cannot train what you cannot afford.</b> ΔW has to match W's shape, so learning it directly costs exactly as much as training the model. LoRA factorises it into B·A with a small inner rank and trains only those — justified by intrinsic dimensionality, since the adaptation lives in a much smaller subspace than the parameter count suggests.<br><br>And note the degenerate case he flagged: push r high enough that B plus A match W's parameter count, and the method has no purpose left — you may as well fine-tune W directly.",
          hints: {
            1: "Constraining drift is a side effect. The motivation he gave was cost, stated plainly.",
            2: "At inference you compute W + B·A, which is the same size as W. Nothing gets faster.",
            3: "Freezing W does help with forgetting, but the reason he gave for LoRA was affordability.",
          },
          defaultHint: "How big is ΔW if you learn it directly, and what does that cost?",
        },
      ],
    },
  ],
};

export default function Lecture7_RegularizationTransfer({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>OCT 12 · LECTURE 7</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Optimization, Regularization & Transfer Learning</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Momentum and the adaptive optimizers, learning-rate schedules, reading the training and validation curves, early stopping, weight penalties, dropout and its test-time scaling, data augmentation, hyperparameter search, transfer learning, and parameter-efficient fine-tuning of large language models — adapters and LoRA.
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
        {tab === "game" && <LectureGame lectureId="lecture7" game={GAME} />}
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
          lectureTitle="Optimization, Regularization & Transfer Learning"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
