import axios from "axios";

async function fetchAdvice(){
  try{
    const adviceData = await axios.get("https://api.adviceslip.com/advice");
    console.log(adviceData.data.slip.advice);
    return adviceData.data.slip.advice;
    
  }
  catch(error){
    console.log("aw man...")
  }
}

function giveAdvice(){
  const adviceHere = document.getElementById("adviceHere");

  const adviceButton = document.getElementById("mybutton");

  adviceButton.addEventListener("click", async function()
  {
    let adviceHelp = await fetchAdvice();
    let splitAdvice = adviceHelp.split(" ");
    console.log(splitAdvice);

    const words = ["you", "important", "always", "never"];
    let editedAdvice = splitAdvice.map(element => {
      const isFound = words.some(item => item === element)
      console.log(isFound)
      console.log(element)
      if (isFound){
        return `<b>${element}</b>`
        //return adviceHere.innerHTML = `${element}` 
      } else {
        return element 
        //return adviceHere.innerHTML = `${adviceHelp}`;
      }
    }).join(" ");
    adviceHere.innerHTML = editedAdvice;


    // splitAdvice.map(function(word){
    //   if (word === "important", "you", "always"){
    //     return `<b>${word}</b>`
    //   } else {
    //     return word;
    //   }
    // }).join
    // adviceHere.innerHTML = splitAdvice
    });
  };



giveAdvice();

