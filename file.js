x=
            <p id="nn1"></p>
            y=
            <p id="nn2"></p>
            add=
            <p id="add"></p>
            sub=
            <P id="sub"></P>
            mul=
            <P id="mul"></P>
            div=
            <P id="div"></P>
            pow=
            <P id="pow"></P>
            <input type="text" id="n1">
            <input type="text" id="n2">
            <button type="button" onclick="myFunction()">add
            </button>
            <button type="button" onclick="myFunction1()">sub
            </button>
            <button type="button" onclick="myFunction2()">Mul
            </button>
            <button type="button" onclick="myFunction3()">div
            </button>
            <button type="button" onclick="myFunction4()">pow
            </button>
            <script>
                function myFunction()
                {
                    var x= document.getElementById('n1').value
                    var y= document.getElementById('n2').value
                    document.getElementById('nn1').innerHTML=x;
                    document.getElementById('nn2').innerHTML=y;
    
                    var x1=Number(x);
                    var y1=Number(y);
                    document.getElementById('add').innerHTML=x1+y1;
                }
            </script>
            <script>
                function myFunction1()
                {
                    var x= document.getElementById('n1').value
                    var y= document.getElementById('n2').value
                    document.getElementById('nn1').innerHTML=x;
                    document.getElementById('nn2').innerHTML=y;
    
                    var x1=Number(x);
                    var y1=Number(y);
                    document.getElementById('sub').innerHTML= x1-y1;
                }
            </script>
             <script>
                function myFunction2()
                {
                    var x= document.getElementById('n1').value
                    var y= document.getElementById('n2').value
                    document.getElementById('nn1').innerHTML=x;
                    document.getElementById('nn2').innerHTML=y;
    
                    var x1=Number(x);
                    var y1=Number(y);
                    document.getElementById('mul').innerHTML= x1*y1;
                }
            </script>
            <script>
                function myFunction3()
                {
                    var x= document.getElementById('n1').value
                    var y= document.getElementById('n2').value
                    document.getElementById('nn1').innerHTML=x;
                    document.getElementById('nn2').innerHTML=y;
    
                    var x1=Number(x);
                    var y1=Number(y);
                    document.getElementById('div').innerHTML=x1/y1;
                }
            </script>
            <script>
                function myFunction4()
                {
                    var x= document.getElementById('n1').value
                    var y= document.getElementById('n2').value
                    document.getElementById('nn1').innerHTML=x;
                    document.getElementById('nn2').innerHTML=y;
    
                    var x1=Number(x);
                    var y1=Number(y);
                    document.getElementById('pow').innerHTML=Math.pow(x1,y1)
                }
            </script>