var masthead, 
    contents, 
    container,
    i,
    k; 
    
masthead =  document.getElementById("mhimg");

var slides = new Array();
  slides[0] = "./img/1.jpg";
  slides[1] = "./img/2.jpg";
  slides[2] = "./img/4.jpg";
  slides[3] = "./img/5.jpg";



function fadeout()
{
    masthead.style.opacity = 0;
    
}
i=0;
function runslides() 
{ 
    masthead.style.opacity = 1;

      if(i>3)  
          {
              i=0;
          }
    masthead.src = slides[i];
    i+=1;
    setTimeout("fadeout()",5000);
}

runslides();
setInterval("runslides()",6000); 



contents = [
    
    "<figure><img src='img/3.jpg' alt='Wind Power'></figure><figcaption>Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.The net effects on the environment are far less problematic than those of nonrenewable power sources.</figcaption>",
    
    "<figure><img src='img/4.jpg' alt='Water Fall'></figure><figcaption>water power is power derived from the energy of falling water or fast running water, which may be harnessed for useful purposes. Since ancient times, hydropower from many kinds of watermills has been used as a renewable energy source for irrigation and the operation of various mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance.</figcaption>",
    
    "<figure><img src='img/6.jpg' alt='Solar Panel'></figure><figcaption>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), or indirectly using concentrated solar power. Concentrated solar power systems use lenses or mirrors and tracking systems to focus a large area of sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic effect.</figcaption>",
    
];
container = document.querySelector(".container");

buttons = document.querySelectorAll(".btn");

window.onload = myload();

function myload()
{
    container.innerHTML = contents[0];
}
function handleclick(e)
{
    "use strict";
    
    if(e.target.innerHTML === "Wind Energy")
        {
            container.innerHTML = contents[0];            
        }
    if(e.target.innerHTML === "Water Power")
        {
            container.innerHTML = contents[1];
          
        }
    if(e.target.innerHTML === "Solar Power")
        {
            container.innerHTML = contents[2];
        }
        
    
          for(i=0;i<buttons.length;i++)
              {
                  if(buttons[i] === e.target)
                      {
                          e.target.setAttribute("id","active");
                          
                      }
                  else
                      {
                          buttons[i].removeAttribute("id");
                      }
              }
         
    
    }


for(k=0;k<buttons.length;k++)
    {
            buttons[k].addEventListener("click",handleclick,false);
      

    }

