function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session= hh >= 12 ? 'PM' : 'AM';
  
    if(hh === 0){
        hh = 12;     
    }
    if(hh > 12){
        hh = hh - 12;      
    }
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let timeH = hh ;
     let timeM =  mm ;
     let timeS = ss;
     let timeA =  session;

    document.getElementById("clockH").innerText = timeH; 
    document.getElementById("clockM").innerText = timeM; 
    document.getElementById("clockS").innerText = timeS; 
    document.getElementById("clockA").innerText = timeA; 
}   
setInterval(currentTime, 1000);
  

function MakeDive() {
    var newDate = new Date();
    var hour = newDate.getHours();
    var massages=document.getElementById("dynamicMsg");
    massages.setAttribute("class","massage")
    
    var dropDown1 = document.getElementById("wakeUpTime");
    var dropDown2 = document.getElementById("lunchTime");
    var dropDown3 = document.getElementById("napTime");

    var  invalue1=dropDown1.value
    var  invalue2=dropDown2.value
    var  invalue3=dropDown3.value

    var value11 = dropDown1.options[dropDown1.selectedIndex].text;
    var value22 = dropDown2.options[dropDown2.selectedIndex].text;
    var value33 = dropDown3.options[dropDown3.selectedIndex].text;

   if (invalue1>=0&&invalue2>=0&&invalue3>=0) { 
        massages.innerText="Wakeup time is "+value11+"\n"+"Lunch time is "+value22+"\n"+"Sleeping time is "+value33;
    }  
}

function dynamicTimeSet() {
    var newDate = new Date();
    var hour = newDate.getHours();

    var massages=document.getElementById("dynamicMsg");
    var dropDown1 = document.getElementById("wakeUpTime");
    var dropDown2 = document.getElementById("lunchTime");
    var dropDown3 = document.getElementById("napTime");

    var value1 = dropDown1.value;
    var value2 = dropDown2.value;
    var value3 = dropDown3.value;

    var value11 = dropDown1.options[dropDown1.selectedIndex].text;
    var value22 = dropDown2.options[dropDown2.selectedIndex].text;
    var value33 = dropDown3.options[dropDown3.selectedIndex].text;

    const img=document.getElementById("dynamic-text")
    const image = document.getElementById("myImageId");
  
        if (value1 != hour && value2 != hour && value3 != hour) {
        image.setAttribute("src", "image/d.jpeg");
        img.innerText="WELCOME"
        }
        if (value3 >= hour && value3 < hour + 1) { 
            image.setAttribute("src", "./image/gn.jpg");
            img.innerText="Good Night"
        }
       if (value2 >= hour && value2 < hour + 1) { 
        image.setAttribute("src", "./image/lunch.jpg");
        img.innerText="Time for Lunch"
        }
        if (value1 >= hour && value1 < hour + 1) { 
            image.setAttribute("src", "./image/wake1.jpg");
            img.innerText="Wake up Now"
        }
    MakeDive() 

}
