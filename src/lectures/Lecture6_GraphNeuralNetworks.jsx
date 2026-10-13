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
you know, when you already come to the parking at around 1130, there's no space for you under the sixth floor.
However, I find a lot of space on the fourth and fifth floor. I was thinking what happens?
Like because of the weather, it's too hot for something. Then I realize that there must be something happen.
And then I realized I didn't realize this full recession until my colleague told me so.
It's very admirable that you're here, not at Florida or, you know, Alaska for something else, which is great.
Or maybe someone already booked a flight after the class today. Uh, that would be nice.
I mean, you can do the early departure. Uh, so we're going to keep talking more things.
However, we're going to talk a few admin stuff.
First assignment one is already released and you know this assignment is slightly tricky.
So that's why we ask students. We ask everyone to only post your questions as a private post other than in that primary post.
And we're going to answer your questions. You get a lot of time to work on this.
I mean, you have at least another three weeks, right? Roughly three weeks today it's the fifth, so you have another exactly three weeks.
Um, it should be simple. And also at the same time, we don't prohibit any use of AI.
You can use whatever you want. However, it's also totally fine for you if you want to code anything by yourself.
It's your personal choice. And the final graded part will be this report is only two pages, no more than two pages.
And you also upload your code. And we're going to do the grading and on the unreasonable basis, so don't worry too much about it.
Um, again, just trying to use the private as opposed other than the, uh,
you just do the other post and under the assignment folder and we're going to answer your questions.
Uh, the proposal feedback is almost there and is in the progress to put their name in that project object.
And you will, uh, mostly ask them questions for your projects.
And, uh, and again, like for the graders, the only, the only thing I tell them is to make sure the feedback is, uh, is written by human.
It can be short, but it's written by human, because otherwise I would just, like,
run API to grade out your report other than hire another, another ten people for doing this.
Um, yeah. Besides this admin stuff.
Any questions before we even go to the content today?
Uh, I know many people will ask, do we have a quiz today? Right. Because look like we have a lower attendance at this moment.
It looks fine, but maybe in the second part of the the class we will see how things will go.
But we're going to be dynamic, you know.
Uncertainty is one of the beautiful stuff in this world. That's how you actually make a profit.
Okay. We're going to continue our graph neural network.
However we will potentially start from the first page again because we're adding more content to to this graph neural network.
So if you're using the old slides you can go to the Google Drive to to get the new slides.
It's much more enriched. So that's why potentially you want to do this if you haven't.
Um, so again, like in the last few weeks,
we talk about general deep neural networks and convolutional neural network and also LSTM recurrent neural network and also transformers.
So basically no structure to image to sequential data.
However, graph is another type of the data structure or data.
Data structure or this word structure because everything is represented as a word.
And a graph is also another grid representation.
As you can say, it's much more complex. It's not as regular or structured as other things.
So we're going to talk about three things how to represent the graph and how to use graph neural network for learning,
and finally how to use the graph for large language models and agents.
So how they're hard, they're connecting to each other.
Again we'll talk about the graph last time for a few applications, including events computer disease,
economy, citation, internet, etc., etc. also including molecule, which is one of the most important things.
For example, this this year 2026, there's a lot of like a fancy AI for science startup.
You're just doing like a pure therapeutic A science, which means design a new drug using the.
I mean, in the past, people are using graph neural network for designing the new drugs.
However, nowadays everything is foundation models, which means if you don't have a foundational models,
your startup's not is not as sexy as people are expecting, unfortunately.
And uh, so so basically so basically.
So basically one of the interesting parts for the graph is that recall when we're doing the image with a convolutional neural network.
So each pixel matters and each pixel at a different places matters.
Their order actually also matters which means you couldn't simply swap different pixels.
However, for the graph neural network or for graphs,
there will be something or going to show you later that you can actually change the order and the final result won't change.
And another thing we mentioned last time is that recall the image is a grid, right?
Like they connect to each other in a very good structure rate.
However, this is also a graph, right? If you if you consider this dot connect to another dot, another dot and this one connect to four other dots.
So this actually the image is also a graph. However it's a it's a very it's a very standard graph.
And also text is also a graph. So we're just trying to show you the example of the graph using this road network.
So basically if we want to predict so you have a four different roads A, B,
C and D you want to predict the congestions or whether the road A will be delayed in the next five minutes.
And you have some number here. So if you only look at a you know itself, you can say that okay, look like this will have a slight delay.
However, if you unfortunately pick the road B, then potentially if you add everything together, it will be much more serious congestion.
And if you pick a CD that will be even even worse. So basically the real world is it's not a single node application like everything's connected.
So basically we give some meaning to this. 1234 on this graph.
So the one just the mean we observed ten vehicles down this road and the two just mean 20 vehicles and 40, 80 etc..
So just mean so so we just give some meaning of these attributes.
So on each of these roads we just represent them as one, two, four, eight regarding how many vehicles on this road.
So that this can help us to predict whether there will be further delay on different roads.
So so basically what happens for the graph is that we observe what's happening now,
and we're going to predict later and possible potentially we also get some extra inputs.
So if we only look at this a simple graph itself, you only see ten vehicles down the road.
A however,
if you can see that the neighbors there's 20 vehicles on the connected road be and 40 vehicles on the connected road C so you get a bigger picture.
And so so so so. So if you if you can only choose B or C to go to the same place, potentially you're going to.
You should go for B because look like it's less congested. Uh we're we're going to use this example again.
Again. However, in the very first place we're just showing you the this is a very simple example in illustration.
Um, last time we also talked about for a general graph, there's a multiple uh there's multiple elements.
The first element is a node, right. Like you have a multiple things connect to each other.
The how to connect them is using something called edge. They can have the directions or they don't have the directions like a to B, a to z or b a b.
It doesn't matter. Sometimes there's a specific direction from A to b, a to z.
Uh, that's also that also makes sense. And on each of these nodes you get and also on each of the edge.
You can get something called a feature.
So which means on the node maybe you can use this one to for a to represent how many vehicles on the road and maybe on the edge you can say,
uh, how how how wide the the intersection look like or something like that.
Or is there any traffic or is there any accident on the intersection between node A and B, for example, this is edge.
And we can potentially add a feature here to show, okay, if there's an accident between A and B, uh,
in the in the last part of the lecture later we're going to talk about how the large language
models are using graph and how the graph can be combined with large language models nowadays.
Um, and also another as another. Quick another quick recap.
If you remember, we talk about that graph can be undirected or directed, which means undirected just mean you connect the dots.
They don't. There's no specific direction saying you must go from A to D or D to A.
You can go from either way. But however in certain in certain cases there's a directed graph, which means you can only go from A to B or B to A.
However, I mean the a to b doesn't equal to b to A,
which means maybe they charge different a different dollars to to travel from A to B and a different number of dollars from B to A.
So something like that. Uh, some other things.
Some other things. I think let me see. What are we going to discuss.
Right. We also last time we also quickly talk about for machine learning for the for
the graph learning there will be there can be multiple level of the task.
Right. Like because you have such a graph, uh, you have you can you can you can either predict, for example, what's the class of a, b, C, d, e, F, g.
And you can also predict whether there's a link between A and B, for example,
whether A is a friend of B or whether A is connected to be something like that.
You can predict. You can also predict the numbers on this specific edge.
And finally, the entire graph can be can make a prediction.
For example, you can if this is a molecule, if this is a representation of the molecule, you can predict what the functionalities of this molecule.
So you can predict a lot of different things for a graph and.
Right. For example, we show that you can predict delay risk for road A as a node level prediction.
You can also predict whether two objects as a relationship, for example A or a road A and B are connected or not.
And also you can do this a whole graph output, which means you can predict the label for the complete network,
saying look at this specific region of the Los Angeles city, whether it's congested or not, whether there's a bit of traffic.
However, I don't think that makes sense for LA, because if you predict the congestion for LA, it's almost true for everywhere.
Um, right. I mean, I think I mentioned that last Friday, like each Friday I was driving to LAX to pick up my pickup, my family.
And unfortunately, every Friday, even at 10 or 11 p.m., it was a very bad traffic.
I don't know what happens to this airport and city. I don't understand and hopefully for in two years for the 2028 Olympics, things can be better.
What I heard is that they won't allow people to drive to LAX anymore.
You need to take the public transport, go to a, you need to use the public transportation around LAX.
That's what I learned, but I'm not sure whether that's true or not. True or true or false.
We will say, but hopefully during that time I will be out of the city.
So I don't need to be trapped for everything. Uh, okay.
Again, we mentioned you can do this node level prediction.
You can also do link level prediction to say whether A and B are connected or there's running attributes around A and B.
And also you can. The good example last time we covered is about recommendation system for example.
You and your friends and you may enjoy the same type of movies or food or something.
For example, if I, if I, if I look around, maybe I will say a lot of people are just wearing the shirts from Viterbi.
So which means if you if you're in this classroom, it's more likely to happen.
Which means because there's similarity.
There's a fundamental reason that people are more likely to wear better be shirts in this room because you're connected from the major,
from the class, from whatever. Uh, so in the past, I think 5 to 10 years ago, a lot of, like, a lot of, like,
industry are making great money using graph, for example, Pinterest, they're using this graph based recommender system.
And actually for Pinterest, why this matter is because a few years back, they they acquired the firm from a Stanford professor.
His name is Yuri Leskovac, who is the original developer of this slides.
And Pinterest acquired his the firm and he became the chief scientist of Pinterest.
So Pinterest did a lot of like a graph based recommendation.
And many of these great figures are made by Yuri and his students, which I was visiting him during the summer.
So I borrowed his slides a bit. But we add a lot of new things as well.
And another very hot topic nowadays it's biomedical graph, and I'm not sure whether you actually paid attention to this.
So actually for 2026 there's a lot of like AI for science startups, for example,
they're trying to predict whether certain drugs or the medicines are going to work well, they're going to predict.
And also people are doing this physical, physical informed where physics, physics, physics, physics, physics driven AI or machine learning.
So which means the AI prediction should follow the physical laws or physical rules, right?
Like for example, the person cannot travel, the person cannot travel faster than, than than the speed of the light or something like that.
There's a there's certain rules that people need to I mean, the simulation or prediction need to follow.
However, potentially large language models can make a lot of weird mistakes.
So how to actually, you know, constraint or restraint, the production of large models to follow follow the physical rules.
That's another hot topic this year for AI, for science.
Okay, I think we stopped last time here. So which means we talk about this uh, uh, general graph.
Right? Like, uh, nodes edge and entire graph.
And it's there's a wide usage of the prediction. For example, if you're currently of course, you are not from UCLA.
If you are, you can you can try to search how to travel from UCLA to USC so that you can do the transfer smartly.
And it's only taking 17 minutes. I used to use this as a good example, however, I was.
I was dreaming that one day I will give this lecture at UCLA, but I haven't got a chance.
We will see. So Road Network is actually a great graph, right?
For example, each of them can be a road segments and the edges can be the connectivity between between them.
And you can actually predict this so-called time of the arrival, because that's one of the key questions people always want to know.
And even in 2026, if you're using whatever Google map or Apple map or whatever the map you're using,
estimation can be largely inaccurate because things happens.
I mean, it's dynamic. They cannot predict.
For example, accidents happens, and when accidents happens, your time will be your time of arrival will be larger.
So it's unfortunate that you couldn't predict something may happen.
However, you need to do this a real time dynamic update for the time of arrival using graph.
Uh, so so the graph neural network was actually used by Google, at least back in 2020, in their Google Maps.
I mean, they actually building a large graph to to make the prediction for the forgive you the
recommendation of the routes so that you can do the smarter choice of the routes.
And and another thing as I keep mentioning is the drug discovery, especially for the people who are actually from biomedical background.
You don't need to necessarily do just purely AI. I mean, biomedical plus AI is actually a very emerging topic nowadays.
And as a salesperson, I know very limited things about all these autonomous atoms and chemical bonds, for example.
So for example, so for example a mouse is among this molecule.
You can do a lot of predictions. I'm going to show you a few.
A few years back I think 5 or 6 years ago I was a part of a team where building a molecule graph data commons.
So which means that can enable the use of the AI in this therapeutic science.
So basically the molecule example,
if you if you just look at one molecule potentially you can actually predict a molecule properties and giving the drugs and the proteins.
Then you can also predict the possible interaction reactions. So so so so so so this is actually a very good example of the node prediction, right.
Like a given giving or giving. Maybe this is like a graph prediction which means the giving molecule graph.
You're predicting the property. This is more like if you consider drugs and proteins as the different nodes in a graph.
You can predict the interaction, which means that this is edge prediction. And you can also do a lot of other things using this scientific flow.
I'm going to fly through some of this, but uh so but but but but what we're showing here is that graph is extremely important for therapeutic science.
And as I mentioned can do molecule property prediction, drug protein interaction prediction and real delay.
Of course, it's a very classical thing to be used for graph neural networks.
And now we're moving to this first part is all about to graph themselves.
Like what are the graphs and what's their usage.
The second part is that how we're going to handle the graphs using the graph neural network or graph learning.
Again, all these new networks the fundamental. The basic rule is to learning the representations or the features from the data.
So basically consider whatever it's whatever it's an image or it's a sequential data or a graph.
All you are doing is is to extract key information from it.
I mean which means it's called representations or embeddings.
And again, as I mentioned many times, the learning the compression or compression is learning.
So for very complex information how to do the compression is how to do this learning.
Similarly for graph neural networks what we're doing that thinking this way the original graph is this is this is like a lot of nodes,
edges and information and their attributes. And through the deep neural network I mean graph neural network.
You try to compress them into some embeddings. Basically embeddings just like vectors.
Right. Like a lot of like vectors for the matrix. So that's the embeddings. And finally you putting the embeddings in the task task prediction.
However there is no difference. I mean after this step the task prediction are all the same.
For example whatever. If we change this to image, the convolution neural network helps you to help you to get embeddings of these images.
And then you make a text prediction. So the final step is always the same.
However how to extract information from different data structure is the core of the deep learning.
Uh, so so so so so if we just further expand this, you will say given an input graph, uh, you can do multiple ways to extract information, right?
The most the simplest way is that like something called feature engineering.
Maybe for you guys it's already this is too old and nobody heard of this anymore.
But in the past, uh, feature engineering is a very classical approach people need to do.
So basically, give me a graph. Maybe you can calculate how many nodes does this graph includes.
and how many edges it has and how what's the attributes of each of the edges or the nodes.
So basically we do some manual process to extract information from the graph.
That's a very manual feature engineering.
However using the this is a traditional machine learning for graph, which means you are doing a lot of like a manual process,
then you can simply put this into a, for example, decision tree, Kansas neighbor, or even putting a, you know, a neural network or whatever.
So which means you can map the features to labels and then you can do the downstream application.
Again this is the second part are no difference between images sequential or graph.
It's all the same. The only fancy part is that how do you actually process the graph data.
And the graph neural network actually help us to do this automated automatically,
which means you no longer need to do this manual process to extract information from the graph.
You can actually use the automated way or use a neural network to do this.
So which actually frees us. Uh, so actually, uh, if you recall, we have this figure before, right?
For the classical machine learning, you have this input and feature extraction and then classification output.
However, for deep learning, you actually just trying to get rid of the human beings in this process for extracting the data.
Uh, it will be input deep learning and then output.
Then the question will be, uh, if we if we want to do this for graph neural network, how to do this graph representation learning.
So there's multiple ways right. Like the simplest way that uh given we have a graph here, we can potentially represent each of this node as a vector.
So this is a feature representation or the embedding. But the question will be how to use this.
Uh where does the vector comes from. Like how do we get it.
Uh so and and what's the purpose of this vector. Right.
Like if we want to get a vector, uh, what's the what's the final purpose for this.
Like how to actually use this. Uh, so the key thing we want to say is that we want to have a training objective so that we can make sure the similar,
similar nodes have similar vectors. For example, if in a graph, for example, in this graph, if this is a representation for this node,
and this node should be relatively similar because they're closer enough,
and the representation of this node should be more dissimilar to this one than to this one.
Because they're far from each other, they're not directly connected to each other.
So at least the rule of thumb is that we want to make sure in a graph, their neighbors are more similar to each other, which which makes sense, right.
Which because that's by nature what we're expecting. And we also want to encode the network information.
And finally, we hope this representation can be used for the downstream downstream applications.
As we mentioned, node link, graph annotation,
clustering or whatever you want to do before we actually look into the graph neural network details, we want to introduce a few terminologies.
The first terminology is called adjacency matrix.
So adjacency because because one question here for graph will be how could you represent their relations right.
Like for example these two nodes are connected to each other and these two are connect to each other.
But how could you represent them as a graph or how to represent them as a data structure.
So adjacency matrix actually give you this property, which means if you have a if you have a four nodes, you have this a 4x4 matrix.
And each of these zero just means these two nodes are not connected and the one just means they are connected.
For example, A and B are connected, a and C are connected.
So basically for this row of A you will say b and c are one, and otherwise that will be zero.
Similarly c only connect to d. So therefore for a for d is only this one here for c.
So it's a very simple Dag. It's not a diagonal matrix. It's just like a square matrix.
And however they're symmetric right. Because you will say you only need half of this matrix to do the computation.
So basically for the adjacency matrix even we're just showing them as a graph showing them as a score.
However you only you only need this half of them.
So which can if you want you can reduce the representations of the adjacency matrix.
And besides the adjacency matrix you'll also get a few other things.
The first things will be we call this attribute toward the feature on each of the nodes.
Recall for that graph if if this is a the road network with each of them, get a number like one,
two, four, eight to represent how many cars are is on each of these roads.
So that will be the attribute or features of the road. So that will be something we want to do the further further calculation.
And usually there's more than one features per node for example other than 1248 for each of the nodes.
Maybe you have a second second. Second feature like good bad good bad, which means the quality of the roads.
So basically we can. We can describe multiple scenes of the, of each of the nodes.
So basically you can have multiple multi-dimensional features based on each of these nodes.
And also. Also another thing we want to mention, but we're going to explain in a few seconds,
will be if you reorder, if you need to reorder the nodes and their features together.
So which means you can of course, for example,
if you swap be to this place and you put a C and D on the top or on the top place, which means it doesn't change anything.
Like a still a still connect to B and still connect to C and D, but if you just swap how you present them,
you want to make sure all the features are going with the node.
For example one and bad still go with B and sorry two and bad is still go with B and four and good is still go with C.
So. So the feature of each node go with themselves doesn't depend on the others at are.
So we're going to, you know, expand this, uh, very soon. Uh, so basically so basically what really happens is that for graph neural network,
the general idea will be you have the you have each of the node and their corresponding features,
which means, for example, how many roads, how many vehicles on the roads and some neighbor contacts.
And you learn some vectors embeddings. And finally you do the prediction.
So this is a general graph neural network,
which means learning the embeddings using the node features and neighbor information and then making the prediction.
Uh, so so overall. So overall the goal is to learning the representations of the nodes and edges, mostly the nodes.
Right. For example, for for example we have two nodes here u and v.
We hope after the learning after this encoding or graph neural network,
we hope in the embedding space I mean the vector space this is a z you and ZV0 closing closer to
each other than other nodes because they're the neighbors in the original graph space in the graph.
In the original network space. They're the neighbors.
So therefore we're expecting where we're assuming the after the learning or after the after after the projection to the embedding space.
They should also be closer to each other. Uh, so that would be the goal that we want to do otherwise.
Otherwise the learning is not very successful.
Uh, so so so so so so so we're so, so basically so basically then the question will be, how can we really learn these embeddings.
Right. There's multiple ways you can do that.
For example, the simplest way that you can do this so-called embedding lookup,
if you assign specific embeddings to each of the nodes and then can fetch them from a table.
However, this is a static it's not extendable or extensible to the new nodes, so it's not very good.
I mean anything it's not learnable. Potentially. It's not a good idea. Another thing we'll be doing this graph neural network encoder.
So we're going to learn the. We're using the current features and the neighbors of the of the node to compute a vector to represent the specific node.
And so that will be better because because for example now we we have the if we can do the representation for A and B for a new road coming as a E,
we can also try to learn their vectors smartly using the same new same neural network.
Or we're going to show you how to do this. But for for now, for now, we're just showing you that the very,
the very naive way is that if you actually assign a vector for each of the nodes, you can do this.
You can just simply one road, one node, get the gate vector here.
However, it's not a expandable. You couldn't simply expand for the new neurons coming.
So so so because of that, because of that, if we if we really want to make sure the graph neural network can handle the new nodes,
we really need to do something learnable so that we can Compute the representations for the new new coming nodes.
Don't worry, it's a bit abstract here, but we're going to show you more details.
So so overall the deep graph neural networks or the encoders will be something like this.
This will be your input data a very complex graph.
And you're going to do something very similar to the images right.
Like you are doing something called graph convolution. We're going to show you. And after that you you do some non-linear activation function.
And you can go with another graph convolution another non-linear activation.
Finally. So there's no big difference from the convolutional neural network.
If you're thinking this way, the only way we're changing is that how we are going to do this graph convolution or how we're going to do this
filtering or the representation learning from general graph other than the images because images are simpler,
right? Like you apply this the three by three, five by five filters and you get a representation.
However, for the graph it's much more complex. Again we go through this terminology quick terminology.
Again you have the you have a lot of nodes like they get this vertex set which means you have a node 12345 like v1, v2, v3.
And you have this adjacency matrix. As I mentioned. That's a square right?
Like a it's a binary square which means a binary square matrix, which means one just represent it's connected of between two nodes.
And finally you get this feature space or the attributes or the features of each node, which means on each of the nodes from v1, v2, v3 or whatever,
how many nodes you have, each of them got some attributes, which means,
for example, the number of the vehicles on the road, etc. and this will be your ex.
So this is something like input data. And we're going to use some and likely and likely a.
anyway, we're going to show you how we're going to update it. How how to update this.
So what are the node features for example?
Uh, for example, if this is a graph, if this is a social network, each of the node features will be uh like the this person information, right.
The age, gender, location, etc.. And if this is a, if this is actually a, if this is actually a traffic network.
So potentially each of the road will be one vehicles and this potentially will be a rose.
And for each of the vehicles you may get a brand the make the year of the vehicles etc..
So so so the node features can be a lot of things like a user profile can be the genetic expression and it can also be other things.
So we will assume like the node features can be very diverse.
Uh, potentially before we talk about even talk about how to use the graph neural network,
one very naive question is that why don't we directly use the existing deep neural network to handle the graphs, right?
Like for example, this is a very simple graph. Like we have a, b, c, d, e five nodes.
And this is adjacency matrix I mean a binary one.
So if if for each node we got this 2222 column features which means 10001011110.
It just represents something I don't know what are they representing.
But one simple idea will be why don't we directly input this into a general deep neural network?
Because we can say, well, already if you simply append or combine the adjacency matrix along with the feature matrix, sorry.
If you just simply combine the adjacency matrix with the features of each node,
because this is a this is a node a this is a feature of the node A this is a node B this is a feature of the node B and this is the adjacent matrix.
You can say actually the size match perfectly right.
Because you get this very good size, you can put it into the deep neural network to make the prediction.
The issue with this type of the simple idea, it's just like if you remember that the convolutional neural network we'll talk about.
You don't want to use a deep neural network, general deep neural network to handle the images and treat each of the pixels independently,
because you need to handle a lot of dimensionality. Similarly, here we also have the same thing to talk about because the graph size may not be fixed.
For example, if you add one more nodes like a, b, c, d, f, you have a 66 nodes here.
So then your input data becomes six your input data.
This entire matrix need to add one on each of the directions.
And your deep neural deep neural network no longer works because it actually needs to match with your input data size.
So which means you can use deep neural networks simply using this data to process it.
However, then you face the issue of the this graph cannot grow at all.
If you add one more node, if you add one more feature. This entire deep neural network won't work anymore.
So this will be the issue for why don't we use the general deep neural network for this graph?
And and you need to for each of the specific graphs you need to train a separate deep neural network.
However we're going to show you for graph neural network.
It can handle multiple graphs as long as they're as long as their feature space are the same.
For example, you can handle multiple different road networks using the same deep neural network.
So which means you do this a weight sharing, which is great.
And there's another issue for the node node ordering, which means if you simply swap A and B, then it's become another totally different input.
And you couldn't use that anymore for your deep neural network.
Therefore, we need a way or a smarter way to handle the structure of the graph so that the order no longer matters in the graph.
And the. And another thing would be it can handle the newly added nodes.
And it also be efficient for weight sharing. Uh, so, so the idea would be something similar to convolutions, right?
If you recall the convolutions for the images. Uh, for the convolutional neural network, what we're doing is that we're going to apply some filters,
uh, among the images, like you are going to slide your filter from here to here.
Uh, and then the bottom left, the bottom and the right bottom.
So actually you're doing the filtering so that you can sample the information from the original image.
Uh, so similarly can also do something smarter for the, for the photographs as well.
Uh, we're going to show you this is totally doable using graph neural network.
And also the graph neural network can also be applied to the images as well.
So which means image is just a simple case of the graph.
Uh, however however, as you can see, the challenge for the graph here will be, uh, you couldn't easily apply a filter, right?
Like, uh, unlike the images you can do the, do a very standard, like three by 3 or 5 by five.
Future for the graph. How could you do this? Like, how do you know where to slide?
I mean it's a it's there's no structure there. So. However one one thing as a fundamental feature of the graph will be they have neighbors.
They don't they don't have a graph. They don't have a fixed a great shape window.
However they have neighbors. The neighbor doesn't change at least.
For example, in this classroom, your neighbor won't change unless you decide to where he or she decide to leave the class in the middle.
Then your neighbor will change. Otherwise your neighbor won't change. Similarly for the graph, even there's no structure.
However, their neighbors are fixed. So we can use this property to design something to do this filtering.
Sorry. Actually it's still filtering or sampling. And however, one tricky part for graph would be they have something called a node number.
So look at this other one and other two on the on the on the screen so you can see the other one and the other two.
Actually they're identical. They're fully identical.
The only difference that is just give different names or will just index different nodes differently, right.
Like a, the original a, b, C, D, f are totally different from the other one, and other two are different.
But by the end of the day, these two order, these two graphs are the same.
But if you actually. But if you actually are, but if you actually look at the specific numbers then you will see something very different, right?
Like for example this is where a, b c, d, f in this way.
And this will be a b c d f in this way. So if they're numerical you will see the representations of these two graphs can be very different.
And their adjacency matrix will also be different. However they are representing the same graph same structure.
And and and and with that in mind and for example in this case this green object moves from the row seat to row D,
and if you're still doing the same prediction,
uh, if you're if you're if you're still using the some algorithms couldn't handle this, then the prediction result will be totally off.
So so with this in mind we need to introduce we need to introduce two properties of the graph so that we want.
So basically this these properties motivate or design of the graph neural networks.
The first the first the first property is called equivariant.
So basically what we're saying we are we what we want to say is that we want to make sure the predictions of each node,
the outputs of the each node follow the same reordering. So what does that mean?
What does what does that even mean? For example, if this is order one this is order two.
And so actually in this two graph you will say the A is actually this is a new new new node is actually the old node A.
So therefore all we're trying to say is that if the input of the A is actually the
input of A and the input of E and the output of A and output of E should be should,
this should follow this structure, which means this number shouldn't change even with a changed index of the nodes.
Uh, we have some examples. We will say um and another property is called invariants which means basically these are two.
These are the two same. These are the same graph. I mean we didn't change any values.
We didn't change any structures. We just change the how do you index this graph.
So if we're going to predict whether consider this as a molecule graph these are two molecule graph.
Finally if we're going to predict their properties this should be exactly the
same no matter how we are ordering their attributes uh the node ordering.
So which means node ordering shouldn't affect their final prediction.
So these are something called invariants which means the two equivalent graphs shouldn't you know.
Shouldn't the output of these two graphs should be the same no matter how you order the nodes as long as they're equivalent.
So we need to follow these two things, which means equivariant and invariance to make sure the graph predictions are intact.
Even you change the order. Therefore, if the graph neural network design should actually make sure it actually fulfills both of this requirement,
which means again equivariant and invariance.
Basically the first one just saying the input and output they are going to swap, or they're going to go with each other at the same order.
So they're not going to change the order of the input. And then the output of the things won't change.
They go with each other the same input, even go to different order or even even go.
Even this a go to e. The output of this two places should be the same because actually on the on the graph they are the same.
So that's the equivariant and invariant invariance just mean if if if by nature these are the two same graph,
then the prediction of these two graphs are the same. So no no no matter how you order them or give them the name.
Uh. Right.
I'm just trying to say if I want to. Okay.
So then the question will be then the question will be how?
How could we actually honor these properties? Right. Like the owner just I mean, if you want to make sure, no matter the orders of your.
No matter, no matter the orders of your nodes, the prediction should still be the same.
How could you do this? So. So so with that in mind. Or a record like now we want to get the features or the data or representations from the graphs.
Then how to actually do this however and which is the intact or invariant to the orders of this nodes.
I think the simplest idea would be the following. Thinking this way, for this, in this order one.
The neighbor of the A will be DC, a and B, right?
Like if you want to make sure the prediction of A doesn't change along with neighbors,
you want to make sure you still get the information from DC, b no matter the order they have.
Similarly for E is the same. You want to. You don't care if it's called say d, f or a, b c.
Only thing you want to make sure is that as long as they are connected, you are impacted by this CDF and the order doesn't change.
I'm going to show you what are the. What does that even mean here.
The first thing is that, for example, if you have a two files to rate their A or B or B and a, their stored value is one or 2 or 2 or 2 or 1.
In many of the cases, if you have a, if you have a specific graph score saying A, you got impacted, for example.
This is not very clear. However, what I tried to show you here potentially will be something like this.
For example, this is no.
This is your total graph score for A and this total graph score A will be you get a one times the first slot neighbor neighbor.
How to spell it? Sorry. Um, maybe I'm wrong, look like I'm wrong.
But anyway. And then that will be two points for the second neighbor.
So if that's the case, why? Why the other? Why the other matters?
Because look at look at this. Uh, if you plug into a plug in this equation.
Plug. Plug the numbers into equation. You will get a totally different scores here if we just put in putting in this case, for example,
I'm saying A will be impacted by two points by the most by the close the neighbor and the impacted by one point by the second closed neighbor.
Then this distance matters, right?
Like you actually, uh, if you change this, uh, a, D and B or A and C value your neighbor, ordering actually matters a lot.
However, we don't want we don't want this property. We just want their their neighbors are playing the same role in the sense.
We're going to show you. What does that even mean?
Um, and another thing would be if you have another functions to, to to talk about the neighbors impact on the current node,
which means, for example, if f of f of x is equal to two x, and if you change their order, the final output will will change.
These are just these are just like the bad example showing you that the node orders actually matters if you compute in the graph.
But we want to prevent this type of the graph.
We want to find some rules or designs to make sure graph neural network are invariant to the node orders, the neighbor orders.
So we want to make sure the neighbor order doesn't doesn't actually, you know, make the graph prediction worse or better.
So so so so therefore. So therefore the question will be how can we design some way to get the information from their neighbors.
However, this this this information aggregation doesn't depend on the orders.
It's very simple thinking this way. If you have a multiple orders let me use an example, which sounds pretty weird.
For example, you're writing a homework and you're trying to say what your neighbors are, what's your what's your neighbor's solution?
And one way that you just look around and you check every one you check.
For example, your neighbor A got answer 0.05 and your neighbor 2.02, and your your own answer is zero.
And then the question comes that which person should I take. Right. Like should I take 0.02 or 0.05?
Potentially the best answer will be it will take the average from your two neighbors.
Maybe your maybe that's closer to the correct answer. So similarly,
when doing the graph neural network we need to find the aggregation where
information aggregation so that you don't care about the orders of your neighbors,
you're just simply trying to. For example, you can take the average of their information.
Therefore a the other order information no longer matters.
The reason why if you swap the order, the result will be different because you will say you have different weights.
Here you give a one point for the first slot you get.
You'll give two points for the second slot. However, if everyone just gives 1 or 2, you actually don't care about other anymore.
So which means the aggregation in the graph you want to make sure they're invariant to the order change.
With that in mind, you can take the average right? Because the average across a set of the data or set of the nodes doesn't change.
The average from 1 to 3 is equal to two. The average from 132 is still the two, and the average from 3 to 1 is still two.
It doesn't matter about the other. Similarly, you can do the median, max, or min.
This type of this type of operators are invariant to the others in the sets.
So which means you get a set of neighbors, whatever. You change your orders.
Some of the operations result doesn't change. So so so in that sense.
So in that sense we can actually directly finally move to what the graph convolution networks look like.
And how are they doing this neighbor information learning.
So this is a so this is actually this is actually. So let's say if this is your graph right.
This is a node I'm looking to. And for each of this graph node you got a few neighbors, and these blue ones are so-called first hop neighbors,
which means they directly connect to this current node, which means there is a first hop.
However, the first hop neighbors got a second hop neighbor as well, right?
For example, if you just do one more expansion, this blue one extends to green, and this one also expands with two more green nodes.
So this current node updates actually depends on their closed neighbors, which means one hop neighbors.
However, their one hop neighbors get zero one hop neighbors, which means they are the two hop neighbors for the current node,
which means you can do the expansion in one hop, two hops, three hops, which means you can.
Similarly, you're all sitting in this classroom learning some knowledge, so you build some knowledge around deep learning.
But maybe you are learning from your team members.
Your team members are also learning from their team members from other projects.
So which means that will be the two hop neighbors therefore.
So therefore the core information or the core knowledge we're trying to say here is that we can't decide how large or how much information to learn.
Given a graph, we can just learn from your closed neighbors, or we can even expand for one more hub to learn from more people.
But of course, when you are trying to learn from one person, their impact should be lower, right?
For example, you are mostly learning from your close to friends, but zero friends may also put an influence on you, but that will be discounted.
Uh, so so here's a here's a here's a real graph neural network look like.
So the key idea will be you want to make sure the representations of your current node is based on your local network neighbors.
So basically for example, if we're trying to say what should a be represented.
And this should be directly impacted by their neighbors which means d b and C which means the BCD, right.
Because they're connected to each other b, c, d, they're the first hop neighbors.
And however, if you just do one more expansion, if you look at B, they connect to C and A, so A and C are actually the neighbors of the B as well.
And for C they also get a, b a, f a, b, f as neighbors.
So that will be the second half of the neighbors. There are also playing an effect.
So actually sounds like a loop, right? Like some sounds like there might be a loop like a yourself is also got some impact from yourself.
It's okay. It's by design. It's nothing. It's nothing wrong here. So so the second question.
So all this so all this squares here just means some learnable parameters.
Recall for that graph neural network. We also get this that for each of the convolution filters they get some ways to learn.
Similarly for graph neural networks the learnable weights are this aggregation.
It's not aggregation. Are this a. Are this a weight matrices.
So that you can actually decide how much impact each of your neighbors are playing on you.
So this is actually the learnable parameters. I'm going to expand using the equations, but don't worry.
But now we're just showing you that the embeddings of A depends on their neighbors BCD.
And the BCD also depends on their neighbors. So if you just keep expanding this can be a much more complex.
For example, if you if you expand a again then you get the same thing right.
Like if you expand A, you get a BCD and then AC. So so that would be something like if you just keep expansion, you will hit a wall.
However, the intuition that so intuition is that if you actually do this expansion of
the graph you will define this a computational graph based on their neighbors.
So this is for this is for node A. This is for node BCD.
Like you will say for two hops of the neighbors they look like the the following.
Some of them for example, because this is a central node, they get a lot of impact from neighbors.
And their neighbors also do the expansion. So this one looks much more a little bit more larger.
And and then if we plug in then if we plug in just to the deep models, which means you can give the arbitrary depth.
So which means we're only showing you this, uh, you know, like a one layer, two layer thing, but you can keep expanding, right?
For example, you can just add a, you can do the neighbors of a here again and say of the neighbor of Z again.
So you can just keep adding the layers to the deep neural net deep neural network.
However, in classical graph neural network we find an issue called oval smoothing,
which means if you add too many layers of the to the deep neural network, things will become very hard or very challenging to learn.
Everything look very similar to each each other. All the nodes are becoming the same representation.
Finally. So that's a classical issue. Got over smoothing the graph learning or graph deep neural network.
And so we're giving the conceptual framework here.
Then the question will be what's actually in each of the box or what are these, uh, learnable parameters of the graph.
Right. Uh, so, so so there will be three.
So recall this, this box should give us two. Two actually impact.
So one impact is that we want to aggregate information from the neighbors.
The second one that we want when we're aggregating the information, can we also do sort of like like attention or weights.
So which means we're also also taking the average.
Taking average. It's great. Can we also trying to learn some, you know a shared feature around our shared weights around other features.
So that would be the goal for something in this box. Uh, this looks a little bit intimidating.
But if you haven't taken five, six, seven actually how many people have taken five, five, 67 before?
So I mean quite a few, which means at least one sort of class.
A few discourses, like a very angel level course. Um, yeah, potentially.
I'm going to teach five, six, seven. Uh, not very soon, but I'm going to teach that maybe a semester later or two semester later,
but I'm going to teach a half like a plan to teach because five, six, seven for the people who took that before, it's more theoretical, right?
So, uh, that's not something I enjoy most. So I really need the instructor to, to help me.
And so that I can mostly teach about the deep learning or the transformer part.
I mean, by the end of the many of the AI courses becoming similar to each other more and more, I mean,
the AI course, deep learning course, applied NLP and uh, there's a lot of things that are overlapped, right?
Like for example, over for a Python option, you must have learned Transformers and attention.
Uh, some of the agents or whatever. So.
So by the end of the I don't know, I don't know for the next year whether all the courses are becoming more and more similar.
Out to the outer each other. Uh, so it's just like a degree of.
You know, how much overlapping we're introducing. Uh, so the mass of the the mass of the graph.
Deep neural network will be following. So recall like for the current node.
For the current node representation you are getting the impact from your neighbors.
Your neighbors also get the impact from from their neighbors. Therefore for for ki.
For example, if we consider a case in the for layer case.
So you have a multiple layers of the deep neural network. So this is your current representation.
If you want to compute the representations for a new layer k plus one your neural node
eight you are node v and you want to calculate the next the next layer representation.
Then this is simply a non-linear activation. Just drop it.
It don't care about it. And within this within this big bracket there's only two parts.
So which means yourself depends on the on previous yourself, which means k plus one depends on k.
So which means your own representation depends on the last layer of your representation.
Have a key. So this is yourself and which is a which is controlled by a matrix called bk which means it's a weight matrix.
It's actually just depending it's a learnable parameter here.
And then you do this, you do this summation where it's actually average across your neighbors.
So this is a so this is the neighbors that M of V which means you go through each of your neighbors,
you get zero representations at layer K and you average them out.
And which is also times a weight matrices. This is also learnable parameters.
So basically this looks crazy. But there's only two parts in this expression.
The first part is that the impact of your neighbors. The second part is that you yourself in the last layer.
So basically the the new layer. The the new layer.
Sorry, the new layer K plus one of this node V only depends on yourself in the case layer and the average of of your neighbors,
which means a neighbors neighbors of your neighbor of V in the case layer and doing the average.
And there's only two parameters you can learn, which means it's the w off key and b of key.
So basically you average your neighbors previous layer embedding and you add your own embeddings from the last layer.
And you combine them using the weight matrices W key and became.
So w k and b k can control how much impact of yourself and you know your neighbors.
And after that you do some like a non-linear activation which is not very important.
So if we just plug things back to this to this part.
So which means yourself in the, in the next layer, in the next layer update of your representation.
It only depends on the last layer of your of your. Your off yourself a and then you.
Then you added the average of the BCD representation.
So so if you just simply plug this in that will be your neighbors. That will be your last layer yourself and then this will be your new yourself.
So which means the new layer depends on the past. And your neighbors are so so so so so which, so which means.
And another another very good feature here you can say will be we mentioned you want to make sure even you change the order of your neighbors.
Uh the final aggregation won't change.
So so this actually is actually honored here because you can say this summation doesn't care about others, right?
Like if you if you add a first neighbor, first or second neighbor or the third neighbor, it doesn't matter.
It's just like a summation. There's no ordering. And so that's why it's invariance to your orders environment.
This is the environment pooling and aggregation. If you recall this invariance, we also talk about this in the convolutional neural network as well.
If you do that three by three sorry. If you do the pooling.
If you do the pooling across your image, usually you take the mean or max because you don't care about others.
You just this which is invariant to the to the other.
Um, I know this is a bit abstract. Any any specific questions people people want to ask before we, uh, before we even move?
I mean, there's no homework on this graph. Neural network.
It's more about knowledge expansion and potentially, uh, and also people always ask, like the midterm review, right?
We will do that, which means the midterm is on the November 2nd.
And so the middle review will happen, uh, the week before that, November 2nd,
which means that I don't know which date is maybe I think that's October 16th, 2016.
We're going to do the review and before the review. I've already got a mid-term review.
So which means I will cover the most of the points in the mid-term so that you don't need to go through a few hundred of slides.
And don't just don't print everything out and bring it to the class.
I mean, that's that's an overkill. Uh, yeah, I think that's actually overkill.
I think the only exception will be, uh, I think some extreme weather.
I rather read the news that some extreme weather may hit LA in the later in the last part of the year, so.
So I'm not sure what will happen. We will say if there's heavy rains, maybe, I don't know.
We will say hopefully we can all be in the class, but if anything happens we're going to follow the university rules.
But my colleagues all told me like a tool to bomb potentially you should have got some water at home or something, I don't know.
I heard like a I heard that at downtown there are already a few like a like electricity lost during the last few days.
I don't know whether that's true or not because of the extreme hate for something I also
heard at certain universities the need to turn off the AC because of the because of.
They need to make sure to make sure the hospital is running. I don't know, but looks like the electricity is a big issue.
Um, we will wish for the past. Um, where am I?
Um, yeah. So. So basically we go through how the graph neural networks are updating.
Uh, so which means. So this w k and b k these are the two learnable parameters.
So one interesting thing you will notice here will be you can say the input size of the big
the input this this this is the matrix size where the weight matrix size depends on h of h h.
So which means h is your embeddings. So as long as your embeddings as long as your embeddings stay the same.
This is the same. Same. Graph neural network can be applied to different graphs, and as long as their input original features are the same.
Because when you have a node embeddings in the first place, you are going to use your feature original features as the initialization.
But again, again, like at Stanford, they have this interior.
They have this full course on graph neural network. So that's why they use the entire semester to discuss it.
However, we're just going to use the roughly half of the lecture to cover it.
So so we're just showing you some basic things. And then we're going to be showing you some applications and which potentially will be helpful.
So so so here's a much simpler illustration of how things are getting updated right.
Like you have this ABCd graph and the representations of the k plus one of the of A here.
If we're just taking for example this is taking.
Let's assume the weight will be half half, which means you are heavily impacted by the previous yourself,
and you're heavily impacted by the meaning of your neighbors. Then this is this.
This is the rule we're using in this very simple example. Then what happens then?
A actually impacted by the B and C and the neighbor mean just mean two plus four divided by two which means three.
So therefore the A the representation of the node A at layer one will be point five,
which means that will be half of the weights times itself in the previous layer, which is one plus the average of the neighbors also times weights.
The weights just mean here you'll get this two.
So A1 updated to A1, updated to two, and your BCT also got to get updated using a similar rules, right?
Like a B depends on .05 of them itself and the 0.05 of the eight.
So, so in this case, for example, half .0.5, 50% of B is one and 50% of all the neighbors will be one times 0.05 is 0.05.
So one plus 1.05 is 1.5. So so all this a, b, C, d got the same updated rule here.
So this is the layer one. Sorry this is layer zero. And then this is the layer one.
You can say number get updated. And another thing that you will see in the original layers these numbers are a little bit more extreme right.
Like 12480 more far from each other. However, after layer one update you will say they are 1.52, 4.25 and six.
They get compressed or zero getting closer. So this is one issue where one feature of the graph neural network.
They try to push the similar nodes to the getting closer in the newer feature space.
However, if you just do this too much, then every other nodes look exactly the same.
That's called smoothing the graph. So this is the layer one.
And if you if you just keep updating using the same rule right now, it's a,
it's the next layer and you're going to plug in a .05 times two, which means last layer and 0.05 plus the, the average of your neighbors.
So which means 1.5 plus 4.25 and divided by two, you get this new values.
So we will say that's how Graph neural network got updated. Like you you it's based on yourself on the on the on the previous layers.
Plus uh, the impact of the impact of your neighbors and how much impact of your neighbors depends on this weight.
0.05 so, so so in graph neural network this is learnable.
So basically we're updating how much impact how much impact of your neighbors.
And of course this is how much of your self is also getting updated.
So basically we're just updating this which means graph neural network are learning giving the current feature, giving the current neighbor structure.
How much impact are you are receiving from yourself and your neighbors.
So that's actually the weights for learning from graph neural networks. Uh uh, so uh uh, yeah.
These are not very important. Uh, so so so basically what are we really learning.
Right. Like we're using a fixed weights in this simple example .05.05.
We just explain how the numbers got updated, how the information got flow.
But we are using the fixed weights.
However however in real world graph neural network we're doing this dynamic updates which means we're learning these weights.
This weights actually show that depends on the neighbor information should depends on the node information.
These are also shared across all the nodes.
So which means it's never 0.05.05.
It's actually a long matrix to it's like it's actually a two matrix matrix to decide the impact of yourself and the neighbors.
Uh. Um, Layer one.
Yes. Uh, so, so which means at layer one you're, you're depending on the information from B and C.
However the layer two at a of A which means if you further expand b, b also depends on a and if you depends on c also depends on d.
So which means d can also contribute to C.
So which means when you are expanding more layers of A in a deep neural network, which means you get a more from your different neighbors.
If you just keep adding the layers, you're getting more from more from the distant neighbors potentially.
You also link back to yourself as well. Um, so I think I will fly through okay.
In the in the first place, we talk about this invariant and equivariant invariance and equivariant.
You will say, uh, you will say actually, uh, actually we follow this graph.
Neural network updating follows this. Right.
Because whatever your a, b, d, c or DBAs say you swap the numbers of the attributes, but because we're taking average, it doesn't matter at all.
And and so which means this is actually equivariant and sorry like whatever is the A, B, C,
D or dba c, their corresponding attributes is to I mean a is mapped to two and be mapped to 1.5.
And you even change the order.
A is still map to two, and B is still mapped to 1.5, which means whatever the order, you're changing the input attribute and they're not altered.
The output doesn't change. So they follow each other. They're they're changing in the pairs.
And similarly it's also invariant which means whatever it's a, B, C,
D or DBA say the final after the pooling, which means taking the average or the sum.
You still get the final same you get you still get the same final output.
So which means all we're saying that this graph neural network updating rule follow this invariance and equivariant,
which means it doesn't really care if your graph. If your graph is a.
If your graph is in this order or this order, it doesn't matter.
Using this graph graph neural network updating rule, we can handle things smartly and it's all good.
Um, so where am I? Sorry? Uh.
Uh, sure. Uh, environments and and again, before we're moving from the graph updating graph neural network training.
Uh, again, we want to emphasize again that invariance and equivariant sounds are different questions, which means, uh,
the, the, uh, the equivariant is just, uh, equivariant just mean your input and output the, the move as a pair, and, uh.
And the universe just don't mean, you know, the final output of the entire graph.
Whatever your order change is the same anyway. You can you can revisit it, revisit it in the, in the, in the, in the slides.
Um, after that, we're going to move to the training.
To the model. Uh, I hope people are still are still fine at this, uh, at this moment, uh, I think we will have a break in 20, 30 minutes.
So. So that you can rush to whatever place you want to get some food or whatever.
Today, I get this, uh, I got I got a Taco Bell, and I think they have this new product called, um.
What's that steak gordita crunch do?
I don't know what it is, but it's great. It's a it's a it's a it's a softer, softer, softer taco, uh, with a steak and, uh,
I remove I remove the cheese from my stuff because I couldn't really tolerate the dairy,
and also got a I got Apple from Parkside from from today's lounge.
I usually went to Parkside in the in during Monday during Monday lunch because somehow I find the pattern.
Monday menu at Parkside is slightly better than other weekdays.
I don't know whether that's true or not, but that's what I what I identified.
Um, uh, okay. I think we're going to continue for the, for the, for for training the model part.
Uh, don't worry, the last part of the lecture we're going to cover how actually you can use the graph
neural network or graph with the large language models or agents and vice versa,
because I know many people just want to know a bit of the large language models and etc..
Uh, so and some recent news about large models I think will be, um, uh, I think recently their AI AI person from OpenAI just saying.
They're going to release 28 new features. Substantial features for Codex.
If they if they couldn't, if they couldn't shape these features, they're going to give you a reset of the codex every single day.
So we will say so. So we will say how many resets we're going to receive.
But now I realize, you know, reset is a trick.
And it actually if you're if you're if you know what resetting means, you will say that's actually a very bad trick and it's not suited for everyone.
Uh, I hate it, but if they can reset every single day, I like it.
But but but but but actually, I do have a lot of complain about this subscriptions.
Nowadays it's getting more and more expensive. And token usage.
I mean, the total token is getting smaller and smaller, which is bad for now.
Like I, I burn around the 333 codex.
Sorry, I burn three cloud code max per month plus two a Codex Pro 2020 X so.
Which means I also get one ultra from a Google Gemini.
So which means I roughly burn the six subscription, the Max subscription from all different places.
I don't know whether this is sustainable even nowadays.
I feel even nowadays I feel this is actually they're still subsidizing the use of the subscription.
So so I try to use as much as possible, uh, but I don't know whether five months later whether I can still afford to use so much a subscription.
But the rule of thumb is that if you can, if you can afford to subscribe, just use as much as possible,
because nowadays it's a it's a very they're still subsidizing the usage of this.
And I think in the in the future it will it will cut it crazily.
I think OpenAI is already cutting this crazily. Uh, so so take the last discount for, for using it.
I think actually this is a big issue regarding the fairness to access or accessibility to the frontier models.
I mean, in the future, the price will be the big thing for general person to access the frontier model.
And if you couldn't use the frontier model, your, your your, your, your your productivity will be largely limited.
And I think it's very bad. I think maybe another route will be the open source will catch up.
And but I'm not very pessimistic about this.
But when we can still offer this frontier model to use as much as you can and you will feel that you are another person.
But of course, don't just be the person who only know how to push the enter button.
Uh, yeah, that's also very bad. I mean, uh, it's a paradox, right?
Like we all know, we couldn't let agents do everything or anything for us.
However, as a person who are doing AI safety or agent safety research.
I'm still using the auto mode for all my agents, like giving it can do whatever on my computer,
I don't care, which is totally counterintuitive and which is which is totally wrong.
As an AI researcher on security, which I shouldn't do at all, but as a human being, I still choose to do the auto mode.
So that's why human beings are not are not rational.
But and we're creative. We are. We get the creativity.
Oh, okay, we're going to move to the graph neural network.
And also just try to use that OpenAI subscription from from USAA.
Right? I know they don't have a I don't think they have a high quota. But when you can just use it, and I think as their classmates suggested,
you can also open you can also request for the codecs access using your USC subscription.
So when you can use it before before university stops you from using Kodak's, uh.
Kodak just used it. Uh, you know, the party may be over some time.
Okay. We're going to talk about the training in the graph neural network model. And then we're going to have a break.
And so so so training graph neural networks.
There is no difference from training any other deep neural networks.
Uh, even the structure. Even the structure. Is this a and a neighbors and neighbors.
The training is still the same. Right. Again, we mentioned there's two trainable weights matrices which is w k and b k w k.
Decide how much of the impact from their neighbors, and b k decide how much of the impact from itself.
I mean, the from the previous layers. So basically we're trying to learn these two matrices for, for the graph neural networks.
And you can say it depends on the layers. This is the layer k.
This is a This is for layer cake. So usually you only get a in general deep.
In general graph neural network. In the past you only got maybe 2 or 3 layers, which means you only got a few of these parameters to learn.
You're not going to learn a lot of parameters and recall how to learn how to do this.
Deep neural network learning. It's still the loss function, still the gradient descent, and it's still the, you know, weight learning.
So, uh, so so so so then it's nothing different, right?
Like for node A. Uh, so so after after after you learned the representations of this specific node V,
then you put it into certain classifiers to predict, for example, the node class.
And you can calculate the loss function. Here's the loss function to say your predictor is right or wrong.
So this is a there's a there's no big difference at all from the general deep neural
network training recall in the supervised setting for the deep neural network.
What we're doing is that we have a loss function. You have your target, which means there's labels, right?
Like for example, this belongs to a red or blue or green.
And this is your learnable parameters for the deep neural network.
This is your for this one is actually your uh node vectors z z.
And what happens is that you plug in your z into your prediction and you get a predicted value.
Maybe this this should be green. And you predict as a blue, which means you get it wrong and your loss function can be calculated.
And finally you can do this supervised calculation. So it's a here's some examples that under the supervised training,
which means you have a graph to predict the certain nodes whether certain nodes are safe or toxic a drug for example,
this is a drug to drug interaction because for example you couldn't use two drugs at the same time.
They can be safe or they can be toxic. So therefore so so so so therefore what happens in this case will be, uh,
you can you can embed each of these nodes and you get a representation and you put in a predictor,
which means you have an original graph and corresponding features. And you put in, you put it into the graph neural network.
And to learn the to learn the representations. And then you finally to predict whether they're safe or toxic.
And then you can calculate the loss you use a loss to. Do you use the loss to do this a gradient descent on the shared weights.
And then you you update your graph and you graph make a prediction again.
And then you get a loss and you do the share the weight updates.
So it's actually just like a lot of like iterations for the for the updates.
So basically the backpropagation will update the shared model parameters as well as we're saying here, which means this is W and this is the W and B.
If you remember uh w and b just means a control the impact of their neighbors and control the impact of themselves.
So those are the two learnable parameters.
Uh, so therefore so therefore, uh, if you if you expand in this, they just simply put in this loss function using the cross entropy.
But it doesn't matter. I mean, if you just put a plug in these numbers into this loss function, you can calculate the loss.
And then you can do the gradient descent as well showing I mean the backpropagation.
So there's a so there's a so there's a nothing nothing fancy.
So there are a few things you need to design in the graph neural network.
So one thing will be this neighbor aggregation function recall this should be invariant to the orders.
So which means you're taking the mean taking the sum. These are all good for the neighbors.
And they also need to define the loss function on the embeddings.
Which means after the prediction uh, whether it's a cross entropy or something, it doesn't matter.
And finally you try to train a set of nodes, uh, Are like these graphs we have, uh.
Yeah. Then you can actually generate the embeddings for the nodes and even.
This can work for the, for the, for the graphs you've never seen. As long as the feature space are consistent with your feature space.
Uh, so so the question is that for the graph neural network, what are the shared weights or why we can do this weight sharing.
Uh, why like, uh why why this all the rows.
For example, consider a road network. Why are these rows can use the same learnable matrices?
Uh, the reason is because we're trying to learn the, uh, giving this feature space.
For example, given the Jordan network. Their feature might be a number of the vehicles on the roads and other information and their topology.
So what we're really learning that is given this road network and the topology, uh, what's the impact of themselves and their neighbors?
So basically we're sort of like we're learning some attentions where the impact among each other.
So therefore we're expanding this when we're applying a learned graph neural network for the jolts to another node.
It also applies because by the end of the there's still the roads and they're still there.
They have the same feature space and therefore zero topology. Their interaction, their impact to their neighbors should also be similar.
So that's why we can share the we can we can do this with sharing and which can which can which which makes a, you know, great sense.
So therefore we can simply, you know, applied or learn the role.
The network weights to a new road because they have the same features and whatever they already existing,
they are already presented in our current neural network. It doesn't matter.
Uh, so in graph neural network, there's some other things before we wrap it up.
So one thing is called inductive. So which means you learn.
You learn from some existing graphs, but you can easily apply this on the unseen nodes, which means you can add new things to your roads, for example.
Originally we're just looking at a, B, C, d for different roads, but you got the fifth one,
you got a roads E that also works because as long as they share the feature space, the same feature space, it will.
You can easily apply the graph neural network to this E as long as it's part of your new new graph.
So the generalization actually works. Uh, and actually this is so this is actually the same idea for the convolutional neural network, right.
For example, you train a train a train a convolutional neural network as an image classifier on a lot of like old images.
But you can simply put this on new images because that encoding is actually can be transferred, which is which is great.
So you don't need to really say you don't need to worry that much about whether they can be transferred.
They are transferable. And, uh, um, what else? Um, yeah, I think I think the potentially.
Yeah, potentially the last important part will be, uh, how many, how many layers do you want for the graph neural network?
Uh, it depends on your design, right.
So mostly people are using 1 or 2 layers because you can use this nearby graph context, but you can actually use,
uh, you can even use more layers, which means you get more information from, from distant nodes.
Um, but of course, when you get more layers, it's very hard to learn.
And, uh, and many of the times, as we're showing in that graph, uh, in the very early graph,
uh, for example, using this one, if you just do one job, you get an impact from BCD.
But if you do one, two hop, the B depends on A and C, you're already impacted by yourself.
So many of the times you don't need a lot of layers in the graph neural network because when you do this expansion,
it's easily, uh, potentially you may also, uh,
and also in this case A is impacted by C and C impacted by A, b,
f you can say the B is already presented here and it presented in the second second hop layer.
Second hop neighbor. Again, for a relatively dense, dense graph, the dense graph just means nodes are well connected.
You already factor in the impact of your, for example, this node B, so you don't need to have a lot of layers because there's a lot of repetition.
Potentially you don't need that. So that's why. So that's why uh so that's why.
Where am I also. So that's why usually you don't need a lot of layers in graph neural network.
Maybe 1 or 2, 2 or 3 is enough. Uh, and the a lot of layers won't actually help that much.
Um, so now we're going to connect convolutional deep neural networks to graph neural network recall for the convolutional neural network.
You're doing this a filter, right. Like you you filter here, here, here.
And finally you got this, uh, uh, compressed representation. Uh, so so so so so.
However, this is actually a graph as well, right? If you just look into this, uh, if you're just looking look into this, uh, nine pixels.
Uh, actually they have eight neighbors or something like that. For example, this middle one got eight different neighbors.
And the same formulation, if you do, if you do some, you know, uh, you know,
reformulation, you can actually change the scene into a graph representation as well.
Uh, the image looks like this. But if you're just putting this graph, you will say, for example, this pixel, the pixel, this pixel, uh,
after the convolutional neural network with the three layer filter will be sort of equivalent to this one.
I'm not going to expand, but it will say, uh, if you rewrite enough.
And they actually. They're actually the same thing because simply the image is also a graph.
As long as you want to, as long as you want to represent in that way.
So convolution neural network is a is a special case of graph neural network.
And so that's why. So that's why it's a simpler version.
It's more universal version. But graph neural network or graph neural network is more universal.
It's a it's a it's a superset of the it's a superset of the, you know, convolution neural network.
And even including the sequential modeling because everything is a graph.
Uh, and last week we also talk about something called attention.
Right. Uh, attention just mean, uh, you know, when you're making the sequential prediction,
then your prediction should automatically, automatically attend to the previous tokens with different weights.
So, for example, when we are predicting what what is the it?
It. For example. We're here for the animal didn't cross the strait because it.
When we're predicting what will be the next word after eat or a or next word here.
So we're going to attend saying for for this generation it will be attend most to animals which means it's a it actually represents animals.
Recall that we're talking about attention, which is to compute the weighted sum of the values depending on the query.
So which means the next token prediction depending on depends on the previous ones and depends on previous ones with the different weights.
So that will be the attention. Similarly.
Similarly. Similarly the graph is a very good thing.
It's a very good very good stuff to help for uh attention and other things.
So so now we try to connect a graph with large language models and, and vice versa,
which means they can be helping each other or they can be used altogether.
So I'm going to show you how we can use these things together.
So so thinking this way graph just trying to learn the relations or represent the relations among the objects and then making a prediction.
So large language models can directly make a prediction,
but they can only make the predictions on the, on the natural languages or something like that.
So so so if now the if now we got a target for paper classification for example, we got to get a lot of papers.
We get a one paper, let's say one paper. And you know you know the paper abstract.
And you know this paper signed other papers. Now you want to output the topic labels for it.
And so what. So. So so how can actually so so this this this actually this actually showing you that this paper doing two things.
The paper is that paper. Q and this is a abstract paper.
And this is the abstract of paper Q. Now we have a two.
Now. Now the goal is to predict what's the topic of paper, pen, paper Q we have two routes to do this right,
either using graph or as a user using large language models.
For example, if you have the abstract of the papers there, there is a there are there are languages.
But languages cannot be directly digested by the graph. Neural network recall.
We need some specific features to digest by the graph neural network.
So maybe you can use the large language models to convert natural language into embeddings, which means it's a text encoder.
Language models can help you to directly convert natural language into embeddings.
So for so you can represent one paper each of the paper as a vector.
And then what happens is that you set.
So then you get a graph you get a citation links Uh, which means the P side, Q and maybe Q's at other papers.
And we've got a graph here. And your text embeddings or text vectors of each paper become the attributes that x of each of the nodes in this graph.
Then you plug into the graph neural network so that you can do the predictions of the topic.
So in this case, you only use large language models as the feature embedding or the feature embeddings of the graph neural network.
The final prediction is based on the graph neural network using the structures, so that would be the root one.
However however uh. However that will be.
There is also a root B, right, because large language models can also make the prediction.
Then the then vice versa.
Other than other than using large large language models to embed the knowledge in the embed the natural language into vectors.
You now need to embed this citation network as natural language, vice versa.
So basically large language models can make a prediction. Graph neural network can make a prediction model.
Can only handle text logic model can observe graph. Neural network can only handle numerical vectors and structures.
So the first drought will be using large language models to convert your paper abstract into embedding
vectors so that you can use the graph neural neural network based on the topology to make the prediction.
The draw two will be. Now we need to convert this citation network the structure of the citations into natural language, right.
For example, for example, what happens will be you need to design a new prompt directly put into large language models.
You get a you say in paper, this paper is abstracted. We train a neural network to recognize images and and the structure will be the structure and
also and also paper p q which means you convert the graph structure into natural language.
Then you will ask you ask large language models to directly make the prediction.
So basically you will say for graph and natural language for graph and the large language models.
Basically you either convert one,
you either convert graph neural network graph structure into natural language or natural language into numerical vectors.
So either way it works. You can you can, you can choose either way. So we're showing you two rules, right.
Like the right one will be convert natural language into text embeddings and using graph neural network to make the prediction.
Otherwise that using the. Using the studied paper structure using the graph set,
convert the static graph structure into natural language and using large language model to make the final prediction.
So the difference is actually rather who is who is going to use the digest the graph context and who are going to make the final label prediction.
Uh, I mean, there's no right or wrong. I mean, people are using either way.
Because you can say because you can say you know everyone.
When people are asking you to compare two algorithms. Usually the answer is it depends because who knows what their ideal answer.
Uh, um, I'm trying to fly through some of this so that we can, uh, here here's a okay,
so here's a here's another usage of the graph in the large language models.
So. So before the agent time, there's something called a rag, which is pretty popular for the large language models.
What's rag. Sorry I don't have a slide here, but let me show you a rag.
Interesting. When I put a rag, it's just me. Show me. Read my professor.
So if you have any complaints, please go to read my professor.
And also, um, there's also, there's also there's also an end of semester, review in the past.
I just like saying whoever wants to do it. Want to do it again? For this master, I'm still saying whoever want to do it.
Want to do it? You know, for people who get time to spend on this, usually they have a lot to say.
And I think it's fair for people to say whatever they want.
We only receive that report after the, the, the, the, the gradients down.
Everything is done. So by no means there's no retribution or whatever.
So you're you're afraid to speak. Uh, however, I'm not trying to show you my rate, my professor, but it's your.
It's your freedom to write anything there as well. Um, I'm trying to show you what's rock.
So so so so so so so. Because I don't have a good slides there.
So I just want to use the whatever the figure online so that it's easy to.
I hope this is a simple enough. I don't know why it's such a small one.
Right. I think it's. I think it's good enough.
So so so so what's the rag? Rag? The full name is retrieval.
Retrieval. Augmented generation. So in the past, it's surprising.
Like we're just talking about things like in 1 or 2 years ago. Now we call it in the past because you don't need to do this anymore.
So in the past, what happens is that you give a prompt saying you want to do something.
And actually this goes to large language models. However, the large language models may be usually the large language model.
They have their knowledge cut off, right? For example, most of the models are trained a few months before they release.
Therefore, they don't have the knowledge for the things happen right now.
So therefore, if you're asking who the. I don't have a good question here, but what's the temperature for October in Los Angeles Us in 2026.
It's all right. So.
So if you ask this question for the model train a few months before, they don't have this knowledge, they couldn't do this a a real time check.
Therefore they need to do rag, which means they need to potentially search search online or search some external database to,
for example, to retrieve the knowledge outside from the large language model knowledge base.
So for example from a certain website from other database. So this is something this is a this is actually something called a retrieval.
Retrieval augmented. Uh what's what's what does the G mean here.
Generation okay. Okay. That's great. However you will say so which means it's more like a the rag is still not we're still doing rag,
but we're just called a different name which is called agent retrieval or agent knowledge fetching online.
If you use the ChatGPT early enough, you realize many of the times they don't do online search.
Two years ago, they simply just gave you the answer to whatever they know. Now they're doing a lot like a web search.
Uh, it's already something new, but. But when larger models start doing a rack or this knowledge retrieval or external information retrieval,
a good question will be how do they find the relevant documents? Right.
For example, the questions I'm having here are the hypothetical question I have here is that
which apps which apps will be affected if the if the Atlas database goes offline.
So because large language models may not have enough knowledge regarding the Atlas database, they need to actually search online.
We're finding from the external documents or from the firm documents or a firm form database.
So so actually all this knowledge may be embedded in multiple places.
Uh, so so for example, uh, for example Atlas and our database and be in the service helpdesk and alerts and search are the apps.
So which means in multiple documents, each of them get some information and give you the trace for the next place to retrieve information.
So basically, if you only retrieve from document one, you only say, okay, you are using this Atlas database.
However, between the service and which one is depending on beacon,
which means the helpdesk app application are using this data from data from the from beacon service.
And so therefore. So therefore all this knowledge are all this knowledge are are sort of like a graph.
Or if you, if you if you couldn't if you will only find this document to one your you're only saying
the beacon depends on atlas and you are going to you may not get a full knowledge for it.
And actually the real application names are in D3, d2 and d3.
So therefore. So therefore A to to make large model retrieval smarter or a more let's the efficient.
They build this graph database. There was a there was a time.
It's very popular, which means all the knowledge all the knowledge are connected as a graph.
Right. It's building a graph knowledge base.
And which means you can easily retrieve what's relevant because because that will largely help the large language models.
And so so they use the so the index documents and put them into the graph format for,
for smart retrieval for the large language models, which is a which is a which is a graph rack.
Um, yeah. In this case that if you want to know more knowledge about the Atlas database, you need to do a trip from Beacon Service.
And Beacon Service actually, uh, affect the helpdesk application alerts application.
And I mean, so that with this graph structure you can finally get the right answer.
So graph can not only help you to efficiently retrieve the knowledge, it helps you to really answer the correct answer.
Because if you don't have this graph structure among your documents, you only you won't get a correct answer at all.
Um, yeah. I'm going to fly through some of this.
Uh. Right.
Uh, right. So basically the example to complete this example, you will say when users are asking which application will be affected.
And you first got a structured evidence from D1, D2, D3 because they all connect to each other.
So that you can answer that correctly. Um, I'm also going to fly to more because this is the second part.
This is the last part is more about the current research or current usage of it.
Um, right. It's just showing you that if you don't if you don't have the graph, you're going to do the retrieval incorrectly.
Uh, okay. Another usage of the graph. Uh, yeah.
Uh, let me finish in another three minutes.
The graph can be used for another for other things around large animal models and agents, right?
Like a graph edges, a graph graph is just one of them, which means you're just trying to retrieve your knowledge smartly and correctly.
Recently, we're building more things around a graph because if you know, because a current agent running,
for example, if you're calling the Codex or Cloud code, you're asking for a specific task from the agents.
So what are they doing that? They're actually executing something called a trace.
For example for example, this this is a coding example which I presented to at other places, for example.
Now you want to do some coding run and the agent will do the following things right.
Like they first of all inspect the files.
For example, under the project files they have a configuration runner and they need to add this configuration.
For example, they change the time mode from 60 to from 30 to 60.
And they add some other tasks. And finally they run a test.
And finally they submit a patch. So this is basically a this is a this is the five actions of the simple a simple coding patch.
Right. Like this will be agent. It's supposed to run however.
So this. So this is more like details. So so so so so in short.
So in short there is a dependance. There's a this is a this is actually the execution from one, two, three, four, which is all great.
And we hope the execution will be one, two, three, four, five.
However however however there will be something called a there's there's a dependency happens which we never seen before.
For example, if you want to run a test, you need to, you need to, you need to read the configuration file.
However, if your second step which means when you edit the configuration file fails, your run test will test the test run files.
So which means the in the agent execution. The failure happens because you assume it will execute in this order 123, four, five.
However, maybe the intermediate step like 1 or 2 or 3 or 4, they just simply silently failed and your actual execution will be totally different.
And the dependency will, the dependency will, will will give you pretty bad results.
So so so so one example we're showing here is that if you want to do it, if you want to do it in this step three,
it doesn't actually depend on step two, which means you can write a separate test file.
However if you don't execute it doesn't depend on edit the configuration file.
However, if you really want to run the test,
this depends on three and depends on two because this will this because because actually if you if you don't if you don't add a configuration file,
the task doesn't mean anything. If you don't have a test, you couldn't actually execute the task.
You couldn't really run the task. So which means so which means the agent running is actually also based on graph.
And there's a hypothetical graph. You hope it run in this way, but in real world it doesn't run in that way.
So therefore now we're saying in agent in agent execution you have this execution graph which is assumed.
However, there's a real dependency graph which you should also model, which means which execution is really dependent on the previous step.
And you shouldn't let it go. I mean, this is just purely research and just put it there for, uh, for the person who are interested.
And I will fly through some of this and um, um, the last one before we, the last one before we,
uh, before we, uh, before we finish is, uh, is another separate paper we had recently.
Uh, it's called the topology. Topology matters in action and privacy.
Uh, so so so so consider the agent execution as a graph.
Right? For example, uh, like a step 123, four.
Or sometimes they have a very complex structure, like, uh, like a star.
Like a complete. Complete. Just mean each node connect to each other.
If each of them represent one agent, multiple tasks are achieved by the agent orchestration.
Like they help each other and assume there's an attacker.
Want to steal the knowledge from the user. Like for example, this agent is bad.
They want to steal the knowledge from this, uh, from other agents.
And for example, their target agent information is here.
So in that research, we find that, uh, your agent graph is a structure is important because if, for example,
if your attacker and the target are close enough, it's very easy to release your privacy information.
And the, you know, for this chain because they're far from each other.
Uh, it's harder to steal the information anyway.
Uh, all the all the things that I'm trying to put in this, a few examples are showing you that, uh,
even in the large language model and agent time graph is still graph is still important because you can say the execution dependency are all graphs,
and many of the failures are because of certain edges of the graph are broken.
And there's an emerging, uh, there's an emerging group of the research on how to use graph to describe the agent execution.
So so so so don't feel like a graph neural network or something.
Nobody cares anymore. Uh, I think they got there. They got the I think they got their second chance in the agent time.
And, uh, so, for example, one day maybe you will get a job because, you know,
Or Graff as a field person in the in the world, still knowing how to do the graph for agents.
Okay, we're going to come back in class for ten minutes.
I'm not sure whether you you it's enough for you to run to Taco Bell.
Maybe you start your mobile order. Okay. See you in ten minutes at seven.
Yeah, I think the happy hour is done. And now we're back to. We're back to lecture again.
Like everyone's expecting. If we can get a quiz. So to give the people who are who are on for recession some surprise.
Unfortunately not this time. Because, you know, my professor also matters.
So. So if you check my resume, my professor. I think my first reading was one.
I was shocked because I didn't even teach anything by that time. I think they just got the wrong person.
I don't know what happens, but there's no way that you can, you know, submit a rebuttal or whatever.
Uh, this I didn't go for the round for dispute, but you will say this is weird.
And, uh, I think I roughly remember the person saying, I don't remember because I didn't even teach her anything by that moment.
And I was just new to USA. And the first semester, I was just like, a doing the research.
So I didn't teach, but I received a rating at one.
I have never I've never teaching anything. So you will say, but if you know Chinese, you will name, you will know.
My name is pretty common in Chinese. So which means I take the fall for some other folks.
I don't know where are they, but hopefully they appreciate my sacrifice. So.
So I'm open to any reviews. However, just want to make sure just you review the right person.
And also again, even at the US, the CS department, there's another colleague who have the same first name as me.
So make sure you review the right person. Hopefully his students also write a review.
The right person. Also, I think I got a few very good questions for commands during the during the break.
So I think one command is that one commands that people ask me whether certain research projects should be done also at the same like.
I mean, people ask whether we should do this, certain projects or whether we can do the switch.
Again, the projects you can you can switch of course, chat with chat with your tea as well, because we still want to to deliver something meaningful.
But of course if you realize something, it's not feasible or not doable anymore,
you should just switch it because it's not a course that we need to stick with the projects throughout the way.
And because of the evolution of the evolution of the agents, many problems are solved by themselves in maybe two months.
So whatever you care most now may not, may no longer care, may no longer matter in two months.
It's by agents I don't know. It's a crazy time. It's quite crazy, even for myself.
I think I started heavily using agents starting from February this year, and by that time everything is Everything's quite new to me.
Originally I was using the the Codex in PyCharm and they have their plugin.
I like it a lot and I'm using them to review other things.
I just do the copy and paste by hand. And soon enough I realize I don't need to do this by hand anymore.
I totally switched to cloud code. So I start from the codex.
I move to cloud code and I wrote a lot of like skills.
The skills are no longer matters for many of them, and because agents are doing orchestration pretty well nowadays.
Similarly, people are talking about word models during the break and funnily enough,
I don't know whether I share the story like I saw on Twitter that some Stanford Labs they're using directly using the visual language model like GPT,
Astra, or on robotics to do this, navigation and some tasks.
And, you know, before, before people are doing this before.
There's a certain research called a word model in as a middle layer to play.
To play in the middle between some decision making and with the robotics.
The word model is a very hot topic and embody it's very hot topics for robotics.
And there's a lot of startups are worth billions of dollars and people are crazy.
However, when we realized when researchers researchers are realizing that if they can
simply plug in the VRM directly to robotics and achieve some good performance,
maybe these startups will suffer. Uh, so so so it's a crazy time that some of the problems, if you don't solve now, you don't.
You don't solve it. Maybe in another two months. I don't know whether that's good or bad.
Which also reminds me, reminds us of when we're designing the when we're designing whatever the the course related materials,
especially the exams, we need to make sure something are sustainable or lasting a bit.
Right? Like for example, why we're doing this, the weight sharing for the for the for the for the entire deep neural network.
Basically it's because. Basically, it's because these words are pretty complex.
They have the general data. They have. They have graphs, they have sequential.
They have images. We just need to find an efficient way to handle different data structures for the feature extraction,
and then doing the representation compression and then making the prediction.
So so all we're doing for this entire lecture or not entire lecture or entire semester is learning how to compress data.
So so if you only remember two words from this class, it's just data compression or compression data.
But we're just trying to compress different levels of the data, different structure of the data using different learning paradigm.
That's it. Even large language models. It's also a compressed first generation then.
Right?
Like you, you compress the word knowledge into a model and then you're trying to generate by by predicting what's the next highest probability token.
It sounds very simple actually. this word is complex and simple at the same time.
Before we move into this so so the current. So the second part of this,
for the next hour or so we're going to cover the training dynamics which means for deep neural network training how to do the initialization smartly,
how to do the data normalization, how to do other things before we even jump into this, any, any, any questions or anything like we can.
Okay. Happy to happy to provide any, uh, you know, general, general feedback on whatever you're asking.
Um, but of course, no worries. We never force anyone to answer any questions.
To ask any questions. Um.
I don't know, I don't like the sample, but my colleague told me because there's no no choice for the right eyeballs.
I just got this, um, the green one. And my colleague told me once they got one from Parkside.
And that apple look the same for the next three months.
So? So she. She stopped eating this type of apple because something look like it doesn't change in three months.
Doesn't sounds right. Um, anyway, we can start again.
Uh, actually, this is really refreshing. I couldn't. This actually got this two.
Anyway, it's really refreshing. Um, we should start from the training dynamic again.
So. Which means, uh, when we're training a deep neural network. As a quick recap.
Remember, remember, we we first started from the linear functions f equal to w f w.
And then we talk about if you just make this a multiple layers then you can you need to add some nonlinear activation in the middle.
So in this time it's it's a it's a ReLU. Otherwise.
Otherwise if you don't have a nonlinear functions you will simply just do the w to multiply with w1.
This is equal to. Another weight matrix is equal to a linear function, so which means nonlinear activation.
Help us to add this flexibility and interesting properties to the deep neural network.
We also talk about the same and we talk about these filters. We talk about some architectures.
And we also just finish the deep graph neural networks. And in the last lecture we also talk about this recurrent neural network.
Right. Like a which means the current state depends on the past state and depends on the current input.
So which means this T minus one is the last state and xt which means the current input.
So this is a. So you're going to learn the state states here.
Uh so so so this is the recurrent neural network.
And however whatever the deep neural network you are learning, by the end of day you are trying to Optimize through optimize the network parameters.
For example, recall for for deep graph neural network, you are learning that with matrices W and B,
which means the which means the neighbor weights and the self weights.
And for convolutional neural network, these convolutional layers get their convolution layers that get their own weights right.
And the fully connected layer also gets their weights.
So for recurrent you get the weights to multiply with the last state, and you also get the weights to multiply with the current input.
So basically everything is about the weight weights learning.
And and it's all through this optimization optimization again which means you you need to get a loss function.
You need to do the gradient descent. And you need to do the backpropagation.
In the past few, in the last few lectures, we only talk about the general framework,
but when we look into the details, they can be much more comprehensive.
And so so basically we're going to follow the example for image classification.
And through these examples we're showing you that how to make this learning work by preparing the
data while activation choosing the activation and doing the initialization optimization smart.
And the second part of the lecture will be uh, I don't think we are going to cover the second lecture, sorry,
the second part during this lecture, but we're going to talk about training and validation and regularization.
And finally we're going to, uh, take something like a fine tuning, uh, frozen features.
And Laura, which means the low rank of low rank something.
Okay. Adaptation. Okay. That's great. I already forgot all this, uh, full name, but.
Which means Laura is still widely used for large model fine tuning.
But I think we are going to cover that, uh, next, next week.
Because this for this slides itself is a 400 pages. I don't think we can fly through that many pages.
Uh, but anyway, uh, it's structured in this way.
So we're going to first start from the very simple, very simple example.
So which means we are doing the flower classification for the image.
You get a small dataset which can contain both of the labeled photos which means and also the corresponding species,
which means you get x and y and mean photos and the corresponding prediction.
It's a it's whether it's whether it's a certain type of flowers.
You got this x and y. And in the middle that will be f. So this is a.
So this is our typical structure. And again this is more like just quick quick quick review or recap for what we talked about before.
Right. Like the prediction is that so. So in one of this learning round before the specific updates originally the two labels rose.
However you you make the wrong prediction here because as you can say, for the three different classes,
the probability you just give this the highest probability, however, is wrong.
The true is the rose. So therefore you hope after this one round of learning your loss function becoming smaller and you can make the true prediction,
which means you add up this probability. Probability add up to one.
So. So this is the classical loss function called a cross entropy. Uh but it's not important.
I mean we're just showing you that through the learning process, you want to make sure you can make the right prediction for the higher,
uh, make the right prediction with the higher probability for the correct labels so that you can this can give you lower loss.
And the process will be you predict again,
the entire learning process will be you predict with the uh you predict your using your current deep neural network.
You compare with label to calculate the loss function, and you back propagate on the loss function to update your weight matrices.
So which means update your trainable parameters. And then you do this prediction again calculate the loss and back propagate and then update.
So it's just a loop as well as showing for the for the for the training step and the so so
we will start first to start from something called a mini batch and updates and flower.
So suppose that you want to you have a lot of training data like you have a 324 flower flower photos.
Uh, maybe the most ideal case where sometimes you wonder, like how many images should I use for training in one batch, right?
Because why? We couldn't just use all the data for training directly.
The reason is very straightforward. We couldn't afford it, right? I don't know if you check the GPU price.
It's it's it's rocket high at the moment. Uh, when I tried to buy some like RTX, RTX, uh, 6000 Pro, uh,
I think earlier this year it cost me around the roughly 7000 or 8000 per card, but not as is doubled.
So we stopped the order. Uh, so you will say one big reason we couldn't put a lot of figures or images or
whatever for Chinese because we couldn't afford the we couldn't afford it.
Uh, your GPU memory is limited. Uh, I don't know how many, how much GPU memory you get.
But for a general person, there might be 32, 64 at most.
And therefore you can only you can only afford to fit a certain number of the images.
So so one so so one idea people are always doing is called mini batch, which means you you don't use the full batch of your training data,
but each time you just put in a random 32 or a specific split of like, like, say, 10% of your images and you update using a certain group.
The idea is is also a is so which means if you just do ten mini batch, you're going to cover all your photos.
And this also makes sense, right? Because uh, because if you sample your feature sample, your training images are randomly,
which means they should give a good coverage for the for your for your training data.
However, you don't need to have the high burden of the GPU memory.
Uh, so so so so if we starting from the training training network, there will be some basics.
I'm going to be fast on this, however, but for the person who never seen this before.
Uh, yeah, I think it's straightforward. So basically.
So basically in general machine learning, we have a three set of the data called the training validation and the test training,
which means this is a specific type of data. You you can use them for do the drill model updates and wait wait wait wait learning.
And the the validation will be a small set of data to allow with your training data to decide when to stop,
whether you choose the right hyperparameters or, you know, training mechanism,
the test data will be something you should never you should never touch. Which means, for example, this.
So? So this will be something you should never leak to your training data, which means this will be something you really want to test on.
Finally, make the final prediction. However, now there's many of the there was there was a joke saying for the researchers,
if you if your model doesn't work too well, how to actually improve your model performance quickly.
Just add your test data to your training data. I'll explain why this is why this works, but why you should never do this.
Uh, and so basically so basically.
So basically, uh, so basically, uh, in most of the cases, so in most of the cases, if you don't have the training validation test, you only get,
for example, if you're working at the industry, you only gave you a big data set saying you need to develop some machine learning model.
What you need to do is that you need to do this data split by yourself, which means you keep in the past.
There's a rule of thumb saying 70% of data for training and 10% for validation, and 20% for test.
Or you can do some other numbers, but roughly, for example, 70, 75, 20 and 5%.
It all depends on the specific cases.
However, the training data should be the majority of the data, and the test data should always be holdout so that you don't.
You want to test your generalization on the test data, but we're going to cover this more in details.
Now we're going to talk a few about this tricks during the optimization.
Because thinking this way in the middle you're going to do this gradient descent.
And there's a lot of like a calculation. And there's a there's a lot of like a chain of rules and etc. etc..
So one of the big things will be you always want to compare the you you want to make the
calculation on this comparable numerical features so that so that you can so that your model.
Are so your optimization process are stable.
So so so so so one step is called data preprocessing. And there will be a few.
There will be a few things within the data preprocessing. But the first question is that why do we need to preprocessor data.
So here are examples. So this is your original data. You will say it got a such a shape which means on this x x axis it's more compressed.
And they have a higher range on the y. So so which means so which means and it's also not centered around zero.
So it's more leaning towards the positive side. So this is doable.
This is doable for optimization. However the past experience tells us it's better if you can actually center your data around zero,
and also at the same time to put them in a more standard range.
It's more like a, for example, if they're allowed through a follow up following certain a distribution, that'll be even better.
The reason why this doesn't work that well I can give you some examples, for example.
This is just the main, uh, this x just the main mean what?
Uh uh, okay. This number, this x just mean your monthly salary or monthly income and this y just the mean.
I'll flip. Sorry. This x just mean, uh. What's the what's a good example.
Okay. This x just mean your monthly income. And this is just the mean the price of your, of the car you are driving.
So usually the salary may be range from.
It will never go negative. But maybe some people get negative salary.
But anyway, what we're trying to say here is that your car can be very expensive and your salary can be at a at a natural range.
However, if we're using this x and Y to predict the like the social class you are in, right?
Like in that sense, maybe this this this specific like your car value will dominate this to features because it has a larger range wider range.
And so so maybe your salary in comparison to the car value looks very small in a sense.
So so so so trying to put the data in a more comparable range help us to treat each of the feature more equally.
So that's one of the reasons why we want to do this data preprocessing.
So basically we want to make the different features magnitude in the, in the in the,
in the comparable range so that each of them are playing certain playing more equally roles.
The reason is because we don't know whether certain features are more important or not before the learning algorithm.
So that's why we want to do this. General data normalization.
So so so overall people are so so so so so so overall people are doing this.
Uh, sorry. I'm just trying to find a good uh okay. So so usually people are doing this, uh, something called normalization.
The formula is extremely simple, which means use your user data subtracted by the, the mean or the or the average or in other sense expectation.
Again, as we mentioned many times when you read a machine learning paper or this type of paper,
when you say expectation, it's just a mean average of the it's just the mean, average or mean.
So there's nothing tricky in the sense and which means you first subtract the, the mean and then you skewed by the standard deviation of your data.
So this is called normalization. So which will convert the original data the original data.
First subtract the expected expected value.
This gives you the zero standard, theta and Azam divided by the standard deviation will give you this a normalized data.
So everything is self-contained or self computed. So after this step you will see the data are are in a much more you know.
Well it's a better skill for, for the model to to digest.
The simple example would be for example the original input will be 24868. You just plug in minus the mean of them is five,
and then divided by the square root of this standard deviation I mean sorry square root of the variance which is standard deviation.
Then you actually convert your data from 2468 to a -1.34 to 1.34.
So you will say now they're symmetric and they're centered around zero and zero range a little bit.
It's a little bit better I mean it's more like you rearrange them into this format.
And another, another another quick observation. You can say that from this.
From this true value, the difference will be a 1.9, right?
I mean a run. Yeah, it's a run 0.9.
And the distance between these two are also a round point. Also similarly this is also a 1.9.
So which means you you you. You actually maintain the original distance I mean this distance among these.
Among themselves are 222, two. So which means roughly you maintain the.
Distance or similarity. And however you put them in a better symmetric center zero.
Range. Uh, so you can say the normalization helps us to adjust both of the.
Mean and skew of the data. And uh, and, and.
There will be something called a batch norm.
So what we've covered this batch norm. Uh, a few lectures before, uh, if you remember.
So when you are having that activation function versus activation function, I don't know whether I have I have slides here.
Um, okay. I think this is, uh, do we have one?
Uh. Oh. For example, this is activation function, if you remember.
Uh, I don't know, I just hear something, but I don't know where it comes from.
Uh. It's weird. Uh, maybe it's just too hot in LA.
I just got an illusion. Uh, or delusional?
Uh, uh, here we go. For example, we're trying to apply this, uh, we're mostly trying to apply this normalization to the activation function.
The reason is because, uh, you know, the activation functions are very sensitive to the data range.
We will cover this. Uh, we're going to do the recoveries for this activation function thing.
But they are very sensitive to the data range. So people need to people want to do this uh batch normalization on the activation.
So it's still the same thing right. Like you you first compute this, the mean and variance.
And then then you do the scaling. It's the same function.
I mean subtract by the zero or subtract by the expected value which is mean and then divided by the standard deviation.
So. So if you just look into the pseudocode which means you get a mini batch of their activation or whatever,
you first calculate their mean and you calculate the standard deviation.
And then you do the scaling and you do some shift.
So uh yeah, it's a, it's a, it's a short it's a I don't know whether people worry too much about this anymore,
but uh, the possible benefits is that this can help us to improve the optimization and gradient flow,
because you put your, uh, numerical value range, uh,
in this comparable in the comparable range and in and in combination with other things like learning rate and initialization,
we will talk about in a few minutes. We're showing you that this makes the entire learning more robust.
So in the past the people are doing this convolutional neural network.
They can do this convolution to this batchnorm. Then they apply the activation.
They do this the convolution again they do the batchnorm and then they apply the activation.
So. So so usually that's a very typical standard of operation in the past.
Uh, the reason why is the BatchNorm. Because, you know, you just apply to this batch and there's another batch.
Usually this is applied before the nonlinear activation functions.
Uh. And one question is that during the training time.
So during the training time you you need to calculate this, uh, specific statistics of the,
uh, like mean and standard deviation, uh, so that you can do this scaling.
However, during the evaluation which during the prediction You.
There's nothing you need to really calculate again, because it's not changing.
You just need to remember or store the training statistic. You just move the.
You just save this a mean and standard deviation here.
And then you apply it during the evaluation or the inference time so that you keep everything at the same scale for the prediction.
So uh, so basically I don't think too many persons know this anymore.
Uh, if you if you're using PyTorch, if you really read PyTorch yourself, you must know there is something called evaluation mode,
which means you need to really activate the evaluation during that time.
Uh, they can they can reduce many of the statistics before.
But I assume everyone now is just using, uh, agent to control PyTorch and, uh, yeah, because in the, in the prehistorical time, prehistoric time,
where when we're writing PyTorch, uh,
there's a certain step that you need to call something to do the backpropagation, to do the loss, to do whatever.
But I don't think you haven't written any real code by myself for for for quite a lot of time, let alone PyTorch.
So, uh, but again, that thing, um, I think that's a very good example to show here as well.
Uh, PyTorch. Yeah.
Uh, I don't know what happens. Yeah.
So in the past, you can say that six years ago, actually, I didn't I didn't realize the StackOverflow.
They also changed their logo somehow.
I don't know whether what happens, but, uh, many, many years ago, when you when you're six years ago, when you were writing,
when you were writing a PyTorch code, you need to explicitly say in this execute the model dot evaluation.
Because because this actually tells the model to face some of the statistics.
I think it's kind of sweet for sure. This is a switch for some specific layer of blah blah blah to behave different during training and inference.
Uh, BatchNorm? Exactly. BatchNorm should be knowing we're doing the evaluation.
So they're using the pre save the like a mean and the max so that sorry mean and standard deviation to to to do the scaling.
Uh so so in the all the time that because you write a code so actually you can, you can grab a lot of like concepts.
Well, uh, now it's no longer the time, but during the training time, you can, you can say you don't save any statistic.
You you actually allow the statistic to be recomputed because everything's still changing.
Uh, anyway, I think it's very it's very interesting.
I mean, it's exactly showing what we're trying to say here, which means, uh, batchnorm or dropout.
Dropout. We're going to cover as well in this lecture, in this, in this blog as well.
these are the things which means during the training time you make it dynamic and during the evaluation time,
you just you freeze and you use whatever you saved before so that you can make sure the evaluation and the training are on the same scale,
or using the same number of other statistics. Uh, besides BatchNorm, there's something also called layer norm.
Uh, so if you remember, the batch norm is the batch norm is doing the normalization through this,
uh, let's say in the columns, which means in per column they're calculating this the layer norm.
They're just doing this patrol. So basically they're just different directions and they're still doing the normalization.
And it's they compare the features within the one examples of token.
So this is usually used in the transformer. And this is more used in the uh commonly in the convolutional neural network.
These are just like a batch norm and the layer norm one in the column and one in the rows or the features or the samples.
Usually you don't see people use them, both of them, at the same time.
They have very specific usages. Uh, another old things people are using is called PCA whitening.
But of course I think these things are getting dropped, but I would just use a few sentences to describe what it is.
So basically so basically.
So basically PCA just mean, um, I don't know whether it's for the people, for the person who took five, 16, seven 4 or 5, six, seven before.
Do do do do it also cover PCA as well okay.
Okay. So this is the principal components analysis which means it's a technique to uh to to to find giving your data features.
What will be the primary so-called principal components to drive this feature.
Drive this data. For example, if you want to predict the stock price, you can have a lot of features.
For example, the highest price today, the lowest price today.
The median. The mean and some other information.
But but soon enough you realize all these features are correlated with each other, because the highest feature couldn't be lower than the lowest.
Lowest. The highest price couldn't be lower than the lowest price today.
So they actually correlate with each other. And the median depends on low and high.
So there's a lot of features that are actually correlated.
If you have a hundred features in your data, many of the times they are not necessarily giving you 100 times contribution to the prediction.
So if you just do the pieces, the way to compress to do the compression again, compression is learning.
PCA is a learning compression. Uh, Pisa is doing a way to compress the correlated data into a so-called uncorrelated.
But actually it's very hard. It's just removing some of the linear correlations among the features.
But I don't think we use this anymore. It's just old slides that I forgot to remove, but overall.
But overall, overall, what we're trying to trying to show you is that for for general deep neural network,
you are going to do this preprocessing including even for the images.
You also need to do some other things. For example, you need to resize them and crop them into the same size because many of the images,
they are not giving you the standard size and some of them are larger, you need to resize to the smaller one.
You can also do the cropping as well. And and some of times you want to do this normalization regarding the numerical range and the
channel color you also you can also apply the normalization to this per channel min and scale,
which means you can just try to put your data in the same range.
Uh, yeah. Our flags are important interview questions, which I added a few years back, but uh, right, right.
I think this also is a good example, which means if you are still using scikit learn to write anything, maybe not.
Which means you can simply call this the standard standard scalar, which means its normalization to fit your data.
You don't need to write anything, and this is during the training time.
And you save your scalar and add a at the test time you just apply or the evaluation time.
You simply apply the scalar dot transform to do the normalization of your data, because the min and max is actually saved in the scalar.
This this this object themselves. Um, anyway, you have agents, so you don't need to remember anymore.
Uh, right. Again, it's a pity that I couldn't even write a for loop nowadays in Python.
I think sometimes I'm crying in the night because of this. I'm just kidding.
But I don't know. I don't know what the what? We can come back. We can come back to the world, which everyone still knows.
The general syntax. I recently read a trader online saying there's engineer who who was.
Who has been working at a large. Large or large technology firm for a while.
And he was I was totally pissed off saying everyone just like push enter every every day and everyone working long.
Everyone got a long working hours, but they're just simply pushing enter with agents with cloud code.
And the product managers keep saying like, what?
Could you ship this? Because you don't need to write a code, you just need to approve that code.
Nobody read it anymore. I think now it's actually happening everywhere, and all of my friends told me all other industries,
that they got a certain quota of certain quota of the API usages.
Even in earlier times, people may be assessed, given how much of the code you know,
there's there's early time people are being assessed by how many commits you make.
You made a day, you made a per day, and how many code changes you you introduced per day.
I don't think that makes sense.
Makes sense anymore nowadays because I can simply submit millions or hundreds or even millions of a million of calls per day, per, per, per day.
It's really simple. I also read another thing that a saying, like people are using cloud code to do the refactor for the Codex code,
and they do a lot of like saving on unnecessary tasks because agents are really enjoying writing unnecessary tasks.
For example, they're doing a lot of like SHK 250 check.
Nobody knows why, but they have a strong preference for writing certain crypto crypto auto tasks.
It's weird, but be careful. Another thing which troubled me a lot is that because I'm maintaining a lot of like open source now,
I receive a lot of pull requests from random person. Like, they're just like, trying.
I don't know, maybe this has already become an industry. Like, uh, trying to put the, uh, the experience of, like, open source contribution.
Because I just received too many input requests. I don't even think that makes sense.
Everything is written by H. I have no problem with agent, but I don't believe anyone even read.
What are they doing? Maybe they are just saying like a prepare a PR or pull request for this for for for famous open source.
And then agents start like doing the research and running a random PR for a random open source.
I think this is weird, but it's just keep going.
We will say how we will say, oh, I think another thing before even we start is that I think what I read from news is that anthropic,
they got a lot of like a person from different religion,
uh, in the room to discuss whether, for example, large models get their morality motions or other things,
because I think I don't know whether this is true or not. this.
This might be fake news,
but I'm just sharing because I think the analysts saying cloud code or cloud just repeat something like I'm a disgrace for whatever for 50 times.
And it's more like self inflicting an appearance or whatever.
So people now are saying whether they really got a something in a more philosophical region or things getting crazy,
I think they, I think answer because they even keep the, uh.
The cloud three or output three or something still alive.
And because that model explicitly saying like it doesn't want to be, you know, stopped or retired or something.
So they, they still give this a third version, the chance to, to write, to write some notes for a blog, like every week or every month.
So finally, I think this everything is going to a much more interesting, uh.
Uh, I don't know, like, this is. It's hard to command.
It's very interesting. Like, each day when I read the news, I feel it's a bit surprising and crazy.
So, uh, it's also. It's also very impressive. Uh, okay, let's move to the next part of this, uh, learning training dynamics.
And, uh, it's also a quick recap before we start. Uh, so why do we need.
Why do we need activations? Because if you all have this linear transformation, recall that w1 w2 x.
If you don't have this nonlinear activation like for example taking the max in the middle,
everything will be, you know, if you combine two linear transformation, that's still a linear transformation.
So you really need to have this,
a nonlinear activation in the middle to introduce the flexibility where the something useful where we cover a few activations before.
Right. the sigmoid tangent, ReLU leaky ReLU max out and l2 sigmoid.
As we mentioned, they have this a big issue for the saturation. The only activation part is from negative five to 5 or 10 to -10 to 10.
If you check the actual values you will say besides this region, everything is extremely small.
So which is not very good for a lot of learning problems.
And right, the saturated sigmoid has very little or very small gradient and you couldn't really learn too much things from it.
Um, yeah, I think we've covered this already.
So we're just going to fly this through.
But as a quick recap, uh, and the reason why we use this ReLU, which means rectified linear units, is because it doesn't saturate.
I mean, in the positive, it's fully activated, it's fully activated, active, active.
And it's a vector x. So which means you get a full signal.
The taking derivative is very simple. Everything's great. It's a computationally.
It's very efficient as well. However. However however, they got also got their issue because the negative part they got no signals.
People have this parametric rectifier which means they add a small alpha on the negative side.
But this is very small.
They have other versions of ELU and they have the people got some rule of thumb saying for example for the convolutional neural network for MLP.
ReLU is always the typical go to choice and transformers.
Nowadays they use the glue or get it stay low.
Um, well anyway, it's not critically important.
It's just like the choice the common choice people are using. Finally, people are still using like sigmoid or tangent in certain places.
For example, if you recall, the sigmoid output will be around a 0 to 1.
So therefore if you want the probability outputs, You can still use the sigmoid as a something as a good output gates.
And why this matters is because your activation functions will decide your.
Activation functions and your specific deep neural network will decide how.
How you how you initialize the deep neural network. So now we talk about.
The initialization of your weight matrices. Let's think in this way.
Here's a convolutional neural network. What if I just. Initialize all my weight matrices equal to zero.
What will happen? It's not a question. So no pressure to answer to.
To answer me. We are teaching enough.
Like I learned a trick to. Not solve it myself.
So? So it's a question for myself. Like why don't we just initialize everything with zero?
The reason is very straightforward, right? Like if you initialize things from zero.
What? What about your gradients? Or what about your gradient?
It's may still be trapped at zero all the time because it's a chain rule.
You need to. You need to multiply by your weight. But what if I just, like, start from the same small number or random number?
Like if I initialize all my weight matrices with the same number, let's say one.
Uh, the issue will be the issue will be if you get a 200 units and they get exactly same,
same same start, and if they get the same updates and they will be trapped in the same place,
like you don't get enough expression, or if you don't look, you don't get enough ability to to do the expression.
So which means that's not a, that's not that's also a not good idea.
So, uh, so so so so in this way either you use the zero initialization or use some like the same number or identical hidden units there.
They can remain identical throughout subsequent updates. So it's not a good choice.
So. uh, so. Which means then you need to actually find something, uh.
Uh, which are which which can facilitate your learning process.
Uh, then then the very straightforward idea will be, can just initialize my weight matrices, uh, by some, like a small random number.
But maybe actually, this is not explicit enough. Let me show you one more thing.
Before we really, uh, before we really talk about this, uh, if you remember.
What are we talking about? For the for the weight matrices. Sorry.
It's, uh, it's this is old computer. I recently I recently got a mac mini, the new version, and it's very convenient.
And I was even tempted to actually bring to the class, uh, here because we got a screen and, uh, but then I realized I need to plug in the, the power.
And I also need to get the mouse and keyboard. It's just not convenient at all, but I like it because I originally.
When you are working, sorry, it's still open. When you are working with agents, you don't want to stop like you want to actually save the agent.
History and conversation. So originally, however, I have multiple computer at home and office originally.
What happens is that I need to make sure everything is a great commit, get pushed so that I have all the information.
Even that's the case, the agent history are lost at home and office.
So this is a mac mini. It's a very portable. It's a very light.
So I got a I got a small case to put in my bag as a laptop between home and office.
I'm pretty happy now. But the reason I mentioned the weight matrix or why I opened this, the old ones.
Because recall recall even for the most, for the simplest, the linear linear model a value equal to x dot product with w.
We were trying to learn this weight matrices. So we're trying to learn this.
So basically word starts is important, right? Like if if you if you if so this is a good example.
Like if we start from like a random initial small numbers then we can on top of this we can try to keep updating the weight matrices.
So so this is the weight matrix we're referring to. And thinking this way if they all start from zero what happens.
X x dot x dot product. With w just 000 you get no signals at all.
And if if they all start from the same number like one, blah blah blah blah blah blah, uh, it's still not good for optimization.
Uh, you need a you need more time to make things, uh, becoming expressible.
So, so that's why, uh, so that's why we come back to this thing, how to do the weight initialization smartly.
So the one idea we'll be doing is a small random number initialization.
Right. If you use the this is a Gaussian. This is the Gaussian distribution and the zero mean and the standard deviation equal to one.
And you can do this normalization. This sounds a good idea right.
And you can also you can also do a skew because uh because in case you get a very large number recall for,
for this normalization, for this Gaussian distribution, you can still get an extremely large number or something like that.
Um, so however, there might be a few issues for this, for this starting point.
Uh, this might get too small if your signal's or gradient.
If you have a very deep, deep neural networks and this can actually become an issue.
Also at the same time, if you recall, we have a gradient explosion. Uh, certain times this may actually become too large for the gradient.
So we want to make sure initialization initialization gives us a good optimization starting point so that the optimization can be a stable.
So uh, so so so one idea. Uh, so so so so so so one idea.
So so so so so for example, if we really visualize, if we visualize the activation statistic, even using this used in this way,
I mean this Gaussian distribution, you will say in the initial layer the activation looks fine.
And however with time goes by which time goes by you will say, okay, you're losing more and more signal.
The mean is stable. However, the standard deviation is losing, which means it seems quite compressed because.
Because all the activation tends to go to zero for deeper neural network, for the deeper layers of the deep neural network.
And in this case, the reason is because you get a tiny gradient and gradually they don't get more information.
So, so people to, uh, to, to address this issue,
people identify other initializations or at least compensate for this issue or for example, they do this Xavier initialization.
Uh, basically they basically they're trying to balance the signal skills across the layers.
So originally originally thinking this way,
the normal normalization on the only this only depends on some like a layer knowledge for example the dimensions.
That's it. They don't they don't consider how many how many layers they don't consider.
For example, this is a six layer deep neural network. And however however this Xavier uh, thing like for different uh,
they actually consider the number of the layers to rescue uh, to rescue the information.
So with that in mind, if you visualize the, uh, if you if you visualize the activation functions, you will say it's better.
It's not perfect, but it's it's better than the original version, which means original.
Everything will be compressed and you're losing the activation in the layer in the, in the, in later layers.
However, in this one you still keep some of the standard deviation or the variations.
Uh, you know, for, for, for convolution layers, you also doing some changes as well.
There will be some like a mathematical proofs, but it's all good.
We're not going to cover that. They're showing you why we get this number and why you should.
You know why you should enforce the variance of the weight matrix is equal to one divided by the dimensions of the input.
Yeah. You don't need to worry too much about that. So, so so basically this is a way to resize based on different layers.
So so so so layer input and output will decide the initialization of the weights.
So so so that would be one way to do that. And however the issue for the ReLU is still the same if you because ReLU faced one
issue regarding uh regarding that they only get activation on the positive side,
right. Like they don't get. Activation on the on the negative side.
So so if you're if we're just doing the simple, uh, you know, Gaussian distribution in initialization,
you will say zero also losing the signals and which means in the later layers there are also losing the information.
But and also so so so so what happens is that people are also trying to scale
scale the skills a ReLU activation using this initialization initialization way,
which means that the square, the just times the square root of the two divided by the two divided by the dimensions of the input, you will say.
Now they've got a very stable standard deviation and mean around this, uh, you know, entire activation region, which is all good.
So all this, all this, ah, we don't we don't need people to memorize anything across this, but we just want to show you that, uh,
all we want for the activation that in the later layer the and the first few layers,
they look still the similar around the mean and standard deviation.
So which means activation becoming stable. We're not losing signals.
So this means losing signals like in the later layers. You don't get updates anymore.
We hope like they find a stable way so that you want to make sure all the activations look pretty similar, even in the later later later stage.
This is a quite useful for for for ReLU layers.
Um, so there's a rule of thumb or rule of thumb, or the common rule saying, for example,
for ReLU you need to use the common scaling or for other feedforward you just need to Xavier you use the for the pretrained backbone.
You don't need to do any initialization. You just like starting from zero learned weights.
But we're going to talk about this weight transfer in the third part or second part of the you know, this this lecture.
Um, right. So which, so so another thing to mention is that you can say, uh,
for different family of the activation, there's a different scaling you need to apply.
This is already a common sense. You just need to apply the right one.
That's it. Uh why initialization. Uh, important is because again, by the end of the if you want to do the optimization, you need to scale your data.
You need to make sure your feature is preprocessed, the activation, uh,
the activation itself starting from the good points, uh, so that you can, uh, so that you can I mean,
the weight matrix is starting from the good points and so that you can have
the strong or effective activation signals and the gradient can be learned.
Uh, so so so so therefore, uh, but however, this initialization also needs to be mapped with the,
the architecture of the model and also how to train the model.
But anyway, the suitable initialization help us to help us to, you know, get a better chance to converge on the optimization.
So after we doing the data scaling, after we initialize our weight matrices, the next part is the real optimization of the deep neural network.
And in deep neural networks, in the deep neural networks there are few things we need to, uh, we need to note, uh, so so so so so recall the.
So recall the optimization looks like this. Right. Like so this is a so this is the original weight.
And in the next step you want to move to the move.
For example if this is the lowest gradient. So this is the lowest lowest loss.
You want to get a closer and closer closer to this. So basically for the general for the general gradient update you want to make sure your
weight matrices can help your loss function to be smaller and smaller and smaller,
and your weight matrices are updated by the gradient. The gradient is local, which means you compute a gradient many times and in iterations.
Uh, so therefore. So therefore, uh, in PyTorch, what really happens is that during when you are training your model,
you first calculate your, uh, gradient by loss function, loss function data and current weights.
Because you need a current data and you need to you need to input data and your weights to calculate the to calculate the prediction.
And you use the prediction and the labels to calculate the log and loss function to calculate the corresponding loss.
And then you can do the gradient. And the gradient will help you to know the directions of your next updates for your weight.
So basically your weight matrices are are going to move to the move to the place which which will minimize your loss function through the gradient.
Uh, so, uh, so so there's a few terminologies we want to introduce.
The first one is called a stochastic gradient descent which means it's SGD.
Uh, the reason, the reason, the reason, the reason is that, uh, uh, so basically so basically you can do a few things for doing the training.
For example, if you have a ten images, uh, one idea is that you can do one image,
you can do one image and update your weights, do another image, update your weights and do another image update your weights.
Another idea would be you can use all the images, ten images, uh, to update your weights.
And so, so thinking this way, if you use one image to update to update your weights.
So which means the weights are going to be updated to the to the.
Depending on the specific images, however, different images may want the weights to go different directions, right?
Maybe image one 112 ways to go this way. Another image. Want to go the opposite.
So if you use the each of the image to do this, in long run it should converge.
However, your updating can be more fluctuating because you're in a short period of time.
You may go different directions and this may look very messy. And however, if you use the ten images at a time, the issue will be.
It's nice, but the issue will be you may not have a GPU to actually fit ten images at a time.
So therefore in the middle we have this mini batch, right? Like you use the subsample of your training samples to do the model updates.
So so that's a that's more like a trade off.
So this is a mini batch mini batch gradient descent.
So if you read the code is actually giving you a lot giving you have a thousands of images or even more you sample from your data with 125.
This is your mini batch. In total there is There's 125 656 samples, and you only update your model with a given this small data batch, right?
And then you do the model updates. You can control this the sample size.
But usually that's a two to the power. It's two to the power.
Uh you know whatever it's a it's A56, seven or whichever you want.
For the larger images you can use the other things. Uh, another thing to control recall.
Like there's two, two major things in this model. Updates. Uh, one thing is, uh, which direction to update, for example.
Gradient will give you the direction. Another thing is called learning rate, which means the steps of your step size of your updates.
Uh, for example, if you just, uh, in this case, for example, if you update too much, uh, if you directly give it from the original weight,
if you just like a goal step directly to the W2, you miss the best point, which is which is in the middle.
So the learning rate is also very important. Uh, in in in model.
In model updates. So as you can say in different training epochs.
Uh, we hope the loss function getting smaller and smaller and smaller.
That's what we're hoping for. However, in certain cases this can be larger and larger and larger.
The reason is because you're learning what may be too large. So therefore they miss the the missed direction.
For example, in this case they directly go to the.
They already miss the minimum loss and they go to some weird place and and they can go back and forth.
But they this this doesn't guarantee you get a convergence of your model.
However, another another extreme will be your learning rate is very very small.
So in that sense, in that sense, uh, you can see the loss function doesn't change or change slightly change.
So in corresponding to this which means if your step is really small according to here,
here, here, here, very very small, like in many epochs, it doesn't it doesn't move too much.
It's not a right direction. The gradient is on the right direction. However, your step size is too small.
You are learning is not going to make too much of the sense.
Uh, so so so so so so and and another thing to expand regarding the learning will be a directions where the dimensionality is.
So which means you can think in this way.
The gradients were always we're just showing the examples for like one dimensional gradient or one width one one dimensional width.
However, the in the real world, which is a high dimensional space, it's a matrix, it's a tensor.
It can be multiple dimensions. So here we're just showing you two dimensions right.
Like when you're doing optimization when you are doing optimization, maybe it's actually going well in one direction but not another direction.
So this is a this is an ideal last point where we're trying to reach.
However however you will say, uh, maybe we're fine in this direction,
but we're just doing too much oscillation on the on the other direction, which means we're good on W1.
However, we're bad on W2. The bad or good here just mean we're wasting time.
Right. In the best case. Like we go straight to this minimus minimum spot.
That'll be great. However, we don't do too much oscillation on this on this direction, but maybe on this direction.
We're doing bad and we're just doing too much oscillation. Very, uh, we're doing this a zigzag along the steep directions,
and this is a waste of the computation, because otherwise we can do much faster convergence.
Uh, so. But however, it's very hard to find such a smooth optimization because a lot of, like, weight matrices are extremely, extremely huge.
And for large matrices to do the updates, it's it's also very challenging.
And there's a math behind and showing you that, uh, it's very hard to do such a optimization.
Another general challenge in the SGD or the general stochastic gradient descent will be.
It's called a saddle points for the local minimum. The idea will be if you remember in this, in this, in this figure,
if you take the derivative here, the derivative equal to zero or here is also equal to zero.
So which means at certain points you are being trapped in this so-called local optimal points and your algorithm stopped.
So which means you no longer go into the actual low low loss low loss region and you are going to be trapped here.
This is the saddle points. I mean, you don't get a gradient.
Once your model, once your once your gradient calculation becomes zero and you just stop there, you're trapped in this local minimum.
And actually and actually if you say in systems in two dimensions, we're showing something in one dimensional space.
However, if you're just doing the two dimensional space, it's still the same.
I mean, in this case, they just draw a perfect saddle points, which means if you take derivative with regard to x and y,
both of them equal to zero, and your model are not going to update any more.
Once it reached such a point, and it happens a lot in deep neural network.
The reason is because, you know, the optimization happens for the loss function is a very high dimensional space.
So so it has a lot of like saddle points, which means not only one,
there's a million or infinite number of the I don't know whether it's infinite, but there's a lot of like a saddle points.
So which means many of times your model are going to be trapped in certain during optimization and they just get stopped.
Uh. And also again, you're, we're doing this a so-called stochastic gradient descent,
which means we're not using the full batch of the data Like every data to do the.
Training. We're just using a small batch of the data. But, you know, a certain small batch of data are more noisy than others,
than the certain batch are going to stretch the different directions in, in opposite to others.
So maybe you're just doing zigzag, you know, optimization, sometimes they go to this direction, sometimes they go to another direction.
And this makes the entire thing a little bit more messy.
Uh, so so so so so so so therefore so therefore, uh, so so therefore we're just we can also,
we can also, we can also uh, saying why even doing mini batch, mini batch even look noise.
But it can still converges because if you do enough mini batches there's sort of like equal to you just do a full batch.
However, it's getting noisy so you can reach the convergence. However, you're just going to spend more.
It's a zigzag and noisy updates are so sort of it's so sort of so so so so
now the question will be how can we prevent or not be trapped by this issue?
For example, the local minimum and saddle points and the preconditioning for zigzag or noise updates.
So one idea is called something called momentum. Uh, if you are doing trading you you should also know momentum.
I know a lot of momentum in deep learning is that I learned a momentum in trading,
which means if something is actually moving, uh, moving up, this momentum will keep a bit, uh, until the trend changes.
So there's a lot of like, uh, in trading, there's a lot like, there's, there's a lot of,
like ETF they're tracking something which is actually increasing great in the last five months or two months or three months.
And then they're just keep buying buying it because the trend won't stop Until other big things happens.
Similarly for deep learning, if you are if certain direction gave you can, can, can drop or decrease your loss very fast.
We should actually take this momentum and to speed it up. So so that's the idea for momentum.
So for example, if at this point if I have a momentum added maybe I can actually keep keep keep to the I can actually I can actually keep keep going.
So so the idea will be momentum actually reduce the risk and gradient directions which means that which means you have a current current gradient.
But you also add something like a risk in the direction so that you get a parameter updates.
So you don't only compute yourself, you combine with the recent histories.
So similarly, now you can say everything is connected and many of the ideas are similar, right.
Like for example, for that sequential prediction your current state depends on your current input.
It also depends on the past like t minus one I mean last moment.
Similarly for the graph, you depends on yourself. It depends on your neighbors.
And from a momentum it's the same.
I mean, the current gradient depends on yourself and it depends on your recent directions, which means that gives you some very good information.
So if you say enough AI like you will find many of the things are similar or share the same concept.
I think people are 95% that so. So I think I will smartly.
I think the next few slides are even worse.
So I think I will I will show myself some some grace and and enjoy your full reception and we will see you in.
Yeah, just in a few days.`;

const CONCEPTS = [
  {
    tag: "🏗 Foundation",
    title: "Graphs: The Data Structure That Contains All the Others",
    body: `The semester has walked up a ladder of data structures. Lectures 1 and 2 handled unstructured tabular data. Lecture 4 handled images, where pixels sit on a regular grid. Lecture 5 handled sequences, where tokens sit on a line. This lecture handles graphs, and the professor's framing is that a graph is not one more item on that list — it is the general case that the others are specializations of.\n\nAn image is a graph. Each pixel is a node, and it has edges to the pixels around it. What makes it easy is that the graph is a perfect grid: every interior node has exactly the same number of neighbors arranged in exactly the same geometry. Text is a graph too, just a chain. A graph in general has none of that regularity — arbitrary numbers of neighbors, arbitrary topology, no consistent geometry to exploit.\n\nThe running example for the whole lecture is a road network. Four road segments A, B, C and D, connected where they meet, and each one carrying a vehicle count: A has 1 (meaning 10 vehicles), B has 2 (20), C has 4 (40), D has 8 (80). The question is whether road A will be delayed in the next five minutes.\n\nLook at A alone and you see 10 vehicles — a slight delay at most. But A connects to B with 20 and C with 40. Suddenly the picture is different, because traffic flows between connected roads. The professor's point: the real world is not a single-node problem. Everything is connected, and a prediction about one node that ignores its neighbors is a prediction made with the relevant information thrown away.\n\nExam insight: know that images and sequences are special cases of graphs — a grid-shaped graph and a chain-shaped graph. He made this point twice, at the start and again when connecting CNNs to GNNs.`,
  },
  {
    tag: "💡 Concept",
    title: "The Parts of a Graph, and the Three Levels of Prediction",
    body: `A graph has nodes, edges, and features on both.\n\nNodes are the objects. Edges say which objects connect. Edges can be undirected — A and B are simply connected, and you can go either way — or directed, where A to B is a different thing from B to A. The professor's example: a toll road where the charge from A to B differs from the charge from B to A.\n\nFeatures live on nodes and on edges. In the road network the node feature is the vehicle count, but it doesn't have to be a single number. A node can carry a whole vector: vehicle count plus road quality, or for a social network a person's age, gender and location, or for a molecule the properties of an atom. Edges carry features too — how wide the intersection is, or whether there's currently an accident between A and B.\n\nGiven that, you can predict at three different levels, and knowing which level a task sits at is a standard exam question.\n\nNode level: a label or value for one node. Will road A be delayed? Is this user a fraud account?\n\nLink level: something about a pair. Are A and B connected? Will this user like this item? This is the recommendation-system shape — the professor noted Pinterest built its recommender this way, and that Pinterest acquired the firm of Jure Leskovec, the Stanford professor whose slides this lecture is partly based on, who then became their chief scientist.\n\nGraph level: a label for the whole thing. What does this molecule do? Is this region of Los Angeles congested? He joked that the LA version isn't a useful prediction, since the answer is almost always yes.\n\nExam insight: node / link / graph, with one concrete example each. He has now covered this in two consecutive lectures.`,
  },
  {
    tag: "📐 Formula",
    title: "Adjacency Matrix and Feature Matrix",
    body: `To compute with a graph you have to write it down as numbers. Two objects do that.\n\nThe adjacency matrix A is the structure. For a graph with n nodes it is an n×n square matrix of ones and zeros. Entry A[i][j] is 1 if node i connects to node j, and 0 otherwise. For the four-node road network it's a 4×4 matrix. If A connects to B and C, then A's row has 1 in the B and C columns and 0 elsewhere.\n\nTwo properties the professor emphasized. It is a square binary matrix — not a diagonal matrix, which he corrected himself on mid-sentence. And for an undirected graph it is symmetric: A[i][j] equals A[j][i], because connection has no direction. That means you only need half of it. The upper triangle carries all the information, and you can halve your storage.\n\nThe feature matrix X is the content. One row per node, one column per feature. For the road network with vehicle count and road quality, X is n×2. In general X is n×d for d features per node.\n\nSo a graph is the pair (A, X): who connects to whom, and what each node carries.\n\nOne subtlety he flagged for later and then built two whole concepts on: features travel with their node. If you reorder the nodes — put C and D at the top — then A must be reordered the same way and X must be reordered the same way. Node B's features follow node B wherever it lands in the ordering. They are a property of the node, not of the row index it happens to occupy.\n\nExam insight: binary, square, symmetric for undirected, half is enough. And know that (A, X) together is the complete numerical description of a graph.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Why You Can't Just Feed (A, X) to an Ordinary Network",
    body: `The naive idea is tempting and the professor walked through it specifically to kill it. You have the adjacency matrix. You have the feature matrix. Concatenate them side by side, flatten, feed the result to a standard fully-connected network, and train. The dimensions even line up neatly: each row is one node, carrying its connections and then its features.\n\nIt fails for four reasons, and he presented them as a list because they're a likely exam item.\n\nFirst, dimensionality. This is the same objection that motivated CNNs in Lecture 4. You don't feed raw pixels to a dense network and treat each one independently, because the parameter count explodes and you throw away structure. Same here.\n\nSecond, the graph cannot grow. A fully-connected layer has a fixed input width. Add one node — go from five nodes to six — and the adjacency matrix gains a row *and* a column, the feature matrix gains a row, and the input no longer fits the network. The architecture has to be rebuilt and retrained from scratch.\n\nThird, no weight sharing across graphs. One network per graph. You'd train a separate model for every road network in the world, when the physics of traffic is the same in all of them.\n\nFourth, node ordering. Swap the labels on A and B and the matrices change, so the input vector changes, so the network's output changes — even though it is the same graph. The professor drew two orderings of the identical graph and pointed out their adjacency matrices look completely different while describing exactly the same structure.\n\nSo the requirements for the real architecture come straight out of the failures: handle variable size, share weights across graphs, and be indifferent to node ordering.\n\nExam insight: this is the cleanest "why do we need GNNs" question available, and the ordering failure is the one he spent the most time on.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Invariance and Equivariance: The Two Properties a GNN Must Honor",
    body: `These two words sound similar, the professor said so himself, and he came back to distinguish them three separate times. They are the design constraints that produce the architecture.\n\nPermutation invariance is about whole-graph outputs. Take a graph, relabel its nodes, change nothing else. If you predict a property of the whole graph — what this molecule does — the answer must be identical. The graph didn't change; only your bookkeeping did. A model whose whole-graph prediction depends on how you numbered the nodes is broken.\n\nPermutation equivariance is about per-node outputs. Here the outputs are allowed to move, but they must move *together with* the inputs. If relabeling sends old node A to new position E, then the prediction that was attached to A must now be attached to E, with the same value. Input and output permute as a pair. The professor's phrasing: "they move as a pair," and "this number shouldn't change even with a changed index of the nodes."\n\nHis concrete illustration was a classroom: a green object moves from row C to row D. If your model can't handle that relabeling, the prediction comes out completely wrong for no good reason.\n\nThe practical difference in one line. Invariance: the whole-graph answer is unchanged. Equivariance: the per-node answers are permuted the same way the nodes were.\n\nExam insight: he emphasized this more than almost anything else in the lecture, and explicitly flagged that students confuse the two. Memorize which one applies to node-level output (equivariance) and which to graph-level output (invariance).`,
  },
  {
    tag: "💡 Concept",
    title: "Order-Invariant Aggregation Is How You Get There",
    body: `So how do you build a layer that honors invariance? The professor built up to it with a deliberately bad example first.\n\nSuppose a node's score is computed as 2 × (first neighbor) + 1 × (second neighbor). The weight depends on position in the list. Now swap which neighbor you call first, and the score changes — on an identical graph. That function is order-dependent, and it's exactly what you must not do.\n\nThe fix came through an analogy he liked: you're doing homework and you want to check your answer against the people around you. One neighbor got 0.05, another got 0.02, you got 0. Which one do you take? Taking "the first one" is arbitrary. Taking the average of your neighbors is not.\n\nAnd that is the whole trick. Averaging over a set does not care about the order of the set. The mean of {1, 3, 2} is 2, the mean of {1, 2, 3} is 2, the mean of {3, 2, 1} is 2. Sum, max, min and median have the same property. These are the order-invariant operators, and any one of them gives you a neighbor-aggregation step that satisfies permutation invariance by construction.\n\nHe pointed out that this is the same reason pooling works in a CNN. Max-pooling or average-pooling over a window doesn't care which order you read the window's cells in. Lecture 4 used that property for translation tolerance; Lecture 6 uses it for permutation tolerance. Same mathematical fact, two different payoffs.\n\nNotice what you give up. If aggregation can't depend on position, it can't distinguish "my first neighbor" from "my second neighbor." That's fine for a graph, because unlike a sequence a graph has no canonical order to lose.\n\nExam insight: be able to name the order-invariant aggregators — mean, sum, max, min — and say why a position-weighted sum is disqualified. The 2× / 1× counterexample is the exam-ready version.`,
  },
  {
    tag: "💡 Concept",
    title: "Hops, Neighborhoods, and the Computation Graph",
    body: `A graph has no fixed-size window to slide a filter over, but the professor identified the structural fact that replaces it: every node has neighbors, and its neighbor set doesn't change. His analogy — in this classroom, your neighbor stays your neighbor unless someone gets up and leaves. Topology may be irregular, but it is stable, and that's enough to build on.\n\nSo instead of a 3×3 window, the "receptive field" of a graph layer is the neighborhood, measured in hops.\n\nOne-hop neighbors are directly connected. For node A in the running graph, that's B, C and D. Two-hop neighbors are the neighbors of your neighbors: B connects to A and C, so going one step further out reaches them too.\n\nUnroll that and you get a computation graph for each node, which is the structure a GNN actually computes over. To produce A's new representation, gather B, C and D. To produce each of those, gather *their* neighbors. The tree grows outward one level per layer. A well-connected central node produces a bushier tree than a peripheral one.\n\nThe professor's analogy for depth: you're in this classroom learning deep learning. You learn from your teammates — that's one hop. Your teammates learned from their teammates on other projects — that's two hops. More hops means information from further away, but with less influence. "Your close friends matter most, but their friends still influence you, discounted."\n\nTwo things he pointed out about these trees. They contain loops — expand A and you find A again inside its own computation graph, because A is a neighbor of its own neighbor. That is by design and nothing is wrong with it. And on a dense graph the trees get very redundant very fast, because the same nodes keep reappearing at every level.\n\nExam insight: "one layer equals one hop" is the mapping to remember. Number of layers equals how far information travels.`,
  },
  {
    tag: "📐 Formula",
    title: "The GCN Update Rule: Two Matrices, Nothing Else",
    body: `This is the equation of the lecture. The professor said it looks intimidating and then showed that it has exactly two parts.\n\nh_v^(k+1) = σ( W_k · mean_{u ∈ N(v)} h_u^(k) + B_k · h_v^(k) )\n\nRead it piece by piece. h_v^(k) is node v's representation at layer k. You want h_v^(k+1), its representation at the next layer. σ is a non-linear activation — he said outright "just drop it, don't care about it" for purposes of understanding the structure.\n\nInside the bracket, two terms.\n\nThe second term, B_k · h_v^(k), is you. Your own representation from the previous layer, scaled by a learnable matrix B_k. This is how much of yourself you carry forward.\n\nThe first term, W_k · mean h_u^(k), is your neighbors. Average the previous-layer representations of everyone in your neighborhood N(v), then scale by a learnable matrix W_k. This is how much your neighbors influence you.\n\nSo the entire layer is: average your neighbors, add yourself, weight the two with learnable matrices, apply a non-linearity. W_k controls neighbor influence, B_k controls self influence. Those are the only trainable parameters in the layer, and he repeated that pairing more times than anything else in the lecture.\n\nAnd the invariance requirement is satisfied for free. The sum or mean over N(v) has no ordering in it. Reorder the neighbors and the aggregate is identical, so the output is identical.\n\nOne more structural consequence. The shape of W_k and B_k depends only on the embedding dimension — not on the number of nodes. That is what lets the same trained GNN run on a graph of a different size.\n\nExam insight: "W for neighbors, B for self, two learnable matrices per layer." If you remember one formula from this lecture, this is it.`,
  },
  {
    tag: "🧮 Worked Example",
    title: "Running the Update by Hand on the Road Network",
    body: `The professor worked this numerically so the equation stops being abstract. He fixed both weights at 0.5 — in a real GNN these are learned, but fixing them shows the information flow.\n\nSetup. Four nodes with layer-0 values: A = 1, B = 2, C = 4, D = 8. Node A's neighbors are B and C.\n\nLayer 1 for node A. Neighbor mean is (2 + 4) / 2 = 3. Then 0.5 × 1 (yourself) + 0.5 × 3 (neighbors) = 0.5 + 1.5 = 2. So A goes from 1 to 2.\n\nEvery node updates by the same rule simultaneously, and the layer-1 values come out as roughly A = 2, B = 1.5, C = 4.25, D = 6.\n\nNow compare the two rows. Layer 0 was 1, 2, 4, 8 — spread across a factor of eight. Layer 1 is 2, 1.5, 4.25, 6 — visibly compressed toward each other. That compression is not a bug. It is the mechanism working as designed: connected nodes are being pulled toward similar representations, which is exactly the training objective stated at the start of the lecture — neighbors should end up with similar embeddings.\n\nRun it again for layer 2. Node A: 0.5 × 2 (its layer-1 self) + 0.5 × ((1.5 + 4.25) / 2) = 1 + 1.4375 ≈ 2.44. The values keep contracting.\n\nAnd there's the warning built into the demonstration. Keep going and everything collapses to the same number. That is over-smoothing, the next concept.\n\nExam insight: he spent real time on this arithmetic, so a "compute one layer of a GNN by hand" question is live. The pattern is: average the neighbors, weight it, add your weighted self.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "Over-smoothing: Why GNNs Stay Shallow",
    body: `Deep learning's general lesson has been that more layers help. Graph neural networks are the exception, and the professor named the reason explicitly: over-smoothing.\n\nEach layer pulls a node's representation toward the average of its neighbors. One or two layers of that is useful — it's how neighborhood context gets in. Too many layers and every node has been averaged with everything else so many times that all the representations converge to the same vector. The model can no longer tell nodes apart, which means it can no longer predict anything about individual nodes. He called it "a classical issue" of graph learning, and the worked example above shows it beginning after a single layer.\n\nThere's a second, independent reason not to go deep, and it's about redundancy. Expand node A one hop and you reach B, C and D. Expand two hops and B's neighbors include A itself, and C's neighbors include B again. On a reasonably dense graph — "dense" meaning well-connected — the same nodes reappear at every level of the computation graph. The extra layer is mostly re-aggregating information you already had, at real computational cost.\n\nHis practical guidance: 1 or 2 layers typically, 2 or 3 at most, and more layers "won't actually help that much." Contrast that with the CNNs of Lecture 4, where ResNet went to 152 layers. The difference is that a convolution's receptive field grows slowly and locally, while a graph neighborhood can swallow the entire graph in a handful of hops.\n\nExam insight: know the name over-smoothing, the one-line mechanism (repeated neighbor averaging makes all nodes identical), and the typical depth of 1–3 layers. The contrast with very deep CNNs is a natural question.`,
  },
  {
    tag: "💡 Concept",
    title: "Training a GNN Is Ordinary Deep Learning",
    body: `After all the machinery, the professor was blunt: "There is no difference from training any other deep neural network."\n\nThe loop is the one from Lecture 3. Run the forward pass to get node embeddings. Push each embedding through a classifier head to get a prediction. Compare against the label with a loss function — cross-entropy for classification, though he noted the specific choice doesn't matter much. Backpropagate. Update the weights. Repeat.\n\nThe only thing worth noticing is which weights get updated: W_k and B_k, the neighbor matrix and the self matrix, at each layer. Backpropagation updates the shared model parameters, and because they're shared across all nodes, every node's loss contributes gradient to the same matrices. A 2- or 3-layer GNN therefore has very few parameters — he pointed out you are "not going to learn a lot of parameters" here, which is a sharp contrast to the rest of the course.\n\nHis supervised example: drug-drug interaction prediction. Nodes are drugs. The label on a pair is whether taking them together is safe or toxic. Embed the nodes with the GNN, feed the embeddings to a predictor, compute the loss against the known safe/toxic labels, backpropagate into the shared weights, repeat.\n\nHe listed the three things you actually have to choose when designing a GNN: the neighbor aggregation function (must be order-invariant — mean or sum), the loss function on the embeddings, and which set of nodes to train on.\n\nExam insight: if asked what is special about GNN training, the answer is *nothing* — the gradient machinery is identical. What's specific to graphs is the architecture, not the optimizer.`,
  },
  {
    tag: "💡 Concept",
    title: "Inductive Generalization: The Payoff of Weight Sharing",
    body: `This is what the whole design was for, and it's the property the naive dense-network approach could never have.\n\nBecause W_k and B_k are shaped by the embedding dimension and not by the number of nodes, a trained GNN runs on graphs it has never seen. Train on road networks A, B, C, D. A fifth road E appears. The same trained model embeds it — no retraining, no architecture change. The professor called this inductive: you learn from existing graphs and apply to unseen nodes and unseen graphs.\n\nThe one requirement is a shared feature space. The new graph's nodes must carry the same kinds of features the model was trained on. A GNN trained on road networks with (vehicle count, road quality) works on any road network described the same way. It does not transfer to molecules.\n\nHis justification for why this is reasonable: what the model actually learns is not facts about specific roads. It learns, for this feature space and this kind of topology, how much a node should be influenced by itself versus by its neighbors. He described it as learning something like attention — the pattern of mutual influence. That pattern is a property of traffic, not of one city's streets, so it carries over.\n\nAnd he drew the parallel to CNNs. Train an image classifier on a set of images and it works on new images, because the learned encoding transfers. Same idea, same reason.\n\nExam insight: "inductive" plus "same feature space" is the exam-ready pair. And know the contrast with embedding lookup, below.`,
  },
  {
    tag: "💡 Concept",
    title: "Why Not Just Look Up an Embedding Per Node?",
    body: `Before arriving at GNNs the professor considered the simplest possible way to get a vector per node, and rejected it for a reason worth knowing.\n\nEmbedding lookup: keep a table, one row per node, each row a learned vector. Need node A's representation? Read row A.\n\nIt's simple and it does produce embeddings. The problem is that it's static. The table has a fixed set of rows, one per node that existed at training time. A new node appears and there is no row for it, and nothing in the method tells you how to make one — the table stores answers, it doesn't compute them. The professor's verdict: "it's not extendable to new nodes, so it's not very good."\n\nWhat you want instead is an *encoder* — a function that takes a node's own features plus its neighbors and computes a vector. A function extends to new inputs; a table does not. That is precisely what the GCN update rule is.\n\nThis also reframes what representation learning is for. The stated objective at the top of the lecture was that similar or neighboring nodes should get similar vectors, and distant nodes should get dissimilar ones. If u and v are neighbors in the graph, then z_u and z_v should land close together in embedding space. An embedding lookup can be trained to satisfy that for the nodes it knows about; an encoder satisfies it for nodes it has never seen.\n\nAnd the professor tied it to his recurring theme: "compression is learning." The graph is complex — nodes, edges, attributes. The GNN compresses it into vectors. Then the prediction head is the same as it would be for an image or a sequence. The only hard part of deep learning, in his framing, is extracting information from each kind of data structure.\n\nExam insight: lookup is static and can't handle new nodes; an encoder is a function and can. This is the one-line argument for GNNs over node embeddings.`,
  },
  {
    tag: "💡 Concept",
    title: "CNNs and Sequences Are Special Cases of GNNs",
    body: `The professor made this a standalone point, and it's the kind of structural claim that makes good exam material.\n\nTake a 3×3 patch of an image. The center pixel has eight neighbors. A convolution computes a weighted combination of the center and those eight. Now describe the same thing as a graph: each pixel is a node, edges connect adjacent pixels, and a layer aggregates each node with its neighbors. He said that with enough rewriting these are the same operation — a convolution is a graph aggregation on a grid-shaped graph.\n\nSo the containment runs one way. A CNN is a GNN restricted to grid graphs. A sequence model is a GNN restricted to chain graphs. The graph neural network is the superset — his words: "it's a superset of the convolutional neural network, and even including the sequential modeling, because everything is a graph."\n\nWhy the special cases exist anyway: regularity buys efficiency. Because a grid has identical structure everywhere, a convolution can be a small dense filter applied by sliding, which is enormously faster than general graph aggregation. You give up generality and get speed. That's the whole trade.\n\nHe also connected it forward to attention from Lecture 5. Attention computes a weighted sum over previous tokens, with weights depending on the query. A GNN layer computes a weighted combination over neighbors. Both are "aggregate over a set with learned weights," which is why attention-style weighting is a natural extension of plain mean aggregation — he raised exactly that question when introducing the update rule: can we do attention instead of a plain average?\n\nExam insight: GNN ⊃ CNN ⊃ nothing, and GNN ⊃ sequence models. The grid and the chain are the restrictions. The CNN exists because regular structure is cheaper to exploit.`,
  },
  {
    tag: "💡 Concept",
    title: "Graphs and LLMs: Two Directions, Both Used",
    body: `The last third of the lecture answered the question of why any of this matters in 2026, and the professor's framing is a translation problem.\n\nA graph neural network consumes numerical vectors and structure. A large language model consumes text. Either can make the final prediction. So to combine them you have to convert one into the other, and there are exactly two directions.\n\nHis worked task: classify a paper's topic. You have paper Q's abstract (text) and its citation links to other papers (graph).\n\nRoute 1 — LLM as encoder, GNN predicts. Run each abstract through the language model to get an embedding vector. Those vectors become the node features X. The citation links become the adjacency matrix A. Now you have an ordinary (A, X) graph, so run the GNN and let it predict the topic. The LLM's only job was turning text into features; the structure does the deciding.\n\nRoute 2 — graph as text, LLM predicts. Go the other way. Write the citation structure out in natural language inside a prompt: "this paper's abstract is …, it cites paper P, which cites …" Then ask the language model for the topic directly. The graph was flattened into words; the LLM does the deciding.\n\nThe real difference, in his words: who digests the graph context, and who makes the final label prediction. Asked which is better, he gave the honest answer — it depends, and people use both.\n\nExam insight: know both directions and what each one converts. Route 1 converts text to vectors; route 2 converts structure to text.`,
  },
  {
    tag: "💡 Concept",
    title: "RAG and GraphRAG: Why Retrieval Needs Structure",
    body: `The professor detoured off his slides to explain RAG, because it sets up the point about graphs.\n\nRetrieval-Augmented Generation. A language model has a knowledge cutoff — it was trained some months before release, so it doesn't know recent facts. Ask it October 2026's weather in Los Angeles and it can't know. RAG fixes that by retrieving relevant documents from an external source first, then generating an answer conditioned on them. He noted the name has drifted: we now say "agentic search" or "web search," but it's the same mechanism.\n\nThen the real question: how does the model find the *right* documents?\n\nHis example. Someone asks which applications are affected if the Atlas database goes offline. The relevant knowledge is scattered across documents. Document 1 says the Beacon service depends on Atlas. Document 2 says the Helpdesk application depends on Beacon. Document 3 says the Alerts and Search applications depend on Beacon too.\n\nRetrieve by plain similarity to the question and you get document 1. It mentions Atlas, so it scores well. And it does not contain the answer, because the application names you were asked about live in documents 2 and 3. No amount of better ranking on single documents fixes this, because the answer isn't in any single document.\n\nWhat's needed is a hop: Atlas → Beacon → the applications. That's a traversal, and traversals need a graph. GraphRAG indexes the documents as a graph, linking entities across them, so retrieval can follow the chain instead of scoring documents independently.\n\nHis conclusion was stronger than "more efficient": without the graph structure you don't get a worse answer, you get a wrong one, because the evidence needed to answer was never retrievable in the first place.\n\nExam insight: the multi-hop retrieval failure is the point. Single-document similarity search cannot answer a question whose evidence spans linked documents.`,
  },
  {
    tag: "🔬 Beyond the Exam",
    title: "Agent Execution as a Graph",
    body: `The professor flagged this section as "purely research, just put it there for the person who are interested," so treat it as context rather than exam material. It's also his own work and good project fodder.\n\nThe setup. When you give a coding agent a task, it executes a trace of actions: inspect the files, edit the configuration, add a task, run the test, submit a patch. You assume that runs 1 → 2 → 3 → 4 → 5 in order.\n\nBut the steps have real dependencies, and they're not the same as the order. Running the test requires reading the configuration file, so step 4 depends on step 2. Writing a separate test file doesn't depend on the configuration edit at all, so step 3 is independent of step 2. Now suppose step 2 fails *silently*. Step 4 still runs — against a stale configuration — and produces a result that looks like a successful test run and means nothing.\n\nSo there are two graphs. The execution graph you assumed, and the real dependency graph of what actually needs what. His argument is that modeling the second one explicitly is how you catch this class of failure, and that many agent failures are exactly this: a broken edge in the dependency graph.\n\nHe closed with a second paper, on topology in multi-agent systems. Treat each agent as a node and the orchestration as the edges — a chain, a star, a fully connected mesh. Now plant a malicious agent trying to extract information from a target agent. The finding: topology matters. If attacker and target sit close together, leaking private information is easy. In a long chain where they're far apart, it's much harder. So the shape of your agent graph is a security property, not just an engineering choice.\n\nHis framing of the whole section: graph neural networks felt like a field nobody cared about anymore, and they got a second chance in the agent era, because execution dependency is a graph.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Mini-Batch: Why You Don't Train on Everything at Once",
    body: `The second half of the lecture switched from architecture to training dynamics — the practical machinery that decides whether training works at all. It starts with how much data to use per update.\n\nThere are three options. Use one example per update, use all of them, or use a chunk.\n\nOne example at a time is stochastic gradient descent. Each update is cheap, but each one points wherever that single example wants to go. One image pulls the weights one way, the next pulls them back. It converges in the long run, but the path is noisy and erratic.\n\nAll examples at once — full batch — gives the smoothest, truest gradient. And you cannot afford it. The professor was concrete: GPU memory is the hard limit, a typical consumer card has maybe 32 or 64 GB, and you can only fit so many images. He added a market aside — he tried to buy RTX 6000 Pro cards at roughly $7,000–8,000 each earlier in the year, the price has since roughly doubled, and he cancelled the order.\n\nMini-batch is the middle. Sample a random subset — he used 32, or about 10% of the data — compute the gradient on that, update, move to the next batch. Ten mini-batches of 10% covers the whole dataset once. Because the batch is sampled randomly it's a reasonable estimate of the full gradient, but it fits in memory.\n\nTwo details he mentioned. Batch sizes are conventionally powers of two. And enough mini-batch updates approximate full-batch training — noisier, so the path zigzags, but it converges.\n\nExam insight: know the three regimes and the trade-off axis. Noise versus memory. Mini-batch wins because full batch is unaffordable, not because it's mathematically better.`,
  },
  {
    tag: "💡 Concept",
    title: "Train, Validation, Test — and the Joke About Cheating",
    body: `A quick but examinable piece of hygiene.\n\nThree splits, three jobs. Training data is what you compute gradients on and update weights from. Validation data is held out from training and used to decide things *about* training — when to stop, which hyperparameters, which architecture. Test data you do not touch. It exists to estimate how the finished model performs on data it has never seen.\n\nThe professor's rule of thumb: roughly 70% train, 10% validation, 20% test, with variants like 75/5/20. The exact numbers depend on the situation. What doesn't vary: training takes the majority, and test is always held out. In industry you're typically handed one dataset and have to make the split yourself.\n\nThen the joke, which carries the lesson. If your model isn't performing well, how do you improve it fast? Add the test data to your training data. It works — your test score goes up immediately — and it is worthless, because you are now measuring memorization instead of generalization. The number improves and the thing the number was supposed to tell you is gone.\n\nThat's what "leakage" means: test information reaching the training process, whether by adding it outright or by tuning hyperparameters against it over and over until the test set is effectively training data.\n\nExam insight: know what each split is *for*. Validation decides hyperparameters and stopping; test estimates generalization and is used once.`,
  },
  {
    tag: "🏗 Foundation",
    title: "Why Normalize Inputs: The Salary and Car Price Example",
    body: `Optimization goes badly when your features live on wildly different scales, and the professor's example makes the reason concrete.\n\nTwo features for predicting someone's social class: monthly income, and the price of the car they drive. Income might run in the thousands. Car price runs in the tens of thousands. Same person, two numbers an order of magnitude apart in typical size.\n\nThe model has no idea that these are different units. It sees two numbers, and the one with the larger range dominates — it moves the output more per unit of change, so it gets more gradient, so it drives learning. Income gets drowned out, not because it matters less but because its numbers are smaller.\n\nAnd you do not know in advance which feature matters more. That's the model's job to discover. The professor's framing: putting features into a comparable range means treating each one equally *at the start*, so the learning algorithm decides importance rather than having it decided by an accident of units.\n\nThere's a second benefit he raised with a picture. Uncentered, differently-scaled data makes the loss surface stretched and lopsided, which produces the zigzag optimization path discussed later in the lecture. Centered, comparably-scaled data makes it rounder and easier to descend.\n\nSo the goal is two-part: center the data near zero, and put the features on comparable scales.\n\nExam insight: the reason is feature domination by scale, not numerical precision. "The larger-range feature dominates the gradient" is the sentence to have ready.`,
  },
  {
    tag: "📐 Formula",
    title: "Normalization, Worked by Hand",
    body: `The formula is as simple as it gets:\n\nx' = (x − E[x]) / σ\n\nSubtract the mean, divide by the standard deviation. The professor noted a reading tip that comes up constantly in papers: when you see "expectation," read "mean" or "average." There's nothing more to it.\n\nSubtracting the mean centers the data at zero. Dividing by the standard deviation puts it on a standard scale. Both statistics come from your own data, so the whole thing is self-contained.\n\nHis worked example. Take the values 2, 4, 6, 8. The mean is 5. Subtracting gives −3, −1, 1, 3. The standard deviation of that is about 2.24, and dividing gives roughly −1.34, −0.45, 0.45, 1.34.\n\nNow the observation he wanted students to make. Before: the values were 2, 4, 6, 8 — spaced 2 apart. After: −1.34, −0.45, 0.45, 1.34 — spaced about 0.89 apart. The spacings are uniform in both. The data is now symmetric around zero and on a sane scale, but the *relative* structure is intact. Normalization rescales; it doesn't distort relationships.\n\nFor images there's some extra preprocessing on top: resize and crop to a common size, since source images vary, and normalize per color channel.\n\nAnd a workflow detail with a correctness implication. In scikit-learn you call StandardScaler, fit it on the training data, and save it. At test time you call transform with that same saved scaler. You do not re-fit on the test data — the mean and standard deviation are training statistics, and recomputing them on test data is leakage.\n\nExam insight: the formula, the fact that it centers and rescales without changing relative spacing, and that the scaler is fit on train and merely applied at test.`,
  },
  {
    tag: "💡 Concept",
    title: "BatchNorm vs LayerNorm: Which Direction You Normalize",
    body: `The same normalization formula gets applied inside the network, not just to the inputs, and where you point it defines two different techniques. This extends Lecture 4's treatment of batch normalization.\n\nThe motivation is that activation functions are sensitive to the range of their inputs. A sigmoid saturates outside roughly −5 to 5; a mis-scaled input lands in the flat region and the gradient dies. So you normalize the activations before they reach the non-linearity. The professor's canonical ordering from the CNN era: convolution → batch norm → activation, repeated.\n\nBatch normalization normalizes down the columns — for a given feature, across the examples in the mini-batch. Compute that feature's mean and standard deviation over the batch, standardize, then apply a learnable scale and shift. He noted this is the one commonly used in convolutional networks.\n\nLayer normalization normalizes across the rows — for a given example or token, across its features. This is the one used in transformers. Same formula, perpendicular direction. You generally pick one, not both.\n\nThen the detail he spent the most time on, because it bites people in practice. Batch norm behaves differently during training and during inference. While training, the batch statistics are recomputed every batch, because the activations keep changing. At inference you have no batch to compute statistics from, and you want deterministic outputs anyway, so the layer uses the running mean and standard deviation saved during training.\n\nWhich is why PyTorch has model.eval(). It flips batch norm from computing statistics to using the stored ones, and switches dropout off too. Forget it and your evaluation numbers are wrong in a way that doesn't look like an error. He was candid that this is "prehistoric" knowledge now that agents write the code, but it remains a standard interview question.\n\nExam insight: BatchNorm across the batch for a feature, LayerNorm across features for one example. Transformers use LayerNorm. And know the train-versus-eval statistics distinction.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "Initialization: Why Zeros and Constants Both Fail",
    body: `Before training can start, the weights need values. The professor posed it as a question to himself: why not just initialize everything to zero?\n\nZero kills the signal. The forward pass computes x · W, and with W all zeros the output is zero regardless of input. No signal forward. And backward is no better — the chain rule multiplies by the weights, so gradients stay stuck at zero. The network never moves.\n\nThe next idea is to set every weight to the same non-zero number, say 1. That gives you signal, and it fails for a subtler reason: symmetry. If 200 hidden units in a layer start identical, they see identical inputs, compute identical outputs, receive identical gradients, and therefore update identically. They stay identical forever. You have 200 units with the expressive power of one. The professor's phrasing: "they can remain identical throughout subsequent updates."\n\nSo you need randomness to break symmetry. Draw from a Gaussian with mean zero and a small standard deviation. This is the standard starting point and it mostly works — for shallow networks.\n\nFor deep ones it has its own problem, which he showed by plotting activation statistics layer by layer. In the first few layers the activations look healthy. Going deeper, the mean stays near zero but the standard deviation shrinks and shrinks, until the activations are all essentially zero. The signal has been multiplied down to nothing, and the layers at the end receive no gradient — the vanishing-gradient story from Lecture 3, arriving this time through initialization rather than through the activation function. Scale too large and you get the opposite failure, exploding gradients.\n\nExam insight: zero means no signal forward or backward; identical constants mean no symmetry breaking so units stay identical. Both failures, both reasons.`,
  },
  {
    tag: "📐 Formula",
    title: "Xavier and He Initialization",
    body: `The fix for shrinking activations is to scale the initialization by the layer's width, so that signal variance stays roughly constant as it propagates.\n\nXavier initialization sets the variance of the weights to about 1 / (input dimension). The professor's point about why this is better than a plain small Gaussian: a fixed standard deviation ignores the layer entirely, while Xavier takes the layer's input and output dimensions into account and rescales accordingly. Plot the activation statistics with Xavier and the picture improves — not perfect, but the standard deviation survives into the deeper layers instead of collapsing.\n\nThen a wrinkle specific to ReLU. ReLU zeros out everything negative, which throws away about half the signal. Xavier's variance calculation didn't account for that, so with ReLU you still lose magnitude layer by layer. He initialization (also called Kaiming) corrects it by doubling the variance: weights scaled by √(2 / input dimension). The factor of 2 compensates for the half that ReLU discards. Plot the statistics again and the mean and standard deviation now stay stable all the way through.\n\nThe practical rule of thumb he gave:\n\nReLU networks → He / Kaiming initialization. Other feedforward and tanh-style networks → Xavier. A pretrained backbone → don't initialize at all, start from the learned weights. That last case is transfer learning, which is next lecture.\n\nHe was explicit that nobody needs to memorize the derivations — there are proofs behind the numbers and he skipped them. What matters is the goal: activations in the last layers should look statistically similar to activations in the first layers. Stable statistics means signal is still flowing, which means gradients are still flowing, which means the deep layers can still learn.\n\nExam insight: the pairing — He/Kaiming with ReLU, Xavier otherwise, and the factor of 2 exists because ReLU discards the negative half.`,
  },
  {
    tag: "⚠️ Pitfall",
    title: "Learning Rate, Zigzag, and Saddle Points",
    body: `With data scaled and weights initialized, the remaining question is how to take steps. The professor's framing: the gradient gives you a direction, and the learning rate gives you a step size. Both can go wrong.\n\nLearning rate too large and you overshoot. The direction was right, but the step jumped past the minimum. You can end up bouncing back and forth across the valley with the loss *increasing* over epochs instead of decreasing, and no guarantee of convergence. Too small and you crawl — the direction is right, the loss decreases, but after many epochs you've barely moved. Rising loss means the rate is too high; flat loss means it's too low.\n\nThen a problem that isn't about the rate at all. Real weight spaces are high-dimensional, and the loss surface can be much steeper in some directions than others. The professor drew the two-dimensional case: well-behaved along w₁, badly scaled along w₂. The gradient keeps pointing mostly across the narrow direction, so you oscillate along the steep axis while making slow progress along the one you actually need. That's the zigzag, and it's pure wasted computation — the straight path to the minimum exists and you're not taking it. This is exactly what input normalization helps with, by making the surface rounder.\n\nFinally, points where the gradient is zero but you are not done. At a local minimum the gradient vanishes and the update stops, even though a better region exists elsewhere. At a saddle point the surface curves up in one direction and down in another; the derivative with respect to every coordinate is zero, so the model stops, but it isn't even a minimum. He stressed that saddle points are *common* in deep networks precisely because the space is so high-dimensional — "a lot of saddle points," not one.\n\nAdd to that the noise of mini-batch sampling, where some batches pull in directions opposite to others, and plain gradient descent starts to look fragile.\n\nExam insight: rising loss → learning rate too high. Zigzag → badly conditioned loss surface. Zero gradient → local minimum or saddle point, and saddles are common in high dimensions.`,
  },
  {
    tag: "💡 Concept",
    title: "Momentum: Carrying Recent History Forward",
    body: `The fix for all three of those problems — slow crawling, zigzag, and getting stuck where the gradient is zero — is momentum, and the lecture ended here.\n\nThe professor's analogy was from trading, where he said he learned the term first. If a price has been moving up for months, momentum strategies keep buying on the assumption the trend persists until something breaks it. ETFs are built on exactly that premise.\n\nApplied to optimization: if a direction has been reducing your loss consistently, build up speed along it. The update is no longer the current gradient alone. It's the current gradient combined with an accumulated average of recent gradients. You keep moving in directions that have been working.\n\nThat helps in all three failure modes. Through a saddle point or shallow local minimum, accumulated velocity carries you out even though the local gradient is zero. In a zigzag, the oscillating components alternate sign and cancel in the running average while the consistent component survives and accumulates — so the path straightens. And along a long shallow valley you accelerate instead of crawling.\n\nThen the professor made the connection he clearly enjoyed, because it ties the whole semester together. A sequential model's current state depends on its current input *and* its previous state. A graph node depends on its own features *and* its neighbors. A momentum update depends on the current gradient *and* its recent history. Three different parts of the course, one structural idea: combine what's local with what's accumulated. "If you study enough AI, you'll find many of the things are similar or share the same concept."\n\nHe ended the lecture there, deferring the rest of the optimizer family — Adam and the adaptive methods — along with regularization, dropout, and fine-tuning with LoRA, to the next lecture.\n\nExam insight: momentum = current gradient + accumulated recent gradients. Know the three things it fixes: saddle points, zigzag, and slow progress. The parallel to RNN state and GNN neighbor aggregation is his own point and worth repeating.`,
  },
  {
    tag: "📋 Admin",
    title: "Assignment 1, the Midterm, and Course Logistics",
    body: `Everything administrative from this lecture, in one place.\n\nAssignment 1 is released and due October 26 — he said "exactly three weeks" from October 5. He described it as "slightly tricky," which is why questions must be posted *privately*, not to the public assignment folder. The deliverable is a report of no more than two pages, plus your code. AI use is explicitly permitted — "you can use whatever you want" — and writing it yourself is equally fine. Grading will be "on an unreasonable basis," which in context means lenient.\n\nNo homework on graph neural networks. He said this directly: the GNN material is knowledge expansion.\n\nThe midterm is November 2. He confirmed a review session the week before and said he will post a condensed midterm review covering the main points, specifically so that students don't have to go through several hundred slides. His advice on open-book materials: don't print everything out and bring it to class — "that's overkill."\n\nQuizzes remain dynamic. There was no quiz this lecture despite lower attendance on a holiday weekend, and he kept the timing deliberately unannounced.\n\nProject proposal feedback is nearly done, with TAs being assigned to each project. Ask your assigned TA your project questions. He also confirmed that switching project topics is allowed — the course doesn't require sticking with your proposal — and encouraged it if your original idea has stopped being feasible. His reasoning: the field moves so fast that a problem worth solving now may be solved by something else in two months.\n\nAlso: the GNN slides were revised and expanded, so re-download them from Google Drive if you have the old version.\n\nNext lecture continues training dynamics — regularization, dropout, validation strategy, and fine-tuning including LoRA. He noted those slides run to about 400 pages, so it will span more than one session.`,
  },
];

const VOCAB = [
  { term: "Graph", def: "Nodes connected by edges, with features on both. The general data structure — images and sequences are special cases." },
  { term: "Node (vertex)", def: "An object in a graph. A road segment, a user, an atom, a paper." },
  { term: "Edge", def: "A connection between two nodes. Can be directed (A→B differs from B→A) or undirected." },
  { term: "Node features", def: "The attributes attached to a node, usually a vector. Vehicle count and road quality; age, gender and location." },
  { term: "Edge features", def: "Attributes on a connection — intersection width, whether there's an accident between A and B." },
  { term: "Adjacency matrix (A)", def: "An n×n binary square matrix where entry (i,j) is 1 if nodes i and j connect. Symmetric for undirected graphs, so half suffices." },
  { term: "Feature matrix (X)", def: "One row per node, one column per feature. Together with A it is the complete numerical description of a graph." },
  { term: "Node-level prediction", def: "A label or value for a single node. Will road A be delayed? Is this account fraudulent?" },
  { term: "Link-level prediction", def: "A prediction about a pair of nodes — whether an edge exists, or its value. The recommender-system shape." },
  { term: "Graph-level prediction", def: "A label for an entire graph. What does this molecule do? Is this region congested?" },
  { term: "Permutation invariance", def: "Relabeling the nodes does not change a whole-graph prediction. The graph is the same; only the bookkeeping changed." },
  { term: "Permutation equivariance", def: "Relabeling the nodes permutes the per-node outputs the same way. Inputs and outputs move as a pair." },
  { term: "Order-invariant aggregation", def: "Mean, sum, max, min — operators whose result doesn't depend on the order of the set. What makes a GNN layer permutation-invariant." },
  { term: "Message passing", def: "The general name for a GNN layer: each node gathers information from its neighbors, then combines it with its own." },
  { term: "Graph convolution", def: "One layer of neighbor aggregation plus self-combination, followed by a non-linearity. The graph analogue of a conv layer." },
  { term: "Neighborhood N(v)", def: "The set of nodes directly connected to v. The GNN's receptive field, replacing the conv filter's fixed window." },
  { term: "Hop", def: "One step along an edge. One-hop neighbors are directly connected; two-hop neighbors are their neighbors. One GNN layer = one hop." },
  { term: "Computation graph (GNN)", def: "The tree you get by unrolling a node's neighborhood outward one level per layer. Contains loops by design." },
  { term: "W_k (neighbor weight matrix)", def: "The learnable matrix scaling the aggregated neighbor information at layer k. Controls how much your neighbors influence you." },
  { term: "B_k (self weight matrix)", def: "The learnable matrix scaling a node's own previous-layer representation at layer k. Controls how much of yourself you carry forward." },
  { term: "GCN update rule", def: "h_v^(k+1) = σ(W_k · mean of neighbors' h^(k) + B_k · h_v^(k)). Average neighbors, add yourself, weight both, apply a non-linearity." },
  { term: "Over-smoothing", def: "Stacking too many GNN layers averages every node with everything else until all representations converge and nodes become indistinguishable." },
  { term: "Dense graph", def: "A graph whose nodes are well connected. Makes deeper GNNs redundant, since the same nodes reappear at every hop." },
  { term: "Embedding lookup", def: "A table with one learned vector per node. Static — no row exists for a new node, so it can't generalize." },
  { term: "Node embedding", def: "The learned vector representing a node. The objective is that neighboring nodes get similar embeddings." },
  { term: "Encoder (GNN)", def: "A function computing a node's embedding from its features and neighbors. Unlike a lookup table, it extends to unseen nodes." },
  { term: "Inductive learning", def: "Training on some graphs and applying the model to unseen nodes and graphs. Requires a shared feature space." },
  { term: "Weight sharing (GNN)", def: "The same W_k and B_k are used for every node and every graph, so the parameter count doesn't depend on graph size." },
  { term: "Feature engineering (graphs)", def: "Manually computing graph statistics — node counts, degrees, attributes — before classical ML. What GNNs automate away." },
  { term: "GraphRAG", def: "Indexing retrieval documents as a graph so the model can follow entity links across them instead of scoring documents independently." },
  { term: "RAG (retrieval-augmented generation)", def: "Fetching external documents before generating, to supply knowledge past the model's training cutoff. Now often called agentic or web search." },
  { term: "Multi-hop retrieval", def: "Answering a question whose evidence spans linked documents. Atlas → Beacon → affected applications. Impossible with single-document similarity." },
  { term: "Execution graph vs dependency graph", def: "The step order an agent is assumed to run in, versus which steps actually require which. Failures hide in the gap between them." },
  { term: "Mini-batch gradient descent", def: "Computing the gradient on a random subset of the data per update. Fits GPU memory; noisier than full batch." },
  { term: "Stochastic gradient descent (SGD)", def: "Updating from one example at a time. Cheap per step, erratic path, converges in the long run." },
  { term: "Full-batch gradient descent", def: "Using every training example per update. Smoothest gradient, and unaffordable — GPU memory is the binding constraint." },
  { term: "Batch size", def: "How many examples per update. Conventionally a power of two." },
  { term: "Training / validation / test split", def: "Train updates weights, validation picks hyperparameters and stopping, test estimates generalization. Roughly 70/10/20." },
  { term: "Data leakage", def: "Test information reaching training — directly, or by repeatedly tuning against the test set. The score improves and stops meaning anything." },
  { term: "Normalization", def: "x' = (x − mean) / std. Centers data at zero and rescales it, preserving relative spacing." },
  { term: "Feature domination", def: "A larger-range feature driving learning simply because its numbers are bigger. Car price drowning out salary. Why you normalize." },
  { term: "Batch normalization", def: "Normalizing each feature across the examples in a mini-batch, then applying a learnable scale and shift. Common in CNNs." },
  { term: "Layer normalization", def: "Normalizing across the features within a single example or token. The one transformers use." },
  { term: "Train vs eval mode", def: "BatchNorm recomputes statistics while training but uses saved running statistics at inference. What model.eval() switches." },
  { term: "PCA whitening", def: "Decorrelating features by projecting onto principal components. Largely legacy — he kept the slide but said it's no longer used." },
  { term: "Symmetry breaking", def: "Why weights must be random. Identical starting weights mean identical gradients and units that stay identical forever." },
  { term: "Xavier initialization", def: "Weight variance of about 1/fan_in, scaled by layer dimensions so signal variance survives depth. For tanh-style and general feedforward nets." },
  { term: "He (Kaiming) initialization", def: "Weights scaled by √(2/fan_in). The factor of 2 compensates for the negative half that ReLU discards. The ReLU default." },
  { term: "Learning rate", def: "The step size of each update. Too large overshoots and the loss can rise; too small and training crawls." },
  { term: "Ill-conditioning (zigzag)", def: "A loss surface much steeper in some directions than others, causing oscillation along the steep axis and slow progress toward the minimum." },
  { term: "Saddle point", def: "A point where the gradient is zero in every direction but which is not a minimum — the surface curves up one way and down another. Common in high dimensions." },
  { term: "Local minimum", def: "A point where the gradient vanishes and updates stop, even though a lower-loss region exists elsewhere." },
  { term: "Momentum", def: "Combining the current gradient with an accumulated average of recent ones. Escapes saddle points, cancels zigzag, accelerates shallow valleys." },
];

const EXAM_TIPS = [
  { tip: "Invariance vs equivariance — he distinguished these three separate times", detail: "The single most emphasized idea in the lecture, and he said outright that students confuse them. Invariance applies to whole-graph output: relabel the nodes and the graph-level prediction is unchanged. Equivariance applies to per-node output: relabel the nodes and the per-node predictions permute the same way. Inputs and outputs 'move as a pair.'", priority: "HIGH" },
  { tip: "The GCN update rule: W for neighbors, B for self", detail: "h_v^(k+1) = σ(W_k · mean of neighbors + B_k · h_v^(k)). Two learnable matrices per layer and nothing else. He repeated the W-neighbors / B-self pairing more than any other fact in the lecture. If you memorize one formula from Lecture 6, memorize this one.", priority: "HIGH" },
  { tip: "Be ready to compute one GNN layer by hand", detail: "He walked the arithmetic with weights fixed at 0.5. Road network A=1, B=2, C=4, D=8, A's neighbors are B and C. Neighbor mean = 3, so A becomes 0.5(1) + 0.5(3) = 2. Layer 1 across all nodes: roughly 2, 1.5, 4.25, 6. Note how the spread compresses from 1–8 down to 1.5–6.", priority: "HIGH" },
  { tip: "Why a plain DNN on the adjacency + feature matrix fails — four reasons", detail: "Dimensionality (the same objection that motivated CNNs); the graph can't grow, since adding a node changes the input width; no weight sharing, so one network per graph; and node ordering, since relabeling changes the input vector for an identical graph. The requirements for GNNs come straight out of these failures.", priority: "HIGH" },
  { tip: "Order-invariant aggregators: mean, sum, max, min", detail: "Why they work: the result doesn't depend on the order of the set. Mean of {1,3,2} = mean of {3,2,1} = 2. His disqualified counterexample is a position-weighted sum like 2×(first neighbor) + 1×(second neighbor), which changes when you reorder. Same mathematical fact that makes CNN pooling work.", priority: "HIGH" },
  { tip: "Over-smoothing, and why GNNs use only 1–3 layers", detail: "Every layer averages a node with its neighbors. Too many and all nodes converge to the same representation, so the model can't tell them apart. He also noted the redundancy reason — on a dense graph the same nodes reappear at every hop. Contrast this with ResNet's 152 layers; the depth question goes the opposite way for graphs.", priority: "HIGH" },
  { tip: "Initialization: zeros and constants fail for different reasons", detail: "All zeros gives no signal forward (x·W = 0) and no gradient backward. All the same non-zero value gives signal but no symmetry breaking — identical units receive identical gradients and stay identical forever, so 200 units have the expressive power of one. Know both failures separately.", priority: "HIGH" },
  { tip: "He/Kaiming with ReLU, Xavier otherwise", detail: "Xavier sets weight variance to about 1/fan_in, accounting for layer dimensions rather than using one fixed scale. He initialization uses √(2/fan_in), and the factor of 2 exists because ReLU zeros the negative half and throws away that signal. Pretrained backbones aren't initialized at all. He said the derivations are not tested — the pairing is.", priority: "HIGH" },
  { tip: "One GNN layer equals one hop", detail: "The neighborhood replaces the convolution's fixed window. One-hop neighbors are directly connected; two-hop are their neighbors. Number of layers equals how far information travels. The computation graph contains loops — a node reappears inside its own expansion — and that's by design.", priority: "MEDIUM" },
  { tip: "Images and sequences are special cases of graphs", detail: "An image is a grid-shaped graph; text is a chain. A convolution is graph aggregation restricted to a regular grid, which is why it's so much faster. His phrasing: the GNN is 'a superset of the convolutional neural network, and even including the sequential modeling.' He made this point twice.", priority: "MEDIUM" },
  { tip: "Three levels of graph prediction, with one example each", detail: "Node (will road A be delayed; is this account fraudulent), link (are A and B connected; recommender systems), graph (what does this molecule do; is this region congested). He has now covered this in two consecutive lectures, which makes it likely.", priority: "MEDIUM" },
  { tip: "Adjacency matrix: binary, square, symmetric, half is enough", detail: "n×n, entries 0 or 1. He corrected himself mid-sentence that it is NOT a diagonal matrix — it's a square matrix. Symmetric for undirected graphs, so the upper triangle carries all the information. Features travel with their node when you reorder, which is the setup for the invariance discussion.", priority: "MEDIUM" },
  { tip: "BatchNorm across the batch, LayerNorm across features", detail: "BatchNorm normalizes one feature across the examples in a mini-batch — the CNN default, placed between convolution and activation. LayerNorm normalizes one example across its features — the transformer default. You pick one. And BatchNorm uses saved running statistics at inference, which is what model.eval() switches on.", priority: "MEDIUM" },
  { tip: "Normalization formula and what it preserves", detail: "x' = (x − mean)/std. His worked example: 2,4,6,8 has mean 5, and normalizes to about −1.34, −0.45, 0.45, 1.34. Uniform spacing before and after — it rescales without distorting relative structure. Fit the scaler on train, only apply it at test.", priority: "MEDIUM" },
  { tip: "Why normalize: feature domination by scale", detail: "His example is predicting social class from monthly income and car price. Car price has the larger range, so it dominates the gradient and drowns out income — not because it matters more, but because its numbers are bigger. You don't know in advance which feature matters; normalizing lets the model decide.", priority: "MEDIUM" },
  { tip: "Mini-batch: the trade-off is noise versus memory", detail: "One example per update is noisy; the full batch is the truest gradient and unaffordable, since GPU memory is the binding constraint. Mini-batch samples randomly, so it approximates the full gradient while fitting in memory. Batch sizes are conventionally powers of two.", priority: "MEDIUM" },
  { tip: "Learning-rate symptoms map to specific diagnoses", detail: "Loss rising over epochs means the rate is too high and you're overshooting the minimum. Loss nearly flat means it's too low — right direction, step too small. A zigzag path means the loss surface is ill-conditioned, steeper in some directions than others, which input normalization helps with.", priority: "MEDIUM" },
  { tip: "Saddle points are common in deep networks", detail: "Zero gradient in every direction but not a minimum — the surface curves up one way and down another. He stressed that high-dimensional loss surfaces have very many of them, not one. Combined with local minima and mini-batch noise, this is the motivation for momentum.", priority: "MEDIUM" },
  { tip: "Momentum = current gradient + accumulated recent gradients", detail: "It fixes three things: it carries you through saddle points where the local gradient is zero, it cancels the oscillating component of a zigzag while the consistent component accumulates, and it accelerates progress along shallow valleys. His trading analogy: ride a trend until it breaks.", priority: "MEDIUM" },
  { tip: "Train/validation/test and what each split is for", detail: "Train updates weights, validation decides hyperparameters and when to stop, test estimates generalization and is used once. Roughly 70/10/20. His joke carries the lesson: adding test data to training does improve your score, and destroys the only thing the score was measuring.", priority: "MEDIUM" },
  { tip: "Inductive generalization needs a shared feature space", detail: "Because W_k and B_k are shaped by the embedding dimension and not by node count, a trained GNN runs on unseen nodes and unseen graphs. The requirement is that the new graph's nodes carry the same kinds of features. A road-network GNN transfers to another road network, not to molecules.", priority: "MEDIUM" },
  { tip: "Embedding lookup is static — an encoder is a function", detail: "A lookup table has one row per node seen during training, so a new node has no row and the method doesn't say how to make one. A GNN computes the embedding from features and neighbors, so it extends to new inputs. This is the one-line argument for GNNs over node embeddings.", priority: "LOW" },
  { tip: "Training a GNN is ordinary training — that's the point", detail: "His words: 'there is no difference from training any other deep neural network.' Same loss, same gradient descent, same backprop. The three things you choose are the aggregation function (must be order-invariant), the loss on the embeddings, and which nodes to train on.", priority: "LOW" },
  { tip: "Graphs + LLMs: know both directions", detail: "Route 1 uses the LLM as a text encoder — abstracts become node features, citations become the adjacency matrix, and the GNN predicts. Route 2 writes the graph structure into a prompt as natural language and lets the LLM predict. The difference is who digests the structure and who makes the final call. Asked which is better, he said it depends.", priority: "LOW" },
  { tip: "GraphRAG: single-document retrieval can't answer multi-hop questions", detail: "His Atlas example. Document 1 says Beacon depends on Atlas; documents 2 and 3 name the applications depending on Beacon. Asked which apps are affected, similarity search returns document 1, which doesn't contain the answer. Without graph structure you don't get a worse answer — you get a wrong one.", priority: "LOW" },
  { tip: "Assignment 1 due Oct 26 · no GNN homework · midterm Nov 2", detail: "Assignment 1 is out, due exactly three weeks from Oct 5. Two-page report plus code, AI explicitly permitted, questions as PRIVATE posts only. He confirmed there is no homework on graph neural networks. A condensed midterm review is coming the week before Nov 2, and his open-book advice is not to print hundreds of slides. Quizzes stay dynamic.", priority: "LOW" },
  { tip: "The agent-graph research is explicitly not on the exam", detail: "He labeled the execution-graph and multi-agent-topology papers as 'purely research, just put it there for the person who are interested.' Good project fodder — the gap between assumed execution order and real dependency order, and the finding that attacker-target distance in an agent topology affects privacy leakage.", priority: "LOW" },
];

// ─── GAME: Message Passing ─────────────────────────────────────────────────
// Nine levels, one causal chain: a graph is the general data structure, so
// every piece of the architecture is forced by something the previous idea
// could not do. Five of the nine levels have a hands-on (non-MCQ) step.
//
// Distractor discipline: every wrong option is a real misconception, written
// to roughly the same length as the correct one. The correct answer is never
// identifiable by being the longest or most detailed option.

// The professor's road network: A–B, A–C, C–D, with layer-0 values 1, 2, 4, 8.
// Rolling the 0.5/0.5 update forward reproduces his layer-1 numbers exactly
// (2, 1.5, 4.25, 6) and then shows the values collapsing together.
const RN_NB = { A: ["B", "C"], B: ["A"], C: ["A", "D"], D: ["C"] };
const rnRoll = (k) => {
  let h = { A: 1, B: 2, C: 4, D: 8 };
  for (let i = 0; i < k; i++) {
    const next = {};
    ["A", "B", "C", "D"].forEach((n) => {
      const m = RN_NB[n].reduce((s, u) => s + h[u], 0) / RN_NB[n].length;
      next[n] = 0.5 * h[n] + 0.5 * m;
    });
    h = next;
  }
  return h;
};
const rnSpread = (k) => {
  const h = rnRoll(k);
  const v = [h.A, h.B, h.C, h.D];
  return Math.max.apply(null, v) - Math.min.apply(null, v);
};

const GAME = {
  title: "Message Passing",
  tagline: "Nine levels, one chain: each piece of a graph network is forced by something the idea before it could not do.",
  nodePrefix: "v",
  takeaway: "Everything is a graph, so a graph layer can only use operations that ignore node order — average your neighbours, add yourself, weight both — and it has to stop after two or three hops, before every node looks the same.",
  levels: [
    // ── v1 ──────────────────────────────────────────────────────────────────
    {
      id: "graphs",
      name: "Everything is a graph",
      problem: "You have three architectures: dense nets for tables, CNNs for grids, RNNs and transformers for sequences. A road network is none of those — and a road's own vehicle count does not contain the answer you want.",
      steps: [
        {
          type: "mcq",
          ctx: "Four road segments. <b>A</b> carries 10 vehicles, <b>B</b> carries 20, <b>C</b> carries 40, <b>D</b> carries 80. A connects to B and to C; C also connects to D. You want to predict whether A will be delayed in the next five minutes.",
          q: "A's own count is 10 vehicles — light traffic. Why isn't that enough?",
          opts: [
            "Ten vehicles is too small a number for a network to use reliably, so the feature has to be rescaled before it means anything.",
            "Traffic flows between connected segments, so A's near future depends on the 20 and 40 sitting on the roads that feed into it.",
            "A single count is one feature, and a model needs at least two features per node before it can be fit to anything at all.",
            "The count was measured now and the prediction is five minutes out, so what A needs is its own history rather than a snapshot.",
          ],
          a: 1,
          why: "<b>The neighbours carry the signal.</b> His point: the real world is not a single-node problem. A alone looks fine; A with B's 20 and C's 40 looks very different. A prediction that ignores the structure has thrown away the information that decides the answer.",
          hints: {
            0: "Rescaling is a real concern — it shows up in the second half of this lecture. It isn't why 10 vehicles is uninformative here.",
            2: "One feature is plenty. His example gives each road exactly one number.",
            3: "History would help, but he made this point about the graph, not about time. Look at what A is connected to.",
          },
          defaultHint: "Nothing is wrong with the number 10. The problem is everything the number leaves out.",
        },
        {
          type: "multi",
          q: "A graph supports predictions at three levels. Select every task below that is a <b>node-level</b> prediction.",
          opts: [
            "Will road A be delayed?",
            "Are A and B connected?",
            "Is this account fraudulent?",
            "What does this molecule do?",
            "Will this user like this item?",
            "Is this region congested?",
          ],
          correct: [0, 2],
          why: "<b>Node, link, graph.</b> Node-level asks about one node — A's delay, one account's status. Link-level asks about a pair: A–B connectivity, or user–item preference, which is the recommender shape. Graph-level asks about the whole thing: a molecule's function, a region's congestion.",
          hintFn: (sel) => {
            if (sel.indexOf(1) !== -1 || sel.indexOf(4) !== -1) return "Two of your picks are about a <i>pair</i> of nodes. That's link level, not node level.";
            if (sel.indexOf(3) !== -1 || sel.indexOf(5) !== -1) return "A molecule's function and a region's congestion are single answers for the entire graph.";
            return "Exactly two of these ask about one node on its own.";
          },
        },
        {
          type: "grid",
          q: "Write the graph down. Click a cell to set it to <b>1</b>, meaning those two segments connect. The edges are <b>A–B</b>, <b>A–C</b> and <b>C–D</b>. Leave everything else at 0, including the diagonal.",
          rows: ["A", "B", "C", "D"],
          cols: ["A", "B", "C", "D"],
          target: (r, c) => {
            const e = { "0,1": 1, "1,0": 1, "0,2": 1, "2,0": 1, "2,3": 1, "3,2": 1 };
            return !!e[r + "," + c];
          },
          onLabel: "1",
          offLabel: "0",
          cellLabel: (r, c, isOn) => (isOn ? "1" : "0"),
          cellAria: (r, c, isOn) => `row ${["A", "B", "C", "D"][r]}, column ${["A", "B", "C", "D"][c]}: ${isOn ? 1 : 0}`,
          why: "<b>That's the adjacency matrix.</b> n×n, binary, square — he corrected himself mid-sentence that it is <i>not</i> a diagonal matrix. And notice it came out symmetric: you set (A,B) and (B,A), (A,C) and (C,A), (C,D) and (D,C). Connection has no direction in an undirected graph.",
          hintFn: (e) => {
            if (e.count > 4) return "Each edge is <i>two</i> cells — one above the diagonal and its mirror below. Three edges means six ones in total.";
            return "Check the diagonal: no segment is listed as its own neighbour here. And check that every 1 has its mirror.";
          },
        },
        {
          type: "numeric",
          ctx: "The matrix you just filled is 4×4 and symmetric, so the lower triangle mirrors the upper one. The diagonal is all zeros.",
          q: "How many entries do you actually have to store to describe this graph's structure? Count only the cells strictly above the diagonal.",
          answer: 6,
          why: "<b>n(n−1)/2 = 4·3/2 = 6.</b> Symmetry makes half of an undirected adjacency matrix redundant — he said it directly: 'you only need half of this matrix.' Those 6 bits plus the feature matrix X are the complete numerical description of the graph.",
          hint: "Count the cells above the diagonal of a 4×4 grid: 3 in the first row, 2 in the second, 1 in the third.",
        },
      ],
    },
    // ── v2 ──────────────────────────────────────────────────────────────────
    {
      id: "dnn-fails",
      name: "Why a plain network can't take it",
      problem: "You now have the graph as numbers — an adjacency matrix A and a feature matrix X. So concatenate them, flatten, and feed the result to a fully-connected network. It fails, for four separate reasons.",
      steps: [
        {
          type: "mcq",
          ctx: "Five nodes. You concatenate the 5×5 adjacency matrix with the 5×2 feature matrix, flatten it, and train a dense network on the result. It works. Then a sixth road <b>F</b> opens.",
          q: "What breaks?",
          opts: [
            "The network still runs, but every weight learned for the first five nodes is now meaningless and has to be relearned from scratch.",
            "A gains a row and a column while X gains a row, so the flattened input is a different length and no longer fits the first layer.",
            "Nothing breaks immediately, but the new node carries no training label, so it stays excluded from the loss until it is annotated.",
            "The adjacency matrix stops being symmetric, because F's new edges were only recorded in one direction when the graph was extended.",
          ],
          a: 1,
          why: "<b>A fully-connected layer has a fixed input width.</b> Six nodes means a 6×6 adjacency matrix and a 6×2 feature matrix — a different number of input values entirely. The architecture has to be rebuilt and retrained. His phrasing: 'this graph cannot grow at all.'",
          hints: {
            0: "Something fails earlier than that. The input never reaches those weights.",
            2: "Labels are a separate matter. Ask what shape the input is now.",
            3: "Adding an edge adds both of its cells. Symmetry survives; something else doesn't.",
          },
          defaultHint: "Count the numbers going into the first layer before F, and then after F.",
        },
        {
          type: "multi",
          q: "Select every genuine failure of the flatten-and-feed-a-dense-net approach.",
          opts: [
            "Fixed input size",
            "Can't add nodes",
            "No weight sharing across graphs",
            "Node ordering changes the input",
            "Edges can't hold features",
            "Adjacency matrices are too sparse",
            "Graphs can't be written as numbers",
          ],
          correct: [0, 1, 2, 3],
          why: "<b>Four failures, and each becomes a design requirement.</b> Handle variable size, share weights across graphs, and be indifferent to node ordering — that is the specification a GNN has to meet. Edges hold features either way, sparsity is an efficiency matter rather than a correctness one, and graphs write down fine as (A, X).",
          hintFn: (sel) => {
            if (sel.indexOf(6) !== -1) return "You just wrote one down as numbers in the last level. That one isn't a failure.";
            if (sel.indexOf(4) !== -1) return "Edge features were in the first level — width of the intersection, whether there's an accident. Not a failure.";
            if (sel.indexOf(5) !== -1) return "Sparsity costs memory; it doesn't make the answer wrong. Four of these are about correctness.";
            return "There are exactly four, and each one turns into something the GNN architecture has to provide.";
          },
        },
        {
          type: "mcq",
          ctx: "Two drawings of the same graph. In the first the nodes are labelled A, B, C, D, F. In the second the identical structure is labelled in a different order. Nothing about the graph changed — only the names.",
          q: "What does the dense network see?",
          opts: [
            "Two different adjacency matrices, so two different inputs, so two different predictions for one identical graph.",
            "The same input, because flattening a matrix sorts its entries and a sorted result is unaffected by any relabelling.",
            "Two different inputs, but the predictions converge during training because the network treats both orderings as augmented data.",
            "The same prediction, because the node features travelled with their nodes and the features are what the network actually uses.",
          ],
          a: 0,
          why: "<b>Node ordering is arbitrary bookkeeping, and the dense net reacts to it.</b> He drew exactly these two orderings and pointed out that their adjacency matrices look completely different while describing the same structure. A model whose answer depends on how you numbered the nodes is broken.",
          hints: {
            1: "Flattening preserves order; it doesn't sort. Row A's entries go first because A was written first.",
            2: "Two orderings out of 120 isn't augmentation, and nothing in the setup trains on both.",
            3: "The features do travel with their nodes — but so do the adjacency rows, and those moved too.",
          },
          defaultHint: "Write out row A of each matrix. Are they the same sequence of numbers?",
        },
      ],
    },
    // ── v3 ──────────────────────────────────────────────────────────────────
    {
      id: "invariance",
      name: "Invariance and equivariance",
      problem: "Node ordering carries no information — it is only the order you happened to write the nodes down in. So the model has to be built so that reordering cannot change the answer. That requirement splits into two different properties, and he said outright that students confuse them.",
      steps: [
        {
          type: "mcq",
          ctx: "A molecule as a graph. You predict one property of the <b>whole molecule</b> — say, whether it is toxic. Then you relabel its atoms in a different order and predict again.",
          q: "What must happen to the prediction, and what is that property called?",
          opts: [
            "It must come out identical, and that is permutation invariance — the graph did not change, only the labels did.",
            "It must come out identical, and that is permutation equivariance, since the whole graph behaved here as a single unit.",
            "It may change, as long as it changes by the same permutation that was applied to the atoms — permutation equivariance.",
            "It may change, and that is fine, because a whole-graph property is read off the final pooled vector and not off the atoms.",
          ],
          a: 0,
          why: "<b>Invariance is for whole-graph output.</b> Relabel the nodes and a graph-level prediction must be identical, because nothing about the molecule changed. His words: 'the prediction of these two graphs are the same, no matter how you order them.'",
          hints: {
            1: "Right outcome, wrong name. Equivariance is about outputs that <i>move</i>; this output doesn't move anywhere.",
            2: "Toxicity is one number for the whole graph. There is nothing for a permutation to act on.",
            3: "Pooling is how you get there, but the requirement is stronger than 'fine' — it must be identical.",
          },
          defaultHint: "One output for the whole graph. Ask whether it is allowed to move, or required not to.",
        },
        {
          type: "mcq",
          ctx: "Same graph, but now you predict <b>one value per node</b> — a delay risk for each road. The relabelling sends the node that was called A to the position now called E.",
          q: "What must happen to A's predicted value?",
          opts: [
            "It is now reported at E, carrying the same value, because the per-node outputs permute exactly as the inputs did.",
            "It must stay at A with the same value, since equivariance pins each per-node output to the label it originally had.",
            "It may be reported at E with a recomputed value, because the node's neighbourhood is indexed differently after relabelling.",
            "It must be averaged with E's old prediction, because the two labels now point at the same node in the graph.",
          ],
          a: 0,
          why: "<b>Equivariance is for per-node output.</b> The values are allowed to move; they must move <i>together with</i> the nodes. His phrasing: 'they move as a pair,' and 'this number shouldn't change even with a changed index of the nodes.'",
          hints: {
            1: "The labels are what changed. Pinning an output to an old label is pinning it to nothing.",
            2: "Indexed differently, yes — but it is the same neighbourhood, so the value has no reason to change.",
            3: "There is no old E prediction to average with. E is the new name for the node that was A.",
          },
          defaultHint: "The node moved. Did its value move with it, or stay behind?",
        },
        {
          type: "multi",
          q: "Select every property below that belongs to permutation <b>equivariance</b> rather than invariance.",
          opts: [
            "Per-node outputs",
            "Whole-graph output",
            "Outputs permute with inputs",
            "Output unchanged by relabelling",
            "One value per node",
            "One value per graph",
          ],
          correct: [0, 2, 4],
          why: "<b>Equivariance: many outputs that move together with the nodes. Invariance: one output that does not move at all.</b> Memorise which applies where — node-level output needs equivariance, graph-level output needs invariance. He came back to this distinction three separate times.",
          hintFn: (sel) => {
            if (sel.indexOf(1) !== -1 || sel.indexOf(5) !== -1) return "A single whole-graph answer is the invariance case. Equivariance needs something per node.";
            if (sel.indexOf(3) !== -1) return "Unchanged is invariance. Equivariance allows change — just not arbitrary change.";
            return "Three of these are equivariance. All three involve more than one output.";
          },
        },
      ],
    },
    // ── v4 ──────────────────────────────────────────────────────────────────
    {
      id: "aggregation",
      name: "Aggregation that ignores order",
      problem: "Invariance is a requirement, not a mechanism. You still have to write a function that combines a node with its neighbours — and the obvious ways of writing one react to the order of the list.",
      steps: [
        {
          type: "numeric",
          ctx: "His deliberately bad example. A node's score is <b>2 × (first neighbour listed) + 1 × (second neighbour listed)</b>. Node A's neighbours are B, carrying 2, and C, carrying 4. List B first and the score is 2(2) + 1(4) = <b>8</b>.",
          q: "Now list C first instead. Nothing about the graph changed. What score do you get?",
          answer: 10,
          why: "<b>8 and 10 for the same graph.</b> That function is disqualified. Its weight depended on position in a list, and the list order was arbitrary — so the score moved when nothing real did. This is the failure every GNN layer is designed around.",
          hint: "Same formula, swapped list: 2 × (C's value) + 1 × (B's value).",
        },
        {
          type: "multi",
          q: "Select every aggregator whose result is unaffected by the order of the neighbour set.",
          opts: ["Mean", "Sum", "Max", "Min", "First element", "Weighted by position", "Concatenate in order"],
          correct: [0, 1, 2, 3],
          why: "<b>Mean, sum, max, min.</b> The mean of {1, 3, 2} is 2 and so is the mean of {3, 2, 1}. That is the whole argument: pick an aggregator with this property and permutation invariance comes for free, by construction, rather than being something the model has to learn to approximate.",
          hintFn: (sel) => {
            if (sel.indexOf(4) !== -1) return "'First' is a position. Reorder the set and you get a different element.";
            if (sel.indexOf(5) !== -1) return "That's the function you just disqualified one step ago — 8 versus 10.";
            if (sel.indexOf(6) !== -1) return "Concatenation keeps the order in the output. [2, 4] and [4, 2] are different vectors.";
            return "Four of these collapse a set to one number without caring which end you start from.";
          },
        },
        {
          type: "mcq",
          q: "You have met this exact property earlier in the course. Where?",
          opts: [
            "In CNN pooling — max- or average-pooling over a window does not care what order you read the window's cells in.",
            "In the RNN hidden state, which compresses a whole sequence into one fixed vector regardless of the sequence's order.",
            "In positional encoding, which is added precisely so that a transformer stops reacting to the order of its tokens.",
            "In the convolution filter, whose weights are shared so that the same filter applies wherever it slides over the image.",
          ],
          a: 0,
          why: "<b>Pooling.</b> Same mathematical fact, two different payoffs: in Lecture 4, order-invariance over a window bought tolerance to small shifts; here it buys tolerance to node relabelling. He drew the parallel himself when introducing the update rule.",
          hints: {
            1: "An RNN is the opposite case — its entire purpose is that order changes the state.",
            2: "Positional encoding exists because self-attention <i>already</i> ignores order and we need it to stop.",
            3: "Right neighbourhood, wrong operation. Weight sharing buys translation tolerance; order-invariance lives one step later.",
          },
          defaultHint: "Look for an operation that reduces a set of values to one value, in Lecture 4.",
        },
      ],
    },
    // ── v5 ──────────────────────────────────────────────────────────────────
    {
      id: "layer",
      name: "One layer, one hop",
      problem: "You have an order-invariant way to combine neighbours, but nothing learnable and nothing deep. A layer needs parameters, and it has to be stackable.",
      steps: [
        {
          type: "order",
          q: "Build one graph-convolution layer for node v. Click the pieces in the order the layer executes them.",
          pieces: [
            "Average the layer-k embeddings of v's neighbours N(v)",
            "Scale that neighbour mean by the weight matrix W_k",
            "Add B_k times v's own layer-k embedding",
            "Apply the non-linear activation σ",
            "Hand the result to the next layer as h_v^(k+1)",
          ],
          posHints: [
            "Start with the neighbours. The order-invariant step comes first, before anything learnable touches it.",
            "The neighbour mean is raw. Something learnable has to scale it before it is combined with anything.",
            "Now bring in v itself, scaled by its own matrix. Neighbours and self are added, not concatenated.",
            "Both terms are in the bracket. What wraps the bracket?",
            "Everything is computed. All that's left is passing it on.",
          ],
          why: "<b>Average, scale, add yourself, activate.</b> That is the whole layer. Two learnable matrices — W_k for the neighbours, B_k for yourself — and the same σ from Lecture 3, which he waved off entirely: 'just drop it, don't care about it.'",
        },
        {
          type: "mcq",
          ctx: "<span style='font-family:monospace'>h_v^(k+1) = σ( W_k · mean of N(v)'s h^(k) &nbsp;+&nbsp; B_k · h_v^(k) )</span>",
          q: "What do W_k and B_k control?",
          opts: [
            "W_k sets how much your neighbours influence you; B_k sets how much of your own previous embedding you keep.",
            "W_k sets how much of your own previous embedding you keep; B_k sets how much your neighbours influence you.",
            "W_k is the learned weight matrix and B_k is the bias vector added after it, exactly as in an ordinary dense layer.",
            "W_k is shared across all nodes while B_k is learned separately per node, which is how nodes stay distinguishable.",
          ],
          a: 0,
          why: "<b>W for neighbours, B for self.</b> He repeated this pairing more times than anything else in the lecture. Both are learnable, both are shared across every node in the graph, and they are the only trainable parameters in the layer.",
          hints: {
            1: "Right pair of roles, wrong assignment. Look at which term each one multiplies in the formula.",
            2: "B_k is a matrix, not a bias. It multiplies v's own previous embedding.",
            3: "Both are shared across all nodes — and that sharing is exactly what lets one trained GNN run on a graph it has never seen.",
          },
          defaultHint: "There are two terms in the bracket. Match each matrix to the term it sits in front of.",
        },
        {
          type: "numeric",
          ctx: "His worked example, with both weights fixed at 0.5 so the information flow is visible. Layer-0 values: <b>A = 1, B = 2, C = 4, D = 8</b>. A's neighbours are B and C.",
          q: "Compute A's layer-1 value: 0.5 × (A itself) + 0.5 × (mean of A's neighbours).",
          answer: 2,
          why: "<b>0.5(1) + 0.5(3) = 2.</b> The neighbour mean is (2 + 4)/2 = 3. Run the same rule on every node and layer 1 comes out 2, 1.5, 4.25, 6 — exactly his numbers. Watch the spread: layer 0 ran from 1 to 8, layer 1 runs from 1.5 to 6.",
          hint: "Neighbour mean first: (2 + 4)/2. Then half of that, plus half of A's own 1.",
        },
      ],
    },
    // ── v6 ──────────────────────────────────────────────────────────────────
    {
      id: "smoothing",
      name: "Stacking hops, and the wall",
      problem: "One layer reaches one hop. Information two hops away needs two layers, three hops away needs three. So stack them — and the very thing that made the layer work starts working against you.",
      steps: [
        {
          type: "slider",
          q: "Keep applying the same 0.5/0.5 rule and watch the four node values. <b>Find the smallest number of layers at which the gap between the highest and lowest node drops below 1.0.</b>",
          ctx: "Road network A–B, A–C, C–D. Layer 0: A = 1, B = 2, C = 4, D = 8 — a gap of 7.",
          params: [{ id: "k", label: "layers applied", min: 0, max: 14, step: 1, init: 1 }],
          action: "Check",
          view: (v) => {
            const h = rnRoll(v.k);
            return {
              bars: [
                { label: "A", value: +h.A.toFixed(3), max: 8, kind: "state" },
                { label: "B", value: +h.B.toFixed(3), max: 8, kind: "state" },
                { label: "C", value: +h.C.toFixed(3), max: 8, kind: "state" },
                { label: "D", value: +h.D.toFixed(3), max: 8, kind: "state" },
              ],
              readout: "gap (highest − lowest) = " + rnSpread(v.k).toFixed(3),
            };
          },
          check: (v) => {
            if (v.k === 7) return true;
            const s = rnSpread(v.k);
            if (s >= 1) return "At " + v.k + " layer" + (v.k === 1 ? "" : "s") + " the gap is still " + s.toFixed(3) + ", which is above 1.0. Add layers.";
            return "At " + v.k + " layers the gap is " + s.toFixed(3) + " — already below 1.0, so you have gone past the first crossing. Back off.";
          },
          ok: "Seven layers, and the gap is down to 0.801. At six it was still 1.068.",
        },
        {
          type: "mcq",
          ctx: "Layer 0 ran from 1 to 8. By layer 7 every node sits between 2.93 and 3.73. Keep stacking and they all converge on the same number.",
          q: "What is this called, and why is it fatal?",
          opts: [
            "Over-smoothing. Repeated neighbour averaging drives every representation together until the model can't tell nodes apart.",
            "Vanishing gradients. The repeated 0.5 factors multiply down through the layers until the early layers get no learning signal.",
            "Mode collapse. The aggregation keeps selecting the same few neighbours, so most of the graph stops contributing anything.",
            "Over-fitting. The deeper model has memorised the training graph's exact values and no longer generalises to an unseen graph.",
          ],
          a: 0,
          why: "<b>Over-smoothing.</b> Each layer pulls a node toward the average of its neighbours — the mechanism, working as designed. Do it too often and every node has been averaged with everything else, so the representations collapse together and node-level prediction becomes impossible. He called it 'a classical issue' of graph learning.",
          hints: {
            1: "Gradients are a separate failure. Look at the forward values you just watched — what happened to <i>them</i>?",
            2: "Nothing is being selected. Every neighbour contributes to the mean, every single layer.",
            3: "Nothing has been memorised. The failure is visible in the forward pass, before any training happens.",
          },
          defaultHint: "You watched four distinct values turn into four nearly identical ones. Name that.",
        },
        {
          type: "mcq",
          q: "So how deep should a GNN be, and what is the second reason not to go deeper?",
          opts: [
            "One to three layers. On a dense graph the same nodes reappear at every hop, so extra layers re-aggregate what you had.",
            "Ten to twenty layers with skip connections, since this is the same degradation problem that ResNet solved back in Lecture 4.",
            "As many layers as the graph's diameter, so that every node can eventually reach every other one and nothing is left out.",
            "One to three layers, because the adjacency matrix has to be re-inverted at every layer and that cost grows with graph size.",
          ],
          a: 0,
          why: "<b>One or two typically, two or three at most</b> — his guidance, plus 'a lot of layers won't actually help that much.' Beyond over-smoothing there is pure redundancy: expand A one hop and you reach B, C, D; expand two hops and B's neighbours include A again. The contrast with ResNet's 152 layers is real, because a convolution's receptive field grows slowly and locally while a graph neighbourhood can swallow the whole graph in a few hops.",
          hints: {
            1: "Skip connections fix a different failure. Here the forward values themselves are collapsing, not the gradients.",
            2: "Reaching every node is what you are trying to <i>avoid</i>. That's the collapse.",
            3: "Nothing is inverted. The layer is an average, a scale and an add.",
          },
          defaultHint: "You already know the depth. The second reason is about what an extra hop actually brings you on a well-connected graph.",
        },
      ],
    },
    // ── v7 ──────────────────────────────────────────────────────────────────
    {
      id: "training",
      name: "Training, transfer, and the superset",
      problem: "You have an architecture. Nothing yet says how W and B get learned, or whether any of it survives contact with a graph the model has never seen.",
      steps: [
        {
          type: "mcq",
          q: "What is different about training a GNN, compared with training any other deep network?",
          opts: [
            "Nothing. Same loss, same gradient descent, same backpropagation — only the architecture is graph-specific.",
            "The loss has to be summed over edges rather than nodes, because the parameters live on the connections.",
            "Gradients must be propagated along the graph's edges in a separate pass before the ordinary backward pass.",
            "Each node needs its own optimiser state, since each has a different number of neighbours feeding its gradient.",
          ],
          a: 0,
          why: "<b>Nothing.</b> His words: 'there is no difference from training any other deep neural network.' Forward pass, classifier head, loss, backprop, update. What backprop updates is W_k and B_k — shared across all nodes, so every node's loss contributes gradient to the same matrices. A two- or three-layer GNN has very few parameters.",
          hints: {
            1: "The parameters are W_k and B_k, and they live in the layer, not on the edges.",
            2: "The neighbour aggregation is part of the forward pass, so it is already in the computational graph.",
            3: "W_k and B_k are shared. There is no per-node parameter to keep state for.",
          },
          defaultHint: "He answered this one in a single word.",
        },
        {
          type: "mcq",
          ctx: "The simplest possible way to get a vector per node: keep a table with one learned row per node, and read off the row you need.",
          q: "Why did he reject that in favour of a GNN?",
          opts: [
            "A table has no row for a node that wasn't there at training time, and nothing says how to make one.",
            "A table stores one vector per node, so memory grows with the graph and becomes prohibitive at web scale.",
            "A table's rows start out random, so two neighbouring nodes begin far apart and may never be pulled together.",
            "A table cannot represent edge features, so information living on the connections is lost before training starts.",
          ],
          a: 0,
          why: "<b>Static versus computed.</b> A lookup table stores answers; an encoder computes them. A function extends to inputs it has never seen and a table does not — his verdict: 'it's not extendable to new nodes, so it's not very good.' The GCN update rule <i>is</i> that function: features in, neighbours in, embedding out.",
          hints: {
            1: "Memory is a real cost, but it isn't what makes the method unusable. Ask what happens to a node that is new.",
            2: "Training fixes random initialisation. His objection survives training.",
            3: "Node embeddings aren't meant to hold edge features. Think about the set of rows itself.",
          },
          defaultHint: "A table has a fixed number of rows. What does that forbid?",
        },
        {
          type: "multi",
          q: "A GNN is trained on Los Angeles road networks, each node carrying (vehicle count, road quality). Select everything it can be applied to <b>without retraining</b>.",
          opts: [
            "A new road in the same network",
            "Another city, same two features",
            "A 10× larger LA network",
            "A molecule graph",
            "The same roads, five new features",
          ],
          correct: [0, 1, 2],
          why: "<b>Inductive, within a shared feature space.</b> W_k and B_k are shaped by the embedding dimension and not by node count, so graph size is free and new nodes are free. What is <i>not</i> free is the feature space: change what the features mean and the learned mapping no longer applies.",
          hintFn: (sel) => {
            if (sel.indexOf(3) !== -1) return "A molecule's node features aren't vehicle counts. Different feature space, different mapping.";
            if (sel.indexOf(4) !== -1) return "Five new features means a different input width and a different meaning per column.";
            return "Size and novelty are both free. Only one thing has to stay fixed — and two of these options change it.";
          },
        },
        {
          type: "mcq",
          q: "He claimed a CNN is a special case of a GNN. On what grounds?",
          opts: [
            "An image is a grid-shaped graph — each pixel a node with edges to its neighbours, and convolution is aggregation.",
            "A CNN's filters are learned the same way W_k is, which makes each architecture a special case of the other one.",
            "Both compress their input into embeddings, and any two architectures producing embeddings are cases of one general one.",
            "A CNN applies one filter everywhere and a GNN applies one W_k everywhere, so weight sharing makes them equivalent.",
          ],
          a: 0,
          why: "<b>The containment runs one way.</b> A CNN is a GNN restricted to grid graphs; a sequence model is a GNN restricted to chains. His phrasing: the GNN is 'a superset of the convolutional neural network, and even including the sequential modeling, because everything is a graph.' The special cases exist because regularity is cheaper — a sliding dense filter beats general graph aggregation on speed.",
          hints: {
            1: "Containment isn't symmetric. A grid is a graph; a graph is not a grid.",
            2: "That would make every architecture a special case of every other one. The claim here is structural.",
            3: "Both do share weights, but that's a consequence. The claim is about the shape of the data.",
          },
          defaultHint: "Describe a 3×3 pixel patch using only the words node, edge and neighbour.",
        },
      ],
    },
    // ── v8 ──────────────────────────────────────────────────────────────────
    {
      id: "start",
      name: "Starting in the right place",
      problem: "The second half of the lecture leaves architecture behind. You can have exactly the right model and still fail to train it, because the data arrives on the wrong scale and the weights start in the wrong place.",
      steps: [
        {
          type: "numeric",
          ctx: "His worked example. The values <b>2, 4, 6, 8</b> have mean 5 and standard deviation about 2.24. Normalisation is x' = (x − mean) / std.",
          q: "What does 8 become? (Two decimal places.)",
          answer: 1.34,
          tol: 0.02,
          why: "<b>(8 − 5) / 2.24 ≈ 1.34.</b> The four values become about −1.34, −0.45, 0.45, 1.34 — centred on zero, on a sane scale. And look at the spacing: 2 apart before, about 0.89 apart after, uniform both times. Normalisation rescales without distorting relative structure.",
          hint: "Subtract the mean first, then divide by 2.24.",
        },
        {
          type: "mcq",
          q: "Why can't you initialise every weight to zero?",
          opts: [
            "x·W is zero for any input, so no signal forward — and the chain rule multiplies by W, so no gradient backward.",
            "Zero is a saddle point of the loss surface, and gradient descent that starts exactly on a saddle can never leave it.",
            "A weight of zero makes the ReLU derivative undefined, so the backward pass cannot be computed for the first layer.",
            "Every activation would be exactly zero, so batch normalisation divides by a zero standard deviation and produces NaNs.",
          ],
          a: 0,
          why: "<b>No signal forward, no gradient backward.</b> Both directions die. He posed this as a question to himself and answered it in one line: 'if you initialize things from zero, your gradient may still be trapped at zero all the time, because it's a chain rule — you need to multiply by your weight.'",
          hints: {
            1: "Nearly the right shape of answer, but you don't need saddle-point theory. Just multiply the matrices.",
            2: "ReLU's derivative at zero is a technicality, and the network has a bigger problem before that.",
            3: "Batch norm is optional. The failure happens in a bare network with no normalisation at all.",
          },
          defaultHint: "Write out the forward pass, then the backward pass. What is each one multiplied by?",
        },
        {
          type: "mcq",
          ctx: "So use a non-zero constant instead — set every weight in a 200-unit layer to 1. Now there is signal.",
          q: "Why does this still fail?",
          opts: [
            "All 200 units see the same inputs, produce the same outputs and get the same gradients, so they update identically.",
            "A weight of 1 is far too large for a deep network, so activations grow geometrically layer by layer until they overflow.",
            "The constant has no variance, so batch normalisation cannot standardise the layer and the activations saturate.",
            "Gradient descent treats a constant initialisation as converged already, since the loss is flat in every direction there.",
          ],
          a: 0,
          why: "<b>No symmetry breaking.</b> Two hundred units with the expressive power of one. His phrasing: 'they can remain identical throughout subsequent updates.' Randomness isn't a nicety — it is what makes the units different from one another, which is what makes the layer more than one unit wide.",
          hints: {
            1: "Scale is a separate problem and the next step is about it. Here, ask what the 200 units are doing relative to each other.",
            2: "Batch norm is optional again. This fails in a bare network.",
            3: "The loss isn't flat. Gradients flow fine — the trouble is that they are all the same gradient.",
          },
          defaultHint: "Two hundred units, identical weights, identical inputs. What do they compute, and what happens when they update?",
        },
        {
          type: "mcq",
          ctx: "Xavier initialisation sets the weight variance to about 1/fan_in, which keeps signal variance roughly constant as it propagates. With ReLU it still isn't enough.",
          q: "What does He (Kaiming) initialisation do, and why?",
          opts: [
            "Scales weights by √(2/fan_in). The 2 compensates for the negative half that ReLU zeros out and throws away.",
            "Scales weights by √(2/fan_in), where the 2 accounts for the forward and backward passes both needing stable variance.",
            "Scales by 1/fan_out rather than 1/fan_in, because a ReLU layer's gradient flows backward through its outputs.",
            "Adds a small positive offset to every weight, so ReLU units start on the active side and none of them begin dead.",
          ],
          a: 0,
          why: "<b>ReLU throws away half the signal; the 2 puts it back.</b> His rule of thumb: He/Kaiming for ReLU, Xavier for tanh-style and general feedforward, and a pretrained backbone isn't initialised at all — you start from the learned weights. He was explicit that the derivations aren't tested. What matters is the goal: activations in the last layers should look statistically like activations in the first ones.",
          hints: {
            1: "Right formula, invented reason. Ask what ReLU specifically does to its input that Xavier didn't account for.",
            2: "Both Xavier and He are stated in terms of fan_in. The change is the numerator, not the denominator.",
            3: "No offsets involved. The method only changes the <i>scale</i> of the random draw.",
          },
          defaultHint: "What fraction of a ReLU's input survives the activation?",
        },
      ],
    },
    // ── v9 ──────────────────────────────────────────────────────────────────
    {
      id: "boss",
      name: "Boss round: every fix, and the flaw it fixes",
      problem: "Six questions. Each names a piece of machinery from this lecture; you name the problem it exists to solve. This is the shape the midterm's multiple choice takes.",
      steps: [
        {
          type: "mcq",
          q: "<b>Order-invariant aggregation</b> (mean, sum, max) exists to fix which problem?",
          opts: [
            "Node ordering being arbitrary — a position-weighted combination would change the answer for an identical graph.",
            "Neighbour features arriving on different numeric scales, so they have to be averaged before they can be compared.",
            "A graph having no spatial locality, so there is no meaningful notion of a nearby cell for a filter to pool over.",
            "Gradients exploding when a sum is taken over a node that happens to have a very large number of neighbours.",
          ],
          a: 0,
          why: "<b>Arbitrary ordering.</b> His 8-versus-10 counterexample is the whole argument: a function weighted by list position gives two answers for one graph. Mean, sum, max and min give one. Invariance stops being something you hope for and becomes something the arithmetic guarantees.",
          hints: {
            1: "Scale is the normalisation story, from the second half of the lecture.",
            2: "True about graphs, but it's the reason convolution doesn't apply — not the reason <i>averaging</i> does.",
            3: "Degree normalisation is a real technique and a different concern.",
          },
          defaultHint: "Go back to 8 versus 10.",
        },
        {
          type: "mcq",
          q: "The two learnable matrices <b>W_k and B_k</b> exist so that what becomes possible?",
          opts: [
            "A layer can learn how much a node is influenced by its neighbours versus itself, rather than that split being fixed.",
            "Each node can learn its own private pair of matrices, which is what keeps nodes distinguishable after many layers.",
            "The adjacency matrix can be factorised into a low-rank product, which is what makes the layer cheap to compute.",
            "The layer can be inverted during backpropagation, since the forward aggregation is otherwise not differentiable.",
          ],
          a: 0,
          why: "<b>Learning the split.</b> In the worked example he fixed both at 0.5 to show the flow. In a real GNN they are learned, which means the model discovers — for this feature space and this topology — how much influence a node should take from its neighbours and how much to keep of itself. He described it as learning something like attention.",
          hints: {
            1: "They are shared across every node. Per-node parameters would destroy the transfer property.",
            2: "Nothing is factorised. The adjacency matrix only decides who is in N(v).",
            3: "Averaging, scaling and adding are all differentiable already.",
          },
          defaultHint: "In the worked example these were fixed at 0.5. What changes when they are learned instead?",
        },
        {
          type: "mcq",
          q: "Keeping a GNN to <b>one to three layers</b> exists to fix which problem?",
          opts: [
            "Over-smoothing — more layers average every node with everything else until the representations collapse together.",
            "The memory cost of storing every intermediate state, the same limit that forced truncated BPTT back in Lecture 5.",
            "The vanishing gradient, since each extra layer multiplies another factor smaller than one into the backward chain.",
            "A receptive field that would otherwise stop growing, so deeper layers would add cost without adding any reach.",
          ],
          a: 0,
          why: "<b>Over-smoothing.</b> You watched it happen: 1, 2, 4, 8 became 2.93 to 3.73 in seven layers and keeps contracting. Plus the redundancy argument — on a dense graph the same nodes reappear at every hop, so an extra layer mostly re-aggregates information you already had.",
          hints: {
            1: "Memory is the RNN story. Here the problem shows up in the values themselves.",
            2: "A tempting answer, and the wrong failure. The forward values are collapsing, not the gradients.",
            3: "Inverted. The receptive field grows too fast, not too slowly — that's the problem.",
          },
          defaultHint: "You found the answer with a slider two levels ago.",
        },
        {
          type: "mcq",
          q: "<b>Normalising the inputs</b> exists to fix which problem?",
          opts: [
            "A feature with a larger numeric range dominating the gradient, plus the stretched loss surface that comes with it.",
            "Features being correlated with one another, which is what makes a step in one direction partly undo a step in another.",
            "Activations drifting out of a non-linearity's useful range as training progresses through the deeper layers.",
            "A mini-batch happening to be unrepresentative, which normalisation corrects by rescaling it to the full dataset.",
          ],
          a: 0,
          why: "<b>Feature domination by scale.</b> His example: predicting social class from monthly income and car price. Car price has the bigger range, so it moves the output more per unit and collects more gradient — not because it matters more, but because its numbers are bigger. You don't know in advance which feature matters; normalising lets the model decide.",
          hints: {
            1: "Decorrelation is PCA whitening, which he mentioned and then said is no longer used.",
            2: "That's what batch normalisation addresses, inside the network rather than at the input.",
            3: "Normalisation uses dataset statistics; it doesn't reweight batches.",
          },
          defaultHint: "Monthly income versus the price of a car. Which one drives learning, and why?",
        },
        {
          type: "mcq",
          q: "The <b>factor of 2</b> in He initialisation exists to fix which problem?",
          opts: [
            "ReLU zeroing the negative half of its input, which costs signal variance at every layer unless compensated.",
            "The doubling of variance that occurs once a layer's forward and backward passes are both properly accounted for.",
            "Half of all randomly initialised units starting out dead, so roughly twice as many are needed to compensate.",
            "Sigmoid's saturation outside roughly −5 to 5, which a wider initialisation pushes the activations away from.",
          ],
          a: 0,
          why: "<b>ReLU discards half the signal.</b> Xavier's variance calculation assumed nothing was thrown away. ReLU throws away everything negative, so magnitude decays layer by layer anyway. Doubling the variance puts it back, and the activation statistics stay stable all the way through the network.",
          hints: {
            1: "Plausible-sounding and not the reason. The fix is specific to one activation function.",
            2: "Units start dead only with an unlucky draw, and a factor of 2 wouldn't be the remedy.",
            3: "He initialisation is the ReLU rule. Sigmoid saturation is why ReLU exists in the first place.",
          },
          defaultHint: "Which activation does He initialisation go with, and what does that activation do to half its input?",
        },
        {
          type: "mcq",
          q: "<b>Momentum</b> exists to fix which problem?",
          opts: [
            "A zero gradient at a saddle point halting the update, and the wasted oscillation of a zigzag path.",
            "A learning rate that is too large, which momentum corrects by shrinking the step whenever the loss goes up.",
            "The noise of mini-batch sampling, which momentum removes by recomputing the gradient on the whole dataset.",
            "The differing scales of different weight matrices, which momentum equalises by normalising each update.",
          ],
          a: 0,
          why: "<b>Momentum = the current gradient plus an accumulated average of recent ones.</b> At a saddle point the local gradient is zero but your accumulated velocity carries you through. In a zigzag the oscillating component alternates sign and cancels in the running average while the consistent component survives and builds. Along a shallow valley you accelerate instead of crawling.<br><br>And notice the shape: a current signal combined with accumulated history. An RNN's state depends on its input and its previous state. A graph node depends on its features and its neighbours. Momentum depends on this gradient and its recent ones. His closing point — 'if you study enough AI you'll find many of the things are similar.'",
          hints: {
            1: "That's learning-rate scheduling. Momentum doesn't look at the loss at all.",
            2: "Momentum smooths the noise; it never recomputes anything on the full dataset.",
            3: "Per-parameter rescaling is what the adaptive optimisers do — next lecture.",
          },
          defaultHint: "Three things went wrong at the end of the lecture: a flat gradient, a zigzag, and a crawl. How many does momentum help with?",
        },
      ],
    },
  ],
};

export default function Lecture6_GraphNeuralNetworks({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>OCT 5 · LECTURE 6</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Graph Neural Networks & Training Dynamics</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Graphs as the general data structure, permutation invariance and equivariance, order-invariant neighbour aggregation, the graph convolution update rule, over-smoothing, inductive transfer, graphs with LLMs and GraphRAG — then the second half turns to training dynamics: mini-batching, normalisation, weight initialisation and momentum.
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
        {tab === "game" && <LectureGame lectureId="lecture6" game={GAME} />}
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
          lectureTitle="Graph Neural Networks & Training Dynamics"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
