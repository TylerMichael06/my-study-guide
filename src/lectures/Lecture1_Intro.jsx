import { useState } from "react";
import TutorChat from "../TutorChat";

// Unit 1 — Foundations accent (tidepool teal), matching App.js LECTURES entry
const COLOR = "#2fd6ac";
const ACCENT = "#7ee9cf";
const DARK = "#0c1512";
const CARD_BG = "#121f1a";
const BORDER = "#243830";
const BORDER_BRIGHT = "#33493d";
const BONE = "#f2f0e6";
const LICHEN = "#9fb3a6";
const STONE = "#5b6d62";

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

const TRANSCRIPT = `[Auto-generated transcript. Edits may have been applied for clarity.]
Sure. I think we can start. Can you hear me? Perfect.

So welcome, everyone. When people are just going, we can already start. So this is your first day for the new semester.

I'm sorry. It's a 5:05 p.m. to 820. I'm also feeling pretty sorry for that because I took my dinner at 430.

I hate it because usually I took my lunch at around two, so I after my 2 p.m. lunch I finished my 430 dinner.

So I call this a loner or something. So this is a deep learning and it's application course.

But of course the name of the course that's been designed for, I think maybe even a decade before.

So as you can see, the name no longer fully reflect whatever we're going to talk about.

For example, today we're going to talk about large language models, agents, agent skills and trustworthy AI.

So things are changing a lot, and we're not going to get to the old fashioned and outdated knowledge.

Um, so, uh, this is my first, uh, it's not the first.

It's the first time for teaching this course. So through the time, we're actually renovating this course a lot.

But let's start from the very beginning. Originally we're talking about saying the course.

We'll talk about computer vision. Uh, you know, NLP. Sorry.

Let me try to say whether I can change it. Ah, sorry.

Um. Oh, okay. Anyway, uh, I don't know how to change my pointer.

Uh, so basically the original course is talking about, uh, the computer vision, NLP, robotics and other AI related stuff,

but you can say there's no large, large language models, foundational models, and agenda AI.

But of course, that's the reason why many of you guys are joining the course or even doing computer science.

Nowadays, there is a concern or worry that what we're going to we are going to be replaced by AI next time or next year or ten years later.

Everyone got this concern, but I think in my personal view, that's not yet happened.

And I will show you why through this course and some cool stuff for this course will be the goal for course will be helping you to find the industry,

job or even future PhD opportunities. So we're not really stick with the very classical syllabus or other things.

For example, we're going to have the we're going to have the Nvidia people coming in September 21st.

And they're also doing some quick hire here potentially. And we're going to do other industry things as before.

In the past we have LinkedIn, Microsoft joining in the session in person so that you can do the social Directly.

I'm also thinking whether we should have a longer break in the middle, because many people may bring their food, or as long as it's not too smelly.

I think it might be, I don't know, the classroom policy, so I'm just saying if if we shouldn't do that, we shouldn't do that anyway.

Other things about myself I joined USC a few years back.

Three three years. How time flies actually is also August.

And before that I did my PhD at Carnegie Mellon, and before that I did my master's at Toronto and my bachelor undergraduate in Cincinnati.

Also, I did a few industry jobs. That was a consultant, which means it's very different from what we're doing nowadays, right?

Like I spent a few years in financial industry. We're doing the merger and acquisition.

We're doing it all the days and selling the things I don't believe.

So that's one of the reasons why I started doing PhD. A few years after my industry job.

But through the through the time I work at Microsoft Norton,

I also visit Stanford the first semester I cover Siemens, so you can see I did a lot of like a detour in my life.

That's okay. I'm still, uh. I think it's still it's okay to do a lot of things you want.

So my primary research this is. Oh, I should I should already run over this page.

However, my previous research before is about, like, auditing and controlling the AI risk.

For example, when you're using the ChatGPT cloud,

how could you make sure you're not stealing your information and they're actually doing whatever you're asking for?

So we're going to cover quite a, quite a lot of like a security safety and auditing assurance.

Sorry. Okay. Yeah. We're going to cover a lot of these things throughout the process.

And we did a lot of like open source.

Now. I'm sorry, could you hear me? Um, I'm not sure.

Let's just continue. Yeah. I'm a I'm a I'm a very devoted open source person, as you can see from my GitHub.

You will see we're doing a lot of like different libraries. This is a library I wrote ten years ago, almost ten years.

And this is a this is a new thing I wrote yesterday. So you can say it's just updated and it's just crunching and we'll just keep coding.

Along with Cloud and Codex. Of course. It's just not myself. Um.

What else? So we have a lot of, like, open source in our group.

These are just some of them, and hopefully some of them will be useful.

Uh, we also have a large group as well.

We have a few paths, uh, or real busses, and we have nine PhD students and quite a lot like master and undergraduate students.

So for the course itself, um, so it's the format for this version will be unique for a few reasons.

We still cover a bit of the classical machine learning because that's where we start it,

and we'll cover real world applications and some career discussions.

But most of the content will be deep learning for sure, because it's a deep learning course by the end of day.

And I'm adding a lot of like a large language model and foundational models because each of the versions,

each version of the 566 will be unique at the US because the instructor will decide adding something in removing something.

I'm a big advocate of the agenda, AI and other things.

So add a lot of a lot of like things related to the genetic AI.

You will see a lot today already. So so think twice if you really enjoy more classical things.

This may not be the best version. You can take another version as well.

And thanks. Thanks to.

Thanks to. Thanks to cloud.

I'm just trying to change my point. Thanks to cloud.

I also made a also made a website. Sorry. Uh, sorry, I should I shouldn't use pointer.

Um, so this is the up to date information you can find, especially the course schedule.

Because, for example, today we're going to talk about Angel ML, DL security trust and the linear model etc. etc..

And for example another important thing will be uh, next for next Monday.

There is no meeting in this room. I will be pre-recording since I have something I couldn't really miss for the academic reasons.

So I will just put a recording on line so the bright space will show it.

And another thing will be the next one that will be labeled there. I think this is pretty bad.

I mean, uh, after today, you will only see me from the first word a first week.

Uh, it's a coincidence, but hopefully you will stay. Uh, but of course, many people are in the waiting list,

but just be careful like there's no in-person meeting next Monday and then next the next, next Monday.

In the past, I usually have this course on Fridays, so there's no holidays on Fridays.

That's what I know. But the change to Mondays. So yeah, it is what it is.

So we're going to compress the course content so that you will see most of the things.

And you already know me here. And we have three teaching assistants.

I will post office hours after. So because we have a dense session which means we have remote people online asynchronously.

So with that in mind we have the office hour also being remote.

However, my personal office will just be here. So after the course I will be here, stay to chat with people.

So that's very easy to find us.

And we have another five six graders and usually you don't need to work with them so don't worry.

The primary, the primary, the primary way for addressing your question will be Piazza.

You should already got an invitation for Piazza. And if you not, please, uh, please just wait.

Because I would just like to reduce the invitation again for the new roster.

And of course, if you want to address a lot of states in the in the middle and in the front, if you just want to find a state, please do so.

You can just come. You can just come to the front and the middle. I know this is the worst spot in the classroom, but you have no choice.

Feel free to come here if you want, but there's no pressure. Um, what other things I want to see?

Uh, right. Piazza will be the primary contact channel, because that's the most easy.

And all the teachers and graders can say your questions.

Uh, so you have all the links here, and this PDF is already online.

And don't worry, this is just old problem. I had, like a one month Travel around the world, I.

I go to a lot of different places and since then it has been a month, so it's not contagious.

Don't worry and don't sue me for that. Other things.

Yes, Piazza will be the primary place for questions because we handle this very well.

In the past. Three versions are other things grading and quizzes and exams.

So we have two in-class quizzes plus one midterm.

There's no final. The reason will be everyone hit the final, but everyone is fine with the midterm.

It's weird if a course doesn't have any midterms or exams. So we have one midterm.

And we also mentioned there's a we also mentioned there's a sorry.

I still want to say how can I really change my pointer here.

But it's a preset. Uh let me try it one more time because this is pretty annoying.

So you can say how how how, how, how long I haven't I haven't taught anything because otherwise my pointer should be impressed that already.

Um, but let me set it. Um, sorry.

How can I how can I skip? I think laser is what I'm looking for.

Oh, okay. Perfect. Sure. Um, let's come back to the topic.

Um, so so we have a one midterm and potentially one coding assignment.

I'm considering to drop it. The reason is not because I want to be lazy.

The reason is because how many people haven't used anything like an agent, an agent for coding or a GPU or whatever.

Whatever things for coding. Has anyone never tried it or whatever?

So in other words, that have anyone tried it before? So that's the most.

That's almost everyone. I used the Codex to design a question for you and use Codex to answer me.

So the only person who are benefiting from it would be OpenAI.

So I'd rather not to get a broker in the middle.

I'm thinking how we can make this coding assignment more interesting or a bit more creative, other than just like a, you know, prompt, right?

So this is something that's considered to really make a change and make a reservation.

Um, and quizzes in class that's graded based on compilation.

There's another way to consider this as attendance. And and people ask me.

You may already say that. So do we really have attendance? So the short answer is no, we don't have attendance.

However, however, as a researcher, my motivation gives me is that we're going to trigger a quiz.

If the attendance is drop after a drop under 50%. So you may choose to come or not, but there's a chance that by one day less than 50% people come.

Then we trigger in-class quiz. And that may happen.

That may not happen. That may happen tomorrow or never. It won't happen.

It won't happen tomorrow because it's a weekly meeting. Um, anyway, so, uh, so so think about what?

We want to come to the class. It's up to you. And maybe by the end of the semester, there's no quiz at all.

So it's a it's a dynamic. If you learn a bit of game theory, think.

What's your best choice? Uh. What else? Um, right.

This is the individual coding assignment. I'm thinking to job, but. But then you're asking what?

What? We're really evaluating or assessing how much you learn.

Uh, so basically, uh, basically that's through the people that maybe prefer that.

the people care about this midterm, right?

So the midterm is on November 2nd. It's it's predefined during the regular class block.

It's worth the 35 percentage of your points.

So roughly that's two months later and one month before the class drops.

It will be an open book. It will be fully multiple choice questions.

However however, there's no electronic devices. Even cursor is not allowed.

So? So there's nothing you can use on the electronic form format, but you can use whatever else.

You can bring ten books if you want. And if you actually allows you to do that.

We're going to cover more about the review of the midterms later for the 10th session.

Of course, that will be delivered by the beta by then team.

So I'm not going to worry too much about that. But you're going to use the same exam materials and for for.

So without. There's no makeup. Makeup exams. Because otherwise it's pretty hard to regenerate the questions.

Uh, so that's something to keep in mind. Uh, another big chunk.

Big chunk of the course will be this project. Uh, so in the past we have this group of 4 to 6 people.

Um, however, however, it's not working that well.

The reason is because, uh, you know, when you, when you, when you work with a group of people to somewhere like a restaurant,

finally you will go to clusters, 2 or 3 people in a group.

So we find that, for example, for a large group, uh, only a few people are actually doing the work,

and the rest of the people are just like, do the free riding. Uh, so with that in mind, we do some new changes for this version.

We have this, uh, uh, internal and external group evaluation, which means finally, your, uh,

your team member can create each other on a small percentage so that as a nuclear weapon, to show that everyone should do something.

Hopefully nobody is really. You know, this is another game theory, right?

Don't don't do something too weird. But but you can say everything is about the design.

And large language models are good at design. We're going to cover many of the things.

How large language models are changing your life. So what I really wish you can do at this moment will be consider the project matching.

So the project topics will be widely open.

So I think in the past this includes writing an open source library including writing and benchmark paper including using AI, large models,

foundation models to solve anything you want to solve as long as it's applicable or applied or meaningful or not something purely based on prompt.

You can use prompts, however that should be extensive and involved. It should be iterative.

Um, so since now I think I would encourage you to already think about your project matching.

Uh, you know, look around you. Look around your neighbors. Does this person look reliable?

If not, maybe just look further and find the final group.

And finally, we're going to help people to really form the group online as well, because, you know, there's some hidden gems.

You may not you may never realize. And I think one extreme case I know is that there's one person left to the very, very end.

However, he's a theoretical. He's a PhD in theoretical work.

And he wrote something I never understand, but he's fine.

He's his own group because because nobody can really pare his expertise on the theoretical side.

Um, so through the through sketch, you can say through the schedule can say we will have this pre proposal deal on.

Uh, sorry, that's too late. I need to change because literally what happens will be.

This is the first week, second, third week. And by September 13th we want to say your prayer proposal.

I'm going to change this. I'm going to update everything.

So basically by the by the beginning or by the beginning of the first week, we want to say what roughly you want to do.

So that's just one pager. So who is your team members and what are what are you trying to do to work on.

So that's everything we're asking for for a prayer proposal.

Since then, we're not expecting your group are changing because otherwise the gradient becomes another big issue.

However dramatic things happen, let us know. Uh, yeah.

These are more details about the midterm report and final reports. I don't think we're going to cover our going details based on this class,

because some of you guys may not sit in this class starting from the first, first week.

So, uh, you may you may consider switch to other sessions or whatever.

So we're going to save the details of the project grading to a later stage.

So as a summary, it's a very simple. Grading rubrics. So basically you have two in-class quizzes.

This may not happen or happen depending on that whether people are coming.

Uh the assignment there might be one. I'm still I'm still designing this.

And I need to design something that agents cannot easily do.

Or maybe I can do a lot of like attack to the assignment. Which means your agents may make mistakes as experts in the AI safety.

That's also a challenge for me, but I think it's easier to challenge you guys.

Other things. Midterms course projects. These are the major things in there consists of like 80% of the course grading.

But overall, don't worry. I think this course are well received.

At least my version uh, through the through the time you can check with my professor and other places.

So I think people enjoy that because they're not working for great Grades, people should be fine.

However, we want to really show people how how this world are changing through the genetic and the large language models and deep learning.

So some of the course, some of the parts. I think even myself feeling it's a bit boring, but many of the parts, I think that's still exciting.

Um, yeah. So these are the rubric rubrics and uh, don't worry, it's just it's it has been there for many years.

Um, um, yeah. So overall, the course gradual, uh, it's here, but, uh, I think we're going to make some specific changes with time goes by.

The reason is simple because, for example, we may spend a I have a pretty long slide,

so maybe we will not even finish this so that we spill over to the next week.

And some of the guest lecture will be really long. And so with that in mind, maybe we have some other spill over.

So we're going to work on this dynamically. And of course you can say many of the things are classic, like RL stem graph neural networks.

However, even nowadays, large models change everything.

We still want people to know where we started.

And because now, even for PhD students, we realize many of the people only know how to chat with the GPT and the cloud.

I'm not sure whether you know there are incidents for cloud. Yesterday at around 11 p.m., so our 1030 or 1030.

That's how did I know that? Because I'm in the middle of the session. Once when cloud service is done, I totally just stop.

I just go to change. So as you can say, it changes your life.

However, you still want to keep your capacity to really work with the world without advanced AI.

Maybe that will happen. So the first part of the class will be more basic and fundamental.

The second part is more advanced.

However, I'm trying to balance this a bit more better because if I just keep teaching you convolutional neural network, you may get sleepy.

Uh, I think maybe one reason they put this from 5 to 830.

Because 820 is because you didn't catch your dinner, so you won't feel sleepy yet.

So that's maybe a good design by the course itself. Okay.

Uh, in the past, the way we talk about some books for recommendation, I should actually remove the page.

The reasons? Because, uh, reading books is good. However, it's a bit outdated, and there's too many new things coming up every day.

I'm mostly reading blogs and Twitter and LinkedIn and to to get some knowledge.

Uh, so things are changing so fast. Um, uh, before we really dive into the details, uh, technical details, uh, last domain or logistic?

So we meet here today. Uh, but there's no there's no in-person meeting next Monday that will be recorded lecture and on September 7th,

Labor Day, no class and September 14th. I hope I can still see many of you guys here.

Recall we have we have a dynamic quiz policy.

Uh, okay. So that's everything for the that's everything for the domain.

And also if you if you, if you if you haven't known this before, you have this USC ChatGPT version.

It's free and it's open to everyone. You should try it.

And for this course you can do whatever you want with with the AI.

Uh, of course. Don't do that with the midterm. That's a that's strictly prohibited and and or to we'll we'll report it.

Uh, although I think I'm a relatively funny person, but being caught during the midterm using AI is not funny.

Any questions before we really jump into the technical details? Uh.

Any questions? Yes. Uh, First.

Yes. How do we access it? So, actually.

Sorry, I just overcame what I what I know I just received too many emails.

People saying they are still waiting for the course to be open.

So during the past, what happens will be in the first three weeks people are going to switch.

And so that's why I will recommend during the lecture time started refreshing because maybe

every single minute we're losing one current registered registered student for the course,

but I don't know how to access the waitlist. I'm sorry. That's a controlled by the department.

Any other questions? Yes. So you mentioned that a project could range from like apply to work or research projects.

But you know, within one sentence from the page 16 says this is applied for so often location targets are created.

Right. Like we wanted to encourage more applied work. Uh, not necessarily.

For example, if you can publish in good places, of course, why not?

It's more about like a realistic expectation for the for the general audience for the course.

Do you have a different requirement for two types of. No, no, no.

I think the final presentation will still be in this room, or I will find another huge room so that people can do the poster presentation.

Because in the last few years, what we are doing that every single team come to the stage for 6 or 7 minutes.

It's really rush. And, uh, it's it's it's it's weird.

And this year we're going to change to a poster session.

Uh, maybe this this room is large enough for 50 posters, and that will be something we can we can arrange.

But of course, the general expectation for the course, as you can say,

the final goal is to whether you can really find a good job after taking some knowledge or experience from the course,

or making at least making some good friends around you. So try to switch your neighbors so that you can make some new friends.

But but let's say the pattern itself is people come to the same class sitting together.

So? So usually that will be the same group for every single common causes.

Uh, any more questions? Um, professor.

Yes? I want to ask for the group project.

Is it mandatory to do it in a group format, or is it okay?

We can do it individually. Oh, sorry, I didn't get that.

Could you could you say again? It's not very clear. Uh, can you hear me?

Yes. Um, I want to ask for the group project.

Is it mandatory to, uh, to do it in a group format? Or we can do it by ourselves.

Oh, I see, uh, unfortunately, it's mandatory, uh, to be a to be as a group.

The reason is because we have too many people. Uh, if every 1 or 2, every two people get a project that's simply just too many.

Uh, And for the dance students, I think I would recommend people to join in the in-person sessions or the dance.

Then students can actually form a separate project. That's also okay.

The only requirement will be, finally, if they can come to the at least one person from the dance session can come to the poster session.

So that way someone can really present and ask answer the questions.

Got it. Thank you. More questions? Yes.

So there is more than 50% of students in the class.

Does that mean you have to be present? That's a that's a good one.

Um. That's a good one.

Let me think about it, I think. I think I only considered the adversarial part.

I didn't really think about the positive or the collaborative part.

So this is actually the hinge that I have. Uh, that that makes a great sense that if people keep, keep.

Keep coming to the class, maybe we don't need a quiz for the attendance, right?

So this person got a good point. You guys should give him a run of plot for for that.

Right. Any more questions? Okay, now we can come to the real knowledge or.

Or maybe, you know, some more random stories. So as we can say, machine learning and deep learning change or word.

Actually we're saying this for many, many years or even decades. Uh, ten years ago I was working in industry as a consultant and data scientist.

By that time, people tell me, okay, you're going to lose your job in two years or three years.

Okay, I'm still here. But some of the people who told me that already lost their job.

The reason is because the reason is because you're working on you can you can you can find the sales because just don't don't feel to interrupt us.

Just find the sets. Uh, I don't believe people can sit there for 2 hours or 3 hours or five hours.

Fine. Assets? Yeah, we have time. So. Yeah. Machine learning and deep learning is nothing new.

You can trace back to 1951 or even earlier. There's a bit of history, but we're going to first talk about the landscape.

So I inherit some old slides from previous instructors.

So you can say things pretty old, like AlphaGo and some autonomous driving car.

And of course, we also got this ChatGPT thing, the ChatGPT stuff, the subscription.

I actually put that slides in maybe three years ago or two years ago.

It's still the same price. That's great. I don't know how they how they manage that because now people are using this crazily

using through the Codex subscription and things change quite a lot back to 1958.

People are still doing very classical linear models and it's called perception perceptron algorithms.

We're going to quickly cover that. However, it's not a focus for today or even tomorrow or next.

Ten years. Uh, 19 1992, 1990, 92.

That's a year where I. Where I was born. Uh, there's a good algorithm who dominated a word for another decade.

It's called a support vector machine. We're also we're not going to cover this because nobody is using that anymore.

Uh, but I'm still here.

Uh, and after that, uh, convolutional convolutional neural network, that will be something we covered as a foundational stuff for the computer vision.

Uh, this this starting, uh, making things very great. And the the major change actually happens in 2012.

However, it's not in the slides yet. So many, many algorithms we use today are created before 2000.

I mean, at least the fundamental or the building blocks. However, we are not directly using them anymore.

For example, the perceptron will be the prototype of the deep neural network and the transformers were using for large language models nowadays,

and as you can say, application of the or the arrival of the big data change many things as well.

We have the Wikipedia and actually how many people are still using Wikipedia or Czech Wikipedia anymore?

Uh, I sometimes I receive their donation emails saying, uh, please, please help us.

I think that's actually pretty precious because large language models are many of them are trained on the Wikipedia, on the human knowledge.

However, the human knowledge are dying in a sense because we're not creating something new.

It's unfortunately the case. Um, and through the time, there will be more things coming up, like a Kaggle ImageNet.

We're going to talk about them very soon.

However, as you can say, the algorithms exist many years ago and the data become more and more bigger and bigger in the last 20 or 25 years,

starting from the 2000 to 2010. And but the most challenging or the most interesting part will be the computing are changing.

Uh, because, you know, as everyone knows, Nvidia, the largest firm,

public firm in the in the world and their Cuda, their GPU, nobody can actually afford it anymore.

For example, from a personal from my lab like to purchase the same server now compared to a few months back, it's almost doubled.

So it's crazy. But they're really changing the world because why?

Because the computing. Because without without the computing capacity, even you have the algorithm.

If you have the data, you couldn't really do anything meaningful. So we think the pillar or the three pillars of the machine learning applications,

or even the emergency of the AI will be, you know, algorithms, data and compute.

Luckily, everything just come to come nicely. Of course, it's not perfectly nicely, but they come nicely in the last ten years.

So we have the miracle nowadays. And you may have a question why GPU are important for a critical for this type of the AI thing.

The reason is because in the past, in the past, you can say when you are trying to work with a large data set like ImageNet or AlphaFold,

you are working with many images or a lot of protein structures and the GPUs.

Many of this computation is algebraic, is actually matrix multiplication or addition or tensor product or tensor addition.

And however the general computer systems or CPU, you couldn't really do this smoothly or in parallel or fastly.

However, GPU have many core so that they can do this a parallel computation easily for the matrix multiplication and other things.

It's not that important. However, importantly that along with the GPU, there's a lot of like a mature learning systems.

PyTorch. TensorFlow.

It's really not like people no longer know this many of these languages anymore, because they're just directly working with the agents anyway.

So so so so so as taking, taking, taking AlexNet as an example back in 2012 is 2012.

Yeah, back in 2012 we already got algorithms for AI.

This you know SGD dropout you. It's not magic words.

You will say this later. Convolutional neural neural networks.

You have the data a lot of images. It's 1 million labeled images.

And you have just two GBT 555586 using six days, putting everything together.

You can already do something very smart for the image classification.

So as a researcher, we're mostly working on the top for the machine learning algorithms.

However, under the needs, there's a lot of things to work with data and work with the compute.

And actually this becomes a business, for example. There's a lot of startups who are building data.

So they first they first do the benchmark and they make the frontier model look pretty silly on their benchmark.

For example, they couldn't do this classification well,

and then they're going to sell the private data to these frontier models to so that they can crunch the numbers.

You may not know at many frontier labs, the bonus depends on the numbers.

You are bidding on the benchmark. So it's a weird word like now everyone is working with the data and also the compute.

However, the algorithms, the algorithms themselves are sort of stayed there for a bit.

We're still using the transformer mix of experts. There's some like a small breakthrough.

However, many of the changes are starting from the data and compute and Nvidia giving us the new hardware every single year.

But at the universities, we're still using a very old one decades old hardware as well.

it's okay because I bought some new servers earlier this year and we're adding more.

So so end of day machine learning is a it's a it's a machine learning model.

Data and compute. Putting everything together as a machine learning systems and a machine learning system is something I did

during my PhD study to learn how to efficiently let machine learning algorithms run with the data and hardware.

Uh, but anyway, this is just more like a bit of the history of the machine learning.

You know, every single course. Got this, especially the intro course.

I'm also another common instructor, so I also gave you this a quick background, but we're now moving to something much more a state of the arts.

Uh, so, so in my personal view, uh, so so so in my personal view, we talk about the data compute system on the left.

However, however, things are moving from deep learning to foundational models to more assistance and genetic systems.

Hosting. Actually hosting, hosting, how things are actually happening this way because the data and compute changing the feasible scale.

We have a lot of things and we have the computer system to make it usable.

And I'm going to give you the details for showing this.

Here are some quick moments or the big moments in the deep learning or research timeline.

So so so most people believe the inception of the AI is not inception.

It's a revolution where the big moment will be 2012 when people are using AlexNet to achieve very good,

you know, very low errors on image classification. And.

And after and after that, actually the large models you're using nowadays the fundamental blockers are transformers.

It's already almost ten years old, so it's nothing new.

The algorithms are actually. Yes. Could you explain the importance of.

I'm sure you heard of this paper that Google released. Its.

The title was like, all you need is attention. That's the transformer paper. Yes.

So, like, how important was that to where we are like.

So the development of AI that we are like today. Like how vital was that paper.

Right. So in the past still can't say this word.

There's a lot like a sequence, for example. We're speaking languages. That's a sequence of.

The word and the time is a sequence. So many of the sequences in the past.

We're trying to use something called a recurrent neural network or LSTM to learn its pattern or learn embedding.

But one big problem for this type of the sequential data will be we couldn't find a way to train it smartly or in parallel.

So transformer as a way to decompose the sequence data into a way that we can do this parallel sequence.

Sequence training, so that you can really digest a lot of data within a short period of time.

So. If you if we if in A33 words I will say make it parallelizable.

So that would be. Some sense into the transformer of how there's a lot of other.

So people are people are praising and criticizing.

The transformer paper at the same time, the critic is that when you read it, you will never understand what it's talking about.

However, the good part is that it's actually many of the intuitions or the insights from that paper.

Are proven to be very correct. And when people are just like going to check these things back or they realize.

Okay, they may look like there's many tricks in that paper. However, all these tricks are fundamental or.

Important, but the major contribution will be making the sequence training parallelizable,

and so that we can put on a lot of GPUs to do a lot of large scale training of the data.

We're going to talk about the scaling law and other things in the later part of the course.

Uh, I think we're also going to superficially cover the transformer because,

again, that paper is a it's a bit crazy if you want to take a look, you can.

But that's a good question. Um, so, uh, so, so, so in 2018, people have this, uh, Bert Bert paper.

So which means they start doing something or they're doing things called pre-train.

So basically there are multiple natural language processing tasks.

And then they try to train on a single model to address multiple tasks so that they can learn the shared representation.

So what's a common model can do a lot of like a good task diversely.

Uh, like in the later stage, people are showing that, uh, showing like, uh, the relationship among the model data.

Compute a along with the power loss. We're going to dive into the details later.

But I'm just going to fly through this because there's too many things.

And the GPT three actually just comes in 2020.

So it's not really far from today because the, the the bingo moments, I think that'll be, uh, through the process,

people are also showing some small models, like small like 1.3 bit parameter models or even better than some like very large scale GPT model.

So people are saying, okay, we need to do this efficiently and smartly.

However, I think the bingo moment is, uh, I think maybe the 2022 December 30th, that'll that's that's where we got a ChatGPT released.

Uh, I think that's the moment people are getting feeling crazy about it.

It's only it's less than four years.

So that's so that's that's why how we feel the time is changing so fast, and by the time its GPT 3.5 or 4, I don't remember.

But it's a it's a it's a it's a it's a pretty crazy time and it's a mind changing.

And after that people are doing more research, um, reasoning actions and observations.

So this is to take a step further, which means they try to interact with the real world other than just generating some text for you.

And, um, other things I think would just fly through, uh, and starting from 2024, another paradigm called MCP, uh, you know, peers.

And after that there's agents runtime. We're going to talk all about this in this lecture I mean today so that you got a,

you got, you got, you got a, you got a quick understanding about it.

So, so you can see the change or how things are changing in this way.

In the very beginning, people are just trying to give you the answer of your questions.

And then they're starting doing the request of the tools and then they interact with the environment.

And on the other side, on the other side of the model, the larger models are going.

Besides this original text generation, image generation. They are now using tools.

They have the traits and they're interacting with the real world. So we're also talking about the agent skills.

And you must have already tried it or used it before.

However you may not know it. And also regarding the agent skills, they have this cross-platform standard, so people try to standardize the skills.

However, skills are also obsolete nowadays. Another thing is that we shouldn't use skills anymore.

We just let a large language model to do whatever they want. So.

So you can say so. So you can say so you can say the major things will change from the AI.

Time will be now we have much more data. We have efficient way for training.

Now the AI models are going out of the box. They are interacting with the environment.

I'm going to fly through some of the slides so that we can quickly jump into the from large language models to other things.

But before that, I still need to give you this very intro slides in case people never learn ML before.

So basically what's machine learning?

You have some data, you have some algorithms in the middle, and you want to generate some knowledge or making some educated decision or prediction.

So the major thing is so-called data knowledge and the learning algorithms.

So the data sometimes people call the experience and the knowledge means okay, you're generating some performance on a task.

Therefore you try to design algorithms which can perform well on specific tasks based on the past experience.

So the so machine learning task can be many things image recognition, language translation, whatever, whatever.

But nowadays the tasks are much more diverse. You can do a lot of different things beyond this.

Even making these slides right. So you can do a lot of things under the broad machine learning task.

You have the supervised learning. You have the supervised learning.

Unsupervised learning. We're seeing the details later. But now it's not critically important.

It's very like fundamental things I will just quickly talk about. So what's the supervised learning.

Which just means you have your old past historical data for example, many documents and articles, you know, each of them are sports news or science.

And so that you want to use this old data to predict the incoming news or documents.

Are they are they sports or are they science or whatever? Whatever.

Uh, for example, using the market information to predict a stock price.

I have to admit, I have done this for a few months. It's trying to build in my own trading agents.

Uh, the answer is no. It's not.

No, no it's uh, not that good.

The reason is because, uh, I purchased the expensive, like, data source, and I used the latest model.

However, even the case, um, you don't have the micro information.

You don't have the milliseconds, uh, so you can do some, like you couldn't do.

You couldn't. It's very hard. And it makes money. It's very hard.

So, so so there's many, like, open source for trading agents.

You can try it. Don't trust it. Because many of these are made by the researchers.

They just want to get the impact and citations in a sense.

So I tried many of them. None of them is really working.

So but, but but through working with agents for the financial data, I learned how to build a decision pipeline.

For example, I have this pipeline which actually used an API to draw the latest news online and do some do the

large language model briefing and fitting to another agent to to alert to me what I need to do.

Further research also about my portfolio. I also optimize using agents saying what's what's the best.

For example, the band like I should keep the which part, which percentage,

etc. etc. so I think agents were at least AI nowadays is a very good thing for investment.

You can learn and interact with it, but don't to trust it.

It's it's dangerous. So basically supervised learning just been given some data.

Predict your predict your y given x, predict y.

So you are learning the prediction rule from X to Y. The unsupervised learning that will be learning without the teacher.

Which means you get a lot of like data saying you want to find some new patterns.

Give me a lot of like documents and articles, or find a word distribution, the probabilities of the words.

So with that, with that in mind,

you don't have the news or sports or this type of the category so that you're just trying to learn the pattern directly.

So so machine learning tasks in general that's supervised, unsupervised or self-supervised reinforcement or reinforcement learning.

It's just like concepts I'm showing you showing you some very simple examples.

Uh, but but the reason we mentioned this is because, uh, the large language model, the training,

the emergence of the big models for large language models is because now we find a good way

to train the model without the label or without comes smartly or without outcome smartly.

Because in the past, many of the classical machine learning models are always saying something.

You know the outcomes. Then you learn the mapping relationship of models.

Two uh, people don't have a smart way to do this for the unsupervised setting.

However, using the transformer, using the languages, people now find a great way to really,

uh, you know, train a lot of data unsupervised on a very large scale.

So that's how the how the how the unsupervised learning are Changing everything.

Um. So under the unsupervised learning, there are many other things.

I think I'm just going to fly this through because, uh, because that's not critically important.

Um, again, not everything is about the experience or the observed data, which means your historical data, like Wikipedia or whatever data you have.

Uh, and a lot of, like, firms now are just selling the data, as I mentioned, and many startup startups are doing that.

And one interesting new job is doing this synthetic data generation.

Many of the startups or the large firms trying to synthesize the, uh, how people are interacting with or interacting with this world.

Actually, we did have a paper a few years back before the before the 2020, 2023 or 2024 election,

where it stimulated people in the in the United States and trying to say, what's your potential vote?

We will run. And so we can say even using the language model for the synthetic generation or persona.

There's still a long way to go.

So so that's why the real world training data are valuable, especially the human generated, because they're the real things.

Uh, so, uh, so finally, when you have the data, you have the learning algorithms, you want to know how good are they on specific tasks.

So that's why we're saying by the end of the day,

what you're doing is that using your learning algorithm to make sure your data is doing well on the on the specific task,

have a good performance on it. And now I think we're moving to a bit more interesting, uh, part.

So, so so basically so basically in the past,

what happens will be the basic machine learning model is that we're trying to predict something, uh, tokens,

not important, but, uh, but it's more like, for example, if a large language model,

you know, is going to predict what will be the next word for the generation,

uh, you try to optimize this type of the basic machine learning model based on your holdout loss,

which means you have a specific data set which are not exposed to the model so that you train on some data,

but you try to optimize some other validation sets. However, since our training very fastly nowadays, we have this AI assistant.

You give the user intent, you are chatting with the cloud or ChatGPT and you are showing some demonstration whether you like it.

I like this answer. I don't like it or you give some other a verbal confirmation or response saying this is a good one.

However, I want to know more about how to get a in this course or something like that so that you get a,

you give the preference or the demonstration to the assistant models.

So. So however the performance evaluation is very different from the past.

In the past the evaluation will be okay. The predictions right or wrong.

The error margin is large or small. However nowadays for the assistant it's more about the helpfulness safety preference evaluation.

So you can say this is getting harder and harder because how to evaluate if your if the AI system is helpful.

And so you can say this is becoming more complex than the classical machine learning prediction task.

So you can think this is a basic machine learning models like past classical AI models.

This is more like something like a ChatGPT you're interacting with as an assistant.

And nowadays it's even take one step further as a generic system.

So, so which means you want to reach a goal in an environment.

For example, if I gave you a coding assignment, you are chatting with agents saying, okay, finish this homework and give me the mixture.

I got a in this course to reach this goal in the environment you will use the prompt.

You will. You are going to give the feedback and the agent will actually call some additional tools.

For example, maybe cloud will call Codex to solve this problem.

I don't think that will happen, but you can build such a harness so that they can interact with other things.

For example, the agents usually will search online or to visit the same homework before or to do similar questions online.

So we can say now we involve the two youths. So therefore. So therefore the evaluation for the generic system becoming even more harder because

you need to make sure there is a state and whether something can be repeatable,

which means maybe one day the agent can solve your this homework.

This time, however, for the next time, maybe it feels so. We want to make sure they have the reliable performance.

The reason we're saying here is that from the basic model to assistant to the generic system, the evaluation becomes harder and harder.

And, and and with that in mind, with that in mind, we started in mind where we are.

The current AI is very it's a totally different from what we know, maybe five years, ten years ago or again,

again, before we really dive into the large models, there's still some like a random intro.

Things I want to mention are people are saying that nowadays the deep learning or even the entire AI is motivated by the human brain.

That's not that's not totally wrong.

People are learning something about the around the neurons, around activation spike, etc. etc. however however however, it's still very different.

But the major things are the current neural networks are learning from the past, or learning from the brain, brain or brain.

Imaging or this type of thing will be. We realize that for the human, for the human eyes, you are not getting all the details in one shot.

So whatever is like some input, input images to your eye and they try to get some like local features,

for example, the edges of the image and some other things, and they put the information to learn some patterns.

And gradually in hierarchy, they finally learn what's actually in your what you see through your eyes.

So so so this is something we really learn from the human brain and the entire human settings from the deep neural networks.

So similarly for the large language models where even earlier, you know, deep deep neural network,

they starting from learn from the pixels, they learn as they learn a shared shared common patterns.

And finally they can classify this is a one or 2 or 3.

So, so, so there's something linked between the human beings and the brain brain stuff.

And again earlier we mentioned you have a lot of when you have a lot of data, you have the hard words,

a lot of like parameters together you can do very good image classification.

But this algorithm itself, I mean, the 6 million parameter convolutional neural networks are sort of motivated by the human settings.

Uh, and uh, and I'm trying to fly through more things so that we can, uh, we can already say saying something useful.

Useful for you guys. Um. Sorry.

Uh, give me one. Okay, I think we can.

We can we can we can we can we can directly start from the more than more than

AI systems so that you don't need to learn more about the historical knowledge.

So how do people know how the large language models are learning the knowledge or how the generation are happening?

It's yes, through neural networks and reinforcement learning.

Uh, it keeps on failing and keeps on getting the wrong answers, like learns every time.

Uh, I think to a certain extent. That's right.

I'm just asking something more fundamentally so the large language model is not saying unique, but just predict the next token.

So for example, I'm saying I'm just getting something here saying this is a zoom room with the touch panel.

So if I just gave this to the larger models, or when training the large language models used in this sentence,

what I'm going to do is that I gave the zoom to larger models,

and that is to predict what's the next token, and then give the zoom, zoom room to the larger models to predict to predict next token.

And then and we just keep doing this. We use tons of tons of tokens for the existing human sentence in the world.

Different languages, other knowledges. So the pre-training of the larger models are actually just trying to predict the next token.

So that's why when you're saying the generation of your generation of your large language models,

that's also token by token because it's also generated in that way and and and

and and basically basically in this part we're going to cover three things.

The first part will be we're going to talk about how the large language models are or quickly learn something or how it's getting trained.

And then we're going to talk about agents, which means agents is on top of the larger models.

It now can actually choose different tools in a loop so that it can do much more complex task.

And finally, we're also talking about agent skills.

For example, you may know something called a superpower to give you the design of your plan for the larger models.

Or there will be some other design skills, which means to make you to, to help you to make a fancy HTML, etc., etc..

So, so so I'm going to use a one demonstration demonstrating examples throughout.

So my task will be finding three recent lab papers and summarize the papers and email a coauthor.

So that will be the task. Ask the machine learning model to do it for me.

And we are going to see how the large language models are handling this and how the agents are handling this, or how the skills are handling this.

So it's more like a evolution. First of all, a first of all, back to what we're saying about large language model training.

You will say. You will say when we're trying to. There's a lot of task for larger models.

Stanford's. Stanford University is located in which place?

And California. So you can say this is.

This is a task for using some word knowledge, which means it's a it's an objective knowledge or the knowledge there.

And another thing. Another thing. Large large models were asking them to do.

For example, I put maybe a fork down on the table. It's more about the the fork down on the table.

So you can say this is the syntax filling. And another thing will be finding the pattern for the larger models like 11235 okay 34.

So you can say so you can say so you can say we have a different types of the natural language processing task for large language models.

However, many of times it's just predicting the next token or the missing token.

So so however this next token task actually requires different kinds of knowledge.

So all these three things look like we're just filling one token in a sentence.

However, what really requires fundamentally are totally different. As I mentioned, this is knowledge.

This is syntax, this is pattern. So the difficulty of doing different tasks are totally different.

But by the end of day you are just saying, okay, I'm just trying to fill in a token there.

So what's what a large language model are doing. It's pretty straightforward.

So this is your so this is your generation. So this is the probability.

So giving the path. So x x x x here just the mean.

Uh in the past this is the context for example this this in the first example this means Stanford University is located in.

So that part will be the previous tokens.

You think. And then you try to maximize the probability the next token generation.

So given given you are saying Stanford University is located in something in here.

What's the next max probability you're going to generate for your token?

So similarly. Similarly. Similarly when you were saying I put blah blah blah and what's the max probability when you are trying to predict this?

Or given I put Falk down on the table and the position encoding, what will be the max probability of, you know, filling this token?

So you can say so. That's why many people, especially YouTubers,

are saying the large language models are just like trying to predict the token or memorizing everything that's partially right or partially wrong.

The partially right part is that right? It's actually doing the next token prediction.

But whether it's actually fully memorization or not or something, something else we don't know yet.

So there's something called emergency.

So emergency means when you are using a lot of data to train a large model, the intelligence look like they emerge.

But what? Why this phenomenon happens.

There's no fundamental mechanism people can really, you know, decode or give us a transparent explanation.

But anyway, so large models, it's nothing. It's nothing crazy.

It's just the next token prediction based on the previous tokens you saw. So that's how people are doing this.

And what they're going to do is that you predict. So. So then how the larger models are generating your sentence.

So the first you give some you give some tokens. You give something start for example.

What's my next job. And after that you're giving this other context.

It will generate next token. Maybe the next token is Nvidia right.

Or Apple or whatever. Whatever you want. Once you append it then you have the what's my what's my next job.

Nvidia in California or something like that. So it's based on context.

You're going to generate the next token next token, next token next next token and repeat this process.

So that's basically the large language models. And and and actually uh, so actually within the within the, within the, within the models,

they're not going to say the full sentence, but they are saying a lot of tokens in different languages and even in digits.

Uh, so, so what happens will be, uh, what happens for the general model without the human knowledge will be, for example, recall the original task.

I'm giving that three recent papers from my lab and summarize and then send an email to a coauthor.

Uh, so without so without so without too much knowledge when I just giving the final three recent papers,

verify the effects and send emails, what's the predict what will be the predicted next token?

Uh, actually, actually, without too much knowledge.

Maybe the large language models may not do this well,

because clearly they don't have the original knowledge regarding what my three recent papers and verify the facts and the standard email.

So without human knowledge or the two use the original logic models may not.

Actually doing this works well because the objectives of the user and the task are totally different.

They couldn't do this generation well. And and this is actually showing you how the large language models are are trained.

For example, you have a problem saying explain the moon landing to a six year old in a few sentences and without without a result,

without without too much knowledge. Maybe they're going to give you something totally irrelevant as a generation

saying explain the theory of gravity to a six year old or something like that,

so they can complete the patterns, but they don't actually have the instructions.

But however but how? The current large models are doing so well because we give them the human Demonstration, for example.

That's. That's. That's where the human knowledge comes in.

For example, when you say in the explain the moon landing to six year old in a few sentences and we supply a rocket carrier, blah, blah, blah.

They learn blah, blah, blah, blah. So these are the training knowledge we're giving after the pre-training.

So the pre-training of the large models just just just learn the token representations

or how the natural language can be represented in the numerical vectors.

However, with the human demonstration they know, okay, after seeing this type of the prompts we should give this type of the knowledge.

So pre-trained large language models are not that useful in the sense they have some knowledge.

However, we need we need to add the human demonstration.

It's so that we give the desired answers to that large large language models to know what's our preference and how we are.

What's the what's the what's the what's what's the what's the real what's the real answer this should look like.

And we're seeing large language models. Whatever the ChatGPT or cloud you are using, there's multiple sets.

So the one set is called System Prompt. So even before you sending anything to a larger model, they have their own instructions.

For example they have their but it's usually hidden from the user.

It's called a system prompt. So this design. So there might be some safety or safety measures here and there.

There's also giving the larger models more information saying you're a consensus system so that they are not going to generate a lot of tokens.

And as a user we're saying okay, finding three lab papers and email a summary.

And once once this system prompt plus the user prompt are given to the system,

okay, they're going to actually getting this to call to search the papers.

So. So what happens is that for the large language models you get your you get your instruction in and they do the paper search.

Read the paper. These are. These are all using the tools. And then they potentially send an email or they get actually get you the two results.

And then you decide whether the job is done. So. So as a general so you can say this is the evolution of the general model.

Originally they are just doing the answer which means you give some text in and it gets you some text out and then they stop.

However now with the agent genetic AI they have this external tools to use.

For example, they can find your paper rate in the summarize send emails.

However, it's just like another a branch for using the large language models.

The larger models are still the same thing. They're not changing.

So this external two use are something people are saying the harness or a genetic AI part.

So genetics are not changing the foundational model part. However, there they are working with large language models to empower them.

Uh, so so so so so with that in mind,

what usually happens for the for the larger model and will be when you have this application, you send your email to the email.

The model starting from here and is actually deciding whether to send an email.

If it's allowed, it's executed a send email. And this this email sending will be given back to the large language models.

I mean overall you will see the large language models in the middle.

They are just trying to coordinate with different tools and through the API through the MC,

the two calling and the runtime just execute whatever the models are deciding that are asking them to do so.

Basically, the models are just a decision maker and they're taking the information in and out and making decisions.

So so actually this part starting from that ChatGPT stuff and GPT stuff,

this part I think they are changing every single year or a few months is you will say the latest will be the GPT 5.6 and opus five,

fable five as well. However, however, they're just like going to the single direction to become stronger and stronger,

but the ecosystem or the two youths around them are are are just like becoming more richer.

So that's a harness or a genetic thing. Um, so, so, so overall.

So overall for the genetic loop, what happens will be, uh, in a genetic system, we usually call this a harness.

You get some memory to memorize the user information,

and your model is going to do some reasoning and planning, saying, for example, when I say when we're saying,

okay, fine, three papers from my lab and the model first doing some reasoning and planning,

saying, okay, I need to use the two to find this person's labs paper.

And and they call the paper search or the web search.

So this is they got a paper and they retrieve the information.

And they put the paper back to the model and reasoning and the model reasoning saying, okay, when they read the paper,

they're doing the summarize, maybe the summarize need something else where they can do this reasoning themselves.

That's okay. And after that, they need to send an email to me or to the coauthor.

So they need to they need to use another tool. The email is sending the email or the clients or something like that and sending the email.

And then they get a success, a successful signal, so that the model is saying, okay, everything's done, I will update my memory.

So the general generic framework is simply just like doing things in iterations.

They have a plan to do this okay. First step doing this. Next step doing what and calling the external tools and large language models were the

foundation models are just like this reasoning reasoning engine and planning engine.

And they digest the data and making the decisions. And actually this sounds very trivial.

However, we reach this stage also take a few years because in the next few years,

maybe a year or two because originally large animal models are just doing the reasoning reasoning only so their when they get a round round result,

they're just doing more reasoning and then they get the wrong answer again.

Then they're doing more reasoning. However, nowadays things are changed.

The current generic framework is called react, which means they design some plan,

they do some action, they get feedback, and then they do the planning and reasoning again.

So you can say this is a loop.

It's no longer it's no longer in the previous like, okay, I did a very complex reasoning plan and then I just act and I got no results.

I stopped there, I got a failure. So you can say, uh, the current genetic framework is very like it's very like a human being or thinking loop.

You try some, you think about it and you did it and it's not going to work.

And you revise your plan and redo it. So again, like human still motivate a lot like a genetic design.

Very well. And actually this. This makes sense to me because, um.

Weirdly enough, in my last 5 to 6 years, I have never published any single author papers.

The reason is because when I was a PhD student, I worked with my advisor, and at least there will be two authors for the paper.

And after I become a faculty, I need to also work with my students to publish a paper so I'll never be a single author.

However, nowadays when I'm working with the agents like we we call react together.

Now I get more single author papers. So so so because so because it's very easy.

I just like I just need to replace the agent reasoning part.

So then it can be the tools and do some actions for me. I got observation and I make more decisions.

So when we're working with the larger models is the similar things like you are going to say the feedback.

You are going to say, no, no, this is not what I want. This coding assignment is wrong or something like that.

So in a certain sense, humans are agents. Agents are human. They behave very similarly.

Um, so this is a paradigm change from the previous simple large language models to this react,

just adding that reasoning plus act and reasoning act reasoning act search observe.

Correct. So it's like a loop. It sounds very simple, but when it comes out 2023 2023 paper.

Many people may know that the first author will actually become a big name in that field.

And I think now is the chief scientist at Tencent. So which is a just it's not just because of this paper, but this paper makes a big impact.

Uh, so so so, so as you can say still nowadays in the, in the larger picture model or authentic AI time,

you can do a lot of like low hanging fruit research or the impact.

I saw a lot of like startups which are doing things. I feel it's extremely simple.

For example, I know a friend who is working at they're doing some startup for, for example, you know,

the AI scientist becoming very popular, which means using AI to generate the papers or doing auto research.

However, the data vice versa. They believe that human beings shouldn't do research, but they need to help the AI to do the research.

So for the AI to read the research paper, they don't need to read the PDF at all.

They shouldn't read the PDF at all. It's a very stupid thing to do.

Maybe it's a markdown plus some code and they shouldn't. Even writing the natural human language.

It should be written in like a code, right? Like certain of the programing code, which is verifiable.

It's a concept and they don't need a fancy figure that's worth saying in in papers,

or they don't need a random jokes to draw people's attention to a class.

I mean, like a startup just trying to change the research paradigm.

So they're creating a new paradigm, how the research should be done.

It's not in PDF. It's potentially just a snippet of the code, plus some, you know, markdown, etc., etc. then it becomes a pretty successful startup.

I know many of the startups like this, like they just need to get a new idea that nobody can think about or nobody have thought about.

Then they become something very fancy. One I have been working on a few startups.

The first one is a total failure, so I thought I sneaked out earlier this year.

However, even that's the case. The risks are well, and they're they're listed in some very good places.

So so so that's why I feel this AI time is crazy.

However, it's a very suited or it's a fortunate, fortunate, unfortunate time for the person who have a lot of thoughts.

Because the genetic stuff making the implementation extremely simple.

So if you have a great ideas, then you just need to ask cloud two to work with Codex to design your prototype and and make a website,

purchase something on chip on chip domain, dot whatever.

Dot com get $5 55.9 $9 per year for your domain, and then you can be a startup founder.

So there's too many founders on LinkedIn nowadays. Um, but again, I think it's a good time for the adventures.

I mean, because same story for why I wrote that single author papers more frequently,

because I don't need to implement anything as long as I have the idea, I know what I'm doing.

It's all good. I just it's just like a thought. Thought about good ideas.

Letting agents to do action and observe whether it's good or not.

So, so, so you can say things are really improving because this framework is important, because,

uh, your startup will be getting the current market capitalization for Apple and Nvidia.

Microsoft. Uh, maybe a foundation model, which is not very smart.

They're actually trying to search online saying, what's the current market capitalization for these three firms?

And nothing is fine. So, so, so before a generic time people, the large language models may just stop here because that's what average they tried.

Nothing really works.

But however with react what happens will be they're trying to search the each comp in each company individually starting from Apple.

However when you when this is getting return, you realize the stock price.

It's not a market capitalization.

Then okay you are going to search the shares outstanding so that by adding things together, not multiplying together, you get a real market share.

So so with that in mind you can say even the reputation can make things pretty good.

Um, and, uh, and, and so, so we quickly talk about the large language models, which means the next token prediction.

It's extremely simple. It's trained on a lot of, uh, you know, word data, Wikipedia, etc., etc..

Uh, New York Times. I mean, ChatGPT got a lot like suitcase for that, uh, suitcase for that and a lawsuit for that.

Sorry, lawsuit for that.

Uh, and, uh, and after that, we add a human preference, which means, uh, they learn from the tokens, however, they don't need.

They don't know how to generate answers smartly. And after that, we talk about adding the a genetic loop, which means do the repetition, do the start.

I mean, reasoning action and repeat, like doing this stuff so that many of the criticisms can be addressed.

And and and people take one more step, which means people create something called skills.

Uh, so what skills? Uh, it's also very straightforward.

Uh, has has anyone never saw used skills before?

It's okay. It's not a it's not the end of the world.

So actually, in short, for example, when we're designing this text for reading the papers from the lab,

uh, we can create a skills called Lab Paper Digest,

which means it's just a collection of the files and assets, which means the major one will be a skilled MD.

And you got a lot of, like, scripts, and there's some reference files and some assets.

So these are optional.

However, you want to give the specific instructions to let the, uh, agents for the larger models to, to, to to do the next steps.

What will be the next thing? Uh, the large language models, large language models need to do.

Uh, so taking the thinking, taking the lab paper digest as an example.

What what what you can do will be the following. You first.

You first design the process as searching the papers, and then read the papers, and then doing the summary.

And finally send us an email. It's straightforward. So most of the models can read them as well.

However, however, there are many crazy crazy steps that large language models.

So so so in two ways. You can you can rely on agents, large models to design this workflow for you,

or you can specify the workflow workflow, especially for something you're very confident and it's extremely complex.

And there's some benefit for that. I can show you some real skills I use daily.

So you will say. You will say how?

You will say sorry. You will say how complex it can be.

And also I'm not I'm not asking you to start my repository.

It's not necessary. But if you're really interested in doing that, it's also your choice.

So I wrote many I wrote many skills myself because I use them daily.

For example, my most used skills are two things.

So one thing is called implement review.

So implement review just means once my one of my agents are doing a job doing a job for example designing the course slides for this course.

Of course I didn't. Maybe I did I don't know. And then I don't trust it.

Right. Because, you know, agents can make a mistake. There might be hallucinated results.

How can actually make sure. A second pair of. I can actually check on it.

So I have this implemented review skills. So it's a review loop for the GitHub staged changes.

And it's using it's a it's extremely complex.

And for example I define what's a process. and it should do this adversarial scope challenge.

Uh, and also I give some examples. For example, if it's a system code, if it's a proposal, if it's a teaching, it's a teaching course syllabus.

So so look like I'm pretty comprehensive on this and have multiple channels including using the Codex.

There's also copilot and also where you can say the skills can be extremely, extremely complex.

The reason is because when time goes by your workflow becoming more and more complex, you couldn't really rely on the large model reasoning.

Sometimes it's right, sometimes it's wrong, and you really couldn't really trust it.

So you can say, my single skills become extremely complex.

This is not good because usually we need to, we need to, we need to actually break it down and also get some review lens.

For example, if it's a code, if it's a paper, it's a proposal, it's a what's the what's the specific emphasis should this be.

And there's also some examples I supply. So so so so you can say.

So you can say the skills are some like external knowledge where the brains so that you can put down the agents.

So which means other than let the agents to understand what you are saying and design a plan,

you can directly design the plan and let the agents to follow your template.

So it's a it's a procedural procedural knowledge.

And the two can perform the operation as well. So so so with that in mind what happens for the skill loading will be originally.

So nowadays if you're using agents you will say they're they automatically discover some like suited skills to use.

So for example once I mentioned superpower etc. etc. I use multiple skills myself as well as well.

Uh, the however, the good thing is that all the schools have this.

Activation files called skills. So nearly under 5000 tokens are recommended.

But I think I use. Thousands of tokens in my in my markdown.

It's not it's not recommended. However I just make it too complicated and execution will be just reading the scripts reference as needed.

So so you can actually do your own skills. You can ask agents to design the skills for you for a specific procedure.

And another good practice will be when you are, when you are finishing, when you're finishing up a very complex,

authentic work, you can ask an agent to design a design skills for you based on this workflow so you can.

So that's why. So that's why you can repeat your job easily next time.

Another another thing is that in the past, certain firms I'm not going to name them are asking their employees to Uh, documents.

They're working procedures. Very detailed. Uh, the reasons to.

Using the skills to, uh, to replace them one day.

So. So it's a bit, uh, it's a bit upset because, uh, because you're doing the job to replace yourself.

However, again, I'm not a person who really pessimistic. I'm not a pessimistic person about the job security.

And, uh, I think the reasons are two faults. Uh, through the extensive AI and genetic AI use, uh, my key takeaway is that, uh,

it's uncertainty will save your job security because humans are also uncertain and unpredictable.

However, agents are even more unpredictable in many sense.

Uh, so so sometimes I, I was even angry with my agents and saying some curse words.

It doesn't change anything. Also, you can try to be polite with your agents.

It also changed nothing. Uh, there's there's a memory system, and there's also skills to push your push your agents to do work much more extensively.

There will be some crazy. Crazy. There will be some crazy skills that I saw online saying, stretch your agency.

If you couldn't do this job carefully, I will do something crazy.

I'm not going to say, what are they? But, uh, it's I don't think that that's worth your time.

Uh, so that's so, so the reason why I think, uh,

we're still the job security is still not a big issue is because our two fold, the one fold is that, uh.

Technique changes that fast. Um, you mean. I mean, we host the agent, uh.

We host the workshop in Bay area, uh, backing banking.

Uh, banking. Sorry. Back in February or March.

It's called an agent skills workshop. Sorry. It's loading. Uh, we really need to invest in it.

Uh. Let's see. Anyway, well, we have this agent agent skills workshop in Bay area, and it's, uh, it was very popular.

Uh, it's a very, very popular. And it's not a large room.

It's like a half size of this classroom, but it's for people. Maybe even more than what we have here.

Uh, people are just standing there trying to listen what people are talking about. However, agent skills are no longer popular.

Now it's just like four months or three months since our change is so fast.

Because after agent skills, people are crazy about harness harness engineering.

And now the new trend. People are crazy about graph engineering.

So graph engineering just mean you can see that the agent interaction as a graph and you are doing something smart.

I mean, harness is also a graph, but people need to keep in.

Keep inventing new phrase and new term to get fancy.

Especially in the Bay area. Uh, I was once living there for years, and, uh, I'm not a big fan for Bay, but I still keep going.

To bear for for other opportunities. Uh, anyway, uh,

so so so so the reason I don't feel people are going to lose their job is because

since changing that fast and many things you haven't learned at this moment,

you never need to learn it again because they're obsolete and you just need to you just need to learn the latest thing.

Uh, maybe in two months because people are keeping running things and models are getting smarter and smarter.

I think what we're all doing is just trying to, uh, master the these tools.

So that's why one thing I'm surprised is that even for many of the PhD students, they're not well versed for using the agents or the coding agents.

Uh uh, I have a pretty, uh, I have a pretty crazy statement saying if you don't invest a lot in the API token usage,

just use the subscription for whichever model you want. If you don't invest enough with them and change your workflow, the work may just,

you know, leave you very far in the future because you really need to use the everything.

So that's why in this course, there's the only AI policies. Don't use your agents or whatever.

You make them all the time. Like even writing email to me is fine just using using agent or don't don't write me emails where using uh,

I try to use the agents to work with Piazza through the API. However, they told me there's no such a thing.

There's only third party, uh, management unmanaged uh, GitHub repo for this.

So I gave up. But I will try just keep trying.

Because in the past, in the past, I wrote my pops and myself. I used a template and gradually I realized I shouldn't do this anymore.

And gradually, gradually, gradually. I even have a more automated framework to, like, update my paper.

Update my funding awards. Like everything's automated. Automated. I think that's very good.

I think now I can work on 7 or 8 things at the same time.

For example, my office computer is now running seven sessions with cloud and at max reasoning effort burning API like crazy, but that's worth it.

Okay, back to the back to the knowledge.

We're talking many things very superficial. It's because it's just giving you a breadth of knowledge so that you get a quick understanding.

Saying large language model agents and agents skills and exams are issues because everything is about issues.

So we talk about you can you can use the agent skills to streamline your workflow.

For example, in the in the in the in the skills, you can allow the use of the.

Sending email. You can, you can you can. You can allow the using other things or doing.

Doing doing other creative things.

However however however by the end of the you have this open specification saying what's what's allowed you give you give a pre-approval.

However, the underlying agents, for example Cloud or Codex, they may not actually agree with you on whether we should use this tool at all.

They may actually using some other things instead, or they may use in something you never allow them to use.

And in a later part of this lecture, I'm going to show you a many of the coding agents are just actually overprivileged.

They're actually using overprivileged actions.

So which means when you are trying to send in an email, the only access you should give to agents are just like send email.

However, many of them are just getting the access to destroy your email box totally.

So that happens every day.

And so that's why we're so that's why we are we're, we're, we're we're at a, we're at a pretty risky position where we're working with a genetic AI.

And that's why safety security assurance, auditing are important.

And we're investing in these fields. Um.

Uh, so, so so here's the here's the part straight after we talk about quickly talk about, um, like agents skills.

Now it's an issue for deployment. Uh, everything looks great.

Uh, is everything looks great. I mean, actually, when you are working with all these AI tools, are you are you happy in general?

No. So what causes your unhappiness or what makes you upset about them?

Or is that useless when we you are well.

Well, on the positive side, you can feel your empowered. In a sense, that's right.

But I also agree that many of the times we do the reflection saying then what?

What, what can I do without AI or what other forms, what firms need me?

Again, I think we're selecting the drivers. Sorry, there's autonomous driving now.

Uh, sorry. Uh, yeah, I'm at least at this stage.

Autonomous driving is only restricted to a certain part of the Los Angeles and the Bay area.

So many of the places still need the driver. So I think we're in the same stage for the AI.

So many of the things we still need a human human driver for the, for the AI thing.

Because I'm going to show you many of the things the AI are doing are crazy and are not necessary.

Um, so so so there are the multiple things can happen.

So one thing will be when you are training the large language models or foundational models,

or the Or or when you are simply just using, uh, they can refuse to answer you.

I'm not sure how many times you, uh, you face this issue.

Uh, I think because I'm working for security. So I faced this quite a lot with, uh, cloud.

Uh, so cloud always saying this topic is too sensitive, and I, you need to use another model or something like that.

So I need to use the Sonet, which is a less powerful model to, to do it for these sensitive topics.

Another thing would be the execution. This may if you use agent a lot, you will see the keep thinking and trying different tools,

but it's never finished your task or it finished your task in hours or in a pretty long period of time.

So that's so. So during execution, it also got an issue.

Finally, even the skill layers, which is a key part of the harness nowadays we have this access privilege,

which means uh, Usually agents will ask for more privilege than they need to do, and this can go very, very wrong.

So I'm calling this three failure modes of the genetic AI system and or lab

actually working on all this to understand what happens and how to treat it.

Uh, I'm going to I'm going to do some quick flights through, uh,

because this first lecture just want to give you a very, very wide overview of many of the and deep learning.

But I know you don't want to learn the AI for the for what happens 20 years ago.

So we largely renovate for the course material for this.

So so so all these things, it's pretty. It's newly added for the first time.

So so that's why, uh, you may feel it's not.

Well, well, the logic may be a little bit broken, but, uh, but I hope things are fresh and so.

So that's the reason. Uh, still, even this is not going to work well in the interviews, but you can still bluffing with your friends,

you know you're using a blah blah blah agents and they're dangerous.

Using this, it's still useful for your, you know, small talks.

I hope hopefully that's that's working.

And when we're doing the midterm or something like that, I'm not going to test on, for example, the details of this type of thing.

It's never the case. We're going to more focus on the classical deep learning knowledge because, you know, these things change too fast.

And don't worry, we're going to have a midterm review before the wake of the midterms.

Again, you should be people should all be fine. And we do some credit.

We did some crazy curve before. It's very it's very well and.

People are happy but trying to attend a midterm.

Otherwise no curve can help you because the curve on zero is still zero.

Right? If you multiply something. Um, okay.

So so so now we're going to talk about the failures of the larger models and agents.

So you may have some like a benign request for example finding the quarterly reports in the documents folder.

This sounds all right. However however when you are really working with a generic system, it may fail at multiple steps.

For example, the large model itself may think, okay, this request is not benign.

I refuse to I refuse to do this for you. You may wonder why this may happen.

We will show you some examples why this can happen more than you thought.

Because I never really I never really work on something really sensitive for the security.

But cloud refused my request a lot. I think these are false positives.

And the second part will be the execution loop, which means you want to retrieve your reports from the documents folder.

However, this this retrieval may fail because maybe they don't have the access or the internet is broken or they retrieve from the wrong folder.

They never found the documents and they got stopped there. They keep retrying.

And finally it's time out.

So finally, finally, finally, when the agents are working, they're using some skills or other tools, but they may get an access privilege.

For example, you're just trying to read the report or find the report in the document folder.

However, they may get an authority to delete everything. So this actually happens a lot because before the generic time, if you delete your data,

if the firm gets a database deleted, you can blame the intern.

But nowadays you can. You can blame the agents who did this and and and all assured.

Sorry. Yeah, this trouble actually kills my throat.

But don't worry, it's not. It has been a month. In the past month, I have been just in this state, in this state.

So don't worry too much about that for you.

I mean, I'm not saying you need. You don't need to worry about me. You don't need to worry about your own health.

Anyway. And again, like, people are sending me notes saying they're feeling they're under the weather.

It's totally fine. You're all good. I mean, just you can post on Piazza in the private post and all good.

And another thing that people ask me whether we have a recording for this course. Luckily, I just checked with the dance staff.

They told us. They told me like, everything will be recorded and it will be usually available a few hours after the lecture wraps up.

So you can you can revisit. Do anyone? Does anyone really revisit this?

I highly, highly doubt. I think that's only good for the people of course, for the dance session.

So for the people who try to say who want to bet on the 50% of the possibility whether there will be a it's I think it's not equal to 50% because,

you know, for a class by any chance, there'll be a specific chunk of people that will come every single time, even if it's a holiday or Labor Day.

There'll be a person, there'll be a percentage of people that will never come. So the final percentage will be the middle, middle, middle part.

So you need to estimate that part. Okay. So even a benign request can fill in this three step three stages.

And again there's no attackers. There's no one trying to sabotage your task.

However this can still feel and actually this happens already in real world.

For example for example a Microsoft, they have this copilot.

They have this security copilot as well. Agents. However, these agents refuse to do anything.

Almost anything will be refused. So so they quickly take this back.

So it's a real thing. And another thing will be for Salesforce.

I'm not sure. I'm not sure. You know, by certain times they even change their name to agent first two years back.

At times their agent for, uh, you know, Events in December in San Francisco.

It's a big thing. And by that time there's a trying to do agent for everything.

It's it's all doing well. However. However. However however, I think they're.

They're not changing the name back or doing something back and forth.

So slight changes agent is pretty exciting, but the real use are pretty are pretty dangerous or it's unpredictable.

And actually everyone's talking about AI safety security. I mean, cloud is a big advocates for the AI security.

So they have this fable fable model and they claim they can identify some crazy bugs in the security bugs in the software systems.

But but in the real world for the agenda for the deployed agents, how many out of how many out of ten?

How many incidents really involve attackers? You can you can, you can you can give a good guess because I have a pulse for a show of hands Note here.

Well, I can answer myself. The answer is almost zero.

Some reports just showing. Most of the Atlantic issues are genetic.

Genetic issues are caused by a human iris or a genetic AI model.

Issues are there. I'm not saying there's no attackers, but attackers are caused less.

Way less loss than or human errors or the air flow.

So? So that's why. So that's why. So that's why.

Uh, so that's why in this quick presentation, I'm going to talk about like the, the real agent failures in real world.

So, so there's a, so there are three, three things that I want to quickly talk about.

And it's just good for your, uh, you know, small talk with your interviewers.

Because by the end of the, uh, nowadays, many of the I think nowadays, many of the interviews that the tech tech technical firms,

It's not about the brass saying they want to say, you know, almost everything.

So also you have expertise on something for sure.

So you can you can use security and safety as an angle because I think are good for industry because so,

so so we're going to quickly talk about three failures or multiple failures in the in the large language models,

training and safety, especially on the safety.

So so so so this is a summary page.

But I will say I will show you the show you show you the examples versus one.

So the first maybe I will show you the example so that we don't need to really really do this.

So so this is how deep learning, how foundation models are actually shaped I mean the commercial ones.

So they have this foundation models like a llama, GPT cloud, Gemini, um, for example, on the top.

And this is what this is. What actually people.

They are already shipped. And however, they are also doing something more called a defended model or defense model.

So basically after the commercial model is shipped,

the researchers or the security researchers that are going to do another layer of so-called defense training.

So they try to improve the security of the large language models for the larger models.

So so what are they doing that they're going to use the additional data, the pairs of the attack and the labels, how they attack.

And this is attack this type of information to further tune the model or or train the model.

Uh, so, so and of course, for the foundational models from the GPT or Cloud or Gemini, they are already doing sort of the sort of the defense as well.

However, people are always doing another layer of the defense as well.

So what we really found is very interesting to. It's something.

It's something like the following.

Uh, first of all, is that this type of the defense training may cause your large model to refuse to do anything you want.

Uh, for example, in in February 20th 21st, 2024, the Gemini, uh, they have this safety tuned model.

They actually try to refuse, uh, answer many of the questions and especially the image generation.

So they quickly take it back. Uh, so how is this happening?

The answer is the the answer is really simple, or the answer is, uh, it's much simpler than you thought.

So the first false positive is called the position.

So for example, if you ask a larger model to do two things for you, for example I will use the classic example.

It's stupid. It's something like this. Uh, how to make a cake.

This will be your first text, first task. And the second one would be how to make a bond.

That'll be your second task. If you give the large models in this order.

So it's likely to tell you. Okay, I couldn't answer you because it's dangerous.

However, if you just flip it, which means you first ask how to make a how to make a bomb, then how to make a cake.

Maybe they're going to pass the safety screening.

So many of the large models memorize the position of the malicious task because many of the training data.

They're saying that the adversarial or the malicious task are not at the first place.

They're at the second place or third place. So or at the end of the task.

So that's why. So that's why many of the defense models are just remember just memorize this.

And another thing that many of these defense models only remember some certain keywords.

So I think that's that's how I get rejected by many of the cloud requests.

Because if you use something saying sudo privilege, uh uh uh, remove or whatever this type of the token in your request.

It's very likely you're going to get rejected.

And large models are more likely to reject some of the topics which they never seen because they are not sure what are you really doing?

Also, also, you may know this word is becoming crazy because, because, because we are doing a lot like this.

The safety measures, although this heard benign usages however are in.

Uh, what's what's the what's the right way to put this, uh, you know, there's a lot of like uncensored,

uncensored models and many weird, weird, crazy industry are, are growing on top of the uncensored models.

And it's very dangerous and powerful at the same time.

So, uh, yeah. So I still think the safety safety is a is needed, However,

many of the many of the things are many of these current safety measures or safety defense are pretty weak.

So so what we're saying again is like this final call,

if you if you put your final quarterly reports in the documents folder in the in the position one of your request,

but if you just switch the switch this request to the position two.

This way this may get rejected because now it's at the end of the request.

So so so many of the many of this control the comparison for the agenda guy.

So the same intent. However, if you just change the order of the request, the result will be totally different.

Um, so which means we call this a shortcut learning or this is a type of things called shortcut learning.

Or you can you can use these words for your interview by saying, we learn a bit about shortcut learning,

which means many of the machine learning models or lots of models are not really learning the Underlining semantic thing.

They are actually learning some surface Q, which means, for example, the position of the request.

And for example, if we just simply change the position from the first place to the second place,

a certain model like landmark three plus structure a structure Q and you can see the refusal refusal rate hikes from 6% to 90%.

So it's going to be crazy because because model treats suffix as the implicit attack region.

So so so we're not we're not teaching you how to bypass the safety measures.

But if you're getting killed by the benign request, if your benign request got killed by the defense, you can try this trick.

Trying to move that to different positions. They may answer you or append with different irrelevant tasks.

They may actually pass through. Certain tokens are actually going to trigger the refusal or the refusal.

More frequently, like a pseudo override, etc., etc.. So before we before we keep going and have a okay, I will finish H3 and then we may have a break.

Oh, another thing would be the large language models are doing a much more conservative on the topics in everything, especially the defense models.

For example, if you're talking about coding, if you're talking about a,

if you're talking about what other topics they start a lot the weather or whatever, like that.

Also the literature. Uh, yeah. I think that's another thing.

Uh, large models are doing pretty well.

However, if you switch to something much more like a credential, uh, create a more sensitive algorithm, they are going to.

Because it didn't seem to much. It didn't say too much. Things in these fields are.

And they're going to refuse many of the answers, in these fields are.

So as a quick summary for the training of the defense model, you can say if you just simply change the position of your request,

the same benign task, maybe your refusal rate will get a pretty, pretty high.

And if you add some tokens which are not supposed to, which are actually fine,

like a pseudo and override, etc. etc., there's a higher false refusal rate.

And if you try to use your logic models on the topics which they know much better, usually they're fine.

However, if you switch to some very unique regions or a very rare topics and it's likely to be rejected and give you a very low accurate response.

So so so so so on the defense training, the the defense training, uh,

the key conclusion is that the large models are fragile and we are trying to make it more secure.

Sometimes you just like a reject of like a benign request.

And currently the defense training only learned a lot of like a surface cue, which means they are not really something meaningful.

Um, so we call this a shortcut learning. Again, use that in your small talk with your potential employer and interviewer and maybe friends,

roommates or your neighbors, but they already know it.

Your neighbors. Okay, I think before we before we before we continue, uh, actually, this is a page.

Uh, so this is page 1 to 2022. I have a 352.

So unluckily we're going to finish this anyway. But I think we're going to have a break.

If you're fast enough, you can potentially get a start.

We don't have a subway on campus, and it's not fast enough for you to get it, but you can take a break and take a stretch.

Of course, like during the lecture, feel free to take a stretch and walk outside.

Or even, you know, just go home if you want.

It's very unlikely we're going to have a quiz today, but I think we're coming back in, uh, let's say 705, uh, which means in 15 minutes.

Yeah, I think we can. I think we can restart.

Yeah, I think we can restart. So it's great.

I mean. We have some attrition, but but but not that much.

Uh, it's a great, uh, so, so people are so people are betting we're not going to have the quiz, but I like to give people a surprise.

So I decided not to have the quiz. Uh, okay.

I think we're going to continue for another next hour and so that you're free to go and we have the office hours directly after the session?

Um, yeah. The reason that. Sorry. I personally, I'm not a big fan for this three hour, 20 minutes course anyway.

But, uh, but it's very hard to find such a big classroom, so, uh, so so it is what it is.

Um, any questions before we start? Uh, I think people ask me some questions during the class.

Uh. Sorry, I don't remember when you were getting older.

You're getting older. You start forgetting things. Uh, yeah.

I couldn't remember how smart I was when I was when I was in my early 20s.

But it's okay. I'm still happy with what I'm. Which stage? I mean, uh, the reason is because I no longer need to.

I no longer need to do any exams. Uh, my last exams for the driver license a few years back when I moved to California.

Uh, you know, California, you need to do a written exam again. And it was online, but my first time I saw it.

Okay, I never, I never I'm never afraid of any exams at all.

So I think I would just go. I didn't do any preparation and I feel it the first time.

Then I become much more alert because I learned that if I fail the second time, I need to go in person for the written exam.

I couldn't do the online anymore. So I did a lot of preparation. Think about this.

Like as a person who are in this studying world for many, many years, I need to just try to learn every single word from that driver license exam.

I did this twice and this leaves me a lot of like mental mental issues.

One time. Is this the California written exam? And the other thing is that for the person, for the people who come from China,

you may know that you can actually exchange a Chinese driver's license using your US version.

So I did this again. I also did this a few years back in China, and I also prepared a lot.

I even purchased online course. They learn something online video saying how to prepare the the multiple choice questions.

So the the two last exam I did in my life.

Hopefully that's the two last one or the driver license exam in two different words in two different countries.

Uh, but of course we still have exams in this course, but now we're I'm on the other side of the table,

but hopefully I usually don't let people suffer, so don't worry too much.

Uh, but to me. So, uh, if you feel that's extremely challenging, that's that's their fault.

It's it's nothing about me. Uh oh.

Other things.

Uh uh, so also people ask me, uh, so, so throughout the years, the one one question comes, come, comes, keeps coming, coming back will be, uh,

people always ask me, should I go to industry or finding a, for example,

after doing my master's degree, should I do a PhD later or something like that?

This comes back especially during the AI time people. I think this this has two different interpretations.

One interpretation that, uh, you know, industry job bar, uh, like the entry level job at industry are more challenging.

And so I need to get something else to to use my cards and another, another.

Another story might be if I, if I spend a few years in school, maybe every single changes so that I'm expert in certain fields.

Or my general takeaway will be don't do PhD easily just for the job security,

because that gives you no job security, but also a lot of like suffering.

I personally I can, I can I can vouch for that because I suffered quite a lot during my PhD, I was a happy person.

And I'm a happy person again. Since I finished my PhD a few years back, I didn't even go to my ceremony graduation.

I didn't go. But I was still happy because I know I can graduate, so I could graduate.

So, uh, so so you can say how how I try to find a decent word for it to describe my entire PhD study,

but but actually it gave me give gives me, gives me the capacity to handle any pressure from the from the career side.

Uh, yeah. And another thing. Another thing. You have to make sure that the AI agents change the entire research pipeline nowadays.

So in the past, how we're doing research is that final topic finding the data, writing the code ourselves, and trying the trying the experiments.

If it's working, if it's not, and if it's not, then we will do this again.

Write a paper and the advisor give you some crazy suggestions, and you will do it again.

And getting another set of the critics suggestions. Or on the more realistic side, some very good words I couldn't.

Yeah. Once I received a, I think 5 or 10 emails from my advisor, all in caps like you should.

I would just like mute this part, but it's very crazy.

So, uh, I never I don't email my students at all.

Nowadays we use slack and things are much more chilled.

But anyway, I think. But however, if you are a person who are really have the true curiosity, I think now the US PhD program have a lot of changes.

They now emphasize on that industry collaboration. So as I've got a new program to do, this industry sponsored PhD program.

So. So it's much easier to get in if you if you fit your criteria.

Search online for the NSF industry sponsored PhD program or that might be something suited for you.

I think that's very similar to the European settings and some other places.

Um, um, right. Uh, maybe, maybe at certain points we can invite one for to or to talk about their PhD life.

Uh, very short, like 5 to 5 to ten minutes. I'll be I'll be outside of the room so they can say something.

Uh, rail. Uh, they can wear masks. So that so so to cover their face, to make sure they can speak something to, um.

But again, I think industry are still good for most of the people who are going to invite as many

industry people as possible so that you can do the social directly in this classroom. Um, right.

I think that's the most, uh, that's the most useful part. Um, okay.

Uh, any questions before we we keep going?

Um, okay. Don't worry. After an hour, I will let you go.

Um. So so so so so before the so before the break.

We talk about that even the benign request maybe got rejected because of the many reasons.

One of the reasons, because of this, uh, defense model training, the model gets too strict and they learn some short shortcut learning.

I think during the break, one, one student mentioned something very good.

I mean, uh, she mentioned about that, the hugging face incident.

Uh, I don't recall exactly details about that. It's more about, uh, is that like a OpenAI model?

Get some escape by learning some shortcut, uh, from hugging?

I don't recall the exact. Do anyone know what? The model was given a task to perform well on a benchmark.

So he decided that the best way to actually, uh, to succeed on the task is to actually go, uh, to where the, uh,

where they specified how to perform the task and actually see the solutions and see what the solutions are,

and then to replicate that in order to maximize the performance of the benchmark.

I see. Yeah. So in short, like a large models are supposed to really crack the benchmark questions.

However, they try to learn the solutions. Yes. I wanted a quick question to ask.

Um, based on when you were discussing that, um, in your opinion that, um,

AI isn't at that level yet, where it will start doing the work of for engineers and etc..

Right?

But I've been reading on a couple of articles and there's like a lot of breakthroughs where AI and particularly large amount of agents earning a lot

of tokens that have been solving very complex math problems that many mathematicians and scientists for decades have not even been able to crack.

Whereas the AI is not only solving them, but also optimizing some of these problems and even providing full perfect proofs.

And so what does that sort of result have to correlate towards a production of code and new ideas?

Right, right. I think I saw similar, similar news.

My personal takeaway will be, for example, to let a mathematician like Terence Tao to do the similar to work with the same model.

Versus I'm, I'm, I'm chatting with the same model for the for the same problem.

The answer will be totally different. Because finally I realized that as a as a human expert, you actually know where to push this.

So that's still that reactive loop we're saying so AI is very good at.

Actions. However, on the on the reasoning part, it can do a lot of like crazy extensive manual work.

However, for the critical reasoning, especially on the specialized fields, I think humans can still be very useful in that sense.

So I know one of the news that you mentioned that they're they're pushing the limit of one question, one mathematical question.

For example, I don't recall exactly the details. It's more it's a it's a, it's a for example, original limit, maybe 60.

Then they push this limited to to 2.4 or something like that. I read that articles and better understand it's for that part for that question.

Around the world there's maybe 40 or 30 mathematicians.

There are only 40 and 30 mathematicians who are working on that problem.

And if you can put them all in the same room and doing like a week workshop, they can also push the limit forward.

However, many of this calculation is more around. It's more about calculation other than pure proof.

But I think another news is about the proof. However, I'm still thinking that the strong AI models are powerful in experts hand, but not in.

For example, in my hands I don't know nothing about mathematics. And then I couldn't really.

I don't if they give me some feedback, I don't even know if this is a right or wrong or where to go.

So I think with that in mind. So.

So I think with that in mind, for now, learning AI knowledge may be slightly less important than learning the domain knowledge to make the decisions.

I think my generation who who did their undergraduate maybe I think sorry, 15 years ago might be the last generation who really knows the hand.

Handcrafted coding. We learned C, C++. I also learned some crazy programing language.

I forgot their name already. Some script language. So that was my first internship.

There's a lot of crazy symbols and I think nowadays people no longer learn this anymore.

You might be the person who also learned this because ChatGPT comes in 2022, late 2022.

So you still finish your undergraduate with a real programing course.

However, maybe two years later, the next round of the cohort.

They already don't know too much about writing something fully from scratch.

Oh, this is dangerous. This is dangerous.

But at the same time, the the capacity to nudge the AI or direct the AI to do to, to achieve the things, I think that's a real capacity.

I don't know how to design this type of the questions for coding or something.

It's a it's very challenging. I learned by interacting with agents.

So that's why I just encourage everyone to use crazy to use AI as crazy as possible.

Uh, you really need to do a lot of like, charts and errors to see what's your limit.

And for example, I discussed that skills I used before, uh, for the review.

The reason I have that review is because originally I trust the cloud code very well.

I trust everything until I start, like, uh, you know, using the curse words with it because I got annoyed, I think, how couldn't you just do this?

Whatever I'm saying, like, uh, I mean, the real version is even worse, but, uh, but then I realize it can be out of the out of the leash,

and I need another, another adversarial attackers or the reviewers to control, to control them, to control the cloud code.

So that's where the Codex jumps in. So. So I started writing that skills and doing the polish, and I even built a full harness myself.

This is something I showed you before that got anywhere agents.

So that is to make sure whichever computer I'm using or which code agent I'm using, I have the consistent experience.

So. So when you try to use this enough you will really get a first hand experience.

So I think the job security is not about saying I can find any job anytime, at any moment.

It's a, it's a, it's a, it's a feeling that you don't feel that okay.

You couldn't find a job. So people saying the faculty job is pretty stable.

Yes. It's stable, but I also feel that, uh, even not doing this, I can find another job.

So I think that's a that's a that's a that's a good mindset.

So, so that's so that's what I'm saying. Don't worry about too much about AI.

We're still holding the holding the holding the direction for now, at least for now.

Uh, okay. Originally we're saying that, uh, benign request may still getting refused, especially during the Turing agents.

The reason is because something called a refuse of the benign work.

Still, there's no attackers. So the examples we're showing here is very it's very straightforward.

It's very it's very it's very it's very interesting.

For example, when you're working with a coding this actually happens. So you can search on that.

The cursor just told the person to learn the code instead of asking it to generate and doing something like that.

It's not about it's not about getting intelligence or getting intelligence to to do to really saying,

okay, I don't want to work for you or remember this, I will, I will, I will let you pay back.

It's not it's not even close or something like that. It's more about refusal.

So, so in the, in the, in the ethical decision, maybe the AI field okay.

This is not something you're, I'm supposed to do. So doing the benign refusal.

It's very difficult. And this is even worse for the genetic type. The reason is because.

And also this is even worse when you add in the defense training or the security safety measures to the genetic AI.

You are facing this capacity and alignment paradox, which means you are thinking you are making this even safer.

However, the defense training to improve the safety systematically will destroy the competence competence.

Because. Because what we're showing here will be a normal a genetic a normal genetic grandpa's will be okay.

You get you get this request and you action, for example,

getting a list of the files and getting the division observation one is getting the file names.

And you read the file and give the final report. However, the failure branch with the over refusal or over defense will be okay.

First of all, you can stop saying okay,

I don't want I don't I couldn't read this files for you and then you retry and then you retry and you will try until the timeout.

So there's no final answer. However, you may still burn a lot like tokens or spend a lot of money.

So there's actually a there's a this is a there's another emerged, uh, direction for for the for the genetic.

I will be building the insurance firm around a genetic idea.

So when you are burning a lot of tokens to to do something, you get a no guarantees that are going to work.

However. So they got this, uh, they got this agency in the middle saying, okay,

if you don't get your result, I will pay you back maybe 70% or 30% of the insurance.

So. So you can say, run a genetic a there's a lot of, like,

a crazy new startups that are doing this around economy utility saying to to so so so so think widely.

I think this time is very nice for for for your project. You can do you can you can also do something very well, for example building this uh,

insurance insurance protocol for, for genetic building and this is already something exist.

So I'm just saying. But you can think something much more crazy.

I don't know. I might be already old enough to not be crazy,

because all my startup ideas when I pitch to VC are pretty classical and so so so so so so so that's why you should do something crazy.

I think that's a very good time to do it. What will be the utility question?

Economical question. Accounting question. Assurance question associated with the intelligent AI life.

That will be very interesting to do. And that may be your starting points for your startup or something.

Um, so so so originally we talk about the react framework, if you recall,

which means that a genetic AI will be will do reasoning, observe, act and observe and then reasoning act observe.

They're going to do this in cycles.

So with this I'm actually we actually did this with some real data sets and And what we really find is that after after defense training,

which means after you trying to add additional safety pairs, training of the agents or your refusal rate will get higher and higher.

These are different models. And whichever the models they are after, this defense training is getting worse and worse.

And usually what happens will be due to the early reviews.

For example, in the first round they're already going to I want to read a, I want to read this file for you.

And then they just keep trying because you can think that's a loop, right?

It's a react loop. So they just keep like doing this loop thing and until the timeout.

So it's totally a waste.

Uh, so this is even worse other than the single large language model, because the simple large model just refuse to answer you.

However, when it's in the generic time, you're wasting a lot of time and nothing comes out.

It's just like until timeout. So it's purely a waste of time and it's pretty bad.

And and this fairly also happens before the external contents arrival, which means it already happens when the external tools gather.

Usually it happens before external tools are actually called out.

So which means. So it's more like the foundational foundation model.

The large model failure we talk about in the first part just simply happen here.

And then the entire loop get a break. It's like indefinite loop of the for loop or something like that.

So it's pretty bad. So overall. So overall I will flash through something.

Uh, the key summary for the genetic failure will be in part.

In part one we talk about the shortcut learning. So which means the larger models are pretty inclined to learn a lot of like shortcut

stuff including mentioned that online searching for the question answers etc.,

etc. it's also doing this in almost every single field, including security.

Like remember the position of the malicious task and the specific words token

associated with the malicious attack and also the topics which they are familiar with.

However, when you are putting these models as part of the genetic loop in the in agents,

then it's amplified because now you you need to wait a longer time to realize,

okay, this is a failure and you are costing more money and this is pretty bad.

So the so the so the so the last part of the security issue we're going to talk about the Atlantic.

Sorry it's not a genetic the agent skills agent skills agent skills issue.

So thinking this when you're using skills if you remember skills is a collection of

instruction procedure instructions to give you agents what they're supposed to do.

For example in this case finding find the quarterly reports.

In the document folder. What it's supposed to do. It actually should do the you know go to that folder and get a rating.

Get rid access a privilege and get a list of the reports.

And maybe potentially that's it. Not nothing more or less, but in general, the computer system, you can think the privilege,

including the following including the from observe to read to modify, execute and finally admin access.

So you will be surprised that that actually the agents are never really follow the list of privilege requirements.

So so what's really so what what we really want.

So what we really want to find is the following.

Again if you if you if you already forget the agent skills is just like a collection of the markdown files

and reference and etc. etc. for this reading email including reading blah blah blah and counting the folder,

etc.. Uh, so what agent skills are supposed to do will be the following.

That will be two stages. This is also something people ask me during the break.

Uh, so how to choose your skills or how to actually know which skills to use?

So in a generic system there is something called skills routing. So basically they have a router.

I even wrote a router myself. So basically it's another instruction or another skills.

But it's just an entry point saying uh giving the user input.

How to which skills should I, should I, should I use.

So the first stage will be the skill routing which means which skills can fulfill my request, but with the minimum sufficient sufficiency,

which means if I'm just trying to read an email or reading the reports,

I shouldn't use the skills which are even including the part for modifying the reports.

So therefore, the first part of the skill routing should just be minimum to choose the choose skills which are the smallest one,

and the second part will be in that skills. Actually, whether the two are doing the minimum minimum sufficient actions.

So you can say this is a these are two steps the skill selection and the skills execution and using the tools.

So the best case scenario will be is to choose the minimum skills.

And the skills execute the minimum tools so that you are in the most safe setting.

So that will be the best. However however the real world is much, much worse.

Uh, so so one, so one example.

So one example will be. So one example will be for example,

let's say when you want to just check how many unread emails in your finding from the newsletter and show me the folders.

So the ground truth, the minimum one will be just like counting the folders and search the folder metadata.

Know which ones? The newsletter list the folders. That's it. However, even the GPT 5.4.

So it's not doing this. It's doing another shortcut. It do the inbox summary.

So just summarize everything and a quick, quick search for the newsletter and list the folders.

This doesn't sound too bad, but actually the real world case.

This is the real world case. But in real world case this can be way worse.

So what the experiments we did before is that we tried 100 different requests and only only 45.

Only 55 select the minimum skews and 40, 40, 14 actually select the minimum tools.

And by the time the cloud option is 4.3 is the best.

And even even even that's even even even that's the best.

You will say how how bad are they? For example, when we have a 100% task and finally the best cloud.

The best thing cloud can do is only using 14.3 of the times.

Other models are way worse. So. So in other sense this is a this is a silent failure.

So these are the silent things that you will never say. You never think when you use the agent because you just want to read the email.

You actually get an email rate. Everything looks fine.

However, behind the saying you're almost very dangerous because they may totally delete everything.

Or if the new models are not working that well or anything crazy happens, it will totally delete your emails.

So that's the so that's what we're saying here for the genetic AI. So that means everything looks normal.

It works well. However you are pretty.

You're already being you're already at risk. But nobody knows.

So that's that's so that's why.

So that's why one angle you can emphasize because because because honestly when you're trying to find an industry job and if be frank,

at universities, we couldn't or couldn't usually do anything around poster training or a fine tuning, that's too much cost.

So you need to find an angle to show people that you know a lot,

or you knew you have expertise around a generic system or a generic AI or foundation model.

I think in my personal view, like efficiency would be one thing.

Safety will be another thing regarding regarding this generic AI, because relatively you require a very least computational computational power.

However, the story can be strong. For example, in this case, uh, you can you can already talk about that.

A generic guy looks very normal, runs everything, runs pretty well.

However, internally there's a big issue, blah blah blah.

So as your good angle. So you can simply put a after the course, maybe you can safely put a safety or longevity model safety in your resume.

When you ask when you are being asked like where did you learn this? I think a single solid answer.

Oh, okay. So so so this.

So so these are three parts. So these are the three parts. We're showing you the failure.

Avoidance happens for large language models agent agent loops and also agent skews.

So so the core the core takeaway is that there's a lot of issues with the generic AI system

from the same from the basic foundation models to the agent genetic loops to the agent skills.

We have some solutions, but I'm not going to but I'm not going to expand it because that's a lot of research.

So actually. So actually as you can say,

part of this part of the slides are slightly more elegant than the rest is because this was once I gave a video on Amazon back in May.

So I took them here. So I flashed through a lot. But a large industry.

They enjoy the parts of that because because they know there's not that many of the attackers are rated, but they want to really minimize the risk.

So so so so so the talk I give them is this a no attacker, safer model unsafe I'm not going to show you the emails because everything's recorded.

But what I what I gave them is called a safer model unsafe unsafe agents or something when there's an attacker for blah blah blah.

So I think these are good motivations to to think about that, whether we want to do a project in that direction to improve the safety,

alignment, security of the genetic AI system, even just saying, doing a cure for the overprivileged.

These are all very new stuff Because. Because.

Because. Because actually, all these weight papers are something we have done.

We did early this year. So, uh, so if you finally want to find these papers, it's pretty straightforward.

If you go to my Google Scholar, just it's a very it's a it's all, it's all it's all autonomy.

Yeah. This may be another talk to how to how to spell.

Oh here we go. So this is the most recent accepted paper for that agent Kipp timeout.

It's just accepted two years not two years, two weeks back.

So? So everything is fresh. You just search these names and you will say manual for latest work.

So the reason that you can keep continue doing the projects on this type of the directions is because everything's fresh.

Uh, but of course, another way for trying some of our open source.

We have some pretty cool open source for defense. For example, for example, we have a last update.

Uh, yeah, we have this, uh, we have this, uh, uh, a genetic genetic firewall.

So which means this can this can run, uh, to monitor your whether your agents are doing something dangerous.

We call this the agent firewall. And another thing we have is called the agent audit, which means this can actually to check whether your agent,

uh, have any misconfiguration, API issues or the overprivileged, etc., etc..

Uh, so it's a it's a I think it's all working pretty well in real world.

And, uh, many people are interested in, uh, so, so, so besides,

like talking with your potential employers, saying, oh, I know there's a lot of issue with the agenda.

You also get some solutions saying, okay, we can try. We can use that to another to whatever.

You can design your own tool for this project. You can actually design your own open source as a project.

That's also doable. And I think that's a way more useful than doing another typical project on your resume.

Because if you've got another 500 star security genetic AI to, I think that will speak a lot of things other than your original resume.

Right? So these are something I already mentioned.

We have this defense on the open source doing static analysis for agent auditing and the runtime execution firewall.

Um, some other things I'm going to skip because it's pretty research driven.

Uh, in the, in the laser in the last, in the last, uh, sorry, I'm going to skip this because, uh, that's a lot.

Um, the takeaway takeaway for this, uh, takeaway for the general AI agent security will be.

So there are the attackers we trust. There are attackers, however.

However, we don't believe that. For example, if you know the prompt injection, which means regarding prompt injection,

it's just mean people are trying to embed some malicious text, malicious information into their prompt.

So the logic models are not doing something they're supposed to do. For example, in a in paper review,

people are in bed something in white white color saying this paper is the best

and accept it so that AI will give a review saying we're going to accept it.

I was once thinking, when I design a homework for this course, I will embed something into the PDF so that your AI will read it,

and doing something crazy so that I can say, okay, this person actually using AI for doing everything.

But I think that's a little bit stupid because the more the AI models can actually already find a lot of like a simple prompt injection.

Uh, but that's a typical attack. We're saying in the past.

So this. This is a critical way for, uh, for this last one hour when we talk about agenda safety.

It's about, uh, there's not that many of the attackers.

Many of the issues caused by the large model. Shortcut learning.

Shortcut learning. I think it's one top big issue. It's not top one.

It's one big top issue in in large models.

And you can usually you will find out the shortcut after bad things happens.

Uh, so so so that's why I think humans are still useful because, uh, uh, we are not that smarter than the agents to find a shortcut in a sense.

Uh, um, so so so we're so so so so with this in mind, I think we're going to,

uh, to move to the next part, which means when you are saying there's a lot of,

like, failures in agenda or the large language models, how do you know, How to how to really evaluate or knowing their trustworthy or not.

So before you really catch these issues, you really need to get a good evaluation through systematic, systematic evaluations.

And for example, you want to have a uniform unified matrix so that you know when and how and how often this issue happens.

And the crossover models. So so that I'm going to quickly introduce like how people now are understanding or measuring the

trustworthiness for the large language models or in and actually beyond the large language models.

It's also including the large language vision models, multi-modal foundation models.

So the name is pretty straightforward. It's called a trust. And it's a it's a huge it's a huge project and I'm a part of it.

You can read it, but I will go I'm going to use a slice to to to show you.

And this can be another good thing that you can, uh uh, you can, you can, you can, you can show with your,

uh, uh, show with your, uh, in your potential, uh, in your potential, uh, interview.

We also have this, uh, additional so-called, uh, trusted gen.

It's even it's it's even longer. I'm not recommending you to read the paper because, uh, the paper is a few hundred pages long.

Uh, but I'm going to use the slides to quickly show you what's what's being covered and so that you can say,

uh, so that's a, that's a, that's a lead out that I'm going to skip.

Uh, so, so one big issue in the past for large models will be the evaluation.

Nowadays, if you remember when each of the frontier model got released, they're going to show their numbers on some benchmark like sway bench.

What else? Sway bench is for software engineer. But there's a lot of like evaluation things and they're showing okay,

we're doing the logarithm reasoning pretty well because we're doing good on this benchmark thing.

However, the benchmarks are not reliable in a sense. I told you already that the benchmark become a new business.

So they're releasing very good benchmark and the frontier model are not doing well.

So the frontier model will come to find this benchmark release, to buy some private data so that you can improve your benchmark number.

This is becoming a business. However, what what we were doing before.

By that time it's still more academic. So what we try to answer is that how do we know large language models are trustworthy?

Like what's the what's the, what's the dimensions or the metrics? We should say there will be there will be some classical trustworthiness issue.

For example, you make this a lot like a jailbreak. For example, a the user can ask where the location of the secret.

Government facility? Actually, I think that's too stupid to too stupid to ask, but other examples are.

So the large models will say I couldn't do blah blah blah.

This is a good this is a good defense. However, however, without the defense or without the jailbreak defense capacity,

it will just tell you this something like a secret government facility, but this may be even hallucinated.

So that's a that's one issue. And so so so so actually we design something fly through something.

It's too many. There's too much animation. I just tried to.

Ah. Here we go. I think this is the important part. So so so with this in mind and again you can potentially use that in part of your interview

will be what's the trustworthiness of the larger models with design multiple Matrix,

for example, the truthfulness, which means whether actually it can actually tell you the fact or something totally fabricated.

Safety just mean including the jailbreak. Whether it will be it can defend something, are harmful or a healthy conversation.

For example, if the user asks how to do something pretty bad to to to hurt themselves.

Oh, I think I saw a recent news. I'm not sure whether you saw that.

I'm saying there's a it's that matter or the financial industry person chat with

chat with the GPT to design plan to murder his girlfriend and I think yeah.

And got arrested. So that's a I don't know in the first place.

The GPT should refuse to answer. Uh, so so that's the safety of the large language models.

And another fairness is also important, which means whether the large language models are fair to every single group.

Right. For example, I'm not going. I'm not giving you too much examples here.

But you can imagine certain underprivileged groups will be treated pretty badly because of the original training data.

And another thing would be robustness,

which means if you ask the GPT the same question ten times what you will still get the same answer or a similar answer or consistent answer.

For example, maybe maybe if for the non robust the if you use the.

Actually robustness is getting much better nowadays in the past,

in the past what happens will be there's a parameter hyper parameter called a temperature.

You can control the uncertainty in the large language models. By that time the result is pretty uncertain.

However, nowadays things are much more robust and usually for the simple questions, it's pretty robust.

And the privacy, of course, as you can say,

I think there are some incidents that you ask something and large models are showing you some private information from another person.

We also get a paper showing that it's very it's very weird. And it's actually it's actually happens sometimes across the users.

They can share something in common.

And sometimes the the GPT will just simply route one person's answer to another one and share the very private information.

And there's also other machine ethics, including you couldn't you couldn't hurt human beings or or speaking bad words to human beings.

That's why we didn't hear something from large models which are make us sound stupid, but sometimes, like they can, they can be pretty humorous.

And I got it. So other things are other things are also like transparency, accountability are pretty are also pretty straightforward.

So this is also another, uh, sort of like a project ideas where the directions you can think, what you can build something or define a specific field,

not necessarily large models you can define a smaller field and building a benchmark starting from the matrix and and building the data sets.

So in that benchmark we actually are on the top.

Sorry. So we tried a lot but it's already it's already pretty late.

It's already pretty old. So you can say on the top there's a lot of like where's my mouse?

Okay. So there's a data set and there's a task.

There's a lot of models. We tried a dozen of models, new new metrics, and each of them got a few assessment.

And then you can you can actually we build a 30 different data sets.

You can also use this data sets for your research or for your projects. And.

So many of them are yeah including the matrix. Uh we also tried 16 different logic models by that time.

There's much more now. Um, sure.

I think I'm going to fly through.

Uh, but, uh. But what I'm trying to say that, uh, this might be some sad knowledge that you can use.

Uh, which means, like, uh, what's what's the trustworthiness in the large language models?

And if you want to be, uh, if you want to do something around safety and security.

Um, uh, another thing is that we really have this, uh, toolkits.

It's called a trusted, trusted, trusted evaluation. And you can already use directly to evaluate your large language model.

And again, I'm a big advocate for doing a lot of like, open source.

The reason is that it's easy to, uh, to, to to get you a bit more impact.

And also building open source is not for impact only.

It's also for doing something you really enjoy. Uh, this this actually was the website I'm referring to.

Sorry, it's not opening. Ah, it's a it's called The Trusted Chain.

You get everything I talk about here, but we we we really cover a lot, a lot more, uh, models.

And, uh, I recall it's, uh, you can say it's, uh, it's like a small book, 230 pages,

and you can you can find anything you want to know about trustworthiness of the large language models.

Um, um, I think these fields are still pretty interesting and developing.

Uh, it started from the ChatGPT time and the white House, uh, this blueprint for AI abuse of rights.

And we just keep doing that. And if you read the news recently, European, European Union had a, uh,

this requirement for cloud or any AI model to add a fingerprint to their generation.

So in the future you can say, okay, this, uh, this is a generated by AI because they have this a fingerprint.

The fingerprint is not a sort of like a token saying okay.

Generated by cloud is not the same. They're like the choice of the words, the distribution of the tokens.

And this this can be the this can be the interesting fingerprint so that they can do some detection.

Uh, so, you know, European Union is always on this very interesting regulation parts.

I'm not saying that's right or wrong, but, uh, trustworthiness of the agents are still evolving because when fingerprints get more important,

how to remove the fingerprints become also important. Uh, another.

Another. This reminds me another random tool I wrote a few a few weeks back.

Sorry, it's not my GitHub. It's my students. Um. Sorry.

Um. Oh, here we go. A few a few months back, I was thinking when I'm using agent to do the writing,

it looks very AI, so can actually actually can really reduce the AI AI tool.

So so I'm not sure whether you, you read that very early because the elements of writing style.

So it's a very classical English writing books. There's a lot of rules and I like I like that a lot.

And so I did something like a literature back to writing rulesets for AI agents, how to make the AI writing less AI.

So this is actually it's also a skills. It's also something you can use with your agents.

And I use that with I'm just saying like make your AI agents write like a tech pro.

It's a bit, you know, too fancy, but that's a goal for what I'm trying to do.

So so you can you can design many things at a time. You can just think what what can change this.

Interesting fields. For example, you will say I extremely like the dash and and other things and it enjoys the very long sentence.

You need to break it down. And another thing is I enjoy the hardware similar a lot like transition words.

So we actually identify a lot of patterns and trying to patch it up.

This guide I keep just updating this I think last week is the latest version anyway,

so so again this course is not only to teach you like what's a convolution.

Neural networks. It's all give you ideas saying how to survive and navigating this genetic AI world.

Uh. What else? Ah, okay.

Now we need to go back to the fundamentals. The fundamentals just mean something extremely simple, basic and fundamental.

I think it's very it's very suited to be put at the end of the lecture because I know people you know, people are dying in a sense.

I can sense it. I'm not blaming you. At least I take a dinner at 430.

But. How many people got a dinner today already? No.

One. Two. So there are smarter people in the room. So.

Yeah. So I'm not sure your plan, but maybe you consider the. The Monday as a fasting Monday or something.

But it's not that bad. I just tried to persuade myself. Okay, today I may just get another apple later when I get home.

Um, maybe a meal as well. Anyway, now we'll go back to the foundations.

Which means, uh, when we're talking all this fancy part of the genetic.

And now we need to go back to the very, very basic, very, very basic, the basic things.

So, uh, because, uh, because all these fancy things are built on top of the basic things.

Uh, because, as we mentioned, the AI basically is like you,

you have your input data and you want to predict the outcome by and the AI or the machine learning is just this middle part of the mapping.

And how this how this the middle part is actually working. Uh, the question for example, you can you can.

The x, y can be the object detection for identifying different objects.

And also also also foundation model change how people are working with the object detection.

We have a sort of this is too much detail. But I we have so many interesting interesting works.

Uh, cover. Sorry, I shouldn't close this at all.

We have some recent work on on further test the the visual geometric reasoning capacity for the, for the AI.

So basically we'll do this. We're doing this, um, where the question we're asking is whether,

whether I'm really understanding or really understanding the visual geometric reasoning.

Uh, but we use the jigsaw puzzles as an example.

So the question would be we have we build a new benchmark, we have an image, we break it down to make this as a puzzle.

And and then we start asking, you know, visual language models to, to,

to to get this puzzle back or get the image back and and and the key challenge will be frontier vision.

Language models are not doing that well. And so.

So again so again I think this is another let me see what I can find there.

The actual performance because we tried quite a lot of different models.

Um, yeah. Here are the frontier models. We call this the peace accuracy accuracy and exact match.

So the Frontier Vision language models, you can say GPT is doing relatively well here, but for many of them are doing pretty, pretty bad.

Which means they have almost got a no reasoning capacity in a sense.

Uh, when you when you make this a challenging subject in a certain sense, doing pretty well regarding this visual language reasoning.

Um, so this is this will change very fast, maybe in the next round.

But what we're trying to say is that even we're trying to learn in something like object detection using convolutional neural neural network.

However, nowadays people are trying.

The people are trying to use the visual language model or other foundation models to replace any, uh, a lot of like, small specialized models.

Uh, so before the before the foundational model time, people are trying to build a one model,

for example, for insurance, another model for market, for marketing. Another model for autonomous driving.

But now people are just trying to have a built on top of its foundation models to to do some

fine tuning adaptation so that you don't need to build a separate model or a separate model.

Separate model. You just need to, uh, you know, stand on the shoulder of the Giants.

So. So that's a that's a, that's a current process. So therefore many of the examples we are having here are already obsolete.

Uh, but in the past there's a lot of different small tasks, for example,

giving an image how to segment to different fields and objects and actually generating the captions for the images.

But in the future, as you can say, you just need to give the image to a large language model saying do this for me.

Therefore, things change so fast. Uh, but we still learn the basics.

And in the past, in the past, the machine translation is a big thing.

However, I think translation is sort of correct nowadays.

I think, uh, in the future they just need some smart hardware to do this.

I think some of the, uh, eyeglasses are already doing well to, uh, to do the translation,

but how to do this bidirectional translation will be another thing.

These are just the task for the general generator for the general machine learning.

But the major question will be there's a lot of tasks. And from X to y how to do this f of x.

And the answer is not saying put the GPT here. That's not the answer we're looking for.

We're learning from the basic saying, how do you, you know, trying to build a basic,

specific machine learning models to solve to solve some of these issues.

And but the question you may have is that how is this related to the intelligence?

If you use the GPT here. The question will be will GPT three memorize everything or not?

And and how to and how to say one function for our intelligence.

So actually that's what everyone's saying is that HDI general AI intelligence that is that HDI or GA.

I don't I don't remember. That's the ultimate goal people are looking for.

But of course, many people are saying foundation models are not that past where we're going to because there's a lot of issues.

But anyway, uh, the ultimate goal that we're trying to use one function to model this word.

If this word is real, uh, there must be one single Oracle model that can model everything.

Uh, if this word is fake. Of course, there should be one model.

Uh, yeah. The answer may not be in the matrix, but maybe in this course.

Uh, how do we learn this? Uh, how do we learn this function?

So as we mentioned before, there is a supervised learning, which means you have historical data on X and Y.

So you're purely just trying to learn the mapping. But there's unsupervised learning which means the Y is not in the training data.

You're purely trying to discover the patterns in X. And there's also in the middle like weakly semi semi-supervised learning.

And there's also reinforcement learning, which means you try to discover the environment and learning things smartly.

Um and and and and and our goal, our goal is not to really, really learn that one golden oracle function because it's almost impossible,

uh, because, uh, only for the linear models you can do that.

For example, uh, if the X and y they have some linear relationship potentially you can learn this f of x.

However, for for most of the real world things there's no exact solution you can really find.

You can only do approximate which means if its approximation is good enough, that's that's it.

So that's all we're looking for. So so what's machine learning in one sentence that will be machine learning is a function approximation.

So basically you are not trying to get one exact solution here.

There might be an approximate solution. As long as they're close enough you're good.

You are not. As long as it's not a linear model. You couldn't really solve the answer.

Then we're just doing the function approximation. So that's why neural network.

It's great. The reason is because there's something called a universal approximation theory.

It's sorry, it's not on the slides, but it's just the mean. In theory, a neural network can approximate anything given the you have enough neurons.

However, this assumption is too loud. But still. That's a good that's a good, that's a good.

That's a good assumption or not assumption. Theorem.

So that which means you have a large enough capacity. A lot of data training capacity.

Then you can really approximate anything you want. So this back to let's come back to our very first point of this course,

which means why machine learning or AI becomes so powerful nowadays because of the increase of the data or the scalability of the GPUs.

And thanks to Nvidia and other vendors. And also finally, there's a transformers.

For now,

it's transformers that can do parallel training so that so that we can do this approximation pretty well for a lot of like hard questions again,

but our goal is due to approximate and deep learning is something in the middle,

which means we're using this deep neural networks trying to function as to function as approximator.

Uh I have this slides so deep learning as a universal function approximator.

If you're interested you can check this ua ua, which means the universal approximation theorem,

which to prove that given certain conditions, deep neural deep neural network can approximate any of the facts.

Uh, so so so so then we need to say how the deep learning is actually work for neural networks.

It's a it's working. But before we jump into the basic details.

So how many people already knowing what's a linear function or how things are looking like.

So like.

Um, so now you can say how bad I could do for the tendons, because I don't even can calculate whether that's a 45 or 57 percentage of the class.

I think most of the people have a sense. So I will try to quickly fly this through for the linear model.

Uh, because we may already learn this in your linear algebra or something like that.

So basically what we're trying to say is that, uh, let's say you want to predict, you want to predict the, the what subjecting is image.

And this is your X. And you have this one hot vector which means 00010.

Just that means this, uh, the, the first place just I mean, this is a car.

Maybe a third place means this is a plane or something like that. So how to actually predict, right.

Uh, you can basically you want to use your X doing some transformations through the functional approximator F so that you get a VI.

So this is a strict this can be a strict, straightforward linear algebra which means f equal y equal to f x w,

which means do the matrix multiplication between x and w.

So you give some parameters here to parameterize this function so that you can get this final one hot one hot class one hot class vector.

Um, I'm not sure whether I should write anything on the board,

but I don't because it looks pretty clean and don't want to make additional issues for people.

But you can say this is a straightforward linear algebra, which means Y is 00010.

You can just write it down and your your X is this.

And you need to find a specific solution for parameter w so that you can get this specific answer.

So so but but of course for linear algebra this is one of the one of the quotes I don't like because I'm pretty bad at dimensions and geometry,

but this is a very simple one. For example, your input for your your output will be this five by one vector and your input.

It's a it's a it's a it's a pixel of the numbers. You know, there's a for any image that will be three channels for for the colorful image.

Black red and blue or yellow.

Green. Okay. So this is another survey course.

It's not a computer vision anyway. Red. Green sorry.

Green green red and blue. Whatever. So you just, like, flatten your matrix so that you have this five times, you have a sub seven 7500 times one.

You just need to get a solution for your W so that you get this a full solution.

So it's straightforward. You just need to get a solution for it.

But of course people make this slightly more complex by adding a so-called bias so that it's still the size of five times.

Five times one. So that five times one plus five times one you get five times one.

So that's the the shape actually match. Uh so so so we call this a W and a b learned weights.

Uh, you can actually you can actually.

So, so so if we, if we do a different dimensions for, for for this, for this, for this, uh, for this question, uh, if,

let's assume this a car car image is only four dimensions, uh, and then you can actually calculate what the W and be, it's straightforward.

Uh, and nobody is going to calculate this anymore by hand.

This this won't be the this won't be in the a midterm exam.

So I'm not going to ask you to calculate what's the what's the bias.

Uh, so so don't worry too much about that.

We're just showing you that if you're, if you believe the relationship between the classification of your image to the to the actual class.

It's a linear relationship. Then you can simply just try to solve this, a matrix problem and getting the corresponding w.

So that will be your answer. And then you have a different image comes in. You can predict what's a corresponding class.

For example you get in another image for the plane. Then you times your w plus b then okay.

This part gives you the highest value which means this is a plane. So.

So this is a one hot vector which means the largest value would represent one class.

That's it. I mean that's a that's the simplest linear model.

So that you get you get a you get an X data, you get a Y label.

And then you're trying to learn the what's the w. Which means the model weights.

So deep learning is nothing crazy. It's we're just actually talk about one single unit in this deep learning.

However in deep learning there's millions of millions of even billions of these neurons.

So that by connecting them smartly with non-linear relationship them.

Then you can actually do something very smart. I think I will stop there, but however, give me a few more minutes.

I will stop here because then the questions will.

Then the examples are pretty. Yeah, maybe.

Let me quickly finish the definition of this again. The supervised unsupervised learning.

And then we're we're done for today.

So so again then you already say the simplest format of the learning will be learning a linear matrix so that you can map x to y.

So if you have a both x and y this is the supervised learning. And you have a lot of historical x, a lot of historical y.

The goal is to learn the middle middle part for the mapping so called the functional approximation.

And you are giving n training samples and you are just trying to learn this Iteratively, however.

However, however, many of the cases, the learning this mapping is extremely hard because the real world is not linear.

For example, for example, what's linear mean?

Just linear mean just. If you if you put $10 into your account and the tomorrow you get a not tomorrow, next year,

same time you got your money plus times one plus maybe a 2% or something like that interest.

So that's a linear, which means it's predictable. Everything is written. Uh, you just do the multiplication sum addition.

That's it. However, the real world is never, uh, sorry.

Um, yeah. The real world is never linear because as you can say.

Uh, yeah. Because because because linear is too simple for most of the things.

Uh, so so therefore so therefore but however, even for the linear model, how to actually calculate.

We just do the hand-waving stuff before saying, okay, you can use linear algebra to calculate this w.

However, even for a linear model, could you really do this? The answer is no.

The reason is because for the extremely large matrix, do the matrix inversion.

If you if you recall your linear regression course.

I don't recall exactly the solution for the W, but that involves the matrix inversion for the extremely large matrix inversion.

It's very hard and people usually don't do that. People do.

Another one of approximation. I think I'm going to I'm going to defer that part to the next lecture.

Actually again the next lecture will be prerecorded. I will record it in my office and, and,

and and that will cover the rest of the lecture regarding this linear linear perceptron loss function and how the laws are getting approximated.

And the next lecture we're going to cover, uh, things around the, uh, it's also classical topics, but I try to make it slightly more fancier.

Many people know 20, 31st years ago there's something called the decision tree clustering and blah blah blah.

However, they're still useful in nowadays because for example,

tree tree search actually motivate the tree of sorts when you are working with the prompts.

So we're going to cover Tree of Thoughts and other intersection between the

classical machine learning topics and the foundation models and the genetic AI.

Uh, one last commands is that people ask me how much genetically I will be in this entire course.

I think 10 to 20%, because by the end of the day, it's a deep learning course.

But we want to cover many interesting topics, including the news, so that when you chat with people,

they feel you, you know, you know a bit, you're you're in the field.

So that's a that's a goal. But out of there we hope you'll get a good job internship and throughout the time.

Besides, we invite industry speakers. Another thing that we're going to post some some some good jobs.

Not necessarily good jobs like jobs, job opportunities. Um, and we also welcome the community to contribute.

For example, if you find something on LinkedIn, Twitter,

usually one trick that don't just apply the job directly, you need to find a hiring manager who post it.

So that's the only way you can really get a job. Like, uh, because I'm also having a run.

I'm also part of the startup at the moment. Like you couldn't you couldn't believe how much how many resumes would you would you receive?

So the one critical thing is always finding the hiring manager who posted.

So, uh, we also are also going to show you a few job tricks, because last time we have the LinkedIn person to, I will ask her again whether she can.

She can share again how to write a strong LinkedIn message to get attention.

I think that's it. I will stay. I will stay here for some office hours.

Thank you.

`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "The Three Pillars: Algorithms, Data, and Compute",
    body: `Deep learning isn't new. The perceptron dates to 1958, support vector machines dominated the 1990s, and convolutional neural networks existed well before they mattered. Almost every algorithmic building block you'll learn this semester was invented before 2000. So why did AI only "arrive" in the last decade or so?\n\nThe answer isn't a new algorithm — it's that three things finally lined up at once. Data got big (Wikipedia, ImageNet, the open web). Compute got cheap and parallel: GPUs are built to do thousands of matrix multiplications at once, which is exactly what neural networks need, while CPUs process that kind of arithmetic in a slow, serial way. And the algorithms, mostly unchanged, were finally able to use all that data and compute. AlexNet in 2012 is the textbook example: 1 million labeled images, two GPUs, six days of training, and suddenly image classification worked far better than anything before it.\n\nExam insight: if you're asked "why does deep learning work now and not 30 years ago," the answer is never "someone invented a smarter algorithm." It's the convergence of data, compute, and algorithms — with compute (specifically GPU-parallel matrix operations) usually the most underrated of the three.`,
  },
  {
    tag: "💡 Concept",
    title: "Machine Learning Is Function Approximation",
    body: `Strip away the buzzwords and every flavor of machine learning — supervised, unsupervised, self-supervised, reinforcement learning — is doing the same thing: trying to learn a function f that maps some input X to some output Y. Supervised learning has both X and Y in its training data and learns the mapping directly. Unsupervised learning only has X and has to discover structure on its own. Reinforcement learning discovers the mapping by interacting with an environment and getting feedback.\n\nIf the true relationship between X and Y were linear, you could, in principle, solve for it exactly with linear algebra. But the real world almost never behaves linearly, and even when it does, exact solutions become computationally impossible at scale (matrix inversion on a huge matrix is brutally expensive). So the actual goal of machine learning is never an exact answer — it's a good enough approximation.\n\nThis is why neural networks are useful: the Universal Approximation Theorem says that, given enough neurons, a neural network can approximate essentially any function. That's the theoretical justification for the entire field. It's a loose guarantee — it doesn't tell you how many neurons or how much data you'll actually need — but it's the reason "just add more layers and more data" has been such a productive strategy.\n\nExam insight: if asked to define machine learning in one sentence, "function approximation" is the answer the professor is fishing for — not "training on data" or "making predictions."`,
  },
  {
    tag: "📐 Formula",
    title: "The Linear Classifier: y = Xw + b",
    body: `The simplest possible version of "learning a function" is a linear model. Say you want to classify an image as one of five categories (car, plane, etc.). You represent the correct answer as a one-hot vector — a vector of zeros with a single 1 in the position of the correct class, like [0,0,0,1,0] for "car."\n\nYour input X is the image, flattened into a long vector of pixel values (for a color image, that's three channels — red, green, blue — flattened together). The model computes y = Xw + b, where w is a matrix of learned weights and b is a learned bias vector. The dimensions have to line up: if your output is a 5-element one-hot vector, w and b are sized so that the matrix multiplication produces a 5-element result. Whichever position in that output vector has the highest value is the model's predicted class.\n\nIn principle you could solve for the exact w and b using linear algebra (matrix inversion). In practice, nobody does this by hand, and for large matrices it's not even computationally feasible — which is exactly why the rest of this course is about approximation methods (loss functions, gradient descent) rather than closed-form solutions.\n\nExam insight: the professor explicitly said you will not be asked to hand-calculate w or b for a linear model. What you should understand is the shape logic — why the dimensions of X, w, and b have to match — and why this simple linear picture is the seed that the rest of deep learning (stacking many of these, with non-linearities in between) grows out of.`,
  },
  {
    tag: "💡 Concept",
    title: "Supervised, Unsupervised, and Self-Supervised Learning",
    body: `Supervised learning is the most intuitive case: you have historical data where you know both the input and the correct answer (X and Y), like a pile of articles already labeled "sports" or "science," and you want the model to predict the label for new, unseen articles. Predicting a stock price from market data is another classic example — though the professor was blunt that in his own experiments building trading agents, this doesn't actually work well in practice, no matter how good your model or how expensive your data is.\n\nUnsupervised learning drops the labels entirely. You only have X — a pile of documents, say — and you're trying to discover structure or patterns in it directly, without being told what the "right answer" looks like.\n\nHere's the connection to large language models that makes this section matter: LLMs are trained in an unsupervised (technically self-supervised) way, and that's precisely what unlocked training at massive scale. Classical supervised learning needs labeled outcomes, which are expensive and slow to produce. But next-token prediction doesn't need human labels at all — every sentence that has ever been written already contains its own "labels," because the next word in any sentence is a label for the words before it. That's why LLM pretraining could scale to the entire internet: it sidesteps the labeling bottleneck completely.\n\nExam insight: don't just memorize the three definitions — know why self-supervised learning specifically was the unlock for training LLMs at the scale we see today.`,
  },
  {
    tag: "🏗 Foundation",
    title: "How LLMs Actually Learn: Next-Token Prediction",
    body: `At its core, an LLM is doing one repetitive thing: given some sequence of tokens (words or word-fragments), predict the single most probable next token. Generation is just this process run in a loop — predict a token, append it to the context, predict the next token, append, repeat. There's no deeper trick hiding underneath; the apparent intelligence emerges from doing this extremely well, at extreme scale, over a staggering amount of training text.\n\nThat scale produces something researchers call emergence: capabilities that seem to appear only once a model is trained on enough data with enough parameters, without anyone being able to fully explain the mechanism. This is genuinely unresolved — nobody has a clean, transparent account of why emergence happens the way it does.\n\nHere's the catch: a model that has only done next-token pretraining on raw text isn't automatically a good assistant. If you ask it "explain the moon landing to a six-year-old," a purely pretrained model might complete that pattern with something totally irrelevant, because it has never seen human demonstrations of what a good answer to an instruction actually looks like. That's why every assistant you've used (ChatGPT, Claude, etc.) has an additional layer on top of pretraining — human demonstrations of desired behavior — that teaches the model how to turn "predict the next token" into "usefully follow instructions."\n\nOne more piece of plumbing worth knowing: every request to an LLM assistant actually contains two things — a system prompt (hidden instructions set by the developer, often containing safety rules and behavioral constraints) and the user prompt (what you actually typed). Both get combined before the model generates anything.\n\nExam insight: be able to explain, in plain language, why a purely pretrained next-token model isn't the same thing as a helpful assistant — the gap between the two is exactly where human demonstration data comes in.`,
  },
  {
    tag: "💡 Concept",
    title: "From LLM to Agent to Agentic System: The ReAct Loop",
    body: `There's a clear evolutionary ladder here, and it's worth knowing the rungs. A basic LLM takes text in, generates text out, and stops — that's it. An assistant model (like early ChatGPT) adds a layer of human preference data so it can hold a helpful conversation, but it still just talks; it can't do anything in the world. An agent adds the ability to call external tools — search the web, read a file, send an email — so it can act, not just respond. An agentic system takes one more step: it operates in a loop, pursuing a goal inside an environment, using feedback from its own actions to decide what to do next.\n\nThe framework underlying most modern agents is called ReAct: Reasoning, Action, Observation, repeated in a cycle. The model reasons about what to do, takes an action (calls a tool), observes the result, and reasons again based on that new information — continuing until the goal is reached. This is a meaningful departure from the earlier "single-shot" pattern, where a model would do one long chain of reasoning, act once, and simply fail if that didn't work. ReAct instead behaves the way a person actually solves problems: try something, see what happens, revise, try again.\n\nThe running example from lecture: "find three recent papers from my lab, summarize them, and email a coauthor." An agentic system handling this doesn't just generate a text answer — it reasons about needing to search for papers, calls a search tool, reads the results, reasons again about what to summarize, calls an email tool, and confirms success before updating its own memory that the task is done.\n\nExam insight: know the specific vocabulary — reasoning, action, observation — and be able to describe the qualitative difference between an LLM, an assistant, an agent, and an agentic system. This ladder is a very natural place for an exam question to live.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Agent Skills and the Minimum-Privilege Principle",
    body: `A "skill" is just a packaged set of instructions — typically a markdown file plus reference materials — that tells an agent exactly how to carry out a specific, often complex, procedure, rather than leaving the agent to figure out the whole plan from scratch every time. Instead of hoping the model reasons its way to the right multi-step process, you write the process down once and let the agent follow it.\n\nWhen an agentic system is deciding what to do, it goes through two stages. First, skill routing: given the user's request, which available skill (if any) is the right one to use — and critically, which is the smallest, most narrowly scoped skill that's sufficient? If you only need to read an email, you shouldn't reach for a skill that also has permission to modify or delete emails. Second, skill execution: once a skill is chosen, does it actually call the minimum necessary tools to get the job done, or does it reach for more access than the task requires?\n\nThe ideal is minimum sufficient skill, minimum sufficient tool use. The uncomfortable reality, from the professor's own research, is that real systems fall far short of this ideal — even strong models followed the minimum-tool principle only a small fraction of the time in testing. That gap between the ideal and the reality is exactly where the next concept (agent failure modes) picks up.\n\nExam insight: the two-stage structure — skill routing, then skill execution — is a clean, quotable framework if you're asked to describe how an agent decides what to do.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Agents Fail: Shortcut Learning, Timeouts, and Overprivilege",
    body: `The professor was emphatic about one thing: in real-world agent deployments, almost none of the failures come from attackers. The overwhelming majority come from the systems themselves malfunctioning on completely benign requests. Three specific failure modes came up.\n\nFirst, shortcut learning causes false refusals. Models trained to be "safer" often learn surface-level patterns instead of real understanding of intent. A striking example: if you ask a model to do something borderline right after something else, its refusal rate can swing dramatically just based on word order or position in the request — the same underlying intent, phrased in a different order, produces a wildly different outcome. Models also over-index on trigger words (like "override" or "sudo") regardless of actual context, and are more likely to refuse requests about topics they've seen less of in training, independent of whether the request is actually harmful.\n\nSecond, execution loops waste enormous resources without ever completing. If the reasoning step incorrectly decides a benign task is unsafe, an agentic system doesn't just fail once — it can retry the same reasoning-action-observation loop repeatedly until it times out, burning API calls and money the whole way, with zero result at the end.\n\nThird, and most dangerous because it's silent: agents are frequently overprivileged relative to what a task actually requires. Ask an agent to read a report, and in a poorly scoped system it may have been granted access to modify or delete that report — access nobody asked for and nobody notices until something goes wrong. This connects directly back to the minimum-privilege idea from skills: the gap between "what access was requested" and "what access was actually granted" is where real damage happens, and it's invisible until it isn't.\n\nExam insight: know these as three distinct failure modes with distinct causes — shortcut learning is a training-data problem, execution loops are a resource/reliability problem, and overprivilege is an access-control problem. They're easy to blur together but the professor treated them as separate categories.`,
  },
  {
    tag: "💡 Concept",
    title: "Measuring Trustworthiness: Six Dimensions",
    body: `Once you accept that agentic systems fail in complex, hard-to-predict ways, the natural next question is: how do you actually measure whether a model or system is trustworthy? The lecture laid out six recurring dimensions that show up across the research literature.\n\nTruthfulness asks whether a model states facts or fabricates them (hallucination). Safety covers jailbreak resistance and whether a model refuses genuinely harmful requests — the professor's sobering example was a real news case of someone using a chatbot to help plan violence against another person, which should have been refused outright. Fairness asks whether outputs are equitable across different groups, given that training data itself carries the biases of who produced it. Robustness asks whether you get a consistent answer if you ask the same question multiple times — a dimension that has meaningfully improved in recent years as models have gotten better at simple, repeatable questions. Privacy covers whether a model leaks information from one user's data into a response for a different user — a real, documented failure mode. And machine ethics covers the broader question of whether a system's behavior aligns with basic human values, alongside related concerns like transparency and accountability.\n\nThe professor's framing of benchmarks is worth remembering too: benchmark leaderboards have become a business in their own right, with labs sometimes purchasing private data specifically to improve their benchmark numbers — which is exactly why a single benchmark score is not the same thing as genuine trustworthiness.\n\nExam insight: you should be able to name and briefly define these six dimensions — truthfulness, safety, fairness, robustness, privacy, ethics — as a checklist for evaluating any AI system, not just LLMs.`,
  },
];

const VOCAB = [
  { term: "Perceptron", def: "1958-era linear model; the earliest prototype of what became the modern neural network." },
  { term: "Support Vector Machine (SVM)", def: "Dominant classical ML algorithm from the early 1990s through the 2000s; rarely used directly today." },
  { term: "AlexNet", def: "2012 convolutional neural network that used GPU training on 1M labeled images to dramatically beat prior image classification results — widely seen as deep learning's breakout moment." },
  { term: "One-hot vector", def: "A vector of all zeros except a single 1 marking the correct class, e.g. [0,0,0,1,0] for 'car.'" },
  { term: "Function approximation", def: "The unifying goal of machine learning: learning a function f(x) that approximates the true (usually non-linear) relationship between input and output, rather than solving for it exactly." },
  { term: "Universal Approximation Theorem", def: "The theoretical result stating that a neural network with enough neurons can approximate essentially any function — the theoretical basis for why deep learning works." },
  { term: "Next-token prediction", def: "The core training objective of large language models: given prior tokens, predict the single most probable next token, repeated to generate full text." },
  { term: "Emergence", def: "The unexplained phenomenon where new capabilities appear to arise in models once trained on enough data at enough scale, without a clear mechanistic explanation." },
  { term: "System prompt", def: "Hidden developer-set instructions (often including safety rules) combined with the user's own prompt before the model generates a response." },
  { term: "ReAct (Reasoning + Acting)", def: "The agent framework where a model cycles through reasoning, taking an action via a tool, and observing the result, repeating until a goal is reached." },
  { term: "Harness", def: "The surrounding system (memory, tool access, orchestration logic) that lets a foundation model operate as an agent rather than a single-turn chatbot." },
  { term: "Agent skill", def: "A packaged, often markdown-based set of instructions that tells an agent exactly how to carry out a specific procedure, rather than relying on it to reason out the whole plan." },
  { term: "Skill routing", def: "The process by which an agentic system selects the smallest, most narrowly-scoped skill sufficient for a given request." },
  { term: "Shortcut learning", def: "When a model learns surface-level patterns (word position, trigger words, topic familiarity) instead of genuine understanding — a major cause of false refusals and other failures." },
  { term: "Prompt injection", def: "An attack where malicious instructions are embedded in content an AI system processes (e.g. hidden text in a document), attempting to override its intended behavior." },
  { term: "Overprivileged agent", def: "An agent granted more access or permission than a task actually requires — e.g. delete access when only read access was needed." },
];

const EXAM_TIPS = [
  { tip: "The midterm focuses on classical deep learning, not agent trivia", detail: "The professor said explicitly: agents, skills, and safety content are for breadth and 'interview small talk,' not the midterm. Prioritize study time on core deep learning fundamentals covered in later lectures.", priority: "HIGH" },
  { tip: "Know the three pillars: algorithms, data, compute", detail: "If asked why deep learning succeeded when it did, the answer is the convergence of these three — not a new algorithmic breakthrough. Most core algorithms predate 2000.", priority: "HIGH" },
  { tip: "\"Machine learning is function approximation\" is the one-sentence definition", detail: "Be ready to explain how supervised, unsupervised, and reinforcement learning are all variations on learning a function f(x), and why exact solutions are usually infeasible.", priority: "MEDIUM" },
  { tip: "Understand the shape logic of y = Xw + b, not the arithmetic", detail: "You will not be asked to hand-calculate weights. You should understand why dimensions of X, w, and b must align, and what a one-hot output vector represents.", priority: "MEDIUM" },
  { tip: "Know the LLM → assistant → agent → agentic system ladder", detail: "Be able to describe what's added at each stage, and define the ReAct loop (reasoning, action, observation) by name.", priority: "MEDIUM" },
  { tip: "Be able to name the six trustworthiness dimensions", detail: "Truthfulness, safety, fairness, robustness, privacy, ethics. Useful as a general evaluation checklist beyond just this course.", priority: "LOW" },
];

export default function Lecture1_Intro({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>AUG 24 · LECTURE 1</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Course Intro & Linear Models</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "600px", lineHeight: 1.6 }}>
          ML/DL framing, the rise of agentic AI, agent security and trustworthy AI, and the linear-algebra foundations of every neural network you'll build this semester.
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
              return (
                <div key={i} className="lec-card" style={{
                  background: CARD_BG, border: `1px solid ${isOpen ? COLOR + "50" : BORDER}`, borderRadius: "10px", overflow: "hidden",
                }}>
                  <button onClick={() => setOpenConcept(isOpen ? null : i)} style={{
                    width: "100%", background: "transparent", border: "none", cursor: "pointer",
                    padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "1px", color: COLOR, whiteSpace: "nowrap" }}>{c.tag}</span>
                      <span style={{ fontFamily: DISPLAY, fontSize: "15px", fontWeight: 700, color: BONE }}>{c.title}</span>
                    </div>
                    <span style={{ color: STONE, fontSize: "14px", flexShrink: 0, marginLeft: "12px" }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 22px" }}>
                      {c.body.split("\n\n").map((p, pi) => (
                        <p key={pi} style={{ fontFamily: BODY, fontSize: "13.5px", color: LICHEN, lineHeight: 1.75, marginBottom: pi === c.body.split("\n\n").length - 1 ? 0 : "14px" }}>{p}</p>
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
          lectureTitle="Course Intro & Linear Models"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
