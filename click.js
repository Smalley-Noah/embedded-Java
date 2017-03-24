//samecolor
function samecolor(){
    const doc = document;
    let color = "#196756"
    let divs = doc.querySelectorAll("#samecolor div")
    for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor = color;
    divs[i].style.opacity += i* 0.25
    }
}
//diffcolor
function diffcolor(){
    const doc = document;
    let color1 = "ff0000";
    let color2 = "00ffff";
    let divs = doc.questySelectorAll("diffcolor dic")
    for(var i = 0; i < divs.length; i++){
        if i = %2 == 0{
            divs[i].style.backgroundColor = color;
        }
        else{
        }
    }
}
