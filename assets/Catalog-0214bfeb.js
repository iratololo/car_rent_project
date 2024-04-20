import{u as r,j as e,i as n,a as u,c as L,b as w,r as d,d as P,g as D,e as z,C as I}from"./index-8a76ec81.js";const W=r.ul`
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
`,B=({data:s,type:i})=>{console.log("Categories :>> ",s);const{kitchen:o,beds:a,airConditioner:c,CD:l,radio:h,hob:x,toilet:p,shower:j,freezer:g,water:m,gas:k,microwave:S,adults:f,transmission:v,engine:b,TV:E}=s;return e.jsxs(W,{type:i,children:[f?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#Users`})}),e.jsxs("span",{children:[f," adults"]})]}):e.jsx(e.Fragment,{}),v?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#automatic`})}),e.jsx("span",{children:v})]}):e.jsx(e.Fragment,{}),b?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#station`})}),e.jsx("span",{children:b})]}):e.jsx(e.Fragment,{}),o?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#kitchen`})}),e.jsx("span",{children:"kitchen"})]}):e.jsx(e.Fragment,{}),a?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#bed`})}),e.jsxs("span",{children:[a," beds"]})]}):e.jsx(e.Fragment,{}),p?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#toilet`})}),e.jsx("span",{children:"toilet"})]}):e.jsx(e.Fragment,{}),j?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#shower`})}),e.jsx("span",{children:"shower"})]}):e.jsx(e.Fragment,{}),E?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#tv`})}),e.jsx("span",{children:"TV"})]}):e.jsx(e.Fragment,{}),l?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#cd`})}),e.jsx("span",{children:"CD"})]}):e.jsx(e.Fragment,{}),h?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#radio`})}),e.jsx("span",{children:"radio"})]}):e.jsx(e.Fragment,{}),x?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#hob`})}),e.jsxs("span",{children:[x," hob"]})]}):e.jsx(e.Fragment,{}),g?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#freezer`})}),e.jsx("span",{children:"Freezer"})]}):e.jsx(e.Fragment,{}),k?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#gas`})}),e.jsx("span",{children:"gas"})]}):e.jsx(e.Fragment,{}),m?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#water`})}),e.jsx("span",{children:"water"})]}):e.jsx(e.Fragment,{}),S?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#micro`})}),e.jsx("span",{children:"microwave"})]}):e.jsx(e.Fragment,{}),c?e.jsxs(t,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${n}#airConditioner`})}),e.jsxs("span",{children:[c," Air conditioner"]})]}):e.jsx(e.Fragment,{})]})},C=u`
  padding: 16px 32px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 200px;
  transition: var(--primary-transition);
  text-align: center;
`,R=u`
    border:none;
    background-color:var(--primary-accent-color);
    color:var(--white-color);
    min-width:166px;
    &:hover{
        background-color:#e03333;
    }
`,$=u`
    color: var(--primary-dark);
    font-size: 24px;
    font-weight: 600;
`,T=r.div`
    display: flex;
    align-items: center;
    gap:16px;
    line-height:150%;
    color:var(--primary-dark);
`,A=r.p`
    border-bottom: 1px solid var(--primary-dark);
`,M=r.li`
    border: 1px solid var(--card-border-color);
    border-radius:20px;
    padding:24px;
    display: flex;
    flex-direction:column;
    gap:24px;
     @media screen and (min-width: 768px) {
        flex-direction:row;
     }
`,V=r.div`
    flex: 0 0 290px;
    position: relative;
    border-radius:10px;
    overflow: hidden;
`,_=r.img`
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
`,G=r.div`
    display: flex;
    flex-direction:column;
    gap:24px;
`,H=r.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap:25px;
    margin-bottom:8px;
    h2{
        ${$};
    }
`,O=r.div`
    display: flex;
    align-items: center;
    gap:10px;
    p{
        ${$};
    }
`,U=r.p`
    line-height: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
`,q=r.button`
    ${C};
    ${R};
    align-self:flex-start;
`,J=({data:s})=>{const{name:i,price:o,description:a,reviews:c,rating:l,location:h,adults:x,transmission:p,engine:j,gallery:g,details:m}=s;return e.jsxs(M,{children:[e.jsx(V,{children:e.jsx(_,{src:g[0],alt:"car"})}),e.jsxs(G,{children:[e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx("h2",{children:i}),e.jsxs(O,{children:[e.jsxs("p",{children:["€",o.toFixed(2)]}),e.jsx("button",{children:"fav"})]})]}),e.jsxs(T,{children:[e.jsxs(A,{children:[l,"(",c.length," Reviews)"]}),e.jsx("p",{children:h})]})]}),e.jsx(U,{children:a}),e.jsx(B,{data:{...m,adults:x,transmission:p,engine:j},type:"list"}),e.jsx(q,{type:"button",children:"Show more"})]})]})},K=r.ul`
  display: flex;
  flex-direction:column;
  gap:32px;
`,y=4,N=s=>s.cars.cars.items,F=s=>s.cars.cars.page,Q=L(N,F,(s,i)=>{const o=y*(i-1),a=o+y;return s.slice(o,a)}),X=()=>{const s=w(Q),[i,o]=d.useState(s);return d.useEffect(()=>{o(a=>[...a,...s])},[s]),e.jsx(K,{children:i.length>0&&i.map(a=>e.jsx(J,{data:a},a._id))})},Y=r.div`
    padding:60px 0 100px;
    display: flex;
    gap:64px;
`,Z=r.div`
    flex: 0 0 360px;
`,ee=r.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:50px;
`,se=r.button`
  ${C};
  background-color: transparent;
  border: 1px solid var(--card-border-color);
  &:hover{
        border: 1px solid var(--primary-accent-color);
    }
`,ne=()=>{const s=w(F),i=P(),[o,a]=d.useState(s);console.log("currentPage :>> ",o);const c=()=>{a(l=>l+1)};return d.useEffect(()=>{i(D())},[i]),d.useEffect(()=>{i(z(o))},[i,o]),e.jsx(I,{children:e.jsxs(Y,{children:[e.jsx(Z,{children:"sidebar"}),e.jsxs(ee,{children:[e.jsx(X,{}),e.jsx(se,{onClick:c,type:"button",children:"Load more"})]})]})})};export{ne as default};
