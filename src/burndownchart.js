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
    var sprintArray = [];
    var closedLineArray = [];
    var idealLineArray = [];
    var estimatedLineArray = [];
    var actualLineArray = [];

    var csvRow = csvStr.split("\n"); 
    console.log(csvRow);
    for (let i = 0; i < csvRow.length; i++) { 
        var rowArray = csvRow[i].replace(/\s+/g, "").split(',');
        sprintArray[i]        = rowArray[0] === "" ?  null : rowArray[0];
        closedLineArray[i]    = rowArray[1] === "" ?  null : rowArray[1];
        actualLineArray[i]    = rowArray[2] === "" ?  null : rowArray[2];
        estimatedLineArray[i] = rowArray[3] === "" ?  null : rowArray[3];
        idealLineArray[i]     = rowArray[4] === "" ?  null : rowArray[4];
        
    }
    console.log(sprintArray);
    console.log(closedLineArray);
    console.log(idealLineArray);
    console.log(estimatedLineArray);
    console.log(actualLineArray);

    genChart(sprintArray, closedLineArray, idealLineArray, estimatedLineArray, actualLineArray);
}

function genChart(sprintArray, closedLineArray, idealLineArray, estimatedLineArray, actualLineArray){
    var ctx = document.getElementById("burnDownChart");
    var burnDownChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sprintArray.slice(1),
            datasets: [{
                    label: '理想線',
                    data: idealLineArray.slice(1),
                    borderColor: "rgba(255,0,0,1)",
                    backgroundColor: "rgba(0,0,0,0)",
                    spanGaps: true
                },
                {
                    label: '計画線',
                    data: estimatedLineArray.slice(1),
                    borderColor: "rgba(0,0,255,1)",
                    backgroundColor: "rgba(0,0,0,0)",
                    spanGaps: true
                },
                {
                    label: '実績線',
                    data: actualLineArray.slice(1),
                    borderColor: "rgba(0,255,0,1)",
                    backgroundColor: "rgba(0,0,0,0)",
                    spanGaps: false
                },
                {
                    label: '完了済み',
                    data: closedLineArray.slice(1),
                    borderColor: "rgba(255,255,0,1)",
                    backgroundColor: "rgba(0,0,0,0)",
                    spanGaps: false
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
}

loadcsv("/GithubBurnDownChart/burndownchart.csv")