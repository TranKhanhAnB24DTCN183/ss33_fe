let dish = [
    { name: 'Rau sạch',category:'Đồ ăn'},
    { name: 'Thịt lợn',category:'Đồ ăn'},
    { name: 'Pepsi ko calo',category:'Nước'},
    { name: 'Cocacola',category:'Nước'},
    { name: 'Cờ lê',category:'Dụng cụ'},
    { name: 'Tuy vít',category:'Dụng cụ'},
]
let silip=document.getElementById("silip")
let category=dish.reduce((arr,item)=>{
        if(!arr.includes(item.category)){
            arr.push(item.category)
        }
        return arr
},[])
silip.innerHTML+=category.map(cate=>`<option>${cate}</option>`)
let but=document.getElementsByTagName("button")[0]
let ul=document.getElementsByTagName("ul")[0]
but.addEventListener("click",function(){
         let cateValue=silip.value
         let cateDish=dish.filter(cate => cate.category === cateValue)
         ul.innerHTML+=cateDish.map(cate=>`<li>${cate.name}</li>`)
})
