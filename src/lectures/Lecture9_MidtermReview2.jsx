import { useState } from "react";
import TutorChat from "../TutorChat";
import LectureGame from "../LectureGame";

// Unit 3 — Generative & Attention accent (gold), matching App.js LECTURES entry
const COLOR = "#e8c468";
const ACCENT = "#f2daa0";
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
And next. Next week. Clearly, that will be the midterm.
And they will realize how many students, how many classmates you have until that moment.
I was always surprised to have so many students in this course until the midterm or the presentation day.
But you know, you couldn't force anyone to do anything, even through the tangent.
That will only make people, uh, you know, people just do weird things if there's attendance.
you can imagine how many crazy things may happen.
Another thing is that I think the I think assignment is actually the.
The sorry assignments is actually, uh, I think that's due today or perfect.
Um, tomorrow is tomorrow. Today.
Okay. You can say just like large models, everyone's easy to be confused, even including myself.
Uh, right. Actually, it's due tonight, and I didn't receive any one talk about how to extend or whatever, so.
Which means look like everyone's doing well, along with the agents for large models.
I think for, for for agents, this can be done in 5 to 6 minutes for a few million tokens or even smaller than that.
So, uh, however however, uh, you still need to be responsible for whatever you just, uh, turned in in the grid scope.
So we're going to review some materials and questions in the midterm.
Of course they're not going to be the same questions for sure. And in the middle of the class we have a one guest speaker.
She's also recruiting PhD students in the next cycle. And also she's always, you know, searching for a research assistant.
If you want, you can already do a search on her.
Her name is rolling so you can see more information about her.
She will be here on, you know, 6 p.m.. Uh, we have been on a few things, like she's extremely busy at this moment, but she will be here at around six.
Uh, but before that, we're going to still do the midterm review, and, uh, I actually, uh, you know,
refresh the content for this review because originally there's a 200 pages and for 243 pages,
but a few more and a few more questions so that you can people ask like.
Which will be covered in the primary slides.
You can actually we have some pointers, but uh, I think not necessarily.
You need to print out everything.
Uh, I think the most important part is that for most of the conceptual questions, you just need to understand what's going on.
Uh, we're going to use five minutes to quickly go through, which is already reviewed last week, which means recall,
we talk about, uh, for machine learning questions to try to split the data into training validation tasks.
And you can only use training data during the process. And the validation is only for tuning your model to choose what's the best model.
And the task can never be used in the training process because that will be cheating on the process.
And for for example, usually you can say the validation error and the training error and you'll want to make sure,
for example in this case training error equal to uh validation error is a very high but training error is almost zero.
However, in this case validation rates it's slightly lower than this one.
Uh, right. It's it's it's lower than this one.
So which means this is a good balance than the candidate B so which means that that's that's how you choose it.
You use the validation set to choose the hyperparameters, which means the trade offs in this case and that reduce the training loss.
Right. Like for example, in this case the training loss is in this case the training loss is zero.
However, uh the validation loss is very high which is overfitting.
Uh, we also talk about uh, we also. Yeah, this is a general questions where we're providing you can just read it through.
We also quickly go through the decision trees and using decision tree as an example to show something called overfitting,
which means your data, your training data is over fitted with the model.
But your test data are not going to work well because you can see the accuracy is still, uh, getting lower and lower after certain moments.
Uh, so the optimal optimal model happens when.
When the training loss and validation loss or something like that reach.
Both of the minimum at a certain moments. And after that this will be overfitting.
And. That will be overfitting as well. Um we also talk about what uh, choosing.
A pruning for example. This is. So this is for example, a new question.
So. Actually ask agents to create a few variations of the real midterm questions.
Uh, for example, this is also a new questions. Uh, as the um, pruned decision tree has zero training error but high validation error.
You pick the pruning depth with the lowest validation error. Then evaluate the selected tree once on holdout test set.
So which statement is correct? So before you even reread the question, reread the answers.
You will realize uh has a zero training error but higher validation error, which means it's already overfitting.
fitted for this unproven, unproven decision tree.
So you choose to prune this tree to reduce the complexity. So which means you want to reduce the depth with the lowest validation error.
This looks right to me. And then evaluate on the selected tree.
Once on the holdout test set for now I think this looks fine in general.
But we are going to say, well, the questions are tricky or whether the answers are tricky or not.
Zero error training means the tree will generalize well. Of course it's not right because it's overfitting already.
A pruning depth shouldn't minimize the training error. Of course it's wrong because we need to look at the validation other than training.
It's like the tree can still have nonzero test. That is correct for sure, because we low validation error never means it will be zero test error.
Choosing depth on the test set keeps the final statement on bias. So of course this is wrong because it's biased.
So the answer will be see clearly. So it's a it's a it's very straightforward.
So most of the questions we we actually separate the questions into multiple sets,
the fundamentals and some, you know, a little bit more challenging ones.
But I think the fundamental I think that's a 70% for something like that.
So most of the fundamental ones just look like this. So if you understand the concept well you shouldn't be worrying anything about it.
It's just like straightforward. And again, even this is not a true question from the real question from the midterm.
It's a variation of it, something like that. So most of the questions we are having in this review materials,
there are the variations of the real exam questions, at least in the views of the agents.
I didn't check exactly what are the real real nuts, but I think they're close enough.
Uh, we also talk about a few things, right. Uh, when you're trying to do the when you're trying to evaluate your machine learning algorithms,
choosing the right metrics are important for this extremely imbalanced data sets.
You have a lot of like a good, good, good parts and a few defectives.
And if you just use the accuracy as a. Evaluation metric, you are highly actually you it will be.
It's very misleading because you can say even your predictive even you predict everything as the good good parts.
Then you still get a 98% of accuracy and you totally miss all the defectives.
So which means in the extremely imbalanced data sets, you want to use other metrics including precision recall and other metrics.
So basically, if you can also try to understand what's the true positive and false positives.
For example, true positive just mean. For example, it's actually a defective and it's actually defective.
And you predict as defective this is the true positive and vice versa.
That will be you predict something as defective. However it's not. So this is a false positive.
The positive doesn't mean you try to predict something which is more important to you in this case Protecting the defective is more important.
So that's the positive side. And uh, and there will be some simple questions.
You can if you, if you, if you, if you, if you document this formulas precision recall and you will actually just plug in the,
the numbers for example, in this case like the defective is marked as positive.
Right. So that's a so that's why the true positive which means you actually identify 16 of the true defectives.
And there's a there's a there's a there's a for real positive which you predict as a good, which means you miss these positives.
And that's why this is a false negative. And of course this is a false positive and true negative.
You can just read it through. It's very straightforward. So you can do some calculations for it.
So in this case especially for the for the case where you have these rare defects which means your data set is extremely imbalanced.
You don't want to use the you don't want to use accuracy as a prediction, you want to use something more.
You can say in this case, it's actually missing a defect.
Cost more, much more than a false alarm. So which means missing a defect, which means that a false negative.
Right. Like because you miss that's a false and you miss it, which means you consider it as a negative.
So you are just doing the false negative. So which means the false negative is more important in this case.
And so which metric are you going to use.
Then you need to actually look back to the original formulas and find which one makes more sense to you.
Which means so which means which metrics can actually identify the identify the, the the the true negative clearly.
Because you can say for recall that will be true positives divided by the positive examples, and which means that will be um.
So which means in this case a. One minus record will be the false negatives, uh, divided by the positive examples.
So that's actually another variation of the record, because now you want to say actually how much negative positives is missing.
So which means you want to get a negative positives divided by the positive examples.
However we don't exactly have this formula here. However one minus this recall equal to that that value and you will get a bit more information.
But anyway, uh, you can document this a little bit more about the formulas and you will say it.
We also talk about the k nearest neighbors quickly because we'll review this last week.
So I'm going to be really fast on this. But you can still have more examples through the examples.
That's also a very good review, right? Like, for example, in the skinniest neighbor thing you have.
You use a k equal to three and you have a, you have a, you have a each of the, the three nearest neighbor have two, five, 11.
And what does the model predict. So as an example for this unweighted.
So what's unweighted. The k nearest neighbor which means you treat all the neighbors equally.
You don't consider how far they are or it's a one.
The nearest neighbor, the second nearest neighbor or third nearest neighbor. You don't consider this weight.
So basically which means you just use the average of the three, which means two plus five plus 11 divided by three.
That'll be six as the prediction value for this new sample, because you're going to use the average of the neighbors as the prediction.
So it's a yeah, it's a it's a it's a very so most of the fundamental questions are at this level of difficulty.
And the people shouldn't worry too much.
We also talk about clustering as well. We talk about how could you gradually update the mean of the clusters and what actually talk this through?
I got a very interesting observation. I was thinking, so people are having common sense, right?
For example, next week is the midterm and it's very unlikely we should.
We have a quiz this week right. It's a it's a very uncommon or not reasonable.
If you have a midterm sorry you have a quiz and midterm. So there's a high probability that way given you observe it's deterministic.
Next we have a midterm. It's very unlikely we have a quiz today. So that would be the common sense.
And I don't know how many people learn Bayesian optimization or patient statistics before.
Which means given whatever knowledge you know and you can make a prediction.
So it's just random thought because I was just thinking why people are betting we won't have any quiz today.
So then this reminds me, maybe that's because of the Bayesian statistics.
Anyway, sorry for the k means I always tell you by whichever type of actually.
So this is a real proof. Actually go to Taco Bell. The happy hours are great.
There's only a cost of $4 for most of the items. And again, I'm not sponsored by them.
So that's a disclaimer. Okay.
For k means again recall how the k means are working.
You first initialize the a few centers. So which means for this, for all the points you don't know what you only assume.
Like what's the number of k right. You assume k equals three in these cases.
And you you initialize. You randomly initialize a few centers for the for the cluster, which means these three.
And then you try to separate or you just want to assign different, you know,
unlabeled or samples to each of these centers and to say who is the closed.
And then for example, for this random points, you are just measuring the distance between between two the red one, green one and blue one.
And clearly this is closer to red one. So it will be assigned to to red.
And this other things will be to green. And this all this will be to blue.
And after you have this a new cluster, you're going to recompute. What's the what's the center of the cluster, for example, for this to the center,
maybe somewhere here for this, I don't know, maybe here and for this one that maybe here.
So you actually you update the center of the cluster and you reassign the clusters,
you will assign the samples to the cluster and just keep doing this.
Uh, hope for the convergence. And you can say gradually the center changes.
And that's how things are working. Uh, so so so so however, however the k means are not deterministic, right?
For example, if you initialize for the same data, let's say you have A44 .1359.
You just use the same like a key value, like k equal to two and repeating the same assignment, and won't actually give you the same result.
The reason is because you may you may starting from the different initial points.
For example, in the first case, you're starting from the two standards like the mu one equal to two,
mu two equal to seven, and in another round you're just starting from another separate points.
And then finally you will end up with different, you know, cluster clustering assignment.
In this case it's a very balanced like 13559 is two clusters.
But in this case that will be 135 and nine. It's simply just because the initial assignment of the clusters are different.
So which means clustering are not deterministic.
If you run, let's say 100 times with the random initialization of the cluster, then the result will be different.
Then we'll quickly talk about, you know, uh, after after we're talking about this,
the classical machine learning, uh, you know, trade, uh, clustering.
K-nearest neighbors. We moved to deep neural networks and recall, we talk about the we talk about the the ships of the deep neural network.
Uh, you you we already talked about this last time.
So how to calculate the number of the parameters in this case? That'll be two by three plus one.
That'll be seven. Oh, sorry. That will be a six because you still need to add a three here.
Uh, so that will be and also the bias for each of them you get a bias.
So that will be a six plus three, six six just mean two by three.
And plus the three bias plus one times three plus one.
So basically that's 13 parameters here. Uh so so we're likely to have such a question.
Right. For example we assume there's no bias. Then you have the layer with a with as A3442.
And uh uh And we already.
We already. We already got you that the number of the total weights.
And then the question will be, uh, if both of both of the heading was doubled to eight.
So which means there's the four and four. Double to eight. How many ways does the neural network have.
So then you need to do this calculation.
So which means you can say from three 3 to 4 this part uh now it's no longer 332, three by four is three by eight.
So which means you at least add at 12 here. And the 4x4 is becoming eight by 864 -16.
That will be 48, 48 plus uh 48 plus 12.
That'll be 60 already. And then you need to add this eight times two, which means you add you add another um, six or something.
Sorry I missed some part, but you can actually do this calculation.
You can say without a calculator, I even make a mistake regarding the calculator.
You can bring a calculator and, uh, you don't need any fancy functionalities.
You don't need a, any basic calculator will do the work as long as it can do the square root.
You don't need to even have the square root. Just like the simple, just general calculation that should be sufficient.
And, uh, uh, you know, uh, this is weird because, uh,
Viterbi then even asked me which specific mode or the category of the calculator should we should we specify?
I don't have something to to say for that, but just bring the basic ones.
Don't bring, uh, if it's too fancy, we will take a look.
But, uh, you know, a lot of calculators nowadays there.
They have touchscreen and they can draw figures. They are very fancy.
I don't know what any of them can even calculate, calculate the, the parameters or whatever for you for the deep neural network.
But hopefully just bring the basic ones. Uh, we're not going to be very strict on that.
And it shouldn't be connected to internet at all. Or actually, do we do?
Do you know that a calculator and calculators can actually connect to internet nowadays?
Or maybe they already go very far to have a.
I would be surprised. Like the newest version, they don't have any AI model in it because I think that's a very good selling point.
Like, you know, they have. Maybe they even nowadays can.
Calculator can get a, you know, camera to take a photo or whatever.
I think that may be the case. I need to research offline. But uh, another thing.
Uh, we know there are certain digital or electronic or smart glasses are connected to AI, and we were well aware of this.
So when you bring your glass, just bring the normal ones.
Not a not a for example, there's something called I think there's something called a is called a vertical or something I don't recall.
Or starting from E something. The other day I saw a student do a presentation.
Hey, hey, look at something firmly.
And there's nothing. It's just like a white board. I don't know what he's looking at.
And finally we realized there's a actually, there's a screen on it and there's a small air chip in it.
So, uh, so he also got a ring that can control, like the next slides or next slides or something.
So, so make sure just using the normal glass and this is this is the CS course.
And the proctors are well informed. They will they will look through and find any weird glasses or whatever things.
Um, as you can see, if people are just standing behind, it's very easy to see everything from the back.
And we will have a few people in the back and a few people in the in, in the, in the front.
So it's straightforward. So don't go too far. It's, it makes a complexity for everyone.
Uh, okay. Then we will also quickly talk about, uh, if you don't have the nonlinear layers among the nonlinear functions among the layers.
This will be finally equal to a linear combination. So.
So that's that's why it's not very useful. You really need a nonlinear activation.
So we introduce the nonlinearity as activation functions. There will be some calculations for you potentially quickly.
Very simple ones. Uh mostly likely ReLU function.
Uh so that you will so that you will uh, if you want.
There might be some like for the computations. We also talk about sigmoid and the tangent max.
Uh, uh, then we move to the convolutional deep neural networks.
And the reason that is very important. And recall the.
The filter, the filter, the guidance, the weight matrices. Uh what else.
Yeah. You can have multiple convolution layers and, and and uh, it's it's a, it's a 100%.
We're going to have some simple questions on this kernel size feature and etc.
etc. to let you understand the weight matrices of the deep neural network.
Sorry, the convolutional neural networks,
you will just say this examples I'm going to flat through because we if you if this is a very challenging to you.
You can also work with AI on some some of these examples. Um right.
Uh, so so for example. So the question should be simple as this one.
For example, with three by three convolution layers, you have a stride equal to one, padding equal to one maps to eight by eight uh by six tensor.
So that would be the that would be the this is the way this channel, this is height.
And you want to use this feature to make this eight by eight by 60 for tensor two eight by eight by 16.
Uh, so. Which means now. Uh, now, which means, uh, now, which means.
Only the future counter changes. Wait. What changes? So what's the answer?
I also want to see the answer. Um, right.
Uh, you also need to check offline. Because even myself, when I just look at the numbers, it doesn't make too much sense.
I still need to plug in the things. Uh, but again, this should provide you the explanations.
But basically, just use the formulas. Use the formulas we have.
We have where the formulas are.
Right. I think uh yeah we have the formulas here. So basically that's the key formula you want to.
You want to uh, you want to take um, yeah.
Other formulas are not that important. I believe um, I think last time we also talked about for the, for the, for the pooling layers,
it's not linear because the linear just the mean the the the function.
If you plug into the function, you add them and you take the function.
Take the function on the sum of two things. It should be equal.
That will be linear, but in this case it's not so which means f u plus v is not equal to f u plus fv.
Um, but these are just like the questions you can actually calculate yourself.
I think we're with we stop last time. Um, I don't know whether we stop here.
Um, but the next part will be the general deep neural network training and learning process.
The first part is that we talk about you want to make sure, uh, we hope the we hope the, the nonlinear function start on differentiable.
Right. Because otherwise in this case it's not a very good loss because you will say, uh, it's not equal to zero.
The differential, the derivative at this point is not defined.
So which is slope is undefined, which is bad. So this is not something we're looking for.
And so that's why most of the time the loss function is just like a squared loss.
Because it will say the square loss is very straight straightforward because it will say it's just take the two here and that's it.
So it's very simple. You have the chain rule and we provide examples before uh you can actually plug in some numbers as examples.
Um, right. But uh, you yeah.
If you're unsure, you can actually just directly print out this examples as well.
Um, right. Uh, it's not, it's not, it's not saying we will have you to calculate it through this complex complexity, but, um, if that happens,
that might be a we can say that that's more like challenging questions to let you to, to understand the data flow.
Um, okay. So, so. Throughout this, uh, gradient learning, one big issue is called the data loop.
Right. So which means because of the chain rule, because of this, because of this, because of this chain rule, uh,
if any parts in the model become very small or becoming zero, then, uh, you know, all the gradients are or we lose the entire gradient.
So we have this so-called data loop. Another thing for data loops, because, um, you will say it's a negative region, just like a purely zero.
So, so it's not a single point Z equal to zero. It's actually the interconnected parts.
Region R are zero. So to fix and also also sigmoid issue we also talk many times which means you only have certain parts are
active which means most of the most of the derivative of the sigmoid are just nothing are also zero.
You only get this part. They have some values, so they all get this.
Uh, they all get these issues. Um, and to trading to to trade the issue of the vanishing gradient and the gradient explosion.
We'll talk about two things. One is called gradient clipping, which means when you're going to become very, very large you can rescale it.
And this is using normalization normalized version to scale your gradients.
And and and and another thing will be yeah this is just like a gradient.
Gradient clipping. Uh great gradient clipping thing. Uh, so so here's a very simple question.
For example, this is your gradient descent. Use a positive learning rate.
That's a positive learning rate. And you update your weight matrices as a weight w minus the learning rate and the gradient.
So for this one weight w backpropagation report.
So basically it reports this part is equal to zero and your learning rate is positive.
So which means now you actually this is negative and this is negative and this is positive.
So which means actually your your w is becoming larger. So what does the update to do with the W.
Actually that will increase w because raising w again even your w increased the goal.
The gradient actually shows you the direction where the loss function becoming small.
So which means that still lower your loss function locally.
So which means the answer will be will be C because uh the w itself increased.
However the loss function becoming smaller. That's a goal for the gradient.
Otherwise that's not a gradient.
Um so in other sense that means that means your weight matrices can become can become smaller and larger, whichever it needs to be.
And the last time we stop here, which means we talk about stochastic gradient descent,
which means the reason we have a stochastic gradient descent is because your GPU memory is limited.
And you couldn't actually you couldn't actually fit all your data into your, uh, into your GPUs.
So you can actually only do part of it. So which means you can do a batch of your data.
So in this case your sample images. Uh, it's very expensive and it's very large.
So that's why essentially the mini batch was equal to 3264 or 128.
That's very common. And you only do the weight updates or the gradient descent on this small batch of the data.
So that's the mini batch. So that's the stochastic gradient descent.
The the without this stochastic just mean gradient descent.
Gradient descent just means you use all full data for this optimization.
And uh, the one issue for this stochastic gradient descent will be the uh, the instability of the updates.
So which means because you're only using part of your data.
So maybe your weight matrix is becoming, uh, go different directions like a zig zag or something like that.
So one way to stabilize your gradient updates that will be something called momentum.
So momentum actually which means if given the current current gradient you can combine with the recent update directions.
And so that you can do the parameter updates. So basically momentum smooths out the update direction over time.
So this is a vanilla version without momentum. Which means you can say your weight matrices is going to be the learning rate.
You know your current your current weights and updated along with the learning rate and the weight and the gradient.
So it's a straight it's a straight forward update.
However, with with the momentum what happens will be you're going to do you first calculate the
momentum the momentum you first calculate the momentum and the momentum just equal to a sum.
In this case sorry let me show that. So there's no I mean, I saw here with the code as well.
Uh, but anyway, uh, you basically you basically update your current weight to, to learning rate times this v t minus t plus one.
This is two parts. One part is still your current gradient.
And this will be your momentum which means discounted version of the past uh, past gradient.
So basically you just you just plug this in. You actually it's XT minus alpha times real weight delta f x t f x of t.
So basically it's a all the momentum and the current gradient and times the learning rate.
So gradually you build up this velocity as a as a running of the gradient.
So which means you're not taking all the gradients you just taking some recent ones.
Oh. Yeah.
Here would be some examples that you can you can go through.
And it's a it's also.
It's also it's also just like a plug in plugin which means.
You do one step off the SGD stochastic gradient descent on squared loss.
For the squared loss you can say that will be this one.
And with no one half, because many of the times people take this one half here, the reason is because.
Because when you take the derivative there's two, two, when two will be here and two times the one half will be just cancel each other.
But in this case we don't have this 112 factor for x equal to three, y equal to five and w equal to one and learning rate equal to 0.05.
So you will just do one round of the weight updates. Uh so so so this is a loss right.
So so the loss the loss with regard to W will be if you take the derivative that will be two two.
That will be 22X basically. And you're just like plugging everything.
Uh, 30 22X and w x minus y.
So basically we're just plugging the numbers and, uh. Yeah.
That's it. I mean w equal to original w minus learning rate times the gradient.
The gradient is the gradient domain. You just take the derivative of this squared loss and which is 2WX minus y times x.
Yeah. So so so so so it's a simple simple plugging. But but of course we may not exactly use the squared loss right.
Maybe we just use a linear linear L1 loss.
Um. Um yeah. That would be something that would be something to, to to to to take a look.
And uh, and then we talk about the, uh, the learning dynamics or the training dynamics,
which means how to make sure your training or learning process is very stable.
Uh, so we talk about a few things. The first thing will be initialization. We'll talk about a few things.
To do the initialization. The reason is because. So if you don't do initialization that'll be the same inputs and the parameters.
So that that will give you the same outputs and everything the symmetry can.
You learn nothing from it. So example here will be for example I have two neurons and h1 and h2 and they got initialized to the same value.
W w and h will be all the same. Sorry there's only w.
There's there's no bias. So which means two times 0.04 equal to 0.08.
So you can say if everything's the same you learn nothing and you actually everything will be converged and nothing you really learn from it.
So that's why you want to.
So you want to do some initialization, for example, random initialization to make sure the the w are different in the first place.
And recall we have this Xavier initialization Uh, etcetera, etcetera.
So which means, so that it will lead to different, uh, you know, so different neurons will have different values there.
We also talk about the stability by normalize your data.
Right. Like, uh, you want to make sure normalize and scale them and do some shift in that next layer.
So this is between layers for the normalization.
Uh the examples here would be for example for one feature across the feature across the samples that will be 246, eight.
You first calculate the mean across it. That will be uh six plus six plus eight.
That will be 20 divided by four. That will be five. Right. So the so the the mean is five.
So the you will you are going to subtract by mean. So basically x subtract by mean and divide it by the variance.
So two minus two minus two minus five and four minus five.
Uh you know just do the process.
So yeah potentially you want to have a calculator which can do the square root I think the square root also makes sense.
Uh, I think most of the calculator can do can do square root.
So that should be that shouldn't be too, too, too crazy.
Um. So so so so so one thing to, uh, so one thing to make sure that, uh.
Uh, one thing to make sure that, uh, yeah, again, this is just formulas for this normalization.
Right. You first calculate the mean of your data, you calculate the standard deviation,
and then you normalize your data by subtracting the mean and divided by the standard deviation.
So that's uh so this is a batch normalization. Uh, the important part is that you calculate your mean and variance based on the training batch.
And you store this value and you just apply it during the test time.
So which means, uh,
during the training time you use the mini batch statistic and you remember or memorize the running estimates so that you can do this skill and shift.
However, during the evaluation time, you don't recompute.
Just directly use the running statistic and so that you can make sure your training data and test data are treated on the same scale.
So so example here will be. So so the example here will be.
This is your training data. Your first compute the mean and standard deviation. And you skew your data.
And during the test time during the test time.
This is for example this is your test data. You just apply it.
So this is this is this is the wrong. Wrong example which means.
So so this is wrong. Which means it shouldn't be seven minus five divided by square root of four.
It should be seven minus three divided by the square root of four up.
So that would be because this is this is during training and during the evaluation or test test time.
You shouldn't use the the new one. You just use the eight one.
Oh, sorry. The training. Training statistics. Uh uh uh.
And we also talk about regularization. So. Which means.
So if you recall, this is your this is for example, this is your loss function.
Uh, so this is, this is, this is a, this is a ReLU and this is a so this is a, you know, a so this is a some predictions.
So this is a one of them is your predicted results.
And uh, and you want to make sure you penalize for the weight matrices, which means if there are too large which is not too good, which means.
So basically this is your typical loss function. And you just want to add a term to control how large your weight matrices will look like.
Uh, so in an abstract version that will be your, your, your, your L2 regularization,
which means your loss along with the regularization will be your data loss plus this regularization term more last term.
So this example is very simple. Let's say you have a two way to measure this.
Like a is 3330 beta two one.
And both of them have this data loss function equal to 0.04.
So which means the data loss are all equal here .04.04.
However when you plug in your when you plug in your weight matrices value to this penalized firm form, which means this is the W square, right?
So which means the square of three plus zero square plus.
And that will be nine and times the the this factor which means the .02 as we specified here, it doesn't matter because it's the same for both.
And for for for this for this for this B you will plug in two squared plus one squared which is five.
So we will say after the penalization after sorry.
After the regularization. After the penalty, you will see the loss function originally without this.
Without this regularization. Both laws are the same as 0.04.
However, by consider the regularization, we factor in the value of the weight matrices.
You will see the loss function of the first one becoming larger.
One of the reasons because look like like look like the because we are using L2 loss under the L2 loss here,
the square is becoming much larger than just simply a first one than the larger one.
And because of because of this, even the second one doesn't contribute anything.
The first term is too large. It's getting penalized by this one.
Uh, so, uh, so, so in this sense, uh, in this sense, if you can only choose one of them look like the,
you know, the weight matrix be slightly better because of the a smaller value or something like that.
We also introduce another regularization called dropout.
If you remember what's dropout, which means you randomly turn off certain parts of the deep neural networks a bad probability.
So basically some of the feature activations are kept, however. Others are just like a temporarily zeroed which means the turned off.
And when you do the next training, you can turn off some other activations as well.
So that's a that's a dropout. Uh, and uh, so basically it's still the same deep neural network.
However, you have this random activation mask and you turn off some of these neurons randomly.
Uh, these are two ways.
But if you remember, for this dropout, there will be one issue that during the training process, you randomly turn off some of the neurons.
However, during the prediction or inference or evaluation, you use the full deep neural network.
So which means you you keep everything. You keep every neuron on or open or turned on.
So which means there's a scaling issue. All your training during your training time, like most of your neurons are turned off.
Turn off like a 50% probability. So you need to.
So their value may be too large. If you turn off them during the evaluation or inference, then the final prediction will be too large.
So that's why you need to, uh, you need to do this.
Uh, you need to multiply it by a factor, which means Q uh, I don't recall, uh, during which which lecture we talk about this,
but, uh, let me quickly open it again so that you will, uh, you will you may get a sorry.
Um, maybe that's a place where we where we talk about it.
Uh. Yeah.
It proves I need to get another laptop. Or I can try the PDF instead.
Oh, I think the reason is because it's never loaded on this computer, so this takes time.
Um. Okay.
Right. I think this is the right slides, and, uh, I just don't remember where it is.
Uh. Oh, okay.
If you still remember that, we talk about, uh, we'll talk about, uh, the Dropout, right?
Like, at the training time, you randomly turn off some of these neurons, however.
So so which means their value becoming this weight value becoming too large because most of the time.
Half of them or a certain percentage of them are turned off. So that's why during the prediction time.
During test time. So during the test time, you want to make sure during the test time you turn on everything.
So this is the training time. You just randomly turn off some of them. However during the test time you turn on everything.
There's no dropout anymore during the test time, but because of the training time, this value is too large.
You need to discount them during the test time you need to also.
For example, if I turn. If I turn a turn off 50% of the neuron during the training,
I need to make my neuron 50% smaller during the inference time, because that will be otherwise, that will be too large.
So so the examples or the questions we are having here, what you can do two ways to make this work.
So one way is that, uh, one way that you don't change your weight matrices at all.
However, during the evaluation you multiply multiply by a by a factor of let's say.
Let's say if you if you turn off 50% of your neuron, you also want to make sure multiply by 50%.
So which means the value makes sense. But of course you can also do this during the in the invert process,
which means during the training time you always divide it by your weight with matrices by Q.
So you actually are you trying to divide it by Q.
Yeah, this. So basically anyway, you just want to match the number, which means if it's too large you multiply by this count.
If it's too small you just do the vice versa. So example here will be for example the hidden activation will be two.
The probability is 0.05. And you will you will rescale it.
And this will be your expected training output and there will be some like a general.
General examples you can you can follow. Uh, yeah.
So so the question here for example, will be uh, so this is more like a real questions in the exam that will be uh,
in this inverted dropout, you have this probability Q equal to 0.08.
But in the training a random just doing already doing this scaling at 1.25.
So what happens at the evaluation time. So basically if you use the this .08 times 1.25 that equal to one.
So you realize actually, uh, so actually uh, you don't need to do any additional, uh, scaling.
So basically you can choose B, which means during the training, during the evaluation mode you should do nothing because you already do this scaling.
And uh, you already you already do the skill in doing the training time and you no longer need to do anything.
But of course, in this case we already this this two number multiply each other equal to one.
So which means everything is the right skill. But if it doesn't then you need to do some rescaling.
So which means. But in any sense during the evaluation mode you need to disable disable the mask.
And. So that would make sense.
I think our speaker is slightly early, but. Uh, but I can actually I can I think you can start I think I can continue my review afterwards.
Uh, do you have slides or something? Yeah.
Okay. Yeah, I think we can start up, set it up. So while we waited.
While we waited up for set up. Any questions for Uh, midterms.
Like any questions? I think some people already post something on the piazza.
But if you have any questions, we can, uh, give you the answer now or everyone's very confident for it.
That's also great. We don't force anyone to have a question.
Um. Oh. Okay. Perfect. Okay, I can introduce first.
Maybe. Okay, okay.
Uh. Uh, sorry.
It's, uh, it started almost the end of the semester in certain sense, because for many people, after the midterm, the semester finished.
Uh, but still the case. We have a lot of, uh.
So this is, uh, so this week,
we have a professor rolling Lee from civil engineering and computer science to come to talk about, uh, deep learning and,
uh, and autonomous driving, car and transportation And I think for the two weeks later we have a start up coming to talk about doing AI security.
I'm not sure whether they will actually be in person, but we will say. Uh, so, uh, a few more, uh, a few more.
Uh, I don't have slides for, for, for, for rolling, but, uh, uh oh.
She can introduce herself. And she is also recruiting for, uh, you know, PhD students and research assistant and etc., etc..
So I think I would actually give this to you. Great. Thank you.
Thank you. You okay? Sure. Uh, thank you for the very kind introduction.
And, uh, actually, so you and I, we are close collaborators and also very good friends.
So the moment that I knew from him that he's teaching this, uh, very big course, maybe, perhaps one of the biggest courses across USC campus.
We have so many, like geniuses and future geniuses for AI.
So I was thinking, okay, so this is my good chance to basically update you what's going on currently in my lab at USC,
which is a currently rising field in terms of how we can apply AI and also advance the technology of AI,
co-designed it with the current vertical field of autonomous systems.
So therefore I basically I sign myself up for the course.
So it was very great that I see you all today.
Uh, my my presentation is kind of deliberately made it a little bit general to, uh,
kind of like make you familiar a little bit about what we care about right now in the vertical field of,
uh, autonomy, autonomous systems, Autonomous driving as well as the very mixed.
Autonomous cyber physical systems and how we can apply AI in this general area.
And let's see if some of some of you may be getting more interested after my talk.
So before I start, uh, this is the QR code of our lab,
so feel free to scan for it if you know you want to know more about the lab as well as for our research.
So, uh, I'm currently an assistant professor with civil engineering as well as computer science.
And, uh, this is the beginning of my third year.
And for the past two years, like, tons of things have happened.
And, uh, pretty much you will see the part of the bright side of that into this talk.
And, uh, I, I'm a, I'm kind of a migrate from Bay area to Los Angeles.
So I got my PhD from UC Berkeley, and I spent one year at Stanford as a postdoc.
Uh, I have to say, I think Los Angeles is a much better city than Bay area, and I hope you can agree it.
Um,
so today I'm going to talk about this topic about why intelligent agents share the world and games learning and the future of interactive autonomy.
Because right now, not only in Bay area, in Los Angeles, as well as across the world.
So robots is something which is quite, uh, at a hot spot right now.
And, uh, so robots, they are not as elated, uh, be existing in the world.
So basically, for most of the cases, they have to interact with human, they have to interact with other peer robot robots,
and collectively they are achieving a certain goal which we want them to achieve to better the society.
So therefore today I'm going to leverage the case of mixed autonomy, which is a term that we refer to the current transportation system.
For example, you see so many autonomous vehicles driving on the road and they coexist towards human drivers with pedestrians.
And we'll see that with more details in the later slides.
So basically right now this is the critical time that we want these population of autonomous vehicles or robots.
And we want to consider what we can leverage from them to make them better for the whole society.
All right. Hi. Before you continue, can you if you could please clip the lav mic to your shirt or on the middle region of your upper chest?
I'll try that. Do you think it's better?
Yes. That's a lot better now. Only in the Mac, right? Is it better now?
I think you can put your pocket. Yes. That's good. But I hope everyone hears something from my previous opening.
I don't want to repeat it again. Um, yeah. So I'm not sure.
How many of you has already had that experience with Waymo vehicles right now, which is quite prevalent across the Los Angeles area.
So on Saturday, I just took a ride with Waymo.
And right now, like you, basically, if you are living in this metropolitan area or for example,
the Westwood part, you basically almost see the Waymo vehicles in every intersection.
never wrote and we can probably see say that right now.
Autonomous vehicles, for example, like Waymo or Zoox, they are kind of taking over America and across the world.
And one thing about these autonomous vehicles is that so in the United States alone, the EV market is projected to cross $1 trillion by 2033.
And this exponential growth reflects not only technological advancements,
but also increasing public and private investments, commercial interests and societal readiness.
So about that comparison of the technological advancements and societal readiness.
We'll talk more about that. So in this period where we have a small proportion of autonomous vehicles to a future
period where we expect there is an increasing penetration rate of autonomous vehicles.
This can be a challenging period where we call that mixed autonomy.
So imagine if you have one. Autonomous vehicles. Navigating in a world where we have so many.
Human drivers intuitively know that it's going to be very hard, right?
Imagine that you are driving the vehicle and across so many very spontaneous human drivers.
It's very hard for the other human drivers what they will do, let alone the motorcyclist as well as the pedestrians.
And the control that you have is rather limited because you only have one single autonomous vehicles control.
However, compared to the future where after a certain bar we will have enough penetration rate of autonomous vehicles.
So in that period,
the requirements for these autonomous vehicles in terms of safety would be much decreased in terms of terms that to achieve the same safety level,
they are facing much less uncertainty from the human drivers or pedestrians because
the proportion of the human drivers or pedestrians is much decreasing in that period.
And we have a much better place to control, because right now you will have more, many more and even population of autonomous vehicles.
So among them they could share the information, they could communicate with each other.
So therefore it's a crucial path that we we can navigate from the current case where we have limited proportion of autonomous
vehicles to a future idealistic state where we do have a population of autonomous vehicles and they are doing good to the society.
So therefore, my research, as well as the current ongoing research in my lab is focusing in this period,
and we think the right path that we can navigate the vote from the current state to the future idealistic state,
is through in how we can investigate the interaction of these robotic vehicles with the current human that is in the system,
not only the pedestrians, the human drivers,
but also the customer market, the current agencies, and therefore the topic of today's talk is about 1 in 1 intelligent interact and share the world.
And the methods that we leverage are related to game theory learning AI.
So like now let's start with something a little bit tricky.
So you can think of it as a simple puzzle. I'm not sure whether some of you were familiar with such type of?
We call that brass paradox in transportation.
Maybe not in math, but if I explain it a little bit with worse, I think you must be very familiar with that.
So basically, let's say there are two rows from San Francisco to Los Angeles, which is represented by the origin and destination.
And so for some reason, we let's say we have a bunch of vehicles, let's say 4000 vehicles.
They try to navigate from San Francisco to Los Angeles.
And at one point the government says it's too crowded right now.
So what they do is they're going to build a new wide highway that connects A and B, and this highway is so wide and open.
So basically, you can think it mathematically that the delay on that highway is going to be zero.
So with this very newly built highway, what would you expect when this new infrastructure, maybe,
for example, like the result of millions of or even billions of dollars when it is built?
Is the traffic going to be good or is it traffic going to be worse?
So you can have your guess, but basically the eventual result after the mass, which is shown by the simulation,
it was saying that with that newly built highway, the eventual total social delay of the whole system actually is going to get worse.
And the reason is that because everyone knows the highway that is newly built is so much a saving their time.
So basically out of the competitiveness that everyone they wants to minimize their own travel time,
they will go through that newly built highway and eventually that would build
the congestion to the other people that is navigating that newly highway,
and so therefore the total eventual outcome of the whole system is getting worse.
And this is a very vivid example where if you think everyone is making a local, optimized decision,
but collectively it's possible that they are worse than the whole system's objective.
And that's exactly the reason why we see there is a huge gap, and we want to mitigate that huge gap using our research.
That is, we want to combine the individual agent's decision and how we can bridge that optimality of the individual agent's decision to the system,
optimality of the collective outcome. And usually there is a gap between the individual smart choice as well as the system's optimal outcome.
And the reason for that is because. So for every person or every agent, every intelligent agent.
If you are trying to minimize a certain objective function which is related to your action as well as your peers actions,
that collective optimization usually is not aligned.
When we have a centralized coordinator minimizing for the whole system.
So therefore, to investigate that discrepancy and how we can design the autonomous agents in a way that when they are making their own smart choices,
they're still doing good to the society is the key reason that how we motivate our research.
So basically today I'll have three very representative projects that are currently ongoing in our lab to testify for the same point.
That is how we will design and investigate the discrepancy between individual intelligence as well as the collective intelligence.
So the first example is from the autonomous mobility where we have the population of autonomous vehicles on the road.
So before we do that, I'm not sure whether you experienced such type of it is called Viviane Rams in United States,
where you have a I'm not sure whether you drive, but if you drive from USC campus to Culver City, you will see a lot of rams like that.
So basically there is a ramp and very neighboring field.
You will see another off ramp. And usually there is big congestion at rush hours because there are too many lane change movements.
And usually all those lane change movements, they are conflicting with each other.
For example, indicated by the arrows and the circles. I think one thing I can add is that this is especially bad in California.
I think in other states people are much more much better driver in a sense.
Well, I have to deny that because I think I myself is a terrific driver.
But that's true for Californians. Usually we are less patient in terms of the chaotic driving behavior.
And so if you imagine if you are one of the drivers, you are driving in the mainline and you know there is going to be this maybe merging chaos.
Due to that, we will ramp ahead. So basically you will have two options.
So one option is that you could stay on the current lane and you wait to merge.
Or let's slow down a little bit or even just use the original speed.
But you are prepared to merge with the possible ramp vehicles.
Or the other option is that you could switch to a neighboring link two immediately before you enter the living room area,
so therefore you could avoid the merging. But of course you need to do this extra lane changing at the current moment,
and you have to be prepared with merging with the vehicles that are surrounding you.
And this result after the if we see all the listed driving behavior.
So this result is the only strategic decision making result which we can possibly change from human drivers,
because all the other driver behavior, they are totally oriented.
You cannot tell a vehicle if they want to exit saying like, you need to stay on a highway right now and you exit in the next exit.
So it's not possible. But it's very possible that that we can use autonomous vehicles to manipulate or, you know,
more positive way to kind of influence the strategic decision making behavior where we call either bypassing or steadfast in this area.
So therefore we can make the system a much more efficient system.
So therefore the idea is that when we have a population of autonomous vehicles before they enter the ramp,
we will have certain information from the bottleneck to be designed as the incentives for these autonomous vehicles.
So therefore, compared to human drivers, they still do their spontaneous or strategic decision making behavior.
These autonomous vehicles lane change behavior.
They will be designed and incentivized by our centralized signal which reflects the bottleneck congestion ahead.
So therefore you can see the general result from this simulation.
Is that so compared to the totally like unaffected lane changing behavior,
if we can coordinate the autonomous vehicle behavior before they enter the viewing area,
then it's very possible that we could ease that congestion because we already sent the system signal from far ahead.
Back to them. So therefore they could optimize their lead distribution before they enter the ramp area.
And so this work eventually won the Best Paper award.
LED by one of the current students in the lab.
And so what we do is we test it with all different simulations, as well as all different real world data set.
And we have a very promising reduction of the system level congestion in terms
of coordinating these autonomous vehicles behavior at the vivo ramp area.
And the second project that I want to introduce, uh, let's watch some videos first.
So I always emphasize that how AI interact with human.
And in terms of Avi, this is rather more important because sometimes human would do very crazy, uh, driving behavior, for example.
Let's see. So this is the so-called last second line drivers.
And also. I'm not sure whether some of you did that on the highway, but it could be very possible you Los Angeles,
because Los Angeles have so many parallel lanes like in parallel.
And the axes are very near to each other.
So sometimes the very skillful drivers that would do such things and you know, that this kind of behavior is definitely very, very dangerous.
And it harms the system's efficiency as well as the safety.
And all the other behavior is not because they're irrational or something.
Actually, I believe the drivers think they are quite rational. and the reason for that is human drivers are selfish in terms of selfish.
I mean, they are trying to minimize a certain cost which is perceived by themselves.
For example, some of the drivers, if they want to minimize their own travel time,
then from their perspective point, they could sacrifice the safety of this kind of maneuver.
And that is also reflected in terms of when they interact with the autonomous vehicles.
So I will describe one thing which is testified by our theory and experiments.
But we can relate that phenomenon in our daily life.
So let's say for the previous work we say that we want to coordinate autonomous vehicles linked into behavior.
Right.
And basically you will see that the way we coordinated in a more societally optimizing way, because they may want to stay lazy on the current lane,
but ideally we want them to switch to a neighboring lane to leave more space to the more and more onramp vehicles.
So then the autonomous vehicles. They do. They did such kind of optimize the behavior according to our signals or indications.
And then the human driver which is following that autonomous vehicle originally the driver may not consider
stay on the current lane because they think it's congested and there is a vehicle traveling in front of it,
right. But now, since the autonomous vehicle has already followed our indicator,
our indicators or signals to do this altruistic lane changing, suddenly there is a vacant vacant spot in front of the human driver.
So as a selfish human driver, it might just take the spot, even though originally he or she would definitely bypass.
So therefore we see such kind of phenomenon, which we call it selfish vehicles exploitation.
That is for many cases when we design the societally optimizing choices for autonomous vehicles.
You see, there is a stage where such kind of impact only takes effect when the penetration rate exceeds a certain point.
And the reason is exactly like this, because the human drivers, they would exploit such altruism, which was originally designed for the whole system.
So therefore not only for the exploitation, but also for the other cases,
like sometimes when you see the autonomous vehicles, for example, right now, sometimes it could be dumb.
And when they are taking the customers, they may just, you know,
like stand alone right out of the intersection, which may block the intersection in the way.
So sometimes I see some drivers, even though they know the autonomous vehicles cannot hear them, they still honk a lot.
I don't know why, but basically such kind of behavior always exists in the current transportation system.
So therefore, uh, another direction that my lab is currently investigating is, uh, can an AI learn a person who is simultaneously learning that AI.
So we call that AI and the human that they serve, can they adapt with each other,
and how that co-development could eventually land in a certain point, which is beneficial for the society.
And this part is especially related to game theory, because the AI's decision point and the humans decision point is coupled with each other.
So when the AI is trying to make a certain decision, they have to consider how the human would react and the human.
Definitely, intuitively, they will predict how the AI would react.
And so that coupled optimization themselves is a natural game theory formulation.
And the last project that I want to mention is about a current ongoing effort, which on what I'm currently collaborating with Professor Zhao.
So, you know, we are currently in Los Angeles and Los Angeles is such a beautiful city.
However, it's so painful that for every summer we are experiencing these wildfires everywhere, basically.
And um, uh, so this one is something that, uh, well, unfortunate for that disaster, but fortunately we got that, uh, 2 million NSF award recently.
And so what we do is we are trying to design the Atlantic AI for the evacuation of population of agents using mixed autonomy,
which are related to human drivers and autonomous vehicles and welfare.
So before I basically describe what we do here, I want to show a simulation.
You know, Los Angeles is one of the most unique spots across the world because the welfare is there happening, right, besides the metropolitan area.
So, for example, when I talk to the local, when they evacuate a, you know, the boulevard that they are using for evacuation is the Sunset Boulevard.
So Sunset Boulevard is one of the roads that they are actually using at the emergency of evacuation and Sunset Boulevard.
I'm not sure if some of you they go to clubs.
Sunset Boulevard is a rather rather busy street, and in terms of that,
it's very difficult for the whole traffic system to make sure that Sunset Boulevard is totally well prepared when that evacuation happens.
So Los Angeles is such a unique spot where welfare, they need quite open evacuation routes.
But the metropolitan areas are also using these evacuation routes intensively in our database.
So therefore here we show a simulation where, you know, those dots are trying to evacuate and you know,
without with the very fast welfare propagating and also with the strong winds in Los Angeles.
If we want to, we want all of the residents to actually evacuate in a very organized and fast way.
We do need the central coordination of all those agents.
And as you can see,
basically these rights indicate when the evacuation route is actually congested due to the inefficient coordination of all these agents.
And that does happen in the previous welfare evacuation cases.
And that would not only cost money and for the times they cost a life.
So therefore, it is definitely one of the most crucial problems right now that is ongoing in the city.
And we want to leverage this project to coordinate.
To coordinate the evacuation using the which is soon populating mixed autonomy or autonomous vehicles.
And in the meantime, we want to coordinate the information that we can feed the other pedestrians or human drivers to
make sure that the whole evacuation can be something efficient and safe and better for the society.
Are we and where we are currently living in the lot in the general Los Angeles area?
So therefore, all these three projects, they all answer one question.
That is why we need to go beyond from individual intelligence to collective intelligence.
And the way that we do that is we investigate the single agent strategies,
and then we investigate how they would adapt not only AI but also human, how they would co adapt with each other.
And eventually they can achieve this ideal idealistic goal of collective intelligence.
So therefore if you're interested in the general area of reliable interactive autonomy.
So I'm very happy to discuss more. And so this is the same QR code so it don't need to scan it again.
Um but currently our lab right now we have many people and many research that is currently making the whole ecosystem very vivid.
Um, we do value curiosity and we do value collaboration.
We want to build each other up in the system.
So if you want to do something which is related to AI on the cutting edge and also has the real world impact.
Feel free to shoot me a message, look into our website and see how our connections could happen.
So therefore, thank you. This brilliant stage and this is basically what I prepare for today.
Uh, perfect. Thank you. I think people can ask questions.
If if you have any, I can have a question first. Yeah.
So? So people now are mostly curious, like, uh, for example, how this, uh, autonomous driving car,
uh, job creator looks like for openings because everyone wants a job.
Uh, and I always tell people that maybe it's very hard to get a direct job at Nvidia, but it may be, uh,
there's more chance in the intersection of AI plus, for example, transportation or, uh, including disaster management.
Um, social observation in general? Uh, I think so.
I think that's a very good point. So that's also why the reason that I designed this topic is from individual intelligence to collective intelligence.
So I think currently right now, AI is kind of reshaping the whole industry.
And in terms of, for example, the key training, no matter whether it's pre-training or post training of those foundation models and everything.
Uh, the whole career does shift a lot, but I have to say, like in terms not only in academia but also in the industry,
there is there is this very obvious tendency that AI is becoming more and more vertical,
and how those models can be applied with the current vertical areas, like for example,
robots, warehouse robots, or autonomous driving, or even the general transportation itself.
So I think eventually, not only in the industry but also in academia,
AI would become a foundational tool which will definitely combine with different domain knowledge.
So I think if you are interested to try to understand one or more several domains and see if you're interested in any specific domain,
I think domain knowledge eventually would, uh, visualize the whole AI again.
So this is my question I hope is right, but would you domain knowledge also be, you know, sort of like wiped out by AI as well.
Uh, well, I hope not, because that also concerned my job.
So I well, I have to say, I hope not.
And I, I mean, for example, from my own experience with doing AI, this type of stuff in my daily work life, uh,
I do think eventually you still need the people who really understand what's going on to be responsible for the results,
because, for example, like those type of evacuation, uh, how we could trust AI in terms of, you know, thousands of lives are at risk.
So it's like, I think for the real critical problems, especially when they are related to the physical world where humans are actually living.
I think domain knowledge is still playing a very important role.
And so but it's only my answer and my current conjecture.
Um, but we'll see. Okay.
Any questions from the audience? Yeah.
Go ahead. How does this translate to the real world? How does it translate to real world?
You mean currently what we are doing or in terms of the technology?
Yeah. Okay. So currently, for example, right before my talk, I just talked to several of the local governments because,
uh, according to the general Los Angeles and California area, we right now pay much attention to welfare.
And, uh, each of the local cities, they have certain resources in terms of the evacuation.
But as I said, evacuation is a regional thing which which needs a lot of coordination, for example, the data sharing from a very starting point.
So what we do right now is we're currently trying to make this united effort that we could, for example,
start with a certain protocol that we could share the efficient data across different parties,
and we can build a new pilot and even small pilot or prototype with one of the key cities right now.
So this is one of the current practices that we are investigating with the AI part.
And in terms of technology. So I mean, all the technology, they originate from the lab.
And when they are testified with more prototypes, with more and more funding invested in,
the prototype becomes more and more realistic and, uh, presenting more and more versatility.
And eventually they go to industry.
So I think like doing the innovations in university itself is already in the process of eventually going to industry.
I hope I answered your question. Yeah, I'm sorry, but yeah, but if you're interested, feel free to show me a message.
We'll talk more. Yeah. Any more questions?
Oh. Is there more? Is your work more into, like, the policy side of things, or is it more into like, Waymo side of things?
Uh, that's a good question. So I think in terms of transportation and even Waymo, it's no way that you can avoid the policy.
But my work is more on the engineering side. But policy is something that we cannot avoid when we talk about those real applications,
when they go to the real world related to such kind of robot cars or transportation.
So I have to say, I'm on the engineering side, but policy is also very crucial in my work.
Yeah. Yeah. So. So one interesting thing that for this course we have a attendance policy.
So which means, uh, if the people, if the attendance is very low, then we're going to trigger a quiz.
And uh, but people, if they, if everyone chooses not to come, there must be a quiz.
But if some people choose to come or everyone choose to come, there will be never a quiz.
So this is also part of the research rule is doing like share. Yeah.
Again like really motivated me a lot of like policy design.
So the question the answer is that, uh, the engineering work can do the fancy part.
But by the end of this humanity, which means, for example, when people are just driving down the road and uh, uh,
while which is always changing, uh, different lengths, it's, uh, it's just it's not a, it's not a rational at all.
It's a totally irrational and, uh, uh, but human beings are just not reasonable in a sense.
Yeah. So that's why, uh, policy always makes sense if it's actually grounded on something.
Grounded on the irrationality of the human beings. So before we conclude this lecture, I think one more thing to tell.
Is that if you check the site, she's recruited up to eight PhD students this year.
That's a lot. And. Uh, which is great.
I mean, she can hire both from CS and civil engineering and any other departments.
Uh, yeah, I think code wise thing is, we should be able to find a way, right?
Students as well. Uh, so, so so I think today we are going to have.
An early break so people can grab a chat with her and we can come back.
We can start our, uh, review session in, let's say, uh, 15 minutes.
And that should be sufficient for us. And if you want to chat with rolling directly, you can come here.
And I'm here for my office hour and to help recruiting.
I have nothing to do with the quiz, so it's not have nothing to do with that.
It's more motivated by. Okay, I think we can restart.
And a few things. A few things, clarification on the midterm.
And of course, I think these are the many of the guest lectures to bring people.
Some like a new visions because, uh, because, uh, I think, I think, I think Tesla did release that new car, which can fly.
I'm not a big fan for that, but still, it's a very impressive, uh, you know, when you view it.
However, I know technology wise, maybe that's not something extremely, extremely novel.
Uh, but, uh, we are going to bring people in different fields.
For example, AI plus biology, AI plus this transportation, autonomous driving autonomy and,
uh, and other fancy and crazy things, uh, the few things people ask regarding midterm.
First of all, again, it's a it's a two hour it's a two hour exam.
And in my past experience, not too many people can really use up this time.
They usually finish maybe one hour or even faster.
Uh, you know, uncertainty is something like the biggest, the largest, the biggest fear people may have.
Right? When you don't know what's in it, you feel you are going to use a lot of time.
However, uh, not necessarily when you really say the questions, you think it's a it's great.
Uh, no. No exam is great. All the other exams are bad, but you will feel it's okay, it's manageable.
And uh, and secondly, secondly, people ask how to, uh, digest the materials.
Uh, there's too many slides, right? I think based on, uh, but but but actually just using this, uh, uh, you know, this,
uh, mid-term review slides and, uh, plus plus, uh, you know, that sample question?
The sample questions I gave it to you is a real exam last year.
However, the difference is that last year we're covering a little bit less than this year because, um, because we did some changes.
And so this year we cover more materials.
But last year there are slightly more narrative or for the first few blocks, uh, so you can actually people propose ideas,
seeing whether they can use the review slides plus the sample or sample sample questions to reverse engineer, uh, this year's question.
But actually you can I mean, we don't prohibit anything, uh, for preparing it.
And you can reverse engineer to, to prepare questions.
And if your AI is smart enough, maybe it can also even guess what will be in the exam.
So, uh, it got a flavor, right? So it's a again, everything is a game.
And, uh, I like game theory a lot. Uh, I was, I, I don't know that much about it, but you can use anything legit to to prepare for it.
And people. Of course, people don't want to print like 200 pages for the exam, right?
You can actually let AI to condense everything. If you if you have a strong AI model, you can even ask it to do to digest the review lectures,
the video lectures to say where we put emphasis on right and you can prepare for it.
And the one last resort is that in the past we will curve for the exam.
If the if the if people are worried too much about it, we are going to curve.
And so again the exam itself is not to make anyone suffer.
It's just like a required by syllabus. And and also at the same time it's also a good time to refresh because you will talk about many things.
But by the end of the we hope some things are staying waste to you, at least for a few weeks.
So so that's a that's a purpose. And we also want to bring people more.
Way to add a to get an extra credit. So so so so so so suddenly.
This reminds me one of my friends showed me because he told me like one of the issues for the larger class is that,
you know, people don't want to raise their questions where they feel it's a bit embarrassing in many ways.
So. So he built this called open for feedback platform, and I'm going to use it on the, on the, on the informal basis.
And it should be actually standard as opposed.
It's very it's very simple. Uh, you may say you just open a website or cell phone or whatever.
Uh, you can use this 1912 as a, as a, as a code and, uh, to join in this course, it's fully anonymous.
And, uh, As long as there's a 50. So so once you so so so when you use it.
What will happen. So you will say. So so what happens is that, uh, so what happens is that.
Uh, sorry. What happens is that. I will say I will say people's people's feedback on the lectures too fast or too easy or whatever.
So that's a sorry. I don't know why.
It's a, uh, I don't know, you can try it out, but the hope the idea will be if at least the 3050 people are using this,
we're going to give the everyone extra credit 0.05 for the full score average every single lecture.
So we have another 4 or 5 lectures. Maybe at least we can give everyone another 2 or 3 credits.
Um, you know, as a way for showing whether we're making some progress in teaching.
So, so, so try it out. We can. We can. Uh. Uh, I'm not sure about anyone actually successfully opened it.
Uh, you just go to open for feedback. Uh, and there's a student, and there's a student logging.
You will see this, uh, you just put a, um, three.
Nine. Seven.
Two. Okay, so so with that in mind, anyone can just try.
For example, if you click, it's too fast or two to to too slow.
Maybe I will save some feedback here. I don't know, it's the first time I'm using this.
Um, but this. But when people are worrying about the midterm, this reminds me, uh, we can find some.
Yeah. You have a question? Think the code works. Oh, the code is not work.
Huh? It works for someone. But if it's not working for you, you can.
Three. Nine. Seven. Two. Do anyone want to just push a button on your cell phone or something?
Let me see whether it's a change or. You did.
Sorry. There's currently no class for this lecture. Interesting. Um.
I will give it one more shot before. Uh, let's try this again for the people who are not.
Two. Five. Two. Eight. Sorry. I think this is the early, earliest thing people are using, but, uh, um, but, uh, but I do have the recording,
so if you're in your mind, like, just click whatever button you want, so I can, we can say whether it's actually working or not.
Okay. Oh, sure. We can say it's great. Okay. It's actually interactive now.
Uh, okay. uh, I will, I will continue.
Um, sorry. It's interesting because, uh, this reminds me, when I was a student, I never asked any questions.
Uh, it's it's just like a it's a it's a it's a it's a it's a.
Yeah. I'm not blaming anyone. It's it's it's a, it's a lot of things.
It's very complicated. Okay.
Uh, we can continue the reviews and, uh, uh, after finishing the midterm reviews, we can, we can we can keep going on this.
Um. Oh, I think they also get some Q&A session, uh, in it so that, uh, so, so you can ask the chat room,
you can chat with each other potentially, if you want, or I'm not sure whether you people really like each other.
If you really want to discuss anything, it's it's it's your it's your choice I think.
Yeah. We open the we have the Q&A and the discussions whatever you want.
So before we even start, another separate thing that you know, a lot of, like when you actually brought down the aircraft.
And sometimes they have this within network games.
So which means you're competing. You can play games with the other passengers on the aircraft.
I think that's a very interesting idea when the network is a big issue.
But nowadays nobody is playing anything with with other with other passengers anymore.
Okay. Now we continue our review session. But any questions for the midterms?
Now is a very good time to to ask. And you can use the pencil ball pen, whatever you want.
And it's a paper bag and it's 11 pages.
However just you just like turning like A11 answer sheet.
That's it. Yeah I think please remember your USD ID so that we can write that clearly.
And. We may not actually.
And for the smaller class, I know people are checking whether you are actually yourself write check against waste or USAID.
I don't know whether we're going to do this for this course. There might be some sample things, but just come to class as yourself.
Don't don't find your twin brother or someone look similar to you to come.
And because you are very likely to do better than them during the exam.
If you're in the class still at this moment. Okay, okay.
We're going to continue our lecture. Uh, so so so basically.
Right. Basically, we stopped here, right. Like for the dropout. For the dropout, for the dropout.
You can you actually. Yeah.
I think one one, one slight bug I learned is that it's actually the skill is becoming weird after, uh, after this, uh, I would just keep using this.
But anyway, uh, so we talk about we talk about the the, the dropouts and then we talk.
We also talk something called the data augmentation. If you remember, when you we don't have a lot of data, you want to augment your data, uh,
through your images or through your images or through other things, uh, this including the cropping and also including other things.
So we're going to show you a few examples. For example, the augmentation are not universal for all the images.
For example, for a flower photo, if you do the cropping it's okay.
If you do this a flipping, it's also okay. You can also do some like a, you know, rotation that all looks okay.
However, it's not going to work well for the digital digit recognition. The reason is very straightforward, right?
The flower if you just like if you just do the rotation still a flower however
handwritten six to if you just do 180 degree rotation that's becoming nine.
So that would be wrong. So one question you need to remember is that not augmentation?
Not all augmentation can be used in other applications. It's application driven or dependent.
And another thing that we already talk about this in the very early.
So which means if your loss function are going to be good for both of the training and validation,
which means you're on the right track until the moment your validation loss becoming a becoming no longer decrease,
that will be the that will be the red flag. You need to make sure.
Uh, you need to stop there. And this will be the place you're going to save your checkpoint, which means your hyperparameters and other things.
Um, so so this is so this is a checkpoint.
Just the main the deep neural network for deep neural network.
You just you just keep training, and you have a lot of, like, checkpoints for your weight matrices, which means the snapshots.
And usually you want to stop at the moment where your validation error becoming the smallest and no longer and no longer decrease.
and you save the best checkpoints and, uh.
And usually that's that's you're down for the job. Um, past validation.
Right? Yeah. So so this is an example, which means if you keep training your, uh, deep models,
for example, this is your you have two things like this is the validation loss.
This is the training loss. You will see training loss becoming smaller and smaller and smaller.
But your validation loss stop at this moment.
So you get all the checkpoints from 1 to 8 for epochs, which means you have a eight snapshot of your eight snapshot of your weight matrices.
But you use the checkpoint five, which means this will be the best, and you restore epoch five.
Uh, not not Applegate. So so this is a so this is something you use for the validation.
Uh, however, in real world, it's a luxury to have, uh, to train a deep neural network.
So many of the times we no longer train any deep neural network, we're using something called a transfer learning.
So transfer learning just means you don't train from scratch. However you transfer useful knowledge or usually you start from the representation.
Learn from other data.
This is very widely used in image classification because you will see the fundamental features or representations of the images are universal.
So which means it's transferable. You can you can do.
So the typical transfer learning setup will be you have you freeze the early features
or later features from the already well trained models and you just retrain.
You add a new classifier on top of the this already well trained model just for classify for something new.
For example, you have a good features from the cat and dog image classification.
However, you just train a new classifier for let's say a car versus airplane classification.
So, so, which means you only train a small model other than train a full model.
Uh, so that would be the idea for transfer learning. So this is a typical transfer learning for a convolutional deep neural network.
You'll freeze most of this convolution layers, but you only change the last few layers for classification, which means you just train this.
And so this is so this is an old model from ImageNet.
And this will be you have some like a new data set.
You just want to train the last few layers but freeze this middle ones so that you can transfer the knowledge.
Right. But of course you can also only freeze the early features and also train the later features in the classifiers.
It's also working, which means you can also train a few a few layers here.
You can you can freeze any layers. You can also train any layers. It's also your personal choice.
Uh, so so here are some sample questions where we're saying, uh, recall that batch normalization already showed.
Which means in the in the evaluation mode, which means you use the training statistics,
which means you can say it's not already stored the running mean as full and run invariant.
That's nice. Which means this is calculated during the training process. You no longer need to recompute this.
And and then what's the output for the input of ten.
So uh, so actually so actually this reminds me one question.
What is the question I need to give you the definition of the what's a gamma beta and epsilon is.
Otherwise this question is not answerable because because because because this is a yeah I think I need to double check the other questions.
Because in the because this one is directly computable, which means you subtract the mean and divided by the standard deviation.
However, if I didn't define what the gamma and the beta or this question is, it's not actually computable.
I will I will double check this to make sure all the questions are well-defined.
And I will also instructor to that who are actually being the proctor to to to make sure all the definitions are,
are, are actually, you know, they can provide you the definition if you have a, if you have any questions.
Um, and also this is a question for the clipping of the gradient.
And you get the formulas and. You will you will say, you will say you just want to plug in these numbers.
Right. Like a gradient by means of the 1 or 1 one divided by the norm of G.
So we're going to show you the specific calculation here.
Uh, so basically uh, yeah.
Basically. Uh, so basically since we covered this, since we covered this, uh, sorry, uh, we covered this gradient clipping formulas.
So which means you still need to.
So I think one suggestion will be take down the formulas. At least we document in this review materials.
So and especially all these questions are a variation of the real exam.
So feel free to uh. Feel free to take this down uh, for the for the actual formula.
Um, right, right.
Um, yeah, I think I need to double, double, double check about this because, uh, because because there might be some formula which is missed.
Uh, yeah, I think I need to. I need to think about it.
However, the unfortunate part is that I already signed exams to to the to the van and to the printout.
So the exam questions are already there, but I will.
But again, if any questions you feel is not very well designed, uh it's okay again in the in the last three versions, nobody.
Nobody are worried too much about the exam scores and everyone's relatively happy.
But again. So I think it's this I think thinking this way, um, it's a, it's a, it's a universally challenging or simple for everyone.
And therefore therefore if everyone get a low score, we're going to curve.
If everyone get a high score, we'll just stay. Leave it, leave it at, leave it as it did.
So uh, so we will say when the results comes out, but don't worry too much.
Uh, so so the next part we're going to review is on this, the recurrent neural network for the sequential modeling.
So if you remember what are they. So basically uh, so basically uh sorry, um, I think we're going to use this.
So basically, uh, this is a sequential model, right.
Like you have a, you have a, you have a sequence of the input like a car on the maybe on the road.
The reason why we have the sequential model is because if you, trying to learn a separate model,
waits for each of the inputs, it's just like a you just need too much, too many hyper, too many parameters.
For example, if you have this long sentence with 50 tokens, then you need a 50 length model weights, which is very hard to do.
However different different the length of the sentence can vary.
So so. Therefore. So. Therefore it's not a.
It's not a wise idea to do this a position specific model weights because, you know, this may be too long or too short or something like that.
So that's a cool idea for recurrent neural network or for any sequential modeling, which means you're trying to learn a shared model weights.
So which means you just use f theta to to to to capture all the model with all the positions.
It's the same way to say the changing inputs and previous dates.
Therefore, therefore, even it's the same model weights, it's going to change along with the time.
So the example here will be. This is all the slides we're showing you that for for for the y1, y2 y3 and y4 even zero using the same theta.
However their state model are different. The state current state is different.
Their input x are different, so therefore the output will be different.
Theta is the same. However H1 is different, x is different. So that's why the value will be different as well.
So in this case that will be set 1234. Even the same f theta will make different hidden states and prediction.
So so no prediction will be identical. But one simple example here will be you can say even they share the same state.
Let's say the theta is just hold. And however because you're because you're Because your input data is different and other things are different.
Finally, you get different results like 203.
So because the hidden state at different states are different, at different positions are different, and also different inputs are different.
So that's why even they share the same way the result will be different.
However, one big issue for recurrent neural network will be the learning process.
You can see the backpropagation nowadays through this, through through through this a very long chain of the recurrent neural network.
They can become smaller and smaller. For example, let's assume they have this a universal .05 in the gradient multiplication.
So if you do this backpropagation through the time you will see it's a very long list of the multiplication.
If if all of them are very small, very small and very small.
Finally, finally, you know you are going to lose the you are going to lose the signal for the gradient updates.
You know, it's a very long backward backward, actually.
Uh, also need to store a lot of information. Uh, so so this is, uh, both of this part is very expensive.
So one part expensive is because you need to save a lot of intermediate results.
Another thing will be another part will be a lot of like signals which will be lost during the long propagation update.
So that's why. So that's why one idea will be just do this shorter span.
And which means you only do the back propagation for these three things.
For three for this three state. Or you do just for another three state.
And we will do the forward backward forward propagate forward calculation.
There's nothing changes. You still do this a full path. However when you are doing the gradient update you just can see that there's a local update.
Local update. Local update so you don't pass the gradient from here to here.
Therefore, you break the the requirement for saving a lot of intermediate results.
And you also don't foresee the the issue for for lost for for for for gradient advantage of vanishing gradient for something like that.
Uh the target is do the same. You just trying to use in the gradient history sort of a truncated so which means at least the last at least 46.
You only look at yourself. There's a local range. Uh, right.
So yeah, for worst can still cross the boundary. But your backward are going to stop.
Uh, so right. This is our. Yeah.
To to to to to do this smartly.
Uh, to do this smartly, we also consider to make this recurrent, to make the recurrent neural network a little bit more intelligent.
We'll try to add something called a memory on top of it,
which means we're trying to use something called a long short term memory cell, which means LSTM.
The core idea will be they have three different gates.
It's called a forget gate, input gate and output gate, which means it's always from 0 to 1.
So they actually work together to control whether to drop something from the memory, which means it's a forget gate.
So if it goes to one, which means we drop something from the network or input, which means we're going to write or keep some new information.
Output just means whether we output this information at this moment, uh,
it's more conceptual saying, uh, using this circuit together, we can control giving some new,
new data, whether we need to forget something or update something with the new information or whether we need to directly output something.
We didn't go in depth of this at all. It's more like a again, it's just conceptual.
They have a multiple such a gates to to to concurrently decide what to output, what to drop and what to memorize.
So so so so so so this is a so so so also also we also talk about this after the recurrent neural network.
We talk about the the transformer all the attention.
Because one of the reasons why LSTM or any are or other recurrent neural networks are not very good is because you need to do this.
Uh, it's a fixed state pairs.
And if you have a very, very long sequence, you need to actually understand when to memorize when to drop or something like that.
Uh, and you, you need to, which means you need to keep something in memory or drop something in memory.
This is not very efficient. And, a lot of times you need to compress the past.
So the transformer over attention is a smart way to do this.
Memory or automated? An automated way for the waiting.
But again it's a it's again it's a very conceptual.
So so we're going to show you some key concepts for the sequential models using the transformer over the attention.
It's again it's conceptual. Recall the sentence we're showing you the dog chased the ball.
And each of them, if you represent each of the tokens with some embeddings it will look like this.
And let's assume this is some like a representation or learn vector or the feature values of the token.
However, however, however, even for the same token, if you swap their orders like a dog bites man or man by dog, whichever, whichever really happens,
or maybe both, you can say you can say if you only know the representations, it's not sufficient because these two standards.
They have exact same representations, but different orders like the identical,
different identical words in different orders just mean totally different things.
Very different things. So therefore we need to actually understand their position.
So it's called positional encoding. So that's why for this transformer attention they added the positional encoding to the to the model.
So so basically the representation will be two part. First part will be the the actual actual representation or embedding dog.
It's a dog right. Like it's here. And then you add this a positional encoding which means at position two this is the position five.
So that will be the positional encoding. So dog and position two and the dog at position five.
That will be totally different things because their positional encoding will be different.
Even their word vectors are the same. So therefore. So therefore.
So therefore using this, uh. So using this approach.
Uh, so using this approach, uh, you know, each of these tokens are represented as a combination of the word vector and the positional encoding.
And then why is this why this makes sense is because then when you have some new generation,
you can try to you get a context from other tokens to resolve its meaning.
So, so basically when we're generating this, the dog chased the ball.
Eat something. This eat. The next word depends on what does it mean right?
Like does this mean a dog or does it mean this the ball. And however this what does this itself mean.
Uh, also depends on the context. So that's why they got this, uh, something called attention weights.
So basically giving this new word, uh, giving this new word, uh,
we can automatically calculate how much relationship or how much the order resource, how much each of the stores can contribute.
For example, the dogs give a, dogs can contribute more and the bulk contribute a lower, but all other words are even lower contribution.
So in this sense it is more likely to refer to a dog or something like that.
So basically this a attention weights can be computed directly from the from your from your word vector plus the positional encoding.
So that would be the attention weights.
So the context for it will be the weighted sum of which means attention weights times the attention which times the representation.
Again, this attention weighs just mean how much each value vector contributes to this current context.
So which means giving the next word generation a different words contributed differently.
This will. This will impact what will be the next token generation here.
Um, so there's a very simple here.
Here are some very simple, uh, illustration, which means, for example, if I, if we give you a little,
uh, some tokens and we tell you each of them contribute certain attention weights like 0.0, 2.0, 3.05.
These are value vectors. And you just simply do the, you know, a scalar product, which means .0201.5.06.
So you can just drag things. So finally the context vector will be this thing summed up.
So which means point zero, 2.02 plus 1.5 plus 4.5.
And that will be you know it's straightforward I'm not going to rate it out.
Uh so then this 6.22.6 will be the context vector for the next word generation.
So the the dog barked, then the next, you know, context vector will be this 6.22.6.
So that's a very simple calculation.
And this is even simpler if you just like to do this one dimensional, it's even actually this, it's a it's a it's the same thing just like the,
the first dimensional, uh, you know, decomposition to show you to, to calculate for one dimensions.
But there's no big thing for the second dimension.
Uh, but of course, when you are doing the generation, you can you should never show the future words, right?
Otherwise, there's nothing you need to generate at all. Uh, when you when you're when you're doing anything like that,
you can you should never sing the future tokens because that's what you're trying to predict.
Otherwise, there's no it's not meaning for it's not meaningful at all.
And, uh. Yeah. Therefore, you just like a cape.
You know, as you can say, when you are making a prediction, uh, at this stage, you have the contacts from this first two tokens.
And then when you are making a prediction here or here, you got a, you know, the context from the first five tokens.
So basically you just got, uh, the future positions for the prediction should be hidden.
However, you just got more more context and more context each of the time you you recalculate the context.
So in short, this, uh, sequential model, just like based on the context, predict for the future.
So that's why the future should always be hidden from it.
Um, so, so in short, uh, this the sequential model or, uh, sequential model or this transformer or attention.
Basically, you need to remember three major things.
One thing, this, uh, positional encoding, uh, tell you a tell you like a okay, besides the word vector, What's the what's also.
The position should also be encoded and add them together. That will be your final token embedding.
The second part would be make sure. Make sure because you're predicting for the future you shouldn't show your future at all.
So you need to make sure which actually visible to your prediction.
You should never use the future tokens to predict the future because you're predicting a future, you should just give the ground truth.
And finally, the tangent wait is automatic, which means each when you calculate the context, how much of the current, you know, token contributes.
So that would be the three major things. And and right.
Yeah that's the same layer node chain between rows right.
Yeah. It's more like a conceptual sense. And feel free to read after it.
Yeah. And you also after you get this context Usually you need to add some,
like a multilayer perceptron layer so that you can combine different features together.
It's just just like when you're doing the convolution convolutional deep neural network.
Finally you also add a few like there's a fully connected layer so that you so that you combine the information.
So doing this sequential attention based learning is no different from the convolutional deep neural network.
You are just like trying to get some extract some features and then go through this deep channel deep neural network.
Learn the feature combinations. That's it. So um, right.
So there's, uh. What else? I'm just trying to say whether I have some, like, good questions to, uh, to.
Yeah, it's it's it's just like showing you that sequence, right?
Like, the dog chased the ball, and you have the transformer blocks and you have this context and you predict what's the next word, choose it.
So basically you get it here and then you go through the process again.
You get the next word generation. So basically you just append update your update to your the transformer blocks will process the new context.
And then you predict through you make the prediction and then choose the next token.
So basically that's why it's still, you know, a sequential model.
And because it's actually depend on something. Um, right.
One good thing. Why is this, uh, why is this, uh, attention or transformers are very good nowadays because unlike RNN,
you need all this, uh, all this or all the, uh, you know, previous state to make the.
For example, if you recall that for RNN, you need the dog, then you get a dog back and then you get a dog.
The dog chased back to the next one. So which means it depends on each other.
However, for Transformers, because their architecture, you can't do this parallel training.
At the same time, you can learn the using the generator dog, the dog generator,
chase the dog, chase the generator, the the the dog chased the generator.
But you can at one time you can learn all the combinations altogether in the same architecture.
So that's why it's fancy. Even if even a single sentence. You can, you can.
You can learn from the first token. To generate the second token, generate a certain token.
You can learn all these pairs, uh, one shot. So that's why it's a parallel training.
Everything's a parallel. However, if you do the vanilla RNN, they are not having such a great feature.
Um, right. You can say that's why when you have the input positions and a lot of input and the target is the dog,
so you're going to use a Z to predict the dog, using the dog to predict the branch.
So you can train all these things at the same time. And maybe the third one will be the dog something.
So basically, uh, because everything sort of, uh, you can train everything in parallel.
Uh, so that's, uh. Uh, so that's why, uh, so that's why the transformer is very efficient.
But overall, uh, where the cases were mentioning here is that recall you have a positional encoding.
Uh, you need to hide the future tokens. And finally, uh, and finally the third one is, uh, what's the third one?
Uh, sorry. The short time short memory span also hits me as well.
The third thing, oh, the third thing is automated is attention weights.
So each time when you add a new after you generate a new token, you need to recalculate the context, uh, using the attention weights.
So, uh, so that's why it's, it's just like, just keep adding the token, adding the generated result to the context.
And, uh, update your prediction. Update your prediction. Uh, so so, so, so importantly, you can say this is for real generation.
So this is not training. So this is a real generation. Your real generation is still token by token.
So that's why it's still autoregressive, which means you couldn't simply generate the one sentence directly.
You are generating token by token. However, the fancy part for the transformer and attention weights will be the training.
So which means which means you can train all these combinations at the same time.
So the training time you have all the results, you have the full sentence. So you can build multiple training pairs.
So during training you can just do one time and that's great.
So so but but still in the generation it's still token by token.
It's not a it's not a it's not a it's not in parallel.
So that's a one thing to remember. So the question associated with is a position a causal mask will be a text model.
Use a position vectors and a causal mask which tries to explain the different roles uh position vector not block the future tokens.
Right. They just tell you that the causal mask actually blocks the future future tokens.
So, uh, so basically tell where each token position, tell where each token is and causal mask block says to the future that that will be answered.
Again the conceptual question is very simple. So as long as you remember, uh, what are they?
You should be, you should. Many of the questions are just like at this, uh, difficulty level, so you shouldn't worry too much.
Um, and the last piece of the review will be on this graph and the graph, deep neural networks.
Uh, so, uh, so recall we have this, uh, when we're defining the graph, uh, you have multiple nodes and each of them got some attributes right.
Like for example, if this is a road, if this is a road network, you have a, a, B city for different nodes.
And each of them got some values here.
And and therefore and therefore, uh, therefore, uh, if you can say that this is a node A, the neighbor B and C got a two and a four value.
In the original slides we talk about, for example, this is more like how many cars on each of the roads.
And you can, you can, you can, you can do some calculation.
And the, the core information we want to if you remember that one central formula, the update of the neighbor a sorry,
the update of the node a it's a it's a it's actually bring the information from neighbors into the update.
So so when we are updating node A we we not only update node A alone, we also update the.
We also use the information from neighbor B and C. Uh I'm not sure whether we have the formula here.
Uh yeah I think one one limitation I think one limitation,
for one limitation for these slides will be certain big formulas are are not fully included, for example, in my personal view.
Maybe I will say I will say the one, the one used for sorry, the the one used for the one used for formula may be oh, maybe this one, right?
This is just to show you that, of course, we will never ask you to plug in things into this,
but the one important equation will be the embeddings of the node V depends on itself, are dependent on itself, and also depends on its neighbors.
This this this enumeration through all the neighbors in its neighbors that its neighbor set of V.
So which means this is our neighbors for all the neighbors they are, their embeddings are contributing to node V, and also depends on itself as well.
So this is something we're trying to, uh, highlight here, which means, uh, if you have this for the layer zero.
You have the for node A, B, C and D, and the total update will be showing you that you are using half of the own value.
For example, for a the half value will be 0.05 and half of the neighbor means so which means a b b, c d.
Either two plus four plus eight is equal to 14, and half of the mean will be six.
So that will be 005 plus six. That will be 6.5 or something.
So that will be uh I'm not sure whether they got a calculation here, but I think that's what we're trying to show you here.
So basically the example will be a read from B and C.
Right. And the neighbor min will be two plus four.
The two neighbors divided by two equal to three and a equal to 0.05 of itself, which 0.05 times one plus .05 times three.
Then got an update of the two.
So that would be the idea for this neighbor update, which means the update of the A depends on itself and not depends on the neighbors.
So that will be the simple, simple things we're trying to show you.
And so this is the this is the one hop neighbors.
And then after the updates. So after updates you can say A1 become the A1 become the become two.
Right.
Using the same formula your B and C are also get updated as well because B depends on A, so which means B also needs to be updated using the formula,
which means it's a .05 times two, which means it's one, and then 0.0 0.50% of the neighbor, which is one.
It's also 0.05. So which means maybe it's 1.5 or something.
So yeah. Which means your B is a 1.5. So. So basically it's more like moving from these slides to this slides.
Your A, B, C, d all got updated based on their neighbors. So you got a you got a, you get a result from the from the neighbor.
So here's the here's a detailed calculation.
It just shows you that in the graph you get you update your model node information based on your yourself and your neighbors.
Uh, it's just like some simple, uh, calculation. But I think most people need a calculator here.
Uh, so so let's actually bring the calculator. Uh. Uh, I think people also ask whether a certain version of the calculator works.
I think it's totally it's totally okay. I mean, even it's very fancy.
Uh, we're not going to be, uh, it's not we're not going to be very ridiculous that we're not we're not going to,
you know, uh, to be crazy for checking if it's too fancy or not, as long as it looks normal.
That's okay. Um. Uh. Uh.
Right. It's just more calculation if you want to check it out. You can. But, like, unlikely.
We're going to do too much of this calculation. We're just going to show you the major concept.
So which part of the update can actually learn? This includes a few things, right.
Like the first thing is that the neighbors neighbors information.
Basically you take the average from the neighbor or the sum of the neighbor.
You also take some information from yourself. That's the node information.
And you also, uh, but the shared model weights are something critical here, if you remember, uh, if you remember.
Sorry. Where this uh oh, here we go.
So remember, we have a model with BK and w k. This w k is a model with control.
How much information you are going to. Uh, you're going to learn from your neighbors, and this is a big discount to how much you are.
How much about yourself information are going to be used here.
So so this means so which means this this this the two weights are shared parameters.
Um and what else. One layer and two layer use different.
Yes. When you are using more layers you are going to do more, uh, you know, combinations from the neighbors than this is going to be a cascading.
Um, and also one thing to remember is that the, the neighbor orders in deep in graph neural network doesn't matter if your neighbors are busy.
Or maybe it doesn't matter because we're using some like invariance, uh, functions for it.
For example, the mean of two and four are are three and the mean of the frame two are also three.
That doesn't change anyway. Uh, so we're using some invariant functions to actually, uh, process your neighbors.
So it's so, so, so the other of the neighbors doesn't matter.
And you also want to make sure there's something called a equivariant of the graph neural networks.
Which means if you change the the your your node orders, the output should change accordingly.
For example a, b, c, d, db state. But the output will actually change along with the along with your order.
So the d and d is the six and six. This will be still be the same.
Um, right. Yeah. This also so so which means combining this invariance along with equivariant you
will see for the whole graph output is still invariant which means your order is a,
b, c, d or d b c AC. Doesn't matter the when you put everything together, it's still the same thing.
That's it. Um, okay, I, I do I have a more useful things here.
What can be a very wrong. It's.
Yeah, it's just like a more, uh, it's just more illustration showing you that usually we're using this in various pulling functions,
which means the summer mean, which means the order doesn't matter. It's ABC or BSE or whatever the summit means are the same.
So that. So that doesn't change your final output of the graph.
Um. Feature order in a trend graph.
So this is a sample question. Right.
So when you train a graph neural network, uh, atomic numbers charge a new molecule, give you charge and atomic numbers node learn node IDs.
What should be done before using the frozen model.
So you can say so you can say, now, uh, what really happens is that, uh, your features, uh, feature the columns of the feature swapped.
So which means this is, let's say feature one and two. This is the feature 201.
They just swap the number. There is no node IDs, no change at the node change because the feature vector which is due to.
However, what should be done before using a frozen model?
The frozen model is trained on this. This this feature order.
But now you have a new molecule. Have the have the different feature orders.
Then what should you do? Of course it is wrong because your feature vector already already is different pattern node to match the training model.
Of course this is not the right way. Restore the training features, order and definition before planning the shared weight.
Three other awesome features while leaving the adjacency matrix unchanged.
Personally, if I can guess our guess I will choose from C or D, but let me read them more clearly.
Restore the training feature order and the definition before applying is sure.
Yeah, I think if if I were the student, I will choose the C because Um, I don't.
The adjacency matrix, uh, are not very critical here.
Yeah, I think I think I got 50% of the chance here to to make it correct.
Yes. So basically again the questions are also this straightforward ones, which means if you can guess,
you'll get a very high chance of because many of the options are obviously wrong.
So you can you can drop it out. Uh uh.
So so so the reason why the adjacency matrix doesn't matter or doesn't work here is because,
for example, if you have the other node other like a, b, c, d,
and then uh, for example, you can say a and b are connected a and c are b and a and a and b and c are a and b,
c are connected and a b is connected with A6. Connected with C, uh is connected with C, and d is connected with c.
So that would be with a a b c a.
Uh so that would be actually Um. Sorry.
Uh, a b. Yeah, it's actually this graph, right? Like a b c d.
Which means that that will be the. That'll be the graph. And, uh.
However, if you just simply change the order a bit DB it's, it's still the same thing.
Uh, which means in that sense, if you just, like, rename it.
Uh, but let me double check, uh, which means, uh, C and D are connected, and uh, B and A are connected, A and B are connected.
And this is connected with DNA. So so basically C is a c become a new a.
So this is a c and c is connected with the a and d.
And so which means you just simply swap the uh the name of the node.
But you will see the adjacent matrix will be will be, will be different.
So uh, this may not be straightforward, but let me maybe I can quickly draw this.
Um, yeah. I'm not a personal fan for, uh, using the using the board.
Uh, b a. B c d.
So a and B are connected, a and C are connected, and the c and d are connected.
However, when you read when you read from this, uh, this new adjacency matrix, you will see actually C and D and a C is connected with both D and E.
So it's very likely. Uh, now this is a C.
So we'll just call this C. And uh you will see this connected with the d d d is only connected with C.
So which means this is this is d and another one connected with the a.
Right. And uh this will be b.
So so so basically you will see A, B and A are connected.
So this is right. And C and D are connected.
This is also right a connect to B and C this is also correct.
And then finally uh you know C connect to connect to D and D connect to DNA.
So so basically we'll say we just like to relabel it from BCD to DC AB.
It's the same graph. But uh but the adjacency matrix becomes different.
So that's why for this question, for this question, uh, you know,
you couldn't leave the adjacency matrix unchanged because maybe, maybe different labeling can give you different results.
So that's the so that's the only reason, uh, I'm not sure whether I don't recall exactly whether we have such a question, but, uh,
just give you a sense that adjacency matrix are not fixed when you change the label ordering,
However, but in this question itself, we're only saying you change the features of the input.
So so basically. So basically we're saying you have the feature space attribute here, right.
It's a one of them is number and another is the charge.
So but for your new graph maybe you have the charge and the number.
You just want to swap the feature. But and but but your adjacency matrix will become different.
So that's so that's why a question questions the um makes more sense.
Um what else? Yeah.
It's the rest of things are still are also very similar.
We're just saying when you have more layers, uh, the deep model just got more layers, right?
Like you, for the layer two, you need to integrate aggregate information from the front, from the neighbors,
and then each of the neighbors also got their integration from a combination from the earlier layers.
It's just like a recursive recursion. So that's why, you know, it depends.
The layer two eight depends on a, b, b also depends on layer.
The earlier layer of a. So it's more like a. It's a it's a recursion thing.
Um um how far information travels.
Right. So that's why when you have a more layers of the graph neural network, you will say information becoming a point out to each to themselves.
Uh, you know, because it's, uh, information from Z to go, to go to go to go to Y first and then after.
So they actually just like a point at point at each other, as you can say, you know, it depends on A and C depends on.
Uh, so finally if you just do if you just do a lot of like layers, finally they will also depend on themselves as well.
If your network are not very complex or very dense.
Um, and this is the example we're showing you that for the same order, for the same graph, you can simply change the order.
You can simply change the different order order index. But by the end of it it's still the same.
It's still the same graph. And therefore therefore certain things should be kept.
Um, I'm just trying to say whether whether, um.
Ah, I think this is a good question. So which I think we have this question also in the last year exam.
Right. Like which function ignores the input order.
So which means we're going to show you a few things, which means uh, if for your X for, for whatever.
We're just trying to show you that. What what if you just, like, change your x1, x2 and x3 x4 x, which will not change.
So clearly this is wrong, right? Because it's not a.
They have different factors. So if you just change. X1 and x2 you know clearly this will be different.
But for value function recall that's a zero or itself.
So. So with that in mind, if you're any of your function, if any of your input is smaller than zero, what will happen.
Um, let me let me think, think think about it.
For example. Oh, for this type of question one, one good thing is that if you don't know how to answer you, just try a few combinations, right?
Like for example, ReLU is very sensitive to zero.
So you just you just like let your X123 becoming let's say negative one, negative ten 100.
And then you try another version. Let's say 200 Sorry 100.
Negative one and negative ten. And then you plug it in to say whether they're going to be the same.
I think in this case for example, uh, for, for for the top one, this will be zero zero and 100 and the bottom one will be um, 100 and zero and zero.
So look like it's actually invariant to the order. So which means if that's the case, I will I would potentially just choose the a choice uh, a right.
Right. So it's a it's a way you can you can try it out if you don't know how to do it.
Just like even you even don't need to remember. Just try something out.
That's it. Uh, so there's nothing very challenging the question.
Um, finally, how to how to study these ideas?
Um, I know there's a lot of, like, pages. But, but but very, very likely all the practice exam,
all the practice questions in the review slides will be at least the variation of
them in the in the real midterms and the last year exam also are also a good source.
Um, bring a calculator that will helps. Uh, what else?
Uh, I think most important part is that if you feel it's easy, it should be easy for everyone.
If you feel it's hard, it's also hard for everyone because you are the person who actually stay to the very last of the presentation.
Sorry, I haven't finished because it's still early. You have another 25 minutes at least.
Uh, so. So here's the choice. We can choose to cover another, uh, short block.
Uh uh, I think that would be a nice idea.
Or. But people are just. Ah ah. Just what?
Uh, actually, you can use this, uh, you can actually use this, uh, open for feedback to to share your feedback.
Whether we should, uh, if you think we should.
Uh, yeah. It's, uh.
If you choose, uh, to sample. We're going to potentially finish the course.
Otherwise, if you choose too hard. We're going to, uh, cover a little bit more on the blog, but I'm not sure what last and not clear here mean.
Uh. Uh. Right.
I think there's a at least for now, it's, uh, increasing majority.
Uh, I think actually a few people also saying too hard.
So. Which means that what I can do is something like this for the person who are down for today.
Uh, you're also you're you're afraid to stay or whatever.
Otherwise, I can cover a bit more. I don't know. Like, it's never.
It's never a easy question. Um, what about this? Let's do let's do a trade off.
I can I will do another ten, 12 minutes. So just do 12 minutes and then everyone is done for today.
I think that will be a little bit more fair so that you you don't just leave now, but you don't stay for another 25 minutes.
You just take. You just finish. We're just finishing in half of the 25 minutes.
Uh, because after this, the fundamental after the after the fundamental lecture, we're going to cover more advanced topics.
So which means these are not something, uh, these are not something, uh, these are not something, uh, you know, very critical.
It's more like an optional things you want to know, especially during the, during the interview.
Uh, may not be the interview because most of these are more like a research driven, but it's also a giving you some insights.
So today we're going to talk about this contrastive learning and self-supervised learning again.
So but any questions for the exams actually before we even move away from.
Yes. What's that material in blocks one through eight.
I think one through seven. So so I think block I think block eight is uh, sorry.
Uh, block eight is already generative. No, we haven't said about block seven.
I'm sorry. We can't do anything about block eight. It's just one, two, seven.
And again, for most of the research topics in this, uh, seven blocks, uh, you don't need to worry about it at all.
It's a it's not going to be covered at all. Or any other questions for exams.
Okay. Perfect. So so so so to conclude today's lecture we're going to talk about some new thing.
One thing is called a self-supervised learning, which is highly related to the large language models.
So why suddenly we can do this fancy model? It's where where do data comes from, right?
Like in the past. Why couldn't we do this? So actually the wisdom there's a there's a there's a this is a controversial people don't
agree always which means whether lots of data can give us the intelligence or wisdom wisdom.
So however for now we think they're give us give us something.
So so what are self-supervised learning?
Which means you don't really have the label, but you just train or you just pretend there's a part of data you don't know and trying to learn that.
So this is a this is a this is a one figure one of this training awards recipient gave seven years ago during a keynote.
So what it means is that, uh, what what we were doing, uh, you know, the fancy part of the reinforcement learning is just cherry on the cake.
And because, uh. Because it's because there's just a few examples.
The supervised learning. It's just more like icing. Of the ice cream.
The reason is because you really don't have the luxury for supervised learning.
Supervised learning doesn't mean you really have the pairs of the data, right?
Like a the some like patterns and the stock price, uh, you know, the weather index and the actual value.
So which means the pairs of the information, usually we don't have such a thing.
It's a it's a too hard to get. What he said is what he said.
Right, is that most of the data we have is this self-supervised data, which means it's actually the cake itself.
We have millions of this. So, so one good example for so, so one good example for self-supervised.
As we mentioned large language models will be the sentence. For example you have a sentence.
You can let's say a target can come from the input itself.
Uh this is actually already a training data, which means you can use a to predict the target a target to predict the can.
So usually you have a sentence you are going to cover part of the sentence to predict the missing part.
So this is self-supervised learning because you don't really create a new labels.
But the data itself create give you the label, including using the a few tokens to predict the next one, or using the full sentence as an input.
However, you cover the middle to to recover the missing token.
This is also a self-supervised learning. So, uh, so so also this this happens to the images, right?
Like for example, if you have an image but you don't have, you don't know it's a cat or dog.
It's also it's also okay. But you can try to learn something, which means you can mask image for a patch and try to recover the mask part.
So this is also something called Self-supervised super self-supervised learning because you don't need additional external information,
you use yourself to actually learn something. So in the past we already show you some.
Some of this so-called pretext. Pretext task, which means giving an image which is like a crop cop.
Half of it. And you just do some rotation, you just do some colorization and, uh, so, so,
so you don't need additional information, but you just do some operations on top of the existing data to predict.
So. So this is a so this is a so so so this is a very brilliant idea because in the past we
always worried about we don't have enough labels or data to for for for making the predict.
I don't know why we have this here. It's weird. Um, actually.
What's this. I don't know, it's old slides where I have no idea where we inherited.
But anyway. Um, So pretext task can predict transformations, image, text, match or missing pixels.
Uh, so so so so so so so.
It's also very nice because for this self-supervised self-supervised learning method, you you actually have your you can do this evaluation yourself,
but you really don't care about the performance of the self-supervised self-supervised self-supervised task.
The reason is because just like if you remember last time we talked about autoencoder,
you you input some image, you try and go through some autoencoder in the middle.
It's the compression. And then you try to recover it and you try.
You just try to see how we can learn some good representation of it.
But you don't really care. But usually you use the autoencoders representation for some downstream task for prediction or classification.
Similarly for for self-supervised learning tasks,
usually we're just trying to use this image or text or whatever the internal information to learn some good representation,
but we usually evaluate the learning feature a feature on some downstream target task.
So one example here would be you have a lot of unlabeled data. You you do some self-supervised learning.
You learn some very good representations. And then and then this is the first step.
And then you put it into some supervised task for example.
This is a small amount of the label you really get. Let's say you add some like a linear classifiers and then you can do some evaluation.
So it's very so so that's why this is so that's why if you, if you,
if you know a bit of the large machine models, the first step of this is called pre-training.
The pre-training is just a self-supervised learning which means they just pre-train themselves on a lot of like text information.
They're not actually looking for perfect results on a lot of things.
They're just trying to make sure they can learn the good representations of the text.
That's it. The pre-training. That's that's the purpose. And then usually after the pre-training stage.
So so. So if you know a large model they have this pre-training post the training RL and the STF many things.
The pre-training part is just like they have a lot of like a human language or whatever language.
They're just trying to do this self prediction and they're trying to learn a good representation of the text.
And then the post training is usually supervised, which means you have a set of the human preference.
You have some you have some pairs of the data saying given giving this input, what would be the output target?
Uh, I'm not sure whether I can find a good figure here to show you a.
Pre training and post training.
Then hopefully we got a, uh, hopefully I can get one.
Good, uh, one good. Uh, yeah.
Right. So I think this is a good thing to show.
Uh, so so we talk about self-supervised learning, which means actually this corresponding to this pre-training stage.
So they're usually just trying to learn some good internal knowledge.
However the poster this is usually unsupervised which means they use the tags to predict next token missing token or whatever.
And the next step will be the post training. In this step.
In this step they do this supervised fine tuning SFT.
They also trying to align this pre-trained model along with the human feedback because so so basically human human got some preference.
And therefore this may not necessarily fully align with the original unsupervised learning representations.
And so that's why. So that's why they got this pre-trained and pre-trained.
And you know a poster I'm just trying to say whether we have a better figure to show you a bit more information.
Um, sorry. I don't know what happens to this, uh, figure.
It's just purely just weird. Um. Um, anyway, I think we're going to recover the pre-training and the post training, uh, later, but,
uh, but but but again, what we're trying to say is that this is a this is a brain training state.
This is a this is a self-supervised thing. It's actually used for a lot for this, uh, large model pre-training and, uh, and, uh,
and therefore, uh, again, so how to do this, uh, self task, self-supervised tasks.
Right. You need to first, uh, create some self, some of this so-called pretext text,
which means you can predict certain things, internal information from your data.
So one thing would be the you can predict the rotation angle.
So so so so then you you have this original images and you do your, your own rotation.
So you exactly know how much rotation happens to your image. For example, in this case that will be 90 degree of the rotation.
This will be uh this will be 220 70.
The reason because by common sense, uh, the bird is standing on the tree.
So, so we're actually doing a 90 degree rotation.
By learning this mapping or relationship, you are learning something deeper in the image and also the common sense.
So that's why it has something called a visual common sense. That's why the rotation degree may be predicted.
But you can say through this process you create a you don't need to do any human based label, right.
You just got images. You just do the rotation and you record the number of the degree of the rotation.
And so that you can build a model to say whether I can predict the rotation perfectly.
So that would be one example of this. So what happens will be you have these original images and you just do a multiple rotations to itself.
And for example, if I go to y equal to 0123 which, which a corresponding which is corresponding to different number of the rotations,
and then have the rotated images,
and then you're going to go through some convolutional convolutional deep neural network and do some loss function optimization.
So basically you can say the only just do the rotating and rotation.
And the model can learn how to predict which rotation is applied in this four way classification.
And you can you can you can. So you can say so you can say using this a fully supervised classification.
You can say the you can say the test accuracy increase like this when you have more training examples.
However however for the self-supervised training. Self-supervised learning.
Even with a very limited number of training samples, it can already achieve better performance than the fully supervised.
The reasons? Because there's a lot of internal visual commonsense you can explore from the data.
Even you have no labels or limited labels, so it's more efficient.
Finally, it will converge, right? Like if you have the label, the data is always the golden rule.
But this self-supervised learning can give you a very good starting point.
So that's why for the larger models, the important part will be this pre-training.
It doesn't mean you can replace all the post training using supervised learning,
but it just means you can give you a good start to learn something like internal features,
where the important representations of the data like it's more like a great warm, warm, warm warm up or very good starting points.
So that's the meaning for the self-supervised learning.
Uh, they also, uh uh, but I will just keep my promise, which means I will.
I will stop sharply at eight so that people's voting still makes sense.
I won't be here for the next next week. And we have the proctors and uh, uh, but uh, but I will potentially there will be a zoom in to, uh,
I'm not sure, but we will say you may not see me or you may see me, but hopefully, uh, you are good.
You are good. Here's a paradox. Like, if everyone got a very good, very good grade, which means everyone got a reasonable okay grade,
which means everyone got a bad grade, which means, you know, it's the same thing, right?
But at the end of the day, don't worry about the grades. We're going to make sure the learning is more important than grading.
And yeah, feel free to post on Piazza for anyways.`;

const CONCEPTS = [
  {
    tag: "📋 Exam Brief",
    title: "Everything Confirmed About the Midterm",
    body: `This was the last session before the exam, and he answered every logistical question. Consolidated:\n\n<b>Format.</b> 50 multiple-choice questions. Two hours. The paper is <b>11 pages</b>, and you hand in <b>one answer sheet</b>. Bring a pen or pencil. <b>Write your USC ID clearly</b> — he asked for that specifically.\n\n<b>Scope: blocks 1 through 7.</b> He confirmed this twice, the second time answering a student who asked whether it ran through block 8: "I think one through seven… block eight is already generative… It's just one, two, seven." He added that research topics <i>within</i> those seven blocks are also out: "for most of the research topics in this seven blocks, you don't need to worry about it at all."\n\n<b>Difficulty.</b> Roughly <b>70% fundamentals</b>, the rest more challenging. On timing: in past years most people finish in an hour or less, and he noted the fear comes from not knowing what's in it rather than from the paper itself.\n\n<b>Calculator: bring one.</b> A basic model. Square root is worth having, for the normalisation questions. It must not connect to the internet, and nothing too elaborate — proctors will look. He was asked to specify a permitted model and declined.\n\n<b>No smart glasses.</b> He described a student presenting through AI glasses with a control ring, and said proctors will be at the front and the back of the room.\n\n<b>They will curve.</b> "If everyone gets a low score, we're going to curve. If everyone gets a high score, we'll leave it." Said twice, unprompted.\n\n<b>He will not be there.</b> Proctors run the exam; he may join by Zoom. If a question looks under-specified, ask a proctor — he said he would brief them to supply definitions.\n\nExam insight: this whole card. The ID, the single answer sheet and the calculator are the three things people forget.`,
  },
  {
    tag: "📋 Exam Brief",
    title: "The Three Revision Artifacts, and Permission to Reverse-Engineer",
    body: `More useful than any individual concept, and easy to miss because he said it in passing.\n\n<b>1. The sample questions are a real exam.</b> "The sample questions I gave to you is a real exam last year." Not a mock — the actual paper. One caveat: last year covered slightly less material and was "slightly more narrative" in the first few blocks, because this year's syllabus changed.\n\n<b>2. The review slides' practice questions are variations of this year's real questions.</b> He generated them by asking an agent to produce variations of the actual exam questions. His words: "all the practice questions in the review slides will be at least the variation of them in the real midterms." He also described building the paper the other way round in Lecture 8 — designing questions first, then back-propagating through the material — so the slides and the exam are tightly coupled.\n\n<b>3. He explicitly endorses reverse-engineering.</b> Asked whether students could combine the review slides with last year's exam to work out this year's questions, he said: "we don't prohibit anything for preparing it… and if your AI is smart enough, maybe it can also even guess what will be in the exam." He suggested feeding the review slides and even the lecture recordings to a model to find where the emphasis sits, and using it to condense rather than printing 200 pages.\n\nSo the efficient revision set is small: last year's paper, the review slides' practice questions, and the formulas. He twice recommended <b>writing the formulas down</b>, noting that a few are missing from the review deck — and that the questions are built around them.\n\nExam insight: if you do one thing with the remaining time, work last year's paper and the review-slide variations. Everything else is secondary.`,
  },
  {
    tag: "🧮 Drill",
    title: "Pruning an Overfitted Tree",
    body: `A worked question, and representative of the fundamental 70%.\n\nThe setup: an unpruned decision tree has <b>zero training error and high validation error</b>. You prune it, selecting the depth with the lowest validation error, then evaluate the selected tree once on a held-out test set. Which statement is correct?\n\nHis method, which is worth copying: <b>read the answers before re-reading the question.</b> Zero training error with high validation error immediately tells you the unpruned tree overfitted, which eliminates options fast.\n\nThe four claims and their fates:\n\n"Zero training error means the tree will generalize well" — false, and it is the diagnosis of overfitting inverted.\n\n"The pruning depth should minimise training error" — false. Training error only falls with depth, so minimising it just returns the unpruned tree. You select on validation.\n\n"The selected tree can still have non-zero test error" — <b>correct</b>. Low validation error never guarantees zero test error. Validation estimates test performance; it does not determine it.\n\n"Choosing the depth on the test set keeps the final estimate unbiased" — false. Selecting against the test set is exactly what biases it, which is the leakage rule from the first review.\n\nNotice the shape. Three options are eliminated by a rule you already know, and the surviving one is a statement of appropriate caution rather than a calculation. He said most fundamental questions sit at this level.\n\nExam insight: validation selects, test reports, and low validation error does not promise zero test error. The elimination order is the transferable skill.`,
  },
  {
    tag: "🧮 Drill",
    title: "kNN for Regression — Average, Don't Vote",
    body: `A small but genuinely catchable trap, because every previous kNN example in this course was classification.\n\nThe question: unweighted k-nearest neighbours with <b>k = 3</b>. The three nearest neighbours have target values <b>2, 5 and 11</b>. What does the model predict?\n\nIf the targets are <i>numbers</i> rather than class labels, this is regression, and the prediction is the mean:\n\n(2 + 5 + 11) / 3 = <b>6</b>\n\nNo voting happens. Voting is what you do when the neighbours carry labels; averaging is what you do when they carry values.\n\n"Unweighted" is doing work in that sentence. It means all k neighbours count equally regardless of distance — the nearest neighbour does not get more say than the third nearest. A <i>weighted</i> kNN would weight each neighbour by its proximity, giving a different number.\n\nThe classification version from the previous review is still examinable and still works by majority vote: neighbours ordered purple, purple, orange, orange, orange give purple at k = 1, purple at k = 3, and orange at k = 5.\n\nSo read the neighbour values first. Class labels mean vote. Numbers mean average.\n\nExam insight: this is the easiest kind of mark to drop — you know the algorithm perfectly and apply the wrong aggregation. Know both forms.`,
  },
  {
    tag: "⚠️ Drill",
    title: "k-means Is Not Deterministic",
    body: `A property he raised here for the first time, and the kind of conceptual claim that makes a clean multiple-choice question.\n\nRun k-means twice on the <b>same data</b> with the <b>same k</b> and you can get <b>different clusters</b>. Nothing is broken when that happens — it is a property of the algorithm.\n\nThe cause is initialisation. k-means starts by placing k centres, usually at random, and then alternates assignment and recomputation until it settles. Where it settles depends on where it started. Different starting centres lead to different local optima.\n\nHis example used the values 1, 3, 5, 9 with k = 2. One initialisation converges to {1, 3} and {5, 9} — a balanced split. Another converges to {1, 3, 5} and {9}. Same data, same k, same procedure, two different answers.\n\nHis framing: "if you run, let's say, 100 times with the random initialisation of the cluster, then the result will be different."\n\nThis is why real implementations run k-means several times with different seeds and keep the best result by within-cluster distance — scikit-learn's <span class="mono">n_init</span> parameter exists for exactly this.\n\nContrast it with what <i>is</i> deterministic. kNN given a fixed k and metric always returns the same answer. A trained network at inference always returns the same answer. k-means training does not.\n\nExam insight: "k-means always converges to the same clustering" is false, and it is a natural distractor. The reason is random initialisation leading to different local optima.`,
  },
  {
    tag: "🧮 Drill",
    title: "Parameter Counting When the Widths Double",
    body: `He worked this one live and fumbled the arithmetic, which makes it worth doing carefully.\n\nA network with layer widths <b>3 → 4 → 4 → 2</b> and <b>no biases</b>. Weights only:\n\n3 × 4 = 12, then 4 × 4 = 16, then 4 × 2 = 8. Total = <b>36</b>.\n\nNow double both hidden layers to 8, giving <b>3 → 8 → 8 → 2</b>:\n\n3 × 8 = 24, then 8 × 8 = 64, then 8 × 2 = 16. Total = <b>104</b>.\n\nHis per-layer increases were right even though his running total drifted: +12 on the first layer, +48 on the second, +8 on the third. That sums to +68, and 36 + 68 = 104.\n\nTwo things the question is testing.\n\n<b>Read whether biases are included.</b> This one says no. With one bias per unit the same network would be 46, not 36 — a perfectly plausible wrong answer sitting right there.\n\n<b>Doubling the widths does not double the parameters.</b> The middle layer is 8 × 8 against 4 × 4, which is four times larger, not twice. Any layer between two doubled widths quadruples. That is why the total went from 36 to 104 rather than to 72.\n\nThe general form, with biases: for widths d₀ → d₁ → … → dₙ, the count is Σ (dᵢ × dᵢ₊₁ + dᵢ₊₁).\n\nExam insight: check for biases, and remember that a layer between two doubled widths quadruples. The 36 → 104 pattern is the lesson.`,
  },
  {
    tag: "🧮 Drill",
    title: "The Gradient-Descent Sign Question",
    body: `A conceptual question dressed as arithmetic, and a good one.\n\nThe update rule is w ← w − α·g, with a positive learning rate α. Backpropagation reports a gradient g that is <b>negative</b>. What happens to w, and what happens to the loss?\n\nWork the signs. α is positive and g is negative, so α·g is negative. Subtracting a negative adds, so <b>w increases</b>.\n\nAnd the loss? <b>It decreases locally</b> — which is the entire point of gradient descent. A negative gradient means the loss falls as w rises, so moving w up is moving downhill.\n\nBoth parts are true at once, and that is the trap. It is easy to assume that if the weight goes up something must have gone wrong, or that the gradient being negative means the loss will rise. Neither follows. The gradient points uphill; stepping against it goes downhill, whichever direction the weight happens to move in.\n\nHis phrasing: "the gradient actually shows you the direction where the loss function becomes small, so that still lowers your loss function locally."\n\nThe word <b>locally</b> is doing real work. Gradient descent guarantees improvement for a sufficiently small step in the neighbourhood of the current point. It promises nothing globally, and a learning rate too large can overshoot and raise the loss even with the sign correct.\n\nExam insight: negative gradient plus positive learning rate means the weight rises <i>and</i> the loss falls. Expect an option that asserts only one of those.`,
  },
  {
    tag: "🧮 Drill",
    title: "One SGD Step on a Squared Loss",
    body: `A complete gradient-descent step by hand, and he flagged that the ½ factor matters.\n\nThe loss is <b>L = (wx − y)²</b>, written <i>without</i> the conventional ½. Values: x = 3, y = 5, starting weight w = 1, learning rate α = 0.05.\n\n<b>Differentiate.</b> By the chain rule, dL/dw = 2(wx − y)·x.\n\n<b>Evaluate.</b> wx − y = (1)(3) − 5 = −2. So the gradient is 2(−2)(3) = <b>−12</b>.\n\n<b>Step.</b> w ← w − α·g = 1 − 0.05(−12) = 1 + 0.6 = <b>1.6</b>\n\nNote that this is the previous card's situation concretely: a negative gradient, and the weight moves up. It moves toward 5/3 ≈ 1.67, which is the value that makes the prediction exact — so the step went the right way.\n\nThe ½ detail. Many textbooks write L = ½(wx − y)², and the reason is cosmetic: differentiating brings down a 2 that cancels the ½, leaving (wx − y)·x. He pointed this out explicitly because <b>this question omits the ½</b>, so the 2 survives. With the ½ the gradient would be −6 and the answer 1.3 rather than 1.6.\n\nSo read the loss as written. The factor changes the answer, and both 1.3 and 1.6 will be sitting in the options.\n\nExam insight: differentiate what is on the page, not what you remember the formula being. Then substitute, then step.`,
  },
  {
    tag: "💡 Drill",
    title: "Why Initialization Has to Break Symmetry",
    body: `Recapped with a concrete two-neuron example.\n\nTake two neurons h₁ and h₂ in the same layer, initialised to <b>identical weights</b>, with no bias. They receive the same inputs. So they compute the same weighted sum, produce the same output, receive the same gradient, and update by the same amount.\n\nThey stay identical forever. His arithmetic: both weights at 0.04, so both compute 2 × 0.04 = 0.08, and nothing distinguishes them at any point afterwards.\n\nTwo units with the expressive power of one. Scale that to a 200-unit layer and you have 200 copies of a single neuron.\n\nHis phrasing: "if everything's the same you learn nothing, everything will converge and nothing you really learn from it."\n\nThe fix is randomness — not because random values are good, but because <b>different</b> values are necessary. The units have to start apart so their gradients differ and they can specialise.\n\nAnd zero is worse. With all weights zero the forward pass computes x·W = 0 regardless of input, and the backward pass multiplies by the weights, so no gradient flows either. Nothing moves at all.\n\nWhich is what Xavier and He initialisation build on: random, and scaled so the signal variance survives depth. Xavier for general feedforward, He (√(2/fan_in)) for ReLU, where the 2 compensates for the negative half ReLU discards.\n\nExam insight: two separate failures. Zero gives no signal in either direction; identical constants give signal but no symmetry breaking. Be able to state both.`,
  },
  {
    tag: "🧮 Drill",
    title: "Batch Normalization at Evaluation Time",
    body: `He put a deliberately wrong slide up, caught it, and corrected it live — which makes it a strong signal about what is being tested.\n\nDuring training, batch normalisation computes the mean and variance of each mini-batch and uses them to standardise. It also accumulates <b>running estimates</b> of those statistics across training, and stores them.\n\nAt evaluation you do <b>not</b> recompute anything. You use the stored training statistics. With one test sample there is no batch to compute from, and you want deterministic output regardless.\n\nHis example. Stored training mean <b>3</b>, stored training variance <b>4</b>. A test input of <b>7</b> arrives.\n\nCorrect: (7 − 3) / √4 = 4 / 2 = <b>2</b>\n\nThe slide initially showed (7 − 5) / √4 = 1, using 5 — a mean computed from the evaluation data. He spotted it: "it shouldn't be seven minus five divided by square root of four, it should be seven minus three."\n\nThat wrong version is exactly the distractor you will see. Both are clean integers, both are arithmetically fine, and only one uses the right mean.\n\nHe also noted a related question on the slides was under-specified because it required γ and β without defining them, and said he would ensure the proctors can supply definitions. If a question seems to need a symbol it never defines, ask.\n\nThis is the same train-versus-inference rule as dropout's scaling and as fitting a scaler on training data only. Three places, one idea.\n\nExam insight: at evaluation, use the <i>stored training</i> mean and variance. The distractor recomputes from the test data and also produces a tidy number.`,
  },
  {
    tag: "🧮 Drill",
    title: "Comparing Two Weight Vectors Under L2",
    body: `A clean worked comparison showing what a weight penalty actually does to a decision.\n\nTwo candidate weight vectors. <b>A = (3, 0)</b> and <b>B = (2, 1)</b>. Both achieve exactly the same data loss, <b>0.04</b>. The regularisation strength is λ = 0.02.\n\nThe objective is total = data loss + λ·‖w‖².\n\n<b>A:</b> ‖w‖² = 3² + 0² = 9. Penalty = 0.02 × 9 = 0.18. Total = 0.04 + 0.18 = <b>0.22</b>\n\n<b>B:</b> ‖w‖² = 2² + 1² = 5. Penalty = 0.02 × 5 = 0.10. Total = 0.04 + 0.10 = <b>0.14</b>\n\n<b>B wins</b>, and the data loss played no part — it was identical. The penalty broke the tie entirely.\n\nWhy B, when both vectors have the same total magnitude if you just add the components (3 + 0 = 3, 2 + 1 = 3)? Because L2 <i>squares</i>. Squaring punishes one large component far more than several moderate ones: 9 against 5. L2 therefore prefers weight spread across features over weight concentrated in one.\n\nThat is the difference from L1, which sums absolute values. Under L1 these two vectors score identically — 3 either way — and L1's own preference is for exact zeros, which is where sparsity comes from.\n\nHis observation: "the square is becoming much larger than just simply the larger one."\n\nExam insight: compute ‖w‖², multiply by λ, add the data loss, compare. And know that L2 prefers spread while L1 prefers sparsity — the same two vectors can rank differently under each.`,
  },
  {
    tag: "🧮 Drill",
    title: "Inverted Dropout: When to Do Nothing",
    body: `He called this "more like a real question in the exam," so treat it as a strong signal.\n\nThe setup. Inverted dropout with keep probability <b>q = 0.8</b>. During training the implementation already scales activations by <b>1.25</b>. What do you do at evaluation time?\n\nCheck the arithmetic: 0.8 × 1.25 = <b>1</b>. The training-time scaling has already cancelled the effect of dropping. The activations are already on the right scale, so at evaluation you apply <b>no additional scaling at all</b> — you simply disable the mask.\n\nNote that 1.25 is 1/0.8, which is not a coincidence. Inverted dropout divides by the keep probability during training precisely so that test time needs no correction. That is the whole reason frameworks implement it this way: inference code stays simple.\n\nThe contrast is standard dropout, which does no training-time scaling and therefore <i>must</i> multiply by q at test. One correction, two possible places — and his rule from Lecture 7 holds: if you don't scale during training you must scale at test; if you do, you don't. Never both, never neither.\n\nOne thing you always do regardless of convention: <b>disable the mask</b>. Evaluation runs the full network deterministically. Dropping at inference would make the prediction random.\n\nExam insight: multiply the keep probability by the stated training scale. If it comes to 1, the answer is "nothing further." The question is testing whether you know the correction can live in either place.`,
  },
  {
    tag: "💡 Drill",
    title: "Data Augmentation Is Application-Dependent",
    body: `Repeated from Lecture 7 with a second example, which suggests he wants it known.\n\nThe rule: a transformation is valid only while it <b>preserves the label</b>.\n\nFor a flower photograph, cropping is fine, flipping is fine, rotation is fine. It is still a flower from any angle, so each transform manufactures a free training example.\n\nFor handwritten digits, rotation breaks. Rotate a <b>6</b> by 180° and you have a <b>9</b>. The image is perfectly legible and the label is now wrong, which is worse than noise — you are actively teaching the model that a 9 is a 6.\n\nHis conclusion: "not all augmentation can be used in other applications. It's application driven or dependent."\n\nThat is the examinable form. The question will not ask whether augmentation is good; it will give you a transform and a task and ask whether the pairing is valid. So reason about the label, not the transform.\n\nA few cases worth having ready. Horizontal flip: fine for most natural photographs, wrong for text and for any task where left and right differ. Rotation: fine for aerial or microscope imagery where there is no canonical orientation, wrong for digits and faces. Colour shift: fine for shape-based recognition, wrong when colour <i>is</i> the label, like classifying ripe against unripe fruit. Cropping: usually fine, unless it can remove the thing being classified.\n\nExam insight: valid if the label survives. The 6-to-9 case is the canonical counterexample and he has now given it twice.`,
  },
  {
    tag: "💡 Drill",
    title: "Early Stopping and Checkpoint Selection",
    body: `Recapped with a specific numbered example, which is how it will appear.\n\nYou train for 8 epochs and save a checkpoint at each one — 8 snapshots of the weights. The training loss falls monotonically throughout. The validation loss falls, reaches its minimum at <b>epoch 5</b>, and rises after.\n\nWhich checkpoint do you keep? <b>Epoch 5.</b> You restore epoch 5 and discard the rest.\n\nNot epoch 8, even though its training loss is the best of the eight. Training loss falling is guaranteed by construction — it is the thing being minimised — so it cannot be the selection criterion. Everything after epoch 5 performs worse on data the model has not seen.\n\nHis framing from Lecture 7, worth keeping: every epoch's weights are genuinely a different model. A long training run produces a trajectory, and releasing a model means choosing a point on it. The validation minimum is that point.\n\n<b>Early stopping</b> is the same idea applied live: stop once validation stops improving rather than running out the epoch budget. The red flag he named is the moment validation loss stops decreasing.\n\nIt is also the cheapest regulariser available. It costs nothing, adds no term to the loss, changes no architecture — it just declines to use the overfit tail of a run you were doing anyway.\n\nExam insight: "which checkpoint do you keep" has one answer and it is the validation minimum. Expect the last epoch and the best-training-loss epoch as distractors — which, in a monotonic run, are the same wrong answer.`,
  },
  {
    tag: "💡 Drill",
    title: "Transfer Learning, Condensed",
    body: `Recapped briefly, with the framing that matters for a multiple-choice question.\n\nThe premise: training a deep network from scratch is, in his words, a luxury. Most of the time you start from a model someone else trained.\n\nIt works because the early layers of a convolutional network learn edges, colours and light — properties of <i>images</i> rather than of any particular task. Those transfer. The later layers compose them into something task-specific, and that is the part you replace.\n\nThe standard recipe: take a model pretrained on ImageNet, <b>freeze</b> the convolutional layers, attach a new classifier, and train only that. His example: good features learned from cat-versus-dog classification, reused for car-versus-aeroplane. You train a small model instead of a full one.\n\nHe emphasised the flexibility. You can freeze everything and train just the head. You can unfreeze some later feature layers too. "You can freeze any layers, you can also train any layers — it's your personal choice."\n\nAnd from Lecture 7, the two axes that decide how much: <b>how much target data</b> you have, and <b>how similar</b> source and target are. Little data and a similar task means the last layer only. Lots of data or a distant domain means more layers. Little data <i>and</i> a distant domain is the corner where transfer may not be worth doing.\n\nThe vocabulary: the frozen pretrained part is the <b>backbone</b>, what it was trained on is the <b>source</b>, your task is the <b>target</b>.\n\nExam insight: early layers generic, late layers specific, so freeze early and retrain late. The two-axis table decides the depth.`,
  },
  {
    tag: "🏗 Drill",
    title: "RNNs: Shared Weights, Different States",
    body: `The sequential block, recapped at the level the exam will use.\n\n<b>Why share weights.</b> The alternative is a separate set of parameters per position, which fails twice: a 50-token sentence would need 50 sets, and sentences vary in length so you never know how many to build. Sharing one parameter set θ across all positions solves both at once.\n\n<b>Why that doesn't make every output identical.</b> This is the examinable half, and he worked it explicitly. The output at each step depends on two things — the shared θ <i>and</i> the hidden state carried in. The state differs at every position because it encodes everything seen so far, and the input differs too. Same function, different arguments, different results.\n\nHis illustration: positions 1 through 4 all use the same f_θ, but h₁, h₂, h₃, h₄ differ and x₁ … x₄ differ, so the outputs differ. "Even the same f theta will make different hidden states and predictions."\n\n<b>Why training is expensive.</b> Backpropagation through time runs the chain rule back along the whole unrolled sequence. Two costs: every intermediate hidden state must be stored for the backward pass, and the long product of factors drives the gradient toward zero. His example — a constant factor of 0.5 multiplied down a long chain — loses the signal entirely.\n\n<b>Truncated BPTT.</b> Break the sequence into chunks and backpropagate only within each. The forward pass is unbroken, so the <b>state still crosses the boundary</b>; only the <b>gradient stops</b>. That distinction is the question.\n\n<b>LSTM.</b> Three gates, each in [0, 1]: <b>forget</b> (drop from memory), <b>input</b> (write new information), <b>output</b> (expose the cell). He said twice that the internals are not tested — only what the three gates do.\n\nExam insight: shared weights with differing states; state crosses the truncation boundary and gradients do not; three gates by name and function.`,
  },
  {
    tag: "🏗 Drill",
    title: "Transformers: the Three Things to Remember",
    body: `He reduced the attention block to exactly three points, listed them, and then listed them again at the end of the section. Take the hint.\n\n<b>1. Positional encoding.</b> A token's representation is its word vector <i>plus</i> a position vector, added together. Without it, attention sees an unordered set — "dog bites man" and "man bites dog" contain identical word vectors and would be indistinguishable. The same word at position 2 and position 5 gets different final embeddings.\n\n<b>2. The causal mask hides the future.</b> When predicting the next token you must not see the tokens you are predicting. The mask enforces that each position attends only to itself and earlier positions. He stressed the division of labour, because it is a question: <b>position vectors say where each token is; the causal mask says what is visible.</b> They are different mechanisms and a question will try to swap them.\n\n<b>3. Attention weights are computed, not fixed.</b> For each prediction, the model computes how much each visible token contributes, from the word vectors plus positions. The context is the <b>weighted sum of the value vectors</b>. In "the dog chased the ball… it", resolving "it" means weighting "dog" heavily and "ball" less.\n\nThe arithmetic, which he worked: given attention weights and value vectors, the context vector is Σ (weight × value). With weights 0.2, 0.3, 0.5 over values 1, 2 and 10, the context is 0.2(1) + 0.3(2) + 0.5(10) = <b>5.8</b>. The weights sum to 1, so the context is a weighted average of the values. It recomputes after every generated token.\n\nAfter attention, an MLP combines the gathered features — the same role the fully connected layers play at the end of a CNN.\n\nExam insight: the three points are his own summary, delivered twice. The position-versus-mask distinction is the single most likely question.`,
  },
  {
    tag: "💡 Drill",
    title: "Parallel Training, Sequential Generation",
    body: `The reason transformers scaled, and a distinction he was careful about.\n\n<b>Training is parallel.</b> During training you have the full sentence already. So from one sentence you build every training pair at once — predict "dog" from the start, predict "chased" from "the dog", predict "the" from "the dog chased" — and the causal mask makes all of them valid simultaneously. Every position is scored in a single pass. His phrase: "you can learn all these pairs one shot."\n\nAn RNN cannot do this. Its state at position 3 requires the state at position 2, which requires position 1. The dependency is sequential by construction, so training must march through the sentence.\n\n<b>Generation is still sequential.</b> This is the part he emphasised, because people conflate the two. When actually producing text you do not have the future tokens — they are what you are generating. So you produce one token, append it to the context, recompute attention over the longer context, and produce the next. Token by token. Still <b>autoregressive</b>.\n\nHis words: "importantly, this is for real generation — your real generation is still token by token. The fancy part for the transformer is the training."\n\nSo the advantage is entirely on the training side, and that is sufficient: training is where the enormous compute goes, and making it parallel is what let models scale to the size that made them useful.\n\nExam insight: "transformers are parallel" is only half true and the exam may test the other half. Training parallel, generation sequential.`,
  },
  {
    tag: "🧮 Drill",
    title: "The Graph Update, by Hand",
    body: `The graph block's one calculation, and he said outright that most people will want a calculator for it.\n\nThe rule: a node's new representation depends on <b>itself</b> and on <b>its neighbours</b>. With both weights at 0.5:\n\nh_A(new) = 0.5 × (A's own value) + 0.5 × (mean of A's neighbours)\n\nThe road network: A = 1, B = 2, C = 4, D = 8. A's neighbours are B and C.\n\nNeighbour mean = (2 + 4) / 2 = 3. So h_A = 0.5(1) + 0.5(3) = 0.5 + 1.5 = <b>2</b>.\n\nEvery node updates simultaneously using the same rule. B's only neighbour is A, so h_B = 0.5(2) + 0.5(1) = <b>1.5</b>. Note that B uses A's <i>old</i> value of 1, not the new 2 — all updates read from the previous layer.\n\nThe learnable parts: two weight matrices per layer, <b>W_k</b> controlling how much comes from neighbours and <b>B_k</b> how much from yourself. He re-stated the pairing here. Both are <b>shared across all nodes</b>, which is what lets one trained GNN run on a graph it has never seen.\n\nAnd depth: more layers means information travels further, with each layer aggregating neighbours-of-neighbours recursively. He noted that in a dense graph this quickly loops back — a node ends up depending on itself through its neighbours.\n\nExam insight: average the neighbours, weight it, add your weighted self, and read from the previous layer throughout. W for neighbours, B for self.`,
  },
  {
    tag: "💡 Drill",
    title: "Invariance, Equivariance, and a Trick for Spotting Them",
    body: `The graph property he spent most time on, plus a practical technique he demonstrated.\n\n<b>Why neighbour order doesn't matter.</b> Aggregation uses mean or sum, and those ignore order. The mean of {2, 4} is 3 and so is the mean of {4, 2}. Order-invariance is built into the arithmetic rather than learned.\n\n<b>Equivariance</b> applies to per-node outputs. Relabel the nodes and the outputs permute with them — same values, new positions. Inputs and outputs move as a pair.\n\n<b>Invariance</b> applies to whole-graph output. Pool the node representations with a sum or mean and the graph-level answer is unchanged by relabelling, because pooling ignores order too.\n\nHis combined statement: per-node outputs are equivariant, and once you pool them the graph-level output is invariant.\n\n<b>The trick</b>, which is worth more than the definitions. He hit a question asking which of several functions ignores input order, and rather than reasoning abstractly he just tested it:\n\n"If you don't know how to answer, just try a few combinations."\n\nTake [−1, −10, 100] and a permutation of it, [100, −1, −10], and evaluate each candidate. A sum of ReLUs gives 0 + 0 + 100 = <b>100</b> both times — invariant. A position-weighted sum gives <b>279</b> one way and <b>68</b> the other — not invariant.\n\nTwo plug-ins settle it with no theory at all. On a multiple-choice paper under time pressure, that is often faster than recalling which operations commute.\n\nExam insight: mean, sum, max and min are order-invariant; anything weighted by position is not. And when unsure, substitute two orderings and compare.`,
  },
  {
    tag: "🧮 Drill",
    title: "The Frozen-GNN Feature-Order Question",
    body: `He worked through this one at length, changed his mind partway, and drew on the board — which tells you it is the hard end of the paper.\n\nThe setup: a GNN was trained on molecules whose node features are, in order, <b>(atomic number, charge)</b>. A new molecule arrives with those two columns <b>swapped</b> — charge first. The model is frozen. What must you do before running it?\n\nThe answer: <b>restore the training feature order and definitions</b> before applying the shared weights.\n\nThe reason is that a weight matrix multiplies specific columns. Column 1 of W was trained to mean "atomic number." Feed it charge and the arithmetic still runs, produces numbers, and raises no error — it is simply wrong. The model has no way to detect the swap. Feature order is part of the contract between data and weights.\n\nThe tempting distractor was "reorder the features and leave the adjacency matrix unchanged," and he spent several minutes on why that phrasing is wrong, drawing the graph twice. His point: <b>relabelling nodes does change the adjacency matrix.</b> Take A–B, A–C and C–D, rename the nodes, and the matrix of ones and zeros is genuinely different even though the graph is identical. So an option asserting the adjacency matrix is unaffected by relabelling is making a false claim.\n\nThis connects to permutation equivariance from the previous card. A GNN is designed to be indifferent to <i>node</i> ordering — that is what mean aggregation buys. It is not indifferent to <i>feature</i> ordering, because features are matched to weight columns positionally. Two different kinds of ordering, and only one of them is handled for you.\n\nExam insight: node order is handled by the architecture; feature order is not. Restore the training feature definitions before using frozen weights.`,
  },
  {
    tag: "🔬 Not on the Exam",
    title: "Self-Supervised Learning",
    body: `The one piece of new material, covered in the final twelve minutes after he put the decision to an anonymous vote. Block 9, and explicitly outside the exam.\n\n<b>The problem.</b> Supervised learning needs paired examples — an input and the right answer — and those pairs are expensive. You rarely have them at the scale a large model needs.\n\n<b>The idea.</b> Hide part of the data and predict it from the rest. No human labelling, because the data supplies its own target. Mask a token in a sentence and predict it. Mask a patch of an image and reconstruct it. Rotate an image by a known amount and predict the angle.\n\nHe showed Yann LeCun's cake analogy from a Turing Award keynote: reinforcement learning is the cherry, supervised learning is the icing, and <b>self-supervised learning is the cake</b> — because that is where essentially all the available data is.\n\n<b>The key move:</b> you do not care how well the model does the pretext task. Predicting a rotation angle is not useful. What you want is the <b>representation</b> learned along the way, which you then evaluate on a real downstream task — typically by freezing the encoder, attaching a small classifier and training it on whatever labels you do have. Exactly the autoencoder pattern from Lecture 8.\n\n<b>Why rotation works as a pretext task.</b> To know an image has been turned 90°, the model must know which way up the content belongs — that birds perch on branches, that faces have a top. He called this visual common sense, and it is learned with no labels at all.\n\n<b>The payoff:</b> with few labels, self-supervised pretraining beats fully supervised training. With many labels the two converge, since labelled data is still the gold standard. So it buys you a very good starting point.\n\n<b>And it is the first stage of every large language model.</b> Pre-training <i>is</i> self-supervised — predict the next or missing token over an enormous corpus, learning representations rather than chasing a score. Post-training is the supervised part: SFT and alignment to human preference. He said the pre-training and post-training split would be covered properly later.\n\nExam insight: none — this is block 9. Good interview material, and it explains what "pre-training" actually means.`,
  },
  {
    tag: "📋 Admin",
    title: "Extra Credit, the Guest Lecture, and What's Next",
    body: `<b>Extra credit via anonymous feedback.</b> He is trialling a platform called Open For Feedback, where students anonymously signal that a lecture is too fast, too slow or unclear. The course code is <b>3972</b> — he tried 1912 and 2528 first before landing on the one that worked. The offer: if roughly 30 to 50 people participate, <b>everyone</b> gets 0.05 extra credit per lecture, which over the remaining four or five lectures is around two to three points on the final score. It also has a Q&A channel, which he set up because large classes make people reluctant to ask questions aloud.\n\n<b>The attendance-quiz game.</b> He stated the rule plainly, and it is genuinely game-theoretic: if attendance is low a quiz is triggered; if everyone attends, there is never a quiz. The guest speaker noted it as a nice piece of policy design.\n\n<b>Guest lecture — Professor Rolling Lee</b>, Civil Engineering and Computer Science, in her third year at USC, PhD from Berkeley and a postdoc at Stanford. Her topic was mixed autonomy: the transitional period where autonomous vehicles share roads with human drivers. Three threads. Braess's paradox — adding a new zero-delay highway can make total system delay <i>worse</i>, because individually optimal choices need not be collectively optimal. Weaving-ramp coordination, where signalling congestion ahead to autonomous vehicles before they enter the merge area eases the bottleneck; that work won a best-paper award. And <b>selfish exploitation</b>: when an autonomous vehicle altruistically yields a space, a human driver takes it, so system-level benefit only appears above a certain penetration rate. Her framing is game-theoretic throughout, since AI and human decisions are coupled and each adapts to the other.\n\nShe is also collaborating with Professor Zhao on a <b>$2M NSF award</b> using agentic AI for wildfire evacuation routing in Los Angeles. And she is <b>recruiting up to eight PhD students</b> this cycle plus research assistants, from CS as well as Civil Engineering — he flagged that number as unusually large.\n\n<b>Coming up.</b> A startup working on AI security in about two weeks. After the midterm the course moves to advanced topics: attention, mixture of experts and decoding, plus the pre-training and post-training material, and a return to AutoML.`,
  },
];

const VOCAB = [
  { term: "50 multiple-choice questions", def: "The whole exam. Two hours, 11 pages, one answer sheet. Roughly 70% fundamentals." },
  { term: "Blocks 1–7", def: "The scope, confirmed twice. Block 8 onward — generative models, AutoML, self-supervised learning — is out, as are research topics inside blocks 1–7." },
  { term: "Last year's exam", def: "The sample questions he distributed are a real past paper. Last year covered slightly less and was more narrative in the early blocks." },
  { term: "Review-slide variations", def: "The practice questions in the review deck are agent-generated variations of this year's real exam questions." },
  { term: "Curving", def: "He said twice that if scores come out low the exam will be curved." },
  { term: "Pruning", def: "Cutting a decision tree back to reduce complexity. Select the depth by validation error, never by training error." },
  { term: "Non-zero test error", def: "Low validation error never guarantees zero test error. Validation estimates test performance; it does not determine it." },
  { term: "kNN regression", def: "When neighbours carry values rather than labels, predict their mean. Values 2, 5, 11 at k=3 give 6." },
  { term: "Unweighted kNN", def: "All k neighbours count equally regardless of distance. A weighted variant would scale each by proximity." },
  { term: "kNN classification", def: "When neighbours carry labels, take the majority vote. Purple, purple, orange, orange, orange gives purple at k=3 and orange at k=5." },
  { term: "k-means non-determinism", def: "Same data, same k, different random initialization, different final clusters. It converges to a local optimum that depends on where it started." },
  { term: "n_init", def: "Why implementations run k-means several times with different seeds and keep the best by within-cluster distance." },
  { term: "Parameter count, no bias", def: "Just the weight products. 3→4→4→2 is 12 + 16 + 8 = 36. Read whether the question includes biases — with them it would be 46." },
  { term: "Doubling hidden widths", def: "Does not double the parameters. A layer between two doubled widths quadruples: 3→8→8→2 is 24 + 64 + 16 = 104, not 72." },
  { term: "Gradient sign", def: "w ← w − αg with g negative and α positive means w INCREASES and the loss still falls locally. Both are true at once." },
  { term: "Locally", def: "Gradient descent guarantees improvement for a small enough step near the current point. Nothing is promised globally." },
  { term: "Squared loss without ½", def: "L = (wx−y)² differentiates to 2(wx−y)x. The conventional ½ exists only to cancel that 2 — read the loss as written." },
  { term: "One SGD step", def: "x=3, y=5, w=1, α=0.05 on (wx−y)²: gradient −12, so w ← 1 − 0.05(−12) = 1.6. With a ½ factor it would be 1.3." },
  { term: "Symmetry breaking", def: "Two neurons with identical weights see identical inputs, produce identical outputs, get identical gradients, and stay identical forever." },
  { term: "Zero initialization", def: "Worse than identical constants: x·W = 0 gives no signal forward, and the chain rule multiplies by W so no gradient flows back." },
  { term: "Running estimates", def: "The mean and variance batch norm accumulates during training and stores. Used unchanged at evaluation." },
  { term: "BatchNorm at eval", def: "Use the STORED TRAINING statistics. Mean 3, variance 4, test input 7 gives (7−3)/√4 = 2. Recomputing from test data is the distractor." },
  { term: "L2 penalty comparison", def: "total = data loss + λ‖w‖². With λ=0.02 and equal data loss, (3,0) scores 0.22 and (2,1) scores 0.14, so (2,1) wins." },
  { term: "Why L2 prefers spread", def: "Squaring punishes one large component more than several moderate ones: 3²+0² = 9 against 2²+1² = 5. L1 would score both at 3." },
  { term: "Inverted dropout", def: "Scales by 1/q during training so evaluation needs no correction. With q=0.8 and a training scale of 1.25, 0.8 × 1.25 = 1 — do nothing extra." },
  { term: "Disable the mask", def: "The one thing you always do at evaluation regardless of convention. Dropping at inference would make the prediction random." },
  { term: "Label preservation", def: "Augmentation is valid only while the label survives. Rotation is fine for a flower and turns a 6 into a 9." },
  { term: "Checkpoint selection", def: "Keep the epoch with the lowest validation loss. Eight checkpoints with validation bottoming at epoch 5 means you restore epoch 5." },
  { term: "Early stopping", def: "Halt once validation stops improving. The cheapest regulariser — it just declines to use the overfit tail of the run." },
  { term: "Backbone", def: "The frozen pretrained feature layers. What it was trained on is the source; your task is the target." },
  { term: "Shared weights (RNN)", def: "One parameter set θ at every position. Outputs still differ because the hidden state and the input differ at each step." },
  { term: "Truncated BPTT", def: "Backpropagate within chunks. The STATE crosses the chunk boundary; the GRADIENT does not. That distinction is the question." },
  { term: "LSTM gates", def: "Forget (drop from memory), input (write new information), output (expose the cell). Each in [0,1]. He said twice the internals are not tested." },
  { term: "Positional encoding", def: "Word vector plus position vector, added. Without it attention sees an unordered set and 'dog bites man' equals 'man bites dog'." },
  { term: "Causal mask", def: "Hides future tokens so a prediction cannot see what it is predicting. Position says WHERE a token is; the mask says WHAT IS VISIBLE." },
  { term: "Attention weights", def: "Computed per prediction from word vectors plus positions, and recomputed after every generated token. They sum to 1." },
  { term: "Context vector", def: "The weighted sum of value vectors. Weights 0.2/0.3/0.5 over values 1/2/10 give 0.2(1) + 0.3(2) + 0.5(10) = 5.8." },
  { term: "Parallel training", def: "The full sentence is known, so every prediction pair is scored in one pass. An RNN cannot, because each state needs the last." },
  { term: "Autoregressive generation", def: "Still token by token, even for a transformer. You do not have the future tokens — they are what you are producing." },
  { term: "GNN update", def: "0.5(self) + 0.5(neighbour mean). A=1 with neighbours 2 and 4 gives 0.5(1) + 0.5(3) = 2. All nodes read the PREVIOUS layer." },
  { term: "W_k and B_k", def: "The two learnable matrices per GNN layer — W for neighbour influence, B for self. Shared across every node, which is what makes the model transferable." },
  { term: "Order-invariant aggregation", def: "Mean, sum, max, min. The mean of {2,4} and of {4,2} are both 3, so neighbour order cannot affect the result." },
  { term: "Permutation equivariance", def: "Relabel the nodes and the per-node outputs permute with them — same values, new positions." },
  { term: "Permutation invariance", def: "Pool the node representations and the graph-level output is unchanged by relabelling, because pooling ignores order too." },
  { term: "The substitution trick", def: "To test whether a function ignores input order, plug in two permutations. Sum of ReLU gives 100 both ways; a position-weighted sum gives 279 and 68." },
  { term: "Feature order", def: "NOT handled by the architecture. Weight columns are matched to features positionally, so swapped columns must be restored before using frozen weights." },
  { term: "Relabelling changes the adjacency matrix", def: "Renaming nodes genuinely produces a different matrix of ones and zeros, even though the graph is identical. He drew this twice." },
  { term: "Self-supervised learning", def: "Hide part of the data and predict it from the rest. The data supplies its own label, so no human annotation is needed. Block 9 — not examinable." },
  { term: "Pretext task", def: "The fake job used to learn a representation — masked tokens, masked patches, rotation angle. You do not care how well it is done." },
  { term: "LeCun's cake", def: "Reinforcement learning is the cherry, supervised learning the icing, self-supervised learning the cake — because that is where the data is." },
  { term: "Pre-training", def: "The self-supervised first stage of a large language model: predict the next or missing token to learn representations." },
  { term: "Post-training", def: "The supervised second stage — SFT and alignment to human preference. What turns a pretrained model into an assistant." },
  { term: "Open For Feedback", def: "The anonymous feedback platform, course code 3972. If ~30–50 people use it, everyone gets 0.05 extra credit per lecture." },
  { term: "Braess's paradox", def: "From the guest lecture: adding a zero-delay highway can make total system delay worse, because individually optimal choices need not be collectively optimal." },
  { term: "Selfish exploitation", def: "When an autonomous vehicle altruistically yields space, a human driver takes it — so system benefit only appears above a penetration threshold." },
];

const EXAM_TIPS = [
  { tip: "The sample questions he gave out ARE last year's real exam", detail: "Not a mock — the actual paper. \"The sample questions I gave to you is a real exam last year.\" The one caveat: last year covered slightly less material and was more narrative in the first few blocks, because this year's syllabus changed. If you do one thing with your remaining time, work that paper.", priority: "HIGH" },
  { tip: "The review slides' practice questions are variations of the REAL questions", detail: "He generated them by asking an agent to produce variations of the actual exam questions: \"all the practice questions in the review slides will be at least the variation of them in the real midterms.\" Combined with Lecture 8's admission that he designed the questions first and back-propagated to the material, the slides and the paper are tightly coupled.", priority: "HIGH" },
  { tip: "He explicitly endorses reverse-engineering the paper with AI", detail: "Asked whether students could combine the review slides with last year's exam to predict this year's: \"we don't prohibit anything for preparing it… if your AI is smart enough, maybe it can also even guess what will be in the exam.\" He suggested feeding it the review slides and even the lecture recordings to find where the emphasis sits.", priority: "HIGH" },
  { tip: "Scope is blocks 1–7 — confirmed twice, including research topics", detail: "A student asked directly whether it ran through block 8. His answer: \"I think one through seven… block eight is already generative… It's just one, two, seven.\" He added that research topics INSIDE blocks 1–7 are also out: \"you don't need to worry about it at all.\"", priority: "HIGH" },
  { tip: "Logistics: 11 pages, one answer sheet, write your USC ID", detail: "50 questions, two hours, paper-based, 11 pages, and you hand in a single answer sheet. Bring a pen or pencil. He asked specifically that you write your USC ID clearly. He will NOT be present — proctors run it and he may join by Zoom.", priority: "HIGH" },
  { tip: "Bring a calculator — a basic one", detail: "Confirmed again, and he said square root is worth having for the normalisation questions. Must not connect to the internet, and nothing too elaborate — proctors will look. He declined to name an approved model. He also said \"most people need a calculator here\" about the graph update arithmetic, so it genuinely helps.", priority: "HIGH" },
  { tip: "No smart glasses", detail: "He described a student presenting through AI glasses with a control ring and said proctors will be at the front AND the back of the room. Bring ordinary glasses. This is a CS course and the proctors are briefed.", priority: "HIGH" },
  { tip: "kNN with NUMBERS means average, not vote", detail: "Unweighted k=3 with neighbour values 2, 5 and 11 predicts (2+5+11)/3 = 6. That's regression. Every earlier kNN example in the course was classification, where you take the majority vote. Read whether the neighbours carry labels or values — this is the easiest kind of mark to drop.", priority: "HIGH" },
  { tip: "Parameter counting: check for biases, and doubling isn't doubling", detail: "3→4→4→2 with no bias is 12+16+8 = 36. Double the hidden layers to 3→8→8→2 and it's 24+64+16 = 104, not 72 — a layer between two doubled widths QUADRUPLES. And with one bias per unit the first network would be 46, which will be sitting in the options.", priority: "HIGH" },
  { tip: "One SGD step, and watch for the ½", detail: "L = (wx−y)² with x=3, y=5, w=1, α=0.05. Differentiate: 2(wx−y)x = 2(3−5)(3) = −12. Step: w ← 1 − 0.05(−12) = 1.6. He flagged that this loss omits the conventional ½ — with it the gradient would be −6 and the answer 1.3. Both numbers will be options.", priority: "HIGH" },
  { tip: "Batch norm at evaluation uses the STORED TRAINING statistics", detail: "He put a wrong slide up and corrected it live, which is a strong signal. Stored training mean 3, variance 4, test input 7: the answer is (7−3)/√4 = 2. The wrong version — (7−5)/√4 = 1, using a mean from the test data — is a tidy integer too, and that's the distractor.", priority: "HIGH" },
  { tip: "A negative gradient makes the weight go UP and the loss go DOWN", detail: "w ← w − αg. With α positive and g negative, subtracting a negative adds, so w increases — and the loss still falls locally, because that's what the gradient means. Both halves are true at once. Expect an option asserting only one of them.", priority: "HIGH" },
  { tip: "Position vectors say WHERE; the causal mask says WHAT'S VISIBLE", detail: "He stated the division of labour explicitly, which means a question will try to swap them. Positional encoding is added to the word vector so order is encoded at all. The causal mask stops a prediction seeing the tokens it is predicting. Different mechanisms, different jobs.", priority: "HIGH" },
  { tip: "Truncated BPTT: the state crosses the boundary, the gradient doesn't", detail: "The forward pass is unbroken, so the hidden state carries between chunks. Only the backward pass is cut. That's what saves memory and loses long-range gradient signal, and the state-versus-gradient distinction is the examinable part.", priority: "HIGH" },
  { tip: "The graph update: average neighbours, add weighted self, read the PREVIOUS layer", detail: "With both weights at 0.5 and A=1 whose neighbours are B=2 and C=4: neighbour mean 3, so A becomes 0.5(1)+0.5(3) = 2. B, whose only neighbour is A, becomes 0.5(2)+0.5(1) = 1.5 — using A's OLD value of 1. All nodes update simultaneously from the previous layer.", priority: "HIGH" },
  { tip: "L2 regularisation: square, scale by λ, compare", detail: "Two weight vectors with identical data loss of 0.04 and λ=0.02. A=(3,0) gives 0.04 + 0.02(9) = 0.22. B=(2,1) gives 0.04 + 0.02(5) = 0.14. B wins. Note both vectors sum to 3 — it's the SQUARING that separates them, which is why L2 prefers spread and L1 prefers sparsity.", priority: "MEDIUM" },
  { tip: "Inverted dropout: if the scaling already cancels, do nothing", detail: "He called this \"more like a real question in the exam.\" Keep probability q = 0.8 with a training-time scale of 1.25: since 0.8 × 1.25 = 1, evaluation needs no further scaling. You just disable the mask. The 1.25 is 1/0.8, which is the whole point of the inverted convention.", priority: "MEDIUM" },
  { tip: "k-means is NOT deterministic", detail: "Same data, same k, different random initialization gives different clusters — it converges to a local optimum that depends on where it started. His example on 1, 3, 5, 9 with k=2: one run gives {1,3}{5,9}, another gives {1,3,5}{9}. \"k-means always converges to the same clustering\" is a natural false option.", priority: "MEDIUM" },
  { tip: "Checkpoint selection: keep the validation minimum", detail: "Eight epochs saved, training loss falling throughout, validation bottoming at epoch 5 and rising after. You restore epoch 5. Not epoch 8 — training loss falling is guaranteed by construction, so it can't be the criterion. The last epoch and the best-training-loss epoch are the same wrong answer.", priority: "MEDIUM" },
  { tip: "Pruning: three options die to one rule", detail: "An unpruned tree with zero training error and high validation error has overfitted. That instantly kills \"zero training error means it generalizes,\" \"minimise training error to pick the depth,\" and \"choosing depth on test keeps the estimate unbiased.\" What survives is the cautious claim: the selected tree can still have non-zero test error.", priority: "MEDIUM" },
  { tip: "Read the answers before re-reading the question", detail: "His own stated method on the pruning question, and it works because most fundamental questions have two or three options that are eliminated by a rule you already know. He also noted that with obviously wrong options removed, a guess has a good chance.", priority: "MEDIUM" },
  { tip: "Shared RNN weights still give different outputs", detail: "One parameter set θ at every position, but the output depends on θ AND the hidden state, and the state differs at every step because it encodes everything seen so far. Same function, different arguments. He worked through positions 1–4 explicitly.", priority: "MEDIUM" },
  { tip: "Transformers: parallel TRAINING, sequential GENERATION", detail: "Training has the full sentence, so every prediction pair is scored in one pass — that's the scaling advantage. Generation does not have the future tokens, so it stays token by token and autoregressive. \"Transformers are parallel\" is only half true, and the other half is examinable.", priority: "MEDIUM" },
  { tip: "The attention context is a weighted sum of value vectors", detail: "Weights are computed per prediction from word vectors plus positions, they sum to 1, and they are recomputed after every generated token. The arithmetic: weights 0.2/0.3/0.5 over values 1/2/10 give 0.2(1)+0.3(2)+0.5(10) = 5.8.", priority: "MEDIUM" },
  { tip: "Node order is handled for you; FEATURE order is not", detail: "A GNN is indifferent to node relabelling — that's what mean aggregation buys. It is NOT indifferent to feature column order, because weight columns match features positionally. Frozen model, swapped columns: restore the training feature order before applying the weights.", priority: "MEDIUM" },
  { tip: "Relabelling nodes DOES change the adjacency matrix", detail: "He drew this twice on the board. Take A–B, A–C, C–D, rename the nodes and the matrix of ones and zeros is genuinely different even though the graph is identical. So any option claiming the adjacency matrix is unaffected by relabelling is false.", priority: "MEDIUM" },
  { tip: "When unsure about order-invariance, just substitute", detail: "His own trick, demonstrated live. Take [−1, −10, 100] and [100, −1, −10] and evaluate each candidate function. Sum of ReLU gives 100 both ways — invariant. A position-weighted sum gives 279 and 68 — not. Two plug-ins settle it with no theory, which is faster under time pressure.", priority: "MEDIUM" },
  { tip: "Augmentation is application-dependent — the 6→9 case again", detail: "Rotation is fine for a flower and turns a handwritten 6 into a 9. He has now given this example twice, so expect a question pairing a transform with a task and asking whether it's valid. Reason about whether the LABEL survives, not about the transform.", priority: "MEDIUM" },
  { tip: "They will curve", detail: "Said twice, unprompted: \"if everyone gets a low score, we're going to curve; if everyone gets a high score, we'll leave it.\" He also noted that in the last three years nobody was unhappy with their score, and that difficulty is shared — \"if you feel it's hard, it's also hard for everyone.\"", priority: "LOW" },
  { tip: "Extra credit: Open For Feedback, course code 3972", detail: "An anonymous feedback platform he's trialling. If roughly 30–50 people participate, EVERYONE gets 0.05 extra credit per lecture — around two to three points across the remaining four or five lectures. He tried codes 1912 and 2528 before 3972 worked. It has a Q&A channel too.", priority: "LOW" },
  { tip: "Self-supervised learning is block 9 and not examinable", detail: "Covered in the last twelve minutes. Hide part of the data and predict it from the rest, so the data supplies its own label. LeCun's cake: RL is the cherry, supervised the icing, self-supervised the cake. You don't care about the pretext task — you want the representation. This IS the pre-training stage of an LLM.", priority: "LOW" },
  { tip: "The guest lecture is not examinable either", detail: "Professor Rolling Lee on mixed autonomy — Braess's paradox (a new zero-delay highway can make total delay worse), weaving-ramp coordination, and selfish exploitation where humans take the space an autonomous vehicle yields. She is recruiting up to EIGHT PhD students plus research assistants, from CS as well as Civil Engineering.", priority: "LOW" },
];

// ─── GAME: Final Approach ──────────────────────────────────────────────────
// The last session before the midterm, so the game is a drill rather than a
// lesson. Eight levels work the computations he put on the review slides —
// all of them in scope, all of them doable with the calculator he confirmed
// you may bring — and the boss round is the exam brief itself.
//
// Distractor discipline (claude/lecture-game-spec.md, teaching rule 4): every
// wrong option is a real misconception written to roughly the length of the
// correct one, and several are the exact slips he warned about on the slides.

const GAME = {
  title: "Final Approach",
  tagline: "Eight levels of drill on everything still in scope, then the exam brief itself. Every number here is one he worked on the review slides.",
  nodePrefix: "q",
  takeaway: "Fifty questions over blocks one to seven, about seventy per cent of them fundamentals you can eliminate your way through. Bring a calculator, work last year's paper and the review-slide variations, and hold on to the three rules that keep reappearing: validation selects and test reports, the stored training statistics are the ones that travel, and when you cannot remember whether a function ignores order, substitute two permutations and look.",
  levels: [
    // ── q1 ────────────────────────────────────────────────────────────────
    {
      id: "classical",
      name: "Drill: classical ML",
      problem: "The paper opens where the course did. These are the questions he called fundamentals — about seventy per cent of the exam, and most of them fall to a rule you already know.",
      steps: [
        {
          type: "mcq",
          ctx: "An unpruned decision tree has <b>zero training error</b> and <b>high validation error</b>. You prune it, choosing the depth with the lowest validation error, then evaluate that tree once on a held-out test set.",
          q: "Which statement is correct?",
          opts: [
            "The selected tree can still have non-zero test error, since low validation error guarantees nothing",
            "Zero training error on the original tree means it would have generalised well to unseen data",
            "The pruning depth should be chosen to minimise training error rather than validation error",
            "Choosing the pruning depth on the test set would keep the final estimate unbiased and honest",
          ],
          a: 0,
          why: "<b>Validation estimates test performance; it does not determine it.</b> The other three all die to one observation — zero training error with high validation error means the original tree overfitted. His own method on this question: read the answers <i>before</i> re-reading the question, because the eliminations come fast.",
          hints: {
            1: "Zero training error alongside high validation error is the definition of overfitting, not of generalising.",
            2: "Training error only falls as depth grows, so minimising it just hands back the unpruned tree.",
            3: "Selecting against the test set is precisely what biases it. That is the leakage rule.",
          },
          defaultHint: "Three of these contradict something you already know about overfitting. Find the one that only claims caution.",
        },
        {
          type: "numeric",
          ctx: "<b>Unweighted</b> k-nearest neighbours with <b>k = 3</b>. The three nearest neighbours have target values <b>2, 5 and 11</b>.",
          q: "What does the model predict?",
          answer: 6,
          why: "<b>(2 + 5 + 11) / 3 = 6.</b> The neighbours carry <i>values</i>, not class labels, so this is regression and you average — no voting happens. \"Unweighted\" means all three count equally regardless of distance; a weighted kNN would scale each by proximity and give a different number.",
          hint: "Look at what the neighbours carry. Numbers, not labels — so which aggregation applies?",
        },
        {
          type: "mcq",
          q: "You run k-means twice on the <b>same data</b> with the <b>same k</b> and get different clusters. What happened?",
          opts: [
            "Nothing is wrong — random initialisation leads to different local optima, so k-means is not deterministic",
            "Something is wrong — k-means is deterministic, so identical inputs must produce identical clusterings",
            "The algorithm stopped early on one run; letting both converge fully would make the results agree",
            "The distance metric differed between runs, since k-means picks one at random during initialisation",
          ],
          a: 0,
          why: "<b>Where it settles depends on where it started.</b> His example on 1, 3, 5, 9 with k = 2: one initialisation converges to {1,3} and {5,9}, another to {1,3,5} and {9}. Same data, same k, two answers. This is why implementations run it several times with different seeds and keep the best — scikit-learn's <span class=\"mono\">n_init</span> exists for exactly this.",
          hints: {
            1: "It genuinely is not deterministic. Ask what differs between two runs on identical data.",
            2: "Both runs converged. Converging to a local optimum is the whole issue.",
            3: "The metric is fixed by you, not sampled. Something else is random at the start.",
          },
          defaultHint: "What does the algorithm do first, before any assignment happens?",
        },
      ],
    },
    // ── q2 ────────────────────────────────────────────────────────────────
    {
      id: "shapes",
      name: "Drill: shapes and parameter counts",
      problem: "He has flagged parameter arithmetic as tested in past years and put it in both review sessions. He also worked this one live and lost track of his own running total.",
      steps: [
        {
          type: "numeric",
          ctx: "A network with layer widths <b>3 → 4 → 4 → 2</b>, and <b>no biases</b>.",
          q: "How many learnable parameters does it have?",
          answer: 36,
          why: "<b>12 + 16 + 8 = 36.</b> Weights only: 3×4, then 4×4, then 4×2. Read the bias clause carefully — with one bias per unit this same network would be 46, and that number will be sitting in the options.",
          hint: "Three weight matrices, one per gap between layers. Multiply the widths either side of each gap and add them up.",
        },
        {
          type: "numeric",
          ctx: "Now double <b>both</b> hidden layers, giving <b>3 → 8 → 8 → 2</b>. Still no biases.",
          q: "How many parameters now?",
          answer: 104,
          why: "<b>24 + 64 + 16 = 104</b>, not 72. Doubling the widths does not double the count — the middle layer goes from 4×4 to 8×8, which is <i>four</i> times larger. Any layer sitting between two doubled widths quadruples. His per-layer increases were +12, +48 and +8, totalling +68 on top of 36.",
          hint: "Recompute each of the three products with the new widths. Watch what happens to the middle one in particular.",
        },
        {
          type: "mcq",
          q: "Two things to check before counting parameters in any layer. Which pair?",
          opts: [
            "Whether biases are included, and that a bias is one per unit rather than one per layer",
            "Whether biases are included, and that the activation function contributes its own parameters",
            "Whether the layer is dense, and that weights are shared between adjacent layers by default",
            "Whether the input is flattened, and that flattening itself introduces a learnable projection",
          ],
          a: 0,
          why: "<b>Biases, and one per unit.</b> Those are the two slips that cost marks. A dense layer from m inputs to n units is m × n weights plus n biases. ReLU has no parameters, flattening has no parameters, and nothing is shared between adjacent dense layers.",
          hints: {
            1: "ReLU and its relatives have nothing to learn. They are fixed functions.",
            2: "Dense layers never share weights with their neighbours — that would be the whole point of convolution.",
            3: "Flattening is a reshape. It introduces nothing learnable at all.",
          },
          defaultHint: "Which part of a parameter count do people actually forget?",
        },
      ],
    },
    // ── q3 ────────────────────────────────────────────────────────────────
    {
      id: "optim",
      name: "Drill: one step of gradient descent",
      problem: "Two questions that look like arithmetic and are really about signs — plus the reason your weights cannot all start in the same place.",
      steps: [
        {
          type: "mcq",
          ctx: "The update is w ← w − α·g with a <b>positive</b> learning rate α. Backpropagation reports a gradient g that is <b>negative</b>.",
          q: "What happens to w, and what happens to the loss?",
          opts: [
            "w increases, and the loss decreases locally — subtracting a negative adds, and that is downhill",
            "w decreases, and the loss decreases locally — the update always moves the weight downward",
            "w increases, and the loss increases too, since moving a weight upward undoes the last step",
            "w is unchanged, because a negative gradient and a positive rate cancel in the update rule",
          ],
          a: 0,
          why: "<b>Both at once, and that is the trap.</b> Subtracting a negative adds, so w rises. And the loss still falls, because a negative gradient means the loss <i>decreases</i> as w increases — stepping against the gradient is stepping downhill whichever way the weight happens to move. Note the word <i>locally</i>: the guarantee holds for a small enough step near the current point, and nowhere else.",
          hints: {
            1: "The weight does not always go down. Work the signs: minus times minus.",
            2: "Half right. The weight does rise — but check what the gradient's sign says about the loss.",
            3: "Nothing cancels. α scales the gradient; it does not negate it.",
          },
          defaultHint: "Write out w − α·g with α > 0 and g < 0. Then ask what a negative gradient means about the loss.",
        },
        {
          type: "numeric",
          ctx: "Loss <b>L = (wx − y)²</b> — note there is <b>no ½ factor</b>. Values: x = 3, y = 5, starting weight w = 1, learning rate α = 0.05. Take one step.",
          q: "What is the new weight?",
          answer: 1.6,
          tol: 0.01,
          why: "<b>1.6.</b> Differentiate: dL/dw = 2(wx − y)x. Evaluate: wx − y = 3 − 5 = −2, so the gradient is 2(−2)(3) = −12. Step: w ← 1 − 0.05(−12) = 1 + 0.6 = 1.6. Negative gradient, weight rises — the previous question, concretely. And it moved toward 5/3 ≈ 1.67, the value that makes the prediction exact.<br><br>The missing ½ matters: with it the gradient would be −6 and the answer 1.3. Differentiate what is written, not what you remember.",
          hint: "Differentiate first — the chain rule brings down a 2 because there is no ½ to cancel it. Then substitute, then step.",
        },
        {
          type: "mcq",
          ctx: "Two neurons in the same layer are initialised to <b>identical</b> weights and receive the same inputs.",
          q: "What happens to them over training?",
          opts: [
            "They compute the same output, receive the same gradient, and stay identical forever",
            "They diverge after the first update, because the gradient carries noise from the mini-batch",
            "They converge to opposite values, since the loss rewards the layer for covering more features",
            "They diverge slowly, because floating-point rounding accumulates differently in each unit",
          ],
          a: 0,
          why: "<b>No symmetry breaking.</b> Same inputs and same weights give the same output, so the same gradient, so the same update — forever. Two units with the expressive power of one, and in a 200-unit layer, 200 copies of a single neuron. Randomness is not a nicety; being <i>different</i> is the requirement. And zero is worse still: x·W = 0 gives no signal forward, and the chain rule multiplies by W, so nothing flows back either.",
          hints: {
            1: "Both units see the same mini-batch, so they see the same noise. Nothing distinguishes them.",
            2: "Nothing in the loss rewards diversity directly. The units have no way to tell each other apart.",
            3: "They perform bit-identical arithmetic on bit-identical inputs. There is no rounding difference.",
          },
          defaultHint: "Follow one update through for both units. At what point do their numbers differ?",
        },
      ],
    },
    // ── q4 ────────────────────────────────────────────────────────────────
    {
      id: "stability",
      name: "Drill: normalization, penalties, dropout",
      problem: "Three places where the same idea shows up — training and inference have to be kept on the same scale — plus the penalty that breaks a tie between two equally good models.",
      steps: [
        {
          type: "numeric",
          ctx: "A batch-norm layer stored a training mean of <b>3</b> and a training variance of <b>4</b>. At <b>evaluation</b> time a single input of <b>7</b> arrives.",
          q: "What is the normalised output?",
          answer: 2,
          tol: 0.01,
          why: "<b>(7 − 3) / √4 = 4 / 2 = 2.</b> At evaluation you use the <i>stored training</i> statistics and recompute nothing — there is no batch to compute from, and you want deterministic output anyway.<br><br>He put a wrong version of this slide up and caught it live: (7 − 5)/√4 = 1, using a mean taken from the evaluation data. That wrong answer is also a tidy integer, which is exactly why it makes a good distractor.",
          hint: "Which mean did the layer store? Not one computed from the data you are now evaluating.",
        },
        {
          type: "numeric",
          ctx: "Two weight vectors, both achieving the same data loss of <b>0.04</b>, with λ = <b>0.02</b>. The objective is data loss + λ‖w‖². Candidate <b>A = (3, 0)</b> scores 0.04 + 0.02(9) = <b>0.22</b>.",
          q: "What does candidate <b>B = (2, 1)</b> score in total?",
          answer: 0.14,
          tol: 0.005,
          why: "<b>0.04 + 0.02(2² + 1²) = 0.04 + 0.02(5) = 0.14.</b> B wins, and the data loss played no part — it was identical, so the penalty broke the tie alone.<br><br>Notice both vectors sum to 3. It is the <i>squaring</i> that separates them: 9 against 5. L2 therefore prefers weight spread across features over weight concentrated in one. Under L1 these two would score identically, and L1's own preference is for exact zeros.",
          hint: "Square each component, add them, multiply by λ, then add the data loss.",
        },
        {
          type: "mcq",
          ctx: "<b>Inverted dropout</b> with keep probability <b>q = 0.8</b>. During training the implementation already scales activations by <b>1.25</b>.",
          q: "What do you do at evaluation time?",
          opts: [
            "Nothing further — disable the mask. 0.8 × 1.25 = 1, so the scale already matches",
            "Multiply the activations by 0.8, since evaluation always applies the keep probability",
            "Multiply the activations by 1.25 again, to match the scaling that training applied",
            "Keep the mask active but halve the drop rate, so inference and training stay comparable",
          ],
          a: 0,
          why: "<b>The scaling already cancels.</b> 1.25 is 1/0.8, which is the entire point of the inverted convention — correct during training so inference needs nothing. His rule: if you don't scale during training you must scale at test; if you do, you don't. Never both, never neither.<br><br>The one thing you always do is <b>disable the mask</b>. Evaluation runs the full network deterministically; dropping at inference would make the prediction random.",
          hints: {
            1: "That is standard dropout's correction. This implementation already did its scaling during training.",
            2: "Scaling twice would overshoot. Multiply 0.8 by 1.25 and see what you get.",
            3: "The mask is switched off entirely at evaluation, not reduced. Inference must be deterministic.",
          },
          defaultHint: "Multiply the keep probability by the training-time scale. What does that tell you?",
        },
      ],
    },
    // ── q5 ────────────────────────────────────────────────────────────────
    {
      id: "sequential",
      name: "Drill: sequences and attention",
      problem: "The sequential block, reduced to the three claims he repeated and one calculation.",
      steps: [
        {
          type: "mcq",
          q: "An RNN applies the <b>same</b> weights θ at every position. Why don't all the positions produce the same output?",
          opts: [
            "The hidden state differs at each step, so θ is applied to different arguments every time",
            "θ is re-scaled at each position by a factor that depends on how far along the sequence you are",
            "Dropout is applied between timesteps, which makes each position's computation slightly different",
            "The weights are shared only across the forward pass, and each position learns its own gradient",
          ],
          a: 0,
          why: "<b>Same function, different arguments.</b> The output depends on θ <i>and</i> on the hidden state carried in, and that state encodes everything seen so far — so it differs at every position, as does the input. He walked positions 1 through 4 explicitly: one f_θ, four different states, four different outputs.<br><br>Sharing is what makes variable-length sequences possible at all: one parameter set rather than fifty for a fifty-token sentence.",
          hints: {
            1: "Nothing re-scales θ by position. The weights really are identical everywhere.",
            2: "Dropout is optional and would not explain the systematic differences along the sequence.",
            3: "The weights are shared in both passes — the gradients accumulate into one parameter set.",
          },
          defaultHint: "The function is the same. What else does it take as input besides x?",
        },
        {
          type: "mcq",
          q: "You train with <b>truncated</b> backpropagation through time, in chunks of three steps. What crosses a chunk boundary?",
          opts: [
            "The hidden state crosses; the gradient does not. The forward pass is unbroken, the backward one is cut",
            "The gradient crosses; the hidden state does not. Each chunk restarts its state from zero at the boundary",
            "Both cross freely, and truncation only limits how many steps are stored for the backward pass",
            "Neither crosses, since truncation makes the chunks completely independent of one another",
          ],
          a: 0,
          why: "<b>State forward, gradient stopped.</b> That distinction is the question. The forward pass runs normally through the whole sequence, so context carries across boundaries. Only the backward pass is cut, which is what saves memory — you no longer store every intermediate state — and what costs you gradient signal for dependencies longer than a chunk.",
          hints: {
            1: "Exactly backwards. Resetting the state would destroy the context the model exists to carry.",
            2: "If both crossed, nothing would be truncated and nothing would be saved.",
            3: "The forward pass is untouched. Something does carry across.",
          },
          defaultHint: "Truncation is about the BACKWARD pass. What does that leave the forward pass doing?",
        },
        {
          type: "numeric",
          ctx: "Attention over three tokens. The attention weights are <b>0.2, 0.3 and 0.5</b>, and the corresponding value vectors are <b>1, 2 and 10</b>.",
          q: "What is the context vector?",
          answer: 5.8,
          tol: 0.01,
          why: "<b>0.2(1) + 0.3(2) + 0.5(10) = 0.2 + 0.6 + 5 = 5.8.</b> The context is the weighted sum of the value vectors, and because the weights sum to 1 it is a weighted average. Notice how the 0.5 weight on the value of 10 dominates — that is attention concentrating on the token that matters.<br><br>It is recomputed after every generated token, as the context grows.",
          hint: "Multiply each weight by its value and add. The weights sum to 1, so the answer sits between the smallest and largest value.",
        },
      ],
    },
    // ── q6 ────────────────────────────────────────────────────────────────
    {
      id: "graphs",
      name: "Drill: graphs",
      problem: "One calculation, one property, and the distinction he drew on the board twice because students get it backwards.",
      steps: [
        {
          type: "numeric",
          ctx: "A road network with layer-0 values <b>A = 1, B = 2, C = 4, D = 8</b>. A's neighbours are B and C. The update is 0.5 × (own value) + 0.5 × (mean of neighbours).",
          q: "What is A's layer-1 value?",
          answer: 2,
          tol: 0.01,
          why: "<b>0.5(1) + 0.5(3) = 2.</b> The neighbour mean is (2 + 4)/2 = 3. Every node updates simultaneously from the <i>previous</i> layer — so B, whose only neighbour is A, becomes 0.5(2) + 0.5(1) = 1.5, using A's old value of 1 rather than its new 2.<br><br>The learnable parts are two matrices per layer: W_k for neighbour influence, B_k for self. Both shared across every node, which is what lets a trained GNN run on a graph it has never seen.",
          hint: "Average A's two neighbours first, then take half of that plus half of A's own value.",
        },
        {
          type: "multi",
          q: "Select every function whose output is <b>unchanged</b> when you permute its inputs.",
          opts: [
            "Mean",
            "Sum",
            "Max",
            "Min",
            "Sum of ReLU",
            "First element",
            "Position-weighted sum",
          ],
          correct: [0, 1, 2, 3, 4],
          why: "<b>Five of the seven.</b> Mean, sum, max and min collapse a set to one number with no reference to order. Sum of ReLU does too, because you apply ReLU element-wise and then sum — order-independent twice over.<br><br>His trick for settling this under time pressure, demonstrated live: just substitute. Take [−1, −10, 100] and its permutation [100, −1, −10]. Sum of ReLU gives 0 + 0 + 100 = <b>100</b> both ways. A position-weighted sum gives <b>279</b> one way and <b>68</b> the other. Two plug-ins and no theory.",
          hintFn: (sel) => {
            if (sel.indexOf(5) !== -1) return "'First' is a position. Reorder the inputs and you get a different element.";
            if (sel.indexOf(6) !== -1) return "Try it: weight by position on [−1, −10, 100] and then on [100, −1, −10]. The two differ.";
            if (sel.indexOf(4) === -1) return "You are missing one. ReLU is applied element-wise, and then the results are summed — does either step care about order?";
            return "Five of these collapse a set without caring where each element sat.";
          },
        },
        {
          type: "mcq",
          ctx: "A GNN was trained on molecules whose node features are, in order, <b>(atomic number, charge)</b>. A new molecule arrives with those two columns <b>swapped</b>. The model is frozen.",
          q: "What must you do before running it?",
          opts: [
            "Restore the training feature order and definitions before applying the shared weights",
            "Nothing — a GNN is permutation-invariant, so it handles reordered features automatically",
            "Reorder the features and leave the adjacency matrix unchanged, since relabelling cannot affect it",
            "Retrain the final layer on the new ordering, keeping the earlier message-passing layers frozen",
          ],
          a: 0,
          why: "<b>Node order is handled for you; feature order is not.</b> Weight columns are matched to features <i>positionally</i> — column 1 of W was trained to mean \"atomic number.\" Feed it charge and the arithmetic still runs, produces numbers, and raises no error. It is simply wrong, and the model cannot detect it.<br><br>He spent several minutes on why the third option is also false: <b>relabelling nodes DOES change the adjacency matrix.</b> Take A–B, A–C and C–D, rename the nodes, and the matrix of ones and zeros is genuinely different even though the graph is identical. He drew it twice.",
          hints: {
            1: "Permutation invariance covers NODE ordering. Features are a different kind of ordering entirely.",
            2: "He drew this on the board to disprove it. Renaming nodes really does change the matrix.",
            3: "Retraining defeats the purpose of a frozen model, and the mismatch is in the input, not the head.",
          },
          defaultHint: "Two kinds of ordering are in play here. Which one does mean-aggregation actually protect you from?",
        },
      ],
    },
    // ── q7 ────────────────────────────────────────────────────────────────
    {
      id: "traps",
      name: "Drill: the questions with no arithmetic",
      problem: "Three recurring items that are decided by a rule rather than a calculation — which makes them fast marks if you have the rule and slow ones if you don't.",
      steps: [
        {
          type: "mcq",
          q: "Rotation worked well as augmentation on a flower dataset. You move to handwritten digits. What happens?",
          opts: [
            "It breaks — a rotated 6 is a 9, so the label changed and augmentation must preserve the label",
            "It breaks — rotated digits become unreadable, so the extra examples are pure noise to the model",
            "It still works — digits are rotation-invariant, so the extra examples improve robustness further",
            "It still works, but only for symmetric digits like 8 and 0, where rotation changes nothing at all",
          ],
          a: 0,
          why: "<b>The rotated 6 is perfectly legible, and that is what makes it dangerous.</b> You are now training the model that a 9 is a 6. Augmentation is valid only while the label survives, which makes it application-dependent — the same transform that helped the flower breaks the digit. He has given this example in two separate lectures.",
          hints: {
            1: "A rotated 6 is entirely readable. Noise would be less harmful than a confidently wrong label.",
            2: "Digits are very much not rotation-invariant — that is the whole point of the example.",
            3: "True of 8, and he mentioned it — but a useless example is not the same as a harmful one.",
          },
          defaultHint: "Write a 6 on paper and turn it upside down. What are you now looking at?",
        },
        {
          type: "mcq",
          ctx: "You trained for 8 epochs and saved a checkpoint at each. Training loss fell throughout. Validation loss reached its minimum at <b>epoch 5</b> and rose afterwards.",
          q: "Which checkpoint do you keep?",
          opts: [
            "Epoch 5 — the validation minimum, regardless of how much better training looked afterwards",
            "Epoch 8 — the final weights, since every later epoch still reduced the loss being optimised",
            "Epoch 8, but retrained from scratch for only 5 epochs now that you know where validation bottomed",
            "The average of epochs 5 through 8, which smooths out the noise in any one epoch's weights",
          ],
          a: 0,
          why: "<b>Training loss falling is guaranteed by construction</b> — it is the thing being minimised — so it cannot be the selection criterion. Everything after epoch 5 is worse on data the model has not seen. Every epoch's weights are a different model, and releasing one means choosing a point on the trajectory.<br><br>Note that in a monotonic run, \"the last epoch\" and \"the best training loss\" are the same wrong answer.",
          hints: {
            1: "The loss it reduced is the one you cannot select on. Which curve estimates unseen performance?",
            2: "You already have those weights saved. Retraining would cost a full run to arrive where you are.",
            3: "Weight averaging is a real technique, but it is not checkpoint selection — and it would include the overfit epochs.",
          },
          defaultHint: "Eight sets of weights are sitting on disk. Which performs best on data it never saw?",
        },
        {
          type: "mcq",
          q: "In the standard transfer-learning setup, which layers do you freeze, and why?",
          opts: [
            "The early ones — they learn edges, colours and light, which are properties of images rather than of your task",
            "The late ones — they hold the most refined features, so they are the most valuable part of the network to keep intact",
            "All of them — the point of transfer learning is that no weights change, only the input data does",
            "The early ones — they hold most of the parameters, so freezing them is what makes training affordable",
          ],
          a: 0,
          why: "<b>Generic early, specific late.</b> An edge is an edge whether the image contains a flower, an elephant or a face, so those filters are already right. The later layers compose them into something task-specific, and that is the part you replace. The frozen pretrained portion is the <b>backbone</b>.<br><br>He stressed the flexibility — you can unfreeze later feature layers too. From Lecture 7, the two axes that decide how far: how much target data you have, and how similar source and target are.",
          hints: {
            1: "Backwards. The refined features are the ones most specific to the old task, so they are what you replace.",
            2: "Something has to be trained, or the model cannot do your task at all.",
            3: "Parameter count is not why those layers transfer. Ask what they actually learned.",
          },
          defaultHint: "Which layers learned something about images in general, rather than about the original labels?",
        },
      ],
    },
    // ── q8 ────────────────────────────────────────────────────────────────
    {
      id: "ssl",
      name: "Self-supervised learning",
      problem: "The one piece of new material, covered in the last twelve minutes after he put it to an anonymous vote. Block 9, so it is not on the exam — but it is what 'pre-training' actually means.",
      steps: [
        {
          type: "order",
          q: "How a self-supervised model gets used. Click the four stages in order.",
          pieces: [
            "Hide part of the unlabelled data — a token, an image patch, the rotation angle",
            "Train the model to predict the hidden part from what remains",
            "Throw away the pretext head and keep the encoder's representation",
            "Attach a small classifier and fine-tune it on the few labels you actually have",
          ],
          posHints: [
            "You have no labels. The first move is to manufacture a target out of the data itself.",
            "There is a target now. Something has to be trained against it.",
            "The pretext task is done, and predicting a rotation angle was never the goal. What was?",
            "You are holding a good representation. Only one thing is left to do with it.",
          ],
          why: "<b>You never cared about the pretext task.</b> Predicting a rotation angle is useless in itself — what you want is the representation learned along the way, which is then evaluated on a real downstream task. Exactly the autoencoder pattern from Lecture 8: train on a proxy objective, discard the head, keep the encoder.",
        },
        {
          type: "mcq",
          q: "Why does predicting an image's <b>rotation angle</b> teach a model anything useful?",
          opts: [
            "To know an image was turned 90°, it must know which way up the content belongs — visual common sense",
            "Rotation is a hard geometric transform, so the network must learn precise pixel-level coordinates",
            "The four rotation classes are perfectly balanced, which makes the gradient signal unusually clean",
            "Rotating creates four times as much training data, and more examples always improve a representation",
          ],
          a: 0,
          why: "<b>Birds perch on branches; faces have a top.</b> Detecting that an image is sideways requires knowing what upright looks like for the content in it — which means recognising the content. The label costs nothing because you performed the rotation yourself and recorded the angle.<br><br>The payoff he showed: with few labels, self-supervised pretraining beats fully supervised training. With many labels they converge, since labelled data remains the gold standard. So it buys a very good starting point.",
          hints: {
            1: "The model only picks one of four angles. Pixel-precise geometry is not required.",
            2: "Balanced classes are convenient and would not teach the model anything about content.",
            3: "The four copies are near-duplicates. The value is in what the task forces the model to understand.",
          },
          defaultHint: "What would you have to recognise in a photograph to tell whether it had been turned on its side?",
        },
        {
          type: "mcq",
          q: "Where does self-supervised learning sit in the training of a large language model?",
          opts: [
            "It is the pre-training stage — predict the next or missing token to learn representations",
            "It is the post-training stage — align the model to human preference after pre-training ends",
            "It replaces training entirely, since a model trained this way needs no supervised stage at all",
            "It runs alongside supervised training throughout, with the two losses summed at every step",
          ],
          a: 0,
          why: "<b>Pre-training is self-supervised.</b> Predict the next or missing token over an enormous corpus — the text supplies its own labels, which is the only reason internet-scale training is possible. The model is not chasing a score on that task; it is learning representations.<br><br><b>Post-training</b> is the supervised part: SFT and alignment to human preference, which is what turns a pretrained model into an assistant. He said the two stages would be covered properly after the midterm.",
          hints: {
            1: "Post-training is where human preference data comes in. Self-supervision needs no humans at all.",
            2: "Alignment genuinely does require supervision. Pre-training alone does not produce an assistant.",
            3: "The stages are sequential, not simultaneous — pre-training finishes before post-training starts.",
          },
          defaultHint: "Which stage runs on raw text with no human annotation anywhere?",
        },
      ],
    },
    // ── q9 ────────────────────────────────────────────────────────────────
    {
      id: "boss",
      name: "Boss round: the brief",
      problem: "Six questions about the exam itself. Getting these wrong costs more marks than any single concept on the paper.",
      steps: [
        {
          type: "mcq",
          q: "What is the <b>scope</b> of the midterm?",
          opts: [
            "Blocks 1 through 7, and not the research topics inside them either",
            "Blocks 1 through 8, since block 8's generative models were covered before the exam",
            "Blocks 1 through 7, including the research papers he presented within those blocks",
            "Everything taught so far, with the most recent two lectures weighted most heavily",
          ],
          a: 0,
          why: "<b>One through seven, research excluded.</b> He confirmed it twice, the second time answering a student who asked directly about block 8: \"block eight is already generative… It's just one, two, seven.\" And on research: \"for most of the research topics in this seven blocks, you don't need to worry about it at all.\"<br><br>So out of scope: GANs, autoencoders, VAEs, AutoML, self-supervised learning, hypernetworks, the persona-simulation study, the agent-graph papers, and both guest lectures.",
          hints: {
            1: "He was asked this exact question and said block 8 is out.",
            2: "Right range, wrong on the research. He excluded those explicitly.",
            3: "There is a hard boundary rather than a weighting, and it sits at the end of block 7.",
          },
          defaultHint: "A student asked this directly in the last session. What did he answer?",
        },
        {
          type: "mcq",
          q: "Which revision materials did he point at, and what are they?",
          opts: [
            "Last year's real exam, plus review-slide questions that are variations of this year's real questions",
            "A practice exam written for this course, plus review slides summarising each block's formulas and definitions",
            "The lecture recordings and the full slide decks, which he said are the only reliable sources",
            "A question bank on Piazza contributed by previous cohorts, plus the textbook's chapter exercises",
          ],
          a: 0,
          why: "<b>Both are unusually direct sources.</b> The sample questions he distributed are a real past paper — \"the sample questions I gave to you is a real exam last year\" — with the caveat that last year covered slightly less. And the review slides' practice questions were produced by asking an agent for <i>variations of the actual exam questions</i>.<br><br>He also endorsed combining them: \"we don't prohibit anything for preparing it… if your AI is smart enough, maybe it can also even guess what will be in the exam.\"",
          hints: {
            1: "The sample paper is not a mock. He said plainly what it actually is.",
            2: "He actively discouraged working from the full decks, and suggested condensing them instead.",
            3: "No student question bank was mentioned, and there is no set textbook for the exam.",
          },
          defaultHint: "One of the two artifacts is a real exam. What is the other one derived from?",
        },
        {
          type: "mcq",
          q: "What are you permitted to bring?",
          opts: [
            "Any paper materials and a basic calculator with no internet connection — but no smart glasses",
            "Any paper materials, but no calculator of any kind, since no complex calculation is required",
            "A single double-sided cheat sheet and a basic calculator, with no other printed material",
            "Any paper materials and any calculator, including graphing and programmable models with formulas stored on them",
          ],
          a: 0,
          why: "<b>Paper unlimited, calculator basic, glasses ordinary.</b> The calculator permission reversed his Lecture 7 ban and he confirmed it again here — square root is worth having for the normalisation questions. Nothing internet-connected, nothing too elaborate; he declined to name an approved model and said proctors will look.<br><br>On glasses he was specific, having seen a student present through AI glasses with a control ring. Proctors will be at the front and the back.",
          hints: {
            1: "That was the Lecture 7 position and he reversed it twice afterwards.",
            2: "There is no cheat-sheet limit — paper materials are unrestricted, though he asked you not to print hundreds of pages.",
            3: "\"Any calculator\" goes too far. He asked for basic models and said proctors would check.",
          },
          defaultHint: "One item was banned and then un-banned; one item is unrestricted; one is forbidden outright.",
        },
        {
          type: "mcq",
          q: "What is the format, and what should you make sure you do?",
          opts: [
            "50 questions over two hours, 11 pages, one answer sheet — and write your USC ID clearly",
            "50 questions over two hours on Gradescope, submitted digitally with your USC ID auto-filled",
            "100 questions over two hours, 11 pages, with answers marked directly on the question paper",
            "50 questions over 90 minutes, 11 pages, with one answer sheet collected at the halfway point",
          ],
          a: 0,
          why: "<b>50 questions, two hours, 11 pages, one answer sheet.</b> Bring a pen or pencil. He asked specifically that the USC ID be written clearly, which is the kind of thing people forget under time pressure.<br><br>Two reassurances he offered: in past years most people finish in an hour or less, and roughly 70% of the paper is fundamentals. He will not be present — proctors run it and he may join by Zoom, so ask a proctor if a question looks under-specified.",
          hints: {
            1: "It is paper-based — he described the page count and the answer sheet.",
            2: "Fifty questions, not a hundred, and answers go on a separate sheet.",
            3: "The full two hours, and nothing is collected partway.",
          },
          defaultHint: "He gave a page count, a sheet count and one instruction about identifying yourself.",
        },
        {
          type: "mcq",
          q: "You finish a question and realise you have no idea. What did he suggest?",
          opts: [
            "Eliminate the obviously wrong options first — on most fundamentals two or three fall to a rule you know",
            "Leave it blank, since there is a penalty for incorrect answers on multiple-choice papers",
            "Pick the longest and most detailed option, which is usually the one carrying the real explanation",
            "Flag it and move on, then return at the end once you have seen whether a later question answers it",
          ],
          a: 0,
          why: "<b>Eliminate, then guess.</b> He demonstrated it on the pruning question — read the answers before re-reading the question, and watch three of the four die to the single observation that the tree overfitted. He noted that with obviously wrong options removed, a guess has a good chance, and that there is no penalty for being wrong.<br><br>Option three is worth noticing: picking the longest answer is a real test-taking heuristic, and it is exactly the tell these games were rewritten to remove.",
          hints: {
            1: "No penalty was mentioned, and on a 50-question paper a blank is a guaranteed zero.",
            2: "A tempting heuristic in general — but nothing he said suggests this paper rewards it.",
            3: "Reasonable practice, and not the specific method he demonstrated on the slides.",
          },
          defaultHint: "He worked a question live and showed how fast the wrong options disappear.",
        },
        {
          type: "mcq",
          q: "Last one. What happens if the paper turns out to be hard?",
          opts: [
            "He curves — he said so twice, and noted nobody has been unhappy with their score in three years",
            "Nothing — the score stands as marked, and the syllabus fixes the midterm's weight in advance",
            "A make-up exam is offered the following week to anyone scoring below the class median",
            "The ten questions with the lowest success rate are dropped for everyone before the final marks are computed",
          ],
          a: 0,
          why: "<b>\"If everyone gets a low score, we're going to curve. If everyone gets a high score, we'll leave it.\"</b> Stated twice, unprompted. He added that difficulty is shared — \"if you feel it's hard, it's also hard for everyone\" — and that in the past three years nobody worried much about the scores.<br><br>So: work last year's paper and the review-slide variations, write down the formulas, bring a calculator and your USC ID, and remember that validation selects while test reports. Good luck.",
          hints: {
            1: "He addressed this directly, twice, and the answer was not \"nothing.\"",
            2: "No make-up was mentioned. The adjustment he described applies to everyone at once.",
            3: "Dropping questions was not what he described. The adjustment is to the scores themselves.",
          },
          defaultHint: "He raised this himself, unprompted, as reassurance. What was the mechanism?",
        },
      ],
    },
  ],
};

export default function Lecture9_MidtermReview2({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>OCT 26 · LECTURE 9</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Midterm Review Part 2</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          The last session before the exam. Review resumes at stochastic gradient descent and runs through optimization, initialization, regularization, batch normalization, dropout, sequential models, attention and graph networks — every worked example done live with the numbers. Then the exam brief itself: scope, logistics, what to bring, and what the sample paper actually is. Self-supervised learning closes the session and is not examinable.
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
              const priorityColor = t.priority === "HIGH" ? "#ff6b5e" : t.priority === "MEDIUM" ? COLOR : STONE;
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
        {tab === "game" && <LectureGame lectureId="lecture9" game={GAME} />}
      </div>

      {/* Floating tutor button — scoped to this lecture */}
      <button onClick={() => setChatOpen(o => !o)} style={{
        position: "fixed", bottom: "24px", right: "24px",
        width: "56px", height: "56px", borderRadius: "50%",
        background: chatOpen ? CARD_BG : `linear-gradient(135deg, ${COLOR}, ${ACCENT})`,
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
          lectureTitle="Midterm Review Part 2"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
