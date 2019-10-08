// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
$(document).ready(function() { //Specify a function to execute when the DOM is fully loaded

    var color_picker = $("#colorPicker"); //get color Picker input DOM

    function makeGrid(height, width) { // function to set hieght and width of grid, take height and width of grid as parameters

        $("#pixel_canvas").empty(); //empty table content each submit 
        for (var i = 0; i < height; i++) { // for loop to set height of grid and creat the table rows
            $("#pixel_canvas").append("<tr></tr>"); //add <tr> in the table each time of loop as the value of height
        }
        for (var x = 0; x < width; x++) { // for loop to set width of grid and creat the table cols
            $("tr").append("<td></td>"); //add <td> of <tr> of the table each time of loop as the value of width
            $("td").click(function() { //make each <td> clickable and change css background-color as colorPicker value is 
                $(this).css("background-color", color_picker.val());
            });
        }
    }

    var height_input = $("#input_height"); //get height input DOM
    var width_input = $("#input_width"); //get width input DOM

    $('input[type=submit]').click(function(e) { //click submit input do this function
        var h = height_input.val(); //get height input valu
        var w = width_input.val(); //get width input valu  
        makeGrid(h, w); //call makeGrid function above and send her the height and width of grid as argumentes
        e.preventDefault(); // function to prevent the default function of event of input with type submit 
    });

});