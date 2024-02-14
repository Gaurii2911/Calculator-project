(function(){
  let convertType="miles";
  const heading=document.querySelector('h1');
  const intro=document.querySelector('p');
  const answerDiv=document.getElementById('answer');

  var form=document.getElementById('convert');

  document.addEventListener('keydown',function(e){
    const key=e.code;
    if(key==='KeyK'){
      convertType="kilometers";
      heading.innerHTML="Kilometers to Miles converter";
      intro.innerHTML="Type in a number in kilometers and click the button to convert it in miles";
    }

    else if(key==='KeyM'){
      convertType="miles";
      heading.innerHTML="Miles to Kilometers converter";
      intro.innerHTML="Type in a number in miles and click the button to convert it in kilometers";
    }
  });
   
  form.addEventListener('submit',function(e){
    e.preventDefault();

    const distance=parseFloat(document.getElementById('distance').value);

    if(distance){
      if(convertType=="miles"){
        conversion=(distance*1.609344).toFixed(3);
        answerDiv.innerHTML=`<h2>${distance} miles are converted to ${conversion} kilometers</h2>`;
      }

      else{
        conversion=(distance*0.621371192).toFixed(3);
        answerDiv.innerHTML=`<h2>${distance} kilometers are converted to ${conversion} miles</h2>`;
      }
    }

    else{
      answerDiv.innerHTML="<h2>Please provide a number!</h2>";
    }
  })
})();