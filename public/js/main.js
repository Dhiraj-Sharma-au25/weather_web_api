// alert('bolo shyam pyare ki jai')
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp')
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status')



const getInfo = async (event)=>{
    event.preventDefault();
    
    let cityVal = cityName.value ;
    if (cityVal === ""){
        city_name.innerText = `pls write the name before the search`

    }else{
        try {
            url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d17d03aaa209fa0ec27331cdb34d16d8`
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];

            console.log(arrData);
            temp.innerText = arrData[0].main.temp;
            
        } catch (error) {
            city_name.innerText = `pls write the name of the city properly `
        }
    }
}

submitBtn.addEventListener('click',getInfo)