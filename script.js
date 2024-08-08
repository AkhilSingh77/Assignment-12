const data= [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Laptop" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Smartphone" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Headphones" },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Running+Shoes" },
    { id: 5, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Yoga+Mat" },
    { id: 6, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Coffee+Maker" },
    { id: 7, name: "Blender", price: 49.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Blender" },
    { id: 8, name: "Novel", price: 14.99, category: "Books", image: "https://via.placeholder.com/250x200?text=Novel" },
]

const cardContainer = document.getElementsByClassName('cardcontainer')[0];
// const singleCard = document.getElementsByClassName("card")[0];
const buttoncontainer = document.getElementsByClassName('buttoncontainer')[0];
const buttonShowAll = document.getElementById('All');
// const allButtons = Array.from(document.getElementsByClassName('buttoncontainer--singlebutton'));

// createCard();


const categoryArray=[];

data.forEach(({category})=>{
    categoryArray.push(category);
});

const uniqueCategoryArray =[...new Set(categoryArray)]
console.log("hhh",uniqueCategoryArray);

uniqueCategoryArray.forEach((category)=>{
    createButtons(category);
})

showAll();

function showAll(){
    data.forEach(({id,name,price,category,image})=>{
        createCard(id,name,price,category,image);
    })
}

buttonShowAll.addEventListener('click',()=>{
    cardContainer.innerHTML ='';
   showAll();
})

function filterCardOnButtonClick (id){
  const categoryCardArray=  data.filter((unit)=>unit.category===id);
  console.log("filter array",categoryCardArray);
  cardContainer.innerHTML='';
  categoryCardArray.forEach(({id,name,price,category,image})=>(
    createCard(id,name,price,category,image)
  ));
}

function createCard(id,name,price,category,image){
    const cardBody = document.createElement('div');
    cardBody.classList.add('cardcontainer__card','card');
    cardBody.id=id;
    const cardTop = document.createElement('div');
    cardTop.classList.add("card__top");
    const cardImage = document.createElement('img');
    cardImage.src=image;
    cardImage.classList.add("card__top--img");
    cardTop.appendChild(cardImage);
    cardBody.appendChild(cardTop);
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card__bottom');
    const cardBottomHeading =document.createElement('h4');
    cardBottomHeading.classList.add('card__bottom--heading');
    cardBottomHeading.textContent=name;
    cardBottom.appendChild(cardBottomHeading);
    const cardBottomPrice =document.createElement('div');
    cardBottomPrice.classList.add('card__bottom--price');
    cardBottomPrice.textContent=`$${price}`;
    cardBottom.appendChild(cardBottomPrice);
    const cardBottomTag =document.createElement('div');
    cardBottomTag.classList.add('card__bottom--tag');
    cardBottomTag.textContent=category;
    cardBottom.appendChild(cardBottomTag);
  
    cardBody.appendChild(cardBottom);
    cardContainer.appendChild(cardBody);

}

function createButtons(category){
    const singleButton = document.createElement('button');
    singleButton.classList.add('buttoncontainer--singlebutton');
    singleButton.id=category;
    singleButton.textContent=category;
    buttoncontainer.appendChild(singleButton);
    singleButton.addEventListener('click',(e)=>{
        // console.log("jjj",e.target.id);
        filterCardOnButtonClick(e.target.id);
    })
}; 
