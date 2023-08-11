
function Weather (){
        
    fetch('http://api.weatherstack.com/current?access_key=2c20eda75314d9bedadc805395dbd1d7&query=New%20York')
    .then(res => res.json())
    .then(resultado => console.log(resultado));
    
 }

 Weather()