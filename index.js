// Calvin Phan
// caphan@iastate.edu
// Feb 29, 2024
fetch("./data.json")
  .then((response) => response.json()) // arrow function
  .then((myPopular) => loadFood(myPopular));

function loadFood(myPopular) {
  var mainContainer = document.getElementById("popular-container");
  console.log(myPopular);

  for (let i = 0; i < myPopular.popular.length; i++) {
    let title = myPopular.popular[i].title;
    let url = myPopular.popular[i].url;
    let discription = myPopular.popular[i].description;
    // construct the HTML element
    let division = document.createElement("div");

    division.classList.add("col-lg-4");
    // division.classList.add("mx-1");



    division.innerHTML = `
    
        <img src="${url}" class="bd-placeholder-img rounded-circle popular-img" width="140" height="140">
    
        <h2 class="fw-normal">${title}</h2>
        <p>${discription}</p>

    
    `;

    mainContainer.appendChild(division);
  }
} // this is the end of the function
// Nisarg Detroja
// nisarg@iastate.edu
// Feb 23, 2024

fetch("./data.json")
    .then(response => response.json())
    .then(foodItems => loadDishes(foodItems, null));

function loadDishes(foodItems, cuisineType) {
  console.log(cuisineType);
    var checkboxes = [];
    var cards = [];

    // Find the element “col” in HTML
    var dish = document.getElementById("col");
    var dish2 = document.getElementById("col2");
    var dish3 = document.getElementById("col3");

    // Read every movie from the array
    for (var i = 0; i < foodItems.food.length; i++) {


        if (foodItems.food[i].dishType === "Starter") {
            let title = foodItems.food[i].title;
            let cuisine = foodItems.food[i].cuisine;
            let name = foodItems.food[i].name;
            let checkbox = "checkbox" + i.toString();
            let card = "card" + i.toString();

            let AddDish = document.createElement("div");

            AddDish.classList.add("col");

            AddDish.innerHTML =`
    
            <div id=${card} class="card shadow-sm">
            <img src=${name} class="card-img-top" alt="..."  ></img>
                <div class="card-body" >
                <p class="card-text"> <strong>${title}</strong>, ${cuisine}</p>
                    <div class="d-flex justify-content-between align-items-center" >
                    </div>
                </div>
            </div>
            `;

            if (cuisineType === null) {
              dish.appendChild(AddDish);  
            } else if (cuisineType === cuisine) {
              dish.appendChild(AddDish);  
            }
            
            let cbox = document.getElementById(checkbox);
            checkboxes.push(cbox);
            let ccard = document.getElementById(card);
            cards.push(ccard);
        } else if (foodItems.food[i].dishType === "Entree") {
          let title = foodItems.food[i].title;
          let cuisine = foodItems.food[i].cuisine;
          let name = foodItems.food[i].name;
          let checkbox = "checkbox" + i.toString();
          let card = "card" + i.toString();

          let AddDish = document.createElement("div");

          AddDish.classList.add("col");

          AddDish.innerHTML =`
  
          <div id=${card} class="card shadow-sm">
          <img src=${name} class="card-img-top" alt="..."  ></img>
              <div class="card-body" >
              <p class="card-text"> <strong>${title}</strong>, ${cuisine}</p>
                  <div class="d-flex justify-content-between align-items-center" >
                  </div>
              </div>
          </div>
          `;
          
            dish2.appendChild(AddDish);  
          
          let cbox = document.getElementById(checkbox);
          checkboxes.push(cbox);
          let ccard = document.getElementById(card);
          cards.push(ccard);
        } else {
          let title = foodItems.food[i].title;
          let cuisine = foodItems.food[i].cuisine;
          let name = foodItems.food[i].name;
          let checkbox = "checkbox" + i.toString();
          let card = "card" + i.toString();

          let AddDish = document.createElement("div");

          AddDish.classList.add("col");

          AddDish.innerHTML =`
  
          <div id=${card} class="card shadow-sm">
          <img src=${name} class="card-img-top" alt="..."  ></img>
              <div class="card-body" >
              <p class="card-text"> <strong>${title}</strong>, ${cuisine}</p>
                  <div class="d-flex justify-content-between align-items-center" >
                  </div>
              </div>
          </div>
          `;
          
          dish3.appendChild(AddDish);  
          
          
          let cbox = document.getElementById(checkbox);
          checkboxes.push(cbox);
          let ccard = document.getElementById(card);
          cards.push(ccard);
        }

       



    }

    let search = document.getElementById("American");
    search.addEventListener("click", function () {
    for (let i = 0; i < cards.length; i++) {
      let cardDescription = foodItems.food[i].cuisine;
      if (cardDescription === "American") {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    } // end for
  }); // end search
  let search2 = document.getElementById("Indian");
    search2.addEventListener("click", function () {
    for (let i = 0; i < cards.length; i++) {
      let cardDescription = foodItems.food[i].cuisine;
      if (cardDescription === "Indian") {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    } // end for
  }); // end search
  let search3 = document.getElementById("Italian");
    search3.addEventListener("click", function () {
    for (let i = 0; i < cards.length; i++) {
      let cardDescription = foodItems.food[i].cuisine;
      if (cardDescription === "Italian") {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    } // end for
  }); // end search
  let search4 = document.getElementById("Japanese");
    search4.addEventListener("click", function () {
    for (let i = 0; i < cards.length; i++) {
      let cardDescription = foodItems.food[i].cuisine;
      if (cardDescription === "Japanese") {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    } // end for
  }); // end search
  let search5 = document.getElementById("Clear");
    search5.addEventListener("click", function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    } // end for
  }); // end search

} // end of function

console.log(button_container.getElementById("Italian"));
document.getElementById("Italian").addEventListener("click", ()=>{
  loadDishes(foodItems, "Italian");
});


