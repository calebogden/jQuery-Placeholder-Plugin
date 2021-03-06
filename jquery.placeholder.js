/*
 * jquery.placeholder.js
 * Copyright (c) 2011 Caleb Ogden LLC - http://calebogden.com
 * Licensed under the MIT license: http://caleb.mit-license.org
 */
(function( $ ){
	$.fn.placeholder = function(options) {
		
		var settings = {
		};
		
		return this.each(function() {
		
			if ( options ) {
				$.extend( settings, options );
			}
		
			var base = $(this);
			
			
			
			var wrap = $('<span class="ui-placeholder-wrap" />');
			var placeholder = $('<span class="ui-placeholder" />')
				.on("click.placeholder",function(){
					$(this).siblings('input').focus();
					$(this).parent().addClass('ui-placeholder-active');
				})
				.html(base.attr('placeholder'));
			base
				.attr("placeholder","")
				.wrap(wrap)
				.after(placeholder)
				.on("focus.placeholder focusout.placeholder",function(){
					if ($(this).val() == "") {
						$(this)
							.siblings('.ui-placeholder')
							.fadeIn('fast');
					}
					$(this)
						.parent()
						.toggleClass('ui-placeholder-active');
				})
				.on('keydown.placeholder', function(e){
					e.stopPropagation();
					setTimeout(function(){
					
					
					if (base.val() == "") {
					base
						.siblings('.ui-placeholder')
						.fadeIn(250);
					} else {
					base
						.siblings('.ui-placeholder')
						.hide();
					}
					
					},50);
				});
			
			if (base.val() !== "") {
				placeholder.hide();
			}
		
		
		});
	
	};
})( jQuery );