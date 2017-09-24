/*  
Script developed by
Leone Veiga Muniz (www.leoneveiga.com.br)
+ Plus and Times x
www.plusandtimes.com
*/

var sg;
var pg;

var MA = 1;
var MB = 1;

var flz = 1;

var minA;
var maxA;
var minB;
var maxB;

var xpc

function myFunction() {

  myFunction2();

      /* 
      O valor não poderá ser menor que min, 
      e será menor (mas não igual) a max.

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      */

      var x = document.getElementById("n1")
      x.innerHTML = Math.floor(Math.random() * (maxA - minA)) + minA;

      var y = document.getElementById("n2")
      y.innerHTML = Math.floor(Math.random() * (maxB - minB)) + minB;

      var s = parseFloat( x.innerHTML)  +  parseFloat(y.innerHTML);
      document.getElementById("soma").innerHTML = s;

      var p = x.innerHTML * y.innerHTML;
      document.getElementById("produto").innerHTML = p;

      sg = s;
      pg = p;

    }

    var width = 0;

    function compara() {

      var Au = document.getElementById("user_A").value;
      var Bu = document.getElementById("user_B").value;

      document.getElementById("mostra_user_A").innerHTML = Au
      document.getElementById("mostra_user_B").innerHTML = Bu

      var somau = parseFloat(Au) + parseFloat(Bu);
      var produ = parseFloat(Au) * parseFloat(Bu);

      if ((somau == sg) && (produ == pg)){        

        if (flz==1){
          document.getElementById('myImage').src='img/feliz50.jpg';
          flz = 2;
        }
        else{
          document.getElementById('myImage').src='img/feliz50_2.jpg';
          flz = 1;
        }

        var elem = document.getElementById("myBar"); 

        width = width + 10*xpc; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';

        document.getElementById("form_A").reset();
        document.getElementById("form_B").reset();

        MA = 1;
        MB = 1;

        myFunction();

        /* Adaptei aqui (spinner loading page) */
        document.getElementById("myDiv").style.display  = "none";
        document.getElementById("loader").style.display = "block";


      } else {

        document.getElementById("form_A").reset();
        document.getElementById("form_B").reset();

        MA = 1;
        MB = 1;

        if (flz==1){
          document.getElementById('myImage').src='img/triste50.jpg';
          flz = 2;
        }
        else{
          document.getElementById('myImage').src='img/triste50_2.jpg';
          flz = 1;
        }

      }

      if (width == 100) {

          window.location= next;   // <<  redirecionar

        }

      }

      function A0(){document.getElementById("user_A").value = 0;}
      function A1(){document.getElementById("user_A").value = 1*MA;}
      function A2(){document.getElementById("user_A").value = 2*MA;}
      function A3(){document.getElementById("user_A").value = 3*MA;}
      function A4(){document.getElementById("user_A").value = 4*MA;}
      function A5(){document.getElementById("user_A").value = 5*MA;}
      function A6(){document.getElementById("user_A").value = 6*MA;}
      function A7(){document.getElementById("user_A").value = 7*MA;}
      function A8(){document.getElementById("user_A").value = 8*MA;}
      function A9(){document.getElementById("user_A").value = 9*MA;}
      function A10(){document.getElementById("user_A").value = 10*MA;}
      function A11(){document.getElementById("user_A").value = 11*MA;}
      function A12(){document.getElementById("user_A").value = 12*MA;}

      function B0(){document.getElementById("user_B").value = 0;}
      function B1(){document.getElementById("user_B").value = 1*MB;}
      function B2(){document.getElementById("user_B").value = 2*MB;}
      function B3(){document.getElementById("user_B").value = 3*MB;}
      function B4(){document.getElementById("user_B").value = 4*MB;}
      function B5(){document.getElementById("user_B").value = 5*MB;}
      function B6(){document.getElementById("user_B").value = 6*MB;}
      function B7(){document.getElementById("user_B").value = 7*MB;}
      function B8(){document.getElementById("user_B").value = 8*MB;}
      function B9(){document.getElementById("user_B").value = 9*MB;}
      function B10(){document.getElementById("user_B").value = 10*MB;}
      function B11(){document.getElementById("user_B").value = 11*MB;}
      function B12(){document.getElementById("user_B").value = 12*MB;}

      function MA0(){
        MA = -1;
        document.getElementById("form_A").reset();
        document.getElementById("user_A").value = "-";
      }

      function PA0(){
        MA = 1;
        document.getElementById("form_A").reset();
      }

      function MB0(){
        MB = -1;
        document.getElementById("form_B").reset();
        document.getElementById("user_B").value = "-";
      }

      function PB0(){
        MB = 1;
        document.getElementById("form_B").reset();
      }


      var myVar2;

      function myFunction2() {
        myVar2 = setTimeout(showPage, 2000);
      }

      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }