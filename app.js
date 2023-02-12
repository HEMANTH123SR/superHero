const superHero_Token="114062474934059";
const Base_url=`https://superheroapi.com/api.php/${superHero_Token}`
const newBtn=document.getElementById('newHeroBtn');
const heroImg=document.getElementById("heroImg");
const searchBtn=document.getElementById("searchBtn");
const searchInput=document.querySelector("input");
const nameH=document.getElementById('name')
const intelligence=document.getElementById('intelligence');
const strength=document.getElementById('strength');
const power=document.getElementById('power');
const publisher=document.getElementById('publisher');
// const firstApparence=document.getElementById('firstApparence');
const durability=document.getElementById('durability')
const combat=document.getElementById('combat')

const getRandomSuperHero=(id)=>{
    fetch(`${Base_url}/${id}`)
    .then(response=>response.json())
    .then(json=>{

        heroImg.src=json.image.url;

        nameH.textContent=json.name;

        intelligence.textContent=` Intelligence:  ${json.powerstats.intelligence}`

        strength.textContent=`Strength: ${json.powerstats.strength}`

        power.textContent=`Power: ${json.powerstats.power}`;

        publisher.textContent=`Publisher: ${json.biography.publisher}`;

        durability.textContent=`Durability: ${json.powerstats.durability}`;

        combat.textContent=`Combat: ${json.powerstats.combat}`
        // firstApparence.textContent;

    
    })  
}

newBtn.onclick=()=>{
    let ran=Math.floor(Math.random()*731)+1
    getRandomSuperHero(ran)
}

const getSearchSuperHero=(name)=>{
    fetch(`${Base_url}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
         const hero=json.results[0]
         console.log(hero)

        // heroImg.innerHTML=`<img src="${hero.image.url}" width=300 height=300>`})  
        heroImg.src=hero.image.url;

        nameH.textContent=hero.name;

        intelligence.textContent=` Intelligence:  ${hero.powerstats.intelligence}`

        strength.textContent=`Strength: ${hero.powerstats.strength}`

        power.textContent=`Power: ${hero.powerstats.power}`;

        publisher.textContent=`Publisher: ${hero.biography.publisher}`;

        durability.textContent=`Durability: ${hero.powerstats.durability}`;

        combat.textContent=`Combat: ${hero.powerstats.combat}`
})
}


searchBtn.onclick=()=>{
    getSearchSuperHero(searchInput.value);    
}


