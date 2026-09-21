import { useState } from "react";
import TutorChat from "../TutorChat";

// Unit 1 — Foundations accent (tidepool teal), matching App.js LECTURES entry
const COLOR = "#2fd6ac";
const ACCENT = "#7ee9cf";
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
There's no special occasion for today. The only thing that maintenance couldn't fix it.

So unless you want to come back tomorrow morning, you won't see a better light than tonight.

But I think it's okay. We have this light background for the for the slides, so I think we're okay.

Welcome to the first week of the lecture. However, you only see me once.

Until this moment. It's weird because, you know, there's a there's a Labor Day.

There was another meeting I need to go two weeks ago.

But anyway, now we're here, and you already passed your ad and job deadlines, so you are logged here.

Um, but if you're new to this course, I want to first go through a few quick domains so that you know what's going on.

Uh, the major platform we're using for this course is Piazza, so that you will see almost everything you want to say.

If you are not in the PLC yet, just let me know. Or just sorry, I'm not.

Even if you're not in the PS, I just feel free to just come here or you know,

another thing that actually people are asking for, if we really have the, you know,

computing resources for your lecture, for your course projects, and we do have this uh, USD card,

so-called advanced or whatever computing facility, and I can add you to the, to the computation.

It's actually something like this. You need to First of all, you need to log into your USAA account and add your.

Sorry. Uh. And open that project.

Uh, zap zap Google sheet, and. Sorry.

It's still loading. Okay. Uh, you will see the carcasses here, and you can just feel free to put your name if you if you need access.

Uh, it's the same thing as your project list, so it's all the same spreadsheet.

Um. What else? Another thing that people are asking questions around the grid scope.

You need to submit your proposal as a group rather than individuals.

And, uh, if you don't know how to do the link, it's a good time to ask ChatGPT.

Uh, and also, if you really don't know how to do that, just post on that.

We're going to help you for that. Uh, originally the deadline will be tonight, right?

September 15th. 14th. However, for the project.

For the teams who haven't got a chance to affirm that, you can actually come to chat with us and the deadline will be the later this week.

And actually, for the people who haven't actually formed the team by this moment.

You are feel free to stop by during the break. And you know, we can just make the team immediately here.

It's a bit random, but I think that's good because, you know, randomness gave you great chances.

Um, okay. That's the two things we want to mention.

Uh, if you're just new to the course open, go to the grid scope and check check out the blocks one two.

And yes, the important part will be joining a project team.

That's really important because, you know, during the genetic time, we don't really know.

We don't. It's not like we don't really know.

It's a there's no perfect way to test the people's capacity for for the understanding the homework is no longer working as as as as usual.

So project becomes important because this will be an open, open ended project you can do.

And people ask me what type of the topics where that will be fine.

Actually, you can do open research.

You can build a benchmark, you can write an open source tool, and you can even just try the some big, big, big experiments to understand something.

It's very open and we hope that you can at least try something out, especially the agents and the large language models through the process.

And of course, this doesn't mean just like ask an agent to write a proposal for you directly.

That's that's the purpose. Other things I think you already know.

Here we have this lecture in person. And another thing that people to everyone know how to actually find a lecture recording.

Right. It's actually on bright Space. You just click.

And if you don't know how to do it as codecs and use the computer use it will just click, click, click and open the recording for you.

Uh, yeah. Actually, actually, this is something really you should try.

Uh, not necessarily. Not necessarily a codex.

You can you can try whatever agent which can do the computer use.

So, uh, so it can do a lot of things for you. For example, uh, today, earlier today.

Uh, earlier today, um, maybe it's not this computer.

Earlier today, I used a codex to help me to debug why I couldn't open the Firefox on this, on this machine.

And it's successfully helped me to figure it out.

So you really should try the computer use of any agent framework, whatever is the Codex cloud or anti-gravity?

Uh, or.

I don't know about the grog habits, but anyway, you have the office hours and or, uh, I think it's mostly online because we have a done session.

However, we have this in-person office hour as well. Um.

Forget about this. It's, uh, it's something, uh, I put earlier.

However, we're not going to really honor it because we're still thinking whether we should have quiz or how to have the quiz.

So, uh, don't worry about the quiz. Uh, projects again, 4 to 6 people.

Seven is fine for the only for some extreme cases, we can have fewer people.

Um, the proposal is due today, and, uh.

Right. Again, like, if you really don't have a don't have a team yet, just come to the come to the, come to the front.

Come to the come to come to here so that we can form a team directly during the break.

Um, so some quick, uh, you know, checkpoints for the next few weeks.

So today we're going to talk about general neural networks and some optimization and some of the large language models.

And the for the next two weeks, we're going to talk about, uh, Backpropagation, convolutional neural networks,

etc. etc. and for next week we will have an Nvidia person coming and coming in person.

He was he was actually, uh, I think he was uh, he graduated from, from the, from one of this program,

potentially the CS master program, so he can share a lot of things to, uh, how he got a job and how he works.

And the idea.

Um, okay, now we can come to the real technical details, but before we actually jump in, any questions for the logistic and admin or whatever?

Okay. I think we're good. Uh, so in the first lecture, in the first of two lectures, we really talk about machine learning.

It's just like learning the approximation from x to y and through the function in the middle.

And uh, however, however, things change pretty fast.

I mean, this is what we know before, which means for for different applications.

We're trying to learn different this f of x which means okay, we want to for example stock price prediction.

We learned f. For another thing we learn f. However however, in 2026 it's time for the foundation models and agent.

You can say many of these different F functions. Actually they condense to a single large language model foundation models.

So which means now we have a single F of X to, you know, to, to to solve a lot of different things.

However, I think recently a derail and some ultimate they are just posting and including including

Elon Musk are posting are saying they should really slow down the AI research.

I don't know what that means, but but but but yeah, I don't really know what that means.

However, maybe they're saying some credit future or they're just short of money.

I don't know, but, uh, but but now, as you can say, other than training a lot of different models.

Now in 2026, we're trying to train one single big model to solve a lot of things.

However, it's not perfect, it's still evolving, but we're not going to try to do this immediately.

We now first want to take a look saying how we can build a specialized function for a specific idea for a specific application.

So we actually look into this f of x so that we can say how to build a small weighted nonlinear function.

Again, in the past we're saying, you know, your machine learning model can do object detection,

can do other language translation whatever or whatever.

But by the end of the day, just like x to Y, it's just simply a prediction.

And uh, uh, and and and as you can say in mathematical terms, there might be a one single perfect solution for this mapping.

So f of x have a deterministic format which which will be golden.

However, by no means you can really find it, or unless you are really, really lucky.

So with that in mind, we just want to approximated function, which means it's good enough.

It doesn't need to be exactly f of stars. So that will be.

So that will be the goal. And I think this lecture today we're going to see how we can really do this learning or optimization process to using.

So so so so so what actually is that you can say f star f of x.

This is actually the the golden the objective we're trying to learn. But now we're just trying to learn its approximation.

And deep learning is a way to be used for this approximation.

If you remember what we are discussing, the block one. What's the what's fancy about deep learning?

That is something called a universal approximation theory, which means if the deep learning model is large enough, actually it's wide enough.

It can approximate any functions in the world. So so that's why it can be a good way to do it.

However, it's theoretical, which means you can never really have an extremely large and large and large, you know, deep neural networks.

However, ten years ago when we learned about deep learning, what do we actually place about it is, first of all, it's a non-linear.

We're going to say what's nonlinear and what's important, and then it's hierarchical, just like a human beings.

And finally it's end to end learning. We're going to talk about these terminologies in details later, but just bear with me.

Um, so yeah, so so so so so so so because last blog we talk about some classical machine learning models.

If you remember we talk about decision trees and clustering and k nearest neighbors.

So what's different really different from deep learning from these classical models will be the automated feature extraction.

So what's feature extraction?

Uh, back in ten years when I was working in industry, when we have a machine learning problem, the question is never okay.

Build a model. It's actually the first question will be how many?

How many data do you have and which feature do you have? And by that time, we're rooting to prepare the feature by ourselves.

And by that time you are not really working with the scientist.

Actually, you are working with HR people. You're working with the financial people.

So they don't they don't speak the same language. So they are going to ask you what's a feature and this type of thing.

However, in deep learning time, what we really rely on will be the machine learning model,

which means deep learning model will handle the feature extraction and do the class classification or prediction or whatever you want.

So that just means you just throw whatever the feature you have and the data you have,

and the machine learning model will automatically handle it for you.

So this is the so this is a so this is a good thing I think I think this actually really led me to a new saying.

I think anthropic their purchasing. They're using proxy name to purchase some rare books from the from eBay and some other places,

and then they're actually trying to scan all the book in so that they can use this data to train their machine learning model.

So so so so now and, and and one thing I think for the for the, for the,

for the common grok model, what Elon Musk actually saying that they're pretty they have they're,

they're, they're having specialized data on aerospace because actually they're using aerospace data to train the model as well.

So as you can say nowadays we don't really care what type of data you have.

It can be books, rare books like how to make a, you know, a, you know, an apple pie.

This is our these are all good. They can use whatever data they want.

So this is very different from the classical machine learning which you really need to handle your features by hand.

So this is a good improvement for the deep learning. And then for the large language models.

And as a quick recap we talk about when you're trying to learn this approximate function f from x to y.

You have this loss function. You have the optimization. The goal will be to use the optimization functions to to optimize the loss function,

so that it can achieve the smallest loss, so that you can have the best f of x and w.

So that was what we talked about in the first two blocks. And we also talked about how to find a.

We give a very very simple example if you remember how to how to actually find a weight matrices optimal weight matrices.

By minimizing the loss function you can do random search,

which means you just randomly try some weight matrix and trying to say which one is the smallest weight loss.

And you can do the analytical solution, which means directly compute the the solution.

If you remember that x transpose x, transpose X, or whatever, if you remember that linear algebra thing,

they have A, they have a deterministic solution for the for the linear regression for the simple model.

But finally, once we realize what will work well will be the numerical approach using the gradient descent.

And we're going to talk about today again. Um, I think I will fly through some of this recap.

Uh, again, many of the deep learning things are motivated by the human brains, right?

Uh, for example, people are talking about neurons are just like, for example, the single neurons are just like biological neurons.

However, these are just good motivations, and the actual relationships are pretty weak.

Because I talked with the biologist, they told me that's nonsense.

Um, I told them it's great we're learning from human, but they're saying, no, you're not.

But what really can be the analogy will be this is a biological neuron.

And in certain abstraction you can think, okay, they also take the inputs, uh, you know, some excitement from outside.

And they actually do this actually impulse and get output just like.

Or just like x and y. And this is a, you know, the function in the middle.

We try to learn. And if you actually combine a lot of like biological neurons, you have this,

you know, human or biological neuron map and not just like a deep neural networks.

So what we're really learning is also from a single neuron in deep neural networks to a lot of like connected neurons,

so that we can achieve something fancy. These are all still the quick recap because I know it has been too.

It has been too long from our previous lecture, and I doubt how many people are actually saying the blog two online.

Uh, you don't need to raise your hand. I trust you are, but it's not important at all.

But because when I was a student, I never really looked at any recording before the midterm or the final exams.

So for the for the midterms, what I, what what our plan will be doing a review and having some major points that you

don't need to go through everything because that will be a lot of material.

And many of the things will be researching the course materials so that you don't need to really review them.

Um, so, so so we talk about this image classification using the linear classifier.

Sorry. We talk about this image classification using the linear linear model.

If you recall that f equal to w x plus b and we try to use some we use some way to really learn the the weight matrices.

So that's what's actually covered in the first first section. And so so now we're actually extending this to a larger networks.

So what's actually a neural network. In simple terms. It's just like a set of the neurons connected in a non-linear way.

The the question will be why we're going. Why should we actually connect neurons or why should we connect them in a non-linear way.

Of course it's a steal. People are saying this is a motivation motivated by the biological neurons.

However, the question can be can be different.

And before we really look into that, you can say we are going to cover a lot of different types of the neural networks.

For example, convolutional neural networks for image and vision and the deep neural networks for general purpose.

And we also have something like recurrent neural networks, which for time sequential data transformers for sequential data as well.

And in short, people are saying what's the deep neural networks or deep learning?

Actually, it's I think it's more about abstraction. In the past, people are saying 1 or 2 layers will be good enough.

However, now we are saying the deep neural networks or the large language models,

there are thousands of layers or hundreds of layers are billions of parameters.

It's totally different. I mean, what were what? I think when I first, uh.

By the time when I first learned deep neural network. That's, uh, roughly ten years ago when I was an undergraduate student.

And by that time, there's no course called deep learning. And, of course, I had it's called intelligent Systems.

I don't even know what that even mean, but I just choose it because I need to graduate.

And I maybe that's also the reason you're here, but it's good that hopefully you can graduate soon.

Um, also also people are praising that Viterbi are doing the good things for the CPT and other things which are very good,

uh, which are very good, you know, attempt in comparison to other peer institutes.

Anyway, back to ten years, what I learned about deep neural network.

We're just learning two layers of the deep neural networks. And that's what that's what's called deep learning by that time.

However now the term is totally different.

So that's why since change is so fast and we're adding more, uh, We're adding more a large language model into this.

You will see that in 5 to 10 minutes, so that you don't feel that you're learning something from ten years ago.

As you can see, most of the deep neural network illustrations look like this, which means very symmetric.

However, in real world you can do whatever type of the deep neural network as you can see.

But this is also misleading because if you simply if you simply drag down this middle part down, so it will still be symmetric.

But what I really say is that you don't need to. So this is so, so so what we usually refer to will be a fully connected deep neural network,

which means you can say each of the each of the neurons are connected to each other.

So which means they're fully connected. However in many of the cases they don't need to connect to each other.

You can break anything.

You can break any connections in the middle or an earlier time, like there's something fancy called automated machine learning.

They're trying to learn how to reduce the deep neural network to a smaller form so that you can,

you know, reduce, improve the efficiency and reduce the cost.

I think we're going to cover some of this in the very later part of the lecture.

Not today. Um, so for the, for the for the general deep neural network, there are two major parts or the two major passes.

The first pass will be the foreword and the second will be the back.

So we're going to first look at what's a forward propagation. So.

So so so so basically if you remember what we're trying to learn is from x to y in the middle

whatever in the middle the representation is just like a f of x which means it doesn't matter.

So it can be any form. Finally, what we really want to know is how to convert or transform your input as input x to the output of y.

So that's all we want. So however in the middle we really need to do the computation.

Which means that's the color for the propagation of the deep neural networks and how that look like.

So it's actually sequential and by steps so so.

So let's say you first calculate input x with the first neuron and calculate the f of x results.

Recall each of the neuron contains some of the weights. So for example this doesn't mean just one number.

It can contain multiple numbers maybe. Let's say in this case that'll be straight right.

So your first number will you will first go through this first neuron and calculate the corresponding f of x and w.

I mean w will be the weight matrices of this first neuron.

And you are also doing that for the second one you're also doing for the third one.

And then and then what happens will be you can say the output for the first one, second one and the third one will be the three new inputs.

And then they will go to the next layer of the neurons. So let's say the layer of G you get you have this G1 and g2, g3, g4.

It's all the same, which means you're you're applying some like matrix calculation, applying some nonlinear transformations.

Get an output and go into the next layer. So basically the last layer's last layer's output will be the input of the next layer of the neuron.

After you're doing some transformation or calculation it's very straightforward.

So the so the forward. So the forward pass will just like going like this.

And finally you do all this calculation and you get your outputs of the Y function.

It's still very abstract. And but however. However however this this is sequential.

This is a sequential process are still mostly relevant.

And even for even for large language models. We're not going to talk about the large language model at this moment yet.

However, I just want to quickly show some realistic examples.

How this why this affordable for how this.

How this things are actually looking like where how the large models are doing the computation nowadays.

For example, if we are trying to make a prediction, the light is something.

So we're just so so so your your input data will be x.

So the x will be these three tokens. The light the light is.

And what's actually happening in the large function model is that they got their corresponding so-called token ID.

We're not going to dive into the details however. Just want to give a quick highlight.

We're trying to waving the large model knowledge into this small pieces.

So you're not going to see everything in 1 in 1 shot. But you got a bit more, uh, impression by different lectures.

Uh, so what happens is that first of all, these are three tokens we are given.

So these are our acts. And we want to predict the next token.

So what's really happening in large models that they're not directly.

If you recall, in the first, even in the first lecture,

we are saying the prediction will be predicting the next token based on the last or last few tokens.

So basically you are going to predict the next one based on the light hits, and then you're predicting the next one.

So within the last two models they have this so-called pre-filled pre-filled process.

So which means these are the given tokens.

And you are going to first preview them in a generating their corresponding something called a QV or something.

You may heard of this somewhere called CVI cache. Uh, it sounds strange to you.

It's all good because we're now going to cover this today.

However, all you want to know is that for the large language models, what happens is that giving a sequence,

you first convert them to some representation through embeddings, mostly called k, k and v.

And then you try to you're going to use this a key and way to predict the next token.

But but but to speed things up what people are usually doing that for the first three tokens you

get their corresponding ki and V and you save them as a cache and you predict the next token.

For example, the light is red and then this is the this is the predicted.

And then when you have the when you have this new token, you get the corresponding key and v again.

So what you're really saving is now that the light is red. So so your training data is no longer the light is red.

What you're really saving is actually this a key one k2 k three and k four and corresponding v1, v2, v3 and v4.

And then you fit. You fit this a k4 and v4 back to the transformer and you can predict the next token.

So which means the next prediction is not based on the light is red.

The next token prediction is based on the k1 to k1 to k4 and V1 to wait for, and you use the save the cash for the next token production.

So so so so so the reason we're so the reason we're saying that is that is that so in the in the large language models,

the important part will be this. One of the important part will be this for the propagation.

Because during the forward propagation you are going to calculate some intermediate results and embeddings and cash.

Uh, so, so just taking the taking the large function model transformer as an example in the,

in the in the forward path, you are going to convert this raw token,

which means the natural language into some corresponding cash so that you save them for the next prediction pretty fast.

So uh, so so in real world you are not going to use a slide is so, so when you are interacting with the ChatGPT, the calculation is not saying okay,

first, the first computation is the light is then predict the next one and then predict the next one and the next one.

So they're actually working on the cache, and they just keep updating their quick cash and embeddings so that it can be fast.

I mean, quick cash is much larger than this raw token.

However, they are much faster for computation. So when you're in the forward pass, you're going to do a lot of computation on the embeddings.

And you're saving something important and as cash so that you can speed up the later computation, computation and prediction.

Uh, so so so that's why the forward pass is important.

Because during the forward pass we are going to save a lot of intermediate results.

We're just using the transformer as an example to show you that this cash can

be very useful when you are doing the backpropagation or in other predictions.

And again, you should always remember that the current learning models are autoregressive models.

Most of them are autoregressive models,

which means you need to generate the next token based on the previous tokens and the next token based on the previous tokens.

So that's why you see the token appear like a token by token or sentence by sentence.

So they're not like doing a parallel distributed computation because people are you may be asking you may be asking these

questions during the interview for how the large language models are working in general and what's autoregressive models.

Um, okay. We're going to talk about the, the, the deep neural network data shapes as well.

Uh, in the past, we actually tested people in a midterm for the, for for this, uh, for these numbers,

because it's straightforward and because actually, this tortured me when I was a student.

And so I inherited this, uh, torture and spread hate, uh, around the, around the course.

But it's but it's actually pretty simple. It's helped you to understand what's a deep neural network.

So recall, this is your ex. Whatever. It's an image or whatever.

It's a, you know, text sequence or whatever they are. This is your ex data and you have a lot of neurons.

Let's say your input feature will be 700 784. So I think that's 26.

I think that's a 28 by 28. If it's a it's 28 by 28 pixel image it's very small.

However if you flatten this matrix and that'll be 784 features, let's assume that we have 128 neurons,

which means that will be our first layer of the first layer of the deep neural network.

And for each of the neurons, you'll get a weight matrices. Right. So so so basically so so so basically if you if you consider all the weight,

if you consider the first layer as a big or huge weight matrices, then you have the first layer weights will be seven.

The dimension will be 784 times 128.

The reason is very straightforward because when you have one sample comes as as the x,

you do the dot product matrix matrix product matrix Multiplication with the weight matrices.

Finally you get. One times one 128, which means you get one value from each of this neuron.

And then that will be the inputs for the next layer of the neuron.

And straightforward and very straightforward. Since the input here will be 128.

And you also get 128 neurons in the second layer.

So which means your weight matrices for the second layer will just be your

weight matrix is W2 for the second layer will just simply be 128 by ten by 128.

It's a it's a it's a, it's a it's a very straightforward calculation. Yes.

Like linear projections inside of the hidden layer would have like count or would you just be multiplying the amount of fully connected.

Uh, what's your. I'm sorry I didn't fully got it.

You had like linear. It's actually like projecting like the Mhm.

With the maps. Uh. Of course. No, we're just assuming the same place, the fully connected, connected, uh, situation.

So that would be the same place. Uh, trust me, the midterm will be very straightforward and there's no tricky questions.

Yes. Good question. Sure.

In terms of the large language, models are building these, uh, you know, the attention they're taking, they're adding these weights to each token.

Right. Um, could you elaborate further how this is, how it's connected in terms of the hardest layer on the learner?

Because isn't isn't the harness, uh, layer around the LM is what gives them more reasoning and sort of calculation to the this process of the LM.

Oh, sure. Um, so so you talk about the harness layer or the harness engineering.

Uh, I don't have this in the, in the slides, but I can quickly speak a few things about it so as you can say, back in 2023, 2023.

Right. Yeah. 2023. That's when we're using ChatGPT over interacting with its web browser.

Right. Like you're typing something. You get some response and that's all we got.

So that's what how we're interacting with the larger models.

However, things change very fast in the by the end of the 2025 and early beginning of the 2026.

Because now. Because if you remember the not the ChatGPT, they didn't first release a generic application.

What they're releasing is that something called a generic mode. I don't know how many people remember that.

So basically in the web browser you can choose something called agent.

Before that you can. Before that, you only have the you can choose the model and the effort.

You can also choose the deep research, but I don't remember the exact time.

But they add something called the agent agent button in that web browser.

So then actually sending the agent out to do something for you.

Because by the time I try to work with some trading data.

So I use the agent agent mode to help me to do some crazy calculation for for buying the stock.

But it's not working for me. But that's still prehistoric.

But what really changes this year will be actually released to the full Atlantic workflow.

So which means how to actually make the make the how to actually make a few different agents work for you and controlled by you.

It sounds very easy, but it's not as easy as you're thinking. For example, when you are working with your team members in the project, right?

Like even there's only three people. You will see how challenge to communicate with each other and deliver a project, even a proposal.

Similarly, for the agent, it's the same. So the harness is actually something.

I think the name is straightforward. The harness engineering or the harness layer is a way to control how the agents are interacting with each other.

smartly and systematically. So it's not so it's not something like a neuron or so most of the time it's not learnable.

So by the earlier time it's called prompt engineering, which means you give you give instructions.

For example the earlier harness will be something like that.

I'm writing a I'm writing a prompt saying, okay, I want you to initialize the three agents.

One agent A is for planning everything or designing everything.

Agent agent B will be searching the data on the agents. Three will be a coding agent, so the A should control B and say to do deliver whatever work.

So basically the earlier time the harness will be,

the users will actually write something by themselves to direct the different sub agents to do some work.

And then by the later time, I mean answer paper opening is actually designed to harness for you.

When you when they got a job, when they got the job or the ask from you,

they're going to decompose this into a loops and something usually the most popular genetic framework by the time is called a react,

which means, uh, I think that's, uh, they have a planning agent.

They have an action agent. They have a I think they have also got an action.

I don't remember exactly, but they're just doing things in loop.

And later time people are thinking, uh, so so basically the harness engineering or the harness layers are something to control.

The agents are doing, doing things smartly.

Uh, but until this moment, my understanding that it's still controlled by the language and something called a gate,

which means something you can't do, something cannot do.

And it's more like a lot of, like, instructions to control how the agents are working with each other.

Um, and the most recent harness people are doing something called graph engineering.

I'm not sure whether you heard of this before, but you can search on that.

So people are thinking the agents are working with each other like a small graph.

Right. Like a talk with B, B talk with C and C search online and D just using the email.

So they're trying to use the graph representation to optimize how the how the agents are working with each other.

But what we're talking about today is still within each of the agents.

So we're more looking to how the agents are trained to be smart. But the harness will be a separate thing.

But that's a very interesting question to have. And actually, this reminds me of something.

The one thing I hate the most will be drawing figures, and especially in the PowerPoints.

That's something I hate. I hate a lot. And since the you know, since ChatGPT comes out,

I've become a much better writer because I don't write any more by myself, however, and then when agents become immature,

I become even more powerful when writing the proposals for a lot of things, because it can search data online and making something very smart.

But still, there's still one thing I still have to ask my students to help me in the lab.

For example, drawing a figure for the for for for the for the paper.

Uh, that's a that's a that's still pretty hard.

However, with the latest computer use of the code, I mean, ChatGPT six extra, I no longer ask students to draw the figure for me anymore,

because it directly used my computer to open a PDF and draw the figure and draw whatever I want.

A perfectly. So actually I can show you a few examples, which are I.

I recently used my, uh, computer catch bench.

Uh, yeah. This was a. Yeah.

And another thing that you can say. No, I started like writing my single answer papers because I don't need the students to help me to draw anything.

I just draw everything by myself. So I mean, I mean, They can already draw the figures.

It's not a fancy fancy figure, but it actually. So.

So this is drawing PowerPoints. So, so every every single figures in this paper they're joining.

They're joining in using the computer use. So if you're so I told them like whatever things I want and they can actually draw the figure as I need it.

And you will see a I think it's a I'm not saying they're fancy fancy, but they're elegant.

They need a, the they can do whatever asks them to, to work on.

And if as long as I give them the good colors I want and whatever.

So you will see, the reason I mentioned this is because this is how the harness are evolving.

When the AI becoming more and more powerful, the thing you need to do become less and less.

So you don't need to. You potentially don't need to learn a lot of things, and you just need to wait until the moment that AI will solve it.

If sounds a bit pessimistic, however. It's not because I'm happy now.

I feel I'm empowered. I no longer need to beg my students to draw a figure for me.

But it's actually open a question. For example, nowadays how to get a job.

And another question would be nowadays, should I do a PhD?

Like what's even the meaning for that? Like everyone's using AI to write a paper and everyone's reviewing a resume paper by AI.

Then what's the whole meaning for this? So so so another new emerging topic nowadays is called people.

In the past, people are saying I should help help humans to develop things.

But there's another thing called vice versa.

It's becoming popular topic, like how we can design things to help AI to be better, like humans as a facilitator and the helper.

So, for example, the researchers are moving to a fully AI and human for example, should no longer write a paper or even power points.

Right. It's a it's not it's not friendly for AI to rate, which is simply should.

Like right. A lot like a markdown and JSON file.

That's all they need. So, so. So it's a different philosophy.

It's very interesting. Uh, back to the.

And also and another random thing that it just reminds me that people, uh, I think people ask me on social media as well saying,

you know, giving the internship thing, giving the CPD, should they even still looking for a job?

My answer is always the same. Just do it. Just find a job.

Because policy change very fast and the opportunity comes and go, uh, you know,

just you should you should always search for the job and, you know, because maybe other people will will stop doing that.

And when policy change very fast, you will potentially get a job.

They don't. So that's a potentially very good thing to do. Anyway, back to the shapes of the deep neural networks.

Uh uh uh, in the first blog, kind of in the first two blocks we talked about,

your linear linear function will be f equal to w of x, which means, uh, this is your weight matrices.

And you just do the dot product of the weight matrices and your input data x.

And then now we're saying this two layer deep neural networks.

And uh, one thing we want to really highlight will be uh, there's something in the middle called activation function.

So so you will see this the small things. Uh, so these are, these are still the dot product.

However, after the dot product we add something called activation. And we're going to explain why and what's the activation functions.

So basically so basically active activation functions.

It's a it's a magic part to make your deep neural network nonlinear.

So uh, the reason the reason is that the reason is that, uh, the reason that let's take a simplest,

uh, let's take a simplest activation function called the max function.

As an example, I think I have an illustration a few slides back.

Sorry, it's a I think I fly this, I fly, I fly through.

However, I really shouldn't. Oh, here we go. Uh. So so so so so so so if you remember this is your input X and this is a weight matrices W.

And we do the w x plus b. You can you can ignore this.

The bias term which means you can simply think that's a w of x.

And you just do the linear combination here which means w f x.

However in real world you need to add this the activation function or something called a nonlinear part.

The reason is because it's also motivated by the biological neuron.

So for the biological biological neuron, if they accumulate enough signals uh,

over a certain threshold is going to impulse or go, they're going to be the positive.

So which means it's more like a step function here. So.

So so deep neural network. Similarly, if you want to really say okay whether the output.

Let's say this is axis is W and you want to you want to predict it's a 0 or 1,

then potentially one of the potential prediction will be if the if the sum of this is larger than zero.

So this will be one other. Otherwise if it's negative then it's zero.

So you need some. You need something to give the final output.

So that's actually the activation function. We're going to revisit the activation function.

But I'm just trying to quickly mention what's the activation function.

And. Another thing about activation function will be it can be multiple different forms forms.

So so one thing will be the sign of the double x plus b.

Another thing can be a some like a other transformation for example uh whether it's larger than zero.

So actually for actually when you're trying to check the, the sign of the double X plus B,

you are just trying to compare the value of this value with zero.

So if it's larger than zero, so which means this will be one. So the sign is positive.

If it's smaller than zero it's a it's a it's a negative. So this will be zero.

So in other words. So in other words what I'm showing here.

Sorry I'm just trying to fly through. So what I'm showing here is actually your sign function.

So which means you compare uh w1 w1 of x the value of this with zero.

Which one is larger if it's larger than one, I mean, which means it's a max.

So if it's larger than one. So this is, this is, this is you're going to pass by your w1 x.

Otherwise you just keep the zero. Uh, so so so instead of sense this is a non-linear activation.

We will explain why we really need this non-linear activation. So as you can see this is a truly two layer new deep neural network settings.

And you can also do the three three layer. Recall this is your first layer result and you do the nonlinear activation.

And then this is the second layer result you put. You add a nonlinear activation.

And then you do the third layer. So it maps it maps back to something like this.

You do the first layer calculation. You go through the nonlinear activation and then the second layer second.

So so so it's actually so it's actually something like this.

Uh, you know like they have this within relationship.

Then the question will be, uh, why do we need.

First of all, why do we need this, you know, linear structure.

Sorry, but we need this hierarchical structure.

And another reason, another question is that why do we really want this nonlinear nonlinearity in the computation?

Uh, the first question will be when you usually for most of the deep neural networks, you are trying to compress your data.

So which means your input data can be high dimensional space, for example, 3000 or even longer, and after layers and layers and layers.

Usually you are trying to compress your data into smaller and smaller and smaller feature space.

It's very it's very it's very like a human being, which means.

For example, the things you you can say from outside, you get signals are not directly like a picture.

So you first get some like raw pixels and your, your brain, your signal, your,

your eyes will actually turning them into a some like edges small pieces of the regions.

And finally it gets a high level understanding of what the outside look like.

So it's just like human beings, the deep neural networks are also trying to compress the data through through this learning process.

So so in certain sense, I think there's a very famous word saying a compression in Intelligence is about the compression.

So. So basically deep neural networks are also following something like this.

You're trying to compress your data and trying to say what's the core information.

And that's where the intelligence look like.

Uh, and uh and one question people usually have will be, uh, so which means your Taco Bell is ready or it's order your Taco Bell.

So how do I know it? Because I got my Taco Bell around 430.

Uh, yeah. Yeah. I don't like this time anyway.

It's it's it destroys my dinner time.

Uh, however, non-linear functions are still important.

Uh, so you can say for the deep neural networks, the reason we really need a this is this is also.

This is always something we will have during the midterm because it's a very tricky it's a very interesting question.

So what do we really need a nonlinearity in the deep neural networks.

Because think about if you really don't have this nonlinearity in the middle.

So what will happen if you if you really don't have it, let's say.

This is the this is your three layer deep neural network.

If you don't have this. If you don't have this max function which means non-linearity in the middle, let's drop it.

And then this will be reduced to the simple form f equal to w2 times w1 to the times x.

And sorry what's automated. Sorry.

And your three layer deep neural network becomes your three layer deep neural network.

Just like the times not the W3 here. So you will say if you simply do the matrix multiplication w3 equal to w2 times w1.

And finally you have equal to w3 x. So basically you're not doing anything a different than a simple linear transformation.

So everything if there is no nonlinear nonlinearity in the middle your computation will be fully linear,

whatever how large your deep neural network is. It's still the same thing.

Just do the same linear transformation. It couldn't learn the complex word.

So that's why we really need a nonlinearity. Because other words other.

Otherwise everything will be reduced to the simple weight matrices dot product and reduce to a single large matrix.

So that's it. And you end up with your linear classifier again.

However, deep neural networks really need a non-linearity. Here's actually some examples for for for for for for these simple deep neural networks.

I don't think we're going to go through the details.

However, as a good exercise you can potentially do that offline.

So which means we give you the value of x1, x2, h1, h2 and y hat.

I mean our target will be will be two. And you can first calculate the corresponding values and you can calculate the loss functions.

You can just do this at home. I mean we're not going to do this hand by hand.

It's take a bit too much time and you can calculate the gradient and update.

Uh uh yeah. Just do it at home. And now we can spend a bit more time on this, uh, activation functions or.

Which means the non-linear functions.

So which means once you have your, uh, once you compute the output of one of the layers, you'll want to do some non-linear transformations.

And here are a few choices. So the most common choices people are saying is called a sigmoid on the top.

And there's also tangent ReLU leaky ReLU max out and elu.

Uh potentially you can say why is there nonlinear?

Because, uh, you know, the simple linear function is just a straight line and none of them are straight line.

Even for the Akira, lose as a piecewise function, which means on the top right, which means there on the negative part is 0.01 x.

And on the positive side that's x. So which means. So which means you get a nonlinearity in this in this zero point in this 000 points.

And you have other you can design your loss function.

Sorry. You can design your activation functions because different different of them have a different properties.

And the most common the most widely used activation functions is the loop function.

And it's called rectifier. Uh, it's rectifier something I don't recall.

However it's very straightforward. Uh, it's it's simply just like a for the negative part.

It's out there. It stays zero because for example, if you get a x equal to negative one the negative one be plugged in.

And the max of the zero and negative one will be zero. So you will see the negative part is fully turned off.

However, on the on the positive side is always something equal to x.

So that's a ReLU. And we're going to explain why it's a great thing.

Uh, but as a but as a great quick overview, we're going to talk about the properties of the activation functions.

Because at least the five years ago, I mean, the employers are still, uh, enjoy asking people the questions around activation functions.

Uh, however, if you have anyone go through any, uh, machine learning or deep learning interviews in the last few weeks or months?

The reason I ask is because you will say the interviews nowadays are totally different because, uh, because if you see the slides in the past,

we do have something like for example,

we have this important interview questions because in the past we try to prepare students for the deep learning interviews.

But now I realize they no longer ask the questions as were saying before.

I think now the interview questions of the. Of course, you can ask people who come in next week from industry more in depth,

but my understanding now is that the questions are becoming more much more broad.

So first of all, you need to pass at least one round of the online assessment.

So they call the online assessment which means they're going giving you a giving you a website and a link that you're going to do a few questions.

I mean, that's a code based questions. And you still need to know the two some three, some reverse the linked list or whatever.

However, there's a much more extensive ones nowadays. You still need to crack like 2 or 3 questions.

And if you're doing doing well, then you're moving to the next round, which means you're going to chat with at least 2 to 3 engineers.

However, the engineers are not necessarily as clear. The whole question again.

Potentially some of them are going to ask you, but there will be certain ones that are going to ask you, for example,

system design, your understanding of the large language models, how you are going to apply them to your to this specific jobs.

And I know people in the past, they have a smarter ways to do.

I read some crazy news online saying, because it's very easy to use the large machine model to answer for your read.

They do this a real time conversion. For example.

The interviewers are asking questions, then you you have a separate thing to capture their voice and do the real world conversion,

showing the answer on a separate screen. I think people are doing all crazy things and it's working relatively well.

So now the most crazy news is that the interviewers ask interviewees to close their eyes to answer the questions so that to make sure there's.

But it's not. It's not. It's not. It's not. It's not a the solution.

Because, for example, they can have a very small, you know, earbud.

And there's, there's so many ways people can, can do it.

But but but but but but the reason is because now the questions are much more intensive than the broad people.

I think I tried with my, uh, my, my friends from the same lab at Carnegie Mellon.

She graduated, uh, she graduated earlier this year. And she told me that the it's no longer the lead code anymore.

They want they want you to do to to know a lot of things like the system design and the general transformer,

for example, the what's the the the internal knowledge of the transformer. People are being asked a lot nowadays.

I don't know why, but, uh, because you you would never write a transformer in your life, but they ask you.

So. So that's why we mentioned quick cash a bit, but we're going to look into the details later in the lecture.

Not this lecture. I mean the later, which means the week eight or 9 or 10 or something like that.

So, so the breadth of the, the breadth of the knowledge becoming more important nowadays.

And I got a trick like if you really don't know, just bluff with some something learned from watching the models and try to hand with it.

And uh, until you get a job like nowadays we're just like learn by doing.

There's no nobody knows everything. I don't think I can assign interviews at all in this generic time.

Um, right. But still, this basic sense may still ask you, because this is this this can be some good questions for the old school interviewers.

They're going to ask you tell me a few activation functions and tell me the advantages and disadvantages.

I think at least I got these questions a few years back before I joined academia.

So we're going to tell you a few, you know, activation functions.

For example this is a sigmoid function.

This is one of the most common is one over one plus e to the power of negative uh, negative x you know, minus whatever.

So basically it's a it's a very straightforward function.

Whatever you are going to get X in, you know, it's actually going to be transferred, converted into the range of 0 to 1.

The good part of this sigmoid function is because you can say people like the range of 0 to 1 is like a probability.

It's like other things. It's a good interpretation. But one big thing, one big disadvantage, disadvantage of the sigmoid.

You can say it dies down pretty fast. I mean, when you plug in x equal to five here, you will say, you will say it's going to be almost equal to one.

And if you plug in negative five here it's almost almost equal to zero.

So which means the activation range of the sigmoid will be extremely small.

So negative ten and negative five doesn't play a big difference at all.

So we're going to talk about yeah. So this is called the vanishing gradient problem.

And we're going to discuss later. So it's a so so so but it's still good to use when you are trying to do some

probabilities as outputs because you know the outputs range will be 0 to 1.

And another most commonly used activation functions is the ReLU function.

As I mentioned, it's a max zero comma x.

It's a piecewise linear function, and it's a good default function for many of the deep neural networks.

At least a few years back.

It's no longer the case, but it's if you still saying ReLU is a good good function activation function for most of the deep neural networks.

I think that's still a common and commonly right questions, but it can suffer something called from.

It can suffer from something called a dying ReLU, which means if your values are almost negative.

So you can say this left part, I mean the negative part are are almost no signals and things are not going to activate for doing any transformation.

We're going to also talk about dying ReLU, because for the interviewers who enjoy asking you a question around activation,

they're going to be interesting asking you like a vanishing gradient, dying, ReLU, etc., etc..

Uh, to to make things better, people are improving over different activation functions because that's what I mentioned.

For the ReLU functions you can say the negative parts are turned off.

Right. So this is a dying ReLU. This is not good. So people are changing it.

So they're making this a leaky ReLU which means they still get some signals on these negative parts,

even small, like a smaller constant like 0.01 times x.

So which means you still get some signals but not as big as your positive range.

And they also do some ELU, which means it's no longer.

It's no longer linear on the negative. It's actually becoming a becoming a some non-linear functions.

And the these are all the variations.

And the people in the past are publishing different activation functions for papers.

And of course for the course project, you can also design your own activation functions.

If you can do one and have a good property. Actually, maybe you can.

If you ask agents, maybe they will give you some good ideas.

And uh, yeah, this actually already makes the entire academia pretty bad because there's too many papers now.

They're restricting how many people one person can submit per conference.

Uh, so so so so so the Lu is important because, because, because it doesn't have this vanishing gradient issue as a sigmoid function.

Recall the sigmoid function will saturate very fast When the range is outside the range of a negative five and five.

So the loose accelerates because you can see it has a full positive range to activate.

So all the other signals here are still working.

And you may you may have a very straightforward question like why then why don't we do a function just like this.

Like also cover the negative part. Again we need a non-linear function.

You cannot have a simply just have a linear linear function.

So that's why you can have a leaky ReLU. But you couldn't have a one single line to cross the negative range as well.

Um. Yeah. So this is a so so so again for this ReLU function it's important because because a few reasons as I'm showing in this slides, uh,

first of all you can say for the positive side,

if you do the derivative or the back propagation of the if you're taking derivative about the value is equal to one.

So which is good. You keep your signal and and and and it's also very easy to evaluate.

For example you may have a very fancy activation function. However recall when we're doing the loss function optimization you need you need to use

something called the gradient descent to calculate the derivative of the function.

Then you need to take the derivative. We will take the derivative.

Some of the function are easy to compute and we're going to show this the computation variance.

But if you remember that chain rule you need to do the calculus and derivative.

So your function needs to be very easy to compute. So that's why ReLU is very good because it's very easy to compute the derivative.

And it's positive on the it's equal to it's simply just equal to one on the positive side.

And on the negative side it gives you exactly zero. So these are all good properties.

However however they have this that ReLU issue which means for example here's the example You can check in details later,

but what we're saying here is that it's very easily to be trapped by a derivative equal to zero.

And since becoming 0000 and zero, so the whole negative region with zero local derivatives, and therefore it's not a single point and very easy.

And sometimes it's very easy that your function using the loop becoming fully, fully zero.

And there's no gradient or no signal to be learned from the deep neural networks.

Um, yeah. So you can say people doing a lot of different variations on ReLU like they create, for example, they create this glue.

I don't, I don't remember what's the full name of that. But you can say another thing similar to similar to similar to similarly to the loop.

So this actually proves how small the person who brought up Lua in the first place.

They do ReLU ilu um, a lot of things.

Anyway, uh, so all these variations are around how to actually make the negative parts still non-zero, but nonlinear.

So that's a lot of different things.

And we're going to in this lecture we're going to cover how the dual are becoming important again in the large language model training.

Um I think I'm going to, uh, fly through this.

Uh, yeah. Compare compare ReLU to some of the other variations.

For example, jealousy, Lou, is that you can say is that straight is fully zero inactive and then become the,

you know, equal to x starting from point zero. So, so it's exactly zero for every negative inputs.

And it's very easy to calculate for the gradient as I mentioned. And however it can create that units.

But for zero variations then improvements. Uh it's much smoother on the around zero.

And however the got non-zero gradient a lot of like a negative set, which means you add a computation.

So each so most of the burden for the larger models will be the computation of the.

So inference is cheap which means that we already show you the first part,

which means that the forward pass, which means you just do the forward pass computation.

That's actually relatively cheap. And so that's why when the large language models are trained,

you can host the model at your home just because you don't you don't do any further training.

You simply just like doing the forward pass for the prediction and the if you stay the news like OpenAI,

they're actually purchasing a lot of like a new Mac mini because of the it's very good for the inference inference, inference loop.

And also I think they're also trying to do the computer use.

I think the next one, next big thing will be this computer use.

And we're also writing a paper about this for example, uh, for example, where we, we try to extract GPT six a few popular modern games.

They're doing way better than all the more than older models.

So the older models, maybe they're doing like 20, 20%.

They can do extra six, can do 60%. So which means a lot of like a vision or a visual language.

Reasoning problems are becoming solved much more quickly than we thought.

Um, yes. And actually, uh, actually this morning I received multiple emails asking me to add them to the grid, scope and Piazza and other places.

So now it's all done by my computer. Use Codex.

It's straightforward because I just give them the the checkmark.

So now this is my daily routine. The first thing will be asking my ChatGPT to read all my emails, give me the to do list,

and follow up the things that I didn't finish and I just need to approve things.

It's very straightforward, of course, for the privacy data I will handle myself,

but for things like adding like for the public, things I would just handle easily by the computer use.

So if you haven't tried a computer use, I would really recommend you to do the computer use.

Recall. Like we mentioned in the past that Gemini provides one year free student subscription.

I think that's potentially a good start.

If you if you haven't tried any Atlantic computer use that will that will be I mean, life changing experience.

I mean this year I'm surprised about too many new things.

Um, yeah, there will be some research questions for the Revolut, but I think we're going to, uh, skip, um, uh,

and in the past we are in the past, we also prepared this interview questions for the for students regarding the student knowledge.

So I'm going to quickly fly this through. And for example, uh, why do we need the activation function.

Because it's actually used to introduce the non-linearity in the deep neural network without non-linearity.

Everything condensed to a linear regression model. And you couldn't do complex data.

So that's more like a summary. And in the past people are asking how do you compare sigmoid tangent ReLU activation.

You remember that sigmoid is ranges from 0 to 1. It's good for the probability and tangent.

Tangent is not important really is piecewise linear.

And however it fits the issue for the dying ReLU and but but but but it's no longer.

It doesn't like a sigmoid function which are, you know saturated from the range -5 to 5.

So it's have a very long, uh, you know, activation range from the, all the positive side and the dying ReLU.

Anyway, um, so, so so these are something people are for how to solving the ReLU issue.

People are using the leaky ReLU as a solution. And parametric.

There's so many different versions. I'm going to cover another 20 minutes before people got a break.

And maybe Taco Bell. Uh, Taco Bell are pretty fast.

Neural networks. I also got my apples and bananas. I mean, the amount that is mine is more like more like my fasting month.

Unfortunately. Uh, yeah. Uh, yeah.

For the new networks. Again, as a quick recap.

So remember usually you just have the input layer, for example, the images and in the hidden layers are multilayered multiple connected layers.

And it doesn't need to be fully connected. It can be loosely connected or the there will be some, you know, skip layers.

That's all good. And uh, and uh, and the computation, uh, we just talk about the for the past,

if you remember, uh, in the, in the, in the, in the programing in in the programing way.

It's also very easy. For example, you design your activation function as this is a sigmoid like one over one plus exponential of the negative x.

And you have your input data x. You just randomize a vector three by one and your first layer will be just simply w times x plus bias.

And the second layer will be the output from the h1 in the last layer to the next layer, plus bias two.

And the final output will be the the third layer, um the weights three.

I mean that's output layer weight three times the it's more like you can say

that's a relationship with the first layer to second layer to the last layer, all times with the all times with the weight matrices.

However, in the middle you need to use the this nonlinear activation function to do the transformation.

So it's a maybe some people are maybe are more good at reading the code and you will be looking at you will be more enjoy this.

However, one thing is that when you are having the larger and larger deep neural network, which means you are,

you have more and more neurons, then you get a larger model capacities in the block two.

If you're if you're lucky enough to really see the recording, if you will, you will say, we'll talk about the model capacity,

which means whether your model is capable enough to describe some like complex patterns.

So this is the three hidden neurons for the same data. You can say the decision boundary is pretty straightforward.

We have more and more neurons. You can do much more complex description.

However, you may fall in the trap of the overfitting, as we're also saying,

more neurons equal to more capacities because there was a debate even ten years ago.

People are debating like whether we really need a large deep neural networks,

but nowadays nobody is asking this anymore because of the scaling law, because of the, uh.

I don't know how. What's, uh, what's the latest, uh, Astra model? I think that's, uh, extremely, extremely, extremely huge.

And, uh, so, so which means for the deep neural network in general, when you have more layers,

when you have more neurons becoming, uh, becoming more becoming deeper and wider, you got more capacities and how to.

So, so in the past, some of the researches around like how to control the weights, the depth and the weights of the deep neural networks.

Uh, that was some good question before and uh, however, nowadays the question will be, do I have enough data?

Do I have enough GPUs to have a large enough model? So nobody asking this anymore?

Uh, however, you still want to know a bit of this. And recall to prevent overfitting, people want to do the regularization.

Uh, you try to penalize for the complexity of the models by adding.

Bye bye, bye bye by restricting your weight matrices to become as as simple as possible.

Um, anyway, uh, it's something we potentially going to be going to revisit later.

Uh, so how? Recall like this lecture the first hour, we just talked about the forward path of the deep neural networks,

how you are going to calculate, how are you going to calculate things like by layers.

And the question will be. So this is this is also called inference like prediction inference.

The forward there are the same thing.

And the question here will be the question here will be how are you actually using the forward pass for making the prediction.

Uh, we're using the large model prediction as an example again.

So let's say the light is uh, you have this input x and you're going to predict the next one.

You can sample a few potential answers like red, blue, green or whatever based on the past frequency.

And uh, let's say Your raw result potentially will be 211.

The sum equal to four. And then you you do some like exponential conversion which means you convert it to the probability.

Then the probability of rad will be .05 blue. And the green will be probability of 25% each.

So you will see. So that's why some people are saying the larger model.

So this is called a softmax which means you uh you get a probability divide.

You get a probability by by sum over all the outputs, potential outputs and then normalized by them so that you get a probability.

So that's why people are saying the larger models are just like the next token

prediction with the largest probability is strictly speaking there's nothing wrong.

So what we're really doing is that we're predicting the next token based on the probability.

And let's say in real world, for example, in your training data, you really see the next token is really red.

That's good. Which means you have this information. Then you.

Then you have this target like 100. Which means that we need to use this.

Ground truth. Now, you already know the next token should be red. Then you need to update your model.

So. So you will say after the. After the updates the probability of the next token to be red.

Will be larger because you do some updating of your model.

Your model becoming better. But that's about the back propagation.

Like how to update your deep neural networks which will be covered very soon I believe.

Yeah I think we're going to cover this very soon. But again, the example here,

just showing you that the way we are doing the prediction are using the inference or the just like simple prediction and the sample few answers.

And given we know the results, we're going to update the model.

We haven't talked about how to update the model. That's the back propagation. And we're going to cover it.

Um. Right. And piecing everything together.

Remember in this lecture, in this first part of lecture, we talk about non-linear functions like ReLU, sigmoid, etc.,

etc. we also in the previous blog we talk about the loss functions on the predictions,

which means you need to measure the difference between your predicted predicted values with the real value.

And we also talk about the regularization, which means you can penalize for your model to be too complex,

for example, so that you can prevent the issue of the overfitting.

And finally, the total loss of your model will be the data loss, which means how far from your prediction to the ground truth data,

plus the regularization, which means how, how, how large your weight is and what potentially we should control it.

Um, so so then the question will be, uh, we we all we talk about is that how to do this for the past.

You now can make a prediction knowing the next token should be red or red or blue or green.

But the question will be how we can make this model and better and better when we have a ground truth data.

Then we need to really calculate the backward backward process,

which means we need to minimize or optimize the loss function with regard to the weight matrices,

which means the taking derivative of L mean loss function with regard to w1 w2 so that we can learn the optimal w.

If you remember, you learn a calculus, right? Like you have a you have something you want to minimize.

You need to you try. You try to take the derivative and trying to do something like that.

But the difference here will be it's not a sorry.

It's not. It's nothing too different. You just have the same loss function.

You have multiple variables that can vary so that you want to make sure how we can make all these variables,

how we can optimize multiple variables to make our loss function as small as possible.

So that's a that's a that's a goal.

And the and the question will be now the question will be if I know my loss function I know my deep neural network.

How can I really optimize my deep neural network and gather weight matrices?

A one idea would be actually you can uh, on the paper, you can write it right, like you can really calculate,

you can do the derivative and say, okay, what's my actually a function is however,

it's no longer possible for human beings nowadays you can do for a few layers, but if it's more than five layers there's a crazy nonlinear functions.

And if you if your deep neural networks are not standard, you can no longer do this.

So that's why we need a we need to learn something smarter to to do this back optimization.

So this is actually called something called a computational graph.

Or people are people. People are called this auto gradient.

So. So that's so so so so in short, what I the core idea will be you only need to describe what your,

uh, for the past look like or how does your computation graph look like.

You don't need to do anything else. Then the machine will do the computation for you.

This is much more elegant because you no longer need a piece of paper or ten pieces of paper to do the calculation,

but a sort of I, I, I enjoy the time when people are still appreciate the time for calculating the gradient by hand.

The reason, the the reason, the reason, the the reason is that, uh,

handwriting or hand calculation of the gradients helps me to get my first paper out.

So why why I would do a PhD student. I try to publish some paper, but, you know, publish paper are hard.

And paper, when you write a paper, they want you to have something called a theoretical contribution, but I have no theoretical contribution at all.

So we are thinking how we can overcome that.

To show the complexity of the paper.

One idea would be do this hand if you hand calculation of the gradient, so you will see something very similar like.

Then we're going to design something like a new loss function. And for this lecture sorry for this loss function is a is a rank based log function.

Whatever. It's a it's a it's slightly complex. Then I start calculating what's the gradient for this new loss function.

And you go step by step. And finally you will see a crazy format like learn to whatever for my new loss function.

I think we really like it, but it's no longer work because, you know, large language models can do this a hundred hundred times smarter than myself.

Uh, but but you can say in the past, people are really doing this computation, do this a back composition by themselves,

especially for the for the new loss functions, which are not common and the machine doesn't know.

Um, and also,

I think recently I saw a lot of news like OpenAI and anthropic are solving a lot of like quite hard and long lasting mathematical problems.

And there's 25 Fields Medal recipient.

They're writing a letter saying it's not good or something like that.

So you will say in the future, in many of the future, in the future, that many of the purely computational based questions are no longer exist.

And for example, they can they can.

Uh, the logic model, you know, these firms, they can set up like a thousands of agents and collaboratively to do the computation crazily.

And so, so in other words, in the future look like the ideas is a thousand times more valuable than implementation or other things.

So yeah, people like it or hate it. I think I like it because I have a lot of ideas,

but I don't have time to really realize now I can run five different agents at the same time and getting the work done.

Actually, this year, without the help of the students, just myself, I wrote another 4 or 5 paper by myself.

I didn't even do this during my PhD time. It's all because agents change everything.

Um, again, like if you haven't used any agents at this moment, you should really try it.

I don't even even worry or bother or care that if you use that for homework or projects, I mean, for other courses, they may care.

But for this course,

if you don't use that will be worried because which means you are not on the frontier of how this AI human collaborations are wrong.

Um, yeah. I will quickly finish a bit and then we can have a have a break.

So so the better idea, other than just compute the gradient or optimize your loss function by hand.

Will be building this computational graph. For example let's say for.

For the linear part you have this f equal to w dot product with x this is your axis.

It's your w. You do the you do this then you do this.

Sorry. Where is that okay. You do the dot product and then you do this uh, you do some uh is this ReLU or something?

And anyway, you do some nonlinear transformation, you get the scores and you use a hinge loss,

which means you calculate the loss and and you potentially have some, like regularization, and you get your final loss, right.

Like so this is a so this is everything.

So this is actually the just so this is actually just the the computational graph representation of this function,

which means you calculate the calculate loss. You penalize for the for the regularization.

So basically we're just representing we're just representing this stuff into a computational graph.

So now that's what's happening for the deep neural network, for whatever PyTorch or TensorFlow or whatever framework you are using.

They are actually just as long as you can describe what's the loss function and what the variables can vary in this loss function.

And what's your training data. Then they can do the optimization for you.

Uh, a quick example before the break.

Uh, so so basically so basically now we need to talk about the computational graph.

Uh, the computational graph is giving you the way to understand how your data and it's flowing with your, uh, computation computational network.

And then you can use automated automatic way for optimizing.

Let's say you have three variables x, y, z, uh, and their representation is their expression is x plus y times z.

And then uh, you can you have some numbers.

So basically if you do the computational graph that will be x y x y x plus y times z.

So that'll be your f f of f f of x y z.

And you can then do the. Then actually you can represent this as a q x plus y as a q.

So this is actually q q z f equal to QZ right.

Then you can declare the q the x equal to 1XDY equal to one whatever whatever.

So it's actually uh, this potentially actually, uh, reminds you something about a chain rule when you learn a calculus.

Calculus one. So which means when you have a series of the calculation, what you really when you are doing the derivative,

you are from the back end to the, you know, front back to the front.

And you do the derivative as a chain. Right.

For example, you do the you first you want to know the loss function with regard to x, y, z.

However, you potentially want to know the you want to do the chain rule here for knowing the F with regard to q and q with regard to X,

something like that. So I'm not going to go through the details here because it's a it's a basic calculus.

And recall the x is equal to divided up.

So which means you use the q equal to x plus y.

Anyway it's a it's two fundamental. It's you can I think you can do this offline.

And if you don't really remember this I think it's purely for a I don't think anyone will ask you this in the interview at all.

I never see anyone asking you to do this derivative. I think only the quantum quantum interview or the quantum firms are doing this because once

I was at a quantum Bridgewater and they they were they were their questions are I mean,

most of these quantum questions are weird. I mean, I'm not I'm not a type of the person.

They need to be smart. You also need to. You also need to prepare for that quantum interviews.

I mean, it's a totally different mindset and questions. I'd rather just watch their life on Netflix other than just joining them.

Um, anyway, uh, if you really want to, uh, recap some of this basic, uh, mathematics for machine learning, and there's a good book for,

for this, but, uh, nowadays, I don't think anyone should read the book, at least the technical book, page by page.

So you can go through this, uh, differentiation rules and partial differentiation and gradient.

So they will remind you a bit about how to do the, uh, yeah.

For example, the example of 5.7, you just do the chain rule to, to get a partial partial derivative.

That's it. So I'm not going to spend time here.

But all we're trying to say that, uh, using the chain rule when you're trying to optimize your loss function,

recall the loss function is based on the multiple layer deep neural network calculation.

And you need to you need to if you want to know how your weight matrices are need to change in the first layer,

you need to first get a result for the second layer. So. So actually that's why you need to from the back to front because it's a chain rule right.

Like you need to do the again if you want to know that df df the the x you need to know that the f d q first.

So something like that. So we call this when we're applying chain rule here you will say we have this upstream gradient

which means in the deep neural network which means the the later the later layers gradient.

And you have this local gradient which means here, which means it's a DQ dx or something like that.

DQ divide also works because. Yeah. So that's what we're saying.

If you want to know how how y is affecting F, you need to do the DF.

Sorry, I don't repeat this again. It's too stupid. Um.

Right. Yeah. This reminds me something. What was the undergraduate?

Many, many, many years ago. You don't want to know how many. How many years ago?

Uh, yeah.

That was that typical nerdy person, as you can imagine that I don't know the book you are using, but by the time we are using a very heavy, uh,

very heavy black cover calculus book, and, I don't know,

I think it's a nice addition or 10th edition, I don't remember, but nobody has any homework for me.

But by that time, I don't know what to do. Uh, yeah.

When you are just single, I don't have a family, children or whatever. You're afraid.

Uh, by that time, like, I did all the practice homework, I practice questions in the in the back.

And again, they don't even give you the full solution. They only give you, like, one single number.

So I try to correct any single questions in that calculus book.

And, uh, at around 1130, When the when the library closed, I went to the.

I went to the dining hall because, you know, as a freshman you got you got a meal plan you need to squander.

So I, I go to a dining hall to eat a pizza.

So, so that's why calculus potentially was my, uh, most well, uh, apprehended that possibly my best part of the knowledge in my mind,

because the practice questions and the late pizza in the dining hall.

Um, anyway, uh, so you can say again, we're saying for the for the deep neural networks, you are trying to, uh, compute this.

Uh, it's a chain rule, right? It's from back to first. You have the final loss function.

The loss function is calculated by your predicted value. Uh, how far from the real value?

And then you you use this difference to go through this deep neural network.

You first calculate a upstream gradient, and you, you you gradually update everything.

Uh, so here's another example. So here's a flawed calculation we're saying.

Think about this as a deep neural network. It's very straightforward but it's not.

It's not a deep neural network here. But it's the same thing. Because deep neural network is just getting wider and deeper.

That's it. That's no big difference. You have this X012, zero x0 and x1 and you do the forward calculation.

And here's some details. But I think I don't think we're going to expand.

And don't worry. We're not going to test you on calculating this for the exams.

Uh, and then uh, and then and then now you want to actually say,

how can I optimize my W so that I can make my final result as small as possible, which means.

So you will do this again like a batch steps.

Right. Like you're just going back and back and back to calculate to to pass through the gradient back to the W in the first few layers.

Uh, so so so so so. But but another thing that we want to mention is that all we're saying that for the, for the,

for the modern computer, computer science, all you need to do is constructing this computational graph.

So the, the, the machine language just need to know how you really calculate this from beginning to the end.

And then they can do this, the backpropagation for you and do the optimization. One thing that the computational graph are not necessarily unique.

Maybe for the single, for the same, for the same, for the same calculation, there might be multiple computational graph you can have.

For example, you can first calculate certain parts and not another parts.

So. So there might be a there's there's multiple there's multiple ways that you can represent the same calculation.

And the rule of thumb is that you just want to choose which one can be easily expressed and optimized.

For example the sigmoid function. The people like it for another reasons because it's derivative is very nice.

So the sigmoid local gradient you will say this is the sigmoid function sigma.

So it will say the derivative is a one minus sigma times sigma. That's another reason why people like it.

However the ReLU function is a gradient even simpler, just like x.

That's it. So? So that's why the simplicity of your activation function, uh, the gradient of your, the gradient of your,

uh, the gradient of your activation functions also matters because if it's a even, it's a very good one.

But if the gradient is extremely complex to compute, people won't like it because it's a it's a very computationally computationally heavy.

Uh, another I think another 4 or 5 slides before we um, sorry, it's not 4 or 5.

Um, let me try to be faster. Um, yeah.

Uh, yeah. Another, uh, I think these are more like reference slides, which are if you are interested in you can, you can, you can take a look.

For example, if you're why there's something called at gate, which means if you're if you're equal to x plus y,

then if you take a gradient of x that equal to a, you know, so so so so that will be the distributor.

Which means you got you got you get others similarly multiply get for example x value equal to x times y sorry y equal to x1 times x2.

Then you take the derivative. You will say take with regard to x1. That will be two ways with regard to x2 that will be x1.

So that's more like something called mod. So that's more like a multiplier.

So it's a simple calculus. Uh, potentially I will also fly this through uh, again.

Again we talk about this computational graph. Right. You can represent the loss functions activation functions, everything as a computational graph.

So which is a very good properties to be used in the deep neural network.

Recall everything. All you need to know, especially when you're writing a program.

All you need to know is that what's your computational graph for your deep neural network?

That's where you define your deep neural network. That's it. You don't need to.

You need to. You don't need to worry about the gradient calculation. You don't need to worry about other part at all.

Uh, so so so so so here's another good illustration for this process.

You first define your function. It's straightforward right.

Like w0 times x0 equal to x0.

And then this is x y and z at each other.

X0 plus y is equal to s2 s2 plus w2 which means it's a bias.

Then you go through a sigmoid function. So this is straightforward.

You can say the computational graph is very straightforward. And then when you do the if you're really doing this by hand right.

Like if you're really doing the backpropagation by hand. Then you're first starting from the loss function here.

Uh, sorry. This is a this is an activation. And if you get a loss and you, you first do the gradient of the sigmoid function.

If you remember here the sigmoid, if you remember we talked about sigmoid function.

The derivative is simply just one minus sigmoid. Sigmoid times sigmoid.

So to simply just plug in one minus a sigmoid times sigmoid.

And and then you, you just go back.

You just go back first. And so that's the back propagation. You can do this a reference offline.

But you know here just saying some of this so-called multiply gate or add gate or whatever.

However we're just showing you the simplest format right. Saying you can say there's only w0 w1, etc., etc..

However, deep neural networks are working on the high dimensional space, which means you're actually doing derivatives of the vector you are.

Your weight matrices can be extremely huge.

It's not only about how huge it is. It can be multiple dimensions.

For example, you are optimizing the derivative over.

It can be a vector, it can be a cube.

It can be a hyper hyperplane, which means you can do things in five dimensions for for the derivative or something like that.

And all you need to do is that you are just trying to make things like doing this vector derivative.

Again, you don't need to master the deep knowledge of that. And now everything, all you need to define is a computational graph.

And and then the machine will then the machine will will do the calculation for you.

And another thing too.

I think another thing, deep learning, which is helpful for the logical thinking, will help you to understand the dimensionality.

So so think. Think about your playing jazz, the chess starting of chess.

Chess In two dimensions, right?

Like, we're playing in mostly two dimensions, but actually it can be three dimensions, right?

Like thinking that way. It can be three dimensions. It can move.

It can move a like a. In this way, however, you can add one more dimension, but you can add one more dimension.

You can add I'm not sure whether you play a game like two or 3 or 4 eight, which means like you try to merge the small squares to,

to multiply to, to be the to to being the degree of two and merge things.

This can also be in three dimensions.

So for the deep learning which help us is that like many of the things can be more than one, two, three, 4 or 5 dimensions.

Like for example, maybe we can work, we can work straight.

We can also work, work to the sky or to some fourth dimension, like through the time.

Right? Like in like what's the what's the name of the movie.

But anyway, so there's a lot of dimensions people can, can travel and think thinking that it's very interesting.

We're also writing a paper to work on two to, to to to understand how large language models or how foundation models are,

are reasoning in high dimensional space along with the time.

So it's also very interesting. Um, yeah.

But again, uh, back to this course itself, you only need to understand the computational graph and you don't need to handle these derivatives.

Uh, there's a back back propagation with the vectors are also not important because it's the same thing.

Just like you're adding the dimensionality thing. Uh, it's a it's a it's not a, it's not a, it's not a casing.

So before the break, as you can say, we show you the forward propagation, right.

Like you start from X and you do you do the calculation layer by layer.

And finally you can calculate the loss here. And for example if you have L2 loss which means the square root.

Uh, square. Sorry, it's not a square root. It's a square of the difference between your prediction and the actual values.

And then you now calculate a gradient, which means you do this derivative for the for the last layer.

For the last layer. Each of this neurons and but in the real world actually this is computed as a layer.

You don't actually do one neuron by another neuron by another neuron. Everything is complicated.

But as a as the other layer. And then you do the second layer do the backpropagation because that's a chain rule.

So which means you need to calculate here first and then here first and then next layer then next layer then next layer.

Finally back to all the layers, which means all the layer weights are getting updated so that you can minimize the loss.

Recall everything about the weight matrices. Updates will be optimizing their this value.

I mean the neuron weight matrices value so that the loss functions become as small as possible.

Uh, so, uh, so but but the traceback. Everything that will be the chain rule for the calculus, which means you have your you define your function.

You want to minimize your function with regard to the variables. So it's very straightforward.

Um, uh, so. Why why I have a more slides.

Uh, but, uh, but I think I will stop here, uh, for the break.

Uh, uh, we can have a ten 40 minutes break.

Uh, so that you can come back. Uh, 655. However, for the people who are still looking for a team, feel free to come, come, come,

come here so that we can try to give you some surprise randomness and make some friends.

Okay. I think we can, we can, we can restart. And after each break, people are always wondering whether we are going to have the quiz.

Uh, the good news today is that we don't know.

It's your last time to leave. I'm just kidding. Like you're welcome to stay.

And you're always welcome to stay.

But I recall, like, we have this adversarial, policy when the people are, when the attendant is becoming long enough or going to trigger the quiz.

Look like today it's all good. So. So the reason is because people are still forming the teams and that's that's the only reason.

And I think now we actually solve the team issue.

Again, feel free to submit your proposal. I mean, if you already got a team, you should you should already submit that, you know,

by tonight, however, uh, the latest will be the Friday, uh, Friday, I think, uh, September 18th.

Um, and again, the, the goal for the proposal is to, to help you to get the team down because everyone needs a deadline.

Like, if we're saying just to freely do whatever you want, potentially by the end of the semester, there's no team.

So, uh, so, so with that in mind, which means you can you can pivot.

I mean, for example, if two weeks later, you'll realize the ideas won't work.

It's it's okay. You can you can actually do a switch. You don't need to necessarily stick with all the data, ideas and people.

People are also asking me how to find the data sets. It's totally different from the past.

User agents really use agents and user agents to help you find the datasets, download the datasets and to do a lot of like cleaning.

However, don't trust agents for a large model too much.

The one big thing I realized for working with the agents for large models will be it's not even hallucination.

People are criticizing about large models for hallucination, saying they're going to make things up, or I don't think even that's a big issue.

The larger, the larger issue for me is that the scope drift, which means, for example,

originally you are asking the agent to help you to do the project for this course,

and gradually it will just like help you to do the course project for 567.

And finally, it's the homework for another course. It's going to do something very different than what you're asking for in the first place.

And this is the one thing. I don't know how the researchers are going to address it, but I really realize the drifting,

the silent drifting of the agent is actually a big issue, because what they're actually delivered to you is not something you're asking for at all.

So so those things scope is really important when you're interacting with the large language models.

Uh, what else I do, I want to say.

Um, right. Uh, any questions before we even start?

Okay. Actually, I'm always curious, like, for this, for this course.

Like, you guys didn't eat anything at all, right? Okay.

Okay. Yeah. So because my previous, uh, this previous five, six, six for a few years is the Friday, um, Friday 1 to 130.

By that time, I think people are more sleepy. However, uh, I think their stomach is okay because they got something for the launch,

but for this one it's a different vibe because people are not sleepy, they're just empty or something like that.

Like the soul is training and something like that. But it's Monday, so just bear with me.

Um, yeah, I got a lot of things. I also steal a banana from the park side during the lunch time, so I think I'm more happy.

Um, okay. Uh, back to the topic. We talk about the backpropagation, chain rule, etc., etc. this is a very fundamental and basic,

uh, the still the reasons because, uh, still the reason is because, uh, you know,

there might be old school interviewers will still ask you something in that, in that thing because, um, again,

like a, some even older person are saying they're the last generation who know how to program with other agents.

Um, I think they're there. Right? I already forgot how to how to program by myself.

even I read a lot of program before, but yeah, I'm not even confident to write a for loop in Python now.

Actually you're right, I actually think about how to write a Python loop.

Yeah, I got stuck. Like, I don't really. Maybe ask yourself.

You may not also know that neither write to you. Do you need a semicolon by the end of the variable, or do you?

Maybe you don't remember anymore. So so so so. That's right. Like we already lose the capacity of the programing.

And if one day the agents are all done will become autonomous, then our technology will be 100 years back.

Um. It's fine. Uh, okay. Um.

Yeah. I'm just trying to say, where am I? Um, yeah. Here's just a quick recap for the break.

Like, we we talk about we we talk about the, uh, we talk about the forward pass.

If you remember, we have X and we have each of this hidden hidden union with the with a ReLU as the activation function.

And finally they got a prediction. And then you just do the forward pass for the calculation and you do the back backward recall.

Do the chain rule right. Like do the loss with regard to A12 and see save,

which means it's anyway it's a it's just some chain rule stuff and update everything okay I'm not going to do this again.

So one thing it might be interesting will be will be like the forward pass.

Actually the forward pass actually is a pretty efficient or computationally saving or efficient on the GPU memory.

So that's why you can host your own large models on on your own home.

I don't think home your own computer can usually do that.

But if you have a large enough like Mac mini, like 128GB of memory, or you got an Nvidia,

DJI spark or some other things which have a like unified memory with a 128GB memory.

You can host some models like a cube or, um, some other things which are which are all good.

You can host your own model, and there will be some other industries that are doing some great things.

They have this, uh, as I mentioned before, they have this uncensored model to to generate something which are crazy to make money.

And but most of these are inference only, which means they are not going to retrain the model.

They are purely just using the inference. Uh, and another, another industry which are emerging.

This is weird. Like they are selling this machine to hospitals, to the to the to the legal, to the to attorneys.

They're selling the unified machine saying we have a deep stake inside and you don't need to use a network.

Everything inside is the one single box and a cell to the government as well,

charging them millions of dollars like a single crazy large model machine learning box or something like that.

But all that being said, the reason why inference is inference.

You don't need a lot like membranes because you're just purely compute computation, right?

You don't you don't need to save a lot of things. Potentially you can save some of this as well, saying the kV cache, etc., etc..

However, for the GPU, however, for the backprop back propagation, you are going to cost a more memory because you have a lot of like checkpoints.

When you are doing the backpropagation, you need to host a lot of intermediate results.

Therefore this in worst case it looks very small however.

However, in real world the deep neural networks are huge like the billions of parameters,

and even many of them are just like eight eight bits or 16 bits.

Many of them are 8 or 16. Or the mixed precision?

Even that's the case. Even that's the case. You're costing a lot of GPU memories, so that's why.

So that's why doing anything around the training is much more costly than anything.

Do the inference. So, uh, so so so so with that in mind.

So with that in mind, uh, what I'm trying to say,

what I'm trying to say will be people are thinking how we can how we can save the memory without using backpropagation.

This sounds impossible, right? Like, how could you not doing the backpropagation?

Uh, however, still getting some good idea.

So this is called agent context. The the name. Sounds very fancy, but if I tell you what are they?

You will say there's relatively stupid. Uh, so there's multiple, multiple ways to save the memories for the back propagation.

So one idea would be one idea would be can I save some of the knowledge as external information.

They are not changing along with the time. They are not encoded in the model.

So so which means for the back propagation you are trying to adapt your machine learning model, deep learning model to memorize to learn the pattern.

However, what if I don't let a large model what I don't like the deep learning model to to learn it,

I directly, I directly save this information somewhere else.

So so that this can save my memory I cpu memory.

I will show you how this will really look like and you will realize how stupid they are.

And another idea will be you don't need to really.

You don't really need to update every single parameters in the large language model.

For example, you only need to let's say sorry.

Let me see if, for example, this is too small. Uh oh.

That's for example. What if I only only time to train or update the parameters here.

I keep everything for everything else frozen, so this can save my GPU memory, because all I need to do is after I do the update here, I will stop.

So so so so this will save the memory. Which means now we talk about two different approaches to save you backpropagation memory.

One idea would be don't use backpropagation at all, just trying to trying to encode the knowledge or information somewhere else.

Another idea will be not updating the full deep neural network, however, just updating part of it.

You can throw, you can throw a phrase on most of them and still do the backpropagation for part of it.

And so so so so now we have a, now we have a now we show you a few solutions here.

So the first solution we're going to talk about in the later part of the A later part of the lecture is called Laura.

So Laura is most prevalent, you know.

Fine tuning way for a deep neural network. And, uh.

Uh, yeah, it's called a low rank. So it's called a low rank adaptation for the large machine models.

So the idea will be phrased most you can say it has been already studied by almost 40,000 times.

It's a it's a classical popular paper. Uh, we're we're going to cover this.

I don't recall which lecture, but we do cover this in the later parts.

So so so so this is a, this correspond to the one idea we're saying you don't need to you don't need to,

uh, you don't need to actually, uh, update all the models.

You just need to update part of the model. So I don't say what their figures are actually showing this.

Sorry. They don't. It's, uh. Yeah.

So so so Laura is a way to just, like, update part of your model and keep most of the parameters unchanged to save the memory.

So that'll be one way. Another way will be. This is called a test time.

Training. So which means you can try to do some small fine tuning.

During the test time you can do this the test time data update.

So that will be also incremental as well. Another thing this is something we're saying is agent memory and retrieval.

So this is something what we're saying like you don't need to do the backpropagation anymore.

Just trying to use your encoder knowledge somewhere else. So this is why I'm saying it's stupid because for example, if you have a notebook,

you just for example, when I try to predict how difficult the midterm could be, right?

Like one way for one way for predicting this will be you're taking all this course

material in and trying to build a neural network to predict how hard the homework is,

but another sample or shortcut will be potentially. You directly come to me asking me how hard is the midterm?

Could be. I said, I said something. You take notes, and these notes will be the ancient memory.

So the ancient memory will be, for example, when you are using the ChatGPT codex or cloud code or whatever,

they have the least memory, structured memory about you, for example, this person.

So that's why they are knowing you better and better and better. And because when they are asking, when you are asking a new question,

the first retrieve the most relevant memory around your question and then give you the answer.

So you can say this doesn't involve any learning at all.

They're just simply trying to memorize or remember what are you or who are you and the related information.

So with that in mind, this doesn't require any learning. It's more about saving the information or retrieve it.

And there's just a lot of interesting research around this direction.

For example, which which information should it be saved as an agent memory and and how to retrieve them smartly.

So that's also people are also saying this agent memory, also motivated by a biological human memory.

However, human memory are not reliable and very random.

The funny thing is that when I walked to the other side of the table, I saw there's a you may not know,

there's a here's a here's actually a special storage, and there's a lot of like a water bottle here.

So I think many people forgot forgot their bottle and they just keep like putting the last water bottle here.

Gradually they build, they build something up. So you can say human memories are not reliable.

And. What did I do?

I don't know, I look like this open sometimes. It's. This is a chemical one, I don't know, um.

Yeah. But always remember words exit and so that. Yeah.

I'm not trying to. Yeah.

Sort of. What I'm trying to say here will be. So one way. One idea will be, for example,

if I can train this machine learning model to actually train this machine learning model based on this user's preference and test data.

But another idea will be I simply just like memorizes the user's preference and whatever as an external memory so that I can just retrieve.

But my machine learning model doesn't get updated so that I can save the cost.

So just like in comparison to the really learning and backward propagation of the machine learning model.

Any more questions? Okay. Perfect. Yes. Okay.

So right. We have a few slides regarding this, the test time updates.

And I think I will. I think I would simply I think I will defer this to the later stage.

The reasons because we haven't talked about Laura in details like how the.

Maybe I can actually I don't remember where the which slides I have Laura but I will defer this agent memory Laura, etc. etc. to the later stage.

But now we're just trying to show you that this type of thing can be, uh,

can be the alternative to the full, full back propagation in the larger model time,

because anything about the training back propagation are extremely expensive, and you don't want to do that.

The reason why we mention this is another, another reason we mention this is because when you are being asked during an interview,

let me ask you how to save the GPU memory for my for my specific projects or question or whatever you can mention.

Okay, part of them can be outsourced to the agent memory or as hard memory or whatever.

And part of things can be the standard will always be Laura, which means the phrase most of the parameters and only updates part of them.

Um, yeah. And at a later stage we are going to look, look, look into the deeper internals of that.

Um. We'll talk about we'll talk about this difference between Laura and Trey on top of I'll show you.

Oh, I think Laura is a special case of this, uh, training unfrozen, uh, base model.

It's actually specifically designed for the larger models because the larger models are based on transformer and transformer.

Certain parts should be frozen or should be frozen.

Some parts should be trained. So you can think Laura is just like a special case of the general, uh, frozen based training, fine tuning, etc., etc..

Any more questions anymore? Okay.

So I really want to finish the apple, but look like I couldn't, um. That's okay.

Um, so. So then, uh, if we go back to the activation function.

Uh, we're going to talk about a few more issues in this, uh, activation and gradient calculation and etc..

Uh, recall we'll talk. We'll talk about the activation functions including sigmoid, tangent, ReLU, cellule, gelu, etc., etc..

There's so many things like that. And uh, one issue.

One issue. We talk about this vanishing gradient.

Uh, one issue we talk about for the sigmoid is about something called the vanishing gradient gradient.

Vanishing gradient. But we haven't really talk about it because we haven't talked about backpropagation.

It's harder to understand, but I think this way this is your multiple layer of deep neural network.

And each of the layers got some weights.

And you calculated you calculate the loss in this way and then you have the finally you have this final loss function.

So that's a typical deep neural network. And then you do the backpropagation.

You want to know how the first layer how the loss function are affected by the first layer weights.

Of course the second layer is second layer weights and third layer weights, etc.,

etc. and but but as you can say, if you do this, if you do, if you do this,

if you do the fully full expansion of the formula, you will say the loss function with regard to the first layer,

weights equal to second layer weights is against the chain rule, right?

Like second layer weights with regard to the first layer and etc. etc. you are.

You are multiplying multiple items to calculate the first layer.

The first layer are impact on the on the on the, on the on the loss.

And but what happens if this is thinking this way when you are multiplying a lot of things.

And what if some of them are extremely small?

Then the issue will be this will go into like zero and zero, and it's going closer and closer and closer to zero.

And then the gradient will be shrinking at each step. So which means that gradually, gradually, gradually you are missing the gradient.

And again the gradient itself is to help us to get signals to update your deep learning model,

machine learning model, so that your deep learning you can achieve the optimal results for your deep learning model.

And and because. Because this further layers which are far from the far from the final final outputs they are they got they got less

and less updates and waste time goes by the updates getting more like a closer to zero and why this is a big problem.

The reason is very straightforward because the gradient signal from far away is totally lost.

And the close the close by. Still get some updates.

However, because zero zero updates are straight forward, there's not actually a impacted by the long chain rule.

And and in the long run this entire loss updates are inherited.

The entire deep neural network are dominated by the layers which are closer to the outputs.

And the first few layers. They are losing their impact. So this is so this is this is a this is a this is an issue.

And people are also giving another interpretation for this effect of the effect of the vanishing gradient,

which means if the gradient can be can be it can be viewed as the mesh of the past down the future.

Then we're actually doing this a dependency, right?

But which means that the closer layers there should be mostly important to the to to the output.

However, we still want to take some of the previous thing as possible, for example, which means that if you get an admission at USC,

likely your undergraduate should be also from a relatively good place, and your high school should also from a relatively good place.

So they are having smaller and smaller effect.

But we still want to take this into account other than just saying, you know, nothing's important and it's just a dependency.

However, the vanishing gradient will totally erase the effort you put during your primary school and high school.

Maybe some of them are still lasting and which they take into account.

Then the question will be how we can actually finish fixing the vanishing gradient issue,

which means how can we still maintain some of the effect of the early layers when this when this multiplication becoming smaller and smaller.

So that's why that's in the first place. Why we're saying we can use the loo.

Right. Because recall, that's the loo.

Uh, you know the reason, the reason why a sigmoid getting this vanishing gradient is because they're saturated very fast.

And, um, let me see what I can quickly find the sigmoid again.

Sorry. Um, maybe this is even faster. Sorry, sigmoid.

Sorry. It's not. It's not shopping. It's, uh. I'm not sure what's wrong, but.

Which means AI is not a it's not. It's not everything about the word.

There's also other things in this world. Um, yeah.

Uh, anyway. But as you can say again here, the here, the sigmoid function.

The reason why is the gradient of diverse ones. Because as long as they reach like let's say negative five, this part will be zero.

And we call the gradient of the sigmoid will be one, minus one, minus one, minus sigma times sigma.

So if we if it's hitting the negative five this is becoming zero.

So the range will be extremely small. If it's hitting five it's okay because however even if it's hitting five it's not okay.

Because recall that gradient is one minus sigma times sigma.

So if it's hitting five and then one minus sigma part becomes zero.

So which means the gradient of the sigmoid is very restricted.

And it will only get some signal between -5 to 5.

And the other other data range will just give you almost a zero.

And this will be amplified in this chain. In this chain rule backpropagation.

Because as long as the sum part of becoming a zero and you are losing all the signals, however, ReLU lose out on this issue because we call it.

The gradient of the rule is still extant, and so.

So the solution for the vanishing gradient is not using sigmoid at all.

Using the loop parametric, ReLU, p, ReLU or exponential ReLU, etc. etc. and you can also do something called batch normalization.

We're also going to work. We're also going to do this.

We're also cover this in the some one lecture called training dynamics.

Which means when you're training deep neural networks, what dynamics should you should you care about.

And this idea will be to to minimize the effect or the impact of the extreme data.

Like usually you use a set of the sample altogether for the training so that you can get a more stable training.

So stabilize the optimization re reducing some internal covariate shift and so that your even sigmoid can work well.

We're going to we're going to. We're going to do this.

Do this. We're going to talk about this batch normalization later.

It's also important. And however there's another issue for the gradient.

So other than vanishing gradient it can also be the exploding gradient.

So which means the gradient can also be also become very large.

And this can also give you the pretty bad results.

For example for certain let's take a look at the example. It can also go exploding because you can say the gradient of the ReLU will be x, right?

Like a it will be itself. So which means if for extremely large value your gradient can be pretty bad.

And what we're expecting the gradient optimization for your weight matrices.

We hope things are smoothly getting lower and lower. We don't want something like extremely large small or large small like something like that.

That's not something we're looking for. And a really large gradient can actually destroy your update.

Totally because this will. This will make the updates pretty, you know, off the range.

It's very hard. Just like another, another example or bad example is that you can lose some money in the stock market,

but you couldn't lose all your money in stock market because you can never recover.

So that's a good example. So you can make some mistakes in the gradient updates.

However, you don't want to make an extremely exploding gradient because it's very hard to recover for the entire program.

So so in the worst case, in the worst case scenario, if the gradient is large enough, then your loss function becomes infinity.

And so. So this is a very typical thing because you don't write program anymore.

But what I will in or in sorry, I hate to use this, but in in my generation when we're writing deep learning program,

once we think once we solve this infinity or we know or gradient got something

wrong and we immediately know there must be something wrong with the gradient.

And then we know the way. We know we need to fix this bug.

And uh. However, nowadays people don't write loss function anymore.

People don't write code anymore, so you don't need to worry about this. I mean, the agent will, will will fix for you.

So now when I fix this type of issue, I will tell agent like fix this.

I don't know what you are saying,

but fix this and and other things I think I told I chat with agent a lot will be I told you to do something else I don't.

I never told you to do this. And what's what's wrong with you?

I mean, as I mentioned, even you're showing extreme emotion with agent.

It doesn't help at all.

And another thing, nowadays, I think, I think the large models, they're trying to add a guardrail on the self, self, self, self esteem.

I mean you shouldn't you shouldn't use the bad words with the agents.

They will refuse to service you. And I'm not kidding. Like, if you do this frequently enough, they're going to stop your service.

I mean, so it's no longer the best strategy.

And to be polite with your agents, right?

However. However. However, the gradient explosion is also another big issue, a big issue,

but it's easier than the gradient vanishing gradient to fix because you can vanishing gradient,

which means when things are getting smaller, it's it's harder. You can only change your activation function.

But for for the exploding gradient, I think it's easier because you can always do this gradient clipping.

So which means when things are too large larger than a specific threshold, you can do the clipping to do to do some normalization.

So which means you still take the step in the same direction, but you force to have a smaller A step.

So this is. This is a pretty straightforward. And here's a here's a good example.

For example this is your loss function landscape. And what you're expecting is that something some updates like this.

You hope things to you hope you hope your loss to becoming smaller smoothly.

However for the gradient explosion, if what happens will be it will just like simply just go to somewhere crazy.

And this, this, this can cause a lot of issues, especially for the stabilized stability issue,

which means your program, your computer may complain and other things like that.

However, if you just clip the gradient, which means you still go to the same direction,

but you make it smaller, which is which is good, which you can address this issue.

Uh, I think we have a. Yeah, we have some way to do this charge for the clipping.

Um, yeah, but it's a choice. Usually it's a is just an error.

For example, if you if your gradient norm is a really,

really a is a it's a lot is really large and you can rescue and you save checkpoints and do some trials and errors.

Um, and this can be actually published as a paper.

So, so actually many of nowadays many of the papers are this a practical or engineering realization.

So you have some good ideas even very simple. They potentially can be a good paper.

And actually during the break and during other times people are asking me some research opportunities and the PhD opportunities,

I think we will find a good time to talk a certain minutes about the about the about this.

If you want to do some like a, for example, if you really want to do some a PhD PhD thing because that's another big decision.

And, and as a, as a short detour, actually.

Yeah, I think I did some of this detour because I may totally forget what I'm trying to say later.

Um. Yeah.

As I've got this new PhD program, it's called a it's a it's actually just released this year.

It's called the UDP PhD, which means industrial integrated PhD for the person who are interested for the Stem doctoral education.

Uh, there's a new such a thing, which means universities are, universities are, I think, sponsor for 1 or 2 years.

And there's a collaborative industry, I mean, industry partner going to pay for a year or two and NSF will pay for another year so that it's a it's a,

it's a it's very similar to some like European PhD, which means you, you're going to work at a year or two at an industry specific firm directly.

So which is a which is which is which is a which is interesting.

Interesting, interesting setup. And especially for the person who enjoys the industry experience.

And you can you can you can you can you can take a you can take a search.

It's called a. Yeah. It's called a UDP PhD.

It's too new like it's just rolling out. However in the early stage I think there's a lot of opportunities.

Um, and also directly for the person who are interested in the PhD opportunities,

you can go to something called CS, PhD or Groundhog then sorry, sorry.

Then you will see a lot of like pitched opportunities. Uh, posting here.

Sorry. It's a it's not a fully English, but it's maintained by someone else.

But there's a lot of like a PhD opportunities for the person who are interested in, um, yeah.

You can use the translation so that you will see all the opportunities. Um, yeah, there's a lot of opportunities.

Um, right. Anyway, uh, it's just a detour, and it reminds me that I want to find a specific time.

And we may also bring one to a current PhD student to quickly talk about their life.

You can you can also ask your to if they enjoy doing their PhD.

But let me tell you the truth, because two of them are my PhD students. So so they are they're going to be conservative, but I think they're happy.

Like, my group is pretty happy in general, uh, because I meet the person.

I meet the person just on zoom. So they're happy. Uh.

What else? Um, right. Uh, I think we really have the time to finish today.

And we also have time to even start some of the blog straight as well.

Uh, so so so so for today, we talk about activation functions.

Recall like for the x axis w plus b and the nonlinear activation.

And we talk about this sigmoid illusion. Um, yeah.

Sigmoid issue is a probability. A sigmoid issue is that they have this saturating issue, uh, so that yeah, we already talk about this, for example.

When we're actually smaller than -5 or 10, uh, many of the, their activation range is very small from negative.

5 to 5. So, so it's a so it's a so it's pretty bad thing.

And we also talk about uh always positive.

Yeah. This is. An explosion thing we also talk about.

So I think I will I will fly this through um I think we're happy to even start the next blog anyway.

Uh, so, so before we start a blog straight, I think I want to do a quick start blog for, uh, before we even start the next block.

Uh, here's a here's a quick plug in practice suggestion.

If you don't know which a which activation function to use,

just use ReLU function and but but be careful with your learning rate because again ReLU function may get this explosion.

So you can also try out the leaky ReLU. It's also very stable results.

And and usually nowadays don't default down the sigmoid and other things because people are no longer using this anymore.

Um, we'll talk about the vanishing gradient exploding exploding gradient.

Uh, we didn't talk about the non-convex and the computational intensity,

but I think we can we can safely move to the next blog to cover some of things for next week.

Because anyway, next week we have a shorter lecture due to the due to the guest lecture.

Uh, yeah. So, so so in the next block we're going to talk about now we talk about the general neural networks,

for example, the forward pass and the backward pass and this activation functions and back propagation,

and also how to provide how to prevent back propagation by using an agent memory or even doing some like a frozen based update which means Lora, etc..

Now we're going to move to say okay, one zero adapting to different data types like images, time series and graph of how things are looking like.

For example, convolutional neural network, recurrent neural network, and graph neural networks.

Um, yeah. I think with that in mind, I'm going to move to the next block.

Um, I think I also post the the block that block for online.

So you should also get that information. You should also get that as well.

Um, so let me close this. Right.

Yeah. So these are some, like, old slides. Uh, I didn't get a chance to, uh.

I didn't get a chance to update, but still something to consider.

For example, by the time I make these slides, uh, this is your version of what they're posting online.

So they are saying they are. Computer science received over 2500 applications and they are admitting 50 people.

So which means like 2%. Um, I think USA is slightly, slightly better.

Um, what's my author number? I think our number is slightly better, but, uh, still like a digit, uh, still the digit percentage.

So it's still very challenging. Um.

Oh, I remember what I'm trying to say by the time. Okay.

By the time, what I'm trying to say is that, uh, you know, people are always, uh, search for the spotlight or chase for the top of the top.

So so so so. Just like any step function, the even the page, the application are also facing the same issue with a step function.

For example, for the top 20, top 50 times 2030 top top 30 universities, their application, challenge or difficulty will be like this.

However, once it's a go to the next level, the the the complexity or the difficulty extreme drop extremely fast.

The key point I'm trying to say here will be everyone is trying to go to, let's say everyone's going to Stanford, MIT, etc. etc..

Yeah. Why not? However, however, since everyone is going to, it's just like finding a job like this is also the old lecture I give to other people.

Uh, everyone is looking for the job, for example Apple, Microsoft, Nvidia or whatever.

OpenAI anthropic. However, there's so many openings or knees at the intersection of the AI and other things.

I mentioned my personal experience where I started my. I worked at a lot of different places.

Like many of them are not a core technology. For example, I worked at Simmons for a few years, perhaps with a group called Price Water Cooper.

I don't even know how to how to pronounce WWC for a few years, so none of them are.

But of course, I also worked at Microsoft, Norton and other places for a few years.

But anyway, my key point is that many of these intersections they got are great opportunities, and they appreciate your technology and expertise.

You can be somewhat. I think I told you that old story when I was working at PwC.

I decorate my I decorate my table with a lot of like machine learning books and printed printed papers, and they show me some respect and I liked it.

As the only few person who know computer science and AI. Ten years ago, I'd say they actually trained me pretty well.

So so so play your advantage smartly. And, uh.

Uh, for this slide, the same thing. If you really want to do a PhD in computer science, nobody say you have to go MIT, right?

Like, everyone want to go to MIT. Or maybe for the person who who don't enjoy the cold weather they don't want.

But we all know there's some very good answers, but the opportunities are lying in.

For example, for many of the top 50 to top 100 universities, is there a graduate is still going to the big industry?

A big technology industry? Researchers? There's no difference at all. I have so many friends working at this, uh, magic seven.

Uh, they're from many these big state universities.

They're all good. I mean, uh, you must have heard that at San Jose State.

And there's a lot there's a lot of universities that are doing very well for the job placement.

So, so so be open minded. Uh. I'm just I just try to.

Sorry. Like, I just prepare for the block three for today. So I didn't really remember everything for the blog for.

So this is actually showing you, uh, from 2020, 2008 to 2012, how many people graduated for their PhD?

So the median time is six years by that time.

So you will say, so this is a so this um, and 49% of the person may not get their PhD degree in the United States.

Uh, so yeah. So it's not easy.

So it's not an easy choice.

So I never so I never recommend or strongly encourage everyone to do a PhD unless the person really know what they're trying to do.

Uh, however it's all however, I think at USA it's a very good thing because I have a lot of like a computer science faculties,

which means if you really want to do some research in the early stage,

you can and you can find a person to work on and you can quickly know if you don't like it.

Uh, especially for the person who joined the US they recently, I think they are looking for persons to work on.

In total we have 530. In total we have a 50 to 100, uh, SaaS related faculties.

So there's a lot of opportunities.

And that's also something I posted on social media saying there's a lot of opportunities to do the research at USCIS, for sure.

Um, anyway, that's, uh, that's a separate topic, and I think I will spend some good time to, to do that, to to talk about that later, uh, so that you,

you and also feel free to post your questions, whether you have anything about the industry and the,

uh, PhD so that we can summarize it and talk about.

And if we just keep going on, as you can see, there's a lot of different deep neural networks, right?

Like we talk about the feedforward neural networks, which means the general general ones forward and back.

And there's recurrent neural networks. There's the memory networks. And nowadays the most popular one of course is a transformer.

So actually the transformer is not anything new actually transformer I think it's proposed in 2020 or 20 16 or 17.

So it's actually quite a few years, ten years.

However, it's it's important because it gives us a way to do the training, sequential data training smartly.

And we don't need a recap because you already remember the chain rule for the backpropagation computational graph.

You already know everything about this. And the reason why the neural network need to they're doing this, you know, hierarchical learning.

They compress the data and and and and the and and and the and actually from the

very raw raw features to the very condensed feature for the further classification.

That's why neural networks are called this feature. Extractors, because you just throw in the data and it will, it will,

it will do the compression learning and summarize the key information from your data.

You don't you don't need to do anything yourself to to do this learning.

So that's why it's better than the classical machine learning. For the classical machine learning you need to do everything by yourself.

Um, right now we're going to talk about convolutional deep neural networks.

And it's one of the it's one of the k k k stuff for the, for the deep neural networks.

And again this is a this is this is also a bit of the it's a bit of two classical.

But uh you cannot just like a you should also.

You should actually know what the convolutional neural network because it's actually show you something interesting.

Uh, all the stories of the deep neural networks start from some animals or human beings, like, whatever the cat or human or something.

This time it starts from a cat. And, uh. What is it?

What do they realize is that a certain, certain part of the brain are activated when they're saying different things.

So, so, so in early, early experiments, they tried to understand how, how, how, how whatever human or cats or other, uh,

you know, other animals are, are actually constructed as a complex representations from the simple stimulus features.

Because thinking this way, uh, if, if, if brains is like a lot of, like, signals,

how does a simple signal putting together can represent something very complex?

That's a that's interesting. People need to need to know and, uh, And uh, and, and actually, uh, some,

some something like they're learning that, uh, there's a, there's a, there's a human brain.

Yeah. I'm just trying to remember a lot of things. Um, okay, I think I got it.

So, so so for the convolutional neural network,

the core knowledge or the core thing we want to we want to do is that to do this a hierarchical organization.

So people are believing that people are believing that when we're saying we're seeing something,

we're actually digesting this information in layers or in hierarchy.

For example, there will be some simple cells to respond to the light orientation.

Some complex cells respond to the orientation movement. And this is the hyper complex cells which are response to the movement with the end point.

Right. Like so it's not like we're just getting the visual information.

We digest everything in one shot. It's more like we're digesting things in layers and in hierarchies.

So so in hierarchy. So that's a. So that's a so that's what a that's what this motivation looks like.

And again it's a this figure. And again we're just trying to say.

Convolutional neural network also are motivated motivated by the biological neurons and the brains.

You can say. So potentially if you're following Twitter enough X enough.

One of the celebrities in the machine learning world, you know, is a yellow queen, right?

And one of his famous work is, uh, 1988, 1989 or 1989.

So it's named The net, which means it's like it's actually doing something worth saying,

which means giving a giving a visual, giving a visual, giving a visual image, give an image.

Trying to do this, a convolutional operations to extract information from it in layers.

We're going to do we're going to explain the convolutions very soon.

But it will say it's in steps.

It's in it's in layers in hierarchy to to to to extract the complex features gradually then gradually and gradually and getting better and better.

And later they have this later.

Later they have this AlexNet which is a much more, much more popular.

So by that time the name is a convolutional neural network and the design by Alex and of course this, this, Ilya, these names are all big names.

When I make these slides, it's, it's I think he was at OpenAI.

I think he left and I don't know words but must be at some very, very famous startup and also including Geoffrey Hinton.

Everyone knows a more history.

I think I'm going to skip some of this history, but we're just trying to show you that potentially convolution neural network are the.

At least that's the inception of the popularity of the deep neural network,

because humans are attracted by the visions, which means we are not attracted by I mean even even words or the text.

Languages are powerful, but many people are more interested in the vision, video, etc. so.

So the deep neural network actually used in the convolutional neural network to attract the human human attention.

And I think the 2012 is a big is a big year.

If you if you go to block one that the image,

the digit digit classification are doing pretty well with AlexNet and every one is fancy about deep learning.

And that's the inception of the this so-called AI trend I think till now is around 15 years already.

Um, there's a lot of things a convolutional neural network can do, as long as the input is the image or the vision or the video,

Including classification, image retrieval, detection, and segmentation.

I think these things are doing much better nowadays because I do have some like a camera at home when I was not at home when I was not at home.

And originally they are doing this human motion detection. I bought that like a few years back and it's doing pretty bad.

I mean, it's all false alarm. So when when I was teaching, like I got this thing like they saw someone at my home, I was shocked.

And but since getting much better recently, I think it's all because, uh, like, the hardware are not changing.

They're still using the same hardware.

However, the algorithms were potentially some of the competition or or sourced to the cloud, and they're doing much better.

Uh, and oh, another. Another big thing is that when they get this convolutional neural network, they can do the vision games.

Uh, Great. I mean, they can do the style transfer as well, which means they convert one picture using another artist style.

The vision is also very important because that's related to the human beings.

And potentially you can also think about it when you're doing the job hunting.

The reason is because if you're trying to find a job for the large language models, it's challenging.

But the computer use or anything like human related are are needed something beyond the natural language interaction.

As I mentioned, we're building a benchmark which are working with the computer user agent.

So which means what's a complete user agent including reading my emails.

They're not directly getting the metadata from the outlook. There are actually the including getting the metadata from outlook.

They're also getting the vision from the image. Sorry. They're also getting a vision from the outlook.

They do the analysis together. So many of the works may be improved by adding the vision components.

We had. For example, I can show. One large models we were doing in the past.

Actually two papers because they're improving. We're just trying to show you how important the vision can be and whether you want to span

off time during large language models to do some of the 3D vision or the vision thing.

So one paper with data two years ago is actually something called a language model ranking optimization.

So this large model of ranking optimization, for example, in the past when you're doing recommendation,

you are searching for something and you can you search for some product.

And the retrieval result gave you a list. Let's say you're buying a coffee machine and you search for I want a coffee machine.

You are going to Amazon. We're doing something like that. However, Amazon has their algorithms to retrieve a list of the coffee machines for you.

You don't know what's your algorithm, right? But you potentially know someone are paying the promotion and some of them are based on the matching

because whatever you are saying are should be matched to match the well with their description.

However, nowadays the matching algorithms are changed or replaced by, for example, large language model matching.

So it's no longer so. It's no longer so it's no longer something like a classical vector based matching matching.

Then the question will be can we modify or product so that the description can modify my product

description so that my coffee machine are more easily to be retrieved by the large language models.

So so this is that figure. For example this is a user want to buy coffee machine going to large language models.

And the large language models will retrieve something retrieve a list of like coffee machines.

However this can be detected if I change my, you know, description Up for the larger models.

Some of them that rank will be changed. For example, my last ranked product will be the highest rank.

It's similar to the classical search. Search engine optimization because by the time, by all the time, you are trying to optimize your ranking.

For example, when they are searching who the smart, the master student at USC,

computer science you hope hopefully you want to, or who is the most promising computer science master at USC.

You want your name to be retrieved. So how to actually attack that?

We by the time we learn some we build some algorithms for that.

We don't want to. I'm not trying to show you this, however.

However, we quickly do a separate work. We did a second work on top of this.

Uh, it's called the ah, it's called multi-modal generative engine optimization.

So so what we what we think further will be in real world.

Many of the searching is not only about the textual information, right?

For example, when searching for a while, searching for a certain product like baby stroller I.

Besides, besides the description of the baby stroller, I potentially I also put a put attention on the visions as the human being.

I think we put a lot of attention on the on the visions and simple the simply the purely the the the textual description.

So so that's why we extend the further work to see how we can attack or optimize my product to be

put a higher rank by changing both of the images and the textual description of this tutorial,

I'm just trying to show you that originally, a vision or vision of computer vision is very important.

Now this is still very important because the the ultimate customers are human beings.

As long as the human beings are the are the are the are the consumers, then the visions are also very important.

And if you want to develop some expertise on the visions, you can also try to take a course on the visions that you guys see.

I think I think we have a few advanced graphics or something like that.

You can you can take a look at also my colleague who's the who's who's first name is also a real one.

He's also I think he's also teaching something similar in the computer graphics or computer vision.

It will be very useful because our recent benchmark is still developing.

We're using computer vision to play a lot of like hard games and daily, daily, daily,

daily routines for the job so that we're trying to see whether the vision can help the.

AI agents to do the job better. The other answer is yes. So which means if you add in more visions to your genetic flow, it can be much more useful.

So that's why I encourage everyone to try the computer use. Um, yeah.

Again, besides, like talking about this basic, fundamental stuff,

we also want to give people the new insights on a lot of things you may not know before.

Hopefully that will be still useful. Uh, yeah.

In the past, people are also doing this image captioning.

But this is sort of the problem for large Bayesian models already, which means give you an image and generate the caption so it's no longer a problem.

So many of the cases we're showing here are no longer are no longer a problem for the computer vision,

uh, because of the visual language model and the, uh, yeah.

And and now we're going to look at the details of the convolutional neural network.

This is the AlexNet.

So, so the raw input is the image and the, uh, and and and and the first few layers will be something called the convolution layer.

Pool layer. We're pooling layer. We're going to see the details later.

Now we're just showing you the basic structure Convolution layer, pooling layer, convolution convolution,

convolution pool and fully connected layer, and then fully connected layer and softmax.

So you can say the new part we're going to learn in this block will be this middle thing like the convolution layer and the pool layer,

the image thing we already know. And this is a fully connected layer we already covered in the first part of the lecture.

Which means we call that neuron w x whatever, whatever you already know it.

Softmax is just like remember converting things into probability.

So so so you already know everything about this convolution layers and pooling layers.

Uh and we're going to talk about that.

Layers. Uh so what are these layers. Uh I think we got a time to finish a few of them.

And it's great because this can compensate the people's feeling that they're they're missing one lecture from this entire semester.

Don't worry. I have a lot of slides and many of them are 100 pages.

So, uh. And I'm also, as you can see, where we keep adding new contents to the slides.

So trying to refresh the course material before the course starts, because I usually add a few more things before things starts.

Um, yeah.

Honestly, I also take this chance as a learning opportunity for myself because even I'm teaching this every year since our changing that fast.

And I also forgot something.

But this reminds me many things as well. Um. What else?

Uh, yeah. Uh, for example, many new new concepts are actually very old concepts and renamed, for example,

uh, the the most popular new topics nowadays, if you're doing some research is called RSI.

Uh, I'm not sure you heard of this. Uh, it's a it's a it's called a recursive self-improvement.

So this is one of the you can say most of things are published like a few hours or a day ago.

So this is a so this is a so-called a new error of the AI Google Gemini.

And I think the current version of the ChatGPT Astra uh, are are using this RSI.

So what they are saying is that how to improve your agents by themselves is more like a self-development.

Actually, before these people are calling this a self involving, uh, agents.

And so if you are chasing the popular topics and you should just pay attention to RSI and uh,

for students actually were were also doing something new,

you can say, yeah, you can see so many things are coming for this are every, every, every day.

And you can read this OpenAI blog a week ago regarding RSI.

Uh, so this is a new structure they're saying for pushing the large language models.

Uh, right. Uh uh, yeah.

If you in the later part, in the later part of the course, we're in the middle part of the course, we're going to learn something called momentum,

which means when you're training your deep neural networks, you want to add a bit more momentum on the direction, which works well before.

Similarly, even working in the AI time that, for example, these things are popular,

you should potentially do them or learn a bit of them because they got momentum for a few months, if not a year.

And if you're fast enough, you can use this momentum to get a good job or publish a paper or whatever.

So, uh, search for RSI and if you want to do a project for RSI that's also pretty fancy.

And don't worry about the proposal. It's a it's all about a pivot.

And we're not going to yeah. The projects for helping people to explore.

It's not for restricting you to do the same thing or whatever you propose in your first version, so don't worry about that.

For the convolutional neural network.

The core will be the first two layers, which means the convolution layers and the pooling layers for the fully connected and softmax.

We've already talked about and covered it before. Let's see how much we can cover.

So because we already talked about the fully connected layers, let's quickly redo this again.

Uh, so basically if you have a cube or a tensor which is with a dimension and NP, then a fully connected operation layer takes the input structure,

which means you just like let's say this is a three, two, two,

then you just stretch it into three times two times two, which means the 12th dimension input.

And you, you actually get some weight matrices and you do w w w w w dot product with x.

And that's it. This is nothing. Nothing fancy. Just cute.

Just mean the dimensions of the dimension.

Which is cute. Okay. Which means this is the dimension number of the neurons.

Or what's your output will look like. So. So, so so this is nothing different from what we already learned for the fully connected layers.

Which means the only thing that you stretch your images or the your your your tensor.

And doing this fully connected layers. So so so for the image.

For the image I know this looks a bit creepy, but it gives me a few seconds for fully connected layers.

What you can do will be the following. So this is your so so so for example let's say this image is a 20 by 200 by 200.

I mean, uh, you know, image are always uh, some like two dimensional stuff, right?

And you have a 400. Sorry. You have a 40 K, uh, pixels.

So which means you need further hidden units.

And with that in mind, you need a 2 billion parameters for even just digesting such a small 200 by 200 images using a fully connected layer.

So it's very dense and and and usually you can never really train 2 billion parameter model just using this a simple image.

And it's not a it's not a it's not a good use of the deep learning and computation.

And many things are and many things are actually lost.

And you actually don't have anything like a spatial correlation.

We're going to say what's a correlation then and again.

And but most importantly the spatial structure of the images are destroyed.

So what's the spatial structures. Uh, in short for example, thinking about the image in the similar region or in the same region or in a local region,

the color of the the color of the the color of the different pixels in this region should be closer enough,

because that's why they have this structural information or spatial information.

And however, if you treat them independently, if you treat each pixel independently, you lose this structural information.

And so so. So this doesn't look like a very good idea.

So what if I just build a separate thing, which means originally if I, if I, if I,

if I have this fully connected layer, however I make this a locally connected layer.

So which means I assume these are correlated. These are correlated.

These are correlated. And I can reduce my total parameters to four millions.

So uh, so this this actually so which means I build a future.

So the future is like a local region ten by ten. So for ten by ten I did a data one sample.

So I largely read. And many of the information are redundant right.

For example for a very small region the information in that region should be very similar or I shouldn't treat them independently.

I just need the representation altogether. Similarly,

just like a group project for the reason why we ask people to submit their group

projects as a report as a group is because if you submit your individually,

we don't need to group the same thing four times or five times.

Similarly for the for the vision for the same group or the local groups, the information are the same or very similar.

So we just need zero representative like one report or one representation at a time.

For example. For example however this is this. This also has their limitations.

But the limitation is that we assume that if the images are their local,

their local representations are unique enough, and and also the same parts show up at the same location.

So you can say so you can say using using this way these local regions.

These are each local small regions, ten by ten. They share the. They share the same local weights so that we already reduced the number of parameters.

Which is which is which is good.

However, if we take one step further, can we structure this local region pattern learning to to which means can we actually even be more efficient?

Uh, so so so the idea can be, can actually share the same parameters across different locations.

So that would be even more ideal because this is a shared local width of the local regions.

Uh, and if, if for if we're doing the fully connected layers, which means their share, they share no parameters at all.

Like everything is independent. And you can say now we're just taking a step further, step further, step further, saying, uh,

can we actually learn something, uh, more efficiently based on the based on the characteristics of the images.

So that's why they have this convolution convolution with the learned kernels.

And we're going to explain this in details. Uh so so so convolution layers.

It's actually so yeah. For example, if one day if one day actually you stay at a university, I'm becoming an instructor.

You will realize that when you are teaching, you are not as sleepy as students.

I don't know why, but, uh, when you are teaching your you're pretty, you're pretty.

Okay, but I know students are suffering.

Uh, so that's why I'm trying to bring something in the middle every few 10 or 15 minutes so that people can take a break in a sense.

But but it's interesting. So if you want to prove this, it's right or wrong.

You can go through that route and try your teaching route.

Um, it's not bad. It's not that bad. I don't want to quit my job. Actually, I was at a two startups.

I was at a one startup, I'm still at a one startup, and I stopped my recently funded startup because the startup world is is crazy.

And, um, it's crazy. Uh, yeah.

So people are saying the only few, only the few ones which are actually finally succeeded, but 99%, this goes nowhere.

Luckily, a few a few weeks back, a student, Rachel, is from one of my friends,

gave a strong recommendation for the student to get a to to to do a PhD at my lab.

So I said, oh, we can chat. So I chat with this person.

That person was very lucky. So he exited with 6 million in the last last round of the startup.

However, hey, all this money is gone and he even put in some depth for his new startup because he said you couldn't stop,

like for the last few months of his new startup. He uses a personal phone to to pay the salary of the employees.

So now he wanted to take a break at universities to.

Uh,

so so so so many of the person even even they succeeded in one round of the startup and another round may give you give them totally different result.

And so if you're building a startup, just make sure at least don't lose money and stop when needed.

And that's also very important.

But finally, I did actually admit the students the reasons because I don't think taking PhD is another break is,

uh, I don't know which one is worth startup or PhD. You know, it depends, but I couldn't easily say which one's easier.

Uh, right. But all I want to say is not it's not saying, like, everything is challenging.

I think everything is challenging and exciting at the same time. Like I tried many crazy things.

I changed my direction many times and each time I feel it's not too bad.

And so, at least for now, I'm pretty, uh, I'm pretty happy.

And, uh. And the other day, uh, that's another too long story, I will say for next time.

But I will finish the, uh, I will finish another in another five minutes.

And you're you're afraid to go. Uh, so, so the convolution layer, a convolutional layer or convolution layer, whatever you want to name it.

It's actually a way to efficiently capture the information from the images through the vision vision data.

So for the general image you will say it's a it's a it's a it's usually three dimensions

like a 30 whatever it is 32 whatever the dimension that there will be three channels,

which means if you remember, that will be uh red, blue, green.

And there will be three channels. So usually this will be the times red.

And Uh, what we really want is that using a convolution to preserve the spatial structure and getting some important information from it,

and in a smart way. So, so so what's the convolve or convolution?

So the first design is something called a filter.

So the filter is like a small size small pieces of the information like they try to slide over the image.

I think yeah I think actually there I think next time I will bring a small video, that small video will be seen, will do something perfectly,

which means the sample a large they can actually sample a large from a sample from a large image, and then they put a sampled figure together.

You will still see what's a large image look like.

But anyway, the convolution doing the similar things, they they first set up a few like this standard filters.

And usually the filter depth are the same as the original image depth.

For example three. And then and then they got this one number by the convolution.

So for example when you apply this five by five five by five times three filter w to this image when you apply, once you get one number from it.

So which means so which means for 32 by 32 image.

And you apply this a five by five filter. This can largely reduce the number of the representations.

Let's say this animation quickly. So you do the first sampling second sampling third.

And you just keep doing that. So you will see each sampling applying this convolutional filters to filters to the image once you get one number.

So for example this will be five numbers. That should be five numbers.

No it shouldn't be five right. Because it's a 32 five solution number.

Anyway I will I will I will test you guys on the midterm. What's the number is there's a calculation formula but I don't remember.

It's in slide in the, in the slides. Uh And and your convolution you convolution actually.

Which means slide over all the spatial locations, which means after you do the first row, you do the second row.

And there can be overlapping. So these are all controllable. And so so therefore you can, you can, you can you can you can you can do multiple.

And you can also do multiple filters because each of the filters have different weights.

So you are sampling different things from the images so that you can you can you can for example now do six different filters.

So you will, you will you have six filters. And finally you have six activation maps.

And each of these activation maps is actually got from by sliding each of these filters on top of this original images.

And of course you have some bias bias vector again.

So you can say for the convolution layers zero with matrices are are just zero.

Weight matrices are here right. Like they have their own weights.

For example for each of the for each of the fields. The size is a three by five by five, so that will be a 75 a 75.

Learnable parameters. And these are just like the outputs.

And whatever you are trying to learn is actually here the weight matrices. So these are the filters right.

And this will be the output of the. So this will be the sample or the learner representations of the large images.

But compare these two things. Originally you have a 32 by 32 times three image.

This will be your original size. And after this sampling it's reduced to 28 by 28.

And of course, if you don't use the six dimension, if you just use a one dimension,

you largely reduce your image size, or you largely reduce your image representation to a much smaller one.

If you use a larger filter, then this will be even smaller.

So you can say you can control how much compression for your images.

But of course, these are alternatives, all tunable or tunable or changeable knobs, which means you can control the filter size.

You can control how much overlap I can have.

These are the all gathered terminologies and we will cover.

I just want to find an elegant place so that we can stop. Uh, but it's already at 815 and people are 99% of that.

So. So I will let you guys to maybe gather Taco Bell.

I'm not sponsored or getting permission from them. Uh, anyway, enjoy and have questions.

I'm here. Yeah. Take care.

`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "Why Deep Learning: Approximating f*, Without Hand-Built Features",
    body: `Every machine learning problem is still the same shape: learn a function mapping X to Y. Mathematically there may be one perfect function, f*, that does this exactly — but you will essentially never find it. So the goal is an approximation that's good enough. Deep learning is one way to build that approximation, and its theoretical license is the Universal Approximation Theorem from Lecture 1: a wide enough network can approximate any function. It's a theoretical guarantee only, since you can never actually build an infinitely large network.\n\nThe professor named three properties that made deep learning exciting a decade ago. It is non-linear, it is hierarchical (building complex representations out of simple ones, loosely like perception), and it is end-to-end (one system goes from raw input to final output). The 2026 twist he opened with: where we used to train a separate f for every application — one model for stock prices, another for translation — many of those functions are now condensing into a single foundation model.\n\nThe practical difference from Lecture 2's classical methods is automated feature extraction. In his industry days, the first question on any project wasn't "which model?" but "what features do you have?" — and engineers had to hand-craft features, often while translating between HR or finance teams who didn't speak the same language. Deep learning absorbs that step: throw in whatever raw data you have and the network learns which features matter. That's why labs will now train on almost anything — the professor's examples were scanned rare books and aerospace data.\n\nOne caution he was candid about: the "neurons are like brain cells" analogy is a motivation, not a mechanism. A biologist told him flatly that the resemblance is nonsense. The abstraction that holds up is simply inputs in, some function, output out — and many such units connected together.\n\nExam insight: if asked what distinguishes deep learning from classical ML, "automated feature extraction" is the answer he emphasized, with non-linear, hierarchical, and end-to-end as the supporting properties.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Forward Propagation: Computing Layer by Layer",
    body: `A neural network is a set of neurons connected in a non-linear way. The textbook diagrams are symmetric and fully connected — every neuron in one layer wired to every neuron in the next — but that's a convention, not a requirement. You can drop connections, skip layers, or prune the network down to save cost; automated machine learning research did exactly this.\n\nEvery network has two passes. The forward pass is how you get from input X to output Y. It's sequential: the input goes through each neuron in the first layer, each computing its weighted combination and applying a non-linear transformation. Those outputs become the inputs to the next layer, which does the same, and so on until the final layer produces the prediction. The rule is simple — each layer's output is the next layer's input. The forward pass is also what people mean by inference or prediction.\n\nThe professor tied this to how LLMs actually generate text. Given "the light is," the model first runs a prefill step over the given tokens, computing intermediate representations called keys and values (K and V) for each one. These are saved as the KV cache. When the model predicts the next token ("red"), it computes K and V for that one token and appends it to the cache — it doesn't re-process "the light is red" from scratch. So the forward pass isn't just producing an answer; it's saving intermediate results that make every later step faster.\n\nThis also explains why you see ChatGPT output appear token by token: LLMs are autoregressive, meaning each new token is generated based on all the previous ones, one at a time, not in parallel.\n\nExam insight: know that forward pass = inference = prediction, and that each layer's output feeds the next. The KV cache and autoregressive generation are good interview material — the professor said transformer internals are increasingly asked about, and KV cache gets a deeper treatment around weeks 8 to 10.`,
  },
  {
    tag: "📐 Formula",
    title: "Weight Matrix Shapes: The Numbers He's Tested Before",
    body: `The professor said directly that past midterms tested these numbers, because this exact exercise "tortured" him as a student and he passed the tradition on. It's straightforward once you see the pattern.\n\nTake a 28×28 pixel image. Flatten it and you get 784 input features. Suppose the first hidden layer has 128 neurons. Every input connects to every neuron, so the first layer's weights form one big matrix W1 of shape 784 × 128. The logic: one sample (1 × 784) multiplied by W1 (784 × 128) gives a 1 × 128 result — one value per neuron — which becomes the input to the next layer.\n\nIf the next layer has 10 output neurons (say, ten digit classes), W2 is 128 × 10: 128 inputs coming in, 10 neurons going out. The general rule is that a layer's weight matrix is (number of inputs) × (number of neurons in that layer), and the inner dimensions must match for the multiplication to work.\n\nTo count parameters, multiply the dimensions and add the biases, one per neuron. For this example: W1 has 784 × 128 = 100,352 weights plus 128 biases; W2 has 128 × 10 = 1,280 weights plus 10 biases. A student asked about more complicated connection patterns; the professor said to assume the plain fully connected case, and added that "the midterm will be very straightforward and there's no tricky questions."\n\nExam insight: practice going from a layer description to a weight-matrix shape and a parameter count. Flatten the input first, then it's (inputs × neurons) per layer, plus one bias per neuron.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Non-Linearity Is Non-Negotiable",
    body: `The professor was unusually explicit here: this "is always something we will have during the midterm." So it's worth being able to explain cleanly.\n\nA two-layer network computes f = W2 · max(0, W1 · x). That max(0, ·) in the middle is the activation function — the non-linear step. Now ask what happens if you remove it. A three-layer network without activations is f = W3 · W2 · W1 · x. But matrix multiplication is associative, so you can multiply the weight matrices together first: W2 · W1 is just another matrix, call it W. The whole three-layer network collapses to f = W · x — a single linear transformation.\n\nThat's the whole argument. However many layers you stack, if there's no non-linearity between them, the network is mathematically identical to one linear layer. You've built something deep that has exactly the expressive power of the linear classifier from Lecture 1, and it can't learn anything that isn't linear — which, as Lecture 2 showed with the non-separable red and blue points, rules out most real problems.\n\nThe professor also gave the intuition for why depth helps once you do have non-linearity: networks compress. High-dimensional raw input gets squeezed through successive layers into smaller, more meaningful representations, the way vision turns raw light into edges, then regions, then objects. He quoted the idea that intelligence is compression.\n\nExam insight: the answer is "without non-linear activations, any stack of linear layers reduces to a single linear layer, because W3·W2·W1 is just one matrix." Write the collapse out explicitly if you can.`,
  },
  {
    tag: "📐 Formula",
    title: "Activation Functions: Sigmoid, ReLU, and the Variants",
    body: `An activation function is applied after each layer's weighted sum to introduce non-linearity. The idea is loosely borrowed from biological neurons, which fire only once accumulated signal crosses a threshold — like a step function. The professor walked through the main options and their trade-offs, noting that old-school interviewers still like asking "name some activation functions and their pros and cons."\n\nSigmoid, σ(x) = 1 / (1 + e^(−x)), squashes any input into the range 0 to 1. That's its appeal: the output reads like a probability, which is why it's still used at output layers for binary probabilities. Its big weakness is saturation. Plug in 5 and you get almost exactly 1; plug in −5 and you get almost exactly 0. Outside roughly −5 to 5 the curve is flat, so −10 and −5 produce practically the same output. That flatness causes vanishing gradients. Its derivative is neat — σ(x)(1 − σ(x)) — but that also goes to zero whenever σ is near 0 or near 1. Tanh is a related squashing function the professor mentioned but called unimportant.\n\nReLU (rectified linear unit), max(0, x), is the common default. Negative inputs output exactly zero; positive inputs pass through unchanged. It's popular for three reasons: its derivative is trivially simple (1 on the positive side, 0 on the negative side), it's cheap to compute, and it doesn't saturate on the positive side, so it keeps the gradient signal alive. Its weakness is dying ReLU: if a neuron's inputs are mostly negative, it outputs zero and has zero gradient, so it stops learning entirely and can't recover.\n\nThe variants all try to fix the negative side while staying non-linear. Leaky ReLU keeps a small slope for negatives (0.01x), so a little signal survives. ELU uses a smooth non-linear curve on the negative side. GELU and SiLU are smoother near zero and give non-zero gradients for many negative inputs, at the cost of extra computation. A natural question is why not just use a straight line through the negative side too — the answer is that it would be linear again, and you'd lose the whole point.\n\nThe practical advice from the slides: default to ReLU but be careful with the learning rate, try Leaky ReLU if needed, and don't default to sigmoid anymore.\n\nExam insight: know sigmoid's range (0 to 1), why it saturates, and its derivative; know ReLU's formula, its derivative, and what dying ReLU means. The comparison between the two is the most likely question.`,
  },
  {
    tag: "💡 Concept",
    title: "Capacity, Softmax, and the Total Loss",
    body: `More neurons means more capacity. The professor showed the same dataset with 3, 6, and 20 hidden neurons: the decision boundary goes from simple to highly complex. More capacity can fit more complicated patterns, but with the overfitting risk from Lecture 2. A decade ago people seriously debated whether large networks were needed at all. Nobody asks that now because of scaling laws — the practical question has become whether you have enough data and enough GPUs.\n\nFor prediction, the network's raw output scores need to become probabilities. That's softmax: exponentiate each score, then divide by the sum of all the exponentials, so everything is positive and sums to 1. The professor's example had scores for "red," "blue," and "green" as the next word after "the light is," with red getting the highest probability. One small caution: the numbers on his slide (2, 1, 1 becoming 0.50, 0.25, 0.25) are just divided by their sum, which illustrates normalization but isn't the actual softmax — true softmax of (2, 1, 1) gives about 0.58, 0.21, 0.21. The shape of the idea is the same.\n\nThis is also why "LLMs just predict the most likely next token" is, strictly speaking, accurate. If the training data says the next word really was "red," the target is 100% red, and the model is updated so that red becomes more probable next time. How that update actually happens is backpropagation.\n\nPutting the pieces together from both blocks, the full objective is total loss = data loss + regularization. The data loss measures how far predictions are from the ground truth; the regularization term penalizes large weights to guard against overfitting.\n\nExam insight: know that softmax converts scores to a probability distribution that sums to 1, and that the total loss has exactly two parts.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Backpropagation: Computational Graphs and the Chain Rule",
    body: `The forward pass makes a prediction. The backward pass is how the network learns from its mistake. The goal is to minimize the loss with respect to every weight — you need the derivative of L with respect to W1, W2, and so on, so gradient descent knows which direction to move each one.\n\nFor a tiny network you could derive those derivatives by hand. For anything deeper than a few layers, with non-linear functions stacked inside each other, that becomes hopeless. The solution is the computational graph. You describe how your forward computation flows — x times w, then add, then an activation, then a loss, then regularization — as a graph of simple operations. That's all you have to write. Frameworks like PyTorch and TensorFlow then compute every gradient automatically; this is often called autograd.\n\nThe math underneath is the chain rule, applied back to front. The professor's toy example was f = (x + y) · z. Name the intermediate q = x + y, so f = q · z. To find how x affects f, you first need how q affects f, then how x affects q. That's why backpropagation runs from the loss backward toward the input: each earlier layer's gradient depends on the later layer's result. At every node, the gradient passed backward is the upstream gradient (coming from later in the graph) multiplied by the local gradient (that node's own derivative).\n\nA few patterns recur. An add gate distributes the upstream gradient equally to both inputs. A multiply gate gives each input the upstream gradient times the other input's value. And computational graphs aren't unique — the same calculation can be broken up different ways — so you choose whatever is easiest to express and differentiate. This is exactly why activation functions with simple derivatives are favored: sigmoid's σ(1 − σ) is neat, and ReLU's is simpler still.\n\nIn practice all of this is done a whole layer at a time, not neuron by neuron: the loss gradient goes to the last layer, then the one before it, all the way back to the first, updating every weight matrix to reduce the loss.\n\nExam insight: the professor said explicitly that you won't be tested on calculating these derivatives by hand. Know the concepts instead: backprop runs back to front via the chain rule, the gradient at a node is upstream × local, and you only need to define the computational graph — the framework does the rest.`,
  },
  {
    tag: "💡 Concept",
    title: "Vanishing Gradients: When Early Layers Stop Learning",
    body: `Now that backpropagation is on the table, the sigmoid problem can be explained properly. By the chain rule, the gradient reaching the first layer is a product of many terms — one factor for every layer between it and the loss. Multiply many numbers that are each small, and the product heads rapidly toward zero.\n\nThat's the vanishing gradient. The further a layer is from the output, the more factors get multiplied into its gradient, and the smaller its updates become. Layers close to the output keep learning normally, but early layers barely move. Over training, the network ends up dominated by the layers nearest the output, while the early layers lose their influence. The professor's analogy: your USC admission should depend mostly on recent achievements, but your undergrad and high school still count for something — vanishing gradients erase that earlier effort entirely.\n\nSigmoid makes this much worse because of its derivative, σ(1 − σ). When the input is below about −5, σ is near zero, so the derivative is near zero. When the input is above about 5, σ is near one, so (1 − σ) is near zero, and the derivative is again near zero. Only a narrow window around zero produces a useful gradient, and in a long chain it only takes some of those near-zero factors to wipe out the signal.\n\nThe fixes: stop using sigmoid in hidden layers and use ReLU or its variants (Leaky ReLU, parametric ReLU, ELU), which have a gradient of exactly 1 on the positive side and don't saturate. The other fix is batch normalization, which stabilizes training by normalizing across a batch of samples and reduces internal covariate shift; the professor said it gets proper treatment in the training-dynamics lecture.\n\nExam insight: be able to explain the mechanism — the chain rule multiplies many small factors so early-layer gradients approach zero — and why sigmoid specifically causes it (its derivative is near zero outside roughly −5 to 5).`,
  },
  {
    tag: "💡 Concept",
    title: "Exploding Gradients and Gradient Clipping",
    body: `The opposite failure is the exploding gradient: gradients become enormous instead of tiny. Ideally, training walks the loss smoothly downhill. A huge gradient instead launches the weights somewhere wild in a single step, wrecking the update. In the worst case the loss goes to infinity. The professor recalled that, in his generation, seeing an infinity or NaN in training was the immediate tell that something was wrong with the gradient.\n\nHis analogy was the stock market: you can survive losing some money, but if you lose all of it you can never recover. Small gradient mistakes get corrected over time; one catastrophic step can ruin the whole training run.\n\nExploding gradients are actually easier to fix than vanishing ones. For vanishing gradients you mostly have to change the activation function. For exploding gradients you can use gradient clipping: if the gradient's size exceeds a chosen threshold, rescale it down. The key detail is that clipping keeps the direction and only shrinks the step, so you still move the right way, just more cautiously. In practice the threshold is found by trial and error, often alongside saving checkpoints so you can roll back.\n\nExam insight: know that gradient clipping preserves the gradient's direction while limiting its magnitude, and that exploding gradients are considered the easier of the two gradient problems to fix.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Training Costs So Much More Than Inference",
    body: `Inference is cheap. The forward pass is mostly just computation, which is why people can run LLMs at home on a machine with enough unified memory — the professor mentioned 128GB Mac minis and NVIDIA DGX Spark boxes — and why companies sell sealed boxes running open models to hospitals and law firms. No training happens; it's forward pass only.\n\nTraining is expensive because backpropagation has to keep intermediate results from the forward pass in memory in order to compute gradients. With billions of parameters, even at 8-bit or 16-bit precision, that memory cost is enormous. So researchers ask: can you get the benefit of learning without paying for full backpropagation? The professor sketched three alternatives, and said the details come in a later lecture.\n\nFirst, update only part of the model. LoRA (low-rank adaptation) freezes most of the model's parameters and trains only a small addition, dramatically cutting memory; it's one of the most cited papers in the field. The professor described it as a special case of the broader idea of fine-tuning on top of a frozen base model, tailored to transformers. Second, test-time training does small incremental updates at prediction time. Third — and he called it "relatively stupid" once you see it — agent memory and retrieval skips learning altogether. Instead of training the model to know something, you save the information externally and look it up when relevant. That's how ChatGPT or Claude can seem to know you better over time without the model itself being retrained.\n\nHis example: to predict how hard the midterm will be, you could train a model on all the course material — or you could just ask him and write down the answer. The notebook is the agent memory.\n\nExam insight: this is framed as interview material. If asked how to save GPU memory, the two answers are to update only part of the model (LoRA) or to move knowledge into external memory instead of the weights.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Into CNNs: Why Fully Connected Layers Fail on Images",
    body: `The lecture ended by starting the next block, convolutional neural networks. The biological motivation this time is a cat: early experiments found that visual processing is hierarchical. Simple cells respond to light orientation, complex cells to orientation plus movement, and hypercomplex cells to movement with endpoints. You don't take in a scene in one shot — you process it in layers. Yann LeCun's LeNet (1989) built that hierarchy into a network, and AlexNet (2012) is where deep learning exploded into popularity, largely because people are drawn to vision.\n\nThe typical CNN, using AlexNet's shape, goes: convolution, pooling, more convolutions, pooling, then fully connected layers, then softmax. Everything except the convolution and pooling layers you already know.\n\nWhy not just use fully connected layers on images? The professor's example: a 200×200 image is 40,000 pixels. Connect that to 40,000 hidden units and you need roughly 1.6 billion weights (the slide rounds to about 2 billion) just to take in one small image. That's wasteful and untrainable. Worse, it destroys spatial structure — flattening treats every pixel independently, but nearby pixels are strongly related, since neighboring pixels tend to share similar colors.\n\nThe fix happens in two steps. First, go locally connected: each hidden unit only looks at a small patch, say 10×10. Now it's 40,000 × 100 = about 4 million parameters. His analogy was group project reports: if the information within a small region is nearly the same, you only need one representation, not one per pixel. Second, share the weights across locations — use the same small set of weights for every patch. That shared, sliding set of weights is a convolution filter.\n\nExam insight: know the two reasons fully connected layers are bad for images — far too many parameters, and loss of spatial structure — and the two-step logic (local connectivity, then weight sharing) that leads to convolution.`,
  },
  {
    tag: "📐 Formula",
    title: "The Convolution Layer: Filters and Output Size",
    body: `A color image is three-dimensional: width × height × 3 channels (red, green, blue), for example 32 × 32 × 3. A convolution layer slides a small filter over it. The filter's depth always matches the input's depth, so for this image a filter might be 5 × 5 × 3.\n\nAt each position, the filter is multiplied element-wise with the patch of image under it and summed (a dot product), plus a bias, producing a single number. Slide the filter across every spatial location — across a row, then down to the next row, possibly overlapping — and those numbers form a 2D activation map.\n\nFor a 32 × 32 input and a 5 × 5 filter moving one pixel at a time, the activation map is 28 × 28. The general formula for output size is (N − F) / stride + 1, where N is the input width, F is the filter width, and stride is how far the filter moves each step. Here, (32 − 5) / 1 + 1 = 28. The professor said directly that he will test this calculation on the midterm.\n\nOne filter produces one activation map. Use several filters, each with its own weights, and each learns to detect something different. With six 5 × 5 × 3 filters you get six activation maps, stacked into a 28 × 28 × 6 output. Each filter has 5 × 5 × 3 = 75 learnable weights, plus one bias. Compare that to the billions of weights a fully connected layer would need.\n\nFilter size, stride, and overlap are all adjustable, and they control how much the image gets compressed. Padding, pooling, and the rest of these knobs come next lecture.\n\nExam insight: memorize (N − F) / stride + 1 and practice it. Also know that filter depth equals input depth, one filter gives one activation map, and the number of filters sets the output depth.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Detours: Harnesses, Agents, Interviews, and PhDs",
    body: `NOT ON THE MIDTERM — this card collects the lecture's side conversations. They're worth knowing for context, interviews, and project ideas, but none of it is examinable.\n\nHarness engineering came up from a student question. A harness is the layer that controls how agents work together systematically. It usually isn't learnable. Early harnesses were just prompt engineering — a user writing instructions like "agent A plans, agent B searches, agent C codes." Later, the labs designed harnesses themselves, often around the ReAct loop from Lecture 1, with gates for what agents can and can't do. The newest direction is graph engineering, which treats the agents and their communication as a graph to optimize. The professor distinguished this from the lecture's actual subject: harnesses coordinate agents, while this lecture is about how each model inside is trained.\n\nHis biggest practical warning about agents wasn't hallucination but scope drift: you ask an agent to help with one project and it gradually, silently wanders into doing something else entirely. Keep your scope explicit. He also urged everyone to try computer-use agents, which he now uses to triage email, manage course admin, and even draw paper figures.\n\nOn interviews: he thinks the format has shifted. There's still an online coding assessment, but the later rounds lean toward breadth — system design, how LLMs work, transformer internals, and how you'd apply them to the job — rather than narrow puzzle questions.\n\nOn hot topics: recursive self-improvement (RSI), meaning agents improving themselves, is currently very popular; he noted it's largely an older idea (self-evolving agents) renamed. On careers: USC has a large CS faculty and plenty of research openings, a new industry-integrated PhD format is rolling out, and he stressed that great opportunities sit at the intersection of AI and other industries, not just at the top tech companies.`,
  },
];

const VOCAB = [
  { term: "f* (optimal function)", def: "The ideal mapping from X to Y. Rarely findable, so deep learning builds an approximation that is good enough." },
  { term: "Automated feature extraction", def: "The network learns which features matter from raw data, instead of engineers hand-crafting them — the key difference from classical ML." },
  { term: "End-to-end learning", def: "One system learns directly from raw input to final output, without separately designed stages." },
  { term: "Fully connected layer", def: "Every neuron connects to every neuron in the next layer. A convention in diagrams, not a requirement." },
  { term: "Forward pass", def: "Computing from input to output layer by layer; each layer's output is the next layer's input. Same thing as inference or prediction." },
  { term: "Prefill", def: "The LLM step that processes the given prompt tokens and computes their keys and values before generating new tokens." },
  { term: "KV cache", def: "Saved keys and values for tokens already processed, so each new token only needs its own computation instead of reprocessing everything." },
  { term: "Autoregressive model", def: "Generates each token based on all previous tokens, one at a time. Why LLM output appears token by token." },
  { term: "Weight matrix shape", def: "(number of inputs) × (number of neurons in the layer). E.g. 784 flattened pixels into 128 neurons gives W1 of shape 784 × 128." },
  { term: "Activation function", def: "Non-linear function applied after each layer's weighted sum. Without it, the whole network collapses to one linear layer." },
  { term: "Sigmoid", def: "σ(x) = 1 / (1 + e^(−x)). Output range 0 to 1, good for probabilities; saturates outside roughly −5 to 5. Derivative σ(1 − σ)." },
  { term: "Tanh", def: "A squashing activation function mentioned in lecture but called not important." },
  { term: "ReLU", def: "max(0, x). Derivative is 1 for positive inputs, 0 for negative. Cheap, non-saturating on the positive side; the common default." },
  { term: "Dying ReLU", def: "A ReLU neuron whose inputs are mostly negative outputs zero with zero gradient, so it stops learning and cannot recover." },
  { term: "Leaky ReLU", def: "Like ReLU but keeps a small slope (0.01x) for negative inputs, so some gradient survives." },
  { term: "ELU / GELU / SiLU", def: "ReLU variants that are smooth or non-linear on the negative side; better gradients for negative inputs, at extra compute cost." },
  { term: "Saturation", def: "When an activation's curve goes flat, so changes in input barely change output and the gradient approaches zero." },
  { term: "Model capacity", def: "How complex a function the network can represent. More neurons and layers mean more capacity, and more overfitting risk." },
  { term: "Softmax", def: "Exponentiates each score and divides by the sum of exponentials, turning scores into probabilities that sum to 1." },
  { term: "Total loss", def: "Data loss (distance from ground truth) plus regularization (penalty on large weights)." },
  { term: "Backpropagation", def: "Computing the loss gradient for every weight by applying the chain rule from the output backward to the input." },
  { term: "Computational graph", def: "A graph of the simple operations making up the forward computation. Define it, and frameworks compute gradients automatically." },
  { term: "Autograd", def: "Automatic differentiation in frameworks like PyTorch and TensorFlow, computing gradients from the computational graph." },
  { term: "Chain rule", def: "The derivative of a composed function is the product of the derivatives along the chain; why backprop runs back to front." },
  { term: "Upstream / local gradient", def: "Upstream: the gradient arriving from later in the graph. Local: the node's own derivative. Their product is passed backward." },
  { term: "Add gate / multiply gate", def: "Add distributes the upstream gradient equally to both inputs; multiply gives each input the upstream gradient times the other input's value." },
  { term: "Vanishing gradient", def: "Gradients shrink toward zero as the chain rule multiplies many small factors, so early layers barely learn." },
  { term: "Exploding gradient", def: "Gradients become very large, producing wild updates; in the worst case the loss goes to infinity or NaN." },
  { term: "Gradient clipping", def: "Rescaling a gradient that exceeds a threshold — keeps its direction, shrinks the step size." },
  { term: "Batch normalization", def: "Normalizing across a batch of samples to stabilize training and reduce internal covariate shift. Covered in the training-dynamics lecture." },
  { term: "LoRA (low-rank adaptation)", def: "Fine-tuning that freezes most of a model's parameters and trains only a small addition, saving large amounts of memory." },
  { term: "Test-time training", def: "Making small incremental model updates during prediction time." },
  { term: "Agent memory / retrieval", def: "Storing information externally and retrieving it when relevant, instead of training it into the model's weights." },
  { term: "Harness engineering", def: "The usually non-learnable control layer that coordinates how agents work together. Newest form: graph engineering." },
  { term: "Scope drift", def: "An agent silently wandering away from the task you gave it. The professor called it a bigger practical issue than hallucination." },
  { term: "LeNet", def: "Yann LeCun's 1989 convolutional network, which extracted image features hierarchically in layers." },
  { term: "AlexNet", def: "2012 CNN that triggered the deep learning boom. Structure: conv, pool, conv, pool, fully connected, softmax." },
  { term: "Spatial structure", def: "The relationship between nearby pixels, which tend to be similar. Flattening an image for a fully connected layer destroys it." },
  { term: "Locally connected layer", def: "Each unit connects only to a small patch of the input, cutting parameters (e.g. 10×10 patches: ~4M instead of ~1.6B)." },
  { term: "Weight sharing", def: "Using the same weights at every location of the input. Combined with local connectivity, this is a convolution." },
  { term: "Filter (kernel)", def: "A small set of learnable weights, e.g. 5×5×3, slid across the image. Its depth always matches the input's depth." },
  { term: "Activation map", def: "The 2D grid of outputs from sliding one filter across the input. N filters give N stacked activation maps." },
  { term: "Stride", def: "How many pixels the filter moves at each step." },
  { term: "Conv output size", def: "(N − F) / stride + 1. For a 32-wide input and 5-wide filter at stride 1: (32 − 5)/1 + 1 = 28." },
  { term: "Recursive self-improvement (RSI)", def: "Agents improving themselves; currently a hot topic, largely a renaming of older self-evolving agent ideas." },
];

const EXAM_TIPS = [
  { tip: "Why non-linearity is needed — he said this is always on the midterm", detail: "Without activation functions, W3·W2·W1·x collapses to W·x because the matrices multiply into one. Any depth reduces to a single linear layer and can't learn non-linear patterns. Be ready to write out the collapse.", priority: "HIGH" },
  { tip: "Convolution output size: (N − F) / stride + 1", detail: "He said directly he'll test this calculation. For a 32×32 input and 5×5 filter at stride 1: (32 − 5)/1 + 1 = 28. Filter depth matches input depth; the number of filters sets the output depth (six filters gives 28×28×6).", priority: "HIGH" },
  { tip: "Weight matrix shapes and parameter counts", detail: "He said past midterms tested these numbers. Flatten the input first (28×28 → 784), then each layer is (inputs × neurons): W1 = 784×128, W2 = 128×10. Add one bias per neuron. He promised no tricky versions.", priority: "HIGH" },
  { tip: "Sigmoid vs. ReLU: formulas, ranges, derivatives, weaknesses", detail: "Sigmoid: 1/(1+e^(−x)), range 0 to 1, derivative σ(1−σ), saturates outside about ±5 and causes vanishing gradients. ReLU: max(0, x), derivative 1 or 0, cheap and non-saturating, but can die when inputs are mostly negative.", priority: "HIGH" },
  { tip: "Vanishing gradient: know the mechanism and the fixes", detail: "The chain rule multiplies many small factors, so gradients reaching early layers approach zero and those layers stop learning. Sigmoid worsens it. Fixes: ReLU-family activations and batch normalization.", priority: "HIGH" },
  { tip: "Backprop concepts, not hand calculation", detail: "He said you won't be tested on computing derivatives by hand. Know that backprop applies the chain rule back to front, the gradient at each node is upstream × local, and you only define the computational graph while the framework computes gradients.", priority: "MEDIUM" },
  { tip: "Gradient clipping keeps direction, limits magnitude", detail: "The fix for exploding gradients. Rescale when the gradient exceeds a threshold. Exploding gradients are the easier of the two gradient problems to fix; vanishing gradients mostly require changing the activation function.", priority: "MEDIUM" },
  { tip: "Why fully connected layers fail on images", detail: "Two reasons: far too many parameters (200×200 image into 40K units is about 1.6B weights) and destroyed spatial structure. The path to convolution is local connectivity, then weight sharing.", priority: "MEDIUM" },
  { tip: "Deep learning vs. classical ML: automated feature extraction", detail: "The key difference he emphasized. Supporting properties: non-linear, hierarchical, end-to-end.", priority: "MEDIUM" },
  { tip: "Softmax and the two-part total loss", detail: "Softmax exponentiates scores and normalizes them into probabilities that sum to 1. Total loss = data loss + regularization. Note the slide example (2,1,1 → 0.5, 0.25, 0.25) is plain normalization; true softmax gives about 0.58, 0.21, 0.21.", priority: "LOW" },
  { tip: "LoRA and agent memory are interview material, not exam material", detail: "Framed as answers to 'how would you save GPU memory?': update only part of the model (LoRA), or move knowledge into external memory. Details were deferred to a later lecture.", priority: "LOW" },
  { tip: "Harnesses, RSI, interviews, PhD talk: not on the midterm", detail: "All side discussion. Useful context and project inspiration, but skip it when time is tight.", priority: "LOW" },
];

export default function Lecture3_NeuralNetworks({ onBack }) {
  const [openConcept, setOpenConcept] = useState(0);
  const [openTip, setOpenTip] = useState(null);
  const [tab, setTab] = useState("concepts");
  const [chatOpen, setChatOpen] = useState(false);

  const tabs = [
    { id: "concepts", label: "Concepts" },
    { id: "vocab", label: "Vocabulary" },
    { id: "tips", label: "Exam Tips" },
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>SEP 14 · LECTURE 3</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Neural Networks & Backpropagation</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Forward propagation, weight shapes, why non-linearity matters, activation functions, backpropagation and computational graphs, vanishing and exploding gradients, why training costs more than inference, and the start of convolutional neural networks.
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
          lectureTitle="Neural Networks & Backpropagation"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
