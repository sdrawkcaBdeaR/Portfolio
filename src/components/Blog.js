import './Blog.css'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/MOT.jpg'
import blog3 from '../images/blog3.jpg'
import ShowBlog from './ShowBlog';

const Blog = ({state}) => {
    const darkmode={
        backgroundColor:"#2B2B2B",
        color:"white"
    }
    
    const blogs=[
        {
            imgadd:blog1,
            title:"Aavhan",
            description:"The heartbeat of any sports enthusiast quickens when they hear the call of competition, and for us, it was no different. Representing the spirited athletes of IIT Kharagpur, we embarked on a memorable journey to Aavhan, the sports fest organized by IIT Bombay. It was a voyage filled with passion, perseverance, and the unmistakable charm of Bombay's bustling streets. Our journey was not just about winning or losing; it was about the thrill of the game, the bonds forged in sweat and determination, and the vibrant atmosphere of the fest itself. Stepping onto the lush green fields, we knew that we were not just playing for victory, but for the sheer love of football. Our football team gave their all, playing each game with unwavering dedication. We faced opponents who were equally fierce and skilled. The thrill of competition was palpable, and our determination to make our institute proud soared higher with every match. Though we fought valiantly, the journey reached a halt at the quarter-finals. While we did not emerge as champions, we emerged as a closely-knit team, stronger in spirit and unity. The cheers from our supporters echoed in our hearts, reminding us that victory isn't always about the score but about the effort, the friendships, and the memories made. Off the field, the city of Mumbai welcomed us with open arms. The bustling streets, the iconic Marine Drive, and the aroma of street food filled our senses. We soaked in the culture and vibrancy of Bombay, creating memories that will last a lifetime. As we bid adieu to Aavhan and the beautiful city of Mumbai, we knew that we were leaving with a treasure trove of experiences. We may not have won the tournament, but we won something even more valuable - the camaraderie, the sportsmanship, and the love for the game. Aavhan 2023 will forever remain etched in our hearts as a chapter of growth, passion, and the enduring spirit of sports. Until next time, Bombay! We'll be back, stronger and more determined than ever.",
            quote: "Where 0s and 1s write the language of technology."
        },
        {
            imgadd:blog2,
            title:"Shaurya 2023",
            description:"IIT KGP was organising its sports festival after 10 years because of its ban and post covid trauma. \nFor any sports team it was a golden opportunity as the tournament was happening in their home ground and every team was eagerly practicing to participate. We had the advantage of representing two teams from our college as we were the host of the tournament. We started our practice with few people in start as the old team members were having internship and placement prep going on, and the juniors were not aware of the upcoming tournament. Then we had to give notice and called everyone who was interested. To our astonishment more than required people started coming to practice and it was too hectic to manage more than 50 people at once. \nWith help of our coach and immediate junior we were able to mange the practice sessions in a fruitful way. I was able to see the juniors make a tremendous amount of improvement. My friend Arjit Lohia was the leading role during the entire training process for the tournament. The practice when on continuously with only break during the mid-semester examination. \nIn the end we had matches with the outside teams and among ourselves for having an actual tournament scenario matches for getting away juniors fear. \nOur A team match started with match against St. Xavier’s where I scored the one and only winning goal of the match. In the next match we won 4-0 against NSUT were I scored the first goal. Paralleling our B team won against IIT Dhanbad and unfortunately we were forced to have semifinals against them. Our team A won and qualified to the finals and team B had to play for the third place. Our finals was against St. Xavier’s and this time they won after scoring a goal after halftime also few minutes that we got a red card, making it even harder for us to score a goal. But we gave everything we had till the end. I was very happy with the performance from everyone. \nI even got player of the tournament award in the end, all because of my team.",
            quote: "Turning data into insights, and innovation into possibility"
        },
        {
            imgadd:blog3,
            title:"Trip",
            description:"Immersed in control systems, I'm drawn to their blend of theory and real-world impact. Embracing perpetual advancement fuels my passion for precision and empowers me to engineer systems that govern processes with accuracy. Each refined algorithm and feedback loop shapes outcomes, ensuring stability in intricate systems driving technology and industries.",
            quote: "Orchestrating precision in complexity"
        }
    ]
    const showblogs=blogs.map((blog,index)=>{
        return(
            <ShowBlog item={blog} key={index} state={state} index={index}/>
        )
    })

    return (
        <div className='blog' id='blog' style={state?darkmode:{}}>
            <div className='container'>
                <h2>Blogs</h2>
                <div className='content'>
                    {showblogs}
                </div>
            </div>
        </div>
    )
}

export default Blog;