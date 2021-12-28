alert('bolo shyam pyare ki jai')
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');



const getInfo = async (event)=>{
    event.preventDefault();
    
    let cityVal = cityName.value ;
    if (cityVal === ""){
        city_name.innerText = `pls write the name before the search`

    }else{
        try {
            url = `api.openweathermap.org/data/2.5/weather?q${cityVal}&units=metric&appid = 6676466360d84b316711ba650a827bec`
            const responce = await fetch(url)
            console.log(responce)
        } catch (error) {
            city_name.innerText = `pls write the name of the city properly `
        }
    }
}

submitBtn.addEventListener('click',getInfo)