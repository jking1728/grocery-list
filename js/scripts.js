$(document).ready(function() {
    $("form#blanks").submit(function(event) {
        debugger;
        event.preventDefault();
        var blanks = ["food1", "food2", "food3", "food3", "food4", "food5"];
    
        var groceries = blanks.map(function(input) {
            return $("input#" + input).val().toUpperCase();
           
        });
        var abcgroceries = groceries.sort();
        $("form#blanks").hide();
        
        
        abcgroceries.forEach(function(item) {
            $("ul#output-list").append("<li>" + item + "</li>");
        });

        // alert(groceries)
        

    });
});
