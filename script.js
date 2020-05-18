    // //jquery grid drawing    
    // const rows = 8;
    // const columns = 8;
    // const $row = $("<div />", {
    //     class: 'row'
    // });
    // const $square = $("<div />", {
    //     class: 'square'
    // });

    // $(document).ready(function () {
    //     //add columns to the the temp row object
    //     for (var i = 0; i < columns; i++) {
    //         $row.append($square.clone());
    //     }
    //     //clone the temp row object with the columns to the wrapper
    //     for (var i = 0; i < rows; i++) {
    //         $("#wrapper").append($row.clone());
    //     }
    // }); 
        
    //     //makes squares go pink
    //     $(function() {
    //         $('.square').hover(function() {
    //             $(this).css('background-color', 'RGB(238, 120, 120');
    //         }), 
    //         function() {

    //         }
    //     })
        //disco function
    //     $(function() {
    //         $('#disco').click(function() {
    //             $(".div").each(function(index) {
    //                 let colorR = Math.floor((Math.random() * 256));
    //                 let colorG = Math.floor((Math.random() * 256));
    //                 let colorB = Math.floor((Math.random() * 256));
    //     $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    //     });
    // });
    // });


function createGrid() {
    document.getElementById('container').innerHTML = "";
    let numberOfRows = prompt("Enter a number");
    if (isNaN(numberOfRows)) {
        alert("That's not a number. Please try again!")
    } else {
    console.log(numberOfRows);
    for (let i=0; i < numberOfRows; i++) {
        let divRow = document.createElement("div");
        document.getElementById('container').appendChild(divRow);
    for(let y=0; y < numberOfRows; y++) {
        let divCol = document.createElement('div');
        
            divCol.addEventListener("mouseenter", function() {
                function generateRandomColor()
            {
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return randomColor;
        }
        this.style.backgroundColor = generateRandomColor();
            });
            divRow.appendChild(divCol);
    }}
    }
    
}

function resetColorOfBoxes() {
    boxes = document.querySelectorAll('div');
    boxes.forEach(box => box.style.backgroundColor = "transparent");
  }
