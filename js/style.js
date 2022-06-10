var elForm = document.querySelector("post-js");
var elInput = document.querySelector("input-js");
var elSelect = document.querySelector("select-js");
var elInfo = document.querySelector("js-info");


elForm.addEventListener("submit", function(e) {
            e.preventDefault();

            var elInputSum = elInput.value;
            var elSelectСurrency = elSelect.value;


            elResult.TextContent = elInputSum * elSelectСurrency;