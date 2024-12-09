const btn =document.createElement('button')
btn.onclick=function(){
    alert("ez egy natív kód");
}
btn.innerHTML="Nativ"
document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button",
{
    onclick:function()
    {
        alert("ez egy natív kód")
    },
},
"React gomb"
)
ReactDOM.render(gomb,documen.getElementById("react-button-container"));