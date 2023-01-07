

var time=new Date();
var today=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds();
var date=time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear();
document.getElementById('date').innerHTML=date;
document.getElementById('time').innerHTML=today;
function refresh()
{
    var time=new Date();
    var ap,hrs,min,sec,misec;
    hrs=time.getHours();
    min=time.getMinutes()
    sec=time.getSeconds()
    misec=time.getMilliseconds()
    if(hrs>12)
    {
        hrs-=12;
        ap="PM";
    }
    else
    {
        ap="AM";
    }
    if(min<10)
    "0"+min;
    
    var today=hrs+":"+min+":"+sec+":"+misec+":"+ap;
    document.getElementById('time').innerHTML=today;
    setTimeout(function(){refresh()},1)
        
    
}