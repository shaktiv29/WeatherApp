$(document).ready(() => {
    $(".app-input-city").on("change keyup paste", () => {
        $(".search-history").css('display', 'none');
    })
    let cityarr = localStorage.getItem('CITYHISTORIES');
    // console.log(cityarr)
    if (cityarr) {
        cityarr = JSON.parse(cityarr)
        let i = Object.keys(cityarr).length - 1;
        let count = 1;
        let cityhistory = ``
        while (count <= 3 && i >= 0) {
            cityhistory += `<li class="city-history" onclick=select(this)>` + cityarr[i] + `</li>`
            count += 1;
            i -= 1;
        }
        // console.log(cityhistory)
        $(".search-history").html(cityhistory);
    }
})

const select = (e) => {
    $(".app-input-city").val(e.textContent);
    $(".search-history").css('display', 'none');
    getTempratureData(e.textContent);
}