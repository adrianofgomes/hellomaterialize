function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    //document.addEventListener("pause", onPause, false);
    //document.addEventListener("resume", onResume, false);
    // Add similar listeners for other events
	
}

function init(){
  $(function(){

		$('.button-collapse').sideNav({
			//menuWidth: 300, // Default is 240
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
  
  }); // end of document ready
}

