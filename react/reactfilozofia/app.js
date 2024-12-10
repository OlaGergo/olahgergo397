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
        alert("ez egy react kód")
    },
},
"React gomb"
)
ReactDOM.render(gomb,document.getElementById("react-button-container"));