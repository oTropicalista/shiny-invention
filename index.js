console.log("VRpreter \nRodando...");

function convertCode() {
    var code = document.form.txt_in.value;
    var output = document.form_out.txt_out.value;

    output.value += code;
    
}