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

});