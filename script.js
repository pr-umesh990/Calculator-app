let input = document.getElementById('inputBox');
//sare button ko select krne ke liye querySelectoreAll use kiya 
let buttons = document.querySelectorAll('button');

//ek empty string lete hai jisme result store kerenge or is input me dikhayenge
let string = "";

// ab hme sare button chiye hmare code me to in button ka 1 array bna lete hai,uske liye function Array.from use kaenge jisme Buttons variable pass krenge, ye hme sabhi buttons ka ek array bna ke dedega  jiska nam arr diya h.
let arr = Array.from(buttons);

// ab is array pe loop chala skta h, foreach loop chalayenge wo hamri buttons pe ni chlti, forEach loop array pe legegi to hmne buttons ka ek array bna liya. ispe forEach loop lgate h, ab ispe ek Aro funtion chalate hai.
// ab button pe eventListner lga diya 
// jb bhi button pr click krega  to us button ki value string me aa janai chiye
//ab yha if statement se check krenge ki jo button press ki hai wo equal(=) button h ya koi other keys hai.
// agr pressed button "=" h to evaluate function lga dege joki ek js me in build function h ,is eval function me hmari string pass kr denge. ab is string me ji bhi hoga wo eveluate ho jayega.
// ab jo bhi evaluated value dega us string ko input ki value me store kra denge. jisse solve string ki value input tag me show hogi 

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        // AC ke press krne pr input ki puri string delete ho jaye uske liye string ko empty set kr diya uske bad , input ki valur update kr di.
        else if(e.target.innerHTML == 'AC'){
            string=  "";
            input.value = string;
        }

        // DEL key press krne pe last digit delete krne k liye substring fnction ka use kiya jisme 0 se string.length-1 pass kiya

        else if(e.target.innerHTML ==  'DEL'){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }

        //"= " key k alwa jb koi other key press hogi tb un othe rkey ki value ko string me add krte jayenge or uske bad input value ko update kr denge.
        else{
            string +=e.target.innerHTML;
            input.value = string;
        }
    })
})
