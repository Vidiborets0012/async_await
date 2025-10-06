import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as n}from"./assets/vendor-uumJaN6-.js";console.log("***********************");console.log("***********************");console.log("***********************");const i="https://pokeapi.co/api/v2/pokemon/",l=document.querySelector(".search-form"),d=document.querySelector(".card-container");l.addEventListener("submit",m);async function u(t){return(await n(`${i}${t}`)).data}async function m(t){t.preventDefault();const o=t.target.elements.query.value.trim();try{const e=await u(o);console.log(e),d.innerHTML=p(e)}catch(e){alert(e.message)}}function p({name:t,weight:o,height:e,abilities:a,sprites:{front_default:s}}){const c=a.map(({ability:r})=>`
        <li class="list-group-item">${r.name}</li>
    `).join("");return`
        <div class="card">
            <div class="card-img-top">
                <img src="${s}" alt="${t}"/>
            </div>
            <div class="card-body">
                <h2 class="card-title">Ім'я: ${t}</h2>
                <p class="card-text">Вага: ${o}</p>
                <p class="card-text">Зріст: ${e}</p>

                <p class="card-text">
                    <h4>Вміння: </h4>
                    <ul>    
                        ${c}
                    </ul>
                </p>
            </div>
        </div>
    `}
//# sourceMappingURL=01-async_await.js.map
