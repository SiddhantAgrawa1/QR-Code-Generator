function generate(){
    let h4 = document.getElementById('h4');
    let data = document.getElementById('text').value;
    let errordiv = document.getElementById('error');
    
    if(data == ''){
        errordiv.innerText = "Please enter some data";
    }else{
        h4.innerText = "Your QR Code is : " ;
        let link = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${data}`;
        let img = document.getElementById('img');
        img.src = link;
    }
}