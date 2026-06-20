
// Can mot stack de luu du lieu tinh toan
let array = [];
// Chuc nang add number vao textbox ket qua
function AddNumber(id){
    if(id === 'reset'){
        document.getElementById('ketqua').value = '';
        return;
    }else if(id === 'Xoa'){
        let a = document.getElementById('ketqua').value;
        a = String(a).substring(0, a.length-1); 
        document.getElementById('ketqua').value = a;
    }else{
        document.getElementById('ketqua').value += document.getElementById(id).value;
    }
}
// Chu nang Cong
function Cong(){
    let a = document.getElementById('ketqua').value;
    array.push(a);
    array.push('+');
    document.getElementById('ketqua').value = '';
    console.log(array);
}

function Tru(){
    let a = document.getElementById('ketqua').value;
    array.push(a);
    array.push('-');
    document.getElementById('ketqua').value = '';
    
}


function KetQua(){
    let a = "";
    for(let item in array){
        if(a === "" && isNaN(item))
        {
            array.shift();
        }
    }
}
