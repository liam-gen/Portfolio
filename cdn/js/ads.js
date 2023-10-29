class LGJSAds extends HTMLElement {
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
        console.log(list)
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