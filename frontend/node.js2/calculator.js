
//function(__dirname,__filename,module,require,exports){

function add(num1,num2){
    return num1 + num2;
}
module.exports=add;
//A module.exports  sor azt jelenti, hogy az add nevű függvényt exportálja, így más fájlokban is használhatóvá válik, ha azt require segítségével beimportálják.
//}