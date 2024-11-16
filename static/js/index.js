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
              "番茄叶斑病",
              "水水水水水",
              "sssssss"
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
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#04d2f6'
              }, {
                offset: 0.5, color: 'green'
              }, {
                offset: 1, color: 'yellow'
              }]),
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
        var dataType = "data"; // 默认数据类型
        var toggleButton = document.getElementById("toggleButton");
        toggleButton.addEventListener("click", function() {
          if (dataType === "data") {
            dataType = "realtime_data";
          }  else {
            dataType = "data";
          }
          fetchData();
        });

        function fetchData() {
          var url = "/" + dataType; // 根据当前数据类型生成url
          $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
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

        fetchData(); // 初始获取数据并刷新图表
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
document.addEventListener("DOMContentLoaded", function() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    grid: {
      top: "10%",
      left: "9%",
      bottom: "10%",
      right: "3%"
    },
    xAxis: {},
    yAxis: {
      type: 'value',
    },
    series: [
      {
        color: "yellow",
        symbolSize: 10,
        data: [],
        type: 'scatter',
      }
    ]
  };
  myChart.setOption(option);

  window.addEventListener("resize", function() {
    myChart.resize();
  });

  function getDataAndRefreshChart() {
    var dataType = "data"; // 默认数据类型
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      if (dataType === "data") {
        dataType = "realtime_data";
      }  else {
        dataType = "data";
      }
      fetchData();
    });

    function fetchData(){
      var url = "/" + dataType; // 根据当前数据类型生成url
      $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
              option.series[0].data = option.series[0].data = response.detection_time_all.map(function(time, index) {
                return [index + 1, time];
              });
              myChart.setOption(option);
            },
            error: function(error) {
              console.log(error);
            }
          });
        }

        fetchData(); // 初始获取数据并刷新图表
      }

  getDataAndRefreshChart();
});
//模块4
(function() {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right: "1%"
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积']
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
  function getDataAndRefreshChart() {
    var dataType = "data"; // 默认数据类型
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      if (dataType === "data") {
        dataType = "realtime_data";
      } else {
        dataType = "data";
      }
      fetchData();
    });

    function fetchData(){
      var url = "/" + dataType; // 根据当前数据类型生成url
      $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
        // 清空原有数据
        option.dataset.source = [
          ['product', '平均周长', '平均面积', '总面积']
        ];

        // 添加数据
        for (var i = 0; i < response.apple_data.length; i++) {
          option.dataset.source.push(response.apple_data[i]);
        }

        myChart.setOption(option);
      },
            error: function(error) {
              console.log(error);
            }
          });
        }

        fetchData(); // 初始获取数据并刷新图表
      }

  getDataAndRefreshChart();
})();
//模块5
(function() {
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right: "1%"
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积']
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
  function getDataAndRefreshChart() {
    var dataType = "data"; // 默认数据类型
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      if (dataType === "data") {
        dataType = "realtime_data";
      }  else {
        dataType = "data";
      }
      fetchData();
    });

    function fetchData(){
      var url = "/" + dataType; // 根据当前数据类型生成url
      $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
        // 清空原有数据
        option.dataset.source = [
          ['product', '平均周长', '平均面积', '总面积']
        ];

        // 添加数据
        for (var i = 0; i < response.apple_data.length; i++) {
          option.dataset.source.push(response.apple_data[i]);
        }

        myChart.setOption(option);
      },
            error: function(error) {
              console.log(error);
            }
          });
        }

        fetchData(); // 初始获取数据并刷新图表
      }

  getDataAndRefreshChart();
})();
//模块6
(function() {
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

  var option = {
    grid: {
      top: "15%",
      left: "8%",
      bottom: "10%",
      right: "1%"
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '平均周长', '平均面积', '总面积']
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

  function getDataAndRefreshChart() {
    var dataType = "data"; // 默认数据类型
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      if (dataType === "data") {
        dataType = "realtime_data";
      } else {
        dataType = "data";
      }
      fetchData();
    });

    function fetchData(){
      var url = "/" + dataType; // 根据当前数据类型生成url
      $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
        // 清空原有数据
        option.dataset.source = [
          ['product', '平均周长', '平均面积', '总面积']
        ];

        // 添加数据
        for (var i = 0; i < response.apple_data.length; i++) {
          option.dataset.source.push(response.apple_data[i]);
        }

        myChart.setOption(option);
      },
            error: function(error) {
              console.log(error);
            }
          });
        }

        fetchData(); // 初始获取数据并刷新图表
      }

  getDataAndRefreshChart();
})();
//数据展示
 $(document).ready(function() {
   var dataType = "data"; // 默认数据类型
    var toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", function() {
      if (dataType === "data") {
        dataType = "realtime_data";
      } else {
        dataType = "data";
      }
      fetchData();
    });
    function fetchData(){
      var url = "/" + dataType;
      $.ajax({
        url:url,
        method:"GET",
        success:function(response){
          $("#total-quantity").text(response.total_quantity.length);
          $("#displayed-quantity").text(response.total_quantity.length);
        },
        error: function(error) {
          console.log(error);
        }
      })
    }
        });
//刷新按钮
function refreshPage() {
  location.reload();
}