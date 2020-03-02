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

    $( "button" ).click(function() {
        console.log( "You clicked a button!" );
    });


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