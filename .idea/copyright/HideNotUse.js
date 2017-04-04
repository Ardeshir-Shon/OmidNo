/**
 * Created by user on 4/4/2017.
 */

function mangePanles(id){
    var ids=[1,2,3];
    var bool=true;
    if(document.getElementById(id).style.display=="none"){
        for (i in ids){
            if (i!=id){
                if (document.getElementById(i).style.display=="block"){
                    bool=false;
                }
            }
        }
        document.getElementById(id).style.display="block"; // show the icons
    }
}


