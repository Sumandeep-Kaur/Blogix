import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "How to ace your technical interviews",
        category: "Interview",
        likes: 6,
        content: "Technical interviews are the key component to landing an engineering role. Everything from preparation to asking the right questions is important for a successful interview. In this post, Pinterest employees from Recruiting and Engineering share tips and tricks for acing your interview from start to finish. The interview itself shouldn’t be the first time you’re hearing and thinking about interview questions. Practice everything from potential questions to concepts ahead of the real deal. Brush up on core CS, general software engineering skills and large scale system design. Companies are constantly refreshing their interview question banks, but you can use sites like Leetcode and Interviewing.io to find great practice questions. Don’t forget to also check out resources like Pinterest open source projects on GitHub and opensource.pinterest.com."
    },
    {
        id: 2,
        title: "5 Reasons why you should learn React!",
        category: "Programming",
        likes: 5,
        content: "Are you wondering if it's worth learning React in 2023? **Well, the short answer is yes!** React has established itself as one of the go-to frameworks for building web applications. Its popularity has been growing exponentially, making it one of the most in-demand skills for developers. React is a JavaScript library that enables developers to build complex user interfaces by breaking down the interface into reusable components. It is not a full-fledged framework but can be used alongside other technologies to create powerful applications. React's key features include its ability to handle complex state management, its virtual DOM, and its easy integration with other libraries. Learning React in 2023 is a wise decision because it is highly sought-after in the job market. As businesses continue to shift online, the demand for React developers will keep increasing. Additionally, React offers flexibility in development, allowing developers to create applications with ease. React also boasts of a large and supportive community, making it easy to seek help when building complex applications. Finally, React is under constant development, meaning developers never stop learning new skills. In summary, React is a popular choice for building web applications due to its flexibility, ease of use, and high performance. It's widely used by companies around the world and has a large and active community, which means there are plenty of resources available for developers to learn from. For those considering learning React in 2023, it's a good choice to make, as the demand for React developers is high, and the framework is constantly evolving, making it a valuable skill to have."
    },
    {
        id: 3,
        title: "Creatively use ChatGPT to write your articles",
        category: "Writing",
        likes: 7,
        content: "Anyone who’s tried “write an article about [topic]” as a prompt to ChatGPT will tell you the truth: ChatGPT can’t write well at all. That’s not a secret. If you doubt me, ask it or any AI writing tool, to write a blog post. It will crank out very bad content that no real human will like reading. Yet I’m still a ChatGPT fan. It saves me a ton of time and makes my job as a busy content creator a little easier. Here are five surprising non-writing applications I love using ChatGPT for."
    },
    {
        id: 4,
        title: "What is Big Data Analytics and how it works?",
        category: "Technology",
        likes: 2,
        content: "Each day, your customers generate an abundance of data. Every time they open your email, use your mobile app, tag you on social media, walk into your store, make an online purchase, talk to a customer service representative, or ask a virtual assistant about you, those technologies collect and process that data for your organization. And that’s just your customers. Each day, employees, supply chains, marketing efforts, finance teams, and more generate an abundance of data, too. Big data is an extremely large volume of data and datasets that come in diverse forms and from multiple sources. Many organizations have recognized the advantages of collecting as much data as possible. But it’s not enough just to collect and store big data—you also have to put it to use. Thanks to rapidly growing technology, organizations can use big data analytics to transform terabytes of data into actionable insights. Big data analytics describes the process of uncovering trends, patterns, and correlations in large amounts of raw data to help make data-informed decisions. These processes use familiar statistical analysis techniques—like clustering and regression—and apply them to more extensive datasets with the help of newer tools. Big data has been a buzz word since the early 2000s, when software and hardware capabilities made it possible for organizations to handle large amounts of unstructured data. Since then, new technologies—from Amazon to smartphones—have contributed even more to the substantial amounts of data available to organizations. With the explosion of data, early innovation projects like Hadoop, Spark, and NoSQL databases were created for the storage and processing of big data. This field continues to evolve as data engineers look for ways to integrate the vast amounts of complex information created by sensors, networks, transactions, smart devices, web usage, and more. Even now, big data analytics methods are being used with emerging technologies, like machine learning, to discover and scale more complex insights."
    },
    {
        id: 5,
        title: "Upgrading From Java 17 To 21: All You Need To Know",
        category: "Coding",
        likes: 4,
        content: "Java 21 is chock-full of great features and if you're coming all the way from 17, there's a plethora of additions to use and get used to. From pattern matching to sequenced collections and countless API additions, from faster GC and overall performance improvements to better security, from virtual threads to better JFR and much, much more - you'll see improvements in all areas. And that's all great and in the coming weeks we'll tell you all about that in the Road to 21 video series that you're currently watching the first episode of. But it's all for naught if you can't actually update. And while there isn't one big hurdle, there are plenty of small ones that may cause hiccups when you're moving your project to Java 21. So to make sure that you can hit the ground running, I've collected them all and we'll go over every issue that you may encounter on the road from Java 17 to 21, although I'm sure most of you will only see a tiny fraction. Ready? Then let's get on road! The metaphorical one. I'm not gonna get in a car or anything. I'll be right over there at my desk. Just roll the intro!"
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        editPost: (state, action) => {
            const {id, title, category, image, content} = action.payload;
            const post = state.find(p => p.id == id);
            if(post) {
                post.title = title;
                post.category = category;
                post.image = image;
                post.content = content;
            }
        },
        deletePost: (state, action) => {
            const {id} = action.payload;
            const post = state.find(p => p.id == id);
            if(post) {
                return state.filter(p => p.id != id);
            }
        },
        likePost: (state, action) => {
            const {id} = action.payload;
            const post = state.find(p => p.id == id);
            if(post) {
                post.likes++;
            }
        },
        unlikePost: (state, action) => {
            const {id} = action.payload;
            const post = state.find(p => p.id == id);
            if(post) {
                post.likes--;
            }
        }
    }
});
export const { addPost, editPost, deletePost, likePost, unlikePost } = postSlice.actions;

export default postSlice.reducer;