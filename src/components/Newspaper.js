// Cards of trending names
import React from 'react';
import './Newspaper.css';
import image1 from '../imgs/2.png';
import image2 from '../imgs/4.png';
import image3 from '../imgs/5.png';
import image4 from '../imgs/3.png';


const Newspaper = ({id}) => {

  console.log("ID recibido:", id);

  const items = [
    {
      id: 1,
      title: 'Horror Inside the Internet!',
      author: 'Nashley Cedeño',
      authorimg: image1,
      img: image1,
      date: "June 05th, 2024",
      text1: null,
      text2: null,
      text3: null,
      text4: "Cyber crime started emerging not so long ago, but as time passes, it keeps increasing. In fact, this crime is fast becoming the most recurrent attack people receive when using the internet. After covid-19, the world has changed completely, taking physical interactions to virtual ones. Companies now offer remote jobs, people have started making content on social media, and virtual markets are becoming stronger as time goes by. Nevertheless, this also means cyber attacks are occurring more frequently, attacking both companies and users, making it a menace all over the world. Issues keep coming into organizations and civilians because cybersecurity is not a subject normally brought into common conversations, and it changes constantly to enforce protection.",
      text5: "Cyber attacks are the nightmare of companies, since one attack can become their loss of time and money, including the loyalty of customers. Be it sabotage or internal attacks the results are the same. Studies have come to the conclusion that a company affected by these attackers can lose approximately $24,000 by fixing infected computers or/and networks. This has obligated organizations to educate their staff about the different cyber attacks.",
      text6: "An issue we can't ignore is the attack from insiders, and yes, we are talking about employees. This could be considered one of the most difficult problems a company can face, especially large companies. A study made in 2006 concluded that 40% of cyber attacks come from insiders. Nir Kshetri investigated and found:",
      text7: "”(p. 2).",
      text8: "Nonetheless, the most frequent issue is the social cyber attack. Attackers manipulate users to believe what they see, going as far as faking an important role to make an employee believe it’s true. Phishing is the attack most commonly known to be used, in which, for example, a hacker can make a replica of a bank website, deceiving a user into thinking they are in an official site, and as a result, giving away their bank account.",
      text9: "All these issues are part of what triggers the never-ending war where professionals in cybersecurity and cyber criminals keep finding ways to fulfill their purposes. We, as humans, are the important factor between this conflict, and that’s why we must inquire about threats that keep appearing to be safe, out of trouble, and start fighting against these. We’ll seek that in the future the internet will no longer be a dangerous place.",
      text10: null,
      text11: null,
      text12: null,
      citation1: "In 2001, two accountants at Cisco Systems pled guilty for breaking and accessing into unauthorized parts of the company’s network and issuing themselves nearly US$ 8 million in company stock",
      citation2: null,
      citation3: null,
      bibliography1: "Altagar, G. (2023). The Impact of Robots on Society. robotics. https://www.unlimited-robotics.com/post/the-impact-of-robots-on-society",
      bibliography2: "Horus Smart Control. (n. d.) The Impact of Automation on Modern Life. https://www.horussmartcontrol.com/el-impacto-de-la-automatizacion-en-la-vida-actual/",
      bibliography3: "Luka Eciolaza. (2022,01). Automation and Its Impact on Employment - Technology and Industry. https://www.mondragon.edu/en/-/automatizacion-impacto-empleo"
    },
    {
      id: 2,
      title: 'Automation and Robotics Have Taken Control over our Lives',
      author: 'Jessica González',
      authorimg: image2,
      img: image2,
      date: "June 06th, 2024",
      text1: "Over time, individuals have sought to greatly enhance their quality of life by simplifying daily tasks and developing new methods to improve everyday processes, thereby reducing the effort needed to perform certain activities themselves.",
      text2: "Amid these changes, and the pursuit of reducing the time and effort required for each task while achieving greater benefits, technology has emerged as the ideal partner. Today, due to technological advancements and extensive research, numerous automated solutions and systems have been developed, making life easier and more productive.",
      text3: "It must be acknowledged that in this technological age, some people still avoid technology and fear change, even resisting it. However, experts suggest that this is a natural human response- stemming from fear of the unknown.",
      text4: "Nevertheless, digital transformation has arrived, the world continues to progress, and technology will keep advancing to automate daily life. Technological development is a fact, and adapting to this transformation is crucial to avoid being left behind.",
      text5: "Automation has enabled people to have complete control over various everyday objects in all aspects of their environments. Intelligent and creative solutions have been developed for the home, workplace, transportation, and services, allowing actions to be replaced and enabling remote control. Some creative solutions with automation are Chatbots and Virtual Assistants, Industrial Robots, Medical Imaging Analysis, Drones and Sensors collect data.",
      text6: "On the contrary, Altagar (2023) states that “",
      text7: "”(p.2). As artificial intelligence and robotics advance, machines are increasingly capable of performing tasks that humans used to do. Consequently, numerous jobs, especially those involving repetitive tasks or manual labor, are at risk of being automated. A study by the McKinsey Global Institute predicts that up to 800 million jobs worldwide could be displaced by automation by 2030.",
      text8: "In addition, automation and robotization of jobs have become a reality. The deployment of robots is rapidly expanding due to their affordability, enhanced capabilities to handle increasingly complex tasks, and the growing demand within a consumer-driven society. In the future, cheap labor will no longer be a key differentiator. Modern production processes create goods and services with much greater efficiency, minimal errors, and full traceability of the manufacturing process. Consequently, technologies such as the Internet of Things, Big Data, AI, and robotics provide smart factories with significant flexibility to enhance their products, speed up production, and swiftly adapt to market demands.",
      text9: "Also, the proliferation of robots and automation is also expected to alter social norms and relationships. Robots become more common in workplaces; human workers will need to adapt to new ways of working and interacting with machines. Additionally, the increased presence of robots in daily life may influence how people relate to one another.",
      text10: "To conclude, Robots' will impact human lives both negatively and positively. While they have the potential to enhance efficiency and productivity, they might also cause job displacement and shift social dynamics. It is essential to know about these advantages and prepare for that change.",
      text11: null,
      text12: null,
      citation1: "One of the most significant impacts of robots on society is job displacement. With advances in artificial intelligence and robotics, machines are becoming increasingly capable of performing tasks that were once done by humans",
      citation2: null,
      citation3: null,
      bibliography1: "Pranggono, B., & Arabo, A. (2021). COVID‐19 pandemic cybersecurity issues. Internet Technology Letters. https://doi.org/10.1002/itl2.247",
      bibliography2: "Kshetri, N. (2013). Global Cybersecurity: Issues and Concerns. Journal of Global Information Technology Management : JGITM, 16(4).",
      bibliography3: "Da Veiga A., Furnell, S., Hong, Y., & Warkentin, M. (2023). Introduction to the special issue on insider threats in cybersecurity. Journal of Information Security and Applications. https://doi.org/10.1016/j.jisa.2023.103585"
    },
    {
      id: 3,
      title: 'Artificial Intelligences and Copyright',
      author: 'Luana Salas',
      authorimg: image3,
      img: image3,
      date: "June 07th, 2024",
      text1: "Training artificial intelligences with content without consent is considered an act of theft where many sectors have been affected, and the most famous platforms do not want to protect them, causing those affected to have to find ways to defend themselves from these thefts. This is considered as such because artificial intelligences benefit economically without giving recognition or remuneration to the people who have contributed to the training of the AI.",
      text2: "With this in mind, the most affected sectors are illustrators, animators, designers, choreographers, actors, cameramen, singers, and musicians. This is because AI not only produces text or images but also videos and music, and since they need references to train, AI trainers resort to information found on the Internet, something absolutely controversial if there is no prior negotiation with the content creator, as they are violating copyright.",
      text3: "At the present time, social media platforms are looking for ways to create their own artificial intelligences using their users' content. Since people are complaining about this decision, social media platforms like Meta are proactively communicating that they will use all the information to feed their AI. In European countries, it can be seen that each account is allowed to choose whether or not to help feed it, but in Latin America, it is practically mandatory, as there is no section to oppose, so many people are unprotected against this wave generated by AI.",
      text4: "A year ago, a social network inspired by Twitter was created where people can create a profile to present their work formally, like LinkedIn, but for content creators. To access this platform, you had to get an invitation, but due to this problem, recently this social network called Cara has opened its doors to everyone who wants to protect their work from theft caused by AI. It also offers technologies that, if used in an AI, make it learn to copy with very poor results, even damaging it completely.",
      text5: "As can be seen, AI can be a wonderful tool, the problem is that they are using other people's material without consent, infringing their copyright. The fact that the most well-known social networks are not cooperating with this right that has been fought for hundreds of years makes all authors feel vulnerable that their works will not be recognized. It is sad that in this new era, where we increasingly depend on AI, the human face behind supporting its construction is disappearing more and more.",
      text6: null,
      text7: null,
      text8: null,
      text9: null,
      text10: null,
      text11: null,
      text12: null,
      citation1: null,
      citation2: null,
      citation3: null,
      bibliography1: "Irense. (2024). Te cuento la nueva app de moda en el mundo del arte. https://vm.tiktok.com/ZMrRSNuC6/",
      bibliography2: "Zayha. (2024). Así es la lista de artistas cuyas obras se han tomado sin consentimiento para entrenar inteligencia artificial. https://vm.tiktok.com/ZMrRBocAD/",
      bibliography3: "Markova. (2024). Si eres artista y tienes Instagram, ¡debes hacer esto! https://vm.tiktok.com/ZMrRBocAD/"
    },
    {
      id: 4,
      title: 'Education and Technological Training',
      author: 'Mónica Artavia',
      authorimg: image4,
      img: image4,
      date: "June 06th, 2024",
      text1: null,
      text2: null,
      text3: null,
      text4: null,
      text5: "Nowadays, education and technological training are essential for personal and social development. Digitalization has transformed the educational panorama, increasing the demand for advanced technological skills. Technology is present in almost every aspect of our lives, so knowing and managing these tools is essential. Therefore, in education and technological training, it's important to promote technological learning, investigate future trends, and address the challenges that arise in this scope.",
      text6: "Learning about technology has become more accessible thanks to the resources available online and digital learning experiences. The pandemic has accelerated this trend, highlighting the importance of digital education in a world that is constantly changing. One of the most popular resources is programming courses, which offer students the opportunity to acquire essential technical skills for the current and future job market. In 2021, Munday wrote: “",
      text7: "” (pp. 66). The impact of the pandemic and the subsequent adaptation to new forms of learning have been significant, driving people and organizations to explore and make the most of online education to meet the changing needs of the workplace and society, rather than solely relying on it as a resource when everything else fails",
      text8: "For the future, it's important to be aware of trends in technological education, as they will greatly change the way we learn. It's expected that classes will use more technology to make them more interesting and participative. A growing trend is the use of virtual and augmented reality in education. These technologies allow for the creation of virtual worlds where students can practice safely and learn in a more engaging manner. With virtual and augmented reality, students can immerse themselves in new experiences and practice skills in a safe and exciting way, which helps them better prepare for real life. As Pearson mentions: “",
      text9: "” (2022). This means that using technology in education is not just something good; it's highly necessary to keep pace with changes and to make learning more interesting and useful for students.",
      text10: "In searching for a more equitable technological education, we face a series of challenges that require solutions. One of them is the digital divide, which means that some people or regions lack sufficient access to technology and technological education. This can lead to some individuals falling behind in learning. Additionally, the cost of technological education is another issue; some courses and certifications can be very expensive, making it difficult for some people to afford them. Educatics stated:“",
      text11: "” (n.d.). Therefore, acquiring devices is part of this problem of the cost of technological education. It is crucial to find ways to help individuals finance their education, not only with money but also by providing them with training to be aware of available scholarship programs. Additionally, another challenge is how difficult it is to keep up in a scope that changes rapidly. People need to find ways to continue learning and updating themselves constantly, even with the knowledge they already possess, to avoid falling behind in their skills.",
      text12: "In conclusion, education and technological training are fundamental for personal and social development in today's era. Digitization has reshaped the educational scope and amplified the demand for advanced technological skills. As we progress towards an increasingly tech-driven future, it's crucial to promote technological learning, explore emerging trends, and address challenges like the digital divide and economic accessibility to education. This ensures equitable access and effective preparation for future changes.",
      citation1: "Is this then a watershed moment for digital pedagogy? I believe it can be, but only if we leave behind the ‘quick fix’ approach, and stop seeing digital education forevermore as the back-up when all else fails.",
      citation2: "Technology in education has shown that the use of updated digital resources, as well as the application of innovative learning strategies, are the perfect combination to ensure the success of education in the future",
      citation3: "The acquisition of technological devices and educational software also represents a significant cost. The prices of these items can vary depending on the brand, model, and specific features",
      bibliography1: "Munday, D. (2021). Teaching and learning post pandemic. Research-publishing.net, pp. 63-69. https://doi.org/10.14705/rpnet.2021.49.1219",
      bibliography2: "Pearson. (2022). Tecnología educativa del Futuro: 5 nuevas tendencias. https://blog.pearsonlatam.com/educacion-del-futuro/tecnologia-educativa-del-futuro-nuevas-tendencias",
      bibliography3: "Educatics. (n.d.) Costos asociados con la tecnología educativa: una mirada en detalle. https://educatics.ar/costos-asociados-con-la-tecnologia-educativa-una-mirada-en-detalle/"
    }
  ];

  return (
    <div className="newspaper">
      {items.map((item) => (
        item.id === id ? (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.img} alt={item.title} className="newspaper-image" />
            <div className="author-information">
              <img src={item.authorimg} alt={item.title} className="author-img" />
              <section className="author-txt">
                <h4>{item.author}</h4>
                <p>{item.date}</p>
              </section>
            </div>
            <div className="essay">
              {item.text1 && <p>{item.text1}</p>}
              {item.text2 && <p>{item.text2}</p>}
              {item.text3 && <p>{item.text3}</p>}
              {item.text4 && <p>{item.text4}</p>}
              {item.text5 && <p>{item.text5}</p>}
              {item.text6 && <p>{item.text6} {item.citation1 ? <span className="essay-citation">{item.citation1}</span>: <br/>} {item.text7}</p>}
              {item.text8 && <p>{item.text8} {item.citation2 ? <span className="essay-citation">{item.citation2}</span>: <br/>} {item.text9}</p>}
              {item.text10 && <p>{item.text10} {item.citation3 ? <span className="essay-citation">{item.citation3}</span>: <br/>} {item.text11}</p>}
              {item.text12 && <p>{item.text12}</p>}
              {item.bibliography1 && <p>{item.bibliography1}</p>}
              {item.bibliography2 && <p>{item.bibliography2}</p>}
              {item.bibliography3 && <p>{item.bibliography3}</p>}
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default Newspaper;
