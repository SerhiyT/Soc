(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,t,n){e.exports={content:"ProfileInfo_content__2nbvK",userPhoto:"ProfileInfo_userPhoto__1-enM"}},294:function(e,t,n){},295:function(e,t,n){e.exports={item:"Post_item__3SRy2"}},296:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(29),l=n(31),o=n(30),u=n(32),s=n(0),i=n.n(s),c=n(40);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(a=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,l=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(e){var t=p(Object(s.useState)(!1),2),n=t[0],a=t[1],r=p(Object(s.useState)(e.status),2),l=r[0],o=r[1];Object(s.useEffect)(function(){o(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){a(!0)}},e.status||"What's on your mind?")),n&&i.a.createElement("div",null,i.a.createElement("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(l)},onChange:function(e){o(e.currentTarget.value)},value:l})))},m=n(293),d=n.n(m),b="NONE",E=function(e){return e.profile?i.a.createElement("div",{className:d.a.content},i.a.createElement("div",null,i.a.createElement("img",{src:e.profile.photos.small,alt:"AVATAR",className:d.a.userPhoto}),e.name,i.a.createElement(f,{status:e.status,updateUserStatus:e.updateUserStatus}),i.a.createElement("p",null,"Contacts:"),i.a.createElement("ul",null,i.a.createElement("li",null,"facebook:  ",null!=e.profile.contacts.facebook?e.profile.contacts.facebook:b),i.a.createElement("li",null,"website:  ",null!=e.profile.contacts.website?e.profile.contacts.website:b),i.a.createElement("li",null,"vk:  ",null!=e.profile.contacts.vk?e.profile.contacts.vk:b),i.a.createElement("li",null,"twitter:  ",null!=e.profile.contacts.twitter?e.profile.contacts.twitter:b),i.a.createElement("li",null,"instagram:  ",null!=e.profile.contacts.instagram?e.profile.contacts.instagram:b),i.a.createElement("li",null,"yuotube:  ",null!=e.profile.contacts.youtube?e.profile.contacts.youtube:b),i.a.createElement("li",null,"github:  ",null!=e.profile.contacts.github?e.profile.contacts.github:b),i.a.createElement("li",null,"mainLink: ",null!=e.profile.contacts.mainLink?e.profile.contacts.mainLink:b)))):i.a.createElement(c.a,null)},h=n(93),v=n(294),g=n.n(v),w=n(295),P=n.n(w),S=function(e){return i.a.createElement("div",{className:P.a.item},e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")))},y=n(126),O=n(127),j=n(72),k=n(64),U=Object(j.a)(10),_=Object(O.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(y.a,{component:k.b,name:"newPostText",placeholder:"Enter U post",validate:[j.b,U]})),i.a.createElement("div",null,i.a.createElement("button",null,"Share")))}),A=function(e){var t=e.postData.map(function(e){return i.a.createElement(S,{message:e.message})});return i.a.createElement("div",null,"My posts",i.a.createElement(_,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:g.a.posts},t))},x=n(10),I=Object(x.b)(function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(h.a)(t))}}})(A),N=function(e){return i.a.createElement("div",null,i.a.createElement(E,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),i.a.createElement(I,null))},T=n(25),D=n(92),C=n(6),L=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})))}}]),t}(i.a.Component);t.default=Object(C.d)(Object(x.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:h.c,getUserStatus:h.d,updateUserStatus:h.e}),T.e,D.a)(L)}}]);
//# sourceMappingURL=3.047549d4.chunk.js.map