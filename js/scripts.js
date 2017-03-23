(function ($) {

    if (!window.FileReader) return;
    var fileInput = document.querySelector("#fileInput"),      
        textarea = document.querySelector("#textarea");



    fileInput.onchange = function () {
        var file = this.files[0],
            reader = new FileReader();
        reader.onload = function (e) {
            var converter = new showdown.Converter(),
                output = this.result;
            textarea.innerHTML = converter.makeHtml(output);
            textarea.select();
        }
        reader.readAsBinaryString(file);
    }

})(jQuery);
