(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(52)},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a,l,r,o=n(0),i=n.n(o),c=n(17),m=n.n(c),u=n(11),s=n(10),h=n(5),p=n(6),d=n(8),E=n(7),g=n(9),f={greet:"This is me :)",img:"/img/head_shot_lg.jpg",alt:"Burnie",talk:"I'm a front-end engineer. Keep going on way of front-end engineer. Now learning ReactJs..."},y=[{type:"EDUCATION",lists:[{time:"9/2014 \u2013 6/2018",location:"National Chiao Tung University",work:"Bachelor in Biological Technology"},{time:"9/2011 \u2013 6/2014",location:"Taichung Second Senior High School",work:"Doing General Studies"}]},{type:"WORK EXPERIENCE\t",lists:[{time:"7/2018 \u2013 6/2019",location:"Stork Ladies Clinic",work:"Web Programmer",details:["Develop system of signing the consent form","Develop system of matching customers by calling API of facial similarity","Introduce resource reservation system by using open source"]},{time:"9/2011 \u2013 6/2014",location:"National Chiao Tung University - 12u10",work:"Backend Engineer",details:["Develop backend dashboard"]}]},{type:"EXTRACURRICULAR ACTIVITIES",lists:[{time:"2/2016 \u2013 7/2016",location:"2016 NCTU Biocamp",work:"Vice Coordinator"},{time:"10/2015 \u2013 12/2015",location:"JianGong Primary School",work:"Volunteer"},{time:"3/2015 \u2013 7/2015",location:"2015 NCTU Biocamp",work:"Worker in Activities Section"}]}],b=function(){return i.a.createElement("div",null,i.a.createElement("p",null,f.greet),i.a.createElement("img",{className:"head-shot-lg",src:"/my-blog"+f.img,alt:f.alt}),i.a.createElement("p",null,f.talk))},k=function(){return y.map(function(e){var t=e.lists.map(function(e){var t=function(e){return e.details?e.details.map(function(e){var t=(new Date).getTime(),n=Math.floor(t/(Math.floor(1e3*Math.random())+3));return i.a.createElement("li",{className:"journey-detail",key:n},e)}):null}(e),n=(new Date).getTime(),a=Math.floor(n/(Math.floor(1e3*Math.random())+5));return i.a.createElement("article",{key:a},i.a.createElement("div",{className:"journey-time"},e.time),i.a.createElement("div",{className:"journey-location"},e.location),i.a.createElement("ul",null,i.a.createElement("li",{className:"journey-work",key:a},e.work,i.a.createElement("ol",null,t))))}),n=(new Date).getTime(),a=Math.floor(n/(Math.floor(1e3*Math.random())+7));return i.a.createElement("div",{className:"journey-box",key:a},i.a.createElement("h3",null,e.type),t,i.a.createElement("div",{className:"bottom-line"}))})},v=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("h1",null,"About me"),i.a.createElement(b,null),i.a.createElement("h1",null,"My Journey"),i.a.createElement(k,null))}}]),t}(i.a.Component),j=[{type:"Email",link:"chen0317029@gmail.com"},{type:"Linkedin",link:"https://www.linkedin.com/in/%E6%9F%8F%E4%B8%9E-%E9%99%B3-736210180/"},{type:"GitHub",link:"https://github.com/BurnieChen/my-blog"}],w=function(){var e=j.map(function(e){var t=(new Date).getTime(),n=Math.floor(t/(Math.floor(1e3*Math.random())+2));return i.a.createElement("li",{key:n},e.type,":",e.link)});return i.a.createElement("ul",null,e)},M=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("h1",null,"Contact me"),i.a.createElement(w,null))}}]),t}(i.a.Component),N=n(24),O=[{title:"Signiture Pad for Consent Form",location:"Stork Ladies Clinic",lists:["123","123"],imgs:[{src:"http://placekitten.com/g/400/200",alt:"400*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"}]},{title:"Booked Scheduler",location:"Stork Ladies Clinic",lists:["12323","12323"],imgs:[{src:"http://placekitten.com/g/400/200",alt:"400*480"},{src:"http://placekitten.com/g/400/200",alt:"200*200"},{src:"http://placekitten.com/g/400/200",alt:"200*200"}]}],C=(a=n.n(N).a,l={className:"",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,centerMode:!0,centerPadding:"0px"},r=O,function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.map(function(e){var t=function(e){var t=e.lists.map(function(e){var t=(new Date).getTime(),n=Math.floor(t/(Math.floor(1e3*Math.random())+2));return i.a.createElement("li",{key:n},e)});return i.a.createElement("ol",null,t)}(e),n=function(e){var t=(new Date).getTime(),n=Math.floor(t/(Math.floor(1e3*Math.random())+2));return e.imgs.map(function(e){return i.a.createElement("div",{key:n},i.a.createElement("img",{src:e.src,alt:e.alt}))})}(e),r=(new Date).getTime(),o=Math.floor(r/(Math.floor(1e3*Math.random())+2));return i.a.createElement("div",{key:o},i.a.createElement("div",null,i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.location),t),i.a.createElement(a,Object.assign({},l,{key:o}),n))})}}]),t}(i.a.Component)),T=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"right-part"},i.a.createElement("div",null,i.a.createElement("h1",null,"My Project")),i.a.createElement(C,null))}}]),t}(i.a.Component),S=function(){return i.a.createElement("h1",null,"This page can't be found")},B=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.b,{to:"/"},"About me")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/pages/contact"},"Contact me")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/pages/project"},"My project")))},D={img:"/img/head_shot_sm.jpg",name:"Burnie Chen",description:"\u201c The more you know, the more you know you don't know. \u201d \u2015 Aristotle."},A=function(){return i.a.createElement("div",null,i.a.createElement("img",{className:"head-shot-sm",src:"/my-blog"+D.img,alt:D.name}),i.a.createElement("h2",null,D.name),i.a.createElement("p",{className:"description"},D.description))},I=function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"left-part"},i.a.createElement(A,null),i.a.createElement(B,null),i.a.createElement("div",{className:"description"},"\xa9 All rights reserved.")),i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"/my-blog/",component:v}),i.a.createElement(s.b,{path:"/my-blog/pages/contact",component:M}),i.a.createElement(s.b,{path:"/my-blog/pages/project",component:T}),i.a.createElement(s.b,{path:"/my-blog/not-found",component:S}),i.a.createElement(s.a,{to:"/my-blog/not-found"})))};n(51);m.a.render(i.a.createElement(u.a,null,i.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.86cebbd2.chunk.js.map