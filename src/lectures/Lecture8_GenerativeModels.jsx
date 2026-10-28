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
I think we can start. And originally I originally I believe that that we want to do this mid-term review next week.
However, we have a guest speaker next week. And also maybe it's too late for people to refresh their knowledge.
So I think it might be okay to do some review, like at least 50% of the review this week,
and we'll leave the rest of the review next week so that you still get a part of the information to refresh your mind,
and you have more time to prepare for the midterms. And again, midterms is the 50 questions is multiple choice question.
Um, difficulty level should be on par to the to the last few years.
I think I put up one of this midterm, um, last year.
Midterm? Not last year, Maybe a year or two years ago.
Midterm questions online. It's on Piazza. Just check it out.
I don't remember which post I put it, but I think it should be under something like a midterm if you couldn't find it.
I can I can repost it. Um, and, uh, I think, uh, I think it's not difficult at all.
However, uh, when I was a student, it's always difficult. So.
Because because we have so many, so much material. So that's one of the reasons why it's becoming more challenging.
So I think we're going to. So basically this is a review material.
It's uh it's a it's back propagated through the, uh, the real exams.
For example I first designed the questions then back propagate through the materials.
So basically all the questions should come from the material. I don't know people I don't hope people to bring a thousands of pages of the printouts.
That will be again, that's too brutal for the environment. And as you can see that the weather nowadays is extreme.
Uh, okay. So basically the midterm only covers the following major points.
Uh, from the classical machine learning for the computation, loss computation, etc., etc..
Uh, until, you know, graph and uh, some shared computation.
So basically that's all covered through the block seven, uh, because um, because the rest of things are not covered yet.
It's not in the exams. It's not going to be in the exam.
Uh, there will be some pointers to the pages, but we're quickly we're going to quickly go through the major points again,
uh, so that you will get some, uh, you know, quick refresh.
But again, as a review, it's also 200 pages. So, so it's, uh, so it's slightly weird, but, uh, bear with me.
Um, so the first part of the review is on evaluation of the classical machine learning.
Uh, recall in the very beginning of the class we talk about again, this will be on the bright space, right?
So that you will actually see the recording. You can actually see the recording afterwards.
So don't worry. And this the slides is already posted. We are going to use maybe a few not a few like maybe 30 40 minutes to do this.
Refresh and ask a few questions. And then we're going to cover the new materials which is the automated machine learning.
Very autoencoder and also generative adversarial networks.
So so the first part is about evaluation and classical machine learning.
As you remember, the overall the goal of the machine learning will be user training data,
train some machine learning models and minimize the loss function of your model and so that you can optimize your weight matrices.
This actually includes multiple things, right? This is like a high level things.
But I'm going to show you I'm going to show you the examples which means you have the training data,
which means it's actually trying to fit your used to,
you know, feature parameters, which means they're learnable and you're going to optimize your parameters.
You also get something called the validation data, which actually through the training process,
you are going to use the validation data to select what's the best setting and when to stop, etc..
And finally you have this test data give you the final check. However you shouldn't.
You should never use the test data to fine tune your model because that's a, that's a that's a leakage or that's a cheating.
You can only use your validation.
However, when you use the validation data to do this, uh uh, setting selection and tuning, the more you used it, the more easier it's overfitting.
So it's it's also a degree of overfitting. And we also talk about pre-processing.
And usually we just apply the pre-processing or get the pre-processing statistics on the training data only.
Which means when we're doing this normalization and other things you calculate the
mean and standard deviation on the training data and you remember this statistics.
And then you apply them on the validation test data. You don't recompute.
You actually memorize or take this, you know, write this down for the validation test.
You just apply them as a transformation during the validation test.
And another key component will be generalization,
which means you want to make sure your model have a low error on the new data, not just on the training data.
Right. Like, it's easy to have the low error or low loss function on the training data,
but the overall goal is to make sure your model have a good performance on your unseen data, which means test data.
Uh, we also covered something about k nearest neighbor and k means, but I'm going to look that into details.
Uh, so again. So again, this is more like a detailed example to cover the four points.
I just mentioned a recall in the in the general machine learning training.
You have a you have this setup, which means you have the training data and you have a validation.
You have a test data. and for example use cases. We're just doing this image classification.
And you get multiple photos. And you are you know, you're just trying to use the training data to actually learn the model weights.
And you just tune your model using validation. And finally you make the final prediction on the test data to see how good it is.
Uh, so so so so what does that even mean for using validation to choose the model or choose the setting and then test the ones basically.
Let's, let's let's look at this simple example. You have two decision trees and they're all fitting on the same training data.
I mean same training photos. And we have the first one which means the candidate A, it has the depth of two for the decision tree.
And you will see the training average 10% and the validation error is 15%.
You have a separate tree which means the depth equal to ten, which means you are trying to learn a good setting for decision tree.
For this specific example, you will say training error is pretty low as A0, but the validation loss or validation error is high.
So in this case, clearly a trust is better because it achieves lower validation loss, not only the lower training loss.
So this is a better balance than this one. This one just means you overfit your training data.
It achieves very good performance. However, the validation doesn't give you good, good performance on this.
So therefore.
So therefore candidate A is more likely to have a good performance than the test data because it's already doing relatively good on the validation.
And this is a this is a this is another example I'm saying what do we mean for data preprocessing during the training data.
So recall recall that slides we have this normalization of the images.
You subtract the mean and you normalize or divide it by the standard deviation of the the training images a batch of the images.
So this is the example we're showing here. For example during the training.
During the training, you calculate the mean of the feature over the eight training samples equal to 100 and through the.
So so basically you remember this mean of the feature over this training sample is equal to 100.
And sometimes you also remember that the standard deviation as well. And this is your training data.
So which means the training photo you know subtract the mean equal to 20.
And when you apply this on your you know you apply this transformation on your test data.
You you don't recompute the mean at all. You directly use this 100 memorized during the training data.
And you subtract by 100, subtract by 100. You get a 2030 negative ten after the transformation.
So basically again this is a key point for when you are planning the data preprocessing.
You just memorize the statistic. Mostly you memorize the statistic from the training and then apply during the validation the test.
Uh so sometimes this is the sample question.
This is a more like a sample question, like a midterm, which means to check your understanding of the training validation test.
Uh, so basically uh, actually you can go over that during the, during the review.
I'm not I'm not going to read it out. But in short, basically training phase weight and preprocessing validation.
Choose the setting checkpoints and test the evaluation. Uh, evaluate the final selected model.
Uh, so so basically this will ask you some questions and I'm going to show I also give you the answer for that.
I will skip but you will check it later. Uh another thing we covered is a decision tree, right.
If you remember what's decision tree, is there a classical machine learning model?
And of course, if you have any questions through the through the review, feel free to raise it.
And, uh, so that you can get a You know, first hand feedback.
So what's the decision tree? Remember. If we start from this is the training data.
If you start from some training data you split on some features.
If you recall this, is that a loan prediction whether we're going to based on the credit history,
the length of the terms and income of the person and to to approve the loan for, for for the, for the applicants.
You split on certain features. For example, if you split down the credit history not history, actually credit how good it is.
Excellent. Poor. You're going to feature data and you just keep splitting on the features.
And finally you try to put all your training data in different buckets.
That will be the convergence of the training data.
And therefore when you have some new predictions, you can simply just try to go through the past to say what's the most probable,
probable way or probable result for this specific person.
For example, given quite equal to poor income, equal to high end, the term equal to five years is likely to be safe.
So basically this the trade is build a build through your training data.
But the prediction is just like fitting the tree again to say the most probable path of it.
And using decision tree and also including using this train test, train validation and train validation test split.
We give emphasis on the overfitting and underfitting.
It's more like a quick revisit, which means we hope or we favor a model which can well describe your data, but also at the same time,
it's not trying to describe your data extremely well because which means this is likely to overfit certain noise and things,
which doesn't need to be the case, but so that the generalization will be bad when you actually generalize on something you never seen before.
This is going to be pretty bad. So this is an example, which means your curve is your your your your function is too simple.
And this is too complex. This is something appropriate fitting.
But how to actually but how to actually really quantify the overfitting or or you know, underfitting or right, right fit as a decision tree.
As an example, you can say we usually look at the training test data or training validation loss or accuracy to understand this.
So this is the size of the trade number of the nodes. Which means if you just if you just like keep adding more splits.
And when you when you have more splits, it's likely the tree becoming more and more complex, which means you have a higher capacity of the model.
And which means if you have an extremely complex tree, you can almost describe anything you want, right?
So that that makes your model more and more challenging or more more capable.
However, at the same time, you overfit your data so you will see the training data.
The training accuracy become better and better and better.
And because you have more capacity now to describe your underlying training data, but your test data, you can see accuracy.
Actually there's a there's a peak and it keeps dropping because your train now is overfitting and it's too complex to really fit your data well.
So this is an example for which means which means in the very beginning.
So when it's increasing which means it's actually from underfitting to some perfect range.
This is the perfect range. And then, you know, these two curves diverge and the overfitting happens.
So that's a quick thing to to look at.
And again this is more like an abstract version of this overfitting and underfitting.
Uh the the x axis is the model complexity.
And for example, the number of the trees or the tree size or the size of the deep neural network.
How many neurons in it? This will be the error. You will say the loss or the error?
Should the training. The training? The training error should.
Usually when you give more and more complexity or the model, if you give more capability of the model,
the training error usually can go or can go lower and lower and lower.
However, your test data which means generalization error. Usually there's an optimal setup which.
So that's why we are using validation to in place of the test data to find this optimal model settings.
Which means in real world training, you never use test data to understand when to stop.
Use your validation set as the proxy for the test data to to know where to stop.
And this range will be underfitting because you just through this process, both of this generalization and the training the training error get lower.
However, at a certain point they diverge. The direction diverge and and you get into the region of the overfitting.
Uh, and uh, again, this is an example again for general, uh, overfitting, which means your training error keeps going down,
but your validation stays the same or even higher, which means starting potentially from this point, the optimal, you know, the optimal, uh, points.
Uh, maybe at this point, it doesn't matter. It's just like a minor wiggle room and you reach the optimal points, and then it becomes overfitting.
Yes. I'm sure. So what you're feeling like you're saying it's too good to be true, right?
This is the purpose that we want a optimal model that you want some of like the X's to be in the O's.
So when you go to actually train the model and test it on new things that it hasn't seen,
you try to like mimic real life where it's not always going to be perfect.
Is that a good way to like, think about like if it's really too good to be true.
And then obviously underfitting is not going to work. Is that like a good way to think about it?
Uh, I think one thing I need to add on top of the overfitting and underfitting is that this is more for a classical machine learning,
uh, because, uh, because in the, because in the pre large language model time, we don't have enough data.
So usually you have thousands of samples or etc., etc.. So this, uh, this overfitting thing happens a lot, which means it's, uh, again, it's right.
It's too good to be true because you only have a small set of the data. Your model is powerful enough to memorize any noise or whatever in the data.
But in the large language model time, uh, the overfitting becomes a we need to give it a question mark, which means, uh,
they find a new phenomenon, which means you just keep training, use an extremely large model, just keep training things getting better and better.
Uh, this is a this is.
But in the exam, we still ask people this is overfitting and underfitting because that's a fit under the classical machine learning.
And for the general question why the large models can, you know, just there's no because it's in different regions.
Because for the large model, you have so much data. And in the later part of the class, we're going to talk about something called the scaling law.
And why this. So in other words, the large models we usually don't assume that that is the overfitting issue,
just like a case of training extremely high parameters.
And so that's why most of the examples are associated with the decision tree or small deep neural network and other classical models.
But during the exam, just assume overfitting. Underfitting exists because that's something pretty sad.
However, for the large model overfitting, we don't fully understand it yet.
It's still a black card at this moment because we didn't really say so.
So for the person who are interested in this, actually, I can show you a pointer.
It's called a, uh, over parametrized. So which means you can say so over.
Parameterization occurs when machine learning model possess significantly more
learnable parameters and the degree of freedom technically required to fit that data.
However, this type of things are now working quite well, and it's an open research question.
Uh, we don't exactly know what's going on for the overfitting and etc..
Uh, so that's a so I'm going to leave this as a open reading.
But again this is not in the exam. So so don't worry too much about that.
Uh have far more parameters, but still much to generalize well on same data.
So there's a paradox. Uh, that's a that's a part for large models.
Uh, anyway, just during exam, just, uh, let's take in this classical underfitting overfitting paradigm.
Uh, and, and the separate thing is that a separate thing?
During this general machine learning or classical machine learning is, uh, there's something called a variance and a variance and a bias.
We didn't cover too much about this during the lecture. But as a quick example, I'm going to mention here as a review, but also as something new.
The reason we're matching is that many, like old school interviewers,
may still ask this type of questions like, what's the variance and bias in the machine learning?
And what's the relationship to overfitting and underfitting? So I'm going to give you some quick examples so that you get a quick sense.
So basically, uh, so, so basically, uh, this is a this is a.
This is what happens as an example. Let's say you want to train your machine learning model.
However, you can have multiple sets of the independent training data, which means D1, D2, D3 and D4.
You can fit the same machine learning model and make the same prediction on the new data x0 and again this d1
d4 for sets of the training data draw independently from the same source and and what's variance and the bias.
Uh so so so so so so so so this is, so this is a, this variance actually a monitor or calculate spreads about the repeats.
For example this is d1, d2, d3 and d4 and prediction x0.
You will say for this. For this recipe a zero is relatively more concentrated.
So you can say the means around six and the standard deviation around the prediction are pretty small.
So they're pretty concentrated.
And and if you if I train a separate model I mean this is a like a machine learning machine learning model B you will say they have a large spread.
This is a D1, d2, D3 and D4 and the mean equal to ten.
And however they have a so so basically if you take the mean standard here, however you can say the spread is extremely large.
So which means for the second one the variance is large but the bias is relatively small.
But for the first one the bias is a small.
However the variance is, the bias is large and the variance is small.
Uh, so so so if so, if if this is our target, you will say uh, so if this is our target, for example, the x0 is supposed to be equal to ten.
You will see this is a model A, they are pretty certain, but they are wrong.
So basically they centered around six I mean and with a very small spread.
However they missed the target. But for the second one they actually the the center is around the target.
However, you know, they actually spread out. So each each of them are wrong, but each of them are wrong.
But if you take them altogether, they are getting closer.
But for the first one you will say, for example, this is a D4 is actually quite close to ten, right?
Like a D4 is closer to ten than any other D1, this model B or any other points.
So you will see in total look like they're wrong, but they're not really far from the target as a group or even as an individual.
So this is the properties of the general machine learning model of the variance, the bias, for example,
for this model A, which means it has a higher bias because it's actually far from the target.
But the small variance, which means they actually concentrate well around each other.
The spread is small, but on the other hand, for the model B they have a larger variance.
But they have a story, they have A, they have a larger bias, they have a larger variance.
You will see they spread a lot. But the bias is relatively a.
But they also missed the they didn't miss the target as a group but they spread out.
So so so this is a so this is how things are actually connected to variance and bias and overfitting and underfitting.
If we take if we take this example, this model as example here.
So let's say when you have, when your model getting more and more complexity and you describe your training data,
well your variance is getting slower, lower and lower because now there's less uncertainty in your prediction.
However, you couldn't generalize well because you just like your bias is too high and you over concentrate.
But in the early stage, in the early stage, let's say your model is underfitting.
And if you have multiple models, you just make random, you know, predictions.
And maybe on average they are okay. However, look at each of them.
They are pretty missing the target.
So, uh, so it's a we don't have a, you know, a deep question on this at all, but let's just give you a general sense.
But if you don't, uh, if you don't say this as a fundamental center, don't worry too much.
It's just like a general property of the machine learning.
Uh, again, as a quick summary for this, as a quick summary for this, uh, training validation test,
everything I want to mention like that when you're training and validation errors are both high,
which means your model are not, uh, well trained, is still underfitting, and you want to keep training, and you just want to add more capacity.
Do more training. However, when your training is low but your validation gets higher, which means you're overfitting.
You want to do this getting more data to the regularization and use a simpler model.
So basically this is underfitting. This is overfitting. Sometimes people are taking the average of the multiple models.
That's that also.
That's also a good way to to reduce the overfitting because each model they're different and averaging across them can reduce the model,
can improve the model variance and reduce the model bias to give you better results.
Uh. Um, and next next point we talk about is called the accuracy or the evaluation metrics.
So so given this is the example you have a this is a this is an inspection data.
You have 1000 parts and 20 of them are defective.
And it was only 20 only 2% of the data Oh.
It's not. Yes. It's only 2% of data is actually defective.
And if you just calculate the accuracy, it's actually if you predict everything's good, then the accuracy is as high as 98, 98%.
So which means it doesn't make sense. Right. The reason why the accuracy is not good, for example, or matrix is because it's not a balanced data.
If if 50% of data, if 50% of the parts are defective, then 50% of the things are good.
Then accuracy is a very good evaluation matrix. However, in this extremely imbalanced setup, a predictor predicted predicted accuracy or accuracy.
It's bad example. You need to do something. You need to use some other metrics.
And this was a slide block two. And we introduced a multiple evaluation metrics including accuracy.
As I mentioned we also got a precision recall.
And what's precision is basically something called the true positive and divided by the true positive plus false positive.
In example, this just means if after you make the prediction after the true positive,
which doesn't mean when you predict something to be less defective and is actually defective,
then this is the number of the true true positives divided by the actual.
This true positive true positive true positive, which may you predict as a positive and it's actually positive.
The false positive will just mean you predict as a false positive. But it's a it's a false one.
It's not.
It's more used like it's more used in this healthcare setup saying when you predict someone carries certain disease were more likely to get a disease.
The first false positive just means this person doesn't really have it. So which means that's a false positive.
Uh, and recall just the mean true positive divided by the positive examples.
And, you know, It's just formulas.
And we also got a few calculation calculation examples here.
I'm not going to go I'm not going to go through them.
And you can review the slides later due to to really check out whether the number makes sense.
If the if the number doesn't make sense, you can ask a GPT or post on Piazza or somewhere.
Nowadays they're doing this job really well. Uh, so so so the reason why we mentioned this is because in real world,
when you're choosing evaluation metrics and there's multiple choice like including accuracy,
precision, specific recall and specificity, and each of them having some certain calculations.
And you want to make sure you choose the right one. For example, as the data is when the data is imbalanced.
If you choose accuracy, that's a bad choice, right? Because this will give you a this will actually give you uh, misleading results.
Um, anyway, uh, you can.
You can look at this, uh, later. Uh, we also covered something called the k nearest neighbor.
Uh, for example, the k nearest neighbor.
If you recall that figure, you have multiple points, and you want to understand what's the one nearest neighbor to nearest neighbor.
The third one and the woods are corresponding classes. Right. Like if k equal to one.
And what's the label for my for my current sample that would be purple.
And if k equal to three that would be purple as well because you've got two purples then one orange.
And however if I just like expand my neighbor range to five, it will say okay, I have a five.
Our amount is five, five neighbors, three are orange and two are purple.
So my label should also be orange. So basically, uh,
everything is sorted by the increasing distance of the neighbors and you just do the majority vote across different number of the neighbors.
Um, it's uh. It's extremely simple algorithms, right?
Like, uh, first you design, uh, what's the number of the neighbors you want to look at?
And what's the specific metrics you want to use to compute the similarity among the neighbors?
And during the training data, you just store all your training data.
And when you have a new sample, you just calculate the distance or similarity between your new samples to each of
the stored training samples and find the neighbors and then do the majority vote.
Uh, it's a very straightforward. And you just need to design different distance metrics.
For example, Euclidean distance, you can use Manhattan distance or whichever distance.
It's all just changing changing the way. It's just changing the way your your your your, you know, calculated neighbors.
Right. Like, uh, it's just like using different metrics to understand who's your nearest one nearest neighbor to two nearest neighbor.
Three nearest neighbor, and etc. cluster is also closely related to k nearest neighbors, and it's a.
It's also unsupervised learning task, which means give you a lot of samples. Can you actually study them into different clusters.
And it's unsupervised, which means you don't need to provide any labels in the beginning at all.
It's a useful when you want to generate, you know, kind of client profiling and understand some like eh,
internal characteristics and natures of the data.
That will be very useful for the clustering and and the k means just mean the k means so so so the general review for the for the k means will be uh,
this is initialization. Let's say you want to use your student data, get three clusters and you you initialize three random,
you know, A cluster centers red, blue, red, blue and green.
And then. Then you first put out your existing samples into the into into these three clusters.
Like maybe this is closer to the, you know, you got this initial sort out for your clusters and then you recompute,
uh, you recompute, uh, you know, the distance to, to then you will compute the center of different clusters,
and then you reassign samples to different clusters, which means it's iterative,
which means you just keep recalculating the centers of the clusters and the assignment to different clusters.
Then you recalculate the center of the new clusters. You just keep doing this to understand to to update your centroid of the cluster.
Uh, so uh, so there will be some there might be some simple calculations saying, uh, you can still bring your calculator.
Last time I said you shouldn't bring your calculator because, you know, there might be a hacked version that you can have your GPT on the calculator.
Uh, I'm not kidding. Search eBay. You will see something like that for telegram.
I was shocked when I first realized that, but, uh. But because the calculator is very small, right?
You only have a very small screen. Even you type very fast. Uh, you may not get it.
You may not get enough response or token or whatever.
I highly doubt a calculator processing power can give you enough results.
Uh, and we also have a T as a proctor, so don't worry. I will have a.
So they will work around. Uh, so. Yeah.
So so so so so you can still use the calculator? Um, yeah.
I will leave some examples here. You can check. Uh checkout line.
So the first part of the review is just to run this classical, uh, machine learning.
Recall we talk about this training, validation and test data.
Split and continuous. Neighbor. Decision tree. Overfitting.
Underfitting and clustering.
So there will be some questions around it, but that won't be too many at all because the core of the this course is around the,
you know, forward computation and is a around deep neural network, right.
We are going to talk about how the structure,
the structures of the deep neural network are convolutional deep neural networks and some basic calculations for understanding.
So this is the slides. When we first talk about general deep neural networks you have the training data.
You go through multiple layers and then you have the output layer.
And in the middle you have this uh, you know activations and which means nonlinear activation.
Uh, recall that the if your each of your examples is a 28 by 28 pixel images, if you just flatten them, that will be 784 features.
And uh, so which means let's say you have a, let's say you have 128 neurons.
Then the weight matrix is for the layer one, which means the layer one here,
that will be 784 times 128, which means simply input times the number of the neurons here.
And and after this and after this and after this layer, you get output as one times 128.
Right. Because each of the neurons get output and the output becomes the new input to the next layer.
So which means let's say if the next layer is 228, which means you get this, you get this 100, you get the weight matrices here will be 128 times 128.
Because, you know, it's a fully connected. Each of the neuron goes to all the next layers.
Each of them go to next layers. So which means. So that's why it's exactly 128 times 128.
We also got some very simple parameter calculation to to help you understand the structure.
Learnable parameters in the dense deep neural network. Dense just mean everything is fully connected.
And you will say you have two inputs and have three hidden units.
And so, so and most of the time you get a bias.
We're going to mention the bias if there's one so bad is just the mean. You just need to plus the bias or something.
So in this case it's very simple right. Like how many how many things do we have.
Two times three. Which means you know for layer one you get two times three parameters plus the bias.
There will also be three bias. And then you get three three, three here go into y and that will be one times three equal to three plus one bias.
In total you've got certain parameters. So there will be some like a simple examples.
You can you can look into uh in the in this channel dense deep neural network.
We have another separate Separate focus or outline.
We want to mention this non-linearity.
Uh, so so so so so for example so for example here's a so here's a so here's the simple thing like for two layers right.
Like this is from x to y you have one layer another layer.
And let's say uh let's say uh uh, if you, if this, if this is a so this is a calculation for the first layer output.
And it goes through the transformation of H. And then you have a w2 h plus b2.
So basically the output of the first layer becoming the input of the second layer.
So you are y equal to uh, if you, if you fully expand everything, if you fully expand everything your y equal to uh W2, uh w1 plus W2, blah blah blah.
So which means if in this case it will say if, if this h if there's no non-linear transformation here,
everything is simple linear functions we're showing here, everything will collapse.
And because basically. Basically if you have two layers, the wires do equal to w2 w1 times x and you will see.
W2 and w1. After this linear transformation it's still a matrix.
It's still linear. So which means if this h doesn't go through any.
Nonlinear transformation and you expand you expand everything.
This will collapse to a linear function. So without the nonlinear nonlinearity between the layers of this linear layers will just collapsing.
Would there be equivalent to a single single layer.
And so that's why we want to prevent.
So that's why in deep neural network we add this nonlinear transformation which means in this case that will be a ReLU function right.
This is a ReLU function. And you have the first layer. You have a second layer.
Basically the first layer results will be put into this ReLU function which is
taking the A the negative part will be coming zero and the positive side will be.
You know this. This is the first layer input becoming sorry the first first layer output.
W w x become an input of the second layer. So without this non-linear transfer transformation everything will be linear.
So this is actually the same thing as we're showing here.
It's just like another separate illustration. So without this nonlinearity everything will end up into linear classifier again.
Uh we have some we have some like uh illustration or simple calculation.
Uh, you will you can do this offline. I'm not going to go through it, but uh, but the key thing is that, uh, this gives you the general understanding.
For example, this is a this just means the weight on each of this neuron and z1 here,
z1 here equal to one times one plus two times .05 and minus n plus bias bias.
Here is the point. -0.5 and you get 1.5.
Here are the Z1 but Z1 need to go through the nonlinear transformation.
The ReLU function goes through 1.5 is 1.5 because the negative part turns to zero and the positive side just stays itself.
So we're just showing you some calculation. And in this way you can you can, you can do some quick calculation on and understanding the structure.
And and finally plugging all these numbers you will get this predicted y hat.
And for example in this case if you do the calculation the y hat is equal to one, equal to one and the target is equal to two.
And then you need to calculate the loss function.
If we gave the loss function here, if we give the loss function here as the L2 loss I think I just wrote it somewhere.
But anyway, if this is L2 loss,
if this is L2 loss then you just use the y hat the predicted value minus the the the the ground truth value taking the square.
And that's the L2 loss. You get this loss equal to one.
So this is a simple illustration of the forward process right.
Like you you do this calculation with matrix dot product nonlinear transformation.
And finally you calculate the weight of calculate the final product y hat and calculate the loss by a.
This is L2 loss which means you know the difference squared difference.
Um and we have this activation functions as well because recall this after you get
this after after you get H1 you need to apply the nonlinear transformation here,
which in this case that's ReLU right. So we talk a few different activation functions.
And ReLU is always the classical examples. We talk about uh in this case uh Uh, right.
Yeah. It's just a quick recap. And, uh, so that you remember this format is a value function.
Um, and then we move to the convolutional convolutional deep neural networks, and they have this,
uh, learned kernels, uh, recall what's the convolutional deep neural network?
You first have this, uh, input images like, let's say 32 by 32 by three.
This will just mean the channels, uh, red, blue, green. And usually most of the images are three channels.
But of course, sometimes they've got more channels. Uh, it's not unusual.
Um, convolution just means you initialize this a filter.
Let's say this is a five by five by three filter. Uh, you just, uh, you just simply.
And for each of the filters, they got their, uh, they have their specific numbers and their corresponding, uh, weight matrices.
So basically weight weight is what you're learning around this convolutional layer.
Layers are on this on the filters.
So. So so this is a five by five by three filter.
And and uh what happens here will be you slide it through right.
Like you this is your future. You do the dot product of the current future numbers with the images.
And then you move to the next one, next one and next one. So so so you convolve or slide over all the spatial locations.
The reason why convolution layer works is because we believe for the images have this a spatial relationship.
For example, if you look at images and the the adjacent pixels they should share something in common.
So that's why you can summarize. You can largely be things can be largely compressed through these convolution layers and convolution layers.
You convolve or slide over all the spatial spatial spatial positions.
Sorry I didn't expect the review can be such a long thing, but as a good review, you start.
You start. Recap what you're learning. The first first part of the thing.
But I think I will stop in one hour because I have something new to discuss.
So which means next lecture, I really need to finish out the review.
Um, so basically I will review the concepts and I will leave these questions to you.
You can check offline because nowadays you have some strong assistant from a cloud or two.
Yeah I mean I'm not saying that education is not important.
Education is still important because however however, this transform how we are doing the education of.
I'm still being optimistic. At least the semi optimistic about it.
Uh uh, yeah.
One random thing is like uh, recently, recently,
unless there's a there's a advocate saying people need to slow down the research, which means not nowadays.
People are just doing research too fast and there's a great number of the reputable scholars.
They just emphasize saying junior scholars need to slow down.
You shouldn't publish that much of the money of the paper. And actually the backfire pretty bad, which means junior, junior,
junior researchers say now you are established and you don't want people to publish more.
It's just like a as a fourth rounder, you are saying, everyone stop now.
It's it's not fair.
So, so so now AI actually provoked a lot of, uh, you know, new thinking and controversial things, how this will transform education.
We are not sure yet. And we do have this a lot of like a lot of meetings on how sex education should change.
But the answer is there is no answer. One reason is because, for example, if we want to change a syllabus of a course or get a course approved.
That will take two years or something. And what happens will be, for example, today we propose a course on genetic security.
I just use as an example.
And I put some like a paper through a syllabus or outcome in that two years later it's approved and this field is totally changed.
So it's weird. It's, it's we need really fast, uh, actions in education as well.
But I think another thing about the flexibility in education is that many things we covered in this course are not originally designed 20 years,
ten years ago, at least in the syllabus we can adapt. It allows us to change 2,030% of the covered knowledge in the lecture.
So which is great. Uh, back to convolution. If you recall where we slide, you can have multiple convolution layers, right.
Which means even for even for you, you don't necessarily need to have like one convolution layer.
You can have a multiple. So which means you add more complexity or the capacity to the to the convolution layers.
In this case you get the six layer six filters, which means you you can you can,
you can actually, uh, you know, six times more parameters in the models.
Uh, and each of them get some specific, uh, dimensionality, uh, so that you can.
So this is a so, so, so this is a quick examples.
And you potentially want to, uh, you know, take some notes when you're doing the exams about the certain numbers.
For example, let's say if you have a image and the original original image size is uh, this is a simplified example.
It's usually for example, nine by nine.
But I'm just showing you one dimensions like let's say the one dimension n equal to nine, which means originally your image size is nine.
And the padding padding just means how much of the how much of the pixels you need to add on both sides of the images.
So which means in this case p equal to one, which means you add a two zeros to it.
And the kernels that just mean your future is three by three by three.
But this is a one dimensional case, which means your filter is three.
So which means each time you just like a slide on three pixels and the stride equal to two, which means you are going to jump like two positions.
This is the first. So this is the first slide. And you go two positions. And let's say one two okay.
You start from here, do another three and then jump to position and do another three.
So you get MPK which means the using these numbers you can really calculate what your final output size.
And here will be some examples. And you can also expand.
You can you can you can try to do some calculations. It's very simple numbers.
You just like plugging these things. But we want to use these numbers to show you how the how the convolution layers are
slides through the slides through the images and what's a fine output will look like.
So all this simple calculation is not for toucher people.
It's more about understanding what's the convolution, what's the parameters, etc. regarding the parameters, right?
Like let's say you have three convolution layers here. Each of the filter got nine pixels the nine positions.
And in this case you got a this is a filter 1233 by three by three you got a 27/8.
These weights are weights plus one bias equal to 28. And you have a second filter which means another 28 learnable parameters.
And in total you get 56 parameters. If you have two filters or if you have two filters like this and each of them.
So it's very simple just like calculate each filter and plus one bias.
Uh, so uh yeah. So you will, you will see some of this, uh, calculations and you can do it uh, offline.
Uh, right. Um, adding filters.
Yeah, it's a sample question. We'll give you the answer as well. Uh, a separate thing we talk about is the pooling, right.
We call after the convolution layers. You can add a pooling. Pooling is not a learnable.
So there's no learnable parameters in pooling. In this case the max pooling.
It's also got a two by two feature. So 1156 the max will be six.
And the 2478 will be eight. And this will be three.
This will be four. So you got after the pooling layers you get this results.
And there's no learnable parameters. And it's a invariance to the to the shift.
Right. Like whatever it's 115 6 or 1 516. As long as you within this feature the output will be stable.
It's invariant to the other change. But one thing to remember is that max pooling is not linear.
So which means max, you and max will not equal to max you plus v.
So which means uh, so which means instead of in certain cases it's not a, it's not a, it's not a, it's not linear.
So which means it's a max pooling. Also add a non-linearity to the convolutional deep neural network as well.
Uh, I'm trying to say whether should I still cover this for next time?
Uh. Yeah, I think I can cover this.
And then we're going to come back to what we discussed for the new content.
Uh, so so, so, so after the convolution layers, uh, so after convolution layers,
we're going to talk about we're going to defer the sequential modeling to,
to attention and Transformers because they're uh, that's more like a they're, they're, they're like one of the blocks.
So. So after the channel deep neural network and the, uh, convolutional layers, you have you get architectures.
The question will be how to do this backwards. Right.
Like we all talk about the four forward pass. Then the backward will be a calculated loss.
And do the gradient descent and do the updates. The general process is that you trying to calculate your loss function first using
the predicted predicted score with the ground truth labels on the training data,
and then backprop back propagate using the chain rule and doing some local derivative.
And finally, uh, you go through this, uh, you update to your local weights and finally you just keep doing this.
You just, you know, it's a it's you just keep doing this. But in the, in the middle, you need to know the optimization process,
which means you need to compute the gradients and know how to stably update your model weights.
Uh, so so so this is an example. Um, okay.
So so so so so regarding uh, I'm going to jump some, I'm going to jump some of the examples, but just this one will get confused.
It's just mean the loss function sometimes we usually don't use a stop loss function, right?
Like a step loss function just mean it's either 0 or 1.
It's not a differentiable, it's a. So it's a bad choice.
But usually we use some differentiable differentiable loss, which means for example,
this L2 loss is differentiable because you can take the derivative of it and the curve is smooth.
So because if you don't have the differentiable loss function, you couldn't use the chain rule to do this derivative.
A step function. As an example, the the derivative at this point zero is undefined.
You couldn't really do the chain rule for it.
So this example just to show you the loss function, there should be a little better to be smooth or a little better to have a different.
It doesn't need to be smooth. They need to get to the they need to be differentiable.
When you are doing this chain rule. So that's a that's a key thing we are saying regarding the chain rule if you remember,
once you have the loss function, you want the derivative, you want to. You want to calculate the derivative backwards, right?
Like you it's like a for example, the this uh, derivative of the uh regarding the loss function regarding x, y, z.
In this example, you will be, you know, with regard to q first, which means q the intermediate step and then the q divide or something like that.
So it's a good example. You can also show you some of the examples here.
It's a very simple regression which means a loss function. This is a this is a z equal to j x j x j.
So that will be where z. So basically that will be the function here.
And the h function I mean the nonlinear activation is also ReLU.
And the y is equal to this is v1. This is v2 v1 h1 v2 h2.
It's just the same example. The loss function is L2 and you have the full information here.
And we'll show you some full process to to do this again.
Uh, if we really do this, uh, nothing will be more difficult than the L2 loss function.
Uh, it should be, uh, it should be extremely simple thing.
And, uh uh uh, you can you can check out this example.
If you can figure out this example, I think there shouldn't be any, uh, sorry.
I think this is too complex, but I don't think that will be in the exam.
Again, the exam is just 50 multiple choice questions. And if you're lucky enough, you still get 25% of the chance to get it right.
If you don't know how to calculate, uh. And the exam will be, uh, two hours, and I think you must have some students,
or you must have some friends who took the earlier version of this before. So they should have a very positive review for the exams.
So don't worry too much. Uh. About it. We have more examples regarding chain rule in the hidden units.
I'm going to jump this. I'm only talking about the concepts.
So during the chain rule there's one thing called data loop, which means not necessarily that there's a there's a vanishing gradient,
which means we call in a very long chain of the calculation of the gradient, if any points, you know, getting smaller and smaller values.
Finally, finally the value will decrease and it's getting closer to zero.
And you're going to lose your gradient. So that's a that's the examples of the.
So that's the examples of the data loop.
So we need to actually fix this. So that ReLU is a one issue right.
Like in this in this in this large chain in this in this in this chain rule certain like gradient becoming too small.
And finally you lose the gradient and you lose the changes to your gradient.
But another big thing is that you are getting some of them becoming too large and getting larger and larger.
This is the explosion of the gradient. So either things are either of them are pretty bad.
And so therefore there's a so there's an issue for fixing this when it's called a.
So this is showing you the vanishing gradient right.
Like we keep saying this for the sigmoid function the response range will be -5 to 5 something like that.
Besides this range like the gradient equal to zero. And in a large chain rule you almost get no gradient update at all.
And and so so so so so one fix is using some residual connections or changing your
but but on the other way another big issue is that there's a gradient explosion.
So which means in the long chain rule in a very long chain rule calculation, the certain part of the gradient will become too large.
You need to do the gradient clipping, which means you actually normalize this into a smaller, smaller range.
Uh, something like that. We're just showing some, you know, illustration here.
Uh, there's also some simple examples. It's more like if we give you the formula.
Can you plug this into it to do the gradient clipping? Uh, it's a it's a it's very straightforward.
Um, okay. For the older review, I think I would stop here because these are just more questions than the next week.
We're starting from this half point to start to talk about stochastic gradient descent.
Uh, it sounds like it sounds like we have some of the calculation, but don't worry, it's more about just, uh, because, you know,
as an example, where the calculation is more for showing you the dimensionality than other things, you're you're allowed to use a calculator.
But again, uh, don't use the GPT enabled calculator.
Uh, Gemini enabled is also disallowed. Like, uh, and, um, Yeah.
We won't specify any, uh, specific, uh, configuration of the calculator because I'm not getting sponsored for that.
Uh, okay. Uh, we still need to cover something new.
Right. Because we, uh, we were, uh, quite behind.
Uh, this is we're getting behind. It's not because of you.
It's because each year I add more content to it, and it becomes longer and longer and longer.
I need to speed up and speed up all the time. Um, yeah.
At certain moments. I don't know what to do this, but we will see.
And many people next week will have one professional coming from autonomous driving industry.
Uh, my collaborator, uh, rolling who is coming? And the next week we have a startup in doing, uh, security, uh, research agent security.
Uh, now, I try to, compress their talk time so that we have a.
But anyway, I think people like to learn more about this industry or general careers in other than automated machine learning or whatever.
Sorry, it's just loading a design. I think that slides on a separate computer on this one.
So it's, uh, it's not. It's loading. Uh. Originally, originally, even before we jump into the block.
It's actually in block seven. I still have a one part I haven't finished, which is called automated machine learning.
So which means given your deep neural network, how to choose the hyperparameters,
but that one is really a little bit theoretical, I think I will defer it.
And as an optional thing, I think we're still going to cover the primary architectures before jumping to this more advanced Topics.
Sorry. Maybe I need to stop everything.
I need to first quit. Okay. I don't know people, but I never report this crush thing to anyone.
Um, I think privacy will be a big thing nowadays.
Okay. Um, okay. Uh, in this lecture, we're in this block.
We're going to cover a series of the new architectures of the deep neural networks.
And, uh, it's on the other hand of the it's on the other hand of the what we learned in the first seven blocks.
It's about generating new samples. I mean, it's different from general large language models.
It's they're doing something different. But large language models are largely motivated by this, uh, Generative models as well.
A large model is called generative AI. However, five years ago, the generative AI actually referred to this to refer to this type of the models.
Um. So in the first part of lecture, sorry, in the first part of this semester we learned how to classify samples, right.
Like if you remember, uh, we try to versus mammals, okay.
We're trying to classify images through the classifiers, for example to classify their colors.
However, one question is that how can we really generate something from the machine learning models?
That's a vice versa. It's not necessarily vice versa. It's more like a, uh, this different format, right?
Like, uh, if I, if I, if whether I can actually create some new samples rather than just like predicting the class label.
And here's the, here's the general side for it.
For example, if I have a lot of training data and many of them are red flowers and some of them are yellow and quite a few are white flowers.
So this actually gave me the general distribution of my data, which means by nature most of the most of these flowers should be red.
So with that in mind, when I do the generation, it's more likely I'm going to generate the red flowers.
So so so you can actually. So so that's a it's not a change even for the large language models right.
Like because everyone's saying large models are just like predicting what's the most probable for the next token.
It's also based on some probability where the maximization of the probabilities of the generation.
It's okay. It also makes sense because the generation should follow certain rules.
And this rules sometimes just is a frequency. And so therefore.
So therefore. So therefore one question we want to really have is a like a sorry this is a let me say What's a good example to show here.
Okay. So so so here's the thing. So before you say in the color, many of the many of the before you've seen the color of the flower,
uh, you know, the probability of the prediction might be the same.
However, when you say in part of the, uh, when you say in certain of the information you get a,
you are moving to something called hidden stealth or hidden hidden hidden hidden hidden latent variables.
I'm going to explain this later, but don't worry about this too much.
And before we're even talking about the generation, I want to give a quick, quick recap for the Gaussian distribution.
If you don't remember, the Gaussian distribution, look like this. It's like a bell bell shape and the center is a mean.
So this this is for example this is a Gaussian distribution. I mean equal to two.
And this is also got something called a standard deviation which means how it's more like a spread of your Gaussian distribution.
If the if the sigma is really huge for example. So which means with with.
With a small standard deviation you have this will be.
This will be something shaped like this with a very large standard deviation let's say standard deviation equal to one or like two.
So this will be more spread out. It's more like a flattened version.
So. So with this in mind uh, we can use the two numbers to, to define a Gaussian distribution which is the mean and standard deviation.
And in this case a and most widely used is a normal distribution which means you have
the you have a mean equal to zero and the standard standard deviation equal to one.
Uh, so this is a Gaussian distribution because in the later stage we're going to use the Gaussian distribution for for generation.
Uh, now now the question will be uh, now question will be let's assume we can really do some generation,
but for now I don't need to worry about how to generate, let's say I have a two generate, I have a I have the same generator.
I have some magic to generate some flower images. And the thing is that using different.
All I want is that using different inputs and the same generator will give me different generations.
For example, this will should give me a red images and I should start a red flower.
And this give me a yellow a yellow flower, but it still goes through the same generator.
But how? How can actually you know by changing this input data here Z to vary my generation and if possible can really control the generation.
That would be that would be great. And so this gives us this.
This gives us the first part of the lecture on something called a generative adversarial network.
So so it's a specific it's a specific type of the deep neural network architecture.
For generation. It was popular roughly. It was actually popular roughly ten years ago.
And uh, and by that time it dominates the entire generation.
Fields. And there was no GPT by that time. And this is what we learned.
When I was a student. So so, so generative. So so generative adversarial networks are the prohibitions Gan and Gans extremely simple.
It has two parts. So basically the two parts will be the two parts is the one part is called generator.
Another part is called discriminator. And how to do this training that will be also be two parts.
You have this real images in your training data. And you you have some like a generative even generative generated images using some random vectors.
You don't need to worry about this for now.
Like, let's think there's a magic that if I just plug in some random numbers into the generator, it will give me an image.
And the discriminator here just want to discriminate. This one is a real one and this one is a it's a it's a it's a it's a genre diversion.
So basically. And finally they gave the game a score on whether this image, the input data is a real, real image or not.
The D just trying to learn distinguish two different sources.
So so so so you can say the overall goal is that you just keep adding.
You just keep training through this real images and the generated images and your
discriminator trying to give the score to distinguish two different sources.
So that will be the general idea for the for the Gan. Uh, so why why is this even work?
The common sense is that if my generators are strong enough, my discriminator can no longer tell the difference.
Which means finally, I learned the real distribution of the images.
So that's that's a core motivation, which means so and this also at a because because because other than because if you don't
have this a generator but you just simply trying to mimic every single training data,
uh, what happens will be you really don't have the ability to generate new images.
The generators are starting from very scratch or very like a, like, random places.
But gradually, if it's able to really generate the images, which the discriminator couldn't tell from the real images,
which means the generator g actually learns the real distribution of your underlying images, that will be the core ideas.
Uh, and uh, and the reason why why, why such a setup also works is because when you're really trying to directly say,
okay, I want to learn how to generate flowers or any images or whatever, it's very it's very it's very challenging.
Right. It's a high dimensional complex distribution. Usually people couldn't couldn't do this easily.
Uh, so therefore, so therefore. So therefore what they really try to control that.
What if my input is just like some random Gaussian distribution data or noise and then goes through this Uh, you know, generator.
Then finally, I can generate images. Even the real training images couldn't tell.
Uh, so the general process will be the following.
The input of this deep, deep neural network will be some, like, random noise from the Gaussian distribution.
And and it goes through this deep Gan deep neural network generator.
It will give you some, uh, it was sampled from the, uh, sampled from this, uh, learned distribution.
And it will generate some images. And then you put it into, you put it into discriminator to say whether they are real or not.
So it's more like it's more like something like this. It's more like a so-called a two player game.
For example, if you want to make some dollar, uh,
you give a first shot and you give the $1 image and the detective will just say, okay, it's not even a green one, right?
So it's a far from the real. Okay. Now you learn how to make it a green one, and then saying where's the wordmark?
And finally you're getting closer and closer. So basically this is a generator.
This is this is a discriminator. So zero zero doing this a self enhancement or a mutual enhancement.
The generator trying to make them more and more real images.
The detective or the discriminator trying to distinguish however this distinguish this this a this a
feedback or this a this detective feedback will help the generator to generate more and more real images.
Real images, because the detective is not only looking at the the the generator, it also looks at the real images.
So by looking at the different things, it will say, okay, what's the real pattern from the real images and what's the what's the what's the,
what's the things that the current generator doesn't really capture.
So gradually it will become more and more closer to the, you know, the real images.
Therefore at a certain moment the discriminator could no longer tell it's really from a real image, or it's a generated one.
So. So that's why the goal for the generator is to generate a real looking image.
To fool the discriminator. And the discriminator is trying to distinguish between the real and the generated generated images.
And they just keep getting better and better in each iteration.
So here's a so here's the general network for it. So you can say the input for the generator.
It's just it's some like a random noise. The question here will be if it's random noise how can control my generated images.
The question is that they don't usually control the. At least for the vanilla version of the Gans.
They don't actually care. Uh, the noise here, just like a sample from random noise.
And the goal is to say, okay, whether I can generate the images similar to the training data.
And you get this sample random noise and it goes to the generator, you generate some images and you also get the real images.
So this discriminator will just actually tell. Which one's real, which one's fake.
And you get some loss function which relates regarding to that.
And uh, yeah. Yeah. The discriminator is trying to distinguish a real image from the generated images as much as possible.
But the generator just trying to make the images to confuse the discriminator, which means to, to fool the, to actually fool this discriminator.
Uh, so so so so so then you can say this deep neural network got different purpose or different objectives.
So this one and this one they are more like competing with each other.
So that's why it's called a generative adversarial neural network.
The adversarial part just means they are competing with each other and they have the the final goal is it's all the same loss.
Right. Like whether to tell this is from the score for whether this is a real image.
Uh, This is the same loss, however. It has two components in this loss function.
So let me show you this. A quick example of.
This is the mean discriminator and the g domain generator.
And they are not being tuned at the same time because they have this they have this a counter.
They actually counter each other. The direction is different. So you have this training alternates.
So the discriminator trying to learn the real flowers from the generated ones.
And the generator learns to make this a flowers more real.
So you know the discriminator couldn't really tell couldn't really tell.
So the first step would be you want to update your discriminator loss.
Sorry. You want to update your discriminator parameters. So so that so because it's two parts.
When you are updating your discriminator, you fix the parameters of the generator, which which means your generator are not changing here.
And you have the fake one and the real one, and you train your discriminators because at this time you really know the labels.
You know, this is a fake image. You know this is a real image. And by the time the generator doesn't get updated, you only update your discriminator.
And the second step is, is updating your it's updating your generators, the generator.
By this time, like the discriminator parameter doesn't get updated and you just fix it.
And now you just generate like a new images and you hopefully to get higher and higher discriminator scores.
Right. Like which means the higher the better. Which means the discriminator is saying this is a real image.
So so so so when you're updating your discriminator you fix your generator a loss.
You know, you fix it, you phrase it, and then you phrase your discriminator discriminator parameters and then update your generators.
So that's how things get updated. And this is a quick, quick illustration.
This is a quick illustration showing you how how this during the training scenes things will be changing.
And this is a so this is the score for the real images.
So basically the sorry it's slightly too small.
Uh so this is a blue dash. Just I mean, this is a, this is this should be the scores for the real images and uh, and, uh, okay.
And the, the sorry words that data distribution, generative distribution.
Okay. This is the generative distribution. And this is a whatever happens let's say the next visualization because it's easier to say,
uh, all we're trying to say that, you know, with time goes by with some more training going.
We hope to actually put a distributed data. Real distribution.
Real data distribution overlapped with or generative, generative or generative data distribution.
So finally they actually overlap. And finally the the the d of x which means it's becoming flat which means so which
means the discriminator can no longer tell the difference between the real image,
real image and fake. It's not a fake. It's generated images originally actually the scored differentiate right.
So they can really tell the difference though as time goes back gradually, uh,
your, your data distribution really overlaps with the generative distribution.
And the score no longer can tell what's the difference.
Uh, and, and another interesting thing or overall, since I want to mention that this, this is an alternative training.
Uh, sorry. It's Alternate alternate training.
Deep learning. So this is another general technique. If you're interested you can you can, you can, you can learn.
Uh. So I don't know why I couldn't really, uh, zoom in, but basically, uh, alternative training just, um,
usually just mean, uh, some of these algorithms, they have a different large deep neural network.
You can usually maybe I can find an image which can really show this.
Um. Sorry, I don't find a good one, but I try to say that for, for example, I just used a random thing.
I just use a random deep neural network here to as a as a illustration, I don't know what it is.
I just randomly click one. Um, sorry, why I couldn't even open it.
It's a recursive click. Anyway, sorry I gave up.
So? So. In many of these deep neural networks, if they're really complex and many of times you can.
For example, in this case you can, you can, you can really freeze part of the deep neural network and train the other one using the loss.
This is especially useful when you have one single loss for multiple deep neural network parts.
You freeze one and train another part, and you freeze another part and train another one.
So you just do this alternating training. So that's a trick in a deep neural network.
And and here if we take a further look for this Gan, you will say, uh what's this discriminator score means.
As we mentioned, just means that the prediction predicted predicted probability of whether this is a real image or not.
For example, if it's from the training, this is the real image from the training data.
We hope that the image is higher because this is a real image, and if it's equal to one, which means it's definitely a real image.
And if we really if this is really coming from the generated, I mean from the generator,
we hope that this discriminator can really tell the value is relatively small.
Right. It's equal to 0.02. So it's likely to be fake.
And by the end of the day, the discriminator more likely to be in the .05, because it can no longer differentiate from the real and fake images.
So therefore. So therefore. So therefore. So therefore you can say how adversarial this general deep neural network is,
because you can say the generator hope to generate images to make the discriminator value as high as possible.
However discriminator want to differentiate the generated images.
So it one's a loss function to be it want to be this d score as small as possible.
So it's actually the opposite goal for the one generated images.
So so so so so that's why so so that's why. So that's why you need this alternative training.
Because because for this the generated images the goal for this part is to increase.
This loss increases D. However the loss the loss for discriminator is to to to to minimize the D here.
So therefore they are adversarial. They're combating with each other.
So how to actually uh how to actually, you know, solve this issue.
There is a lot of like mathematical details here, but I will try to use the visual illustration so that we will fly this through.
So so if you really look into the loss function, you will say the first part trying to trying to this is trying to Uh, degenerate.
This is to maximize the probability. Probability from the real data.
Which means they're all real. They want to maximize this value. However, this is a discriminator.
This is a this is a discriminator value generated from the fake images.
You want you then you want to minimize this part.
So so so so basically the loss function will be you want to max over the discriminator and minimize over over the generator.
So they're contradicting with each other. These are just like examples. And you if you want you can read this through but you don't.
Uh again again the the way for this general minimax training will be you phrase uh, for for this for this type of thing.
The general technique is to phrase one part and then training another part.
So in this example, uh, if you do multiple rounds of the updates, you update your You know, discriminator by descending the stochastic gradient.
However, you can say you're updating the discriminator only.
There's no there's no generator. Here is theta D. You're just doing this for it.
And you just use the generator as it is.
You don't change anything. This was so in this step the generator is frozen.
And then you you start updating your generator parameters.
And now you know the discriminator here is frozen.
Nothing changes. And you just keep doing a discriminator generator, discriminator generator, discriminator generator.
And this is a minimax training. And uh yeah, that will be the that will be the, that will be the goal.
And uh, and you know, this is a on the top part is ascending and on the deep part.
On the bottom part, it's descending. So that's a two different directions.
But anyway, uh,
if in real world it's very unlikely to happen for most of the people nowadays that you're going to run into this minimax training issue,
which because I don't know how many people are still training anymore those days.
Uh, yeah. It's sad because, uh, when I was the one I did my research a few years back was doing it to train a model.
But nowadays people don't need to train anything. We just like to do the prompt engineering and change different prompts and, uh, doing some research.
Uh, this is getting weird. And we don't even write a code, right?
Like, ever since agent and, uh, uh, originally I'm using originally I'm using some cloud resources for GPUs, not USC one.
I have some other ones, and they have some like a waiting queue saying, if you like request two, 200 or 100, you need to wait a bit.
And if you if you request A18 hundred for four hours, you don't need to wait.
So there's a lot of like a waiting logistic. Now I just tell agent, this is my resource.
This is something experiments I want to run. give me the. Give me the optimal decision.
Which one goes to which? So, so. So everything's just processed by the agent, and, uh, I don't know, I like it,
but I also hate it at the same time because, uh, because I always subscribe to this.
Subscriptions of the agents. Um.
I will fly through some of these details. It's more mathematical, but people don't need to really worry too much.
Uh, all all you need to remember is that for this, uh, what's the what's the motivation for get the motivation.
Many, many of the things nowadays are still motivated by this original design.
So by that time, it's a very brilliant idea. So which means to learn generating image.
Well, I can, uh, starting from, like, random data, random inputs.
And I want to learn how these images can be generated through bye bye bye by letting the discriminator tell whether it's true or false,
whether it's real or fake, and you just do this phase of the generator training your discriminator and vice versa, just like d step and g step.
That's a that's it. And after this training so so what we really got.
So after this training you can simply drop your discriminator at all.
So all you need to get is this generator. So after you train this Gan well you can do this generated image.
So basically you just give some random input to the generator to generate the images which people couldn't tell it's real or fake.
Uh, so so so so this again can also work for you know, it naturally.
It can work with the convolution layers and with which with whatever layers you can do.
And so this is a this is many years ago, roughly ten years ago This generated by the, uh, by the guy, but.
But actually, if you look at if you look closely, you will see the one big issue for this generated image of the from the gap.
I'm not sure whether anyone can really tell what the gap you find here.
Nowadays, people are thinking about which Taco Bell to choose, right? Today.
Uh, what was my choice? Uh, anyway, I did, uh, I got my Taco Bell 430, and, uh.
This time I tried. What? Container chicken soft tackle.
I don't know what it is, but I just try to rush and finish everything.
Uh, but again, uh, so you can say that one big issue for the Gan It's, uh uh, is this a blurry image?
So if you see each of this image, you will realize they actually quite blurred.
Uh, and so that will be, uh, another thing.
After the break, I want to introduce would be, uh, you know, uh, recently I ran into a scholar,
and he shared with me, uh, one open source he actually developed for helping the teaching.
Uh, I think it's a very interesting, uh, may we may we may open for.
Yeah, we may try after the break. So basically, uh, basically, uh, it's an anonymous way.
Interesting. It's, uh, it's, uh, uh, sorry.
It's anonymous way to people can give me the feedback. It's too slow, too fast or, uh, whatever.
I would, I would try again because, um, because I really want to get some feedback and, uh, uh, yeah, I shouldn't actually show the password.
Right? Sorry. Everything's recorded. Sorry.
I should stop here. Uh. Right.
Anyway, uh. Yeah. This is bad. This is this is this is a breach of the security and privacy.
Uh, I should I shouldn't even. Yeah.
As you can say, as a security researcher, many times we're just making mistakes.
And so that's why, whatever the security, uh, safety design you have, it's not going to work like the humans.
The most vulnerable part of this entire lifecycle. And, uh, uh, it's the social engineering.
It's the most vulnerable part. Like, whatever the algorithm we have.
It's not going to work. I'm really pessimistic. Pessimistic about that.
Anyway, I will do that during the break. To set it up, to see how that goes.
So the examples here, the examples here, just to show you, you know,
you can say the one big issue for the generation of the Gan that is their blur rate.
Uh, this is by nature of the of the Gan design.
Uh, I'm going to explain why, but you will say all this again generation.
Uh, they, they don't look very natural and they're a little bit more, uh, blurring.
Uh, and even you want to count even the reasons because it's sampled from this, uh, you know, Gaussian distribution.
Uh, we're going to explain why, but they're not perfect.
And so that's why nobody uses this anymore. And there's also something called a called conditional uh, conditional gan,
which means Other than you want to give a little bit of control regarding the generation other than generating random things.
You can, for example, design. Okay, I need to. Need to make sure the generation is with the yellow color.
And then you can do some generation. But but you want to make sure you know each of the time the generated images are slightly different.
You will say it's actually slightly different, but they are all yellow. So which means condition on certain things for the generation.
So this is called a conditional Gan which means unlike unlike traditional ones which means you actually
you have some some you have some additional information which is more controllable generation.
It was really popular roughly nine, ten years ago.
And they have this, uh, they have this, uh, you know, give the, give the, uh, they're just doing many different things here.
It's just like, uh,
examples including Including including if you crop certain images and then you put things back or you design something from nowhere.
So basically you try to learn design from here. And this is ground truth and this is what's the general output.
And you will say they're getting closer but not everything's close.
Many things are blurred. So the the blur, the blur racing is one big issue for for gap.
Uh, and another big issue for this generative AI will be lack of diversity.
And as you can say. So this is a real, real distribution of the images.
And however many of the times generator will collapse, which means they will just give you 100% red rows or red images.
Even nowadays, for the large language models, the generation can be can lack of diversity.
Uh, if you remember last time we talk about we talk about that political forecasting using large language model persona simulation.
You will see the assimilated persona from from large language models that are more extreme,
the lack of diversity of many of the generation nowadays, even using the larger models they are also have the issue for collapse.
Collapse the generator, which means, uh, unlike human beings like people are so diverse to create different things.
But, you know, AI models are not necessarily the case.
And so quickly talk about this again for generative AI.
And again, remember this. The discriminator only exists when during the training time,
which means during training time you you have it after the training is done, you just drop it.
Just simply use the generator and convert the random noise into some real image, into the image generation.
So that's actually why it's a generative adversarial network.
Um, and then we're going to then we're going to introduce two more, two more generative AI models.
One is called an autoencoder. Another is another called a variational autoencoder.
Uh, but I guess, uh. Yeah.
Give me a few seconds to say how long it is. Um, okay, I will I will finish the autoencoder.
Then we can have a then we can have a break. Uh, sorry.
Oh, okay. So so so so the second.
So second generative model we're going to introduce here is called a variational autoencoder.
However, if we just take out the original part we're going to talk about this autoencoder first.
So what's what's so what's the. So what's autoencoder.
Uh so remember for the Gan model they're just trying to uh they're trying to compete with the uh,
it's more like the battle between the discriminator and the discriminator and the generator, but autoencoder taking a totally different stage or pass.
So what happens is that this is the input images goes through some like a encoder.
And then and then then then is like this is a compression.
So you can say the shape of this deep neural network.
It's from like a lot of features to smaller features, let's say in the middle, maybe it's only a few features.
And then you try to reconstruct your images from this compressed representation to the original ones,
and then you compute how different you compare the pixels, like how different the input data and the reconstructed images look like.
So. So what's the motivation here?
Uh, if if I can reconstruct my images even through the crazy compression, which means I really learn the distribution of the generation.
So basically. So basically I will use another simple example.
If I want to remember, if if I want to know how to draw a draw.
Cute cat. But but but but so so maybe I remember there are colors there, their shape and how cute they are.
Something like a key features. So even I largely reduce or compress their images into something like my core summaries or their distributions.
Then then I can reconstruct it perfectly or quite close.
So which means this is a very good representation or latent distribution of my input data.
Again compression the intelligence.
And if you can you can reconstruct from the compressed data, which means you really know what's the distribution or representation of the images.
So so so therefore. So therefore this is the unsupervised approach so that you can learn the real generation.
Uh so so so so so here's a so here's some examples for this, uh, variational autoencoder.
Uh, I don't know. Each time when you really zoom, it's become creepy.
Uh, but it's just like illustration. Uh, we're going to talk about the, the architecture or the core of it.
So. So regarding the, so regarding the autoencoder.
Uh, so regarding the autoencoder, uh, what happens is that you have a lot of like, input images.
And you go through this, you go through this first like it's called encoder.
So encoder is actually a compressed process like, uh, just like, uh,
using convolution layers and other things to compress your data into a smaller dimensional space.
It's called latent space or latent representation.
And then you do this, you do this reconstruct using this latent space or latent space representation.
You're going to reconstruct the, uh, you know, the original images.
So so so so if you know the compression that, uh.
Uh, we compressed a reconstruct from the compression is very challenging because, uh, because the information got lost.
They lost forever. So which means you really through this process,
you actually filter out the information which are not important so that you can really reconstruct the real image from it.
So if you can reconstruct image perfectly well, which means during the compression you just like dropped unnecessary information.
So so so this is called encoding. This is called decoding or this part is called a generation.
And most recently uh, I mentioned that uh, they have this uh faster model called GV.
Um, it's a, it's actually they don't have this decoding process. It's uh, they don't generate it's just like make the decision.
Uh, so that's why autoencoders have a lot of different usages.
We're going to, we're going to explain a bit here. So first off autoencoder.
So. So this is autoencoder. And it's first of all it's unsupervised approach because your loss function is just like
simply calculate the difference between your input images and the reconstructed images.
So you don't need the labels. You don't need to know this is a cat image or dog image or whatever image.
You just need to make sure your image one can be reconstructed and image two can be reconstructed.
So you don't need to know what's in this image. And the core is to learn a low dimensional feature representation from its unlabeled training data.
So which means the goal is to learn this, this one.
Because if this one can reconstruct your images perfectly, which means you already learn a core distribution of the data.
And so encoder that first part is an encoding which means encoder information.
If we have a raw data, raw input data here and it goes through the encoder.
And then you have this so-called feature space or latent feature in the middle.
Let's call this a feature Z and a. And basically it's just like a multi-layer perceptron.
Or multiple neurons. There's nothing nothing crazy here. And if you replace the encoder actually by the real neurons, that will be this, this shape,
which means from a lot of features and compresses to a smaller number of the features.
And if it's image, usually this is the convolution layers, which means you just compress the information.
And then the second part is the decoding decoding which means you are going to use this learned feature space to recover the input images.
So which means again this decoder is still the deep neural network right.
But however you're going to from like a small number of the features to the full images.
So basically your reconstruct. But again the fancy part is that if you're using limited information, you can really reconstruct the full image,
which means there's a small latent representation already capture enough information about the image.
And again, this is also the vice versa. Many of times the autoencoders are symmetric.
So which means that they have exactly symmetric layers. But you can design different types of the autoencoders as you need.
So therefore. So therefore. So how do we really learn this.
Weight matrices or parameters of the autoencoder. Usually we you know represent this encoder as the theta and the decoder as theta D.
It's very it's extremely extremely simple because loss function is just saying how good my reconstruction looks like, right.
For example this is my reconstructed images x hat and this is my input data x.
And I want to make sure they're as close as possible.
So which means you just want to measure the loss function as a distance between the generation and the input data.
Uh, so you can use for example, Euclidean distance or whatever you want.
Let's say this is a pixel one two. For the input images, it's a .02.08.
And your reconstruct reconstruct it to 0.03 and 0.08.
If you use the square loss I mean L2 loss, you just calculate the distance equal to 0.005.
Uh, so basically you want to minimize this as, as small as possible.
The best case will be zero or equal to zero, which means you fully reconstruct your images.
That will be the most ideal case. And, uh, and again, Taco Bell doesn't really sponsor me.
So you can choose whatever you want in the next ten, 12 minutes, uh, before we restart at 658.
Uh, yeah. And take some fresh air. I mean, uh, it's a, it's a yeah.
I don't know what to say, but, uh, enjoy ten, 15 or 10, 12 minutes break.
Okay, I think we can restart. And, uh, I know every time people, especially in the second part of the lecture, really want me to have a quiz.
That's a as a reward to something, uh. But I don't have a quiz with me at this moment, so, uh, so so so so I don't know.
Don't feel pity about it. It's a it's a it's a it's it's a game theory.
But the game may never be triggered. Uh.
Right. Because you already got a midterm ahead. So maybe, uh, it's brutal to have a quiz at this moment.
Even even you are in the class. Uh, yeah.
Because, uh, Because. Because during every break, people ask me, are we going to have a quiz today or next time or this time or something like that?
You know, people are troubled by this uncertainty. Yes. If we have a quiz, would it be like a bright space thing we open on quiz?
Or is it like papers handed out? It's a great scope. So people wouldn't tell whether I bring some paper back the quiz or something.
It's a well, maybe that's a good question. Maybe I will bring something with me next time.
Look like we're going to have it. That's a that's a that's a that's a that's not a I'm not saying that's a brilliant idea,
but you know this the word is sort of it's a I think it's friendly.
But also at the same time there's a Gan which means the generative adversarial network.
I mean, there's the adversarial part where the combating part of the, of this word.
So uncertainty is good people so that attract people keep coming to class and for some other reasons.
Um, yeah. The uncertainty is everything. Um, because.
Because, because. Because everyone is looking for deterministic, deterministic paths.
However, there's no such thing.
Uh, because, for example, before I did my Ph.D., I think once I got my degree, I have a determined, deterministic career path.
I never thought about that will apply to a faculty position.
And honestly, I never thought about it.
Even before doing PhD, I never thought about I would I would do it because when I finished my bachelor's degree,
I, I thought I would never do anything in academia because I don't like research.
And however, when I started working at the industry fast enough, I realized I don't like the industry neither.
But when I did my PhD, I suffered a lot. I think I hate it.
But. But now I got a conclusion. What I, what I, what I dislike or what I hate is not about industry, academia or something.
I just hate there's a manager or there's a boss or there's a better tell you what to do.
So that's what I hate. Um, so.
So finally, I find the faculty job is great because it's more like you're running your small startup, and, uh, it's a very different flavor.
It's it's it's interesting thing because, uh, a university gave you, uh, some lab space, uh,
startup fundings to run your group, and you can try to grow it up, or you can try to create a smaller size,
and you need to do a bit of teaching, however, uh, however, for example, my daily,
daily life look like I usually wake up at around nine, sometimes even earlier in Atlantic time.
I woke up a little bit earlier because, uh, because I feel I need to burn the token as early as possible.
And I wake up at around nine and I start working at around 9 or 930,
because there will be a 30 minute buffer where I just like, uh, you know, check out the TikTok and All the bad,
so you know you won't immediately start working on something starting from nicer to to to usually or family schedule is from 930 to around 11.
Uh, we usually finish at 1130 in the night.
So basically, if so, at my apartment, we have two workstations set up, like our daily life, which is like working from 930 to around 1130.
But in the in the middle there's a lunch break. Whatever. Uh, so I enjoy working from home, however, with extremely long working hours.
But you made most of your choice. There's a there's no office.
You need to, uh. You need to come. I come to I come to Ginsburg Hall a few times a week, like 2 or 2, twice or twice or three times.
But it's still the case. There's no single person saying you have to sit in this office from 9 to 5.
That's the flexibility I really enjoy. And, uh. So, so that's why in the projected future, I will stay here.
Uh, other than come to some. Because different people value different things differently.
And, uh, uh, one thing because now many, many of my PhD students,
they just graduated and they immediately paid for half 1 million or 8, 800,000 per year.
And then my friend asked me, like, would you would you feel there's a gap saying, you know, uh, your job is less valued or devalued or something?
I have a two argument about this. I think it's also for general computer science people as well.
One of my argument is that, uh, first of all, this AI trend or this AI, I don't think it's I have at least this AI, AI valuation may not persist.
And this year you get paid, like, let's say half a million, 1 million.
But next year, what if this job is gone? Like philosophical wise, it's very hard.
It's mental. It's brutal. I mean, I have had this experience once.
I had a really high paid job, and that lasted for two years.
And suddenly I lose that. I lost that job. It took me a few months to recover.
It's brutal. I mean, mentally, it's very hard to adjust, and you need to change your lifestyle.
You need to think about a mortgage. You need to think everything. Rethink everything again.
And you start worrying about on the right track or what's ahead of myself.
So that's a that's a brutal. I think many of the AI person may face this issue from industry in the next few months,
or even a year or two, because, you know, the wind will stop at certain moments.
And so that's why I'm not in the jealous mode, saying, you know, I need to get something like that.
Another part is that for certain people, the flexibility and the freedom is really important,
which means you can decide when to work and when to stop work and where to work and what will work out.
Because in the last of a few weeks I wrote a few new papers I'm interested in, which I don't have the luxury to do.
If I was at industry, or especially in stock, I'm still at some certain startup.
But startup is also very brutal. So, um.
Uh, so it's always about like, uh, whether you really can balance what you want and what you get.
Different people got different feelings.
So that's why I think the AI and mental health can be a big thing for the next few years, because I feel this, uh, AI trend will,
uh, it's not a bubble, but I think something crazy may happen, and the Bay area need a lot of help regarding the AI mental health.
Uh, but still the case. I tell my students, just go to Bay area after the graduation and enjoy the tide, enjoy the wind, enjoy this crazy time.
That will be fun. Um. Yeah, but, uh.
I'm fine. I will. At least in the projected future, I will still be here.
Next semester, I'm teaching a new course called, uh. I'm teaching next semester, I'm teaching a new course.
Uh, it's also, uh, it's also, uh, some new topic.
Uh, just in case you might be interested. Uh, it's still, uh, it's still under development, but we're doing this, uh,
auditing as system foundation models and, uh, uh, foundation models and agents.
That'll be next semester. That'll be a 6.99, which means that there will be more seminar, research and, uh, project driven.
There's no exam. Uh, there's no exams. So, uh, once a week, same lens, but it's all about reading papers, doing projects.
And it's a 6.99. So which means it's mostly targeted for PhD students.
But, uh, in the past we have the student undergraduate students, we have master's students.
Uh, will usually allow everyone to try it out.
I think the auditing assurance and the risk modeling that will be another big thing for the agent and foundational foundation model time.
But it's still early time to to to to to to follow,
especially if you have a financial background that will be even better because all the firms are
trying to understand better about how to a price their agent risk and design some fancy product.
Um, okay. Sorry. It's it's it's a it's a it's a it's a weird tour, but, uh, but sometimes I got questions like that.
So, so another another weird thing before I even further go, um, you know, a lot of startup is really enjoy sending emails.
Do you want to have a chat for something we are doing? Building something great.
And at a certain time, at a certain moment, I cannot, I cannot, I cannot say no because there's a mutual friend or something like that.
The most weirdest thing I recently run run across into that specific startup, asking me, so how do you feel we can make some profit?
Or so they're basically asking me, giving all products, how can we make some money?
I was thinking, that's your startup. Like, how do I even know better than you?
So. But they are there a little bit there in there.
They're not they're relatively successful in the news.
So I got a feeling that many of the AI startups don't know what are they doing?
They're just trying to they just do it anyway. And if they if they work, they work.
And if they don't, then forget about it. And they're just trying to understand where the, where, how the business can come.
Uh, another another recent recent read from Reddit is that, uh, or Twitter?
I don't remember who, but it's more like a previous project.
Established a startup founder, uh, sharing his personal experience.
Like he knew that at the moment that the product will fail 100%, it will fail.
But the man is burning and he couldn't see any way this can get a can.
Can can can can can get a can get onto a right path.
But he couldn't. He also couldn't say let's stop it because he got money from the venture.
And he got a, you know a dozen of the employee to to work with.
I just don't know what to do.
So, so basically you're saying the ship is sinking, but you don't know what to do, make sure that failing because it has already been a few years.
Now he can finally talk, talk, talk about it. I think it's really provoking the reasons because, uh, yeah, there's a huge risk in AI startup as well.
And it's not easy. Uh, right.
Anyway, we will say we will see how things are going in the next few months, uh, in the AI world and, uh, okay.
Sorry. It's a big detour and we need to go back to the generative AI for sure.
So before we have the break, we talk about autoencoder. So what's autoencoder?
It's a symmetric way. If you compress your for example your image.
This doesn't necessarily need to be an image. It can be a you know some audio, some video, some like text data.
As long as you can recover the original input, which means your encoder learns,
which means you actually learns the good representation of your input data.
And here's a here's just examples showing you that using this is different using using using different compression.
Like how the autoencoder, how the how the autoencoder look like.
You will say you will say it doesn't.
It has some like a they tried different ways.
They tried differ in the compression ways, but you can roughly say, what are they in the first place?
And it's so, so that's why.
So that's why one big usage of the autoencoder, other than generative new images,
will be compression just using as a good way for compressing your images.
And so so so in the middle of that they part latent representation part.
If you do some visualization in a two dimensional space, you can potentially see some meaningful representation.
So this is the digits from 1 to 9 sorry from zero to 0 to 910 digits.
And different color just means they're coming from the different labels.
You will see roughly this two dimensional space can even capture the labels.
So which means for example, I don't know what it is. Maybe this is a oh, so the smaller just the mean nine, right.
So you can say not actually even in this two dimensional space they actually clustered together.
And this 012 they also get their separate clusters.
So which means to increase the compression using autoencoders.
In that two dimensional space, they can still capture some latent or important information about your original image.
Which is great. Which means actually this compression is not it's very meaningful.
So that's so this is also why even from the two two dimensional space, this is an extreme case.
Even potentially from the low dimensional space, you can still recover the original images,
because in the low dimensional space you still remember which are closer to each other.
You learn some good patterns of the data you have. And so for the autoencoder the steps will be.
The first step will be trained autoencoder. As we're showing here you have a lot of input.
Images goes through the autoencoder and also the decoder.
Usually these are symmetric and these are just deep neural networks. And you predict the reconstructed images and then you calculate the loss right.
The loss function will be x x x x hat minus x square.
And that will be our loss function. And you do the backward optimization of your weight matrix.
Weight matrices. The weight matrix is just a mean encoder decoder right.
So it's a so it's a very straightforward, um, and after you fully train your autoencoder you can drop your decoder again.
Again, if you drop your decoder what happens will be you have the input image. You have this encoder.
The encoder can encode your data well. So this is compressed data.
So this will be a very good representation or the compressed information of your input data.
So you have a very nice data data representation here.
And you can do many things. For example you can freeze this information and you add some classifiers later to to for other tasks.
For example you can you can you can do the you can do the prediction of the bias.
So which means many of times. So this is actually also used sort of you can think this type of technology are also.
Are also used in the larger models. I'm not saying autoencoder are used are used in larger models.
However this is a self-training or unsupervised pre-training are used in large models,
which means you use some unsupervised way to first train a large model to learn some good representations, and then you drop the decoder.
You don't need a decoder anymore,
but you just add some additional task to do some fine tuning with the labels to do some supervised, supervised, supervised tuning.
But your representation here are pretty good. So you can reuse them for, for grades, you know, fine tuning.
Uh, so so so so therefore so therefore so therefore this is a, so this is a general way for using autoencoder as a pre-training way.
So which means you have your image encode uh encoder decoder and then you freeze it and then adding some classifier layers for fine tuning and the.
And then the important part will be the decoder part. The decoder part just I mean, if I have this input feature z then I can generate some images.
Right. So basically again just similar as the Gan model, that Gan model you can drop the discriminator.
Just keep the generator. The generator can generate the images from the random noise.
So similarly. So similarly here you can also do something like that.
Which means if you generate if you drop the encoder you just keep the decoder.
If you sample different z here you can generating the new images.
So so so basically if you drop the decoder you can use the encoder as a compression and get good features and doing whatever you want later.
If you drop the encoder, you just keep the decoder. Then you sample different features here to generate the different images.
So there's a lot of usage for encoder decoder.
keep all of them or drop some of them or mix and match.
So there's a lot of like a usage for autoencoder. So then the question will be.
So if we look into this generation process so so this is the real images in the data set right.
Like this. These are the real ones. And if you use autoencoders these are the generated ones.
But we are going to look more closely into this. So how to do this.
So how to do this a generation recall we originally have this encoder.
And then we trained both encoder and decoder. Using this reconstructed input and the loss function we drop the encoder now and then.
The question would be if we if we evaluate the feature here the z can we generate some new data.
Uh we will, we will we will try this. Uh, so so so so so so taking.
So taking this a digit digit images. Again if we go through the encoder decoder and and and then if I change if I if so.
So this is so this each of the blue dots just mean one image in the Z space.
In this latent space. Uh, if actually I sample a data here, you can say it's not really, really close to this existing, uh, digit images.
Then the generation doesn't look like a digit at all.
So which means so this is the dilemma here.
So which means if I, if I simply sample a one existing points from here, the decoder will give me the real image which already happens in my data set.
However, if I sample from if I sample from a place which you know my training data doesn't cover,
then the decoder will give me something doesn't look like a real image.
So this is the same if I sample from the existing ones.
There's no diversity. If I sample from the place which doesn't exist, there is no reality.
So it's more like a this is a bad thing about autoencoder. is not that useful if we just use the vanilla format.
Uh, yeah. So so here we are showing that showing you the example.
Say if you, if you, if you, if you, if you just like use existing samples, uh, goes to the decoder.
It's clearly a nine. However, this is already happening here.
I don't know where it is, but it actually maps back to something already exists.
So your generation has no diversity. But if you if you sample from a place which far from your training data, the generation doesn't make any sense.
Uh, maybe this is the seven, but maybe not. I don't know, maybe it's also a nine, I don't know.
So it's a so this is a so this is a tricky situation where facing the vanilla autoencoder.
And then we're going to show you how we can fix this issue. Uh so so so so so so so why this doesn't work.
Well, it's because you can say the training data this.
So basically the issue here is because, uh, you call this this this latent space is A is a Z place,
which means if you remember the autoencoder architecture it's this one.
So basically encoder decoder. But in the middle it's a latent space called feature Z.
So this is the place where we're visualizing we're visualizing showing you.
The issue here is that you can say this.
This is a latent space Z. It's a it's like a random distribution.
Right.
Like you couldn't really you don't have a efficient way to say whether if you sample a new thing, whether it's actually from this distribution or not.
So so therefore one good idea will be what if I enforce all this training samples in this feature Z to actually follow certain distribution.
So for example, what if it follows the normal distribution. Then I can potentially sample something out using my normal distribution.
However, it does not exist fully exist in my in my in my original data, you will say.
Uh, you can say, uh, you know, it's illustrative example.
So this night is different from this night. However, what we're trying to say is that if I can, if I can parameterize this latent space Z,
then I can have a way to sample from it other than just like this one.
So because this point is maybe from this may not actually be from this training data distribution, then the generation is pretty bad.
So so so so so that's why.
So that's why the vanilla autoencoder using the reconstruction as a learning goal doesn't really tell us where to sample it,
because the goal is to just like reconstruct the data. Well that's it.
However, uh, the only make sure that, uh, you know this, you can reconstruct your training image,
but they have no enforcement on the sample sample space.
So which means your training sample can be, a if, for example, this is your latent space Z after the autoencoder and you will say,
if you want to sample from this place and no training sample in the past,
actually falling for actually cover the space, you are going to generate something look very bizarre or observe,
which means the decoder only learned from this distribution.
However, if you sample out of distribution, there's not really working well.
So then people update this autoencoder to this variational autoencoder VAE because this
actually also constrained where this latent space looks like and distribution looks like.
So which means it's a we're still following the reconstruction procedure,
but we add a new sampling distribution or enforcement to make sure things are more controllable.
So you can think it's a, it's a it's an advanced or enhanced version of the autoencoder.
But we add a constraint or enhancement. So so here's a variational autoencoder.
Uh. Nothing changes. Nothing changes here.
However, different from the previous thing. Like previously, we have no constraint on this feature space Z.
These are just whatever they are. However now we add a distribution.
Distribution constraint on it. We assume we ask this to be a Gaussian distribution.
Uh so so recall originally. So this is the latent space Z.
It's just like whatever it is whatever. The reconstruction error shows us.
It's whatever distribution it follows. We don't know what it is.
And usually it's not. It's not a it's not a describable. You couldn't really describe this this space.
But we can actually enforce this to be a Gaussian distribution parameterized by standard deviation theta.
Sorry it's not standard sigma. And and the mean and the mean vector mu.
So therefore recall in the very early space we talk about. For the Gaussian distribution you only have two parameters which is the mu and sigma.
So which means if you can. So if I enforce this distribution for the Gaussian distribution then I can
sample new images from this distribution easily by changing the mu and sigma.
So I can generate some new images. So they're real. They look real however they look diverse.
So that's the goal for constraint the distribution space of the Z or the latent space.
So now we have a two part of the. So originally without this variational autoencoder without without variational it's just autoencoder then.
Then the vanilla autoencoder is basically just trying to reconstruct your image right.
Like you have the input and you have the output. You want to make sure the loss is minimized regarding the reconstruction error.
But now we have this one more thing called latent loss.
So basically we want to make sure it also follows.
This latent space also follows the normal distribution.
So we add a it's more like you add a it's not it's not a regularization but it's a similar philosophy,
which means you add a one term to constrain the distribution of your latent space.
Here follows the Gaussian distribution. So so now we have two parts of this loss.
One is the reconstruction loss which means still the case. You still want to make sure the input image can be well reconstructed by the output image.
And the second part will be the latent loss.
You want to make sure the divergence between the distribution of the latent variables are also, and also a prior distribution.
Here.
For example, if we enforce this, a normal distribution, which is a Gaussian distribution with a with zero mean and standard deviation equal to one,
we want to make sure this, this representation, this, this space are not far from the prior distribution which means it's a Gaussian distribution.
So basically you add in. You add a constraint here or add a regularization here to enforce it.
So that's so so basically that's the goal. But the benefit is straightforward.
If I train my variational variational autoencoder then I drop my encoder.
Originally I have no way to sample really from this latent distribution because I don't know it's a parameter.
I don't know what it's what distribution it is. But now I enforce it to form to to follow this normal distribution.
Then I can sample, I can sample from wherever it follows the normal distribution and therefore I can generate the new
images still look authentic however get a diverse because you can say I can maybe sample from here,
from here, from here. But we know our training data are following this distribution.
So if I go back, go to this reverse order to do the thing to do the decoding process.
It also gives me something look really like my training image however.
However also at the same time it's a it's a, it's a, it's a, it's a, it's a, it's diverse.
It's not a collapse. So that's a so that's a so that's a so that's a cool idea for, for for for this.
So so here's some examples. Uh here's some examples.
This is the original images from the from the data set. And these are some generated images from the using movie.
So you will basically say overall they look like just you know by glance if we don't look into the details,
look like they're from some similar distribution, they have diversities. So basically each of these images look alike.
Make some sense right? It's not a fully sorry when I look into that.
It's not that making that much sense, but still makes some sense.
And uh, you feel they're from the same distribution sort of.
And they have some diversity. So that will be the goal, which means the, Or so that that's the goal, which means you.
You can control the generation. They become a little bit more authentic, but they also get some diversity.
So that's the overall goal for this variational autoencoder.
By enforcing the middle part, this latent representation following certain distributions, that will be the goal of it.
And if we see a full diagram of it so you know so so basically you have this input images and still the case.
You go through the encoder decoder. You want to reconstruct your image.
Well. So that's that's no different from the autoencoder. But you add one more part which means in this middle part you enforce the distribution
of your latent representation or this space to be a normal distribution.
You have this mu and sigma for this specific training sample, and therefore your loss function will be two parts, right.
The one part will be the reconstruction loss. You'll want to make sure this image can be reconstructed well and then you have a second loss.
This is called a divergence distribution loss, which is called the KL divergence, which you compare, uh, if you if you.
It's slightly more terminology, but the philosophy is extremely simple.
Basically if you if you define your distribution of the z, this sample z as a Gaussian distribution,
which means the z as the Gaussian distribution for normal distribution, whatever you want or exponential.
The reason we're picking Gaussians because it's easy to compute. There'll be some tricks.
And then you have your training data X and your your your actual distribution z.
Given x z given x is actually the the empirical distribution here.
We also measure how close this distribution to your prior distribution.
So basically we hope they're getting closer as closer as possible. And this loss should be as small as possible.
So it's more like you just add a constraint to uh, to to actually constrain your, uh,
latent distribution, latent distribution Z here to follow the normal distribution.
Uh. That's it.
And then during the generation process, you, you just like generating from your, your, your, your learned distribution, you know, normal distribution.
You go through the same decoder to generate some new images. Uh, and again, the generation also doesn't need.
It doesn't need this encoder at all. You don't need anything from the encoder.
Uh, for all this autoencoder we're using, the generation still just need a decoder,
but they help us to get an efficient way or smarter way to generate from, like, parametrize the distribution.
So that's it. But again, you don't need to use the Gaussian distribution. You can change with the exponential better whatever distribution you want.
However Gaussian distribution have a very good property for calculating for loss for loss optimization.
So that's why we usually use the Gaussian distribution here.
Uh, and in other words, we also learned the distribution through the training data, right?
Like because in this training data you are in the training test encoder,
you actually learn how to actually put this latent variables on this Gaussian distribution.
For example, in this one mu equal to two sigma equal to 0.05 something like that.
However your encoder can different images can follow different things.
Um, I'm trying to, uh I'm trying to I'm trying to say whether we want to skip some of these details because many of them are a little bit, uh,
heavy because we already got to the core knowledge saying, um, autoencoder just trying to learn the reconstruction loss and the encoder decoder.
And in the middle, it's the latent variables. However, you couldn't really control it.
But the variational autoencoder. Variational Autoencoder.
You now parameterize this. The middle part. Middle part as a as this Gaussian distribution.
So therefore you can you can control it.
But to learn it as a Gaussian distribution you need to add a loss function to to to to to fit this Gaussian distribution.
So that's the only difference. And so this is this is the. So this is the two last terms.
We just talk about variational autoencoder. You still get this reconstruction loss.
You still need to reconstruct your images. This is original images.
This is a reconstructed one. You still want to minimize this one.
And then you add this new loss function to to to enforce your latent space Z to also follow this prior Gaussian distribution.
So basically you hope these two distribution they can overlap. That's it.
Encourage encoder distribution to the sampling prior. Sampling prior is Gaussian distribution and encoder distribution.
You don't have it. It's just like a you're learning from your images.
Um uh yeah.
This is more about like basic knowledge for how to measure two distributions, whether they're closed or closed or not.
If you want, you can search out let's call the KL divergence or KL measures. But we're not going to uh, jump to the details.
Uh, there's a lot of like the mathematical, uh, because we have a very elegant, uh,
mathematical properties, but it's beyond the course, beyond this course scope, I think.
I don't think we're going to expand it. Uh, we just want to show you the motivation, and I'm going to, uh, fly through many of these slides.
Uh, yeah. It's a it's a you can check offline, but, uh, I don't think you usually don't need to.
Usually you don't need to really master any of this. Uh, but for the person who really enjoy math, you can take a look.
But, but, but but this is a good summary. So? So for the general autoencoder again what happens is that you have this input data x.
You want to reconstruct the input x. And this is your encoder.
This is a decoder which means f of x and g of x j of z.
In the middle it's a z as an intermediate step or intermediate variables or latent variables,
which means that will be the good representation we believe your data follows.
And however this is deterministic like everything's deterministic there's nothing giving you the probability.
And however the variational variational autoencoder are different right.
Like you now we parameterize things as the probability or the distribution.
So basically Z the distribution is no longer a fixed deterministic value.
So. So so this is the mapping from x to Z is actually a given some x this this we learn this distribution of z.
However we have a prior of z. So which means we have the z. We want to minimize the difference between C of Z.
And that's a prior. And this is a q q theta a q for z given x.
However, for the generation you don't need a. You don't need all this anymore.
You just need to say, okay, given my data, given my given my a learned representation Z and how to sample some like a new value.
So is this a bit over the scope of the course? But again, all we're trying to say is that autoencoder is deterministic.
Like everything just like very straightforward.
However, if you really want to do something like a sufficient or efficient sampling to generate new images,
we need to change this deterministic setup as a probabilistic model,
which means it's a Gaussian distribution model here, so that you can sample something smart.
That's a that's a that's the case. There's a more mass that will just all fly through.
Sorry I think because it's a it's slides like we keep adding new and new things.
It's finally it's becoming very, very long. And the last thing I want to mention for this variational autoencoder is that the
reason why people still like it is because it's an elegance on the mathematical side,
and you're still welcome to check it out.
Because this loss function in certain parts, you couldn't optimize at all. But you can.
But you can get some like an upper bound for for calculating certain things.
Anyway, if you if you if you enjoy it, you can you can read it.
I will I will quickly fly all through, all through this.
So you don't need to be tortured here. Um, yeah.
Sorry. It's too many. Huh.
Interesting. If I fly through enough. If I fly through enough, I even finished this one.
But it's good because I want to go back to my blog site and there's something I haven't finished yet.
But but I don't know. I have, I have 300 pages, but I potentially because all of these are hidden, right?
Yeah, there's a lot of like research slides that I try to hate. I try to hide here.
Um, yeah. We may we may come back to this when we have time.
So the last 20, 25 minutes, I want to finish something we didn't finish last time regarding multi-task learning,
transfer learning, and automated machine learning. Um, uh, but but as a quick recap for this, uh, for this, for this block eight blockade,
we talk about the Gan, which means it's a generative adversarial network,
which means you're trying to have a discriminator generator that compete with each other to learn the best generator.
And then we talk about autoencoder.
You try to reconstruct your images, and then you drop your encoder, but you use the decoder only for generating new images.
And then we take one step further to do this variational autoencoder,
which means we try to learn the distribution of the latent variables so that we can generate the more realistic images.
So. So all the generative AI or generative AI models.
The goal is to learn a good generator, then drop your encoder many times.
So that's a so so if you if you use large models.
So if you last more if you use large models, you must have heard something called a decoder only a transformer.
But because finally, finally, uh, so this is now the workhorse for the generative AI because the reason is that way,
a way most of the time you just want to because after the training, most of the time you just need to do the generation.
And the generation is mostly centered around the decoding or generator part.
Um, yeah. You can, you can, you can use some like a good offline rating.
And now we're going to go back to something I didn't finish.
Last blog. The last blog we talk about like training techniques like normalization, dropout, uh, data augmentation,
which means you crop your data, you, as you use dropout to actually drop a random part of your deep neural networks.
These are these are the things. And, uh, uh, what else?
Uh. Uh, sorry, where am I?
All right. We also talk about how to choose the hyperparameters and some of this transfer learning.
And I think we're going to. Okay. I think we're going to start from here.
Um, so last time we stop at this transfer transfer learning transfer learning part.
So what's transfer learning. So basically. So basically when you're in this world there's already a lot of like good models.
There are well trained on a lot of data. When you have a new when you have a new task you try to.
You don't want you don't usually want to start from scratch, right?
Like you for example, there's already trained well features for the images on some like ImageNet.
It's already taken hours or thousands of hours to train when you want to build a small.
Let's say a team member image classification or something like that,
to tell whether they're from your same team because you can add a huge, huge class.
You don't even know who your team members are. You don't remember their face and you want to train such a model.
Then you don't need to train from scratch. You just you can actually freeze most of the layers from the existing models,
and you just need to do some adaptation for the, for the, for the, for the, for the new, for the, for the last few layers.
So this is the transfer learning which means you learn from something already good existence.
Uh, and, uh, and, uh. Uh, there's a lot. Last time we talked about there's multiple ways to transfer learning, given your situation.
If you have a little data, uh, if you only have a little data for the fine tuning and you have a very similar existing data set,
you just need to do the last few layer retraining, like, for example, linear classifier on the top layers.
That works. And however, that won't work if you only have a very little data.
But your, uh, but your, uh, source data are very, very different.
You're in trouble because there's not too many things can be transferred. The thing is that this is the image classification data.
And if you want to transfer for the similar task, you're good.
However, if you transfer from, uh, if you transfer that to very different things, you are not going to work well.
So transfer learning are not always working. It only depends.
It depends on how much, how much new data you have at hand or how much, how much, how similar the existing all the data sets to your new problem.
So that's two dimensional set. We want to we want to look at and transfer learning.
Of course it's almost everywhere. And last time we also talk about large model large model fine tuning using low rise.
Also part of this part of it's more like a transfer learning.
Rather you phrase part of the model and you fine tune a certain of them.
So so so now we're going to talk about some new concept called the sorry words that.
Now we'll talk about some new things called a multi-task learning.
So so what's the multi-task learning. So so in the past what happens is that you train a deep neural network,
but usually that's for task one only or task A only for example image classification.
But what if I have a separate be. It's also the same input data.
For example this input input image. These are input images. This one just gave me the image labels classification labels.
So what if I have a task B as well? And a task B is to give the captions of the images or the description of the images.
Can I do these two things at the same time or what's the benefit for doing so.
So actually this is a so actually this is a there's also other structures which
means for for example for the same images you have two different set of features.
Maybe some of them are images, some of them are the corresponding descriptions.
And they have two separate tasks. So so overall one idea for doing this.
And it's widely used in this multilingual speech recognition which means the human language are shared.
Something in common even. Finally you want to do some translations to French, German, Spanish, Italian or Mandarin.
Like it doesn't matter. Like a human language, they share something in common.
So similarly the multi-task learning are also similar things.
The input feature the same thing, and if they share some similar latent features or latent representations,
then you can you can simulate simultaneously train multiple task task A, B, c they will help each other.
So the very good example here will be this a multilingual speech recognition.
Because human language. Share common characteristics. Just like large models they train on a lot of tags right.
This text they share the common characteristic sequential sequential information.
Uh, language information. So. So that's why.
So that's why, uh, it's it's possible that you can train multiple different tasks on the same data set.
Uh, that will be that will be quite efficient because you, you you can actually, uh, sorry.
You can actually, uh, code train multiple task and use their shared representations.
Uh, so this example showing you that, uh, this is an error rate when you are just using one single language And however,
when you are code trained or multi-task learning with multiple different languages together,
you can use the same using using the hours of the training data at the at the same budget.
The error rate will decrease. The reason is because this actually gives you.
This actually helps you because. Because you can say you get more labels and you get more signals.
Back to this representation learning. So why deep learning is called representation learning.
Because all we're trying to learn is trying to extract the k information from the data.
Data can be high dimensional, can be complex, and all we try to learn is a good representation of them so that we can do the downstream task.
So multi-task learning is a way to code train multiple different tasks at the same time because they share the same foundation representations.
So that's the so that's the idea for. So that's the idea for multi-task learning.
Uh, so uh also also sorry, I'm trying also.
Also, the reason why we defer this transfer learning a bit is because that also can be understand through the this generative adversarial setup.
So for example here we have a new problem. We have some source data which means we've already got we have all the labels.
These are our training data. We already got it. We also got some target data.
So which is something new. And for example this is our source like digit numbers.
And this is our target. This is also digit numbers. But you will see they have different formats for colors or background.
And the question will be whether I can really transfer the knowledge from this source data to this target data as a transfer learning.
The the answer is yes. Right. Because fundamentally they're just digits. And even the background colors are different.
They are still digits. So therefore they are the same task.
But there will be some mismatch involved in this problem.
So if you if you're taking the adversarial training as the motivation.
As we're learning before then you can easily design something fancy here.
So for example this will be our input image. It makes it may come from this source image.
Or it also may come from this target image. And they all go through the common.
They all go through the shared feature extractor. We hope to learn this common digit patterns.
And we have two classifiers here. One is called label predictor to predict whatever is which digit is like zero, one, two until nine.
We also get a domain classifier to predict this is a fake or real, or it's not fake or real from source or from target.
So basically so basically what we hope is that both of them are doing a good job,
which means this feature extractor, the fundamental feature extractor,
can learn the digit patterns so that we can really so we can really tell this 01234 and the domain classifier can help us to uh,
to, to to to tell the, uh, you know, it's from the, it's from this black background or from this color background.
So that's, so that's the goal for the domain classifier.
But it will say that the first real part will be we hope to confuse the domain classifier by still making preserving the labels,
which means if we can if, if the domain classifier finally couldn't tell which image this comes from,
from the source domain, but it can still make the digit a prediction, right?
Then. This proves this feature extractor focus on the digit patterns other than the background colors.
So basically in that sense, this one and one they couldn't differentiate.
We don't. So the domain classifier couldn't differentiate words. Are they coming from like but they actually can predict as one perfectly.
So this is a so so so so they have a different goals right.
Like maximize the digit prediction. And this will be maximized in classification accuracy.
However, if we train this feature extractor well enough,
then this dummy classifier will be this function because it couldn't tell anymore where this dumb income comes from,
and the label predicted predictor will will do pretty well.
And because this because the background information are not very useful, we just want to know which digit it is.
So that's a so that's the whole goal for this adversarial training.
Uh so so so so so so our mentioning this is because you can see the first real training are,
are quite useful in many of the domains, even in transfer, even in transfer learning.
And also as you can imagine for this, for this set of setup, this for this type of the update zero also using that alternative alternating training.
So which means you freeze this, you train this train you train this.
And potentially you also freeze this one and you train this one. So basically, as long as there's adversarial training,
many of times you do this alternative alternating training because they have a different they have a control.
They have a contrasted, uh, optimization goal.
Uh. Right.
And last time we also talk about how to fine tune large models.
I'm going to fly this through. If you still remember, the most important thing we talk about is Laura, which means a low low rank adaptation.
So which means this is the original large model with W.
And we want to learn delta W. But the delta W is decomposed as the dot product with the b and A, which means they are smaller matrix.
And therefore you don't need to use as much parameters as the original weight matrices.
So that's why it's a fine tuning other than fully, fully full training.
Uh, the reason why we can compress it into smaller, low rank, uh, parameters is because something called this,
uh, intrinsic dimensionality, which means, uh, your data doesn't need to, just like autoencoder.
Right? Autoencoder compress data into very low dimensions, then reconstruct.
So which means the data usually they have a lot of like redundant information.
You don't need all the features to recompute everything.
So similarly uh, this low rank optimization also gives you this, uh, this thing, which means you don't need to get a full W,
but you can get a dot product from B and A, and it just saved you the parameters.
Uh, we already talked about this last time. So I'm going to move to the next part, which is uh, uh, hyperparameter tuning.
Uh, we talk about we talk about a lot of like, uh, you know, deep neural networks, but how can we know?
We also talk about normalization, learning rate and optimizer choice.
But the question will be if you are doing this manual process or experiments,
how could you really find the right settings for this, for this, for the for your deep neural network?
In that mid-term review, the first set was saying one potential choice will be you can actually do this.
One potential choice will be you can have a validation set right,
like using validation set to to to choose your settings like the learning rate or whatever, whatever.
However, even that's the case, it's not very efficient. Even if you propose a configuration, then train and evaluate and then choose the next one.
This is still taking time and and also and also for deep neural networks there's just so many choices you can do right.
Like for example learning rate normalization data Preprocessing, optimizer,
architecture, shape and for example, whether you use SGD or a vanilla gradient descent.
What's your momentum to use and what the user dropout. There's a way too many things to choose as a human or by human.
So. So that's why we need some automated way to do this.
And we hope, we hope to automate, automate the choice of the deep neural networks.
So so now if you want to do this we want to first talk a few setup for the terminologies.
What's the key information in the machine learning pipeline? I think there's at least two things that will be.
First will be the algorithm. Then that will be the hyperparameters. So what's the algorithms.
For example a data pre-processing or k nearest neighbor logistic regression, random forest or whatever, or the deep learning.
These are all algorithms, without any doubt. And each of them got some hyperparameters right?
Like hyperparameters are. The parameters won't change through the learning.
So. So if you're doing PC which means what's the number of the principal components?
If you're using change neighbor, what's the number of key. And the random random forest.
Which means how much like base tree do you have?
Even for deep neural networks, there's so many things like learning rate, dropout rate, architecture of the deep neural network.
These are all hyperparameters. And so therefore.
So therefore what really happens is that you want for specific machine learning problem.
How could you choose which algorithm and their hyperparameter for a given task.
So that would be something we really want to understand.
Uh so so we hope this can be automated.
Like saying we can automate automatically choose which pre-processing to use with the model and training hyperparameters.
And uh, and we chose these are more compute.
Uh, but before we look at the, the technology details, there's a few things to remember.
The automated machine learning is not necessarily better than human selection,
at least in the classical time, because in the past the models are not crazily difficult.
There are a lot of like a lot of practitioners are are well versed.
They know which model to use.
So that's why in the past, the human selection or human tuning of the machine learning model make a great sense and people get paid for it.
But of course it's no longer. It's no longer the time. It's no longer the case.
They won't pay you for, you know, choosing the model smartly.
Uh, I think I got paid for this at least ten years ago because nobody knows which model to choose.
They all just know logistic regression and decision tree.
Uh, weird enough, my my father, who is who was born in 1958, 1959, uh, is at his, uh, around the around his, uh, 6768.
He even know decision tree. He didn't got a he's not a he didn't get too much education throughout the rough time.
However he learned this decision tree when he did his self-learning for some business courses uh, back in China.
So it's a it's weird decision trees everywhere. So but but all the time everyone knows the decision tree.
Um, so the human selection for the specific models and the tuning,
their hyperparameters are quite reasonable by that time and people are paying for people are paid to to do this.
But now, you know, if you if you let's say if you want to do a hyperparameter tuning for large language models, it's impossible, right?
Like there's too many things you can change, and you couldn't afford the price for each of the training.
Like for example, each train you take millions of dollars and then, okay, you are saying this is not working.
Well, let's try another one and you may be 30 immediately or tomorrow.
So so that's why nowadays, uh, manual process or manual tuning for the larger models are almost nobody are doing.
People are just mostly doing automated machine learning. And, uh.
Another thing, another interesting thing is that if you don't know how to optimize your model, maybe ask large models to optimize for you.
Any decision making process you can replace this can now can be replaced by larger models.
But we're looking at some very simple automated machine learning to give you a sense of how these are doing.
For example, let's say we want we have a new machine learning task to predict the lower lower
default or lower the lower whether we should give a loan to a certain person.
And we have multiple choice of the things which are.
For example, I can use decision tree with the tree depths equal to five against decision tree,
two apps equal to ten, or continuous neighbors with different number of neighbors.
These are all choices I can do. And how can I choose this smartly?
Right? Or if I, if I, if I, if I, if I, if I even more Constrain the search space.
I think I'm saying I can only use decision tree, but I can use the different types of decision tree from three to 5 to 10.
How can I choose this tree? Apps. Automatically or smartly?
We're going to show you some of this some of this process.
So so and before and even before we look into this.
Usually nowadays we're mostly doing this hyperparameter search only.
So what's a hyperparameter search only. Which means I know I'm going to use decision tree only.
I'm only going to change the tree apps. Or if I'm knowing I'm using a deep neural network and I'm I'm only searching for the optimal learning rate.
The reason is because if you are not only searching, if you're not only searching the hyperparameters of the algorithm,
but you're also searching from the, you know, the algorithms themselves.
For example,
you're comparing you're comparing decision tree tradeoffs equal to five versus k nearest neighbor number of number of neighbors equal to ten.
This search space will be not smooth, so which means it's very hard to compare to.
To automatically compare multiple algorithms with multiple hyperparameters at the same time.
So you already know this. We're focusing on looking at one algorithms and tuning hyperparameters only.
But overall it's all about automated machine learning.
So now we're looking to how to give a data driven machine learning task and a machine learning algorithm how to choose the best hyperparameters.
So there are a few ways you can do that, right. Recall in the midterm review.
First talk about you can have the training data validation and test data. You fit your training data.
So in this case you can fit your training data with a model A, model B or model A, model B, model three.
These are all decision tree with different number of the trade apps that works, and then use the validation to choose what will be the best model.
So this is actually a very straightforward you can you can always do this.
So at least there's two ways you can do this. So one way is called a grid search.
Another way is called a random search. So which is a grid search. Basically you have a two hyper parameter which are important.
For example taking the decision tree as an example. The max tree apps will be one dimension, another tree.
That's another thing will be. For example, split the criteria, whether that's a Gini index or mutual index or whatever index.
That can be another dimensionality. So by pairing two important hyperparameter grids, you have multiple choices.
For example this will be Gini index plus tree depth equal to three.
This will be neutral index plus the tree depth equal to five.
So you have a fixed set of the hyperparameters to search for. However you can also do some random search.
You don't care what's a specific grade. You can potentially just randomly sample a few hyperparameters set up so they're not as a grid,
they're just random and uh, uh, and and you can, you can.
What you can do is simply you can just try different hyperparameters, uh, to fit your training data,
and you test the performance on the validation data, uh, and then output the, the highest performance one and whatever.
It's random search for grid search, for example, random grid search.
Have a have, uh, some good feature, which means they have a good coverage of your searching space.
Right? Because it's a great. So it covers the coverage is great.
However, sometimes not all the grids are equally important.
You may put too much emphasis on the unimportant hyperparameters.
Let's say for example, if this if this direction is important, but this direction is not important,
such a grid will actually waste a lot of computational resources on this, uh, on this direction.
But a random search, uh, a random search may not have this issue.
However, its coverage is not as, uh. It's not.
It's not. Have a, like, a good coverage of the entire search in space.
So it doesn't guarantee to give you a good result, but it may give you some, uh, you know,
surprising results, uh, because all these slides have too many, too many to many, too many tags.
And, uh, I can already see people are, are are not not only half that.
It's almost that. So, uh, so let me, let me conclude in these two slides for this grid search and random search.
And the next time we are going to, uh, we are going to revisit automated machine learning after block nine is finished.
But the next time we have a speaker from autonomous driving and transportation industry.
So. But he's also a professor here. Uh, she will she will talk more about autonomous driving car.
And, uh, she may also talk one of our recent founded federal project,
which we're using a genetic AI to control how to send autonomous driving car to save the people.
When a wildfire happens, it's a bit crazy,
but we like it because a genetic AI autonomous driving car save the people from the place where they couldn't get a car and prevent the traffic.
You know, nowadays we need some like a good vision project to work on.
I don't know whether you see that Tesla new new video, I don't know.
It's true. It's been too much for me.
I don't know when to use that, uh, functionality in the sky, but we will say people like the visionary blue sky ideas.
So let me use these two slides to to conclude today's lecture. Uh, we quickly talk about the simplest.
It's not even automated, automated machine learning. It just means when you want to build a machine learning model, choose some hyperparameters.
There's two ways, like two simple ways to non-linear ways.
Like you sample some like combinations using grid search.
You sample some like combinations using random search. They also they're very easy to set up.
And it's appropriate that we have no knowledge for what you're doing.
Like you just like sample some learning radio, sample some new architectures.
You put them together, do some evaluation on the validation set to say how good are they?
You can also do things in parallel because there's no independent.
There's no dependency from one parameter, from one configuration to another one you can efficiently parallelize.
But there's a huge disadvantage, right? Like you evaluate multiple configuration at the same time.
You don't learn. You didn't learn anything from it. There's no learning experience just purely evaluation.
Maybe you're lucky enough to get a good one, but maybe you're not.
So this is not at least it's not efficient. And it can be extremely expensive.
For example, for large models, you couldn't say, okay, let's try ten different configurations and maybe we're lucky enough to get one.
Oh, maybe that's how they're doing nowadays. I don't know. But of course they're not.
This can be extremely expensive. So. And the search space can go very, very large easily because you can save even each hyperparameter.
Only have two choices. Given there's a key of the hyperparameters, you can choose the two to the power of the key.
You know, it's going to be crazy very, very fast for deep neural network.
There's a I don't know what's the number of key. Maybe a hundred or even more.
So therefore this is not tractable. And you couldn't really try everything, uh, by yourself.
So, uh, so most. However, most of the time, if you're not working in technology, you're working,
let's say a financial firm or whatever, building machine learning model.
As long as you can remember, it's just random search grid search for your hyperparameter or models.
That should be sufficient. And there's already a speed up you can speed up using library like a scikit learn,
and there are also distributed version you can do for general usage for non for non Deep neural network or nonlinear model.
Classical machine learning models are good. Um. I think next time we're going to talk about how to fix the limitation of the gradient random search.
But more importantly, we have the guest speaker, we have the midterm review.
And then we're going to cover something new from the Black Knight. I don't remember what's Black Night, but, uh, give a give you a preview.
We're going to talk about, uh, we're going to talk about attention mixture of experts decoding and etc..
So which is a more, uh, large models related. So but I don't know how much we can cover because next we have too many things to distract.
But until that moment, you can enjoy your, uh, enjoy your rest of your day, get some food immediately.
Okay. Take care.`;

const CONCEPTS = [
  {
    tag: "📋 Exam Format",
    title: "What the Midterm Actually Is",
    body: `He opened by changing the plan. The full review was going to be next week, but next week has guest speakers and he decided that leaves too little time to act on it — so roughly half the review happened in this lecture and the rest comes on October 26.\n\nThe format, stated plainly:\n\n<b>50 multiple-choice questions. Two hours.</b> Difficulty on par with the last few years.\n\n<b>Coverage runs through block 7 and stops there.</b> "The rest of things are not covered yet — it's not going to be in the exam." Everything in the second half of <i>this</i> lecture — GANs, autoencoders, VAEs, AutoML — is therefore outside the exam, along with anything from block 8 onward.\n\n<b>A past midterm is on Piazza</b>, posted under something like "midterm." He offered to repost it if you can't find it. That is the single most useful revision artifact available and he mentioned it in the first two minutes.\n\n<b>Calculators are allowed after all.</b> This reverses what he said in Lecture 7. His exact words: "Last time I said you shouldn't bring your calculator… you can still use the calculator." The original concern was GPT-enabled calculators on eBay, which he decided are impractical on a tiny screen, and TAs are proctoring anyway. Gemini-enabled is equally disallowed. He will not specify an approved model.\n\nAnd a detail about how the paper was built that tells you how to revise: <b>"I first designed the questions, then back-propagated through the materials."</b> Every question comes from the slides. Nothing is drawn from outside them.\n\nHe also repeated the plea not to print a thousand pages, on environmental grounds, and said the review is there precisely so you don't have to.\n\nExam insight: this card is the exam. 50 questions, two hours, block 7 and earlier, calculator permitted, past paper on Piazza.`,
  },
  {
    tag: "🏗 Review",
    title: "Train, Validation, Test: Three Jobs",
    body: `The first review topic, and he framed it as four points that keep recurring.\n\n<b>Training data</b> fits the learnable parameters. This is the only data gradient descent ever sees.\n\n<b>Validation data</b> selects. Which hyperparameters, which architecture, when to stop, which checkpoint. It is held out from fitting but it is used for decisions.\n\n<b>Test data</b> gives the final number and nothing else. Using it to tune anything is leakage, which he called cheating outright.\n\nThen a subtlety he added that is easy to miss: <b>validation overfits too.</b> "The more you use it, the more easily it's overfitting." Every decision you make against the validation set leaks a little information from it into your model. Run enough experiments and your validation score stops being an honest estimate as well — which is precisely why the test set has to stay untouched.\n\n<b>Generalization</b> is the goal behind all three. Low error on data the model has never seen. Low training error is easy and nearly meaningless on its own.\n\nHis worked example of validation doing its job: two decision trees fitted on the same photos. Candidate A has depth 2, with 10% training error and 15% validation error. Candidate B has depth 10, with 0% training error and high validation error. B looks perfect on training and has memorised it. <b>A wins</b>, because A is the one whose validation number suggests it will behave on the test set.\n\nExam insight: know what each split is for, that validation also degrades with reuse, and be able to pick the better candidate from a table of training and validation errors. The pattern "lower training error, worse validation error" always means the more complex model overfitted.`,
  },
  {
    tag: "📐 Review",
    title: "Preprocessing Statistics Travel From Training",
    body: `A small rule with a concrete worked example, and exactly the shape of a multiple-choice question.\n\nWhen you normalise, you compute the mean and standard deviation <b>on the training data only</b>. You then write those numbers down and apply them, unchanged, to validation and test. You never recompute them on the data you are evaluating.\n\nHis example. During training, the mean of a feature over the eight training samples comes out to <b>100</b>. You memorise that. Now three test samples arrive reading 120, 130 and 90. Centre them with the stored training mean and you get <b>20, 30 and −10</b>.\n\nThe mistake the question is testing for: recomputing the mean on the test set. Those three test values have their own mean of about 113.3, so recomputing would turn 130 into 16.7 rather than 30. Different number, and wrong — because the model was trained in a coordinate system defined by the training statistics, and feeding it anything else means feeding it inputs on a scale it never saw.\n\nThis is the same train-versus-inference distinction that shows up in batch normalisation's saved running statistics and in dropout's test-time scaling, both from Lecture 7. One idea, three places.\n\nIn scikit-learn terms: fit the scaler on train, call transform everywhere else, never fit again.\n\nExam insight: the statistics come from training and are applied as a fixed transformation. If a question gives you a training mean and a test value, subtract the <i>training</i> mean.`,
  },
  {
    tag: "💡 Review",
    title: "Overfitting, Underfitting, and the Two Curves",
    body: `Plot model complexity on the x-axis — tree size, number of nodes, neurons in a network — and error on the y-axis. Two curves.\n\n<b>Training error</b> falls essentially forever as you add capacity. A complex enough model can describe almost anything, including the noise.\n\n<b>Generalization error</b> — estimated by validation — falls at first and then turns back up. There is an optimum, and it is not at maximum complexity.\n\nThe region before the turn is <b>underfitting</b>: both errors are high, the model is too simple to capture even the real structure. The region after is <b>overfitting</b>: training error keeps improving while validation degrades, because the model is now fitting patterns specific to the training sample.\n\nHis practical summary, which is the exam-ready version:\n\nBoth errors high → underfitting. Add capacity, train longer.\n\nTraining low, validation high → overfitting. Get more data, add regularisation, or use a simpler model. Averaging several models also helps.\n\nAnd the critical operational point: in the real world you never use test data to find this optimum. <b>Validation is the proxy for test.</b> That is the entire reason the three-way split exists.\n\nA student asked whether "too good to be true" is the right intuition, and he agreed, with a caveat worth knowing — see the over-parameterization card. For the exam, assume the classical picture.\n\nExam insight: know which region is which from a description of the two errors, and know the corrective action for each. This has appeared in Lectures 2, 7 and now the review.`,
  },
  {
    tag: "💡 Review",
    title: "Bias and Variance",
    body: `He flagged this as review-plus-new: not covered properly in lecture, included here because old-school interviewers still ask it, and explicitly <b>not</b> something the exam goes deep on. His words: "we don't have a deep question on this at all."\n\nThe setup. You have four independent training sets drawn from the same source — D1 through D4. You fit the same model on each and predict the same new point x₀. You now have four predictions, and you can describe them two ways.\n\n<b>Variance</b> is how spread out the four predictions are. Tight cluster, low variance. Scattered, high variance.\n\n<b>Bias</b> is how far their average sits from the truth. Centred on the target, low bias. Systematically off, high bias.\n\nHis two models make the distinction concrete, with the true value at 10. Model A's four predictions cluster tightly around 6 — <b>low variance, high bias</b>. Confidently wrong, and wrong in the same way every time. Model B's predictions scatter widely but average out near 10 — <b>high variance, low bias</b>. Individually unreliable, collectively on target.\n\nThe link to overfitting. A complex model fitted to a small sample swings a lot with the particular sample you drew, so it has high variance — that is overfitting. A model too simple to represent the pattern misses in the same direction regardless of the sample, so it has high bias — that is underfitting.\n\nWhich is also why averaging models helps: it attacks the variance term directly, leaving the bias where it was.\n\nExam insight: low, if any. Know the definitions and the mapping — high variance goes with overfitting, high bias with underfitting. Treat it as interview preparation.`,
  },
  {
    tag: "⚠️ Review",
    title: "Accuracy Fails on Imbalanced Data",
    body: `The most reliably examinable idea in classical evaluation, and he reran the whole example.\n\nAn inspection dataset: <b>1,000 parts, of which 20 are defective.</b> That is 2% positives. Build a model that predicts "good" for every single part. It never finds a defect — it is completely useless for the job it exists to do.\n\nIts accuracy is <b>98%</b>.\n\nThat number is honest arithmetic and tells you nothing, because accuracy counts all correct predictions equally and 98% of the data is one class. The trivial baseline is already at 98%, so a model has to beat 98% before it has demonstrated anything at all.\n\nHis framing of when accuracy <i>is</i> fine: balanced data. If half the parts were defective, accuracy would be a perfectly reasonable metric. The failure is specific to imbalance.\n\nWhich is why you need the other metrics.\n\n<b>Precision = TP / (TP + FP).</b> Of everything you flagged, how much was really defective. His healthcare reading: a false positive means telling someone they have a disease they don't have.\n\n<b>Recall = TP / (all actual positives).</b> Of everything that really was defective, how much did you catch.\n\nAlso in scope from block 2: F1, specificity, AUC-ROC and PR-AUC, and the fact that on rare-positive problems ROC-AUC can look excellent while PR-AUC is dismal.\n\nExam insight: the 98% example is close to a guaranteed question in some form. Know the two formulas, and know that the first question to ask about any metric is what the lazy baseline scores.`,
  },
  {
    tag: "💡 Review",
    title: "kNN and k-means",
    body: `Two classical algorithms, quickly recapped.\n\n<b>k-nearest neighbours</b> is supervised and has essentially no training. You store the training data. For a new sample you compute its distance to every stored point, sort by increasing distance, take the k closest, and let them vote by majority.\n\nHis worked example, which is the examinable form. A point whose neighbours in order are purple, purple, orange, orange, orange:\n\nk = 1 → purple. k = 3 → purple, by two to one. k = 5 → <b>orange</b>, by three to two.\n\nThe label flipped as k grew, which is the whole lesson. Two design choices: the number of neighbours k, and the distance metric — Euclidean, Manhattan, or anything else. Changing the metric changes who your neighbours are, and so can change the answer.\n\nFrom Lecture 2, the part most likely to be tested: small k overfits, producing a jagged boundary that chases individual points; large k underfits, smoothing until the boundary carries no local signal.\n\n<b>k-means</b> is unsupervised — no labels at all. It is useful for finding structure you did not specify, like customer segments. The loop:\n\nInitialise k cluster centres, often at random. Assign every sample to the nearest centre. Recompute each centre as the mean of the points assigned to it. Reassign. Repeat until it settles.\n\nThe two steps alternate — assignment, then recomputation — and each pass moves the centroids.\n\nExam insight: be able to run a kNN vote for a given k from a list of neighbours, and know the four k-means steps in order. Both are flagged in the review.`,
  },
  {
    tag: "📐 Review",
    title: "Dense Layers: Shapes and Parameter Counts",
    body: `Pure arithmetic, and he said directly that these calculations exist so you understand the structure. They are also the easiest marks on the paper.\n\n<b>Weight matrix shapes.</b> A 28 × 28 image flattened is 784 features. Feed that to a hidden layer of 128 units and the weight matrix is <b>784 × 128</b> — input dimension by number of units. The output is 128 values, which becomes the next layer's input. So a second 128-unit layer has a <b>128 × 128</b> matrix, because every unit connects to every unit.\n\nThe rule: the inner dimensions have to meet. A layer mapping m inputs to n units is m × n.\n\n<b>Parameter counts.</b> Weights plus biases, and the bias is one per unit — not one per layer.\n\nHis example: two inputs, three hidden units, one output.\n\nLayer 1: 2 × 3 = 6 weights, plus 3 biases = <b>9</b>.\n\nLayer 2: 3 × 1 = 3 weights, plus 1 bias = <b>4</b>.\n\nTotal: <b>13</b> learnable parameters.\n\n"Dense" or "fully connected" means exactly that every unit connects to every unit in the next layer, which is where the multiplication comes from.\n\nExam insight: he flagged shape arithmetic as tested in past years, and it reappears in this review. Practise until it is automatic — inner dimensions meet, one bias per unit.`,
  },
  {
    tag: "💡 Review",
    title: "Why Non-Linearity Is Needed",
    body: `He called this out in Lecture 3 as something that is "always" on the midterm, and it is back in the review. Expect it.\n\nTake two layers with no activation between them. The first computes W₁x + b₁. The second takes that as input and computes W₂(W₁x + b₁) + b₂.\n\nExpand it. W₂W₁ is just another matrix — call it W. The biases collapse into another bias. So the whole thing is Wx + b: <b>a single linear layer</b>.\n\nAdd a third, a tenth, a hundredth. Each one multiplies another matrix into the product and the product is still a matrix. The depth bought you nothing at all — the network has exactly the expressive power of one layer, no matter how many you stack.\n\nThe fix is to put a non-linear function between them. ReLU is the standard choice: max(0, z), which passes positives through unchanged and zeroes negatives. Once that sits in the middle, the product can no longer be folded up, and the network can represent things a line cannot.\n\nThis is the single most reliably predicted question in the course — he has now flagged it in Lecture 3, mentioned it in Lecture 7's recap, and put it in the review.\n\nExam insight: "stacked linear layers collapse into one matrix, so depth buys nothing without a non-linearity." Have that sentence ready. Being able to write W₂W₁ = W is the proof.`,
  },
  {
    tag: "🧮 Review",
    title: "A Forward Pass and a Loss, by Hand",
    body: `He walked the arithmetic, and with calculators now permitted this is exactly the kind of question that can appear.\n\nThe setup: a unit with two inputs. Input values 1 and 2, weights 1 and 0.5, bias −0.5.\n\n<b>Weighted sum:</b> z₁ = (1)(1) + (2)(0.5) + (−0.5) = 1 + 1 − 0.5 = <b>1.5</b>\n\n<b>Activation:</b> ReLU(1.5) = <b>1.5</b>, since ReLU passes positives through untouched and only zeroes negatives.\n\nCarry that forward through the remaining weights and the network predicts ŷ = 1, while the target is y = 2.\n\n<b>L2 loss:</b> (ŷ − y)² = (1 − 2)² = <b>1</b>\n\nThat is the whole forward pass: weighted sum, add bias, apply the non-linearity, repeat per layer, then compare the final output with the label through a loss function.\n\nTwo things worth noting about the loss. L2 — squared error — is <b>differentiable</b>, which is what makes backpropagation possible at all. And he contrasted it with a step loss that reports 0 or 1: a step function's derivative at the jump is undefined, so you cannot run the chain rule through it. That is why we use smooth losses even when a step would describe what we want more directly.\n\nExam insight: be able to compute a weighted sum with a bias, apply ReLU, and square a difference. Also know <i>why</i> the loss must be differentiable — that is the conceptual half of the same question.`,
  },
  {
    tag: "📐 Review",
    title: "Convolution: Output Size and Parameter Count",
    body: `Two formulas he has now flagged as tested in multiple lectures.\n\n<b>Output size.</b> With input size N, padding P, kernel size K and stride S:\n\noutput = (N + 2P − K) / S + 1\n\nHis one-dimensional worked example: N = 9, P = 1, K = 3, S = 2.\n\n(9 + 2 − 3) / 2 + 1 = 8 / 2 + 1 = <b>5</b>\n\nPadding adds P zeros to <i>each</i> side, which is where the 2P comes from. Stride is how far the filter jumps between positions. And from Lecture 4: if this does not come out to a whole number, the filter does not tile the input and the configuration is invalid.\n\n<b>Parameter count.</b> A filter spans the full depth of its input, so a 3 × 3 filter on a 3-channel input is a 3 × 3 × 3 cube:\n\n3 × 3 × 3 = 27 weights, plus 1 bias = <b>28 parameters per filter</b>\n\nTwo such filters: <b>56</b>. In general, F² × C × K + K for F×F filters on C channels with K filters — the trailing K is one bias per filter.\n\nAnd the reason convolution works at all, which he restated: images have spatial structure, so adjacent pixels are related, and a filter that looks at a local patch and reuses the same weights everywhere exploits that.\n\nExam insight: both formulas, and the habit of writing down N, P, K, S and C before substituting. He has flagged output-size calculation as "something we usually test" in two separate lectures.`,
  },
  {
    tag: "💡 Review",
    title: "Pooling: No Parameters, and Not Linear",
    body: `Short card, three facts, all of them examinable.\n\n<b>Pooling has no learnable parameters.</b> It is a fixed operation — take the maximum, or the average, over each window. There is nothing to train. This separates it cleanly from convolution, where the filter weights are exactly what you learn, and he has now flagged it in both Lecture 4 and the review.\n\n<b>Pooling is invariant to shifts within the window.</b> Whatever order the values appear in, the maximum is the same value. That is what buys tolerance to small translations — the same order-invariance that turned out to matter for graph aggregation in Lecture 6.\n\n<b>Max pooling is not linear.</b> This one is new in the review and is the kind of detail that makes a good distractor. A linear operation satisfies f(u + v) = f(u) + f(v). Max does not:\n\nTake u = [1, 5] and v = [4, 2]. max(u) + max(v) = 5 + 4 = <b>9</b>. But max(u + v) = max([5, 7]) = <b>7</b>.\n\nSeven is not nine, so max is not linear — which means max pooling adds a non-linearity to the network on top of the activation functions. Average pooling, by contrast, <i>is</i> linear.\n\nExam insight: "no learnable parameters" is the headline. "Max pooling is non-linear" is the subtler point he added here, and a plausible question.`,
  },
  {
    tag: "💡 Review",
    title: "Backpropagation and the Two Gradient Failures",
    body: `The backward half, recapped at concept level. He skipped the detailed worked examples and said directly that he does not think the complex chain-rule calculation will be on the exam — consistent with Lecture 3, where he said derivatives would not be tested by hand.\n\nThe process: run the forward pass to get a prediction, compare it with the label through a loss, then propagate backward using the chain rule, computing local derivatives at each node and multiplying them along the way. Update the weights with the resulting gradients. Repeat.\n\nTwo failure modes come out of the fact that the chain rule <i>multiplies</i>.\n\n<b>Vanishing gradients.</b> If the factors are consistently below 1, the product shrinks toward zero over a long chain, and the early layers receive essentially no signal. His canonical cause: sigmoid, whose derivative is near zero outside roughly −5 to 5, so a saturated unit contributes almost nothing. Fixes: ReLU instead of sigmoid, batch normalisation, residual connections.\n\n<b>Exploding gradients.</b> Factors consistently above 1, and the product grows without bound, producing wild updates. The fix is gradient clipping — rescale the gradient when its norm exceeds a threshold, which preserves the direction and caps the magnitude.\n\nHe mentioned a simple clipping calculation as a possible question shape: given the formula and a gradient, apply it.\n\nExam insight: know the mechanism (a product of many factors), which failure each direction produces, and the standard fix for each. Clipping keeps direction and limits size — that phrasing has now appeared three times.`,
  },
  {
    tag: "🔬 Not on the Exam",
    title: "Over-Parameterization: Where the Classical Story Breaks",
    body: `A student asked whether "too good to be true" is the right way to think about overfitting. He agreed, and then added a caveat he was careful to put outside the exam.\n\nThe classical picture — more capacity eventually hurts generalization — comes from the pre-large-model era, when you had thousands of samples and a model powerful enough to memorise their noise. In that regime overfitting is real, common, and exactly as described.\n\nModern large models break it. They are massively <b>over-parameterized</b>: far more learnable parameters than the degrees of freedom technically needed to fit the data. By the classical account they should overfit catastrophically. Instead you keep training, keep scaling, and performance keeps improving.\n\nHis verdict: this is an open research question. "We don't exactly know what's going on." He pointed at the term over-parameterization as a reading direction and connected it forward to scaling laws, which come later in the course.\n\nHis instruction for the exam could not be clearer: <b>assume the classical overfitting and underfitting picture.</b> That is what the questions test, and that is what the decision trees and small networks in the examples illustrate. The large-model paradox is interesting and it is not being examined.\n\nIt is worth knowing anyway, because it is a genuinely strange fact about the field and a good thing to be able to discuss.\n\nExam insight: none directly — he ruled it out. But do not let it confuse you into second-guessing a straightforward overfitting question.`,
  },
  {
    tag: "🏗 Foundation",
    title: "From Classifying to Generating",
    body: `The new material starts here, and the framing is a reversal.\n\nEverything in the first seven blocks took an input and produced a label. Image in, "cat" out. The question for this block is the other direction: can a model <b>produce</b> a new sample rather than describe an existing one?\n\nHis intuition for what makes this possible. Suppose your training set is mostly red flowers, some yellow, a few white. That collection implicitly describes a distribution — red is common, white is rare. A model that has learned that distribution can draw from it, and what it draws will mostly be red flowers. Not copies of training images: new samples from the same distribution.\n\nHe connected it to what the course has already covered. A language model predicting the next token is doing the same thing — sampling from a learned distribution over what comes next, weighted by how often things actually follow one another. Generation in both cases means learning a distribution and then drawing from it.\n\nA terminology note worth having. "Generative AI" today means large language models. Five years ago the phrase meant exactly the models in this lecture — GANs and VAEs. He pointed out that LLMs are substantially motivated by this older line of work.\n\nAnd the structural question that organises everything that follows: you want a generator that turns an input vector <b>z</b> into an image, such that different z values give different images. Where does z come from, what does it mean, and can you control it? Each of the three architectures here answers that differently.\n\nExam insight: not examinable — this is block 8. But the classify-versus-generate framing is the organising idea for the rest of the lecture.`,
  },
  {
    tag: "💡 Concept",
    title: "A Gaussian Recap, and Why It Matters Here",
    body: `He paused to recap the normal distribution before using it, because it does real work in both of the models that follow.\n\nA Gaussian is the bell curve, and <b>two numbers define it completely</b>:\n\nThe <b>mean μ</b> sets where the centre sits. The <b>standard deviation σ</b> sets how spread out it is — small σ gives a narrow spike, large σ a wide flat hump.\n\nThe <b>standard normal</b> is the special case with μ = 0 and σ = 1, and it is the one these models reach for.\n\nTwo numbers is the point. If you know a distribution is Gaussian, you know everything about it from μ and σ, which means you can <b>sample from it</b> — draw a random value that genuinely belongs to that distribution — without having seen any of its data.\n\nThat capability is what both architectures need. A GAN feeds Gaussian noise into its generator as the raw material for an image. A VAE forces its latent space to be Gaussian precisely so that sampling from it produces something the decoder can use.\n\nCompare that with a distribution you cannot describe. If a space is just "wherever the training data happened to land," you have no way to draw a new point and no way to know whether a point you picked belongs. That turns out to be the exact failure of the plain autoencoder.\n\nHe also noted the practical reason Gaussians get used rather than some other family: they have mathematical properties that make the loss easy to compute. Exponential or other distributions would work in principle.\n\nExam insight: not examinable. But "two parameters, therefore samplable" is the idea that makes the VAE make sense.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The GAN: Two Networks, One Game",
    body: `The first generative architecture, and he noted it dominated the field roughly ten years ago, before GPT existed. It has two parts.\n\nThe <b>generator</b> takes a vector of random Gaussian noise and produces an image.\n\nThe <b>discriminator</b> takes an image — sometimes a real one from the training set, sometimes one the generator made — and outputs a score for how likely it is to be real.\n\nThey have opposite objectives. The discriminator wants to tell them apart. The generator wants to fool it.\n\nHis analogy was counterfeiting. You make a fake note and show it to a detective, who says it isn't even the right colour. So you fix the colour. Now the detective asks where the watermark is. You add a watermark. Each round, the forgery improves because the detective keeps pointing at what is still wrong — and the detective keeps improving because it keeps seeing both real notes and better fakes.\n\nThe reason this works is the argument to remember: <b>if the generator gets good enough that the discriminator cannot tell the difference, the generator has learned the real distribution of the data.</b> Not memorised the training images — learned the distribution they came from. That is exactly the goal, and the discriminator is the mechanism for measuring progress toward it without anyone having to specify what a realistic image looks like.\n\nHe pointed out why this indirection is necessary. Directly specifying "generate a realistic flower" is a high-dimensional problem nobody can write down. Training a second network to critique the attempts sidesteps having to write it down at all.\n\nAnd the thing to remember about what you end up with: <b>after training, you throw the discriminator away.</b> It was scaffolding. The generator alone, fed random noise, is the finished product.\n\nExam insight: not examinable. Know the two components, the opposing objectives, and that the discriminator is discarded at the end.`,
  },
  {
    tag: "📐 Concept",
    title: "Minimax, and Why Training Has to Alternate",
    body: `The GAN's two networks share one loss function and pull it in opposite directions, which is what the word adversarial means and what makes the training unusual.\n\nRead the discriminator's score D(x) as "probability this is real."\n\nOn a <b>real</b> image you want D near 1. On a <b>generated</b> image the discriminator wants D near 0 — he used 0.02 as the example of it confidently calling a fake — while the generator wants that same number as high as possible.\n\nSo it is a <b>minimax</b> problem: the discriminator maximises its ability to separate the two sources, the generator minimises it. One objective, two parties, opposite directions.\n\nYou cannot run gradient descent on both at once, because a step that helps one hurts the other by construction. The solution is <b>alternating training</b>:\n\n<b>Step 1 — update the discriminator.</b> Freeze the generator. You know the true labels here (you know which images you generated), so this is ordinary supervised learning. Ascend the gradient.\n\n<b>Step 2 — update the generator.</b> Freeze the discriminator. Generate fresh images and push toward higher discriminator scores. Descend.\n\nRepeat. D step, G step, D step, G step.\n\nHe made the point that alternating training is a general technique rather than a GAN quirk: whenever one loss governs several network components with conflicting goals, you freeze some and train the others, then swap. It reappears in this same lecture for domain-adversarial transfer.\n\nWhat convergence looks like: the generated distribution comes to overlap the real data distribution, and D(x) <b>flattens out at around 0.5</b> everywhere. The discriminator is reduced to guessing, which means it can no longer find a difference.\n\nExam insight: not examinable. Know why alternating is necessary, which network is frozen in each step, and that D ≈ 0.5 is the signature of a converged GAN.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "What GANs Get Wrong",
    body: `Two failures, and he was blunt that they are why "nobody uses this anymore."\n\n<b>Blurry output.</b> Look closely at GAN samples from that era and they are soft and smeared rather than sharp. He described this as inherent to the design rather than a tuning problem. The images read as approximately right and do not hold up to inspection.\n\n<b>Mode collapse</b>, which he called lack of diversity and which is the more interesting failure. The generator's job is to fool the discriminator. If it discovers one output that reliably works, there is nothing in the objective pushing it to produce anything else. So it stops exploring and emits near-identical samples — his example being a generator that returns red roses and only red roses, when the real data had plenty of variety. The generator is winning the game it was set and failing the task you wanted.\n\nHe connected this forward, and the connection is worth keeping. Lecture 7's election persona study found that language models simulate populations that are far more polarised than real ones, with the middle compressed away. That is mode collapse in a different medium: the model converges on a few high-probability outputs and loses the spread of the real distribution. He noted current large models still show it.\n\n<b>Conditional GANs</b> partly address a different limitation — control. A vanilla GAN takes random noise and gives you whatever it gives you; you cannot ask for a yellow flower. A conditional GAN takes an additional input specifying what you want, and generates something matching it while still varying between runs. Popular around nine or ten years ago, used for tasks like filling in cropped regions of an image.\n\nExam insight: not examinable. Blurriness and mode collapse are the two to name, and mode collapse is the one that still matters.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The Autoencoder",
    body: `A completely different route to generation, with no adversary anywhere.\n\nThe architecture is an hourglass. An <b>encoder</b> compresses the input down to a small vector — the <b>latent representation z</b>. A <b>decoder</b> expands that vector back out to something the size of the original. The loss is simply the distance between what went in and what came out, usually squared error over the pixels.\n\nThat is the whole thing, and two properties follow.\n\nIt is <b>unsupervised</b>. The loss compares the input with the reconstruction, so no labels exist anywhere. You never need to know whether an image is a cat or a dog — only that it should come back out the way it went in.\n\nIt forces compression to mean something. The bottleneck is far smaller than the input, so most of the information cannot fit through. If the reconstruction still works, whatever got discarded was not needed. His analogy: to redraw a cat from memory you need its colours, its shape, the features that make it a cat — not every pixel. A representation small enough to be a summary but sufficient to rebuild from is, by definition, a good representation.\n\n"Compression is learning" again, now as an architecture.\n\nThe evidence that the latent space is meaningful: plot MNIST digits in a two-dimensional latent space and they cluster by digit, even though the model was never told the labels. Zeros land near zeros. That structure emerged purely from the pressure to reconstruct.\n\nAnd the reason autoencoders are useful beyond generation — you can keep either half.\n\n<b>Drop the decoder</b> and the encoder is a trained feature extractor. Freeze it, attach a classifier, fine-tune on a small labelled set. He pointed out this is the shape of self-supervised pretraining in large models: learn representations without labels, then add a supervised head.\n\n<b>Drop the encoder</b> and the decoder is a generator. Hand it a latent vector and it produces an image.\n\nExam insight: not examinable. Know the encoder–bottleneck–decoder structure, that the loss is reconstruction only and therefore unsupervised, and what dropping each half gives you.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "The Latent-Space Dilemma",
    body: `Dropping the encoder gives you a generator. Using it exposes the flaw in the whole design, and this is the cleanest piece of reasoning in the lecture.\n\nThe decoder maps latent vectors to images. To generate, pick a z and decode it. The question is which z.\n\n<b>Pick a z that a training image mapped to</b> and you get a good image — because the decoder was trained on exactly that point. You also get an image you already had. No diversity.\n\n<b>Pick a z somewhere else</b> and you get something that is not a digit at all. His example: sample from a gap in the latent space and the output is unrecognisable — maybe a seven, maybe a nine, mostly neither.\n\nSo: sample where the data is and there is no novelty; sample where it isn't and there is no realism. There is no good option, and that is the dilemma.\n\nThe cause is that <b>nothing ever constrained the latent space.</b> The training objective was reconstruction and only reconstruction. The encoder was free to scatter training points anywhere convenient, so the occupied regions form some arbitrary shape with gaps between them. The decoder learned what to do at the occupied points and nothing about the rest.\n\nAnd critically, you cannot even tell which is which. The latent distribution has no description — you cannot say whether a candidate z is inside it, because "inside it" was never defined.\n\nCompare that with a Gaussian. Two parameters, and you can sample from it correctly forever.\n\nThat comparison is the whole idea behind the fix: if the problem is that the latent space has no describable shape, then <b>make</b> it have one.\n\nExam insight: not examinable. But the dilemma is the reason the VAE exists, and stating it precisely is the best way to show you understand the VAE.`,
  },
  {
    tag: "🏗 Foundation",
    title: "The VAE: Constrain the Latent Space",
    body: `The fix is one additional term in the loss, and everything else stays the same.\n\nA variational autoencoder keeps the encoder, the bottleneck and the decoder exactly as they were. What changes is that the latent space is no longer allowed to be an arbitrary shape. It is <b>forced toward a known distribution</b> — in practice a standard Gaussian, μ = 0 and σ = 1.\n\nSo the loss has <b>two terms</b>:\n\n<b>Reconstruction loss</b> — the original objective. The output should match the input.\n\n<b>Latent loss</b> — a divergence between the distribution the encoder actually produces and the Gaussian prior you want. This is the KL divergence, and he was explicit that the mathematics is beyond the course: the philosophy is simply "measure how far these two distributions are apart, and push that number down."\n\nThe two terms pull against each other in a familiar way. Reconstruction wants the encoder to put each input wherever is most convenient; the latent term wants everything arranged into a tidy Gaussian. He noted it is not technically regularisation but the philosophy is identical — a second term constraining what the first would otherwise do freely.\n\nThe payoff is exactly the dilemma, resolved. Train the VAE, discard the encoder, and now you <b>can</b> sample. Draw z from a standard Gaussian — which you know how to do, because a Gaussian is two numbers — and decode it. The latent space has no unexplained gaps, so the sample lands somewhere the decoder understands. The result is realistic <i>and</i> different each time.\n\nHe also gave the cleanest one-line distinction: <b>an autoencoder is deterministic, a VAE is probabilistic.</b> In the autoencoder, z is a fixed vector for a given input. In the VAE, the encoder outputs a μ and a σ, and z is drawn from that distribution.\n\nGaussian specifically because it makes the loss tractable; other distributions would work in principle.\n\nExam insight: not examinable. The two-term loss is the thing to know — reconstruction plus a latent-distribution penalty — along with what the second term buys you.`,
  },
  {
    tag: "💡 Concept",
    title: "Multi-Task Learning",
    body: `Back to the material deferred from Lecture 7, and a different use of a shared representation.\n\nNormally one network does one job. Multi-task learning trains a single shared body with several heads, so one representation feeds several predictions at once. His example: the same images, with one head producing classification labels and another producing captions.\n\nThe reason it can work: if two tasks genuinely need the same underlying features, learning them together gives the shared layers more signal than either task alone would.\n\nHis strongest example is <b>multilingual speech recognition</b>. Human languages share a great deal — the acoustic structure, the way speech unfolds in time — even though the outputs differ entirely. Train one model on many languages and the shared layers see every hour of audio from every language. The result he showed: for a fixed training budget, the error rate on a given language is <b>lower</b> when co-trained with others than when trained alone.\n\nThat is the counterintuitive bit. Adding other languages improves the one you care about, because the shared representation gets better.\n\nHe tied it back to the course's recurring theme. Deep learning is representation learning — the point of every architecture so far has been extracting good features from complicated data. If the representation is the valuable object, then anything that improves it helps every task built on it. Multi-task learning is just the version of that where you train the tasks simultaneously rather than in sequence, which is what transfer learning does.\n\nExam insight: not examinable. Know the shared-body, multiple-heads structure and the multilingual speech example.`,
  },
  {
    tag: "💡 Concept",
    title: "Domain-Adversarial Transfer",
    body: `A neat construction that uses the GAN idea for something other than generation, and he presented it as evidence that adversarial training is a general tool.\n\nThe problem. You have labelled source data — handwritten digits on a black background. You want to work on target data — the same digits, but with coloured backgrounds. Fundamentally the same task, since a digit is a digit, but the inputs look different and a model trained on one will stumble on the other.\n\nThe architecture has three parts. A <b>shared feature extractor</b> processes any input, from either domain. A <b>label predictor</b> reads its features and predicts the digit, 0 through 9. A <b>domain classifier</b> reads the same features and predicts which domain the image came from.\n\nNow the trick, which is in the objectives. You want the label predictor to be <b>accurate</b> and the domain classifier to be <b>confused</b>.\n\nThink about what that combination implies. If the features still let you recover the digit but no longer let you tell black backgrounds from coloured ones, then the feature extractor has learned to represent the digit and to discard the background. Which is exactly the thing that transfers — the part that is common to both domains — with the domain-specific part thrown away.\n\nSo the domain classifier plays the discriminator's role: it is a measuring instrument for something you cannot specify directly. You cannot write down "ignore the background," but you can train a network to detect the background and then train against it.\n\nSame alternating training as a GAN, for the same reason — the goals conflict, so you freeze one part and train another, then swap.\n\nExam insight: not examinable. The idea worth keeping is that an adversary is a general way to enforce "the representation must not contain X."`,
  },
  {
    tag: "🏗 Foundation",
    title: "AutoML: Grid Search and Random Search",
    body: `The last topic, carried over from Lecture 7's hyperparameter section.\n\nTwo things have to be chosen for any machine learning pipeline. The <b>algorithm</b> — decision tree, kNN, random forest, a neural network — and that algorithm's <b>hyperparameters</b>, which are the settings fixed before training: tree depth, number of neighbours, learning rate, dropout rate, architecture.\n\nIn practice people automate the second only. His reason is worth understanding: comparing hyperparameters <i>within</i> one algorithm is a search over a smooth space, where a tree of depth 5 and a tree of depth 6 are meaningfully adjacent. Comparing <i>across</i> algorithms is not — "decision tree with depth 5" and "kNN with 10 neighbours" are not near each other in any useful sense, so the search space is not smooth and the comparison is much harder to automate.\n\nTwo basic strategies, both evaluated on validation data.\n\n<b>Grid search.</b> Pick values for each hyperparameter and try every combination on a regular lattice. Complete coverage of the space you defined.\n\n<b>Random search.</b> Sample combinations at random instead.\n\nThe trade-off is specific. Grid search covers everything, but if one hyperparameter matters a great deal and another barely matters, the grid spends equal effort on both — wasting most of its compute varying something irrelevant. Random search has no such blind spot, because every sample varies everything at once, but it gives no coverage guarantee.\n\nBoth share two properties. They are trivial to set up and appropriate when you have no prior knowledge. And they <b>parallelise perfectly</b>, because the configurations are independent — nothing has to finish before another starts.\n\nAnd they share one serious weakness, which he emphasised: <b>neither learns anything.</b> Each configuration is evaluated in isolation and the result informs nothing about what to try next. It is pure evaluation with no accumulation. Combined with a search space of 2^k for k binary hyperparameters — and a deep network has perhaps a hundred — exhaustive search is hopeless.\n\nHis honest practical note: if you are not at a frontier lab, grid or random search through scikit-learn is genuinely sufficient for classical models. Smarter methods come after block 9.\n\nExam insight: not examinable — he deferred AutoML explicitly. The grid-versus-random trade-off is standard interview material.`,
  },
  {
    tag: "📋 Admin",
    title: "What's Coming, and Course Notes",
    body: `Everything administrative from this lecture.\n\n<b>Next week, October 26</b>, is a busy session: the <b>rest of the midterm review</b>, plus two guest speakers. One is a professor and collaborator from the autonomous-driving and transportation world, who may also discuss a recently funded federal project using agentic AI to route autonomous vehicles for evacuation during wildfires. The other is a startup working on agent security. He said he is compressing their talk times to fit the review in.\n\nThe review resumes from <b>stochastic gradient descent</b> — that is where he stopped. So expect the second half to cover optimization, learning rates, regularisation, dropout and transfer learning, which is Lecture 7's material.\n\n<b>After the midterm</b>, block 9: attention, mixture of experts, decoding — the large-model content. He also wants to return to AutoML to cover the methods that fix grid and random search.\n\nOn quizzes: there was no quiz, and he acknowledged the running joke about students asking at every break. Asked whether a quiz would be on Brightspace or on paper, he said Gradescope — then noticed he had effectively revealed something and mused about bringing paper next time. He called the uncertainty deliberate, "a game that may never be triggered," and noted a quiz right before the midterm would be brutal.\n\nAlso mentioned: he is teaching a new course next semester, numbered 6.99, on <b>auditing and assurance for foundation models and agents</b> — seminar and project driven, papers and no exams, nominally for PhD students but usually open to masters and undergraduates who ask. He suggested a financial background is especially useful there, since firms are trying to work out how to price agent risk.\n\nOne incidental moment worth noting given the subject matter: he briefly displayed a password on screen while setting up an anonymous feedback tool, caught it, and used it as an unplanned illustration of his own research point — that social engineering and human error are the weakest link in any security design, whatever the algorithm.`,
  },
];

const VOCAB = [
  { term: "Training data", def: "The only data gradient descent sees. Fits the learnable parameters." },
  { term: "Validation data", def: "Held out from fitting, used to select — hyperparameters, architecture, when to stop, which checkpoint." },
  { term: "Test data", def: "Produces the final number and nothing else. Tuning against it is leakage, which he called cheating." },
  { term: "Validation overfitting", def: "Every decision made against the validation set leaks a little of it into the model. Reuse it enough and its score stops being honest." },
  { term: "Generalization", def: "Low error on data the model has never seen. The actual goal; low training error alone means almost nothing." },
  { term: "Preprocessing statistics", def: "The mean and standard deviation computed on TRAINING data, stored, and applied unchanged to validation and test. Never recomputed." },
  { term: "Overfitting", def: "Training error keeps falling while validation error climbs. The model is fitting patterns specific to the training sample." },
  { term: "Underfitting", def: "Both training and validation error stay high. The model is too simple to capture even the real structure." },
  { term: "Model complexity", def: "Tree size, node count, neurons per layer. The x-axis of the overfitting curve; training error falls with it forever, generalization error does not." },
  { term: "Bias", def: "How far a model's average prediction sits from the truth. High bias goes with underfitting — wrong the same way every time." },
  { term: "Variance", def: "How much predictions scatter across independent training sets. High variance goes with overfitting — unreliable sample to sample." },
  { term: "Accuracy", def: "Fraction of predictions correct. Reasonable on balanced data, actively misleading when one class dominates." },
  { term: "The imbalance trap", def: "1,000 parts with 20 defective: predicting 'good' every time scores 98% and finds nothing. The lazy baseline is already at 98%." },
  { term: "Precision", def: "TP / (TP + FP). Of everything you flagged, how much really was positive." },
  { term: "Recall", def: "TP / (all actual positives). Of everything that really was positive, how much you caught." },
  { term: "k-nearest neighbours", def: "Store the training data; for a new point take the k closest and let them vote. Small k overfits, large k underfits." },
  { term: "Distance metric", def: "Euclidean, Manhattan or another. Changing it changes who your neighbours are, and so can change the prediction." },
  { term: "k-means", def: "Unsupervised clustering: initialise k centres, assign each point to the nearest, recompute centres as means, reassign, repeat." },
  { term: "Dense / fully connected", def: "Every unit connects to every unit in the next layer. A layer from m inputs to n units has an m × n weight matrix." },
  { term: "Parameter count (dense)", def: "Weights plus one bias per unit. Two inputs to three units is 2×3 + 3 = 9; three units to one output is 3 + 1 = 4." },
  { term: "Linear collapse", def: "Stacked linear layers multiply into one matrix: W₂(W₁x) = Wx. Depth buys nothing without a non-linearity between layers." },
  { term: "ReLU", def: "max(0, z). Passes positives through unchanged, zeroes negatives. The standard non-linearity." },
  { term: "L2 loss", def: "Squared error, (ŷ − y)². Differentiable everywhere, which is what lets backpropagation run through it." },
  { term: "Differentiable loss", def: "A requirement, not a preference. A step loss reporting 0 or 1 has an undefined derivative at the jump, so the chain rule cannot pass through." },
  { term: "Conv output size", def: "(N + 2P − K)/S + 1. With N=9, P=1, K=3, S=2 the output is 5. A non-integer means the filter does not tile the input." },
  { term: "Conv parameter count", def: "A filter spans the full input depth: 3×3×3 = 27 weights + 1 bias = 28 per filter. Two filters, 56." },
  { term: "Padding (P)", def: "Zeros added to each side of the input, which is why the formula carries 2P rather than P." },
  { term: "Stride (S)", def: "How far the filter jumps between positions. Larger stride, smaller output." },
  { term: "Pooling", def: "Max or average over a window. NO learnable parameters, and invariant to shifts inside the window." },
  { term: "Max pooling is non-linear", def: "max(u) + max(v) ≠ max(u + v). With u=[1,5] and v=[4,2]: 5+4 = 9 but max([5,7]) = 7. Average pooling is linear; max is not." },
  { term: "Vanishing gradient", def: "The chain rule's product of many sub-1 factors shrinks to nothing, starving early layers. Sigmoid saturating outside ±5 is the classic cause." },
  { term: "Exploding gradient", def: "The same product with factors above 1 grows without bound. Fixed by gradient clipping, which keeps the direction and caps the size." },
  { term: "Over-parameterization", def: "Far more parameters than the degrees of freedom needed to fit the data. Large models do this and generalize anyway — an open question, and NOT on the exam." },
  { term: "Generative model", def: "A model that produces new samples from a learned distribution rather than assigning labels to existing ones." },
  { term: "Gaussian / normal distribution", def: "Defined completely by two numbers, mean μ and standard deviation σ. The standard normal is μ=0, σ=1." },
  { term: "Latent variable z", def: "The compressed vector a generative model decodes into an output. Different z, different sample." },
  { term: "GAN", def: "Generative adversarial network. A generator turning noise into images, and a discriminator scoring real against fake." },
  { term: "Generator", def: "Takes random Gaussian noise and produces a sample. The only part you keep after training." },
  { term: "Discriminator", def: "Scores how likely an image is to be real. Scaffolding — discarded once training finishes." },
  { term: "Minimax objective", def: "One loss, two parties pulling opposite ways. The discriminator maximises separability; the generator minimises it." },
  { term: "Alternating training", def: "Freeze the generator and update the discriminator, then freeze the discriminator and update the generator. Repeat." },
  { term: "D ≈ 0.5", def: "The signature of a converged GAN: the discriminator is guessing, so the generated distribution has overlapped the real one." },
  { term: "Mode collapse", def: "The generator finds one output that fools the discriminator and stops varying. Real distribution had variety; output does not." },
  { term: "Conditional GAN", def: "A GAN given extra input specifying what to generate, so you get controllable output rather than whatever noise produces." },
  { term: "Autoencoder", def: "Encoder compresses to a latent vector, decoder reconstructs. Loss is reconstruction only, so it needs no labels." },
  { term: "Encoder", def: "The compressing half. Drop the decoder and it is a pretrained feature extractor for a downstream classifier." },
  { term: "Decoder", def: "The expanding half. Drop the encoder and it is a generator you can feed latent vectors to." },
  { term: "Bottleneck", def: "The narrow middle layer. Most information cannot fit through, so what survives is what mattered." },
  { term: "Latent-space dilemma", def: "Sample where training data landed and there is no diversity; sample elsewhere and there is no realism. The plain autoencoder's flaw." },
  { term: "VAE", def: "Variational autoencoder. Same architecture, plus a loss term forcing the latent space toward a Gaussian so you can sample from it." },
  { term: "Latent loss / KL divergence", def: "The VAE's second term, measuring how far the encoder's latent distribution sits from the Gaussian prior." },
  { term: "Deterministic vs probabilistic", def: "An autoencoder maps an input to one fixed z. A VAE's encoder outputs μ and σ, and z is drawn from that distribution." },
  { term: "Multi-task learning", def: "One shared body, several task heads. Multilingual speech recognition beats single-language training at the same data budget." },
  { term: "Domain-adversarial transfer", def: "Shared feature extractor, accurate label predictor, confused domain classifier — which proves the features carry the digit and not the background." },
  { term: "Source vs target domain", def: "What you pretrained on versus what you are adapting to. Their similarity decides how much transfers." },
  { term: "AutoML", def: "Automating the choice of algorithm and hyperparameters. In practice hyperparameters only, since comparing across algorithms is not a smooth search." },
  { term: "Grid search", def: "Every combination on a regular lattice. Complete coverage, but spends equal effort on hyperparameters that do not matter." },
  { term: "Random search", def: "Sampled combinations. No wasted effort on an unimportant axis, but no coverage guarantee either." },
  { term: "No learning between trials", def: "Grid and random search evaluate each configuration in isolation — nothing carries forward. Perfectly parallel, and entirely memoryless." },
];

const EXAM_TIPS = [
  { tip: "CALCULATORS ARE ALLOWED — he reversed Lecture 7", detail: "His exact words: \"Last time I said you shouldn't bring your calculator… you can still use the calculator.\" The original worry was GPT-enabled calculators on eBay; he decided they're impractical on a tiny screen and TAs are proctoring. Gemini-enabled is equally disallowed, and he won't name an approved model. Bring one.", priority: "HIGH" },
  { tip: "50 multiple-choice questions, two hours", detail: "Difficulty on par with the last few years. At 50 questions in 120 minutes that's about 2.4 minutes each — comfortable, but it means the arithmetic questions are meant to be done, not guessed. He also noted that if you're stuck you still have a 25% shot.", priority: "HIGH" },
  { tip: "A PAST MIDTERM IS ON PIAZZA — go find it", detail: "He mentioned it in the first two minutes, posted under something like \"midterm\", and offered to repost if you can't find it. He said the difficulty is comparable. This is the single highest-value revision artifact available and it's easy to miss in the transcript.", priority: "HIGH" },
  { tip: "Coverage stops at block 7 — the whole second half of this lecture is OUT", detail: "\"That's all covered through block seven — the rest of things are not covered yet, it's not going to be in the exam.\" So GANs, autoencoders, VAEs, multi-task learning, domain-adversarial transfer and AutoML are all outside scope. Learn them for the project and for interviews, not for Nov 2.", priority: "HIGH" },
  { tip: "Every question was back-propagated from the slides", detail: "He described his process: \"I first designed the questions, then back-propagated through the materials.\" Nothing comes from outside the deck. Revise the slides, not supplementary reading — and the review slides are already posted on Brightspace along with the recording.", priority: "HIGH" },
  { tip: "Preprocessing statistics come from TRAINING and are applied unchanged", detail: "His worked example: training mean is 100, so test values 120, 130, 90 become 20, 30, −10. The trap is recomputing the mean on the test set — those three have their own mean of 113.3, which would turn 130 into 16.7 instead of 30. Same idea as batch norm's saved statistics and dropout's test-time scaling.", priority: "HIGH" },
  { tip: "Pick the model by VALIDATION error, not training error", detail: "His two decision trees: candidate A at depth 2 has 10% training and 15% validation error; candidate B at depth 10 has 0% training and high validation error. A wins. The pattern \"lower training error but worse validation error\" always means the more complex model overfitted.", priority: "HIGH" },
  { tip: "The 98% accuracy trap", detail: "1,000 parts, 20 defective. Predict \"good\" for everything and you score 98% while catching zero defects. Accuracy is fine on balanced data and misleading under imbalance. Know precision = TP/(TP+FP) and recall = TP/(all actual positives), and always ask what the lazy baseline scores.", priority: "HIGH" },
  { tip: "Why non-linearity is needed — he has now flagged this three times", detail: "Stacked linear layers collapse: W₂(W₁x + b₁) + b₂ = Wx + b, one matrix, one layer's worth of power however deep you go. He called this \"always\" on the midterm back in Lecture 3, recapped it in Lecture 7, and put it in the review. Being able to write W₂W₁ = W is the proof.", priority: "HIGH" },
  { tip: "Dense shapes and parameter counts — the easiest marks available", detail: "784 features into 128 units is a 784 × 128 matrix; 128 into 128 is 128 × 128. Inner dimensions meet. Parameters are weights plus ONE BIAS PER UNIT: his 2 → 3 → 1 network is (2×3 + 3) + (3×1 + 1) = 9 + 4 = 13. He said these are tested in past years.", priority: "HIGH" },
  { tip: "Convolution output size and parameter count", detail: "Output = (N + 2P − K)/S + 1. His example: N=9, P=1, K=3, S=2 gives (9+2−3)/2 + 1 = 5. Padding adds P to EACH side, hence 2P. Parameters: a filter spans full input depth, so 3×3×3 = 27 weights + 1 bias = 28 per filter, 56 for two. He has flagged output size as \"something we usually test\" twice.", priority: "HIGH" },
  { tip: "Pooling has NO learnable parameters — and max pooling is not linear", detail: "The first half he's flagged repeatedly. The second is new here and makes a good distractor: max(u) + max(v) ≠ max(u + v). With u=[1,5] and v=[4,2], that's 5+4 = 9 versus max([5,7]) = 7. So max pooling adds non-linearity on top of the activation functions. Average pooling IS linear.", priority: "HIGH" },
  { tip: "Forward pass by hand: weighted sum, bias, ReLU, loss", detail: "His worked example: z₁ = (1)(1) + (2)(0.5) + (−0.5) = 1.5, then ReLU(1.5) = 1.5. The network predicts ŷ = 1 against a target of 2, so the L2 loss is (1−2)² = 1. With calculators permitted this is very much a live question shape.", priority: "HIGH" },
  { tip: "Three splits, three jobs — plus the detail most people miss", detail: "Train fits parameters, validation selects, test reports once. The extra point he added: VALIDATION OVERFITS TOO — \"the more you use it, the more easily it's overfitting.\" Every decision made against it leaks a little in, which is exactly why test has to stay untouched.", priority: "MEDIUM" },
  { tip: "Read the overfitting curves and name the fix", detail: "Both errors high → underfitting; add capacity, train longer. Training low and validation high → overfitting; more data, regularisation, simpler model, or average several models. And in the real world you use validation as the proxy for test to find the optimum — never test itself.", priority: "MEDIUM" },
  { tip: "kNN: run the vote, and know which way k pushes", detail: "His example has neighbours ordered purple, purple, orange, orange, orange. k=1 → purple. k=3 → purple (2–1). k=5 → orange (3–2). The label flips as k grows, which is the point. Small k overfits with a jagged boundary; large k underfits and smooths away local signal.", priority: "MEDIUM" },
  { tip: "k-means: the four steps, in order", detail: "Initialise k centres, assign each sample to the nearest, recompute each centre as the mean of its assigned points, reassign. Repeat until stable. Unsupervised — no labels anywhere. He noted some simple calculation is possible here, which is part of why calculators came back.", priority: "MEDIUM" },
  { tip: "Why the loss must be differentiable", detail: "A step loss reporting 0 or 1 has an undefined derivative at the jump, so the chain rule can't pass through it and backpropagation stops. L2 is differentiable everywhere, which is why we use it even when a step describes the goal more directly. This is the conceptual half of a forward-pass question.", priority: "MEDIUM" },
  { tip: "Vanishing and exploding gradients, recapped once more", detail: "The chain rule multiplies. Factors consistently below 1 shrink the product to nothing and starve the early layers — sigmoid saturating outside ±5 is the classic cause. Factors above 1 blow it up. Clipping fixes explosion by keeping the direction and capping the size; vanishing needs ReLU, batch norm or residual connections.", priority: "MEDIUM" },
  { tip: "Bias and variance — shallow, but know the mapping", detail: "He said directly: \"we don't have a deep question on this at all.\" Variance is how much predictions scatter across independent training sets; bias is how far their average sits from the truth. HIGH VARIANCE ↔ OVERFITTING, HIGH BIAS ↔ UNDERFITTING. He included it because old-school interviewers still ask.", priority: "MEDIUM" },
  { tip: "Backprop concepts yes, hand derivatives no", detail: "He skipped the detailed chain-rule worked examples here and said he doesn't think the complex calculation will be on the exam — consistent with Lecture 3, where he said derivatives would not be tested by hand. Know the process and the two failure modes; don't drill multi-layer differentiation.", priority: "MEDIUM" },
  { tip: "Over-parameterization is explicitly NOT examined", detail: "A student asked whether overfitting is a \"too good to be true\" intuition. He agreed for classical ML, then noted large models have far more parameters than degrees of freedom and generalize anyway — an open research question. His instruction: \"during exam, just take in this classical underfitting overfitting paradigm.\"", priority: "MEDIUM" },
  { tip: "Don't print a thousand pages", detail: "He raised it twice, on environmental grounds, and pointed out the review exists precisely so you don't need to. Paper materials are allowed and unlimited, but the review slides plus the past Piazza midterm are the efficient set.", priority: "LOW" },
  { tip: "GANs: the parts, the game, and what you keep", detail: "Not examinable. A generator turns Gaussian noise into images; a discriminator scores real versus fake; they train by alternating freezes because their objectives conflict. D ≈ 0.5 everywhere is the signature of convergence. After training you DISCARD the discriminator — the generator alone is the product.", priority: "LOW" },
  { tip: "What GANs get wrong: blurry output and mode collapse", detail: "Not examinable, but good interview material. Blurriness is inherent to the design. Mode collapse is the interesting one: the generator finds one output that reliably fools the discriminator and stops varying, so a diverse real distribution becomes red roses only. He linked it to Lecture 7's finding that LLM-simulated populations are over-polarised.", priority: "LOW" },
  { tip: "Autoencoder → the latent dilemma → VAE, as one argument", detail: "Not examinable. An autoencoder's loss is reconstruction only, so nothing constrains the latent space — sample where the data landed and there's no diversity, sample elsewhere and there's no realism. The VAE adds a second loss term pushing the latent distribution toward a Gaussian, which is a shape you can sample from. Autoencoder deterministic, VAE probabilistic.", priority: "LOW" },
  { tip: "Grid vs random search", detail: "Not examinable — he deferred AutoML. Grid covers the space completely but spends equal effort on hyperparameters that don't matter; random avoids that waste but guarantees no coverage. Both parallelise perfectly and neither learns anything between trials. Standard interview question.", priority: "LOW" },
  { tip: "October 26 carries the rest of the review, plus two guest speakers", detail: "The review resumes from STOCHASTIC GRADIENT DESCENT — so the second half covers optimization, learning rates, regularisation, dropout and transfer learning, which is Lecture 7's material. Guests: a professor from autonomous driving and transportation, and an agent-security startup. He said he's compressing their slots to protect the review.", priority: "LOW" },
];

// ─── GAME: Rehearsal & Reversal ────────────────────────────────────────────
// This lecture is two lectures. The first four levels are midterm drill on the
// computations he reviewed — all of them in scope, all of them arithmetic the
// exam can actually ask now that calculators are permitted. The last four run
// the machinery backwards: generating instead of classifying, with each model
// differing only in what it constrains.
//
// Distractor discipline (claude/lecture-game-spec.md, teaching rule 4): every
// wrong option is a real misconception written to roughly the length of the
// correct one. Symbolic option sets are made structurally parallel instead.

const GAME = {
  title: "Rehearsal & Reversal",
  tagline: "Four levels of midterm drill on everything in scope, then four that run the machinery backwards to generate instead of classify.",
  nodePrefix: "z",
  takeaway: "Everything through block seven runs forward — data in, label out — and that arithmetic is what the exam tests. Generative models run the same machinery backwards, and each differs only in what it constrains: a GAN constrains realism through a rival, an autoencoder constrains reconstruction, and a VAE constrains the latent space itself so you can finally sample from it.",
  levels: [
    // ── z1 ────────────────────────────────────────────────────────────────
    {
      id: "splits",
      name: "Drill: the three splits",
      problem: "The midterm is 50 multiple-choice questions through block 7, and it opens where the course did — with the discipline that separates a real score from a flattering one.",
      steps: [
        {
          type: "numeric",
          ctx: "During training, the mean of a feature over the eight training samples comes out to <b>100</b>, and you store it. Three test samples then arrive reading <b>120, 130 and 90</b>.",
          q: "You centre the test data. What does the sample reading 130 become?",
          answer: 30,
          tol: 0.5,
          why: "<b>130 − 100 = 30.</b> The statistics come from training and are applied unchanged. The trap is recomputing on the test set: those three values have their own mean of 113.3, which would turn 130 into 16.7 instead. The model was trained in a coordinate system defined by the training statistics, so anything else feeds it a scale it never saw.",
          hint: "Which mean did you store? Not the one belonging to the data you are now transforming.",
        },
        {
          type: "mcq",
          ctx: "Two decision trees fitted on the same photos. <b>Candidate A</b>: depth 2, training error 10%, validation error 15%. <b>Candidate B</b>: depth 10, training error 0%, validation error high.",
          q: "Which do you ship, and on what grounds?",
          opts: [
            "A — its validation error is the lower of the two, and validation is what estimates unseen performance",
            "B — its training error is zero, which means it has captured every pattern available in the data",
            "A — its training error is higher, and a higher training error is the definition of a generalising model",
            "B — the gap between its two errors is wider, which shows it extracted more signal from the data",
          ],
          a: 0,
          why: "<b>Validation decides.</b> B memorised the training photos: zero training error with poor validation error is the signature. The pattern \"lower training error but worse validation error\" always means the more complex model overfitted. A's 15% is the honest estimate of how it will behave on the test set.",
          hints: {
            1: "Zero training error on a depth-10 tree is the warning sign, not the achievement. What did validation say?",
            2: "High training error is not a virtue in itself. A wins on its validation number, not on its training number.",
            3: "A wide gap between training and validation error is exactly what overfitting looks like.",
          },
          defaultHint: "Only one of the two numbers estimates performance on data the model has never seen.",
        },
        {
          type: "mcq",
          q: "He added a detail about the validation set that most people miss. What was it?",
          opts: [
            "Validation overfits too — every decision made against it leaks a little of it into the model",
            "Validation must be drawn from a different distribution than training, or the comparison is invalid",
            "Validation should be larger than the test set, since more decisions are made against it",
            "Validation must be reshuffled after every experiment, or the same samples dominate the choice",
          ],
          a: 0,
          why: "<b>\"The more you use it, the more easily it's overfitting.\"</b> Every hyperparameter you pick against the validation set transfers a little information from it into your model. Run enough experiments and the validation score stops being honest as well — which is precisely why the test set has to stay untouched for the single final number.",
          hints: {
            1: "All three splits should come from the same distribution. A shift between them is a separate problem.",
            2: "Size isn't the issue he raised. Think about what repeated use does to a held-out set.",
            3: "Reshuffling would mix the splits together, which is the leakage he warns against.",
          },
          defaultHint: "Test data is sacred because it is used once. What does that imply about a set used hundreds of times?",
        },
      ],
    },
    // ── z2 ────────────────────────────────────────────────────────────────
    {
      id: "dense",
      name: "Drill: dense networks",
      problem: "He said shape arithmetic has been tested in past years and put it back in the review. These are the easiest marks on the paper, and calculators are now permitted.",
      steps: [
        {
          type: "numeric",
          ctx: "A fully connected network: <b>2 inputs → 3 hidden units → 1 output</b>. Every layer has biases.",
          q: "How many learnable parameters are there in total?",
          answer: 13,
          why: "<b>9 + 4 = 13.</b> Layer 1 is 2 × 3 = 6 weights plus 3 biases = 9. Layer 2 is 3 × 1 = 3 weights plus 1 bias = 4. The bias is <i>one per unit</i>, not one per layer — that is the part people drop.",
          hint: "Count each layer separately: weights are (inputs × units), and then add one bias for every unit in that layer.",
        },
        {
          type: "mcq",
          ctx: "A 28 × 28 image is flattened to 784 features and fed to a hidden layer of 128 units.",
          q: "What shape is that layer's weight matrix, and what shape is the next one if a second 128-unit layer follows?",
          opts: [
            "784 × 128, then 128 × 128 — the inner dimensions have to meet at each step",
            "128 × 784, then 128 × 128 — the unit count always leads in a weight matrix",
            "784 × 128, then 784 × 128 — each layer maps back from the original input width",
            "28 × 28 × 128, then 128 × 128 — the image keeps its two-dimensional shape",
          ],
          a: 0,
          why: "<b>Inner dimensions meet.</b> A layer mapping m inputs to n units is m × n. The first produces 128 values, which become the next layer's input, so the second matrix is 128 × 128 — every unit connects to every unit, which is what \"dense\" means.",
          hints: {
            1: "That's the transpose. The input width has to come first for the multiplication to line up.",
            2: "The second layer's input is the first layer's output, which is 128 values and not 784.",
            3: "Flattening already collapsed the 28 × 28 into 784. It does not come back.",
          },
          defaultHint: "Write the input width, then the number of units. That is the order.",
        },
        {
          type: "numeric",
          ctx: "A single unit with two inputs. Input values <b>1</b> and <b>2</b>; weights <b>1</b> and <b>0.5</b>; bias <b>−0.5</b>. The activation is ReLU.",
          q: "What does the unit output?",
          answer: 1.5,
          tol: 0.01,
          why: "<b>z = (1)(1) + (2)(0.5) + (−0.5) = 1.5</b>, and ReLU(1.5) = 1.5 because ReLU passes positives through untouched and only zeroes negatives. Carry this forward in his example and the network predicts ŷ = 1 against a target of 2, giving an L2 loss of (1 − 2)² = 1.",
          hint: "Weighted sum first — multiply each input by its weight and add them — then add the bias, then apply ReLU.",
        },
        {
          type: "mcq",
          q: "Remove the activations from a 100-layer network. What are you left with?",
          opts: [
            "One linear layer — the weight matrices multiply into a single matrix, so depth buys nothing",
            "A 100-layer network with reduced accuracy, since the activations contributed some of the capacity",
            "An undefined network, because the layer outputs have no bounded range without an activation",
            "A 100-layer network that trains faster, since there are fewer operations in the forward pass",
          ],
          a: 0,
          why: "<b>W₂(W₁x + b₁) + b₂ = Wx + b.</b> The product of matrices is a matrix, so the whole stack collapses to a single linear layer however deep it is. He called this \"always\" on the midterm back in Lecture 3, recapped it in Lecture 7, and put it in the review — expect it.",
          hints: {
            1: "It is not a reduction in capacity. The expressive power collapses to exactly one layer's worth.",
            2: "Everything is perfectly well defined. It is just all linear.",
            3: "Speed is beside the point — the question is what the network can represent.",
          },
          defaultHint: "Multiply two matrices together. What kind of object do you get?",
        },
      ],
    },
    // ── z3 ────────────────────────────────────────────────────────────────
    {
      id: "conv",
      name: "Drill: convolution and pooling",
      problem: "He has flagged output-size calculation as \"something we usually test\" in two separate lectures, and brought it back a third time in the review.",
      steps: [
        {
          type: "numeric",
          ctx: "One dimension. Input size <b>N = 9</b>, padding <b>P = 1</b>, kernel size <b>K = 3</b>, stride <b>S = 2</b>. The formula is (N + 2P − K) / S + 1.",
          q: "What is the output size?",
          answer: 5,
          why: "<b>(9 + 2 − 3) / 2 + 1 = 8 / 2 + 1 = 5.</b> Padding adds P zeros to <i>each</i> side, which is where the 2P comes from. And from Lecture 4: if this does not come out whole, the filter does not tile the input and the configuration is invalid.",
          hint: "Substitute carefully. The 2P is because padding goes on both sides, and the +1 comes last.",
        },
        {
          type: "numeric",
          ctx: "A convolution layer on a <b>3-channel</b> input, using <b>two</b> filters of size <b>3 × 3</b>. Each filter has one bias.",
          q: "How many learnable parameters does the layer have?",
          answer: 56,
          why: "<b>28 × 2 = 56.</b> A filter spans the full depth of its input, so a 3 × 3 filter on 3 channels is a 3 × 3 × 3 cube = 27 weights, plus 1 bias = 28 per filter. The general form is F² × C × K + K, where the trailing K is one bias per filter.",
          hint: "The filter is a cube, not a square — it spans all three channels. Work out one filter, then double it.",
        },
        {
          type: "mcq",
          q: "Two facts about pooling. Which pairing is right?",
          opts: [
            "It has no learnable parameters, and max pooling is non-linear — max(u) + max(v) ≠ max(u + v)",
            "It has no learnable parameters, and max pooling is linear, which is why it never needs an activation",
            "It has one learnable threshold per window, and max pooling is non-linear in the usual sense",
            "It has one learnable parameter per channel, and max pooling is linear over each of those channels",
          ],
          a: 0,
          why: "<b>Nothing to learn, and max is non-linear.</b> Pooling is a fixed operation — take the maximum, or the average — so there is no weight anywhere. And with u = [1, 5] and v = [4, 2]: max(u) + max(v) = 9, but max(u + v) = max([5, 7]) = 7. Seven isn't nine, so max pooling adds non-linearity on top of the activations. Average pooling, by contrast, <i>is</i> linear.",
          hints: {
            1: "Right on parameters, wrong on linearity. Try max([1,5]) + max([4,2]) against max([5,7]).",
            2: "There is no threshold to learn. Pooling takes the maximum of whatever is in the window.",
            3: "Nothing in a pooling layer is learnable at all — that is the headline fact about it.",
          },
          defaultHint: "One half of each option is about parameters and the other about linearity. Check both halves.",
        },
      ],
    },
    // ── z4 ────────────────────────────────────────────────────────────────
    {
      id: "metrics",
      name: "Drill: metrics and neighbours",
      problem: "A model can be right almost all the time and completely useless. The classical half of the course spends most of its evaluation material on exactly that.",
      steps: [
        {
          type: "numeric",
          ctx: "An inspection dataset: <b>1,000 parts</b>, of which <b>20 are defective</b>. You build a model that predicts \"good\" for every single part, so it never finds a defect.",
          q: "What accuracy does it score, as a percentage?",
          answer: 98,
          tol: 0.1,
          why: "<b>980 / 1000 = 98%.</b> Honest arithmetic, and it tells you nothing — the model catches zero defects, which is the only thing it was built to do. The lazy baseline is already at 98%, so a real model has to beat that before it has demonstrated anything. Accuracy is fine on balanced data; under imbalance it is actively misleading.",
          hint: "The model labels everything \"good\". How many of the 1,000 parts does that happen to get right?",
        },
        {
          type: "mcq",
          q: "So you reach for precision and recall. Which is which?",
          opts: [
            "Precision is TP/(TP+FP) — of what you flagged, how much was real. Recall is TP/all positives",
            "Recall is TP/(TP+FP) — of what you flagged, how much was real. Precision is TP/all positives",
            "Precision is TP/(TP+TN) — of everything correct, how much was positive. Recall is FP/all negatives",
            "Precision is TP/all predictions — your overall hit rate. Recall is TN/(TN+FN) on the negatives",
          ],
          a: 0,
          why: "<b>Precision looks at what you flagged; recall looks at what was there.</b> Precision = TP/(TP+FP) asks how much of your alarm was real. Recall = TP/(all actual positives) asks how much of the real thing you caught. His healthcare reading of a false positive: telling someone they carry a disease they don't have.",
          hints: {
            1: "The two definitions are swapped. The one with FP in the denominator is about your predictions.",
            2: "True negatives appear in neither formula. Both are built from true positives.",
            3: "Neither is an overall hit rate — that is accuracy, the metric that just failed.",
          },
          defaultHint: "One formula divides by what you predicted positive; the other by what actually was positive.",
        },
        {
          type: "pick",
          q: "k-nearest neighbours. A point's neighbours, in order of increasing distance, are: <b>purple, purple, orange, orange, orange</b>. Predict its label at each k.",
          hint: "Take the first k from the list and count. Majority wins — nothing more complicated than that.",
          rounds: [
            {
              ctx: "<b>k = 1.</b> Take the single nearest neighbour.",
              items: ["Purple", "Orange", "Tie — no majority", "Undefined for this k"],
              answer: 0,
              why: "One neighbour, and it is purple. At k = 1 the prediction is just the nearest point's label, which is why k = 1 traces such a jagged boundary — it chases every individual training point.",
            },
            {
              ctx: "<b>k = 3.</b> Take the three nearest.",
              items: ["Purple", "Orange", "Tie — no majority", "Undefined for this k"],
              answer: 0,
              why: "Purple, purple, orange — two to one, so purple holds. Still purple, but the margin has narrowed from unanimous to a single vote.",
            },
            {
              ctx: "<b>k = 5.</b> Take all five.",
              items: ["Purple", "Orange", "Tie — no majority", "Undefined for this k"],
              answer: 1,
              why: "Two purple against three orange, so the prediction <b>flips to orange</b>. That flip is the whole lesson: k is a complexity knob. Small k overfits with a boundary that wraps every point; large k underfits, smoothing until local structure is gone.",
            },
          ],
        },
      ],
    },
    // ── z5 ────────────────────────────────────────────────────────────────
    {
      id: "gan",
      name: "Running it backwards: the GAN",
      problem: "Everything so far took an input and produced a label. Now reverse it — produce a sample instead. The obstacle is that nobody can write down what \"a realistic flower\" means.",
      steps: [
        {
          type: "order",
          q: "One round of GAN training. Click the four steps in the order they execute.",
          pieces: [
            "Freeze the generator's weights",
            "Train the discriminator to separate real images from generated ones",
            "Freeze the discriminator's weights",
            "Train the generator to raise the score the discriminator gives its output",
          ],
          posHints: [
            "The two networks have opposing goals, so they cannot both move at once. One of them has to be held still first.",
            "The generator is held still, so you know exactly which images are fake. That makes this step ordinary supervised learning.",
            "The discriminator has improved. Before the generator can chase it, the target has to stop moving.",
            "Everything else is frozen. Only one thing is left to update.",
          ],
          why: "<b>Freeze one, train the other, swap.</b> The objectives conflict by construction — a step that helps the discriminator hurts the generator — so you cannot descend both at once. He noted alternating training is a general technique whenever one loss governs parts with contradictory goals, and it shows up again later in this same lecture for domain-adversarial transfer.",
        },
        {
          type: "mcq",
          q: "Why does beating the discriminator mean the generator has done something worth having?",
          opts: [
            "If the discriminator cannot tell real from generated, the generator has learned the real distribution",
            "If the discriminator cannot tell real from generated, the generator has memorised the training images",
            "The discriminator's score is the reconstruction error, so a high score means a faithful copy of the input",
            "The discriminator ranks the generated images, and the generator keeps only the highest-ranked ones",
          ],
          a: 0,
          why: "<b>It learned the distribution, not the images.</b> That is the whole argument. Directly specifying \"generate a realistic flower\" is a high-dimensional problem nobody can write down — so you train a second network to critique the attempts, and never have to write it down. His counterfeiting analogy: the detective says it isn't even the right colour, so you fix the colour; then it asks where the watermark is.",
          hints: {
            1: "Memorising would be a failure. The point is producing samples that are new and still plausible.",
            2: "There is no reconstruction anywhere in a GAN — the generator never sees a specific image to copy.",
            3: "Nothing is filtered or ranked. The generator is trained, not selected from.",
          },
          defaultHint: "What would have to be true about the generator for a well-trained critic to be unable to catch it?",
        },
        {
          type: "mcq",
          ctx: "Training has converged. The discriminator now outputs about <b>0.5</b> on everything it is shown.",
          q: "What does that mean, and what do you do next?",
          opts: [
            "The discriminator is reduced to guessing — training is done, and you discard it and keep the generator",
            "The discriminator has failed to train — restart it from scratch while keeping the generator's weights",
            "The two networks have reached a tie, so you keep both and run them together at generation time",
            "The generator has collapsed onto one output, so 0.5 is the signal to stop and retrain from scratch",
          ],
          a: 0,
          why: "<b>0.5 everywhere is the signature of success.</b> The generated distribution has come to overlap the real data distribution, so there is no longer a difference to find. And the discriminator was scaffolding — it existed to measure progress. After training you throw it away: the generator alone, fed random Gaussian noise, is the finished product.",
          hints: {
            1: "Reaching 0.5 is the target state, not a training failure. It means the fakes got good.",
            2: "Only one of the two networks is useful afterwards, and it is not the critic.",
            3: "Mode collapse is a real failure, but its signature is identical outputs, not a 0.5 score.",
          },
          defaultHint: "0.5 is what a coin flip scores. What does it mean that the critic can do no better?",
        },
      ],
    },
    // ── z6 ────────────────────────────────────────────────────────────────
    {
      id: "ganfail",
      name: "Where GANs fall short",
      problem: "The adversarial game produces a generator that fools its critic. It turns out that is not quite the same thing as producing what you wanted.",
      steps: [
        {
          type: "mcq",
          ctx: "A GAN trained on a flower dataset containing red, yellow and white flowers now generates red roses. Only red roses, every time.",
          q: "What has gone wrong, and why does the objective permit it?",
          opts: [
            "Mode collapse — one output reliably fools the discriminator, and nothing rewards producing others",
            "Mode collapse — the discriminator has overfitted to red, so it rejects every other colour outright",
            "Overfitting — the generator has memorised one training image and reproduces it with small changes",
            "Vanishing gradients — the generator's later layers stopped updating, freezing its output in place",
          ],
          a: 0,
          why: "<b>The generator is winning the game it was set and failing the task you wanted.</b> Its objective is to fool the discriminator; if one output does that reliably, nothing in the loss pushes it to explore. He connected this to Lecture 7's election study — language models simulate populations far more polarised than real ones, with the middle compressed away. Same failure, different medium, and current large models still show it.",
          hints: {
            1: "The discriminator isn't the one that narrowed. Ask what the generator gains from producing variety.",
            2: "Nothing was memorised — the generator never sees a specific training image to copy.",
            3: "The gradients are fine. This is a failure of the objective, not of the optimization.",
          },
          defaultHint: "Read the generator's objective literally. Does anything in it mention diversity?",
        },
        {
          type: "mcq",
          q: "The other standing complaint about GAN output is blurriness. What did he say about it?",
          opts: [
            "It is inherent to the design rather than a tuning problem, and part of why nobody uses GANs now",
            "It comes from training too briefly, and disappears once the discriminator has fully converged",
            "It is caused by the Gaussian noise input, and is removed by sampling from a uniform distribution",
            "It only affects conditional GANs, where the conditioning signal competes with the noise vector",
          ],
          a: 0,
          why: "<b>Inherent, not fixable by tuning.</b> Look closely at GAN samples from that era and they are soft and smeared — approximately right, and they do not survive inspection. Combined with mode collapse, this is why he said plainly that \"nobody uses this anymore,\" even though the ideas underneath still shape the field.",
          hints: {
            1: "More training does not sharpen them. He described it as a property of the design.",
            2: "The input distribution is not the cause — swapping it does not fix the output.",
            3: "Vanilla GANs are blurry too. Conditioning addresses control, not sharpness.",
          },
          defaultHint: "Was this presented as something you could fix, or as a reason the architecture fell out of use?",
        },
        {
          type: "mcq",
          q: "A <b>conditional</b> GAN differs from a vanilla one how?",
          opts: [
            "It takes an extra input specifying what to generate, so the output is controllable rather than arbitrary",
            "It conditions the discriminator on the training set, so it can compare each fake against a real neighbour",
            "It runs the generator twice and keeps whichever output the discriminator scores higher of the two",
            "It replaces the Gaussian noise with an encoded training image, so generation starts from something real",
          ],
          a: 0,
          why: "<b>Control.</b> A vanilla GAN takes noise and hands you whatever that noise produces — you cannot ask for a yellow flower. A conditional GAN takes an additional input saying what you want, and generates something matching it while still varying between runs. Popular around nine or ten years ago, used for things like filling in cropped regions of an image.",
          hints: {
            1: "No comparison against specific real images happens. The conditioning is on the generator's input.",
            2: "Nothing is generated twice and filtered. The generator is steered, not sampled from repeatedly.",
            3: "That describes an autoencoder's decoder. A conditional GAN still starts from noise.",
          },
          defaultHint: "The word is 'conditional'. Conditional on what, and what does that let you ask for?",
        },
      ],
    },
    // ── z7 ────────────────────────────────────────────────────────────────
    {
      id: "autoenc",
      name: "The autoencoder",
      problem: "A GAN needs an adversary to define what counts as realistic. There is a route to the same goal that needs no second network at all — just a bottleneck narrow enough to force the issue.",
      steps: [
        {
          type: "order",
          q: "One training step of an autoencoder. Click the four stages in order.",
          pieces: [
            "Encode the input down to a small latent vector z",
            "Decode z back out to the original size",
            "Compare the reconstruction against the original input",
            "Backpropagate the reconstruction loss through both halves",
          ],
          posHints: [
            "The architecture is an hourglass. Which direction does the input travel first?",
            "You have a compressed vector. Nothing can be compared until it has been expanded again.",
            "You now have two things the same size. The loss is the distance between them.",
            "The loss exists. Only one thing is left to do with it.",
          ],
          why: "<b>Compress, expand, compare, update.</b> The bottleneck is far smaller than the input, so most of the information cannot fit through — and if the reconstruction still works, whatever was discarded was not needed. His analogy: to redraw a cat from memory you need its colours and shape, not every pixel. \"Compression is learning,\" now as an architecture.",
        },
        {
          type: "mcq",
          q: "Why is an autoencoder described as <b>unsupervised</b>?",
          opts: [
            "The loss compares the input against its reconstruction, so no labels appear anywhere in training",
            "The encoder is trained with labels, and only the decoder half learns without any supervision",
            "It discovers labels on its own by clustering the latent space once the bottleneck has converged",
            "It uses the training labels only to set the bottleneck width, and never again during training",
          ],
          a: 0,
          why: "<b>The input is its own target.</b> You never need to know whether an image is a cat or a dog — only that it should come back out the way it went in. That is what makes it usable on unlabelled data, and it is exactly the shape of self-supervised pretraining in large models: learn representations without labels, then attach a supervised head.",
          hints: {
            1: "Neither half sees a label. Both are trained by the same reconstruction loss.",
            2: "The latent space does cluster by label on MNIST, but that is an emergent effect, not the objective.",
            3: "The bottleneck width is a hyperparameter you choose. Labels play no part in it.",
          },
          defaultHint: "Write down the loss function. What two things does it compare?",
        },
        {
          type: "mcq",
          q: "You have a trained autoencoder and you want a <b>pretrained feature extractor</b> for a small labelled classification task. What do you keep?",
          opts: [
            "The encoder — freeze it, attach a classifier head, and fine-tune on the labelled set",
            "The decoder — freeze it, attach a classifier head, and fine-tune on the labelled set",
            "Both halves — the classifier reads the reconstruction rather than the latent vector",
            "The bottleneck layer alone, retrained from scratch on the new labelled examples",
          ],
          a: 0,
          why: "<b>Encoder for features, decoder for generation.</b> The encoder's whole job is turning a raw input into a compact, informative vector, which is precisely what a downstream classifier wants. Drop the <i>other</i> half and the decoder becomes a generator you can hand latent vectors to. That split — keep either end, for different purposes — is what makes autoencoders useful beyond generation.",
          hints: {
            1: "The decoder expands a latent vector into an image. That is generation, not feature extraction.",
            2: "The reconstruction is just a copy of the input. The useful object is the compressed vector.",
            3: "Retraining from scratch discards the representation you spent the training run learning.",
          },
          defaultHint: "Which half turns a big messy input into a small informative vector?",
        },
      ],
    },
    // ── z8 ────────────────────────────────────────────────────────────────
    {
      id: "vae",
      name: "The latent dilemma, and the VAE",
      problem: "Drop the encoder and the decoder is a generator. Then you try to use it, and discover that nothing in the training objective ever said what the latent space should look like.",
      steps: [
        {
          type: "pick",
          q: "You kept the decoder and want to generate. Pick a latent vector z, decode it, and see what you get.",
          hint: "Ask what the decoder was actually trained on, and whether the z you chose is anywhere near it.",
          rounds: [
            {
              ctx: "You sample a <b>z that one of your training images mapped to</b>, and decode it.",
              items: [
                "Realistic, but identical to a training image",
                "Realistic and genuinely new",
                "Unrecognisable — not a digit at all",
                "Identical every time, whatever z you choose",
              ],
              answer: 0,
              why: "A good image, and one you already had. The decoder was trained at exactly that point, so of course it performs — but you have generated nothing. <b>No diversity.</b>",
            },
            {
              ctx: "You sample a <b>z from an empty region</b> of the latent space, far from where any training image landed.",
              items: [
                "Realistic, but identical to a training image",
                "Realistic and genuinely new",
                "Unrecognisable — not a digit at all",
                "Identical every time, whatever z you choose",
              ],
              answer: 2,
              why: "Nothing recognisable — maybe a seven, maybe a nine, mostly neither. The decoder learned what to do at the occupied points and nothing about the gaps. <b>No realism.</b><br><br>So: sample where the data is and there is no novelty; sample where it isn't and there is no reality. The second option was never available, and that is the dilemma. The cause is that the loss was reconstruction and only reconstruction — nothing ever constrained the <i>shape</i> of the latent space.",
            },
          ],
        },
        {
          type: "mcq",
          q: "The VAE fixes that. What exactly does it add?",
          opts: [
            "A second loss term pushing the latent distribution toward a Gaussian you know how to sample from",
            "A second decoder trained on the gaps, so unoccupied regions of the latent space produce valid output",
            "A discriminator scoring the reconstructions, which pressures the encoder to spread the data out",
            "A constraint fixing the bottleneck width, so the latent space is too small to contain any gaps",
          ],
          a: 0,
          why: "<b>One extra term, everything else unchanged.</b> The loss becomes reconstruction plus a latent loss — the KL divergence between the encoder's distribution and a standard Gaussian. He was explicit that the mathematics is beyond the course; the philosophy is just \"measure how far these two distributions are apart and push it down.\" Train it, discard the encoder, and now you <i>can</i> sample: draw z from a Gaussian, which is two numbers, and decode.",
          hints: {
            1: "No second decoder exists. The fix changes where the data lands, not what reads it.",
            2: "That is a GAN's mechanism. A VAE has no adversary anywhere in it.",
            3: "A narrower bottleneck does not remove gaps — it just produces a smaller space with gaps in it.",
          },
          defaultHint: "If the problem is that the latent space has no describable shape, what is the obvious fix?",
        },
        {
          type: "grid",
          q: "Three generative models, three possible loss terms. Click every cell where that model's training objective includes that term.",
          rows: ["GAN", "Autoencoder", "VAE"],
          cols: ["Reconstruction", "Adversarial", "Latent / KL"],
          target: (r, c) => (r === 0 && c === 1) || (r === 1 && c === 0) || (r === 2 && c === 0) || (r === 2 && c === 2),
          onLabel: "yes",
          offLabel: "no",
          cellLabel: (r, c, isOn) => (isOn ? "yes" : "—"),
          cellAria: (r, c, isOn) => `${["GAN", "Autoencoder", "VAE"][r]}, ${["reconstruction", "adversarial", "latent KL"][c]} loss: ${isOn ? "yes" : "no"}`,
          why: "<b>This table is the whole block in one picture.</b> A GAN has only an adversarial loss — it never compares an output to a specific input, which is why it cannot be blurry for reconstruction reasons and why it has no encoder. An autoencoder has only a reconstruction loss, which is what leaves its latent space unconstrained. A VAE keeps reconstruction and adds the latent term, which is the single difference between it and a plain autoencoder.",
          hintFn: (e) => {
            if (e.count >= 3) return "Work one row at a time. Ask of each model: does it ever compare an output against a specific input? Does it have a rival network? Does it constrain where the latent vectors land?";
            return "Close. One model has two terms and the other two have one each — check which row you gave the wrong number of.";
          },
        },
      ],
    },
    // ── z9 ────────────────────────────────────────────────────────────────
    {
      id: "boss",
      name: "Boss round: six marks on the table",
      problem: "Six questions in the exam's own format. Five drill things that are actually in scope; the last checks you know where the boundary is.",
      steps: [
        {
          type: "mcq",
          q: "A model reports <b>0% training error</b> and <b>40% validation error</b>. What is happening, and what do you do?",
          opts: [
            "Overfitting — get more data, add regularisation, or use a simpler model",
            "Underfitting — add capacity and train for considerably more epochs than before",
            "Data leakage — the test set has contaminated training, so rebuild the splits",
            "A learning rate set too high — reduce it and rerun the training from scratch",
          ],
          a: 0,
          why: "<b>Zero training error with poor validation error is the signature of overfitting.</b> The model has memorised the training set, including its noise, and that memory does not transfer. The three standard remedies are more data, more regularisation, or less capacity — and averaging several models also helps, by attacking the variance term.",
          hints: {
            1: "Underfitting shows up as both errors being high. Training error here is zero.",
            2: "Leakage would make validation look suspiciously good, not bad.",
            3: "Too high a learning rate makes training loss rise. This one reached zero.",
          },
          defaultHint: "Compare the two numbers. Which one is excellent and which is terrible?",
        },
        {
          type: "mcq",
          q: "Why can't you select hyperparameters using the <b>test</b> set?",
          opts: [
            "Choosing against it makes it a selection set, so its score no longer estimates unseen performance",
            "The test set is usually too small for the comparison between configurations to be reliable",
            "The test set is drawn from a different distribution, so its scores do not transfer to training",
            "Test labels are withheld until after training, so the comparison cannot physically be made",
          ],
          a: 0,
          why: "<b>Using it spends it.</b> The test set's only value is that nothing was chosen against it — that is what makes its number an honest estimate of unseen performance. Select against it and it has become a validation set with a better name. He called it leakage and cheating in the same breath. And note the subtler point: heavy reuse degrades the <i>validation</i> set the same way, just more slowly.",
          hints: {
            1: "Size is not the objection. The problem would remain with a test set of any size.",
            2: "All three splits should come from the same distribution. A shift would be a separate bug.",
            3: "You do hold the test labels. Holding them is exactly what makes the temptation possible.",
          },
          defaultHint: "What property makes the test number worth anything, and does selection preserve it?",
        },
        {
          type: "mcq",
          q: "A convolution layer uses <b>four</b> 5 × 5 filters on a <b>3-channel</b> input, each with a bias. Parameter count?",
          opts: [
            "4 × (5 × 5 × 3) + 4 = 304",
            "4 × (5 × 5 × 3) = 300",
            "4 × (5 × 5) + 4 = 104",
            "4 × (5 × 5 × 3) + 1 = 301",
          ],
          a: 0,
          why: "<b>304.</b> Each filter spans the full input depth, so it is 5 × 5 × 3 = 75 weights, and there are four of them: 300. Then one bias <i>per filter</i>, so +4. The general form is F² × C × K + K. The two classic slips are both here: forgetting the channel depth (option 3) and using one bias for the whole layer (option 4).",
          hints: {
            1: "The weights are right, but every filter carries its own bias and you have dropped all four.",
            2: "A filter is a cube, not a square — it spans all three input channels.",
            3: "One bias per filter, not one per layer. There are four filters.",
          },
          defaultHint: "Three things to get right: the filter spans the channels, there are four of them, and each has its own bias.",
        },
        {
          type: "mcq",
          q: "A fraud detector flags 1 transaction in 10,000 as fraudulent, and fraud really does occur about that often. Which metric would you distrust most?",
          opts: [
            "Accuracy — predicting \"legitimate\" every time already scores 99.99% without catching anything",
            "Recall — it ignores the negatives entirely, so extreme imbalance distorts it the most",
            "Precision — it divides by the number of flags, which is tiny, so the number swings wildly",
            "F1 — it averages two metrics that disagree under imbalance, so the result means very little",
          ],
          a: 0,
          why: "<b>Accuracy, by a mile.</b> This is his 98% example at a harsher ratio. The trivial baseline scores 99.99%, so accuracy cannot distinguish a useful model from a model that does nothing. Precision and recall both stay informative precisely <i>because</i> they ignore the vast pile of true negatives, and F1 combines them. Always ask what the lazy baseline scores.",
          hints: {
            1: "Ignoring the negatives is exactly what makes recall survive imbalance, not what breaks it.",
            2: "Precision gets noisy with few flags, but it still measures something real about them.",
            3: "F1 inherits the robustness of its two components rather than their weaknesses.",
          },
          defaultHint: "Work out what a model that always predicts \"legitimate\" would score on each of the four.",
        },
        {
          type: "mcq",
          q: "Which statement about <b>pooling</b> would be false on the exam?",
          opts: [
            "Max pooling is linear, so a network needs no separate activation after a pooling layer",
            "Pooling has no learnable parameters, which is what separates it from a convolution layer",
            "Pooling is invariant to shifts within its window, since reordering values leaves the max unchanged",
            "Average pooling is linear, while max pooling is not — they differ on more than which value wins",
          ],
          a: 0,
          why: "<b>Max pooling is not linear</b>, and that is the false statement. With u = [1, 5] and v = [4, 2], max(u) + max(v) = 9 while max(u + v) = 7. The other three are all true: no learnable parameters, invariance to shifts within the window, and average pooling genuinely is linear where max is not.",
          hints: {
            1: "True, and he has flagged it repeatedly. Look for the claim that contradicts another option.",
            2: "True — that is the property that buys tolerance to small translations.",
            3: "True, and it directly contradicts one of the other options. Which one?",
          },
          defaultHint: "Two of these options make opposite claims about the same thing. One of them has to be the false one.",
        },
        {
          type: "mcq",
          q: "Last one, and it saves you revision time. Which of these is <b>outside</b> the midterm's scope?",
          opts: [
            "GANs, autoencoders and VAEs — the entire second half of this lecture",
            "Convolution output-size calculation with padding and stride applied together",
            "The train, validation and test split, and what each one is used for",
            "Why stacked linear layers collapse without a non-linearity between them",
          ],
          a: 0,
          why: "<b>Coverage runs through block 7 and stops.</b> His words: \"the rest of things are not covered yet — it's not going to be in the exam.\" So everything generative in this lecture, plus multi-task learning, domain-adversarial transfer and AutoML, is out. The other three options are all squarely in — and he has flagged the non-linearity collapse as \"always\" on the midterm.<br><br>Two more things to act on before November 2: there is a <b>past midterm on Piazza</b>, posted under something like \"midterm\", and <b>calculators are allowed after all</b> — he reversed Lecture 7's ban. The arithmetic questions are meant to be computed.",
          hints: {
            1: "He has called output-size calculation \"something we usually test\" in two separate lectures.",
            2: "This is where the review started, and it is the foundation of the classical half.",
            3: "He said this one is \"always\" on the midterm. Very much in scope.",
          },
          defaultHint: "Where does the coverage stop, and which of these four sits past that line?",
        },
      ],
    },
  ],
};

export default function Lecture8_GenerativeModels({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>OCT 19 · LECTURE 8</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Midterm Review & Generative Models</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Half midterm review — train/validation/test, overfitting, metrics, kNN and k-means, dense and convolutional shapes and parameter counts, the forward pass, pooling, backpropagation — and half new material: generative adversarial networks, autoencoders and variational autoencoders, plus multi-task learning, domain-adversarial transfer and AutoML.
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
        {tab === "game" && <LectureGame lectureId="lecture8" game={GAME} />}
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
          lectureTitle="Midterm Review & Generative Models"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
