//execute only when file for specific country in URL has no showMyFavouritePet method
function showMyFavouritePet(){
    document.querySelector('.fav').innerHTML = `Favourite pet for everyone is cat`
}

function loadScript(url){
    const head = document.head;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

//based on URL it will import specific country file
window.addEventListener('DOMContentLoaded', (event) => {
    const searchParams = new URLSearchParams(window.location.search);

    country = searchParams.get("country")
    
    if(country){
        loadScript(`./${country}.js`)
    }
    
});

//after click on button method should be executed based on country
const button = document.querySelector('button').addEventListener('click', () => {
    showMyFavouritePet()
})



