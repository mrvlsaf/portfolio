(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{341:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(27),c=a.n(s),n=(a(46),a(22)),r=a(1),l=function(e){return Object(r.jsxs)("button",{className:"toggle-button",onClick:e.click,children:[Object(r.jsx)("div",{className:"toggle-button-line"}),Object(r.jsx)("div",{className:"toggle-button-line"}),Object(r.jsx)("div",{className:"toggle-button-line"})]})},o=a(14),d=function(e){return Object(r.jsx)("header",{className:"toolbar",children:Object(r.jsxs)("nav",{className:"toolbar_navigator navbar-container",children:[Object(r.jsx)("div",{className:"toggle-btn",children:Object(r.jsx)(l,{click:e.drawerToggleClickHandler})}),Object(r.jsx)("div",{className:"toolbar_logo navbar-left-container",children:Object(r.jsx)(o.b,{to:"/home",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})})}),Object(r.jsx)("div",{className:"spacer"}),Object(r.jsx)("div",{className:"toolbar_navigation-items navbar-right-container",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/home",className:"button-1 navlink",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/about",className:"button-1 navlink",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/projects",className:"button-1 navlink",children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/contact",className:"button-1 navlink",children:"Contact"})})]})})]})})},j=function(e){var t=["side-drawer"];return e.show&&(t=["side-drawer","open"]),Object(r.jsx)("nav",{className:t.join(" "),children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/home",onClick:function(){return e.setSideDrawerOpen(!1)},className:"button-1 navlink",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/about",onClick:function(){return e.setSideDrawerOpen(!1)},className:"button-1 navlink",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/projects",onClick:function(){return e.setSideDrawerOpen(!1)},className:"button-1 navlink",children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/contact",onClick:function(){return e.setSideDrawerOpen(!1)},className:"button-1 navlink",children:"Contact"})})]})})},m=function(e){return Object(r.jsx)("div",{className:"backdrop",onClick:e.click})};function b(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{drawerToggleClickHandler:function(){return s(!a)}}),Object(r.jsx)(j,{show:a,setSideDrawerOpen:s}),a?Object(r.jsx)(m,{click:function(){return s(!1)}}):null]})}var h=a(11),u=a.p+"static/media/image1.7a927555.png",p=a(93),g=a.n(p),x=a.p+"static/media/twitter.3e6e8557.svg",O=a.p+"static/media/github.4518a790.svg",v=a.p+"static/media/linkedin.89004aa0.svg";function f(){return Object(r.jsx)("div",{className:"home-container",children:Object(r.jsxs)("div",{className:"home-container-2",children:[Object(r.jsx)("img",{className:"author-image",src:u,alt:"author's image"}),Object(r.jsxs)("div",{className:"info-container",children:[Object(r.jsx)("h1",{children:Object(r.jsx)(g.a,{className:"hey",strings:["Hey There!","Hope you are good!"],typeSpeed:80,backSpeed:30})}),Object(r.jsx)("h2",{className:"hey-there",children:"My name is"}),Object(r.jsx)("div",{className:"name",children:"Devraj Singh"}),Object(r.jsx)("div",{className:"resp-button-2",children:Object(r.jsx)(o.b,{className:"button-2",to:"/about",children:"More about me"})}),Object(r.jsxs)("div",{className:"social-media-container",children:[Object(r.jsx)("h4",{children:"Connect with me:"}),Object(r.jsxs)("div",{className:"social-media-icons",children:[Object(r.jsx)("a",{href:"https://github.com/mrvlsaf",target:"_blank",children:Object(r.jsx)("img",{src:O,alt:"github icon"})}),Object(r.jsx)("a",{href:"https://twitter.com/mrvlsaf",target:"_blank",children:Object(r.jsx)("img",{src:x,alt:"twitter icon"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/mrvlsaf05/",target:"_blank",children:Object(r.jsx)("img",{src:v,alt:"linkedin icon"})})]})]})]})]})})}var N=a(94),k=a.n(N);function y(e){var t=e.height;return Object(r.jsx)("div",{children:Object(r.jsx)(k.a,{height:t,params:{particles:{number:{value:60,density:{enable:!0,value_area:1100}},shape:{type:"circle",stroke:{width:2,color:"#ffffff"}},color:{value:"#000000"},line_linked:{width:"2"},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}})})}var w=a(95),A=a.n(w),I=a(97);function C(){var e=Object(I.a)(),t=e.register,a=e.errors,s=Object(i.useState)(!1),c=Object(n.a)(s,2),l=c[0],o=c[1];return Object(i.useEffect)((function(){l&&setTimeout((function(){o(!1)}),3e3)}),[l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"disable",children:Object(r.jsx)(y,{height:"80%"})}),Object(r.jsx)("div",{className:"common-container",children:Object(r.jsxs)("div",{className:"inner-container",children:[Object(r.jsx)("h2",{style:{margin:"0.5em 0.5em 0 0.5em",textAlign:"center"},children:"Have a question or want to work together?"}),Object(r.jsx)("div",{className:"contact-contents",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A.a.sendForm("service_23sdr09","template_65ac7da",e.target,"user_wExUjnTqihhwXMlDIgGuS").then((function(e){console.log("Message Sent")}),(function(e){console.log(e.text)})),e.target.reset(),o(!0)},children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"firstName",children:"First Name :"}),Object(r.jsx)("input",{type:"text",name:"firstName",ref:t(),className:"firstName",placeholder:"Type your First Name"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"lastName",children:"Last Name :"}),Object(r.jsx)("input",{type:"text",name:"lastName",ref:t(),className:"lastName",placeholder:"Type your Last Name"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email :"}),Object(r.jsx)("input",{type:"text",name:"email",ref:t({required:"Email is required.",pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please enter a valid email!"}}),className:"email",placeholder:"Type your Email address"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message :"}),Object(r.jsx)("textarea",{name:"message",ref:t(),className:"message",placeholder:"Type your Message"})]}),(null===a||void 0===a?void 0:a.email)&&Object(r.jsx)("div",{className:"msg-sent",children:a.email.message}),Object(r.jsx)("div",{className:"contact-button",children:Object(r.jsx)("button",{className:"button-contact",type:"submit",children:"Submit"})}),l?Object(r.jsx)("div",{class:"alert alert-success success-msg",role:"alert",children:"Thanks for reaching out. Your message has been sent."}):null]})})]})})]})}function T(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"disable",children:Object(r.jsx)(y,{height:"240%"})}),Object(r.jsx)("div",{className:"common-container",children:Object(r.jsxs)("div",{className:"common-inner-container",children:[Object(r.jsxs)("div",{className:"common-section",children:[Object(r.jsx)("h1",{children:"Skills"}),Object(r.jsx)("p",{style:{marginBottom:"1em"},children:"I possess a strong proficiency in the following technologies and tools:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"ReactJs: Expertise in building dynamic and responsive user interfaces using the ReactJs framework."}),Object(r.jsx)("li",{children:"HTML5 and CSS3: Proficiency in creating modern and visually appealing web layouts with clean and semantic markup."}),Object(r.jsx)("li",{children:"Redux: Experience in utilizing Redux for state management in complex applications."}),Object(r.jsx)("li",{children:"Git: Proficient in version control and collaborative development using Git."}),Object(r.jsx)("li",{children:"Figma: Familiarity with design tools like Figma for creating intuitive and visually pleasing user interfaces."})]}),Object(r.jsx)("p",{children:"Additionally, I have knowledge of NodeJs, AWS, and Docker, which further enhances my ability to develop scalable and efficient applications."}),Object(r.jsxs)("p",{children:["Check out my work in the ",Object(r.jsx)(o.b,{to:"/projects",className:"navlink2",children:"PROJECTS"})," section."]})]}),Object(r.jsx)("hr",{className:"hr-line"}),Object(r.jsxs)("div",{className:"common-section",children:[Object(r.jsx)("h1",{children:"Experience"}),Object(r.jsx)("h5",{style:{marginLeft:"0.5em"},children:"Ottermap | September 2022 - Present"}),Object(r.jsx)("p",{style:{marginBottom:"0.5em"},children:"At Ottermap, a smart property measurement platform, I have been responsible for designing and developing multiple core features using OpenLayers, Google Maps, ReactJs, and various libraries. These features have greatly improved the user experience and engagement on the platform."}),Object(r.jsx)("p",{style:{marginBottom:"1em"},children:"Some of the key contributions I have made include:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Designing and implementing a seamless order placement process that allows users to easily request property measurements."}),Object(r.jsx)("li",{children:"Developing interactive map interactions, such as hovering and multiple select interactions, to enhance user engagement and ease of use."}),Object(r.jsx)("li",{children:"Creating functionality for property features measurement, enabling users to accurately measure and assess different aspects of properties."}),Object(r.jsx)("li",{children:"Implementing user notes and feedback features, facilitating effective communication between users and the platform."}),Object(r.jsx)("li",{children:"Building an order sharing feature that allows users to easily share property measurement information with others."})]}),Object(r.jsx)("p",{children:"To ensure the best user experience, I have consistently followed a user-centric approach. I have actively sought and incorporated user feedback to refine existing features and address any pain points. Additionally, I have proactively identified and proposed new features that align with user needs and preferences. This approach has resulted in positive feedback from both users and stakeholders."}),Object(r.jsx)("h5",{style:{margin:"1em 0 0.5em 0.5em"},children:"Zouke | May 2021 - July 2021"}),Object(r.jsx)("p",{style:{marginBottom:"0.5em"},children:"During my time at Zouke, I worked as a Frontend Developer, contributing to the development of their Minimum Viable Product (MVP). This experience provided me with valuable insights into handling and optimizing large codebases in a competitive environment."}),Object(r.jsx)("p",{style:{marginBottom:"1em"},children:"Some notable achievements during this role include:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Developing the Reset Password feature, allowing users to securely reset their passwords."}),Object(r.jsx)("li",{children:"Implementing the Chat feature, enabling real-time communication between users."}),Object(r.jsx)("li",{children:"Creating functionality for property features measurement, enabling users to accurately measure and assess different aspects of properties."}),Object(r.jsx)("li",{children:"Creating the Live Performance Tracker screens, providing users with real-time performance data in a visually appealing manner."})]}),Object(r.jsx)("p",{children:"To ensure the scalability and efficiency of the applications, I adopted a structured approach to coding. By leveraging industry-standard tools and techniques, such as ReactJs, Redux, and CSS Modules, I ensured the development of robust and maintainable code."})]}),Object(r.jsx)("hr",{className:"hr-line"}),Object(r.jsxs)("div",{className:"common-section",children:[Object(r.jsx)("h1",{children:"Education"}),Object(r.jsx)("p",{children:"I hold a Bachelor of Technology degree in Computer Science Engineering from B.S.A.I.T.M, Faridabad. During my academic journey, I consistently demonstrated strong technical aptitude and maintained a GPA of 8.296. This education has provided me with a solid foundation in computer science principles and problem-solving skills."})]}),Object(r.jsx)("hr",{className:"hr-line"})]})})]})}var E=a(344);function B(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(r.jsxs)("div",{className:"carousel-indicators",children:[Object(r.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(r.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1",className:"active","aria-current":"true","aria-label":"Slide 2"}),Object(r.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2",className:"active","aria-current":"true","aria-label":"Slide 3"}),Object(r.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"3",className:"active","aria-current":"true","aria-label":"Slide 4"})]}),Object(r.jsxs)("div",{className:"carousel-inner",children:[Object(r.jsx)("div",{className:"carousel-item active",children:Object(r.jsx)("img",{src:e.img1,className:"d-block w-100 cara-img",alt:"..."})}),Object(r.jsx)("div",{className:"carousel-item",children:Object(r.jsx)("img",{src:e.img2,className:"d-block w-100 cara-img",alt:"..."})}),Object(r.jsx)("div",{className:"carousel-item",children:Object(r.jsx)("img",{src:e.img3,className:"d-block w-100 cara-img",alt:"..."})}),Object(r.jsx)("div",{className:"carousel-item",children:Object(r.jsx)("img",{src:e.img4,className:"d-block w-100 cara-img",alt:"..."})})]}),Object(r.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(r.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(r.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(r.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(r.jsxs)("div",{className:"popup-buttons",children:[Object(r.jsx)("a",{href:e.link,target:"_blank",className:"button-popup",children:"Github Link"}),e.visit?Object(r.jsx)("a",{href:e.visit,target:"_blank",className:"button-popup",children:"Visit"}):Object(r.jsx)("div",{})]})]})}function R(e){var t=Object(i.useState)(!1),a=Object(n.a)(t,2),s=a[0],c=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"card-container",children:Object(r.jsxs)("div",{className:"project-card",children:[Object(r.jsxs)("div",{className:"popup-behind",children:[Object(r.jsx)("h4",{children:e.text}),Object(r.jsx)("h5",{className:"card-inner-text",children:e.subText}),Object(r.jsx)("button",{className:"button-2 button-card",onClick:function(){return c(!0)},children:"View"})]}),Object(r.jsx)("div",{className:"popup-front",children:Object(r.jsxs)(E.a,{size:"lg",show:s,className:"modal-inner2",onHide:function(){return c(!1)},children:[Object(r.jsx)("h2",{className:"overview-head",children:"Overview of the Website"}),Object(r.jsxs)("div",{className:"modal-outer",children:[Object(r.jsx)(E.a.Body,{children:Object(r.jsx)(B,{img1:e.img1,img2:e.img2,img3:e.img3,img4:e.img4,popupText:e.popupText,link:e.link,visit:e.visit})}),Object(r.jsx)("div",{className:"tt",children:Object(r.jsx)("button",{className:"button-popup",onClick:function(){return c(!1)},children:"Close"})})]})]})})]})})})}var S=a.p+"static/media/1a.ce0b5365.png",Q=a.p+"static/media/1b.d044461e.png",J=a.p+"static/media/1c.7e065822.png",D=a.p+"static/media/1d.3a251df9.png",M=(a.p,a.p,a.p,a.p,a.p+"static/media/3a.95c210b5.png"),H=a.p+"static/media/3b.a66c05d7.png",P=a.p+"static/media/3c.58dfcad8.png",F=a.p+"static/media/3d.8b10c657.png",G=a.p+"static/media/4a.2aba32d9.png",q=a.p+"static/media/4b.562a1dd4.png",X=(a.p,a.p+"static/media/4d.6e77549a.png"),K=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p+"static/media/8a.8f73d2c5.png"),Z=a.p+"static/media/8b.bf8d1fa3.png",W=a.p+"static/media/8c.cfe07c16.png",z=a.p+"static/media/8d.ea20b009.png",U=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,[{text:"CircleLink",subText:"Real-time chat application built using Socket.io, Chakra UI and MERN. Includes user authentication, Group and one on one chat.",img1:K,img2:Z,img3:W,img4:z,link:"https://github.com/mrvlsaf/CircleLink",popupText:"OUIPAN-Chat App"},{text:"Glamoour",subText:"A static website to showcase my photography skills. Built using HTML5 and CSS3 and Bootstrap.",img1:S,img2:Q,img3:J,img4:D,link:"https://github.com/mrvlsaf/WebDev/tree/main/Glamoour",popupText:"Glamoour Website",visit:"https://laughing-agnesi-572c0e.netlify.app/"},{text:"BlackJack",subText:"BlackJack game built using ReactJs, modern hooks and Components. Try yourself and win against CPU. Best of Luck!",img1:M,img2:H,img3:P,img4:F,link:"https://github.com/mrvlsaf/WebDev/tree/main/JavaScript/BlackJack",popupText:"BlackJack",visit:"https://clever-carson-705aa0.netlify.app/"},{text:"Smart-AntiRagg",subText:"Hackathon Award-winning web app built using ReactJS and Bootstrap",img1:G,img2:q,img3:X,img4:X,link:"https://github.com/mrvlsaf/ReactJs/tree/main/Smart-AntiRagg",popupText:"website built for sharda hackathon"}]);function V(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"disable",children:Object(r.jsx)(y,{height:"80%"})}),Object(r.jsx)("div",{className:"common-container",children:Object(r.jsx)("div",{className:"project-container",children:U.map((function(e,t){return Object(r.jsx)(R,{text:e.text,subText:e.subText,img1:e.img1,img2:e.img2,img3:e.img3,img4:e.img4,popupText:e.popupText,link:e.link,visit:e.visit},t)}))})})]})}function L(){return Object(r.jsxs)("div",{className:"app-container",children:[Object(r.jsx)(b,{}),Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{exact:!0,path:"/",component:f}),Object(r.jsx)(h.b,{exact:!0,path:"/about",component:T}),Object(r.jsx)(h.b,{path:"/projects",component:V}),Object(r.jsx)(h.b,{path:"/contact",component:C}),Object(r.jsx)(h.a,{to:"/"})]}),Object(r.jsx)("footer",{children:Object(r.jsxs)("h4",{className:"footer",children:["Copyright \xa9 ",(new Date).getFullYear()," - Devraj Singh. All Rights Reserved"]})})]})}c.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))},46:function(e,t,a){}},[[341,1,2]]]);
//# sourceMappingURL=main.2aa167c0.chunk.js.map