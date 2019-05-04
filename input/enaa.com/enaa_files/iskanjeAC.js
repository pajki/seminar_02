$(function () {

    function log(message) {
        alert(message);
        $("<div/>").text(message).prependTo("#log");
        $("#log").scrollTop(0);
    }

    $("#queryField").autocomplete({
        source: "/ajax/iskalnikAC.asp",
        minLength: 3,
        delay:600,
        select: function (event, ui) {

            $("#queryField").val(ui.item.label);
             if ($('#queryField').val().length>0){  
              window.location.assign('/search.asp?q=' +encodeURIComponent( $('#queryField').val().replace(/[^A-Za-z0-9 ŠČŽĆĐščžćđ\-\_\,\#\.]+/g, ' ')) + '&i=0&s=0&d=asc' );
              }
              

          //  $("#Form2").submit();
            //log(ui.item ?
            //			"Selected: " + ui.item.value + " aka " + ui.item.id :
            //				"Nothing selected, input was " + this.value);
        }
    });
});