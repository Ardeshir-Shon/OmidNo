/**
 * Created by user on 4/4/2017.
 */

function validateMail(str){
    var mail=String(str);
    var arr=mail.split("@");
    if (arr.constructor.toString("Array")>-1){
        if (arr.length!==2){
            return false;
        }
        else if (arr[1].split(".").constructor.toString(".")>-1){
            if (arr[1].split(".").length!==2){
                return false;
            }
        }
    }
    return true;
}
