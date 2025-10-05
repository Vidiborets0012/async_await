import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as l,a as p}from"./assets/vendor-uumJaN6-.js";console.log("************************");console.log("************************");console.log("************************");console.log("************************");const s=document.querySelector(".btn"),m=document.querySelector(".posts");let o=1,n=40;const d=Math.ceil(100/n);s.addEventListener("click",async()=>{if(o>d)return l.error({position:"topRight",message:"We're sorry, there are no more posts to load"});try{const t=await h();g(t),o+=1,o>1&&(s.textContent="Fetch more posts")}catch(t){console.log(t)}});async function h(){const t=new URLSearchParams({_limit:n,_page:o});return(await p.get(`https://jsonplaceholder.typicode.com/posts?${t}`)).data}function g(t){const e=t.map(({id:r,title:c,body:a,userId:i})=>`<li>
          <h2 class="post-title">${c.slice(0,30)}</h2>
          <p><b>Post id</b>: ${r}</p>
          <p><b>Author id</b>: ${i}</p>
          <p class="post-body">${a}</p>
        </li>`).join("");m.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=pagination.js.map
