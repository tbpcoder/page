const obj = document.getElementById('obj')

let text = ["My name is Thejas Bhat", "I'am a software engineer", "I live in Bangalore"]
let idx = 0
let flag = 0
let sen = 0

function writeText(){
    if(sen >= text.length){
        sen = 0
    }

    obj.innerText = text[sen].slice(0, idx)+ '_'

    if(!flag){
        idx++;
    }else{
        idx--;
    }

    if(idx>text[sen].length || idx == 0){
        flag = !flag;
    }

    if(idx == 0){
        sen++;
    }

    if(!flag)
        setTimeout(() => {
            writeText();
        }, 150)
    else
        setTimeout(() => {
            writeText();
        }, 70)
}

writeText()
