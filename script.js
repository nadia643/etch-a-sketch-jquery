    //work on grid size buttons
    // function Choice () {
    //     let eight = document.getElementById("number-button-eight");
    //     let ten = document.getElementById("ten");
    //     let twelve = document.getElementById("twelve");
    
    //     if (eight.clicked == true) {
    //         console.log("8");
    //     } else if (ten.clicked == true) {
    //         console.log("10");
    //     } else {
    //         console.log("12");
    //     };
    // };
    
    // Choice ();

    // $( "button" ).click(function firstClick () {
    // });

    // const firstClick = function() {
    //     const rows = 2;
    //     const columns = 2;
    //     const $row = $("<div />", {
    //         class: 'row'
    //     });
    //     const $square = $("<div />", {
    //         class: 'square'
    //     });
    
    //     $(document).ready(function () {
    //         //add columns to the the temp row object
    //         for (var i = 0; i < columns; i++) {
    //             $row.append($square.clone());
    //         }
    //         //clone the temp row object with the columns to the wrapper
    //         for (var i = 0; i < rows; i++) {
    //             $("#wrapper").append($row.clone());
    //         }
    //     });
        
    // }

    //switch statement for rows and columns
    // let allButtons = document.getElementsByTagName('button');

    // for (let i = 0; i < allButtons.length; i++) {
    //     allButtons[i].onclick = werewolfSituation;
    // }
    
    // function werewolfSituation(e) {

    // const moonPhase = this.innerHTML;
    // switch (moonPhase) {
    //     case "8x8": 
    //     let rows = 8;
    //     let columns = 8;
    //     const $row = $("<div />", {
    //         class: 'row'
    //     });
    //     const $square = $("<div />", {
    //         class: 'square'
    //     });
    
    //     $(document).ready(function () {
    //         //add columns to the the temp row object
    //         for (var i = 0; i < columns; i++) {
    //             $row.append($square.clone());
    //         }
    //         //clone the temp row object with the columns to the wrapper
    //         for (var i = 0; i < rows; i++) {
    //             $("#wrapper").append($row.clone());
    //         }
    //     }); 
    //     break;
    //     case "10x10": 
    //     let rows = 10;
    //     let columns = 10;
    //     const $row = $("<div />", {
    //         class: 'row'
    //     });
    //     const $square = $("<div />", {
    //         class: 'square'
    //     });
    
    //     $(document).ready(function () {
    //         //add columns to the the temp row object
    //         for (var i = 0; i < columns; i++) {
    //             $row.append($square.clone());
    //         }
    //         //clone the temp row object with the columns to the wrapper
    //         for (var i = 0; i < rows; i++) {
    //             $("#wrapper").append($row.clone());
    //         }
    //     }); 
    //     break;        
    //     case "12x12": 
    //     let rows = 12;
    //     let columns = 12;
    //     const $row = $("<div />", {
    //         class: 'row'
    //     });
    //     const $square = $("<div />", {
    //         class: 'square'
    //     });
    
    //     $(document).ready(function () {
    //         //add columns to the the temp row object
    //         for (var i = 0; i < columns; i++) {
    //             $row.append($square.clone());
    //         }
    //         //clone the temp row object with the columns to the wrapper
    //         for (var i = 0; i < rows; i++) {
    //             $("#wrapper").append($row.clone());
    //         }
    //     }); 
    //     break;

    // }
    // }
    //jquery grid drawing    
    const rows = 8;
    const columns = 8;
    const $row = $("<div />", {
        class: 'row'
    });
    const $square = $("<div />", {
        class: 'square'
    });

    $(document).ready(function () {
        //add columns to the the temp row object
        for (var i = 0; i < columns; i++) {
            $row.append($square.clone());
        }
        //clone the temp row object with the columns to the wrapper
        for (var i = 0; i < rows; i++) {
            $("#wrapper").append($row.clone());
        }
    }); 
        


        //makes squares go pink
        $(function() {
            $('.square').hover(function() {
                $(this).css('background-color', 'RGB(238, 120, 120');
            }), 
            function() {

            }
        })
        //disco function
        $(function() {
            $('#disco').click(function() {
                $(".square").each(function(index) {
                    let colorR = Math.floor((Math.random() * 256));
                    let colorG = Math.floor((Math.random() * 256));
                    let colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        });
    });
    });

    //makes dropdown show upon click
    function chooseGridSize() {
        const click = document.getElementById("drop-content");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    }