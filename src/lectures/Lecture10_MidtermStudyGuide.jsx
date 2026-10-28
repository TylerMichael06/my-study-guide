import { useState } from "react";
import TutorChat from "../TutorChat";
import LectureGame from "../LectureGame";

// Midterm study guide — ALERT accent, matching the App.js exam entry
const COLOR = "#ff6b5e";
const ACCENT = "#ff9a91";
const DARK = "#0c1512";
const CARD_BG = "#121f1a";
const BORDER = "#243830";
const BONE = "#f2f0e6";
const LICHEN = "#9fb3a6";
const STONE = "#5b6d62";

const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'Space Mono', monospace";

// Source material: the 250-slide review deck and the archived past paper,
// extracted verbatim. TutorChat reads this, so the tutor can quote any slide
// or any archived question directly.
const TRANSCRIPT = `=== SOURCE 1: CSCI 566 MIDTERM REVIEW DECK (250 slides, Yue Zhao, Fall 2026) ===

                                                                     Review 1 / 250
CSCI 566 Midterm Review
Yue Zhao, Fall 2026. Core material from Blocks 1-7, traced through
small worked examples.
                                                                                Review 2 / 250
Route Through the Review
Seven sections move from evaluation and classical methods to graphs and shared
computation.
1   Evaluation and Classical ML                                         4-40
2   Forward Computation and CNNs                                        41-85
3   Losses, Gradients and Updates                                       86-121
4   Reliable Training and Transfer                                      122-159
5   Recurrent Memory                                                    160-178
6   Attention and Transformers                                          179-205
7   Graphs and Shared Computation                                       206-249
                                                                                                 Review 3 / 250
Two Study Paths for the Midterm Review
Class follows a core route through selected and new slides. The full deck keeps every
step for self-study.
PowerPoint: Midterm Core Review (141 pages)
Evaluation                   4-9, 14, 16-22, 24-30, 39-40
Forward + CNNs               41, 45-48, 52-53, 73-81, 83-85
Gradients                    86-89, 95-105, 107-109, 112-115, 119-121
                             122-123, 125, 132-134, 137, 140-143, 145-146, 149-150, 152, 154, 156-
Training
                             159
RNN / LSTM                   160-162, 164, 167-168, 172-178
Attention                    179, 183, 187-188, 190-194, 201-205
Graphs                       206-207, 211-215, 221-222, 226-227, 231-236, 240, 243, 246-249
Opening pages 1-3 are included in the 141-page route.
                                                                                      Review 4 / 250
Evaluation and Classical ML
Data splits, generalization, and simple predictors set the standard for judging any
model.
    Training data fits parameters, validation data selects settings, and test
1
    data gives a final check.
    Fit preprocessing statistics on training data only, then apply them
2
    unchanged to validation and test.
    Generalization means low error on new data from the same source as
3
    the training data.
    kNN predicts by a vote among nearby labels, and k-means clusters by
4
    minimizing a squared distance objective.
                                                                                             Review 5 / 250
Splitting Data by Plant: Training, Validation, Test
Illustrative split of 120 daisy and tulip photos, grouped by plant
Daisy or tulip?                120 photos: 24 plants, 5 photos each
Training: 16 plants / 80          Validation: 4 plants / 20       Test: 4 plants / 20
        photos                            photos                        photos
                                                                      Evaluate once, after
         Fit weights               Select depth or checkpoint
                                                                           selection
All 5 photos of a plant stay together
Generalize to unseen plants, same source
                                                                                                           Review 6 / 250
Choosing a Model with Validation, Then Testing
Once
Two decision trees fit on the same 80 training photos (illustrative results)
                                                                             Training: 8/80 errors (10%)
 Candidate A: depth 2
                                                                             Validation: 3/20 errors (15%)
Candidate B: depth 10
                                                                             Training: 0/80 errors (0%)
                        0      5         10       15       20      25   30   Validation: 5/20 errors (25%)
                  Validation error (%)        Training error (%)
Select A: lower validation error                                                  Choice frozen
A on test: 4/20 errors (20%)
Test is not used to switch candidate
                                                                                              Review 7 / 250
Fit Once, Apply Everywhere
Centering a flower-photo feature using only training data (illustrative example)
Average pixel intensity per photo (arbitrary units)
        All 80 training photos (daisy                        Fit: mean of feature over all 80
        and tulip)                                           training photos = 100 (illustrative)
Stored rule: x → x - 100
Training photo: 120                                    −100                       20
Validation photo: 130                                  −100                       30
Test photo: 90                                         −100                       -10
Outputs are centered feature values, not prediction errors
                                                                                    Review 8 / 250
Check: Training, Validation, and Test
Train fits weights and preprocessing, validation chooses settings and checkpoint,
and test evaluates the final selected model.
A    Try several learning rates, keep the one with the best test accuracy, and
     report that accuracy.
B    Fit on train, choose learning rate and checkpoint on validation, then
     evaluate that choice on test.
C    Compute normalization statistics from all data including test, then train and
     tune on validation.
D    Add the test set to training for more data, then choose settings on
     validation and report validation.
                                                                                    Review 9 / 250
Answer B: Fit, Choose, Then Evaluate
Only plan B fits on train, chooses on validation, and keeps the test set unseen until
the final selected model is evaluated.
Answer: B
A    Incorrect. Choosing settings with test accuracy makes the test set a
     selection tool, so its score no longer checks unseen data.
B    Correct. Each split keeps its taught role, and the test set stays unseen
     until it evaluates the final selected model.
C    Incorrect. Preprocessing is fitted on the training set only. Using test
     statistics leaks test information into the model.
D    Incorrect. Fitting weights on test data removes the held-out check, and a
     validation score used for choosing is not a final result.
                                                                                                 Review 10 / 250 Block 2, slide 37
Decision Tree
            This module ... decision trees
                                  Start
           excellent                                     poor
                                 Credit?
                                     fair
                                                                             Income?
         Safe                     Term?
                                                               high                    Low
                       3 years             5 years
                          Risky            Safe               Term?                      Risky
                                                     3 years          5 years
                                                      Risky           Safe
Credit to Stanford CS 229
                                                                      Y. Zhao
                                                                                                           Review 11 / 250 Block 2, slide 38
Decision Tree
            Scoring a loan application
                                                     xi = (Credit = poor, Income = high, Term = 5 years)
                                  Start
           excellent                                     poor
                                 Credit?
                                     fair
                                                                             Income?
         Safe                     Term?
                                                               high                    Low
                       3 years             5 years
                          Risky            Safe               Term?                      Risky
                                                     3 years          5 years
                                                      Risky           Safe             ŷi = Safe
Credit to Stanford CS 229
                                                                      Y. Zhao
                                                     Review 12 / 250 Block 2, slide 82
Overfitting and Underfitting Revisited
      We favor the case where the ML model appropriately
      depict the underlying data
                          Y. Zhao
                                                           Review 13 / 250 Block 2, slide 86
DT Generalization – Overfitting Revisited
                                         Credit to CMU 10601
                               Y. Zhao
                                                                                         33
    Figure from Tom Mitchell
                                                                                              Review 14 / 250 Block 2, slide 90
      Model Complexity
                                                    Optimal model
                                                                                 Generalization error
                      Error                                                          Over
                                                                                    fitting
                 Under
                 fitting                                                         Training error
                                                              Model complexity
Stanford CS 329P (2021 Fall) - https://c.d2l.ai/stanford-cs329p      Y. Zhao
                                                                                           Review 15 / 250 Block 2, slide 91
      Model Complexity Example: Decision Tree
      • The tree size can be controlled                                     Underfitting
        by the number of levels
      • Use scikit-learn
          DecisionTreeRegressor(max_depth
          =n) on house sales data
                                                                                                  Overfitting
Stanford CS 329P (2021 Fall) - https://c.d2l.ai/stanford-cs329p   Y. Zhao
                                                                                       Review 16 / 250
Repeating Training on Fresh Data Samples
To study a training recipe, imagine drawing four new training sets from one source
and asking each fitted model to predict at the same input x0.
         D₁                     D₂                     D₃                        D₄
  Fit same recipe        Fit same recipe        Fit same recipe        Fit same recipe
   Predict at x₀          Predict at x₀          Predict at x₀              Predict at x₀
D1 to D4 are four training sets drawn independently from the same source.
                                                                                   Review 17 / 250
Bias and Variance on Two Number Lines
At one fixed input x0, each recipe is fit on four training sets D1–D4 from one source.
Dots are unitless toy predictions, and the noise-free target is 10.
Bias: mean − target                      Variance: spread across refits
                               D2, D3
                          D1            D4
Recipe A
                     4           6           8   10       12    14       16
Mean 6; target 10
                     D1         D3                              D4       D2
Recipe B
                     4           6           8   10       12    14       16
Mean 10; target 10
A: mean misses the target. B: mean on target, larger spread.
                                                                                       Review 18 / 250
Reading Train and Validation Errors as Clues
When train and validation data come from the same source, the pattern of their
errors suggests a first thing to try, not a proven cause.
Observed Pattern           Possible Cause                 First Things to Try
Training + validation      Too rigid, weak features,      Inspect fit and features;
errors both high           or incomplete training         consider more capacity
Training low;              Model fits training-specific   More data, regularization,
validation much higher     details                        or a simpler model
Averaging an ensemble may reduce variability, but correlated member errors limit the
benefit.
                                                                                Review 19 / 250
Averaging an Ensemble of Trees
Three trees fitted on resampled data give different predictions, and the ensemble
reports their mean.
Same input sent to all three trees
          2                            5                            8
                                                          (2 + 5 + 8) / 3 = 5
Resampling the training data changes the trees that are learned.
Averaging aims to reduce sensitivity, but correlated errors limit it.
                                                                           Review 20 / 250
Choosing a Pruning Depth
An unpruned decision tree has zero training error but high validation
error. You pick the pruning depth with the lowest validation error, then
evaluate the selected tree once on a held-out test set. Which statement is
correct?
 A     Zero training error means the unpruned tree will generalize well.
 B     The pruning depth should minimize training error.
 C     The selected tree can still have nonzero test error.
 D     Choosing depth on the test set keeps the final estimate unbiased.
Adapted from archived midterm Q6
                                                                              Review 21 / 250
Solution: Choosing a Pruning Depth
C. The selected tree can still have nonzero test error.
1      Training error is already zero for the unpruned tree, so minimizing it
       would keep the overfit tree.
2      Validation error picks the depth; using the test set for that choice
       would bias the final estimate.
3      Common error: reading validation-based selection as a guarantee.
       The selected tree can still err on new test points.
Adapted from archived midterm Q6
                                                                                  Review 22 / 250
When 98% Accuracy Catches No Defects
Fabricated inspection data: 1,000 parts, of which 20 are defective (positive) and 980
are good (negative). A rule that always predicts good never flags a part.
20 defective / 980 good
                                            Predict every part as good
                                            980 / 1,000 = 98% accuracy
                                            0 / 20 defects caught
                                            Recall = 0%
Each dot = 10 parts
Precision is undefined because no part is flagged, and 0/0 has no value.
                                                                            Review 23 / 250 Block 2, slide 137
Metrics for Binary Classification
• Accuracy: # correct predictions / # examples
• Precision: # True positive / # (True positive + False positive)
• Recall: # True positive / # Positive examples
• Be careful of division by 0
• One metric that balances precision and recall
    • F1: the harmonic mean of precision and recall: 2pr/( p + r)
Stanford CS 329P (2021 Fall) - https://c.d2l.ai/stanford-cs329p   Y. Zhao
                                                                                         Review 24 / 250
Precision and Recall from the Same Counts
Same 1,000 fabricated parts. Positive means defective and predicted positive means
flagged for inspection. The counts are TP 16, FP 24, FN 4 and TN 956.
Actual status ↓ / Prediction →
                                                           Precision
 Parts          Flagged +           Passed −               16 / (16 + 24) = 40%
                TP = 16             FN = 4                 Of 40 flagged, 16 defective
 Defective +
                Caught              Missed
                                    TN = 956               Recall
                FP = 24
 Good −                             Correctly
                False alarms                               16 / (16 + 4) = 80%
                                    passed
                                                           Of 20 defective, 16 caught
Both fractions share the numerator 16 but divide by different groups: the 40 flagged
parts versus the 20 defective parts.
                                                                                      Review 25 / 250
Moving the Flagging Threshold
Same 1,000 fabricated parts with 20 defects. A part is flagged when its defect score
is at least the threshold. The counts are constructed for illustration.
Same 1,000 parts, including 20 defects
 Threshold        Flagged      True / False Alarms           Precision       Recall
 0.2 (lower)      80           19 / 61                       23.75%          95%
 0.8 (higher)     12           9/3                           75%             45%
Missed defects: 1 at threshold 0.2; 11 at threshold 0.8
Lowering the threshold can add both true and false alarms; recall cannot fall, but
precision can move either way.
                                                                                     Review 26 / 250
Check: Which Metric Leads for a Defect Flagger
A factory flags rare defects. Missing a defect costs much more than a false alarm,
which triggers one manual review. Which metric should lead threshold selection?
A    Accuracy, since most parts are good and it combines all four counts.
B    Precision, since every flagged part should turn out to be defective.
C    Specificity, since correctly passing good parts is the most common case.
D    Recall, while tracking precision so the manual review load stays
     manageable.
                                                                                  Review 27 / 250
Answer D: Recall Leads, Precision Is Tracked
Defect flagger: a missed defect ships to a customer, while a false alarm triggers one
manual review.
Answer: D
A    Wrong: with rare defects, accuracy can stay high even when many defects
     are missed.
B    Wrong: precision limits false alarms, the cheaper error here, and can
     tolerate misses.
C    Wrong: specificity counts good parts and can be high while defects slip
     through.
D    Correct: recall tracks the costly misses, and precision shows the
     review workload.
                                                                                            Review 28 / 250
k-Nearest Neighbor Voting
The prediction depends on k, because a larger k lets more neighbors vote.
         Neighbors sorted by increasing distance
    ?                1               2               3                4                 5
                 purple           orange          purple          orange           orange
    k = 1: purple                k = 3: purple, 2 to 1             k = 5: orange, 3 to 2
Sorted by increasing distance, the nearest labels are purple, orange, purple, orange,
orange.
Votes here are unweighted and distances are distinct; choose k by validation results.
                                                                         Review 29 / 250
kNN Regression with k = 3
Unweighted kNN regression uses k = 3. For a query point, the three
nearest training points have targets 2, 5, and 11. What does the model
predict?
 A     6
 B     5
 C     11
 D     18
Adapted from archived midterm Q51
                                                                         Review 30 / 250
Solution: kNN Regression with k = 3
A. 6
1      Unweighted kNN regression averages the targets of the k nearest
       neighbors, giving each neighbor equal weight.
2      Prediction: (2 + 5 + 11) / 3 = 18 / 3 = 6.
3      Common errors: 18 forgets to divide by k, 5 takes the median, and
       11 takes the largest target.
Adapted from archived midterm Q51
                                Review 31 / 250 Block 2, slide 148
k Nearest Neighbor Algorithm
Credit to CMU 10601
                      Y. Zhao
                                Review 32 / 250 Block 2, slide 150
k Nearest Neighbor Algorithm
Credit to CMU 10601
                      Y. Zhao
                                                              Review 33 / 250 Block 2, slide 189
Clustering
           Clustering
                                            An unsupervised
           No labels provided                learning task
           …uncover cluster structure
           from input alone
           Input: docs as vectorsxi
           Output: cluster labelszi
Credit to Stanford CS 229
                                  Y. Zhao
                                                  Review 34 / 250 Block 2, slide 194
Clustering: k-means
           k- means
           Assume
            -Score= distance to
             cluster center
                                         DATA
             (smaller better)
                                           to
                                        CLUSTER
Credit to Stanford CS 229
                              Y. Zhao
                                                    Review 35 / 250 Block 2, slide 195
Clustering: k-means
           k-means algorithm
            1. Initialize cluster centers
                  µ1 , µ 2 ,. . . , µ k
Credit to Stanford CS 229
                                          Y. Zhao
                                                         Review 36 / 250 Block 2, slide 196
Clustering: k-means
           k-means algorithm
            1. Initialize cluster centers
            2. Assign observations to
               closest cluster center
             Inferred label for obs i, whereas
             supervised learning has given label yi
Credit to Stanford CS 229
                                               Y. Zhao
                                             Review 37 / 250 Block 2, slide 197
Clustering: k-means
           k-means algorithm
            1. Initialize cluster centers
            2. Assign observations to
               closest cluster center
            3. Revise cluster centers
               as mean of assigned
               observations
Credit to Stanford CS 229
                                   Y. Zhao
                                             Review 38 / 250 Block 2, slide 198
Clustering: k-means
           k-means algorithm
            1. Initialize cluster centers
            2. Assign observations to
               closest cluster center
            3. Revise cluster centers
               as mean of assigned
               observations
            4. Repeat 2.+3. until
               convergence
Credit to Stanford CS 229
                                   Y. Zhao
                                                                                 Review 39 / 250
The k-Means Objective
k-means scores a clustering by the total squared distance from points to their
assigned centers.
  Assigned points: 1, 5, 6. Center: 4.
                 1                                  4              5   6
                                  (1 + 5 + 6) / 3 = 4
                         J = (1 − 4)² + (5 − 4)² + (6 − 4)² = 14
With assignments fixed, the mean minimizes the sum of squared distances.
The next page compares two complete runs on the same data and k.
                                                                                   Review 40 / 250
Two Finished k-Means Runs, Two Different Answers
Same data {1, 3, 5, 9}, same k = 2. Repeating the assignment and mean steps
changes neither run.
Run A
                      1              3              5                    9
                          μ1 = 2                              μ2 = 7
                                            J = 1 + 1 + 4 + 4 = 10
Run B
                      1              3              5                    9
                                   μ1 = 3                              μ2 = 9
                                            J=4+0+4+0=8
Run B has lower squared-distance total, 8 versus 10, so it wins this comparison.
Comparing two converged runs does not prove global optimality.
                                                                             Review 41 / 250
Forward Computation and CNNs
Tracking shapes and counting parameters makes each forward layer concrete.
    Track tensor shapes through each layer, and separate trainable
1
    parameters from computed activations.
2   Stacking affine layers without a nonlinearity still gives one affine map.
    In CNNs, channels and spatial positions play different roles in counting
3
    and in computation.
    Some source slides use row vectors xW; new formulas here use column
4
    vectors Wx, and parameter counts are the same.
                                          Review 42 / 250 Block 3, slide 65
 Neural Network Data Shape Explained
                             Assume each sample is a 28x28
                             pixels image = 784 features
784 features
                   Y. Zhao
                                                       Review 43 / 250 Block 3, slide 66
 Neural Network Data Shape Explained
                                       The first hidden layer
                                       A[1] has 128 neurons
               128 neurons             Thus, the weight matrix W1 for
                                       the first layer will be 784x128
                                       After the first layer, it will have
                                       [1x784] ⋅ [784x128] = 1x128
784 features                           outputs
                             Y. Zhao
                                                                     Review 44 / 250 Block 3, slide 67
 Neural Network Data Shape Explained
                                                     After the first layer, it will have
                                                     [1x784] ⋅ [784x128] = 1x128
                                                     outputs
                             128 neurons
               128 neurons
                                                     The second layer also gets 128
                                                     neurons, and the weight matrix
                                                     W2 for the second layer will be
                                                     128x128
784 features
                                           Y. Zhao
                                                                                           Review 45 / 250
Counting Parameters in a Dense Network
A network with widths 2, 3, and 1 has 13 trainable parameters in its weights and
biases.
  2 inputs              3 hidden units                1 output         Column vectors: Wx + b
                               h1                                      W₁: 3 × 2 = 6
     x1                                                                b₁: 3
                               h2                          y           W₂: 1 × 3 = 3
     x2
                                                                       b₂: 1
                               h3
                6 + 3 + 3 + 1 = 13 parameters
Inputs and activations are recomputed per example, and ReLU has no trainable parameters.
                                                                       Review 46 / 250
Counting Weights in a Dense Network
A fully connected network has no biases and layer widths 3, 4, 4, 2 (input,
hidden, hidden, output), so it has 36 weights. If both hidden widths double
to 8, how many weights does the new network have?
 A     72
 B     104
 C     144
 D     208
Adapted from archived midterm Q24
                                                                          Review 47 / 250
Solution: Counting Weights in a Dense Network
B. 104
1      Without biases, a dense layer has (input width) × (output width)
       weights. Original: 3 × 4 + 4 × 4 + 4 × 2 = 36.
2      New count: 3 × 8 + 8 × 8 + 8 × 2 = 24 + 64 + 16 = 104 weights.
3      Common errors: 72 doubles 36 and 144 quadruples it. Only the
       hidden-to-hidden layer grows fourfold.
Adapted from archived midterm Q24
                                                                                    Review 48 / 250
Stacked Affine Layers Collapse
Without a nonlinearity between them, two affine layers are equivalent to a single
affine layer.
                                         h
    x                 W₁x + b₁                           W₂h + b₂              y
                         y = (W₂W₁)x + (W₂b₁ + b₂)
                     h = 3x + 2, y = 2h − 1          ⇒     y = 6x + 3
From h = W1x + b1 and y = W2h + b2, we get y = W2W1x + W2b1 + b2.
The combined weight is W2W1 and the combined bias is W2b1 + b2.
                                                   Review 49 / 250 Block 3, slide 71
Neural networks: why is max operator important?
 (Before) Linear score function:
 (Now) 2-layer Neural Network
 The function              is called the activation function.
 Q: What if we try to build a neural network without it?
Credit to Stanford CS 231n
                             Y. Zhao
                                                                Review 50 / 250 Block 3, slide 72
Neural networks: why is max operator important?
 (Before) Linear score function:
 (Now) 2-layer Neural Network
 The function              is called the activation function.
 Q: What if we try to build a neural network without one?
 A: We end up with a linear classifier again!
                    Neural networks need this non linearity!!
Credit to Stanford CS 231n
                               Y. Zhao
                                                                                         Review 51 / 250 Block 3, slide 73
Worked Example: Read the Numbers on the Network
    inputs                   hidden, h = ReLU(z)                  linear output
                   1                                                              All values live on the
     x1
      1
                                    h1                                            object that uses them:
                                                       v1 = 1
                                 b1 = -0.5
                  0.5                                                             inputs in the input nodes
                                                                     y_hat        weights on their edges
                                                                                  biases beside hidden nodes
                   -1
                                                                                  target beside the output
                                                      v2 = -0.5   target y = 2
     x2
                                    h2
      2            1                                                                 Read each multiplication
                                                                                   from an edge and each sum
                                  b2 = 0                                              at the receiving node.
One fixed diagram will carry the full forward, loss, gradient, and update sequence.
                                                   Y. Zhao
                                                                                             Review 52 / 250 Block 3, slide 74
Forward Pass: Hidden Units
    inputs                  hidden, h = ReLU(z)                    linear output
                                            z1 = 1.5
                                            h1 = 1.5
                                                                                   At h1
     x1            1
                                   h1
      1                                                v1 = 1
                                                                                   z1 = 1(1) + 0.5(2) - 0.5
                                b1 = -0.5                                            = 1.5
                  0.5                                                              h1 = ReLU(1.5) = 1.5
                                                                      y_hat
                  -1                                                               At h2
                                                       v2 = -0.5
     x2                                                                            z2 = -1(1) + 1(2) + 0
                                   h2
      2            1                                                                 =1
                                            z2 = 1
                                            h2 = 1                                 h2 = ReLU(1) = 1
                                 b2 = 0
Each highlighted edge contributes one product to the receiving hidden unit.
                                                  Y. Zhao
                                                                                           Review 53 / 250 Block 3, slide 75
Forward Pass: Linear Output
    inputs                  hidden, h = ReLU(z)                   linear output
                                            h1 = 1.5
     x1            1                                                              Both hidden activations
                                   h1                                             now travel along their
      1                                                1 x 1.5
                                                                                  output edges.
                                b1 = -0.5
                  0.5
                                                                     y_hat
                                                                                   y_hat = 1(1.5) + (-0.5)(1) + 0
                  -1
                                                                                                = 1.0
                                                       -0.5 x 1   y_hat = 1.0
     x2
                                   h2
      2            1                                                              The output layer is linear in this
                                            h2 = 1
                                 b2 = 0                                           example.
The output value is a weighted sum of the two hidden activations.
                                                  Y. Zhao
                                                                                         Review 54 / 250 Block 3, slide 76
Loss at the Output
    inputs                 hidden, h = ReLU(z)                    linear output
                                           h1 = 1.5
                   1
    x1
                                  h1                                              Prediction and target
     1                                                v1 = 1                      meet at the output.
                               b1 = -0.5
                  0.5
                                                                     y_hat
                                                                                       L = (y_hat - y)^2
                  -1                                                                       = (1 - 2)^2
                                                                  y_hat = 1.0                  =1
                                                      v2 = -0.5   target y = 2
    x2
                                  h2
     2             1
                                           h2 = 1
                                b2 = 0
The loss measures the output error before any parameter is updated.
                                                 Y. Zhao
                                                    Review 55 / 250 Block 3, slide 82
Activation functions
                        Sigmoid Function
Sigmoid                 • Characteristics: Sigmoid squashes the
                           input values into a range between 0 and
                           1. It's historically been used for binary
                           classification.
tanh                    • When to use: In the output layer for
                           binary classification tasks. When you
                           need probabilities as outputs, since its
                           output can be interpreted as a
                           probability.
                        • Limitations: Prone to vanishing
                           gradient problem (discussed later).
                           Outputs are not zero-centered.
                       Y. Zhao
                                                     Review 56 / 250 Block 3, slide 83
Activation functions
                        ReLU:
Sigmoid                 Characteristics: ReLU is a piece-wise
                        linear function that outputs the input directly
                        if positive, otherwise, it will output zero.
                        When to use: In most hidden layers, as it
tanh                    helps with the vanishing gradient problem
                        and speeds up training. Good default
                        choice for deep neural networks.
                        Limitations:
                        Can suffer from "dying ReLU" problem,
ReLU                    where neurons can become inactive on all
                        current training examples.
                       Y. Zhao
                                                    Review 57 / 250 Block 4, slide 70
Convolutional layer
         Share the same parameters across different
         locations.
         Convolutions with learned kernels (weights)
                                Slide credit: Marc’Aurelio Ranzato
               Y.
               Y. Zhao
                  Zhao
                                                    Review 58 / 250 Block 4, slide 71
Convolutional layer
         Share the same parameters across different
         locations.
         Convolutions with learned kernels (weights)
                                Slide credit: Marc’Aurelio Ranzato
               Y.
               Y. Zhao
                  Zhao
                                                                                  Review 59 / 250 Block 4, slide 73
 Convolutional layer
    32x32x3 image
                                         5x5x3 filter
                         32
                                                        Convolve the filter with the image
                                                        i.e. “slide over the image spatially,
                                                        computing dot products”
                    32
        3
                                                                           Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                                       April
                                                                                       April12,
                                                                                             12,2022
                                                                                                 2022
                                                                                  Review 60 / 250 Block 4, slide 74
 Convolutional layer                                     Standard filters extend the
                                                         full depth of the input
                                                         volume
    32x32x3 image
                                         5x5x3 filter
                         32
                                                        Convolve the filter with the image
                                                        i.e. “slide over the image spatially,
                                                        computing dot products”
                    32
        3
                                                                           Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                                       April
                                                                                       April12,
                                                                                             12,2022
                                                                                                 2022
                                                                        Review 61 / 250 Block 4, slide 75
 Convolutional layer
                                    32x32x3 image
                                    5x5x3 filter
                        32
                                        1 number:
                                        the result of taking a dot product between the
                                        filter and a small 5x5x3 chunk of the image
                   32                   (i.e. 5*5*3 = 75-dimensional dot product + bias)
            3
                                                                 Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                             April
                                                                             April12,
                                                                                   12,2022
                                                                                       2022
                                                                     Review 62 / 250 Block 4, slide 76
 Convolutional layer
                        32
                   32
            3
                                                              Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                          April
                                                                          April12,
                                                                                12,2022
                                                                                    2022
                                                                     Review 63 / 250 Block 4, slide 77
 Convolutional layer
                        32
                   32
            3
                                                              Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                          April
                                                                          April12,
                                                                                12,2022
                                                                                    2022
                                                                     Review 64 / 250 Block 4, slide 78
 Convolutional layer
                        32
                   32
            3
                                                              Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                          April
                                                                          April12,
                                                                                12,2022
                                                                                    2022
                                                                     Review 65 / 250 Block 4, slide 79
 Convolutional layer
                        32
                   32
            3
                                                              Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao   Y. Zhao Lecture 5 -
                                        Y. Zhao                          April
                                                                          April12,
                                                                                12,2022
                                                                                    2022
                                                                           Review 66 / 250 Block 4, slide 80
 Convolutional layer
                                                                           activation map
                                    32x32x3 image
                                    5x5x3 filter
                        32
                                                                                             28
                                        convolve (slide) over all
                                        spatial locations
                   32                                                                28
            3                                                            1
                                                                    Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao     Y. Zhao Lecture 5 -
                                          Y. Zhao                              April
                                                                                April12,
                                                                                      12,2022
                                                                                          2022
                                                                           Review 67 / 250 Block 4, slide 81
 Convolutional layer
                                        consider a second, green filter
                                    32x32x3 image            activation maps
                                    5x5x3 filter
                        32
                                                                                                    28
                                        convolve (slide) over all
                                        spatial locations
                   32                                                                       28
            3                                                                   1
                                                                    Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao     Y. Zhao Lecture 5 -
                                          Y. Zhao                              April
                                                                                April12,
                                                                                      12,2022
                                                                                          2022
                                                                                       Review 68 / 250 Block 4, slide 82
 Convolutional layer                                                              6 activation maps,
                                                                                    each 1x28x28
             3x32x32 image
                                               Consider 6 filters,
                                                 each 3x5x5
                                                    Convolution
                                                      Layer
                                    32
                            32           6x3x5x5
                                          filters                    Stack activations to get a
                  3                                                   6x28x28 output image!
Slide inspiration: Justin Johnson                                               Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao                Y. Zhao Lecture 5 -
                                                     Y. Zhao
                                                                                    Review 69 / 250 Block 4, slide 83
 Convolutional layer                                                           6 activation maps,
                                                                                 each 1x28x28
             3x32x32 image                  Also 6-dim bias vector:
                                                    Convolution
                                                      Layer
                                    32
                            32           6x3x5x5
                                          filters                 Stack activations to get a
                  3                                                6x28x28 output image!
Slide inspiration: Justin Johnson                                            Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao                Y. Zhao Lecture 5 -
                                                     Y. Zhao
                                                                                    Review 70 / 250 Block 4, slide 84
 Convolutional layer                                                         28x28 grid, at each
                                                                             point a 6-dim vector
             3x32x32 image                  Also 6-dim bias vector:
                                                    Convolution
                                                      Layer
                                    32
                            32           6x3x5x5
                                          filters                 Stack activations to get a
                  3                                                6x28x28 output image!
Slide inspiration: Justin Johnson                                            Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao                Y. Zhao Lecture 5 -
                                                     Y. Zhao
                                                                                    Review 71 / 250 Block 4, slide 85
 Convolutional layer                                                           2x6x28x28
     2x3x32x32                                                               Batch of outputs
   Batch of images                          Also 6-dim bias vector:
                                                    Convolution
                                                      Layer
                                    32
                            32           6x3x5x5
                  3
                                          filters
Slide inspiration: Justin Johnson                                            Slide credit: CS 231N
 Fei-FeiLi,Li,Jiajun
Fei-Fei         JiajunWu,
                       Wu,Ruohan
                           RuohanGao
                                  Gao                   Y. Zhao Lecture 5 - 61
                                                        Y. Zhao                         April
                                                                                         April12,
                                                                                               12,2022
                                                                                                   2022
                                                                                      Review 72 / 250 Block 4, slide 86
 Convolutional layer                                                          N x Cout x H’ x W’
N x Cin x H x W                                                               Batch of outputs
Batch of images                          Also C out-dim bias vector:
                                                Convolution
                                                  Layer
                              H
                      W       Cout x Cinx Kw x Kh
                                     filters                           Cout
            Cin
Slide inspiration: Justin Johnson                                              Slide credit: CS 231N
 Fei-Fei Li, Jiajun Wu, Ruohan Gao                  Y. Zhao Lecture 5 -
                                                    Y. Zhao                               April 12, 2022
                                                                                       Review 73 / 250
Four Symbols for One Convolution Row
A standard convolution with input width n = 9, padding p = 1, kernel size k = 3 and
stride s = 2.
p=1                                            p=1         n    Input width before padding
  0   1    2     3   4   5   6   7     8   9    0               Zero cells added on each
                                                           p
                                                                side
               n = 9 input positions                       k    Window width
Here: k = 3, s = 2                                         s    Step between window starts
Lowercase n: width
Uppercase N: often batch size
Lowercase n is a spatial length, while uppercase N often denotes batch size.
                                                                                        Review 74 / 250
How Many Windows Fit? Output Size
With n = 9, p = 1, k = 3 and s = 2, windows start at padded indices 0, 2, 4, 6 and 8,
giving 5 outputs.
n = 9, p = 1, k = 3, s = 2
   0     1     2    3     4     5    6     7     8     9    10   Padded indices 0…10
                                                                 Gray padding adds two cells.
                                                                 Valid starts: 0, 2, 4, 6, 8
Each window covers k = 3 adjacent cells.
Output width = (n + 2p − k) / s + 1 = 5
(9 + 2 − 3) / 2 + 1 = 4 moves + the first window = 5 outputs.
                                                                                   Review 75 / 250
Counting Convolution Parameters
Two 3 x 3 filters over 3 input channels use 56 parameters, regardless of input size.
    Filter 1                                Filter 2
        w w w                                   w w w
       w w w                                   w w w
      w w
        w w
          w w                                 w w
                                                w w
                                                  w w
       w w w     3 × 3 × 3 = 27 weights        w w w     3 × 3 × 3 = 27 weights
      w w
        w w
          w w                                 w w
                                                w w
                                                  w w
       w w w     + 1 bias = 28                 w w w     + 1 bias = 28
      w w w                                   w w w
                        2 filters = 2 output channels
                       2 × (27 + 1) = 56 parameters
A larger input image reuses the same 56 parameters at more positions.
                                                                                     Review 76 / 250
Kernel Size and Filter Count
Standard dense 2D convolution with 3 input channels, 2 filters and one bias per
filter, using stride 1 and padding chosen to keep the spatial size.
Kernel Size                Spatial Span        Parameters     What It Reads
1×1                        1×1                 8              Channels at one site
3×3                        3×3                 56             9 spatial sites
5×5                        5×5                 152            25 spatial sites
All rows: 3 input channels, 2 filters; one bias per filter.
2 → 4 filters doubles output channels, with the same spatial span.
                                                                                        Review 77 / 250
A 1×1 Convolution Mixes Channels at One Spot
A standard dense 1×1 convolution with 2 input channels, 1 output channel, weights
(1, 2) and bias −1. Here x1 and x2 are channel entries at one position.
Position 1: two channels
     2    5           1×2 + 2×5 − 1                                              11
Position 2: two channels
     4    1           1×4 + 2×1 − 1                                               5
The 1×1 filter never reads neighboring positions; it only forms a learned combination
of the channels stacked at one spot.
                                                                                       Review 78 / 250
Why 1×1 Convolutions Shrink Channels First
A feature map of shape 8×8×64 (height × width × channels) passes through 16 filters
of size 1×1 with stride 1 and padding 0, giving 8×8×16.
H × W × C; stride 1, padding 0
                            16 filters, each 1×1×64
                            64 features → 16 per site
    8 × 8 × 64                                                   8 × 8 × 16
Path to 32 Channels                                     Parameters (Biases Included)
Direct 3×3: 64 → 32                                     18,464
1×1: 64 → 16, then 3×3: 16 → 32                         1,040 + 4,640 = 5,680
Fewer parameters; the two paths can represent different functions.
                                                                                Review 79 / 250
Check: Adding Filters to a 3×3 Layer
A 3×3 convolution (stride 1, padding 1) maps an 8×8×64 tensor (H×W×C) to 8×8×16.
Only the filter count changes, from 16 to 24. What changes?
A    Output channels become 24; output height, width, and each filter's 3×3×64
     shape stay the same.
B    Each filter grows spatially, so it covers more neighboring positions per
     window.
C    Output height and width grow, while the output channel count stays at 16.
D    Each filter now reads 24 input channels instead of all 64.
                                                                                  Review 80 / 250
Answer A: Filter Count Sets Output Channels
A 3×3 layer (stride 1, padding 1) on an 8×8×64 input (H×W×C) changes only its filter
count, from 16 to 24.
Answer: A
A    Correct: one filter makes one output channel, and kernel, stride and
     padding keep the 8×8 size.
B    Wrong: each filter still reads the same 3×3 neighborhood when only filter
     count changes.
C    Wrong: height and width depend on kernel, stride and padding, none of
     which changed.
D    Wrong: in standard convolution every filter spans all input channels, here
     still 64.
                                                                      Review 81 / 250 Block 4, slide 137
                                Max Pooling
         Single depth slice
          1     1     2     4
   x
                                    max pool with 2x2 filters
          5     6     7     8       and stride 2                  6         8
          3     2     1     0                                     3         4
          1     2     3     4
                            y
                                                                Slide credit: CS 231N
Fei-Fei Li, Jiajun Wu, Ruohan Gao      Y. Zhao Lecture 5 -
                                       Y. Zhao                                April 12, 2022
                                                                      Review 82 / 250 Block 4, slide 138
                                Max Pooling
         Single depth slice
          1     1     2     4
   x
                                    max pool with 2x2 filters
          5     6     7     8       and stride 2                  6         8
          3     2     1     0                                     3         4
          1     2     3     4          • No learnable parameters
                                       • Some invariance to small shifts
                            y
                                                                Slide credit: CS 231N
Fei-Fei Li, Jiajun Wu, Ruohan Gao      Y. Zhao Lecture 5 -
                                       Y. Zhao                                April 12, 2022
                                                                                      Review 83 / 250
Max Pooling Is Not Linear
Additivity is a necessary test of linearity: a linear map must pass it. Max pooling fails,
so max is not linear.
u     2     0
                        max(u) + max(v) = 2 + 3 = 5
v     0     3
                        max(u + v) = max(2, 3) = 3
Linearity requires f(u + v) = f(u) + f(v); max gives 3 instead of 5.
A mean over fixed entries is linear, and neither max nor mean pooling has trainable
parameters.
                                                                      Review 84 / 250
Inferring a Kernel Size from Shapes
A 24×24×2 input passes through one ordinary convolution with a square
K×K kernel, stride 1, and padding 0, giving a 22×22×5 output. Using output
width = 24 - K + 1, which K in {2, 3, 5, 7} is consistent?
 A     2
 B     3
 C     5
 D     7
Adapted from archived midterm Q26
                                                                                  Review 85 / 250
Solution: Inferring a Kernel Size from Shapes
B. 3
1      24 - K + 1 gives 23, 22, 20, 18 for K = 2, 3, 5, 7; only K = 3 gives 22.
2      Common error: choosing 5 from the 5 output channels. Channel
       counts do not enter the spatial formula.
Adapted from archived midterm Q26
                                                                                   Review 86 / 250
Losses, Gradients and Updates
Training turns a score into a loss, a loss into gradients, and gradients into parameter
updates.
1   A loss converts model scores into a number that training tries to reduce.
    Backpropagation applies the chain rule, multiplying local derivatives
2
    along each path.
    When a value feeds several branches, its gradient is the sum of the
3
    branch contributions.
    The optimizer is a separate step that uses the computed gradients to
4
    update parameters.
                                                                                        Review 87 / 250
Classifying One Spam Email by Its Score
A model outputs a real-valued score s (not a probability) and predicts spam when s ≥
0. This email is known spam, so the target is y = 1.
Known spam email: target y = 1
 Model Score s            Prediction (Threshold 0)                 0/1 Mistake Loss
 −2                       Not spam                                 1
 −1                       Not spam                                 1
 +2                       Spam                                     0
Moving the score from −2 to −1 brings it closer to spam, yet the 0/1 loss stays at 1.
                                                                                    Review 88 / 250
Why a Mistake Count Gives No Gradient
Same known-spam email: target y = 1, real-valued score s, and spam if s ≥ 0. The red
chart counts mistakes.
              1
                                                                Known spam: y = 1
  0/1 loss
             0.5                                                Flat regions:
                                                                slope = 0
              0
                   -3   -2   -1      0      1    2       3      Jump at s = 0:
                                  Score s                       slope undefined
A small score change within either flat region leaves the hard loss unchanged.
Next: return to the numeric prediction and squared loss from Block 3.
                                                                                         Review 89 / 250
Squared Loss Gives a Local Direction
We now switch to numeric prediction from Block 3: target t = 2, prediction ŷ, and loss
L = (ŷ − t)².
Numeric target t = 2; L = (ŷ − t)²
 Prediction ŷ             Squared Loss L                   Local Slope ∂L/∂ŷ
 0                        4                                −4
 1                        1                                −2
 3                        1                                +2
A negative slope calls for raising ŷ a little; a positive slope calls for lowering it.
                             Review 90 / 250 Block 3, slide 125
Chain Rule Revisited
                   Y. Zhao
                                                        Review 91 / 250 Block 3, slide 130
Backpropagation: a simple example
  e.g. x = -2, y = 5, z = -4
                                          Chain rule:
  Want:                                      Upstream   Local
                                             gradient   gradient
  Credit to Stanford CS 231n
                                Y. Zhao
                                                        Review 92 / 250 Block 3, slide 131
Backpropagation: a simple example
  e.g. x = -2, y = 5, z = -4
                                          Chain rule:
  Want:                                      Upstream   Local
                                             gradient   gradient
  Credit to Stanford CS 231n
                                Y. Zhao
                                                        Review 93 / 250 Block 3, slide 132
Backpropagation: a simple example
  e.g. x = -2, y = 5, z = -4
                                          Chain rule:
  Want:                                      Upstream   Local
                                             gradient   gradient
  Credit to Stanford CS 231n
                                Y. Zhao
                                                        Review 94 / 250 Block 3, slide 133
Backpropagation: a simple example
  e.g. x = -2, y = 5, z = -4
                                          Chain rule:
  Want:                                      Upstream   Local
                                             gradient   gradient
  Credit to Stanford CS 231n
                                Y. Zhao
                                                                                               Review 95 / 250
A 2-2-1 Network for a Regression Toy
Inputs x1 = 1 and x2 = 2 (no physical units) feed two ReLU hidden units and one
output ŷ. The network is trained toward target t = 2 with squared error.
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction     zᵢ = Σⱼ wᵢⱼxⱼ + bᵢ
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                         hᵢ = max(0, zᵢ)
                                                                 ŷ=1
                                                                         ŷ = v₁h₁ + v₂h₂ + c
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0
 W (Weights)               Input x₁         Input x₂      Bias b         L = (ŷ − t)²
 Hidden 1                  1                0.5           −0.5
                                                                         W: input → hidden
 Hidden 2                  −1               1             0
                                                                         v: hidden → output
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                     Review 96 / 250
Forward Pass with the Initial Weights
Same 2-2-1 network and initial parameters, with inputs x1 = 1, x2 = 2 and target t =
2. Each hidden unit computes z_i, then h_i = max(0, z_i).
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction     z₁ = 1×1 + 0.5×2 − 0.5
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                         = 1.5; h₁ = 1.5
                                                                         z₂ = −1×1 + 1×2 + 0
                                                                 ŷ=1
                                                                         = 1; h₂ = 1
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0
                                                                         ŷ = 1×1.5 − 0.5×1 + 0 = 1
 W (Weights)               Input x₁         Input x₂      Bias b
 Hidden 1                  1                0.5           −0.5
                                                                         L = (1 − 2)² = 1
 Hidden 2                  −1               1             0
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                     Review 97 / 250
Start Backpropagation at the Prediction Error
Same network at its initial weights: ŷ = 1, t = 2 and L = (ŷ − t)², with h1 = 1.5, h2 = 1, v1
= 1, v2 = −0.5 and c = 0.
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction
                                                                         L = (ŷ − t)², t = 2
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                 ŷ=1     e = ŷ − t = 1 − 2 = −1
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0   ∂L/∂ŷ = 2e = −2
 W (Weights)               Input x₁         Input x₂      Bias b
 Hidden 1                  1                0.5           −0.5           Negative slope: raising ŷ
 Hidden 2                  −1               1             0              a little lowers the loss.
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                        Review 98 / 250
Gradients for the Output Weights and Bias
The upstream signal is ∂L/∂ŷ = −2, with ŷ = v1·h1 + v2·h2 + c, h1 = 1.5 and h2 = 1.
Each gradient is ∂L/∂ŷ times what the parameter multiplies.
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction     Original ŷ = 1; L = (ŷ − 2)²
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                         ∂L/∂ŷ = −2
                                                                 ŷ=1
                                                                         ∂L/∂v₁ = (−2)h₁ = −3
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0
                                                                         ∂L/∂v₂ = (−2)h₂ = −2
 W (Weights)               Input x₁         Input x₂      Bias b
 Hidden 1                  1                0.5           −0.5
                                                                         ∂L/∂c = (−2)×1 = −2
 Hidden 2                  −1               1             0
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                       Review 99 / 250
Passing the Signal Back to the Hidden Units
Same context: ∂L/∂ŷ = −2, v1 = 1, v2 = −0.5, z1 = 1.5 and z2 = 1. Define δ_i = ∂L/∂z_i,
the loss sensitivity to hidden unit i's sum.
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction     ∂L/∂h₁ = (−2)×1 = −2
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                         ∂L/∂h₂ = (−2)×(−0.5) = +1
                                                                 ŷ=1
                                                                         z₁ = 1.5, z₂ = 1: ReLU′ = 1
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0
                                                                         δᵢ ≡ ∂L/∂zᵢ
 W (Weights)               Input x₁         Input x₂      Bias b
 Hidden 1                  1                0.5           −0.5           δ₁ = −2; δ₂ = +1
 Hidden 2                  −1               1             0
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                      Review 100 / 250
Gradients for the First-Layer Weights and Biases
Same context: inputs x = [1, 2] and hidden signals δ = [−2, 1], where δ_i = ∂L/∂z_i.
Weight w_ij multiplies input j into hidden unit i.
   Inputs                         hᵢ = ReLU(zᵢ)           Prediction     δᵢ ≡ ∂L/∂zᵢ; δ = (−2, +1)
    x₁ = 1                            h₁ = 1.5 v₁ = 1
                                                                         ∂L/∂wᵢⱼ = δᵢ × xⱼ
                                                                 ŷ=1
                                                                         ∂L/∂W = [ −2, −4; +1, +2 ]
    x₂ = 2                             h₂ = 1      v₂ = −0.5       c=0
                                                                         ∂L/∂bᵢ = δᵢ
 W (Weights)               Input x₁         Input x₂      Bias b         ∂L/∂b = (−2, +1)
 Hidden 1                  1                0.5           −0.5           Column 2 = 2 × column 1
 Hidden 2                  −1               1             0              because x₂ = 2x₁.
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                                 Review 101 / 250
All Nine Gradients from One Forward Pass
Every gradient below comes from the original forward pass (ŷ = 1, t = 2, L = 1). The
columns are parameter, old value and gradient ∂L/∂parameter.
 Parameter                               Old Value                      Gradient ∂L/∂Parameter
 w₁₁                                     1                              −2
 w₁₂                                     0.5                            −4
 w₂₁                                     −1                             +1
 w₂₂                                     1                              +2
 b₁                                      −0.5                           −2
 b₂                                      0                              +1
 v₁                                      1                              −3
 v₂                                      −0.5                           −2
 c                                       0                              −2
wᵢⱼ: input j → hidden i; bᵢ: hidden bias; vᵢ: hidden i → output; c: output bias.
At x = (1, 2), target t = 2: original prediction ŷ = 1; L = (ŷ − t)².
                                                                                                    Review 102 / 250
One Gradient-Descent Step with η = 0.05
Each parameter moves by new = old − η · gradient, with positive learning rate η =
0.05 and the nine gradients from the original forward pass.
 Parameter                    Old                   Gradient            New = Old − 0.05×Gradient
 w₁₁                          1                     −2                  1.10
 w₁₂                          0.5                   −4                  0.70
 w₂₁                          −1                    +1                  −1.05
 w₂₂                          1                     +2                  0.90
 b₁                           −0.5                  −2                  −0.40
 b₂                           0                     +1                  −0.05
 v₁                           1                     −3                  1.15
 v₂                           −0.5                  −2                  −0.40
 c                            0                     −2                  0.10
η = 0.05: learning rate. All gradients use the original forward pass.
At x = (1, 2), target t = 2: original prediction ŷ = 1; L = (ŷ − t)².
                                                                                                             Review 103 / 250
Rerunning the Network with Updated Weights
Same inputs x1 = 1, x2 = 2 and target t = 2, now with the updated parameters. Every
activation is freshly recomputed and compared with its old value.
   Inputs                          hᵢ = ReLU(zᵢ)         Prediction          h₁ = ReLU(1.10 + 1.40 − 0.40)
                                                                             = 2.10
    x₁ = 1                           h₁ = 2.10 v₁ = 1.15
                                                                             h₂ = ReLU(−1.05 + 1.80 − 0.05)
                                                            ŷ = 2.235        = 0.70
    x₂ = 2                           h₂ = 0.70 v₂ = −0.40         c = 0.10   ŷ = 1.15×2.10 − 0.40×0.70
                                                                             + 0.10 = 2.235
 W (Weights)               Input x₁         Input x₂     Bias b
 Hidden 1                  1.10             0.70         −0.40               L = (2.235 − 2)² = 0.055225
 Hidden 2                  −1.05            0.90         −0.05               Old loss: 1
wᵢⱼ: input j → hidden i; c: output bias; t=2; L=(ŷ−t)²
                                                                                      Review 104 / 250
Chain Rule Through One Hidden Unit
A single path from weight to loss gives a gradient of 12 as a product of four factors.
                w = 1, b = −1                ReLU                      v=2
       x=3                         z=2                    h=2                  ŷ=4
 t = 2, L = ½(ŷ − t)² = 2                                          e=ŷ−t=2
 ∂L/∂w =                   (4 − 2)       ×     2      ×     1      ×    3      = 12
                                error    output weight     ReLU′       input
L = e²: ∂L/∂ŷ = 2e         L = ½e²: ∂L/∂ŷ = e
All derivatives use the original values, computed before any update.
                                                                                               Review 105 / 250 Block 3, slide 86
Dead ReLU: A Numeric Path to Zero Gradient
         x=1                        z = wx + b               a = ReLU(z)
                                                                                      da/dz = 0               dL/dw = 0
   w = -0.7, b = -0.5                  = -1.2                     =0
      If this unit stays on the negative side for relevant training examples, the local gradient
                                  cannot move its incoming weights.
                        The issue is a whole negative region with zero local derivative, not the
                                                   single point z = 0.
A dead ReLU outputs zero and blocks the gradient on the data that keep its pre-activation
negative.
                                                     Y. Zhao
                                 Review 106 / 250 Block 3, slide 253
    x        sigmoid
               gate
What happens when x = -10?
What happens when x = 0?
What happens when x = 10?
                       Y. Zhao
                                 Review 107 / 250 Block 3, slide 254
    x        sigmoid
               gate
What happens when x = -10?
What happens when x = 0?
What h appens when x = 10?
                       Y. Zhao
                                      Review 108 / 250 Block 3, slide 255
    x         sigmoid
                gate
Why is this a problem?
Then the gradients flowing back are
tiny (about 4.5e-5 here) and the
weights barely move
                          Y. Zhao
                                                                                       Review 109 / 250
Gradients Through a Residual Connection
In y = x + F(x), the gradient to x is the sum of an identity path and a branch path.
                                       Identity: 3 × 1 = 3
                                                   y = x + F(x)
      x                              F(x)                                 +            y
                             F′(x) = −0.25
                                    Branch: 3 × (−0.25) = −0.75               ∂L/∂y = 3
   ∂L/∂x = 3 − 0.75 = 2.25
The branch cancels part of the identity: 1 + F′(x) = 0.75, so 2.25 < 3.
                                                                                                                               Review 110 / 250 Block 3, slide 241
Gradient clipping: solution for exploding gradient
• Gradient clipping: if the norm of the gradient is greater than
  some threshold, scale it down before applying SGD update
• Intuition: take a step in the same direction, but a smaller step
           Source: “On the difficulty of training recurrent neural networks”, Pascanu et al, 2013. http://proceedings.mlr.press/v28/pascanu13.pdf
                                                     Y.
                                                     Y. Zhao
                                                        Zhao
                                                                                                                               Review 111 / 250 Block 3, slide 242
Gradient clipping: solution for exploding gradient
•   This shows the loss surface of a simple RNN (hidden state is a scalar not a vector)
•   The “cliff” is dangerous because it has steep gradient
•   On the left, gradient descent takes two very big steps due to steep gradient, resulting
    in climbing the cliff then shooting off to the right (both bad updates)
•   On the right, gradient clipping reduces the size of those steps, so effect is less drastic
                Source: “Deep Learning”, Goodfellow, Bengio and Courville, 2016. Chapter 10.11.1. https://www.deeplearningbook.org/contents/rnn.html
                                                        Y.
                                                        Y. Zhao
                                                           Zhao
                                                                                    Review 112 / 250
Global Gradient Norm Clipping
Clipping rescales the whole gradient vector so its norm is at most the threshold.
                      g = (3, 4)
                                                          ǁgǁ₂ = 5, c = 2
                  Coordinate: (2, 2)                      Scale = 2 / 5
             (1.2, 1.6)
                                                      g′ = min(1, c/ǁgǁ₂) g
0
Global clipping applies one scale, so the gradient direction is kept.
Unchanged if norm <= threshold; coordinate clipping caps each entry.
                                                                                          Review 113 / 250 Block 7, slide 85
Gradient Direction and Step Size
The gradient and the learning rate play different roles.
Current weight: 2.0                         Gradient: −0.5           Learning rate: 0.1
                   New weight = 2.0 − 0.1 × (−0.5) = 2.05
The gradient is local. The chosen step must still be checked.
The learning rate controls how far we move.
Course teaching example. Sources and assumptions in speaker notes.
                                                                               Review 114 / 250
Check: Reading the Sign of a Gradient
Gradient descent uses a positive learning rate η and the update w ← w − η·(dL/dw).
For one weight w, backpropagation reports dL/dw < 0. What does the update do to
w?
A    Decreases w, because a negative slope means raising w raises the loss
     locally.
B    Leaves w unchanged, because a negative slope signals a minimum.
C    Increases w, because raising w lowers the loss locally.
D    Flips the sign of η, so the step follows the gradient direction.
                                                                                   Review 115 / 250
Answer C: Negative Slope Means Increase w
The update is w ← w − η·(dL/dw) with η > 0, and the reported derivative dL/dw is
negative.
Answer: C
A    Wrong: a negative slope means the loss falls locally as w rises, not that it
     grows.
B    Wrong: a minimum has zero slope; a nonzero slope means a small move
     can lower the loss.
C    Correct: −η·(dL/dw) is positive, so w rises, though a finite step still
     needs checking.
D    Wrong: η stays positive, and the minus sign in the update already points
     downhill.
                                           Review 116 / 250 Block 7, slide 88
Stochastic Gradient Descent (SGD)
                                    Full sum expensive
                                    when N is large!
                                    Approximate sum
                                    using a minibatch of
                                    examples
                                    32 / 64 / 128 common
                                                                              Review 117 / 250 Block 7, slide 100
Momentum Reuses Recent Gradient Direction
Updates can zigzag even when the long-term direction is consistent.
                                                        Combine with
  Current gradient                                                        Parameter update
                                                      recent directions
Momentum smooths the update direction over time.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                                      Review 118 / 250 Block 7, slide 102
      SGD + Momentum:
 continue moving in the general direction as the previous iterations
                            SGD                                                               SGD+Momentum
                             -    Build up “velocity” as a running mean of gradients
                             -    Rho gives “friction”; typically rho=0.9 or 0.99
Sutskever et al, “On the importance of initialization and momentum in deep learning”, ICML 2013
                                                                                       Review 119 / 250
Momentum Remembers Past Gradients
Same current gradient g = 2, different stored histories, so the update steps can
differ.
 m_new = 0.5 m_old + g, w_new = w − 0.1 m_new
       m_old = 0                    m_new = 2                              Δw = −0.2
       m_old = 4                    m_new = 4                              Δw = −0.4
Convention: m_new = 0.5 m_old + g, then w_new = w - 0.1 m_new.
With g = 2 and m_old = 4, m_new = 4 and the step is -0.4, so history matters.
                                                                        Review 120 / 250
One SGD Step on a Squared Loss
A model predicts wx and uses loss (wx - y)^2, with no 1/2 factor. For x = 3,
y = 5, w = 1, and learning rate 0.05, what is w after one SGD update on this
example?
 A     -0.6
 B     0.4
 C     1.3
 D     1.6
Adapted from archived midterm Q36
                                                                               Review 121 / 250
Solution: One SGD Step on a Squared Loss
D. 1.6
1      Gradient: dL/dw = 2(wx - y)x = 2(3 - 5)(3) = -12.
2      Update: w = 1 - 0.05 × (-12) = 1.6, so the prediction rises from 3 to
       4.8, toward 5.
3      Common errors: 1.3 adds a 1/2 factor, 0.4 flips the update sign, and
       −0.6 reports 0.05 × (-12) instead of the new w.
Adapted from archived midterm Q36
                                                                                  Review 122 / 250
Reliable Training and Transfer
Choices about initialization, normalization, regularization, and frozen layers shape
how training behaves.
    Identical starts keep symmetric hidden units identical under
1
    deterministic updates; random starts break symmetry.
    Normalization layers can behave differently in training mode and
2
    evaluation mode.
    Regularization strength is a hyperparameter, so validation data decides
3
    whether it helps generalization.
    In transfer learning, you choose which pretrained layers stay frozen and
4
    which remain trainable.
                                                                                         Review 123 / 250 Block 7, slide 58
Why Identical Hidden Units Stay Identical
Suppose two hidden units start with exactly the same parameters.
Same start                                                           Same update
Same inputs and parameters                                           Under symmetric connections,
produce the same outputs.                                            they receive the same gradients.
Different random starts let hidden units learn different features.
Course teaching example. Sources and assumptions in speaker notes.
                                           Review 124 / 250 Block 7, slide 60
       Weight initialization
•   Small random numbers
•   Xavier
•   He / Kaiming: ReLU-aware scale
                                     Slide credit: CS 231N
                                                                                          Review 125 / 250
Why Equal Starting Weights Stay Equal
Two identical hidden units receive equal gradients, so one SGD step keeps them
doing the same computation.
Task: two identical hidden units, h = w times x
                                      w1 = 0.4                                 w1 = 0.2
                             h1
                                      h1 = 0.8                                 h1 = 0.4
     x=2
                                      w2 = 0.4                                 w2 = 0.2
                             h2
                                      h2 = 0.8                                 h2 = 0.4
dL/dh = 1 each, so dL/dw = 2 each
SGD, rate 0.1: 0.4 minus 0.1 times 2 = 0.2
Different start: w1 = 0.3, w2 = 0.7; h1 = 0.6, h2 = 1.4 (different computations)
                                                                                 Review 126 / 250 Block 7, slide 24
Normalization Inside the Network
Input preprocessing happens once. Hidden activations change during
training.
                                                                Normalize +
          Hidden
                                                              learn scale and   Next layer
        activations
                                                                   shift
Normalization also changes the optimization behavior.
BatchNorm: Ioffe & Szegedy (2015); Santurkar et al. (2018).
                                                                             Review 127 / 250 Block 7, slide 26
BatchNorm: A Complete Numeric Example
One feature across four examples: 2, 4, 6 and 8.
 Input                                         2              4       6         8
 Subtract mean 5                               −3             −1      1         3
 Divide by √5                                  −1.34          −0.45   0.45      1.34
Variance = 5. For this illustration, γ = 1, β = 0; ε is omitted.
Training learns γ and β after this normalization.
Course schematic. Sources and assumptions in speaker notes.
                                                                                   Review 128 / 250 Block 7, slide 27
Normalization Adjusts Mean and Scale
Centering and scaling do not force an arbitrary distribution to
become Gaussian.
What changes                                                  What does not follow
Subtract the mean.                                            The resulting values need not
Divide by a scale estimate.                                   follow a bell-shaped distribution.
BatchNorm then learns an additional scale and shift.
BatchNorm: Ioffe & Szegedy (2015); Santurkar et al. (2018).
                                                 Review 129 / 250 Block 7, slide 28
    Batch normalization
•   Compute the empirical mean and variance
    independently for each dimension and normalize.
                              Review 130 / 250 Block 7, slide 30
Batch normalization
              [Ioffe and Szegedy, 2015]
                                                 Review 131 / 250 Block 7, slide 32
    Batch normalization
•   At test time
    •   The mean and variance are not computed based
        on the batch.
    •   Use stored running means and variances from
        training.
                                                                                  Review 132 / 250 Block 7, slide 34
BatchNorm Behaves Differently at Evaluation
The flower classifier may receive one new photo at a time.
During training                                               During evaluation
                                                              Usually use stored running
Use mini-batch statistics.
                                                              statistics.
Update running estimates.
                                                              Keep the same learned scale
Learn scale and shift.
                                                              and shift.
Switch the model to evaluation mode when evaluating.
BatchNorm: Ioffe & Szegedy (2015); Santurkar et al. (2018).
                                                                                               Review 133 / 250
Batch Normalization in Two Stages
Batch normalization first standardizes with statistics, then applies a learned scale
and shift.
      x=7                                 x̂ = 2                              y=0
                         (7 − 3) / √4                        0.5 × 2 − 1
μ = 3, σ² = 4, ε = 0                                   γ = 0.5, β = −1
Stage 1: with μ = 3, σ² = 4 and ε = 0, the input 7 becomes (7 − 3) / 2 = 2.
In standard evaluation, stored running mean and variance replace the batch statistics; γ and
β stay.
                                                                                                        Review 134 / 250
BatchNorm at Evaluation Time
Stored running statistics give one photo the same normalized activation, whatever
else is in the batch.
Same photo, x = 7
Wrong training mode: batch [7, 3]                              Wrong training mode: batch [7, 11]
                  7                3                                            7               11
                   μ = 5, σ² = 4                                                 μ = 9, σ² = 4
               (7 − 5) / √4 = 1                                              (7 − 9) / √4 = -1
Evaluation mode: stored running mean 3,                                             (7 minus 3) / 2 = 2 with
variance 4                                                                          either companion
Illustrative numbers; epsilon 0, gamma 1, beta 0, population variance; intermediate activation only
                                                              Review 135 / 250 Block 7, slide 138
The Purpose of a Regularization Penalty
The training loss rewards fitting labels. A penalty also constrains the
weights.
Objective = data loss + λ × weight penalty
                        L2 penalty = sum of squared weights
λ controls the tradeoﬀ. Choose it using validation data.
The next page lists different choices of weight penalty.
Course schematic. Sources and assumptions in speaker notes.
                                     Review 136 / 250 Block 7, slide 139
Regularization: Add term to loss
In common use:
L2 regularization                  (Weight decay)
L1 regularization
Elastic net (L1 + L2)
                                                                                 Review 137 / 250
L2 Regularization in the Objective
With equal data loss, the L2 penalty separates two weight vectors by their squared
norms.
  J(w) = data loss + λ Σwᵢ²
  A: (3, 0)         0.4 + 0.2 × 9 = 2.2
  B: (2, 1)         0.4 + 0.2 × 5 = 1.4
Both A = (3, 0) and B = (2, 1) have data loss 0.4, with squared norms 9 and 5.
Read lambda and any factor of one half from the definition; validation judges
generalization.
                                                                                         Review 138 / 250 Block 7, slide 140
Dropout Changes Which Features Are Available
During training, some hidden activations are randomly set to zero.
Training step A                                                      Training step B
Some feature activations are
                                                                     A new random mask keeps
kept.
                                                                     a different subset of activations.
Others are temporarily zeroed.
The weights remain. The activation mask changes.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                    Review 139 / 250 Block 7, slide 151
Dropout Scaling Conventions
Let q be the probability of keeping an activation. Dropping
probability is 1 − q.
Classic dropout                                               Inverted dropout
Training: keep it unchanged or set                            Training: keep it divided by q or
it to zero.                                                   set it to zero.
Evaluation: multiply it by q.                                 Evaluation: use it unchanged.
Each convention matches training and evaluation scales.
Course schematic. Sources and assumptions in speaker notes.
                                                                         Review 140 / 250 Block 7, slide 153
Inverted Dropout Preserves the Expected Scale
A hidden activation is 2. The keep probability is 0.5.
Kept: output 2 / 0.5 = 4.                           Dropped: output 0.
     Expected training output = 0.5 × 4 + 0.5 × 0 = 2
At evaluation: keep the activation as 2, with no dropout mask.
The preserved quantity is an expectation across masks.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                    Review 141 / 250
Inverted Dropout Keeps the Average
With keep probability 0.5, a kept activation is doubled, so the average training
output matches evaluation.
Inverted dropout, p = 0.5
                    Keep (0.5)               4   2 / 0.5 = 4
     h=2
                                             0             Eval: dropout off, output 2
                    Drop (0.5)
Average = 0.5(4) + 0.5(0) = 2
Same expected scale; one pass gives 0 or 4
                                                                                 Review 142 / 250
Check: Inverted Dropout at Evaluation
A layer uses inverted dropout with keep probability q = 0.8. In training, a random
mask zeros some activations and scales kept ones by 1.25. What happens in
evaluation mode?
A    Apply a random mask that drops 20% and scale the kept activations by
     1.25, as in training.
B    Disable the dropout mask and pass activations through with no extra
     scaling.
C    Disable the dropout mask and multiply every activation by 0.8.
D    Disable the dropout mask and multiply every activation by 1.25.
                                                                                 Review 143 / 250
Answer B: Mask Oﬀ, No Extra Scaling
Inverted dropout with keep probability q = 0.8 scales kept activations by 1.25 during
training.
Answer: B
A    Wrong: evaluation should be deterministic, so no random dropout mask is
     applied.
B    Correct: the 1/q scaling already happened in training, so average sizes
     already match.
C    Wrong: scaling by q at test time is the non-inverted convention and would
     shrink outputs here.
D    Wrong: 1.25 offsets dropped units only in training; at evaluation it would
     inflate outputs.
                                                                          Review 144 / 250 Block 7, slide 156
An Augmented Example Must Keep a Valid Label
For flower classification, consider a slightly different view of the
same flower.
    Original photo                                     Mild crop or     Altered photo
     label: daisy                                   brightness change    label: daisy
Choose transformations that preserve the task label.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                         Review 145 / 250 Block 7, slide 163
The Same Transformation Can Break Another
Task
Rotating a digit image can change what the image means.
Flower photo                                                         Digit recognition
A rotated view may still show                                        A rotated 6 can resemble a 9.
the same flower species.                                             Keeping label 6 can be wrong.
Augmentation depends on the task semantics.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                 Review 146 / 250
Augmentation Must Keep Labels Valid
A 180 degree rotation keeps a daisy a daisy, but a rotated 6 can resemble a 9.
             Upright daisy                                   Handwritten 6
                                                         6
                   180°                                            180°      6
                                                        Label 6 can be wrong: may
       Label: daisy (still valid)
                                                                resemble 9
Augment only when the target stays valid for the task
                                                                                     Review 147 / 250 Block 7, slide 132
When Training and Validation Improve Together
Evaluate both curves using comparable loss definitions and modes.
                    1.5
   (illustrative)
                     1
        Loss
                    0.5                                                                      Training
                     0                                                                       Validation
                          1           2          3           4       5   6   7   8
                                                              Epoch
The model is learning patterns that transfer to held-out data.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                     Review 148 / 250 Block 7, slide 134
When Training Improves but Validation Worsens
The best training checkpoint may not be the best held-out
checkpoint.
                    1.5
   (illustrative)
                     1
        Loss
                    0.5                                                                      Training
                     0                                                                       Validation
                          1           2          3           4       5   6   7   8
                                                              Epoch
Select checkpoints using the chosen validation metric.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                Review 149 / 250 Block 7, slide 135
Checkpoint Selection and Early Stopping
One noisy validation dip does not require stopping immediately.
Save the best                            Keep the best value of the selected validation
checkpoint                               metric.
Wait for a
                                         A patience window can tolerate short-term noise.
pattern
Use a fixed
                                         Keep the test set out of stopping decisions.
protocol
Choose the stopping rule before inspecting test performance.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                                              Review 150 / 250
Early Stopping With Checkpoints
Save the best validation checkpoint, stop after 3 epochs without improvement, and
restore the saved weights.
         1.2                                                                               Best validation:
         0.9                                                                               epoch 5, loss 0.45,
  Loss
         0.6                                                                               saved
         0.3
          0                                                                                Epochs 6, 7, 8: no
               1         2           3            4        5          6           7    8   improvement, stop
                                                  Epoch                                    after 8 (patience 3)
                   Training loss (illustrative)       Validation loss (illustrative)       Restore epoch 5, not
                   Saved checkpoint                                                        epoch 8
Test set: evaluate once, after all choices are fixed
                                                                                         Review 151 / 250 Block 7, slide 192
Limited Data Changes the Starting Point
Our flower dataset is small. A pretrained model already encodes
visual patterns.
Train from scratch                                                   Transfer learning
Learn all representations                                            Start with representations
from this dataset.                                                   learned from other data.
The source and target data determine how useful transfer is.
Course teaching example. Sources and assumptions in speaker notes.
                                                                         Review 152 / 250 Block 7, slide 194
Start by Training a New Classifier
Replace the original label predictor with a three-class flower head.
Stage 1: backbone = the pretrained feature extractor. Keep it fixed.
     Early features                                     Later features   Classifier
            FROZEN                                              FROZEN     TRAIN
Frozen features still participate in the forward pass.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                        Donahue et al, “DeCAF: A Deep Convolutional Activation
                                                                                        Feature for Generic Visual Recognition”, ICML 2014
 Transfer Learning with CNNs                                                            Razavian et al, “CNN Features Off-the-Shelf: An
                                                                                        Astounding Baseline for Recognition”, CVPR Workshops
                                                                                        2014
1. Train on Imagenet    2. Small Dataset (C classes)                          3. Bigger dataset
    FC-1000                          FC-C                                            FC-C
    FC-4096                        FC-4096
                                                             Reinitialize
                                                                                    FC-4096
                                                                                                               Train these
    FC-4096                        FC-4096                                          FC-4096
                                                             this and train
    MaxPool                        MaxPool                                          MaxPool
   Conv-512                        Conv-512                                        Conv-512                 With bigger
   Conv-512                        Conv-512                                        Conv-512
                                                                                                            dataset, train
    MaxPool                        MaxPool                                          MaxPool
   Conv-512                                                                        Conv-512
                                                                                                            more layers
                                   Conv-512
   Conv-512                        Conv-512                                        Conv-512
    MaxPool                        MaxPool                   Freeze these           MaxPool
   Conv-256                        Conv-256                                        Conv-256
                                                                                                           Freeze these
   Conv-256                        Conv-256                                        Conv-256
    MaxPool                        MaxPool                                          MaxPool
   Conv-128                        Conv-128                                        Conv-128              Lower learning rate
   Conv-128                        Conv-128                                        Conv-128              when finetuning;
    MaxPool                        MaxPool                                          MaxPool              1/10 of original LR
    Conv-64                        Conv-64                                          Conv-64
                                                                                                         is good starting
    Conv-64                        Conv-64                                          Conv-64
                                                                                                         point
     Image                           Image                                           Image
                       Review 153 / 250 Block 7, slide 200
                                                                             Review 154 / 250 Block 7, slide 201
Then Adapt Some of the Backbone
If the fixed features are insufficient, unfreeze selected layers.
Stage 2: adapt later features and the classifier.
     Early features                                     Later features       Classifier
            FROZEN                                                   TRAIN     TRAIN
Fine-tuning changes selected pretrained parameters.
Course teaching example. Sources and assumptions in speaker notes.
                                                                                Review 155 / 250 Block 7, slide 226
Training and Transfer in One View
The same classifier can start from random or pretrained weights.
Starting point                           Initialize a new model or load pretrained weights.
                                         Choose the full model, selected layers, or a new
Trainable part
                                         head.
                                         Select by validation performance and test the final
Evaluation
                                         choice.
Initialization, optimization and transfer ﬁt one training loop.
Course teaching example. Sources and assumptions in speaker notes.
                                                                      Review 156 / 250
BatchNorm in Evaluation Mode
A BatchNorm layer is in evaluation mode. For one feature, its stored
running mean is 4 and running variance is 9, with gamma = 2, beta = -1,
and epsilon = 0. What is the output for input 10?
 A     2
 B     3
 C     4
 D     5
Adapted from archived midterm Q23
                                                                        Review 157 / 250
Solution: BatchNorm in Evaluation Mode
B. 3
1      Evaluation mode uses the stored running statistics, not the current
       mini-batch: (10 - 4) / sqrt(9) = 6 / 3 = 2.
2      Scale and shift: gamma × 2 + beta = 2 × 2 - 1 = 3.
3      Common errors: 2 stops after normalizing, 4 skips beta, and 5 uses
       beta = +1.
Adapted from archived midterm Q23
                                                                      Review 158 / 250
Clipping a Small Gradient
Global norm clipping with threshold 1 multiplies the gradient g by min(1,
1/||g||). Suppose g = (0.03, 0.04). What does clipping do to g?
 A     Multiplies it by 20
 B     Sets it to zero
 C     Shrinks it by a factor of 20
 D     Leaves it unchanged
Adapted from archived midterm Q53
                                                                           Review 159 / 250
Solution: Clipping a Small Gradient
D. Leaves it unchanged
1      ||g|| = sqrt(0.03^2 + 0.04^2) = 0.05, so the factor is min(1, 1/0.05) =
       min(1, 20) = 1.
2      A factor of 1 leaves g = (0.03, 0.04) unchanged. Clipping rescales only
       gradients whose norm exceeds the threshold.
3      Common error: treating clipping as a fix for vanishing gradients. The
       min caps large gradients and never enlarges small ones.
Adapted from archived midterm Q53
                                                                               Review 160 / 250
Recurrent Memory
Recurrent networks carry a state across time steps using the same weights at every
step.
    The same recurrent weights are reused at every time step, while the
1
    hidden state changes.
    Detaching the state keeps its values as memory but stops gradients
2
    from flowing further back.
    An LSTM uses gates to decide what to retain, what to write, and what to
3
    output.
    In an LSTM, the cell state and the exposed hidden state are separate
4
    quantities.
                                                                               Review 161 / 250
Reading the Recurrent Notation
A recurrent step reads one input and the previous state, then writes a new state.
Each symbol below names one of these quantities.
xₜ: the input at     The new reading at step t, such as one sensor value or
step t               one token vector. A fresh xₜ arrives at every step.
hₜ₋₁ and hₜ: the     hₜ₋₁, also written h_(t-1), is the state carried in from the
state                previous step. hₜ is the new state written at step t and
                     passed on.
                                                                                            Review 162 / 250
Reading the Recurrent Notation
A recurrent step reads one input and the previous state, then writes a new state.
Each symbol below names one of these quantities.
h₀: the starting         The state before any input arrives, often all zeros. The
state                    first step computes h₁ from h₀ and x₁.
θ: the shared            The learned parameters of the update, like the 0.5 in
weights                  the next example. Training adjusts θ, but every step of
                         a sequence reuses the same θ.
One step computes hₜ = fθ(hₜ₋₁, xₜ). The state changes at every step, while the weights θ
stay the same.
                                                                         Review 163 / 250 Block 5, slide 37
Why Reuse the Same Update?
           a                              car                       on     ...
          f₁                               f₂                       f₃   f₄ ?
  A new position would need another trained network.
Position-specific networks need more parameters as length grows.
RNN parameter sharing; Sutskever (2013). Teaching schematic.
                                                          Y. Zhao
                                                                         Review 164 / 250 Block 5, slide 38
One Update Rule, Any Number of Steps
           a                              car                       on     ...
          fθ                               fθ                       fθ    fθ
  Same weights θ; changing input and previous state.
An RNN reuses a learned transition across time.
RNN parameter sharing; Sutskever (2013). Teaching schematic.
                                                          Y. Zhao
                               Review 165 / 250 Block 5, slide 39
Recurrent Neural Network
  y1       y2             y3   y4
  h1       h2             h3   h4
  x
                Y. Zhao
                                                                              Review 166 / 250 Block 5, slide 40
Shared Weights, Different States
           a                              car                        on         ...
          fθ                               fθ                        fθ        fθ
       state 1                          state 2                     state 3   state 4
  CNN: reuse a filter across space. RNN: reuse an update across time.
Sharing θ does not make the hidden states or predictions identical.
RNN parameter sharing; Sutskever (2013). Teaching schematic.
                                                          Y. Zhao
                                                                                   Review 167 / 250
One Recurrent Rule, Three Steps
The coefficient 0.5 is reused at every step while the input reading and the carried
state change.
h_t = 0.5 × h_(t-1) + x_t
Task: update a state from sensor readings. h0 = 0
            x1 = 2                             x2 = -1               x3 = 3
      0.5 × h_old + x                       0.5 × h_old + x      0.5 × h_old + x
         0.5 × 0 + 2 = 2                    0.5 × 2 + (-1) = 0     0.5 × 0 + 3 = 3
Same stored coefficient 0.5 at every step
Simpliﬁed: scalar values, no nonlinearity
                                                                                  Review 168 / 250
Backpropagation Through Time (BPTT) Spelled Out
Write the reused 0.5 as a, so hₜ = a × hₜ₋₁ + xₜ. BPTT runs the steps forward, then
sends gradients back through them in reverse.
        h₁     → × 0.5 →              h₂      → × 0.5 →              h₃
  ∂h₃/∂h₁ = 0.5 × 0.5 = 0.25
Two links back        ∂h₃/∂h₁ = ∂h₃/∂h₂ × ∂h₂/∂h₁ = 0.5 × 0.5 = 0.25. Each extra step
                      back multiplies by another 0.5.
Shared a, many        The same a is used at steps 1, 2, and 3. Its gradient adds one
uses                  term from each use, and training applies the total as one update
                      to a.
                                                                                   Review 169 / 250 Block 5, slide 87
Long Sequences Make Full BPTT Expensive
      h1              h2             h3              h4           h5     h6     h7              h8
     loss            loss            loss            loss         loss   loss   loss           loss
   Save intermediate activations across the whole sequence.
A longer backward path needs more memory before an update.
Truncated BPTT; Sutskever (2013). Non-overlapping chunks shown.
                                                         Y. Zhao
                                                                                     Review 170 / 250 Block 5, slide 88
Train on Shorter Spans, Keep the Token Targets
      h1              h2             h3              h4           h5       h6     h7              h8
     loss            loss            loss            loss         loss     loss   loss           loss
               losses 1–3                                     losses 4–6           losses 7–8
  For each chunk: sum/average its losses, backpropagate, update θ.
The targets stay the same; the gradient history is truncated.
Truncated BPTT; Sutskever (2013). Non-overlapping chunks shown.
                                                         Y. Zhao
                                                           Review 171 / 250 Block 5, slide 92
Carry the State Across Chunks
    CHUNK 1                                  CHUNK 2
           h₁           h₂                      h₃         h₄
                    →                                  →
                             same state value
    The next chunk starts with information from the previous
    chunk.
Forward memory can cross the boundary.
Course schematic.
                                   Y. Zhao
                                                               Review 172 / 250 Block 5, slide 93
Stop Gradients at the Boundary
    CHUNK 1                                  CHUNK 2
           h₁           h₂                      h₃             h₄
                    →                                  →
                             same state value
                                 STOP    ← gradient from chunk-2 loss
                               detach(h₂)
The backpropagation horizon is shorter than the forward history.
Course schematic.
                                   Y. Zhao
                                                                                      Review 173 / 250
Detach Between Sequence Chunks
Chunk 2 reuses the value 4 from chunk 1, but its loss sends no gradient back into
chunk 1.
Chunk 1 ends: h2 = 4                                   x3 = 1, a = 0.5 (chunk 2)
                                 Detached value 4
                   4                                           h3 = 0.5 × 4 + 1 = 3
Forward: value 4 crosses
                                                    Backward: stops at boundary
a still gets gradients from chunk 2
                                                                             Review 174 / 250
LSTM Cell: One Memory, Three Gates
One LSTM step updates a carried memory, then decides how much of it
to expose. Given the gates, two equations update the step.
Memory and        c_old and c_new are the carried cell memory before and
state             after this step; h is the exposed hidden state.
Gates and         f (forget), i (input), and o (output) are gates with entries in
candidate         [0, 1]; g is the candidate content.
Update rules      c_new = f ⊙ c_old + i ⊙ g and h_new = o ⊙ tanh(c_new).
                  Products are entrywise; gates need not sum to 1.
                                                                                            Review 175 / 250
LSTM Cell Update
The cell update c_new = f ⊙ c_old + i ⊙ candidate blends old memory with new
content.
c_new = f ⊙ c_old + i ⊙ candidate
c_old = 4, candidate = 0.5
f = 0.9, i = 0.1         0.9×4 + 0.1×0.5 = 3.65
f = 0.1, i = 0.6         0.1×4 + 0.6×0.5 = 0.7
The forget gate f and input gate i are independent LSTM gates, so they need not sum to 1.
h_new = o ⊙ tanh(c_new)
Then h_new = o ⊙ tanh(c_new), so the output gate controls the exposed state separately.
                                                                               Review 176 / 250 Block 5, slide 120
Recap: Forget, Input, and Output Roles
  Three distinct gate roles work together at each step:
         FORGET GATE                                INPUT GATE              OUTPUT GATE
         Keep old info                             Write new info            Expose now
   0                                 1        0                     1   0                            1
     Retain past + write new candidate → updated cell → expose to hidden.
Three learned dimmers control retain, write, and expose.
Standard LSTM: PyTorch documentation. Teaching analogy.
                                                          Y. Zhao
                                                                                           Review 177 / 250 Block 5, slide 121
The Complete LSTM Cell
  One time step: keep, write, and expose information.
                                                                                     cell memory → next step
 c previous              ×                                       +                                   c new
                                keep
                                                                       write        tanh
                                                                 ×
                                                                                     ×               h new
                     forget f               input i            candidate g     output o     to prediction / next
                                                                                            step
 x now + h previous
The three gates work together inside one repeated LSTM cell.
Standard LSTM cell; PyTorch LSTM equations. Editable course diagram.
                                                           Y. Zhao
                                                                                      Review 178 / 250 Block 5, slide 122
The Limitation: A Compact State Bottleneck
  A fixed-size state pair must compress an arbitrary history:
      Long Token Sequence:                                           Fixed State Pair:
       Hundreds of tokens                                            (cₜ, hₜ) fixed size
  Can we keep separate vectors and read them when needed?
  Next: read earlier token vectors with attention.
A fixed-size state must compress the entire past.
Standard LSTM: PyTorch documentation; Vaswani et al. (2017).
                                                           Y. Zhao
                                                                                  Review 179 / 250
Attention and Transformers
Instead of carrying one state forward, attention lets each position read directly from
a context.
    Recurrent models pass a carried state step by step; attention computes
1
    a weighted read over many positions.
    Position information, masks, and attention weights are distinct parts
2
    that should not be confused.
    In training, all target positions are known; in generation, each step sees
3
    only the generated prefix.
    Weights are shared across positions within a layer, while different layers
4
    have distinct weights.
                                                                              Review 180 / 250 Block 5, slide 129
Now Build a Text-Generating Transformer
  Task: continue “The dog chased the ball. It ...”
        Token +                          Attention            MLP             Prediction
        position                       read context          process          next token
                                                            features
                                  Repeat attention + MLP in several layers.
Follow one path from input words to the next-token prediction.
Vaswani et al. (2017). Course schematic.
                                                  Y. Zhao
                                                                                       Review 181 / 250 Block 5, slide 130
Words Enter as Feature Vectors
  Start with one learned vector per token.
      The                 dog              chased                  the      ball   .                 It
  Simpliﬁed token vectors; colored bars are illustrative, not measured.
Each token begins as a learned vector of feature values.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                          Review 182 / 250 Block 5, slide 131
Word Order Changes Sentence Meaning
  Same words, different order, different meaning.
           dog                       bites                        man       Actor: dog | Target: man
          man                        bites                         dog      Actor: man | Target: dog
  Word vectors alone do not specify their order.
Identical words in diﬀerent orders mean diﬀerent things.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                        Review 183 / 250 Block 5, slide 132
Add a Position Vector to Each Token
  Give each token a signal for its position.
      The                 dog              chased                     the   ball   .                  It
       p1                  p2                  p3                     p4    p5     p6                p7
  “dog” at position 2                                             +         =      input 2
  “ball” at position 5                                            +         =      input 5
                        Here: word vector + position vector = input vector
Position values preserve word order across the sequence.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                       Review 184 / 250 Block 5, slide 133
One Token Asks About Its Context
  At “It”, read the available context.
      The                 dog              chased                  the      ball   .                 It
         1                  2                   3                   4        5     6               self
  “It” could refer to the dog or the ball.
  All seven positions, including “It”, can supply information.
A token needs context from other tokens to resolve its meaning.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                            Review 185 / 250 Block 5, slide 134
Step 1: Compute Attention Weights
  At “It”: how much should each source contribute?
      The                dog               chased    the      ball    .                   It
      0.05               0.35               0.15     0.05     0.25   0.05              0.10
  Illustrative weights for one head; they add to 1.
  A different token or context produces a different set of weights.
Attention weights are computed from the current input.
Vaswani et al. (2017). Course schematic.
                                                    Y. Zhao
                                                                                  Review 186 / 250 Block 5, slide 135
Step 2: Mix the Source Information
  At “It”: use those weights to combine source vectors.
      The                dog               chased      the          ball    .                   It
     0.05                0.35               0.15       0.05         0.25   0.05              0.10
                                                    weighted sum                    context for
                                                                                    “It”
  Illustrative values and weights; Block 9 shows the projections.
The weights control how much each value vector contributes.
Vaswani et al. (2017). Course schematic.
                                                      Y. Zhao
                                                                                          Review 187 / 250
Attention Weights Mix Value Vectors
An attention weight says how much a position contributes. A value vector says what
it contributes. The context is their weighted sum.
Source           Weight          Value vector                   Weighted value
The              0.2             [1, 0]                         [0.2, 0]
dog              0.3             [5, 2]                         [1.5, 0.6]
barked           0.5             [9, 4]                         [4.5, 2.0]
[0.2 + 1.5 + 4.5, 0 + 0.6 + 2.0] = [6.2, 2.6]
Weights set how much and values set what. Feature 1 alone is the scalar mix on the next
slide: 0.2 × 1 + 0.3 × 5 + 0.5 × 9 = 6.2.
                                                                                                      Review 188 / 250
Attention as a Weighted Mix
At 'barked', toy attention mixes prefix values 1, 5, 9 with weights 0.2, 0.3, 0.5 into
context 6.2.
               The                                   dog                                barked
         1       × 0.2                        5        × 0.3                        9       × 0.5
    0.2                                   1.5                                   4.5
  Context = 0.2 + 1.5 + 4.5 = 6.2
Task: predict the next token after 'The dog barked'.
Projection parameters are learned and fixed at inference; attention weights are recomputed for each
input.
                                                                                       Review 189 / 250 Block 5, slide 137
Why Future Tokens Must Be Hidden
  Hide the word we are trying to predict.
      The                 dog              chased                  the      ball   .                 It
                              CAUSAL MASK: future words hidden
                       Next:
                     “chased” Seeing “chased” would reveal the answer.
A position cannot see future tokens it is trying to predict.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                       Review 190 / 250 Block 5, slide 138
Causal Attention Across Two Positions
  Later positions can read a longer prefix.
  At “dog”: read the ﬁrst 2 positions.
    The        dog     chased      the                                      ball   .                 It
  At “ball”: read the ﬁrst 5 positions.
    The        dog      chased      the                                     ball   .                 It
  Colored: allowed. Gray: future positions, hidden here.
Each token may attend to itself and earlier tokens only.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                      Review 191 / 250 Block 5, slide 139
Order, Visibility, and Contribution Are Different
              POSITION                       CAUSAL MASK       ATTENTION WEIGHTS
     dog at position 2                     At dog: The + dog   At It: dog gets 0.35
    Where is this token?                   Which tokens are    How much does each
                                               visible?            contribute?
Order, access, and contribution are three separate choices.
Vaswani et al. (2017). Course schematic.
                                               Y. Zhao
                                                                          Review 192 / 250 Block 5, slide 140
Each Position Computes Its Own Mixture
  Each query position gets its own weights and context
  vector.
                                            SOURCE TOKEN
                                     The       dog              ran
    at The                            1.0     hidden           hidden   context 1
    at dog                            0.3       0.7            hidden   context 2
    at ran                            0.1       0.6             0.3     context 3
   Illustrative weights. Each row uses the same layer input.
Shared parameters compute a different mixture at each position.
Vaswani et al. (2017). Course schematic.
                                                      Y. Zhao
                                                                              Review 193 / 250
Why All Rows Can Be Computed at Once
In the previous table, each row is one query position. Every row reads the same
layer inputs, so no row waits for another row.
Same layer           The rows at The, dog, and ran all read this layer's input
inputs               vectors. At ran, the row does not read context 2 from
                     the row at dog.
No chain             Contexts 1, 2, and 3 depend only on the layer inputs, so
between rows         they can be computed in any order or all at once.
                                                                                           Review 194 / 250
Why All Rows Can Be Computed at Once
In the previous table, each row is one query position. Every row reads the same
layer inputs, so no row waits for another row.
Mask limits what The mask hides future positions, such as ran for the
is read          row at dog. It restricts which inputs each row may read
                        and sets no schedule for when rows run.
Layers still run in The next layer reads this layer's outputs as its inputs.
order               Rows run in parallel within a layer, while layers run one
                        after another.
Rows in one layer run in parallel on shared inputs. The mask limits what each row reads,
and each layer waits for the one below.
                                                                         Review 195 / 250 Block 5, slide 141
Why Add an MLP After Attention?
  After gathering context, learn how to combine its
  features.
        context
                                           Linear     Nonlinearity   Linear
         at “It”
                                   A familiar feedforward network (MLP), applied
                                                   to one position.
  Its output is another feature vector for “It”.
Attention gathers context; the MLP learns new feature combinations.
Vaswani et al. (2017). Course schematic.
                                                    Y. Zhao
                                                                                         Review 196 / 250 Block 5, slide 142
Same MLP, Diﬀerent Token Vectors
  Reuse this MLP at every position in the layer.
      The                 dog              chased                  the      ball    .                  It
     MLP                 MLP                 MLP                  MLP       MLP    MLP              MLP
 Same MLP weights at every position within this layer.
A shared MLP transforms each contextualized vector separately.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                        Review 197 / 250 Block 5, slide 143
Inside One Transformer Block
  Put attention and the MLP together.
        Input                       Causal Attention                        Token MLP       Output
       Vectors                                                                              Vectors
  Attention: exchange information across positions.
  MLP: transform the features within each position.
  Residual connections and LayerNorm omitted for clarity.
Attention shares information; the MLP refines each vector.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                      Review 198 / 250 Block 5, slide 145
Stack Blocks to Build a Deeper Network
  Each block has its own attention and MLP weights.
  input                                    Block 1: attention + MLP
  vectors
                                           Block 2: attention + MLP
                                           Block 3: attention + MLP         to
                                                                            prediction
 Same architecture. Different weights. One jointly trained model.
Depth counts blocks; generation length counts tokens.
Vaswani et al. (2017). Course schematic.
                                                   Y. Zhao
                                                                                       Review 199 / 250 Block 5, slide 146
Generation Step 1: Predict the Next Word
  Read the prefix, then choose one more token.
      The                 dog              chased                  the      ball   .
                                 Transformer blocks process the prefix
                                                  prediction head                  choose: It
  last-position vector
The final transformed vector produces scores for the next word.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                         Review 200 / 250 Block 5, slide 147
Generation Step 2: Append and Predict Again
  Read the prefix, then choose one more token.
      The                 dog              chased                  the      ball     .                 It
                                 Transformer blocks process the prefix
                                                  prediction head                  choose: barked
  last-position vector
Append the new token to the sequence and repeat the process.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                               Review 201 / 250 Block 5, slide 148
Training Scores All Positions in Parallel
  During training, the full example is already known.
      The                 dog              chased                  the       ball         .                  It
      dog              chased                 the                  ball        .          It           barked
  target 1            target 2            target 3            target 4      target 5   target 6        target 7
  Score every next-token target, with future tokens hidden.
 During generation, the next chosen token is not yet known.
Training evaluates all sequence positions in a single pass.
Vaswani et al. (2017); Radford et al. (2019). Teaching analogy.
                                                                  Y. Zhao
                                                                                 Review 202 / 250
Shifted Targets in Training and Generation
Training on “The dog ran” shifts the text by one position: the inputs are [The, dog]
and the targets are [dog, ran].
Input position           Allowed input                 Target used for loss
1: The                   The                           dog
2: dog                   The, dog                      ran
Targets are compared with predictions to compute the loss. The token ran is never
an input here, and dog is hidden from position 1.
During generation, only the prefix exists. After “The dog”, the next token is unknown,
so the model predicts it, appends it, and runs again.
                                                                                             Review 203 / 250 Block 5, slide 149
The Complete Text-Generating Transformer
  THE WHOLE MODEL                                        ONE BLOCK
            Tokens + position                                Causal multi-head attention
                                           zoom in
                                                                  + input → LayerNorm
        Transformer block × L
                                                                   MLP at each position
             Prediction head
                                                                  + input → LayerNorm
                 Next token                          Gray: shortcuts + normalization help train the stack.
Generate → append the new token → run the model again.
Vaswani et al. (2017). Course schematic.
                                                Y. Zhao
                                                                                 Review 204 / 250
Position and Causal Mask: Diﬀerent Jobs
A text model uses both position vectors and a causal mask. Which choice explains
their different roles?
A    Position vectors block future tokens, and the causal mask records the order
     of the words.
B    The causal mask alone tells each token where it sits, so position vectors
     add nothing new.
C    Position vectors alone stop each token from using later tokens, so the mask
     is not needed.
D    Position vectors tell where each token is, and the causal mask blocks access
     to future tokens.
                                                                                 Review 205 / 250
Answer D: Location and Access Are Separate
Position vectors supply explicit location information. A causal mask controls which
tokens may be read.
Answer: D
A    Incorrect. The roles are swapped. Position vectors carry order information,
     and the causal mask limits which tokens can be used.
B    Incorrect: the mask controls allowed connections. Position vectors add
     explicit location information.
C    Incorrect. Position vectors describe location but do not restrict access. Only
     the causal mask keeps future tokens out of view.
D    Correct. The two parts do different jobs: one supplies word order, the
     other keeps each token from using later tokens.
                                                                            Review 206 / 250
Graphs and Shared Computation
Graph networks update node features using edges, then read out predictions per
node or per graph.
    Start from concrete inputs: the edges that connect nodes and the
1
    feature stored at each node.
    Each layer updates node features by combining information from
2
    neighbors.
    Outputs can be one prediction per node or one pooled prediction for
3
    the whole graph.
    Shared per-node updates with a mean or sum over neighbors respect
4
    node reordering and apply to new graphs with compatible features.
                                                                                            Review 207 / 250
Defining a Graph Task
A toy road network shows which numbers are inputs and which outputs a model
must return.
                                 B    2
                                                                     Nodes: roads A, B, C, D
            A    1
                                  C                      D    8      Edges: A-B, A-C, C-D
                                4
These unitless load indices are input features; the labels are the delay risk classes
below.
A node head predicts one delay risk class per road; a graph head pools to one city label.
                                                                                       Review 208 / 250 Block 6, slide 74
A Shared Rule Can Also Read Neighbors
Back to our road example: A is the named road with load 1.
Shared node MLP                              Apply the same function to each road’s own features.
GNN at road A                                Read A = 1 and neighbor inputs B = 2, C = 4.
Neighbor order                               The mean of 2 and 4 is 3 in either listing order.
One shared update combines each node with its neighbors.
Course example. Sources and assumptions in speaker notes.
                                                                            Review 209 / 250 Block 6, slide 75
A Message Brings a Neighbor Into the Update
Road A reads information from B and C, then updates its vector.
                                                            Aggregate
Neighbors B and C                                                       Combine with A
                                                            neighbor
send their vectors                                                      and update h_A
                                                            messages
Each node combines its own information with its neighbors.
Course schematic. GNN sources and assumptions in speaker notes.
                                                                                      Review 210 / 250 Block 6, slide 85
The Next Four Pages Show Information Flow
We use a fixed toy update so that every number can be followed.
Layer 0                                    Observed load indices: A = 1, B = 2, C = 4, D = 8.
Toy update                                 Half of the own value + half of the neighbor mean.
                                           Computed hidden values, rather than observed load
Layer 1 and later
                                           indices.
After an update, the number is a hidden value used by the model.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                 Review 211 / 250
Reading the Graph Update Notation
The next pages use hᵥᵏ⁺¹ = 0.5 hᵥᵏ + 0.5 mean{hᵤᵏ : u is a neighbor of v}. Each symbol
is deﬁned below.
v and u: node         v is the node being updated, and u ranges over its
names                 neighbors. In the road graph, the nodes are A, B, C, and
                      D.
k: a layer, not a     h_A¹, also written A¹, is the value at node A after layer 1,
power                 not h_A raised to a power. Layer 0 is the input: hᵥ⁰ = xᵥ.
                                                                                            Review 212 / 250
Reading the Graph Update Notation
The next pages use hᵥᵏ⁺¹ = 0.5 hᵥᵏ + 0.5 mean{hᵤᵏ : u is a neighbor of v}. Each symbol
is deﬁned below.
N(A): the                With edges A-B, A-C, and C-D, N(A) = {B, C}. The mean
neighbors of A           runs over N(v), so A uses (2 + 4)/2 = 3.
All nodes update         Every node computes layer k + 1 from layer-k values
together                 only. No node reads a value another node wrote in the
                         same layer.
Toy rule: new value = 0.5 × own value + 0.5 × neighbor mean, applied to all nodes at once
using only layer-k values.
                                                                                          Review 213 / 250 Block 6, slide 86
Read Only One-Hop Neighbors
  All nodes: layer 0
                                 B
                                                                       A reads B and C.
                                                                       Neighbor mean = (2 + 4)/2 = 3
                                 2
        A                                                              A¹ = 0.5·1 + 0.5·3 = 2
        1
                                 C                        D
                                 4                         8
hᵥᵏ⁺¹ = 0.5 hᵥᵏ + 0.5 mean{hᵤᵏ : u is a neighbor of v}
Toy mean-aggregation update with ﬁxed weights; not the exact normalized GCN rule.
                                                                                              Review 214 / 250 Block 6, slide 87
Update Every Node From Layer 0
  All nodes: layer 1
                                 B
                                                                        All layer-1 values:
                                                                        A¹ = 2, B¹ = 1.5
                                1.5
        A                                                               C¹ = 4.25, D¹ = 6
        2
                                 C                         D
                               4.25                        6
Every new value uses only the previous layer.
Toy mean-aggregation update with fixed weights; not the exact normalized GCN rule.
                                                                                               Review 215 / 250
All Four Layer-1 Updates From Layer 0
Edges A-B, A-C, and C-D are undirected, so both ends of each edge are neighbors.
Each update reads only layer 0: A = 1, B = 2, C = 4, D = 8.
Node      Previous neighbors              New value
A         B = 2, C = 4                    0.5 × 1 + 0.5 × (2 + 4)/2 = 2
B         A=1                             0.5 × 2 + 0.5 × 1 = 1.5
C         A = 1, D = 8                    0.5 × 4 + 0.5 × (1 + 8)/2 = 4.25
D         C=4                             0.5 × 8 + 0.5 × 4 = 6
Layer 1 gives A = 2, B = 1.5, C = 4.25, D = 6. The next layer applies the same rule to these
values, so information reaches two hops.
                                                                                            Review 216 / 250 Block 6, slide 88
The Second Layer Reaches Two Hops
  All nodes: layer 2
                                 B
                                                                       A reads B¹ and C¹.
                                                                       A² = 0.5·2
                               1.75
        A                                                                  + 0.5·(1.5 + 4.25)/2
                                                                          = 2.4375
    2.4375
                                 C                        D
                              4.125                    5.125
Two layers let information travel two graph edges.
Toy mean-aggregation update with ﬁxed weights; not the exact normalized GCN rule.
                                                                                            Review 217 / 250 Block 6, slide 89
Keep Updates Synchronous
  All nodes: layer 2
                                 B
                                                                        Read layer k → write layer k+1
                               1.75
        A                                                               In-place A → B would give
                                                                        B¹ = 2 instead of 1.5.
    2.4375
                                 C                         D
                              4.125                     5.125
Node numbering does not define an update schedule.
Toy mean-aggregation update with fixed weights; not the exact normalized GCN rule.
                                                                              Review 218 / 250 Block 6, slide 90
Which Parts of the Update Can Learn?
Our 0.5 / 0.5 example explains information flow with fixed weights.
Neighbor
                                         Transform or weight the messages.
information
Node
                                         Combine messages with the node’s current vector.
information
Shared
                                         Reuse the same update rule across nodes.
parameters
Training learns shared transforms from the prediction loss.
Course schematic. GNN sources and assumptions in speaker notes.
                                                                                   Review 219 / 250 Block 6, slide 91
One Layer and Two Layers Use Different Context
Information moves one graph edge per local aggregation layer.
                                 B
                                                                  Layer 1 at A: B and C
       A
                                                                  Layer 2 at A: D can contribute
                                 C                        D       through C.
Every node reads the previous layer.
Depth expands the neighborhood that can inﬂuence a node.
Course schematic. GNN sources and assumptions in speaker notes.
                                                                               Review 220 / 250 Block 6, slide 92
Neighbor Order Should Preserve A’s Update
Road A has the same two neighbors whether we list them as B, C or
C, B.
 Neighbor Listing                                   Values Read         Mean
 B, C                                               2, 4                3
 C, B                                               4, 2                3
Toy update for A: 0.5 × 1 + 0.5 × 3 = 2 in both cases.
A mean or sum treats the neighbors as a set.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                         Review 221 / 250 Block 6, slide 93
Node Outputs Are Equivariant
A GNN gives one hidden vector per road. The output rows follow the
input rows.
 File Order                                              Layer-1 Outputs in That Order
 A, B, C, D                                              2, 1.5, 4.25, 6
 D, B, A, C                                              6, 1.5, 2, 4.25
Road A still has output 2 after its row moves.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                              Review 222 / 250 Block 6, slide 94
A Whole-Graph Output Can Be Invariant
For a graph task, combine all node outputs into one graph vector.
Sum the layer-1 values as a simple graph representation:
 Row Order                                       Pooled Sum
 A, B, C, D                                      2 + 1.5 + 4.25 + 6 = 13.75
 D, B, A, C                                      6 + 1.5 + 2 + 4.25 = 13.75
The same set of node vectors gives the same pooled result.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                    Review 223 / 250 Block 6, slide 95
Invariance and Equivariance Answer Different
Questions
Always say what is being reordered and what the output represents.
 Operation                                           Reordering         Required Behavior
 Neighbor mean at A                                  B, C → C, B        Same aggregate
 All node outputs                                    ABCD → DBAC        Rows move together
 Whole-graph pooling                                 ABCD → DBAC        Same graph vector
Reordering the file keeps the same physical prediction.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                            Review 224 / 250 Block 6, slide 99
The Node Vector Feeds a Prediction Head
For node A, the head converts h_A into class scores.
                                                                          Low / high
  Node vector h_A                                     Shared classifier
                                                                          risk scores
A training label supplies the loss for a labeled node.
The head and GNN layers train together when both are trainable.
Course schematic. GNN sources and assumptions in speaker notes.
                                                                                   Review 225 / 250 Block 6, slide 107
What Is Shared Across Roads?
At one GNN layer, every road uses the same learned matrices.
Road-specific                              A reads its own vector and its neighbor mean. B reads
inputs                                     its own.
Shared learned                             W_self transforms a node vector. W_neighbor
weights                                    transforms a mean.
Repeated                                   Each road runs the same update with different input
computation                                vectors.
The weights depend on feature width, rather than road IDs.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                                    Review 226 / 250 Block 6, slide 108
Why Can the Weights Run on a New Graph?
Suppose each node vector has 2 numbers. The learned matrices
accept that width.
 Input to One Update                                                    Width       Shared Transform
 Own road vector                                                        2 numbers   W_self: 2 × 2
 Mean of neighbor vectors                                               2 numbers   W_neighbor: 2 × 2
 Updated road vector                                                    2 numbers   Same rule at every road
More nodes mean more uses of the same function.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                     Review 227 / 250 Block 6, slide 110
Inductive Means Applying the Learned Rule to
Unseen Nodes
Training fits the encoder. Inference computes outputs for new
compatible inputs.
                                           Use road inputs, links and observed delay labels to fit
Training city
                                           the weights.
                                           Keep the weights. Compute vectors from its road
New city
                                           inputs and links.
Check                                      Test accuracy, feature units, edge meanings and traffic
generalization                             conditions.
Computing an output and predicting accurately are separate
checks.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                       Review 228 / 250 Block 6, slide 113
Graph Outputs Pool Across Nodes
             h_A        sum / mean
                    →
             h_B                                   graph label
                    →                     →
             h_C
                    →
A symmetric readout gives the same graph output after reordering.
Course schematic.
                                                                       Review 229 / 250 Block 6, slide 114
The GNN From Input to Output
Node tasks keep one output per node. Graph tasks pool the node
vectors.
                                                                     Node heads
                                                                    labels A, B, ...
   Graph +                                       GNN layers
 node features                                     1, 2, ...
                                                                  Pool + graph head
                                                                   one graph label
The output task determines whether we keep or pool node
vectors.
Course schematic. GNN sources and assumptions in speaker notes.
                                                            Review 230 / 250 Block 6, slide 115
GNN Layers and the Graph Readout
Two node-update layers feed a graph readout that combines the node
vectors.
Equivariant node layers. Invariant graph pooling.
Course example. Sources and assumptions in speaker notes.
                                                                                                 Review 231 / 250
One Graph Rule, New Graph
The same two learned weights update nodes in a 4-road graph and an unseen 3-
road graph.
h_v = 0.5 × x_v + 0.5 × mean(neighbor x)
                     Old graph                                                  Unseen graph
           A 1                        C 4                                                U 6
B 2
                                     D 8                             V 1                       W 3
A: mean(2, 4) = 3                                              U: mean(1, 3) = 2
hA = 0.5 × 1 + 0.5 × 3 = 2                                     hU = 0.5 × 6 + 0.5 × 2 = 4
Feature: unitless load index, one per road
Runs without retraining, but accuracy must be evaluated; outputs are not probabilities
                                                                              Review 232 / 250
Review: Feature Order in a Trained GNN
Trained GNN atom features: [atomic number, charge]. A new molecule gives [charge,
atomic number]. No learned node IDs. What should be done before using the frozen
model?
A    No change, because the feature vector width is still 2
B    Pad the node count to match the training molecules
C    Restore the training feature order and definitions before applying the
     shared weights
D    Reorder atom feature rows while leaving the adjacency matrix unchanged.
                                                                              Review 233 / 250
Answer: C, Restore the Training Feature Order
Training atom features: [atomic number, charge]; new input: [charge, atomic
number]. The edge encoding is unchanged.
Answer: C
A     The width matches, but the weights were learned for what each column
      means, not just the count.
B     Node count is not the issue; shared weights work on graphs of different
      sizes.
C     Each column again carries the meaning that the shared weights were
      trained on.
D     This mismatches atom rows with edges and leaves the feature columns
      swapped.
Compatible features permit computation; accuracy still needs evaluation.
                                                                                 Review 234 / 250
Reordering Nodes Moves Features and Adjacency
Together
M[i, j] = M[j, i] = 1 when roads i and j share an edge.
  Order: A, B, C, D                                Order: D, B, A, C
       A   B   C   D                                      D   B   A   C
   A   0   1   1   0                                D     0   0   0   1
   B   1   0   0   0                                B     0   0   1   0
   C   1   0   0   1                                A     0   1   0   1
   D   0   0   1   0                                C     1   0   1   0
  X rows: 1, 2, 4, 8                               X rows: 8, 2, 1, 4
Reorder the feature rows and both matrix axes together to keep the same graph.
                                                                           Review 235 / 250
Rows, Columns, and Axes Under Reordering
Each road owns one row of the feature matrix X and one row plus one column of
the adjacency matrix M. Reordering roads moves all three.
Feature rows:       In order A, B, C, D, the rows of X are 1, 2, 4, 8.
one per road        Reordered to D, B, A, C, the same rows read 8, 2, 1, 4.
Feature columns: Each column of X is one feature, here the load index.
meanings         Node reordering never moves columns, so the shared
                    weights read the same meanings.
                                                                                         Review 236 / 250
Rows, Columns, and Axes Under Reordering
Each road owns one row of the feature matrix X and one row plus one column of
the adjacency matrix M. Reordering roads moves all three.
Adjacency: both         M[i, j] uses road positions on both axes. Edge A-B is at
axes                    (1, 2) in order A, B, C, D and at (3, 2) in order D, B, A, C.
                        Its mirror entry moves with it.
Partial moves    Moving X rows without M, or only one axis of M, pairs
change the graph roads with the wrong loads or neighbors and stores a
                        different graph.
Same graph, new storage order: node outputs move with their rows (equivariance), and a
pooled graph output stays the same (invariance).
                                                          Review 237 / 250 Block 6, slide 78
      Key idea: Generate node embeddings based on local
      network neighborhoods
                                                                    A
TARGET NODE          B                             B                C
                                                                A
       A
                         C                                         B
                                 A                 C
                             F                                     E
  D                                                            F
                 E
                                                  D
           INPUT GRAPH                                         A
                                                                             Review 238 / 250 Block 6, slide 81
                         Model can be of arbitrary depth:
 § Nodes have embeddings at each layer
 § Layer-0 embedding of node 𝑣 is its input feature, 𝑥𝑣
 § Layer-𝑘 embeddings can use information from up to 𝑘
   hops away.
                                                              Layer-0
                                                    Layer-1         A   xA
TARGET NODE          B                                    B         C   xC
      A
                                          Layer-2               A       xA
                          C                                         B   xB
                                      A                C
                              F                                     E   xE
  D                                                             F       xF
                 E
                                                      D
          INPUT GRAPH                                           A       xA
                                                            Review 239 / 250 Block 6, slide 83
      Basic approach: Average information from neighbors
      and apply a neural network
                         (1) average messages from                    A
TARGET NODE          B           neighbors              B             C
                                                                  A
       A
                         C                                           B
                                             A          C
                             F                                       E
  D                                                              F
                 E
                                                        D
           INPUT GRAPH                                           A
                             (2) apply neural network
                                                                                       Review 240 / 250
How Far Information Travels
With one-hop layers, information moves one edge per layer along V-W-X-Y-Z.
Layer 0     V                  W                    X                   Y              Z
Layer 1     V                  W                    X                   Y              Z
Layer 2     V                  W                    X                   Y              Z
Layer 3     V                  W                    X                   Y              Z
Layer 4     V                  W                    X                   Y              Z
Information from Z reaches Y after 1 layer, X after 2, W after 3, and V after 4.
This assumes each layer reads only neighbors from the previous layer, with no global
shortcut.
                                                                                                     Review 241 / 250 Block 6, slide 67
One Graph, Two Node Numberings
In this six-node sketch, colors track the objects. Letters are temporary
storage labels.
     Order 1                             Order 2
                                         B                                                   F
                  A                                                                  E
                                              C                                                  D
                                                       F                                             A
     D                          E                                                C       B
  Example: the gold object changes label A → E, while its links stay intact.
The same colored node keeps the same neighbors.
Original Stanford CS224W colored-node diagrams, with introductory annotations.
                                                                                                            Review 242 / 250 Block 6, slide 68
Invariance: One Answer for the Whole Graph
Suppose our task asks whether this entire graph is connected.
          Order 1                                                                    Order 2
                                         B                                                          F
                  A                                                                     E
                                              C                                                         D
                                                       F                                                    A
     D                          E                                                C              B
                          Connected: Yes                                                       Connected: Yes
Renumbering leaves the whole-graph answer unchanged.
Original Stanford CS224W colored-node diagrams, with introductory annotations.
                                                                                                      Review 243 / 250 Block 6, slide 69
Equivariance: One Vector for Each Node
The colored rows below belong to the colored nodes above.
              Order 1                                                       Order 2
                                        B                                                 F
                    A                                                            E
                                            C                                                 D
                                                    F                                             A
         D                      E                                      C              B
                           A                                                              A
                           B                                                              B
         Output            C                                                     Output   C
         rows              D                                                     rows     D
                           E                                                              E
                           F                                                              F
The gold object keeps its vector, moving from row A to row E.
Original Stanford CS224W colored-node diagrams, with introductory annotations.
                                                                                                      Review 244 / 250 Block 6, slide 70
The Green Object Moves From Row C to Row D
Follow a second node through the same renumbering. Its vector moves
with its ID.
       Order 1                    Order 2
                                        B                                                 F
                    A                                                            E
                                            C                                                 D
                                                    F                                             A
         D                      E                                      C              B
                           A                                                              A
                           B                                                              B
         Output            C                                                     Output   C
         rows              D                                                     rows     D
                           E                                                              E
                           F                                                              F
Equivariance keeps every node’s output attached to that node.
Original Stanford CS224W colored-node diagrams, with introductory annotations.
                                                                                   Review 245 / 250 Block 6, slide 71
Two Output Types Need Two Properties
What should happen when we reorder the input rows?
One output per
                                           Output rows follow the same reordering: equivariance.
road
One output per
                                           The graph output stays the same: invariance.
graph
Same graph                                 We changed its storage order, keeping its connections
throughout                                 intact.
The required property depends on what the model outputs.
Course schematic. Numbers are illustrative; sources in speaker notes.
                                                                                          Review 246 / 250
Reordering: Pixels Versus Nodes
After convolution, keep the largest value over all spatial positions in each channel.
Rearranging input pixels can change a 3×3 neighborhood.
   0 0 0 0 0                      0 0 0 0 0                    3×3 all-ones kernel
                                                               Stride 1, zero padding 1
   0 1 1 0 0                      0 1 0 0 0
   0 0 0 0 0                      0 0 0 0 0                    Global max: 2 → 1
   0 0 0 0 0                      0 0 0 0 0
   0 0 0 0 0                      0 0 0 0 1
                                                               1×1 + global max:
                                                               same pooled vector
One window covers both          Ones 3 rows and 3 columns
ones: sum = 2.                  apart: every window sum ≤ 1.
The earlier 1 x 1 shared map only moves its outputs when positions move.
Reordering graph features with adjacency keeps the same graph; moving pixels changes
neighborhoods.
                                                                           Review 247 / 250
Shared Computation Across Architectures
CNNs, RNNs, and GNNs reuse one set of weights many times, so uses do not add
parameters.
CNN                 same kernel at every spatial position
RNN                 same update at every time step
GNN                 same update at every node
A larger compatible input repeats the rule with no new parameters.
Parameters are fixed at inference; attention weights depend on input.
                                                                      Review 248 / 250
Which Function Ignores Input Order?
Compare F(x) = ReLU(x1) + ReLU(x2) + ReLU(x3) and G(x) = x1 + 2·x2 + x3.
Which output stays the same under every reordering of (x1, x2, x3)?
 A     F only
 B     G only
 C     Both F and G
 D     Neither F nor G
Adapted from archived midterm Q47
                                                                               Review 249 / 250
Solution: Which Function Ignores Input Order?
A. F only
1      F is a symmetric sum: the same ReLU on every entry, then addition,
       which ignores order. Every reordering gives the same F.
2      G is slot-specific: x2 gets coefficient 2. For x = (-2, 1, 4), swapping x1
       and x2 changes G from 4 to 1.
3      One counterexample rules out G, but F needs the symmetric-sum
       argument, which covers every reordering.
Adapted from archived midterm Q47
                                                                            Review 250 / 250
How to Study These Ideas
Retrace each worked example on your own and check every convention before
computing.
    Trace each example by hand, then check shapes and parameter counts
1
    at every layer.
    Read loss, optimizer, and normalization conventions from their
2
    definitions before computing.
    Note when training and evaluation modes differ and what makes a
3
    model compatible with new inputs.


=== SOURCE 2: ARCHIVED PAST PAPER — CSCI 566 MIDTERM, SPRING 2024 ===
(50 + 6 bonus questions. Correct answers are marked inline. The review deck above
rebuilds Q6, Q23, Q24, Q26, Q36, Q47, Q51 and Q53 as its Check/Solution slides.)

                               CSCI 566 Midterm – Spring 2024
Student Name (Please print):
Student ID:
Student Email:
This exam contains 50+6 bonus questions with equal weights (each worth ½ point of your total
grade). Please only provide your answer in the answer sheet below. We will only collect and grade
the first page and not consider the information on other pages. Please make sure your answer is
readable.
This exam is open book, open notes, but no computers or other electronic devices.
The total time for this exam is 112 minutes (2 min/question; 1:00 pm to 2:52 pm). Students with
OSAS permission can take 1.75 times the duration and submit by 4:20 pm.
 1                        2                        3                        4
 5                        6                        7                        8
 9                        10                       11                       12
 13                       14                       15                       16
 17                       18                       19                       20
 21                       22                       23                       24
 25                       26                       27                       28
 29                       30                       31                       32
 33                       34                       35                       36
 37                       38                       39                       40
 41                       42                       43                       44
 45                       46                       47                       48
 49                       50                       51                       52
 53                       54                       55                       56
1. After training a neural network, you observe a large gap between the training accuracy (100%)
   and the test accuracy (46%). Which of the following methods is least common to reduce this gap?
   Answer: B
   a. L2 regularization
   b. Replace Tanh by Sigmoid activation
   c. Reduce the size of the neural networks
   d. Adding batch normalization
2. You are benchmarking runtimes for layers commonly encountered in CNNs. Which of the
   following would you expect to be the fastest (in terms of floating point operations)? Answer: B
   a. Conv layer (convolution operation + bias addition)
   b. Max pooling
   c. Sigmoid activation
   d. Batch Normalization
3. Consider a neural network model with parameters initialized with zeros. w[1] denotes the weight
   matrix of the first layer. You forward propagate a batch of examples, then backpropagate the
   gradients and update the parameters. Which of the following statements is true? Answer: A
   a. Entries of w[1] may be positive or negative
   b. Entries of w[1] are all negative
   c. Entries of w[1] are all positive due to the gradient direction in the initial batches
   d. Entries of w[1] are all zeros
4. If your input image is 64x64x3 (i.e., 3 channels), how many parameters are there in single 1x1
   convolution filters without bias? Answer: 3
5. Which of the below is typical approach to solve the exploding gradient problem? Answer: D
   a. Use SGD optimization with small batch sizes
   b. Oversample minority classes
   a. Increase the batch size to reduce overfitting
   b. Resize gradient by their norm to a predefined threshold
6. What is the primary purpose of pruning in decision trees? Answer: A
   a. To reduce the depth of the tree and prevent overfitting
   b. To optimize the tree's parameters by L2 regularization and prevent overfitting
   c. To handle missing data
   d. To improve the tree's interpretability by using a smaller tree
7. You are training an RNN and find that all the weights and parameters are taking on the value
   NaN (not a number). Which of the following is the most likely cause? Answer: B
   a. Vanishing gradient problem
   b. Exploding gradient problem
   c. ReLU activation function g(.) used to compute g(z), where z is too large
   d. Sigmoid activation function g(.) used to compute g(z), where z is too large
8. Will the general neural network regularization techniques like L2 work in Graph Neural Networks
   (GNNs)? Answer: B
   a. No. Due to the unique spatial relationship, L2 will push GNN weights to near-zero values,
        which causes a phenomenon called over-smoothing
   b. Yes. GNNs are still learning the network weights as a type of neural networks
   c. No. L2 is not feasible for GNN since the squared loss will cause gradient error in aggregation
   d. Yes. However, in practice, people most likely rely on early stopping to control GNN
        complexity but not L2 regularization
9. What is the primary purpose of the aggregation function in Graph Neural Networks (GNNs)?
   Answer: A
   a. Combine information from a node’s neighbors to update the node’s representation
   b. To reduce the dimensionality of node features before processing
   c. To classify the nodes into different categories based on their features
   d. To predict the presence or absence of edges between nodes in a graph.
10. Are pooling layers necessary in a convolutional neural network (CNN)? Answer: C
    a. Yes. Without pooling layers, the spatial correlation will not be kept
    b. Yes. Without pooling layers, CNN will likely face the issue of vanishing gradient problems
    c. No. It is primarily for reducing dimensionality and preventing overfitting
    d. No. It is primarily for amplifying the non-linearity in CNN
11. Why is the Rectified Linear Unit (ReLU) activation function considered non-linear? Answer: C
    a. Because it can only output positive values
    b. Because it outputs the same value as its input
    c. Because it introduces a point of non-linearity at zero, where the function changes slope
    d. Because it is a piecewise function with two linear segments
12. In the context of neural networks, why is nonlinearity an essential component within the layers of
    the network? Answer: C
    a. Nonlinearity allows neural networks to compute only linearly separable functions, simplifying
         calculations
    b. Nonlinearity enables neural networks to make decisions and binary classifications more
         efficiently
    c. Nonlinearity allows neural networks to learn and model complex patterns and relationships
         within the data that cannot be represented with linear models
    d. Nonlinearity is primarily used to speed up the training process by reducing the number of
         required iterations
13. Consider a simple feedforward neural network model, also known as a multi-layer perceptron
    (MLP), consisting of a single layer with three neurons. Each neuron receives an input and applies
    a weight to it. For this scenario, the inputs to the three neurons are 1, 2, and 3, respectively.
    Correspondingly, the weights applied by the neurons are 4, 5, and 6. After the weighted inputs
    are summed, a linear activation function is applied to the result. This activation function multiplies
    the sum by a constant value of 3. What is the final output of the network based on these
    parameters? Answer: B
    a. 32
    b. 96
    c. 643
    d. 9
14. Choose a disadvantage of decision trees among the following. Answer: C
    a. Decision trees lack interpretability and are not suited for high-stakes applications
    b. Decision trees are costly to run in comparison to kNN
    c. Decision trees are prone to overfit
    d. All of the above
15. How does a GNN typically handle varying sizes and structures of input graphs? Answer: B
    a. By padding smaller graphs to match the largest one in the dataset
    b. By utilizing a fixed number of parameters that are shared across different parts of the graph
    c. By employing a variable number of layers depending on the size of the graph
    d. By transforming all graphs to a fixed size before processing
16. What is NOT a common method for handling directed graphs in GNNs? Answer: C
    a. Treat them as undirected graphs
    b. Use different weight matrices for incoming and outgoing edges
    c. Use the information of the out-degree nodes only
    d. Allow more flexible weight matrices
17. Which of the following best describes a Graph Autoencoder? Answer: A
    a. A network designed for unsupervised learning on graph data
    b. A GNN variant used for regression tasks
    c. A model that predicts the next node in a sequence
    d. A GNN that only uses convolutional layers
18. Which of the following is not a regularization technique? Answer: C
    a. Model pruning
    b. L2 norm regularization
    c. Random weight initialization
    d. Data augmentation
19. Based on the above figure, which is a sigmoid function? Answer: E
20. Based on the above figure, which is an Exponential Linear Unit (ELU) function? Answer: C
21. For all these non-linear activation functions, which are the primary properties that affect their
    usages in neural networks? Answer: A
    a. The value range and the rate of response, e.g., the slope
    b. The value range only
    c. The ability to handle probability outputs
    d. The ability to handle probability outputs and the rate of response, e.g., the slope
22. When computing statistics for data preprocessing (for example, a mean of features), which set of
    data should be used to compute? Answer: B
    a. Training dataset only to avoid data leakage
    b. Validation dataset only to avoid overfitting on the training dataset
    c. Training and validation datasets together since both are used for training
    d. Training, validation, and test datasets altogether since we need as much data as possible to
        approximate statistics
    23. Which of the following statements about batch normalization is true? Answer: A
        a. During the training time, batch normalization will use the mean and variance of the current
           mini-batch.
        b. During the test time, batch normalization will use the mean and variance of the current mini-
           batch.
        c. When batch size is set to the size of the entire dataset, batch normalization on input is
           equivalent to performing L1 normalization on input.
        d. When batch size is set to the size of the entire dataset, batch normalization on input is
           equivalent to performing L2 normalization on input.
    24. You have a fully connected neural network with input layer (i), 2 hidden layers (h 1 and h2) and 1
        output layer (𝜎). Dimensions of the layers are i = 10; h1 = 20; h2 = 20; 𝜎 = 10. Assume fully
        connected layers do not have biases. You decided to double the number of hidden units in every
        hidden layer. How many times will it increase the number of parameters of the network? Ans: C
        a. 1 (the same number of parameters)
        b. 2
        c. 3
        d. 6
    25. Which of the following statements about Recurrent Neural Networks (RNNs) is not true? Answer:
        A
        a. RNNs suffer from the vanishing gradient problem but not the exploding gradient problem
        b. RNNs can produce a sequence of outputs
        c. RNNs can deal with variable-length inputs
        d. RNNs are usually difficult to train due to the vanishing gradient problem
Consider a variant of LeNet-5 (C1, P1, C2, P2, F1, F2, F3) shown here and answer the corresponding
questions. Convolution layers and fully connected layers have weights and biases. Here, this LeNet takes
a color image of size (32, 32, 3) as input and outputs a prediction vector of probabilities for 4 classes.
    26. For the first convolutional layer, we observe that the shape of input data is (32, 32, 3) and the
        shape of output data is (28, 28, 4). Assuming there is no spatial padding for this layer and stride
        is 1, what is the size of C1’s convolutional kernel? The size of a kernel is represented in the form
        of (input channel, kernel height, kernel width, and output channel). The answer should be four
        numbers in the parenthesis. Answer: (3,5,5,4)
    27. Assume we are trying to learn a decision tree. Our input data consists of N samples, each with k
        attributes (k<<N). We define the depth of a tree as the maximum number of nodes between the
        root and any of the leaf nodes (including the leaf, not the root).
        If all attributes are binary, what is the maximal number of leaf (decision) nodes that we
        can have in a decision tree for this? (choose the closest one if your answer is slightly off).
        Answer: A
        a. 2𝑘
        b. 𝑁𝐾
        c. 2𝑁𝐾 − 1
    d. 𝑁 𝑘 − 1
28. For the same binary-valued tree, what is the maximum possible depth of a decision tree for this
    data? Answer: A
    a. 𝑂(𝑘).
    b. 𝑂(𝑘 − 1)
    c. 𝑂(𝑙𝑜𝑔𝑘)
    d. 𝑂(log(𝑘 + 𝑁))
29. If all attributes are continuous, what is the maximum number of leaf nodes that we can
    have in a decision tree for this data? Answer: D
    a. 2𝑘−1
    b. 𝑁𝐾 2
    c. 𝐾
    d. 𝑁
30. If all attributes are continuous, what is the maximal possible depth for a decision tree for this?
    (choose the closest one if your answer is slightly off). Answer: C
    a. 𝑁𝐾 2
    b. 𝐾
    c. 𝑁 − 1
    d. 2𝑘−1
31. Which of the following layers is not linear activation functions? Answer: C
    a. Convolutional layer
    b. Pooling layer
    c. ReLU layer
    d. Batch normalization Layer
32. There are 100 data instances, each of which is a 64 dimension/feature vector. To have a 3
    nearest neighbor classifier on the data, the number of parameters to learn is __. Answer: 0
33. In a convolutional layer with 3 filters, each with the size (3, 2, 2) representing C, H, W, the number
    of parameters in this layer including biases is ____. Answer: 39
34. Ss For a 10-way classification task, there are 100 billion images in the training set, each with the
    size (C, H, W) = (3, 224, 224). After training each of the following models on the task, when a new
    image comes, which one would be the least efficient to infer the label of the new image? Answer:
    A
    a. 10 nearest neighbor classifier
    b. AlexNet
    c. ResNet-50
    d. An MLP with 100 layers, where each layer is in half the size of the previous layer, and the
        minimum size is 16
35. Comparing Ridge regression and Lasso regression, which one(s) can help feature selection?
    Answer: B
    a. Ridge regression (L2)
    b. Lasso regression (L1)
    c. Both
    d. Neither
36. Suppose you have a single neuron with a linear activation function g() as above and input 𝐱 =
    𝑥0 , . . . , 𝑥𝑛 and weights 𝐖 = 𝑊0 , . . . , 𝑊𝑛 . Here is the squared error function ((𝑦 − 𝐖 T 𝐱)2 ) for this
    input and the true output is a scalar y, what is the weight update rule for the neuron based on
    gradient given the learning rate is 𝜆? Answer: A
    a. 𝑊𝑖 ← 𝑊𝑖 + 𝜆2𝑥𝑖 (𝑦 − 𝐖 T 𝐱)
                                            2
    b. 𝑊𝑖 ← 𝑊𝑖 + 𝜆2𝑥𝑖 (𝑦 − 𝐖 T 𝐱) + ||𝐖||
                                         2
    c. 𝑊𝑖 ← 𝑊𝑖 + 𝜆𝑥𝑖 (𝑦 − 𝐖 T 𝐱) + ||𝐖||
    d. 𝑊𝑖 ← 𝑊𝑖 + 𝜆𝑥𝑖
37. For linear regression models, assume we only observe a single input for each output (that is, a
    set of {x, y} pairs). We would like to compare the following two models on our input dataset (for
    each one we split into training and testing set to evaluate the learned model). Assume we have
    an unlimited amount of data:
                                                 𝐴: 𝑦 = 𝑤 2 𝑥
                                                  𝐵: 𝑦 = 𝑤𝑥
    Which of the following is correct (chose the answer that best describes the outcome): Answer: B
    a. There are datasets for which A would perform better than B
    b. There are datasets for which B would perform better than A
    c. Both 1 and 2 are correct.
    d. They would perform equally well on all datasets.
38. Note that model A now has a new form. Again we assume unlimited data. Which of the following
    is correct (chose the answer that best describes the outcome): Answer: D
                                        𝐴: 𝑦 = tan(𝑤) 𝑥 + 𝑤𝑥
                                              𝐵: 𝑦 = 𝑤𝑥
    a.   There are datasets for which A would perform better than B
    b.   There are datasets for which B would perform better than A
    c.   Both 1 and 2 are correct.
    d.   They would perform equally well on all datasets.
39. What is an outlier within the context of machine learning and data mining? Answer: B
    a. An error in data collection
    b. A data point that differs significantly from other observations in the dataset
    c. A data point that lies within the normal range of the distribution
    d. A data point that is the most frequent in the dataset
40. When using the k-nearest neighbors (k-NN) algorithm for outlier detection, how are outliers
    determined? Answer: B
    a. Outliers are the points with the highest density of neighbors
    b. Outliers are the points with the lowest density of neighbors
    c. Outliers are the points that are closest to the center of the dataset
    d. Outliers are the points that are most similar to the k-nearest neighbors
41. Consider a binary classification problem (2 possible classes) on a 2D plane (2 inputs) with a
    circular decision boundary ((𝑥1 − 𝑎)2 + (𝑥2 − 𝑏)2 < 𝑟 2 → 𝑦 = 0; otherwise, 𝑦 = 1; 𝑎, 𝑏, 𝑟 are
    learnable parameters). What is the minimum number of distinct points required to make perfect
    prediction impossible for this classifier? Answer: C
    a. 2
    b. 3
    c. 4
    d. 8
42. Consider a supervised learning problem with MSE loss. If the training error is 0,
    which of the following is true? Answer: D
    a.   Test error will always be 0
    b.   True error on any given data will always be 0
    c.   Both (A) and (B)
    d.   Neither (A) nor (B)
43. Consider an MLP with one hidden layer of size 8, 4 inputs, and 2 outputs. How
    many learnable parameters does this network have? (ignore the bias term; assume
    activation functions don’t have parameters)? Answer: A
    a. 48
    b. 40
    c. 24
    d. 8
44. Consider an MLP with one hidden layer, 2 inputs, and 1 output, but no activation
    after the hidden or the output layer. Which of the following functions can it predict
    accurately (assuming there is enough data and hidden neurons available for convergence)?
    Answer: A
    a. 𝑦 = 𝑥
    b. 𝑦 = |𝑥|
    c. 𝑦 = 𝑥 2
    d. Both (A) and (B)
45. Consider a binary classification problem (2 possible classes) with 0/1 loss (loss = 0 if
    the prediction is correct, loss = 1 otherwise). Can backpropagation + SGD (let us assume
    magically it is differentiable) be used to train a neural network for this problem? Answer: B
    a. Yes, regardless of the output activations or the NN architecture
    b. No, regardless of the output activations or the NN architecture
    c. Yes, but only for some output activations (regardless of the NN architecture)
    d. Yes, but only for certain NN architectures and output activation functions
46. Consider an 8 × 8 input image passed through a CNN with a 1 × 1 filter and stride of
    1. Assume that the convolution operation is followed by an 8 ×8 max pool operation.
    Will output change if pixels in the input image are shuffled without changing the CNN
    weights? Answer: B
    a. Yes
    b. No
    c. Depends on the shuffling
    d. Depends on the weights
47. Which of the following functions are permutation invariant (x1, x2, x3 are inputs)?
    Answer: C
    a. 𝑓(𝑥) = 𝑥1 + 2𝑥2 + 𝑥3
    b. 𝑓(𝑥) = average(𝑥1 , 2𝑥2 , 𝑥3 )
    c. 𝑓(𝑥) = max (relu(𝑥1 ), relu(𝑥2 ), relu(𝑥3 ))
    d. None of above
48. Consider a GNN with the following functions for calculating node embeddings 𝑧𝑣 of node 𝑣:
    Answer: A
    Assume you are solving a problem for which the neighborhood aggregation (AGGREGATE
                                                             (𝑘)
    function above) should weigh the neighbors’ embeddings (ℎ𝑢𝑖 ) based on their distance to the
                                      (𝑘)
    embedding of the current node (ℎ𝑣 ). Is it possible to implement such a function while preserving
    permutation invariance? Answer A or C?
    a. Yes
    b. No
    c. Yes, but only for some distance functions
    d. Yes, but only for some graphs
49. In the context of clustering, what does the term "centroid" refer to? Answer: A
    a. The center point of a cluster in k-Means clustering.
    b. The largest point in a dataset.
    c. The average distance between clusters.
    d. The initial point selected at random in hierarchical clustering.
50. When using the k-means algorithm, if the initial centroids are chosen poorly, which of the
    following may occur? Answer: B
    a. The algorithm will not run
    b. The algorithm may converge to a local minimum
    c. The number of clusters will automatically increase
    d. The algorithm will switch to a hierarchical approach
51. How does the K-nearest neighbors (KNN) algorithm typically handle regression problems?
    Answer: A
    a. By calculating the mean value of the nearest neighbors' labels/values
    b. By taking a majority vote among the labels/values of the nearest neighbors
    c. By treating it as a classification problem and use the value from the most similar neighbor
    d. By using gradient descent to minimize the distance between neighbors
52. The introduction of residual connections in neural networks, as seen in ResNet architectures,
    helps mitigate the vanishing gradient problem. How do these connections work? Answer: A
    a. By allowing gradients to flow through additional paths, bypassing non-linear transformations.
    b. By reducing the depth of the network, thereby shortening the gradient propagation path.
    c. By adding a constant to the gradients at each layer.
    d. By forcing all layers to learn an identity function, making the network effectively shallower.
53. How can gradient clipping help in addressing the vanishing gradient problem? Answer: D
    a. It makes the gradients larger when they are too small.
    b. It prevents gradients from becoming too large, which may be used for vanishing gradients
       with caution.
    c. It helps by normalizing the gradients to a specific range to ensure they neither vanish nor
       explode.
    d. Gradient clipping is not a method used for addressing vanishing gradients.
54. Why does the vanishing gradient problem primarily affect deep networks? Answer: C
    a. Because shallow networks do not use gradient-based learning algorithms
    b. Because deep networks have more parameters and thus higher computational complexity
    c. Because in deep networks, the multiple layers can cause the gradients to become very small,
       exponentially fast as they are propagated backward through each layer
    d. Because deep networks are more prone to overfitting which inherently causes vanishing
       gradients
55. When a CNN is described as being "deep," this refers to which of the following? Answer: C
    a. The number of filters in the convolutional layers.
    b. The size of the filters in the convolutional layers.
    c. The number of convolutional layers in the network.
    d. The amount of pooling layers in the network.
56. Did the instructor mentioned there could be curve for the grade? Answer: C
    a. No. It is clearly stated that there is no curve
    b. No. But there might be random grade bump
    c. Yes. It depends on the final score distribution
    d. Yes. There will be a curve no matter of the score distribution`;

const CONCEPTS = [
  {
    tag: "🗺️ How To Use This",
    title: "What These Two Documents Actually Are",
    body: `This page is built from two files, and it is worth being precise about what each one is, because they are not the same kind of artifact.\n\n<b>The 250-page review deck</b> is the official revision material. It is organised into seven sections that run from evaluation through to graphs, and it traces each idea through a small worked example with every number shown. Crucially, <b>fifteen of its slides are "Check" questions followed by a "Solution" slide</b>, and each one carries a footer saying which archived midterm question it was adapted from — Q6, Q23, Q24, Q26, Q36, Q47, Q51, Q53. He said in class that these practice questions are variations of this year's real exam questions, generated by asking an agent to vary them.\n\n<b>The 56-question paper</b> is, in his words, "a real exam last year." It is 50 questions plus 6 bonus, each worth half a point, open book and open notes, no electronic devices, 112 minutes. The answers are printed on it in red.\n\n<b>Put the two together and you get a mapping.</b> The deck tells you which past questions were worth rebuilding, and the paper tells you what the originals looked like. Where a deck slide cites an archived question, that topic has now appeared twice, which is the strongest signal available about what is coming.\n\n<b>The caveat he gave:</b> last year's paper covered slightly less material and was more narrative in the early blocks, because this year's syllabus changed. So treat the paper as a style and difficulty guide, and the deck as the scope guide.\n\nExam insight: eight distinct archived questions are cited by the deck. Those eight topics are the highest-confidence predictions in this entire study guide — they are drilled in level 14 of the game.`,
  },
  {
    tag: "🗺️ How To Use This",
    title: "The Deck's Own Route Through the Material",
    body: `The deck opens with its own table of contents, and the ordering is deliberate — it moves from judging models to building them to training them to specialising them.\n\n<b>1. Evaluation and Classical ML</b> (slides 4–40). Data splits, generalisation, metrics, decision trees, kNN, k-means.\n<b>2. Forward Computation and CNNs</b> (41–85). Shapes, parameter counts, affine collapse, convolution arithmetic, pooling.\n<b>3. Losses, Gradients and Updates</b> (86–121). Why a loss must be differentiable, the full backpropagation walkthrough, one gradient-descent step.\n<b>4. Reliable Training and Transfer</b> (122–159). Initialisation, batch normalisation, regularisation, dropout, augmentation, early stopping, transfer learning.\n<b>5. Recurrent Memory</b> (160–178). Weight sharing across time, BPTT and truncation, the LSTM cell.\n<b>6. Attention and Transformers</b> (179–205). Position vectors, causal masking, attention weights, parallel training versus sequential generation.\n<b>7. Graphs and Shared Computation</b> (206–249). The message-passing update, invariance and equivariance, adjacency reordering.\n\nHe also published a <b>141-page "core route"</b> through the deck for use in class, listing exactly which slides are on it. The remaining ~109 slides are there for self-study. If you are short on time, the core route is his own ranking of what matters.\n\n<b>One notational warning the deck gives explicitly:</b> some source slides use row vectors (xW) while the new slides use column vectors (Wx). The parameter counts are identical either way — only the order of the symbols changes. Do not let a transposed formula convince you that you have mis-remembered something.\n\nExam insight: the game on this page follows these same seven sections in order, so a level maps to a slide range you can go back to.`,
  },

  // ── Section 1 ────────────────────────────────────────────────────────────
  {
    tag: "1️⃣ Evaluation",
    title: "Three Splits, Three Jobs, and the One That Must Stay Sealed",
    body: `The deck's running example is 120 photos of daisies and tulips from 24 plants, five photos each. The split is <b>16 plants / 80 photos for training, 4 plants / 20 for validation, 4 plants / 20 for test</b>.\n\n<b>Notice what is split: plants, not photos.</b> All five photos of a plant stay together in one split. If you split by photo, a plant could have four photos in training and one in test, and the test score would measure how well the model recognises <i>that plant</i> rather than how well it recognises daisies. The deck states the generalisation target precisely: <b>low error on new data from the same source</b> — unseen plants, same camera, same conditions.\n\n<b>The three jobs.</b> Training data <b>fits parameters</b>. Validation data <b>selects settings</b> — depth, learning rate, which checkpoint. Test data <b>gives a final check</b>, once, after every choice is frozen.\n\nThe deck makes the selection concrete. Candidate A is a depth-2 tree: 8/80 training errors (10%), 3/20 validation errors (15%). Candidate B is depth-10: <b>0/80 training errors (0%)</b>, 5/20 validation errors (25%). <b>You select A.</b> Its validation error is lower, and that is the only comparison that counts. Then A on test: 4/20 errors, <b>20%</b>.\n\nRead that last number carefully. The selected model's test error (20%) is <i>worse</i> than its validation error (15%). That is normal and expected — validation was used to choose, so it is mildly optimistic. The deck's phrase: "Test is not used to switch candidate."\n\nExam insight: "lower training error but worse validation error" is the signature of overfitting, and it kills three of four options on the pruning question instantly.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "Preprocessing Statistics Travel From Training",
    body: `This is one of the most reliably tested ideas in the course, and the deck gives it a slide of its own plus an archived exam question (Q22 on the paper).\n\n<b>The rule: fit on training data only, then apply unchanged everywhere.</b>\n\nThe worked example centres a pixel-intensity feature. The mean over all 80 training photos is <b>100</b>. That produces a stored rule, <b>x → x − 100</b>, and the stored rule is then applied without modification:\n\n• Training photo 120 → <b>20</b>\n• Validation photo 130 → <b>30</b>\n• Test photo 90 → <b>−10</b>\n\nThe deck adds a clarifying footnote that is easy to skim past: <i>"Outputs are centered feature values, not prediction errors."</i> The −10 is a feature value, not a mistake.\n\n<b>Why it matters.</b> If you recompute the mean on the test set, information from the test set has entered the model. The test score then no longer measures performance on unseen data. On the archived paper the four options are training-only, validation-only, train+validation, and everything-including-test — and the answer is <b>training only, to avoid data leakage</b>.\n\nIn the Oct 26 lecture he worked the same idea with the trap number attached: the test set's own mean is 113.33, which would turn 130 into 16.7. That wrong answer is as tidy as the right one, which is exactly why it makes a good distractor.\n\nExam insight: the rule covers every fitted statistic — means, standard deviations, min/max for scaling, vocabulary, PCA components. All of them are parameters, and parameters come from training data.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "Bias, Variance, and Four Training Sets",
    body: `The deck sets this up carefully: imagine drawing <b>four independent training sets D₁–D₄ from one source</b>, fitting the same recipe on each, and asking all four fitted models to predict at the same input x₀. The noise-free target is <b>10</b>.\n\n<b>Recipe A.</b> The four predictions cluster tightly, around 6. Mean 6, target 10. <b>Low variance, high bias</b> — consistently wrong in the same direction.\n<b>Recipe B.</b> The four predictions scatter widely but straddle the target. Mean 10, target 10. <b>Low bias, high variance</b> — right on average, unreliable on any single run.\n\nThe pairing you need: <b>high variance goes with overfitting, high bias goes with underfitting.</b>\n\nThe deck then gives the diagnostic table, and phrases it with unusual care — these are <i>"a first thing to try, not a proven cause"</i>:\n\n• <b>Training and validation errors both high</b> → too rigid, weak features, or incomplete training → inspect the fit and the features, consider more capacity.\n• <b>Training low, validation much higher</b> → the model is fitting training-specific details → more data, regularisation, or a simpler model.\n\nAnd a caveat on the standard remedy: <b>averaging an ensemble may reduce variability, but correlated member errors limit the benefit.</b> Three trees that all make the same mistake average to that same mistake. The deck's ensemble example — three trees predicting 2, 5 and 8, averaging to <b>5</b> — notes that resampling the training data is what makes the trees differ in the first place.\n\nExam insight: in the Oct 19 lecture he said "we don't have a deep question on this at all" about bias–variance, including it because old-school interviewers ask. Know the pairing; don't over-invest.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "The 98% Accuracy Trap, and Precision Versus Recall",
    body: `<b>1,000 parts. 20 defective, 980 good.</b> A rule that always predicts "good" never flags anything, and scores <b>980/1000 = 98% accuracy</b> while catching <b>0 of 20</b> defects. Recall is 0%.\n\nThe deck adds a detail worth having: <b>precision is undefined</b> here, not zero. Nothing was flagged, so the denominator is 0, and 0/0 has no value. It warns explicitly to "be careful of division by 0."\n\n<b>The formulas.</b>\n• Accuracy = correct / total\n• <b>Precision = TP / (TP + FP)</b> — of what you flagged, how much was right\n• <b>Recall = TP / (all actual positives)</b> — of what was really there, how much you caught\n• <b>F1 = 2pr / (p + r)</b>, the harmonic mean\n\nThe worked counts: <b>TP 16, FP 24, FN 4, TN 956</b>. Precision = 16/40 = <b>40%</b>. Recall = 16/20 = <b>80%</b>. The deck's framing of why these differ is the clearest sentence in the section: <i>both fractions share the numerator 16 but divide by different groups — the 40 flagged parts versus the 20 defective parts.</i>\n\n<b>Moving the threshold.</b> At threshold 0.2, 80 parts are flagged (19 true, 61 false): precision 23.75%, recall 95%, 1 defect missed. At threshold 0.8, 12 flagged (9 true, 3 false): precision 75%, recall 45%, 11 missed. The rule: <b>lowering the threshold cannot reduce recall, but precision can move either way.</b>\n\n<b>Which metric leads?</b> For a defect flagger where a miss ships to a customer and a false alarm costs one manual review: <b>recall leads, with precision tracked</b> so the review workload stays manageable. Not accuracy (high while missing everything), not precision (limits the cheap error), not specificity (counts good parts).\n\nExam insight: any question with a rare positive class is testing whether you reach for accuracy. Don't.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "Decision Trees: Pruning, Depth, and Leaf Counts",
    body: `<b>What pruning is for.</b> The archived paper asks directly, and the answer is <b>to reduce the depth of the tree and prevent overfitting</b> — not to optimise parameters by L2 (trees have no such parameters), not to handle missing data, not primarily for interpretability.\n\n<b>The selection rule.</b> An unpruned tree with zero training error and high validation error has overfitted. Choose the pruning depth by <b>validation</b> error. Three wrong options die to that one observation: "zero training error means it generalises well" (contradicted), "minimise training error to pick the depth" (that returns the unpruned tree, since training error only falls with depth), and "choosing depth on test keeps the estimate unbiased" (that is exactly what biases it). What survives is the cautious claim: <b>the selected tree can still have non-zero test error</b>. The deck names the trap by name — <i>"Common error: reading validation-based selection as a guarantee."</i>\n\n<b>The counting questions</b> (archived Q27–Q30). N samples, k attributes, depth = maximum number of nodes between root and any leaf, including the leaf, not the root.\n• All attributes <b>binary</b>: maximum leaves = <b>2^k</b>; maximum depth = <b>O(k)</b>. Each attribute can be split on once along a path, so a path is at most k long and the tree is a full binary tree.\n• All attributes <b>continuous</b>: maximum leaves = <b>N</b>; maximum depth = <b>N − 1</b>. A continuous attribute can be split repeatedly at different thresholds, so the limit comes from the data, not the features — you cannot have more leaves than samples.\n\n<b>Disadvantage to know:</b> decision trees are <b>prone to overfit</b>. They do not lack interpretability (that is a strength) and they are not costly to run compared to kNN (kNN defers all its work to query time).\n\nExam insight: the binary-versus-continuous distinction is the whole trick in those four questions. Binary caps the path length; continuous caps the leaf count.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "kNN: Vote or Average, and Why It Learns Nothing",
    body: `<b>The one distinction that decides the question.</b> If the neighbours carry <b>labels</b>, take the majority <b>vote</b> — that is classification. If they carry <b>values</b>, take the <b>mean</b> — that is regression. The archived paper asks this directly (Q51) and the deck rebuilt it as a Check slide.\n\n<b>The regression example:</b> unweighted kNN, k = 3, neighbour targets 2, 5 and 11. Prediction = (2 + 5 + 11)/3 = <b>6</b>. The deck names all three wrong answers and what each mistake is: <b>18 forgets to divide by k, 5 takes the median, 11 takes the largest</b>.\n\n<b>The classification example:</b> neighbours sorted by increasing distance are purple, orange, purple, orange, orange. k = 1 → purple. k = 3 → purple, 2 to 1. <b>k = 5 → orange, 3 to 2.</b> The flip is the lesson. Small k overfits (one noisy neighbour decides), large k underfits (the local structure washes out). Choose k by validation.\n\n<b>kNN has zero learnable parameters.</b> The archived paper asks: 100 instances, each a 64-dimensional vector, 3-nearest-neighbour — how many parameters to learn? <b>0.</b> The model <i>is</i> the training set. Nothing is fitted; k and the distance metric are hyperparameters you choose, not parameters that are learned.\n\n<b>The cost is deferred, not avoided.</b> Another archived question asks which model is <b>least efficient at inference</b> among a 10-NN classifier, AlexNet, ResNet-50 and a 100-layer MLP, with 100 billion training images. The answer is the <b>10-NN classifier</b>: it must compare the new image against every stored example. A neural network's inference cost is fixed by its architecture no matter how much data trained it; kNN's grows with the dataset.\n\n<b>kNN for outlier detection:</b> outliers are the points with the <b>lowest density of neighbours</b> — far from everything else.\n\nExam insight: "how many parameters does kNN learn" and "which is slowest at inference" are the same fact asked from two directions.`,
  },
  {
    tag: "1️⃣ Evaluation",
    title: "k-Means: The Objective, and Why Two Runs Disagree",
    body: `<b>The four steps.</b> (1) Initialise k cluster centres. (2) Assign each observation to the closest centre. (3) Revise each centre as the <b>mean</b> of the points assigned to it. (4) Repeat 2 and 3 until convergence. It is <b>unsupervised</b> — no labels are provided, and the cluster label zᵢ is <i>inferred</i>, unlike a supervised yᵢ which is given.\n\n<b>A centroid</b> is the centre point of a cluster — the mean of its members. Not the largest point, not an average distance between clusters.\n\n<b>The objective.</b> k-means scores a clustering by the <b>total squared distance from points to their assigned centres</b>. The deck's example: points 1, 5, 6 assigned to centre 4. The centre is their mean, (1+5+6)/3 = 4. J = (1−4)² + (5−4)² + (6−4)² = 9 + 1 + 4 = <b>14</b>. With the assignments held fixed, the mean is exactly the value that minimises this sum — which is why step 3 uses the mean and not the median or anything else.\n\n<b>Two runs, two answers.</b> Same data {1, 3, 5, 9}, same k = 2.\n• <b>Run A:</b> {1,3} and {5,9}, centres 2 and 7. J = 1 + 1 + 4 + 4 = <b>10</b>.\n• <b>Run B:</b> {1,3,5} and {9}, centres 3 and 9. J = 4 + 0 + 4 + 0 = <b>8</b>.\n\nBoth have converged — repeating the assign-and-average steps changes neither. B has the lower objective, so B wins this comparison. The deck's closing caution: <b>comparing two converged runs does not prove global optimality.</b> There may be a third, better clustering that neither run found.\n\nThis is why poor initial centroids matter: the algorithm <b>may converge to a local minimum</b>. It will still run, the number of clusters will not change, and it will not switch to a hierarchical approach — it just lands somewhere worse. Implementations run it several times with different seeds and keep the best.\n\nExam insight: the objective is <i>squared</i> distance. If a question offers plain distance as the k-means criterion, that is the distractor.`,
  },

  // ── Section 2 ────────────────────────────────────────────────────────────
  {
    tag: "2️⃣ Shapes & CNNs",
    title: "Counting Parameters in a Dense Network",
    body: `The deck gives two versions, and the difference between them is the whole exam question.\n\n<b>With biases.</b> Widths 2, 3, 1. W₁ is 3 × 2 = 6 weights, b₁ is 3. W₂ is 1 × 3 = 3 weights, b₂ is 1. Total <b>6 + 3 + 3 + 1 = 13</b>. The rule: a dense layer from m inputs to n units has <b>m × n weights plus n biases</b> — <i>one bias per unit</i>, not one per layer.\n\n<b>Without biases.</b> Widths 3, 4, 4, 2. Just the products: 3×4 + 4×4 + 4×2 = 12 + 16 + 8 = <b>36</b>.\n\n<b>Now double both hidden widths</b> to 3, 8, 8, 2: 3×8 + 8×8 + 8×2 = 24 + 64 + 16 = <b>104</b>. Not 72. The deck names both wrong answers: <i>"72 doubles 36 and 144 quadruples it. Only the hidden-to-hidden layer grows fourfold."</i> A layer sitting between two doubled widths quadruples; a layer with one doubled side merely doubles.\n\n<b>The archived version</b> (Q24) is the same question phrased as a ratio: input 10, hidden 20 and 20, output 10, no biases. Original = 200 + 400 + 200 = 800. Doubled = 400 + 1600 + 400 = 2400. The ratio is <b>3</b>, not 2 and not 6. Worth doing both ways — the ratio form hides the arithmetic.\n\n<b>Other counts on the paper:</b> an MLP with 4 inputs, one hidden layer of 8, and 2 outputs, no biases → 4×8 + 8×2 = <b>48</b>. And the deck's shape walkthrough: 28×28 images are <b>784 features</b>, so a 128-unit first hidden layer has a <b>784 × 128</b> weight matrix, and [1×784]·[784×128] = 1×128 outputs. A second 128-unit layer is <b>128 × 128</b>.\n\n<b>What has no parameters:</b> activation functions, flattening, pooling. The deck's footnote: <i>"Inputs and activations are recomputed per example, and ReLU has no trainable parameters."</i>\n\nExam insight: read the bias clause before you compute anything. It is the single most common reason a correct method gives a wrong number.`,
  },
  {
    tag: "2️⃣ Shapes & CNNs",
    title: "Stacked Affine Layers Collapse",
    body: `Without a nonlinearity between them, <b>two affine layers are exactly one affine layer</b>.\n\nThe algebra: h = W₁x + b₁ and y = W₂h + b₂ give <b>y = (W₂W₁)x + (W₂b₁ + b₂)</b>. The combined weight is W₂W₁ and the combined bias is W₂b₁ + b₂. Both are just matrices and vectors, so the composition is a single affine map.\n\nThe deck's numeric version makes it undeniable: <b>h = 3x + 2, y = 2h − 1 ⇒ y = 6x + 3</b>. Two layers, one line.\n\n<b>So depth without nonlinearity buys nothing.</b> A hundred stacked linear layers compute the same family of functions as one. The capacity you think you are adding does not exist. The CS231n slide the deck borrows puts it bluntly: <i>"We end up with a linear classifier again! Neural networks need this non-linearity!"</i>\n\n<b>The archived paper asks the converse</b> (Q12): why is nonlinearity essential? The answer is that it <b>lets the network learn complex patterns that cannot be represented with linear models</b>. The distractors are all inverted or irrelevant — that nonlinearity allows computing <i>only</i> linearly separable functions (backwards), that it makes binary classification more efficient, that it speeds up training.\n\n<b>And the consequence</b> (Q44): an MLP with one hidden layer, two inputs, one output and <b>no activation anywhere</b> can accurately predict <b>y = x</b> — and nothing else on the list. Not |x|, not x². Both of those need a nonlinearity, and |x| in particular is the canonical thing ReLU can build and a linear map cannot.\n\n<b>Why ReLU counts as nonlinear</b> (Q11): because it <b>introduces a point of non-linearity at zero, where the function changes slope</b>. Not because it outputs only positive values, and not merely because it is piecewise — the kink is the point.\n\nExam insight: this idea is flagged in Lectures 3 and 7 and again in the review. Three appearances is as strong a signal as the course gives.`,
  },
  {
    tag: "2️⃣ Shapes & CNNs",
    title: "Convolution Arithmetic: Output Size and Parameter Count",
    body: `<b>Four symbols.</b> n = input width before padding, p = zero cells added on <i>each</i> side, k = window width, s = step between window starts. The deck warns that lowercase n is a spatial length while uppercase N usually means batch size.\n\n<b>Output width = (n + 2p − k)/s + 1.</b>\n\nThe worked case: n = 9, p = 1, k = 3, s = 2. Padded indices run 0 to 10. Valid window starts are 0, 2, 4, 6, 8 — five of them. (9 + 2 − 3)/2 + 1 = 4 moves plus the first window = <b>5 outputs</b>. If the division does not come out whole, the configuration does not tile the input evenly.\n\n<b>Inverting it</b> (archived Q26, rebuilt as a Check slide). A 24×24×2 input, square K×K kernel, stride 1, padding 0, giving 22×22×5. Using 24 − K + 1: K = 2, 3, 5, 7 give 23, 22, 20, 18. <b>Only K = 3 works.</b> The deck names the trap: <i>"choosing 5 from the 5 output channels. Channel counts do not enter the spatial formula."</i> The original paper version has input (32,32,3) → output (28,28,4), so the kernel side is 32 − 28 + 1 = 5 and the answer in (Cin, Kh, Kw, Cout) form is <b>(3, 5, 5, 4)</b>.\n\n<b>Parameter count: F² × Cin × K + K</b>, where K is the number of filters.\n\n<b>A filter always spans the full input depth.</b> Two 3×3 filters over 3 channels: each is 3 × 3 × 3 = <b>27 weights + 1 bias = 28</b>, so two filters give <b>56</b>. The deck's key observation: <i>"A larger input image reuses the same 56 parameters at more positions."</i> Parameter count is independent of input size — that is what weight sharing means.\n\n<b>The size table</b> (3 input channels, 2 filters, one bias each): 1×1 → <b>8</b> parameters, 3×3 → <b>56</b>, 5×5 → <b>152</b>.\n\n<b>From the paper:</b> a single 1×1 filter on a 64×64×3 input with no bias has <b>3</b> parameters. And 3 filters of size (C,H,W) = (3,2,2) with biases: 3 × (3·2·2) + 3 = 36 + 3 = <b>39</b>.\n\nExam insight: he said in Lecture 4 that output-size calculation with stride and padding is something "we usually test." It is in the deck twice.`,
  },
  {
    tag: "2️⃣ Shapes & CNNs",
    title: "What a 1×1 Convolution Is For",
    body: `A 1×1 convolution looks like it should do nothing. It does something specific and useful: <b>it mixes channels at a single spatial position</b> and never reads a neighbour.\n\nThe deck's example has 2 input channels, 1 output channel, weights (1, 2) and bias −1:\n• Position 1 holds channel values (2, 5) → 1×2 + 2×5 − 1 = <b>11</b>\n• Position 2 holds (4, 1) → 1×4 + 2×1 − 1 = <b>5</b>\n\nEach output depends only on the channel stack directly beneath it. It is a learned linear combination across depth, applied identically at every position.\n\n<b>Why that is worth doing: cost.</b> Take an 8×8×64 feature map and suppose you want 32 output channels from a 3×3 convolution.\n• <b>Direct 3×3, 64 → 32:</b> 3 × 3 × 64 × 32 + 32 = <b>18,464</b> parameters.\n• <b>Bottleneck — 1×1 to squeeze 64 → 16, then 3×3 for 16 → 32:</b> (1 × 1 × 64 × 16 + 16) + (3 × 3 × 16 × 32 + 32) = 1,040 + 4,640 = <b>5,680</b>.\n\nAbout a third of the parameters for the same output shape. This is the bottleneck pattern inside ResNet and Inception. The deck is careful to add: <i>"Fewer parameters; the two paths can represent different functions."</i> It is a trade, not a free lunch.\n\n<b>What changes when you only change the filter count.</b> A 3×3 layer (stride 1, padding 1) mapping 8×8×64 → 8×8×16, with the filter count raised from 16 to 24: <b>output channels become 24, while height, width and each filter's 3×3×64 shape stay the same</b>. One filter makes one output channel. Height and width depend on kernel, stride and padding — none of which changed. And in standard convolution <i>every</i> filter spans all 64 input channels, always.\n\nExam insight: "how many parameters does this layer have" and "what changes if I add filters" are the two shapes this idea takes. Both reduce to: one filter, one output channel, full depth.`,
  },
  {
    tag: "2️⃣ Shapes & CNNs",
    title: "Pooling: No Parameters, and Max Is Not Linear",
    body: `<b>Max pooling, 2×2 filters, stride 2</b>, on the deck's grid:\n\n<code>1 1 2 4</code> → the four 2×2 windows give\n<code>5 6 7 8</code> &nbsp;&nbsp;max(1,1,5,6) = <b>6</b>, max(2,4,7,8) = <b>8</b>,\n<code>3 2 1 0</code> &nbsp;&nbsp;max(3,2,1,2) = <b>3</b>, max(1,0,3,4) = <b>4</b>\n<code>1 2 3 4</code>\n\nTwo properties the deck states on the slide: <b>no learnable parameters</b>, and <b>some invariance to small shifts</b> within the window.\n\n<b>Max pooling is not linear.</b> Linearity requires f(u + v) = f(u) + f(v). Take u = (2, 0) and v = (0, 3). max(u) + max(v) = 2 + 3 = <b>5</b>. max(u + v) = max(2, 3) = <b>3</b>. Five is not three, so max fails additivity and is therefore non-linear. The deck's framing is precise: <i>"Additivity is a necessary test of linearity: a linear map must pass it. Max pooling fails."</i>\n\n<b>Average pooling IS linear</b> — a mean over fixed entries is a weighted sum. So the contrast is: max pooling contributes non-linearity, average pooling does not, and <i>neither</i> has trainable parameters. On the archived paper (Q31) the question is which layer is <b>not</b> a linear operation, and the answer is the <b>ReLU layer</b> — with convolution, pooling (average, in that framing) and batch normalisation all being linear operations in the sense intended.\n\n<b>Are pooling layers necessary?</b> (Q10). <b>No</b> — they are primarily for <b>reducing dimensionality and preventing overfitting</b>. Not for keeping spatial correlation, not to avoid vanishing gradients, and not primarily to amplify non-linearity. Modern architectures often replace them with strided convolutions.\n\n<b>Runtime</b> (Q2): among a conv layer, max pooling, sigmoid activation and batch normalisation, <b>max pooling is the fastest</b> in floating-point operations. It only compares; it never multiplies.\n\nExam insight: "no learnable parameters" and "max is non-linear" are both true and are often offered as competing options. Read which one the question actually asked for.`,
  },

  // ── Section 3 ────────────────────────────────────────────────────────────
  {
    tag: "3️⃣ Gradients",
    title: "Why a Loss Must Be Differentiable",
    body: `The deck builds this with a spam classifier. A model outputs a real-valued score s — <i>not</i> a probability — and predicts spam when s ≥ 0. The email is known spam, so the target is y = 1.\n\n<b>Under 0/1 mistake loss:</b> score −2 → predicts not-spam → loss 1. Score −1 → predicts not-spam → loss 1. Score +2 → predicts spam → loss 0.\n\n<b>The problem is in the middle row.</b> Moving the score from −2 to −1 is real improvement — the model is now much closer to the correct side. The loss does not notice. It stays at exactly 1.\n\nPlotted, the 0/1 loss is two flat shelves with a cliff at s = 0. On the flats, <b>slope = 0</b>: no gradient, so nothing tells the optimiser which way to move. At the jump, <b>slope undefined</b>: the chain rule cannot pass through. There is no usable signal anywhere.\n\n<b>Contrast with squared loss.</b> Target t = 2, L = (ŷ − t)²:\n• ŷ = 0 → L = 4, slope <b>−4</b>\n• ŷ = 1 → L = 1, slope <b>−2</b>\n• ŷ = 3 → L = 1, slope <b>+2</b>\n\nNow every point carries direction <i>and</i> magnitude. A negative slope says raise ŷ; a positive slope says lower it. And the magnitude shrinks as you approach the target, which naturally slows the steps near the minimum.\n\n<b>The archived question</b> (Q45) asks whether backprop + SGD can train a network under 0/1 loss, even granting magical differentiability. The answer is <b>no, regardless of the output activations or the architecture</b>. The gradient is zero almost everywhere; no architecture rescues that.\n\nExam insight: this is why cross-entropy replaces accuracy as a training objective. Accuracy is the thing you care about; cross-entropy is the thing you can optimise.`,
  },
  {
    tag: "3️⃣ Gradients",
    title: "The Full Backpropagation Walkthrough — Forward Pass",
    body: `The deck spends nine slides on <b>one</b> network and carries it all the way from forward pass to updated weights. This is the most sustained worked example in the whole deck, and it is worth knowing cold.\n\n<b>The network.</b> Two inputs, two ReLU hidden units, one linear output. <b>x₁ = 1, x₂ = 2</b>, target <b>t = 2</b>, loss L = (ŷ − t)².\n\n<b>Parameters.</b> Hidden unit 1: weights (1, 0.5), bias −0.5. Hidden unit 2: weights (−1, 1), bias 0. Output weights v₁ = 1, v₂ = −0.5, output bias c = 0.\n\n<b>Hidden pre-activations.</b>\nz₁ = 1(1) + 0.5(2) − 0.5 = <b>1.5</b> → h₁ = ReLU(1.5) = <b>1.5</b>\nz₂ = −1(1) + 1(2) + 0 = <b>1</b> → h₂ = ReLU(1) = <b>1</b>\n\n<b>Output.</b> ŷ = v₁h₁ + v₂h₂ + c = 1(1.5) + (−0.5)(1) + 0 = <b>1.0</b>\n\n<b>Loss.</b> L = (1 − 2)² = <b>1</b>\n\nThe deck's instruction for reading the diagram is good discipline for any such question: <i>"All values live on the object that uses them — inputs in the input nodes, weights on their edges, biases beside hidden nodes, target beside the output. Read each multiplication from an edge and each sum at the receiving node."</i>\n\n<b>Note that both z values are positive</b>, so both ReLUs are in their active region and ReLU′ = 1 for both. That matters in the backward pass — if either had been negative, its gradient path would be dead.\n\nExam insight: forward-pass-by-hand questions are reliably on the paper. The method is mechanical; the errors come from losing track of which weight sits on which edge.`,
  },
  {
    tag: "3️⃣ Gradients",
    title: "The Backward Pass — All Nine Gradients",
    body: `Same network, same forward pass (ŷ = 1, t = 2, L = 1). Backpropagation now works right to left.\n\n<b>Start at the output.</b> e = ŷ − t = 1 − 2 = <b>−1</b>. With L = e², ∂L/∂ŷ = 2e = <b>−2</b>. Negative, so raising ŷ a little lowers the loss — which is right, since ŷ is 1 and the target is 2.\n\n<b>Output layer.</b> Each gradient is the upstream signal times whatever that parameter multiplies:\n∂L/∂v₁ = (−2)(h₁) = (−2)(1.5) = <b>−3</b>\n∂L/∂v₂ = (−2)(h₂) = (−2)(1) = <b>−2</b>\n∂L/∂c = (−2)(1) = <b>−2</b>\n\n<b>Back to the hidden units.</b> ∂L/∂h₁ = (−2)(v₁) = (−2)(1) = <b>−2</b>. ∂L/∂h₂ = (−2)(v₂) = (−2)(−0.5) = <b>+1</b>. Note the sign flip — v₂ is negative, so hidden unit 2 wants to move the other way.\n\n<b>Through the ReLU.</b> z₁ = 1.5 and z₂ = 1 are both positive, so ReLU′ = 1 on both paths and the signal passes unchanged. Writing δᵢ = ∂L/∂zᵢ: <b>δ₁ = −2, δ₂ = +1</b>.\n\n<b>First-layer weights.</b> ∂L/∂wᵢⱼ = δᵢ × xⱼ, giving\n∂L/∂W = <b>[ −2, −4 ; +1, +2 ]</b> &nbsp;&nbsp;and&nbsp;&nbsp; ∂L/∂b = <b>(−2, +1)</b>\n\nThe deck points out a structural check: <b>column 2 is exactly 2× column 1, because x₂ = 2x₁.</b> If your two columns are not in the input ratio, you have made an arithmetic slip.\n\n<b>All nine, in one table:</b> w₁₁ = −2, w₁₂ = −4, w₂₁ = +1, w₂₂ = +2, b₁ = −2, b₂ = +1, v₁ = −3, v₂ = −2, c = −2.\n\nExam insight: every one of these comes from the <i>same</i> forward pass. Nothing is recomputed partway through — that is what makes backprop one sweep rather than nine.`,
  },
  {
    tag: "3️⃣ Gradients",
    title: "One Update, and Proof That the Loss Fell",
    body: `Same nine gradients, learning rate <b>η = 0.05</b>, update new = old − η × gradient.\n\n| parameter | old | gradient | new |\n| w₁₁ | 1 | −2 | <b>1.10</b> |\n| w₁₂ | 0.5 | −4 | <b>0.70</b> |\n| w₂₁ | −1 | +1 | <b>−1.05</b> |\n| w₂₂ | 1 | +2 | <b>0.90</b> |\n| b₁ | −0.5 | −2 | <b>−0.40</b> |\n| b₂ | 0 | +1 | <b>−0.05</b> |\n| v₁ | 1 | −3 | <b>1.15</b> |\n| v₂ | −0.5 | −2 | <b>−0.40</b> |\n| c | 0 | −2 | <b>0.10</b> |\n\nNotice the signs: every parameter with a <i>negative</i> gradient went <b>up</b>, and every parameter with a positive gradient went down. Subtracting a negative adds. That is the single most tested consequence of the update rule.\n\n<b>Now re-run the network with the new weights.</b>\nh₁ = ReLU(1.10 + 1.40 − 0.40) = <b>2.10</b>\nh₂ = ReLU(−1.05 + 1.80 − 0.05) = <b>0.70</b>\nŷ = 1.15(2.10) − 0.40(0.70) + 0.10 = <b>2.235</b>\nL = (2.235 − 2)² = <b>0.055225</b>\n\n<b>The old loss was 1. The new loss is 0.055.</b> One step took it down by a factor of about eighteen, and the prediction moved from 1 past the target to 2.235. That overshoot is itself instructive — a single step is not guaranteed to land <i>on</i> the target, only to move downhill locally.\n\n<b>The single-path version</b> the deck also gives, for the chain rule in isolation: w = 1, b = −1, x = 3, so z = 2, h = ReLU(2) = 2, v = 2, ŷ = 4, t = 2, and L = ½(ŷ − t)² = 2. Then <b>∂L/∂w = (4 − 2) × 2 × 1 × 3 = 12</b> — four factors: error, output weight, ReLU′, input. The deck flags the convention beside it: <b>L = e² gives ∂L/∂ŷ = 2e, while L = ½e² gives ∂L/∂ŷ = e.</b>\n\nExam insight: that ½ convention is a live trap. Read the loss as written, not as remembered.`,
  },
  {
    tag: "3️⃣ Gradients",
    title: "One SGD Step on a Squared Loss",
    body: `This is archived Q36, rebuilt as a Check slide, and it is the single most likely numeric question on the paper.\n\n<b>Setup.</b> The model predicts wx. The loss is <b>(wx − y)², with no ½ factor</b>. Values: x = 3, y = 5, w = 1, learning rate 0.05.\n\n<b>Differentiate first.</b> dL/dw = 2(wx − y)x. The chain rule brings down a 2 because there is no ½ to cancel it.\n<b>Substitute.</b> wx − y = 3 − 5 = −2, so dL/dw = 2(−2)(3) = <b>−12</b>.\n<b>Step.</b> w ← 1 − 0.05(−12) = 1 + 0.6 = <b>1.6</b>.\n\n<b>Sanity check:</b> the prediction rises from 3 to 4.8, moving toward the target 5. The exact solution is w = y/x = 5/3 ≈ 1.667, and 1.6 is closer to that than 1 was.\n\n<b>The deck names all three wrong answers and what each mistake is:</b>\n• <b>1.3</b> — adds a ½ factor to the loss. The gradient becomes −6 and the step becomes 0.3.\n• <b>0.4</b> — flips the update sign, doing w + ηg instead of w − ηg. That climbs the loss.\n• <b>−0.6</b> — reports 0.05 × (−12), the <i>step size</i>, instead of the new weight.\n\nAll three are reachable by a small slip, and all three will be sitting in the options.\n\n<b>The companion idea</b>, which the deck gives its own Check slide: <b>reading the sign of a gradient</b>. With w ← w − η(dL/dw), η > 0 and dL/dw < 0, the weight <b>increases, because raising w lowers the loss locally</b>. The three distractors are worth knowing because each is a distinct misunderstanding: that a negative slope means raising w <i>raises</i> the loss (backwards), that a negative slope signals a minimum (a minimum has <i>zero</i> slope), and that η flips sign (it never does — the minus is already in the rule).\n\n<b>And the simplest form of all:</b> current weight 2.0, gradient −0.5, learning rate 0.1 → new weight = 2.0 − 0.1(−0.5) = <b>2.05</b>.\n\nExam insight: three appearances across the deck and the paper. Practise it until the sign handling is automatic.`,
  },

  // ── Section 4 ────────────────────────────────────────────────────────────
  {
    tag: "4️⃣ Reliable Training",
    title: "Why Identical Weights Stay Identical",
    body: `<b>Two hidden units that start identical stay identical forever.</b> Same inputs and same parameters produce the same output, so they receive the same gradient, so they take the same update. Nothing ever distinguishes them.\n\nThe deck makes it numeric. Two units computing h = w·x, both with w = 0.4, input x = 2, so h₁ = h₂ = 0.8. Suppose dL/dh = 1 for each, so dL/dw = 2 for each. One SGD step at rate 0.1: <b>0.4 − 0.1(2) = 0.2</b> for both. Still identical, now at 0.2, computing h = 0.4 each.\n\nA 200-unit layer initialised this way has the expressive power of <b>one</b> unit. Randomness is not a refinement — being <i>different</i> is the requirement. The deck's contrast: start them at w₁ = 0.3 and w₂ = 0.7 and you get h₁ = 0.6, h₂ = 1.4 — two different computations, which is the point.\n\n<b>Zero initialisation is worse.</b> The archived paper asks it directly (Q3): all parameters initialised to zero, forward propagate a batch, backpropagate, update — what is true of W[1] afterwards? The answer is that entries <b>may be positive or negative</b>. The subtlety: with W₂ = 0, the gradient reaching the first layer is zero, so W[1] cannot move on the first step — but the output layer <i>can</i> move, and once it is non-zero the first layer starts receiving signal with whatever signs the data produce. So "all zeros" and "all positive" and "all negative" are each too strong.\n\n<b>The named schemes:</b> small random numbers, <b>Xavier</b>, and <b>He / Kaiming</b>, which is the ReLU-aware scale. He's extra factor of 2 compensates for ReLU discarding the negative half of the distribution.\n\n<b>What initialisation is not:</b> the paper asks (Q18) which of model pruning, L2, random weight initialisation and data augmentation is <b>not</b> a regularisation technique. It is <b>random weight initialisation</b> — necessary for training to work at all, but it does not constrain the hypothesis class.\n\nExam insight: symmetry breaking and zero-init are two different questions with two different answers. Identical constants → stay identical. All zeros → the first layer is stuck for one step, then frees up.`,
  },
  {
    tag: "4️⃣ Reliable Training",
    title: "Batch Normalization: Two Stages, Two Modes",
    body: `<b>Stage 1: standardise.</b> Subtract a mean, divide by a scale estimate. The deck's example takes one feature across four examples — 2, 4, 6, 8. Mean = 5, variance = 5. Subtracting gives −3, −1, 1, 3; dividing by √5 gives <b>−1.34, −0.45, 0.45, 1.34</b>.\n\n<b>Stage 2: learned scale and shift.</b> Multiply by γ and add β, both learned. The deck's two-stage example: input x = 7, μ = 3, σ² = 4, ε = 0. Normalised: (7 − 3)/√4 = <b>2</b>. Then with γ = 0.5, β = −1: 0.5(2) − 1 = <b>0</b>.\n\n<b>The deck's caution about what normalising does NOT do:</b> centring and scaling do <i>not</i> force an arbitrary distribution to become Gaussian. You get mean 0 and unit scale; you do not get a bell curve.\n\n<b>Training mode versus evaluation mode — this is the tested part.</b>\n• <b>Training:</b> use mini-batch statistics, update the running estimates, learn γ and β.\n• <b>Evaluation:</b> use the <b>stored running statistics</b>, keep the same learned γ and β.\n\nThe deck demonstrates why with the same photo x = 7 placed in two different batches. In (wrong) training mode with companion 3: μ = 5, giving (7−5)/√4 = <b>1</b>. With companion 11: μ = 9, giving <b>−1</b>. Same photo, two different activations, depending on what else happened to be in the batch. In evaluation mode with stored mean 3 and variance 4, it is <b>2</b> either way. <i>Evaluation must be deterministic</i>, and at test time you may be classifying one photo at a time with no batch to compute from.\n\n<b>The full archived question</b> (Q23, rebuilt as a Check slide): stored running mean 4, running variance 9, γ = 2, β = −1, ε = 0, input 10. Normalise: (10 − 4)/√9 = 6/3 = 2. Scale and shift: 2(2) − 1 = <b>3</b>. The deck names the slips: <b>2 stops after normalising, 4 skips β, and 5 uses β = +1.</b>\n\nOne more from the paper: when the batch size equals the entire dataset, batch normalisation on the input is equivalent to performing <b>L2 normalisation</b> on the input.\n\nExam insight: he put a wrong batch-norm slide up in the Oct 26 lecture and corrected it live. Two appearances in the deck plus a live correction is about as loud as a signal gets.`,
  },
  {
    tag: "4️⃣ Reliable Training",
    title: "Regularization: L2, L1, and What They Prefer",
    body: `<b>The objective: data loss + λ × weight penalty.</b> The data loss rewards fitting labels; the penalty constrains the weights. λ controls the trade-off and is a <b>hyperparameter chosen on validation data</b>.\n\n<b>The L2 comparison.</b> Two weight vectors with identical data loss 0.4, λ = 0.2, and J(w) = data loss + λΣwᵢ²:\n• <b>A = (3, 0):</b> 0.4 + 0.2(9) = <b>2.2</b>\n• <b>B = (2, 1):</b> 0.4 + 0.2(5) = <b>1.4</b>\n\nB wins, and the data loss played no part — it was identical, so the penalty broke the tie alone.\n\n<b>Why B wins is the real content.</b> Both vectors sum to 3, so an L1 penalty would score them identically. It is the <b>squaring</b> that separates 9 from 5. Squaring punishes one large component far more than several moderate ones, so <b>L2 prefers weight spread across features</b>. L1's own preference is different: it drives coefficients to <b>exactly zero</b>, which is why <b>Lasso (L1) does feature selection and Ridge (L2) does not</b> (archived Q35). Elastic net is both together.\n\nThe deck's warning beside the example: <i>"Read lambda and any factor of one half from the definition."</i> Some texts write λ/2 Σwᵢ², which halves every penalty. Check what is written.\n\n<b>Do these work in GNNs?</b> The archived paper asks (Q8), and the answer is <b>yes — GNNs are still learning network weights, so standard regularisation applies</b>. The distractors invoke over-smoothing and aggregation, which are real GNN phenomena deployed here as decoration.\n\n<b>What counts as regularisation:</b> model pruning, L2, data augmentation, dropout, early stopping. <b>What does not:</b> random weight initialisation.\n\n<b>And for the gap-closing question</b> (Q1): with 100% training accuracy and 46% test accuracy, which is <i>least</i> common as a fix? <b>Replacing Tanh with Sigmoid.</b> L2, reducing network size and batch normalisation all address overfitting; swapping one saturating activation for another does not.\n\nExam insight: "which of these is not a regularisation technique" is a recurring shape. Initialisation is the usual answer.`,
  },
  {
    tag: "4️⃣ Reliable Training",
    title: "Dropout: Two Conventions, One Rule",
    body: `During training, dropout randomly sets some hidden activations to zero. A new mask is drawn at every step — the weights stay, the mask changes.\n\n<b>Let q be the keep probability.</b> The drop probability is 1 − q. There are two conventions, and they differ in <i>where</i> the correction happens:\n\n• <b>Classic dropout.</b> Training: keep the activation unchanged or set it to zero. <b>Evaluation: multiply by q.</b>\n• <b>Inverted dropout.</b> Training: <b>divide the kept activation by q</b>, or set it to zero. <b>Evaluation: use it unchanged.</b>\n\nThe deck's one-line summary: <i>"Each convention matches training and evaluation scales."</i> Correct in training or correct at test — never both, never neither.\n\n<b>Why inverted dropout preserves the scale.</b> Activation 2, keep probability 0.5. If kept, the output is 2/0.5 = <b>4</b>. If dropped, <b>0</b>. The expected training output is 0.5(4) + 0.5(0) = <b>2</b> — exactly the undropped value. At evaluation you keep it as 2 with no mask. The preserved quantity is an <b>expectation across masks</b>; any single forward pass gives 0 or 4, never 2.\n\n<b>The Check question.</b> Inverted dropout, keep probability q = 0.8, training already scales kept activations by 1.25. At evaluation: <b>disable the mask and pass activations through with no extra scaling.</b> Since 1.25 = 1/0.8, the correction has already happened. The three distractors are each a specific error: applying the mask at evaluation (<i>evaluation must be deterministic</i>), multiplying by 0.8 (that is the non-inverted convention, and would shrink the outputs), multiplying by 1.25 again (that would inflate them).\n\n<b>The one thing you always do, under either convention: turn the mask off at evaluation.</b> Dropping at inference would make the prediction random.\n\nExam insight: the question usually tells you the convention somewhere in the stem. Find that clause first; the arithmetic follows from it.`,
  },
  {
    tag: "4️⃣ Reliable Training",
    title: "Augmentation, Curves, and Early Stopping",
    body: `<b>Augmentation must preserve the label.</b> A mild crop or brightness change leaves a daisy a daisy. A 180° rotation also leaves a daisy a daisy. But <b>a rotated 6 resembles a 9</b>, and keeping the label 6 is then simply wrong — you are training the model that a 9 is a 6.\n\nThe deck's framing: <i>"Augmentation depends on the task semantics."</i> The same transform that helps one task breaks another. Reason about whether the <b>label survives</b>, never about whether the transform sounds reasonable. He has now given the 6→9 example in three separate sessions.\n\n<b>Reading the two curves.</b>\n• <b>Both falling together</b> → the model is learning patterns that transfer. Keep going.\n• <b>Training falling, validation rising</b> → overfitting. The deck's caption: <i>"The best training checkpoint may not be the best held-out checkpoint."</i>\n\n<b>Early stopping with checkpoints</b>, worked concretely over 8 epochs: best validation at <b>epoch 5, loss 0.45</b>, saved. Epochs 6, 7 and 8 show no improvement, so with <b>patience 3</b> you stop after epoch 8 and <b>restore epoch 5, not epoch 8</b>.\n\nThree pieces of discipline the deck spells out:\n1. <b>Save the best checkpoint</b> by the chosen validation metric.\n2. <b>Wait for a pattern.</b> One noisy validation dip does not require stopping immediately — that is what the patience window is for.\n3. <b>Use a fixed protocol.</b> Keep the test set out of stopping decisions, and choose the stopping rule <i>before</i> inspecting test performance.\n\nTraining loss falling is guaranteed by construction — it is the quantity being minimised — so it can never be the selection criterion. In a monotonic run, "the last epoch" and "the best training loss" are the same wrong answer.\n\nExam insight: every checkpoint is a different model. Releasing one means choosing a point on the trajectory, and validation is the only honest way to choose.`,
  },
  {
    tag: "4️⃣ Reliable Training",
    title: "Transfer Learning: Freeze Early, Train Late",
    body: `<b>Why it works.</b> Early layers learn edges, colours and simple textures — properties of <i>images</i>, not of the original labels. An edge is an edge whether the photo contains a flower, an elephant or a face. Later layers compose those into something task-specific, and that is the part you replace.\n\n<b>Stage 1.</b> Replace the original label predictor with a new head for your classes. Freeze the whole pretrained <b>backbone</b> — early features and later features both — and train only the new head. The deck's note: <i>"Frozen features still participate in the forward pass."</i> Frozen means not updated, not skipped.\n\n<b>Stage 2.</b> If the fixed features are insufficient, <b>unfreeze selected later layers</b> and fine-tune them along with the head. Early features stay frozen.\n\nThe CS231n table the deck borrows gives the two axes:\n• <b>Small target dataset:</b> reinitialise the final layer and train just that; freeze everything below.\n• <b>Bigger target dataset:</b> train more layers, working downward.\n• <b>Lower the learning rate when fine-tuning</b> — <b>1/10 of the original</b> is a good starting point, because you are adjusting weights that are already good rather than searching from scratch.\n\n<b>The decision framework</b>, from Lecture 7: how much target data you have, and how similar the source and target domains are. Domain distance decides whether the features themselves must change; data volume decides how much you can afford to retrain.\n\n<b>The archived residual question</b> (Q52) belongs here too: residual connections mitigate vanishing gradients by <b>letting gradients flow through additional paths that bypass the non-linear transformations</b>. Not by reducing depth, not by adding a constant, and not by forcing identity functions. The deck's numeric version: in y = x + F(x) with upstream gradient 3 and F′(x) = −0.25, the gradient to x is 3(1) + 3(−0.25) = 3 − 0.75 = <b>2.25</b>. The identity path delivers the full 3; the branch subtracts part of it.\n\nExam insight: "which layers do you freeze and why" has a one-line answer — early ones, because they learned about images rather than about the labels.`,
  },

  // ── Section 5 ────────────────────────────────────────────────────────────
  {
    tag: "5️⃣ Recurrent",
    title: "Shared Weights Across Time, and BPTT",
    body: `<b>The notation</b>, which the deck defines symbol by symbol: xₜ is the input at step t. hₜ₋₁ is the state carried in; hₜ is the new state written and passed on. h₀ is the starting state, often all zeros. <b>θ is the shared weights</b> — training adjusts θ, but every step of a sequence reuses the same θ.\n\nOne step computes <b>hₜ = f_θ(hₜ₋₁, xₜ)</b>.\n\n<b>Why share.</b> Without sharing, a new position needs another trained network, so parameter count grows with sequence length and a length you never saw in training is unhandleable. The deck's parallel: <i>CNN reuses a filter across space; RNN reuses an update across time.</i>\n\n<b>Sharing θ does not make the outputs identical.</b> The output depends on θ <i>and</i> on the state, and the state differs at every position because it encodes everything seen so far. Same function, different arguments.\n\n<b>The numeric example.</b> hₜ = 0.5hₜ₋₁ + xₜ, starting from h₀ = 0, with inputs 2, −1, 3:\n• h₁ = 0.5(0) + 2 = <b>2</b>\n• h₂ = 0.5(2) + (−1) = <b>0</b>\n• h₃ = 0.5(0) + 3 = <b>3</b>\n\nSame coefficient 0.5 every step; three different states.\n\n<b>BPTT.</b> Write the shared coefficient as a. Then ∂h₃/∂h₁ = ∂h₃/∂h₂ × ∂h₂/∂h₁ = 0.5 × 0.5 = <b>0.25</b>. Each extra step back multiplies by another 0.5. Ten steps back gives 0.5¹⁰ ≈ <b>0.00098</b> — that is the vanishing gradient, arrived at by nothing more than repeated multiplication.\n\n<b>And the shared parameter accumulates.</b> The same a is used at steps 1, 2 and 3, so its gradient adds one term from each use, and training applies the <b>total</b> as a single update.\n\nExam insight: an RNN suffers from <i>both</i> vanishing and exploding gradients. The archived Q25 asks which statement is NOT true and the answer is "RNNs suffer from vanishing but not exploding" — they suffer from both.`,
  },
  {
    tag: "5️⃣ Recurrent",
    title: "Truncated BPTT: State Crosses, Gradient Does Not",
    body: `Full BPTT over a long sequence means saving intermediate activations across the whole thing before a single update. Memory grows with length.\n\n<b>The fix: chunk the sequence.</b> With eight steps and chunks of three, you take losses 1–3, backpropagate and update; then losses 4–6; then 7–8. <b>The targets stay the same</b> — every token still gets its loss. Only the gradient history is truncated.\n\n<b>What crosses a chunk boundary and what does not.</b> This distinction <i>is</i> the exam question.\n\n• <b>The state crosses.</b> Chunk 2 starts from the value chunk 1 ended with, so the forward pass is unbroken and context carries through.\n• <b>The gradient does not.</b> The boundary applies <b>detach</b>, and the gradient from chunk 2's loss stops there.\n\nThe deck's numeric illustration: chunk 1 ends with h₂ = 4. That value 4 is detached and handed to chunk 2, where with x₃ = 1 and a = 0.5, <b>h₃ = 0.5(4) + 1 = 3</b>. The forward computation is completely normal. But chunk 2's loss sends no gradient back into chunk 1.\n\nThe deck's one-sentence summary: <b>"The backpropagation horizon is shorter than the forward history."</b>\n\n<b>Note the subtlety</b> it adds: <i>"a still gets gradients from chunk 2."</i> The shared weight is updated from every chunk — it is only the <i>path back through time</i> that is cut, not the weight's participation.\n\n<b>What you buy and what you pay.</b> You buy bounded memory and more frequent updates. You pay for it in gradient signal: a dependency longer than one chunk cannot be learned through backpropagation, because no gradient path connects the two ends.\n\nExam insight: the two halves of the answer get offered separately, as "the state crosses" and "the gradient is cut." Look for the option that states both.`,
  },
  {
    tag: "5️⃣ Recurrent",
    title: "The LSTM Cell: One Memory, Three Gates",
    body: `<b>The quantities.</b> c_old and c_new are the carried <b>cell memory</b> before and after the step. h is the <b>exposed hidden state</b>. These are separate — that separation is the architecture's whole idea.\n\n<b>The gates.</b> f (forget), i (input), o (output), all with entries in [0, 1]; g is the candidate content.\n\n<b>The two update rules.</b>\n<b>c_new = f ⊙ c_old + i ⊙ g</b>\n<b>h_new = o ⊙ tanh(c_new)</b>\n\nProducts are entrywise. The deck states the trap explicitly: <b>the gates need not sum to 1.</b> They are independent learned dimmers, not a probability distribution.\n\n<b>The worked example.</b> c_old = 4, candidate = 0.5.\n• f = 0.9, i = 0.1 → 0.9(4) + 0.1(0.5) = <b>3.65</b> — mostly keep the old memory.\n• f = 0.1, i = 0.6 → 0.1(4) + 0.6(0.5) = <b>0.7</b> — mostly discard it.\n\nNotice the second pair sums to 0.7, not 1. Perfectly legal.\n\n<b>The three roles</b>, as the deck labels them: <b>forget = keep old info, input = write new info, output = expose now</b>. The sequence at each step is: retain past, write new candidate, update the cell, then expose some of it to the hidden state. The output gate controls exposure <i>separately</i> from what is stored — the cell can hold something the hidden state does not reveal this step.\n\n<b>The limitation that motivates attention.</b> A fixed-size state pair (cₜ, hₜ) must compress an arbitrary history. Hundreds of tokens in; one fixed-size pair out. The deck's transition line: <i>"Can we keep separate vectors and read them when needed?"</i> — which is exactly what attention does.\n\nHe said twice in lecture that the <b>gate internals are not tested</b>. Know the three roles, the separation of c and h, and that the gates are independent.\n\nExam insight: "the gates sum to 1" and "the output gate erases the cell" are the two false statements most likely to appear.`,
  },

  // ── Section 6 ────────────────────────────────────────────────────────────
  {
    tag: "6️⃣ Attention",
    title: "Position, Mask, and Weights Are Three Different Things",
    body: `The deck gives this its own slide and then its own Check question, because the three get confused constantly.\n\n<b>POSITION — where is this token?</b> A learned position vector is <b>added</b> to the word vector: word vector + position vector = input vector. Without it, attention sees an unordered set, and "dog bites man" is identical to "man bites dog." Same words, different order, different meaning — and word vectors alone do not specify order.\n\n<b>CAUSAL MASK — which tokens are visible?</b> It hides future positions so a prediction cannot see the token it is predicting. At "dog" (position 2) the model reads the first 2 positions; at "ball" (position 5) it reads the first 5. Each token may attend to itself and earlier tokens only.\n\n<b>ATTENTION WEIGHTS — how much does each visible token contribute?</b> Computed from the current input, summing to 1. At "It" in the deck's sentence: The 0.05, dog 0.35, chased 0.15, the 0.05, ball 0.25, . 0.05, It 0.10.\n\n<b>The Check question</b> offers all the ways to confuse them, and the answer is: <b>position vectors tell where each token is, and the causal mask blocks access to future tokens.</b> The distractors swap the roles, claim the mask alone conveys position, and claim position vectors alone restrict access. The deck's summary: <i>"Order, access, and contribution are three separate choices."</i>\n\n<b>The context vector</b> is the weighted sum of the <b>value</b> vectors. Weights say <i>how much</i>; values say <i>what</i>. Worked: weights 0.2/0.3/0.5 over value vectors [1,0], [5,2], [9,4] give [0.2,0] + [1.5,0.6] + [4.5,2.0] = <b>[6.2, 2.6]</b>. The scalar version on the next slide — 0.2(1) + 0.3(5) + 0.5(9) = <b>6.2</b> — is just the first feature.\n\nBecause the weights sum to 1, the context is a weighted <i>average</i> and must lie between the smallest and largest value.\n\nExam insight: this is the most reliably confused triple in the sequential block, which is exactly why it got a Check slide.`,
  },
  {
    tag: "6️⃣ Attention",
    title: "Parallel Training, Sequential Generation",
    body: `<b>Why all rows compute at once.</b> Each query position is a row of the attention table. Every row reads <b>the same layer inputs</b> — the row at "ran" does not read the context the row at "dog" produced. The deck is precise: <i>"Contexts 1, 2, and 3 depend only on the layer inputs, so they can be computed in any order or all at once."</i>\n\n<b>The mask restricts what, not when.</b> It hides future positions from a row, but it imposes no schedule. That is the distinction the deck draws explicitly: the mask <i>limits what is read</i> and <i>sets no ordering on when rows run</i>.\n\n<b>Layers still run in order.</b> Rows run in parallel <i>within</i> a layer; the next layer reads this layer's outputs. So a transformer is parallel across positions and sequential across depth.\n\n<b>Training scores every position in one pass.</b> The full example is already known, so for "The dog chased the ball . It" you simultaneously score seven next-token targets: dog, chased, the, ball, ., It, barked. Targets are the input shifted by one. The deck's small table makes the shift concrete: at input position 1 the allowed input is "The" and the target is "dog"; at position 2 the allowed input is "The, dog" and the target is "ran". <b>"ran" is never an input, and "dog" is hidden from position 1.</b>\n\n<b>Generation cannot do this.</b> Only the prefix exists. The model reads it, predicts one token, <b>appends it</b>, and runs again. After "The dog chased the ball ." it chooses "It"; then with "It" appended it chooses "barked." Step by step, autoregressive.\n\nSo "transformers are parallel" is <b>half true</b>, and the other half is the examinable part.\n\n<b>Inside one block:</b> causal multi-head attention, then an MLP at each position, with residual shortcuts and LayerNorm around both. <b>Attention exchanges information across positions; the MLP transforms features within each position.</b> The same MLP weights are reused at every position in a layer, but <b>each block has its own weights</b>. Depth counts blocks; generation length counts tokens — two different numbers that the deck warns against conflating.\n\nExam insight: "where does a transformer parallelise" is a real question with a precise answer — across positions within a layer, never across layers and never during generation.`,
  },

  // ── Section 7 ────────────────────────────────────────────────────────────
  {
    tag: "7️⃣ Graphs",
    title: "The Message-Passing Update, Layer by Layer",
    body: `<b>The toy graph.</b> Four roads: A, B, C, D with load indices <b>A = 1, B = 2, C = 4, D = 8</b>. Edges A–B, A–C, C–D, undirected — so both ends of each edge are neighbours.\n\n<b>The rule:</b> hᵥᵏ⁺¹ = 0.5 hᵥᵏ + 0.5 · mean{hᵤᵏ : u ∈ N(v)}. Half your own value, half the mean of your neighbours. The deck warns that k is a <b>layer index, not a power</b>.\n\n<b>Layer 1, all four nodes, reading only layer 0:</b>\n• <b>A</b> (neighbours B=2, C=4): mean 3 → 0.5(1) + 0.5(3) = <b>2</b>\n• <b>B</b> (neighbour A=1): 0.5(2) + 0.5(1) = <b>1.5</b>\n• <b>C</b> (neighbours A=1, D=8): mean 4.5 → 0.5(4) + 0.5(4.5) = <b>4.25</b>\n• <b>D</b> (neighbour C=4): 0.5(8) + 0.5(4) = <b>6</b>\n\n<b>Updates are synchronous.</b> B uses A's <i>old</i> value of 1, not the 2 that A just became. The deck demonstrates the consequence: <i>"In-place A → B would give B¹ = 2 instead of 1.5."</i> And it states the principle — <b>node numbering does not define an update schedule</b>.\n\n<b>Layer 2</b> applies the same rule to the layer-1 values: A² = 0.5(2) + 0.5·(1.5 + 4.25)/2 = <b>2.4375</b>, B² = <b>1.75</b>, C² = <b>4.125</b>, D² = <b>5.125</b>.\n\n<b>Depth equals reach.</b> At layer 1, A sees B and C. At layer 2, <b>D can reach A through C</b>. Information moves one edge per layer — on a path V–W–X–Y–Z, Z reaches Y after 1 layer, X after 2, W after 3, V after 4.\n\n<b>What is learnable.</b> The 0.5/0.5 is a fixed teaching device. Real GNNs learn <b>W_self</b> (transforms a node's own vector) and <b>W_neighbor</b> (transforms the neighbour mean), <b>shared across every node</b>. Their sizes depend on <i>feature width</i>, not on node IDs or node count — 2-number node vectors mean 2×2 matrices whatever the graph.\n\nExam insight: synchronous updating is the arithmetic trap. Compute every node from the previous layer before writing any of them.`,
  },
  {
    tag: "7️⃣ Graphs",
    title: "Invariance, Equivariance, and the Adjacency Matrix",
    body: `<b>Always say what is being reordered and what the output represents.</b> That sentence is the deck's own advice and it resolves most confusion here.\n\n<b>Neighbour order → same aggregate.</b> A's neighbours listed B, C give values 2, 4, mean 3. Listed C, B they give 4, 2, mean 3. The update is 0.5(1) + 0.5(3) = 2 either way. <b>A mean or sum treats the neighbours as a set.</b>\n\n<b>Node order → rows move together (equivariance).</b> One output per node. In file order A, B, C, D the layer-1 outputs are 2, 1.5, 4.25, 6. In order D, B, A, C they read <b>6, 1.5, 2, 4.25</b>. Road A still has output 2; it just moved rows.\n\n<b>Whole-graph pooling → same answer (invariance).</b> Sum the layer-1 values: 2 + 1.5 + 4.25 + 6 = <b>13.75</b> in one order, 6 + 1.5 + 2 + 4.25 = <b>13.75</b> in the other. Pooling ignores order too.\n\n<b>The adjacency matrix genuinely changes under relabelling.</b> This is where people go wrong, and the deck prints both matrices. With M[i,j] = M[j,i] = 1 for an edge:\n\n<code>order A,B,C,D       order D,B,A,C</code>\n<code>  0 1 1 0             0 0 0 1</code>\n<code>  1 0 0 0             0 0 1 0</code>\n<code>  1 0 0 1             0 1 0 1</code>\n<code>  0 0 1 0             1 0 1 0</code>\n\nSame graph, different matrix. <b>Edge A–B sits at (1,2) in the first ordering and (3,2) in the second</b>, and its mirror entry moves with it.\n\n<b>So reorder everything together.</b> Feature rows go 1, 2, 4, 8 → 8, 2, 1, 4, and <b>both axes</b> of M move. The deck's warning: <i>"Moving X rows without M, or only one axis of M, pairs roads with the wrong loads or neighbours and stores a different graph."</i>\n\n<b>Feature columns are different.</b> Each column of X is one feature. <b>Node reordering never moves columns</b>, so the shared weights keep reading the same meanings. Which sets up the next card.\n\nExam insight: "relabelling does not affect the adjacency matrix" is false and will be offered. He drew this twice on the board.`,
  },
  {
    tag: "7️⃣ Graphs",
    title: "Feature Order, Transfer, and What Shared Weights Buy",
    body: `<b>The Check question.</b> A GNN was trained on molecules with node features <b>[atomic number, charge]</b>. A new molecule arrives with <b>[charge, atomic number]</b>. The model is frozen. What do you do?\n\n<b>Restore the training feature order and definitions before applying the shared weights.</b>\n\nThe deck explains each wrong option precisely. "No change, the width is still 2" — the width matches, but <b>the weights were learned for what each column means, not just the count</b>. "Pad the node count" — node count is not the issue; shared weights work on graphs of any size. "Reorder the feature rows while leaving adjacency unchanged" — that mismatches atom rows with edges <i>and</i> leaves the columns swapped, so it breaks two things at once.\n\n<b>Why this is dangerous rather than merely wrong:</b> the arithmetic still runs. The model produces numbers and raises no error. It is simply computing with charge in the column that was trained to mean atomic number.\n\n<b>So: node order is handled by the architecture; feature order is not.</b>\n\n<b>What shared weights buy — inductive application.</b> Because W_self and W_neighbor depend on feature width rather than on node identity, a trained GNN runs on a graph it has never seen. The deck shows it: the same rule that gives A = 0.5(1) + 0.5(3) = <b>2</b> on the 4-road graph gives, on an unseen 3-road graph with U = 6 and neighbours 1 and 3, <b>hU = 0.5(6) + 0.5(2) = 4</b>.\n\nThe deck's careful caveat: <i>"Runs without retraining, but accuracy must be evaluated."</i> Computing an output and predicting <i>accurately</i> are separate checks — compatible features permit computation; they do not guarantee performance.\n\n<b>The architectural family.</b> CNN reuses one kernel at every spatial position. RNN reuses one update at every time step. GNN reuses one update at every node. <b>A larger compatible input repeats the rule with no new parameters.</b> This is also how a GNN handles varying graph sizes (archived Q15): <b>a fixed number of parameters shared across different parts of the graph</b> — not padding, not a variable layer count.\n\nExam insight: the aggregation function's purpose, asked directly on the paper (Q9), is to <b>combine information from a node's neighbours to update its representation</b>.`,
  },
  {
    tag: "7️⃣ Graphs",
    title: "Order Invariance, and the Substitution Test",
    body: `The closing Check question of the deck, adapted from archived Q47.\n\n<b>Compare F(x) = ReLU(x₁) + ReLU(x₂) + ReLU(x₃) and G(x) = x₁ + 2x₂ + x₃.</b> Which stays the same under every reordering?\n\n<b>F only.</b>\n\n<b>Why F is invariant:</b> it is a <b>symmetric sum</b> — the same function applied to every entry, then addition. Both steps ignore order. The deck is careful about the logic here: <i>"One counterexample rules out G, but F needs the symmetric-sum argument, which covers every reordering."</i> You cannot prove invariance by example; you can only disprove it.\n\n<b>Why G is not:</b> x₂ carries coefficient 2, so the slots are not interchangeable. The deck's counterexample: x = (−2, 1, 4) gives G = −2 + 2 + 4 = <b>4</b>. Swapping x₁ and x₂ to (1, −2, 4) gives 1 − 4 + 4 = <b>1</b>.\n\n<b>The practical trick</b> he demonstrated live: when you cannot remember whether a function ignores order, <b>substitute two permutations and look</b>. Plug in a vector and its shuffle, evaluate, compare. Two plug-ins and no theory — much faster under time pressure than recalling a definition.\n\n<b>The invariant family:</b> mean, sum, max, min, and any elementwise function followed by one of those. <b>The non-invariant family:</b> anything referencing a position — the first element, a position-weighted sum, concatenation.\n\n<b>The deck's final contrast — pixels versus nodes.</b> Rearranging image pixels <i>changes the neighbourhoods</i> a convolution reads: two ones in the same 3×3 window sum to 2, but move them three rows and columns apart and every window sums to at most 1, so a global max drops from 2 to 1. Reordering graph nodes <b>together with the adjacency matrix</b> keeps the same graph. The two situations look similar and are not.\n\nExam insight: this is the last slide of substantive content in the deck. Last slides are rarely accidental.`,
  },
  {
    tag: "📋 Exam Day",
    title: "The Format, and What the Past Paper Tells You",
    body: `<b>The past paper's own front matter</b>, which is the best evidence about format: <b>50 + 6 bonus questions with equal weights</b>, each worth half a point of the total grade. <b>Open book, open notes, no computers or other electronic devices.</b> 112 minutes — the paper itself says "2 min/question." Answers go on a single table on the <b>first page</b>, and the front matter is explicit: <i>"We will only collect and grade the first page and not consider the information on other pages."</i>\n\n<b>This year's confirmed differences</b>, from the Oct 26 session: <b>11 pages</b>, one answer sheet, two hours, and a <b>basic calculator is permitted</b> (the past paper banned electronic devices entirely). <b>Write your USC ID clearly.</b> No smart glasses. Scope is <b>blocks 1–7</b>, research topics excluded.\n\n<b>What the paper's shape tells you.</b> Of the 56 questions, roughly a dozen require arithmetic and the rest are conceptual multiple choice. Several come in <b>linked runs</b> — Q27–Q30 are four decision-tree counting questions off one setup, and Q19–Q21 are three activation-function questions off one figure. If you understand the setup you get the whole run; if you don't, you lose all of it.\n\n<b>Question 56 is worth noting as a curiosity:</b> "Did the instructor mention there could be a curve for the grade?" Answer: <b>yes, it depends on the final score distribution.</b> He puts administrative statements on the paper. Pay attention in class.\n\n<b>His own method</b>, demonstrated live on the pruning question: <b>read the answers before re-reading the question.</b> On most fundamentals two or three options die to a rule you already know. With the obvious wrong ones gone, a guess has good odds — and there is no penalty for a wrong answer, so never leave one blank.\n\n<b>Timing.</b> 56 questions in 112 minutes is exactly two minutes each, but most people finish in an hour. Do not grind on an arithmetic question; mark it, move on, come back.\n\nExam insight: the deck cites eight specific archived questions — Q6, Q23, Q24, Q26, Q36, Q47, Q51 and Q53. Those eight topics have now been examined once and rebuilt once. Start there.`,
  },
];

const VOCAB = [
  // ── exam meta ──
  { term: "The archived paper", def: "50 + 6 bonus questions, equal weight, half a point each. Open book, open notes, no electronic devices, 112 minutes. Only the first-page answer table is graded." },
  { term: "Cited archived questions", def: "The deck rebuilds Q6, Q23, Q24, Q26, Q36, Q47, Q51 and Q53 as Check slides. Those eight topics have now been examined once and rebuilt once." },
  { term: "The core route", def: "His 141-page subset of the 250-slide deck, used in class. The remaining slides are for self-study, so the route is his own ranking of what matters." },
  { term: "Row vs column vectors", def: "Some source slides use xW, the new slides use Wx. Parameter counts are identical; only symbol order changes. Do not let a transpose convince you that you misremembered." },

  // ── section 1 ──
  { term: "Training split", def: "Fits parameters — weights and every preprocessing statistic." },
  { term: "Validation split", def: "Selects settings: depth, learning rate, λ, which checkpoint. Used repeatedly, so it is mildly optimistic." },
  { term: "Test split", def: "Evaluated once, after every choice is frozen. Never used to switch between candidates." },
  { term: "Splitting by plant", def: "All five photos of a plant stay in one split. Splitting by photo would measure recognition of that plant, not of the species." },
  { term: "Generalization", def: "Low error on new data from the same source as the training data. Same camera, same conditions, unseen plants." },
  { term: "Selection example", def: "Candidate A (depth 2): 10% train, 15% validation. Candidate B (depth 10): 0% train, 25% validation. Select A. A on test: 20%." },
  { term: "Data leakage", def: "Any test information reaching the model. Recomputing preprocessing statistics on test is the classic route." },
  { term: "Stored preprocessing rule", def: "Training mean 100 gives x → x − 100, applied unchanged: 120→20, 130→30, 90→−10. Centred values, not prediction errors." },
  { term: "Bias", def: "Mean of refits minus target. Recipe A: mean 6, target 10 — high bias, low variance. Pairs with underfitting." },
  { term: "Variance", def: "Spread across refits on independent training sets. Recipe B: mean 10, wide scatter — low bias, high variance. Pairs with overfitting." },
  { term: "Ensemble averaging", def: "Three trees predicting 2, 5, 8 average to 5. Reduces variability, but correlated member errors limit the benefit." },
  { term: "The 98% trap", def: "1,000 parts, 20 defective. Predict 'good' always: 98% accuracy, 0% recall, and precision is UNDEFINED because nothing was flagged." },
  { term: "Precision", def: "TP/(TP+FP). With TP 16, FP 24: 16/40 = 40%. Of what you flagged, how much was right." },
  { term: "Recall", def: "TP/(all actual positives). With TP 16, FN 4: 16/20 = 80%. Of what was there, how much you caught." },
  { term: "F1", def: "Harmonic mean of precision and recall, 2pr/(p+r). Balances the two when neither alone is adequate." },
  { term: "Threshold movement", def: "Lowering it cannot reduce recall, but precision can move either way. At 0.2: 23.75% / 95%. At 0.8: 75% / 45%." },
  { term: "Which metric leads", def: "For rare, costly misses: recall leads, precision tracked so the review workload stays manageable. Never accuracy." },
  { term: "Pruning", def: "Reduces tree depth to prevent overfitting. Choose the depth by validation error — training error only falls with depth." },
  { term: "Leaf bound, binary attributes", def: "Maximum 2^k leaves, maximum depth O(k). Each attribute splits once along a path." },
  { term: "Leaf bound, continuous attributes", def: "Maximum N leaves, maximum depth N − 1. A continuous attribute can be split repeatedly, so the data caps it, not the features." },
  { term: "kNN classification", def: "Neighbours carry labels: majority vote. Purple, orange, purple, orange, orange gives purple at k=3 and ORANGE at k=5." },
  { term: "kNN regression", def: "Neighbours carry values: take the mean. 2, 5, 11 at k=3 gives 6. (18 forgets to divide, 5 is the median, 11 is the max.)" },
  { term: "kNN parameter count", def: "Zero. The model is the training set. k and the metric are hyperparameters you choose, not parameters that are learned." },
  { term: "kNN inference cost", def: "Grows with dataset size — it compares against every stored example. With 100 billion images it is slower at inference than ResNet-50." },
  { term: "kNN outlier detection", def: "Outliers are the points with the LOWEST density of neighbours." },
  { term: "Centroid", def: "The centre point of a cluster in k-means — the mean of its assigned members." },
  { term: "k-means objective", def: "Total SQUARED distance from points to assigned centres. For {1,5,6} about 4: 9 + 1 + 4 = 14. The mean minimises it." },
  { term: "k-means non-determinism", def: "On {1,3,5,9} with k=2: run A gives {1,3}{5,9}, J = 10; run B gives {1,3,5}{9}, J = 8. Both converged. Poor init means a local minimum." },

  // ── section 2 ──
  { term: "Dense parameter count", def: "m × n weights plus n biases — one bias per UNIT, not per layer. Widths 2-3-1 with biases: 6+3+3+1 = 13." },
  { term: "No-bias count", def: "Just the products. 3-4-4-2 = 12+16+8 = 36. Read the bias clause before computing anything." },
  { term: "Doubling hidden widths", def: "3-8-8-2 = 24+64+16 = 104, not 72 and not 144. Only the hidden-to-hidden layer quadruples." },
  { term: "The ratio form", def: "10-20-20-10 no bias = 800; doubled = 2400. Ratio 3. Same question as 36→104, phrased to hide the arithmetic." },
  { term: "Affine collapse", def: "y = W₂(W₁x+b₁)+b₂ = (W₂W₁)x + (W₂b₁+b₂). Numerically h = 3x+2, y = 2h−1 gives y = 6x+3. Depth without nonlinearity buys nothing." },
  { term: "Why ReLU is non-linear", def: "It introduces a point of non-linearity at zero where the slope changes. Not merely because it is piecewise or positive-valued." },
  { term: "What a linear MLP can fit", def: "y = x only. Not |x|, not x². Both need a nonlinearity, and |x| is the canonical thing ReLU builds." },
  { term: "Output size formula", def: "(n + 2p − k)/s + 1. With n=9, p=1, k=3, s=2: starts at 0,2,4,6,8, giving 5. Non-integer means the configuration does not tile." },
  { term: "Inverting for kernel size", def: "24 − K + 1 = 22 gives K = 3. K ∈ {2,5,7} give 23, 20, 18. Channel counts never enter the spatial formula." },
  { term: "Conv parameter count", def: "F² × Cin × K + K. Two 3×3 filters on 3 channels: 2 × (27+1) = 56 — independent of input size." },
  { term: "Filter depth", def: "A standard filter always spans the FULL input depth. Change the filter count and each filter still reads all input channels." },
  { term: "Filter count sets channels", def: "One filter makes one output channel. Raising 16 filters to 24 changes only the channel count; H, W and the 3×3×64 shape are untouched." },
  { term: "1×1 convolution", def: "Mixes channels at one position and never reads a neighbour. Weights (1,2), bias −1, on (2,5) gives 11; on (4,1) gives 5." },
  { term: "Bottleneck saving", def: "Direct 3×3 64→32 costs 18,464. Squeeze 1×1 64→16 then 3×3 16→32 costs 1,040 + 4,640 = 5,680. The two paths represent different functions." },
  { term: "Max pooling", def: "2×2 stride 2 on the deck's grid gives 6, 8, 3, 4. No learnable parameters, some invariance to small shifts." },
  { term: "Max is not linear", def: "u=(2,0), v=(0,3): max(u)+max(v) = 5 but max(u+v) = 3. Additivity fails. Average pooling IS linear; neither has parameters." },
  { term: "Are pooling layers necessary", def: "No — they primarily reduce dimensionality and prevent overfitting. Strided convolutions can replace them." },

  // ── section 3 ──
  { term: "Why 0/1 loss fails", def: "Flat regions have slope 0 and the jump has undefined slope. Moving a score from −2 to −1 is real improvement the loss cannot see." },
  { term: "Squared-loss slopes", def: "L = (ŷ−2)²: at ŷ=0, L=4, slope −4; at ŷ=1, L=1, slope −2; at ŷ=3, L=1, slope +2. Direction AND magnitude everywhere." },
  { term: "The 2-2-1 network", def: "x=(1,2), t=2. W = [1, 0.5; −1, 1], b = (−0.5, 0), v = (1, −0.5), c = 0." },
  { term: "Its forward pass", def: "z₁ = 1.5, h₁ = 1.5; z₂ = 1, h₂ = 1; ŷ = 1.0; L = 1. Both ReLUs active, so ReLU′ = 1 on both paths." },
  { term: "Its nine gradients", def: "w₁₁ −2, w₁₂ −4, w₂₁ +1, w₂₂ +2, b₁ −2, b₂ +1, v₁ −3, v₂ −2, c −2. All from ONE forward pass." },
  { term: "The column check", def: "∂L/∂W column 2 is exactly 2× column 1, because x₂ = 2x₁. If yours is not, you slipped." },
  { term: "Its updated weights", def: "η = 0.05 gives w = 1.10, 0.70, −1.05, 0.90; b = −0.40, −0.05; v = 1.15, −0.40; c = 0.10." },
  { term: "Its new loss", def: "Re-running gives h = (2.10, 0.70), ŷ = 2.235, L = 0.055225 — down from 1. It overshot the target, which one step may do." },
  { term: "Four-factor chain rule", def: "∂L/∂w = error × output weight × ReLU′ × input = (4−2) × 2 × 1 × 3 = 12." },
  { term: "The ½ convention", def: "L = e² gives ∂L/∂ŷ = 2e. L = ½e² gives ∂L/∂ŷ = e. Read the loss as written — it changes the answer." },
  { term: "One SGD step", def: "(wx−y)², no ½, x=3, y=5, w=1, α=0.05: gradient 2(−2)(3) = −12, so w → 1.6." },
  { term: "Its three named slips", def: "1.3 adds a ½ factor; 0.4 flips the update sign; −0.6 reports the step size instead of the new weight." },
  { term: "Gradient sign", def: "w ← w − η(dL/dw) with η > 0 and a negative gradient: w INCREASES, and the loss falls locally. A minimum has ZERO slope." },
  { term: "Dead ReLU", def: "w = −0.7, b = −0.5, x = 1 gives z = −1.2 and a = 0. The problem is a whole negative region with zero derivative, not the single point z = 0." },
  { term: "Residual gradient", def: "y = x + F(x) gives identity path plus branch. Upstream 3 with F′ = −0.25: 3 − 0.75 = 2.25. The identity path always delivers the full gradient." },
  { term: "Global norm clipping", def: "g′ = min(1, c/‖g‖)·g — one scale for the whole vector, so direction is preserved. g=(3,4), c=2: ‖g‖=5, scale 2/5, result (1.2, 1.6)." },
  { term: "Clipping a small gradient", def: "g = (0.03, 0.04) has norm 0.05, so min(1, 20) = 1 and it is UNCHANGED. Clipping never enlarges; it is not a vanishing-gradient fix." },
  { term: "Momentum", def: "m_new = 0.5 m_old + g, then w −= 0.1 m_new. With g = 2: m_old = 0 gives step −0.2; m_old = 4 gives step −0.4. History matters." },

  // ── section 4 ──
  { term: "Symmetry breaking", def: "Two units at w = 0.4 with the same input get the same gradient and the same update, landing at 0.2 together. 200 such units have the power of one." },
  { term: "Zero initialization", def: "After one forward/backward/update, W[1] entries MAY be positive or negative — not all zero, not all one sign. The output layer moves first." },
  { term: "He / Kaiming", def: "ReLU-aware initialization scale. The extra factor of 2 compensates for ReLU discarding the negative half." },
  { term: "Not a regularizer", def: "Random weight initialization. Pruning, L2, dropout, augmentation and early stopping all are." },
  { term: "BatchNorm stage 1", def: "Standardize: (x − μ)/√(σ²+ε). With 2,4,6,8: mean 5, variance 5, giving −1.34, −0.45, 0.45, 1.34." },
  { term: "BatchNorm stage 2", def: "Learned scale and shift, γx̂ + β. With x̂ = 2, γ = 0.5, β = −1: output 0." },
  { term: "BatchNorm at evaluation", def: "Stored running mean 4, variance 9, γ=2, β=−1, input 10: (10−4)/3 = 2, then 2(2)−1 = 3. (2 stops early, 4 skips β, 5 flips β's sign.)" },
  { term: "Why eval uses stored stats", def: "The same photo in batch [7,3] normalizes to 1 and in [7,11] to −1. With stored mean 3 it is 2 either way. Evaluation must be deterministic." },
  { term: "Full-batch BatchNorm", def: "When the batch is the entire dataset, BatchNorm on the input is equivalent to L2 normalization on the input." },
  { term: "L2 comparison", def: "λ = 0.2, data loss 0.4: A = (3,0) scores 2.2, B = (2,1) scores 1.4. B wins. Both sum to 3, so only the squaring separates them." },
  { term: "L1 vs L2", def: "L1 (Lasso) drives coefficients to exactly zero, so it does feature selection. L2 (Ridge) does not. Elastic net is both." },
  { term: "Classic dropout", def: "Train: keep unchanged or zero. Evaluate: multiply by q." },
  { term: "Inverted dropout", def: "Train: divide kept activations by q, or zero. Evaluate: unchanged. With q = 0.5 and h = 2: output 4 or 0, expectation 2." },
  { term: "Inverted dropout at eval", def: "q = 0.8 with a training scale of 1.25: 0.8 × 1.25 = 1, so disable the mask and apply NO extra scaling." },
  { term: "Label preservation", def: "A mild crop keeps a daisy a daisy. A rotated 6 resembles a 9, so keeping label 6 is wrong. Augmentation depends on task semantics." },
  { term: "Early stopping", def: "Best validation at epoch 5 (loss 0.45); epochs 6–8 show no improvement; with patience 3 you stop after 8 and RESTORE EPOCH 5." },
  { term: "Patience window", def: "Tolerates short-term validation noise. One noisy dip does not require stopping immediately." },
  { term: "Backbone", def: "The pretrained feature extractor kept fixed in stage 1. Frozen features still participate in the forward pass — frozen means not updated, not skipped." },
  { term: "Transfer stage 2", def: "If fixed features are insufficient, unfreeze selected LATER layers and fine-tune them with the head. Early features stay frozen." },
  { term: "Fine-tuning learning rate", def: "Lower it — 1/10 of the original is a good starting point, since you are adjusting good weights rather than searching from scratch." },
  { term: "Residual connections", def: "Mitigate vanishing gradients by letting gradients flow through additional paths that BYPASS the non-linear transformations." },

  // ── section 5 ──
  { term: "Shared weights θ", def: "One parameter set reused at every time step. Outputs still differ because the state and input differ. CNN shares across space; RNN across time." },
  { term: "The recurrent example", def: "hₜ = 0.5hₜ₋₁ + xₜ from h₀ = 0 with inputs 2, −1, 3 gives states 2, 0, 3." },
  { term: "BPTT multiplication", def: "∂h₃/∂h₁ = 0.5 × 0.5 = 0.25. Each extra step back multiplies again; ten steps gives 0.00098. That IS the vanishing gradient." },
  { term: "Shared-weight accumulation", def: "The same coefficient is used at every step, so its gradient adds one term per use and training applies the total as one update." },
  { term: "Truncated BPTT", def: "Chunk the sequence. The STATE crosses the boundary; the GRADIENT is detached. Chunk 1 ends at h₂ = 4; chunk 2 computes 0.5(4)+1 = 3 normally." },
  { term: "RNN gradient problems", def: "RNNs suffer from BOTH vanishing and exploding gradients. 'Vanishing but not exploding' is the false statement on the paper." },
  { term: "NaN weights", def: "All parameters becoming NaN points to the EXPLODING gradient problem, not vanishing." },
  { term: "LSTM quantities", def: "c_old and c_new are the carried cell memory; h is the exposed hidden state. They are separate — that separation is the architecture's idea." },
  { term: "LSTM update rules", def: "c_new = f ⊙ c_old + i ⊙ g, then h_new = o ⊙ tanh(c_new). Entrywise products." },
  { term: "Gates need not sum to 1", def: "f = 0.9, i = 0.1 gives 0.9(4)+0.1(0.5) = 3.65. f = 0.1, i = 0.6 gives 0.7 — and 0.7 ≠ 1. They are independent dimmers." },
  { term: "The LSTM bottleneck", def: "A fixed-size (c, h) pair must compress an arbitrary history. This is what motivates attention." },

  // ── section 6 ──
  { term: "Position vector", def: "Added to the word vector so order is encoded. Without it 'dog bites man' equals 'man bites dog'." },
  { term: "Causal mask", def: "Hides future tokens. At 'dog' read the first 2 positions; at 'ball' read the first 5. Each token sees itself and earlier tokens only." },
  { term: "Attention weights", def: "Computed from the current input, summing to 1. At 'It': The .05, dog .35, chased .15, the .05, ball .25, . .05, It .10." },
  { term: "The three separate jobs", def: "Position says WHERE, the mask says WHAT IS VISIBLE, the weights say HOW MUCH each contributes." },
  { term: "Context vector", def: "Weighted sum of VALUE vectors. Weights 0.2/0.3/0.5 over [1,0], [5,2], [9,4] give [6.2, 2.6]. Scalar version: 6.2." },
  { term: "Why rows parallelize", def: "Every row reads the same layer inputs; no row reads another row's output. The mask limits WHAT is read and sets no schedule." },
  { term: "Layers run in order", def: "Rows parallelize within a layer; the next layer reads this layer's outputs. Parallel across positions, sequential across depth." },
  { term: "Shifted targets", def: "Input 'The' targets 'dog'; input 'The, dog' targets 'ran'. 'ran' is never an input, and 'dog' is hidden from position 1." },
  { term: "Autoregressive generation", def: "Only the prefix exists. Predict one token, append it, run again. Cannot be parallelized across positions." },
  { term: "Transformer block", def: "Causal multi-head attention, then a per-position MLP, each with a residual shortcut and LayerNorm. Attention shares across positions; the MLP transforms within one." },
  { term: "Block weights", def: "The MLP is shared across positions within a layer, but each BLOCK has its own weights. Depth counts blocks; generation length counts tokens." },

  // ── section 7 ──
  { term: "The road graph", def: "A=1, B=2, C=4, D=8 with edges A–B, A–C, C–D, undirected." },
  { term: "The toy GNN rule", def: "hᵥᵏ⁺¹ = 0.5hᵥᵏ + 0.5·mean of neighbours. k is a LAYER index, not a power." },
  { term: "Layer 1 values", def: "A = 2, B = 1.5, C = 4.25, D = 6." },
  { term: "Layer 2 values", def: "A = 2.4375, B = 1.75, C = 4.125, D = 5.125. Apply the same rule to the layer-1 numbers." },
  { term: "Synchronous update", def: "B uses A's OLD value of 1, not the 2 A just became. In-place would give B = 2 instead of 1.5. Node numbering is not a schedule." },
  { term: "Depth equals reach", def: "One edge per layer. On V–W–X–Y–Z, Z reaches Y after 1 layer, X after 2, W after 3, V after 4." },
  { term: "W_self and W_neighbor", def: "The two learned matrices per layer, shared across every node. Their size depends on FEATURE WIDTH, not node count or node IDs." },
  { term: "Neighbor-order invariance", def: "A's neighbours as B,C or C,B both give mean 3. A mean or sum treats neighbours as a set." },
  { term: "Equivariance", def: "One output per node: rows move with the reordering. A,B,C,D gives 2, 1.5, 4.25, 6; D,B,A,C gives 6, 1.5, 2, 4.25." },
  { term: "Invariance", def: "One output per graph: pooling gives 13.75 in either order." },
  { term: "Adjacency DOES change", def: "Edge A–B sits at (1,2) under A,B,C,D and at (3,2) under D,B,A,C. Same graph, different matrix. Move feature rows and BOTH axes together." },
  { term: "Feature columns", def: "Node reordering never moves columns, so shared weights keep reading the same meanings. Feature order is a different problem entirely." },
  { term: "Feature-order mismatch", def: "[atomic number, charge] trained, [charge, atomic number] supplied: restore the training order. The arithmetic runs regardless and raises no error." },
  { term: "Inductive application", def: "A trained GNN runs on an unseen graph: hU = 0.5(6) + 0.5(2) = 4. Compatible features permit computation; accuracy still needs evaluating." },
  { term: "Varying graph sizes", def: "Handled by a FIXED number of parameters shared across the graph — not padding, not a variable layer count." },
  { term: "Aggregation function's purpose", def: "Combine information from a node's neighbours to update that node's representation." },
  { term: "Order-invariant family", def: "Mean, sum, max, min, and any elementwise function followed by one of them — e.g. sum of ReLU." },
  { term: "Order-dependent family", def: "Anything referencing a position: the first element, a position-weighted sum, concatenation." },
  { term: "The substitution test", def: "Plug in a vector and its shuffle and compare. G(x)=x₁+2x₂+x₃ on (−2,1,4) gives 4 and on (1,−2,4) gives 1 — not invariant." },
  { term: "Proving invariance", def: "One counterexample disproves it. Proving it needs the symmetric-sum argument, which covers every reordering." },
  { term: "Pixels vs nodes", def: "Moving pixels CHANGES neighbourhoods — two ones in one window sum to 2, spread apart every window sums to ≤1. Reordering nodes with adjacency keeps the same graph." },
  { term: "Shared computation", def: "CNN reuses a kernel across space, RNN an update across time, GNN an update across nodes. A larger compatible input adds no parameters." },
];

const EXAM_TIPS = [
  // ── the mapping ──
  { tip: "Eight archived questions are cited by name in the deck", detail: "Every Check slide carries a footer saying which past question it was adapted from: Q6 (pruning), Q23 (batch norm at eval), Q24 (parameter counting), Q26 (kernel size from shapes), Q36 (one SGD step), Q47 (order invariance), Q51 (kNN regression), Q53 (gradient clipping). Those eight topics have now been examined once and rebuilt once. If you study nothing else, study those eight.", priority: "HIGH" },
  { tip: "The deck's practice questions are variations of THIS year's real questions", detail: "He said so in class: the review slides' practice questions were generated by asking an agent for variations of the actual exam questions. Combined with the archived-question footers, the fifteen Check slides are the closest thing to a leaked paper you will get.", priority: "HIGH" },
  { tip: "The paper is 50 + 6 bonus, and only the first page is graded", detail: "The archived paper's front matter is explicit: 'We will only collect and grade the first page and not consider the information on other pages.' Transfer every answer to the table. Work shown elsewhere earns nothing.", priority: "HIGH" },
  { tip: "Last year's paper is a style guide, not a scope guide", detail: "He flagged that last year covered slightly less material and was more narrative in the early blocks, because this year's syllabus changed. Use the paper for difficulty and phrasing; use the deck for what is actually in scope.", priority: "HIGH" },
  { tip: "Watch for linked question runs", detail: "Q27–Q30 are four decision-tree counting questions off one setup; Q19–Q21 are three activation questions off one figure. Understand the setup and you get the run; miss it and you lose all of it. Budget time accordingly.", priority: "MEDIUM" },

  // ── the big arithmetic ──
  { tip: "The 2-2-1 backprop walkthrough is the deck's centrepiece", detail: "Nine slides on one network. x=(1,2), t=2, W=[1,0.5;−1,1], b=(−0.5,0), v=(1,−0.5), c=0. Forward: z=(1.5,1), h=(1.5,1), ŷ=1, L=1. Nine gradients: w −2,−4,+1,+2; b −2,+1; v −3,−2; c −2. One step at η=0.05, then re-running gives ŷ=2.235 and L=0.055225. Nothing else in the deck gets this much space.", priority: "HIGH" },
  { tip: "One SGD step, and the missing ½", detail: "(wx−y)² with x=3, y=5, w=1, α=0.05. Gradient 2(wx−y)x = 2(−2)(3) = −12, so w → 1.6. The deck names all three slips: 1.3 adds a ½ factor, 0.4 flips the sign, −0.6 reports the step size instead of the new weight. All three will be options.", priority: "HIGH" },
  { tip: "A negative gradient makes w go UP and the loss go DOWN", detail: "w ← w − η(dL/dw) with η positive. Subtracting a negative adds. Both halves are true at once, and the deck's distractors each break one: that a negative slope means raising w raises the loss, that a negative slope signals a minimum (a minimum has ZERO slope), that η flips sign.", priority: "HIGH" },
  { tip: "Parameter counting: biases first, then watch the middle layer", detail: "3-4-4-2 with no bias is 12+16+8 = 36. Doubled to 3-8-8-2 it is 24+64+16 = 104 — not 72 and not 144. Only the hidden-to-hidden layer quadruples. The ratio version (10-20-20-10 → 800, doubled → 2400, ratio 3) is the same question in disguise.", priority: "HIGH" },
  { tip: "Convolution: (n + 2p − k)/s + 1, and F² × Cin × K + K", detail: "n=9, p=1, k=3, s=2 gives 5. Two 3×3 filters on 3 channels give 2×(27+1) = 56, independent of input size. Inverting: 24−K+1 = 22 means K = 3, and the deck names the trap — choosing 5 from the 5 output channels. Channel counts never enter the spatial formula.", priority: "HIGH" },
  { tip: "BatchNorm at evaluation: normalise, THEN scale and shift", detail: "Stored mean 4, variance 9, γ=2, β=−1, input 10. (10−4)/√9 = 2, then 2(2)−1 = 3. The deck names every slip: 2 stops after normalising, 4 skips β, 5 uses β=+1. Using the current mini-batch's statistics is the other classic error — he put a wrong slide up on Oct 26 and corrected it live.", priority: "HIGH" },
  { tip: "Clipping NEVER enlarges a gradient", detail: "g′ = min(1, c/‖g‖)·g. With g = (0.03, 0.04), ‖g‖ = 0.05 so the factor is min(1, 20) = 1 and g is unchanged. The deck names the misconception directly: treating clipping as a fix for vanishing gradients. It caps large gradients and nothing else.", priority: "HIGH" },
  { tip: "The GNN layer, computed synchronously", detail: "A=1, B=2, C=4, D=8 with edges A–B, A–C, C–D. Layer 1: A=2, B=1.5, C=4.25, D=6. B uses A's OLD value of 1 — in-place updating would give B=2 instead. Layer 2: A=2.4375, B=1.75, C=4.125, D=5.125.", priority: "HIGH" },
  { tip: "L2 totals, and why squaring is the point", detail: "λ=0.2, data loss 0.4: A=(3,0) gives 2.2, B=(2,1) gives 1.4, so B wins. Both vectors sum to 3, so L1 could not separate them — it is the squaring (9 vs 5) that does. Hence L2 prefers spread and L1 (Lasso) does feature selection.", priority: "MEDIUM" },
  { tip: "kNN regression averages; kNN classification votes", detail: "Values 2, 5, 11 at k=3 give 6. The deck names the three wrong paths: 18 forgets to divide by k, 5 takes the median, 11 takes the largest. Every earlier kNN example in the course was classification, where you take the majority vote — and that vote flips to orange at k=5.", priority: "HIGH" },
  { tip: "k-means scores by SQUARED distance", detail: "Points 1, 5, 6 about centre 4: 9 + 1 + 4 = 14. The centre is their mean, which is exactly the minimiser with assignments fixed. On {1,3,5,9} with k=2, run A gives J=10 and run B gives J=8 — both converged, so comparing two runs does not prove global optimality.", priority: "MEDIUM" },

  // ── the conceptual traps ──
  { tip: "Preprocessing statistics come from TRAINING only", detail: "Fit the mean on the 80 training photos (100), store the rule x → x−100, apply it unchanged: 120→20, 130→30, 90→−10. The archived options offer validation-only, train+validation and everything-including-test. All three leak. This covers every fitted statistic — means, scalers, vocabularies, PCA components.", priority: "HIGH" },
  { tip: "Zero training error alongside high validation error kills three options", detail: "On the pruning question that single observation eliminates 'zero training error means it generalises', 'minimise training error to pick the depth' and 'choosing depth on test keeps it unbiased'. What survives is the cautious claim: the selected tree can still have non-zero test error. The deck names the trap — reading validation-based selection as a guarantee.", priority: "HIGH" },
  { tip: "Stacked affine layers collapse to one", detail: "y = W₂(W₁x+b₁)+b₂ = (W₂W₁)x + (W₂b₁+b₂). Numerically: h = 3x+2 and y = 2h−1 give y = 6x+3. A linear MLP with no activations can fit y = x and nothing else — not |x|, not x². He has now flagged this in Lectures 3, 7 and the review.", priority: "HIGH" },
  { tip: "Max pooling is not linear; average pooling is", detail: "u=(2,0), v=(0,3): max(u)+max(v) = 5 but max(u+v) = 3, so additivity fails. Neither max nor mean pooling has trainable parameters. Pooling layers are NOT necessary — they primarily reduce dimensionality and prevent overfitting.", priority: "MEDIUM" },
  { tip: "0/1 loss gives no gradient anywhere", detail: "Flat regions have slope 0; the jump has undefined slope. Moving a spam score from −2 to −1 is real improvement the loss cannot see. The archived question asks whether backprop + SGD can train under 0/1 loss even granting differentiability, and the answer is no — regardless of architecture or output activations.", priority: "MEDIUM" },
  { tip: "Identical weights stay identical; zero weights are a different story", detail: "Two units at w=0.4 with the same input get the same gradient and land at 0.2 together — 200 such units have the power of one. But with ALL weights zero, after one forward/backward/update the first layer's entries MAY be positive or negative, because the output layer moves first and then feeds signal back.", priority: "MEDIUM" },
  { tip: "Inverted dropout: if the scaling already happened, do nothing", detail: "q = 0.8 with a training-time scale of 1.25 (which is 1/0.8). At evaluation: disable the mask, apply NO extra scaling. The deck names all three errors — applying the mask (evaluation must be deterministic), multiplying by 0.8 (the non-inverted convention), multiplying by 1.25 again (inflates outputs).", priority: "HIGH" },
  { tip: "Augmentation must preserve the label", detail: "A mild crop keeps a daisy a daisy; a rotated 6 resembles a 9. The same transform helps one task and breaks another. He has now given this example in three separate sessions, so expect a question pairing a transform with a task.", priority: "MEDIUM" },
  { tip: "Restore the validation-minimum checkpoint", detail: "Best validation at epoch 5, loss 0.45; epochs 6–8 show no improvement; with patience 3 you stop after 8 and restore EPOCH 5. Training loss falling is guaranteed by construction, so it can never be the selection criterion. Choose the stopping rule before looking at test.", priority: "MEDIUM" },
  { tip: "Transfer: freeze early, train late, lower the learning rate", detail: "Early layers learn edges and colours — properties of images, not of the original labels. Stage 1 freezes the whole backbone and trains a new head; stage 2 unfreezes selected LATER layers. When fine-tuning, drop the learning rate to about 1/10 of the original.", priority: "MEDIUM" },
  { tip: "Truncated BPTT: state crosses, gradient does not", detail: "Chunk 1 ends at h₂ = 4; chunk 2 computes 0.5(4)+1 = 3 perfectly normally, but its loss sends no gradient back. The forward pass is unbroken; only the backward one is cut. The shared weight still gets gradients from chunk 2 — it is the path through time that is severed.", priority: "HIGH" },
  { tip: "RNNs suffer from BOTH vanishing and exploding gradients", detail: "The archived question asks which statement is NOT true, and the answer is 'RNNs suffer from vanishing but not exploding'. Separately: if all weights go to NaN, that is the EXPLODING gradient problem, and the fix is resizing gradients by their norm to a threshold.", priority: "MEDIUM" },
  { tip: "LSTM gates need not sum to 1", detail: "f = 0.1 and i = 0.6 is perfectly legal: 0.1(4) + 0.6(0.5) = 0.7. They are independent learned dimmers, not a probability distribution. The cell memory c and the exposed state h are separate quantities — the output gate controls exposure without erasing storage.", priority: "MEDIUM" },
  { tip: "Position, mask, and attention weights do three different jobs", detail: "Position says WHERE a token sits. The causal mask says WHAT IS VISIBLE. The attention weights say HOW MUCH each visible token contributes. The deck gave this its own Check slide because the three get swapped constantly — expect an option that trades two of them.", priority: "HIGH" },
  { tip: "Parallel across positions, sequential across layers and during generation", detail: "Every attention row reads the same layer inputs, so no row waits for another. The mask limits WHAT is read and sets no schedule. But the next layer waits for this one, and generation must append each token before predicting the next. 'Transformers are parallel' is half true.", priority: "MEDIUM" },
  { tip: "Relabelling nodes DOES change the adjacency matrix", detail: "Edge A–B sits at (1,2) under order A,B,C,D and at (3,2) under D,B,A,C. Same graph, different matrix. Move the feature rows and both axes of M together — moving one without the other stores a genuinely different graph. He drew this twice on the board.", priority: "HIGH" },
  { tip: "Node order is handled for you; feature order is not", detail: "Trained on [atomic number, charge], given [charge, atomic number]: restore the training order before applying frozen weights. The width still matches and the arithmetic still runs — it raises no error and produces confident nonsense. Weight columns are matched to features positionally.", priority: "HIGH" },
  { tip: "To test order-invariance, substitute two permutations", detail: "G(x) = x₁ + 2x₂ + x₃ on (−2,1,4) gives 4 and on (1,−2,4) gives 1 — not invariant. F(x) = ΣReLU(xᵢ) gives the same value either way. One counterexample disproves invariance; proving it needs the symmetric-sum argument.", priority: "MEDIUM" },
  { tip: "GNNs handle varying graph sizes by sharing a fixed parameter set", detail: "Not by padding to the largest graph, not by varying the layer count, not by resizing the input. W_self and W_neighbor depend on feature width, so a trained GNN runs on an unseen graph — though accuracy still has to be evaluated separately.", priority: "MEDIUM" },
  { tip: "Standard regularization DOES work in GNNs", detail: "The archived answer is yes — GNNs are still learning network weights, so L2 applies normally. The distractors invoke over-smoothing and aggregation errors, which are real GNN phenomena used here as decoration.", priority: "LOW" },

  // ── exam-day ──
  { tip: "Read the answers before re-reading the question", detail: "His own stated method, demonstrated live on the pruning question. On most fundamentals two or three options die to a rule you already know. With the obvious ones gone a guess has good odds, and there is no penalty for a wrong answer — never leave one blank.", priority: "HIGH" },
  { tip: "Bring a basic calculator and write your USC ID", detail: "Confirmed twice after the earlier ban: a basic calculator is permitted and square root is worth having. Nothing internet-connected, no smart glasses. 11 pages, one answer sheet, two hours. He will not be present — ask a proctor if a question looks under-specified.", priority: "HIGH" },
  { tip: "Scope is blocks 1–7, research topics excluded", detail: "Confirmed twice in the Oct 26 session, the second time answering a student who asked directly about block 8. Generative models, AutoML, self-supervised learning and every research paper inside blocks 1–7 are all out.", priority: "HIGH" },
  { tip: "He puts administrative statements on the paper", detail: "Question 56 of the archived exam is literally 'Did the instructor mention there could be a curve for the grade?' — answer: yes, it depends on the final score distribution. Logistics announced in class can appear as questions.", priority: "LOW" },
  { tip: "Check the vector convention before computing", detail: "Some source slides use row vectors (xW), the newer ones use column vectors (Wx). Parameter counts are identical either way. The deck flags this explicitly so that a transposed formula does not make you doubt a correct method.", priority: "LOW" },
];

// ─── GAME: The Whole Board ──────────────────────────────────────────────────
// A study guide rather than a lecture, so this game is longer than the others:
// fifteen levels following the review deck's own seven sections in order, then
// a boss round built from the eight archived exam questions the deck cites by
// number. Every number is taken from a slide or from the past paper and is
// recomputed independently in verifySG.cjs.
//
// Distractor discipline (claude/lecture-game-spec.md, teaching rule 4): wrong
// options are real misconceptions written to roughly the length of the correct
// answer, and many are the specific slips the deck names on its solution slides.

const GAME = {
  title: "The Whole Board",
  tagline: "Fifteen levels across all seven sections of the review deck, then the eight archived exam questions it rebuilds by name. Every number here comes off a slide.",
  nodePrefix: "s",
  takeaway: "Three habits carry most of the paper. Read the convention before you compute — the bias clause, the ½ in the loss, which dropout scheme, training mode or evaluation mode. Check what each split is allowed to do, because validation selects and test only ever reports. And when a question asks whether something ignores order, substitute two permutations and look rather than trying to recall a definition.",
  levels: [
    // ═══ Section 1: Evaluation ═══════════════════════════════════════════
    {
      id: "splits",
      name: "Splits, leakage, and selection",
      problem: "The deck opens here because every later claim about a model's quality depends on these three splits keeping their jobs. Most of the errors are not arithmetic — they are letting one split do another's work.",
      steps: [
        {
          type: "mcq",
          q: "Which plan uses the three splits correctly?",
          opts: [
            "Fit on train, choose the learning rate and checkpoint on validation, then evaluate that choice on test",
            "Try several learning rates, keep the one with the best test accuracy, and report that accuracy",
            "Compute normalisation statistics from all the data including test, then train and tune on validation",
            "Add the test set to training for more data, choose settings on validation, and report validation",
          ],
          a: 0,
          why: "<b>Each split keeps its taught role.</b> Train fits parameters, validation selects settings, and test stays unseen until it evaluates the single final model.<br><br>The deck's wording for each failure is worth memorising: choosing settings by test accuracy <i>\"makes the test set a selection tool, so its score no longer checks unseen data\"</i>; computing statistics from all data <i>\"leaks test information into the model\"</i>; and fitting weights on test <i>\"removes the held-out check, and a validation score used for choosing is not a final result.\"</i>",
          hints: {
            1: "If the test set picked the learning rate, what is left to give an honest estimate?",
            2: "The weights never touch the test set here — but something else does. Which statistic?",
            3: "Two things go wrong in this one: where the weights are fitted, and what number gets reported.",
          },
          defaultHint: "Three of these let the test set influence the model in some way. Find the one that does not.",
        },
        {
          type: "numeric",
          ctx: "A pixel-intensity feature is centred. The mean over all <b>80 training photos</b> is <b>100</b>, so the stored rule is x → x − 100. A <b>validation</b> photo arrives with value <b>130</b>.",
          q: "What is its centred value?",
          answer: 30,
          why: "<b>130 − 100 = 30.</b> The rule was fitted on training data and is applied <i>unchanged</i> everywhere — to training, validation and test alike.<br><br>The trap is recomputing the mean on the set you are evaluating. In the Oct 26 session he worked that version too: the validation/test values 120, 130 and 90 have their own mean of 113.33, which would turn 130 into 16.67. That answer is just as tidy, and just as wrong.<br><br>The deck adds a clarifying note that is easy to skim: the outputs are <b>centred feature values, not prediction errors</b>. A negative one (the test photo at 90 gives −10) is not a mistake.",
          hint: "Which mean does the stored rule use? Not one computed from the photo you are centring.",
        },
        {
          type: "mcq",
          ctx: "An unpruned tree has <b>zero training error</b> and <b>high validation error</b>. You pick the pruning depth with the lowest validation error, then evaluate that tree once on a held-out test set.",
          q: "Which statement is correct?",
          opts: [
            "The selected tree can still have non-zero test error, because selection is not a guarantee",
            "Zero training error on the unpruned tree means it would have generalised well to new data",
            "The pruning depth should be chosen to minimise training error rather than validation error",
            "Choosing the depth on the test set would keep the final estimate unbiased and trustworthy",
          ],
          a: 0,
          why: "<b>Archived Q6, rebuilt as a Check slide.</b> Zero training error with high validation error is the definition of overfitting, and that single observation kills the other three.<br><br>Training error only falls as depth grows, so minimising it just hands back the unpruned tree. Selecting against the test set is exactly what biases it. And the deck names the remaining trap by name: <i>\"Common error: reading validation-based selection as a guarantee. The selected tree can still err on new test points.\"</i>",
          hints: {
            1: "Zero training error together with high validation error has a name, and it is not 'generalises well'.",
            2: "Training error is monotonic in depth. Minimising it returns the tree you started with.",
            3: "The moment the test set chooses something, it stops being a held-out check.",
          },
          defaultHint: "Three options contradict something you can read straight off the stem. One only claims caution.",
        },
        {
          type: "mcq",
          ctx: "Two recipes are each fit on <b>four independent training sets</b> and predict at the same input. The noise-free target is <b>10</b>. Recipe A's four predictions cluster tightly around <b>6</b>. Recipe B's scatter widely but average to <b>10</b>.",
          q: "How do these map onto bias, variance, and fitting?",
          opts: [
            "A is high bias and low variance, so underfitting; B is low bias and high variance, so overfitting",
            "A is high variance and low bias, so overfitting; B is high bias and low variance, so underfitting",
            "A is high bias and high variance; B is low on both, so B is simply the better recipe overall",
            "Both have the same bias, since bias measures spread and only the variances differ here",
          ],
          a: 0,
          why: "<b>Bias is mean minus target; variance is spread across refits.</b> A's mean of 6 misses the target of 10 badly but it does so consistently — high bias, low variance, which is underfitting. B is right on average and unreliable on any single run — low bias, high variance, which is overfitting.<br><br>The pairing to hold: <b>high variance ↔ overfitting, high bias ↔ underfitting.</b><br><br>He said in Lecture 8 that there is no deep question on bias–variance and that it is included because old-school interviewers ask. Know the pairing; don't over-invest.",
          hints: {
            1: "The labels are swapped. A's predictions barely move across the four refits.",
            2: "A is low on one of the two, not high on both — its four predictions sit almost on top of each other.",
            3: "Bias is mean minus target, not spread. Spread is variance.",
          },
          defaultHint: "Work out each recipe's mean and its spread separately, then attach the two names.",
        },
      ],
    },

    // ═══ Metrics ═════════════════════════════════════════════════════════
    {
      id: "metrics",
      name: "When accuracy lies",
      problem: "A single number summarising a classifier hides whichever errors are rare. The deck spends six slides on one inspection dataset because every metric question on the paper is built on this shape.",
      steps: [
        {
          type: "numeric",
          ctx: "An inspection line sees <b>1,000 parts</b>, of which <b>20 are defective</b> and 980 are good. A lazy rule predicts \"good\" for every single part.",
          q: "What accuracy does it score, as a percentage?",
          answer: 98,
          tol: 0.1,
          why: "<b>980 / 1,000 = 98%.</b> It catches <b>0 of 20</b> defects, so recall is 0%.<br><br>One detail the deck adds that is worth having: <b>precision is undefined here, not zero.</b> Nothing was flagged, so the denominator TP + FP is 0, and 0/0 has no value. The slide warns explicitly to \"be careful of division by 0.\"<br><br>Accuracy is a perfectly good metric on balanced data. Under imbalance it reports the size of the majority class.",
          hint: "The rule is right on every good part and wrong on every defective one. Count the good parts.",
        },
        {
          type: "numeric",
          ctx: "Same 1,000 parts, a real classifier this time. The counts are <b>TP 16, FP 24, FN 4, TN 956</b>.",
          q: "What is its precision, as a percentage?",
          answer: 40,
          tol: 0.1,
          why: "<b>16 / (16 + 24) = 16/40 = 40%.</b> Of the 40 parts flagged, 16 really were defective.<br><br>Recall uses the same numerator and a different denominator: <b>16 / (16 + 4) = 16/20 = 80%</b> — of the 20 defective parts, 16 were caught. The deck's framing is the clearest statement of the difference anywhere in the course: <i>\"Both fractions share the numerator 16 but divide by different groups: the 40 flagged parts versus the 20 defective parts.\"</i><br><br>F1 is their harmonic mean, 2pr/(p+r), which here is about 53%.",
          hint: "Precision divides by what you flagged. How many parts were flagged in total?",
        },
        {
          type: "mcq",
          ctx: "A factory flags rare defects. <b>Missing a defect ships it to a customer.</b> A false alarm costs one manual review.",
          q: "Which metric should lead the threshold choice?",
          opts: [
            "Recall, while tracking precision so that the manual review load stays manageable",
            "Precision, since every part that gets flagged ought to turn out to be genuinely defective",
            "Accuracy, since it combines all four counts and most of the parts really are good ones",
            "Specificity, since correctly passing a good part is by far the most common case here",
          ],
          a: 0,
          why: "<b>Recall tracks the costly error.</b> A missed defect reaches a customer; a false alarm costs one review. So you optimise for catching defects and watch precision only to keep the review queue bearable.<br><br>The deck dismisses the others precisely: with rare defects <b>accuracy can stay high even when many defects are missed</b>; <b>precision limits false alarms, which is the cheaper error here</b>, and tolerates misses; <b>specificity counts good parts and can be high while defects slip through</b>.<br><br>Lowering the threshold raises recall and cannot lower it — at 0.2 the deck's example catches 95% of defects at 23.75% precision, versus 45% and 75% at threshold 0.8.",
          hints: {
            1: "That optimises against false alarms, which the stem says are cheap.",
            2: "98% accuracy while catching nothing is the lesson two steps ago.",
            3: "Specificity is about correctly passing good parts, which is not where the cost is.",
          },
          defaultHint: "The stem tells you which error is expensive. Which metric counts that error?",
        },
        {
          type: "mcq",
          q: "You <b>lower</b> the flagging threshold so more parts get flagged. What happens to precision and recall?",
          opts: [
            "Recall cannot fall, while precision may rise or fall depending on what the new flags are",
            "Recall cannot fall, and precision must fall, since more flags always means more false alarms",
            "Both must rise, because flagging more parts catches more defects and confirms more flags",
            "Both are unchanged, since the threshold only reorders parts and never alters the counts",
          ],
          a: 0,
          why: "<b>Lowering a threshold only ever adds flags, never removes them</b>, so every defect caught before is still caught and recall cannot fall. But the new flags can be true or false, so precision can move either way.<br><br>The deck's numbers: at threshold 0.2, 80 parts flagged with 19 true and 61 false — precision 23.75%, recall 95%. At 0.8, 12 flagged with 9 true and 3 false — precision 75%, recall 45%. Its exact phrasing: <i>\"Lowering the threshold can add both true and false alarms; recall cannot fall, but precision can move either way.\"</i>",
          hints: {
            1: "Nearly right, but 'must fall' is too strong — the new flags could be mostly genuine defects.",
            2: "Precision has a denominator that grows too. More flags is not automatically better precision.",
            3: "The threshold decides which parts get flagged, so the counts very much do change.",
          },
          defaultHint: "Think about what adding flags does to each fraction's numerator and denominator separately.",
        },
      ],
    },

    // ═══ Classical ═══════════════════════════════════════════════════════
    {
      id: "classical",
      name: "Trees, neighbours, and clusters",
      problem: "The classical block supplies a reliable handful of questions, and almost all of them hinge on one distinction each: binary versus continuous, vote versus average, converged versus optimal.",
      steps: [
        {
          type: "mcq",
          ctx: "N samples, each with <b>k</b> attributes, k ≪ N. Depth counts nodes from root to leaf, including the leaf.",
          q: "With <b>all attributes binary</b>, what are the maximum leaf count and maximum depth?",
          opts: [
            "At most 2^k leaves and depth O(k), since each attribute can be split once along a path",
            "At most N leaves and depth O(N), since the sample count is what limits the tree's growth",
            "At most 2^k leaves but depth O(log k), since a balanced binary tree is always built",
            "At most N·k leaves and depth O(k), since each sample may be split on every attribute",
          ],
          a: 0,
          why: "<b>A binary attribute is exhausted once you split on it</b>, so a root-to-leaf path can be at most k long, and a full binary tree of depth k has 2^k leaves.<br><br><b>Now change one word.</b> With all attributes <b>continuous</b>, a single attribute can be split repeatedly at different thresholds, so the attribute count no longer bounds anything. The data does instead: at most <b>N</b> leaves and depth <b>N − 1</b>. You cannot have more leaves than samples.<br><br>That binary-versus-continuous switch is the entire trick in archived questions 27 through 30 — four questions off one setup.",
          hints: {
            1: "That is the continuous case. A binary attribute runs out after one split.",
            2: "Nothing forces the tree to be balanced — a worst case is exactly what is being asked for.",
            3: "Samples do not multiply the leaf count here; the attributes are what bound a binary tree.",
          },
          defaultHint: "How many times can you usefully split on a single binary attribute along one path?",
        },
        {
          type: "numeric",
          ctx: "<b>Unweighted kNN regression</b> with <b>k = 3</b>. The three nearest training points have targets <b>2, 5 and 11</b>.",
          q: "What does the model predict?",
          answer: 6,
          why: "<b>(2 + 5 + 11) / 3 = 6.</b> The neighbours carry <i>values</i>, not class labels, so this is regression and you average. No voting happens.<br><br>Archived Q51, rebuilt as a Check slide, and the deck names every wrong path: <b>18 forgets to divide by k, 5 takes the median, and 11 takes the largest target.</b> All three will be options.<br><br>Every earlier kNN example in the course was classification, where you take the majority vote. The word that decides which you are doing is whether the neighbours carry labels or numbers.",
          hint: "Look at what the neighbours carry. Numbers, not labels — so which aggregation applies?",
        },
        {
          type: "pick",
          q: "Same data, classification now. Neighbours sorted by increasing distance are <b>purple, orange, purple, orange, orange</b>. Click the winner at each k.",
          rounds: [
            { ctx: "<b>k = 1.</b> Only the single nearest neighbour votes.", items: ["purple", "orange"], answer: 0,
              why: "One vote, and the nearest neighbour is purple." },
            { ctx: "<b>k = 3.</b> The three nearest are purple, orange, purple.", items: ["purple", "orange"], answer: 0,
              why: "Purple takes it <b>2 to 1</b>." },
            { ctx: "<b>k = 5.</b> All five vote: purple, orange, purple, orange, orange.", items: ["purple", "orange"], answer: 1,
              why: "<b>Orange, 3 to 2 — the flip.</b> Letting more neighbours vote changed the answer, which is the whole lesson. Small k overfits, because one noisy neighbour decides; large k underfits, because local structure washes out. Choose k on validation." },
          ],
          hint: "Count the labels among the first k in the sorted list, and take the majority.",
          why: "<b>The prediction depends on k, and it flips at k = 5.</b> Votes here are unweighted and the distances are distinct, so there are no ties to break.",
        },
        {
          type: "numeric",
          ctx: "Three points — <b>1, 5 and 6</b> — are assigned to one k-means cluster. Its centre sits at their mean, <b>4</b>.",
          q: "What does this cluster contribute to the k-means objective?",
          answer: 14,
          why: "<b>(1−4)² + (5−4)² + (6−4)² = 9 + 1 + 4 = 14.</b> The objective is the total <b>squared</b> distance from points to their assigned centres.<br><br>And the centre is not arbitrary: with the assignments held fixed, <b>the mean is exactly the value that minimises this sum</b>. That is why step 3 of the algorithm recomputes centres as means rather than medians or anything else.<br><br>If a question offers plain (unsquared) distance as the k-means criterion, that is the distractor.",
          hint: "Distance from each point to 4, then square each one before adding.",
        },
        {
          type: "mcq",
          ctx: "Two complete runs of k-means on the <b>same data {1, 3, 5, 9}</b> with the <b>same k = 2</b>. Run A ends at {1,3} and {5,9}, objective <b>10</b>. Run B ends at {1,3,5} and {9}, objective <b>8</b>.",
          q: "What does this show?",
          opts: [
            "Initialisation decides where it converges, and B's lower total does not prove B is optimal",
            "Run A has not finished converging, since further assignment steps would move it toward B",
            "The algorithm is deterministic, so the two runs must differ in their data or in their k",
            "B is the global optimum, because comparing two converged runs identifies the best clustering",
          ],
          a: 0,
          why: "<b>Both runs have converged</b> — repeating the assign-and-average steps changes neither. They differ only in where they started, which is why implementations run k-means several times with different seeds and keep the lowest objective.<br><br>The deck's closing caution is the examinable half: <i>\"Comparing two converged runs does not prove global optimality.\"</i> There may be a third, better clustering that neither run found.<br><br>So poor initial centroids mean the algorithm <b>may converge to a local minimum</b>. It still runs, the cluster count does not change, and it does not switch to a hierarchical method.",
          hints: {
            1: "Both are at fixed points. Reassigning and re-averaging would change nothing in either.",
            2: "Same data, same k — the stem says so. Something else differs between the runs.",
            3: "Lower of two is not lowest of all. Only an exhaustive search would establish that.",
          },
          defaultHint: "What is the only thing that differed between these two runs?",
        },
      ],
    },

    // ═══ Section 2: Dense shapes ═════════════════════════════════════════
    {
      id: "dense",
      name: "Counting parameters in a dense network",
      problem: "Parameter arithmetic is the most predictable scoring opportunity on the paper. The method never varies; the marks are lost on the clause that says whether biases count.",
      steps: [
        {
          type: "numeric",
          ctx: "A dense network with widths <b>2 → 3 → 1</b>, <b>including one bias per unit</b>.",
          q: "How many trainable parameters?",
          answer: 13,
          why: "<b>6 + 3 + 3 + 1 = 13.</b> W₁ is 3 × 2 = 6 weights with b₁ = 3 biases; W₂ is 1 × 3 = 3 weights with b₂ = 1 bias.<br><br>The rule: a dense layer from m inputs to n units has <b>m × n weights plus n biases</b> — <i>one bias per unit</i>, never one per layer. Getting 11 means you counted one bias per layer; getting 9 means you dropped biases entirely.<br><br>Activations are recomputed per example and are not parameters, and ReLU has nothing to learn.",
          hint: "Two weight matrices and two bias vectors. One bias for every unit in a layer, not one for the layer.",
        },
        {
          type: "numeric",
          ctx: "A network with <b>no biases</b> and widths <b>3, 4, 4, 2</b> has 36 weights. Now <b>both hidden widths double</b>, giving 3, 8, 8, 2.",
          q: "How many weights does the new network have?",
          answer: 104,
          why: "<b>3×8 + 8×8 + 8×2 = 24 + 64 + 16 = 104.</b><br><br>Archived Q24, rebuilt as a Check slide, and the deck names both wrong answers: <i>\"72 doubles 36 and 144 quadruples it. Only the hidden-to-hidden layer grows fourfold.\"</i> A layer with one doubled side merely doubles; a layer sitting between <i>two</i> doubled widths quadruples, going from 4×4 = 16 to 8×8 = 64.<br><br>The original paper asks it as a ratio instead: 10-20-20-10 with no biases is 800, doubled it is 2,400, so the answer is <b>3</b>. Same question, arithmetic hidden.",
          hint: "Recompute all three products with the new widths. Watch the middle one in particular.",
        },
        {
          type: "mcq",
          ctx: "Two affine layers stacked with <b>no activation</b> between them: h = W₁x + b₁, then y = W₂h + b₂.",
          q: "What does the pair compute?",
          opts: [
            "A single affine map, with combined weight W₂W₁ and combined bias W₂b₁ + b₂",
            "A richer function than one layer, since two matrices hold more parameters than one",
            "A piecewise map that is affine on each region but not affine across the whole input",
            "The same map as one layer only when W₁ and W₂ happen to be square and invertible",
          ],
          a: 0,
          why: "<b>Substituting gives y = (W₂W₁)x + (W₂b₁ + b₂)</b>, and both of those are just a matrix and a vector. The deck's numeric version makes it undeniable: <b>h = 3x + 2 and y = 2h − 1 give y = 6x + 3</b>. Two layers, one line.<br><br>So depth without nonlinearity buys nothing — a hundred stacked linear layers compute the same family as one. More parameters does not mean more expressive power when they collapse.<br><br>He has flagged this in Lecture 3, Lecture 7 and the review deck. Three appearances is as strong a signal as this course gives.",
          hints: {
            1: "More parameters, yes — but check what function the composition actually computes.",
            2: "Nothing here is piecewise. There is no activation to introduce a kink.",
            3: "The collapse is pure matrix multiplication and holds for any shapes that compose.",
          },
          defaultHint: "Substitute the first equation into the second and group the terms.",
        },
        {
          type: "mcq",
          ctx: "An MLP with one hidden layer, two inputs, one output, and <b>no activation</b> after the hidden or the output layer. Assume unlimited data and hidden units.",
          q: "Which function can it predict accurately?",
          opts: [
            "y = x only, since with no activation anywhere the network is one affine map",
            "Both y = x and y = |x|, since enough hidden units can approximate a kinked function",
            "y = x² only, because the two layers multiply and produce a quadratic in the input",
            "All of y = x, y = |x| and y = x², given enough hidden units and training data",
          ],
          a: 0,
          why: "<b>Archived Q44.</b> With no activation the whole network collapses to an affine map, which can represent y = x exactly and nothing with curvature or a kink.<br><br><b>|x| is the canonical example</b> of something ReLU builds easily and a linear map cannot — it needs the slope to change at zero. And x² is not affine at all.<br><br>This is the same collapse as the previous step, asked from the other direction: there the question was \"what does the stack compute\", here it is \"what can it fit\".<br><br>Which is also why <b>ReLU counts as non-linear</b>: not because it only outputs positive values, but because it <b>introduces a point of non-linearity at zero where the slope changes</b>.",
          hints: {
            1: "Unlimited hidden units do not help when every one of them is linear. Nothing adds a kink.",
            2: "Layers compose by matrix multiplication, not by multiplying their inputs together.",
            3: "Two of these have curvature or a kink, and an affine map has neither.",
          },
          defaultHint: "What shape is the graph of an affine function of one input?",
        },
      ],
    },

    // ═══ Convolution ═════════════════════════════════════════════════════
    {
      id: "conv",
      name: "Convolution arithmetic",
      problem: "He said in Lecture 4 that output-size calculation with stride and padding is something the course usually tests, and the deck gives it two slides plus a Check question. This is the densest scoring area on the paper.",
      steps: [
        {
          type: "numeric",
          ctx: "A convolution with input width <b>n = 9</b>, padding <b>p = 1</b> on each side, kernel <b>k = 3</b>, stride <b>s = 2</b>.",
          q: "What is the output width?",
          answer: 5,
          why: "<b>(9 + 2 − 3)/2 + 1 = 4 + 1 = 5.</b><br><br>Counting the windows directly confirms it: padded indices run 0 to 10, and valid window starts are <b>0, 2, 4, 6, 8</b> — five of them. The formula is just \"how many moves fit, plus the first window.\"<br><br>Two cautions from the slide. <b>p is added on each side</b>, hence 2p. And if the division does not come out whole, the configuration does not tile the input evenly — which is itself a sign you have misread something.<br><br>The deck also warns that lowercase n is a spatial width while uppercase N usually means batch size.",
          hint: "Pad first, then count how many windows of width 3 start at every second position.",
        },
        {
          type: "numeric",
          ctx: "<b>Two 3×3 filters</b> over an input with <b>3 channels</b>, one bias per filter.",
          q: "How many parameters does the layer have?",
          answer: 56,
          why: "<b>2 × (3 × 3 × 3 + 1) = 2 × 28 = 56.</b> A standard filter spans the <i>full</i> input depth, so each one is 3 × 3 × 3 = 27 weights, plus its single bias.<br><br>The general formula: <b>F² × Cin × K + K</b>, where K is the number of filters.<br><br>The deck's key observation beside this slide: <i>\"A larger input image reuses the same 56 parameters at more positions.\"</i> Parameter count is completely independent of input size — that is exactly what weight sharing means, and it is why a CNN scales to large images where a dense layer cannot.<br><br>For scale, the same 3-channel 2-filter layer costs <b>8</b> parameters at 1×1 and <b>152</b> at 5×5.",
          hint: "A filter covers all input channels. Work out one filter first, then remember its bias.",
        },
        {
          type: "numeric",
          ctx: "A <b>24×24×2</b> input passes through one convolution with a square <b>K×K</b> kernel, stride 1, padding 0, producing <b>22×22×5</b>.",
          q: "What is K?",
          answer: 3,
          why: "<b>24 − K + 1 = 22, so K = 3.</b> Checking the alternatives: K = 2, 5, 7 give output widths 23, 20 and 18.<br><br>Archived Q26, rebuilt as a Check slide, and the deck names the trap: <i>\"Common error: choosing 5 from the 5 output channels. Channel counts do not enter the spatial formula.\"</i> The 2 input channels and 5 output channels are both irrelevant to the width.<br><br>The original paper gives the same question forward: input (32,32,3) → output (28,28,4) with stride 1 and no padding, so the kernel side is 32 − 28 + 1 = 5 and the full answer in (Cin, Kh, Kw, Cout) form is <b>(3, 5, 5, 4)</b>.",
          hint: "With stride 1 and no padding the formula shortens to n − K + 1. Set it equal to 22.",
        },
        {
          type: "numeric",
          ctx: "A <b>1×1 convolution</b> with 2 input channels and 1 output channel, weights <b>(1, 2)</b> and bias <b>−1</b>. At one spatial position the two channel values are <b>(2, 5)</b>.",
          q: "What does it output there?",
          answer: 11,
          why: "<b>1(2) + 2(5) − 1 = 2 + 10 − 1 = 11.</b> A 1×1 filter forms a learned combination <i>across channels at one spot</i> and never reads a neighbouring position. (At a second position holding (4, 1) it would give 1(4) + 2(1) − 1 = 5.)<br><br><b>Why bother?</b> Cost. Going from an 8×8×64 map to 32 channels with a direct 3×3 costs 3×3×64×32 + 32 = <b>18,464</b> parameters. Squeezing first with a 1×1 (64→16, 1,040 parameters) and then applying a 3×3 (16→32, 4,640) costs <b>5,680</b> — about a third. That is the bottleneck pattern inside ResNet and Inception.<br><br>The deck's honest footnote: <i>\"Fewer parameters; the two paths can represent different functions.\"</i> It is a trade.",
          hint: "Multiply each channel value by its weight, add them, then add the bias. Neighbours are not involved.",
        },
        {
          type: "mcq",
          ctx: "A 3×3 convolution (stride 1, padding 1) maps an <b>8×8×64</b> tensor to <b>8×8×16</b>. You change <b>only the filter count</b>, from 16 to 24.",
          q: "What changes?",
          opts: [
            "Output channels become 24; the height, width and each filter's 3×3×64 shape are unchanged",
            "Each filter grows spatially, so it now covers more neighbouring positions per window",
            "Output height and width grow, while the output channel count remains at 16 as before",
            "Each filter now reads 24 of the input channels instead of spanning all 64 of them",
          ],
          a: 0,
          why: "<b>One filter makes one output channel.</b> Twenty-four filters give twenty-four channels, and nothing else moves.<br><br>The deck rules out the others cleanly: each filter <b>still reads the same 3×3 neighbourhood</b> when only the count changes; height and width <b>depend on kernel, stride and padding</b>, none of which changed; and in standard convolution <b>every filter spans all input channels</b>, here still 64.<br><br>That last point is the one people lose marks on. There is no such thing as a standard filter that reads a subset of the depth.",
          hints: {
            1: "The kernel size is still 3×3. You changed how many filters there are, not how big each one is.",
            2: "Spatial size is set by kernel, stride and padding. All three are untouched.",
            3: "A standard filter always spans the full input depth, whatever the filter count.",
          },
          defaultHint: "Filter count controls exactly one thing. Which dimension of the output is it?",
        },
      ],
    },

    // ═══ Pooling ═════════════════════════════════════════════════════════
    {
      id: "pool",
      name: "Pooling, and what counts as linear",
      problem: "Pooling looks like the simplest layer in the network and supplies some of the trickiest true/false options, because two of its properties are easy to state and easy to swap.",
      steps: [
        {
          type: "grid",
          q: "<b>2×2 max pooling, stride 2.</b> Click every cell whose value <b>survives</b> into the output.",
          rows: ["row 1", "row 2", "row 3", "row 4"],
          cols: ["col 1", "col 2", "col 3", "col 4"],
          cellLabel: (r, c) => String([[1, 1, 2, 4], [5, 6, 7, 8], [3, 2, 1, 0], [1, 2, 3, 4]][r][c]),
          cellAria: (r, c, on) => "value " + [[1, 1, 2, 4], [5, 6, 7, 8], [3, 2, 1, 0], [1, 2, 3, 4]][r][c] + (on ? ", selected" : ""),
          target: (r, c) => (r === 1 && c === 1) || (r === 1 && c === 3) || (r === 2 && c === 0) || (r === 3 && c === 3),
          onLabel: "survives",
          offLabel: "discarded",
          hintFn: (e) => e.count > 2
            ? "Four non-overlapping 2×2 windows: top-left, top-right, bottom-left, bottom-right. Take the single largest value in each."
            : "Close. Check the bottom two windows — the maximum is not always in the same corner.",
          why: "<b>The four windows give 6, 8, 3 and 4.</b><br><br>Top-left holds 1, 1, 5, 6 → <b>6</b>. Top-right holds 2, 4, 7, 8 → <b>8</b>. Bottom-left holds 3, 2, 1, 2 → <b>3</b>. Bottom-right holds 1, 0, 3, 4 → <b>4</b>.<br><br>Two properties the slide states directly: <b>no learnable parameters</b>, and <b>some invariance to small shifts</b> within a window — move the 6 anywhere inside its 2×2 block and the output is unchanged.<br><br>Note that stride 2 with a 2×2 window means the windows do not overlap, which is why exactly four of the sixteen cells survive.",
        },
        {
          type: "mcq",
          ctx: "Take <b>u = (2, 0)</b> and <b>v = (0, 3)</b>. Then max(u) + max(v) = 2 + 3 = <b>5</b>, while max(u + v) = max(2, 3) = <b>3</b>.",
          q: "What does this establish?",
          opts: [
            "Max pooling is not linear, since a linear map must satisfy f(u + v) = f(u) + f(v)",
            "Max pooling is not linear, and neither is average pooling, since both discard information",
            "Max pooling is linear, since the inequality only shows that it is not strictly increasing",
            "Nothing about linearity, since additivity is sufficient for a map to be linear but not necessary",
          ],
          a: 0,
          why: "<b>Additivity is a necessary test of linearity.</b> A linear map must pass it; max gives 3 where additivity demands 5, so max fails and is therefore non-linear.<br><br><b>Average pooling IS linear</b> — a mean over fixed entries is a weighted sum, and weighted sums are additive. So the contrast is: max pooling contributes non-linearity, average pooling does not, and <i>neither</i> has trainable parameters. Those two facts get offered as competing options, so read which one the question asked for.<br><br>On the archived paper (Q31) the question is which layer is <b>not</b> a linear operation, and the answer there is the <b>ReLU layer</b>.",
          hints: {
            1: "Half right. Check average pooling against the same test — a mean of fixed entries is a weighted sum.",
            2: "Failing additivity is not a technicality. It is the definition being violated.",
            3: "It is the other way round: additivity is necessary for linearity, so failing it settles the matter.",
          },
          defaultHint: "Write down what linearity requires, then check whether these numbers satisfy it.",
        },
        {
          type: "mcq",
          q: "Are pooling layers <b>necessary</b> in a convolutional network?",
          opts: [
            "No — they mainly reduce dimensionality and limit overfitting, and strided convolutions can replace them",
            "Yes — without pooling the spatial correlation between neighbouring pixels would not be preserved",
            "Yes — without pooling a convolutional network will usually hit the vanishing gradient problem",
            "No — their role is mainly to amplify the non-linearity already supplied by the activations",
          ],
          a: 0,
          why: "<b>Archived Q10.</b> Pooling is useful, not required. Its job is downsampling — fewer positions to carry forward, which cuts computation and limits overfitting — and a convolution with stride 2 achieves the same reduction while learning how to do it. Many modern architectures do exactly that.<br><br>The distractors each attach a real phenomenon to the wrong layer: <b>spatial correlation</b> is preserved by convolution's local windows, not by pooling; <b>vanishing gradients</b> are about depth and activation choice, which pooling does not address; and while max pooling <i>is</i> non-linear, amplifying non-linearity is not why it is there.<br><br>One more from the paper (Q2): among a conv layer, max pooling, sigmoid and batch norm, <b>max pooling is the fastest</b> in floating-point operations — it only compares, never multiplies.",
          hints: {
            1: "Convolution's local windows are what preserve spatial structure. Pooling comes after that.",
            2: "Vanishing gradients are a depth-and-activation problem. Pooling does not touch either.",
            3: "True that max pooling is non-linear, but that is a side effect rather than its purpose.",
          },
          defaultHint: "What would you lose if you deleted every pooling layer and used stride-2 convolutions instead?",
        },
      ],
    },

    // ═══ Section 3: Losses ═══════════════════════════════════════════════
    {
      id: "loss",
      name: "Why a loss has to be differentiable",
      problem: "Before any gradient can be computed, the loss has to admit one. The deck builds this with a spam classifier because the failure is easiest to see when the loss is a plain mistake count.",
      steps: [
        {
          type: "mcq",
          ctx: "A known-spam email (target y = 1). The model outputs a real-valued score s and predicts spam when s ≥ 0. Under <b>0/1 mistake loss</b>, a score of <b>−2</b> gives loss 1, and a score of <b>−1</b> also gives loss <b>1</b>.",
          q: "Why is that a problem for training?",
          opts: [
            "Real improvement left the loss unchanged, so there is no signal telling the optimiser which way to move",
            "The loss is too large in both cases, so the gradient it produces will be far too big to use safely",
            "The scores are negative, so the loss cannot be differentiated until the scores are made positive",
            "The loss is correct but slow, so training would still converge given enough additional epochs",
          ],
          a: 0,
          why: "<b>Moving the score from −2 to −1 is genuine progress</b> — the model is now much closer to the right side of the threshold — and the loss does not notice.<br><br>Plotted, 0/1 loss is two flat shelves with a cliff at s = 0. On the flats, <b>slope = 0</b>: no direction. At the jump, <b>slope undefined</b>: the chain rule cannot pass through. There is no usable signal anywhere on the curve.<br><br>Contrast squared loss with target 2: at ŷ = 0 the loss is 4 with slope −4; at ŷ = 1 it is 1 with slope −2; at ŷ = 3 it is 1 with slope +2. Every point now carries <b>direction and magnitude</b>, and the magnitude shrinks near the target, which naturally slows the steps as you arrive.",
          hints: {
            1: "The gradient is not too big here — look again at the slope of a flat region.",
            2: "Sign is not the issue. The loss is flat on both sides of the threshold.",
            3: "More epochs cannot help when every step is given zero information about direction.",
          },
          defaultHint: "Sketch the loss against the score. What is the slope on each side of the threshold?",
        },
        {
          type: "mcq",
          ctx: "Target t = 2 and loss L = (ŷ − t)². At a prediction of <b>ŷ = 1</b> the loss is 1 and the slope ∂L/∂ŷ is <b>−2</b>.",
          q: "What does that slope tell you?",
          opts: [
            "Raise ŷ a little, and by a moderate amount — the sign gives direction, the size gives urgency",
            "Lower ŷ a little, since a negative slope always indicates the prediction is currently too large",
            "Nothing yet, since the slope at a single point cannot indicate which direction reduces the loss",
            "Raise ŷ all the way to 2, since the slope points directly at the value that makes the loss zero",
          ],
          a: 0,
          why: "<b>A negative slope means the loss falls as ŷ rises</b>, so you raise it. The magnitude of 2 is moderate — compare ŷ = 0, where the slope is −4 and the same loss function is urging a bigger move.<br><br>The last option is tempting and wrong for a reason worth internalising: <b>the gradient is local.</b> It tells you the direction of steepest descent right here and nothing about how far to go. That is precisely why there is a separate learning rate.<br><br>The deck's phrasing: <i>\"A negative slope calls for raising ŷ a little; a positive slope calls for lowering it.\"</i>",
          hints: {
            1: "Check the sign convention: the slope says how the LOSS changes as ŷ increases.",
            2: "A slope at a point gives direction and rate. That is exactly what descent needs.",
            3: "The gradient is local — it never tells you the distance to the minimum.",
          },
          defaultHint: "If the loss decreases as ŷ increases, which way should ŷ move?",
        },
        {
          type: "mcq",
          q: "Could backpropagation and SGD train a network under <b>0/1 loss</b>, assuming you could magically differentiate it?",
          opts: [
            "No, regardless of the output activations or the network architecture used",
            "Yes, but only for certain architectures and certain output activation functions",
            "Yes, regardless of the output activations or the network architecture used",
            "Yes, but only for some output activations, whatever the architecture happens to be",
          ],
          a: 0,
          why: "<b>Archived Q45.</b> The problem is not that the derivative is hard to obtain — it is that the derivative is <b>zero almost everywhere</b>, and zero carries no information. Granting differentiability does not grant a non-zero gradient.<br><br>No choice of architecture or output activation changes that, because the flatness is a property of the <i>loss</i>, not of the model producing the score.<br><br>This is the whole reason cross-entropy replaces accuracy as a training objective. <b>Accuracy is what you care about; cross-entropy is what you can optimise.</b> You report the first and train on the second.",
          hints: {
            1: "The flatness is in the loss function, so no architecture can route around it.",
            2: "Where would a non-zero gradient come from? The loss is flat on both sides of the jump.",
            3: "Output activations shape the score, not the loss's response to a change in that score.",
          },
          defaultHint: "What is the derivative of a flat function, and what does an optimiser do with it?",
        },
      ],
    },

    // ═══ Backprop walkthrough ════════════════════════════════════════════
    {
      id: "backprop",
      name: "The 2-2-1 walkthrough",
      problem: "Nine slides on one network — the deck's longest sustained example by a wide margin. Everything from here to the updated weights comes from a single forward pass, which is what makes backpropagation one sweep rather than nine separate calculations.",
      steps: [
        {
          type: "numeric",
          ctx: "Inputs <b>x₁ = 1, x₂ = 2</b>. Hidden unit 1 has weights (1, 0.5) and bias <b>−0.5</b>; hidden unit 2 has weights (−1, 1) and bias <b>0</b>. Both use ReLU. Output weights are <b>v₁ = 1, v₂ = −0.5</b> with output bias <b>c = 0</b>.",
          q: "What is the prediction ŷ?",
          answer: 1,
          why: "<b>ŷ = 1.0.</b><br><br>z₁ = 1(1) + 0.5(2) − 0.5 = <b>1.5</b>, so h₁ = ReLU(1.5) = <b>1.5</b>.<br>z₂ = −1(1) + 1(2) + 0 = <b>1</b>, so h₂ = ReLU(1) = <b>1</b>.<br>ŷ = 1(1.5) + (−0.5)(1) + 0 = <b>1.0</b>.<br><br>With target t = 2, the loss is (1 − 2)² = <b>1</b>.<br><br>Note that <b>both pre-activations are positive</b>, so both ReLUs are in their active region and ReLU′ = 1 on both paths. If either had been negative, that path's gradient would be dead — which is the next level's subject.<br><br>The deck's reading discipline: inputs in the input nodes, weights on their edges, biases beside hidden nodes. Read each multiplication from an edge and each sum at the receiving node.",
          hint: "Two hidden pre-activations, then ReLU on each, then the weighted sum at the output with its bias.",
        },
        {
          type: "numeric",
          ctx: "Same network, same forward pass: ŷ = 1, t = 2, h₁ = 1.5, h₂ = 1. The loss is L = (ŷ − t)², so <b>∂L/∂ŷ = 2(ŷ − t) = −2</b>.",
          q: "What is ∂L/∂v₁, the gradient for the first output weight?",
          answer: -3,
          why: "<b>(−2)(h₁) = (−2)(1.5) = −3.</b><br><br>Each output-layer gradient is the upstream signal times whatever that parameter multiplies. So ∂L/∂v₂ = (−2)(1) = <b>−2</b>, and ∂L/∂c = (−2)(1) = <b>−2</b>, since the bias multiplies a constant 1.<br><br>Going further back: ∂L/∂h₁ = (−2)(v₁) = <b>−2</b> and ∂L/∂h₂ = (−2)(v₂) = <b>+1</b>. <i>Note the sign flip</i> — v₂ is negative, so hidden unit 2 wants to move the opposite way.<br><br>Both ReLUs pass the signal unchanged, so δ₁ = −2 and δ₂ = +1. Then ∂L/∂wᵢⱼ = δᵢ × xⱼ gives <b>∂L/∂W = [−2, −4; +1, +2]</b> and ∂L/∂b = (−2, +1).<br><br><b>A structural check the deck points out:</b> column 2 of ∂L/∂W is exactly twice column 1, because x₂ = 2x₁. If yours is not in that ratio, you slipped.",
          hint: "Upstream gradient times the thing this weight multiplies. What does v₁ multiply?",
        },
        {
          type: "order",
          q: "Put one backpropagation sweep in order. Click the five stages from first to last.",
          pieces: [
            "Run the forward pass and record every intermediate value",
            "Compute the loss and its derivative with respect to the prediction",
            "Multiply back through the output weights to reach the hidden activations",
            "Pass through each ReLU, zeroing the paths whose pre-activation was negative",
            "Multiply by the inputs to get the first-layer weight gradients",
          ],
          posHints: [
            "Nothing can be differentiated until the values exist. What produces them?",
            "You have the activations. The backward sweep starts at the one number training is trying to reduce.",
            "You have ∂L/∂ŷ. The next thing between it and the hidden units is the output layer.",
            "The signal has reached the hidden activations. What sits between an activation and its pre-activation?",
            "You have δ for each hidden unit. One multiplication left to reach the weights.",
          ],
          why: "<b>One forward sweep, then one backward sweep.</b> Every gradient in this network comes from the single forward pass recorded in stage 1 — nothing is recomputed partway through, which is exactly what makes backpropagation efficient rather than nine separate calculations.<br><br>The ReLU stage is where paths die. Here both pre-activations were positive so ReLU′ = 1 and the signal passed intact; a negative pre-activation would multiply that path by 0 and the weights feeding it would receive nothing.",
        },
        {
          type: "numeric",
          ctx: "The nine gradients are w₁₁ −2, w₁₂ −4, w₂₁ +1, w₂₂ +2, b₁ −2, b₂ +1, v₁ −3, v₂ −2, c −2. The learning rate is <b>η = 0.05</b>, and w₁₁ started at <b>1</b>.",
          q: "What is w₁₁ after one update?",
          answer: 1.10,
          tol: 0.005,
          why: "<b>1 − 0.05(−2) = 1 + 0.1 = 1.10.</b><br><br>The full update: w₁₁ → 1.10, w₁₂ → 0.70, w₂₁ → −1.05, w₂₂ → 0.90, b₁ → −0.40, b₂ → −0.05, v₁ → 1.15, v₂ → −0.40, c → 0.10.<br><br><b>Look at the signs across the whole table.</b> Every parameter with a negative gradient went <i>up</i>; every one with a positive gradient went down. Subtracting a negative adds. That single consequence of the update rule is the most frequently tested fact in the optimisation block, and here you can see it happen nine times at once.",
          hint: "new = old − η × gradient. The gradient is negative, so watch what subtracting it does.",
        },
        {
          type: "numeric",
          ctx: "Re-run the network with the updated parameters. The new hidden activations are <b>h₁ = 2.10</b> and <b>h₂ = 0.70</b>, with <b>v₁ = 1.15, v₂ = −0.40, c = 0.10</b>.",
          q: "What is the new prediction ŷ?",
          answer: 2.235,
          tol: 0.005,
          why: "<b>1.15(2.10) − 0.40(0.70) + 0.10 = 2.415 − 0.28 + 0.10 = 2.235.</b><br><br>And the new loss: (2.235 − 2)² = <b>0.055225</b>, down from <b>1</b>. One step cut the loss by a factor of about eighteen.<br><br><b>Notice it overshot.</b> The prediction went from 1, past the target of 2, to 2.235. A single gradient step is not guaranteed to land <i>on</i> the target — only to move downhill locally, which it did. A smaller learning rate would have undershot instead.<br><br>This is the payoff of the whole nine-slide sequence: the method is mechanical, and when you run it the loss actually falls.",
          hint: "Weighted sum of the two new hidden activations, then add the new output bias.",
        },
      ],
    },

    // ═══ The update step ═════════════════════════════════════════════════
    {
      id: "step",
      name: "One step, and the three slips",
      problem: "The update rule is one line, and the deck still gives it two Check slides — because almost every lost mark here comes from a sign or a convention rather than from the arithmetic itself.",
      steps: [
        {
          type: "mcq",
          ctx: "The update is w ← w − η(dL/dw) with a <b>positive</b> learning rate η. Backpropagation reports <b>dL/dw < 0</b>.",
          q: "What happens to w?",
          opts: [
            "It increases, because raising w lowers the loss locally and the rule steps downhill",
            "It decreases, because a negative slope means that raising w would raise the loss locally",
            "It is unchanged, because a negative slope is the signal that w sits at a local minimum",
            "It increases, and η flips sign so that the step follows the gradient rather than opposing it",
          ],
          a: 0,
          why: "<b>−η(dL/dw) is positive when the gradient is negative, so w rises.</b> And the loss still falls, because a negative gradient means exactly that the loss decreases as w increases.<br><br>The deck dismantles each distractor: a negative slope means the loss <b>falls</b> locally as w rises, not grows; <b>a minimum has zero slope</b>, and a non-zero slope guarantees a small move can lower the loss; and <b>η stays positive</b> — the minus sign in the update rule already points downhill.<br><br>Note the word <i>locally</i>. The guarantee holds for a small enough step near the current point, and the deck adds that a finite step still needs checking.",
          hints: {
            1: "Work the signs: minus times minus. And check what a negative gradient says about the loss.",
            2: "A minimum has ZERO slope. A non-zero slope means there is still somewhere better nearby.",
            3: "η never changes sign. The rule's own minus sign is what makes the step oppose the gradient.",
          },
          defaultHint: "Substitute a negative number for dL/dw into w − η(dL/dw) and see which way w moves.",
        },
        {
          type: "numeric",
          ctx: "A model predicts wx with loss <b>(wx − y)²</b> — note there is <b>no ½ factor</b>. Values: x = 3, y = 5, w = 1, learning rate 0.05.",
          q: "What is w after one SGD step?",
          answer: 1.6,
          tol: 0.005,
          why: "<b>1.6.</b> Differentiate: dL/dw = 2(wx − y)x. Substitute: wx − y = 3 − 5 = −2, so the gradient is 2(−2)(3) = <b>−12</b>. Step: w ← 1 − 0.05(−12) = 1 + 0.6 = <b>1.6</b>.<br><br>Sanity check: the prediction rises from 3 to 4.8, toward the target of 5, and the exact solution w = 5/3 ≈ 1.667 is closer to 1.6 than to 1.<br><br><b>Archived Q36, and the deck names all three slips:</b><br>• <b>1.3</b> — adds a ½ factor, halving the gradient to −6.<br>• <b>0.4</b> — flips the update sign, doing w + ηg. That climbs the loss.<br>• <b>−0.6</b> — reports 0.05 × (−12), the <i>step size</i>, instead of the new weight.<br><br>All three are one small slip away and all three will be sitting in the options.",
          hint: "Differentiate first — the chain rule brings down a 2 because there is no ½ to cancel it.",
        },
        {
          type: "numeric",
          ctx: "Momentum with <b>m_new = 0.5·m_old + g</b>, then <b>w ← w − 0.1·m_new</b>. The current gradient is <b>g = 2</b>, and the stored momentum is <b>m_old = 4</b>.",
          q: "What is the size of the step Δw? (Give it as a negative number.)",
          answer: -0.4,
          tol: 0.005,
          why: "<b>m_new = 0.5(4) + 2 = 4</b>, so Δw = −0.1(4) = <b>−0.4</b>.<br><br>With <b>m_old = 0</b> and the same current gradient, m_new = 2 and the step is only <b>−0.2</b>. <i>Same gradient, different history, double the step.</i><br><br>That is the whole idea: momentum builds a running mean of recent gradients, so consistent directions accumulate while zigzags cancel. The deck's framing is that updates can zigzag even when the long-term direction is consistent, and momentum smooths the direction over time.<br><br>The coefficient (here 0.5, typically 0.9 or 0.99) acts as friction — how fast old gradients are forgotten.",
          hint: "Compute m_new first from the stored momentum and the current gradient, then scale it by the learning rate.",
        },
        {
          type: "numeric",
          ctx: "<b>Global norm clipping</b> with threshold 1 multiplies the gradient by <b>min(1, 1/‖g‖)</b>. The gradient is <b>g = (0.03, 0.04)</b>.",
          q: "What factor does clipping apply?",
          answer: 1,
          why: "<b>‖g‖ = √(0.03² + 0.04²) = √0.0025 = 0.05</b>, so the factor is min(1, 1/0.05) = min(1, 20) = <b>1</b>. The gradient passes through <b>completely unchanged</b>.<br><br>Archived Q53, rebuilt as a Check slide, and the deck names the misconception directly: <i>\"Common error: treating clipping as a fix for vanishing gradients. The min caps large gradients and never enlarges small ones.\"</i><br><br>The min is what makes this one-directional. Clipping is a ceiling, not a normaliser.<br><br>Contrast a case where it does act: g = (3, 4) has norm 5, and with threshold 2 the scale is 2/5, giving <b>(1.2, 1.6)</b> — same direction, shorter step. <b>Global clipping applies one scale to the whole vector, so the direction is preserved</b>; per-coordinate clipping would bend it.",
          hint: "Compute the norm first, then evaluate the min. Which of the two arguments is smaller?",
        },
      ],
    },

    // ═══ Section 4: Stability ════════════════════════════════════════════
    {
      id: "stability",
      name: "Initialisation, normalisation, penalties, dropout",
      problem: "Four mechanisms that all exist to make a training run reproducible rather than lucky. Three of them behave differently in training and evaluation mode, which is where the questions live.",
      steps: [
        {
          type: "mcq",
          ctx: "Two hidden units in the same layer start with <b>exactly the same weights</b> and receive the same inputs. Updates are deterministic.",
          q: "What happens over training?",
          opts: [
            "They compute the same output, receive the same gradient, and remain identical indefinitely",
            "They diverge after the first update, because mini-batch sampling noise separates the two units",
            "They converge to opposite values, since the loss rewards the layer for covering more features",
            "They diverge slowly, because floating-point rounding accumulates differently in each unit",
          ],
          a: 0,
          why: "<b>Nothing ever distinguishes them.</b> Same inputs and same parameters give the same output, so the same gradient, so the same update — forever.<br><br>The deck makes it numeric: two units with w = 0.4 and input x = 2 both give h = 0.8; with dL/dw = 2 for each and rate 0.1, both land at <b>0.4 − 0.1(2) = 0.2</b>. Still identical. A 200-unit layer initialised this way has the expressive power of <b>one</b> unit.<br><br>Both units see the <i>same</i> mini-batch, so there is no sampling noise between them, and they perform bit-identical arithmetic so there is no rounding difference either. Randomness is not a refinement — <b>being different is the requirement.</b>",
          hints: {
            1: "Both units see the same mini-batch, so they see the same noise. Nothing separates them.",
            2: "Nothing in the loss rewards diversity directly. The units have no way to tell each other apart.",
            3: "Bit-identical arithmetic on bit-identical inputs produces bit-identical results.",
          },
          defaultHint: "Follow one update through for both units. At what point do their numbers differ?",
        },
        {
          type: "numeric",
          ctx: "A BatchNorm layer is in <b>evaluation mode</b>. For one feature it has stored running mean <b>4</b> and running variance <b>9</b>, with <b>γ = 2, β = −1</b> and ε = 0. The input is <b>10</b>.",
          q: "What is the output?",
          answer: 3,
          tol: 0.01,
          why: "<b>Two stages.</b> Normalise with the <i>stored</i> statistics: (10 − 4)/√9 = 6/3 = <b>2</b>. Then scale and shift: γ(2) + β = 2(2) − 1 = <b>3</b>.<br><br>Archived Q23, rebuilt as a Check slide, and the deck names every slip: <b>2 stops after normalising, 4 skips β, and 5 uses β = +1.</b><br><br><b>Why evaluation uses stored statistics.</b> The deck puts the same photo x = 7 into two different batches. With companion 3: μ = 5, giving (7−5)/√4 = <b>1</b>. With companion 11: μ = 9, giving <b>−1</b>. Same photo, two answers, depending on what else happened to be in the batch. With the stored mean it is the same number every time.<br><br>Evaluation must be deterministic — and at test time you may be classifying one image at a time with no batch to compute from.",
          hint: "Normalise with the stored mean and variance first, then apply gamma and beta in that order.",
        },
        {
          type: "numeric",
          ctx: "Objective J(w) = data loss + λΣwᵢ², with <b>λ = 0.2</b>. Two weight vectors both have data loss <b>0.4</b>. Candidate <b>A = (3, 0)</b> scores 0.4 + 0.2(9) = <b>2.2</b>.",
          q: "What does candidate <b>B = (2, 1)</b> score?",
          answer: 1.4,
          tol: 0.005,
          why: "<b>0.4 + 0.2(2² + 1²) = 0.4 + 0.2(5) = 1.4.</b> B wins, and the data loss played no part — it was identical, so the penalty broke the tie alone.<br><br><b>Notice that both vectors sum to 3.</b> An L1 penalty would score them identically. It is the <b>squaring</b> that separates 9 from 5, which is why <b>L2 prefers weight spread across features</b> rather than concentrated in one.<br><br>L1's own preference is different: it drives coefficients to <b>exactly zero</b>, which is why <b>Lasso (L1) performs feature selection and Ridge (L2) does not</b>. Elastic net combines both.<br><br>The deck's warning beside the slide: read λ <i>and any factor of one half</i> from the definition. Some texts write λ/2 Σwᵢ².",
          hint: "Square each component, sum them, multiply by lambda, then add the data loss.",
        },
        {
          type: "mcq",
          ctx: "A layer uses <b>inverted dropout</b> with keep probability <b>q = 0.8</b>. During training a random mask zeros some activations and scales the kept ones by <b>1.25</b>.",
          q: "What happens in evaluation mode?",
          opts: [
            "Disable the mask and pass activations through with no extra scaling applied at all",
            "Disable the mask and multiply every activation by 0.8 to match the keep probability",
            "Disable the mask and multiply every activation by 1.25, as training did to kept units",
            "Apply a random mask dropping 20% and scale kept activations by 1.25, exactly as in training",
          ],
          a: 0,
          why: "<b>1.25 is 1/0.8, so the correction already happened during training.</b> That is the entire point of the inverted convention: correct in training so that evaluation needs nothing.<br><br>The deck's rule: each convention matches the training and evaluation scales, and you apply the correction in exactly one of the two places. <b>Classic dropout</b> keeps activations unchanged during training and multiplies by q at evaluation. <b>Inverted dropout</b> divides by q during training and leaves evaluation alone. Never both, never neither.<br><br>Each distractor is a specific error the deck names: scaling by q is <b>the non-inverted convention and would shrink outputs here</b>; scaling by 1.25 again <b>would inflate them</b>; and applying the mask breaks determinism — <b>evaluation must not be random</b>.<br><br>Worth seeing why the scale is preserved: with q = 0.5 and an activation of 2, a kept unit outputs 2/0.5 = 4 and a dropped one outputs 0, so the expectation is 0.5(4) + 0.5(0) = <b>2</b> — the undropped value. Any single pass gives 0 or 4, never 2.",
          hints: {
            1: "That is the classic convention's correction. This implementation already scaled during training.",
            2: "Scaling twice would overshoot. Multiply 0.8 by 1.25 and see what you get.",
            3: "The mask is switched off entirely at evaluation. Inference has to be deterministic.",
          },
          defaultHint: "Multiply the keep probability by the training-time scale. What does that product tell you?",
        },
        {
          type: "mcq",
          ctx: "A network has <b>all parameters initialised to zero</b>. You forward propagate one batch, backpropagate, and update once. W[1] is the first layer's weight matrix.",
          q: "What is true of W[1] afterwards?",
          opts: [
            "Its entries may be positive or negative, depending on the data and the update",
            "Its entries are all still zero, since no gradient can reach the first layer at all",
            "Its entries are all positive, since the gradient direction is consistent in early batches",
            "Its entries are all equal but non-zero, since every unit receives an identical update",
          ],
          a: 0,
          why: "<b>Archived Q3, and it is more subtle than the symmetry-breaking question above.</b><br><br>With the output weights at zero, the gradient reaching the first layer is zero on the <i>first</i> backward pass, so W[1] cannot move yet. But the <b>output layer can move</b> — its gradient depends on the hidden activations, not on its own zeroed weights. Once the output weights are non-zero, signal starts flowing back to the first layer with whatever signs the data produce.<br><br>So \"all zeros\" is too strong, and so are \"all positive\" and \"all equal\". The honest answer is that the entries <b>may be positive or negative</b>.<br><br>This is why zero init is worse than identical-constant init: x·W = 0 kills the forward signal too, and the chain rule multiplies by W on the way back.",
          hints: {
            1: "The first layer is stuck for one step — but check whether the OUTPUT layer is also stuck.",
            2: "Nothing forces a consistent sign. The data decides, and data has both signs in it.",
            3: "That describes identical-constant initialisation, which is a different failure from all-zeros.",
          },
          defaultHint: "Trace which layer's gradient is non-zero on the very first backward pass.",
        },
      ],
    },

    // ═══ Training practice ═══════════════════════════════════════════════
    {
      id: "training",
      name: "Curves, data, and starting from someone else's weights",
      problem: "The decisions in this level are not computed, they are judged — and each one has a rule that settles it. Knowing the rule turns a slow question into a fast one.",
      steps: [
        {
          type: "mcq",
          ctx: "Eight epochs, a checkpoint saved at each. <b>Training loss falls throughout.</b> Validation loss reaches its minimum of 0.45 at <b>epoch 5</b> and does not improve through epochs 6, 7 and 8. Patience is 3.",
          q: "What do you do?",
          opts: [
            "Stop after epoch 8 and restore the epoch-5 weights, which is the validation minimum",
            "Stop after epoch 8 and keep those weights, since they have the lowest training loss",
            "Stop immediately at epoch 6, as soon as validation stops improving for a single epoch",
            "Continue training past epoch 8, since the training loss is still falling and has not plateaued",
          ],
          a: 0,
          why: "<b>Training loss falling is guaranteed by construction</b> — it is the quantity being minimised — so it can never be the selection criterion. Everything after epoch 5 is worse on data the model has not seen.<br><br>Three pieces of discipline from the deck: <b>save the best checkpoint</b> by the chosen validation metric; <b>wait for a pattern</b>, because one noisy dip does not require stopping immediately, which is what the patience window is for; and <b>use a fixed protocol</b>, keeping the test set out of stopping decisions and choosing the rule before you inspect test performance.<br><br>Note that in a monotonic run, \"the last epoch\" and \"the best training loss\" are the same wrong answer.",
          hints: {
            1: "The loss it minimised is the one you cannot select on. Which curve estimates unseen performance?",
            2: "That is what the patience window exists to prevent. One dip is noise, not a trend.",
            3: "Training loss will keep falling indefinitely. That is not evidence of anything useful.",
          },
          defaultHint: "Eight sets of weights are on disk. Which one performs best on data it never saw?",
        },
        {
          type: "mcq",
          ctx: "Rotation worked well as augmentation on a flower dataset. You move to <b>handwritten digit</b> recognition.",
          q: "What happens?",
          opts: [
            "It breaks, because a rotated 6 resembles a 9 and keeping the label 6 would then be wrong",
            "It breaks, because rotated digits become unreadable and add pure noise to the training set",
            "It still works, since digits are rotation-invariant and the extra views improve robustness",
            "It still works, but only for symmetric digits such as 0 and 8, where rotation changes nothing",
          ],
          a: 0,
          why: "<b>The rotated 6 is perfectly legible, and that is exactly what makes it dangerous.</b> You are not adding noise — you are adding a confidently mislabelled example, teaching the model that a 9 is a 6.<br><br>The deck's rule: <b>augmentation is valid only while the label survives</b>, which makes it application-dependent. A 180° rotation keeps a daisy a daisy; the same transform breaks the digit.<br><br>The last option is true as far as it goes — rotation does nothing harmful to a 0 — but a useless augmentation is not the same as a safe one, and the question is about the transform as a whole.<br><br>He has now given this example in three separate sessions, so expect a question pairing some transform with some task and asking whether it is valid. Reason about the <b>label</b>, never about whether the transform sounds reasonable.",
          hints: {
            1: "A rotated 6 is entirely readable. A wrong label is more harmful than noise, not less.",
            2: "Digits are very much not rotation-invariant — that is the whole point of the example.",
            3: "True of 0 and 8, but a harmless case does not make the transform safe overall.",
          },
          defaultHint: "Write a 6 on paper and turn it upside down. What are you now looking at?",
        },
        {
          type: "mcq",
          q: "In the standard transfer-learning setup, which layers do you freeze first, and why?",
          opts: [
            "The early ones, because they learn edges and colours — properties of images, not of the old labels",
            "The late ones, because they hold the most refined features and are the most valuable part to preserve",
            "All of them, because the point of transfer learning is that no weight changes and only the data does",
            "The early ones, because they contain most of the parameters and freezing them is what saves compute",
          ],
          a: 0,
          why: "<b>Generic early, specific late.</b> An edge is an edge whether the image holds a flower, an elephant or a face, so those filters are already right. Later layers compose them into something task-specific, and that is the part you replace.<br><br><b>Stage 1:</b> replace the head, freeze the whole backbone, train the head. The deck's note: <i>\"Frozen features still participate in the forward pass\"</i> — frozen means not updated, not skipped. <b>Stage 2:</b> if the fixed features are insufficient, unfreeze selected <i>later</i> layers and fine-tune them with the head.<br><br>And when you do fine-tune, <b>lower the learning rate — about 1/10 of the original</b> is the deck's starting point, because you are adjusting weights that are already good rather than searching from scratch.<br><br>The two axes that decide how far to go: how much target data you have, and how similar the source and target domains are.",
          hints: {
            1: "Backwards. The refined features are the most specific to the old task, so they are what you replace.",
            2: "Something has to be trained, or the model cannot perform your task at all.",
            3: "Parameter count is not why those layers transfer. Ask what they actually learned.",
          },
          defaultHint: "Which layers learned something about images in general rather than about the original labels?",
        },
        {
          type: "mcq",
          ctx: "In a residual block <b>y = x + F(x)</b>, the upstream gradient arriving at y is <b>3</b> and <b>F′(x) = −0.25</b>.",
          q: "What reaches x, and why do residual connections help?",
          opts: [
            "2.25 — the identity path carries the full gradient, so it can bypass the non-linear branch",
            "−0.75 — only the branch path carries gradient, and the identity path contributes nothing",
            "3 — the identity path dominates completely, so the branch never affects the gradient at x",
            "0.75 — the two paths multiply rather than add, which is what shortens the gradient path",
          ],
          a: 0,
          why: "<b>∂L/∂x = 3(1) + 3(−0.25) = 3 − 0.75 = 2.25.</b> The gradient splits across two paths and the contributions <b>add</b>: the identity path delivers the full 3, the branch subtracts 0.75.<br><br>The deck's observation: the branch <i>cancels part</i> of the identity, since 1 + F′(x) = 0.75. So the result is less than 3 — but crucially it is nowhere near zero, and it cannot be driven to zero by the branch alone.<br><br><b>That is the mechanism.</b> Archived Q52 asks how residual connections mitigate vanishing gradients, and the answer is by <b>letting gradients flow through additional paths that bypass the non-linear transformations</b>. Not by reducing depth, not by adding a constant to the gradients, and not by forcing layers to learn identity functions.<br><br>In a deep plain network every layer multiplies the gradient by something below 1 and it decays exponentially. The identity path gives it a route with multiplier 1.",
          hints: {
            1: "Both paths contribute. The identity path is the whole reason the block exists.",
            2: "The branch does contribute — it subtracts 0.75 here rather than being ignored.",
            3: "Paths that split and rejoin ADD their gradients. Multiplication is what happens along a chain.",
          },
          defaultHint: "Differentiate x + F(x) with respect to x, then multiply by the upstream gradient.",
        },
      ],
    },

    // ═══ Section 5: Recurrent ════════════════════════════════════════════
    {
      id: "rnn",
      name: "Memory across time",
      problem: "A recurrent network reuses one update at every step. That buys variable-length inputs and costs a gradient that is a product of many factors — which is where both the vanishing problem and its workaround come from.",
      steps: [
        {
          type: "numeric",
          ctx: "A recurrent rule <b>hₜ = 0.5·hₜ₋₁ + xₜ</b>, starting from <b>h₀ = 0</b>, with inputs <b>x₁ = 2, x₂ = −1, x₃ = 3</b>.",
          q: "What is h₃?",
          answer: 3,
          why: "<b>h₁ = 0.5(0) + 2 = 2. h₂ = 0.5(2) + (−1) = 0. h₃ = 0.5(0) + 3 = 3.</b><br><br>The same coefficient 0.5 is reused at every step, and the three states are completely different — <b>2, 0, 3</b>. That is the answer to \"if the weights are shared, why aren't the outputs identical?\": the output depends on the weights <i>and</i> on the carried state, and the state encodes everything seen so far.<br><br>Sharing is what makes variable-length sequences possible at all. The deck's contrast: without it, <i>\"a new position would need another trained network\"</i>, so parameter count would grow with sequence length and a length you never trained on would be unhandleable.<br><br>The parallel it draws: <b>a CNN reuses a filter across space; an RNN reuses an update across time.</b>",
          hint: "Three steps, each one half of the previous state plus the new input. Work them in order.",
        },
        {
          type: "numeric",
          ctx: "Same rule with the shared coefficient written as <b>a = 0.5</b>, so hₜ = a·hₜ₋₁ + xₜ. Backpropagation through time needs the sensitivity of h₃ to h₁.",
          q: "What is ∂h₃/∂h₁?",
          answer: 0.25,
          tol: 0.001,
          why: "<b>∂h₃/∂h₁ = ∂h₃/∂h₂ × ∂h₂/∂h₁ = 0.5 × 0.5 = 0.25.</b> Each extra step back multiplies by another 0.5.<br><br><b>This is the vanishing gradient, derived from nothing but repeated multiplication.</b> Ten steps back gives 0.5¹⁰ ≈ <b>0.00098</b>. A dependency fifty tokens long arrives with a gradient of effectively zero, so the model cannot learn it — not because the information is unavailable, but because the learning signal has decayed.<br><br>Had the coefficient been above 1 the same product would <i>explode</i> instead, which is why <b>an RNN suffers from both problems</b>. The archived paper asks which statement is NOT true and the answer is \"RNNs suffer from vanishing but not exploding.\"<br><br>One more subtlety: <b>the same a is used at every step, so its gradient adds one term from each use</b>, and training applies the total as a single update.",
          hint: "Two links back, each contributing one factor of the shared coefficient.",
        },
        {
          type: "mcq",
          ctx: "<b>Truncated BPTT</b> in chunks. Chunk 1 ends with h₂ = 4. Chunk 2 begins with x₃ = 1 and a = 0.5, computing h₃ = 0.5(4) + 1 = 3.",
          q: "What crosses the chunk boundary?",
          opts: [
            "The state crosses, but the gradient does not — the forward pass is unbroken and the backward one is cut",
            "The gradient crosses, but the state does not — each chunk restarts its state from zero at the boundary",
            "Both cross freely, and truncation only limits how many activations are stored for the backward pass",
            "Neither crosses, since truncation makes the chunks fully independent of one another by construction",
          ],
          a: 0,
          why: "<b>State forward, gradient stopped.</b> That distinction <i>is</i> the question. The value 4 is detached and handed to chunk 2, which computes with it perfectly normally — h₃ = 3 — but chunk 2's loss sends no gradient back into chunk 1.<br><br>The deck's summary: <b>\"The backpropagation horizon is shorter than the forward history.\"</b><br><br>What you buy is bounded memory and more frequent updates; full BPTT must store activations across the entire sequence before a single update. What you pay is gradient signal for any dependency longer than a chunk.<br><br>One subtlety the deck adds: <i>\"a still gets gradients from chunk 2.\"</i> The shared weight is updated from every chunk — it is only the <b>path back through time</b> that is severed, not the weight's participation in later chunks.",
          hints: {
            1: "Exactly backwards. Resetting the state would destroy the context the model exists to carry.",
            2: "If both crossed, nothing would be truncated and no memory would be saved.",
            3: "The forward pass is untouched — the stem shows chunk 2 using chunk 1's value of 4.",
          },
          defaultHint: "Truncation is about the BACKWARD pass. What does that leave the forward pass doing?",
        },
        {
          type: "numeric",
          ctx: "An LSTM cell update, <b>c_new = f ⊙ c_old + i ⊙ g</b>. The carried memory is <b>c_old = 4</b> and the candidate content is <b>g = 0.5</b>. The gates are <b>f = 0.9</b> and <b>i = 0.1</b>.",
          q: "What is c_new?",
          answer: 3.65,
          tol: 0.005,
          why: "<b>0.9(4) + 0.1(0.5) = 3.6 + 0.05 = 3.65.</b> A high forget gate keeps most of the old memory; a low input gate writes very little of the new candidate.<br><br>Flip them to f = 0.1 and i = 0.6 and you get 0.1(4) + 0.6(0.5) = <b>0.7</b> — the old memory is largely discarded.<br><br><b>Note that 0.1 + 0.6 = 0.7, not 1.</b> The deck states this explicitly: <i>\"The forget gate f and input gate i are independent LSTM gates, so they need not sum to 1.\"</i> They are separate learned dimmers, not a probability distribution. That is the false statement most likely to appear in options.<br><br>The second equation, <b>h_new = o ⊙ tanh(c_new)</b>, is what makes the output gate control <i>exposure</i> separately from storage — the cell can hold something the hidden state does not reveal this step. He said twice that the gate internals are not tested; know the three roles and the c/h separation.",
          hint: "Forget gate times the old memory, plus input gate times the candidate. Two products, one sum.",
        },
      ],
    },

    // ═══ Section 6: Attention ════════════════════════════════════════════
    {
      id: "attn",
      name: "Attention, position, and what runs in parallel",
      problem: "A fixed-size state has to compress an arbitrary history. Attention replaces that compression with a direct read — and introduces three separate mechanisms that get confused with each other constantly.",
      steps: [
        {
          type: "mcq",
          q: "A text model uses both <b>position vectors</b> and a <b>causal mask</b>. What are their roles?",
          opts: [
            "Position vectors say where each token sits; the causal mask blocks access to future tokens",
            "Position vectors block future tokens; the causal mask records the order the words appear in",
            "The causal mask alone tells each token where it sits, so position vectors add nothing further",
            "Position vectors alone stop a token using later tokens, so the mask is not strictly needed",
          ],
          a: 0,
          why: "<b>Order, access and contribution are three separate choices.</b><br><br><b>POSITION</b> — where is this token? A position vector is <i>added</i> to the word vector. Without it attention sees an unordered set, and \"dog bites man\" is identical to \"man bites dog.\"<br><br><b>CAUSAL MASK</b> — which tokens are visible? It hides future positions so a prediction cannot see the token it is predicting. At \"dog\" the model reads the first 2 positions; at \"ball\" the first 5.<br><br><b>ATTENTION WEIGHTS</b> — how much does each visible token contribute? Computed from the current input and summing to 1.<br><br>The deck's dismissals: the mask <b>controls allowed connections</b> and supplies no location information; position vectors <b>describe location but do not restrict access</b>. Only the mask keeps future tokens out of view.",
          hints: {
            1: "The two roles are swapped. Which one is added to the word vector?",
            2: "The mask controls which connections are allowed. It says nothing about where a token sits.",
            3: "Position describes location without restricting anything. Something else does the restricting.",
          },
          defaultHint: "One mechanism supplies word order; the other limits what each token may read.",
        },
        {
          type: "numeric",
          ctx: "Attention over three source tokens with weights <b>0.2, 0.3 and 0.5</b>. Their value vectors' first components are <b>1, 5 and 9</b>.",
          q: "What is the first component of the context vector?",
          answer: 6.2,
          tol: 0.01,
          why: "<b>0.2(1) + 0.3(5) + 0.5(9) = 0.2 + 1.5 + 4.5 = 6.2.</b><br><br>The context is the <b>weighted sum of the value vectors</b>. With the full vectors [1,0], [5,2] and [9,4] the context is [0.2,0] + [1.5,0.6] + [4.5,2.0] = <b>[6.2, 2.6]</b>.<br><br>The deck's division of labour: <b>weights set how much, values set what.</b> An attention weight says how much a position contributes; a value vector says what it contributes.<br><br>Because the weights sum to 1 this is a weighted <i>average</i>, so the result must lie between the smallest and largest value — 6.2 sits between 1 and 9, as it must. If your answer falls outside that range you have made an arithmetic slip.<br><br>Attention weights are recomputed for every input and after every generated token; the projection parameters are learned and then fixed at inference.",
          hint: "Multiply each weight by its value and add. The weights sum to 1, so check the answer lies between 1 and 9.",
        },
        {
          type: "mcq",
          q: "Where exactly does a transformer compute things <b>in parallel</b>?",
          opts: [
            "Across positions within one layer, because every row reads the same layer inputs and waits for no other row",
            "Across layers, because each block holds its own weights and therefore does not depend on the others",
            "Across generated tokens, because the causal mask lets every future token be produced simultaneously",
            "Across positions and layers alike, which is the architecture's main advantage over a recurrent network",
          ],
          a: 0,
          why: "<b>Within a layer, across positions.</b> Each query position is a row of the attention table, and every row reads the <i>same</i> layer inputs — the row at \"ran\" does not read the context the row at \"dog\" produced. No row waits for another.<br><br>The deck is precise about the mask's role here: it <b>limits what each row may read and sets no schedule for when rows run</b>. Restricting access is not the same as imposing an order.<br><br><b>Layers still run in sequence</b> — the next layer reads this layer's outputs. And <b>generation is sequential</b> by necessity: only the prefix exists, so the model predicts one token, appends it, and runs again.<br><br>Training is the case that parallelises fully: the whole example is known, so for \"The dog chased the ball . It\" you score seven next-token targets in one pass. So <b>\"transformers are parallel\" is half true</b>, and the other half is the examinable part.",
          hints: {
            1: "Each layer reads the previous layer's outputs, so they are inherently sequential.",
            2: "During generation the future tokens do not exist yet — they are what is being produced.",
            3: "Half right. One of those two axes genuinely is sequential.",
          },
          defaultHint: "Ask what each attention row needs as input, and whether any row needs another row's output.",
        },
        {
          type: "order",
          q: "One transformer block, in order. Click the four stages.",
          pieces: [
            "Add a position vector to each token's word vector",
            "Compute causal attention weights and mix the value vectors",
            "Pass each position's context through the shared MLP",
            "Send the final position's vector to the prediction head",
          ],
          posHints: [
            "Attention sees an unordered set until something fixes that. What has to happen first?",
            "Order is encoded. Now the positions need to exchange information with each other.",
            "Each position holds its context. What refines the features within a single position?",
            "The features are processed. One step left before a token comes out.",
          ],
          why: "<b>Attention exchanges information across positions; the MLP transforms features within each position.</b> That division is the block's whole structure.<br><br>The deck adds two details worth holding. The <b>same MLP weights are reused at every position within a layer</b>, but <b>each block has its own weights</b> — same architecture, different parameters, one jointly trained model. And residual shortcuts with LayerNorm wrap both sub-layers; the deck omits them from its diagram for clarity and notes that they are what makes a deep stack trainable.<br><br>One more distinction it flags: <b>depth counts blocks, generation length counts tokens.</b> Two different numbers that are easy to conflate.",
        },
      ],
    },

    // ═══ Section 7: Graphs ═══════════════════════════════════════════════
    {
      id: "graphs",
      name: "Message passing and reordering",
      problem: "The final section, and the one with the most moving parts: an update that must be computed synchronously, two different reordering properties, and a third kind of ordering the architecture does not protect you from at all.",
      steps: [
        {
          type: "numeric",
          ctx: "Road network with edges <b>A–B, A–C, C–D</b>, undirected. Layer-0 values: <b>A = 1, B = 2, C = 4, D = 8</b>. The update is <b>0.5 × own value + 0.5 × mean of neighbours</b>.",
          q: "What is A's layer-1 value?",
          answer: 2,
          tol: 0.01,
          why: "<b>A's neighbours are B = 2 and C = 4, mean 3. So A¹ = 0.5(1) + 0.5(3) = 2.</b><br><br>All four nodes at layer 1: <b>A = 2, B = 1.5, C = 4.25, D = 6.</b><br>• B has only A: 0.5(2) + 0.5(1) = 1.5<br>• C has A and D: 0.5(4) + 0.5(4.5) = 4.25<br>• D has only C: 0.5(8) + 0.5(4) = 6<br><br><b>Every node reads layer 0 only.</b> B uses A's <i>old</i> value of 1, not the 2 that A is simultaneously becoming. The deck demonstrates the consequence: <i>\"In-place A → B would give B¹ = 2 instead of 1.5.\"</i> And states the principle: <b>node numbering does not define an update schedule.</b><br><br>The 0.5/0.5 is a teaching device. Real GNNs learn <b>W_self</b> and <b>W_neighbor</b>, shared across every node, sized by feature width rather than node count.",
          hint: "Average A's two neighbours first, then take half of that plus half of A's own value.",
        },
        {
          type: "numeric",
          ctx: "Apply the <b>same rule a second time</b> to the layer-1 values <b>A = 2, B = 1.5, C = 4.25, D = 6</b>.",
          q: "What is A's layer-2 value?",
          answer: 2.4375,
          tol: 0.001,
          why: "<b>A reads B¹ = 1.5 and C¹ = 4.25, mean 2.875. So A² = 0.5(2) + 0.5(2.875) = 1 + 1.4375 = 2.4375.</b><br><br>All four at layer 2: A = 2.4375, B = 1.75, C = 4.125, D = 5.125.<br><br><b>Depth equals reach.</b> At layer 1, A saw only B and C. At layer 2, <b>D reaches A through C</b> — information moved two edges because it took two layers. On a path V–W–X–Y–Z, Z's information reaches Y after 1 layer, X after 2, W after 3 and V after 4.<br><br>That is the trade-off behind GNN depth: more layers means a wider receptive field, but also over-smoothing, as repeated averaging pulls every node's value toward the same number. Which is why typical GNNs are 1 to 3 layers deep.",
          hint: "Same rule, new numbers. Average A's two neighbours at layer 1, then combine with A's layer-1 value.",
        },
        {
          type: "mcq",
          ctx: "The same graph is stored twice: once in node order <b>A, B, C, D</b> and once in order <b>D, B, A, C</b>. The connections are identical.",
          q: "What is true about the adjacency matrix and the outputs?",
          opts: [
            "The matrix itself changes, node outputs move with their rows, and a pooled graph output is unchanged",
            "The matrix is unchanged, node outputs move with their rows, and a pooled output is also unchanged",
            "The matrix changes, node outputs stay in their original rows, and a pooled output changes with it",
            "The matrix is unchanged and so is everything else, since relabelling cannot affect a stored graph",
          ],
          a: 0,
          why: "<b>The adjacency matrix genuinely changes.</b> Edge A–B sits at position (1,2) in the first ordering and at <b>(3,2)</b> in the second, with its mirror entry moving too. The deck prints both 4×4 matrices side by side and they are visibly different. He also drew this twice on the board in the Oct 26 session, because people get it backwards.<br><br><b>Node outputs are equivariant</b> — they move with their rows. Layer-1 outputs read 2, 1.5, 4.25, 6 in order A,B,C,D and <b>6, 1.5, 2, 4.25</b> in order D,B,A,C. Road A still has output 2; it just sits in a different row.<br><br><b>Pooled graph outputs are invariant</b> — the sum is 13.75 either way, because summing ignores order.<br><br>And the deck's warning about doing it correctly: <i>\"Moving X rows without M, or only one axis of M, pairs roads with the wrong loads or neighbours and stores a different graph.\"</i> Reorder the feature rows and <b>both axes</b> of M together.",
          hints: {
            1: "Check the matrix claim. Write out where edge A–B sits under each ordering.",
            2: "Outputs follow their nodes — that is what equivariance means.",
            3: "Relabelling definitely changes the stored matrix, even though the graph is the same.",
          },
          defaultHint: "Three separate claims here. Check the adjacency one first — it is the one people get wrong.",
        },
        {
          type: "mcq",
          ctx: "A GNN was trained on molecules whose node features are, in order, <b>[atomic number, charge]</b>. A new molecule arrives with those two columns <b>swapped</b>. There are no learned node IDs, and the model is frozen.",
          q: "What must you do before running it?",
          opts: [
            "Restore the training feature order and definitions before applying the shared weights",
            "Nothing at all, because the feature vector width is still 2 and the weights accept that width",
            "Pad the node count so that it matches the molecules the model was originally trained on",
            "Reorder the atom feature rows while leaving the adjacency matrix exactly as it is",
          ],
          a: 0,
          why: "<b>Node order is handled by the architecture; feature order is not.</b> Weight columns are matched to features <i>positionally</i> — column 1 of W was trained to mean \"atomic number.\"<br><br>The deck answers each distractor precisely: <b>the width matches, but the weights were learned for what each column means, not just the count</b>; <b>node count is not the issue, since shared weights work on graphs of different sizes</b>; and reordering rows while leaving adjacency alone <b>mismatches atom rows with edges and leaves the feature columns swapped</b> — breaking two things at once.<br><br><b>Why this is dangerous rather than merely wrong:</b> the arithmetic still runs. The model produces numbers and raises no error. It is simply computing with charge in the column trained to hold atomic number.<br><br>What shared weights <i>do</i> buy is inductive application: the same rule that gives A = 2 on a 4-road graph gives, on an unseen 3-road graph with U = 6 and neighbours 1 and 3, hU = 0.5(6) + 0.5(2) = <b>4</b>. The deck's caveat: <i>\"Runs without retraining, but accuracy must be evaluated.\"</i>",
          hints: {
            1: "The width matches, but a weight column was trained to mean a specific feature.",
            2: "Node count is never the problem — shared weights handle graphs of any size.",
            3: "That breaks the row/edge correspondence AND leaves the columns swapped.",
          },
          defaultHint: "Two kinds of ordering are in play. Which one does mean-aggregation actually protect you from?",
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
          why: "<b>Five of the seven.</b> Mean, sum, max and min collapse a set to one number without reference to order. Sum of ReLU does too: ReLU is applied element-wise, then summed — order-independent at both steps.<br><br><b>The deck's closing question</b> (archived Q47) compares exactly these: F(x) = ReLU(x₁) + ReLU(x₂) + ReLU(x₃) against G(x) = x₁ + 2x₂ + x₃. <b>F only.</b> G gives x₂ the coefficient 2, so its slots are not interchangeable — on x = (−2, 1, 4) it gives <b>4</b>, and on the permutation (1, −2, 4) it gives <b>1</b>.<br><br><b>The practical trick, demonstrated live:</b> substitute two permutations and look. Two plug-ins beat recalling a definition under time pressure.<br><br>But note the logical asymmetry the deck is careful about: <i>\"One counterexample rules out G, but F needs the symmetric-sum argument, which covers every reordering.\"</i> You can disprove invariance by example; you cannot prove it that way.",
          hintFn: (sel) => {
            if (sel.indexOf(5) !== -1) return "'First element' names a position. Reorder the inputs and you get a different element.";
            if (sel.indexOf(6) !== -1) return "Try it: weight by position on (−2, 1, 4) and then on (1, −2, 4). You get 4 and 1.";
            if (sel.indexOf(4) === -1) return "One missing. ReLU is applied element-wise and the results are summed — does either step care about order?";
            return "Five of these collapse a set without caring where each element sat.";
          },
        },
      ],
    },

    // ═══ Boss ════════════════════════════════════════════════════════════
    {
      id: "boss",
      name: "Boss round: the eight cited questions",
      problem: "Every Check slide in the deck carries a footer naming the archived exam question it was adapted from. These are those eight questions in their original form. They have now been examined once and rebuilt once, which makes them the highest-confidence predictions available.",
      steps: [
        {
          type: "mcq",
          ctx: "<b>Archived Q6.</b>",
          q: "What is the primary purpose of pruning in decision trees?",
          opts: [
            "To reduce the depth of the tree and prevent it from overfitting the training data",
            "To optimise the tree's parameters by L2 regularisation and so prevent overfitting",
            "To improve the tree's interpretability by producing a visibly smaller final model",
            "To handle missing data by removing the branches where values were not recorded",
          ],
          a: 0,
          why: "<b>Depth control is the mechanism; preventing overfitting is the goal.</b><br><br>The L2 option is the sharpest distractor because it names a real technique and attaches the right goal to it — but <b>decision trees have no continuous parameters to penalise</b>. There is nothing for L2 to act on. Pruning works structurally, by removing branches.<br><br>Interpretability does improve as a side effect, and trees are already among the most interpretable models — but that is not why you prune. Missing data is handled by surrogate splits or imputation, not by pruning.<br><br>Related, from the same paper: <b>decision trees are prone to overfit</b>. They do not lack interpretability, and they are not costly at inference compared with kNN.",
          hints: {
            1: "Name one continuous parameter in a decision tree that L2 could shrink.",
            2: "A real side effect, but not the purpose. What problem was pruning invented to solve?",
            3: "Missing data is handled elsewhere, by surrogate splits or imputation.",
          },
          defaultHint: "What goes wrong with an unpruned tree, and what does cutting it back fix?",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q23.</b>",
          q: "Which statement about batch normalization is true?",
          opts: [
            "During training it uses the mean and variance of the current mini-batch",
            "During test time it uses the mean and variance of the current mini-batch",
            "With batch size equal to the whole dataset, BatchNorm on the input equals L1 normalisation",
            "With batch size equal to the whole dataset, BatchNorm on the input equals max normalisation",
          ],
          a: 0,
          why: "<b>Training uses mini-batch statistics; evaluation uses the stored running estimates.</b> The second option is the same sentence with \"test\" swapped in, and it is the single most common batch-norm error.<br><br>The reason is in the deck's worked example: the same photo x = 7 normalises to <b>1</b> in a batch with 3 and to <b>−1</b> in a batch with 11. Evaluation must be deterministic, and at test time there may be no batch at all.<br><br>On the last two options, the original paper's correct variant is that full-batch BatchNorm on the input is equivalent to <b>L2 normalisation</b> — so both L1 and max are wrong here.<br><br>The full numeric version: stored mean 4, variance 9, γ = 2, β = −1, input 10 → (10−4)/3 = 2, then 2(2) − 1 = <b>3</b>.",
          hints: {
            1: "That is the training-mode behaviour described with the wrong mode's name.",
            2: "Close in form but the wrong norm — it is the one that squares.",
            3: "Max normalisation is not what full-batch standardisation reduces to.",
          },
          defaultHint: "Two options describe modes, two describe a limiting case. Check the modes first.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q24.</b> A fully connected network has input 10, two hidden layers of 20 and 20, output 10, and <b>no biases</b>. You double the number of hidden units in every hidden layer.",
          q: "By what factor does the parameter count increase?",
          opts: ["3", "2", "6", "4"],
          a: 0,
          why: "<b>Original: 10(20) + 20(20) + 20(10) = 200 + 400 + 200 = 800.</b><br><b>Doubled: 10(40) + 40(40) + 40(10) = 400 + 1600 + 400 = 2400.</b><br><b>2400 / 800 = 3.</b><br><br>Not 2, because the middle layer quadruples rather than doubles. Not 4, because the two outer layers only double — each has one side fixed. The answer lands between the two.<br><br>This is the ratio phrasing of the deck's Check slide, which asks the same question with explicit counts: 3-4-4-2 gives 36, and doubled to 3-8-8-2 gives <b>104</b>, not 72 and not 144.<br><br>The general principle: <b>a layer between two doubled widths quadruples; a layer with one doubled side doubles.</b> Which factor dominates depends on how much of the total the middle layer holds.",
          hints: {
            1: "Too small — the hidden-to-hidden layer grows by more than a factor of two.",
            2: "Too large — the outer two layers each have one width that did not change.",
            3: "That would need every layer to quadruple, and two of them do not.",
          },
          defaultHint: "Compute all three products before and after. Only one of the three quadruples.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q26.</b> A colour image of size (32, 32, 3) enters the first convolutional layer and the output is (28, 28, 4). There is no padding and the stride is 1.",
          q: "What is the kernel's shape as (input channel, height, width, output channel)?",
          opts: ["(3, 5, 5, 4)", "(3, 4, 4, 4)", "(4, 5, 5, 3)", "(3, 3, 3, 4)"],
          a: 0,
          why: "<b>Spatial side: 32 − K + 1 = 28, so K = 5.</b> Input channels must be 3 to match the image, and output channels must be 4 to match the output — one filter per output channel.<br><br>The deck's Check-slide version inverts the same relation: a 24×24×2 input giving 22×22×5 needs <b>K = 3</b>, since 24 − K + 1 = 22. And it names the trap: <i>\"choosing 5 from the 5 output channels. Channel counts do not enter the spatial formula.\"</i><br><br>The third option here is that exact trap — it swaps the channel counts, putting the 4 where the input depth belongs.<br><br>The general formula: output = (n + 2p − k)/s + 1, which with p = 0 and s = 1 reduces to n − k + 1.",
          hints: {
            1: "Check the spatial arithmetic: 32 − 4 + 1 is not 28.",
            2: "The channel counts are swapped. Which one has to match the input image?",
            3: "A 3×3 kernel would give 32 − 3 + 1 = 30, not 28.",
          },
          defaultHint: "Solve for the spatial side first, then match the two channel counts to the shapes given.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q36.</b> A single neuron with a linear activation and squared error (y − wᵀx)², input x, learning rate λ.",
          q: "What is the weight update rule?",
          // Formula options, reproduced verbatim from the paper. Their lengths are
          // set by the mathematics rather than by how much explanation was written
          // into them, so the length-spread rule does not apply (see teaching rule 4).
          // Note the longest option here is a DISTRACTOR, and in the next step it is
          // the answer — length carries no signal either way.
          symbolic: true,
          opts: [
            "wᵢ ← wᵢ + λ·2xᵢ(y − wᵀx)",
            "wᵢ ← wᵢ + λ·2xᵢ(y − wᵀx) + ‖w‖²",
            "wᵢ ← wᵢ + λxᵢ(y − wᵀx) + ‖w‖²",
            "wᵢ ← wᵢ + λxᵢ",
          ],
          a: 0,
          why: "<b>Differentiate (y − wᵀx)² with respect to wᵢ:</b> the chain rule gives 2(y − wᵀx) × ∂(y − wᵀx)/∂wᵢ = 2(y − wᵀx)(−xᵢ). Descending means subtracting λ times that, so wᵢ ← wᵢ + λ·2xᵢ(y − wᵀx).<br><br>Two options bolt <b>‖w‖²</b> onto the update, which is a category error worth recognising: a regularisation term belongs in the <i>objective</i>, and what appears in the update is its <i>derivative</i> — 2λw for an L2 penalty, not the penalty itself.<br><br>The last option drops the error term entirely, so it would move the weight regardless of whether the prediction was right.<br><br>The deck's numeric Check slide is this rule applied once: (wx − y)² with x = 3, y = 5, w = 1, rate 0.05 gives gradient −12 and <b>w → 1.6</b>, with 1.3, 0.4 and −0.6 as the three named slips.",
          hints: {
            1: "A penalty's value never appears in an update — only its derivative does.",
            2: "Two problems: the stray penalty term, and a missing factor from the chain rule.",
            3: "This one ignores the prediction error entirely. It would update even when the output is correct.",
          },
          defaultHint: "Differentiate the squared error, then apply the descent rule. Nothing else belongs in the expression.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q47.</b>",
          q: "Which of these functions is permutation invariant in (x₁, x₂, x₃)?",
          // Formula options, verbatim from the paper — same exemption as the step above.
          symbolic: true,
          opts: [
            "f(x) = max(relu(x₁), relu(x₂), relu(x₃))",
            "f(x) = x₁ + 2x₂ + x₃",
            "f(x) = average(x₁, 2x₂, x₃)",
            "None of the above",
          ],
          a: 0,
          why: "<b>ReLU is applied element-wise and max ignores order</b>, so the composition is invariant under every permutation.<br><br>The two distractors both give x₂ a coefficient of 2, which pins it to its slot. Averaging does not rescue it — <b>average(x₁, 2x₂, x₃)</b> is just the weighted sum divided by 3, so it fails exactly as the sum does.<br><br>The deck's rebuilt version compares F(x) = ReLU(x₁) + ReLU(x₂) + ReLU(x₃) against G(x) = x₁ + 2x₂ + x₃, with the counterexample worked out: G on (−2, 1, 4) gives <b>4</b>, and on (1, −2, 4) gives <b>1</b>.<br><br>And its note on the logic: <i>\"One counterexample rules out G, but F needs the symmetric-sum argument, which covers every reordering.\"</i> Disproving invariance takes one example; proving it does not.",
          hints: {
            1: "The coefficient 2 is attached to a position, so swapping x₁ and x₂ changes the value.",
            2: "Dividing by 3 does not remove the coefficient. It is the same function scaled.",
            3: "One of them genuinely is invariant — check the one with no per-slot coefficient.",
          },
          defaultHint: "Substitute (−2, 1, 4) and then (1, −2, 4) into each option and compare.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q53.</b>",
          q: "How can gradient clipping help with the <b>vanishing</b> gradient problem?",
          opts: [
            "It cannot — clipping is not a method for addressing vanishing gradients at all",
            "It makes gradients larger when they are too small, restoring a usable signal",
            "It normalises gradients to a fixed range so they neither vanish nor explode",
            "It prevents gradients becoming too large, which may be used for vanishing with caution",
          ],
          a: 0,
          why: "<b>Clipping is a ceiling, not a normaliser.</b> The rule is g′ = min(1, c/‖g‖)·g, and the <b>min</b> is what makes it one-directional: when the norm is already below the threshold the factor is exactly 1 and nothing changes.<br><br>The deck's worked case: g = (0.03, 0.04) has norm 0.05, so the factor is min(1, 20) = <b>1</b> and the gradient passes through untouched. Its note: <i>\"Common error: treating clipping as a fix for vanishing gradients. The min caps large gradients and never enlarges small ones.\"</i><br><br>Vanishing gradients need an architectural answer — residual connections, LSTM gating, better initialisation, or a non-saturating activation.<br><br>Clipping's real job is the other failure: when all your weights turn to <b>NaN</b>, that is the <b>exploding</b> gradient problem, and resizing gradients by their norm to a threshold is the standard fix.",
          hints: {
            1: "Look at the min. Can min(1, something) ever exceed 1?",
            2: "Global clipping has no lower bound — it only scales down, never up.",
            3: "The hedge is doing a lot of work there. Check whether the mechanism can help at all.",
          },
          defaultHint: "Write out min(1, c/‖g‖) for a gradient whose norm is already tiny.",
        },
        {
          type: "mcq",
          ctx: "<b>Archived Q51</b>, the last of the eight.",
          q: "How does k-nearest neighbours typically handle <b>regression</b> problems?",
          opts: [
            "By calculating the mean of the nearest neighbours' values",
            "By taking a majority vote among the nearest neighbours' values",
            "By treating it as classification and using the most similar neighbour's value",
            "By using gradient descent to minimise the distance between the neighbours",
          ],
          a: 0,
          why: "<b>Average the neighbours' values.</b> A majority vote is the classification rule and is not even well defined on continuous targets — with values 2, 5 and 11 there is no majority to take.<br><br>Using only the single most similar neighbour is 1-NN, which throws away the other k − 1 and is a different algorithm.<br><br>And the last option names the thing kNN conspicuously does not do: <b>there is no training and nothing to minimise.</b> The model is the stored training set, with zero learnable parameters.<br><br>The deck's Check slide gives the arithmetic — targets 2, 5, 11 at k = 3 predict <b>6</b> — and names the three slips: <b>18 forgets to divide by k, 5 takes the median, 11 takes the largest.</b><br><br>That is all eight cited questions. Each one has now been examined once and rebuilt once in the review deck.",
          hints: {
            1: "A vote needs repeated labels. What would a majority mean among 2, 5 and 11?",
            2: "That discards k − 1 of the neighbours and is a different algorithm entirely.",
            3: "kNN has no training phase and nothing to optimise.",
          },
          defaultHint: "The neighbours carry numbers. What is the natural way to combine numbers?",
        },
      ],
    },
  ],
};

export default function Lecture10_MidtermStudyGuide({ onBack }) {
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
        <div style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "2px", color: COLOR, marginBottom: "8px" }}>NOV 2 · STUDY GUIDE</div>
        <div style={{ fontFamily: DISPLAY, fontSize: "30px", fontWeight: 700, color: BONE }}>Midterm Study Guide</div>
        <div style={{ fontFamily: BODY, fontSize: "13px", color: LICHEN, marginTop: "8px", maxWidth: "640px", lineHeight: 1.6 }}>
          Built from the 250-slide review deck and the archived past paper. Fifteen game levels follow the deck's own seven sections — evaluation, shapes and CNNs, gradients, reliable training, recurrent memory, attention, graphs — and the boss round is the eight archived exam questions the deck rebuilds by name: Q6, Q23, Q24, Q26, Q36, Q47, Q51 and Q53. Every number on this page is taken from a slide or from the paper and recomputed independently.
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
              const priorityColor = t.priority === "HIGH" ? COLOR : t.priority === "MEDIUM" ? ACCENT : STONE;
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
        {tab === "game" && <LectureGame lectureId="studyguide" game={GAME} />}
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
          lectureTitle="Midterm Study Guide"
          lectureTranscript={TRANSCRIPT}
        />
      )}
    </div>
  );
}
