$( document ).ready(function() {
	

	/* form validation for add part */
	var validation = {

		onBlur: function ( el ) {
			var $el = $(el);  // cache jquery element for speed
			if (el.value !== "" && $el.hasClass('invalid') ) {
				$el.removeClass ('invalid');
				$el.siblings( ".alert-error" ).css ('display', 'none');
				return true;
			} else {
				$el.addClass ('invalid');
				$el.siblings( ".alert-error" ).css ('display', 'block');
				return false;
			}	
		}

	}

	$('form .required').on ('blur', function ( e ) {
		validation.onBlur ( e.target );
	})

	$('form #target').on ('click', function ( evt ) { // unfinished button		
		evt.preventDefault();
	})



	/* SIMPLE SETUP OF NAVIGATION CLASSES */

		$( ".submenu-list li a" ).each(function() {
		  var value = this.innerHTML;
		  var el = $(this);

		  if ( value.toLowerCase() === title.toLowerCase() ) {
		  		el.addClass ('active');
		  } else if ( el.hasClass ('active') ) {
		  		el.removeClass ('active');
		  }
		});


});