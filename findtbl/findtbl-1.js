class CommonGridElements
{
    constructor(commonElemStr)
        {
            alert("in CCE constructor");
            this.first = commonElemStr[0];
            this.second = commonElemStr[1];
            this.third = commonElemStr[2];           
            var i = 0;
            for( i = 0; i < commonElemStr.length; i++)
            {
                 alert(commonElemStr[i]);
            }
        }   
        
        
}
class SpecificGridElements extends CommonGridElements
{
    constructor(commonElemStr, specificElemStr)
    {
        alert("in SCE constructor");
        super(commonElemStr);
        this.color1 = specificElemStr[0];
        this.color2 = specificElemStr[1];
        this.color3 = specificElemStr[0];   
        var i = 0;
        for( i = 0; i < specificElemStr.length; i++)
        {
             alert(specificElemStr[i]);
        }

    }
}

let area1 = new SpecificGridElements("abc", "rwb");

//===========================================================================
function FTpg1Run()
{
    //alert("FTpg1Run()");
    currentFindTblpage = 1;
    objNAVfindtblpg1.style.display = "flex";
    
     clkClassA();

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
        console.log(x.id);
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
