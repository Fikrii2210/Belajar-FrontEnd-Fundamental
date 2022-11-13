
class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container">
                                    <p class="header-subtext text-gray mt-3 mb-5 text-justify">
                                    </p><h2 style="text-align: center;">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2><p>
                                    <p>Segala puji hanya milik Allah <em>Subhanahu wa Ta’ala</em> yang telah mengutus para Rasul, <a href="https://tafsirweb.com" data-wpel-link="external" target="_blank" rel="nofollow">menurunkan al-Qur-an</a>, membuat syari&#8217;at, menetapkan hukum, dan menjelaskan halal dan haram kepada hamba-hamba-Nya. Aku bersaksi bahwasa tidak ada ilah yang berhak diibadahi dengan benar kecuali Allah yang Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad <em>shallallahu ‘alaihi wa sallam </em>(صلى الله عليه و سلم) adalah hamba dan Rasul-Nya. Semoga shalawat dan salam dicurahkan kepada Nabi <em>shallallahu ‘alaihi wa sallam </em>(صلى الله عليه و سلم), keluarganya dan para Sahabatnya.</p><p>Semua kaum muslim sepakat bahwa sholat lima waktu harus dikerjakan pada waktunya, dalilnya adalah firman Allah <em>Subhanahu wa Ta’ala</em>,</p><h2 style="text-align: center;">إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا</h2><p>“Sesungguhnya shalat itu adalah fardhu/wajib yang ditentukan waktunya atas orang-orang yang beriman”. [ QS. An Nisa’ (4) : 103]</p>
                                    </p>
                                    <a href="https://muslim.or.id/626-agama-islam.html" target="_blank" class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-orange">Tentang ISLAM</h2>
                                    </a>
                                    <br>
                                    <h1>JADWAL SHOLAT</h1>
                                </div>
                                </div>
                            `;
    }
}

customElements.define('header-content',HeaderContent);