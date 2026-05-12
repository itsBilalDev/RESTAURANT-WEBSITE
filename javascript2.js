         //search filter
let search=document.querySelector(".menu-search");
let cards=document.querySelectorAll(".menu-card");
search.addEventListener("input",
    ()=>{
        let input=search.value.toLowerCase();
        cards.forEach((card) =>{
             let text=card.textContent.toLowerCase();
             if(text.includes(input)){
                card.style.display= "";
             }else{
                    card.style.display="none";
                }
             
        });
    });

    //add to cart
    let items=document.querySelector(".cartitems");
    let total=document.querySelector(".total");
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];

    function  updateCart(){
             items.innerHTML="";
             let sum=0;
             cart.forEach((item)=>{
                let li=document.createElement("li");
                li.textContent=item.name + " " + item.price + "Rs. ";
                items.appendChild(li);
                sum=sum+item.price;
                              let delbtn=document.createElement("button");
               delbtn.textContent="DELETE";
               delbtn.classList.add("delbtn");
               delbtn.addEventListener("click",
                ()=>{
                    li.remove();
                });
             total.textContent=sum;
 });
}
 function  addtocart(name,price) { 
         cart.push({name,price});
         localStorage.setItem("cart",JSON.stringify(cart));
          updateCart();
 }


 


 
