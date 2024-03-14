var request = new XMLHttpRequest();
request.open("GET"," https://restcountries.com/v3.1/all ")
//request.open("GET"," https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res)
    
    var array_country=res.map((ele)=>ele.name.common)
    console.log(array_country);
    
    //Q1 - Countries name from Asia
    var asia=res.filter((ele)=>ele.region=="Asia")
    var place=asia.map((ele)=>ele.name.common)
    console.log(place)

    //Q2 - Countries name with population less than 2Lakhs
    var area=res.filter((ele)=>ele.population<200000)
    var names=area.map((ele)=>ele.name.common)
    console.log(names)

    //Q3 - Name,Captial and flag using ForEach 
    res.forEach(element => {
        console.log("Name"+" : "+element.name.common)
        console.log("Capital"+" : "+element.capital)
        console.log("Flag"+" : "+element.flag)
    });

    //Q4 - Total Population of countries
    let result = res.reduce((total,CV)=>total+CV.population,0)
    console.log("Total Population" + " : " +result)

    //Q5 - Print country that uses US dollars
    //var money=res.filter((ele)=>ele.currencies.USD.name=="United States dollar")
    var money = res.filter((ele) => ele.currencies && ele.currencies.USD);
    var US = money.map((ele)=>ele.name.common)
    console.log(US)


}