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