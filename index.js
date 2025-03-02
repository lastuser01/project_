

function showtime() {
  const time = document.getElementById("time");
    const time2 = document.getElementById("time2");
    
    let date = new Date();
    date=date.toString();
    
    let now = date.substring(8,10)+date.substring(3,7)+", "+date.substring(13,15)+" | "+"09:58"+" AM";
    let now2 = date.substring(8,10)+date.substring(3,7)+", "+date.substring(13,15)+" | "+"11:59"+" PM"
    
    time.textContent =now;
    time2.textContent =now2;
  }
  
  let date=new Date()
  let month=date.getMonth().toString().padStart(2,0)
  date=date.toString()
  let uid=date.substring(13,15)+month+date.substring(8,10)+"958KK3RVQ"
  
  function idgenerater(){
    let id=document.getElementById("p_id")
    id.textContent=uid;
  }
  
  idgenerater();
  showtime();