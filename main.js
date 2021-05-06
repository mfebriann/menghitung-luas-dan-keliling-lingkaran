// Menghitung luas lingkaran jari-jari
// rumus: pi * r * r
function luasJariJari(a) {
  return (22 / 7) * a * a;
}

const inputLJ = document.getElementById("luasJ");
document.getElementById("btnLJ").addEventListener("click", (e) => {
  if (inputLJ.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputLJ.value != 7 && inputLJ.value % 7 != 0) {
    alert("Isi nilai dengan kelipatan 7!");
  } else if (inputLJ.value % 7 == 0) {
    document.getElementById("hasilLJ").value = luasJariJari(inputLJ.value);
  }
  e.preventDefault();
});

// Menghitung Keliling Lingkaran jari-jari
// rumus: pi * 2 * r
function kelilingJariJari(c) {
  return (22 / 7) * 2 * c;
}

const inputKJ = document.getElementById("kelilingJ");
document.getElementById("btnKJ").addEventListener("click", (e) => {
  if (inputKJ.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputKJ.value != 7 && inputKJ.value % 7 != 0) {
    alert("Isi nilai dengan kelipatan 7!");
  } else if (inputKJ.value % 7 == 0) {
    document.getElementById("hasilKJ").value = kelilingJariJari(inputKJ.value);
  }
  e.preventDefault();
});

// Menghitung luas lingkaran diameter
// rumus: pi * (r / 2) * (r/2)
function luasDiameter(b) {
  return (22 / 7) * ((b / 2) * (b / 2));
}

const inputLD = document.getElementById("luasD");
document.getElementById("btnLD").addEventListener("click", (e) => {
  if (inputLD.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputLD.value != 7 && inputLD.value % 7 != 0) {
    alert("Isi nilai dengan kelipatan 7!");
  } else if (inputLD.value % 7 == 0) {
    document.getElementById("hasilLD").value = luasDiameter(inputLD.value);
  }
  e.preventDefault();
});

// Menghitung Keliling Lingkaran diameter
// rumus: pi * d
function kelilingDiameter(d) {
  return (22 / 7) * d;
}

const inputKD = document.getElementById("kelilingD");
document.getElementById("btnKD").addEventListener("click", (e) => {
  if (inputKD.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputKD.value != 7 && inputKD.value % 7 != 0) {
    alert("Isi nilai dengan kelipatan 7!");
  } else if (inputKD.value % 7 == 0) {
    document.getElementById("hasilKD").value = kelilingDiameter(inputKD.value);
  }
  e.preventDefault();
});

// ------------------- Dibawah ini khusus Pi 3,14 -----------------
// Menghitung luas lingkaran jari-jari
// rumus: pi * r * r
function luasJariJari2(e) {
  return 3.14 * e * e;
}
const inputLJ2 = document.getElementById("luasJ2");
document.getElementById("btnLJ2").addEventListener("click", (e) => {
  if (inputLJ2.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputLJ2.value % 7 == 0) {
    alert("Kelipatan 7 isi dibagian Pi: 22/7 ");
  } else {
    document.getElementById("hasilLJ2").value = luasJariJari2(inputLJ2.value);
  }
  e.preventDefault();
});

// Menghitung Keliling Lingkaran jari-jari
// rumus: pi * 2 * r
function kelilingJariJari2(f) {
  return 3.14 * 2 * f;
}

const inputKJ2 = document.getElementById("kelilingJ2");
document.getElementById("btnKJ2").addEventListener("click", (e) => {
  if (inputKJ2.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputKJ2.value % 7 == 0) {
    alert("Kelipatan 7 isi dibagian Pi: 22/7 ");
  } else {
    document.getElementById("hasilKJ2").value = kelilingJariJari2(inputKJ2.value);
  }
  e.preventDefault();
});

// Menghitung luas lingkaran diameter
// rumus: pi * (r / 2) * (r/2)
function luasDiameter2(g) {
  return 3.14 * ((g / 2) * (g / 2));
}

const inputLD2 = document.getElementById("luasD2");
document.getElementById("btnLD2").addEventListener("click", (e) => {
  if (inputLD2.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputLD2.value % 7 == 0) {
    alert("Kelipatan 7 isi dibagian Pi: 22/7 ");
  } else {
    document.getElementById("hasilLD2").value = luasDiameter2(inputLD2.value);
  }
  e.preventDefault();
});

// Menghitung Keliling Lingkaran diameter
// rumus: pi * d
function kelilingDiameter2(h) {
  return 3.14 * h;
}

const inputKD2 = document.getElementById("kelilingD2");
document.getElementById("btnKD2").addEventListener("click", (e) => {
  if (inputKD2.value == "") {
    alert("Isi nilai terlebih dahulu!");
  } else if (inputKD2.value % 7 == 0) {
    alert("Kelipatan 7 isi dibagian Pi: 22/7 ");
  } else {
    document.getElementById("hasilKD2").value = kelilingDiameter2(inputKD2.value);
  }
  e.preventDefault();
});
