let list=document.getElementsByClassName("list-group-item");
list[1].style.backgroundColor="green";
list[2].style.display="none";
let second=document.querySelectorAll(".list-group-item:nth-child(2)");
second[1].style.color="red";
let odd=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}