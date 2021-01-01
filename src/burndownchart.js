function loadcsv(filepath) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', (event) => { 
        const resp = event.target.responseText; 
        console.log(resp);
        csv2array(resp)
    });
    req.open("GET", filepath, true);
    req.send();
}

function csv2array(csvStr) {
    const csvArray = [];
    csvStr = csvStr.replace(/\s+/g, "");
    var csvRow = csvStr.split('\n'); 
    for (let i = 0; i < csvRow.length; i++) { 
        csvArray[i] = csvRow[i].split(',');
    }
    console.log(csvArray);
}

loadcsv("/GithubBurnDownChart/burndownchart.csv")
var ctx = document.getElementById("burnDownChart");
var burnDownChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
        datasets: [{
                label: '理想線',
                data: [200, null, null, null, null, null, null, 0],
                borderColor: "rgba(255,0,0,1)",
                backgroundColor: "rgba(0,0,0,0)",
                spanGaps: true
            },
            {
                label: '計画線',
                data: [25, 27, 27, 25, 26, 27, 25, 21],
                borderColor: "rgba(0,0,255,1)",
                backgroundColor: "rgba(0,0,0,0)",
                spanGaps: true
            },
            {
                label: '実績線',
                data: [20, 10, 10, 10, 10, 10, 10, 10],
                borderColor: "rgba(0,255,0,1)",
                backgroundColor: "rgba(0,0,0,0)",
                spanGaps: true
            }
        ],
    },
    options: {
        title: {
            display: true,
            text: 'バーンダウンチャート'
        }
    }
});