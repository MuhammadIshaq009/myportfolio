import imgg from './storage/hellothisisimage.png';
import imggg from './storage/hello2.png';
import imgggg from './storage/hello6.jpg';
import hello7 from './storage/hello21.png'
const logotext = "Isaac";
const meta = {
    title: "Muhammad Ishaq",
    description: "I’m Isaac, computer engineer _ Machine Learning Engineer _ Full stack Engineer, currently working at Creative Solutions International Pakistan",
};

const introdata = {
    title: "I’m Muhammad Ishaq",
    animated: {
        first: "Results-Driven MERN Developer",
        second: "Machine Learning Engineer",
        third: "A tech Enthusiast",
    },
    description: "Career Goals: To extend abilities and experience within the cutthroat environment of Web Development.",
    your_img_url: hello7,
};

const dataabout = {
    title: "About Myself",
    aboutme: "As a computer engineer, I am a tech enthusiast and a problem solver at heart. Whether designing digital complex systems or building cutting-edge web applications with the MERN stack, I thrive on challenges and am always eager to learn and grow as a professional. I have a passion for creating innovative solutions that enhance user experiences and drive business success. Above all, I am committed to learning, growing, and delivering exceptional results. Enthusiastic about acquiring new skills. Machine learning, Web Development, Problem-solving, Programming, and Creative thinking are all my relevant abilities.",
};
const workingExp = [{
    jobtitle: "Job Position",
    where: "Company's/ Institute's Name",
    date: "from",
    enddate: "to"
},
{
    jobtitle: "Full Stack Engineer",
    where: "Creative Solutions International, Faisalabad Pakistan",
    date: "Mar 2023",
    enddate: "---"
},
{
    jobtitle: "MERN Developer - Trainee",
    where: "FRAG Games Lahore Pakistan",
    date: "Nov 2022 ",
    enddate: "Feb 2023"
},
{
    jobtitle: "Data Research Analyst",
    where: "NC Books USA (Remote)",
    date: "Dec 2021",
    enddate: "Aug 2022"
},
{
    jobtitle: "Summer Intern",
    where: "Transfopower Industries Pvt Limited Lahore Pakistan",
    date: "Jul 2019",
    enddate: "Sep 2019"
},
];


const education = [{
    title: "Title",
    where: "Institute's Name",
    date: "from",
    enddate:"to"
},
{
    title: "Bachelor of Science in Computer Engineering",
    where: "Comsats University Islamabad, Lahore Campus",
    date: "Fall 2016",
    enddate:"Fall 2020"
},
{
    title: "Intermediate of Computer Science",
    where: "Punjab College of Science and Commerce, Samundri",
    date: "2014",
    enddate:"2016"
},


];

const certifications = [{
    title: "Title",
    where: "Institute's Name",
    date: "Date",
},
{
    title: "Software Engineering Participant (Apprenticeship)",
    where: "Accenture Middle East",
    date: "Continue",
},
{
    title: "IELTS Academic",
    where: "British Council",
    date: "Dec 2022",
    link: "https://drive.google.com/file/d/1cWJ-bjYBSYGyKP9AHPkGj5BgZdZXt_XN/view"
},
{
    title: "Learn JavaScript",
    where: "Code Academy",
    date: "July 2022",
    link: "https://www.codecademy.com/profiles/muhammadIshaq009/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
},
{
    title: "Neural Networks and Deep Learning",
    where: "DeepLearning AI",
    date: "Aug 2020",
    link: "https://www.coursera.org/account/accomplishments/verify/N2W2CNE2WVJ5"
},
];


const license = [{
    title: "Title",
    where: "Institute's Name",
    date: "Valid till:",
},
{
    title: "Registered Engineer",
    where: "Pakistan Engineering Council",
    date: "Dec 2025",
    link: "https://drive.google.com/file/d/1uV5mlh7JsZvE3j37qAAX557-buo4cjrO/view"
},
];

const skills = [
    {
        name: "JavaScript (React JS, Express JS, Node Js-runtime environment)",
        value: 85,
    },
    {
        name: "SQL and MongoDB",
        value: 80,
    },
    {
        name: "Material UI, Bootstrap",
        value: 70,
    },
    {
        name: "Python (Scikit-Learn, Tensorflow, Pytorch, Matplotlib)",
        value: 70,
    },
    {
        name: "R (Programming Language)",
        value: 65,
    },
    {
        name: "MATLAB",
        value: 50,
    },
];

const services = [{
    title: "Full Stack web development",
    description: "I provide the web development services; Unlock the potential of your business with my MERN stack web development services. I combines the power of MongoDB, Express.js, React, and Node.js to create high-performance, scalable, and interactive web applications."
},
{
    title: "Data Analysis",
    description: "Leverage the power of data with my data analysis services. I specializes in R and Python, utilizing advanced analytics techniques and visualization tools like matplotlib. Gain valuable insights, make data-driven decisions, and unlock the true potential of your business with our top-notch data analysis services. Experience the difference of data-driven excellence today.",
},
];

const dataportfolio = [{
    title:"Daily Dak - Government of Punjab",
    img:imgg,
    description: "Daily Dak is a Government of Punjab, Pakistan's web portal. Designed to streamline the communication process, it enables clerical staff of DCO office to register complaints under the direct supervision of the District Coordination Officer (DCO). Feature Includes complaint registration, assignment to the relevant departments, and prompt feedback within 3-7 working days through this cutting-edge platform. I have been assigned a pivotal role in developing this web portal such as defining the data schema, constructing a robust backend architecture, and ensuring seamless retrieval and storage of data in the database.",
    link: "https://frontendtest.creativesolutionusa.com",
},

{
    title:"K-Means Clustring, Hierarchal Clustering and PCA implementation on Facebook live sealers data in Thailand",
    img:imggg,
    description: "Research Work: In this project, I'm using data from Facebook live sellers in Thailand. This data is consisting of 7050 rows with 16 attributes. These attributes are related to the unique id of each row, a data type either data is video, audio, or else. So, my ultimate aim is to implement K-means clustering, Hierarchical clustering to data so that I may analyze which algorithm gives us a number of accuracies, the third algorithm is PCA which I will implement to see the behavior, variation of dataset such as how many attributes in the dataset is important and others are not. In fact, I'm interested to analyze the attributes of the dataset so that I can get some useful information as to which type of status gets more responses from people such as video, photo, link, and status. Using this useful information, a sales company will design its strategy regarding the sale. For this purpose, I use three types of algorithms K means clustering, hierarchal clustering, and a dimensionality reduction algorithm called Principal component analysis as usually known as PCA. All three algorithms belong to the unsupervised learning family of machine learning. This information will be very useful for sales companies, which specifically aim to target Thailand people by using online platforms such as Facebook.",
    link: "https://drive.google.com/file/d/1KzDnzxqzeI-UFF0J1sTDb6ILv2p3waLh/view",
},

{
    title:"Self Monitoring and Management of Skin Disease using Mobile Phone's Camera",
    img:imgggg,
    description: "FYP: Skin disease may be bacterial or fungal but if it is not treated well in the earlier stage then it can be harmful to the skin. In today’s era, technology helps humans almost in every field of life.So, I decided to do something in the medical field along with two team members, we designed an android application that is capable to detect skin disease by just capturing a picture of the affected area. Our application’s aim is to provide a platform for people to detect their skin diseases at earlier stages using their mobile phone’s camera. This idea will not only reduce the cost of skin tests but will also reduce the patient’s doctor visiting fatigue at the earlier stage. Then the android application also facilitates the user to contact a doctor. After detecting the disease, the user will choose the doctor from the available list and book a consultation slot with the doctor. In this way, our project looks like a smart clinic for skin diseases.",
    link: "https://drive.google.com/file/d/1mJtKyWDsN7-5qJAAZcC19-Or4Dn65Pd1/view",
},

{
    title:"For more for my contribution, please visit my Github profile",
    link: "https://github.com/MuhammadIshaq009",
},

];



const contactConfig = {
    YOUR_EMAIL: "mishaq.connect@gmail.com",
    YOUR_FONE: "(+92)307-8700466",
    description: "Have a project in mind or want to discuss a potential collaboration? Feel free to reach out via the contact form below. I'm excited to explore opportunities with you.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_6dxvl3m",
    YOUR_TEMPLATE_ID: "template_tkcj3um",
    YOUR_USER_ID: "wxs1P4MfOcBMNBa-l",
};

const socialprofils = {
    github: "https://github.com/MuhammadIshaq1998",
    facebook: "https://www.facebook.com/IshaqCH009/",
    linkedin: "https://www.linkedin.com/in/mishaq-work/",
    twitter: "https://twitter.com/_ishaq009?t=YyDukgJjHZbcLs2QE4SdeA&s=09",
};
export {
    meta,
    dataabout,
    dataportfolio,
    workingExp,
    certifications,
    skills,
    license,
    education,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};