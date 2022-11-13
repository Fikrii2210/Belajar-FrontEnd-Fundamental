class AppBar extends HTMLElement {
  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <h2>Al-Qur'an & Jadwal Sholat Kota Jakarta</h2>
      `;
  }
}

customElements.define("app-bar", AppBar);
