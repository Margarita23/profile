import $ from "jquery";
import 'slick-carousel';
import 'jquery-ui/ui/widgets/slider';

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: true
});

let langsBlock = document.getElementById("language__block");

langsBlock.addEventListener('click', function(event){
    this.classList.value = this.classList.value === "language__block" ? "language__block language__block--active" : "language__block";

    if(event.target.className === "language__item"){
        let langActive = langsBlock.getElementsByClassName("language__item language__item--active")[0];
        langActive.classList.remove("language__item--active");
        event.target.classList.add("language__item--active");
    }
});



function runAnime(){

    let timerId;
    const k = 10;

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createCircle(object, minIConst, maxIConst, minJConst, maxJConst, minI, maxI, minJ, maxJ, minRConst, maxRConst, minR, maxR, r, i, j, left, up) {
        let circle = {
            object: object,
            minIConst: minIConst,
            maxIConst: maxIConst,
            minJConst: minJConst,
            maxJConst: maxJConst,
            minI: minI,
            maxI: maxI,
            minJ: minJ,
            maxJ: maxJ,
            minRConst: minRConst,
            maxRConst: maxRConst,
            minR: minR,
            maxR: maxR,
            i: i,
            j: j,
            r: r,
            left: left,
            up: up,
        }
        return circle;
    }

    let runAnimetion = function() {
        
        let circle_1 = createCircle(document.querySelector("#circle_1"),
            210, 290, 10, 90,
            210, 290, 10, 90,
            10, 20, 10, 20,
            10, 290, 10, true, false
        ),

        circle_2 = createCircle(document.querySelector("#circle_2"),
            10, 90, 210, 290,
            10, 90, 210, 290,
            10, 20, 10, 20,
            10, 10, 210, false, false
        ),

        circle_3 = createCircle(document.querySelector("#circle_3"),
            210, 290, 210, 290,
            210, 290, 210, 290,
            10, 20, 10, 20,
            10, 250, 250, true, true
        ),
        circle_4 = createCircle(document.querySelector("#circle_4"),
            310, 390, 110, 190,
            310, 390, 110, 190,
            10, 20, 10, 20,
            10, 350, 150, false, false
        ),
        //*** any poligon
        circle_5 = createCircle(document.querySelector("#circle_5"),
            110, 190, 110, 190,
            110, 190, 110, 190,
            10, 20, 10, 20,
            10, 170, 170, false, true
        ),

        circle_6 = createCircle(document.querySelector("#circle_6"),
            410, 490, 10, 90,
            410, 490, 10, 90,
            10, 20, 10, 20,
            10, 440, 40, true, false
        ),

        circle_7 = createCircle(document.querySelector("#circle_7"),
            510, 590, 110, 190,
            510, 590, 110, 190,
            10, 20, 10, 20,
            10, 510, 180, false, false
        ),

        circle_8 = createCircle(document.querySelector("#circle_8"),
            410, 490, 210, 290,
            410, 490, 210, 290,
            10, 20, 10, 20,
            10, 410, 210, false, false
        ),

        circle_9 = createCircle(document.querySelector("#circle_9"),
            310, 390, 310, 390,
            310, 390, 310, 390,
            10, 20, 10, 20,
            10, 370, 370, true, false
        );

        timerId = setInterval(() => {
            circle_1 = mathMinIJMaxIJ(circle_1);
            circle_2 = mathMinIJMaxIJ(circle_2);
            circle_3 = mathMinIJMaxIJ(circle_3);
            circle_4 = mathMinIJMaxIJ(circle_4);
            circle_5 = mathMinIJMaxIJ(circle_5);
            circle_6 = mathMinIJMaxIJ(circle_6);
            circle_7 = mathMinIJMaxIJ(circle_7);
            circle_8 = mathMinIJMaxIJ(circle_8);
            circle_9 = mathMinIJMaxIJ(circle_9);

            runPoint(circle_1.object, circle_1.i, circle_1.j, circle_1.r);
            runPoint(circle_2.object, circle_2.i, circle_2.j, circle_2.r);
            runPoint(circle_3.object, circle_3.i, circle_3.j, circle_3.r);
            runPoint(circle_4.object, circle_4.i, circle_4.j, circle_4.r);
            
            runPoint(circle_5.object, circle_5.i, circle_5.j, circle_5.r);
            runPoint(circle_6.object, circle_6.i, circle_6.j, circle_6.r);

            runPoint(circle_7.object, circle_7.i, circle_7.j, circle_7.r);
            runPoint(circle_8.object, circle_8.i, circle_8.j, circle_8.r);
            runPoint(circle_9.object, circle_9.i, circle_9.j, circle_9.r);

            runLines(polygon_1, [[circle_1.i, circle_1.j], [circle_2.i, circle_2.j], [circle_3.i, circle_3.j], [circle_4.i, circle_4.j]]);
            runLines(polygon_2, [[circle_5.i, circle_5.j], [circle_2.i, circle_2.j], [circle_3.i, circle_3.j], [circle_4.i, circle_4.j]]);
            runLines(polygon_3, [[circle_1.i, circle_1.j], [circle_2.i, circle_2.j], [circle_3.i, circle_3.j], [circle_5.i, circle_5.j]]);
            runLines(polygon_4, [[circle_1.i, circle_1.j], [circle_6.i, circle_6.j], [circle_4.i, circle_4.j], [circle_3.i, circle_3.j]]);

            runLines(polygon_5, [[circle_6.i, circle_6.j], [circle_7.i, circle_7.j], [circle_8.i, circle_8.j], [circle_4.i, circle_4.j]]);
            runLines(polygon_6, [[circle_4.i, circle_4.j], [circle_6.i, circle_6.j], [circle_8.i, circle_8.j], [circle_9.i, circle_9.j]]);
            runLines(polygon_7, [[circle_2.i, circle_2.j], [circle_3.i, circle_3.j], [circle_8.i, circle_8.j], [circle_9.i, circle_9.j]]);
            runLines(polygon_8, [[circle_3.i, circle_3.j], [circle_4.i, circle_4.j], [circle_8.i, circle_8.j], [circle_9.i, circle_9.j]]);
            runLines(polygon_9, [[circle_4.i, circle_4.j], [circle_7.i, circle_7.j], [circle_8.i, circle_8.j]]);
        }, 16);
    }

    function mathMinIJMaxIJ(point){

        if(point.i < point.maxI && !point.left){
            point.i = point.i + 1/k;
        } else if(point.i > point.minI){
            point.left = true;
            point.i = point.i - 1/k;
        } else {
            point.left = false;
            point.maxI = parseInt(getRandomArbitrary(point.minIConst, point.maxIConst));
            // console.log("maxI = " + point.maxI);
        }
        //************************************* */
        if(point.j < point.maxJ && !point.up){
            point.j = point.j + 1/k;
        } else if(point.j > point.minJ){
            point.up = true;
            point.j = point.j - 1/k;
        } else {
            point.up = false;
            point.maxJ = parseInt(getRandomArbitrary(point.minJConst, point.maxJConst));
            // console.log("maxJ = " + point.maxJ);
        }

        if(!point.left && !point.up && point.r < point.maxRConst){
            point.r = point.r + 1/(k*10);
        } else if(point.r !== point.maxRConst && point.r > point.minRConst) {    
            point.r = point.r - 1/(k*10);            
        }

        return point;
    }

    let runPoint = function(point, limitX, limitY, r) {
        point.setAttribute("cx", limitX);
        point.setAttribute("cy", limitY);
        point.setAttribute("r", r);
    }

    let runLines = function(lines, pointsArray) {
        let lineCoord = "";
        for(let i = 0; i < pointsArray.length; i++){
            lineCoord = lineCoord + pointsArray[i][0] + "," + pointsArray[i][1] + " ";
        }

        lines.setAttribute("points", lineCoord);
    }

    runAnimetion();
}

runAnime();

console.log("animeee");