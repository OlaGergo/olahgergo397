//natív->hogyan?
const btn =document.createElement('button')
btn.onclick=function(){
    alert("ez egy natív kód");
}
btn.innerHTML="Nativ"
document.getElementById("nativ-button-container").appendChild(btn);
// react-> mit akarok látni?
const gomb = React.createElement("button",
{
    onclick:function()
    {
        alert("ez egy react kód")
    },
},
"React gomb"
)
//első paramáter az elemet amit használni szeretnénk,
//második paraméter egy referencia egy natív DOM elemre, hivtkozásipont megadása
ReactDOM.render(gomb,document.getElementById("react-button-container"));