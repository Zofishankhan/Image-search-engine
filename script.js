const h1 = document.querySelector(".main h1");
const search_box = document.querySelector(".search_box");
const search_form = document.querySelector(".search_form");
const search_btn = document.querySelector(".search_btn");
const search_result = document.querySelector(".search_result");
const showmore_btn = document.querySelector(".showmore_btn");
const mode = document.querySelector(".mode");
const lightmode_btn = document.querySelector(".lightmode");
const darkmode_btn = document.querySelector(".darkmode");
const bg = document.querySelector(".main");

let light_mode = false;
let dark_mode = true;


const accessKey = "ww0BNI6tRL40nXfF7VRQrnF8N60nWIu4EZZI28sD0M8";

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = search_box.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=18`;

    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;

    if(page===1){
        search_result.innerHTML = "";
    }
    results.map((result)=>{
        let image = document.createElement("img");
        image.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.appendChild(image);
        search_result.appendChild(imageLink);
    })
    showmore_btn.style.display="block";
}

search_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showmore_btn.addEventListener("click",()=>{
    page++;
    searchImages();
})

