// alert('bolo shyam pyare ki jai')
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('tempStatus');
const country_name = document.getElementById('country_name');
const today_date = document.getElementById('today_date');
const time = document.getElementById('time');
const cur_city = document.getElementById('cur_city');


today_date.innerText = new Date().toLocaleDateString();
time.innerText = new Date().toLocaleTimeString();

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
            cur_city.innerText = cityVal
            console.log(arrData);
            
            temp.innerText = arrData[0].main.temp;
            country_name.innerText = arrData[0].sys.country;
            
            
            
        } catch (error) {
            city_name.innerText = `Somthing Wrong!`
        }
    }
}

submitBtn.addEventListener('click',getInfo)