const click = document.getElementById("login");

let kirim = click.addEventListener("click", (e) => {
      e.preventDefault()
      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      if (user == "admin backend" && pass == "admin123") {
            alert("Login Berhasil")
            window.open("file:///D:/xampp/htdocs/web%20development/Project%20Akhir%20PemWeb/backend.html")
            window.location = "login.html"
      } else {
            alert("Login gagal")
      }
})