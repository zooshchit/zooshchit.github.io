
/*
* jQuery easyShare plugin
*
* Licensed under GPL <http://en.wikipedia.org/wiki/GNU_General_Public_License>
* Copyright (c) 2008, Stephane Litou <contact@mushtitude.com>
* All rights reserved.
*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
		along with this program.  If not, see <http://www.gnu.org/licenses/>.
		The MIT License (MIT)

Copyright (c) 2014 Stephane Litou

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($) {
		  
	$.fn.easyPaginate = function(options){

		var defaults = {				
			step: 4,
			delay: 100,
			numeric: true,
			nextprev: true,
			auto:false,
			loop:false,
			pause:4000,
			clickstop:true,
			controls: 'pagination',
			current: 'current',
			randomstart: false
		}; 
		var w=$(window).width();
		var options = $.extend(defaults, options); 
		var step = 4;
		if (w<1230) {
			step=3
		}
		if (w<950) {
			step=2
		}
		if (w<650) {
			step=1
		}
		var lower, upper;
		var children = $(this).children();
		var count = children.length;
		var obj, next, prev;		
		var pages = Math.floor(count/step);
		var page = (options.randomstart) ? Math.floor(Math.random()*pages)+1 : 1;
		var timeout;
		var clicked = false;
		
		function show(){
			clearTimeout(timeout);
			lower = ((page-1) * step);
			upper = lower+step;
			$(children).each(function(i){
				var child = $(this);
				child.hide();
				if(i>=lower && i<upper){ setTimeout(function(){ child.fadeIn('fast') }, ( i-( Math.floor(i/step) * step) )*options.delay ); }
				if(options.nextprev){
					if(upper >= count) { next.fadeOut('fast'); } else { next.fadeIn('fast'); };
					if(lower >= 1) { prev.fadeIn('fast'); } else { prev.fadeOut('fast'); };
				};
			});	
			$('li','#'+ options.controls).removeClass(options.current);
			$('li[data-index="'+page+'"]','#'+ options.controls).addClass(options.current);
			
			if(options.auto){
				if(options.clickstop && clicked){}else{ timeout = setTimeout(auto,options.pause); };
			};
		};
		
		function auto(){
			if(options.loop) if(upper >= count){ page=0; show(); }
			if(upper < count){ page++; show(); }				
		};
		
		this.each(function(){ 
			
			obj = this;
			
			if(count>step){
								
				if((count/step) > pages) pages++;
				
				var ol = $('<ol id="'+ options.controls +'"></ol>').insertAfter(obj);
				
				if(options.nextprev){
					prev = $('<li class="prev">&#9668;</li>')
						.hide()
						.appendTo(ol)
						.click(function(){
							clicked = true;
							page--;
							show();
						});
				};
				
				if(options.numeric){
					for(var i=1;i<=pages;i++){
					$('<li data-index="'+ i +'">'+ i +'</li>')
						.appendTo(ol)
						.click(function(){	
							clicked = true;
							page = $(this).attr('data-index');
							show();
						});					
					};				
				};
				
				if(options.nextprev){
					next = $('<li class="next">&#9658;</li>')
						.hide()
						.appendTo(ol)
						.click(function(){
							clicked = true;			
							page++;
							show();
						});
				};
			
				show();
			};
		});	
		
	};	

})(jQuery);