let mainTemp = document.querySelector(".maintemp");
let maxTemp = document.querySelector(".maxmin2");
let kuleksur = document.querySelector(".kulek");
let vlajn = document.querySelector(".vlajnost");
let osad = document.querySelector(".yagis");
let bugun = document.querySelector(".date");

let saat24 = document.querySelector(".temp2124");
let saat1 = document.querySelector(".temp211");
let saat2 = document.querySelector(".temp212");
let saat3 = document.querySelector(".temp213");
let saat4 = document.querySelector(".temp214");
let saat5 = document.querySelector(".temp215");
let saat6 = document.querySelector(".temp216");
let saat7 = document.querySelector(".temp217");
let saat8 = document.querySelector(".temp218");
let saat9 = document.querySelector(".temp219");
let saat10 = document.querySelector(".temp2110");
let saat11 = document.querySelector(".temp2111");
let saat12 = document.querySelector(".temp2112");
let saat13 = document.querySelector(".temp2113");
let saat14 = document.querySelector(".temp2114");
let saat15 = document.querySelector(".temp2115");
let saat16 = document.querySelector(".temp2116");
let saat17 = document.querySelector(".temp2117");
let saat18 = document.querySelector(".temp2118");
let saat19 = document.querySelector(".temp2119");
let saat20 = document.querySelector(".temp2120");
let saat21 = document.querySelector(".temp2121");
let saat22 = document.querySelector(".temp2122");
let saat23 = document.querySelector(".temp2123");

let tom1 = document.querySelector(".next1dy");
let tom2 = document.querySelector(".next1nt");

let atom1 = document.querySelector(".next2dy");
let atom2 = document.querySelector(".next2nt");

let city_temp = document.querySelector("#seherler");

weatherApi("Baku");

city_temp.addEventListener("input", (e) => {
  weatherApi(e.target.value);
});

function weatherApi(city) {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=${city}&days=7&aqi=no&alerts=no#`
  )
    .then((a) => a.json())
    .then((data) => {
      console.log(data);
      let currentTemperature = data.current.temp_c;
      // console.log(currentTemperature);
      mainTemp.innerHTML = `${currentTemperature} <sub>º</sub>`;

      let maxT = data.forecast.forecastday[0].day.maxtemp_c;
      let minT = data.forecast.forecastday[0].day.mintemp_c;
      // console.log(maxT, minT);
      maxTemp.innerHTML = `Max.: ${maxT} <sub>º</sub> &nbsp Min.: ${minT} <sub>º</sub> `;

      let kmh = data.current.wind_kph;
      // console.log(kmh);
      kuleksur.innerHTML = `${kmh} km/h`;

      let humid = data.current.humidity;
      // console.log(humid);
      vlajn.innerHTML = `${humid} %`;

      let prec = data.current.precip_mm;
      // console.log(prec);
      osad.innerHTML = `${prec} mm`;

      let today = data.forecast.forecastday[0].date;
      // console.log(today);
      bugun.innerHTML = today;

      let hour24 = data.forecast.forecastday[0].hour[0].temp_c;
      // console.log(hour1);
      saat24.innerHTML = `${hour24} °C`;

      let hour1 = data.forecast.forecastday[0].hour[1].temp_c;
      saat1.innerHTML = `${hour1} °C`;

      let hour2 = data.forecast.forecastday[0].hour[2].temp_c;
      saat2.innerHTML = `${hour2} °C`;

      let hour3 = data.forecast.forecastday[0].hour[3].temp_c;
      saat3.innerHTML = `${hour3} °C`;

      let hour4 = data.forecast.forecastday[0].hour[4].temp_c;
      saat4.innerHTML = `${hour4} °C`;

      let hour5 = data.forecast.forecastday[0].hour[5].temp_c;
      saat5.innerHTML = `${hour5} °C`;

      let hour6 = data.forecast.forecastday[0].hour[6].temp_c;
      saat6.innerHTML = `${hour6} °C`;

      let hour7 = data.forecast.forecastday[0].hour[7].temp_c;
      saat7.innerHTML = `${hour7} °C`;

      let hour8 = data.forecast.forecastday[0].hour[8].temp_c;
      saat8.innerHTML = `${hour8} °C`;

      let hour9 = data.forecast.forecastday[0].hour[9].temp_c;
      saat9.innerHTML = `${hour9} °C`;

      let hour10 = data.forecast.forecastday[0].hour[10].temp_c;
      saat10.innerHTML = `${hour10} °C`;

      let hour11 = data.forecast.forecastday[0].hour[11].temp_c;
      saat11.innerHTML = `${hour11} °C`;

      let hour12 = data.forecast.forecastday[0].hour[12].temp_c;
      saat12.innerHTML = `${hour12} °C`;

      let hour13 = data.forecast.forecastday[0].hour[13].temp_c;
      saat13.innerHTML = `${hour13} °C`;

      let hour14 = data.forecast.forecastday[0].hour[14].temp_c;
      saat14.innerHTML = `${hour14} °C`;

      let hour15 = data.forecast.forecastday[0].hour[15].temp_c;
      saat15.innerHTML = `${hour15} °C`;

      let hour16 = data.forecast.forecastday[0].hour[16].temp_c;
      saat16.innerHTML = `${hour16} °C`;

      let hour17 = data.forecast.forecastday[0].hour[17].temp_c;
      saat17.innerHTML = `${hour17} °C`;

      let hour18 = data.forecast.forecastday[0].hour[18].temp_c;
      saat18.innerHTML = `${hour18} °C`;

      let hour19 = data.forecast.forecastday[0].hour[19].temp_c;
      saat19.innerHTML = `${hour19} °C`;

      let hour20 = data.forecast.forecastday[0].hour[20].temp_c;
      saat20.innerHTML = `${hour20} °C`;

      let hour21 = data.forecast.forecastday[0].hour[21].temp_c;
      saat21.innerHTML = `${hour21} °C`;

      let hour22 = data.forecast.forecastday[0].hour[22].temp_c;
      saat22.innerHTML = `${hour22} °C`;

      let hour23 = data.forecast.forecastday[0].hour[23].temp_c;
      saat23.innerHTML = `${hour23} °C`;

      let tommax = data.forecast.forecastday[1].day.maxtemp_c;
      let tommin = data.forecast.forecastday[1].day.mintemp_c;
      // console.log(tommax, tommin);
      tom1.innerHTML = `${tommax} °C`;
      tom2.innerHTML = `${tommin} °C`;

      let atommax = data.forecast.forecastday[2].day.maxtemp_c;
      let atommin = data.forecast.forecastday[2].day.mintemp_c;
      atom1.innerHTML = `${atommax} °C`;
      atom2.innerHTML = `${atommin} °C`;
    });
}
