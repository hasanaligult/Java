var blokMatris = document.querySelectorAll(".blok");
		var sayac = 0;
		var Kartlar = [];
        var eslesenKartalar = [];

		blokMatris.forEach(Kart => {
			Kart.addEventListener("click", () => {
				if (Kartlar.length < 2) {
					if (!Kart.classList.contains("kontrol-blok")) {
						Kartlar[sayac] = Kart;
						eslesenKartalar[sayac] = Kart.firstElementChild.innerHTML;
						++sayac;
					}
					Kart.classList.add("kontrol-blok");
					Kart.firstElementChild.classList.add("kontrol-yazi");
					if (sayac === 2)
						setTimeout(karsilastirma, 1000);
				}
			});
		});

		var karsilastirma = () => {
			if (eslesenKartalar[0] !== eslesenKartalar[1]) {
				Kartlar[0].classList.remove("kontrol-blok");
				Kartlar[0].firstElementChild.classList.remove("kontrol-yazi");
				Kartlar[1].classList.remove("kontrol-blok");
				Kartlar[1].firstElementChild.classList.remove("kontrol-yazi");
				sayac = 0;
				Kartlar = [];
				eslesenKartalar = [];
			} else {
				sayac = 0;
				Kartlar = [];
				eslesenKartalar = [];
			}
		}