fetch('https://itunes.apple.com/lookup?id=1635469693&entity=song') 
// URL 요청
    .then(function (response) {
        return response.json(); 
        // 요청 시 요청 내용을 JSON 형식으로 반환하기 때문에, response.json()
    })
    .then((json) => {
        for (let i = 1; i < json["results"].length; i++) {
        // "results"의 0번 "trackName"이 존재하지 않기 때문에, let i = 1

            console.log(json["results"][i]["trackName"]);
            // "results"의 "trackName"에 접근
        }
    });

// fetch('https://itunes.apple.com/lookup?id=1635469693&entity=song')
//     .then(function (response) {
//         return response.json();
//     })
//     .then((json) => {
//         for (let i = 1; i < json["results"].length; i++) {
//             console.log(json["results"][i]["trackName"]);
//         }

//         function musicClick() {
//             var numberIndex = Math.floor(Math.random() * json["results"].length) + 1;
//             const mbody = document.querySelector("#modal-body");
//             let trs = ''
//             trs += `<h5>${json["results"][numberIndex]["trackName"]}</h5>`
//             mbody.innerHTML = trs;

//             var btnCopy = document.querySelector("#btnCopy");
//             btnCopy.addEventListener("click", () => {
//                 navigator.clipboard.writeText
//                     (json["results"][numberIndex]["trackName"]).then(
//                         () => { }
//                     );
//             })
//         }

//         var musicButton = document.querySelector("#music_button");
//         musicButton.addEventListener("click", musicClick);

//     });

    
