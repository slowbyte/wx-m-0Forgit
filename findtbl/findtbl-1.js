var area1;
var area2;
var area3;
var area4;
var area5;
var area6;
var boxObjsArray = [];
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
        this.SEArray = specificElemArray;
        this.title = specificElemArray[0];
        this.backgndcolor = specificElemArray[1];
        this.presentposition = specificElemArray[2];   
        this.ID = specificElemArray[3];
        this.pID = specificElemArray[4];
        //this.arrayOfBoxObjs = specificElemArray[5];
        
        //alert(typeof specificElemArray[5]);
       // alert(this.specificElemArray[5]);
        var elem = document.getElementById(this.ID);
        var elemTitle = document.getElementById(this.pID);
        elem.style.backgroundColor = this.backgndcolor; 
        elemTitle.innerHTML = this.title;        

        var i = 0;
        for( i = 0; i < specificElemArray.length; i++)
        {
           // alert("i = " + i + " / " + specificElemArray[i]);
        }     
       // this.setInitProperties();   
    }

    addareax(area)
    {
      // alert(area + " / " + typeof area);
      this.SEArray.push(area);
      this.createdObj = this.SEArray[5];
     // alert("createdObj = " + this.createdObj);
    }
    
    setInitProperties(id)
    {
        //CHANGE BKGROUND COLOR OF a2 obj
       // var newid = "a" + 2;
        var someBlock = document.getElementById(id);
        someBlock.style.backgroundColor = "gray";
        return someBlock;
        //console.log("In set properties");
        //alert(this.backgndcolor);
        //var elem = document.getElementById(ID);
        //elem.style.innerHTML = "HELLO";
    }

   rtnSEArray()
    {
        return this.SEArray;
    }

     morphUp(pastedspecificElemArray)                 //pastedposition, pastedPropertiesArray)
    {
       alert("in morph @ position =  " + this.presentposition) ;//+ pastedposition + "  /  " + pastedPropertiesArray);
       alert( "specificElemArray from the lower calling box = " +  pastedspecificElemArray);
       this.title = pastedspecificElemArray[0];  //?????
       this.backgroundColor = pastedspecificElemArray[1];  //?????????????
       
    }

    //moveUp(boxObjonehigher)
   // {
      //alert("pasted parameter = " + boxObjonehigher);
      //alert("in moveUp(),.....  present position = " +  this.presentposition);
      //boxObjonehigher.morph();
       //upOneposition =  this.presentposition -1;
       
       //alert(typeof arrayOfBoxObjs[upOneposition]);
      // arrayOfBoxObjs[upOneposition].morph();
      //var areax = "area" + position;
       //area1.morph(); //position, this.SEArray);

   // }

    returnTitle()
    {
        //alert("in fcn returnTitle()"  + " / " + this.SEArray );    
        return this.SEArray; 
    }

}

//==========================================================================

function FTpg1Run()
{
    //alert("FTpg1Run()");    
    currentFindTblpage = 1;
    objNAVfindtblpg1.style.display = "flex";
    
fatCreateButtons();

//=== create 6 objects from class code: each will hold properties of each Block boxes assigned to grid column locations
boxObjsArray = ["abc"];
var commonElem = ["a", "b", "c"];
var specificElem = ["Game Type", "aqua", 1, "a1", "title1" ] ;   //, boxObjsArray];
     area1 = new SpecificGridElements(commonElem, specificElem);
     boxObjsArray.push(area1);
     area1.addareax(area1);
var specificElem = ["Game Style", "red", 2, "a2", "title2"];   //, boxObjsArray];
     area2 = new SpecificGridElements(commonElem, specificElem);  
     boxObjsArray.push(area2);   
     area2.addareax(area2);  
var specificElem = ["Group Size", "rgb(171, 240, 171)", 3, "a3", "title3"];   //, boxObjsArray];
     area3 = new SpecificGridElements(commonElem, specificElem);
     boxObjsArray.push(area3);
     area3.addareax(area3);
var specificElem = ["When Available", "rgba(0 ,0 , 255, 0.438)", 4, "a4", "title4"];   //, boxObjsArray];
     area4 = new SpecificGridElements(commonElem, specificElem); 
     boxObjsArray.push(area4);
     area4.addareax(area4);
var specificElem = ["Hold 1", "purple", 5, "a5", "title5"];   //, boxObjsArray];
     area5 = new SpecificGridElements(commonElem, specificElem);
     boxObjsArray.push(area5);
     area5.addareax(area5);
var specificElem = ["Hold 2", "peru", 6, "a6", "title6"];    ///, boxObjsArray];
     area6 = new SpecificGridElements(commonElem, specificElem);  
     boxObjsArray.push(area6);
     area6.addareax(area6);    
    // alert(boxObjsArray);
}

function fatCreateButtons()
 {
     var i = 1;
     for(i = 1;  i <= 6; i++)   
     {
    buttonU = (document.createElement('input'));
    buttonU.type = "button";
    buttonU.name = 'fatUp';
    buttonU.className = "fatUP";
    buttonU.id = "fatUp" + i;
    //alert("but id = " + buttonU.id);
    buttonU.value = "  UP  ";
    buttonU.style.backgroundColor = "white"; 
    buttonU.style.width = "60px" ;
    buttonU.style.height = "25px";
    buttonU.style.marginTop = "5px";
    buttonU.style.marginLeft = "310px";
    buttonU.style.marginBottom = "10px";
    buttonU.addEventListener("click", fatEventUP);

    var idStr = "a" + i;
    //alert("idStr = " + idStr);
    var appendTo = document.getElementById(idStr);
    //alert("appendTo = " + appendTo);
    appendTo.appendChild(buttonU);

    //=============================
    buttonD = (document.createElement('input'));
    buttonD.type = "button";
    buttonD.name = 'fatDwn';
    buttonD.className = "fatDWN";
    buttonD.id = "fatDwn" + i;
    //alert("but id = " + buttonD.id);
    buttonD.value = " DOWN ";
    buttonD.style.backgroundColor = "white"; 
    buttonD.style.width = "60px" ;
    buttonD.style.height = "25px";
    buttonD.style.marginTop = "5px";
    buttonD.style.marginLeft = "310px";
    buttonD.style.marginBottom = "10px";
    buttonD.addEventListener("click", fatEventDWN);

    var idStr = "a" + i;
    //alert("idStr = " + idStr);
    var appendTo = document.getElementById(idStr);
    //alert("appendTo = " + appendTo);
    appendTo.appendChild(buttonD);
    }
  }
  
 
  function eventSpecificElem(id)
  {    
    //alert("in fcn eventSpecificElem");
      var rtn = "";   
      var idNum = parseInt(id[1]); 
      //alert(idNum);
      switch(idNum)
       {         
        case 1:
          rtn = area1.returnTitle();
          break;
        case 2:
          rtn = area2.returnTitle();
          break;
          case 3:
            rtn = area3.returnTitle();
          break;
        case 4:
            rtn = area4.returnTitle();
          break;
          case 5:
            rtn = area5.returnTitle();
          break;
        case 6:
            rtn = area6.returnTitle();
          break;

        default:
          alert("ERROR");
      }
      alert(rtn);
  }

  function fatEventUP()
  {  
    arrayIndex = parseInt(this.id[5],10);
    boxObjsArray[arrayIndex -1].morphUp(boxObjsArray[arrayIndex].rtnSEArray());
  }

  function fatEventDWN()
  {   
    var parentDiv = this.parentNode;
    var id = parentDiv.getAttribute("id");
      //alert("button parent id = " +id);
     alert("fatEventDWN clicked id? =  " + this.id );
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


