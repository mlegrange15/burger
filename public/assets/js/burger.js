$(document).ready(function () {
    $(".devour-button").on("click", function (event) {

        var burgerName = this.id;

        // Send the PUT request.
        $.ajax("/api/burgers/devour", {
            type: "PUT",
            data: {burger_name: burgerName},
        }).then(
            function () {
                console.log("Devoured: ", burgerName);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});