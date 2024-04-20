import{u as r,j as e,i as n,a as f,c as D,b as u,d as P,r as j,g as z,e as I,C as W}from"./index-b70cd6a8.js";const B=r.ul`
    display: flex;
    flex-wrap:wrap;
    gap:8px;
    li:nth-of-type(1n+9){
        ${({type:s})=>s==="list"&&"display:none;"}
    }
`,t=r.li`
    border-radius:100px;
    background-color: var(--primary-light);
    padding:12px 18px;
    color: var(--primary-dark);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap:8px;
    svg{
        fill:var(--primary-dark);
        width: 20px;
        height: 20px;
    }
    span{
        text-transform:capitalize;
    }
`,R=({data:s,type:i})=>{console.log("Categories :>> ",s);const{kitchen:o,beds:a,airConditioner:c,CD:h,radio:d,hob:x,toilet:p,shower:l,freezer:g,water:m,gas:S,microwave:E,adults:v,transmission:b,engine:y,TV:L}=s;return e.jsxs(B,{type:i,children:[v?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#Users`})}),e.jsxs("span",{children:[v," adults"]})]}):e.jsx(e.Fragment,{}),b?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#automatic`})}),e.jsx("span",{children:b})]}):e.jsx(e.Fragment,{}),y?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#station`})}),e.jsx("span",{children:y})]}):e.jsx(e.Fragment,{}),o?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#kitchen`})}),e.jsx("span",{children:"kitchen"})]}):e.jsx(e.Fragment,{}),a?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#bed`})}),e.jsxs("span",{children:[a," beds"]})]}):e.jsx(e.Fragment,{}),p?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#toilet`})}),e.jsx("span",{children:"toilet"})]}):e.jsx(e.Fragment,{}),l?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#shower`})}),e.jsx("span",{children:"shower"})]}):e.jsx(e.Fragment,{}),L?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#tv`})}),e.jsx("span",{children:"TV"})]}):e.jsx(e.Fragment,{}),h?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#cd`})}),e.jsx("span",{children:"CD"})]}):e.jsx(e.Fragment,{}),d?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#radio`})}),e.jsx("span",{children:"radio"})]}):e.jsx(e.Fragment,{}),x?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#hob`})}),e.jsxs("span",{children:[x," hob"]})]}):e.jsx(e.Fragment,{}),g?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#freezer`})}),e.jsx("span",{children:"Freezer"})]}):e.jsx(e.Fragment,{}),S?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#gas`})}),e.jsx("span",{children:"gas"})]}):e.jsx(e.Fragment,{}),m?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#water`})}),e.jsx("span",{children:"water"})]}):e.jsx(e.Fragment,{}),E?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#micro`})}),e.jsx("span",{children:"microwave"})]}):e.jsx(e.Fragment,{}),c?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#airConditioner`})}),e.jsxs("span",{children:[c," Air conditioner"]})]}):e.jsx(e.Fragment,{})]})},C=f`
  padding: 16px 32px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 200px;
  transition: var(--primary-transition);
  text-align: center;
`,T=f`
    border:none;
    background-color:var(--primary-accent-color);
    color:var(--white-color);
    min-width:166px;
    &:hover{
        background-color:#e03333;
    }
`,$=f`
    color: var(--primary-dark);
    font-size: 24px;
    font-weight: 600;
`,A=r.div`
    display: flex;
    align-items: center;
    gap:16px;
    line-height:150%;
    color:var(--primary-dark);
`,M=r.p`
    border-bottom: 1px solid var(--primary-dark);
`,V=r.li`
    border: 1px solid var(--card-border-color);
    border-radius:20px;
    padding:24px;
    display: flex;
    flex-direction:column;
    gap:24px;
     @media screen and (min-width: 768px) {
        flex-direction:row;
     }
`,_=r.div`
    flex: 0 0 290px;
    position: relative;
    border-radius:10px;
    overflow: hidden;
`,G=r.img`
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
`,H=r.div`
    display: flex;
    flex-direction:column;
    gap:24px;
`,O=r.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap:25px;
    margin-bottom:8px;
    h2{
        ${$};
    }
`,U=r.div`
    display: flex;
    align-items: center;
    gap:10px;
    p{
        ${$};
    }
`,q=r.p`
    line-height: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
`,J=r.button`
    ${C};
    ${T};
    align-self:flex-start;
`,K=({data:s})=>{const{name:i,price:o,description:a,reviews:c,rating:h,location:d,adults:x,transmission:p,engine:l,gallery:g,details:m}=s;return e.jsxs(V,{children:[e.jsx(_,{children:e.jsx(G,{src:g[0],alt:"car"})}),e.jsxs(H,{children:[e.jsxs("div",{children:[e.jsxs(O,{children:[e.jsx("h2",{children:i}),e.jsxs(U,{children:[e.jsxs("p",{children:["€",o.toFixed(2)]}),e.jsx("button",{children:"fav"})]})]}),e.jsxs(A,{children:[e.jsxs(M,{children:[h,"(",c.length," Reviews)"]}),e.jsx("p",{children:d})]})]}),e.jsx(q,{children:a}),e.jsx(R,{data:{...m,adults:x,transmission:p,engine:l},type:"list"}),e.jsx(J,{type:"button",children:"Show more"})]})]})},N=r.ul`
  display: flex;
  flex-direction:column;
  gap:32px;
`,Q=({cars:s})=>e.jsx(N,{children:s.length>0&&s.map(i=>e.jsx(K,{data:i},i._id))}),X=r.div`
    padding:60px 0 100px;
    display: flex;
    gap:64px;
`,Y=r.div`
    flex: 0 0 360px;
`,Z=r.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:50px;
`,ee=r.button`
  ${C};
  background-color: transparent;
  border: 1px solid var(--card-border-color);
  &:hover{
        border: 1px solid var(--primary-accent-color);
    }
`,w=4,F=s=>s.cars.cars.items,k=s=>s.cars.cars.page,se=D(F,k,(s,i)=>{const o=w*(i-1),a=o+w;return s.slice(o,a)}),ne=()=>{const s=u(k),i=u(se),o=u(F),a=P();console.log("cars :>> ",i),console.log("total :>> ",o);const[c,h]=j.useState(s),[d,x]=j.useState(i),p=()=>{h(l=>l+1)};return j.useEffect(()=>{a(z())},[a]),j.useEffect(()=>{a(I(c))},[a,c]),j.useEffect(()=>{x(l=>[...l,...i])},[i]),e.jsx(W,{children:e.jsxs(X,{children:[e.jsx(Y,{children:"sidebar"}),e.jsxs(Z,{children:[e.jsx(Q,{cars:d}),d.length<o.length&&e.jsx(ee,{onClick:p,type:"button",children:"Load more"})]})]})})};export{ne as default};
