// use this shit https://api.tvmaze.com/shows/82/episodes

// get episodes
function episodes() {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((res) => res.json())
      .then((res) => {
        call(res);
      })
      .catch((err) => console.log(err));
  }
  
  // image name ep
  let content = document.querySelector(".content");
  let search=document.getElementById("site-search");
  let selectt=document.getElementById("select");

  function call(res) {
    res.map((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      
  
      // create Element content
      const forLink=document.createElement("a");
      const image = document.createElement("img");
      const name = document.createElement("h4");
      const number = document.createElement("h5");
      const epsummery = document.createElement("p");
      const options=document.createElement("option");
      // end of Element content

      // start content Element
      image.src = element.image.medium;
      name.innerText = element.name;
      
    
      forLink.href=element.url;
      forLink.innerText="show more..."
      // delete <p></p> from summery
      epsummery.innerText =element.summary.slice(3, 60)+" . . . .".replaceAll("</p>","").replaceAll("<p>","");
      // chek Episode and season For this Format S01E04
      if(element.number <= 9){
      
        number.innerText = `S0${element.season}E0${element.number}`;
        options.innerText=`S0${element.season}E0${element.number}-${element.name}`; 
      }
        else {
        number.innerText = `S0${element.season}E${element.number}`
        options.innerText=`S0${element.season}E${element.number}-${element.name}`;  
      }
        //append
      selectt.append(options);
      card.append(image, name, number,epsummery,forLink);
      content.append(card);
    });
  }
  
  

  search.addEventListener("input",(event)=>{
     let count=0; 
     const searchText=event.target.value.toLowerCase();
     const episodsCards=document.getElementsByClassName("card");
     const result=document.getElementById("result")
     

       // iterat a values of carsd object 
       for (let index = 0; index < episodsCards.length; index++) {
       const theCard=episodsCards[index];
       if(theCard.innerText.toLowerCase().includes(searchText))
       {
        count++;
        theCard.classList.remove("disable")
       }
       else
       {
        theCard.classList.add("disable")
       }
      }
      result.innerText=`${count} results`; 
     
  })
  selectt.addEventListener("click",(event)=>{
    let optionText=event.target.value.toLowerCase().slice(7);
    const episodsCards=document.getElementsByClassName("card");
    
    if(optionText=="sods"){
       optionText="";
    }

  
      // iterat a values of carsd object 
      for (let index = 0; index < episodsCards.length; index++) {
      const theCard=episodsCards[index];
      if(theCard.innerText.toLowerCase().includes(optionText))
      {
       
       theCard.classList.remove("disable")
      }
      else
      {
       theCard.classList.add("disable")
      }
     }

  })
    //1 show allepisodes at first 
    episodes();