class LGJSAds extends HTMLElement {
    constructor() {
      super();
      this.ads = this.httpGet("https://liamgenjs.vercel.app/cdn/ads/ads.json")
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
        let id = Math.floor(Math.random() * this.ads)
        console.log(id)
        console.log(this.ads[id])
    }
}

customElements.define("lgjs-ad", LGJSAds);