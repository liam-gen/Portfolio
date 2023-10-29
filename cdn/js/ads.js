class LGJSAds extends HTMLElement {
    constructor() {
      super();
      
    }

    connectedCallback() {
        this.ads = JSON.parse(this.httpGet("https://liamgenjs.vercel.app/cdn/ads/ads.json"))
        this.listAds = this.shuffleArray(this.ads)
        this.setAd(0)
    }

    setStyle(){
        this.style.width = "600px";
        this.style.height = "150px";
        this.style.borderRadius = "8px";
    }

    httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    setAd(index){
        let ad = this.listAds[index];
        this.innerHTML = `<a href="${ad["url"]}?utm_src=liamgenjs-ads&utm_medium=ads&utm_campaign=${ad["name"]}" target="_blank"><img onerror="this.src='https://liamgenjs.vercel.app/cdn/ads/loader.svg'" src="${ad["path"]}" title="Cliquez ici !"></a>`

        setTimeout(() => {
            if(index == this.listAds.length - 1){
                this.listAds = this.shuffleArray(this.ads)
                return this.setAd(0)
            }
            this.setAd(index + 1)
        }, 10000)
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