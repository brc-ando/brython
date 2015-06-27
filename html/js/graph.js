



function setGraphData(aData, fData, graphname ) {

    var d1 = [[0.5, aData]];
    var d2 = [[1.5, fData]];
    var ymin = [0, 0, 0];
    var ymax = [2500, 300, 100];
    var gName = ["#costGraph", "#moneyGraph", "#ageGraph"];

    var data_list = [];
    data_list[data_list.length] = { label: "low", data: d2 };
    data_list[data_list.length] = {
        color: "#FFC0C0",
        data: d1,
        bars: {
            show: true
        },
        yaxis: 2,
        label: "low",
        clickable: "true",
        hoverable: "true",
        highlightColor: "#FF0000"
    };

    var ledgendholder = $("#ledgendholder");

    var options = {
        series: {
            // 折れ線グラフを表示
            bars: { show: true },
        },
        legend: {
            // 凡例の表示
            show: true,
            // フォーマッターをリンクに
            labelFormatter: function (label, series) {
                return '<a href="#' + label + '">' + label + '</a>';
            },
            // 凡例を右下に(containerの指定が優先される)
            position: "se",
            // 凡例のマージン(containerの指定が優先される)
            margin: [10, 50],
            // ボックスのボーダ色
            labelBoxBorderColor: "#666666",
            // 凡例の背景色
            backgroundColor: "#EEEEEE",
            // 凡例の透明度
            backgroundOpacity: 0.5,
            // 凡例を2つ横に並べる
            noColumns: 2,
            // 凡例を表示するコンテナ
            container: "#ledgendholder",
            // 並び順
            sorted: function (a, b) {
                return a.label == b.label ? 0 : (a.label > b.label ? 1 : -1)
            }
        },
        xaxis: {
            show: false,
            min: 0,
            max: 3,
            tickColor: "FF0000",
            color: "#0000FF",
            autoscaleMargin: 0.2,
            tickDecimals: 1,
            reserveSpace: true
        },
        yaxes: [
            { show: false, },
            // 2軸目を右側に描画
            {
                position: "right",
                min: ymin[graphname],
                max: ymax[graphname],
            }
        ]
    };

    $.plot(gName[graphname], data_list, options);
}

$(function () {

    // 初期データ取得（すべて空）
    var d1 = [[5, 103]];
    var d2 = [[12, 2.5]];
 
    setGraphData( 0, 0, 0);
    setGraphData(0, 0, 1);
    setGraphData(0, 0, 2);

    $("#actualAge").val(43);
    $("#actualStartAge").val(18);
    $("#price").val(430);
    $("#featureAverage").val(86);

    $("#btnFeatureCalc").click(
        function () {

            // テキストボックスを更新する
            // 余命
            var lifespan = ($("#priceFeatureAge").val()
                + (1 - $("#priceFeatureNum").val() * 5.5 / 60 / 24)
                * ($("#averageAge").val()) - $("#priceFeatureStartAge").val());
            // 時間
            var time = 4 * $("#priceFeatureNum").val() * 365 * lifespan;

            // タバコ代
            var numOfBox = 20;
            var totalMoney = $("#priceFeatureNum").val() * lifespan * 365 / numOfBox * $("#priceFeature").val();

            // 余命・・・・
            var alifespan = ($("#actualAge").val()
                + (1 - $("#actualNum").val() * 5.5 / 60 / 24)
                * ($("#averageAge").val()) - $("#actualStartAge").val());
            // 時間
            var atime = 4 * $("#actualNum").val() * 365 * lifespan;

            // タバコ代
            var anumOfBox = 20;
            var atotalMoney = $("#actualNum").val() * lifespan * 365 / numOfBox * $("#price").val();
            $("#yomei").text(parseInt(lifespan - alifespan));
            $("#jikan").text(parseInt(time - atime));
            $("#tabaco").text(parseInt(totalMoney - atotalMoney));

            // グラフ更新する
            setGraphData(atime, time, 0);
            setGraphData(atotalMoney, totalMoney / 250, 1);
            setGraphData(alifespan, lifespan / 300, 2);
        });

    $("#btnActualalc").click(
        function () {
            // テキストボックスを更新する
            // 余命
            var lifespan = ($("#priceFeatureAge").val()
                + (1 - $("#priceFeatureNum").val() * 5.5 / 60 / 24)
                * ($("#averageAge").val()) - $("#priceFeatureStartAge").val());
            // 時間
            var time = 4 * $("#priceFeatureNum").val() * 365 * lifespan;

            // タバコ代
            var numOfBox = 20;
            var totalMoney = $("#priceFeatureNum").val() * lifespan * 365 / numOfBox * $("#priceFeature").val();

            // 余命・・・・
            var alifespan = ($("#actualAge").val()
                + (1 - $("#actualNum").val() * 5.5 / 60 / 24)
                * ($("#averageAge").val()) - $("#actualStartAge").val());
            // 時間
            var atime = 4 * $("#actualNum").val() * 365 * lifespan;

            // タバコ代
            var anumOfBox = 20;
            var atotalMoney = $("#actualNum").val() * lifespan * 365 / numOfBox * $("#price").val();
            $("#yomei").text(parseInt( lifespan - alifespan ));
            $("#jikan").text(parseInt( time - atime));
            $("#tabaco").text(parseInt( totalMoney - atotalMoney));

            // グラフ更新する
            setGraphData(atime, time , 0);
            setGraphData(atotalMoney, totalMoney / 250, 1);
            setGraphData(alifespan, lifespan / 300, 2);
        });
});