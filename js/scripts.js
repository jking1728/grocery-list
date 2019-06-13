$(document).ready(function() {
    $("form#blanks").submit(function(event) {
        debugger;
        event.preventDefault();
        var blanks = ["food1", "food2", "food3", "food3", "food4", "food5"];
    
        var groceries = blanks.map(function(input) {
            return $("input#" + input).val().toUpperCase();
           
        });
        var abcgroceries = groceries.map(function(item) {
            return groceries.sort();
        });
        $("form#blanks").hide();
        $("ul#output-list").text("<li>" + abcgroceries + "</li>");
        

        // alert(groceries)
        

    });
});
