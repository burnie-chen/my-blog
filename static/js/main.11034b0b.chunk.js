(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n,c,l,o=a(0),r=a.n(o),i=a(17),m=a.n(i),s=a(11),u=a(10),h=a(5),g=a(6),p=a(8),d=a(7),E=a(9),b={greet:"This is me :)",img:"/img/head_shot_lg.jpg",alt:"Burnie",talk:"I'm a front-end engineer. Keep going on the way to front-end engineer. Now learn ReactJs."},k=[{type:"EDUCATION",lists:[{time:"9/2014 \u2013 6/2018",location:"National Chiao Tung University",work:"Bachelor in Biological Technology"},{time:"9/2011 \u2013 6/2014",location:"Taichung Second Senior High School",work:"Doing General Studies"}]},{type:"WORK EXPERIENCE\t",lists:[{time:"7/2018 \u2013 6/2019",location:"Stork Ladies Clinic",work:"Web Programmer",details:["Develop system of signing the consent form","Develop system of matching customers by calling API of facial similarity","Introduce resource reservation system by using open source"]},{time:"9/2011 \u2013 6/2014",location:"National Chiao Tung University - 12u10",work:"Backend Engineer",details:["Develop backend dashboard"]}]},{type:"EXTRACURRICULAR ACTIVITIES",lists:[{time:"2/2016 \u2013 7/2016",location:"2016 NCTU Biocamp",work:"Vice Coordinator"},{time:"10/2015 \u2013 12/2015",location:"JianGong Primary School",work:"Volunteer"},{time:"3/2015 \u2013 7/2015",location:"2015 NCTU Biocamp",work:"Worker in Activities Section"}]}],y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,b.greet),r.a.createElement("img",{className:"head-shot-lg",src:"/my-blog"+b.img,alt:b.alt}),r.a.createElement("p",null,b.talk))},f=function(){return k.map(function(e){var t=e.lists.map(function(e){var t=function(e){return e.details?e.details.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+3));return r.a.createElement("li",{className:"journey-detail",key:a},e)}):null}(e),a=(new Date).getTime(),n=Math.floor(a/(Math.floor(1e3*Math.random())+5));return r.a.createElement("article",{key:n},r.a.createElement("div",{className:"journey-time"},e.time),r.a.createElement("div",{className:"journey-location"},e.location),r.a.createElement("ul",null,r.a.createElement("li",{className:"journey-work",key:n},e.work,r.a.createElement("ol",null,t))))}),a=(new Date).getTime(),n=Math.floor(a/(Math.floor(1e3*Math.random())+7));return r.a.createElement("div",{className:"journey-box",key:n},r.a.createElement("h3",null,e.type),t,r.a.createElement("div",{className:"bottom-line"}))})},j=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"right-part"},r.a.createElement("h1",null,"About me"),r.a.createElement(y,null),r.a.createElement("h1",null,"My Journey"),r.a.createElement(f,null))}}]),t}(r.a.Component),v=[{type:"Email",link:"chen0317029@gmail.com"},{type:"Home",link:"https://burniechen.github.io/my-blog/",icon:"/img/home.svg"},{type:"Linkedin",link:"https://www.linkedin.com/in/%E6%9F%8F%E4%B8%9E-%E9%99%B3-736210180/",icon:"/img/linkedin.svg"},{type:"GitHub",link:"https://github.com/burniechen/my-blog",icon:"/img/github.svg"}],w=function(){var e=v.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return e.icon?r.a.createElement("li",{key:a},r.a.createElement("a",{href:e.link},r.a.createElement("img",{className:"contact-icon",src:"/my-blog"+e.icon,alt:e.type}))):r.a.createElement("p",{key:a},r.a.createElement("span",null,e.type,"\uff1a"),r.a.createElement("a",{href:"mailto:"+e.link},e.link))});return r.a.createElement("ul",{className:"contact-box"},e)},N=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"right-part"},r.a.createElement("h1",null,"Contact me"),r.a.createElement(w,null))}}]),t}(r.a.Component),M=a(24),O=[{title:"Signature Pad for Consent Form",location:"Stork Ladies Clinic",lists:["PHP, jQuery, Javascript","Online Signature","Produce PDF File"],imgs:[{src:"http://placekitten.com/g/400/200",alt:"400*480"},{src:"http://placekitten.com/g/400/200",alt:"200*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"}]},{title:"Booked Scheduler",location:"Stork Ladies Clinic",lists:["PHP, Open source","Reservation System","Google Account Login"],imgs:[{src:"/img/booked/booked-1.png",alt:"booked-1"},{src:"/img/booked/booked-2.png",alt:"booked-2"},{src:"/img/booked/booked-3.png",alt:"booked-3"},{src:"/img/booked/booked-4.png",alt:"booked-4"},{src:"/img/booked/booked-5.png",alt:"booked-5"}]},{title:"Face Matching System",location:"Stork Ladies Clinic",lists:["Laravel, JWT, jQuery, Javascript","Online Reservation System","Interface with Facial Similarity API","Personalized List","Localization","Upload to The Cloud"],imgs:[{src:"/img/match/match-1.jpg",alt:"match-1"},{src:"/img/match/match-2.jpg",alt:"match-2"},{src:"/img/match/match-3.jpg",alt:"match-3"},{src:"/img/match/match-4.jpg",alt:"match-4"},{src:"/img/match/match-5.jpg",alt:"match-5"},{src:"/img/match/match-6.jpg",alt:"match-6"},{src:"/img/match/match-7.jpg",alt:"match-7"},{src:"/img/match/match-8.jpg",alt:"match-8"},{src:"/img/match/match-9.jpg",alt:"match-9"},{src:"/img/match/match-10.jpg",alt:"match-10"},{src:"/img/match/match-11.jpg",alt:"match-11"},{src:"/img/match/match-12.jpg",alt:"match-12"},{src:"/img/match/match-13.jpg",alt:"match-13"},{src:"/img/match/match-14.jpg",alt:"match-14"}]}],T=(n=a.n(M).a,c={className:"",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!0,centerPadding:"0px"},l=O,function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return l.map(function(e){var t=function(e){var t=e.lists.map(function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return r.a.createElement("li",{key:a},e)});return r.a.createElement("ol",null,t)}(e),a=function(e){var t=(new Date).getTime(),a=Math.floor(t/(Math.floor(1e3*Math.random())+2));return e.imgs.map(function(e){return r.a.createElement("div",{key:a},r.a.createElement("img",{src:"/my-blog"+e.src,alt:e.alt}))})}(e),l=(new Date).getTime(),o=Math.floor(l/(Math.floor(1e3*Math.random())+2));return r.a.createElement("div",{className:"project-box",key:o},r.a.createElement("div",null,r.a.createElement("div",{className:"project-title"},e.title),r.a.createElement("p",null,e.location),t),r.a.createElement(n,Object.assign({},c,{key:o}),a))})}}]),t}(r.a.Component)),C=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"right-part"},r.a.createElement("h1",null,"My Project"),r.a.createElement(T,null))}}]),t}(r.a.Component),S=function(){return r.a.createElement("h1",null,"This page can't be found")},P=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"About me")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/pages/contact"},"Contact me")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/pages/project"},"My project")))},D={img:"/img/head_shot_sm.jpg",name:"Burnie Chen",description:"\u201c The more you know, the more you know you don't know. \u201d \u2015 Aristotle."},A=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"head-shot-sm",src:"/my-blog"+D.img,alt:D.name}),r.a.createElement("h2",null,D.name),r.a.createElement("p",{className:"description"},D.description))},I=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"left-part"},r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement("div",{className:"description"},"\xa9 All rights reserved.")),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:j}),r.a.createElement(u.b,{path:"/pages/contact",component:N}),r.a.createElement(u.b,{path:"/pages/project",component:C}),r.a.createElement(u.b,{path:"/not-found",component:S}),r.a.createElement(u.a,{to:"/not-found"})))};a(51);m.a.render(r.a.createElement(s.a,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.11034b0b.chunk.js.map