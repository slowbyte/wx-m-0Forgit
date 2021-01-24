class CommonGridElements
{
    constructor(commonElemStr)
        {
           //alert("in CCE constructor");
            this.first = commonElemStr[0];
            this.second = commonElemStr[1];
            this.third = commonElemStr[2];           
            var i = 0;
            for( i = 0; i < commonElemStr.length; i++)
            {
                 //alert(commonElemStr[i]);
            }
        }   
}
class SpecificGridElements extends CommonGridElements
{
    constructor(commonElemStr, specificElemStr)
    {
        //alert("in SCE constructor");
        super(commonElemStr);
        this.color1 = specificElemStr[0];
        this.color2 = specificElemStr[1];
        this.color3 = specificElemStr[0];   
        var i = 0;
        for( i = 0; i < specificElemStr.length; i++)
        {
             //alert(specificElemStr[i]);
        }
    }
}

//===========================================================================
function FTpg1Run()
{
    //alert("FTpg1Run()");
    currentFindTblpage = 1;
    objNAVfindtblpg1.style.display = "flex";
    let area1 = new SpecificGridElements("abc", "rwb");
     //clkClassA();
     fatCreateButtons()


}

function fatCreateButtons()
   {
    //alert("cpp1nxtbtn_1");
    buttonU = (document.createElement('input'));
    buttonU.type = "button";
    buttonU.name = 'fatUp';
    buttonU.className = "fatUP";
    buttonU.id = "fatUp1";
    buttonU.value = "  UP  ";
    buttonU.style.backgroundColor = "white"; 
    buttonU.style.width = "60px" ;
    buttonU.style.height = "35px";
    buttonU.style.marginTop = "10px";
    buttonU.style.marginLeft = "310px";
    buttonU.style.marginBottom = "25px";
    a1.appendChild(buttonU);
    buttonU.addEventListener("click", fatEventUP);

   buttonD = (document.createElement('input'));
   buttonD.type = "button";
   buttonD.name = 'fatUp';
   buttonD.className = "fatDWN";
   buttonD.id = "fatDwn1";
   buttonD.value = "  DWN  ";
   buttonD.style.backgroundColor = "white"; 
   buttonD.style.width = "60px" ;
   buttonD.style.height = "35px";
   buttonD.style.marginTop = "0px";
   buttonD.style.marginLeft = "310px";
   buttonD.style.marginBottom = "10px";
    a1.appendChild(buttonD);
   buttonD.addEventListener("click", fatEventDWN);
  }
  
  function fatEventUP()
  {
      alert("fatUP clicked id =  " + this.id);
  }
  function fatEventDWN()
  {
    var parentDiv = this.parentNode;
   // alert(parentDiv);
    var id = parentDiv.getAttribute("id");
    alert("button parent id = " +id);
      alert("fatEventDWN clicked classname =  " + this.className );
  }




function clkClassA()
{
    //var z = document.getElementById("a1");
    /*var z = document.getElementById("a1");
    alert(z);
    z.addEventListener("click" , flexboxClked);
*/
   var elemsA =   document.getElementsByClassName("a");
   for (var x of elemsA)
    {
        console.log(x.id + " / " + x.className);
        //alert(x.className);
        //x.style.backgroundColor = "blue"; //WORKS OK...
        x.addEventListener("click", flexboxClked);
  }
}

function flexboxClked()
{
    console.log("clicked");
   // alert("flexbox clicked" + "/ " + this.id);
    this.style.backgroundColor = "white";
}
