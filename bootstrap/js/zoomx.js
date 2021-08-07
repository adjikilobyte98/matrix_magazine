var currFFZoom = 1;
        var currIEZoom = 100;

        function plus(){
            //alert('sad');
                var step = 0.15;
                currFFZoom += step;
                $('body').css('MozTransform','scale(' + currFFZoom + ')');
                var stepie = 2;
                currIEZoom += stepie;
                $('body').css('zoom', ' ' + currIEZoom + '%');

        };
        function minus(){
            //alert('sad');
                var step = 0.15;
                currFFZoom -= step;
                $('body').css('MozTransform','scale(' + currFFZoom + ')');
                var stepie = 2;
                currIEZoom -= stepie;
                $('body').css('zoom', ' ' + currIEZoom + '%');
        };