var id= localStorage.getItem('button');
var ref=db.collection('user').doc(id);
var name='';
var date='';
var vaccindate='';
var toilet='';
ref.get().then(function(doc) {
  if (doc.exists) {
      aadharno=doc.data().aadhaarno;
      date=doc.data().lastcheckupdate;
      vaccindate=doc.data().lastvaccinationdate;
  } else {
      console.log("No such document!");
  }
})

var param= {
  onend: afteraudio
}
var param2={
  onend: afteraudio2
}

var param3={
onend: afteraudio3
}

var param4={
onend: afteraudio4
}

var param5={
  onend: afteraudio5
}

var res='';

function saysomething1(){
  setTimeout(function(){
    responsiveVoice.speak('क्या आपका अंतिम चेकअप दिनांक' + date+'था है, हां के लिए एक और नहीं के लिए दो दबाएं','Hindi Female', param2);
  },300);
  res=res+'1';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}

function saysomething2(){
  setTimeout(function(){
    responsiveVoice.speak('क्या आपका अंतिम चेकअप दिनांक' + date+'था है, हां के लिए एक और नहीं के लिए दो दबाएं','Hindi Female', param2);
  },300)
  
  res=res+'2';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}

function saysomething3(){
  setTimeout(function(){
    responsiveVoice.speak('क्या आपकी अंतिम टीकाकरण तिथि'+ vaccindate+ 'थी,है, हां के लिए एक और नहीं के लिए दो दबाएं','Hindi Female',param3);
  },300);
  res=res+'1';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}


function saysomething4(){
  setTimeout(function(){
    responsiveVoice.speak('क्या आपकी अंतिम टीकाकरण तिथि'+ vaccindate+ 'थी,है, हां के लिए एक और नहीं के लिए दो दबाएं','Hindi Female',param3);
  },300);
  res=res+'2';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}

function saysomething5(){
  setTimeout(function(){
    var str='नहीं';
    if(toilet=='true'){
      str='';
    }
    responsiveVoice.speak('हमारे रिकॉर्ड के अनुसार आपके इलाके में शौचालय'+ str +'है, अगर यह सही है तो एक दबाएं अन्यथा दो दबाएं','Hindi Female',param3);
  },300);
  res=res+'1';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}


function saysomething6(){
  setTimeout(function(){
    var str='नहीं';
    if(toilet=='true'){
      str='';
    }
    responsiveVoice.speak('हमारे रिकॉर्ड के अनुसार आपके इलाके में शौचालय'+ str +'है, अगर यह सही है तो एक दबाएं अन्यथा दो दबाएं','Hindi Female',param3);
  },300);
  res=res+'2';
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}


function saysomething7(){
  setTimeout(function(){
    responsiveVoice.speak('உங்கள் மதிப்புமிக்க நேரத்திற்கு நன்றி','Hindi Female',param4);
  },300);
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}

function saysomething8(){
  setTimeout(function(){
    responsiveVoice.speak('உங்கள் மதிப்புமிக்க நேரத்திற்கு நன்றி','Hindi Female',param4);
  },300);
  ref.get().then(function(doc) {
    if (doc.exists) {
        aadharno=doc.data().aadhaarno;
        date=doc.data().lastcheckupdate;
        vaccindate=doc.data().lastvaccinationdate;
    } else {
        console.log("No such document!");
    }
  })
}

function afteraudio(){
  console.log('called');
  document.getElementById("one").addEventListener('click',saysomething1);
  document.getElementById("two").addEventListener('click',saysomething2);
}

function afteraudio2(){
    document.getElementById("one").removeEventListener('click',saysomething1);
    document.getElementById("two").removeEventListener('click',saysomething2);
    document.getElementById("one").addEventListener('click',saysomething3);
    document.getElementById("two").addEventListener('click', saysomething4);
}

function afteraudio3(){
  document.getElementById("one").removeEventListener('click',saysomething3);
  document.getElementById("two").removeEventListener('click',saysomething4);
  document.getElementById("one").addEventListener('click',saysomething5);
  document.getElementById("two").addEventListener('click', saysomething6);
}

function afteraudio4(){
  document.getElementById("one").removeEventListener('click',saysomething5);
  document.getElementById("two").removeEventListener('click',saysomething6);
  document.getElementById("one").addEventListener('click',saysomething7);
  document.getElementById("two").addEventListener('click', saysomething8);
}
function afteraudio5(){
  document.getElementById("one").removeEventListener('click',saysomething7);
  document.getElementById("two").removeEventListener('click',saysomething8);
}





function start(){
    var audio= new Audio('audios/ring.mp3');
    audio.play();
    setTimeout(function(){
      responsiveVoice.speak('Welcome to our service, is your aadhar number'+ aadharno + 'if, yes press 1, else press 2','Hindi Female', param);
    },3000);
  }
start();


