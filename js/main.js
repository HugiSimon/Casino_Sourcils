function getHash() {
    console.log(hash);
    var hash = document.getElementById("jeu").contentWindow.location.hash;
    var hashTab = [0];

    if(hash != "") {

        hashTab = hash.split(":");

        for(i=1; i <= 5 ;i++) {
            hashTab[i-1] = parseInt(hashTab[i]); 
        }

        delete hashTab[5];

        return hashTab;
    }
}

function afficHash() {
    var hashTab = getHash();
    console.log(hashTab);
    
    document.getElementById("vbucks").innerText = hashTab[4];
}

const interval = setInterval(function() {
    afficHash();
  }, 5000);
 
 clearInterval(interval);