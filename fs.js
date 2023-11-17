function leepyear(){
    let val1=Number(document.getElementById("text1").value)
    if(val1%2===0){
        document.getElementById("res").innerHTML=("Given Year is a leep year:"+val1)
    }
    else{
        document.getElementById("res").innerHTML=("Given Year not a leep year:"+val1)
    }
}
function oddev(){
    let val1=Number(document.getElementById("text1").value)
    if(val1%2===0){
        document.getElementById("res").innerHTML=("Given number is Even:"+val1)
    }
    else{
        document.getElementById("res").innerHTML=("Given number is Odd:"+val1)
    }
}