class CommonGridElements
{
    constructor(commonElemArray)
        {
           //alert("in CCE constructor");
            this.first = commonElemArray[0];
            this.second = commonElemArray[1];
            this.third = commonElemArray[2];           
            var i = 0;
            for( i = 0; i < commonElemArray.length; i++)
            {
                // alert(commonElemArray[i]);
            }
        }   
}
class SpecificGridElements extends CommonGridElements
{
    constructor(commonElemArray, specificElemArray)
    {
        super(commonElemArray);
        this.title = specificElemArray[0];
        this.backgndcolor = specificElemArray[1];
        this.presentposition = specificElemArray[2];   
        this.ID = specificElemArray[3];
        this.pID = specificElemArray[4];
        var elem = document.getElementById(this.ID);
        var elemTitle = document.getElementById(this.pID);
        elem.style.backgroundColor = this.backgndcolor; 
        elemTitle.innerHTML = this.title;        

        var i = 0;
        for( i = 0; i < specificElemArray.length; i++)
        {
            //alert(specificElemArray[i]);
        }     
        this.setInitProperties();   
    }
    
    setInitProperties()
    {
        //console.log("In set properties");
        alert(this.backgndcolor);
        //var elem = document.getElementById(ID);
        //elem.style.innerHTML = "HELLO";

    }

}

//===========================================================================
function FTpg1Run()
{
    //alert("FTpg1Run()");
    currentFindTblpage = 1;
    objNAVfindtblpg1.style.display = "flex";
    var commonElem = ["a", "b", "c"];
    var specificElem = ["Game Type", "aqua", 1, "a1", "title1"];
fatCreateButtons();
//document.getElementById("title").innerHTML = specificElem[0] + " " + specificElem[1] + " is " + specificElem[2];
//alert(specificElem[0] + " / " + specificElem[2] + " / " + specificElem[1]);

    let area1 = new SpecificGridElements(commonElem, specificElem);
    var specificElem = ["Game Style", "red", 2, "a2", "title2"];
    let area2 = new SpecificGridElements(commonElem, specificElem);
     //clkClassA();
  //

   //area1.setInitProperties();
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
    buttonU.style.height = "25px";
    buttonU.style.marginTop = "5px";
    buttonU.style.marginLeft = "310px";
    buttonU.style.marginBottom = "10px";
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
   buttonD.style.height = "25px";
   buttonD.style.marginTop = "0px";
   buttonD.style.marginLeft = "310px";
   buttonD.style.marginBottom = "10px";
   a1.appendChild(buttonD);
   buttonD.addEventListener("click", fatEventDWN);
   //=========================================================
   buttonU = (document.createElement('input'));
   buttonU.type = "button";
   buttonU.name = 'fatUp';
   buttonU.className = "fatUP";
   buttonU.id = "fatUp2";
   buttonU.value = "  UP  ";
   buttonU.style.backgroundColor = "white"; 
   buttonU.style.width = "60px" ;
   buttonU.style.height = "25px";
   buttonU.style.marginTop = "5px";
   buttonU.style.marginLeft = "310px";
   buttonU.style.marginBottom = "10px";
   a2.appendChild(buttonU);
   buttonU.addEventListener("click", fatEventUP);

  buttonD = (document.createElement('input'));
  buttonD.type = "button";
  buttonD.name = 'fatUp';
  buttonD.className = "fatDWN";
  buttonD.id = "fatDwn2";
  buttonD.value = "  DWN  ";
  buttonD.style.backgroundColor = "white"; 
  buttonD.style.width = "60px" ;
  buttonD.style.height = "25px";
  buttonD.style.marginTop = "0px";
  buttonD.style.marginLeft = "310px";
  buttonD.style.marginBottom = "10px";
  a2.appendChild(buttonD);
  buttonD.addEventListener("click", fatEventDWN);
   //==========================================================
   

  }
  
  function fatEventUP()
  {
      alert("fatEventUP clicked id =  " + this.id);
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
