const DataSource = () => {
    fetch('https://api.myquran.com/v1/sholat/jadwal/1301/2022/09/23')
  
    .then((response) => {
      return response.json();
    })
  
    .then(data => {
        console.log(data)
        document.getElementById("date").innerHTML = `<h5>${data.data.jadwal.tanggal}</h5>`;
        document.getElementById("imshak").innerHTML = `<h5>${data.data.jadwal.imsak}</h5>`;
        document.getElementById("subh").innerHTML = `<h5>${data.data.jadwal.subuh}</h5>`;
        document.getElementById("rise").innerHTML = `<h5>${data.data.jadwal.terbit}</h5>`;
        document.getElementById("duha").innerHTML = `<h5>${data.data.jadwal.dhuha}</h5>`;
        document.getElementById("dzuhr").innerHTML = `<h5>${data.data.jadwal.dzuhur}</h5>`;
        document.getElementById("ashr").innerHTML = `<h5>${data.data.jadwal.ashar}</h5>`;
        document.getElementById("magrhb").innerHTML = `<h5>${data.data.jadwal.maghrib}</h5>`;
        document.getElementById("isha").innerHTML = `<h5>${data.data.jadwal.isya}</h5>`;
    })
    .catch(error => {
        alert(error.message);
        console.log(error);
    })
  
  };
  		
		
  const getPosts = () => {
    fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Arti & Keterangan :</h2>';
        console.log(data);
        data.forEach((post) => {
          output += `
                  <div class="card card-body mb-3">
                  <h3>${post.nama}</h3>
                  <h5>${post.arti}</h5>
                  <h3>${post.type}</h3>
                  <h4>${post.asma}</h4>
                  <p>${post.keterangan}</p>
                  </div>
              `;
        });
        document.getElementById('output').innerHTML = output;
      })
  }
		
document.getElementById('getPosts').addEventListener('click', getPosts);

export default DataSource;