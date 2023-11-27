import { ProPic,JaviPic,EnciYtPic,EnciLbPic,LetterPic,LovePic,LunaPic,MokePic,PokePic,RickPic,JavaPic,HtmlPic,CssPic,LatexPic,PythonPic,ReactPic,SchoolPic,PlatziPic,MathPic,FacePic,GitPic,InstaPic,LinkPic,MailPic,NumberPic,TwittPic,WhatsPic,LogoPic,ListPic,TypePic, ReduxPic, RedxPic, StoryPic, MuiPic, ReactDomPic, Pygame} from "./ImportImages";


const Objects = 
    {
    "Buttons" : {
        "Home" : {
            "name": "Home",
            "url" : "/"
        },
        "About" : {
            "name": "About",
            "url" : "/about"
        },
        "Projects" : {
            "name": "Projects",
            "url" : "/projects"
        },
        "Skills" : {
            "name": "Skills",
            "url" : "/skills"
        },
        "Certificates" : {
            "name": "Certificates",
            "url" : "/certificates"
        },
        "Contact" : {
            "name": "Contact",
            "url" : "/contact"
        }
    },
    "Header":
        {
            "Logo":{
                "name" : "Lion",
                "src": LogoPic
            },
            "Menu":{
                "name" : "Menu",
                "src": ListPic
            }
        },
    "Footer":
        {
          "text": "\u00A9 2023 Jeisson .J. Sánchez Castellanos. All right reserved.",
          "Icons" :{
            "imgFace":{
                "href" : "https://www.facebook.com/jeissonLgsus/",
                "name" : "Facebook",
                "src" : FacePic
            }, 
            "imgLin":{
                "href" : "https://www.linkedin.com/in/jeisson-sanchez-castellanos-989813279/",
                "name" : "Linkedin",
                "src" : LinkPic
            },
            "imgIns":{
                "href" : "https://www.instagram.com/jeissonlgsus/",
                "name" : "Instagram",
                "src" : InstaPic
            },
            "imgTwi":{
                "href" : "https://twitter.com/Jeissonlgsus",
                "name" : "Twitter",
                "src" : TwittPic
            },  
            "imgGit":{
                "href" : "https://github.com/Jeissonlgsus",
                "name" : "GitHub",
                "src" : GitPic
            }
          },
          "Buttons" : {
            "btn1" : "English",
            "btn2" : "Spanish"

          }   
        },
    "Home": 
        {
            "name": "Jeisson Jarvey Sánchez Castellanos",
            "diccName" : "Home.name",
            "src" : ProPic,
            "profesion": "Frontend Developer - Mathematician",
            "diccProfesion" : "Home.profesion",
            "university": "Unversidad Distrital Francisco José de Caldas",
            "diccUniversity" : "Home.university"
        }
    ,
    "About":
        {
            "textOne": {
                "description": "My name is Jeisson Sanchez, I'm a mathematician student of Universidad Distrital Francisco José de Caldas. Actually I also study to improve in my web developer career. I'm fluent in Java , C++, Python, Javascript, React JS, I enjoy being an active person who always has a new project in mind about programming, art, writing , music and Scale building."
            },
            "imgAbout": {
                "name": "Javier",
                "src": JaviPic 
            },
            "textTwo": {
                "description":"In my free time I like to edit videos, play the piano, compose songs, make works of plastic arts such as paintings, one of my achievements has been to write a complete book of literary fiction for young adults, I also like programming and mathematics but I do not count them as hobbies but as disciplines"
            },
            "hobbies":{
                "hobbieOne": {
                    "name": "encierroYT",
                    "src": EnciYtPic,
                    "description": "Encierro Divino is a youtube channel that I formed a long time ago and that I had to put aside due to the responsibilities of the University, the objective was to promote and publicize my work as a writer.",
                    "href":"https://www.youtube.com/@encierrodivino1061",
                    "dicc" : "hobbieOne"
                },    
                "hobbieTwo": {
                    "name":"encierro",
                    "src": EnciLbPic,
                    "description": "Encierro Divino is a book that I wrote since I was eleven years old and that I finished in the year 2020 empirically and that to date is one of my greatest achievements.",
                    "href":"https://www.autoreseditores.com/libro/19223/jeisson-sanchez/encierro-divino.html",
                    "dicc" : "hobbieTwo"
                },
                "hobbieThree": {
                    "name":"encierro",
                    "src": LetterPic,
                    "description": "jsonLgsus Lettering is a youtube channel created to share some artistic works that he did in times of pandemic, many of them made with brush tip markers",
                    "href":"https://www.youtube.com/@lgsuslettering5148",
                    "dicc" : "hobbieThree"
                }
            }
        },
    "Projects":
        {
            "projectOne":{
                "dicc" : "projectOne",
                "name": "In Lunas Mind",
                "description": `This is a project, it is an improvement of an application to generate peace of mind for my girlfriend because when she feels sad it encourages her to listen to her favorite celebrities. 
                Name: Luna  
                password: 1225`,
                "src": LunaPic,
                "href" : "https://inlunasmindplus.web.app/"
            },
            "projectTwo":{
                "dicc" : "projectTwo",
                "name": "Pokedex",
                "description": "This application is a compilation of 150 pokemons in a pokedex format that calls each one from an API and orders them to suit the user",
                "src": PokePic,
                "href" : "https://pokedex-jeissonlgsus.netlify.app/"
            },
            "projectThree":{
                "dicc" : "projectThree",
                "name": "Mokepon",
                "description": "This is my first project, it's a simple arrangement using html, javascript and css to form a minigame that uses rock paper scissors logical reasoning but with earth, water and fire, it has an online functionality",
                "src": MokePic,
                "href" : "https://mokepon-jeissonlgsus.firebaseapp.com/"
            },
            "projectFour":{
                "dicc" : "projectFour",
                "name": "Rick & Morty",
                "description": "This is my first project with React Js, it consists of calling an API that has the characters from the Rick & Morty series and knowing some properties of them",
                "src": RickPic,
                "href" : "https://rickymorty-jeissonlgsus.netlify.app/"
            },
            "projectFive":{
                "dicc" : "projectFive",
                "name": "An app for my Love",
                "description": "This application is the basis of a page that helps to return to calm when sadness takes over my girlfriend. To enter answer Luna in the alert",
                "src": LovePic,
                "href" : "https://an-app-for-my-love-beta.web.app/"
            },
            "projectSix":{
                "dicc" : "projectSix",
                "name": "Redux Counter",
                "description": "This is an application that integrates Redux into React to generate a counter",
                "src": ReduxPic,
                "href" : "https://reactcounter-jeissonlgsus.netlify.app/"
            }
        },
    "Skills" : 
        {
            "skillsOne":{
                "name": "Javascript",
                "progress": 50,
                "src": JavaPic,
                "Range": "Mid",
                "dicc" : "skillsOne"
            },
            "skillsTwo":{
                "name": "Html",
                "progress": 50,
                "src": HtmlPic,
                "Range": "Mid",
                "dicc" : "skillsTwo"
            },
            "skillsThree":{
                "name": "CSS",
                "progress": 50,
                "src": CssPic,
                "Range": "Mid",
                "dicc" : "skillsThree"
            },
            "skillsFour":{
                "name": "Python",
                "progress": 40,
                "src": PythonPic,
                "Range": "Mid",
                "dicc" : "skillsFour"
            },
            "skillsFive":{
                "name": "React JS",
                "progress": 35,
                "src": ReactPic,
                "Range": "Mid",
                "dicc" : "skillsFive"
            },
            "skillsSix":{
                "name": "LaTex",
                "progress": 60,
                "src": LatexPic,
                "Range": "Mid",
                "dicc" : "skillsSix"
            },
            "skillsSeven":{
                "name" : "Typescript",
                "progress" : 35,
                "src": TypePic,
                "Range": "Mid",
                "dicc" : "skillsSeven"
            },
            "skillsEight":{
                "name" : "Redux Toolkit",
                "progress" : 25,
                "src": RedxPic,
                "Range": "Mid",
                "dicc" : "skillsEight"
            },
            "skillsNine":{
                "name" : "Storybook",
                "progress" : 25,
                "src": StoryPic,
                "Range": "Mid",
                "dicc" : "skillsNine"
            },
            "skillsTen":{
                "name" : "Material UI",
                "progress" : 25,
                "src": MuiPic,
                "Range": "Mid",
                "dicc" : "skillsTen"
            },
            "skillsEleven":{
                "name" : "React Router Dom",
                "progress" : 50,
                "src": ReactDomPic,
                "Range": "Mid",
                "dicc" : "skillsEleven"
            },
            "skillsTwelve":{
                "name" : "Pygame",
                "progress" : 50,
                "src": Pygame,
                "Range": "Mid",
                "dicc" : "skillsEleven"
            }
        },
    "Certificates":
        {
            "certificateOne":{
                "name": "High School",
                "time": "2001-2012",
                "href": "https://drive.google.com/file/d/1j-TRqz8iPcZBtNl6TaBTYs38rUYesVc3/view?usp=sharing",
                "src" : SchoolPic,
                "dicc" : "certificateOne"
            },
            "certificateTwo":{
                "name": "Basic Programming",
                "time": "2023",
                "href": "https://drive.google.com/file/d/1X9Ro4Hj8_vfg9_7T46gz99Dk7G-ecGN5/view?usp=sharing",
                "src" : PlatziPic,
                "dicc" : "certificateTwo"
            },
            "certificateThree":{
                "name": "Mathematician",
                "time": "2018-2023",
                "href": " certificate no aviable",
                "src" : MathPic,
                "dicc" : "certificateThree"
            }
        },
    "Contact":
        {
            "contactONe":{
                "name" : "(+57) 3227222204",
                "src": NumberPic,
                "href": "tel:+573227222204"
            },
            "contactTwo":{
                "name" : "Whatsapp",
                "src": WhatsPic,
                "href": "https://api.whatsapp.com/send/?phone=%2B573227222204&text&type=phone_number&app_absent=0"
            },
            "contactThree":{
                "name" : "jeissonlgsus@gmail.com",
                "src": MailPic,
                "href": "mailto:jeissonlgsus@gmail.com"
            },
            "contactFour":{
                "name" : "Facebook",
                "src": FacePic,
                "href": "https://www.facebook.com/jeissonLgsus/"
            },
            "contactFive":{
                "name" : "Linkedin",
                "src": LinkPic,
                "href": "https://www.linkedin.com/in/jeisson-sanchez-castellanos-989813279/"
            },
            "contactSix":{
                "name" : "Instagram",
                "src": InstaPic,
                "href": "https://www.instagram.com/jeissonlgsus/"
            },
            "contactSeven":{
                "name" : "Twitter",
                "src": TwittPic,
                "href": "https://twitter.com/Jeissonlgsus"
            },
            "contactEight":{
                "name" : "GitHub",
                "src": GitPic,
                "href": "https://github.com/Jeissonlgsus"
            }
        }
    }

    export default Objects