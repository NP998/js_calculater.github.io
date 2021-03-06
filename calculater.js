function display(val){
<!-- // it take string thats why concat string value+=val 22222 -->
   document.getElementById("input_box").value+=val;
}
function clr(){
<!-- //clear the value from result with the help of empty string -->
 document.getElementById("input_box").value=""


}
function clr_result(){
document.getElementById("result").value=""
}
function solve(){
 let values=document.getElementById("input_box").value;

   document.getElementById("result").value=eval(values)
}
