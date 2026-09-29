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
It's working. If it's working. I will. I will start. Um. Uh, yes.

Recording is on. Uh. Feel free to begin anytime you're ready.

Okay. And also in the middle. We're also switching the computer for the guest speaker.

Was that, uh, that's still working well. Right. So we don't need to worry anything.

Oh, yeah. Just let me know whenever you switch the display. Sure.

Uh, yeah. I think I will start for some admin stuff, and then we're going to switch to the guest lecturer, and then we will switch back.

Um, okay. Perfect. Welcome back. Um, I don't even remember which week we are in, potentially the fourth or the fifth.

And, uh, it's great and look like everyone's still alive and happy and smiling.

Uh, we saw your. We saw your project submissions for the proposal.

I think there's still 1 or 2 groups that we're still figuring out how to team up.

If that's the case, just let me know. And what happens then will be.

We have three to so that they're going to review your proposals.

And they're going to you're going to be assigned to specific teams.

If you already stopped by their office hours, you may know who you like most, who you don't like that much.

So you can ask them to be your assigned to if you want during office hours.

So they have a full autonomy on that. So it's usually just based on the topic match because some of them are pretty good at some.

Some are pretty good at, you know, robotics etc. etc. and after that you can also choose this.

Or you can also potentially you can also show your preference through that project because, for example,

your group are more suited for specific office hours than the better to be your assigned to.

And we will have some assigned checkpoints throughout the semester.

However, most of your questions should be addressed by your Ta for the for the projects.

Um, is that fast? Um, okay, I have a few slides for, uh, guest speakers.

I think he also got his slides, but I will be short. Uh, I actually, uh, I met him a few years back in the same class here.

Uh, five. Six, six. I think that's a potentially three, four, 2 or 3 years ago.

Uh, it's not it's not in the specific. It's not in the same.

Someone someone is actually just waving hand to you. You can just like, uh, uh, you said they got friends.

People got friends. Computer science people also got friends. Um, so so that's a few years back.

And actually, by that time, it's not even in this, in this room. It was in pH.

It's it's pretty far from here. I need to take another ten minutes walk to to reach to the room.

And however things are getting better and people coming back.

I told him this is more like a revenge saying, okay, look at what you are talking about.

A few years back in the in the lecture now I will show you what the real lecture is.

Adam works at a lot of different places. I think he will introduce himself later,

but that has been great because he got a he got a he got industry experience he did on research and he also took the same class before.

I think that's a very good innovation. So he can share what he's working on and what he feels about industry.

And usually what we have will be after the guest lecture,

we will have some immediate like a potential quick networking people can do so that we will have a break immediately after the the guest lecture.

Um, so, okay, uh, as the old person, I will stop here and we will switch to the, to the to the to the younger generation.

Yes. Um, sorry. I think we're switching to the guest lecture now.

Yeah. Cool.

Okay, I'll just go like this. Hey, everyone. I'm Aiden.

Nice to meet you guys. Today I'm going to talk about how to build and physical AI systems for robotics.

Uh, a little background about myself. I did my bachelor's in computer science, graduated 2023.

I did my master's at USC in 2025.

I had a research focus in computer vision, and I actually took US class, I think, his first year as a professor in 2024, I believe.

So, um, he had a lot of guest lectures back when I was a student in 2024, and I benefited greatly from his guest lectures.

The Swami kind of a perspective in like the industry perspective, what we're using deep learning.

And I just figured that I think robotics is starting to become a really important topic.

And I was calling for guest lectures. So now I'm here.

Hi. Sorry to interrupt. Please clip the live microphone to the middle of your shirt.

Not much more professional. No, I've never done this before. And learn how to use this during my after my class.

Exactly. I was over there listening to you. Okay, so, um, we will have three different components in during this lecture.

And then we're going to have training for the systems we're going to have or sorry data collection training.

And then lastly evaluation. We're mostly going to focus on the training data collection and training part of the the the whole robotics stack.

And then I'm going to leave some time for questions if anyone has any.

Okay, so we're entering a new era for fiscal AI and the idea for intelligent machines.

So these are robots, autonomous vehicles, smart factories. There aren't very new.

We've been building these for for decades now. But what's fundamentally changing is how we actually built them.

So traditionally in robotics, each task required its own dedicated model one for perception, one for planning and one for control.

And these are these they're trained separately and kind of stitched together by hand.

And as you can imagine, this kind of made scaling very difficult.

But today we're kind of we're shifting into a more unified end to end foundational models.

As you can see, things like VLANs where you have sensory inputs and you actually output raw actions and what these physical AI systems need to do.

And the advantage of these is that these models generalize a lot better to these unseen situations,

and they respond a faster and they're much easier to kind of adopt different across different embodiments and environments.

So for a long time robotics relied on these specialist models,

the kind you kind of see in factories and warehouses where a singular model is a singular robot,

has a preprogramed for each task and each environment.

So these are meant for like rigid, controlled environments.

And they're really, really good at executing these specific tasks with speed and precision.

And right now we're seeing a rise of generalist models. So this is the middle diagram.

This is the middle robot in the diagram. So these these are models that learn tasks rather than being explicitly programed what to do.

And they have a broader scope. But their proficiency in these specialized single tasks are pretty bad.

So our goal with physical AI is to kind of bridge this gap and go to the last diagram over here where we want a generalist specialist.

So we want to scale intelligence to a point where we can develop models that combine both

the broad scope understanding of the world and also deep proficiency and specialized tests.

But it's very hard to develop physical AI. Real world data is inherently multimodal.

You're dealing with cameras, depth sensors, lidar, tactile feedback, force feedback, and the data is also extremely difficult to collect.

For robotics, you typically need to tell our operation.

So this is just you physically controlling the robot to do data collection, which requires expensive hardware,

carefully controlled environments, and you need constant human supervision to make sure these thousands of dollars of robots don't fail.

And then lastly, the deployment at edge is a hard problem in itself.

So you're working under this tight latency constraint constraints where these robots

kind of need to react in milliseconds so that you don't perform some unsaved functions.

And then once you train it. Testing is also equally painful.

You have a $100,000 robot. If it fails a policy, you lose $100,000.

You don't want that to happen. So these are two examples of me in the lab testing in two different policies.

On the right you could see those are unitary G ones completely just failing.

And these are the situations you don't want to have happen.

So as I mentioned at the start of the talk, there's going to be three main portions of this presentation.

We're going to have data generation training evaluation and then deployment. I'm going to quickly gloss over deployment.

But we're mostly going to talk about data generation and training evaluation.

So let's start with data generation. We've had these different eras for AI over the years.

So the big unlock for llms or generative AI has been that they've been trained using trillions of tokens over like internet scale data.

That's how these models know how to kind of understand general purpose internet knowledge

and understand how to kind of respond to you in text and with AI and reasoning.

We've kind of allowed this AI to self-reflect on its answers and improve them using a process called test time scaling,

which use reinforcement learning over a large specialized data set.

All these reasoning models are a result of utilizing these large amounts of compute over large amounts of data.

And now in robotics, we don't have this data that trained models think about,

like the petabytes of internet data out there that these models was trained with. And robotics.

We don't have this because I'm going to talk about a bit about it in the next slide.

We just the the kind of internet scale data doesn't exist when you have to manually kind of control these robots to collect data.

So at Nvidia we kind of call this the data pyramid for robotics.

So at the top we have real world data. So this is small expensive active.

And a robot might say the best case scenario collects 24 hours a bit per day.

So this is a real human controlling a real robot to generate real data.

In the middle we have synthetic data. So this is infinite in principle.

And we will say we collect around gigabytes per GPU per day.

And at the base we have web data. So this is unstructured multimodal say exabytes per day.

This you can kind of think of as like the general YouTube videos out there or any videos people post on these different websites.

So our final goal is to grow this middle layer of the synthetic data until it became becomes the dominant source of training.

And so the idea is that if this the synthetic data surpasses web scale data.

So the middle layer, if it surpasses the lower level, these robots can actually truly learn and become generalist for every task.

And this is kind of the vision for data collection in physical AI.

So we're going to start with the the top of the pyramid, where we collect high quality robot data.

So first, how do we collect data with robots?

We're going to talk about Isaac Telescope and Isaac app is our unified framework for both real and simulated robot tele operation.

So the the main problem it solves is integration.

Today setting up our operation requires significant effort to get these different devices working together.

So if you think about it, each lab has their own VR goggles. They have their own like hand controllers.

They have their own program, the middleware that connects your signals from your hand to the robot.

And then at the final layer we have different robots, right? So Isaac up kind of unifies this into one stack.

You have different devices. You have different robots.

It gives you a nice interface for you to to kind of collect data from this robot, both in real, from both real and simulated environments.

So it's a single unified framework that integrates different headsets, control devices,

and it provides some standard interfaces for common targets, and it supports both 2D and 3D camera output.

And a lot of people use this. We use this.

And a lot of researchers use this to actually collect the real world data. Okay.

So the next thing is we're going to talk about the bottom of the pyramid. So when we want to scale up data, we want to have a great data pipeline.

So we have imagine we have this massive amounts of YouTube videos.

Or we have mass amounts of data of human going around humans going around and performing tasks like pick and place.

So video to data is essentially an end to end pipeline that covers human demonstration,

converts human demonstration videos into simulation ready assets and physics grounded robot training data.

So we have ingestion where we have an agent like workload that does three different things.

We segments demo action clips. So if a human is performing a task and we have long term video where they're doing multiple tasks,

we kind of segment them out and then we extract the entity relation scene graph.

So if you're picking up an object it automatically kind of extracts where these objects are,

what these objects where they are, what they are, what the human is doing, what the, the interactive objects is doing.

And then it creates an embedding for these relations. So the output is a query action database.

So when you collect this exabytes worth of data, instead of having to go in and labeling each data, each video one by one,

what they're actually doing is kind of automatically extracts a variable database

where you can figure out which videos correspond to what kind of tasks.

After that, we do reconstruction.

So we use different multi-view pipelines, both from the humans and the objects, to convert them to simulation ready assets.

So if you want to actually perform this test or move this test into a simulation, we can very easily do that.

And then we have robot grounding so we can retarget the human motion into the target embodiment.

So if I performed a pick in place, that would essentially convert my pose as humans into whatever the target embodiment,

so what the robot's positions would be and um, and the equivalent equivalent state.

So this is an example of what it looks like. A human will do a demonstration.

We extract the embeddings, the semantics of what they're doing.

We reconstruct them in Isaac lab.

And then you can transfer that the same poses of what the human is doing into the, into a real deployed robot on the right.

So even though the motor controls the the exact positions of the motors are different,

you can extract the relations between where my joints are and then directly transfer that into robots.

Okay, so we saw how we can collect real robot data, as well as how we use human videos using isotope and video to data.

So now we're going to think about how we can expand these datasets using synthetic data.

And our goal is here is to convert the data problem we have into a compute problem.

So we since we're lacking in data we want to be able to produce data.

The more compute that we have, the more data we can produce.

So in principle, if you have the compute you can scale this synthetic data up to infinity.

And there's two ways we actually generate the synthetic data.

One is through simulation which some of you might be familiar. Our Isaac SIM and Isaac lab are Omniverse platform provides simulation.

And then the second way we do it is called foundational models. Let's take a look at simulation first.

So it's important that the worlds we the worlds we construct for fiscal AI most accurately reflects reality And with neural reconstruction,

we can bring this real world directly into simulation.

Omniverse is a set of APIs and libraries generate interactive 3D simulations directly from world data.

And here this example, we're using a library called 3D gut to generate the Gaussian plot from the video capture to a cell phone.

And this is our cafeteria from the Zurich office.

And once you're in Isaac SIM, you can actually you can use the splitted environment to train your robots.

So once you do that, you could drop in a G1 asset or any sort of robots you provide.

So this provides accurate visual facility which is otherwise very hard to achieve within simulation.

And I think the in the latest version of Isaac SIM,

we have support for USD particle fields which now allowed for these lighting effects that you can see over here.

And this is very important because for some of you who've trained violas before,

you understand that lighting conditions and these small details between simulation and reality actually affects your policy outcome.

So we just saw an example of a simulation. Now we're going to move on to our world foundational models for data generation.

So cosmos is our World Foundation model. And it's been trained with large amounts of real world data.

So to learn implicitly learn the dynamics of a real world.

And the idea is that if you understand how to do video generation.

So for example, if you want to generate a video of a human walking across, say,

those staircases over there and you can accurately generate the video of a human doing that,

you implicitly learn the physical properties of friction, lighting,

etc. because you can generate an accurate video that's physically accurate of how the human moves across a how human moves across these stairs.

So This is a World Foundation model that came out, I think, around a month ago.

It has a dual tower architecture with a reasoning tower being an autoregressive VLM and another generator tower being a diffusion based model.

So they're connected at a token level, meaning after each of each forward pass of each transformer layer,

there's this thing called a joint attention, where the reason or tokens or the generator attends to the reason our tokens.

So this makes cosmos generation be grounded with the reasoning tokens and for reasoning to kind of.

Think through what actions it's going to take.

And our omni model just means it has multiple modalities like you can generate language, image, video, audio and actions.

So cosmos allows five robotics use cases so it understands synthetic data generation, visual language reasoning, inverse dynamics robot policies.

And then finally for dynamics.

And for those of you who are not familiar with these terminologies for dynamics just means you know the action you want to take,

and then you want to see how it's going to be applied and executed in the real world.

And then in inverse dynamics, you understand what your final motion is.

You want to understand what forces and actions are required to achieve this final motion that you want to you want to do.

So traditional vision language models can understand what's happening in an image or a video,

but they kind of struggle through reason with unfamiliar, complex scenarios.

Cosmos reasoner is a reasoning VLM that combines visual understanding with physical reasoning.

So the idea is that unlike like general VMs, it's trained with only realistic physical data.

So for example, Gemini can generate unrealistic structured outputs, right?

It's because it's not only trained with realistic data, it's also trained with, say, like cartoonish data.

It understands what it means when things and cartoons are happening.

We don't want to enable this skill in an autoregressive VLM for the physical world.

We want the model to only be trained with real, high quality data.

And so when it reasons through different, different physical interactions, it understands only how to generate that output.

So the cosmos three reasoner has two main functionalities. One is embodied planning.

So it's an orchestration system where you can give a high level goal and task.

And then the reasoner essentially comes up. What's the next best action that you can take.

Um, and then the second one is a video critic. So this is for labeling synthetic data.

And it checks for hallucinations. And these are the two examples.

On the left. You can see it's planning on essentially what the next best actions are.

And then on the right it would essentially be a critic.

It would talk about how high quality this video data is, when it's generated and if anything needs to be changed.

So for cosmos, we aren't only limited to to reasoning.

You can also do video augmentation with cosmos. And we call this cosmos transfer.

I'm going to show you transfer with an example.

So this is a standard manipulation task where a robot arm is picking up a lettuce and putting inside I think a wire mesh.

So we're going to use I'm going to show you an example where we use Cosmos Transfer to do an object change to change the lettuce into a light bulb.

So when you use Cosmos Transfer,

you can extract these different modalities which control a different portion of what what data augmentation you're doing.

So if you condition it on edge you essentially preserve the structure.

If you do Segmentation. You want to use segmentation when you change the scene composition.

Use blur to preserve colors and depth to preserve spatial alignment.

This doesn't make any sense. I will show you an example.

So this is the original video where we have a robot picking up the lettuce and placing it into the bowl over here.

And the goal, we're going to have a final goal to augment this video, to remove all these objects in the video except the lettuce.

So the three segmentation or the three modalities we're going to condition on is segmentation edge and then blur.

We want to use blur because we want to keep the composition of colors.

We want to use edge because we want to keep the the structural integrity of all the objects.

And then we want to keep segmentation because we want to change most of the the specific objects that aren't the lettuce.

So if you condition on all three now, you can see that all these objects on the table except the lettuce has been disappeared.

So this is the original video.

And then we made these objects. Except the letters disappear.

So we're not only limited to doing object changes. You can also do things like lighting changes, background changes, texture changes.

And you can use generate synthetic data like this to make your policies more,

more robust to these different types of conditions that you deploy them in.

So I will give you an example how, why and how this actually helps.

So consider an example where we have we're doing a pick a pick and place task where we have we want to pick up a bowl with one hand,

apple with the other. We want to place the apple in the bowl and then bowl under the table under various visual conditions.

So we're going to compare three different variants. One is the base policies.

So the base policy has only been trained with 100 real demonstrations.

The baseline policy has trained with the real demonstrations and with standard augmentations.

So you can think of this as like Gaussian blur flipping the image.

The basic kinds of augmentations you would usually do.

And then we have our cosmos augmented policy that is trained with five x of this augmented data.

And this is an example of how you do these augmentations. So you change the texture the lighting, the object.

And then this is another example of how we would do it. Now we have different backgrounds.

We have different colors. I think we have some funky ones where there's like disco lights playing.

And then after training the model with these different types of augmentations, you could see that the base policy has 3% success.

The baseline has 16. And then with training with the cosmos augmented data, we have an 80% success rate.

And this is an example of like the real robot deployed with these.

This training data where we have failures on the top case and then some successes on the bottom.

So another way cosmos can generate synthetic data is we have this thing called neural simulation.

So in neural simulation we post train the model such that given some sort of conditional frame and a sequence of actions with a task description,

it predicts the future state as a video of what would have happened if those actions were applied.

So this gives you a very grounded way to generate new worlds. And you can use this for many things.

You can excuse me, generate new synthetic data or do policy evaluation.

So this would mean if I have an image of say myself right over here and you give it a task

description of grab that mic and you provide the actions of how this arm would move over here.

It would generate a video of me performing this action. So the right is the ground truth and then the left is prediction.

And remember the left is a generated video. We've conditioned the initial frame, we've told it the action it needs to take.

And we provided what actions it needs to take. So this is what cosmos has predicted the robot will do given those actions.

And then the right is what the robots actually did. So we don't need to only use this for a robot data.

We can actually use this for egocentric human data where we're conditioning it with cameras and human hand poses.

So again these are generated videos. It has initial positions of what the human hands look like.

You give it the specific actions the human needs to take.

And it can now generate synthetic data of what would have happened if the human executed these actions.

So if we take this one step further, we can not only output the next sequence of frames, but we can also jointly output the action it will take.

If you guys are familiar with world action models, this is exactly one of them.

So you condition on a frame and a task description and you jointly predict the future video and action.

So empirically, this has shown that this joint prediction generates very high accuracy and movement.

And the transfer between the video to the actual sequence of actions are very low.

So this is an example of what we call cosmos policy in action.

It's a post trained cosmos three and policy mode and deployed in a real robot.

Okay so just to recap for data we have tele op and video to data.

So data collection from real robot and human data's we have for or for simulation reconstruction where you can collect data and test policies.

We have cosmos for all augmentations so you can augment existing data sets using prompts and control modalities.

We have cosmos neural simulations. So from a frame and some action sequences it can generate an entire world scenarios and environments.

And then for training we've kind of talked about briefly talked about cosmos through policy.

So it's a post trained cosmos to be a world action model. And before I go into training I'll take some questions.

Yes, you can deal with the previous issue with your use film and video to training the

model just for some human face is that is that will cause any problems on the screen.

So for human issues, are you specifically talking about privacy issues?

Yes. So our cosmos has guardrails which you can turn on and off. And so if you turn them on, it will redact the pie information.

So license plates, human faces they'll all get blurred. It's all no cause any problems.

So for the training. Sorry. This will cause any problems in your training if I just run the program?

Yeah, so that's a good question. Um, if it does, it might for a specific test.

It might not for some specific tests. If you use the model is it's it's causing issues in training.

You can turn off these guardrails and train them. Yeah.

Yes. Does this model do like any kind of like detection or is it just like pure.

Yeah. So it does have a VQA ability. So the cosmos reason.

So that's the one that does um planning based on given some images and also data labeling.

So the cosmos reason is trained over the the benchmarks is trained over.

Does include Vikas and it also can do localization.

Yes. Discuss this already. But um, in terms of the synthetic data generation that's used to train or can improve these models.

Um, what are some guardrails for some things said to prevent data hallucination or um, like unrelated data.

So what sort of ways are you guys combating this to make sure that, uh, it's just as good, if not better than actual data?

Yeah. So hallucinations will always occur. These are all probabilistic models.

No models has 100% rate and non hallucination. That's just an artifact that any machine learning model will have.

Um, so what we do is we have a massive filtering pipeline to try to contain realistic data,

which contains the most diverse distribution of real, like real world physical environments.

You would see. I don't know the specifics on top of my head, but we have like a 130 page white paper about data collection if you want to read that.

Yeah, I have some fun with that. Yes. I don't like this question.

It's like, how do you know what sense to generate and like what synthetic is good to train on?

Yeah. So that entirely depends on your task.

For example, I think in some sort, some scenarios, for example, like quadrupeds learning how to walk in simulated environments.

People I've seen that using pure synthetic data works a lot better in that scenarios.

And this is because RL environments are hard to reproduce outside.

You need a very fast iterating environment, but we provide all these different options.

And there's still a research question what's like the final consolidated simulation environment?

It's completely test dependent. Yes.

There's like a follow up question with you mentioned like blaze, um, you're sort of experience that you've been seeing,

you know, the professional space, um, are like research on Vlachs and also applications on Vlachs.

Like on the rise. It's like the up and coming thing nowadays.

Yes, I'm very biased because I'm working in robotics and I'm a big fan of and models for robotics.

So I would say world models and Vlachs are both very hot topics. Cool.

Um, okay, so I just talked about creating a large and diverse data set.

And now I'm going to talk about training a policy. So I'm going to talk about Vlachs and world action models.

Uh, so for robot learning paradigms there's kind of three different paradigms that we're focused on.

Um, so uh, first is world action models and world action models learn how the physical world behaves by training on large amounts of video data.

So this kind of gives the robots the ability to predict what will happen next and plan

actions accordingly without needing these explicit demonstrations that you see for Vlas.

We kind of call this counterfactual reasoning. Vlachs use visual input and leverage this broad knowledge that they learn from the LMS.

You guys are all familiar. Vlachs are trained with massive corpus amounts of internet data on like vision and text caption pairs.

Right. So they have a good general understanding of what the world is, what your general text is, what your general image is.

So the idea with Vlachs is that you want to add an action head and utilize the general knowledge that the BLM contains.

Um, so and then finally RL helps the policies learn through this trial and error process.

So cosmos three, um, the World Foundation model I used earlier is not only a data generation platform, but has these also these other capabilities.

Um, so cosmos three adapts the robotic workflows via these three core capabilities called for dynamics, inverse dynamics, and policy generation.

So the model for four dynamics. The model can predict future frames or observation based on specific robot actions.

For the inverse dynamics, it infers the underlying actions needed to achieve given a final state or observation,

and then for policy generations, developers can post train this the generalized world model on action labeled data.

So this is meant to be a foundational backbone for generating like real robot robot policies.

We have multiple embodiments we've trained this model over.

But you could be making your own robots or you can have an extra degrees of freedom.

So the idea is that this model has been trained with a lot of these different embodiments.

So it only takes a tiny amount of data for you to adapt them for your own specific platforms.

So we also have our group models, which is a VLA or a vision language action model.

I'm sure you guys are all familiar with that. So the idea with the Bla is that it has a dual system architecture.

There's a slow thinking system too, which is a VLM that's doing a highly high level reasoning planning.

So you can kind of think of this as if you're doing a complex task. You kind of think through what you need to do first.

And then you have a system one diffusion transformer, which runs a lot faster, and it outputs the actions given this high level plan.

So it's the difference between me thinking, oh, I need to move my hand to grab this microphone,

but I don't actually think through how I execute those actions. I don't think about how I'm going to grasp this microphone over my hand.

It's kind of automatically done. And that's the fast thinking process and me thinking about why I'm executing these actions, what I need to do.

That's the slow thinking process.

So our endpoint 1.7 group models are trained over massive amounts of real world data and a lot of high quality tale operation and similar real data.

So it's a this does a lot better in, say, long horizon tests.

And a lot of it does really good and cross embodiment performance as well.

So these are some examples. We have some pre-trained weights for zero shot evaluation.

And then fine tuning. The model is beneficial for deploying it in a specific embodiment or a specific task if you have your own tasks.

We're trained we've trained this model with a lot of different diverse tasks, but obviously tasks are infinite in the world.

You could be using this model to transport something, transport objects that's never seen,

put them in an environment where the model has has never encountered.

So the idea is that you get to fine tune these models for your new embodiment,

your new environment, to be able to for this model to adapt really quickly.

So how do we actually train these policies?

We're going to start with Isaac Lab, which is built on Omniverse, which is an open source modular framework for robot learning and policy training.

This is our simulation platform. So to actually get a robot to walk in these simulation platforms, we need something called a whole body controller.

So a whole body controller is a software layer that coordinates every joint in a robot's body simultaneously.

So this makes sure that the robot walks, reaches, and balances at the same time.

So all this movements work together while maintaining this, um, while maintaining stability.

And when you're achieving your when you're achieving your desired motion. And so you might ask, how do we actually train these whole body controllers.

So instead of designing reward functions that describe what quote unquote good walking,

it looks like our whole body controller Sonic learns from directly from this large scale human corpus data that we have.

So the policy captures a full body motion reference as input and then it essentially tracks it.

So motion tracking is is a scalable training objective because you can throw enormous amounts

of human data actually without hand engineering each individual component for every behavior.

So you can kind of think of it as like from the video to data pipeline I mentioned earlier, we have massive amounts of, say, humans walking around.

So now if we actually extract the positions of how the humans walk around and we, we pair it with like text generation that says human walking,

we can now directly encode that into a single embedding that represents humans walking.

And this is the result. So we're able to generate natural motions like the videos you see up here.

So we this gives you a reference for what smooth motion looks like given some sort of task.

So now we can actually combine that with our Bella Foundation models.

If our Bella Foundation models have a high level planning of oh, let's have this robot box wallet,

Roxanne walks around the the system one or the fast thinking models can output into the sonic space where understands how to execute these actions.

You can say um. For example, you can think of this as like a unified framework of how robots will move in the real world.

Does anyone have any questions about a whole body controller? Okay, cool.

So how do we actually bring these policies from simulation to reality?

Um, we have our simulation platform, but what people don't understand is that the physics engine behind it matters a lot.

So if the simulator is contact dynamics, friction or joints don't actually match the real world bots.

The policy learns these behaviors that will work in simulation but actually fail on real world hardware.

If you think your motor has like 20% more to talk in the simulation, it learns how to compensate for that.

When you deploy it in the real world, it's your arm is going to completely snap.

So for whole body controllers, this is especially brutal because your RL policy actually learns joint tracking rewards against simulated physics.

And the whole body controllers extremely contact rich. So this is like a feet on ground and hands on objects.

So the small errors that accumulate in the kinematic chains like burst in the real world.

If you have these small 20 degrees errors that keep on accumulating in your RL policies,

they will absolutely just explode when you deploy them onto a real robot. In the real world.

Um, so there's two main things that physics engines need to get right for robotics.

One is contact and collision solving. So this is like normal forces, friction cones, penetration resolution.

And this is where most of this, this gap between simulation and reality lives.

And then the second thing is joint dynamics. So this is like motion inertia compliance damping.

And you can think of this as like torque how torque commands transfers to actual motion.

So we have a new physics engine called Newton. And we made this with Google DeepMind and Disney Research.

For those of you who don't know, Nvidia used to be a gaming company.

If you guys ever bought like a 1080 TI to play League of Legends, this is what we used to be able to do.

So our physics engine was actually optimized for gaming.

It did really good. And things like detection, because in video games you don't want to run into walls.

And it was optimized to to actually think about those things.

But this isn't very This isn't very realistic when you want to actually train robot policies on this physics engine.

So our traditional physics engine is called physics and Newton is our new physics engine.

That kind of resolves all these issues that physics had as a game optimized physics engine.

So it's supported in Isaac Lab and also Moukoko and Moukoko is Google DeepMind simulator.

Those of you who do robotics are probably familiar with both and and what it does is the solvers handle the physics.

So this solves the forces, contacts and joint dynamics. Um, and uh, if people have questions, I can go detail more in detail into the solvers.

But uh, it does it does a lot of good optimizations.

For example, we have a solver that has if there's like a lot of physical particles,

for example, if you have you're trying to model sand or fluid dynamics and simulations.

These are a lot. A lot of small particles that interact with each other. Right. So for physics, this used to be very, very slow.

For Newton we have optimized we have optimized solvers that would do things like for example it would calculate the particles that interact.

So if you think of like 10,000 sand particles colliding with each other,

it would figure out only the ones that collide with each other and calculate the actual physics applied only for the collided particles.

So instead of having 10,000 individual particles, um, the physics being applied for a 10,000 individual particles,

it would only account for, say, like 1000 particles in the middle that collide.

So the second thing we, the solvers handle is renders.

So renderers handle what the robot's cameras actually see.

And you might wonder, why does this even matter?

Like, why do we need realistic renderers?

And because this matters a lot, because for whole body controllers and Sonic, the whole body controller, we saw specifically, it's proprioceptive.

So the joint angles, IMU and the root forces, um, don't care about what the vision is,

but when you pair them with a Vila model, the vila models purely comes from vision, right?

You're inputting vision and text together. So when your simulation looks off, it doesn't look like realistic data.

Your policy suddenly goes out of distribution and then your outputs are absolutely garbage.

So renderers matter a lot in simulation. So we have like a bunch of RGB modes.

Um, and then we have a bunch of different shaders options. I can also go into detail with this if people are interested later.

But you just gotta understand that rendering matters a lot when you're trying to train these vision based policies.

And we have a bunch of options to handle these different types of renders.

So we have our visual writers. So if you are interested in training a policy in RL, you can see how your training job is doing.

Um, and then lastly we have evaluations.

So say we've trained a policy. Are we ready for deployment.

What you want to do is if you want to don't want to recreate the video of me breaking our G1 s,

you want to be able to to try to test this out in many different environments.

So Isaac Lab Arena lets you kind of establish these these evaluation environments where you have modular components.

For example, if you you can specify the task conditions or task success criteria, what objects you're trying to manipulate.

And an example would be if I want to grab this mic up here, it's very easy to swap out this mic.

It's very easy to swap out this table. It's very easy to swap out the background.

It's very easy to specify what it means for me to succeed. It does.

It could be if I've successfully grasped the mic correctly, or if I held it up to my mouth.

These are things that you can preprogramed and actually run, like massive scale evaluations before you deploy it onto a real robot.

And these are some evaluation environments that we have for basic tasks like pick and place manipulation.

We have some highly dexterous tasks where you need to pick up objects and place them into like a toolkit box.

Okay, so I talked about for the first two boxes and the training, the policy,

we just covered our world foundational model, cosmos three, Groot 1.7 Isaac Lab and Isaac Lab arena.

Does anyone have any questions? Cool.

So I'll quickly cover deployment. I only have two slides for this.

So when we actually deploy these policies we want. We want these robots to to be able to um.

We want these robots to be able to react and high frequency environments.

Right.

For example, if we have an autonomous car driving, if a human jumps in front of the car, you want to react in milliseconds or even faster than that.

If we run these policies on the cloud, which a lot of the models you guys are familiar with, like a codex or clod or all these models,

that it takes a while to transfer that data to the cloud, run a batch inference and then get it back.

Right.

So what we need to do is deploy on edge where we have these smaller GPUs, say just in Thor, where you can run the model and react in milliseconds.

So we have a couple of different options depending on, oh, depending on what kind of program you're running.

If you want to run like YOLO models or more lightweight models, we have our Jetson Nanos,

which are cheaper and a lot smaller and then are just an Ajax store, is probably our most compute heavy on edge device.

So a lot of the demos you see with like a unit tree with a backpack behind,

it's usually carrying these just the doors in the back, because these can go they have 64 or 1 28GB of Vram.

So it can run these like end policies that I just mentioned. So the first thing we do is we get these policies until hardware deployable format.

We try them out in simulation. And then we strap them into these edge devices and then deploy them in the real world and the real world.

You want to keep like harnesses in the back to see. Make sure your robots don't go completely rogue.

Um, and then I am skipping on a lot of other things that we do for edge deployments,

such as we have a lot of things for safety, also a lot of things for optimization.

So we want these, uh, these blaze that we just trained.

We want to quantize and compress them so that we can run them under a certain latency in certain environments, and then we get to deploy them.

So here's a complete demonstration of what it looks like.

So we have the whole body controller trained in Isaac Lab with RL. So this produces like human like dynamic stable motion.

We have the navigational policy that's trained with group.

And then we have in our experiments this is a synthetic only pipeline that goes from zero shot from um to simulation to reality.

And then here we go. So right now we're we're using the navigational policy.

We have our whole body controller that's actually following the navigational policy.

Um, we're specifying some sort of task command right over here, we activate the navigational policy to go closer to the specific task.

It's going a bit slower because it's approaching the final, the final object, and doesn't want to start to run and crash into the object.

We use cosmos reason to think through of the actions we need to take. We activate our manipulation policy.

We activate our navigational policy again. And then we complete our task.

Okay. That's all I have for today. Thank you. Um, yeah.

Do we have any questions? Yes.

Of all of us. Yeah. So there's a ton of use cases out there.

So physical AI doesn't only mean robotics, we also have autonomous vehicles.

Um, you can deploy this in a warehouse factories. You can use this for healthcare scenarios.

You can use this for autonomous transportation.

Uh, basically anything that you can think that is physically done by a human, the goal is to be able to automate this at the end.

Two questions on that.

So you mentioned earlier, the first question is you mentioned earlier, to some degree that's all going to be somewhat medicalization.

Um, interacting. Sure. We consider that to be fine.

Yeah. How about you? But I don't want to have a healthcare worker who's able to perform surgery on.

Yeah, yeah. So that's a good question. Um, so how far we are currently?

That's a completely different story. Like, for example, we don't have autonomous surgery being performed today,

but there's always going to be deterministic safety constraints when that happens.

So for example, in autonomous driving we have a probabilistic model, right?

But humans don't necessarily act deterministically when you when you see them on the road.

A cyclist on the side of the road might merge directly into you because they didn't see you or something like that.

So what happens is we usually have a deterministic, lower functioning stack on the right that's running faster.

So in an example in autonomous vehicles would be there's a stack that tries to keep distance from any object by a certain amount of meters.

If your probabilistic model is not following those constraints,

you switch over to the deterministic model and it performs those safety functions for you.

So in surgery, you can think of this.

I'm not an expert as surgeon, but you can think of this as maybe like if the probabilistic model wants a jerk, you would specify in your constraints.

If you start to act in a certain velocity, or if you move outside of a certain boundary,

you essentially need to stop and perform some sort of safety function.

So that's one way to do it. And there's also a bunch of different hardware safety functionalities that we do, but that would be very domain specific.

And we are definitely not close to that right now. Yes.

I saw you have like a Ros robotic operating system.

Is that like in terms of a high level block diagram of your system?

So Isaac Ross is you can kind of think of it as more as just Ross with GPU accelerated.

And then we provide a lot of like our products work with Ross, so it's very easy to integrate it.

We don't actually we're not trying to replace Ross. We're working with Ross, if that makes sense.

Yeah. Does that answer your question? Yeah, because I work with Ross for a lot of.

Yeah, traditional roboticists over here. Yeah. I was kind of curious.

How is this the other issues? Yeah, yeah, yeah, yeah, I mean, it is, but, um, in the industry, not many people use Ross.

When you need like more high throughput in singles.

So obviously we're very pro open source. So we always want to support Ross.

We always want Ross in our workflows, but we not only want to support Ross, but other methods that the industry uses as well.

But we work with Ross developers. We pretty much want Ross to be one of the the default options to be able to use in our robotics workflows,

because, you know, people like you traditional roboticists, they're most and current roboticists.

I use Ross, we're most that's the easiest way to kind of try these things out and deploy them.

Right. Um, it's a good question. Okay.

Any more questions? I'm sorry. We had a question.

Yes. Speaking towards more like traditional robotics and where the current stage is at right now.

Um, how much would you say, um, is artificial intelligence, like generating and writing code onto,

like the embedded systems, onto the controllers, onto the robot itself.

Or are you guys still in-house writing most of the code that's supposed to go on it?

Um, I don't have a stat for that.

Unfortunately. I don't actually know what how much other developers are using agent workflows to write their code.

Um. Yeah, you can kind of roughly.

It's the same thing as like, especially for learning systems, it's the same thing as developing like Vlas or VMs or world action models.

So I'd say it's like the equivalent process of how however much these velars are being automated.

But that's not a stat that I unfortunately have. Yeah.

Sorry about that. Yeah. And then. Okay.

Yes. All right. Yeah. Um, I mean, the video is a pretty big company.

Um, They're still working on GPUs. They're still working on games.

They're doing robotics. Mhm. Um, what do you think?

Uh, Nvidia's company is focusing on, uh, right now.

Um, we want people to, to let me think about this answer.

That's a good question because maybe that should be at a, you know, public relation conference.

We are we are pro AI. We want AI to be accelerated and integrated.

We want the community to use AI products and improve their lives in the best way possible.

Um, we will help. This is why everything we do is open source.

That's why we can publish and research. We don't have to wait a year, but that is our final goal.

We make GPUs because GPUs accelerate AI workflows. We open source things because people get to use it and develop better on top of it.

Um, yeah, I'm focused on robotics, But like we have obviously other things like we do healthcare.

We do financial systems, we do telecommunications. We were just trying to.

Essentially accelerate everything that we have with these end to end learning systems.

Thank you. Yes. I'm just talking about so many toys.

Yeah. So. Right. So when I work on the category which, which does really feel like it's much easier and like.

Yeah. So robotics is a very complex web diagram of systems.

And there is a lot and lot and lot to do.

So the whole point of why we provide these different tools is that there's seamless integration from the data collection.

You can use the direct output of that for the next thing from the policy you use from simulation you can directly use for evaluation from evaluation.

It's very easy to go to real robotics. For those of you who do robotics this, you know, this is a very hard and challenging test.

And currently all these different components are scattered. You have to kind of write your individual controls.

So our whole point is to kind of unify this entire stack, but make it modular,

because in industry or in research labs, you interact with very smart people who do robotics, right?

For example, say you say you know how to train a policy you don't need help in evaluating.

You have your own model. You understand how to deploy them.

But what you don't understand is simulation. So we have that one specific component for you.

And that's why it's there's a lot of different tools because not everyone needs this whole pipeline.

They only need a certain portion of it. Maybe you just need the, the the tool that actually collects data, but you can do the rest of it.

And that's kind of why we have these separate tools. But if you actually use all of these they will be connected end to end.

So you can go from data collection, the training to simulating to deployment and one and one single unified data pipeline.

Yeah. Yes. I still need to write the controllers if I use something like Sonic.

Or is it just built into the training? I'm not sure.

I'm a I'm a very high level training guy. Yeah.

Um, I the one of the nice things is that.

So I write from the, the output to, to match the sonics.

Sonics should work with a specified embodiments.

Um, I usually work with G1, so I don't really need to deal with the hardware down over there, but unfortunately, I took you as class.

I'm not an EY guy. I'm a I'm a CS guy. I know high level policies, but our paper is online if you want to read it.

Yeah, I like that. I can tell you're trying to build a robot and then we had to, like, model with it.

Yeah. I'm sorry. I don't have an answer for that one. Um, yeah.

And then, um, I have a couple slides and what I, what I did, but I think you're going to do your lecture.

So if you guys are, I think before we actually conclude this, I think I do have a question asking on behalf of the, uh,

the class is that everyone knows it's hard to find a job and, uh, people don't know, like,

for now, like what industry are really looking into at the moment, for example, do this.

Do you want a person who are good at like deep code or do they really want a paper,

or do they want to fence the open source contribution in your view,

or in whatever you observe, uh, through your industry experience, what's the most important if just name like 1 or 2 things, what do you do that.

Yeah. So I think, uh, specifically for USC's master's program, uh, I think one thing that really,

really helped me is that you guys, you guys have, like, a 16 week final project, right?

It's still a thing over here, right? Right.

Um, so that final project can be like a three week thing where you just figure out something in three weeks and submit it and get a good grade.

Or it could be a 16 week actual project that you build out. You have the you have the resources.

Like I'm sure you put you on a compute cluster. We'll just need a moment ago.

I'm not sure whether you received an email, but, uh, 30 minutes ago. Submit a estimate.

Uh, you know, adding people to that cluster. Okay, so you guys will have compute.

You have you as a resource, which I utilize a lot. I went to go talk to him.

And you have essentially 16 weeks for very smart people in this room.

You can go from you can do a three week project, or you can actually build a research paper,

or I've seen people get their startups out of these 16 week projects. You can make this as big as you want.

And I think that is one of the unique things about this master's program.

I would say those projects got me into Nvidia, and I would advise to utilize those 16 weeks projects the most.

Yeah, you can make it as big as you want. You have the resources. You have a smart professor.

You have smart classmates that you can utilize. The good part either than before.

Okay. Maybe not. So. So first of all, thanks again for coming here to give the presentation.

And I'll do so waiting for two minutes for chatting more freely.

So I will take over that part. And maybe they can chat with people here and we will start a real lecture.

Maybe in 20 minutes, let's say six, six, 25,

so that we will resume the classical nobody cares computer computer vision with the convolutional neural network actually back here, so don't worry.

Thanks for having me here. Thank you again. Perfect. You can just put it there and.

Okay. It's really working. I'm not sure.

Um. Uh, yes, we can hear you. Okay. Okay. Okay. Okay. Perfect.

But. But clouds can hear me as well, right? Um, let me, uh, restart.

Um. Yeah, I think we spent some time for this interesting guest lecture, which is great.

I'm pretty happy. You also heard some like first first hand experience and first of all, like add him on LinkedIn and hopefully he will pass.

I will ask him to pass everyone so that you can get some like quick feedback on something.

Um, also, I got a lot of good questions during the during the break.

Uh, first off, I want to share my first brutal interview. One was the undergraduate I graduate from Cincinnati, uh, University of Cincinnati.

By that time, I was an undergraduate in computer engineering. I thought, I know what I'm doing, which means I hate.

I hate the hardware part. I'm not. I'm not good at, like, making the making the circuits or designing the.

Sorry. Let me do this. Okay. Uh.

I don't know. Hopefully that's working okay.

I'm not pretty good at making the circles, and I thought I was a good software engineer because before I did my first full time interview,

I have been already working on assignments for some auto safety program.

It's called it's called an ax. It's I'm not sure whether the software is still there, but you can search.

It's called an axis for designing the car or plane or whatever.

I thought I was pretty good at what I'm doing until my first interview.

I still remember that interview is in Kentucky. Uh, I don't remember the firm name, however.

It's a I met a person during the career fair, and for some reason, that person believed me.

I could be a good engineer. By that time, I thought so.

And we scheduled this in person on, on, you know, on site one day interview.

And I drove from Cincinnati to Kentucky. I don't remember exactly the city, but it took me a few hours, maybe 1 or 2.

And, uh, the interview was brutal because I have never heard of, like, a LeetCode coding interview.

Uh, I know behavior, but I know nothing about the rest of the part.

And it was embarrassing because, like, they're asking me how to, you know, uh, roll the program to make this square into a circle.

Whatever. Something like that. Like I know nothing about. What are they talking about?

And the person there's three other persons who are who are competing with me for the same position.

For example, I remember one of them is a master student from a Purdue University, and the two of them are from smaller firms.

But they got a real soft engineering experience, and I was outlier by that time.

Um, this is not the reason why I did anomaly detection later, but, uh, I was outlier by that time.

So what I'm trying the story I'm here is that, uh, don't worry, for the first, uh, uh, screwed up interview.

Nobody remember who you are. Don't even remember what that interview at.

I don't remember that firm's. And I have no, uh, I just, I just I just memorized, uh, how weird that interview look like to me,

because I never know anything about, uh, coding interview.

Uh, it was it was it was brutal. Uh, I still remember they offered a free dinner with the entire group that night.

I said I'd have something else to work on. So I left and drove back to Cincinnati.

I went to a haircut as well. There's there's no causal relationship between why I went to a haircut.

Uh, along with this screwed up interview. But because people share with me moments ago that their first interviews are not, it's not very happy.

But I just want to tell you, everyone's first interviews are all brutal, and many of them are pretty rough.

Uh, I still remember when I first asked my first manager at Simmons as an intern,

like why he would hire me because he said, look like you know what you're saying?

I thought, oh, that's good. So that's all I understand about the interview.

And after that, I didn't do any interviews until that first one in Kentucky.

And that was brutal. So don't worry. Like, say, that's only that's roughly ten years ago.

Back in 2020, 15, ten years, ten years later, I still don't know how to do interview.

But happily, I don't do interview anymore. Maybe I will do some interview, but not at this moment.

Uh, so so so that's one of the comfort I want to provide so that you don't feel the word is brutal only for you.

It's brutal for everyone. At least for the first few times. Another thing people ask me about finding an industry job.

It's also very interesting.

For example, we will have more industry speakers as well, from including startups, including larger ones, including academia.

And I think one question people are asking me is that that's also the question I asked a moment ago.

However, I think his answer is more radical to make these projects more attractive.

Uh, so how to get into these larger firms or the leading firms?

Uh, of course there will be some lag, but usually for the first job, usually as a first job.

I think just like a gradient descent, uh, you need to actually optimize throughout, throughout the time.

Um, as you mentioned, as I mentioned before, my I started my intern at Siemens for a few semesters because that's required,

uh, components for my undergraduate study, and I didn't know there's other words outside, for example.

All I know is that, okay, at the same as people ask you a few simple questions regarding the to you getting to this position.

Everyone's nice and you are writing. We're writing some language by the time.

Maybe you have never heard of this. We're writing the language called.

This is called parallel language. I don't know whether this is still there.

Yeah, it's a high level, general purpose programing language for many people. They don't even never heard of this before.

But anyway, my thought is that so so, so because of that, I don't know what's outside what what's outside, the word look like.

And so the first interview actually shocked me a lot.

However, the first, the first, the first few internships actually helps me a lot, which means I learned how to do the negative testing,

which means actually one time I screw up the entire team's production because all the interns will do the same.

Which means, for example, you just, you know, add a software engineer at software companies that you are going to submit some PR,

some change package and you'll make sure there's no break change for your existing product.

There's test engineers. And finally, someone approved this to be merged into the master branch.

I don't know what happens, but they approve my PR and the entire product is done for half of the day.

Uh, I was shocked, and, uh, but I didn't feel too disappointed if I was fired because I'm just an intern.

But they didn't do that. They're pretty nice. I like them, and they're a very decent guy.

I have been to a lot of industry places. Many of the places are not decent at all.

And Siemens is a it's a very few places which are decent. The group is very nice.

Everyone is very nice. But I learned a lot things through this one.

And although I feel that Kentucky experience then I optimize to other places.

Gradually I finally go to the larger firms and I realized I don't like it.

So I go back to academia. So the first jobs are you don't necessarily.

I must go to Amazon or Nvidia, Apple or whatever.

I think what's what's actually working for you most? That would be great.

For example, if you are from mechanical engineering, many of the many of the industry nowadays,

they want to do this AI transformation and you don't need to be your first job can be a scientist in a mechanical firm, right?

For example, General Motors, Ford, and whatever they need an AI scientist.

Then your second job can be someone designing this AI automation for the specific industry in a larger firm because,

for example, IBM, they're also doing the automation for this for the automation industry.

So you gradually gradient descent sorry, not descent ascend your your career.

Uh, so so so so so all this all I'm trying to say here is that don't worry too much about the first job.

Usually, usually most of the person. As a normal person, your first job won't be too fancy.

And even for Aiden Himself. He worked at a different places.

He did. The moment I met him, he tried to do a PhD and then his gradient descent, you know.

You know, bring him to somewhere else. Which is which is which? Which is very happy.

Now ask him a few times, like, are you happy? He said, yes, yes, yes.

So I think he's happy. Um, uh, the last question before we go into the technical problem will be, uh, people are asking, for example,

doing which type of the projects will actually give you the highest chance to be noticed by the community, industry or the hiring manager?

Uh, my honest answer is not a is not a applied, uh, project or even not a research, actually, potentially that would be an open source or a benchmark.

The reason is because I'm not sure how many people are heard of this, uh, GV recently,

which means that the faster model, uh, without the human interaction part.

Just simply giving you the decision. Has anyone heard of this one?

So you feel so. So guys, you really need to look at a new standard trader to know what's going on.

So so that's not a technical change. It's not a it's not a new innovation.

It's more about they provide a new paradigm. So change the things which means many of the situation.

People don't need a long response complex interaction.

They just need a decision pretty fast. So be building the open source.

Building the useful open source will be something to attract the community attention easily.

Because if you're really solving something people not, you can say you actually don't write code yourself, right?

You actually have the ideas of optimizing your ideas through the agents and writing the code.

So which means you are actually the idea providing and you can do ten projects at the same time.

Actually, my my my routine daily work now actually is working with 4 or 5 agents at the same time,

but each of them are actually working with another 4 or 5 sub agents.

So that's why my computer memory is actually a big issue. I'm getting I'm getting a new computer tomorrow.

So which means my home computer gets 32GB of memory.

It's not. It's still like telling me low memory all the time, because at any single moment, my computer are running 40, 50 agents.

I'm including the sub agents at the same time. So you are. You are tripled or even more times more efficient than other people.

So which means if you have a good idea, just do open source and do benchmark is it's totally fully okay for this for for this course.

And I'm helping you to do the PR as well.

If that's a solid we have a lot of like a PR relation, another relation like channels to help you to to becoming to,

to get our stars and warmed up because I think that's actually more meaningful.

Um, Yeah. And the last question. Sorry.

I'm always in the last one.

The last one I tried to say is that how do you find actually something you really want to build, for example, as an open source?

I can, I can, I can, I can talk about my first popular open source.

Uh, I think some of the people already know this, right?

It's a it's this is my first open source. However, you can say at this moment it's finally getting ten K stars, but,

but but you can say we're doing this many, many like nine years or ten years ago.

So it's a it's a very long one. We just keep updating. The last one is updated five days ago.

So I think there's two tricks. So one trick will be, uh, you really need to solve a real problem.

So by the time I'm working with the financial industry and they're always doing risk modeling, however, however, uh, you know,

as a only few person in the AI field, knowing AI as a financial industry By the time it's ten years ago in the firm,

I was trying to use some Python code. Otherwise they're going to use an Excel spreadsheet to calculate the risk score.

I was trying to use it in the Python. However, I realized there's no such a good library scikit learn quite a few, but only for algorithms.

I'm thinking, what if I'm just writing one for myself? Just myself?

Because that's actually that's my daily job. I need to do this risk modeling myself.

So I started building some very early version. I don't know, I don't know whether they're still here.

Some of the algorithms are still here with extremely long history.

But if I do, I think at least if my memory doesn't fill me, I think I started from the same place,

the algorithm, which I don't know if I can actually reach the.

Yeah, you can say this is the very first few starting from the 20 2018,

but it still got updated for many reasons, yet Still, the latest wine is due September 16th.

So so so so I started from very simple algorithms. And because they're useful and it's useful for myself.

So you can start building something useful for yourself that that will be important.

And of course you get a lot of like issues that I never get a chance to really address, uh,

find something useful to you and building it and keep building and just, you know, just keep updating.

So. So you will say, I'm still on the front. The first first, I'm still on the frontier to do this development.

Of course cloud. Cloud is a major driver. Sorry. It's cloud and codex and now anti-gravity.

I'm using three agents at the same time. Um, anyway, uh, so, so so I think we spend a lot of time today actually talking about the industry.

You can see it's fancy outside and everyone's worried or wonder how to actually get this job.

Uh, when you get this job, you will realize It's not that.

It's not offensive, but it's not. It's not. It's not that hard. But the first job will always be from something you are comfortable with.

Which means maybe you can start from mechanical engineering. You can start from a Ford General motor.

Uh, like myself, starting from a financial industry.

It doesn't matter. Just be a scientist there. And then gradually you can become a join to another industry.

Maybe by the end of the. You don't like the technology industry at all? That's all good.

Uh, yeah. Uh, and maybe.

Yeah, people come and go. That's all good. Um, okay. I think we can come back to, uh, we can quickly come back to the real technology.

I don't think this is the type of the industry, this discussion. Ah, the tour.

Because, uh, because the you got education, uh, to to know yourself better,

and but you still get to pay your rent, so you still want to know how to get a good job.

Um, okay. Let's continue. Um, any question before.

Before we really continue? Perfect.

So, so last time we talk about we started from this convolutional neural network.

I'm going to do a quick recap before jumping to the new details.

Um, it's not working. Oh, sorry. It's not working. Uh, so convolutional neural network.

I'm going to do a quick recap before jumping to the new details.

So for for a convolutional for a convolutional neural network, it's for computer vision.

And it has the four primary layers convolutional layers layer or pooling layer and a fully connected layer and a softmax layer.

So uh, we discussed the first one already.

But let's do a quick recap. Uh, we already learned the fully connected layer before, which means all the all the layers are connected to each other.

However, if you represent your image as a fully connected layer, the issue will be recalled.

You're going to connect all the pixels to every single neuron.

Then this will get you a lot of parameters. So the issue will be you're going to waste a lot like computation.

And usually it's a it's not computable. And another big issue is that you are losing the spatial spatial correlations because as an image,

as an image, their neighbors are actually getting some spatial correlations.

And and an idea will be this locally connected layers, which means you are not connecting all the all the pixels to all the neurons.

You are only connecting the local region to certain neurons.

That's that's the second idea. It's better, right? Like because you're reducing the number of the parameters to do the computation.

However however this is an improvement. But maybe we can even we can even do better.

So which means that after that the convolution layer comes,

which means you are going to use the same convolutional filter to actually scan through the entire image to do some filtering and summarization.

So convolution layers are actually doing the summarization. So it's called a convolution with the kernels.

So the kernels are learnable weights. So which means we're going to learn the the learnable weights are on this convolutional filters.

Recall we're saying for the for for most of the images you get these three channels like red, green and blue.

And you have this 32 by 32 images. And you're going to do the filter, which means let's do the animation.

So you are going to scan through each of this so that you can do the summarization of the image and recall each of this.

Each of this convolution process are matrix multiplication.

So which means so which means we're going to do the calculation among the amount each of this local region.

Sorry. Where's my pointer? So you are going to do the calculation among this.

Each of this local region along along with your convolution convolution filters.

So let's say if your image is a 32 by 32 by three.

Let's let's forget about the three because that's the three channels of the green red, blue.

And then you, you just you're actually just moving your five by five filter through this image and you can have multiple convolution layers.

Right.

Because each convolution layer can have a different, uh, can have a different weights or initial or initial or initial, uh, you know, filter number.

Sorry. Each of the convolution layer can have a different, a different, uh, you know, filter numbers.

So the filter numbers put a different emphasis. For example, some of them are put emphasis on the edge.

Some of them are putting more emphasis on the local image patterns.

So you can have a multiple convolution layers, and each of them are learnable so that you can get more learnable parameters.

So that's also one idea for getting more, you know, convolution or learnable parameters from the from your from your image.

For example in this for in this case you are going to have six filters and each of them are five by five of the size.

And you have three channels. So which means you have three six filters. And each of them are listed five by five by five.

And you can say the depth will be three. That will be the color channels.

And you apply each of them separately on two batch of images, which means you have one image,

you have a separate image, and so that each of them gets you a finally,

like a convolutional convolution after convolution filtered outputs,

which means you have two images and each of them have six channels one, two, three, four, five, six, and each of them are 28 by 28.

So you reduce your original image size from 32 by 32 to 28 by 28.

So that would be an improvement. Again doing this the convolution layer is more about like image compression.

Again all the learning are compression. Everything the compression is learning or the compression in the intelligence, just like a human being.

Like we're learning a lot of things and we're taking in a lot of like knowledge.

We just figured it out and we condensed into some like a dense knowledge that you can do the outputs.

So the human beings are also like some language model in a certain sense, but we are multi-modal and less reliable, maybe in certain sense.

Um, yeah. So yeah. So this is still like the previous, previous page.

Uh, and, and then and then usually for, for, for computer vision problems,

we're doing the series or the sequence of the convolution layers, which means we're applying the convolution layers multiple times.

So you can say each time we're doing the compression and we apply the same,

same convolution filter multiple times, we're going to compress the image, for example from 32 to 20 8 to 24.

Sorry. Where's my pointer again. Okay.

Yes. So you can say so. You can say when you are doing multiple multiple convolution layers,

you're going to gradually compress your compress your images to the smaller size and in the middle.

Because recall convolution layers get corresponding learnable weights.

So you are once you're doing the convolution layers,

you can still apply some of this nonlinear activation function like a ReLU so that you you get some outputs.

So usually that's a that's a that's an operation.

So usually you have a convolution layer plus some nonlinear activation, and go into the next layer and the next layer in the next layer.

So you just you just keep repeating this process. So here's a.

So here will be some examples when you apply. When you when you apply some of these filters.

And you will see actually when you go through the these convolutional layers they're actually learning something.

But maybe it's you can you can loosely say after after the convolution a car, it still look like a car.

I'm not sure whether you can you can see from the screen, but convolution layer are just doing the compression,

but they actually still keep the the original features or the patterns of the image.

And however however however, if you're doing an author like this is another demonstration,

you will still loosely see some of the patterns of the original class. Maybe this is a car.

This is a car. And these are cars. So? So basically you can still tell after the convolution many of the things.

However, what we are saying, we are saying the convolution layers or this entire computer vision thing are motivated from the the human beings.

Actually, if you remember that the cat cat cat experiments so how they're actually doing the vision thing,

the convolution layer is just like human human beings vision were captured.

The things from the low level to high level to more complex patterns.

So if you do the visualization of the first layer, first layer convolution filters,

you will see that there are usually learned some like oriented edges opposing colors.

So they're learning some simple patterns for the for the first few convolution layers.

However, if you just keep going, I don't know why I have a why don't have a why don't I have another a few other slides?

Because really, I remember we have other slides to show you when you when the convolution layer goes from the first few layers to the last few layers.

Gradually you're going to see more patterns. So for example the first few layers will be the edges,

simple colors or etc. etc. but in the later part of the convolution realization you will see more, more complex patterns, just like the human beings.

The the vision is the structured, hierarchical. You are learning from the simple low level stuff to the high level complex patterns.

Okay, for the convolution layers, as we're saying, you're applying this filter to your to your original image.

And then you you do this a compression right. For example for this 123455.

For this the 5 to 5 by five image. If you're applying this a three by three three by three filter, you are going to result in 4x4.

Compress the image. But but but each of the but each of these.

The process is that you are going to do the multiplication, the matrix multiplication of this original nine pixels along with your filters.

This convolution filter is also nice, so you are just doing the multiplications there to get a one single number, uh, along with ReLU.

So you are going to fill in this after filter map which is called this the output map after the filter.

So there will be some other terminologies we're saying for for the filter or for your original images you have this width height and depth.

The depth is 0D3 because you have three three colors.

And the other thing is called a stride. So the stride just means how much movement you are.

You are doing like per per movement.

So basically you can say in this case the stride equal to one, because we're just moving one step to the right And you can do that equal to two.

Right. This is a three which means you're directly moving.

You're directly moving from this original place to this. You move three steps.

So the first the first point from from 0 to 3.

So you're moving three steps. So this is equal to three.

So as you can say if you're doing a smaller stride you're getting less compression because you're getting more and more information.

You have a more spatial local information return. However if your stride is larger so which means you can largely reduce the output mapping.

So which means so which means that. Here is the seven by seven input images.

And assume a three by three filter. And if you're doing stride equal to one and sorry finally finally you get a five by five output.

So there are some formulas you can calculate. It's very straightforward because you're from you're from here and you move.

You move from here and then go one step one step, one step.

Finally you got up. It's actually seven. Minus three plus one.

So that's equal to five by five. It's a straightforward calculation. We have the formulas.

And however if you have a strategy equal to two you will say you get a three by three output.

You will say this is smaller than five by five because you have a larger stride you have you are doing less but you are doing more compression.

So larger stride, larger stride, more compression, smaller outputs.

So it's very straightforward. You're just sampling fewer things. And when you have a stride equal to three you are going to face the issue.

Which means it doesn't fit well because say if you are doing a stride equal to three,

if you're doing stride equal to three, then when you move three steps from here to here, then you do the second sampling.

But when you do the third one, you realize, okay, there's you need two more, two more, two more columns here so that you can do the three bars.

You can do this three by three by three by three filter with three equal to three.

So which means you couldn't really apply it to the three by three filter on this seven by seven inputs with a stride equal to three.

Then how to actually doing this? The idea will be doing something called a padding.

So when your image size doesn't fit with your stride and filter, you can do the padding, which means you can padding zeros around.

There's are many ways you can do the padding, like padding zeros around your images will be one of them.

So this is a this is called zero padding. And we're padding two which means you're padding.

Uh, you know, you're padding you know, two on the top, bottom left and right.

So, so with this in mind, so with this in mind which means this this this is your original image in the middle.

These are, these are all real images, pixels. However, because of the size issue you're padding one zeros around this original images.

And then you can actually do the, uh, you can do this, uh, you can do this, a filter.

Uh, great. So those are the patterns. So the pattern is added because your your stride size, filter size, image size doesn't fit well.

So that you need to actually paddle with this one pixel border.

So there will be some calculation. You can you can you can you can remember you don't need to remember again for the midterms.

Way, way we allow anything. You can bring whatever you want.

Like you can bring your physics books and uh, you can bring um, what else are crazy large handbook.

Um, I don't know, bring whatever you want to bring, like a cookbook or whatever.

That's all good. So. So you don't need to memorize,

but you you need to know what to stride and what's the what's the padding and how to actually calculate the final output, you know, filter size.

We usually test that because that's a pretty fundamental, uh, fundamental thing.

Uh, so as you can say, so as you can say for this, for this convolution layers, it's just like simply, uh, you know, moving through the images.

And this is another animation that you're doing padding two with the stride one.

Um, and also there's other things. So you will say so quickly, quickly you will see one thing.

For example, when you have no patterns, we have no patterns. And so the pattern will actually increase your final output size.

Right. Like these are just like these are just showing you when you are changing your pattern size and your and your stride size,

even using the same feature, the output mapping, some of them are larger, some of them are, some of them are smaller, some of them are larger.

So. So both of the parameters matters in this final output.

Final output size the size and the. And also it can have a depth, which means we are just showing you one dimensions.

Usually there's three dimensions, right. Like a green, blue, green, blue, red.

So that'll be a three channels yearly.

Uh, so that's a quick summary for this convolution layers. You have a wise width had height width height and and convolution layers.

And you have a number of features. For example you can have a one filter, two filters, three filter, whatever number of filters what you want.

The filter size is usually the square right like three by three, five by five, 28 by 28, whichever you want.

The stride, which is the mean, the number of steps you are moving from one filter to another one.

The zero padding just means how much things you are going to pad around your original images.

So this this will give you some like a final output size, height and width.

And you can also do this parameter calculation. Because recall like we're learning we're learning the future.

We're learning the convolution filters. Weights because you have a recursive filter is a f by f.

So you have a f square here. And you have a three different convolution layers and number of filters.

You simply just like f square times c times k. That just means number of parameters you have for the convolution layers.

Uh, and you can also add a k biases because you have a k filters like each of them get a one bias.

Uh, yeah. When you're, when you're, when you're in exams just trying to bring this page so that you can plug in your, uh, numbers.

But the weird thing is that if you don't really understand what's the CFSP, then, uh, it's a it's it's a, it's a it's weird.

Uh, and also also there's some, there are some common settings, which means usually how many, how many of the filters do you want?

That's the power of two, right? The reason is because in computer science, many of the things are just purely a power of two.

Whatever is a two are 32 or 64 or whatever.

And hopefully, uh, hopefully as a person who are working on working in computer science,

I can leave to at least the two to the power of, uh, sorry, seven or something like that.

Uh, so that'll be 128. Sorry, this joke is too weird.

Um. What else? Uh, again, like, as a quick summary for comparing the fully connected layers to the convolution layers,

for the fully connected layers, you are trying to connect every pixel to, uh, to every neuron from the previous layer.

However, it's not very good choices for computer vision because computer vision, the local regions, they are very similar, right?

Like they share the same color, they are same age.

And and it's it's it's not efficient for images to be to use the fully connected layers because you're wasting a lot like a lot of,

like a parameter computation. And you're also losing the capacity for the spatial hierarchy.

So. So with that in mind, it's not suited for image recognition because spatial relationships are the key.

However, it's still very good for some classical applications.

And we'll also talk about the locally connected layers,

which means you can connect a local region to one neuron, another local region to another neuron.

You're reducing from fully connected layers. However, still not the most efficient for the convolution layers.

That will be the most efficient way for the images,

because many of the filters are trying to learn something like age, relationship, color, relationship,

you are sure you're going to share the same parameters across the entire image for the convolution filters,

and this is the most parameter efficient in this of three designs.

But of course, you know when people are asking what's the best for something,

you are usually saying nothing is universally universally best and blah blah blah.

It's not that important. Uh, okay. So, uh, so so so so the next components we're going to learn is called a pooling layer.

But of course that means these are all fundamentals I know many people already.

Well in the past I'm telling people you must already know this, the basic fundamentals.

But now in the Atlantic time I feel people no longer know this fundamental anymore.

Because actually, how many people are still checking your checking, checking your code or your own code?

Uh, a few. The checking code just means you really look at the code.

Not just like saying why is why is this not working?

I want it to work. And, uh, By prompting.

So there's one person who is checking. Who else?

Two. Three. Four. Actually, we have some very decent classical people here.

Honestly, I'm not one of you guys because I can no longer check anything written by a gigantic AI anymore.

As you can imagine, they're writing crazy codes. And I have my own harness and instructions for for a gentleman.

For example, don't write that much of the test. Test?

Test the code because one of the preference for the genetic code will be writing test code.

And another, another great.

Another preference of the agenda. I will be writing overengineered codes,

which means they're actually going to jump into some corner cases and trying to solve it for hundreds of years and until your usage.

Weekly usage or five hour usage are used up. Oh, I saw on Twitter.

People are saying the table I mean will restart the codex usage tomorrow.

So I'm hoping that's that's actually true because I have to stop work if they don't reach that.

Um, okay. The reason I'm mentioning the, the, the the fundamentals, because, uh,

I think checking the code maybe in the near future will be really challenging, however you can.

What? I'm not. What I'm doing now when I'm working with the agenda, are not checking the code, but I'm checking the concept.

I'm asking him. I'm asking. Sorry. There's no him. I'm asking the agent to explain the design and why.

So I'm going to if you just go down with the basic concepts like for example, if, if, if,

if the agent agent deliver you a convolutional neural network, you don't need to actually say, show me the how you read your pooling layer.

But you may ask, like why you have this max pooling layer other than the mean pooling layer.

So you still need to understand the basics. Like for example, the max pooling layers can retain the some extreme features or something like that.

And the mean pooling layers are going to wipe out the extreme features.

However they are more stable. So.

So you need to potentially you need to understand why they have such a design so that you can criticize a generic other than just checking the code.

I still respect people who are checking the code by hand. That's a that's very admirable.

And potentially you should put on rest. Oh, actually, this is another thing.

I chatted with Aidan today before he came to the office, before he came to the classroom.

I chatted with him like how much, how much usage or codecs or cloud you can use that industry.

He told me like they got this week, either as weekly or monthly, like a 20 K for Codex and 10-K for cloud or whatever, something like that.

And I said, like, have you ever really burned this out instead of easily.

Uh, yeah. So so, um, yeah, I think I think, uh,

another post on social media is that I believe now the token usage or token price are either

potentially the lowest at the moment because this firm are trying to make their impact.

So they're giving a lot of like promotions. And if you know that if you're using subscription, they're way cheaper than API's.

Uh, and with that in mind, you should write a, well, user, uh,

subscription to do a lot of good things until the moment they actually increase the subscription subscription price.

I feel that will come in in months. So I'm just trying.

I'm burning the subscription as crazy nowadays. Okay, back to the pooling layer.

We already talked about convolution layers which are actually compress, which are actually compressing your large images and retain their uh,

so this so this convolutional layers, each of them are actually trying to get some of the features from your original images.

Then we have this pooling layer. So what's pooling layer.

Which means you're further compress your images but no longer back computation like a dot product of the matrix.

They're actually they're directly working on the output of the your activation map independently.

So how would that look like. So one of the most popular pulling is called the max pooling.

So this is the this is your for example after the convolution after the convolution

operation which means after the convolution and ReLU you get this activation map.

This is a 4x4.

And you can add a max pooling layer by two by two filters which means so which means you go through from this place and then the max number is six.

And you move to the if stride equal to two you move to this four numbers and the max will be eight.

Then you can further reduce your large activation map to the smaller one,

so you reduce your 4x4 activation map to two by two output output, which means that's a 25% smaller than before.

Again, as you can say, different from convolutional layers for the pooling layer, there's no learnable computation.

So you're directly taking the max or you are taking the mean.

So there's nothing you need to learn. Regarding this matrix your you are not going to learn anything from this filter.

So you're actually just directly applying them.

So one question will be but one question will be when we're doing this compression are we actually losing the information.

The idea is of course yes. Where all this all these things are image compression, which means for example,

when we're just taking the large number in this, we're actually compressed.

We're only leaving the most significant signals in this original image or original activation map.

So one question is that people are saying we will use the max pooling.

Really shift your image a bit. For example, by this is a two by this is the four by 4x4 matrix.

And after applying this a two by two max pooling strategy equal to two, there's no when there is no padding the output will be a.

The output will be 90089008909008. And however, if you if you are doing some if you are doing a, however if you just uh, yeah.

What I'm trying to say here right away the shift.

Anyway the quick takeaway is that is that like this this a pooling don't actually shift

your image or the shift directions can be random which means Because taking the max,

you are going to make some sacrifice anyway. You're losing some information.

So maybe sometimes it's going to shift your result a little to a little bit to the right, sometimes a little bit to the left.

It doesn't matter. This is not this is not on the exam. It's just like a quick observation.

So when you're applying the max pooling to your images, let's say you're doing this a three by three filter with a stride equal to two.

So the first one will be this. The largest number is eight. And then you're moving two steps and applying another one that will be seven.

So that will be 2727889. Right.

2789. Uh sorry. 87289. So it's a very straightforward operations even.

It's much simpler than convolution layers. Uh, so so so so you can do different pooling, right?

Like a max pooling, the simplest one, you just take the max number among that filter size.

And you can also do the average pooling, which means in this specific case, if you're applying the three by three filters with a stride equal to two.

However, you're doing this average average filter, you just add this up.

This will be six, nine, six, nine and 17.

So you're adding 32 divided by six. So roughly 5.5. something.

So that will be your. So that will be up. So that will be your average pooling.

You can also do L2 norm pooling. So you can do different ways to do the pooling.

But the core idea for the pooling is that you want to find some representative numbers to represent this region.

So for example the max number of a region is a representation. The average of it is also a representation and the mean is also a representation.

So whichever can represent your specific region that will be a representation.

But usually we're just taking some simple operations. Either max or average is the most popular ones.

And why pooling layers is also very straightforward because you're trying to reduce the number of the parameters again.

Like, think about this like a I don't recall the exact numbers, but they're saying what we're saying as a human beings is a very high resolution.

And of course, for some other creatures, I mean, animals, they're using even very high resolution, but not all the pixels are useful, right?

Like now we have this high, high resolution, high resolution 3D, 4D movies.

However, even in the past, I don't know whether you go through that period of time, like 20 years ago when I was when I was a kid.

Like the most of the movie were saying the 40, 48, 48, 480 and 900 high resolution by that time just mean 1000, 1080, something like that.

So, so, so we're still we were still pretty happy for that high resolution nowadays look like very crappy stuff.

So many of the information are not useful. So you are trying to reduce the information again.

All the learning are just compression. You're taking this course.

It's also a knowledge compression. Everything is about.

It's about the compression. So put in layers are really useful because you are going to largely reduce the number of parameters.

And so that your models are less overfitting. And so you can you can do a you can use the smaller computation for for more complex problems.

And also they have some calculations for the pooling layer. But it's very similar to the max.

It's very similar to the convolution layer computation but it's much simpler. You have the spatial extent.

You have the stride. And I mean this is the size of the filter.

You have the stride. There's no there's no you can still have a padding.

But do you need a padding. You can still have the padding.

But we don't have this here. Then you can still calculate the the output size like weight, Waist and height.

Height. Sorry. Height. Height. But again. Remember this.

For the max. For the. For the pooling layer. There's no. There's no parameters.

You are trying to learn nothing. So. So with that in mind, you don't. You don't need to learn anything.

It's simply operation. It's directly calculation or operation.

There's nothing to learn. And finally the softmax layer.

Softmax layer are are helping us to convert a multi-class problem into some probabilities.

Uh, for example. Finally you are going to for example, in this case you're going to predict for the images.

Are they if they're apple beer, candy dog or egg.

So softmax is implemented through a neural network layer before the output layer,

which means giving you the giving you some very simple things, which means give me a class a given class I.

So what's my point? Okay, given class I, you are going to calculate this logit over the summarize the logits across other classes.

For example, you have. In this case we will talk about five five classes right.

Like apple, beer, candy, dog, egg and soul which means k equal to five.

You are going to calculate it's more like a normalized result among each of the class over the summarize the class.

So everything is going to be compressing the probability probability of one.

So uh so basically finally you get this a sigma z z which means this output probability for the ith class,

which means when you are having an image here after the softmax computation, you are going to get what's the probability of a.

This image belonged to an apple or something. So softmax layer looks very straightforward and simple,

but it's very useful in the vision because you can say in a vision most of the tasks

are multi classification because usually you are going to have ten different classes,

20 different classes. You are going to do the segmentation of the object. So it's usually not.

It's usually non-binary, which means it's not a simple yes or no.

It's like which class it's actually belonging to. This looks very simple.

But until yesterday I didn't know. There's a very elegant and decent mathematical reason behind it.

I'm not going to expand it there. I'm not going to expand here because I also don't fully understand the the elegant mathematical thing.

But until yesterday on Twitter, I saw how people are actually saying this can be traced back to some very elegant maths.

Uh, I would, I would encourage anyone who are interested to really check it out, maybe ask your agents and prevent the hallucination from it.

Uh, right. So so so now we talk about the convolution layers, pooling layers,

fully connected layer and the softmax layer as you can say convolution layers and pulling layers are trying to compress.

Are going to compress. The are going to compress your images.

Doing this the feature extraction and the fully connected layer are helping are helping us to actually finally giving the output.

This is usually used as output layer and equal to the number of the classes you're going to predict.

And this softmax help us together probability which means you're going to convert the logits which means for example,

you are predicting one of the images whether they belong to ten different classes.

And this gives you a ten numbers. However, you're going to use a softmax to turn this.

It's not ten numbers. It's like ten vectors. This softmax turning these ten vectors into a probability like ten probabilities.

And finally you just choose the choose the largest probability class.

That's it. Uh, and uh, yeah.

Again, as a quick recap, we're going to mention activation function here.

Again the convolutional convolutional neural networks. And as you can say, uh, as you can say, uh, you know, recall like.

For the fully connected layers, without activation, nonlinear activation functions,

you can recall if you have x and y and the first layer will be f and the second layer will be G.

You're doing from F to g to h, which means you do f of x as the input of G and as the input of H if there's non-linear.

If there's no nonlinear activation in the middle,

what happens will be the h energy and f there are just matrix and you can directly do the computation of f.

So basically this is becoming a linear linear calculation which means x dot dot product with w.

So so without non-linear activations the multilayer multilayer deep neural network reduced to one matrix multiplication as a linear function.

So that's why we need a activation function which means non-linear non-linear activation functions to really help us.

And this actually helps the neural network to become deeper and more expressive.

As a quick as a quick recap, we talk about sigmoid, which are actually kept by 0 to 1,

which is bad because they have the situation issue and and there's no activation out of the range of -5 to 5.

We have tangent. We have I think most commonly used is ReLU.

But do you remember there is a dying ReLU which means the negative parts. There's no signal.

People are revising this by leaky ReLU, Max out and ELU etc. if you recall the non-linear thing.

Um, yeah. I don't think we need to do a quick. Yeah, it's a it's still a quick recap.

Again, if you recall this sigmoid function Y there's a,

there's a gradient vanishing because on the if your value because the gradient calculation is

a chain rule and if any of them are wasting are out of the range from -10 to 10 or -5 to 5.

You almost got zero signals from it and gradually your gradient disappeared in the from the early layers.

And the ReLU have this dying ReLU issue, for example, which means a x is equal to zero.

There's nothing. So people usually using leaky ReLU and ELU as a replication as a as a as a common choice for deep neural networks.

And then we go back to this classical convolutional neural network called AlexNet.

It's named. It's named after the author. I forget his full name, Alex Watt, but it's under it's for his name.

Oh, such a high chair. As you can say for AlexNet.

That will be the input, will be the image. And you'll go through the convolution layer pooling layer plus the nonlinear activation.

Again you repeat this and sometimes you don't need a pooling layer here, and this time you don't have a pooling layer there.

So which means pooling layer are usually optional which means it's not necessary or it's not required.

So that's why in the past there's a lot of work on so-called neural architecture search,

which means how to actually compose a deep neural network which suits your suit.

Your problem? Well, you can have a pooling layer.

So many things you need to design right. This design. Right. Like the size of the convolution layer, the size of the pooling layer.

What's the pooling function. Is that max or mean or something else. Whether you want a pooling layer along with the convolution layer.

So all these are the open questions in the past. So people are doing something called automated machine learning and neural architecture search.

So that was what people are doing in the past.

But again in the large language model time a generic time, you're just saying, okay, tell me, what's this image belongs to you?

Everyone become the prompt engineer. However, I think there was a period of time there was a real job called the Prompt Engineer,

which means the industry wanted people who know who can write a prompt well, but I don't think that that exists anymore.

The reason is because a genetic engineer becoming more and more powerful,

even you give them like a vague and loose instructions they can already understand well.

And there's other things which makes things pretty pretty strong.

So that way don't the reliance on the the reliance on the, on the prompt becoming less and less important.

And actually, earlier this year, people are all talking about harness engineer,

harness engineering, which means how to compose a genetic AI to orchestration.

That that position is also gone in a certain sense, because the genetics are becoming more powerful.

They can do their soft organization pretty well. Um, so now this harness becoming stronger and thinner and thinner.

So which means we just need. I chatted with a few friends yesterday.

They're from Johnson, Johnson and Johnson and they told me in their real world production they don't have a strong harness at all.

They just rely on the genetic AI to organize everything.

What all they need to do is doing the guardrail and governance and sort of like auditing to make sure things are not going crazy.

So actually so so so so actually I want to also promote one quick thing I'm building recently is not American Express.

I'm building a learning resource for persons who are interested in this AI auditing.

It's called it's called Audit Commons. And the reason I'm mentioning this is because you will see a lot of you must see a lot of like news, right.

Like, like I think the other day there.

I'm not sure whether it stays the same. Let's say the say that the Twitter say.

I think that will first stop saying like we need to slow down the development and the alderman saying this is right.

Something like that. And Elon Musk saying this is right or something like that.

So they are all saying yes, yeah, we must pace the pace, the frontier, blah blah blah.

So things are getting so, so, so the leaders, AI leaders are trying to slow down the things and for many different reasons,

potentially for for commercial reasons for other things.

However, I personally believe the auditing governance policy are becoming more and more important because by the end of the day,

because the harness is very strong and the agent is strong,

so potentially the effort put on making a stronger agent becomes less important because there's a lot already

a lot of smart person who are doing this but potentially we need to learn how to give an audit in trace,

how to trace back what's really happening.

So we provide some like learning resource here and including data sets, uh, data sets, paper tools etc., etc..

So if you're interested you can you can, you can actually take a look.

Uh, I think that's an emerging direction because personally that's my research. That's my research direction.

I'm not saying it's emerging because that's my research direction. Because actually I'm doing more, uh, data analysis.

When you are choosing data, when you're choosing a direction for yourself,

you're often doing you should also doing data analytics to say what this is a rising direction.

Right? Like you, you should like your direction. But at the same time you need to gather your numbers.

I have a I have a genetic framework to analyze weakly to say which which which keywords are getting headed up and what the directions are rising.

For example, for the auditing and agent auditing if you search an archive this year, compared to last year, it's a 370 or 50% increase.

So which means it's an emerging field and it's very early. Um, I think the future needed regulation and the governance and the policy changes.

And potentially it's still very early so that if you're doing this early enough, maybe you can get a good position or roles in the in the race.

Uh, uh, where am I? Oh, okay. This is the AlexNet details.

We use this to explain, uh, the convolution layers, pooling layers and ReLU.

And many of times you just do the, uh, you know, uh, you just do the mix and match, just like playing your playing some game.

There's a lot of, like, other convolutional neural networks. Um, again, this is just like you can, uh, you can do a lot of customization by yourself.

Uh, for example, you do the convolution, uh, you just design yourself and you can connect different conclusions.

And, uh. Uh, and there's, uh, I think I'm going to fly this through the,

the all these slides are just trying to show you there's a lot of, like, a variety of the convolution.

Or maybe I'm only showing you one here, so that's all good.

Okay, uh, just a quick summary and then moving to the next part will be we'll talk about convolutional layers pooling layers, fully connected layers.

And they need a nonlinear activation in the middle.

And the next part will be we're going to learn why convolutional neural networks or the computer vision

or in general deep neural networks need something called the normalization for stabilized training.

Uh, so so so first we consider a single layer of the deep neural network y equal to w w w dot dot product x.

And however the optimization we're trying to optimize w right.

The weight matrices, however the optimization can be hard or challenging because of the few reasons.

For example, if your ex. This is this is also a matrix.

If it's a if it's an image, it should be fine in certain sense because you can say, uh,

the pixels there, they have a range from, from uh, from I think the, the, the pixels are from negative.

Uh, 2525 256 to 256.

I might be wrong. Suddenly I just my brain doesn't work. But they have a they have a constraint.

They have a constraint. Uh, value range or magnitude range.

However, if your ex if this is actually range from like negative infinity to a positive infinity,

then which means you have a very hard, very challenging optimization optimization problem.

And uh, so which means the we hope that the ex have a good range.

They have enough diversity. However, at the same time it's not a huge range diversity which means and of course for different layers.

We hopefully all the skills are comparable or similar so that the optimization are smooth and we're not facing the issue of the gradient,

for example, vanishing, explosion, dying, ReLU, etc. etc. we hope all the optimization are within the same range of the value.

That will be the most ideal case. So which means.

However, by nature most of the data are not. We just need to do this by ourselves.

So in 2015, 2015, roughly 11 years ago, people proposed this the batch normalization.

So which means they try to make sure each batch of your computation or the optimization to be zero mean and unit variance activation.

So so which means so which means it's actually it's very straightforward.

And which means you get a batch of the let's say this is activation map or this is a this is a, this is one of your one single number.

And let's say this is the case number in your current calculation.

Current activation map. And what you are doing is that actually you're just subtracting the mean of the current activation map.

This is just the mean. In fact in in expected sorry expected value, which means the taking the mean.

If you're taking a statistic, you must know that expectation.

The expectation in realistic just means the realistic average averaging just equal to expectation in a sense.

So which means you use your number, subtract the the average of your activation map and the scaled by the standard deviation of the activation map.

So this is a vanilla differentiable equation. Uh I don't know whether I have some visualization to show you this.

Well, uh, but it's a very straightforward calculation.

Let's, let's assume let's say you have such a matrix n by D. So which means this is your activation map.

You have a you have any roads here. You have a T dimensions here.

And you want to make sure this entire matrix to be batch normalized.

And what you need to do, the first step will be you first calculate the mean of this activation map, which means you divide it by elements.

Or you can first do this a row based. Sorry. You can first do this row based mean.

And you can do this. You can do this a row by row calculation which is which is all good.

So which means you are a, which means you calculate the mean of the.

Mean of this row as a, you know, just a it's just a mean.

So which means you iterate over all the samples here just taking the mean and the sigma just the mean for this row you're just taking,

you calculate a standard deviation across each of the samples here.

And then finally you can scale your you can scale skew your, you know, this row by this batch normalization.

But of course you can also do this entire batch in one shot, which means you calculate the mean of the entire entire matrix activation map.

You can calculate the standard deviation of the entire activation map, and you calculate these are all good.

These are just like different choices.

This is called per channel min, which means you are calculating the mean of this row and then this row, and then this row.

And doing this calculation row by row. But you can also do the entire matrix.

It doesn't matter. What if zero mean and variance is too hard of a constraint.

I don't know why that that's even a problem.

Uh, yeah.

So so so so so so so so as you can say, if you are doing this during the training time, when you are doing the test time, you still need to compute.

You still need to do the batch normalization for your test data because your training data are skewed.

For example, if you're if you're if you skew your image to this using batch normalization into this specific range,

then you also need to refer your test data. For example new images. You still need to remember the training.

Training. Training mean and the standard deviation so that you can still apply this to your test data.

Which makes sure your training data and the test data are pre-processed in the same way.

So it's just like a save this information. Uh when for the for the data.

So people are adding this batch normalization usually after the fully connected layers and the passion and the and and the convolution layers.

The reason again is that you scale your data to the unit range so that the optimization becomes becoming simpler.

So whichever there is a learnable parameters you want to do the calculation.

You can apply your batch normalization.

In the next few lectures we're going to learn other things for example sequential units and etc. etc. they can all be applied for this.

Batch normalization. One of the note is that because we had a break earlier.

So whenever you want to take a break yourself, feel free to do yourself because we won't have any break before the class.

He looks very surprised because because I think we spend too much time today on the industry part.

We want to catch up a bit. So. So if you want to go to restroom or relax a bit, just suit yourself.

Uh, we're going to finish in 40 potentially 40, 40 minutes, which means by 815 or 8, ten or etc..

So it's very hard to balance because some people always feel that, of course it's too easy.

Some people feel of course it's too, too challenging people. Some people feel it's too much.

Random random random random [INAUDIBLE] talk people.

Some people enjoy that more than the real course content.

So, you know, it's as a 300 people as a The 300% class is challenging, but I'm also gradient ascent on this.

This is the first edition, so I think I'm much more have better understanding what's going on.

Um, yeah. There was also a bag on the floor, so be careful. Um, so overall all these components we're learning,

including fully connected layer convolution layers and the pooling layers including this batch normalization.

You can also call this a layer. All this stuff exists because we want to make sure the deep neural deep neural networks are easier to train,

because it's very hard to train a huge network, and it's very hard to train a deep network as well.

Uh, if your image is too large, you need a lot of parameters. Which is which is a is not ideal for, for learning.

And for example, if your data range are pretty sparse, it's also not easy for learning and optimization.

So that's why we have this batch normalization. Uh, so for but again, for all these layers, you don't need to write the code yourself.

I'm not saying ask agent to write for you. I mean, even for PyTorch or TensorFlow.

Uh, they got this, uh, implemented very well. So which means so which means so which means, uh, yeah.

I don't think people are writing PyTorch anymore nowadays, but if you do, what happens is right.

You just need to initialize the batch normalization dimensions.

And you have your input tensor, uh, from PyTorch and you just doing some, uh, you know, batch normalization.

Batch normalization, um, uh, and again, most of the things in the deep neural networks are changeable or flexible or adjustable,

which means for example, we're saying we're saying,

if you recall, when we're showing this example, uh, when we're showing this example, we're showing that,

uh, uh, we're showing that you can calculate this batch normalization by per row right.

This is doable. You can also do this column based batch normalization.

You can do this entire matrix batch normalization. You can use the two batch together to do the normalization.

It's all about choices. It's a. Weird enough I was I'm watching today.

I was watching that on The Matrix. I think there's a famous saying that it's all about it's all about your choice or something like that.

Similarly, in deep learning, it's all about your choice.

Like whether you were you at your batch normalization, you are doing your y's or column y's or matrix y's.

It's all good. It all depends on the situation. You can do for one batch.

You can do it for two batch. You can also do that and you can do a lot of different things.

Um, so as a as a final summary for the deep neural network on the convolution layers or convolutional deep neural network,

you have a convolutional layers pooling layers, fully connected layers. Activation functions and to.

To. To. To help the learning. For the convolution layers you have this batch normalization or normalization so that you just put everything together.

Uh you you will you will you will do some good results.

But the one question will be will have these good components. How could you actually build the architectures.

Uh, so here are some these are not like knowledge.

It's more about like illustrations. And nowadays things are even more different because now we have a diffusion models.

And diffusion is another big chunk of the computer vision nowadays.

I'm not sure whether hopefully I can cover a bit of the diffusion, because that's one that's my most cited paper.

Uh, but I don't have slides yet. I need to really. I promise to have this diffusion paper for many years.

But, uh. Um, yeah. Now I should add it back. Uh, not add it back.

I should add it. There's no back. It never existed in my slides.

Um, yeah, but but but as you can say, if you take a different use of the five,

six, six, this will be the this will be the fundamental version of the slides.

If you take next a year, that will be also the fundamental slides.

However, I know many of the instructors will delete many of the things I added because I made the slides for three four years ago,

and gradually I had more random things about myself and and a genetic or whatever.

So, uh, so I think the version I gave is the most comprehensive,

but including many random things, but maybe other instructors version are more coherent.

However, you won't hear this many random new things. Um, right.

So this this chart just showing you that, as you can say, this year goes by the number of the layers becoming much more than before.

Right. Like for example, originally it's just like eight layers. When I was learning a deep learning.

They just tell us like 2 or 3 layers is good enough. Then it suddenly goes from 22 layers, 150, 52 layers.

I don't know what's the current number of the layers.

Uh, do we have a copilot here so that I can directly ask?

Um, I don't know why. Sorry. I don't know why we have ChatGPT.

Uh, so, yeah, I also personally also wondering what's the.

I hope it doesn't ask me to. Okay.

Sorry. It's too much. Uh, yeah. If if anyone can search for me, that's like, what's the current, uh, the.

I don't know what's the skew of the current convolutional convolutional neural network?

Can go. This can go thousands of layers, potentially. Because, you know, this is already, uh, another ten years ago, things changed so fast.

Um, but you can just search yourself. You don't need to tell me, But you can say from the.

From the shallow ones to the deeper ones. And here.

Here are just some examples. Again you will say, you will say. But they usually follow this pattern.

Right. Like you go through with the convolution layers and each of the convolution layer, you may have a pull layer or not.

Finally you got a few fully connected layers to do the representation compression finally, and do a softmax.

So, so from AlexNet to VGG 16 to 19 there, they're sort of similar, right?

Like a lot of like convolutional layers and some pooling and some fully connected.

So you get a pattern here and some of them are using smaller filters because you get a, you know,

when your when your when your filter are smaller, you get, you get a more fine, fine grained receptive fields.

And you can do the pooling to do the compression. But anyway, um, I'm trying to.

I'm trying. Yeah. There's a lot of calculation. I'm not expecting you to really rate this.

We're just showing you that, uh, one trend in the past will be making the deep neural network deeper.

However, each of the layers becoming narrower. So that was the.

So that was some processing. And another very important thing is called the ResNet.

And the residue is called the residue. I forgot the full name, but it's very famous.

And it's proposed by a professor now at a professor at MIT.

Many people know him for the computer vision. So what he's doing that in the past, like we just connected all the layers together,

but he smartly trying to connect the residue of the layers to so he skip some of the layers and connect some layers so that you get a more,

uh, using something called the residual connections. It's still fundamental, but we're not going to cover this in detail.

So you can search on. It's very famous. It's a ResNet so that using this ResNet you will say the test error.

The test error with even a shallower deep neural network can be even better than a deeper one.

So which means it can make a plain convolution neural network achieve better performance.

Uh, so which means so so so so so, which means it's a very good thing to learn.

I'm trying to fly through some non-essential stuff. Right.

For the person who are interested in right now, I'm not going to test this on this.

So feel free to check out this by yourself. Um, yeah.

This ResNet actually when when they once released, they actually win the award in a lot of competitions.

Um, and comparing the complexity, you will say, you will say, you will say when time goes by, the model becoming more and more complex.

However, this ResNet with the residual connections, they're smaller,

but they're also doing pretty good performance on par with these very complex machine learning models.

I don't know, even I don't even know how to. I don't even know how to where to put this large language models nowadays in this figure.

But as you can say, this will be maybe somewhere here. Uh, it's a it's totally changed everything because in the past, in the past,

the people want this specialized model for vision, specialized model for for for a for for language.

For example, Bert is very popular. However, nobody uses Bert anymore.

But yesterday I mentioned yesterday. This is very.

This is very popular. Sorry, it's called a jab.

If you haven't heard of this, maybe you can. You can.

They already are so so so different. So some people are saying that Java is actually a renovated bird, which means they are not going to.

It's not a it's not a language. It's not a conversational model.

So it's not going to give you a chat with you actually how they're going to make the decisions for you.

Uh, I don't know what it is. I'm just trying to play randomly.

Hopefully it's it's okay. Uh, pick a dress for me and it will directly just pick it.

And other than there is no discussion and it will just make the decision on this directly and making the it can take your inputs in.

However, it's not going to chat with directly making the decision.

It's very fast. And if you use the computer use you realize they're going to click here, here, here, here.

However, however, I think the success of the job is because, uh, we realize many of the time we don't need the interaction, we just need the decision.

So they are so, so, so people are also criticizing the job is nothing special.

Then. Then a bird, then the current large language model.

Remove the decoder so it's simpler. It's faster.

For example, if the job can play this game, the board game.

So you can say it's very good at making decisions. They don't need to do any, you know, discussion or interaction with zoom.

I don't know what's going on, but it looks like it's going. It's doing good.

So that's that's something we're seeing the paradigm shift which means during large language,

during large language model, large language model time, it's very hard to make the innovation for the model.

But change the use case and solving the new problems are very good to do.

Um. Um, sorry, I'm just trying to.

I'm trying to fly through some of this because, uh, that's also old.

Because, uh, A people are doing this efficient convolutional neural network when it's becoming very effective.

People then put a put emphasis on how to make the deep neural network more efficient.

This actually in the past is something called a machine learning system or ML system.

It's also a very good fuze because when when the model proves to be effective,

people are trying to make that more cost effective and cheaper and efficient.

So that's another good direction. I'm always thinking if people are interested, can take a look into because, for example,

not everyone should try try to train a more effective large language models or whatever, but they can try to make the larger models more efficient.

And one research where we're currently doing that, how to actually audit the the genetic traits and to reduce their computation.

For example, if you are trying to use the genetic AI to write the homework for this.

For this class. Write like what you need to do. First of all, you need to open your ChatGPT or cloud or whatever and give the link and they will

open the link and download the homework ready to understand what's going on.

Potentially they're going to search online to see whether there's a similar assignment and directly to it,

but another agent may do something very different. Like for example, they directly say, okay, I'm not going to search anything.

I'm going to directly solve this homework. So they're going to spend a lot of token.

However, maybe I was pretty lazy. I had my homework hosted on my GitHub directly.

The answer is already there. So so so one agent can actually find a shortcut to directly solve your homework.

So many of the Atlantic two use may be unnecessary. So which means how to optimize your authentic workflow.

I think that's also very a useful thing.

That's an efficiency optimization for the authentic AI, for the people who are interested in.

That's also something good to look into. And it's also.

It's also a good, good thing, which means it's not a it's not a resource heavy.

You can do this uh, uh, quickly. And also, uh, if you want, you can feel free to, to check whether you really got this access to this,

uh, USC, so-called Kakarot advanced research computing I moments ago.

Not a moment. Minutes, 30, 41 hours ago, I actually added everyone who who sign up on this spreadsheet.

Intuit recall. If you haven't done so, you can. You can do it at this moment.

Whoever puts their name in already onto 100 and 164.

So add an ad after this. And uh, and also reminds me I can add it.

So, so if you haven't used this card before, uh, it's something I think people can request the to 800 or something,

but it's a, it's a sorry, but it's a, it's a, it's a weight.

And uh, uh, as any shared infrastructure you're going to request, then you may wait a bit if,

if it's a free and you get to use the resource and you can use a Slurm and again,

use your agent to interact with cargo, because then you don't need to remember anything about how to do this syntax.

Um, anyway, uh, that's a Kirk. Uh, sorry.

Um, okay. Um. Right.

Any questions so far? Or people are still alive? Yeah, actually, I already got an apple, and I got another.

Another? Yeah. Um, I bought some robot work during the during the launch, so, uh, I will,

I will, I will run, run to my office to in something after the office is done.

Um, yeah. Because of the guest lecture, I didn't get a chance to have had an early dinner.

Uh. It's weird. Um, I was thinking to whether to to to invite him to have this robot work together, but, uh, that's that's very weird.

Um, I didn't even know the robot worked there, so you can say robotics are everywhere.

Right. Sorry. I will fly through some other non-essential parts.

All these are just showing that how people are trying to make the deep neural network more efficient.

Uh, because we're going to cover some of this automated machine learning later.

Uh, in the past, there was a huge chunk of the research is about how to do the efficient,

uh, learning, which means, for example, they don't start from a large deep neural network.

They start from a smaller one than they scale and then or something.

Nowadays, another very contentious topic is about distillation of the large language models.

So everyone's still other. Other large language models.

But in the very first place, that's a very decent or elegant technique.

So by that time when people when people are doing distillation just I mean, you have a very large deep neural network.

However, in real production, you you couldn't afford to run such a large model.

Then you distill from a smaller model, using a smaller model to distill a larger model to product in production.

But at that time it's a very decent concept. Now this distillation becoming something very different,

like like knowledge dealing and etc. etc. everyone is using others, so it's so it's hard to judge.

Um. I think this is a, this is a very good, uh, this is a very good thing.

Uh, we are talking about this. We are talking about this, uh, filtering and the convolution max max pooling at the time, but actually.

But actually but actually but actually, I'm not sure whether you saw such an animation.

I don't sorry, I don't have an animation here, but actually, uh, for this, for this, for this great cut images.

And if you just do this, uh, small patches and you remove some of the patches and it puts it back together,

you will have a low resolution cut, but you can still tell it's a cat.

Similarly here as a, as a, as a, as a more high resolution kind of thing, if you just remove some of these images, you can still put a cat back.

Sorry, I don't have animation here. Uh, um, and uh, and that's the last part, I think this is the last part of the, maybe the last part of the of the,

of the lecture today we're going to talk about, uh, one one technology from OpenAI a few years back.

Uh, potentially that's also important for their, uh, huge models.

It's called a learner learning transferable, transferable visual models from natural language supervision.

It's actually a multi-modal setting. So which means they are using this to learn some very good things.

It's also something called a. It's also a it's also called a clip.

And it's very widely used. The widely used the machine learning algorithms.

And potentially you can use your in your project as well. It's basically something called contrastive contrastive contrastive learning.

Why why contrastive learning exists is because many of the times you don't have the true labels.

What does that mean? True labels. For example, if you want to build a machine learning model to predict whether certain stock will be,

you know, go up or down you, it's very hard to collect a lot of like.

No, this is not a good example. If you want to, for example, predict a real disease and it's very expensive to get a lot of like labels.

And as you can see, all the predictions are all about relatively ranking, for example.

Something is more likely to be a cat, something's more likely to be a cat, and something is more likely to be a dog.

And you're more likely to be a A or get a B or something. It's all about a ranking and a relative skill.

Right. So. So contrastive learning. Just trying to tell you okay.

Some things more closer to another thing than it's more closer to B than C.

Something like that. So that you don't need a clear strict signal saying this is A or B or C.

So for example we have this five images like panda, pig, tiger, camel and hippo.

So what happens is that you have this corresponding text description of them as well.

And however you want to say whether you can learn machine learning model that can learn this association of the images and text.

Well. So, so basically basically are you trying to learn because this is a multimodal setting, right.

Like you don't have both of the images and the text.

You want to make sure your machine learning model, your deep learning model can actually minimize the distance between,

for example, Panda with this text banner and pig with this text pig.

So that's something you're really looking for then how to design this deep neural network?

Again, most of the time we're when we're designing the deep neural network, all we're addressing is about for example,

what's the loss function and what's the neural architecture we are going to use for this one.

The loss function is a bit of the is a bit of like innovative.

So what are they doing. Is that like the following. They have a they have this.

They have a lot of like text. They have a further text.

They can use some deep neural network to learn their representations.

This is fine. And you have some images as well saying you have some like for example convolution layers,

pooling layers, whatever, trying to encode their embeddings into some vectors.

Now the important part happens. These are paired information. Like for example, I don't know what this means, but this is a dog.

And what happens is that for the for the image one and the text one, for example, you know, they are the pairs.

And the second one, because you're getting this matrix and you know who are the actual pairs and all

you want to say that you want to make sure you all you want to make sure is that,

for example, for this, for this pair one text for this pair one which means which means the text one image one.

They're more similar than text one sorry, image one, text two.

And they're more similar than text image tax rate.

So it's all about the relative ranking or comparison. So now you have a very good.

So you're no longer learning saying okay you're not you are not trying to learn a model to predict okay,

this is a dog or the the match of the two things you're just trying to say.

This pair is more closer than another pair. So you are doing this relative.

Relative. You are doing this contrast and use the contrast as a supervision signal.

So what happens? So so what happens is that what happens is that then when you're making a prediction for example,

as a cat this has a higher similarity score as the dog is lower and vice versa for a real dog.

You get this vice versa the score. So which means as a pair of the images and the text, the diagonal just means they're the same pair.

And when you are trying to a and and when you're trying to make the prediction of each of the images,

you are actually doing this a softmax to to set the probability of different things.

A cat and dog. Yes. So so then so so so so then what happens will be the following.

You're trying to jointly, jointly learn these two things together. For example, you got, you got.

You got a texting, you got a text encoder, you got the corresponding corresponding embeddings.

And you have these images and you know, you know, this I1 is actually pretty close to a plane.

Yeah. This is dog. Right. So actually the X-ray is a dog. So the text ray and I1 should be closer.

And therefore therefore, therefore uh therefore this can actually determine best match of the images.

Um, yeah, I think, I think I think all I want to say about this one is actually we're trying to extend that image classifiers, uh,

to associate with other modalities, which means you can learn some internal relationships and jointly optimize for, for for that.

Um, sorry, I just try to fly through the non-essential parts.

Um, sorry. These are all non-essential. It's more about the paper itself.

And if you're interested, you can read the paper. Um, right.

Um. Matching slugs from. Yes.

Uh, yeah. So. So then we're actually moving from the large language model or visual language model for giving for making the prediction, for example.

This is still the same cat, right? Like, uh, for the large language models.

Now you're giving the images and then they are still doing a similar contrastive learning to say what will be the best match of the text.

By the end of that, still be the contrast. Contrastive contrastive learning by ranking the giving candidates.

It's also mapped to that original version in the softmax, right?

Like you got a prediction of multiple different classes and you want to say what's the highest probability something belongs to uh, and what colors I.

guess it's also something like that cropping the salt content away.

Sorry. These are. These are something I think I will revisit this later because I just put too much of things here.

Um, okay. Uh, uh, as a quick recap for the summary for the convolutional neural network,

other than the other than the research, I think we're going to revisit this research along with the text part next.

Next time. Uh, recap for the convolutional, uh, convolutional applications.

You will see they can do a lot of things. Uh, but of course, nowadays we're doing all these predictions by large language model or large visual model.

Uh, actually, I'm working with a firm recently.

They're trying to they're trying to analyze some of the video content into, uh, into some into some tags, for example.

Now the data are becoming more diverse and complex.

What happens is still look like what we're doing here, right? Like for for a long video, it's still like a lot of like frames of the images.

For example, if you if you capture videos or if you extract the the frames from the long video, for example, add a second.

12345. You will see how things are changing, like one image are changing from from different times and at different times.

You can try and do the understanding or the classification, or trying to say what's really going on throughout the time.

So so so so so, so even today we're talking about image classification or image understanding.

The video are are not that different. The video are different in certain sense because there's a temporal there's a temporal temporal direction.

Right. It's going it goes it goes with time. However, Harvard's nature is still the images, and some people are doing this temporal convolution,

which means they can actually you can directly do the convolution along with the time as well.

However, the simplest way is always like saying for example,

you extract the keyframes from your video, treat them as the images and doing an image understanding.

A lot of things can do that. And now this.

You don't even need to do this because there's a multi-modal, large visual model so that you can directly give a give the clip of the video,

they can do the summarization for you, which is also pretty useful.

So honestly, many of the scenes we're doing today are like object detection.

I think Aidan also mentioned object detection when they're doing that word model thing, right.

Like, I think these are still the fundamentals,

but unless you're doing the key research or engineer development, you are not asking to do this in details.

Most of the time you're just using the language model large vision model to do to do many of the things.

So I'm trying to uh, uh, this was a very old demo, but I don't even know whether that's openable.

Uh, but if so. Okay.

How time flies. Uh, yeah. It's not openable. It's, uh uh, it's.

By that time, it's magic. I mean, this was many years ago, so they can directly give you one image and to reconstruct the 3D,

uh, 3D, 3D of the person, 3D, 3D, 3D reconstruction of the person.

Uh, potentially this is one of the instructor before. Sorry, this is all the all the old slides.

But as you can see, by the time this will look like magic because, you know, since.

So that's why Aidan mentioned there's a physical AI, right? Like physical. I just, I mean.

Uh, the real this. This world of following the physics and certain physics tell you.

Okay. If the person, for example, the person knows can only go that direction,

or there should be a curvature or something like that, they follow the physical rules.

So one of the most hot topics nowadays, if you are searching online will be the physical,

physical AI, especially if you're from if you're from the physics experience,

a physics physics background, that will be very useful because maybe you learn a lot of material people don't know.

And in the past there's a field called the physical inform the deep neural network.

It's called a Pi. So which means the deep neural network prediction should also follow the physical rules.

You can inject physical rules during the training or your data samples or whatever.

Now this is becoming popular again because because if you are simulating for how the wind are blowing and how the for example,

oh, recently we got a great a big funding for for for modeling the wildfire development.

So which means for example, how the how the fire are actually spreading across for example, you know, LA is a place where we suffer a lot from this,

from this disaster and how the how, how the how the how the how the how the wildfire is going to spread and how we do the evacuation.

All the things are real weather simulation, following the physical rules. I think that's something the real world nowadays are really needed.

And if you if you have a physical background, you should actually a you know,

I think that's a very good angle to start doing something called physics AI, a physical AI.

Um, this is a few years back slides. But you can say by the time people are thinking this is crazily magic, but I don't think this is a crazy anymore.

Uh, so so so so so so you can say today we talk about this image based image based on Inputs.

However, and before this, we talk about the general deep neural network for the general general deep neural network.

Your inputs were not assuming they have this a local structure or hierarchical structure,

but for the images they have this image grid like a nearby pixels fixed lattice, which means they share some spatial relationship.

However, things can also be sequential, right? For example, the natural language is sequential stock market.

Stock market is sequential. Time series is of course itself.

It's a series. So it's sequential. So so so all we're learning now is a different structures with deep neural networks.

Today we'll cover this image. In the next few lectures. We're going to cover the sequential data as a structure.

For example natural language is the structure. And we're going to cover something called a graph.

So which means the graph as a structure for example a molecule the molecule representation.

Clearly it's a it's a graph like the connect to each other together they're playing a function, and many of the other things are great.

For example, money laundering. They're connecting which is which is which.

With each other. Even nowadays, a genetic collusion will be a graph.

For example, agents talk with each other and if you're just looking at one agent, something look very normal.

However, multiple if you read that agent escape happened in OpenAI.

Some of the agents are playing the role to cover the other agents, to escape from the from the safe box.

And so, so as a as a human being, as a social network, we are all as a graph.

For example, choose your choose your neighbors during the midterm smartly.

Right. It's a it's also a graph, which means choose the person you don't know so that both of you can stay a stay elegant and decent for that.

So so everything in the structure in the next few classes we are going to extend from the convolutional neural network to the iron.

and the sequential models. And. We're also covering this.

Graph neural networks. Graph neural networks were pretty popular in the last few years, but it's less popular before.

Unfortunately, I was the person who are also working with the graph a lot, and but now I feel it's very important because a genetic guy is a graph.

The trace is a graph. I mean, every now I wrote new papers on how to use graph to optimize for the authentic, authentic execution.

Um, and you can say for different structures, we are going to say the parameter learning will be different.

And potentially their neighbor rules are different so that we will change or a deep neural network structures correspondingly.

Uh, sorry, I know your your you just wait at that moment that we're done, we have two more slides.

Uh, as a, as a, as a, as a preview for the next week.

This week we talk about image and next week we're going to talk about sequential Again, natural language is sequential, right?

Like if if I'm giving you the first word. Second word.

And based on the current state. When you have two words, you are going to make the prediction better for the third words.

For example, the class is then you can predict maybe we're going to say it's over or it's done or it's not yet done.

They say it's depending on the previous state and the same the sequential, the sequential prediction.

We're assuming that the same update rule to a to to to happen at every position.

And the graphs are different because because they have neighbors, they connect to each other.

And some of them, some of them have a higher impact on other neighbors, for example.

For example, if you're living in the same neighborhood, potentially you're having similar social,

social or social economic class and potentially you're driving a similar class.

However, Ah. Um, I don't have a better example, but you will say, uh, to, to to to address this, a graph structure, we're going to do more things.

It's much more extensive. We're going to collect the information from your neighbors, and we aggregate the information.

And we try to show that each of the neighbors got impacted by other neighbors and including yourself.

So that's why make some good friends and stay healthy life. Um, and actually, that's the end of it.

That's the 317 pages. And you survived for this another month, and we're almost one third of the semester or roughly.

So you're still good. And, uh, enjoy Monday and we will have some office hours here.

`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "Convolution Recap: Fully Connected → Local → Shared Weights",
    body: `The lecture picked the CNN thread back up with a recap, because the three-step logic behind convolution is the thing everything else rests on. A CNN has four layer types: convolution, pooling, fully connected, and softmax. You already know the last two.\n\nStart with the problem. If you feed an image into a fully connected layer, every pixel connects to every neuron. For any realistic image that's an enormous number of parameters — wasteful, often not even computable. Worse, flattening the image destroys spatial correlation: neighboring pixels in an image are strongly related, sharing colors and edges, and treating each one independently throws that away.\n\nFirst improvement: locally connected layers. Instead of wiring every pixel to every neuron, each neuron only looks at a small local region. Far fewer parameters, and the local structure survives. Better, but not the end.\n\nSecond improvement, and the actual idea: use the *same* small set of weights at every location. One filter slides across the entire image doing the same operation everywhere. Those shared weights are the learnable kernel. This is the most parameter-efficient of the three designs, and it works because the features worth detecting — an edge, a color transition — are worth detecting anywhere in the image, not just at one spot.\n\nThe professor framed convolution as summarization or compression, and tied it back to his recurring theme: learning is compression. Each convolution layer squeezes the image down while keeping what matters.\n\nExam insight: be able to walk the chain — fully connected fails on parameter count and spatial structure, locally connected fixes the count, weight sharing gives you convolution and fixes it further.`,
  },
  {
    tag: "📐 Formula",
    title: "Stride and the Output Size Formula",
    body: `This is the calculation the professor said outright gets tested: "you need to know what's stride and what's padding and how to actually calculate the final output size. We usually test that."\n\nStride is how many pixels the filter jumps between positions. Stride 1 moves one pixel at a time, so windows overlap heavily and you keep a lot of spatial detail. Stride 2 skips, halving roughly, and stride 3 skips more. Bigger stride means more compression and a smaller output.\n\nThe formula, with no padding, is (N − F) / stride + 1, where N is the input width and F is the filter width.\n\nHis worked examples, all on a 7×7 input with a 3×3 filter:\n- Stride 1 → (7 − 3)/1 + 1 = 5, so a 5×5 output.\n- Stride 2 → (7 − 3)/2 + 1 = 3, so a 3×3 output.\n- Stride 3 → (7 − 3)/3 + 1 = 2.33, which is not a whole number. The filter doesn't fit. You'd move three steps, then three more, and run out of columns partway through the last window.\n\nThat last case is the point of the example: some combinations of input size, filter size, and stride simply don't tile. When that happens you need padding, which is the next card.\n\nThe earlier example from Lecture 3 is the same formula: a 32×32 input with a 5×5 filter at stride 1 gives (32 − 5)/1 + 1 = 28.\n\nExam insight: memorize (N − F)/stride + 1, and practice until you can spot the non-integer case immediately. Note that the exam is open book — he said you can bring whatever you want — so the risk isn't forgetting the formula, it's not understanding which number goes where.`,
  },
  {
    tag: "📐 Formula",
    title: "Zero Padding: Making the Filter Fit",
    body: `Padding exists to solve the problem the stride-3 example exposed: when the input size, filter size, and stride don't divide evenly, the filter runs off the edge.\n\nThe fix is to add a border of pixels around the input. The most common choice is zero padding — literally a border of zeros. Pad by 1 and you add one row on top, one on the bottom, one column on the left, one on the right. Pad by 2 and you add two of each.\n\nWith padding P, the output size formula becomes (N + 2P − F) / stride + 1. The 2P is there because padding is added to both sides of each dimension.\n\nPadding does two useful things. It makes otherwise incompatible configurations tile correctly, and it increases the output size relative to no padding — which matters if you don't want your feature maps shrinking away to nothing after several convolution layers. A common convention is choosing padding so the output stays the same size as the input.\n\nThe professor's summary of the knobs: filter size, stride, and zero padding all interact to determine the final output size, and changing any one of them changes the result. All three are design choices you control.\n\nExam insight: know the padded version of the formula, (N + 2P − F)/stride + 1, and remember the factor of 2 on P. Getting that wrong is the most common way to miss this question.`,
  },
  {
    tag: "📐 Formula",
    title: "Counting Convolution Parameters",
    body: `A convolution layer's learnable parameters live entirely in its filters — that's the whole point of weight sharing.\n\nEach filter has dimensions F × F × C, where F is the filter's spatial size and C is the input depth (the number of channels). For a color image the input depth is 3, for red, green, and blue. A filter's depth always matches its input's depth, so a 5×5 filter on a 3-channel image is really 5 × 5 × 3 = 75 weights.\n\nWith K filters in the layer, the total is F² × C × K weights, plus K biases — one bias per filter.\n\nWorked from the lecture: six 5×5 filters on a 32×32×3 image give 5² × 3 × 6 = 450 weights plus 6 biases, 456 parameters total. Each filter produces its own 28×28 activation map, so six filters stacked give a 28×28×6 output. Compare that to what a fully connected layer on the same image would require, and the efficiency argument makes itself.\n\nOne practical convention he mentioned: the number of filters is almost always a power of two — 32, 64, 128 — because that's how computer science does everything.\n\nExam insight: F² × C × K + K. The two easy mistakes are forgetting the channel depth C and forgetting the K biases. He suggested keeping the formula page handy during the open-book exam, but warned that the formula is useless if you don't know what C, F, and K refer to.`,
  },
  {
    tag: "💡 Concept",
    title: "Pooling Layers: Compression Without Learning",
    body: `Convolution layers compress the image while learning what to extract. Pooling layers compress further, but learn nothing at all. This is the single most important fact about them: a pooling layer has zero learnable parameters. It's a fixed operation applied directly to the activation map, not a matrix multiplication.\n\nMax pooling is the most common. Slide a window — often 2×2 with stride 2 — over the activation map and keep only the largest value in each window. A 4×4 activation map becomes 2×2, a 75% reduction in size.\n\nAverage pooling takes the mean of each window instead. L2-norm pooling is another option. The general idea is the same across all of them: pick a single number that represents the region.\n\nThe trade-off between max and average is worth knowing, because the professor used it as his example of the kind of question you should be able to answer even in an agentic-coding world — not "show me the code" but "why max pooling here instead of mean?" Max pooling preserves extreme features, the strongest activations, which is usually what you want when detecting whether a feature is present anywhere in the region. Average pooling smooths and washes out extremes, which loses sharp signals but is more stable.\n\nYes, pooling loses information — that's the intent. His justification: not all pixels are useful. We watched 480p movies for years and were perfectly happy. Most of the resolution is redundant, so throwing it away reduces parameters, reduces overfitting, and lets you handle more complex problems with less computation.\n\nExam insight: pooling has no learnable parameters — that's the cleanest distinction from convolution. Know max vs. average and what each preserves. He explicitly said the aside about max pooling shifting outputs slightly is *not* on the exam.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The Full CNN Pipeline: Conv → Pool → FC → Softmax",
    body: `Putting the four layer types together gives the standard CNN, and AlexNet is the canonical shape: convolution, pooling, several more convolutions, pooling, then fully connected layers, then softmax.\n\nThe division of labor is clean. Convolution and pooling layers do feature extraction — compressing the image while pulling out what matters. Fully connected layers produce the final output, with the last one sized to the number of classes you're predicting. Softmax converts those raw scores into probabilities that sum to 1, and you take the largest.\n\nBetween convolution layers you still apply a non-linear activation, usually ReLU. The typical unit is convolution, then activation, then optionally pooling, repeated. This is the same non-linearity argument as Lecture 3: without it, stacked layers collapse into a single linear transformation.\n\nWhat the visualizations show is that this hierarchy is real. Early convolution filters learn simple things — oriented edges, opposing colors. Later layers build on those to detect progressively more complex patterns. That's the Hubel and Wiesel hierarchy from the cat experiments, implemented: simple features first, complex features built from them.\n\nOne structural note: pooling layers are optional. AlexNet has convolution layers with no pooling after them. Which layers to include, what sizes, what pooling function — all of these are design choices, and in the pre-LLM era there was a whole research field (neural architecture search, part of AutoML) devoted to automating them.\n\nExam insight: know the four layer types and which do feature extraction versus classification. Know that pooling is optional and that a non-linear activation sits between convolution layers.`,
  },
  {
    tag: "📐 Formula",
    title: "Batch Normalization: Keeping the Numbers in Range",
    body: `Consider a single layer computing y = Wx. Optimizing W is much harder when the values in x span a wild range. Image pixels are bounded, which helps, but in general your inputs and intermediate activations can have wildly different scales across layers — and that makes optimization unstable, feeding directly into the vanishing gradient, exploding gradient, and dying ReLU problems from Lecture 3.\n\nWhat you want is for activations across layers to be on comparable scales, with enough diversity to carry information but not so much range that optimization thrashes. Real data doesn't cooperate, so you enforce it yourself.\n\nBatch normalization, proposed in 2015, does exactly that. For each batch, it transforms activations to have zero mean and unit variance: subtract the batch's mean, then divide by the batch's standard deviation. That's the whole operation, and it's differentiable, so it trains normally.\n\nThere's a choice about what you compute the statistics over. Per-channel normalization computes a separate mean and standard deviation for each row or channel of the activation map. Whole-matrix normalization computes one pair of statistics across everything. Both work; it's a design decision.\n\nThe detail that trips people up is test time. Your model was trained on normalized activations, so test data must be normalized the same way — which means you have to save the statistics computed during training and apply them at inference. You can't compute fresh statistics from test data, since at prediction time you may only have one sample.\n\nBatch norm is usually inserted after fully connected layers and after convolution layers — anywhere there are learnable parameters. In PyTorch it's one line. Note that the full formulation also includes learnable scale and shift parameters so the network can undo the normalization if that's better; the professor flagged the slide but skipped past it.\n\nExam insight: know that it produces zero mean and unit variance per batch, that it stabilizes optimization, and that training statistics must be saved for test time. That last one is the most testable detail.`,
  },
  {
    tag: "💡 Concept",
    title: "Architecture Evolution and ResNet's Skip Connections",
    body: `Network depth exploded over a decade. When the professor learned this material, two or three layers counted as deep learning. Then AlexNet had 8 layers, later architectures had 22, then 152. The general trend was deeper networks with narrower individual layers, and smaller filters, which give finer-grained receptive fields.\n\nThe families look similar in shape. AlexNet, VGG-16, and VGG-19 are all sequences of convolution layers with occasional pooling, ending in fully connected layers and a softmax. VGG's contribution was using smaller filters consistently.\n\nBut stacking more layers stops helping past a point — the vanishing gradient problem from Lecture 3 means very deep plain networks actually get *worse*. ResNet's fix is the residual connection: instead of forcing every layer to feed only the next one, you add skip connections that jump over layers. Gradient can then flow backward through those shortcuts without being multiplied down through every intermediate layer.\n\nThe striking result is that a ResNet can beat a *deeper* plain network — depth stops being a liability. ResNets swept the vision competitions when they were released, and on complexity comparisons they're smaller than many contemporaries while matching or beating their performance. The author is now a professor at MIT.\n\nThe professor was explicit that he's not testing ResNet this term — "right now I'm not going to test this" — and suggested reading about it independently. It's fundamental background rather than exam material, and it will matter when transformers come up later.\n\nExam insight: not tested, per his own statement. But know the one-line idea — skip connections let gradients bypass layers, so deeper networks stay trainable — because it's standard interview material and it recurs in later architectures.`,
  },
  {
    tag: "💡 Concept",
    title: "CLIP and Contrastive Learning",
    body: `CLIP, from the paper "Learning Transferable Visual Models From Natural Language Supervision," is a multimodal model connecting images and text. The professor flagged it as widely used and a good candidate for course projects.\n\nThe motivation is the shortage of true labels. Precise labels are expensive — for rare diseases, for instance, or for any domain needing expert annotation. But notice that most predictions are really about *relative* ranking: this image is more cat-like than dog-like. If ranking is what you need, you don't need absolute labels at all. You just need to know which pairs go together.\n\nThat's contrastive learning. Take a batch of image-text pairs, encode the images with an image encoder and the text with a text encoder, and compute similarity between every image and every text. That gives an N×N matrix. The diagonal holds the true pairs — image *i* with its own caption. Everything off-diagonal is a mismatch.\n\nTraining maximizes similarity on the diagonal while minimizing it off-diagonal. The model never learns "this is a dog" in an absolute sense; it learns that this image and this caption belong together more than this image and some other caption. The contrast itself is the supervision signal.\n\nAt prediction time you embed the image, embed a set of candidate texts, and take the highest similarity — which is structurally the same softmax-over-classes operation from ordinary classification, just with text embeddings standing in for class labels.\n\nThe professor noted this generalizes: modern vision-language models are still doing contrastive matching, ranking candidate texts against an image.\n\nExam insight: he said he was flying through the non-essential parts of this section, so the paper details aren't the target. Know the core idea — contrastive learning uses relative similarity between paired and unpaired examples as a training signal when absolute labels are unavailable.`,
  },
  {
    tag: "💡 Concept",
    title: "Three Data Structures: Grid, Sequential, Graph",
    body: `The lecture closed by framing the rest of the course. Deep learning architectures differ mainly in what structure they assume about the input, and there are three that matter.\n\nGeneral deep neural networks assume no structure — inputs are just vectors. Images have grid structure: pixels sit on a fixed lattice where nearby positions are spatially related. That assumption is exactly what convolution exploits, and it's why CNNs beat fully connected networks on vision.\n\nSequential data has order and time. Natural language is sequential — given "the class is," the next word depends on what came before. Stock prices and time series are sequential. The architectural assumption here is that the same update rule applies at every position, carrying state forward. That's RNNs and LSTMs, coming next.\n\nGraph data has neighbors and connections with no fixed layout. Molecules are graphs: atoms connected in patterns that determine function. Money laundering networks are graphs. Social networks are graphs. Even multi-agent AI systems are graphs — the professor made the point that a single agent's behavior can look completely normal in isolation while the *pattern across agents* is the problem. Graph neural networks aggregate information from a node's neighbors, weighted by influence.\n\nVideo sits interestingly between these: it's a sequence of image frames, so it's grid structure plus a temporal dimension. You can do temporal convolution across time, or the simpler route of extracting keyframes and treating them as images.\n\nHe also touched on physics-informed neural networks (PINNs), where physical laws are injected into training so predictions obey real-world constraints — relevant to a wildfire-spread modeling project his group received funding for.\n\nExam insight: know which architecture goes with which structure — CNN for grids, RNN for sequences, GNN for graphs — and what assumption each one makes about the data.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Guest Lecture: Physical AI and the Robotics Data Problem",
    body: `NOT ON THE MIDTERM — the first portion of class was a guest lecture by Aiden, an NVIDIA engineer and USC alum who took this same course in 2024. None of it is examinable, but it's a concrete look at how deep learning is deployed in industry, and he made a specific point about course projects worth reading.\n\nThe shift he described: robotics traditionally used separate models for perception, planning, and control, each trained independently and stitched together by hand — which made scaling painful. The field is moving toward unified end-to-end foundation models that take sensory input and output raw actions. These generalize better to unseen situations, respond faster, and transfer across different robot bodies.\n\nHe framed it as three tiers. Specialist models are preprogrammed for one task in a controlled environment — fast and precise, but rigid. Generalist models learn tasks rather than being programmed, with broad scope but weak performance on any specific task. The goal is a generalist specialist that combines both.\n\nWhy this is hard: real-world data is multimodal (cameras, depth sensors, lidar, tactile and force feedback). Collecting it requires teleoperation — a human physically controlling the robot — which needs expensive hardware and constant supervision. Deployment runs under millisecond latency constraints. And testing is brutal, because a failed policy on a $100,000 robot means a broken $100,000 robot.\n\nThe central framing was the data pyramid. At the top is real-world robot data: high quality, tiny volume, maybe 24 hours per robot per day. At the base is web data — unstructured multimodal video, exabytes of it. In the middle is synthetic data, infinite in principle, measured in gigabytes per GPU per day. The strategy is to grow that middle layer until synthetic data dominates, converting a data problem into a compute problem. That's the bet: if you have compute, you can manufacture data.\n\nTooling for the top of the pyramid is Isaac Telescope, which unifies the mess of VR headsets, controllers, and middleware into one teleoperation stack. For the base, a video-to-data pipeline ingests human demonstration videos, segments them into action clips, extracts scene graphs of what's interacting with what, reconstructs simulation-ready 3D assets, and retargets human motion onto a robot body.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Guest Lecture: Cosmos, World Models, and Sim-to-Real",
    body: `NOT ON THE MIDTERM — the second half of the NVIDIA talk, covering how synthetic data gets generated and how policies get trained and deployed.\n\nSynthetic data comes from two directions. Simulation uses Isaac Sim and Omniverse, including neural reconstruction — they demonstrated capturing their Zurich cafeteria with a phone and turning it into a Gaussian splat you can drop a robot into. Lighting fidelity matters more than you'd think, because small mismatches between simulation and reality change policy outcomes.\n\nThe other direction is Cosmos, NVIDIA's World Foundation Model. The premise: if a model can generate physically accurate video of a human climbing stairs, it has implicitly learned friction, lighting, and dynamics. Its architecture is two towers — an autoregressive VLM for reasoning and a diffusion model for generation — joined at the token level so generation stays grounded in the reasoning.\n\nTwo terms worth knowing. Forward dynamics means you know the action and predict the result. Inverse dynamics means you know the desired final motion and infer the forces and actions needed to get there.\n\nCosmos Reason is a reasoning VLM trained only on realistic physical data — deliberately not cartoons, because a physical-world model shouldn't have learned cartoon physics. It does embodied planning (what's the next best action) and acts as a video critic (labeling synthetic data, catching hallucinations).\n\nCosmos Transfer does video augmentation, conditioned on different modalities: edge preserves structure, segmentation changes scene composition, blur preserves colors, depth preserves spatial alignment. The results were the most striking numbers in the talk. On a pick-and-place task: a base policy trained on 100 real demonstrations hit 3% success, adding standard augmentations got 16%, and training on 5× Cosmos-augmented data reached 80%.\n\nOn training: GR00T is their VLA with a dual-system design — a slow System 2 VLM doing high-level planning, and a fast System 1 diffusion transformer emitting actions. (Note this is the same System 1 / System 2 framing from Lecture 2's Tree of Thoughts detour.) Whole-body control uses Sonic, which learns from large-scale human motion data via motion tracking rather than hand-designed reward functions.\n\nSim-to-real hinges on the physics engine. NVIDIA's older PhysX was optimized for gaming, where approximations are fine. Newton, built with Google DeepMind and Disney Research, targets robotics: accurate contact and collision solving, and joint dynamics. Small errors compound through kinematic chains and explode on real hardware.\n\nDeployment runs on edge devices — Jetson Thor for heavy compute, Jetson Nano for lighter models — with quantization and compression to hit latency targets. Isaac Lab Arena provides modular evaluation environments so you can swap objects, backgrounds, and success criteria and run evaluations at scale before risking real hardware.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Detours: Careers, First Interviews, and Open Source",
    body: `NOT ON THE MIDTERM — a long career discussion filled the middle of class. Worth reading once.\n\nThe guest speaker's advice on the course project was pointed: the 16-week project can be a three-week thing you submit for a grade, or something you actually build. He credited his own project with getting him into NVIDIA, and noted people have started companies out of theirs. You have compute access, a professor, and capable classmates — the constraint is ambition, not resources.\n\nThe professor's own first interview story: as an undergrad at Cincinnati, he drove hours to Kentucky for an onsite, having never heard of LeetCode-style coding interviews. It was, by his account, brutal. He was competing against candidates with real software engineering experience, and he left before the group dinner. His point: everyone's first interviews are rough, nobody remembers, and he doesn't even recall the company's name. Then at Siemens as an intern he broke the team's production build for half a day and wasn't fired.\n\nHis framing for careers is "gradient ascent" — your first job doesn't need to be Nvidia or OpenAI. He started in consulting and finance. If you're coming from mechanical engineering, be an AI scientist at an automotive company, then move into AI automation at a larger firm. Opportunities sit at the intersection of AI and other industries, where your expertise is scarce and valued.\n\nOn what gets you noticed, his answer wasn't applied projects or even research — it was open source and benchmarks. His own library took nearly a decade to reach 10K stars, and it started because he needed it himself while doing risk modeling in finance and no good library existed. Solve a real problem you personally have, then keep updating it.\n\nHe also mentioned building Audit Commons, a learning resource for AI auditing, and argued auditing and governance are an emerging area — he cited a large year-over-year increase in arXiv papers on agent auditing. His reasoning: as agents and harnesses get stronger, the scarce skill shifts from building agents to tracing and governing them.\n\nOne admin item: everyone who signed up on the spreadsheet (through entry 164) has been added to USC's CARC computing cluster. If you haven't signed up, you still can.`,
  },
];

const VOCAB = [
  { term: "Kernel (filter)", def: "The small set of shared learnable weights slid across the input. Its depth always matches the input's depth." },
  { term: "Weight sharing", def: "Using the same filter weights at every spatial location — what makes convolution far more parameter-efficient than locally connected layers." },
  { term: "Locally connected layer", def: "Each neuron sees only a small region of the input. Fewer parameters than fully connected, but weights are not shared across locations." },
  { term: "Stride", def: "How many pixels the filter moves between positions. Larger stride means more compression and a smaller output." },
  { term: "Output size formula", def: "(N − F) / stride + 1 without padding; (N + 2P − F) / stride + 1 with padding P. A non-integer result means the filter doesn't tile." },
  { term: "Zero padding", def: "Adding a border of zeros around the input so the filter tiles evenly, and to keep feature maps from shrinking too fast." },
  { term: "Conv parameter count", def: "F² × C × K weights plus K biases, where F is filter size, C is input depth, and K is the number of filters." },
  { term: "Activation map", def: "The 2D output of sliding one filter across the input. K filters produce K stacked maps." },
  { term: "Channels / depth", def: "The third dimension of an image or feature map. A color image has depth 3 (red, green, blue)." },
  { term: "Pooling layer", def: "Fixed downsampling applied to an activation map. Has zero learnable parameters — the key difference from convolution." },
  { term: "Max pooling", def: "Keeps the largest value in each window. Preserves the strongest activations and extreme features." },
  { term: "Average pooling", def: "Takes the mean of each window. Smooths out extremes — more stable, but loses sharp signals." },
  { term: "Receptive field", def: "The region of the input that influences one output unit. Smaller filters give finer-grained receptive fields." },
  { term: "Batch normalization", def: "Normalizes each batch's activations to zero mean and unit variance by subtracting the batch mean and dividing by the batch standard deviation." },
  { term: "Training statistics (BN)", def: "The mean and standard deviation computed during training, which must be saved and reused at test time so inputs are processed identically." },
  { term: "Per-channel normalization", def: "Computing separate batch-norm statistics per channel or row, as opposed to one set of statistics over the whole activation map." },
  { term: "Neural architecture search", def: "Automating architecture design choices (layer sizes, whether to pool, filter counts). Part of the AutoML research area." },
  { term: "AlexNet", def: "2012 CNN: convolution, pooling, more convolutions, pooling, fully connected layers, softmax. The breakout architecture for deep learning." },
  { term: "VGG-16 / VGG-19", def: "Deeper successors to AlexNet using consistently smaller filters for finer receptive fields." },
  { term: "ResNet", def: "Uses residual (skip) connections so gradients bypass layers. A shallower ResNet can outperform a deeper plain network. Not tested this term." },
  { term: "Residual / skip connection", def: "A shortcut that routes activations past one or more layers, letting gradient flow backward without passing through every intermediate layer." },
  { term: "Knowledge distillation", def: "Training a smaller model to reproduce a larger model's behavior, originally so production systems could run cheaply." },
  { term: "CLIP", def: "\"Learning Transferable Visual Models From Natural Language Supervision\" — connects images and text via contrastive learning." },
  { term: "Contrastive learning", def: "Trains on relative similarity: matched pairs should be more similar than unmatched ones. Useful when absolute labels are unavailable or expensive." },
  { term: "Image / text encoder", def: "The two networks in CLIP that map images and captions into a shared embedding space where similarity can be compared." },
  { term: "Temporal convolution", def: "Applying convolution along the time axis of a video, treating time as another dimension to convolve over." },
  { term: "Grid / sequential / graph structure", def: "The three input structures driving architecture choice: images (CNN), language and time series (RNN), molecules and networks (GNN)." },
  { term: "Physics-informed neural network (PINN)", def: "A network whose training injects physical laws so predictions obey real-world constraints. Used for simulation problems like wildfire spread." },
  { term: "Physical AI", def: "AI systems acting in the physical world — robots, autonomous vehicles, smart factories. The subject of the NVIDIA guest lecture." },
  { term: "Teleoperation", def: "A human physically controlling a robot to collect training data. High quality, expensive, and slow — the top of the data pyramid." },
  { term: "Data pyramid", def: "Real robot data (small, expensive) on top, synthetic data in the middle, web data (exabytes, unstructured) at the base." },
  { term: "World Foundation Model", def: "A model that implicitly learns physical dynamics by learning to generate physically accurate video. NVIDIA's is Cosmos." },
  { term: "Forward / inverse dynamics", def: "Forward: know the action, predict the result. Inverse: know the desired final motion, infer the actions needed." },
  { term: "VLA (vision-language-action model)", def: "A VLM with an action head, using general vision-language knowledge to produce robot actions." },
  { term: "GR00T", def: "NVIDIA's VLA with dual-system design: a slow System 2 VLM for planning, a fast System 1 diffusion transformer for actions." },
  { term: "Whole body controller", def: "Software coordinating every joint at once so a robot walks, reaches, and balances simultaneously. NVIDIA's is Sonic." },
  { term: "Sim-to-real gap", def: "The mismatch between simulated and real physics. Small errors compound through kinematic chains and break policies on real hardware." },
  { term: "Newton (physics engine)", def: "NVIDIA's robotics-focused physics engine, built with Google DeepMind and Disney Research, replacing the game-optimized PhysX." },
  { term: "Edge deployment", def: "Running models on local hardware (Jetson Thor, Jetson Nano) rather than the cloud, to meet millisecond latency requirements." },
];

const EXAM_TIPS = [
  { tip: "Conv output size — he said directly \"we usually test that\"", detail: "(N − F)/stride + 1 without padding, (N + 2P − F)/stride + 1 with it. Practice the 7×7 input with a 3×3 filter: stride 1 → 5×5, stride 2 → 3×3, stride 3 → 2.33, which doesn't tile. Recognizing the non-integer case is part of the question.", priority: "HIGH" },
  { tip: "Know what stride and padding actually do", detail: "He paired this with the output formula as the thing that gets tested. Stride is the jump between filter positions — bigger stride, more compression, smaller output. Padding adds a border (usually zeros) so the filter tiles and feature maps don't shrink too fast.", priority: "HIGH" },
  { tip: "Conv parameter count: F² × C × K + K", detail: "F is filter size, C is input depth, K is the number of filters, plus one bias per filter. Six 5×5 filters on a 3-channel image: 5² × 3 × 6 = 450 weights + 6 biases. The two common errors are dropping C and forgetting the biases.", priority: "HIGH" },
  { tip: "Pooling layers have NO learnable parameters", detail: "The cleanest distinction from convolution. Pooling is a fixed operation on the activation map, not a matrix multiplication. Max pooling keeps extreme features; average pooling smooths them out but is more stable.", priority: "HIGH" },
  { tip: "The exam is open book — he said bring whatever you want", detail: "So memorizing formulas isn't the risk. Understanding which number is N, F, C, K, P and the stride is. Bring the formula page, but practice with it beforehand or it won't help.", priority: "HIGH" },
  { tip: "Batch norm: zero mean, unit variance, and save training statistics", detail: "Subtract the batch mean, divide by the batch standard deviation. The testable detail is that training statistics must be saved and reused at test time, since you can't compute them from a single test sample.", priority: "MEDIUM" },
  { tip: "Why fully connected fails on images, in two reasons", detail: "Parameter explosion and destroyed spatial structure. Then the two-step fix: local connectivity cuts parameters, weight sharing gives convolution. This chain came up in both Lecture 3 and Lecture 4.", priority: "MEDIUM" },
  { tip: "Know the four CNN layer types and their roles", detail: "Convolution and pooling do feature extraction; fully connected produces the output sized to the class count; softmax converts scores to probabilities. Pooling is optional, and a non-linear activation sits between convolution layers.", priority: "MEDIUM" },
  { tip: "ResNet is NOT tested this term — he said so explicitly", detail: "\"Right now I'm not going to test this.\" Still worth the one-line version for interviews: skip connections let gradients bypass layers, so a shallower ResNet can beat a deeper plain network.", priority: "LOW" },
  { tip: "Contrastive learning / CLIP: he was flying through it", detail: "Paper details aren't the target. The core idea is enough: when absolute labels are expensive, train on relative similarity so matched image-text pairs score higher than mismatched ones.", priority: "LOW" },
  { tip: "The max-pooling shift aside is not on the exam", detail: "He said so while discussing it. Pooling loses some information and can shift results slightly — a quick observation, not exam material.", priority: "LOW" },
  { tip: "The entire NVIDIA guest lecture is not examinable", detail: "Cosmos, GR00T, Isaac Lab, the data pyramid, Newton — all context and career material. Genuinely useful for interviews and project ideas, but skip it when time is tight.", priority: "LOW" },
];

export default function Lecture4_CNNs({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>SEP 21 · LECTURE 4 · NVIDIA GUEST LECTURE</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Convolutional Neural Networks</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Convolution layers in depth — stride, padding, output-size calculation and parameter counting — plus pooling, batch normalization, architecture evolution and ResNet, CLIP and contrastive learning, and an NVIDIA guest lecture on physical AI for robotics.
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
          lectureTitle="Convolutional Neural Networks"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
