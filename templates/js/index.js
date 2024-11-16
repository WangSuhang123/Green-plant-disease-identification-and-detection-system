
//模块1
(function() {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "苹果黑星病",
          "葡萄黑腐病",
          "番茄叶斑病"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "缺陷数量",
        type: "bar",
        barWidth: "35%",
        data: [],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 获取数据并更新图表
  function getDataAndRefreshChart() {
    $.ajax({
      url: "/data",
      method: "GET",
      success: function(response) {
        console.log(response)
        option.series[0].data = [
          response.defect_count_num_apple,
          response.defect_count_num_grape,
          response.defect_count_num_tomato
        ];
        myChart.setOption(option);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  // 初始获取数据并刷新图表
  getDataAndRefreshChart();

})();
//模块2
(function() {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var data = {
    year: [
      [100,100,100,100,100,100,100,100,100,100],
      [100,100,100,100,100,100,100,100,100,100],
      [100,100,100,100,100,100,100,100,100,100]
    ]
  };
  var option = {
    color: ["#4c9bfd", "green","yellow"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      right: "10%",
      textStyle: {
        color: "#4c9bfd"
      }
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%"
      ],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "苹果黑星病",
        type: "line",
        smooth: true,
        data: data.year[0]
      },
      {
        name: "葡萄黑腐病",
        type: "line",
        smooth: true,
        data: data.year[1]
      },
      {name: "番茄叶斑病",
      type: "line",
      smooth: true,
      data: data.year[2]}
    ]
  };
  myChart.setOption(option);
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//模块3
(function() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  option = {
    grid: {
      top: "10%",
      left: "9%",
      bottom: "10%",
      right:'3%'
      },
    xAxis: {},
    yAxis: {},
    series: [
      {
        color:"yellow",
        symbolSize: 10,
        data: [
          [1, 0.29],
          [2, 0.18],
          [3, 0.24],
          [4, 0.20],
          [5, 0.21],
          [6, 0.17],
          [7, 0.16],
          [8, 0.18],
          [9, 0.25],
          [10, 0.30],
          [11, 0.12],
          [12, 0.18],
          [13,0.23],
          [14, 0.23],
          [15, 0.14],
          [16, 0.19],
          [17, 0.24],
          [18, 0.23],
          [19, 0.21],
          [20, 0.27],
          [21, 0.17],
          [22, 0.24]
        ],
        type: 'scatter',

      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//模块4
(function() {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  myChart.setOption(option);

})();
//模块5
(function() {

  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//模块6
(function() {
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right:"1%"
      },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积'],
        ['1', 43.3, 85.8, 93.7],
        ['2', 83.1, 73.4, 55.1],
        ['3', 86.4, 65.2, 82.5],
        ['4', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
