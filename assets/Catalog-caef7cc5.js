import{a as o,u as r,j as e,b as a,c,r as l,g as d,C as p}from"./index-041427e0.js";const x=o`
  padding: 16px 32px;
  font-weight: 500;
  line-height: 150%;
  border-radius: 200px;
  transition: var(--primary-transition);
`,h=o`
    border:none;
    background-color:var(--primary-accent-color);
    color:var(--white-color);
    min-width:166px;
    &:hover{
        background-color:#e03333;
    }
`,s=o`
    color: var(--primary-dark);
    font-size: 24px;
    font-weight: 600;
`,m=r.div`
    display: flex;
    align-items: center;
    gap:16px;
    line-height:150%;
    color:var(--primary-dark);
`,g=r.p`
    border-bottom: 1px solid var(--primary-dark);
`,u=r.li`
    border: 1px solid var(--card-border-color);
    border-radius:20px;
    padding:24px;
    display: flex;
    flex-direction:column;
    gap:24px;
     @media screen and (min-width: 768px) {
        flex-direction:row;
     }
`,f=r.div`
    flex: 0 0 290px;
    position: relative;
    border-radius:10px;
`,j=r.div`
    display: flex;
    flex-direction:column;
    gap:24px;
`,v=r.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap:25px;
    margin-bottom:8px;
    h2{
        ${s};
    }
`,b=r.div`
    display: flex;
    align-items: center;
    gap:10px;
    p{
        ${s};
    }
`,y=r.p`
    line-height: 150%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
`,w=r.div`
    display: flex;
    flex-wrap:wrap;
    gap:8px;
`,i=r.div`
    border-radius:100px;
    background-color: var(--primary-light);
    padding:12px 18px;
    color: var(--primary-dark);
    font-weight: 500;
`,C=r.button`
    ${x};
    ${h};
    align-self:flex-start;
`,k=()=>e.jsxs(u,{children:[e.jsx(f,{children:e.jsx("img",{src:"",alt:"car"})}),e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsxs(v,{children:[e.jsx("h2",{children:"Mavericks"}),e.jsxs(b,{children:[e.jsx("p",{children:"€8000.00"}),e.jsx("button",{children:"fav"})]})]}),e.jsxs(m,{children:[e.jsx(g,{children:"4.4(2 Reviews)"}),e.jsx("p",{children:"Kyiv, Ukraine"})]})]}),e.jsx(y,{children:"Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads."}),e.jsxs(w,{children:[e.jsx(i,{children:"2 adults"}),e.jsx(i,{children:"Automatic"}),e.jsx(i,{children:"AC"}),e.jsx(i,{children:"2 adults"}),e.jsx(i,{children:"Automatic"}),e.jsx(i,{children:"AC"})]}),e.jsx(C,{type:"button",children:"Show more"})]})]}),S=()=>e.jsx("ul",{children:e.jsx(k,{})}),E=r.div`
    padding:60px 0 100px;
    display: flex;
    gap:64px;
`,A=r.div`
    flex: 0 0 360px;
`,B=t=>t.cars.cars.items,W=()=>{const t=a(B),n=c();return console.log("cars :>> ",t),l.useEffect(()=>{n(d())},[n]),e.jsx(p,{children:e.jsxs(E,{children:[e.jsx(A,{children:"sidebar"}),e.jsx(S,{})]})})};export{W as default};
