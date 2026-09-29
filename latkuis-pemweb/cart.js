        var productCard = document.getElementById("productCard");
        var btnBlack = document.getElementById("btnBlack");
        var btnBlue  = document.getElementById("btnBlue");
        var btnCream = document.getElementById("btnCream");

        btnBlack.onclick = function() {
            changeCardColor("#DDDDDD", btnBlack);
        };

        btnBlue.onclick = function() {
            changeCardColor("#CFE2FF", btnBlue);
        };

        btnCream.onclick = function() {
            changeCardColor("#F5E6CC", btnCream);
        };

        function changeCardColor(color, activeBtn) {

            productCard.style.backgroundColor = color;

            btnBlack.classList.remove("active");
            btnBlue.classList.remove("active");
            btnCream.classList.remove("active");
            activeBtn.classList.add("active");
        }

        function addToCart() {
            alert("Air Runner berhasil ditambahkan ke keranjang!");
        }