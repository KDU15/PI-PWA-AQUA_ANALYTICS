function NavegacaoPorPaginas(a){
    window.location.href = a;
};

function AbrirPesquisa(){
    if($(".leaflet-control-geocoder"). hasClass("leaflet-control-geocoder-expanded")){
        $(".leaflet-control-geocoder").removeClass("leaflet-control-geocoder-expanded");
    }
    else{
        $(".leaflet-control-geocoder").addClass("leaflet-control-geocoder-expanded");
    }
};

// Camera

function getUserMedia(constraints) {
  // if Promise-based API is available, use it
  if (navigator.mediaDevices) {
    return navigator.mediaDevices.getUserMedia(constraints);
  }
    
  // otherwise try falling back to old, possibly prefixed API...
  var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
  if (legacyApi) {
    // ...and promisify it
    return new Promise(function (resolve, reject) {
      legacyApi.bind(navigator)(constraints, resolve, reject);
    });
  }
}

function getStream (type) {
  if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
    !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
    alert('User Media API not supported.');
    return;
  }

  var constraints = {};
  constraints[type] = true;
  
  getUserMedia(constraints)
    .then(function (stream) {
      var mediaControl = document.querySelector(type);
      
      if ('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
      } else if (navigator.mozGetUserMedia) {
        mediaControl.mozSrcObject = stream;
      } else {
        mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
      }
      
      mediaControl.play();
    })
    .catch(function (err) {
      alert('Error: ' + err);
    });
}


// MODAL

var modal = document.getElementById("Modal");

var btn = document.getElementById("AbrirModal");

var span = document.getElementById("FecharModal");

btn.onclick = function() {
  modal.style.display = "flex";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("Modal2");

var btn2 = document.getElementById("AbrirModal2");

var span2 = document.getElementById("FecharModal2");

btn2.onclick = function() {
  modal2.style.display = "flex";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
};


// Grafico

var ctx = document.getElementById("ph-grafico");

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
        datasets: [
            {
                label: 'PH',
                data: [5, 10, 8, 14, 6, 10, 15, 9, 12, 20, 11, 10],
                borderWidth: 2,
                borderColor: 'rgba(109, 144, 92)',
                backgroundColor: 'transparent'
            }
        ]
    }
});

var rtx = document.getElementById("temp-grafico");

var myLineChart2 = new Chart(rtx, {
    type: 'line',
    data: {
        labels: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
        datasets: [
            {
                label: 'TEMPERATURA',
                data: [27, 30, 28, 24, 26, 32, 25, 29, 22, 24, 23, 25],
                borderWidth: 2,
                borderColor: 'rgba(109, 144, 92)',
                backgroundColor: 'transparent'
            }
        ]
    }
});

var gtx = document.getElementById("salin-grafico");

var myLineChart3 = new Chart(gtx, {
    type: 'line',
    data: {
        labels: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
        datasets: [
            {
                label: 'SALINIDADE',
                data: [15, 16, 14, 20, 26, 32, 25, 29, 32, 34, 40, 37],
                borderWidth: 2,
                borderColor: 'rgba(109, 144, 92)',
                backgroundColor: 'transparent'
            }
        ]
    }
});


// gerar grafico

var elements = document.getElementsByClassName("campo-grafico");

var btnGerar = document.getElementById("btnGerarGrafico");

btnGerar.onclick = function() {
  for (const element of elements) {
    element.style.display = 'flex';
  }
};
