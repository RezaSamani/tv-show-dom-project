// use this shit https://api.tvmaze.com/shows/82/episodes

// get episodes
function episodes() {
    fetch("https://api.tvmaze.com/shows/82/episodes")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        call(res);
      })
      .catch((err) => console.log(err));
  }
  
  // image name ep
  let content = document.querySelector(".content");
  let search=document.getElementById("site-search");

  function call(res) {
    res.map((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      content.append(card);
  
      // create Element content
      const block=document.createElement("section");
      const forLink=document.createElement("a");
      const image = document.createElement("img");
      const name = document.createElement("h3");
      const number = document.createElement("h4");
      const epsummery = document.createElement("p");
      // end of Element content
  
      // start content Element
      block.classList.add("sect");
      image.src = element.image.medium;
      name.innerText = element.name;
      forLink.href=element.url;
      // delete <p></p> from summery
      let str=element.summary;
     str= str.slice(3, -5);
      epsummery.innerText =str;
      // chek Episode and season For this Format S01E04
      element.number <= 9?
        number.innerText = `S0${element.season}E0${element.number}`
      :
        number.innerText = `S0${element.season}E${element.number}`
      //append
      
      block.append(image, name, number,epsummery);
      forLink.append(block)
      content.append(forLink)
    });
  }

  search.addEventListener("onchange",(event)=>{
    let val=event.target.value.toLowerCase();
    const allEpisods=document.getElementsByClassName("sect");
     });
  // console.log(search);
  // ("onchange",(ev)=>episodes())
  // 