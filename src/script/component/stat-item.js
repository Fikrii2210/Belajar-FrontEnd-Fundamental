class StatItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set waktuItem(item){
        this.waktuItem = item;
        this.render()
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        div class="container">
        <div class="col-12 col-lg-4 my-3 my-lg-0">
        <div class="card-stat">
            <div class="date-text">
            <h5>Pembaruan terakhir: </h5>
            <h5>${this.waktuItem.data.jadwal.tanggal}</h5>
            <span id="date"></span>
            </div>

            <div class="card imsyak">
            <p>Positif </p>
            <p> ${this.waktuItem.data.jadwal.imsak}</p>
            <span id="imshak"></span>
            </div>

            <div class="card shubuh">
            <p>Dirawat </p>
            <p> ${this.waktuItem.data.jadwal.subuh}</p>
            <span id="subh"></span>
            </div>

            <div class="card terbit">
            <p>Sembuh </p>
            <p> ${this.waktuItem.data.jadwal.terbit}</p>
            <span id="rise"></span>
            </div>

            <div class="card dhuha">
            <p>Meninggal </p>
            <p> ${this.waktuItem.data.jadwal.dhuha}</p>
            <span id="duha"></span>
            </div>

            <div class="card dzuhur">
            <p>Meninggal </p>
            <p> ${this.waktuItem.data.jadwal.dzuhur}</p>
            <span id="dzuhr"></span>
            </div>

            <div class="card ashar">
            <p>Meninggal </p>
            <p> ${this.waktuItem.data.jadwal.ashar}</p>
            <span id="ashr"></span>
            </div>

            <div class="card maghrib">
            <p>Meninggal </p>
            <p> ${this.waktuItem.data.jadwal.maghrib}</p>
            <span id="maghrb"></span>
            </div>

            <div class="card isya">
            <p>Meninggal </p>
            <p> ${this.waktuItem.data.jadwal.isya}</p>
            <span id="isha"></span>
            </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define("stat-item", StatItem);
