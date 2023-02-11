const superHero_Token="114062474934059";
const Base_url=`https://superheroapi.com/api.php/${superHero_Token}`
const newBtn=document.getElementById('newHeroBtn');
const heroImg=document.getElementById("heroImg");
const searchBtn=document.getElementById("searchBtn");
const searchInput=document.querySelector("input")

const getRandomSuperHero=(id,name)=>{
    fetch(`${Base_url}/${id}`)
    .then(response=>response.json())
    .then(json=>heroImg.innerHTML=`<img src="${json.image.url}" width=300 height=300>`)  
}

newBtn.onclick=()=>{
    let ran=Math.floor(Math.random()*731)+1
    getRandomSuperHero(ran)
    console.log(ran)
}

const getSearchSuperHero=(name)=>{
    fetch(`${Base_url}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
         const hero=json.results[0]
         console.log(hero)
        heroImg.innerHTML=`<img src="${hero.image.url}" width=300 height=300>`})  
}


searchBtn.onclick=()=>{
    getSearchSuperHero(searchInput.value);    
}



