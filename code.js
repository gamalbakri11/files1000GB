434343434
$(document).ready(function(){$(".panel").hide();$(".panel:first-child").show();$(".questionblock .button").click(function(){var questionBlock=$(this).parent();var self=this;questionBlock.hide();var last=questionBlock.data("last");if(last!="1")questionBlock.next().show();else{$(".prelander-progress.hide").removeClass("hide");var si=setInterval(function(){var pending=$(".prelander-progress .hide").first();if(!pending.length){clearInterval(si);$(".panel").hide();$(".prelander-progress").hide();$(self).parents(".panel").next(".panel").show()}else pending.removeClass("hide")},
         1500)}});$(".participate, #page1 .pic-wrap img").click(function(){$(".hero-line-sm").hide();$(".questionfield").show();$("#input1 .position-info, #input2 .position-info").show();$("html, body").animate({scrollTop:0},400)});if($("#modal-lang").length)$("#modal-lang").modal({escapeClose:false,clickClose:false,showClose:false});$(".warning-opener").click(function(){var warningAlert=$(this).parents(".header-warning");if(warningAlert.hasClass("opened"))warningAlert.removeClass("opened");else warningAlert.addClass("opened")});if(isCookieSet('c')){$(".panel").hide();$("#input1").show();}});
         
      </script>
      <script type="text/javascript">
         var c = getCookie('c') ? getCookie('c') : 0,
         		n = 300,
         		date = new Date(),
         		time = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
         		text = [ 'https://bit.ly/2WPIq6t', 'https://bit.ly/2WPIq6t', 'https://bit.ly/2WPIq6t', ], // random WhatsApp/sms text
         		t = setInterval( function() {
         			
         			$( "#countdown" ).text( n-- ), -1 == n && window.open( "#", "_self" ) & clearInterval( t )
         			
         		}, 1e3 );
         
         function fn1() {
         	
         	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
         		
         		window.open( "whatsapp://send?text=بيان عاجل من منظمة الصحة العالمية  🦠. نحن نقدم لك1000 جيجاالمنزلى مجانا وذلك من اجل مساعدتك على البقاء فى منزلك بامان برجاء اتباع الرابط الخاص بنا لتفعيل باقتك بنجاح 🌐 !  %0 D%0A " + text[ Math.floor( Math.random() * text.length ) ] + " ", "_self" );
         	   		
         		c++;
         		
         		setCookie('c', c, 2);
         		
         		ga( 'send', 'event', 'WhatsApp', '[' + c + '][ES] Buono' );
         		
         		if ( c > 1 ) {
         			
         			window.open( '#' );
         			
         		}
         		
         	} else {
         		
         		window.alert( 'يجب عليك المشاركة اولا لتلقي 1000 جيجا من الإنترنت مجاناً .' );
         		
         	}
         	
         }
         
         function fn2() {
         	
         	if ( c >= 5) {
         		
         		window.open( 'https://t.co/tmjDWOYXQM?amp=1' );
         		
         	} else {
         		
         window.alert( 'انت لم تقوم بدعوة اصدقائك على الواتس اب برجاء للحصول على1000 جيجاالان ان تقوم بدعوة 10 من اصدقائك على الواتس اب ' );
         		
         	}
         	
         }
         
         function fn3() {
         	
         	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ) {
         		
         		window.open( "sms:?body=Mira %0D%0A  " + text[ Math.floor( Math.random() * text.length ) ] + " %0D%0A %0D%0A" + time, "_self" );
         		
         		c++;
         		
         		setCookie('c', c, 2);
         		
         		ga( 'send', 'event', 'sms', '[' + c + '][ES] Buono' );
         		
         		if ( c > 0 ) {
         			
         			window.open( '#' );
         			
         		}
         		
         	} else {
         		
         		window.alert( 'يجب عليك المشاركة اولا لتلقي 1000 جيجا من الإنترنت مجاناً .' );
         		
         	}
         	
         }
         
         function setCookie(cname, cvalue, exdays) {
         	var d = new Date();
         	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
         	var expires = 'expires=' + d.toGMTString();
         	document.cookie = cname+'='+cvalue+'; '+expires;
         }
         
         function getCookie(cname) {
         	var name = cname+'=';
         	var ca = document.cookie.split(';');
         	for (var i = 0; i < ca.length; i++) {
         		var c = ca[i];
         		
         		while (c.charAt(0) == ' ') c = c.substring(1);
         		
         		if (c.indexOf(name) === 0) {
         			return c.substring(name.length, c.length);
         		}
         	}
         	
         	return '';
         }
         
         function isCookieSet(cname) {
         	var name = cname+'=';
         	var ca = document.cookie.split(';');
         	for (var i = 0; i < ca.length; i++) {
         		var c = ca[i];
         		
         		while (c.charAt(0) == ' ') c = c.substring(1);
         		
         		if (c.indexOf(name) === 0) {
         			return true;
         		}
         	}
         	
         	return false;
         }
