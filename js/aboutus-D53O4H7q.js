/* empty css              */import{r as A,o as v,c as p,a as i,w as u,v as f,b as a,d as n,e as h,F as b,P as L,t as m,g as N}from"./index-w2Gn8AKE.js";import{_ as B,a as c,b as j,c as q,d as U,e as w,f as y,g as x,h as k,i as z,j as T,k as C,l as H,m as I,n as F,o as P,p as E}from"./_plugin-vue_export-helper-C0Q8SyjQ.js";import{_ as V,a as D,b as G,c as R,d as J,e as M,f as O}from"./youtube-BcAb4V8U.js";const W={created(){window.addEventListener("scroll",()=>this.d_box=!1)},unmounted(){window.removeEventListener("scroll",()=>this.d_box=!1)},mounted(){var r,e=0,g={duration:300,delta:50,transitioning:!1,minimize:function(){this.el.hasClass("is-maximized")&&this.transition(),this.el.removeClass("is-maximized").addClass("is-minimized")},maximize:function(){this.el.hasClass("is-minimized")&&this.transition(),this.el.removeClass("is-minimized").addClass("is-maximized")},transition:function(){var t=this;t.el.find(".top-section").css("visibility","visible"),t.transitioning=!0,t.el.css({"-webkit-transform":"transform "+t.duration+"ms","-moz-transform":"transform "+t.duration+"ms","-ms-transform":"transform "+t.duration+"ms","-o-transform":"transform "+t.duration+"ms",transition:"transform "+t.duration+"ms"}),setTimeout(function(){t.el.css("transition","none"),t.transitioning=!1,t.el.hasClass("is-minimized")&&t.el.find(".top-section").css("visibility","hidden")},t.duration)},handleScroll:function(){var t=$(window).scrollTop(),s=this.el.outerHeight();Math.abs(e-t)<=this.delta||this.transitioning||(t>e&&t>s?this.minimize():t+$(window).height()<$(document).height()&&this.maximize(),e=t)},handleLogoClick:function(t){t.preventDefault(),this.maximize()},init:function(t){var s=this;s.el=$(t),$(window).scroll(function(o){r=!0}),setInterval(function(){r&&(s.handleScroll(),r=!1)},50);var d=s.el.find(".bottom-section .navbar-logo");d.on("click",function(o){s.handleLogoClick(o)})}};g.init("#navbar")},computed:{},methods:{change_tab(r){this.active_t=r},open_m_bar(){this.show_bar_m=!this.show_bar_m},scrollToElement(r){const e=this.$refs[r];e&&e.scrollIntoView({behavior:"smooth",block:"start"})},close_nav(){console.log("asdsad",this.$refs["navi-toggle"].checked),this.$refs["navi-toggle"].checked=!1},open_d_box(){this.d_box=!this.d_box},open_news_box(){this.show_news=!this.show_news},select_anew(r){this.selected_news=this.news_data[r]}},data(){return{title:"Home page",d_box:!1,show_news:!1,show_bar_m:!1,active_t:0,news_data:[{title:"Horizon Film and Television Technology Launches Revolutionary AI-Powered Video Editing Platform",date:"July 2024",writer:"Ivan",sub_content:"Pioneering a New Era in Film Production and Content Creation",content:"Horizon Film and Television Technology has officially launched its groundbreaking AI-powered video editing platform, setting a new standard in the film and entertainment industry. By seamlessly combining artificial intelligence with creative storytelling, Horizon enables content creators to produce high-quality short videos derived from long-form content, perfect for today’s fast-paced audiences. This innovative technology will allow filmmakers and businesses to craft engaging stories with unparalleled efficiency and precision. As we move forward, Horizon aims to continue enhancing the world of film with cutting-edge solutions.",img:"/new1.jpg"},{title:"Horizon Film and Television Technology Expands Global Reach with Strategic Partnerships",date:"September 2024",writer:"Ivan",sub_content:"Positioning Itself as a Global Leader in Film Technology Innovation",content:"Horizon Film and Television Technology is proud to announce its strategic collaborations with major international partners to strengthen its presence in the global market. This expansion is part of Horizon's vision to become a dominant force in film technology innovation. These partnerships will provide access to new markets, helping to accelerate the adoption of Horizon's AI-driven video editing and content creation solutions. This milestone signifies the beginning of a global movement, with Horizon at the forefront of delivering enhanced film experiences to audiences worldwide.",img:"/new2.jpg"},{title:"Horizon’s “Big Screen for Everyone” Initiative Revolutionizes Film Investment",date:"November 2024",writer:"Ivan",sub_content:"Empowering Global Audiences to Participate in Film Creation",content:"Horizon Film and Television Technology is thrilled to unveil its “Big Screen for Everyone” initiative, an unprecedented opportunity for individuals worldwide to invest in and contribute to film productions. This democratized approach to filmmaking empowers aspiring filmmakers and investors alike, enabling them to actively participate in creating high-quality films. With Horizon’s state-of-the-art technology, everyone can enjoy the creative process and share in the rewards of the global film industry. The initiative is poised to make waves and redefine the traditional boundaries of film production and financing.",img:"/new3.jpg"}],selected_news:{title:"Horizon Film and Television Technology Launches Revolutionary AI-Powered Video Editing Platform",date:"July 2024",writer:"Ivan",sub_content:"Pioneering a New Era in Film Production and Content Creation",content:"Horizon Film and Television Technology has officially launched its groundbreaking AI-powered video editing platform, setting a new standard in the film and entertainment industry. By seamlessly combining artificial intelligence with creative storytelling, Horizon enables content creators to produce high-quality short videos derived from long-form content, perfect for today’s fast-paced audiences. This innovative technology will allow filmmakers and businesses to craft engaging stories with unparalleled efficiency and precision. As we move forward, Horizon aims to continue enhancing the world of film with cutting-edge solutions.",img:"/news_imgc.png"}}}},K={id:"navbar",class:"fixed is-maximized"},Q={class:"bottom-section"},X={class:"nav-list nav_h"},Y={class:"nav_bar_m"},Z={class:"nav-list"},ii={style:{background:"#000"}},ei={class:"div9",ref:"div9"},ti={class:"footer",ref:"div12"},si={class:"news_div"},oi={class:"row"},ai={class:"col-lg-7 col-md-12",style:{"margin-right":"20px"}},ni={class:"news_title"},li={class:"news_date"},ri={class:"news_writer"},di=["src"],mi={class:"paragraph"},ci={class:"col-lg-4 col-md-12",style:{margin:"0px",padding:"0"}},vi=["onClick"],pi=["src"],gi={class:"small_title"},_i={class:"small_p"},ui={class:"small_p",style:{"margin-top":"15px"}};function fi(r,e,g,t,s,d){const o=A("router-link"),S=L;return v(),p(b,null,[i("div",K,[u(i("div",{class:"download-box",onClick:e[0]||(e[0]=(...l)=>d.open_d_box&&d.open_d_box(...l))},e[4]||(e[4]=[i("div",{class:"d-mini-box"},[i("img",{src:c,alt:"Logo",class:"d_box_img"}),i("p",null,"ios version")],-1),i("div",{class:"d-mini-box"},[i("img",{src:c,alt:"Logo",class:"d_box_img"}),i("p",null,"android version")],-1)]),512),[[f,s.d_box]]),i("div",Q,[i("ul",X,[a(o,{to:"/home"},{default:n(()=>e[5]||(e[5]=[i("li",{class:"nav-item"},[i("img",{src:w}),i("img",{src:y}),i("p",null,"Home")],-1)])),_:1}),a(o,{to:"/aboutus"},{default:n(()=>e[6]||(e[6]=[i("li",{class:"nav-item"},[i("img",{src:x}),i("img",{src:k}),i("p",null,"About Us")],-1)])),_:1}),a(o,{to:"/news"},{default:n(()=>e[7]||(e[7]=[i("li",{class:"nav-item"},[i("img",{src:z}),i("img",{src:T}),i("p",null,"News")],-1)])),_:1}),a(o,{to:"/contactus"},{default:n(()=>e[8]||(e[8]=[i("li",{class:"nav-item"},[i("img",{src:C}),i("img",{src:H}),i("p",null,"Contact Us")],-1)])),_:1}),a(o,{to:"/copyright"},{default:n(()=>e[9]||(e[9]=[i("li",{class:"nav-item"},[i("img",{src:I}),i("img",{src:F}),i("p",null,"Copyright")],-1)])),_:1}),a(o,{to:"/statement"},{default:n(()=>e[10]||(e[10]=[i("li",{class:"nav-item"},[i("img",{src:P}),i("img",{src:E}),i("p",null,"Statement")],-1)])),_:1}),i("li",{class:"nav-item",onClick:e[1]||(e[1]=l=>d.open_d_box())},e[11]||(e[11]=[i("img",{src:j},null,-1),i("img",{src:q},null,-1),i("p",null,"Download",-1)]))])]),i("div",{class:"nav_button",onClick:e[2]||(e[2]=(...l)=>d.open_m_bar&&d.open_m_bar(...l))},e[12]||(e[12]=[i("img",{src:U,class:""},null,-1)])),u(i("div",Y,[i("ul",Z,[a(o,{to:"/home"},{default:n(()=>e[13]||(e[13]=[i("li",{class:"nav-item"},[i("img",{src:w}),i("img",{src:y}),i("p",null,"Home")],-1)])),_:1}),a(o,{to:"/aboutus"},{default:n(()=>e[14]||(e[14]=[i("li",{class:"nav-item"},[i("img",{src:x}),i("img",{src:k}),i("p",null,"About Us")],-1)])),_:1}),a(o,{to:"/news"},{default:n(()=>e[15]||(e[15]=[i("li",{class:"nav-item"},[i("img",{src:z}),i("img",{src:T}),i("p",null,"News")],-1)])),_:1}),a(o,{to:"/contactus"},{default:n(()=>e[16]||(e[16]=[i("li",{class:"nav-item"},[i("img",{src:C}),i("img",{src:H}),i("p",null,"Contact Us")],-1)])),_:1}),a(o,{to:"/copyright"},{default:n(()=>e[17]||(e[17]=[i("li",{class:"nav-item"},[i("img",{src:I}),i("img",{src:F}),i("p",null,"Copyright")],-1)])),_:1}),a(o,{to:"/statement"},{default:n(()=>e[18]||(e[18]=[i("li",{class:"nav-item"},[i("img",{src:P}),i("img",{src:E}),i("p",null,"Statement")],-1)])),_:1})])],512),[[f,s.show_bar_m]])]),i("main",ii,[i("div",ei,e[19]||(e[19]=[i("h1",{class:"heading-primary--main"}," Future vision, unlimited prospects ",-1),i("div",{class:"div9_p_box"},[i("p",{class:"div6_p"}," Horizon's goal is not only to increase market value, but also to bring an unparalleled audio-visual feast to global audiences. Our long-term plan: ")],-1)]),512),e[20]||(e[20]=h('<div class="div10" data-v-76b2e13a><div class="div10_pbox" data-v-76b2e13a><p class="div10_p" data-v-76b2e13a>• 1-year goal: Innovate short video production technology and become an industry standard</p><p class="div10_p" data-v-76b2e13a>• 3-year goal: Explore the global market and enhance the company’s international influence</p><p class="div10_p" data-v-76b2e13a>• 5-year goal: Achieve universal participation in film and television creation and promote the industry to develop towards intelligence and innovation</p></div><div class="div10_p_box" data-v-76b2e13a><p class="div6_p" data-v-76b2e13a> We are not only committed to the advancement of film and television technology, but also pay attention to the improvement of global employment and life. By increasing online employment opportunities, our goal is to help more people earn more than $100 a day and improve their quality of life. </p></div></div>',1))]),i("footer",ti,e[21]||(e[21]=[h('<div class="header5" data-v-76b2e13a></div><div class="row footer_row" data-v-76b2e13a><div class="col-lg-6 col-md-12" style="" data-v-76b2e13a><div class="footer_qr_box" data-v-76b2e13a><img src="'+c+'" class="" data-v-76b2e13a><p class="footer_p2" data-v-76b2e13a> iOS version </p></div><div class="footer_qr_box" data-v-76b2e13a><img src="'+c+'" class="" data-v-76b2e13a><p class="footer_p2" data-v-76b2e13a> Android version </p></div></div><div class="col-lg-5 col-md-12" style="margin:0px;" data-v-76b2e13a><div class="f-logo-box" data-v-76b2e13a><a href="https://www.telegram.com" target="_blank" data-v-76b2e13a><img src="'+V+'" data-v-76b2e13a></a><a href="https://www.whatsapp.com" target="_blank" data-v-76b2e13a><img src="'+D+'" data-v-76b2e13a></a><a href="https://www.line.com" target="_blank" data-v-76b2e13a><img src="'+G+'" data-v-76b2e13a></a><a href="https://www.linkedin.com" target="_blank" data-v-76b2e13a><img src="'+R+'" data-v-76b2e13a></a><a href="https://www.instagram.com" target="_blank" data-v-76b2e13a><img src="'+J+'" data-v-76b2e13a></a><a href="https://www.facebook.com" target="_blank" data-v-76b2e13a><img src="'+M+'" data-v-76b2e13a></a><a href="https://www.youtube.com" target="_blank" data-v-76b2e13a><img src="'+O+'" data-v-76b2e13a></a></div><p class="footer__copyright footer_p1" data-v-76b2e13a> all rights reserved @2024-2026 HFTT.COM </p></div></div><div class="row" style="width:100%;" data-v-76b2e13a><div class="col-md-6" data-v-76b2e13a><div class="footer_content" data-v-76b2e13a><p data-v-76b2e13a>© 2020 JUNGLE</p></div></div><div class="col-md-2" data-v-76b2e13a><div class="footer_content" data-v-76b2e13a><p data-v-76b2e13a>Terms and Conditions</p></div></div><div class="col-md-2" data-v-76b2e13a><div class="footer_content" data-v-76b2e13a><p data-v-76b2e13a>Privacy Policy</p></div></div></div>',3)]),512),a(S,{show:s.show_news,"onUpdate:show":e[3]||(e[3]=l=>s.show_news=l),closeable:""},{default:n(()=>[i("div",si,[i("div",oi,[i("div",ai,[e[22]||(e[22]=i("p",{class:"news_s"},"News",-1)),i("h1",ni,m(s.selected_news.title),1),i("p",li,m(s.selected_news.date),1),i("p",ri,"By "+m(s.selected_news.writer),1),i("img",{src:s.selected_news.img,class:"news_img"},null,8,di),i("p",mi,m(s.selected_news.content),1)]),i("div",ci,[e[23]||(e[23]=i("p",{class:"more_news"},"More News",-1)),(v(!0),p(b,null,N(s.news_data,(l,_)=>(v(),p("div",{class:"more_div",onClick:hi=>d.select_anew(_),key:_},[i("img",{src:l.img,class:"more_s_img"},null,8,pi),i("div",null,[i("p",gi,m(l.title),1),i("p",_i,m(l.sub_content),1),i("p",ui,m("".concat(l.writer," - ").concat(l.date)),1)])],8,vi))),128))])])])]),_:1},8,["show"])],64)}const ki=B(W,[["render",fi],["__scopeId","data-v-76b2e13a"]]);export{ki as default};
