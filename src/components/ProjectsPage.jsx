// HomePage.js
import Projects from "./Projects";
import PreDS from "./preDS";
import Work from "./Work";
import michmed from './../assets/images/michmed2.png'
import stocks from './../assets/images/stocks.png'
import aon from './../assets/images/aon.png'
import umsi from './../assets/images/umsi.png'
import css_meme from './../assets/images/css_meme.jpeg'


function ProjectsPage() {
    return (
      <>
    
      <main>
    <div class="container">
        <h2>Technical Experience</h2>
        <p>
            Code Code Code Code Code! Here are some of my technical experiences.
        </p>
        <Work title="Data Science Intern @ Aon" description="Upon starting my summer at Aon, I delved into their internal patent datasets and combed through public International Trade Commision patent data using pySpark. By doing this, I was able to suggest improvements for both the structure and potential uses of the internal dataset in regards to Aon's patent valuation estimates by presenting my findings along with Seaborn visualizations to the team. Later in the summer, I developed multiple multi-class classification machine learning models (SVM, Random Forest, XGBoost) using Scikit-Learn to predict patent attributes based on its descriptive text. Finally, Ionstructed a deep neural network classifier using PyTorch that improved the SVM model’s accuracy." imageUrl={aon} date='June 2023 - August 2023'/>
        <Work title="Python Developer" description="The summer before I began my true data science education, I bulked up my python experience working for a small start-up group. Their goal was to build algorithms to automate the best times to buy and sell stocks. One of my tasks was to help obtain and preprocess financial time series and technical indicator API data from services like 12Data and TD Ameritrade. I then used Pandas to manipulate the data and matplotlib for visualizations.I also automated the archive process of daily chart updates using OpenCV to read in the data into a compressible format. Finally, I helped improve the performance of a finBERT sentiment analysis classifier by incorporating preprocessed financial news data streams from sources such as TD Ameritrade and Twitter. The sentiment analysis was used as a feature in the overall algorithm." imageUrl={stocks} date='May 2022 - September 2022'/>

        <h2>Projects</h2>
        <p>
            Here are some of my projects.
        </p>
        <Projects title="Recipe Recommender System (2023)" description="In my Information Retrieval course (SI 650) we learned the ins and outs of ranking and recommendation systems. For my final project, my partner and I created an end-to-end information retrieval system to recommend recipes from a collection of 2 million recipes. One priority was being able to to state ingredients that I didn't want the recipe to have. We implemented a negation feature for dietary restrictions by creating a separate index containing preprocessed named entity recognized ingredients and eliminating any relevant results containing those unwanted ingredients. To evaluate if our recommender system was performing well, we annotated 2000 recipes with relevance to a given query to establish performance using MAP and NDCG metrics." imageUrl={umsi} projectUrl="https://github.com/bkarduck/si650-final-project"/>

        <Projects title="ChatGPTravel – Your New Virtual Travel Agent (2023)" description="When your data science professor says: 'Do something with Chat GPT' for your final project, that leaves you an endless amount of possibilities. I love to travel but hate the amount of sponsored blog posts recommending what you should do or where you should go when looking up activities, destinations, or restuarants. What was my solution? For my project, I built a travel recommendation application by leveraging clever prompt engineering tactics with OpenAI’s ChatGPT API to generate appropriate recommendations respective to the user’s desired qualities in a vacation." imageUrl={umsi} projectUrl="https://github.com/bkarduck/ChatGPTravel"/>

        <Projects title="Generation Z Language Classifier (2023)" description="As a proud member of Gen Z, I was quite curious if the quirks of social media fueled lingo could be correctly identified by large language models. I gathered and preprocessed 25,000+ Reddit posts using a customized spaCy tokenizer to accommodate for emojis, hashtags, and user tags. In the same pipeline, trained a Named Entity Recognizer to recognize Gen Z slang. Then, I used GPU power from my campus computing cluster to accelerate the training of a spaCy roBERTa transformer pipeline with the goal of classifying if a given Reddit post was written by a Gen Z individual or an older poster. My original goal was to try and make an interactive chat bot that could speak in Gen Z slang but alas, as those in my age group would say - I did not secure the bag and no girlbossing occurred. Future potential goal? Check in later." imageUrl={umsi} projectUrl="https://github.com/bkarduck/GenZClassifier"/>

        <Projects title="Ann Arbor Water Main Break Predictions (2023)" description="This was my final project for SI 670 (Machine Learning). My team and I created a machine learning model pipeline (Random Forest Classification performed the best) to predict if a watermain will break in the next 3 years in Ann Arbor, Michigan. These predictions can help the city do preventitive maintenace and mitigate infastrucure failures. This followed the UMSI 2023-2024 water theme and was a cool project to do in regards to understanding how much data is out there that just... isn't getting used." imageUrl={umsi} projectUrl="https://github.com/theuerc/ann_arbor_watermain_break_predictions/tree/main"/>

        <Projects title="In Progress - America’s Next Top Model: Demystifying Two Methods for Election Prediction (2024)" description="If you know me, you know I also have a keen interest in politics. An idea that my MSI capstone team (SI 699) and I pondered over is that if knowledge is power then when it comes to election predictions, the public is in the dark. Media reports are filled with opinion polling data and pundits expound on which candidate will win, but how are these predictions made? We tested two methods of election prediction—a classical statistical approach and a machine learning method that built upon the classical results—and made them understandable to a general audience. Our public website walks readers through the details of each method and allows them to compare the models’ predictions with actual outcomes." imageUrl={umsi} projectUrl=""/>

        <Projects title="In Progress - This Website :) (2024)" description="I've always wanted to experiment more with HTML/CSS/JS/React. When this website was developed, it was inspired by the JS and React class I am in. I suspect it will always be an in-progress project as I continue to learn and grow my capabilities as a programmer." imageUrl={css_meme} projectUrl="https://github.com/bkarduck/bkarduck.github.io"/>

        </div>
    </main>
    
    </>
  )}
  
  export default ProjectsPage;