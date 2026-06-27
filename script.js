// Can mot stack de luu du lieu tinh toan
let array = [];
// Chuc nang add number vao textbox ket qua
function AddNumber(id){
    if(id === 'reset'){
        document.getElementById('ketqua').value = '';
        // Thong bao reset ve trang thai ban dau
        console.log('Ban vua reset ve gia tri mac dinh null');
        return;
    }else if(id === 'Xoa'){
        let a = document.getElementById('ketqua').value;
        a = String(a).substring(0, a.length-1); 
        document.getElementById('ketqua').value = a;
        // Thong bao hoat dong Xoa binh thuong;
        console.log('Xoa duoc thuc hien');
    }else{
        document.getElementById('ketqua').value += document.getElementById(id).value;
    }
    // Thong bao an so
    console.log('Ban vua an so ' + id[2]);
}


// Chuc nang nay cho phep xoa phuong thuc tinh toan cu the thay bang phuong phap moi
function XoaPhuongThuc(id){
    let a = document.getElementById('ketqua').value;
    let b = document.getElementById(id).value;
    a = String(a).substring(0, a.length - 2);
    a += (b + ' ');
    document.getElementById('ketqua').value = a;
    return;
}
// Chu nang Cong
function Cong(){
    let a = document.getElementById('ketqua').value;
    if (a.length === 0) return;
    if(!isNaN(a[a.length-1])){
        console.log(a[a.length-1]);
        a += ' + ';
        document.getElementById('ketqua').value = a;
    }else{
        XoaPhuongThuc("Cong");
    }
    // Thong bao Chuc nang Cong hoat dong binh thuong
    console.log('Cong hoat dong binh thuong');
}
//Chuc nang Tru
function Tru(){
    let a = document.getElementById('ketqua').value;
    if( a.length === 0) return;
    if(!isNaN(a)){
        a += ' - ';
        document.getElementById('ketqua').value = a;
    }else{
        XoaPhuongThuc("Tru");
    }
    // Thong bao Chuc nang Tru hoat dong binh thuong
    console.log('Tru hoat dong binh thuong');

}

// Xu ly ket qua
function KetQua(){
    
}      
