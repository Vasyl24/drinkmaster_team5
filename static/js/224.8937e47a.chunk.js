"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{3757:function(n,e,t){t.d(e,{V:function(){return a}});var i,A=t(168),r=t(6487).ZP.h1(i||(i=(0,A.Z)(["\n  margin-bottom: 8px;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  @media screen and (min-width: 768px) {\n    font-size: 56px;\n    line-height: 1.1;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 715px;\n    font-size: 64px;\n  }\n"]))),o=t(3329);function a(n){var e=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r,{children:e})})}},4528:function(n,e,t){t.d(e,{Z:function(){return u}});var i,A,r=t(9439),o=t(2791),a=t(168),d=t(6487),s=d.ZP.div(i||(i=(0,a.Z)(["\n  padding: 14px 0;\n  @media screen and (min-width: 768px) {\n    padding: 14px 24px;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  li {\n  }\n\n  button {\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    color: #f3f3f3;\n    transition: background-color 0.5s;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: transparent;\n    border: none;\n    font-style: normal;\n    margin: 0 10px;\n  }\n\n  button.active {\n    background-color: rgba(64, 112, 205, 0.5);\n  }\n"]))),c=d.ZP.button(A||(A=(0,a.Z)(["\n  width: 27px;\n  height: 27px;\n  fill: rgba(243, 243, 243, 0.3);\n  background-color: transparent;\n  border: none;\n  margin: 0 10px;\n"]))),p=t(5561),l=t(3329),u=function(n){for(var e=n.drinksPerPage,t=n.totalDrinks,i=n.onPageChange,A=n.pageNumbersToShow,a=(0,o.useState)(1),d=(0,r.Z)(a,2),u=d[0],h=d[1],g=function(n){h(n),i(n)},x=[],f=1;f<=Math.ceil(t/e);f++)x.push(f);return(0,l.jsx)(s,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(c,{type:"button",onClick:function(){return g(u-1)},disabled:1===u,children:(0,l.jsx)("svg",{style:{width:14,height:20,marginRight:30},children:(0,l.jsx)("use",{href:p.Z+"#icon-arrow-left"})})}),function(){var n=Math.floor(A/2),e=x.indexOf(u),t=Math.max(0,e-n),i=Math.min(x.length-1,t+A-1);return x.slice(t,i+1)}().map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)("button",{onClick:function(){return g(n)},className:n===u?"active":"",children:n})},n)})),(0,l.jsx)(c,{onClick:function(){return g(u+1)},disabled:u===Math.ceil(t/e),children:(0,l.jsx)("svg",{style:{width:14,height:20},children:(0,l.jsx)("use",{href:p.Z+"#icon-arrow-right"})})})]})})}},2256:function(n,e,t){t.d(e,{Z:function(){return x}});var i,A,r,o,a=t(168),d=t(6487),s=t(1087),c=d.ZP.img(i||(i=(0,a.Z)(["\n  width: 335px;\n  height: 360px;\n  border-radius: 8px;\n  @media screen and (min-width: 768px) {\n    width: 342px;\n    height: 360px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n    height: 400px;\n  }\n"]))),p=d.ZP.div(A||(A=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-top: 14px;\n"]))),l=d.ZP.p(r||(r=(0,a.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),u=(0,d.ZP)(s.rU)(o||(o=(0,a.Z)(["\n  border: none;\n  background-color: inherit;\n  opacity: 0.5;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n"]))),h=t(4315),g=t(3329),x=function(n){var e=n.drinkItem,t=e._id,i=e.drink,A=e.drinkThumb||h,r=i.length>=25?i.slice(0,23)+"...":i;return(0,g.jsxs)("li",{children:[(0,g.jsx)(c,{src:A,alt:i}),(0,g.jsxs)(p,{children:[(0,g.jsx)(l,{children:r}),(0,g.jsx)(u,{to:"/drinks/".concat(t),children:"See more"})]})]},t)}},5224:function(n,e,t){t.r(e),t.d(e,{DrinksPage:function(){return I},default:function(){return y}});var i,A,r,o,a,d=t(9439),s=t(2791),c=t(168),p=t(6487),l=p.ZP.ul(i||(i=(0,c.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n\n  & > *:not(:last-child) {\n    margin-bottom: 28px;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 80px;\n    & > *:not(:last-child) {\n      margin-bottom: 0;\n    }\n    & {\n      gap: 40px 20px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      gap: 80px 20px;\n    }\n    margin-bottom: 80px;\n  }\n"]))),u=t(2256),h=t(3329),g=function(n){var e=n.drinks;return(0,h.jsx)(l,{children:e.map((function(n){return(0,h.jsx)(u.Z,{drinkItem:n},n._id)}))})},x=t(9434),f=p.ZP.div(A||(A=(0,c.Z)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    display: flex;\n    & > *:not(:last-child) {\n      margin-right: 8px;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 80px;\n  }\n\n  & > *:not(:last-child) {\n    margin-bottom: 14px;\n    @media screen and (min-width: 768px) {\n      margin-bottom: 0;\n    }\n  }\n"]))),m=p.ZP.input(r||(r=(0,c.Z)(["\n  color: #f3f3f3;\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 2.6;\n\n  width: 100%;\n  height: 54px;\n\n  border-radius: 200px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  opacity: 0.8;\n  background-color: inherit;\n\n  padding: 14px 24px;\n\n  &::placeholder {\n    color: #f3f3f3;\n    text-align: left;\n\n    font-size: 17px;\n\n    font-weight: 400;\n    line-height: 2.6;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 264px;\n    height: 56px;\n  }\n"]))),w=p.ZP.select(o||(o=(0,c.Z)(["\n  width: 100%;\n  height: 54px;\n\n  border-radius: 200px;\n  background-color: #161f37;\n  /* border: none;\n  background-position-x: 100%;\n  background-position-y: 5px;\n\n  background: #161f37 url('../../assets/sprite.svg#icon-arrow-up');\n  background-position: right 5px top 50%; */\n  /* \n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none; */\n  color: #f3f3f3;\n  text-align: left;\n\n  font-size: 17px;\n\n  font-weight: 400;\n  line-height: 2.6;\n\n  border-radius: 200px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  opacity: 0.8;\n  padding: 14px 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 199px;\n    height: 56px;\n  }\n"]))),b=t(1116),Q=t(5174),E=function(){var n=(0,x.I0)(),e=(0,x.v9)(b.us),t=(0,x.v9)(b.jq),i=(0,x.v9)(b.sh);return(0,s.useEffect)((function(){n((0,Q.getCategories)()),n((0,Q.getIngredients)())}),[n]),(0,h.jsxs)(f,{children:[(0,h.jsx)(m,{type:"text",placeholder:"Enter the text",value:i,onChange:function(e){n((0,Q.setSearchQuery)(e.target.value))}}),(0,h.jsxs)(w,{value:e.selectCategories,onChange:function(e){n((0,Q.setSelectedCategory)(e.target.value))},children:[(0,h.jsx)("option",{value:"",children:"All categories"}),e.map((function(n,e){return(0,h.jsx)("option",{value:n,children:n},e)}))]}),(0,h.jsxs)(w,{value:t.title,onChange:function(e){n((0,Q.setSelectedIngredient)(e.target.value))},children:[(0,h.jsx)("option",{value:"",children:"Ingredients"}),t.map((function(n,e){return(0,h.jsx)("option",{value:n.title,children:n.title},e)}))]})]})},j=t(3757),B=t(4528),v=p.ZP.div(a||(a=(0,c.Z)(["\n  padding-bottom: 80px;\n  padding-top: 80px;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 140px;\n    padding-top: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 160px;\n  }\n"]))),k=t(9067),Z=t(7189),C=t(686),I=function(){var n=(0,x.I0)(),e=(0,x.v9)(k.ms),t=(0,x.v9)(b.sh),i=(0,x.v9)((function(n){return n.filters.selectedCategory})),A=(0,x.v9)((function(n){return n.filters.selectedIngredient})),r=(0,s.useState)([]),o=(0,d.Z)(r,2),a=o[0],c=o[1];return(0,s.useEffect)((function(){n((0,C.T_)(i)),n((0,C.pH)(A)),n((0,Z.jf)({page:1,limit:9,filters:{searchQuery:t,selectedCategory:i||null,selectedIngredient:A||null}}))}),[n,t,i,A]),(0,s.useEffect)((function(){var n=e.filter((function(n){return n.drink.toLowerCase().includes(t.toLowerCase())&&(!i||n.category===i)&&(!A||n.ingredients.some((function(n){return n.title.includes(A)})))}));c(n)}),[e,t,i,A]),(0,h.jsxs)(v,{children:[(0,h.jsx)(j.V,{title:"Drinks"}),(0,h.jsx)(E,{}),(0,h.jsx)(g,{drinks:a}),a.length>8&&(0,h.jsx)(B.Z,{})]})},y=I},9067:function(n,e,t){t.d(e,{ms:function(){return i},xU:function(){return A},zh:function(){return r}});var i=function(n){return n.drinks.items},A=function(n){return n.drinks.isLoading},r=function(n){return n.drinks.error}},1116:function(n,e,t){t.d(e,{IQ:function(){return o},jq:function(){return r},sh:function(){return i},us:function(){return A}});var i=function(n){return n.filters.searchQuery},A=function(n){return n.filters.categories},r=function(n){return n.filters.ingredients},o=function(n){return n.filters.glasses}},4315:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIANwA3AMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAwECBAcFBgj/2gAIAQEAAAAA9N/HAAAAV938DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm+ZyFspagADp0b8+C8AAAOjTORs1zzgABbaVptL6bR1AABTOlY5pjEwAABRvPeIAAALaV5wAAAHVzYAAAAWiAAAAWiAAAAWiAAABTbOMSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsgAAAH2fY/AwAAAPr/ANe//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA9tABnQAAAAAAAipQCBQAhQASgAAAAAAAAAAADOgAc//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4gAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAsABr/8QAMBAAAgECAwYDCAMBAAAAAAAAAQIDABEEEjEFEyFAQVEGIzIiM1JhYnGRoQcgcCT/2gAIAQEAAT8A8XeLdoeI9o4n/pkXZySMuHgVrIEB4FgNWPNQzzYaVZsPM8Uqm6vGxVgfkRXhf+VooNlJB4gZ5sZG7KJerp0LfP8A00AsQBrQjjUgO12PQUwgDFCCKeLKMynMvf8ArCAC0h0UVvlPqjBryG+JacKD7LXHIxZUUu3U2FOhXzFbML60Sskl72B71vlByhfLtaja5tp/R/YjVOp4nlMrPCgUXIY08eQC7C/aokRyVYm/SiIASDnryO7V5Hdq8ju1IsLNwzd+NO0LsWJavI+qpEjRQRe50B5KJwt1Y2BpYmEovxGt6ZruWHeiN8uYesaitxJ2rcSdqZGQ2ao0bdMVHFq3Enalj3d3k6aCmYuSx5NZXTQ8KaVnFiBSsUIIqQXG8Qmx1HY1c96UFmA71M3tBV0UWqNSxuTZRqakfOfpGg5eN8h+k6ipEyEEG6nQ1FZQ8h6DhSqXa1SMLCNPSP2eZjcWMb+k/qmRlbJbj0piIlyKfaPqPNq53RbUrwBo3JJ5tfcSfcc4vuJPuOcX3En3HNJIUvYA/cVv2+FfxW/f4V/Fb9vhX8U0rMCLL/mk0MmHmmgmUrJE7I69mU2I5vZ3h/a21YHxGAwkksSuULKpIDAA24D51/KfhjZMcMniGBHjxcsuWQI3lucvqI781sLAQ7U2phMFOzrHK1mKEBv2DWx9j4HYuAh2fs+LdYaO5AvcsTqxPUmv/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIREjAAMXD/2gAIAQIBAT8AAAEDVlDd+UqbCdXekc//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEwcP/aAAgBAwEBPwDUa5Slahc//9k="}}]);
//# sourceMappingURL=224.8937e47a.chunk.js.map