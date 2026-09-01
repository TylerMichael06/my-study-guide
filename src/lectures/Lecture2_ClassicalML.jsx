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
Hello. Welcome back to the second week of the season.

Five, six, six deep learning. As you can see, actually, I'm shooting this, uh, uh, actually, I'm shooting this, uh, record from my office.

It's, uh, it's, uh, Wednesday night, 8 p.m..

So you can say it's not an easy job for a faculty. You have to do a lot of things at different time.

Um, the reason we have this recording is because I need to, you know,

go to another conference that I couldn't meet because I'm sorry I couldn't miss because,

you know, there's a there's some, like, an important presentation I need to give.

Uh, but first thing first, like, people want to know more about, uh, you know, project management.

Uh, if you go to Piazza, if you go to that, we will say.

In short, we want to have people to have a 4 to 6, uh, group of people.

A team of 4 to 6 people. Seven is also fine.

1 or 2 persons are largely discouraged because you can still have.

We have a lot of people. It's not easy to manage the group for, you know, just 1 or 2 person or three person,

and all you need to do is that you just need to go to this, uh, spreadsheet.

Uh, it's called the project design spreadsheet. And in this, uh, project list, you just need to put your title here.

Uh, you put your, uh, if you need people or if you flop people, you can, uh, you know, identify this issue or the status here.

You can put your first person and their corresponding email, second person, etc., etc. until the, uh, 6 or 7 people.

So that's all good and that's all you need to do.

On the schedule you will say, uh, we have we have this second week, uh, online, and the next week I'm in September 7th.

It's a Labor Day, so there's no class. However, for September 14th, the proposal will do.

I need to update my websites to reflect it, but at least for now, it's not showing it.

But recall September 14th, we're going to have your, uh, you know, paper proposal due for the format of the proposal.

It's a very straightforward. You just need to, uh, you just need to actually put a no more than two page PDF to submit on the grid scope.

More about grid scope at this moment, because we're going to give you more information later.

Uh, and please submit as a group and you should briefly discuss the idea why, why, why this project is useful and your potential solution, etc., etc..

So it actually gave an example. So the example is also straightforward.

It's a past students who in this course uh, they're doing something called a natural language processing anomaly detection detection benchmark.

It's a uh just a short intro, what's useful and how it's interesting.

Uh, and, uh, some, you know, uh, potential approach or methods and expected outcome.

So it's very straightforward to give some timeline.

And all the goals for this proposal is to ask people to form a group so that you so that we can actually, you know, say your group.

Um, and the reason I select this paper or the proposal is because if you search online, you will find you will realize, okay,

this paper finally become a published paper in the 2025 2025 findings of the MLP,

which is one of the top conferences in the natural language processing. So you can say, actually, this can work and you just need to work on it.

And other questions are, for example, we also encourage people to set up.

We also encourage people to set up their own posts. They look for people or team members or team.

You can also put your. You can also put your, uh, you know, uh, something like uh, this is the example.

You can also put your name here looking for team, uh, so that people can actually, uh, form a group through this stuff.

And finally, if you really couldn't form a team by the end of the third week, uh, we're going to help you.

We're going to help you to form teams by grouping people.

Uh, however, I think you still want to develop your ideas, but, uh, try your best to form a group.

And, uh, if it's not working, we're going to help you by that time.

Uh, so it shouldn't it shouldn't be a big problem. Uh, and, uh, other things.

Will be the 30 of its hours, and we give, uh, we give a list of the, uh, zoom links for you.

So in total I have three tiers and they are going to have a two hours per week per person.

So you finally get six hours of the 12 hour online.

So that will be on different days. So you can choose by your best interest.

Um, I think you would just like to check this, uh, the office hours, um, uh, for for more details.

Sorry. Like, uh, my wife is becoming a slightly worse.

And I think that also makes sense if we if we host a session online, it's a it's a better than just meeting in person.

Okay, uh, without further ado, we're going to back to this, uh, uh, linear model.

Loss and optimization.

So, uh, if you recall, last time we talk about, uh, larger models, agents, agent skills and security issues, and now we go back to the foundations,

which means if we want to really build like large models, agents and related stuff, we really need to know each of them in details.

Or, uh, what's the what's the what's the what's the actual, uh, you know, details within this, uh, large language model, large language model thing.

Because we need to know the the smallest sample or smallest unit.

Uh, if you recall, last time, we're saying if you if you look into this, uh, one single unit here, that will be the linear model.

Now we're going to look in the details of the linear model.

This is actually called perceptron. The running example. If you recall the goal for the machine learning is to mapping x to y.

So this is your input data for this historical training data.

And this is the corresponding outcomes. For example this is the stock market stock market information.

This will be the corresponding stock price. And we want to learn the middle part which which means the mapping.

So how to map the stock stock market information to the corresponding price.

So that's that's something we're looking for. Um, and the last time we talk about linear linear models.

So what's the linear model. Which means you can add a parameter, uh, add parameters along with your input data so that,

so that actually, uh, you can, you can, you can actually, uh, parameterize your, uh, function.

So, uh, so this is something we try to learn based,

which means when you get your input data processed by this parameter, then you can actually predict for your outcomes.

What. But to learn this, uh, uh, parameters, you need to actually do something called the loss function or do some optimization,

which means you need some way to find the best w here.

I mean the weight here giving a loss function L. So which means you want to find a weight matrix W which minimize your loss.

Uh, so in that sense, which means if this is a stock market price, the stock market information.

I want to make sure after the transformation. My price predict the price and the actual price there.

The difference? This can be a loss, right? As small as possible. Which means my parameter w here is optimal.

So that's that's that's the actual goal.

So actually how to do this where we first look into this linear machine learning classification which is called the perceptron.

Here's some examples for the image classification. And clearly these are three different things right.

You wouldn't believe that a k d is actually a plank of sorry, this is not a really funny funny joke.

But anyway, if you recall last time we talked about if you have this input data X and you want to predict the corresponding class of this image,

which means the 00000101, you just mean the first class is a car and by transformation x w w dot product with x plus b.

Then you got your predicted y. So which means this is a weight matrix w x to the transformation of x and z.

By adding this together you know what the predicted results.

However, we need to really know the weight w optimal weight so that you can put a car as a car,

a cat as a cat, a plane as a plane after the transformation transformation.

So here are three inputs. And this is a car.

This is a cat. This is a plane. It will say the representations are different.

For example this is the pixel information. These things are different.

And this is the weight matrix W. This is this is B recall or functional form.

This mapping is a w x w b are the parameters and axes are input data.

So what we're doing is that your input data dot product with w plus b.

And then we hope the second value after this transformation is the largest, which means this can predict your car perfectly.

So that's that's a goal. So which means that'll be w dot dot product s x plus this b and you get this value.

So which means this is a this is a good classification.

Buy one hot and then let go for another one will be uh another goal will be for example this is a cat a cat image.

And you do the same because look at this. This is the same with matrix W.

This is not changing.

Uh, you use your cat image here and your dot product with your W plus B, and then you can say okay the cat category is the largest.

So which means it's a good prediction. And finally the plane is still the same weight matrix and the b b bias factor.

And then this time the airplane is becoming the largest. So which means this is also a good prediction.

So as you can say. So as you can say this weight matrix and this is a B value.

I mean, the bias actually gave you the good prediction for all three images. So these are the good metrics.

Uh, with metrics that you can you can do. However how do we really know.

However how do we really know this. Right. Uh, that will be something we really need to pay attention.

For example, if for a bad for a bad weight matrix, maybe maybe a this is a this is a good way to matrix.

And the bias vector, you will say, okay, the car actually is car, cat is cat and airplanes airplane.

However however this looks perfect doesn't it? But what if we have different than B, right?

For example, if if if this is your weight matrix and this is where b I mean bias,

what happens will be if you just put a, you know, the image of the cat.

Sorry, the image of the car here. This will give you the largest value in the first position.

Uh, so then so that uh, so then what happens will be this is the wrong prediction because it's supposed to be the second.

It should be the largest. And that similarly, in this case, cat is good because it's still the largest one.

And then the plane is a bad one because the the cat got the largest value again.

However, it's supposed to be, the third one should be the largest. So you can say this weight matrix plus this bias vector, it's not good.

It's not a perfect one. It's a it's a bad one. So everything is predicted to be a cat using this weight matrix and the bias.

Uh, so with that in mind, what we really need to know is that the w b is very important.

Actually, this matters for the entire deep neural networks.

And, uh, so, so in this simple example, we show that the learned matrix W and B are pretty important.

And therefore therefore how do we really know whether this this weight matrix is good or this matrix is bad.

So which one is better? Uh, so of course this is a ground truth saying, for example, when, when What is actually a card image.

What we're looking for after the dot after this transformation will be 010.

So this is what we're looking for. But if you use the weight matrix W1 you get this value.

And if you get weight matrix w2 you get this value. So which one is better.

It's easy to think. You just need to measure how close the predicted results to the ground truth to the ground truth.

So therefore there's a there's a there's a, there's there's a place that loss function play a role.

We use loss function L to measure how well each of the W can map x to y of course, plus bias.

So there's multiple choices you can do for the loss function. The first one is called hinge loss.

So which means uh given you have a w, b and x and you want to minimize that uh, such a it's a such a function.

But it's not straightforward. But it's not that important. I think this is more straightforward, which means.

So this is your final result. You know, 0 or 1.

You minus the you minus the predicted value by the by the by your function f which is parameterized by w and b.

Then you calculate the absolute distance which means the positive thing is not distance I mean absolute value.

So which means that's why it's L1. So there's no square at all.

And if you just if you just take one step further, which means you actually mean you're actually trying to minimize the distance,

I mean the square distance between your predicted value and the ground truth record that will be zero, one, zero.

And here your predicted values are 0.069 something 0.08 something.

So it will actually do the vector. You can calculate. You can calculate the vector difference and calculate the norm of it.

So of course you average across a lot of different samples, so the car will be white.

In this case there will be three images. So n equal to three. So so this is a loss function for the L2 square loss.

You can also you can also do cross entropy loss that that will also take some probability and some log function in.

And you will see the details later. We're not going to cover this for now.

But obviously there's multiple different loss functions that all matches how close your predicted results to the actual ground truth.

And many of them are very useful and we're going to discuss them later.

Labels. Each loss function penalizes different things differently. So they have different usages.

But I have to tell you, most of cases we no longer use this loss function in most of the deep learning cases.

And and actually whatever the loss you're using, it's under something called empirical risk minimization.

So for the optimal. For the optimal predictor I mean the mapping from x to y.

What we're really looking for will be okay giving my perfect optimal function.

Uh, the prediction and the and the the actual ground truth.

Uh, this the difference should be as small as possible. However, however,

what happens will be you never know what's the optimal predictor because you will really

you will usually never see the real function or the method for your mapping function f.

So with that in mind, with that in mind we're usually doing the so-called empirical minimizer.

So which means we're not really looking for the really really optimal.

But we just want the approximation. Recall the mapping of the mapping function is actually the mapping function is actually the approximation.

So what we're really doing is that we got a lot of samples like the cat image, dog image, plane image card image, a lot of different images.

And for each of them, we calculate their corresponding loss. Then we average it so that we just want to make sure this is a function f or the loss of

this function f across all the samples or training samples are as small as possible.

If you remember the law of large numbers, if you have a lot of depth, and if you have a lot of samples, then when you calculate the second one,

which means the empirical minimizer, because the record optimal one is pretty hard to get with, n is large enough.

This will be converging to the empirical start. This will be. This will be converging to the expectation of the optimal predictors loss.

So which means we will train a lot of samples. Uh we're assuming this is actually going to be very close to the uh the it's it's

expectation is approximating it's approximating the real optimal predictor.

So that's why when we're actually training the deep learning models, we're just trying to minimize the average loss across different samples.

And one question will be does. Does the function a loss function matters.

The answer, of course, is yes. We won't introduce that many of the different loss functions right.

So for example. So for example uh for example uh this is a this is a, this is a cat and this is a card images.

And this is a different weight matrices. And this is our prediction result.

So which one is better. So all the different loss functions answer will be different.

Right.

Uh but by just checking it maybe you will say okay this 1st May look slightly better because there's only 1.02 difference from the ground truth.

And this. But however this is .01, this is 0.0.07 and .05.

So maybe by L1 by L1 loss this one, this one slightly this 1W1 is slightly better.

However the answer will be different. For example, if we're just using L1 loss, as I mentioned, the difference here will be .02,

but this one will be the .022, which which means w1 is better.

However, if you calculate the l2 l2 loss.

You will see actually the second one the second matrix is getting better.

This is better. It's smaller than the first one. So so there's a so there's the difference I mean the loss function actually matters.

And it depends on the functionalities or the properties you need from the loss function.

We're going to show you some small examples why different losses were when are they playing a role.

For example one thing here in machine learning is called regularization.

So here's a toy example that I can. I want to show you guys so so you can say this is this is your X.

And you want to get a relationship between x and y and y model.

It's a it's a function one. The blue one.

It will just go like this. Right. It's perfect. Right. It's actually actually have all the dots on the, on the function.

So you have a perfect mapping from x to y. Another choice will be this blue uh, this green one.

Uh, this green one is actually you can say, uh, it's not a perfect mapping.

So this point is good. This is a okay. This one is also okay.

This one is okay, but this one is a bit off. But which one should we use?

Uh, so in general, we prefer the simple models.

Uh, the reason is because the reason is because, for example, we only say for points like this for blue ones.

However, the real data may also cover this. Uh, three.

Another another three green dots that in that sense, the blue line no longer really mapping what we're looking for.

Right. Because you can say, uh, this is only a great fit for this.

For five blue points. However, it's no longer for other really data here.

So. However, for this green one it's a it's a very good thing.

So so so so here is something called a regularization which means the machine learning will try to.

Will try to use the regularization to prefer the simple models that can explain or fitting your data well, however we want to.

We want to penalize the functions which are fitting our data too well, because likely you are also overfitting or fitting the data with noise.

So that's the regularization. So in regularization, uh, what we're showing that, uh, in machine learning,

you don't really want to overfit your data with a very complex, you know, functions like the blue one, however you prefer.

The smaller the simpler green one.

Uh, this is also called Occam's razor, which means among all the competing competing hypothesis, the simplest is that which means if the.

If the green ones can already represent your data well, don't use this complex blue one.

It's just. It's just like a it's just like some ground truth.

Uh, in the real world. Right.

If you can actually explain many things using the simple terms, you don't want to use the things which are overly complex.

So in machine learning or in deep learning, we have this concept of the overfitting and underfitting.

The underfitting just the mean the underfitting, just the mean. Uh, for example, this is your, uh, this red one is actually your, uh, functions.

And it will say it couldn't really separate this, uh, circle from classes.

So which means in this case, in this case, uh, your, your, your model are not good enough.

It's underfitting. It's too simple to explain what's happening for the for your data and for this one.

In this simple case, we actually say this is appropriate fitting because you can say this red curve actually separates the circles from the cross,

although there are some mistakes. However, it's not a big deal. So most of the samples are well separated.

But you can go too far, right? Like, you can go to this overfitting case, which means you you false fitting, which means too good to be true.

Like in real world, there is no such a real world. But you can say the function is too.

It's too complex trying to fit all the corner cases.

So that's why it's a bad example. So in this. So.

So we actually favor the case where the machine learning models can apply properly depict the underlying data but not,

you know, two simple or 2 to 2 complex. So this is something we call the regularization recall.

This is a this is L2 loss which means you average the the training loss which means the ground truth.

Iterate over different samples. And this is the predicted value of this axiom put and this is your parameters w and b and you calculate.

This is the original L2 loss dimension. But you can add a regularization.

What does this mean. So. So the first part will be we want to still want to make sure that your parameters w and b are fitting the data well.

However, we at the same time we want to we want to add some preference to prefer a simple model.

So what's the simple or the complex here? Just the mean.

It's just the mean how complex your weight matrices W and B are.

Uh, in short. In short uh, in short we want to we want to we want to regularize or penalize the, the complexity of the weight matrix W.

So that's why the second, the second part is the function of the weight matrix W.

You can also you can also add a b here. It's the same thing we just like for simplicity. We just put W here.

And the first part we still want to make sure the model can predict the training data well.

So this is data loss should be minimized. However we also want to prevent the model of becoming too complex.

So therefore you want to make sure that your weight matrices the w the parameter becoming as simple as possible.

So for the L2 regularization you just actually try to penalize the value of the norm of the weight matrices, which means a very large large variance.

Large variant with matrices are becoming too complex. However, if the weight matrix is relatively small and the magnitude are not too large,

then this is a this is this is so-called a regularization or good regularization.

So you can add this regularization L2 to to penalize for the squared.

A squared magnitude of weight matrix is where you can do the absolute absolute value, which means L1 Regularization.

You can also do the combination of both, which means it's called elastic net.

And uh and uh and there's also other ways to actually regularize regular regularizer weight matrices.

This including dropout, batch normalization and other things.

Uh, uh, we're going to cover this in the later part of the lecture.

And uh, another another interesting thing. Uh, it's just it's actually just, uh.

For your reference, uh, but you don't need to understand everything here.

Uh, so there's multiple ways for do the regularization.

We'll talk about L1, L2, the L2, just make this, uh, square based and L1 is just absolute value.

Uh, and and there's some good properties for different regularization.

Uh, it's also L1 penalty or is also called a lasso.

That's actually resulting sparse solution, which means your weight matrices will have a lot of zeros in your in the matrix in the matrix.

So this will make your weight matrices more sparse.

It's very it's very good for high dimensional problems so that you don't need to store all the coordinates.

It's more interpretable. And you can use some like a compressed or the packed representation of your weight matrices.

But of course W2 doesn't have this property. It's only for L1.

Again, if we revisit to why are we doing this regularization? There is a few reasons.

The first reason is that we want to make sure that we can prevent the model becoming too complex, doing too well.

So that way we want to make it. We want to make the weight matrices becoming more simpler.

And so that the model is also pretty simple. It can work so well on the data.

They never say, and you can even improve the optimization by adding some curvature.

We first talk about loss functions and then next part will be we need to find a good weight matrices W that minimize the loss function.

So that's that's how we are doing this. Then we need to find the w based on L.

And here again here is a card images. And it's a weight matrices.

And the ideal output will be y star. So this is the ground truth.

So how to actually minimize how to actually optimize the weight matrices w here for the optimization.

So the goal is to get from f to that of a variable star.

Then as an example let's first pick a L2 loss which means you measure the squared a square distance up between this particular results.

Predicted results using W and also the ideal outputs y, y star.

Then how do we find this out? There's multiple ways you can do this.

The first one is that you can do random search. Random search doesn't mean you just sample.

You just sample different w. And to say which w give you the smallest loss.

It's a it's a straightforward. However, uh, it's not really smart, right.

You can you can sample you can you can sample a lot of different w for doing this.

And they're saying okay this w the smallest. But the problem is that it's too slow.

You need to sample a lot a lot, especially when this dimension is becoming larger and larger and large.

Then you really couldn't do this. This is the analytical solution.

Recall this is a this is a this is actually a linear function.

So and actually if you remember your calculus actually you know the solutions for this for this function.

So. So actually this is an analytical solution of the uh, of this uh result.

So the so the optimal w you just need to, uh, you know, if you, if you recall the calculator,

you can actually calculate the minimum value for this, for this thing that will be, uh, x transpose x inverse x transpose y star.

And it looks very straightforward.

However, it's very hard to find the reason because this x transpose x of the inverse of the x transpose x is extremely hard to calculate,

uh, especially for very large, uh, especially for very large matrix.

Uh, if you recall.

If you recall that, uh, some like linear algebra, uh, you need to make sure there's a transpose a, I mean, x transpose X is actually invertible.

And in many of the cases it's invertible. However, it's an extremely expensive, uh, When the dimension is really high.

In that sense, you couldn't really do that. And another way for doing so is doing something called a gradient descent.

The goal is to, if I know the loss function, if I know the loss function, if I know the starting point of the weight matrices.

And I can gradually, gradually, gradually, gradually, gradually gradually becoming smaller and smaller and smaller go to the minimum value.

So it's more like we started from very high loss function and we took the path to arrange the lower value.

So so what happens will be this is the loss function. You can calculate the derivative of the function in one dimension.

So which means I tell which which next directions I can calculate all the directions for which my weight matrices should go.

So what happens will be you can calculate the derivative of the functions in one dimensions,

and the gradient is the vector of the partial derivatives in the higher dimension.

Because usually these weight matrices are high dimensions.

So what happens will be what happens is that your grudge you in each inch of the given the current W,

and then you calculate your loss function, and then you understand or calculate in which direction that your weight matrices will become.

Your weight matrix should change so that your loss function can become smaller. So it's a.

So in that sense let me show whether for example in this case I need to in this direction I need to change a little bit like a uh,

at point at the point, point at .001 and, and this and, and and gradually let me find you a good example of.

So basically so so basically it's not very it's not very interesting.

It's, it's not it's not about interesting or not because it's not very complex.

I just trying to show you a good example, but I don't have an animation here. But what happens is that given your given your initial weight matrices,

you just want to find the direction of your weight matrices so that it can gradually, uh,

make your loss function smaller so that you update your current weight matrices to the next one based on the based on the directions,

uh, to to to make your loss function smaller. And you can control this rate by something called the learning rate.

So that will be a W minus. Uh, you can call this learning or whatever you want.

So so so so what we really hope is that, uh,

we want to find the font direction after each of the weight matrices to do a small

updates so that we can recompute which direction to make the loss function,

uh, to be smaller. Uh, and so that's uh, so that's uh, so that's a, so that's a goal.

So, so this is a very, very nice, uh, there's various optimization optimization strategies.

You can do this for uh, numerical solution for the gradient descent, including,

uh, stochastic gradient done out of optimization batch and mini batch algorithms.

We are going to cover this in the later part of the lecture. However, there's a lot of issues, including trapping the local minimum.

You may have a exploding gradient or inexact gradient.

We are going to cover this in the later part of the semester.

So summary of the this part will be we have this loss function to to measure how well your prediction, your mapping, your approximation from x to y.

And you want to optimize your weight matrices, which means the parameters through minimizing the log loss function.

And let me see how much do we have here? Not too much.

I will finish all this in one shot. So beyond the linear models we talk about linear models in this class right in the first lecture.

So which means you have your X, you have your weight matrices. And you do this as You know x x dot product.

W dot dot product with x. Then you get a predicted y.

So so the perceptron was a linear model also.

So what's the linear separable separability. Separability.

It's more like a you can you actually use a line or some dimensions to directly separate, uh separate the different classes.

However in this case in this in this case for it's no longer linearly separable.

Because if you have a line here, here, in any way in this two dimensional space, you couldn't easily separate the two classes.

So that's why. So that's why it's not linear separable anymore.

And. What we really want non-linearity.

Because for the real world data is more complex right. If you do something like a linear transformation in this original space,

you couldn't actually separate the red and blue points with a linear classifier.

There's no way that you can use one line to separate it. However, if you do the transformation of your of your of your, of your data, for example,

you apply this you you do some rotation or other transformation of your data.

You will you will see the red and blue becomes separable using even linear in the new coordinates.

So within that we are adding months after the linear transformation nonlinear transformation.

After using the nonlinear transformation, you can since can become linearly separable.

You can use the easier function to separate different classes.

So the linear models are very good structures, which means assume a linear relationship between the input x and y,

and so that you have this weight matrix and bias b, and you can use the analytical solution to answer it.

However, many of the cases is very hard and the optimizations are.

This is not important for linear models, but overall but overall for the linear model is too simple or too Uh, impossible for the real world things.

That's why we need nonlinear models. Um, so.

So what happens? Is that so? So what happens is that what we're saying is that each of these, a single neuron perceptron, uh,

is a building block of the huge deep neural networks or even all these transformers, uh, foundation models.

The key the key part here will be then we need to really use the nonlinear transformation, uh, you know,

between different this linear, uh, units to make the deep neural network more, uh, you know, descriptive for the real world.

Okay. In the first lecture, we talk about, you have data, which means training data.

You have your y, uh, performance on a task, and we'll talk about linear model in the middle.

However, we're going to make this nonlinear using, uh, many things.

For example, decision tree, K-nearest neighbors clustering. And finally we're going to extend the linear models to nonlinear deep learning.

And that's, uh, I think that's a, uh, that's a, that's a that's the first part of the second week.

Uh, lecture. Uh, one question I want to ask you that. Do we really need a small model when there's a lot of like, large models?

The answer is yes, because it's about the utility. Uh, there's a good, uh, you know, large model.

However, for many small problems, uh, you don't want to really have the large models in place.

Many of the small models can already achieve good performance. They have a good utility like efficiency, cost, etc..

So there's a parameter frontier so that uh, uh, under different objectives.

Okay. So this is only the first part of the second week.

Second week lecture. Uh, I'm going to have the second part and potentially the third part so that we can make a full week lecture.

Okay. I will see you in the next part of the recording.


[Auto-generated transcript. Edits may have been applied for clarity.]
Okay. I think we're going to start the second part of this, uh, lecture, uh, for the week two.

And as you can see from my background, maybe not because I just turned off, um, I'm making this from home.

Uh, so now we're moving to the block two, which means we're going to see a bit more, you know, algorithms.

Uh, but before we're doing so, I want to talk about, uh, you know, project teams.

Uh, as I mentioned in the first part of the lecture, you want to make a group of four, two, six, seven is fine.

However, uh, however, uh, if you just go more or go fewer than four, just let me know or at lecture to know which would be generally fine for that.

And because we have a dense session,

we are hoping that two sections can actually do a mix because you specialize different things and whichever you want.

Just make sure that is the one member can present at the November 30th for the poster session,

especially for the in-person group that we're hoping everyone can come on November 13th 30th.

You can say it's pretty early,

and usually there's no reason that you need to leave by that early because most of the other courses will finish by December 5th, 6 or 7.

So we're just one week earlier.

And also recall have this rap sheet on the piazza so that you can go to the Google Drive so that you can put your idea there.

And another thing I want to mention is that if you don't actually have a team by the end of the week,

three, you can actually, you know, come to the class, uh, on September 14th.

So that will be the beginning of the first week so that we can try to group you,

and we're going to have a brief session so that people can mingle and chat, you know, whether they want to form a group and etc., etc..

So with that in mind, once you have a group, you can actually just do this free proposal and it's also due on September 14th.

However, however, uh. However, if you actually late for making the group, you actually have another, uh, few days to submit that on September 18th,

which means if we actually form you a group on the 14th, you can then have a few more days to actually make your group.

And I show the sample on Piazza so that it's more like cover your idea.

What's interesting, a solution sketch, uh, expected outcomes and other, uh, rough timeline.

And the example I showed you that finally, this, uh, student project turns into a conference paper.

Uh, it's MLP findings. It's a benchmark paper, so it's all good.

Um, so the person who actually joined this group or who joined the course, uh, first time.

Oh, actually, this reminds me that I need to add everyone again to Piazza and send people a note for five, six, six.

It's actually not in person on second week because people drop, people add.

Um, yeah, I should potentially do that at this moment.

I mean, after making this lecture, uh, again, if you're new to this class,

we're going to teach you some exciting developments in machine learning and computer vision and NLP robotics.

So you can see this is a brass first course, which means we cover many things.

However, none of them is going to be very in-depth. Um, and again, we try to make the course, uh, up to date.

So we have the information from the, uh, you know, latest knowledge, including large and large language models, uh, agent and other things.

We also bring people from industry.

So again, our first guest lecture from industry is on September 12th, 21st from Malaysia, so it's happy to say people can get mingled.

Um. All good. And again, this is our, uh, you know, important links.

Um, you can just go to this and find everything you want.

Uh, again, poster, uh, office hours. And you can just go to PS to find them.

Uh, midterm is too far from here, so I will just skip, um, in the past, the people ask, uh, the depth of the course.

For example, people are thinking, uh, people are thinking, you know, some people always believe the course is too easy.

Some of them are believe it's too hard. It's always hard to accommodate everyone.

Uh, so my personal take is that, uh, we always welcome people to give the feedback.

And however, however, this course has no prerequisite.

So. Which means people may have no knowledge about machine learning and deep learning at all.

Uh, so we actually do cover a lot of advanced topics.

However, we need to actually give the person who have no deep learning machine learning knowledge some foundation foundational coverage.

So so it's hard to adapt. But again, we have been teaching this course for a few times and we should be I'm pretty confident.

What's a good balance for that and for the person who actually want to do more advanced stuff,

you can check out like an applied NLP, 3D vision and autonomous decision making.

There's a lot of advanced course at USC. You can check it out.

And also there's no correlation for there's no correlation of the of the difficulty between the

there's no correlation between the course difficulty and the chance you've got a good job,

a challenging course doesn't necessarily get you a better job. Um, actually, what was the student a few years back?

Not a few years, maybe a decade back? Uh, just like you guys when I was a master's students.

I think the number of the zip codes online is only a few hundred. Or even just 100?

I don't recall exactly, but, uh uh, it's a it's the number of the code.

It's a way less way fewer than what we're saying today.

I think nowadays it's more than, uh, this is all the old stuff.

It's a hundred, it's a 1600. But I believe there's more now.

So with that in mind,

a challenging course will only eat your most of your time or more of your time on code and networking or advanced but less useful topics.

So that's why I don't. I'm not a big fan for making the courses really, really challenging and uh, uh, intensive.

Um, so it's not for torturing people.

So that's not a core purpose for the course, um, in that, in that, in that, in that fold, I try to make the course useful rather than challenging.

Uh, and also advanced topics change so fast.

Uh, so this is a two Google Scholar screenshot of myself, uh, backing, you know,

a few years back, he will say, my top paper is gonna change pretty fast.

And, uh, the keywords also changed in the past.

It's data mining, anomaly detection, machine learning systems. I think this is what I did when I was a PhD student and open source AutoML.

However, you can say, uh, things change pretty fast and all my five keywords are gone.

Now some even overlap. Uh, I think machine learning system stays.

What? I made the slides, but you will see things change pretty fast. And, uh, another trick.

Another trick I also want to introduce to paper will be how to, uh, how to use your LinkedIn more effectively.

Uh, because many of the people just saying, oh, there's some great posts on LinkedIn and, uh, you know,

people are always too excited on LinkedIn for almost every single thing because you will recall everyone saying,

I'm pretty excited to announce blah blah blah. Maybe even getting a driver's license.

But how to actually use this effectively? I think there's multiple phones.

So first of all you want to identify the poster which are used.

So for example I'm using example here. I'm using a few examples here.

You will say uh so. So the real people behind the behind the job behind the position actually pose for example this the engineer manager at Pinterest.

And these are all things so so so so so don't try to reach out to them now because it's old.

This is obsolete. I took I took a screenshot maybe two years ago.

So it's no longer the case. However, I think the most important ones is that reach out to the person who are really behind the jobs.

Uh, I mean, so many applications, sure. But the most important part will be you can really reach the person who actually have a say about the job.

Uh, and when you reach out to this person, for example, you can use the LinkedIn message.

You can use saying other words. For example, they may actually leave their, uh, you know, emails, I mean,

official emails, job, job emails in the post so that you can directly do a reach out.

And when you do this, you try to differentiate yourself. For example, you can mention your degree.

Sure. So that they know your location. Or maybe actually you did the same degree at the same place.

That's good. However, you want to mention your unique skill set. Uh, for example, uh, you have some open source developer developer experience,

your expert in specific fields and your your are potentially a perfect match to the job, right?

For example, again, you may have a good open source experience and papers.

So uh, and also don't spend too much time on single and in single positions.

They can be fake. I'm not saying these are fake. I mean, many of the posts on LinkedIn, to my knowledge, are not real job postings.

So don't spend too much time you want and apply the job, which actually I will encourage people to apply to the jobs,

which may not seem to be a perfect match because, you know, perfect match is always hard.

However, there's a lot of other things which doesn't look like a perfect, perfect fit in the in the first place.

However, it tends to be good later, and you can also try to widen your horizon in non-technical industries for example, healthcare, mining.

Finance, sports, news, communication. So media.

There's a lot of industries which actually they need AI, especially in the year of 2026 or maybe in the future, 2027, 20 2028.

Uh, as I told you many times, my personal experience will be, uh, I told you this story before that, uh,

I spent a few years back in the consulting industry, which I'm potentially the only person who really got a real computer science degree.

The treadmill pretty well. The only reason is because I have something they don't.

And, uh. Uh, so when they got, uh, you know, when they got to have a clients who want to do so-called advanced machine learning, advanced AI,

then that would be the place that I can, uh, you know,

play an important role because there's nothing better than you really have a sales person selling the house.

Uh, as you remember, by the time one of my manager, actually, my direct manager, uh, he was, uh, he was a statistic PhD dropout.

Uh, I didn't know he actually dropout until many years later.

So he actually sort of. It's more like in the process of getting his, uh, statistic PhD.

And, um, by that time, he actually was, uh, he was the face of the firm, uh,

as a so-called chief scientist or sort of like a lead data scientist for the firm because they got a PhD degree in statistic on the goal.

Uh, I think that's a that's interesting because, uh, clients actually, uh, you know,

take it's words usually say in some way he's usually saying something I never understand.

Some like, uh, buzzwords, some mathematical formulas.

He's a very nice person. Also, at the same time, uh, you know, you can differentiate yourself in other industries other than pure technology.

You can be a shining star in healthcare, uh, in mining, in nuclear, in social media, in communication.

So, so, so don't like there's many great firms that are looking for the AI people.

Uh, uh, this is this is also all the slides.

You will say I have a pretty, uh, this is a this is also AI generated.

And, uh, I think I have much more, uh, commits nowadays because now we have agents.

But you can say I keep just doing this, uh, open source all the time, which I enjoy pretty well.

Um, right. This is also all the slides you will see. Uh, pretty, uh, you know, this doesn't look very, very dense.

If I actually show you the current, if I show you my current, uh, you know, GitHub, it looks much better.

Uh, it's, uh, the commit is much more dense. Can anyone actually guess why I have a much more dense GitHub, uh, commit since, uh, since February 26th.

Uh, the answer is the. By the time before that, I never used the codex.

And since that, I know what's codex. And you can say commit almost everything.

Uh, thanks to this time. Um, okay.

Uh, so what else? So, so so these are, these are some knowledge so that I can.

I think that will be helpful for your job hunting.

Uh, again, I mentioned this course itself is not for making you a real advanced experts, but because it's the introductory level course.

But we hope to let you understand when and where to use them,

and you know how to chat with people about the AI and the large language models foundation models.

So at least you will look like a good person, knowledgeable person, resourceful person in the field because that's all that goes for this course.

If you want a more specialized course, you may need to look into some other offerings.

Um. Um, yeah, I think these are something you already know, and I will skip again for the person for,

uh, new to this course, a single central place will be this, uh, 566 website.

And so make sure you go to the 496 version.

Otherwise, you may see something old. Um, yeah.

Emails should be used sparsely because, as you can imagine, having too many emails every day, and that's not very efficient.

Unfortunately, um, regarding the compute and cloud credits and uh, I think, uh,

you know, if you want to get some credits and Kaggle gave you some free notebooks,

uh, and as a starting point, and we're going to also apply for, uh, some GPU credits for you guys.

And the course credit cards are not settled, but we're still trying to settle down for this and,

uh, so that we can give you the access to the US advanced computing.

Uh, until then, uh, you need to figure out this by yourself, but hopefully we haven't started the project yet, so you should be good.

Um. Okay, let's recap from, uh, what I learned last week and also the part one of the lecture.

So last time we talk about linear models and their corresponding optimization.

The core, the core motivation that we want to formalize how the machine learning is doing.

It's actually some training data. I think I have the flavor.

Yeah, we have the data on the left. And you have some like learning algorithms in.

In the last case we're showing you the linear models.

And the goal is to, uh, do some, uh, you know, make some prediction and get good performance on the corresponding task.

So this is a data prediction result. And this is the learning algorithms, the learning models in the middle.

Again we call this the learning model. Or what we learn is a linear model.

The goal is to do the approximation. Well we're not we're not trying to say okay we need to do perfect, uh, prediction.

And let's first talk about learning a simple function. Recall.

We did this in the linear function. We have the weight matrix and the uh and the bias.

We just like Simply skip that bias lecture here.

And since we're just talking part one so I'm going to fly through.

However,

you still recall that the weight and bias vector weight matrix and the bias vectors are the learned weights so that you can convert your input data,

the image, to the corresponding prediction of the image class, which is the one hot vector.

And we talk about the loss function, which means it's a way to measure how good your prediction is.

And we also learn how to optimize your loss function so that we can find the best weight matrix given the so-called loss function.

So which means we want to minimize the loss function L to find the best weight matrices.

So that's what we already discussed. And we say deep learning is a is a collection where the combination of a lot of like small linear units.

And finally we can we can achieve good performance.

And the Alternatives to this linear model, or the linear function of which is parametric.

Parametric. Okay. We can do something else.

There's other alternatives. And then we're going to show you a few of them this time.

They're pretty classical. But I'm going to show you how are they actually applied in the large language models and the agents as well.

So bear with me. The first, the next 20 30 minutes you will feel it's pretty boring.

That's that's normal. And then I'm going to tell you why are they still useful or not that boring in the large language model time.

So the first time, the first part of the classical machine learning algorithms is decision tree.

You may already know this pretty well.

And however, for the person who haven't taken any machine learning course before, I think it's it's a very classical and, uh, good knowledge to know.

So here I'm going to give you a quick overview. So basically the question here is that here is the loan application that, uh, uh, you know, as a bank,

you want to assess how risky this loan application is and whether you should really, uh, you should really, uh, you know, approve this loan.

So this may depends on the credit history, the income of the person, the the term of the lower and the other personal information.

Uh, and, uh, so, so in that sense, for example, taking credit history as an example,

uh, for example, there might be multiple categories like excellent,

fair or poor, depending on your previous, uh, lower, uh, you know,

history and the income can be, uh, you know, a range or it can be a continuous range.

And there's a term three years, five years, ten years, 20 years, whatever other personal information,

including the history, including the, uh, you know, other things like, uh, age, lower race, martial status, etc., etc..

Uh, so, so so, for example, this is a home loan for a married couple.

Uh, another is a car loan for a single, uh, college guy.

So there's multiple categories you can choose.

So, so so in the class in the classifier view, what happens will be you submit your loan application to the learning models,

which means it's your classifier machine learning algorithms. It'll give you the result of the safe or risky.

It's a binary classification. Other than the the thing we are saying before, which is, uh, you know, image classification can be multiple class.

It can be a car or cat or dog or birds or whatever you want. However, in the loan application, it's either safe or not.

But you can of course, you can make this the continuous prediction, say a risk score from 100 to, uh, from 0 to 100.

That's also your choice. But in this example we're just having the past data experience X, and we have the machine learning model in the middle.

We want to predict predict the prediction on the risky levels, which means either safe or risky.

So what's the what's the decision tree?

The decision tree is a collection of the is a collection of the decisions that you can you find so that finally you can make the prediction.

So as we're showing the inner vision in the vision,

what happens is that you start from one of the features like a credit inside the accident or poor and maybe the accident.

It was when you when you split on this, split the people on this specific features.

Then you will then maybe you will soon realize, okay, for the good or for the excellent credit history person.

All of them are pretty safe, otherwise they wouldn't get a good credit.

So that so that's so that's a simple classification here, however.

However, uh, for the for. The for the for the credit.

For the credit history or for the credit score. For fair. And.

If you actually, uh, if people are actually paying three years.

They can be risky. However, for five years they can be safe.

So you can say it's a sequential process to split your training samples into different buckets.

Uh, so so what really happens will be, for example, given you have a training data, the credit credit's credit equal to poor, uh, income is high.

The term is five years.

You just go to this, uh, you know, split decision tree starting from here, go to the poor, go to the income in, in, in the high.

And the term is five years. Oh, this person, uh, seem to be predicted as safe.

But how? Actually, you build up this trace, we are going to show you the training.

So. So this tree.

So we're showing you the inference or prediction process, which means when you have a new person to to predict their corresponding a risky level.

So this will show you their safe or not. In this case, it's safe.

However, how do we actually get this decision rules is through the training.

So which means in the past you have an observation which means you have a lot of other people's history.

So some of them have a good excellent excellent credit.

And these are, you know, loan terms and their income and their final result, whether they're actually being safe or risky.

So these are all we have in the past.

So using this information you can build up the stress so that you can make the prediction for the person who are never seen in the system.

So you want to say how to actually build up these traits right.

Again recall when we're trying to do a learning algorithm or machine learning model what's important Including loss function and optimization.

So now we need to look into the loss function. So any single any machine learning algorithms.

Basically you should always especially with the supervised ones you should think about loss function and optimization.

Once you choose your learning algorithm then you first need to understand for the

specific questions and algorithms what's the loss function you want to measure.

So in this in this in this case we want to do something called the classification error.

Right. So which means the number of the incorrect predictions over the total samples.

So that will be your classification error which is straightforward.

You can this range from 0 to 1 which means you are making everything wrong or you are making everything right.

So it's a strict forward. Then. Uh, then once you have this loss function, you can decide or you can actually, uh, consider what's the best trade.

Right. Because because recall starting from the your training data.

You can do a lot of different ways for making decisions.

For example, you can first choose say the terms or you can do the credit or you can do other things.

So there's a lot of choices you can do given there's a three features or five features.

This the trick? There's an exponentially large number of the possible trees to make the decision trees learning pretty hard.

So actually learning the smallest decision tree is an NP hard problem.

In other words, it's extremely challenging. And when you get a large feature space, I mean a lot of things to consider.

It becomes very hard to know what will be the best, what or what will be the optimal decision tree.

You can do this reminds me of optimal decision trees, something very interesting I didn't know before, but I started learning it a few years back.

Uh, anyway, uh, here's our training data sample. Sorry.

Here's our training data table. We have a 40 training samples and the three features.

And you can start with all your data for the split and recall amongst 40 samples, 2220, 22 appears to be safe.

And adding appears to be risky. And so this is the general data distribution.

So on the root. On the root you know that 22 are safe and 18 are 18 are risky.

And in total there's 40 samples you want to use. You want to use this 40 samples to learn your trade.

So so what you're supposed to do then will be that will be the following.

First I can try to okay. I try to say can I actually use the credit.

Excellent. Fair poor to really, you know, split the people into good buckets.

As you can say, if I use this one, then for the person who have excellent score, actually none of them default.

So which means the good credit or excellent credit just equal to safe.

So in a sense for this group of people they're done as long as you have a good credit, excellent graded credit you're good.

However for the for the person who are in a fair and poor bucket, you will say the story is not done right.

Like it's not a clean cut. It's not something like a nine 0 or 18 zero or something like that.

It's not a it's not a clear cut. So the split need to continue.

So so these are the intermediate nodes because the tree is not hasn't already sorted every clear class into a group.

So so so you are not done yet then you need to.

However however you can stop here. Of course you can stop here. So then what happens will be for anyone comes into your decision tree.

Uh, if they have a good, excellent score, they are safe. If they have a first score.

They're safe because you can say within the third group there's nine over four.

So which means it's for the majority vote. This is a larger chance that the person could be safe.

However, for the poor class or the poor category was split a split that is a risk because by majority votes they're likely to be risky.

So so so so you can stop here. However you can, you can, you can, you can, you can, you can keep coming.

But we're going to say about the keep coming.

But the first question will be, you always want to run the best feature to split on because you can split on credit.

You can split on the terms, you can split on the other personal information.

So not not all of them are equal. I mean, there are some optimal split.

There are some like a, you know, less optimal split as well.

So let's say there are two choices. You can do a credit and term.

But you will say, for example, for the person if you use the term as a Split.

So so so it's more likely strangers person are are safe and five years are not safe.

So this which one do you think that will be a good choice or the good split?

Uh, anyone can guess. But of course, this is recording.

Even if you're just staying at home, I won't. I won't know it, but I will ask in the class next time.

Um, so so you need a so, so basically.

Which means you need a, you need a less subjective way to really tell whether this is the effectiveness effective split.

So we need a so so that's here. That's where the loss function or the metrics come into place.

So recall we were saying the uh misclassification rate.

So then you can do it here.

So if you split on the uh if you split on the, if you split on the, uh, some, some certain things, you will get this classification error as a point.

.1. 0.45. And let's say if you split down the credits, then you're making zero mistake here for mistake here for mistake here.

Therefore you get this 102102, uh, you know, misclassification rate.

However, if you split on the term, you will get a 0.025,

which means a quarter of the misclassification because, uh, in using the term then for mistake, for the safe,

sorry for mistake for the three years and the six mistake for the five years, as you can say in this case,

then you should split on the credit because this will give you a smaller, uh, classification rate.

So although this sounds a good choice, right? This this actually gave you lower, uh, credit start give you a lower classification rate.

However, when you when your split keeps going. Uh, the best one for now may not necessarily be the best one later because this is a combination.

As we mentioned, this is NP hard problem and something looked pretty good in the beginning are not necessarily look good in the later stage.

However, let's just do this a very simple algorithm, which means you are doing feature split selection algorithms given you have a set of the data,

and for each of the features, you want to split on the data according to a specific feature.

So there are multiple features, right?

And for for each of the splits, you compute your classification error and you choose the feature which lowers the classification error.

And then you do another split. You do another split. So you will say this is actually doing a recursion and there should be some stopping conditions.

So so again if we use the credit as a splitting criteria and then and then the Uh, for for for the accident group.

It's it's done. Because everyone. Everyone in this excellent group is safe.

Then there's no. There's nothing into nothing more. You need to split.

You can stop here. However, you need to keep splitting if you want.

You can keep splitting on this fear and poor group. For example, use the second feature, which means terms like an income.

For example, using the credit for the fear group, you can do this term split,

which means by three years and by four years and then become a clear cut like okay, for three years.

They're becoming risky. However, for 4 or 5 years they're all good.

So which means these are becoming the leaf nodes again. They are safe.

They're clear and powerful for the income. That's the difference because you can say even for the high income group, uh, some of them still default.

However, for the low income, they're all risky.

Unfortunately, they will say you need to still keep splitting on this high income group even after this program.

So just keep doing it. Keep doing it. Keep doing it until. Okay.

In this case. In this in this case, this is zero two. So which means this one is becoming difficult.

But you still need to further split on the five years. So in short.

So the simple greedy decision of the tree learning will be you always pick the best

feature to split up using your loss function such as the classification error.

And then you learn a decision in this split. And then for each of the leaf hoods are actually not done, which means it's not clear.

You just keep doing this. Keep splitting. Keep keep splitting. The question will be when do we stop?

So there's a multiple ways that you can decide when to stop.

The natural way will be. If all things are clear. Right.

If everything is all done in this case this is done.

This is down, down, down and down. However, for this one, it's not done yet.

So if you actually have all the data in, the nodes have the same value, which means the cost per class production, then you're done.

You have nothing to do. Uh, or another thing would be if you already split all the fixtures you can split.

Then you have nothing to do. Um, and, uh, and, uh, but but in other ways, you can just you can just keep going, keep going and keep going.

Uh, however, uh, so, so so again, the stopping condition will be if there's nothing more to do, you can make the prediction.

You can stop. However, is this really a good idea?

Uh, the answer clearly is no, because we're seeing a very simple example with 40 samples and, uh, three features.

Only the real world is way more complex than than these examples.

So it can be thousands of features and millions of samples or even more.

Uh, I think that large models are trained on billions of the events and the knowledge.

So you can say that's a that's that's impossible to be modeled by a decision tree.

So that's why we need another stopping criterion here. We were saying the.

Stopping criterion three which means you may you may you may you may you may stop if the,

if your classification error or your loss function stop decreasing.

For example if you're these are these are the classification error when you when you try to split.

If nothing really changes like it's just like a getting stuck there.

Another feature is to improve the training error anymore. You should stop.

So this is a pretty straightforward, uh, so yeah.

So in this sense you like just do one split is no better.

Uh, in this case it's good. But however.

However. However. Sorry.

Without stopping. Without stopping. Conditions. Right.

Um, right. Without stopping. Conditions. You just keep splitting.

However, uh, actually, you should stop when the training error.

Improve is not recommended anyway. It's a it's something we need to really look into.

I will revisit in the next class because I think this one is slightly more confusing.

But in short, we don't really want to split out every single features and to make our samples fit into a bucket,

because that's the overfitting we're saying last time. And in comparison to the linear classification, we're going to show you something interesting.

Recall for the linear classification we're going to learn such a, you know, a line so that you can separate different classes by two.

However for for decision trees that will be different things.

Right. Because you can only split on the single feature that which means you have this vertical line or the horizontal line.

So if you do a single split that will be that will be this one.

And then you do another split. I mean if you just like split down x x2 here and then you actually doing another split.

So you will say in, in comparison to this linear linear linear classifiers,

straight line, uh the decision boundary of the decision tree are are like a subspace.

The combinations of the subspace. It's also very different from the linear models.

So so in this way you can think if you if you keep splitting on the feature space.

Right. Uh, your decision boundary of the decision space can be extremely complex.

From the from depth one I mean the single split to the second.

Split to the 10th split. Your decision boundary becoming a A more and more complex.

You can. You can actually model. Very complex decision boundaries using the decision tree.

And here we compare two different models.

This is called logistic regression. This is the decision tree.

You will see when they're getting more and more complex their decision decision boundaries also getting more and more complex.

However logistic regression is more slightly more smooth.

But decision boundary of the decision trees are more, you know, like vertical, horizontal, etc. etc..

Um, and we talk about you can split your decision tree by the classification, uh misclassification rate.

However, there's a much more ways you can do that, including more criteria.

For example, do the random split. You do this mutual. You use the mutual information to measure your actual loss function.

And people are doing some like a old benchmark called data in the before.

So. So there's other things called uh, Gini index, uh, mutual information.

Uh, and many of them are similar. Uh, and you will honestly you you.

99% of the time you don't use Decision tree, uh, directly nowadays.

However, we still want to show you there's multiple choice for the splitting criteria rather than simple misclassification rates.

And again, if you recall, last time we talk about overfitting and underfitting, which underfitting overfitting just mean your model is too complex.

It's way more complex than it's supposed to supposed to be.

Um, and the underfitting just means to sample that it's supposed to be.

Uh, and, uh, so that's why we favor the case where the machine learning models are properly depict the underlying data.

So this is in part one, if you recall of the video and then the question will be.

It also works for the decision tree for this underfitting overfitting.

We call this the generalization. So. So if anyone mentioned generalization to you which means what are referring to that?

Whether your machine learning model can generalize to the data. The average thing if this can do the generalization well.

So which means it's a well it's a generalizable model.

It's a good feature. And what are the following which generalize best to the unseen samples.

So for small tree with a low training accuracy with a low training accuracy, which means it's more like underfitting, right.

Because it's it's small, it's simple, but it's not doing well even on small, uh, on your training data.

And the larger tree with the low training accuracy is even worse because you try to fit your data with a very large model.

But still, the training stock is too good. But the third one is the best, which means you have a small tree but a hydrogen accuracy,

which means you use a small, mean, small model can still depict a lot of data, which is a good thing.

And finally, the large tree with the high training accuracy, which means there might be good, it might be wrong.

However, there are no better than the small tree with the high training accuracy.

So in this case, we want to summarize again that the decision tree generalization for the overfitting.

Which means if it's underfitting which means your decision tree are too simple.

It's unable to capture the trends in the data. And there's too much of the bias.

And if you just so that's not something too good.

However, if your model is really, really complex,

which might be the case that it memorizes every single training examples so that you may have a response to irrelevant features,

for example,

potentially for this loan application or whether this person is a left handed or right handed is also becoming a key attribute in this decision.

That's ridiculous, as you can imagine,

because we don't believe that the left hand or right hand person should be biased towards whether the person should get a lower improved.

So however, if your model is really large and they may even find some, you know,

pseudo or spurious correlation among these features and, you know, prediction.

So that's not something good. Um, so with that in mind, uh, we do this overfitting revisit again using the tray.

And uh, and again, the major thing for the, uh, the major thing, uh, for this, uh, overfitting and underfitting will be,

uh, in the overfitting cases, your, your machine learning model are doing really, really well on your training data.

So you will see when the size of the tree getting larger and larger, you have more and more nodes,

which means you are doing more splits, your training, data loss or accuracy, and your training data accuracy get better and better.

However, your test data accuracy is getting worse and worse.

So which means you memorize too much about your training data so that you can it cannot do well response to your test data.

So which means, for example, if your train is large enough to remember that left handed person should be approved for lower.

However, it doesn't matter at all in real world on unseen data, so it doesn't generalize well.

So. So yeah. So this is, uh, so this is, so this is, uh,

actually a table to show that the training error versus the generalization error, which means it's a training error.

And the test error, it's generalization error is just another, another name of the test error, which means the model actually under new data.

Um, right. Another another view.

I always tell people, the people always saying like, oh, my mouth is pretty complex or my data is pretty complex.

The question will be, are they the same thing or uh, are they what are the complexity of the models?

So there's a theoretical learning for showing this, but I want to give you some rule of thumb.

So so the model complexity refers to the set of functions to fit the I mean the model is your whatever decision tree linear model, even transformers.

It's by the end of the day it's a capacity for it's, uh, it's a, it's their capacity to feature data to depict your data.

So your machine learning model, the model complexity usually refers to at least the two things.

First, the thing will be the number of the learnable parameters in decision tree.

That will be, for example, in linear models that will be the weight matrix.

Like how larger weight matrix W is, the larger the weight matrix, the larger the learnable parameters in this model, which means its higher capacity.

Another thing will be the value range for the for those parameters.

Taking linear model as an example. Again, if the weight matrix can only be zero and one, it's a binary matrix.

You don't have a lot of range. However, if if it can range from -1000 to 1000, it's a larger range than a binary matrix.

So which means you have more freedom or flexibility or capacity to depict some complex correlations or relationship.

So therefore, in short, the model complexity usually refers to the number of the parameters.

I mean learnable parameters. And also the value range of the parameters can vary.

And it's very hard to compare different algorithms between different, uh, you know,

for the capacity, because it's very hard to compare the decision tree with the neural network.

And there's other precise way or scientific way for doing this.

It's called a VC dimension. Uh. We're not going to cover it here.

It's not a it's not a it's not an advanced course. However, if you're really interested, just search basically.

Basically VC dimension and model capacity and and how the model capacity error overfitting, underfitting, training error, testing error in one place.

So that will be this figure when your model becoming more and more complex.

Just like a the weight matrix is the size like the decision tree node, split your training error usually getting smaller and smaller,

which means which means look like your model is doing well on the training data.

However, your test data can become worse and worse after certain points that will be.

So that means there's an optimal model size or training point that you should stop.

So which means after that everything will be overfitting. Before that, everything is underfitting.

So this is something a simplified version or review for it.

And we're going to discuss more about this later.

So for decision tree. So for decision tree how could you verify.

How could you actually evaluate the model complexity.

Uh one simple thing will be the number of steps. Right. Sorry.

The max steps, which means what's the what's the what's the upper limit or what's upper bound that your decision tree can split on the features?

Uh, the larger the feature, the larger the depth, the larger the limit, the more complex your trade can be.

So you will say, we really do this for some real data.

You will see with your tree becoming larger and larger. But by the end of it you can actually describe your data pretty well.

almost a zero misclassification or a missed work error rate.

However, your test data. Test error plot two at maybe a max decision tree, a max steps equal to five.

So which means all this works are are not necessarily are are not even helpful, but also detrimental.

So which means you should stop your, uh, you know, training here or the trade offs there.

Max tradeoffs there. Uh, so so another thing I mentioned will be the data complexity.

People always talk about the model complexity. However, how complex your data is is, is a separate question.

It depends on the if you are working in the industry, especially many years ago, people ask you, oh, how many data do how much data do you want?

How many samples do you want? So this is a wrong question because, you know, data is not only about another sample, another sample, Another feature.

Another feature. It's a it's a complex combination. It depends on the number of examples, which means samples which a single data is a table.

Each row represents the data and each column represents a feature.

So. So the core concept I want to tell you is a separate separate but separate probability of the classes.

So basically so basically thinking this way you can have an extremely, uh, so-called many samples.

However what what what what if each samples are all the same?

Also, you can also have a lot of features. However, what if each feature is another just linear transformation of another feature?

So you have some spurious data complexity, which means actually they are all transformable of the single data and a single feature.

So in that sense, your data, you look like a 30GB of data, but it's just like a duplicate and the transformations of other samples.

It's not really meaningful. Uh, so also, again, it's very hard to compare different types of the data, right?

Like if it's a characteristic versus a pixel. Um, usually it's hard to say.

Uh, there's also some way to measure the data complexity. But again, uh, we're not going to cover it here.

Uh, so, uh, so, so this is something people usually don't talk about.

Is that, uh, the data complexity and your test data?

Uh, and, uh, it's actually a balance. It's actually a racing question.

So which means your data can get more and more complex. Your model can get more and more complex.

They are going to meet each other in the middle. That will be the. That will be the perfect points.

I mean, there's the sweet spots. Uh, so that that will be the place that we will try to optimize.

However, in real world, you never know, unfortunately. Uh, Um, so so so.

But even in real world, it's hard to know. Hard to do and hard to how hard to know.

We still want to do something kind of model selection to getting closer to this.

Which means we want to pick a model with the proper complexity level for your data, so that we can minimize the generalization error.

And also consider the business metrics.

And you can also pick a model family trying to select the proper settings of the models, like for example, the number of the trees,

the max steps for the neural network, the architecture number of the, the number of layers, uh, the weights of the neural network regularization.

We're going to revisit this model selection later.

Uh, I have a lot of things to say about the model selection, because that's that was my part of my PhD.

Uh, studies. Uh, I hate it, I like it the part, I hate it.

So maybe I will say that I hate I like it part first.

The reason I like it because, uh, Tony, this topic make me graduated and also get me some good job as well.

I hate it.

It's because, uh, in the foundational model time, uh, the necessary, the necessity for using the model selection becoming smaller and smaller.

And this reminds me, uh, some interview question. Why?

Why was there was a university in Saudi Arabia called the King Abdullah University of Technology?

And, uh, I think that's a full name. Uh, however, when I was, uh, I got interviewed there for this faculty job, they were asking me, uh,

in the foundational model time, uh, are you do you still need to do this, uh, model selection anymore?

And do you think your research agenda still makes sense?

Actually, it's a very challenging question, because the large model almost got rid of my research direction.

Because if the one single foundation model is doing really, really well.

There's no more need to really compare work. Choose your model.

However, just do the cases. For example in specialized area like healthcare or finance.

There's no such a unified foundation model. I mean two, three, 4 or 5 years ago.

Uh, this question and this answer, uh, hold up.

I mean, this answer holds up a bit better than now, but because now we have a stronger and stronger generalized model,

a general model which can do, uh, many things pretty well.

Uh, we're going to talk more about this later.

Uh, but, uh, here's a very good example to say that, uh, the time changes, uh, whether we need to learn many of the old knowledge become questionable.

Uh, so so so so so now, uh, I'm going to I'm going to skip a few slides because that's, uh, that's a pretty classical sense.

I want to, I want to directly jump into something a bit more fancier that you may be interested in.

For example, how the decision trees or how the decision tree motivates the large language models,

or how are they actually using the large, large language models?

Uh, so so before that. Here's a quick summary. Uh, how to how to do decision decision tree.

Uh, you try to you try to learn decision decision to classifier using some greedy algorithms and

trying to do the splits and using majority class predictions for that specific node split.

And you can also work on continuous discrete features.

And now we also talk about understand how to control the overfitting and overfitting in the decision tree,

which means you control the depth of the the max depth of the decision tree, etc., etc..

And before we jump into the decision tree for large language models, one more thing I want to introduce here will be uh,

something called the Ensemble tree or Decision Forest, or the ensemble version of the decision tree.

So these are the. Here is still your big data sets and you have a.

However, in the past you're trying to build one decision tree to make the prediction.

However, you can do this for multiple trees, right? You can you can use a single using you can use in the same data set to fit multiple trees.

And then finally you can let them to do the majority voting or averaging so that you can have improved results because,

you know, some of them are doing well in certain data.

Some of them are doing well in other fields so that you can try to achieve the you can you can get a much more robust results.

Um, there will be something called a bias and variance in this, uh, in this, in this in this setup.

However however I highly doubt whether this will be in the interview questions anymore.

Uh uh. but, uh, in short, what what what the bias and variance just mean here will be, for example,

if you if you only make the prediction using one single tree, this tree may be too biased and it has its own interpretation of the data.

So your result might be very good or very bad. It's not stable.

So this is the bias of your model. However, if you use the multiple traits you average across them,

then you can reduce the bias because they cancel each other or they they're bringing their strengths, uh,

they're bringing their strengths all together so that you have a much more stable results so that you have a less bias,

however, uh, harm, however, the model becomes mediocre.

So which means you may have a higher variance in a sense. Um, so it's a it's a trade off.

So you may have a strong model with a high bias, but of course, uh, it's it's a design.

It's design choice. Um, and, uh, so it's more like a single tray moves a lot, and this can be pretty good or pretty bad.

Average in many of them move less, but it's less exciting. It's not necessarily the best model.

So, uh, however, for many of the real world cases, you want to, uh, summarize or ensemble across a lot of trades to reduce the, the, the, the problem.

But anyway, uh, we're not going to spend too much of the time here.

And besides, like averaging, uh, ensemble monitors, you can also do something called the bootstrapping or the boosting.

Uh, I'm also not covering this in details. It's, uh, other variations.

Uh, and however, if you actually in the past you have been working in the industry, you must know XGBoost a lot to be more credible.

This was something that I used to, uh, present to the clients ten years ago.

I know, I don't know what the industry are still fancy about that.

But but but there's a very good you know non non large model now neural network models.

It's still very hard to build in a sense.

And once the large language models can actually replace this simple or complex decision tree or decision ensembles,

you know, different works have different saying even even now, uh, even now, whether ensemble trees are doing good or bad.

Different benchmarks are saying different things. In August 2026, I mentioned two papers here.

Uh, you know, some of them say, uh, one for the past of the large models or neural network can build many of the ensemble baselines,

but another way is saying the opposite. So, um, so so let me put this a more fair fairly or let me put this, uh, a more fair,

uh, setup, which means I still think, uh, decision tree, ensemble tree.

Like extra boost, they're very strong baselines in many real world cases.

It's all about budget, right? Like, maybe larger models can give you good results as well.

Or even better results. However, you couldn't afford to use a large luxury model in in a factory.

Saying you are just making a cake, you want to make some quick prediction or you're actually working in a factory.

Who are creating the. Good example with tires.

I mean the tires for the cars and automobile, then it's very weird or costly or too expensive to really deploy any large language models,

uh, putting expensive GPUs in manufacturing.

To do this, however, you you can really run XGBoost or other ensemble trees on very lightweight machine like, uh, Asics and,

uh, so, so, so it's, it's it's all about the balance of the, uh, you know, time, budget, uh, data regime and other things.

Uh, again, uh, there's a good sign before saying all the models are wrong, but some of them are useful.

It also applies here. Okay. Uh, now I want to cover a quick tour to to finish this, uh, second part of the lecture, uh, so that, uh,

after that, I will, uh, we will I will record another third part of the lecture to talk about other things.

But for the second part of the lecture, I'm going to talk about how the decision tree or tree are motivating the current,

uh, decision or the design of the language model.

So, so recall, like when you're building decision trees, start building greatly and never revisit split.

And however think about human human human reasoning or uh, again nothing will be required for the midterm about this knowledge.

It's a bit over the scope, but I think that's an interesting thing about, uh, think about how you are reasoning in real world.

For example, this is a problem like after Jane gave two flowers, two flowers to her mom, she has ten.

Then after she gives three to her dad, she would have seven.

Uh, you know, when we're thinking about her complex reasoning problem, we're decomposing that into small pieces.

And the paper here is called the chain of cells.

Prompting elicit reasoning models just showing that large language models can generate the chain of thoughts.

If you demonstrate a chain of reasoning other than other than just simply to skip the complex question.

So this is actually. So this is actually really like human beings.

I will tell you why a bit later. But but this is something that happens a few years back.

People usually just like give a standard prompting saying, you give a very complex question and ask large models what's the result?

However, however, one simple trick, however, one simple trick By the time people are saying that, it's just saying.

This is the question, but give me the reason or give me think the same steps, which means it.

It explicitly asks a lot of models to sink in steps,

and then each model will will actually decompose the questions into the smaller pieces and give you the result in the middle.

So intermediate steps. And finally you will say, okay, originally the originally the answer is wrong.

However, if you're just doing this, a thinking or reasoning steps result can be correct.

So the benefit for this chain of such reasoning will be.

It allows the machine learning large models to decompose the model step problems into this intermediate steps,

so additional computation can be allocated to the problems so that you can do explicit more reasoning steps.

And also you get a more interpretable interpretable results in the middle results to understand the response.

And potentially this will be good to improve your results.

Uh, by the time like I mean by the time like a, I mean three years back.

Larger models are very sensitive to the prompt engineering. So there's even such a term called prompt engineering, right?

Like because people need to learn the tricks for prompt your large model.

Well. However,

train of thought is more robust so that even different people are writing different prompts and for even for different language models are doing well.

Uh, so so that's it's a, it's a good way. It's a it's such a simple way.

People realize, okay, we can improve the reasoning capacity of the large language models.

Just let them do thinking that's, uh, it sounds very simple, but, you know, by the time there's a lot of, like, low hanging fruits.

Uh, so the key takeaway is that I still didn't tell you why the the tree is important here, but I will tell you very soon.

So the circuit for the chain of steps will be, uh. It's in the cave.

It's a learning model. Uh, emergent capacity to, uh, to to do more smarter reasoning.

And it has a it has a it has a good performance gain on the more complicated problems than it actually works.

Well, a lot of different models that we're showing here, but lots of thoughts because, uh,

because because large models are not necessarily only, uh, you know, give you the answers.

They're actually trying to generate hacks and they're used to solve problems are much more complex.

So, so what really happens or what really people get motivated from the 12 steps will be we're going to demonstrate in the following examples.

So I'm showing you the game of 24. So which means you give a few numbers and the input numbers.

You get a few numbers. And you are allowing to use the numbers and the basic operations to obtain 24%.

Then you can choose the remaining numbers to obtain a new number.

So this is something that the general game you are playing every every time.

However, however, this is hard even for train of thoughts because,

because because in train of thoughts you use, you decompose things into multiple steps.

However, for game of 24, there's no look ahead and it's no going back, right?

Because you don't know whether going the step will be good or bad.

So in that sense, even for GPT four plus train of thought, it's still pretty pretty pretty hard.

So no look had no backtrack. Makes the train of thoughts not really that useful in this case.

However, how you how humans solve problems.

Uh, you may know you may have heard of that something called system one.

System two for the human beings, which means thinking fast. Slow, which is, a which is a venue, which is a very famous, uh, book.

Uh, you may have read before. So which means for system one, you are doing pretty fast.

The reasoning or the subconscious, uh, it's automatic and you are making this fast decision for everyday, everyday stuff.

But it's more algebra. However, you can do the system too as well.

I mean, it's in parallel, which means you're doing the slow, you think deeply and you're doing this for complex decisions and it's more reliable.

Uh, and actually the, the for the, for large models, the autoregressive generation is more like system one because you keep generating things.

Right? There's no not that much of the reasoning you can do.

So how can we actually augment this generation by the system too, so that you can control the structure to improve it?

The answer is a tree search. Think about the tree search. You do some smart calculation, you do the split.

You do different branches. So there's a branching. The branching of the tree.

The branching of the tree is actually something to help us to do smarter reasoning or things in the large language models.

So the figure I'm here showing you that the general prompting will be just given the input you want to get output and the child starts

will be still the straight line you're trying to you're trying to do the chain of starts to decompose things into multiple steps.

However, there's still a single line from input to output. So what's a so so so so so so what's a tree of sorts?

The tree of sorts. Just I mean you can try different branches, but even for the reasoning you don't necessarily need to go to one direction.

But at each step you can go to multiple directions to find the optimal or trying

to find optimal decisions or reasoning paths in a long rather than instead of.

So this is called the tree of sorts. So which means a inspecting three years ago 12 starts so that, uh, you can you can do this decision tree.

Tree based reasoning. Uh, in the larger model.

So so so so so the recipe will be what's the result and how to generate them and how to evaluate it and how to do the search.

So which means in each of the steps you can have multiple candidates and you generate multiple candidates.

You try to evaluate many of them and then you try to find an optimal path.

So this is a 12 uh, and uh here will be some examples.

But I'm not going to show you the details.

But you can say but but but you can say they are asking that.

They're asking the larger models to evaluate whether, uh, this are likely surely impossible to reach uh, 24 as a state.

So, so and they also generate multiple sets of the generation.

Like they can go this way. That way. Just like the decision tree, you're splitting on the attributes.

So they generate multiple candidates. They do the evaluation and then they iterate.

So this will be a this will be. So this can usually converge better than just even a chain of stores.

Because chain of stores have no way to look ahead and look back.

Uh, so this is a game 24. And even for creative writing, they're showing the performance also improves.

Because recall if you're using the cloud,

sometimes they're showing you different versions of the generation to ask you which one would you prefer better.

And nowadays they're showing you different designs to which you like better because this is more like a branching, right?

Like even in the middle, they're showing you which one, which which which one do you like?

Because they give multiple choice. And the choice is depending on their generation.

So branching and smart branching in the long reasoning can be can be a very important part of the current logic model reasoning research.

Um, this is another like mini crosswords. Uh, I'm not going into the details, but you will say there's still the same recipe.

They have a thought and they generate results. They evaluate their thoughts and then they have a search algorithms.

Uh, so so you can say so you can say the, the benefit of the trade of salt in language models, including, uh,

they have this they have this modularity to use the different generations evaluations and search strategies.

It's pretty flexibility depending on your diverse problems under different budget.

And finally, uh, you don't need to retrain any language models that are it's more about the internal reasoning or internal steps.

So as a summary, uh, as a summary and uh, as a summary for the 12 steps for in large language models, uh, it's like it's more motivated by system one.

The two. Although I'm not a I'm not sold on this because the only people want to find a fancy connection to human beings.

I don't think that's necessary, but. But the core idea will be okay.

They want to provide you with the flexible and versatile heuristics for search.

And however there's a search deliberation.

Ah, or enhanced, uh, you know, by some evaluation reasoning so that you can so that you can deliver better long term models by this self-evaluation.

You can, you can you don't need to apply this classical insight to the frontier, uh, large model research.

Uh, so before we finish this, uh, second part of the lecture, I want to tell you how the traits are played.

Big, big roles in 2026 for the large language models.

So, uh, so, you know, uh, for, for people now have, uh, the frontier models in 2026, they have a multiple ways.

For example, they have this one pass. So which means they have this one train the reasoning model.

So they just skip continuous track through bias and backtrace before it answers.

All happening within the larger model themselves. So you won't see it.

But they do this a self check in self verification uh, in branches.

And sometimes they're generating multiple complete answers and roll down the on them and verify them.

And that's why you may you may never see this.

But if you see the reasoning chain it will say they actually have multiple versions and that they converge on what everyone agrees.

They also have this, uh, partial tree, uh, in larger models, which means they do the branch score.

And the problem before completion, uh, tree of sorts is actually in this category.

And the research on this direction is still very active in 2026.

Uh, and also also recall that for GPD, Gemini or whatever, they have a different reasoning budget.

It's more about control the internal branching internal search and evaluation.

So, um, so, so so it's still the current state of the art.

Uh, um, so with the help of the smart internal evaluation, branching decision and generation, uh, the same model can be much more useful.

Um, so, so, so, which is a, which is a very good direction.

So again, the motivation for, for us to teach you this classical machine learning is it's not because nobody uses them anymore.

It's because they are designed or their mechanisms do motivate even the frontier models.

So you still need to know them to even one day you're working on the frontier of the frontier models.

Okay, I think that's the second part of the lecture.

And, uh, I will see you in the third part of the lectures.

And now it's a good time for me to close my working laptop to do something much more for my personal life.

Not a lot of work anymore. Okay. I will see you then.

[Auto-generated transcript. Edits may have been applied for clarity.]
Hey, what's up guys? Uh, here's the last part of this, uh, wake lecture.

Um, so before we really start.

Let me quickly, quickly recap some of the admin stuff.

Um, first of all, if you remember, we have this, uh, Google Drive. It says five, six, six four, 420, 26.

And you should be able to see all the content as long as you use your USA logging.

And actually the actual the material we're sharing here is you can actually, if you just directly click this will just open the files on the drive.

I'm trying to at this moment actually I'm just committing the I'm just committing and pushing the the material for this week.

So you will by the time you see this video, you should be able to really see this, uh, new lecture notes online.

And another thing to note is that, remember, next Monday is Labor Day.

So there's the. There's no course. Uh, be sure not to.

Come to the office. And there's no such a thing.

Uh, um, and, uh, I think actually, uh, another person also asked, was there the we're going to submit a proposal in person.

The answer is no. Uh, sorry, it's not a proposal. Whether we're going to submit a final report in person on December 7th.

The answer is no. Everything's a great scope. And, uh, or last in-person session will be November 30th.

And after that, you're afraid you're a free person again. But I'm sure you're going to take the exams.

So you're not free. Free? But you're free from five, six, six, uh, at least from the exam perspective.

Okay. I think, uh, I think without further ado, we can already, uh,

we can already we can already start and actually just push the material on the other machine.

Um, I'm trying to refresh To say whether the lecture notes it's online.

Um, actually, actually it's not, but I will I will actually, uh, debug this later.

But again, if you if you directly go to the Google Drive here, you can already see the second version.

Second one as well. So this should be all good. But I need to chat with Cloud Source to see whether it's not anything in the schedule here.

Um, anyway, uh, we can start. So in the second part of the lecture, we talk about, uh, Kenya's neighbors and, uh, did with.

Yeah. No. Didn't we talk about Decision Tree?

Uh, and we'll talk about the usage of the decision tree, uh, in large language models and potentially in other reasoning process.

Now we're going to see other things as well. These are more like fundamentals of the general machine learning.

Again, they're not necessarily deep learning but deep learning also benefit from it.

The first part will be model matrix. We mentioned about that.

You have a deep learning. You have a learning algorithm. You have some data training data and you have the loss function.

The goal is to minimize the loss function to achieve the best learning algorithm,

which is parametric, parametric, parametrized, parameterized by weight matrices and other things.

So a loss function tells you how good your model is in predicting the outcomes in supervised learning.

And however there are there are many metrics that you can do this.

For example, we talk about we talk about misclassification rate in the decision tree.

And there are other things.

And for example, in the business applications you're going to measure the actual revenue inference latency which means about efficiency.

So actually when you are doing the model or trying the different models, you potentially choose the a lot of like metrics at the same time.

For example, when you're buying a car, you want to make sure it's safe but also affordable.

And also it's a cost savings, so it's usually more than one matrix.

And for example, we talk about binary classification, which means you are just predicting,

let's say, whether we're going to have a course or not for next month.

So it's either yes or no so that you can do accuracy,

which means whether the predict or whether the ground truth is equal to the prediction and divided by the total number of the samples,

which means which puts the percentage of the correct prediction.

And you can also do something called the precision recall, which is corresponding to true, positive and true,

in which the precision is equal to true positive divided by the number of the true positive and false positive,

which is equal to everything, which means among all the things the ground truth is equal to one.

What's your true positive? And this is also a record.

So, um, so, so which means like in different cases that your, you care different things.

And there's also a well to use uh, metrics called the AUC rule says the area under the curve of the receiver operating curve.

So it actually output, it's actually measuring how well the model can separate two classes.

Uh, so based on your decision threshold, uh, whether the predicted positive is larger than theta,

uh, some, some value larger than your threshold are also negative.

So actually, uh, let's actually have a x x and y axis for the x.

That will be the first positive rate, which will be, uh, false positive prediction divided by the negative samples.

It will say you are going to calculate the area under the curve.

So it actually further a very good prediction for a very good prediction.

What happens will be you should have the ROC AOC equal to one and for for random prediction that's equal to 0.05.

And so. So we're going to revisit this in a later stage.

But but actually any metrics can be misleading or confusing because for example, let's say if we're doing a prediction saying who are going up,

let's make a prediction saying among all the classes who are going to win the next 1 million lottery,

you can say maybe amorphous, there's no person at all.

So if I simply predict, okay, everyone is not going to receive this lottery award, then I made a 100 100% prediction.

I'm 100% accurate.

So so for the extremely rare cases that using the misclassification rate for this type of thing is not actually making too much sense.

It's also a similar case saying in most of the rare disease prediction,

if you simply predict everyone as healthy, then you have pretty high accuracy of the prediction.

However, you're going to miss the person who really, you know, really have the rare disease.

So with that in mind, it's a bad prediction. So or it's a bad matrix to to be used here.

So so so so actually it's very positive. It's a safety incidence.

Thinking this way in real world many of the valuable things are low low low probability events.

Just like the for example just getting a lottery or unfortunately even there's some rare cases, there are important things to note or to predict.

However, also at the same time it's a low probability stuff.

With that in mind, if you just simply using the misclassification rate for this type of the matrix.

Not you're not going to make too much sense for your model.

So therefore. So therefore. So therefore for for for for your metrics, you need to really make sure that you're choosing the right metrics.

And now we talk about many different random things.

However we're going to move to the next random things.

It's not random because I think this is one of the core knowledge or coercing in machine learning,

because even nowadays, many of the algorithm design are still motivated or depending on this.

It's not philosophy, but actually it's algorithm. It's called k nearest neighbors.

And what's k nearest neighbors? Let's say you have some like a folders here in different in different colors.

And nearest neighbor algorithms are extremely simple.

So basically you store all your training data and for your incoming test data, you're going to predict their class.

And what you're doing is really simple. Just simply find the nearest training samples to this new coming samples and

return the training the nearest training samples class as the test samples class.

So so you don't. So so don't actually do too many of the, uh, you don't need to do too many of the learning at all.

However, you simply just trying to use the nearest knowledge.

So so so what happens here, for example, will be uh, we have we have we have many samples as we're showing here,

there are different classes, uh, can be positive or negative.

And, uh, what happens will be, for example, you can find okay for this actually for this specific sample, the nearest neighbor will be this one.

And for for for this. For this sample, the nearest neighbor.

I don't know, maybe this one, but. However. However, within different regions this sample will be their nearest neighbor.

For example, if you get a sample here, the nearest neighbor will be negative. If you get a sample here, the nearest neighbor will be negative.

So so. So with that in mind, what happens is that you can actually use.

You can actually separate your regions to different classes.

So all the samples within this region. Will be negative. And all the samples in this region will be positive.

So recall the decision boundaries were saying about a decision tree and other things.

We also got a decision tree for the k nearest neighbor here.

But actually what we are showing you is the one nearest neighbor, which means we just used one sample to to two separate classes.

But as you can say, if you're doing this nearest neighbor. Nearest neighbor saying in certain sense it's making Make it.

Actually makes some sense, right? Because you will see the positive.

Positive. And in the middle even. It looks very complex.

You get some separation. And the fancy part for the nearest neighbor algorithm is that it doesn't require any training.

So which means there's no training error because there's no training.

So there's no training error. Uh, so it's um, yeah, it's, it's it's simply a very, very, very interesting thing.

Uh, so, so, so, but we're thinking, is the neighbor just, I mean, uh, we usually have more than one neighbors to look at.

So, so that's the value of the key. So which means if you have a new sample you want to check, uh, what's there.

Uh, k k nearest neighbors, uh, you know, classification or the corresponding labels.

And another thing is that when you are saying nearest neighbors, you must have some criteria or objectives to measure.

What's the definition of the similarity? Right.

Like you want to say okay. For example just take looking look.

Looking around you guys today is a remote so you don't have a neighbor.

However, if you're in class like how do the how do we usually define a neighbor in the classroom.

Maybe because you're sitting together. So which means it's a distance matrix.

Or maybe you're taking a similar course besides the 566.

There's another matrix, which means you share something in common. So how to define this?

A matrix D is another separate thing that you usually need to know.

So what happens for each neighbor will be you first off your training data which means you it's just a bunch of samples.

And you have a you have you have your test data x x x prime.

And what, what what you really need to do is that first of all,

you find the you find the key points in the training data which are nearest to your X prime according to the this distance function.

Uh d and then you do a majority vote for the for for the k nearest neighbor.

For the case k nearest neighbors. And then you return the label for x prime.

It's extremely straightforward. So. So so what happens is that this this this positive this positive and negative samples,

our training data and this black points are your new samples to be classified.

And for example if, if you if you use the k neighbor equal to two.

So you will say okay this is a this is the second nearest neighbor.

And uh, this is a third. So you have a so so basically two of the neighbors you will say these two.

And so the classification will be positive simply because this is slightly more closer to the sample.

However if k equal to three then you have this 234.

So which means you have a three samples and two of them are negative.

The majority vote will say okay, this should be a negative. And if you get a k equal to five so which means 2345 again you will get a you

will get a majority vote to the positive because you need to break the tie.

And usually you can break the tie by the the actual distance or by the the closed sample.

It doesn't matter. It's just the illustration. So so which means how to define the distance is the important question here.

So there's a lot of things you can do for defining the distance.

The the most the most common choice would be the Euclidean distance which means you directly measure the distance in this geometric space.

And so I'm not going to expand is straightforward.

How you can do Manhattan distance which means absolute distance between a between two between the values.

There's no square roots. There's no square. There's some much more.

There's a many more distance that you can use here. This can be a distribution wide similarity.

And you can define multiple metrics. You can add them together.

So whichever you want you can define a similarity for the questions you're interested in.

Uh one question is that how does the key change the decision?

You can say in this case is that if we change the value of k, sometimes it's going to be positive, sometimes it's going to the negative.

Therefore, uh, how does the K change the decision.

Uh, and how will this actually make an impact on the decision boundary, especially on the curiosity or the smoothness.

And another thing will be will this affect anything around overfitting and overfitting?

Again, we mentioned this again.

Again, which means uh, how will if if the case is small or is large, will this will make this a learning algorithm specific.

Uh, you know well to to fit fitter fitter training data to well or not.

So this will be the open questions. And we're going to set the illustration to say the actual results.

Um so this is a paper on the Fisher Fisher data a Fisher Hours data.

It's I think that's a flower thing. Yes. It's actually a flower thing.

So you have two dimensions and three different classes of the flowers.

The row one two. And this actually, uh, describe the weights and the lens.

Uh, so so so so indeed, it's a three classification.

Three class classification. And if you set up the k equal to one, which means it's just look at the nearest neighbor.

So this is the decision boundary how the three three classes are being separated.

And then if you set a k equal to 2345, ten, three, four, five, ten, 20, 30 and 50,

and 100 and 120 and 150 because the total samples I think it's not it's not over 150.

So you will see the key patterns here that when we're. So let's starting from one again remember how complex the decision boundary is.

And when you're increasing the number of the key off key then you will see the decision boundary becoming more and more simple.

So it's a much simpler boundary than before. Uh, so so so so so what does this actually mean?

So this means that when we are increasing the number of k, you're looking at more neighbors around the samples.

So you are making a making more like a large group decision.

The large group decision is always it's not always I mean, in general,

what we're saying for the large group decision is that it gives you the robustness, which means it's a it's less bias.

It's a it's a it's a, it's a more, uh, less bias, but more variance in the sense, which means it's a more stable.

It's more robust.

However, you're going to miss the, uh, you know, the small key value which brings you more, uh, you know, fine touch of the of the decision boundary.

Uh, so so so so in the sense this it actually gave us a good question saying, how do you decide the number, the value of key to use.

And of course, what's also another question will be what's the best distance matrix to use.

So these are all called hyper parameters say the hyper domain.

These are these are not the parameters that you can you can change or modify.

So which means these are these are the hyperparameters that you cannot change or learn.

You're just going to set it up. And the parameters again recover.

In the machine learning the parameters refer to the algorithm to the to the numbers which are going to be learned or refreshed or improved.

So these are the difference between these two things. And I'm just trying to tell you here.

Uh, and also, the choice of the hyperparameters is for the problem, and the data set is dependent.

Uh, sometimes you need to train many of them and to see which works best.

However, many times you can try to automate this process, which gives you a lot of like interesting questions to to to do.

Uh, another interesting thing I want to mention will be, uh, um, I was used to working on the fields of automated machine learning.

Uh, uh, that's also during my PhD time. Um, I think by that time, what we're trying to do is that we're trying to automate it.

We are trying to automate the model selection and the hyperparameter tuning,

which is deciding the hyperparameters, uh, before the large language model time.

It's a very good topic. And, uh, uh, there's also books for this type of the, uh, algorithms.

Um, if you're interested in, you can search for. You can search for AutoML.

Uh, it's, uh, it's it's automated machine learning. And, uh, you can say, uh, Google, uh, Google, Microsoft.

And they all have, uh, this type of thing.

And interestingly, say people now are asking whether, do we really need a AutoML, right?

Um, I'm a large company, blah, blah, blah. I was wondering what you guys are saying.

Um. Right.

I think same story as always. Crap. It's a crap out.

Yeah. Um, it's interesting saying that under the large language model time.

What the what the outcome. Most do make too much of the sense.

Uh. It's different. However, however, this is a this is interesting.

Thank you. And farewell. Closing AutoML. Org. So this was a this was actually a very good website before because uh, especially people.

Frank Hatter and these are the pioneers in auto ML.

So this is interesting. Actually, I didn't know this before. Let me quickly read.

It's actually showing you showing you how the research changes with the large language model type.

So so actually AutoML went live in 2014.

Uh, many people are many people started doing research about this, and, uh, these are the pioneers in the field.

So they set up this website and also including make a book.

So they make the challenge and, uh, they wrote a software or they also wrote the software going beyond.

Um, yeah, they actually they built some firms around it.

But my question is that why are they closing it? Uh, this is a question.

Um, the data. Oh, actually, there's also a conference called Autumn.

Because our interesting even the conference is called auto ML conference because I submitted to this conference before.

I like it a bit. Uh, I think they still have this conference this year.

Um, but but I don't know why they close the website, but that's also, uh, potentially, uh,

something we're learning that, uh, you know, research challenges pretty fast, and it's common.

It's come and go. I think Alton now are well challenged by the large language models anyway.

Uh, but we still need to learn this because it's a, it's a it's a fundamental part of the machine learning.

And I hope people know at least what it is. Now we're not even talking about automation part.

We're just talking about how to actually evaluate or choosing the hyperparameters.

Uh, so so I think one will be choosing hyperparameters that works best on your training data.

And this is a bad idea for Kenya's neighbor because you could always give you perfectly on the training data.

So the idea two will be whether you can actually choose the hyperparameter that works best on your test data,

which is which means something you really care about. However, that's not so.

Not too well because you're you're you're doing you're leaking the key information to the machine learning algorithm,

which means it might work well on this training data.

Also on this testing data. However, if you simply do a switch, then you realize, okay, it's not going to work anymore.

So you should never use your test data to tune your machine learning model.

This is very bad. So the idea will be actually, maybe you can actually split your data to the training and validation.

So which means part of your part of your training data are not used to Are not used to train the machine learning model.

However, it's the holdout holdout data set for the validation. So in that sense, you don't need to upload or leak your test data,

but you can use your validation as a pseudo test data to to to test whether

your training algorithms are doing well under this hyperparameter settings.

So. But one thing before that you should know is that we have a general assumption that whatever your training data, test data,

or part of your training data as a validation are all coming from the same data distribution, there is no big shift.

So that will be the fundamental assumptions that we have around this entire schema.

Because, for example, if your data is a is off for cat and dog prediction,

but your incoming test is about the predictions on the car and plane, then there's a huge distributional shift.

So which means they're looking at different things.

So whichever the good algorithm, some cat and dog prediction are not going to work well on your car and plane predictions.

So that's the thing. Uh, so so so there's these ideas. I mean, ideas is better already because you already can do something meaningful.

However, this can even be improved by something called a cross validation.

Uh, we're all talking about this evaluation simply because maybe you're going to be asking a set of questions during the interview.

Uh, so, so so with that in mind, we believe that you should know this, uh, basics.

So cross-validation just mean other than just simply have a one set of the validation.

You can have a multiple set of the validation which means you can you can do this.

You can split your training data into multiple folds, let's say five folds. And you know, your test data doesn't change at all.

And each time you use the, for example, the first of the first four folds as your training and this as the validation.

And the second time you can actually you can the next round or something.

You can do the one, two, three, five as well, in combination as the training data and your fold four as a validation.

So so so actually what happens is that you can you can, you can use your data more smartly and more, uh, you know, uh, you can actually do it.

This is for the case for the small data sets, uh, because you don't have too much data, you want to use your data wisely.

However, it's not very useful for the extremely large and like deep learning or the large models because even a small dataset is is is extremely huge.

You don't need to do this anymore. Um, so the examples here will be, uh, so for example, for the say for ten data sets.

So they have ten classes and 5000, five, five, 50,000 training images and 10,000 testing images.

You can say ten different classes. And if you just use the test, the images and the nearest neighbors are so so so so so so so for example,

you will just trying to say, uh, for the frog, what's the most similar classes likely to be a frog?

And in this case, if they're using the five fold cross-validation and a different value of k.

So starting from 0 to 120 and you will see the cross-validation accuracy.

Of course it's as if it's higher the better. The best time that happens around maybe k equal to seven for the specific data sets.

And when it's extremely small it's not too good.

It's getting better and better. And until certain points, you know, uh,

the performance getting worse and worse if you use 100 and it's just equal to just like you use the 1 or 2 nearest neighbors.

Uh, so. Which means, uh. Which means there's a there's a sweet spot for many of the algorithms.

Uh, and how to decide this. Uh, so usually you.

So, so usually you don't have such a luxury. Uh oh.

Actually, this is on the cross value. So this is the cross validation accuracy.

Yeah. So in this sense, actually we don't. We did actually showing you the test performance.

Uh, likely that will be similar or something similar.

So which means in that sense, uh, you should use the k equal to seven, uh, for this algorithm.

And the cleanest neighbor in 2026. Uh, it's still it's no longer a general machine learning algorithms.

People are used. However, uh, it's it's embedded in many of the machine learning algorithm itself.

So for example, one thing is called the cache.

So trying to store the prompt vectors and answers as a model, uh,

as a model so that you can retrieve the similar, uh, you know, prompt for the answers easily.

So for a new prompt, find and use the cached prompt. Actually we're going to really talk about this very soon in other algorithms.

And so you can say the k nearest neighbor algorithms are a good way to to be used in the retrieval and the ranking because similarity is a key.

Uh, and also uh also also some recent papers showing you that if you can do the cache, the prompt well, so that you can achieve a much,

much better, uh, higher, higher rate and, uh, much lower, uh, you know, error rate and it can be much faster.

So. So I think your neighbor make a very good sense even in today's, uh, design.

So. So one thing, one one paper. Well, one research we're going to quickly mention is called this, uh, newspaper for language models.

It's called the app. The idea will be you have a you have a lot of training samples and their targets and their representations.

And so, you know, some nearest neighbors for new, for new, for new questions or new new contacts and representation.

Actually, you can retrieve the most similar training samples even for large language models.

So the key idea will be to enhance language models by retrieving similar centers from the training data they call the data store.

It's not a new, new new paper. It's a 2020 paper.

So it has been a bit of the time. However, it's still showing you that help to predict the next word.

So it combines from the prediction from the new neural language model.

And also you can use the nearest neighbor search for the best accuracy.

So how it works.

So first of all you still construct your so-called training samples, which means you store the vector representations of your training data sequence.

And when you have a new prompt, or you actually set up the the nearest neighbor search or retrieval based on this vector similarity,

just like a Euclidean distance. And the prediction aggregation will be the following.

You combine the next token probability from the nearest neighbors, plus some of the the general neural language model prediction.

You add a, you use a weighted interpolation, which means you both.

So. So with this continuous neighbor retrieval you simply use your language model for the prediction.

Without this language neural language prediction you simply use your nearest neighbors response.

Now you just combine both of them.

And the final decision will be a hyperparameter to balance the contribution of the neighbor components and the language models.

And this is a k l.

It's a and many of the current workers are still trying to learn a bit or used a bit about this philosophy.

And another things including uh retrieval, augmented, uh, retrieval, augmented, uh, I mean rag,

which means when you're trying to augment your data and your language model related words,

you can retrieve most similar things or interesting thoughts on that, but it's still based on the similarity.

And you can say the most costly part for the nearest neighbor will be the distance calculation or retrieve the most similar items.

So this will be something that has been a very good topic for many years.

There's a H, S, W and other things so that you can trade the exact neighbors for speed.

Indeed, I also did some similar research before. I don't recall whether we're going to cover that here or.

I mean, in this, uh, course or not. Uh, but, uh, I will think about it.

It's, uh. It's interesting. Uh, but, uh, this is a this is an entire world.

It's a huge retrieval.

You're just trying to find similar things around you, whether your neighbors are very good at, you know, uh, getting good at exams.

You should find good neighbors during the midterm. Sorry.

Uh, it's just a joke, but, uh, uh, we're going to watch you guys.

Um, anyway, uh, anyway, um, what's the effect of k.

So this is something we mentioned in the, uh, a few slides before we can say this key value.

I mean, the size of the neighbor directly control the model complexity and capacity,

which when the K is very small with a larger key, this will make the decision boundary smoother.

And the small kid is to overfitting. and the large scale is to underfitting because in the worst case scenario, or in the extreme case,

that you include all the training data so there's no more useful information anymore.

So how to decide this case properly? And also the hyperparameters.

Again one idea will be cross-validation monitored error rate.

However we can do this automated machine learning.

And yeah another rule of thumb that people are saying is that you can use the square root of the training samples,

but it's, it's a it's a very old classical statement.

I don't think that applies anymore nowadays. Um, yeah.

So the benefit for doing k nearest neighbors will be it's very simple, intuitive and explainable.

There's no training or retraining at all. You just got the training data and you find a similar neighbors.

That's it. Uh the the cons will be the computation is very expensive again when you are trying to store all the data in this dimension.

This is the number of samples you have on the storage complexity for it.

And if you have more and more samples, it's going to increase linearly with the end.

However, you have a dimension. So which means it's going to be increasing for both R and D.

And even finding the use of contiguous neighbors, there's a lot of like optimized algorithms.

Um, but the complexity is not it's not a small thing.

It can be quite large. And uh, however, there's other things to do, the acceleration.

So usually it's not a very, very good solution for extremely, uh, complex questions.

And uh, so as a summary, um, you can now already do the classification for new points by majority vote and explain the case,

trade off and knowing how to choose it. Uh, and what else?

I think that's it for K-nearest neighbors. And, uh, to, uh, to close this, uh, part three, we're going to cover one more concept, uh, so that, uh,

we're done with the classical machine learning and starting from the next week, I mean, next week is the Labor Day, so we don't actually meet.

I mean, from starting from the first week, we're going to cover more, uh, really the deep learning.

I think it's a slow start. And, uh, please stick with us.

So for the clustering, uh, that's another thing very similar to the there's another thing quite similar to k nearest neighbors,

because it's also based on some sort of, uh, similarity measure.

And uh. And the idea for clustering will be discovered, the groups or the clusters of the related,

let's say the articles, you have a lot of like Spark sports articles.

You have a lot of like a world news and then you want to identify them smartly.

And another thing you can do. For example, you have a different color of the boss and you have a different color of the cats.

You want to actually cluster them by colors.

So this this two figures actually reminds me these are the two.

These are the these are the two figures or images I generally used very early version of the GPT.

It's maybe GPT four, even some early version. So that's why I still keep them.

And now you can say currently what GPT or what other machine learning model can generate are much more fancier.

Uh, you know, technology changes and change fast. Um, why might clustering be useful?

Uh, the reason is because in real world, you there's a pattern, right?

Like, but many of the patterns you don't get the labels.

The labels just mean if you really know, okay, whether this person like something, you really don't get such a feedback.

However, based on the similarity among different people.

If if if if one person likes something. Another similar person may also like a similar things.

So that's why. So that's why clustering gives us a way to discover the patterns in the unsupervised way, which is very useful in real world.

For example, you can learn the user preference so that given the given different news and different users rating,

it will say, okay, this person really likes the sports news.

Another person really like a political news and the user feedback can help us to do the preference learning.

This is actually quite meaningful. As I mentioned, I was used to work at a consulting industry, so one time we are working with the A lottery.

A lottery? A lottery firm. So it's interesting.

What happens is that they give us a lot of like, information from the purchasers.

So some of the purchasers will just do one time purchase. They put a lot of money in some of them just doing one time purchase.

However, they just like a buy one ticket lottery ticket.

And many of them are actually just coming back and coming, just coming back.

And each time some of them are purchasing a lot and sometimes sometimes they're just purchasing one ticket or two.

So, so, so by learning their patterns, they want to design different strategies for marketing, right.

For example, they want to make sure the person who can keep coming back to buy more.

Uh, so so actually use the clustering to, to find the patterns.

And we first the label, we will first put different people into different buckets.

But some of them we call them the adventurers, which means they just do one time purchase and they purchased a lot.

And some of them are frequent buyers, so they may be not buying a lot, but they keep buying.

So for different for different groups of the customers the strategies will be different.

So that's why the clustering can be quite useful. And other things.

Uh yeah. So the question is the unsupervised learning task,

which means you only see the you only have the observations, but you don't actually see their outcomes.

Uh, so it's more challenging indeed, but it's also more valuable in a sense.

Uh, again, it's an unsupervised learning task.

There's no label provided, uh, so that you want to uncover, uh, uncover the cluster structure from the input alone.

Uh, for example, your input will be a lot of, like, documents for dogs and other vectors, and the output will be okay,

given this, uh, given, uh, you know, different clusters, maybe you want to give them cluster labels.

So, So what actually defines the cluster?

Uh, we think the important part of the cluster will be the center or the center or, and also the spread or shift,

which means if you know the if you know, if you know the center, if you know the spread or the shape of the distribution, then you can depict it.

And uh, and so that, so that, uh, so that usually there's a one big matrix that you, uh, you'll want to use.

So for example, the case that you want to assign observations, I mean the documents to the clusters, which means that belonging to different labels.

And if the, if the if the similarity under this cluster, uh,

under your sample to the center of the center of the cluster will be small then, which means they're similar to this cluster.

So, so basically the center is the representative of this cluster.

So that's how we do the assignment. And here's a few examples.

So this is the easy case, which means clearly you have a clearly you have three clusters.

It's easy to separate. But this is actually impossible because again there's no labels.

So how do I know how many clusters will be in this case.

So that will be the extremely challenging case that you can do the clustering or the separation.

And in between or most of the cases in between. Right. You may have some separation but not a lot of the separation.

So so so so this is a more like a real world cases.

And the other challenging case actually in two dimensional space will be for example, it's a spiral and a cluster within a cluster.

And you know, since the real world are becoming much more crazy and it's very hard to separate in many of the cases.

So in this so in this lecture, we're only going to teach you one simple clustering stuff again.

It's also used. I think this type of simple algorithms can motivate your design for your machine learning algorithm.

However, it's not a it's not a crazily, crazily challenging algorithm set up.

So we're going to tell you something called the k means. So the assumption is that the score is equal to the distance to the cluster center.

The smaller the better, right. If you have a sample,

you want to make sure if you assign to a specific cluster or it should be assigned to the cluster where the cluster center center is,

cluster to this new data samples. Uh, so so so so which means for clustering, how would you do this algorithm for the K-means.

So so let's say assume you have three clusters in total.

These are the samples. So the first step is that you run them.

You randomly Initialize three cluster centers. Let's say this is a red one, green one, and blue one.

And the second part will be. Then you assign the remaining observations I mean the samples to the closed cluster centers.

So based on the distance. So in this case so in this so.

So in this case you will see these samples will be assigned to red because it's closer to the center.

And these other these six squares are designed to be green because it's close to the center.

And the other things will be the blue because these five samples are closer to the center of the sample.

So. So with that in mind, you get the first round of the clustering which means red green, blue.

It's not too bad. It's not too bad. And then what happens is that you need to revise the cluster center as the mean of the design observations.

For example, if you have two samples then you potentially do the do the you calculate their center,

their central mean that then the center will change, right?

For example, uh, in this case, uh, in this case, the center becomes something like this here.

And for for this one, uh, based on the six samples or seven seven samples, your center are getting updates.

And also for the blue one. So you have a new center. Uh, so you have a, you have a, you have a new center.

Uh, in this case, sorry. Um, yeah, in this in this case, you have a, you have a, you have a new center.

Uh, so, so you can say there's a minor difference is that the center are represented using square,

and, uh, uh, and and the, the samples are represented as a, sorry.

The centers are represented as the circle and the samples are represented square.

So this center can be an actual sample or it can be a hyper hypothetical center.

So in this illustrative case, we're using the hypothetical center.

So which means uh, you only have this 1 to 3, 1 to 3.

You only got this, uh, 12 different samples. I mean, 12 spurs.

And these three centers don't exist. They're just random randomly initialized.

And then you assign the samples to the centers, then you recalculate the sample, you recalculate the center.

This becomes the new center. But it's a circle. It doesn't exist. They're not really the samples.

So that's why when you update your centers you reassign the your assigned the the clusters.

You just keep doing that until the convergence.

So the limitations of the the limitations of the K-means will be, uh, look like you only the center center matters, right?

Because, uh, because because I assume that the shape of the centers are more like a square.

Was the fear so? Because. Because otherwise it's very hard to, uh.

To. Because. Because we're calculating distance.

So for for calculating the distance to the center space, you're assuming, okay, they're within this square range on a high dimensional space.

That will be the hyper hyper on the hyper space. That will be a high dimensional.

A square or the cube? It's not a cube. It's like a ball or something like that.

And you're assuming such a shape. And there's many of the failure types of the, uh, failure types of the, uh,

K-means, as we're showing, for example, the clusters overlap with each other,

or there's a very different cluster size and the different shapes and orientations of the clusters,

because now we're assuming they are more like a sphere. Uh, so this can actually feel the k k nearest neighbors.

Sorry. K means so. So. However.

Still the case.

It's K-means is a is, I think potentially the most widely used algorithms for clustering because it's just extremely, uh, straightforward.

And, uh, it works in this unsupervised setting.

Um, so, so even nowadays, I think people still like it, uh.

Uh, like, uh, here are some examples showing you that K-means are still being used even in, uh, large language model time.

But I'm going to show you showing you, uh, how large language models are actually helping for the clustering.

So, so what happens for the unsupervised clustering. Right. Is that we're going to group the data automatically.

But uh, this actually may not match the user expectations in the semi-supervised clustering.

What happens to that user are going to provide to some of the guidance, including the constraint set point.

The statement points just mean, for example, the initial sentence of a cluster.

But this actually requires extensive feedback.

The the traditional algorithms like k, k, k means uh,

they actually lack the intelligence or demanded too much of the expert labeling to do great semi-supervised clustering.

However, however, we can use the large model to do.

Smart clustering is called a large model guided few short clustering.

So basically we can leverage the large models to amplify the minimum user input,

generating substantial pseudo feedback and give us some more information.

So actually this this happens in three stages.

So before the clustering happens large language models can generate some key features to enrich the text representations.

The other examples here is here, for example.

Recently, for example, if you cluster some like documents, you purely rely on, rely on the word embeddings and you may miss some key information.

You can add some additional information to augment this process to add to the text representation.

For example, original text without large models will be. How do I locate my credit cards and large model when they look at it?

The rules. Okay, they are talking about card status and card location.

So you have this. So the final input vector will be the original text vector plus the k phrase vector.

So you have a richer information beyond itself.

This can help your clustering. The second part of the model helps will be as a pseudo expert to to guide the clustering.

So in the traditional semi-supervised clustering the human will provide some constraints or information to help.

For example they will say this document cannot be in the same cluster as another document.

Instead of the human labeling model as the decision maker, they can do this a pseudo oracle to generate these constraints based on a few examples.

For example, you show something saying okay, B and B should never be linked,

then these should never be linked, and d and e, D and e should be linked or something like that.

Using this a few examples. Such models can provide the guidance automatically.

Other than just ask human expert to do everything.

So let's reduce the effort to for the manual a manual annotation with improving while improving the clustering supervision.

And finally this large model can correct your clustering mistake.

So step one will be you're still doing your regular clustering.

And and for the low confidence points that may belong to multiple clusters,

larger models can reevaluate and reassign points to the correct correct Cluster.

So? So you will say large, large language models can work on multiple perspectives of the cluster.

Uh, it can minimize it can reduce the user input, the augmentations for your input data.

And which means it's a representation enhancement that provides you the pseudo feedback to help the algorithms like K-means.

And finally, it can do some post clustering correction,

which means it can work on the low confidence assignments to to reevaluate or, you know, to do some other additional identification.

So the experiment shows that it works relatively well in many of the settings.

And, uh, it's it's a paper back in 2014.

So it's not too old, it's not too new, but it shows you that if you're doing clustering in real world settings,

lots of models can help a lot in this case. So here are the summaries for the clustering.

So a separate clustering is well represented.

It's a representative algorithm for unsupervised learning from the classification.

In real world it's very useful because you don't really get the labels for the real world.

And uh, and uh there's a there's many failure cases uh, for the, for the, for the, for clustering.

Okay. As a, as a, as a, as the end of this, uh, uh, you know, session, I want to talk more about why we are doing this awake to,

uh, block block two on the decision tree lineage neighbors, model metrics, and also the clustering.

Because when we are learning the large language model agents, you can say agent is a loop, right?

You need to, uh, you need to pick a large language model.

You do, you use a tool, call it and check results and repeat.

So actually It's a control. It's a it's not another language model.

It's actually a big loop.

And within the loops there's many things you need to make a decision like a decision tree, you need to find a similar case so that you can save time.

And we also talk about the matrix because you need to know what's a false positive.

What's a false negative. So that so that can help us to better understand.

And the and the routing within the larger model.

And agents tools are also useful. So which means what's the next decision to make.

So so in short so so in short what is the classical fundamental algorithms are part of the big picture.

And we're going to uh at a certain point we may revisit and we're talking more about deep learning and large multimodal related knowledge.

So in the next few lectures we're going to move to the deep learning.

But until this moment, you know, the linear models and their as a, as a components of deep learning.

You know how to frame a machine learning algorithms because experience learning algorithms and outcomes or the so-called,

you know, performance on the specific tasks, you know, loss and optimizations.

And what are the overfitting and underfitting?

We talk about multiple classical machine learning topics and how they come in handy even for the large language models.

And now, you know, uh, potentially the nonlinear model is very important because linear models can only represent something straightforward.

So we're going to move to the neural networks. There are the nonlinear powerful machine learning models.

And they're the building blocks for powerful, uh, you know, large language models, agents and other things.

I think that will conclude my second week lectures again.

I think this one should be the only ones that were being remote, because I have something really important to go.

Um, but again, share your questions on Piazza, go to the to office hours.

And I think again, I will I will see you guys in, uh, actually in two weeks in person.

Uh, student SDM one 2124 124.

Right. Uh, um, yeah, I think I think that's it.

And also, accidentally during this lecture, I find the, uh, the sound set for the auto morgue, which is,

uh, which is a bit bit which is a bit of a bittersweet moment because that was a field I was working in.

However, um, it's now fixed their own, uh, goodbye time.

But anyway. Goodbye. I will see you in two weeks.



`;

const CONCEPTS = [
  {
    tag: "📐 Formula",
    title: "Loss Functions: How You Measure a Bad Guess",
    body: `Last lecture ended with the linear model f(x) = Wx + b, and a problem: you can write down the model, but how do you know whether a particular W is any good? The professor's running example makes this concrete. Take three images — a car, a cat, a plane — and one shared weight matrix W plus bias b. A good W produces the highest score in the correct slot for all three. A bad W might produce the highest score in the "cat" slot for every single image, meaning everything gets predicted as a cat. Both matrices are valid; only one is useful.\n\nA loss function L is the tool that turns that intuition into a number. Given the ground truth (a one-hot vector like [0,1,0]) and your prediction, it measures how far apart they are. Several choices came up. Hinge loss is the classic margin-based option, though the professor waved it off as less important here. L1 loss takes the absolute difference between prediction and ground truth — no squaring. L2 (squared) loss takes the squared distance, then you average across all your training samples. Cross-entropy loss brings in probabilities and logarithms; it's deferred to a later lecture but it's the one that actually dominates modern deep learning.\n\nThe key demonstration was that the choice of loss is not cosmetic. The professor showed two weight matrices where L1 loss says W1 is better, but L2 loss says W2 is better — same predictions, same ground truth, opposite verdicts. Squaring punishes large errors disproportionately, so L2 cares more about avoiding any single big miss, while L1 treats all errors proportionally.\n\nExam insight: the fact that different loss functions can rank the same two models differently is exactly the kind of thing that makes a good conceptual question. Don't just memorize the formulas — know that each loss penalizes different things and that this changes which model you'd pick.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Empirical Risk Minimization: Why We Average the Loss",
    body: `There's a subtle but important gap between what you want and what you can actually compute. What you *want* is the optimal predictor — the true function mapping X to Y, whose expected loss over all possible data is as small as possible. What you *have* is a finite pile of training samples. You never see the true function, so you can never directly minimize the thing you actually care about.\n\nThe workaround is empirical risk minimization. Instead of minimizing true expected loss, you minimize the *average* loss across your training samples: compute the loss for the cat image, the car image, the plane image, and so on, then average. This is what every deep learning training loop is actually doing.\n\nThe justification is the law of large numbers. As the number of samples n grows large, the empirical average converges toward the expectation. So with enough data, minimizing average training loss is a reasonable proxy for minimizing true loss. That's the entire theoretical license for "just train on a lot of data."\n\nExam insight: if asked what a training loop optimizes, "the average loss over the training set" is the precise answer, and "because it approximates the true expected loss under the law of large numbers" is the justification. This also sets up the overfitting discussion — the whole danger is that the proxy and the real target come apart.`,
  },
  {
    tag: "💡 Concept",
    title: "Overfitting, Underfitting, and Occam's Razor",
    body: `The professor's toy example: you have five data points and two candidate curves. The blue one passes through every single point perfectly. The green one misses slightly on a couple. Which is better? The instinct says blue — it fits the data exactly. But then he adds three more real data points, and the blue curve, contorted to hit the original five, now completely fails on the new ones. The green curve handles them fine.\n\nThis is the core lesson: fitting your training data too well is a failure mode, not a success. A model that memorizes training data including its noise will not generalize. That principle has a name — Occam's razor: among competing hypotheses that explain the data, prefer the simplest.\n\nThis gives the two failure modes. Underfitting means the model is too simple to capture the real pattern; it does poorly even on training data (too much bias). Overfitting means the model is too complex, memorizes the training set, and can latch onto spurious correlations — the professor's example being a loan model that decides left-handedness predicts creditworthiness. Between them is appropriate fitting, which makes some training mistakes but captures the genuine trend.\n\nThe diagnostic signature of overfitting is a diverging pair of curves: as model complexity grows, training error keeps dropping while test error starts climbing back up. The turning point is the sweet spot. One clarification from the 2026-updated slides: memorization and overfitting are not the same thing and can come apart — in fine-tuning experiments across model families from 1.4B to 70B parameters, memorization rose sharply in early epochs, sometimes before validation perplexity was at its best. Validation error improving does not guarantee verbatim leakage isn't growing.\n\nExam insight: know that training error and test error move together at first and then diverge, and that the divergence point defines optimal model complexity. Be able to describe a concrete example of each failure mode.`,
  },
  {
    tag: "📐 Formula",
    title: "Regularization: L1, L2, and Elastic Net",
    body: `If simpler models generalize better, you need a way to actually push the optimizer toward simpler models. Regularization does this by bolting a second term onto the loss function. The full objective becomes: data loss (how well the model fits training data) plus a penalty term (how complex the weight matrix is).\n\nThe two terms pull in opposite directions on purpose. The first says "fit the data." The second says "but keep the weights small." What counts as "complex" here is just the magnitude of W — very large weight values mean the model is capable of extremely sharp, contorted decision surfaces, while smaller weights force smoother behavior where small input changes don't produce wild output swings.\n\nL2 regularization penalizes the squared magnitude of the weights; in least-squares regression it's known as ridge regression. L1 regularization penalizes the absolute values and is known as lasso. Elastic net combines both. The professor flagged one property as genuinely useful: L1 produces sparse solutions — the weight matrix ends up with many exact zeros. That's valuable for high-dimensional problems because you can store a compressed representation and the surviving nonzero weights are more interpretable. L2 does not have this property.\n\nOne naming caution from the slides: the L2 penalty matches weight decay under plain SGD, but not under the decoupled form used in AdamW — so "L2 regularization" and "weight decay" aren't automatically interchangeable terms.\n\nExam insight: know which is which (L1 = lasso = absolute = sparse; L2 = ridge = squared = not sparse) and be able to state why the sparsity property matters. Also know that dropout and batch normalization are also regularization techniques, coming later in the course.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Optimization: Random Search, Analytical Solutions, and Gradient Descent",
    body: `Once you have a loss function, you need to actually find the W that minimizes it. Three approaches, in increasing order of usefulness.\n\nRandom search means sampling many candidate weight matrices and keeping whichever gives the smallest loss. It works in principle and is trivially simple, but it's hopeless as dimensionality grows — you'd need an astronomical number of samples to stumble onto anything good.\n\nThe analytical solution actually exists for the linear least-squares case: the optimal W is (Xᵀ X)⁻¹ Xᵀ y*. This looks clean and closed-form, and if you remember your calculus you can derive it. The problem is computational: inverting Xᵀ X is extremely expensive for large matrices, and it requires Xᵀ X to actually be invertible, which isn't guaranteed. When you have more unknowns than equations, the system is underdetermined and has many feasible solutions — which is one motivation for regularization, since the penalty term picks out a particular well-behaved solution.\n\nGradient descent is what's actually used. The idea: start from some initial W, compute the derivative of the loss with respect to the weights, and step in whichever direction makes the loss smaller. In one dimension that's a derivative; in higher dimensions the gradient is the vector of partial derivatives. You take a small step — controlled by the learning rate — recompute, and repeat, walking gradually downhill from high loss toward the minimum.\n\nThe professor flagged that variants (stochastic gradient descent, batch and mini-batch methods) and failure modes (getting trapped in local minima, exploding gradients, inexact gradients) are all coming later in the semester.\n\nExam insight: know why the analytical solution is impractical despite existing — matrix inversion cost and invertibility — since that's the specific reason the entire field runs on gradient descent instead.`,
  },
  {
    tag: "💡 Concept",
    title: "Linear Separability and the Need for Non-Linearity",
    body: `The perceptron and the linear model can only draw a straight boundary. When two classes can be separated by a single line (or hyperplane in higher dimensions), they're linearly separable, and a linear classifier works. But the professor showed the classic counterexample: red and blue points arranged so that no straight line anywhere in that two-dimensional space can separate them.\n\nThe fix is transformation. If you apply a non-linear transformation to the data — a rotation, or something more elaborate — points that were tangled in the original coordinate system can become cleanly separable in the new one. A linear classifier that failed before now works, because you changed the space rather than the classifier.\n\nThis is the entire architectural argument for deep learning. A single linear unit is limited. But if you stack many linear units with non-linear transformations between them, you get a system that can carve out arbitrarily complex decision surfaces. The linear model isn't wrong — it's just too simple on its own for real-world data, and it becomes the building block of something much more expressive.\n\nExam insight: be able to explain why non-linearity between layers is necessary. A stack of purely linear layers collapses mathematically into a single linear layer, so without the non-linear activation functions, depth buys you nothing. That's the setup for the activation-functions lecture later in the course.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Decision Trees: Greedy Splitting and When to Stop",
    body: `The running example is loan risk: given credit history (excellent/fair/poor), income, term length, and personal information, predict whether a loan application is safe or risky. A decision tree answers this by asking a sequence of questions, each one splitting the data into smaller buckets, until it reaches a leaf that makes a prediction.\n\nTraining works from historical data. With 40 samples — 22 safe, 18 risky — you ask which feature to split on first. Split on credit history, and something useful happens: everyone with excellent credit turns out to be safe, so that branch is finished immediately. The fair and poor branches are still mixed, so they need further splitting.\n\nWhich feature should you split on? Same framework as before — pick a loss function and minimize it. Here the natural choice is classification error: incorrect predictions divided by total samples. The professor worked the numbers: splitting on credit gives roughly 0.20 error, splitting on term gives 0.25, so credit is the better first split. Other criteria exist too — Gini index, mutual information — and they're broadly similar in spirit.\n\nThe algorithm is greedy: at each node, pick the single best feature by your criterion, split, then recurse on any leaf that isn't yet pure. The critical caveat is that greedy is not optimal. Learning the smallest possible decision tree is NP-hard, and a split that looks best right now may not be part of the best overall tree.\n\nWhen do you stop? Natural conditions: all samples in a node share the same label, or you've exhausted all features. But those alone lead straight to overfitting on real data with thousands of features. So a third criterion is added — stop when the classification error stops meaningfully decreasing — plus the practical control of capping max depth.\n\nExam insight: "greedy, and greedy is not optimal because finding the smallest tree is NP-hard" is a compact and quotable answer. Also know that for decision trees, max depth is the primary knob controlling model complexity.`,
  },
  {
    tag: "💡 Concept",
    title: "Model Complexity vs. Data Complexity",
    body: `People throw around "my model is complex" and "my data is complex" as if they mean the same thing. They don't, and the professor spent real time separating them.\n\nModel complexity — the capacity of a model to fit patterns — comes down to two things. First, the number of learnable parameters: how large the weight matrix is, how many nodes the tree has. Second, the value range those parameters can take. A weight matrix restricted to zeros and ones has far less capacity than one ranging from -1000 to 1000, even with identical dimensions, because the wider range gives more freedom to express complex relationships. (There's a more rigorous framework called VC dimension, which the professor named but explicitly declined to cover.)\n\nData complexity is a separate axis and is widely misunderstood. It's not simply "how many rows do I have." You could have an enormous number of samples that are all essentially identical, or many features where each is just a linear transformation of another. That's 30GB of data with almost no actual information in it. What matters is genuine diversity — real variation in samples and non-redundant features — not raw volume.\n\nThe useful framing is that these two race toward each other. Your data has some intrinsic complexity; your model has some capacity. The sweet spot is where they meet. Too much model for your data is overfitting; too little is underfitting. In practice you never know the answer in advance, which is exactly why model selection exists as a discipline.\n\nExam insight: the distinction between "number of parameters" and "range of parameter values" as two separate contributors to model capacity is a precise, testable point that's easy to overlook.`,
  },
  {
    tag: "💡 Concept",
    title: "Ensembles: Bagging, Random Forests, and Boosting",
    body: `One deep decision tree is unstable. Change the training sample slightly and its predictions move a lot — that's high variance. The ensemble argument is simple: fit many trees and average them, and the individual quirks cancel out, giving a more stable result.\n\nBias is the error remaining when the fitted rule is too simple for the underlying pattern. Variance is how much predictions shift when the training sample changes. A single deep tree can be very good or very bad depending on the draw; averaging many of them produces something less exciting but far more reliable.\n\nBagging (bootstrap aggregating) is the mechanism: draw n rows with replacement, fit a tree, repeat. Each bootstrap sample contains about 63% unique rows (from 1 - (1 - 1/n)ⁿ → 1 - 1/e), and the rows left out form that tree's out-of-bag set — free validation data. Aggregate by voting for classification or averaging for regression. A random forest is bagging plus a random subset of features considered at each node.\n\nThere's an important asymmetry between the two main knobs. Increasing max_depth increases each tree's capacity and can overfit. Increasing n_estimators just averages more trees, converging toward a limiting forest vote — more trees don't overfit the way deeper trees do.\n\nBoosting works differently: rather than averaging independent trees, it fits each new model to the residuals of the current ensemble, sequentially. XGBoost, LightGBM, and CatBoost are three implementations of one gradient-boosting family, differing in engineering and defaults rather than fundamental algorithm.\n\nOn whether any of this still matters in 2026: the slides cite competing results — TabPFN-3 claims a single forward pass beats tuned ensembled baselines, while TabArena reports boosted trees remain strong contenders. The professor's practical take is that it's a budget question. You can't put expensive GPUs in a tire factory, but you can run XGBoost on lightweight hardware.\n\nExam insight: know which knob converges (number of trees) and which overfits (tree depth) — the slides call this out explicitly as a takeaway.`,
  },
  {
    tag: "🧭 Not on Midterm",
    title: "Detour: Tree Search Inside a Language Model",
    body: `NOT ON THE MIDTERM — the professor said this directly in the recording and the slides repeat it: "Nothing here is required for the midterm; it explains why the idea persists." Read this for interviews and for understanding why classical ML still matters, not for exam prep.\n\nThe hook is an analogy. A decision tree is built greedily and never revisits a split. So what happens if a search *can* revisit? That question turns out to describe a real line of LLM reasoning research.\n\nChain of Thought came first. Instead of asking a model a hard question and taking whatever it blurts out, you ask it to reason in explicit steps. The professor's example: Jane gives two flowers to her mom, then three to her dad — a human decomposes that into small pieces rather than jumping to an answer. Prompting the model to "think in steps" produces intermediate results, and answers that were wrong become right. The benefits are that it allocates additional computation to harder problems, and the intermediate steps are interpretable. It was also notably robust: at a time when prompt engineering was a real skill because models were painfully sensitive to phrasing, CoT worked across different phrasings and different models.\n\nBut CoT has a structural limit, and the Game of 24 exposes it. You're given a few numbers and must combine them with basic operations to reach 24. CoT decomposes the problem into steps — but it's a single straight line from input to output, with no lookahead and no backtracking. You commit to each step without knowing whether it leads anywhere. Even GPT-4 with chain of thought struggled here.\n\nThe framing the paper reaches for is Kahneman's System 1 / System 2 — fast automatic reasoning versus slow deliberate reasoning — with autoregressive generation cast as System 1, since the model just keeps emitting tokens. The professor was openly skeptical of this framing, noting people like finding fancy connections to human cognition and he isn't sold on it. Worth remembering that he flagged it rather than endorsed it.\n\nTree of Thoughts is the actual mechanism: at each reasoning step, generate multiple candidate thoughts, evaluate them (e.g. ask the model whether a given state could still plausibly reach 24), and search across branches instead of committing to one path. The recipe has four parts — what counts as a thought, how to generate thoughts, how to evaluate them, and what search algorithm to use. That's a decision tree's branching structure applied to reasoning. It beats CoT on Game of 24 and on creative writing, and it requires no retraining — it's purely about the search structure wrapped around generation.\n\nWhere this landed by 2026: frontier models now do this internally in two shapes. One-pass reasoning models backtrack and self-verify inside a single generation, sometimes producing multiple complete answers and checking them against each other — you never see it happen. Partial-tree approaches branch, score, and prune before completion, which is where Tree of Thoughts itself sits. The "reasoning budget" controls you see on GPT and Gemini are knobs on exactly this internal branching and evaluation.\n\nThe real point, and the professor's stated reason for teaching classical ML at all: these old algorithms aren't in the syllabus because people still run them directly. They're there because their mechanisms keep reappearing in frontier systems.`,
  },
  {
    tag: "💡 Concept",
    title: "Model Metrics: Why Accuracy Lies on Rare Events",
    body: `Loss tells you how the model trains; metrics tell you whether it's actually useful. And in real deployments you're usually juggling several at once — model-specific metrics like accuracy or mAP, plus business ones like revenue and inference latency. The professor's analogy: choosing a model is like buying a car, where safety, price, and running costs all matter simultaneously.\n\nFor binary classification: accuracy is correct predictions over total. Precision is true positives over predicted positives — of everything you flagged, how much was right. Recall is true positives over actual positives — of everything that was real, how much did you catch. F1 is their harmonic mean, 2pr/(p+r). AUC-ROC measures how well the model separates the two classes across all decision thresholds, reading 1.0 for perfect separation and around 0.5 for random guessing.\n\nThe critical warning is about rare positives. If you're predicting who wins the lottery and you simply predict "nobody," you're nearly 100% accurate and completely useless. Same for rare disease screening: predict everyone healthy, enjoy excellent accuracy, miss every actual patient. In the real world the valuable events are frequently the rare ones.\n\nThe 2026 slides push this further with a concrete case. Take 10,000 cases with 1% positives. Cut at the top 1,000 and you get recall 1.00 but precision only 0.10. ROC-AUC reads a comfortable 0.954 while PR-AUC reads 0.098 — because chance is 0.50 for ROC-AUC but only the positive rate (0.01) for PR-AUC. The safety-guardrail example: in a one-month shadow run on live traffic, 5.5% of exchanges escalated and 0.05% were finally flagged — a 1-in-2000 positive rate, where accuracy and ROC-AUC look fine while false alarms decide whether the system can actually ship.\n\nExam insight: be ready to explain why accuracy is the wrong metric for imbalanced problems, and know that precision and recall trade off against each other. The "predict everyone healthy" example is the cleanest way to make the point.`,
  },
  {
    tag: "🏗 Foundation",
    title: "k-Nearest Neighbors: The Algorithm With No Training",
    body: `kNN is almost aggressively simple. Store all your training data. When a new point arrives, find the k closest training samples using some distance function, take a majority vote over their labels, and return that as the prediction. There is no training phase at all — which means, amusingly, there's no training error either, because there's no training.\n\nTwo things must be chosen by hand. First, k itself. The professor walked through an example where k=2 gives positive, k=3 flips to negative, and k=5 flips back to positive — the same query point, three different answers. Second, the distance metric: Euclidean (straight-line geometric distance) is most common, Manhattan (absolute differences, no squaring) is another, and you can define your own for the problem at hand.\n\nWhat k controls is model complexity, and the Fisher iris demonstration makes it visual. At k=1 the decision boundary is jagged and intricate, contorting around individual points. As k rises through 5, 20, 50, 100, the boundary smooths out progressively. So small k means overfitting (highly local, sensitive to noise) and large k means underfitting (in the extreme, including all training data leaves no useful signal at all).\n\nThe trade-offs: kNN is intuitive, explainable, needs no retraining, and is provably near-optimal in terms of true error rate. But it's computationally expensive — you must store everything, O(ND), and finding the k closest points in D dimensions costs roughly O(ND + N log k). It's also sensitive to feature scale.\n\nOne 2026 connection worth knowing: kNN survives inside modern LLM systems as semantic caching. Store each prompt vector with the model's answer; for a new prompt, find the nearest cached one and reuse the answer if similarity clears a threshold. The threshold is the whole design — a false hit returns a wrong answer while a miss only costs time and money. The kNN-LM paper (2020) applies the same idea to next-token prediction, interpolating between the neural model's prediction and retrieved nearest neighbors from a data store.\n\nExam insight: "small k overfits, large k underfits" is the one-line answer, and knowing that the cost lives at prediction time rather than training time is the other main takeaway.`,
  },
  {
    tag: "💡 Concept",
    title: "Choosing Hyperparameters: Validation and Cross-Validation",
    body: `k and the distance metric are hyperparameters — settings about the algorithm itself that you choose rather than learn. Parameters are what the algorithm learns from data (like W and b); hyperparameters are what you pick before training starts. The professor walked through four escalating ideas for choosing them.\n\nIdea 1: choose hyperparameters that work best on training data. Bad — for kNN, k=1 always achieves perfect training accuracy by definition, which tells you nothing.\n\nIdea 2: choose what works best on test data. Worse, and the slides say "never do this." You've leaked test information into your model choice, so you no longer have any honest estimate of performance on genuinely new data.\n\nIdea 3: split into train, validation, and test. Tune on validation, keep test untouched until the very end. This works.\n\nIdea 4: cross-validation. Split training data into folds — say five — and rotate which fold serves as validation, averaging results across rounds. This uses limited data more efficiently. It's genuinely useful for small datasets but rarely used in deep learning, where datasets are large enough that a single holdout split is fine.\n\nOne assumption underpins all of this: train, validation, and test data must come from the same distribution. If you train on cats and dogs but test on cars and planes, none of this machinery means anything.\n\nThe CIFAR-10 demonstration ties it together: five-fold cross-validation across values of k shows accuracy rising, peaking around k≈7, then declining. There's a sweet spot, and cross-validation is how you find it. The 2026 addition is a warning about contamination — an audit of 15+ models across six benchmarks found test-set contamination from 1% to 45%, and across 10 models, 5 benchmarks, and 20 mitigation strategies, none balanced fidelity against contamination resistance. Rewording a leaked question is not a reset.\n\nExam insight: know all four ideas and specifically why ideas 1 and 2 fail. The "k=1 always works perfectly on training data" line is the exact reason idea 1 collapses.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Clustering and k-Means: Learning Without Labels",
    body: `Everything so far has been supervised — you had labels. Clustering drops them. You have documents, or customers, or images, and you want to discover structure without anyone telling you what the groups are. Input is vectors; output is cluster assignments.\n\nThis matters because real-world labels are expensive and often nonexistent. The professor's consulting story makes it concrete: a lottery company had purchase data but no labels. Clustering revealed distinct patterns — some customers made a single large purchase, others returned repeatedly with small buys — which let the company design different marketing strategies per group. Nobody labeled those categories in advance; the structure was discovered.\n\nA cluster is defined by its center and its shape/spread, though for simplicity most methods use only distance to center. The k-means algorithm is four steps: initialize k cluster centers randomly; assign each observation to its closest center; recompute each center as the mean of its assigned observations; repeat until convergence. Note that these centers are usually hypothetical points, not actual data samples.\n\nThe limitations follow directly from using only distance-to-center. That implicitly assumes clusters are spherically symmetric, so k-means fails on disparate cluster sizes, overlapping clusters, and differently shaped or oriented clusters. Spiral shapes and clusters-within-clusters break it entirely. You also have to pick k in advance, which is genuinely hard when the whole point is that you don't know the structure.\n\nDespite all that, k-means remains probably the most widely used clustering algorithm, and it operates at serious scale — the CuraWeb pretraining corpus (June 2026) used k-means for semantic deduplication across billions of documents with roughly 49,000 clusters, though the professor noted that result is arXiv-only and contested. The other 2026 development is LLM-guided few-shot clustering, where a language model helps at three stages: enriching text representations with generated key features before clustering, acting as a pseudo-expert providing must-link/cannot-link constraints during clustering, and correcting low-confidence assignments afterward.\n\nExam insight: know the four k-means steps in order and be able to name its failure modes. The connection between "only center matters" and "assumes spherical clusters" is the reasoning that generates all the failure cases.`,
  },
];

const VOCAB = [
  { term: "Hinge loss", def: "A margin-based loss function; one of several options for measuring prediction error, mentioned but not emphasized." },
  { term: "L1 loss", def: "Absolute difference between prediction and ground truth — no squaring, so all errors are penalized proportionally." },
  { term: "L2 (squared) loss", def: "Squared distance between prediction and ground truth, averaged across samples. Punishes large errors disproportionately." },
  { term: "Empirical risk minimization", def: "Minimizing average loss over training samples as a proxy for the true expected loss, justified by the law of large numbers." },
  { term: "Regularization", def: "Adding a penalty on weight magnitude to the loss, biasing the model toward simpler solutions that generalize better." },
  { term: "Ridge regression (L2 penalty)", def: "Regularization penalizing squared weight magnitude. Matches weight decay under plain SGD but not under AdamW's decoupled form." },
  { term: "Lasso (L1 penalty)", def: "Regularization penalizing absolute weight values; produces sparse weight matrices with many exact zeros." },
  { term: "Elastic net", def: "A regularization scheme combining both L1 and L2 penalties." },
  { term: "Occam's razor", def: "Among competing hypotheses that explain the data equally well, prefer the simplest one." },
  { term: "Overfitting", def: "Model too complex; memorizes training data including noise, so training error falls while test error rises." },
  { term: "Underfitting", def: "Model too simple to capture the underlying pattern; performs poorly even on training data (high bias)." },
  { term: "Generalization error", def: "Another name for test error — how the model performs on data it has never seen." },
  { term: "Gradient descent", def: "Iteratively stepping the weights in the direction that decreases loss, with step size controlled by the learning rate." },
  { term: "Learning rate", def: "The hyperparameter controlling how large a step gradient descent takes on each update." },
  { term: "Linear separability", def: "Whether two classes can be separated by a single straight line or hyperplane in the current feature space." },
  { term: "VC dimension", def: "A formal measure of model capacity; named in lecture but explicitly not covered in depth." },
  { term: "Classification error", def: "Number of incorrect predictions divided by total samples — the splitting criterion used for decision trees here." },
  { term: "Gini index / mutual information", def: "Alternative decision tree splitting criteria beyond simple misclassification rate." },
  { term: "Greedy algorithm", def: "Picking the locally best option at each step without revisiting; how decision trees are built, and not guaranteed optimal." },
  { term: "Bagging (bootstrap aggregating)", def: "Draw n rows with replacement, fit a tree, repeat, then aggregate by voting or averaging. Each sample holds ~63% unique rows." },
  { term: "Out-of-bag set", def: "The rows left out of a given bootstrap sample, usable as free validation data for that tree." },
  { term: "Random forest", def: "Bagging plus a random subset of features considered at every node split." },
  { term: "Boosting", def: "Sequentially fitting each new model to the residuals of the current ensemble, rather than averaging independent models." },
  { term: "XGBoost / LightGBM / CatBoost", def: "Three implementations of one gradient-boosting family, differing in engineering and defaults rather than core algorithm." },
  { term: "Precision", def: "True positives / (true positives + false positives) — of everything flagged, how much was correct." },
  { term: "Recall", def: "True positives / total actual positives — of everything real, how much was caught." },
  { term: "F1 score", def: "Harmonic mean of precision and recall: 2pr/(p+r)." },
  { term: "AUC-ROC", def: "Area under the receiver operating characteristic curve; measures class separation across thresholds. 1.0 is perfect, ~0.5 is random." },
  { term: "PR-AUC", def: "Area under the precision-recall curve. Its chance line is the positive rate, not 0.5 — critical for rare-event problems." },
  { term: "k-Nearest Neighbors (kNN)", def: "Classify a new point by majority vote among its k closest training samples. No training phase; all cost is at prediction time." },
  { term: "Euclidean / Manhattan distance", def: "Straight-line geometric distance vs. sum of absolute coordinate differences — two common kNN distance metrics." },
  { term: "Hyperparameter", def: "A setting about the algorithm itself that you choose rather than learn (e.g. k, learning rate, max depth)." },
  { term: "Cross-validation", def: "Splitting training data into folds and rotating which serves as validation, averaging results. Useful for small datasets." },
  { term: "Clustering", def: "Unsupervised task of discovering group structure from inputs alone, with no labels provided." },
  { term: "k-means", def: "Initialize k centers, assign points to nearest center, recompute centers as means, repeat until convergence." },
  { term: "kNN-LM", def: "A 2020 method interpolating a neural language model's next-token prediction with retrieved nearest neighbors from a data store." },
  { term: "Semantic caching", def: "Storing prompt vectors with their answers and reusing an answer when a new prompt's nearest neighbor clears a similarity threshold." },
  { term: "Chain of Thought (CoT)", def: "Prompting a model to reason in explicit intermediate steps; a single linear path from input to output." },
  { term: "Tree of Thoughts (ToT)", def: "Extending CoT with branching — generate multiple candidates per step, evaluate them, and search, allowing lookahead and backtracking." },
  { term: "Game of 24", def: "Benchmark task (combine given numbers with basic operations to reach 24) that exposes CoT's lack of lookahead and backtracking." },
  { term: "System 1 / System 2", def: "Kahneman's fast-automatic vs. slow-deliberate reasoning framing, used to motivate ToT. The professor flagged it as a loose analogy he isn't sold on." },
  { term: "Reasoning budget", def: "The user-facing control on frontier models governing how much internal branching, search, and self-evaluation happens before answering." },
];

const EXAM_TIPS = [
  { tip: "Tree of Thoughts / Chain of Thought is explicitly NOT on the midterm", detail: "The slides state directly: 'Nothing here is required for the midterm; it explains why the idea persists.' The professor repeated this in the recording. It's framed as an analogy about search, not a property of trees. Learn it for interviews and context, not for the exam.", priority: "HIGH" },
  { tip: "Know why accuracy fails on imbalanced data", detail: "The lottery and rare-disease examples are the cleanest illustrations: predict 'nobody' or 'everyone healthy' and you get near-perfect accuracy with a useless model. Be ready to explain why precision, recall, F1, or PR-AUC are needed instead.", priority: "HIGH" },
  { tip: "Small k overfits, large k underfits — know the direction", detail: "For kNN, k controls model complexity. k=1 gives a jagged, highly local boundary (overfitting); very large k smooths it toward uselessness (underfitting). The Fisher iris progression from k=1 to k=150 is the visual proof.", priority: "HIGH" },
  { tip: "Never tune hyperparameters on the test set", detail: "The slides say 'Never do this!' in as many words. Know all four ideas and the specific failure of each: idea 1 fails because k=1 is always perfect on training data; idea 2 fails because you lose any honest estimate of new-data performance.", priority: "HIGH" },
  { tip: "L1 = lasso = sparse; L2 = ridge = not sparse", detail: "A very likely factual question. L1 penalizes absolute values and drives weights to exact zero, which is useful for high-dimensional problems and interpretability. L2 penalizes squared magnitude and shrinks weights without zeroing them.", priority: "MEDIUM" },
  { tip: "Different loss functions can rank the same two models differently", detail: "The professor's worked example showed L1 preferring W1 while L2 prefers W2 on identical predictions. This demonstrates that loss choice is a real modeling decision, not a formality.", priority: "MEDIUM" },
  { tip: "Know why the analytical solution isn't used despite existing", detail: "(XᵀX)⁻¹Xᵀy* is the closed-form answer for linear least squares. It's impractical because matrix inversion is prohibitively expensive at scale and XᵀX may not be invertible. This is the specific reason gradient descent dominates.", priority: "MEDIUM" },
  { tip: "Decision trees are greedy, and greedy is not optimal", detail: "Finding the smallest decision tree is NP-hard. The best split now may not belong to the best overall tree. Max depth is the main complexity knob.", priority: "MEDIUM" },
  { tip: "For ensembles: more trees converges, deeper trees overfits", detail: "n_estimators approaches a limiting forest vote and doesn't overfit the way max_depth does. The slides list this asymmetry as an explicit takeaway.", priority: "MEDIUM" },
  { tip: "Know the four k-means steps in order and its failure modes", detail: "Initialize centers → assign to nearest → recompute centers as means → repeat. Because only distance-to-center matters, it assumes spherical clusters and fails on disparate sizes, overlapping clusters, and differently shaped/oriented clusters.", priority: "MEDIUM" },
  { tip: "Model complexity has two components, not one", detail: "Number of learnable parameters AND the value range those parameters can take. A binary {0,1} weight matrix has far less capacity than the same-sized matrix ranging -1000 to 1000.", priority: "LOW" },
  { tip: "Memorization and overfitting are distinct phenomena", detail: "A 2026 slide addition: validation error can improve while verbatim memorization grows. In fine-tuning across 1.4B-70B models, memorization rose sharply in early epochs, sometimes before validation perplexity peaked.", priority: "LOW" },
];

export default function Lecture2_ClassicalML({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>AUG 31 · LECTURE 2 · RECORDED</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Classical ML</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Loss functions and optimization, regularization and overfitting, decision trees and ensembles, model metrics, k-nearest neighbors, and clustering — the classical foundations that still shape how modern systems are built.
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
          lectureTitle="Classical ML"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
