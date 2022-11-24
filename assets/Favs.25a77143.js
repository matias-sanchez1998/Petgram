import{s,L as a,g as n,G as d,j as t,a as c}from"./index.9dd2c83d.js";const l=s(a)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`,p=s.div`
  padding-top: 32px;
`,u=s.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`,g=n`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;function f({data:e,loading:r,error:o}){return r?"Loading...":o?t("pre",{children:o.message}):t(p,{children:e.favs.map(i=>t(l,{to:`/detail/${i.id}`,children:t(u,{src:i.src})},i.id))})}const h=d(f,g,{});function b(e){return t(c,{title:"Petgram - Tus favoritos",subtitle:"Aqui puedes encontrar tus favoritos",children:t(h,{})})}export{b as default};
