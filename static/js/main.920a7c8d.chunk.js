(this.webpackJsonpcrowdfund=this.webpackJsonpcrowdfund||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,l,d,m,b,p,j,h,u,x,g,O,v,f=t(1),y=t.n(f),k=t(9),w=t.n(k),N=(t(17),t(4)),S=t(2),M=t(3),B=t.p+"static/media/image-hero-mobile.d4f477d4.jpg",C=t.p+"static/media/image-hero-desktop.631209c1.jpg",Y=t.p+"static/media/icon-hamburger.f8a9f0cf.svg",z=t.p+"static/media/icon-close-menu.32169d31.svg",E=t(0),T=M.a.header(r||(r=Object(S.a)(["\n  height: 40vh;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  nav {\n    padding: 2.1rem 1rem 0 1rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: white;\n  }\n  nav h3 {\n    font-size: 28px;\n  }\n  .hamburger {\n    cursor: pointer;\n  }\n  ul {\n    display: none;\n  }\n  .nav-items {\n    z-index: 1;\n    position: absolute;\n    height: 25vh;\n    width: 90vw;\n    top: calc(40vh - 28vh);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    background-color: var(--clr-white);\n    box-shadow: 0 0 0 9999rem rgb(0 0 0 / 50%);\n    border-radius: var(--radius);\n  }\n  .nav-items li {\n    cursor: pointer;\n    padding: 0px 0.8rem;\n    height: 40px;\n    /* border-bottom: 1px dotted var(--clr-primary-darkcyan); */\n  }\n  .nav-items li:hover {\n    background-color: #f8f3f3;\n  }\n  .nav-items a {\n    font-weight: bold;\n    color: var(--clr-black);\n  }\n\n  @media only screen and (min-width: 600px) {\n    background-image: url(",");\n    nav {\n      width: 100%;\n      max-width: 1200px;\n      margin: 0 auto;\n    }\n    .hamburger {\n      display: none;\n    }\n    ul {\n      display: flex;\n      color: var(--clr-white);\n    }\n    ul a {\n      padding: 1rem;\n      color: var(--clr-white);\n    }\n    ul a:hover {\n      color: #f8f3f3;\n    }\n  }\n\n  @media only screen and (min-width: 1000px) {\n    height: 50vh;\n    width: 100%;\n  }\n"])),B,C),$=function(){var n=Object(f.useState)(!1),e=Object(N.a)(n,2),t=e[0],r=e[1];return Object(E.jsx)(T,{children:Object(E.jsxs)("nav",{children:[Object(E.jsx)("h3",{children:"Crowdfund"}),Object(E.jsx)("img",{className:"hamburger",src:t?z:Y,alt:"Hamburger menu",height:"18px",width:"18px",onClick:function(){r(!t)}}),Object(E.jsxs)("ul",{className:t?"nav-items":"",children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"About"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"Discover"})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/",children:"Get Started"})})]})]})})},R=t.p+"static/media/logo-mastercraft.dca2a831.svg",P=t.p+"static/media/icon-bookmark.7777f8ec.svg",A=t.p+"static/media/icon-bookmark-checked.30afd333.svg",G=t.p+"static/media/icon-check.bdee5269.svg",I=M.a.div(a||(a=Object(S.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),q=M.a.div(i||(i=Object(S.a)(["\n  z-index: 1010 !important;\n  text-align: center;\n  padding: 2rem;\n  background-color: var(--clr-white);\n  width: min(90%, 33rem);\n  border-radius: var(--radius);\n  .content {\n    margin: 1rem 0rem;\n  }\n  .content h2 {\n    margin-bottom: 1rem;\n  }\n  .content p {\n    line-height: 1.6;\n    color: var(--clr-primary-cyan);\n  }\n"]))),J=M.a.button(c||(c=Object(S.a)(["\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 10rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--clr-primary-cyan);\n  color: var(--clr-white);\n  border-radius: 30px;\n  font-weight: bold;\n\n  :hover {\n    background-color: var(--clr-primary-darkcyan);\n  }\n  :active {\n    transform: scale(0.98);\n  }\n"]))),D=function(n){var e=n.isModalOpen,t=n.setIsModalOpen;return Object(E.jsx)(I,{children:Object(E.jsxs)(q,{children:[Object(E.jsx)("img",{src:G,alt:"check"}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("h2",{children:"Thanks for your support!"}),Object(E.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. Got it!"})]}),Object(E.jsx)(J,{onClick:function(){t(!e)},children:"Got it!"})]})})},F=M.a.article(o||(o=Object(S.a)(["\n  position: relative;\n  margin-top: -5rem;\n  /* z-index: 1 !important; */\n  padding: 2.5rem 2rem;\n  background-color: #fff;\n  border-radius: var(--radius);\n  text-align: center;\n  #logo {\n    /* z-index: -1 !important; */\n    position: absolute;\n    top: -0.4rem;\n    transform: translate(-50%, -50%);\n  }\n  .description {\n    color: var(--clr-darkgrey);\n    font-size: 1rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  .action-area {\n    display: flex;\n    justify-content: space-between;\n  }\n  img {\n    cursor: pointer;\n  }\n  .bkmark-btn {\n    display: flex;\n    align-items: center;\n    border: none;\n    border-radius: 30px;\n    outline: none;\n    padding: 0 !important;\n  }\n  .bktext {\n    display: none;\n  }\n\n  @media only screen and (min-width: 600px) {\n    .bktext {\n      display: block;\n      color: var(--clr-primary-cyan);\n      font-weight: bold;\n      margin-left: 20px;\n    }\n    .bkmark-btn {\n      cursor: pointer;\n      padding: 0rem 1.5rem 0rem 0rem !important;\n    }\n    .action-area {\n      justify-content: space-around;\n    }\n  }\n"]))),H=M.a.button(s||(s=Object(S.a)(["\n  cursor: pointer;\n  padding: 0px 1.2rem;\n  background-color: var(--clr-primary-cyan);\n  color: var(--clr-white);\n  border-radius: 30px;\n  font-size: large;\n  font-weight: bold;\n  outline: none;\n  border: none;\n  :hover {\n    background-color: var(--clr-primary-darkcyan);\n  }\n  :active {\n    transform: scale(0.98);\n  }\n"]))),U=function(){var n=Object(f.useState)(!1),e=Object(N.a)(n,2),t=e[0],r=e[1],a=Object(f.useState)(!1),i=Object(N.a)(a,2),c=i[0],o=i[1];return Object(E.jsxs)(F,{children:[c&&Object(E.jsx)(D,{isModalOpen:c,setIsModalOpen:o}),Object(E.jsx)("img",{id:"logo",src:R,alt:"logo",height:"56px",width:"56px"}),Object(E.jsx)("h2",{className:"title",children:" Mastercraft Bamboo Monitor Riser"}),Object(E.jsx)("p",{className:"description",children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."}),Object(E.jsxs)("div",{className:"action-area",children:[Object(E.jsx)(H,{onClick:function(){o(!c)},children:"Back this project"}),Object(E.jsxs)("button",{className:"bkmark-btn",onClick:function(){r(!t)},children:[Object(E.jsx)("img",{src:t?A:P,alt:"Bookmark"}),t?Object(E.jsx)("p",{className:"bktext",children:"Bookmarked"}):Object(E.jsx)("p",{className:"bktext",children:"Bookmark"})]})]})]})},W=M.a.article(l||(l=Object(S.a)(["\n  padding: 2.5rem 2rem;\n  background-color: #fff;\n  border-radius: var(--radius);\n  text-align: center;\n  .content {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n  .progress-area {\n    background-color: var(--clr-bg);\n    border-radius: var(--radius);\n  }\n  .progress {\n    width: 70%;\n    max-width: 100%;\n    height: 0.7rem;\n    background-color: var(--clr-primary-cyan);\n    border-radius: var(--radius);\n  }\n  p {\n    margin-top: 0.5rem;\n    color: var(--clr-primary-cyan);\n  }\n  @media only screen and (min-width: 600px) {\n    .content {\n      flex-direction: row;\n      /* justify-content: space-between; */\n      align-items: center;\n      gap: 6rem;\n    }\n  }\n"]))),K=function(){return Object(E.jsxs)(W,{children:[Object(E.jsxs)("div",{className:"content",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"$89,914"}),Object(E.jsx)("p",{children:"of $100,000 backed"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"5,007"}),Object(E.jsx)("p",{children:"total backers"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"56"}),Object(E.jsx)("p",{children:"days left"})]})]}),Object(E.jsx)("div",{className:"progress-area",children:Object(E.jsx)("div",{className:"progress"})})]})},L=[{id:1,title:"Bamboo Stand",pledge:"Pledge $25 or more",body:" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",amount:101,left:"left",button:"Select Reward"},{id:2,title:"Black Edition Stand",pledge:"Pledge $75 or more",body:" You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",amount:64,left:"left",button:"Select Reward"},{id:3,title:"Mahogany Special Edition",pledge:"Pledge $200 or more",body:" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",amount:0,left:"left",button:"Out of Stock"}],Q=t.p+"static/media/icon-close-modal.732388df.svg",V=M.a.div(d||(d=Object(S.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),X=M.a.article(m||(m=Object(S.a)(["\n  overflow: auto;\n  height: 90vh;\n  z-index: 1010 !important;\n  padding: 2.5rem 2rem;\n  background-color: var(--clr-white);\n  width: min(90%, 42rem);\n  border-radius: var(--radius);\n  .head {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),Z=M.a.article(b||(b=Object(S.a)(['\n  padding: 1.5rem;\n  border: 1px dotted var(--clr-primary-cyan);\n  border-radius: 10px;\n  margin: 2rem 0rem;\n  input[type="radio"] {\n    height: 1rem;\n    width: 1rem;\n    margin-right: 10px;\n  }\n  .selection {\n    display: flex;\n    align-items: center;\n  }\n  .pledge {\n    display: flex;\n    flex-direction: column;\n  }\n  .pledgeText {\n    font-size: 0.9rem;\n    color: var(--clr-primary-darkcyan);\n    margin-top: 5px;\n  }\n  .amount-container {\n    display: flex;\n  }\n  .left {\n    margin-left: 0.5rem;\n    color: var(--clr-primary-cyan);\n  }\n  .content {\n    text-align: center;\n  }\n  .line {\n    width: 100%;\n    height: 1px;\n    background-color: var(--clr-primary-cyan);\n    margin-top: 1rem;\n  }\n  .action {\n    display: flex;\n    justify-content: space-between;\n  }\n  input[type="number"] {\n    width: 6rem;\n    padding: 1rem 1.5rem;\n    border-radius: 30px;\n    outline: none;\n    border: 1px solid var(--clr-primary-cyan);\n    margin-right: 10px;\n  }\n  @media only screen and (min-width: 600px) {\n    .action {\n      justify-content: flex-end;\n      position: relative;\n      bottom: 1rem;\n    }\n    .p-text {\n      position: relative;\n      top: 2rem;\n    }\n    .content {\n      text-align: left;\n    }\n  }\n']))),_=M.a.button(p||(p=Object(S.a)(["\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 7rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--clr-primary-cyan);\n  color: var(--clr-white);\n  border-radius: 30px;\n  font-weight: bold;\n\n  :hover {\n    background-color: var(--clr-primary-darkcyan);\n  }\n  :active {\n    transform: scale(0.98);\n  }\n\n  @media only screen and (min-width: 600px) {\n    width: 10rem;\n  }\n"]))),nn=function(n){var e=n.isModal,t=n.setModal,r=n.onShow,a=Object(f.useState)(!1),i=Object(N.a)(a,2),c=i[0],o=i[1],s=Object(f.useState)(!1),l=Object(N.a)(s,2),d=l[0],m=l[1],b=Object(f.useState)(!1),p=Object(N.a)(b,2),j=p[0],h=p[1];return Object(E.jsx)(V,{children:Object(E.jsxs)(X,{children:[Object(E.jsxs)("div",{className:"head",children:[Object(E.jsx)("h1",{children:"Back this project"}),Object(E.jsx)("img",{src:Q,alt:"close modal",width:"15px",height:"15px",style:{cursor:"pointer"},onClick:function(){t(!e)}})]}),Object(E.jsx)("p",{className:"text",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),Object(E.jsxs)(Z,{children:[Object(E.jsxs)("div",{className:"selection",children:[Object(E.jsx)("input",{type:"radio",name:"selection",id:"noReward",value:"noReward",onClick:function(){!0===d&&m(!1),!0===j&&h(!1),o(!0)}}),Object(E.jsx)("h1",{children:" Pledge with no reward"})]}),Object(E.jsx)("p",{children:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}),c&&Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{className:"line"}),Object(E.jsx)("p",{className:"p-text",children:"Enter your pledge"}),Object(E.jsxs)("div",{className:"action",children:[Object(E.jsx)("input",{type:"number",placeholder:"$"}),Object(E.jsx)(_,{onClick:function(){t(!e),r()},children:"Continue"})]})]})]}),Object(E.jsxs)(Z,{children:[Object(E.jsxs)("div",{className:"selection",children:[Object(E.jsx)("input",{type:"radio",name:"selection",id:"bamboo",value:"bamboo",onClick:function(){!0===c&&o(!1),!0===j&&h(!1),m(!0)}}),Object(E.jsxs)("div",{className:"pledge",children:[Object(E.jsx)("h1",{children:" Bamboo Stand"}),Object(E.jsx)("h4",{className:"pledgeText",children:" Pledge $25 or more"})]})]}),Object(E.jsx)("p",{children:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."}),Object(E.jsxs)("div",{className:"amount-container",children:[Object(E.jsx)("h3",{children:"101"}),Object(E.jsx)("span",{className:"left",children:"left"})]}),d&&Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{className:"line"}),Object(E.jsx)("p",{className:"p-text",children:"Enter your pledge"}),Object(E.jsxs)("div",{className:"action",children:[Object(E.jsx)("input",{type:"number",placeholder:"$"}),Object(E.jsx)(_,{onClick:function(){t(!e),r()},children:"Continue"})]})]})]}),Object(E.jsxs)(Z,{children:[Object(E.jsxs)("div",{className:"selection",children:[Object(E.jsx)("input",{type:"radio",name:"selection",id:"black",value:"black",onClick:function(){!0===c&&o(!1),!0===d&&m(!1),h(!0)}}),Object(E.jsxs)("div",{className:"pledge",children:[Object(E.jsx)("h1",{children:" Black Edition Stand"}),Object(E.jsx)("h4",{className:"pledgeText",children:" Pledge $75 or more"})]})]}),Object(E.jsx)("p",{children:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(E.jsxs)("div",{className:"amount-container",children:[Object(E.jsx)("h3",{children:"64"}),Object(E.jsx)("span",{className:"left",children:"left"})]}),j&&Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{className:"line"}),Object(E.jsx)("p",{className:"p-text",children:"Enter your pledge"}),Object(E.jsxs)("div",{className:"action",children:[Object(E.jsx)("input",{type:"number",placeholder:"$"}),Object(E.jsx)(_,{onClick:function(){t(!e),r()},children:"Continue"})]})]})]}),Object(E.jsxs)(Z,{className:"not-active",style:{pointerEvents:"none"},children:[Object(E.jsxs)("div",{className:"selection",children:[Object(E.jsx)("input",{type:"radio",name:"selection",id:"black",value:"black"}),Object(E.jsxs)("div",{className:"pledge",children:[Object(E.jsx)("h1",{children:" Mahogany Special Edition"}),Object(E.jsx)("h4",{className:"pledgeText",children:" Pledge $200 or more"})]})]}),Object(E.jsx)("p",{children:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(E.jsxs)("div",{className:"amount-container",children:[Object(E.jsx)("h3",{children:"0"}),Object(E.jsx)("span",{className:"left",children:"left"})]})]})]})})},en=M.a.div(j||(j=Object(S.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),tn=M.a.div(h||(h=Object(S.a)(["\n  z-index: 1010 !important;\n  text-align: center;\n  padding: 2rem;\n  background-color: var(--clr-white);\n  width: min(90%, 33rem);\n  border-radius: var(--radius);\n  .content {\n    margin: 1rem 0rem;\n  }\n  .content h2 {\n    margin-bottom: 1rem;\n  }\n  .content p {\n    line-height: 1.6;\n    color: var(--clr-primary-cyan);\n  }\n"]))),rn=M.a.button(u||(u=Object(S.a)(["\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 10rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--clr-primary-cyan);\n  color: var(--clr-white);\n  border-radius: 30px;\n  font-weight: bold;\n\n  :hover {\n    background-color: var(--clr-primary-darkcyan);\n  }\n  :active {\n    transform: scale(0.98);\n  }\n"]))),an=function(n){var e=n.isThankModal,t=n.setIsThankModal;return Object(E.jsx)(en,{children:Object(E.jsxs)(tn,{children:[Object(E.jsx)("img",{src:G,alt:"check"}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("h2",{children:"Thanks for your support!"}),Object(E.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. Got it!"})]}),Object(E.jsx)(rn,{onClick:function(){t(!e)},children:"Got it!"})]})})},cn=M.a.article(x||(x=Object(S.a)(["\n  padding: 2.5rem 2rem;\n  background-color: #fff;\n  border-radius: var(--radius);\n  p {\n    padding: 1.2rem 0rem;\n    color: var(--clr-primary-cyan);\n  }\n  .not-active {\n    opacity: 0.5;\n  }\n"]))),on=M.a.article(g||(g=Object(S.a)(["\n  padding: 1.5rem;\n  border: 1px dotted var(--clr-primary-cyan);\n  border-radius: 10px;\n  margin: 2rem 0rem;\n\n  .title {\n    display: flex;\n    flex-direction: column;\n  }\n  .price {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 1rem;\n  }\n  .price h1 {\n    font-size: 2.5rem;\n  }\n  .price span {\n    color: var(--clr-primary-cyan);\n  }\n  h5 {\n    color: var(--clr-primary-darkcyan);\n  }\n  .quantity {\n    display: flex;\n    flex-direction: column;\n  }\n  @media only screen and (min-width: 600px) {\n    .title {\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .quantity {\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n    }\n  }\n"]))),sn=M.a.button(O||(O=Object(S.a)(["\n  cursor: pointer;\n  outline: none;\n  border: none;\n  width: 10rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--clr-primary-cyan);\n  color: var(--clr-white);\n  border-radius: 30px;\n  font-weight: bold;\n\n  :hover {\n    background-color: var(--clr-primary-darkcyan);\n  }\n  :active {\n    transform: scale(0.98);\n  }\n"]))),ln=function(){var n=Object(f.useState)(!1),e=Object(N.a)(n,2),t=e[0],r=e[1],a=Object(f.useState)(!1),i=Object(N.a)(a,2),c=i[0],o=i[1];return Object(E.jsxs)(cn,{children:[c&&Object(E.jsx)(an,{isThankModal:c,setIsThankModal:o}),t&&Object(E.jsx)(nn,{isModal:t,setModal:r,onShow:function(){o(!c)}}),Object(E.jsx)("h1",{children:" About this project"}),Object(E.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(E.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand"}),L.map((function(n){return Object(E.jsxs)(on,{className:n.amount?null:"not-active",children:[Object(E.jsxs)("div",{className:"title",children:[Object(E.jsx)("h1",{children:n.title}),Object(E.jsx)("h5",{children:n.pledge})]}),Object(E.jsx)("p",{children:n.body}),Object(E.jsxs)("div",{className:"quantity",children:[Object(E.jsxs)("div",{className:"price",children:[Object(E.jsxs)("h1",{children:[" ",n.amount," "]}),Object(E.jsx)("span",{children:n.left})]}),n.amount?Object(E.jsx)(sn,{onClick:function(){r(!t)},children:n.button}):Object(E.jsx)(sn,{disabled:!0,style:{pointerEvents:"none"},children:n.button})]})]},n.id)}))]})},dn=M.a.main(v||(v=Object(S.a)(["\n  /* position: relative;\n  bottom: 10vh; */\n  width: min(90%, 45rem);\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n"]))),mn=function(){return Object(E.jsxs)(dn,{children:[Object(E.jsx)(U,{}),Object(E.jsx)(K,{}),Object(E.jsx)(ln,{})]})},bn=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)($,{}),Object(E.jsx)(mn,{})]})};w.a.render(Object(E.jsx)(y.a.StrictMode,{children:Object(E.jsx)(bn,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.920a7c8d.chunk.js.map