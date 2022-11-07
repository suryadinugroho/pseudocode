// tugas nomer 1
function menghitungluaspersegipanjang (panjang, lebar ) {
    let luas = panjang * lebar ;
    return luas
}
console.log(menghitungluaspersegipanjang(25, 15));


//tugas nomer 2
let jam = 2;
let menit = 2;

function hasil(){
  let detik = (jam * 3600) + (menit * 60 );
  return detik
}
console.log(hasil(jam, menit))
   

//tugas nomer 3
let bilangan = 53;

function ganjilGenap(bilangan) {
    if(bilangan % 2 == 0) 
    return 'Genap';
    else return 'Ganjil';
}
console.log(ganjilGenap())


//tugas nomer 4
let r =15;

function luaslingkaran(){
  let luas = Math.PI*(r*r)
  return luas
}
console.log(luaslingkaran(r))


//tugas nomer 5 
let a = 90;
let b = 160;
let c = 111;

function terbesar(){
if (a>b & a>c){
   return 'terbesar a';
  }else if (b>a & b>c){
    return 'terbesar b';
  }else{
  return 'terbesar c';
  }
}
console.log(terbesar(a, b, c))

function terkecil(){
if(a<b & a<c){
  return 'terkecil a';
  }else if (b<a & b<c){
  return 'terkecil b';
  }else{
  return 'terkecil c';
  }
}
console.log(terkecil(a,b,c))

function rata_rata(){
   var rata_rata = (a+b+c)/3
   return rata_rata
}
console.log("ini rata ratanya "+rata_rata(a, b, c))

