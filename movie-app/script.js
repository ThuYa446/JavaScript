const apiurl ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';
const imgpath = 'https://image.tmdb.org/t/p/w1280';
const searchapi = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const main =document.querySelector("main");
const form = document.getElementById("form");
const search = document.getElementById("text");

const first = document.getElementById("first");
const previous = document.getElementById("previous");
const pageno = document.getElementById("pageno");
const next = document.getElementById("next");
const last = document.getElementById("last");

let pagecount = 1;

getMovie(apiurl+1);

async function getMovie(url){
    pageno.innerHTML = '';
    const spanEl = document.createElement("span");
    const resp = await fetch(url);
    const respData = await resp.json();
    spanEl.innerHTML = `
        <span>${respData.page}</span>
    `;
    pageno.appendChild(spanEl);
    pagecount = respData.page;
    main.innerHTML = '';
    respData.results.forEach(movie => {
        addMovie(movie);
    });
    next.disabled = false;
    previous.disabled = false;
    console.log(respData);
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm)
        getMovie(searchapi+searchTerm);
    else
        getMovie(apiurl);
    search.value = '';
})

first.addEventListener("click",()=>{
    getMovie(apiurl+1);
    pagecount = 1;
})

last.addEventListener("click",()=>{
    getMovie(apiurl+500);
    pagecount = 500;
})

next.addEventListener("click",()=>{
    if(pagecount == 500){
        next.disabled = true;
    }
    if(pagecount>=1 && pagecount<=499){
        getMovie(apiurl+(++pagecount));
    }
})

previous.addEventListener("click",()=>{
    if(pagecount <= 1){
        previous.disabled = true;
    }
    if(pagecount>1 && pagecount<=500){
        getMovie(apiurl+(--pagecount));
    }
})

function addMovie(movieobj){
    const moviediv = document.createElement('div');
    moviediv.classList.add("movie");
    moviediv.innerHTML = `
            <img src="${imgpath+movieobj.poster_path}" alt="Joker">
            <div class="movie-info">
                <h4>${movieobj.original_title}</h4>
                <span class="${classify(movieobj.vote_average)}">${movieobj.vote_average}</span>
            </div>
            <div class="overview">
                ${movieobj.overview}
            </div>
    `;
    if(movieobj.poster_path != null){
         main.appendChild(moviediv);
    }
}

function classify(avgvote){
    if(avgvote>=8){
        return "green";
    }else if(avgvote>=5){
        return "yellow";
    }else{
        return "red";
    }
}