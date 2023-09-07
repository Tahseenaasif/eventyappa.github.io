let input=document.querySelector('#input');
let search=document.querySelector("#ser");



let url="https://kontests.net/api/v1/all"

let reesponse=fetch(url);
ihtml="";
reesponse.then((v)=>{
      return v.json();
}).then((contests)=>{
        console.log(contests);
       
        for(item in contests){
          let randomimg=Math. floor(Math. random() * 15) + 1; 
             console.log(contests[item]);
            ihtml+=`
            <div class="card" style="width: 22rem; .justify-content-center margin-right: 1rem">
            
            <img class="abc" src="${randomimg}.jpg";" class="card-img-top" alt="...">
            
            
            <div class="card-body">
              <h5 class="card-title">${contests[item].name}</h5>
              <p class="card-text">Status is : ${contests[item].status} and Site is:- ${contests[item].site}</p>
              <p class="card-text">In 24 Hours? : ${contests[item].in_24_hours
              }</p>
              <p>Starts at: ${contests[item].start_time}</p>
              <p>Ends at at: ${contests[item].end_time}</p>
              <a href=" ${contests[item].url}" class="btn btn-primary">Visit contest</a>
            </div>
          </div>
            `
            
        }
        cardContaioner.innerHTML=ihtml;
})


search.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log(input.value)
  ihtml="";
  cardContaioner.innerHTML=ihtml;

  let reesponse=fetch(url);
  ihtml="";
reesponse.then((v)=>{
      return v.json();
}).then((contests)=>{
        console.log(contests);
        const result = contests.filter((item) => input.value == item.name )
        for(item in result){
           
             console.log(result[item]);
            ihtml+=`
            <div class="card" style="width: 22rem; .justify-content-center margin-right: 1rem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5c9icJbbofNgg9hHqBZ1NnLGFkWQXv-2wMLioEY0cYT1aqzfovUJjCDNAguXTAKqqgs";" class="abc" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result[item].name}</h5>
              <p class="card-text">Status is : ${result[item].status} and Site is:- ${result[item].site}</p>
              <p class="card-text">In 24 Hours? : ${result[item].in_24_hours
              }</p>
              <p>Starts at: ${result[item].start_time}</p>
              <p>Ends at at: ${result[item].end_time}</p>
              <a href=" ${result[item].url}" class="btn btn-primary">Visit contest</a>
            </div>
          </div>
            `
            
        }
        cardContaioner.innerHTML=ihtml;
})

})



// let n=localStorage.getItem("note");
// alert("your note is "+n);
// let a=prompt("enter your note");
// if(a){
//     localStorage.setItem("note",a);
// }
// let c=confirm("do you want to delete your note");
// if(c){
//     localStorage.removeItem("note");
//     alert("note deleted sucessfully");
// }

