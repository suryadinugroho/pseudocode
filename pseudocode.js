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
console.log("ini konversi jam ke detik "+hasil(jam, menit))


//tugas nomer 3
for(var i=1; i<=5;i++){
  if(i%2 !=0){
        console.log(i, "ini bilangan ganjil")

  }else{
    console.log(i, "ini bilangan genap")
  }
}


//tugas nomer 4
let r = 10;
let luasLingkaran = Math.PI * (r * r);

console.log(luasLingkaran);




//tugas nomer 5 
var a = 111;
var b = 71;
var c = 120;

if ( a>b & a>c ){
  console.log("terbesar " + a )
}else if (b>a & b>c){
  console.log( "terbesar " + b )
}else{
  console.log("terbesar " + c )
}
if (a<b & a<c){
  console.log("terkecil " + a)
}else if (b<a & b<c){
  console.log("terkecil " + b)
}else{
  console.log("terkecil " + c)
}

function rata_rata(){
   var rata_rata = (a+b+c)/3
   return rata_rata
}
console.log("ini rata ratanya "+rata_rata(a, b, c))

