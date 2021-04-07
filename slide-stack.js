(function($) {
    
    var slide = function(ele,options) {
        var $ele = $(ele);
        $.extend(true, options);
        var states = [
   
            { $zIndex: 4, width: 160, height: 218, top: 31, left: 27, $opacity: 1 },
            { $zIndex: 3, width: 132, height: 173, top: 57, left: 199, $opacity: 0.7 },
            { $zIndex: 2, width: 93, height: 130, top: 78, left: 343, $opacity: 0.4 },
            { $zIndex: 1, width: 74, height: 107, top: 89, left: 351, $opacity: 0.2 }

        ];
        var states_two =[
            { $zIndex: 4, width: 201, height: 247, top: 0, left: 70, $opacity: 1.7 },
            { $zIndex: 3, width: 152, height: 201, top: 26, left: 296, $opacity: 1.7 },
            { $zIndex: 2, width: 122, height: 156, top: 53, left: 475, $opacity: 1.7 },
            { $zIndex: 1, width: 95, height: 131, top: 63, left: 488, $opacity: 1.7}
        ];
        var $lis = $ele.find('li');



        $ele.find('.hi-next').on('click', function() {
            next();
        });



        $(window).resize(function(){
            if($(window).width() <= "1920"){
                    $ele.find('.hi-prev').on('click', function() {
                        states_two.push(states_two.shift());
                        move();
                    });
                    
            }
            else if($(window).width() <= "768"){
                    $ele.find('.hi-prev').on('click', function() {
                        states.push(states.shift());
                        move();
                    });
            }
            // else if($(window).width() <= "768"){
            // }
            // else if($(window).width() <= "425"){
            // }

        })

        window.onresize = function() {
            if($(window).width() <= "1920"){
                    $ele.find('.hi-prev').on('click', function() {
                        states_two.push(states_two.shift());
                        move();
                    });
                    
            }
            else if($(window).width() <= "768"){
                    $ele.find('.hi-prev').on('click', function() {
                        states.push(states.shift());
                        move();
                    });
            }
            // else if($(window).width() <= "768"){
            // }
            // else if($(window).width() <= "425"){
            // }

        };

move();



        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states_two.push(states_two.shift());
            move();
        });
       
        move();
       
        function move() {
            $lis.each(function(index, element) {
                if($(window).width() <= "1920"){
                    var state = states_two[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state).find('img').css('opacity', state.$opacity);
                }
                else if($(window).width() <= "768"){
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state).find('img').css('opacity', state.$opacity);
                }
                //var state = states_two[index];
               // $(element).css('zIndex', state.$zIndex).finish().animate(state).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            if($(window).width() <= "1920"){
                states_two.unshift(states_two.pop());
            }
            else if($(window).width() <= "768"){
                states.unshift(states.pop());
            }
            //states_two.unshift(states_two.pop());
            move();
        }

        
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
