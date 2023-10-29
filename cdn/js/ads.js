class LGJSAds extends HTMLImageElement {
    constructor() {
      super();
      this.ads = JSON.parse(this.httpGet("https://liamgenjs.vercel.app/cdn/ads/ads.json"))
      this.launchAds()
    }

    httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    launchAds(){
        let list = this.shuffleArray(this.ads)
        this.setAd(this.ads[this.ads.length - 1])
        for (const ad of Object.entries(list)) {
            setTimeout(() => {
                this.setAd(ad)
            }, 10000)
        }
    }

    setAd(ad){
        console.log(ad)

        this.onclick = function(){
            window.open(ad["url"]+"?utm_src=liamgenjs-ads&utm_medium=ads&utm_campaign="+ad["name"])
        }

        this.src = ad["path"]

        //this.innerHTML = `<img src="${ad["path"]}" title="Cliquez ici !">`
    }

    shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
}

customElements.define("lgjs-ad", LGJSAds);