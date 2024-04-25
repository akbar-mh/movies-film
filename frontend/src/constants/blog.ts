interface BlogItem {
  imageSrc: string;
  date: string;
  commentCount: number;
  title: string;
  text: string;
}

import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog3.jpg"
import blog3 from "../assets/blog4.jpg"
import linkedin from "../assets/linkedin.jpg"
 
export const blogItems: BlogItem[] = [
  {
    imageSrc:blog1,
    date: "02/FEB/2023",
    commentCount: 1,
    title: "The Power of Effort: Fueling Success.",
    text: "Success is fueled by relentless effort and unwavering motivation. Every step, every challenge overcome, contributes to the journey. The importance lies not just in reaching goals but in the transformative power of sustained dedication.",
  },
  {
    imageSrc: linkedin,
    date: "12/FEB/2023",
    commentCount: 1,
    title: "Attract visitors on LinkedIn",
    text: "Visitors to your profile page will only see the first three lines of your summary and should click on see more to see a more comprehensive description. In other words, the first three lines are the most important in the summary. If you can grab users' attention with the first three lines, the more likely they will continue to read more.",
  },
  {
    imageSrc: blog3,
    date: "29/FEB/2023",
    commentCount: 1,
    title: "AI: Transforming Our World",
    text: "In today's tech-driven era, Artificial Intelligence (AI) shapes our lives. From smart assistants to personalized recommendations, AI enhances efficiency and decision-making. Its importance lies in revolutionizing industries, solving complex problems, and creating a future where machines augment human capabilities. AI isn't just a tool; it's a transformative force driving innovation and progress",
  },
/*   {
    imageSrc: blog2,
    date: "29/FEB/2023",
    commentCount: 1,
    title: "Performance Optimization.",
    text: "Page load times significantly impact user satisfaction and search engine rankings. Professional frontend programmers employ techniques like code splitting, lazy loading, and optimizing images to enhance the performance of their applications. Regularly auditing and addressing performance bottlenecks contribute to a smoother user experience.",
  }, */
];
