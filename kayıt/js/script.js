document.getElementById("signup").style.left="115px";
function openclick(){
    document.getElementById("close").value=document.getElementById("close").value=='O'?'X':'O';
    document.getElementById("signup").style.left=document.getElementById("signup").style.left == '115px' ? '200px' : '115px';
}