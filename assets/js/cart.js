


$(".deduction").click(function(){
  $(".amount")[0].value=+$(".amount")[0].value - 1;
  stop();
})
$(".add").click(function(){
  $(".amount")[0].value=+$(".amount")[0].value + 1;
})
 function stop(){
  if(+$(".amount")[0].value<=1){
    $(".amount")[0].value=1
  }

  }
let btn=document.querySelectorAll(".more")
btn.forEach(function(more,index){
more.addEventListener("click",function(event){
let btnItem=event.target
let product=btnItem.parentElement.parentElement
let productimg=product.querySelector("img").src
let productName=product.querySelector("h3").innerText
let productPrice=product.querySelector("span").innerText
addcart(productimg,productName,productPrice)
Setvalue()

})
})
  function addcart(productimg,productName,productPrice){
let adddiv=document.createElement("div")
let divcontent=' <div class="product"><div class="product-image"><img src="'+ productimg +'"></div><div class="product-details"> <p class="product-description">'+ productName +'</h3></p></div><div class="product-line-price">'+ productPrice +' </div><sup>vnđ</sup><div class="product-quantity"><input type="number" value="1" min="1"></div><div class="product-removal"><button class="cart-delete">Xóa</button></div></div>'
adddiv.innerHTML=divcontent
let cartTbody=$(".tbody")
cartTbody.append(adddiv)
carttotal()
DeleteCart()
  }
function carttotal(){
  let totalB=0
 let  cartItem=$(".product")
 for (let i=0 ;i<cartItem.length;i++){
   let inputValue=cartItem[i].querySelector("input").value
   let productPrice=cartItem[i].querySelector(".product-line-price").innerHTML 
   let newsProductPrice = productPrice.split('.').join('')
  let totalA = newsProductPrice *inputValue
  totalB= totalB + totalA
  inputchange()
 }
 let cartToTal=document.querySelector(".totals-value span")
 cartToTal.innerHTML=totalB.toLocaleString('de-DE')
}
function DeleteCart(){
  let  cartItem=$(".product")
  for (let i=0 ;i<cartItem.length;i++){
    let producT=document.querySelectorAll(".cart-delete")
    producT[i].addEventListener("click",function(event){
      let CartitemP=event.target
      let CartitemR=CartitemP.parentElement.parentElement.parentElement
      CartitemR.remove()
      carttotal()
      Setvalue()
    })
  }
}
function inputchange(){
  let  cartItem=$(".product")
  for (let i=0 ;i<cartItem.length;i++){
    let inputvalue=cartItem[i].querySelector("input")
    inputvalue.addEventListener("change",function(){
      carttotal()
})
  }
}
function Setvalue(){
  let a=$(".product")
  let b=$(".amount-add")
  b[0].value=a.length
 
}