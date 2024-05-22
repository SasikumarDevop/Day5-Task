const Details={
    "Name":"Sasikumar",
    "FatherName":"Ganapathy",
    "MotherName":"Dhanalakshmi",
    "Gender":"Male",
    "MobileNo": "8526288328",
    "LanguageKnown":["Tamil","English","Urdu"],
    "Work":"SoftwareDevloper",
    "Hobby":"Playing Cricket"
}
//For loop

for(let i=0;i<=Details.LanguageKnown.length-1;i++)
    {
        console.log(Details.LanguageKnown[i]);
    }

 //for in loop  

//   for(i in Details){
//     console.log(Details)
// }        

 //for of loop

    // let d=Object.entries(Details)
    // for(let [key,value] of d)
    //     {
    //     console.log(key,value)
    // }

// for each loop

// let k=Object.entries(Details)
// k.forEach((data)=>{
//     const [key,value]=data;
//     console.log(key,value)
// })

