
function showtime() {
    const time = document.getElementById("time");
    let date = new Date();
    date=date.toUTCString()
    now = date.substring(6,11)+", "+date.substring(14,17)+"| "+"09:58"+" AM"

    let data="hello"
    time.textContent =now;
  }
  showtime();

  function showtime2() {
    const time2 = document.getElementById("time2");
    let date2 = new Date();
    date2=date2.toUTCString()
    now2 = date2.substring(6,11)+", "+date2.substring(14,17)+"| "+"11:59"+" AM"
    time2.textContent =now2;
  }
  showtime2();


  let p_date=new Date()
  p_id=p_date.toISOString()
  a_id=p_id.substring(2,4)+p_id.substring(5,7)+p_id.substring(8,10)+"958KK3RVQ"

  function idgenerater(){
        let id=document.getElementById("p_id")
        id.textContent=a_id;
  }

  idgenerater()