<template>
  <div class="month">
    <el-tabs type="border-card" style="width: 100%;algin:center;">
      <!-- 图形界面 -->
      <el-tab-pane :label="items.name" v-for="(items,index) in list" :key="index">
        {{items.name}}
        <div :id="items.name" :style="{width: '1000px',height: '500px'}"></div>

        <!-- 数据分析表格 -->
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          border
          highlight-current-row
          hegihet="120px"
        >
          <el-table-column prop="max" label="最高" width="120" align="center"></el-table-column>
          <el-table-column prop="min" label="最低" width="120" align="center"></el-table-column>
          <el-table-column prop="median" label="中位数" width="120" align="center"></el-table-column>
          <el-table-column prop="mode" label="众数" width="120" align="center"></el-table-column>
          <el-table-column prop="variance" label="方差" width="120" align="center"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "空气温度"
        },
        {
          name: "空气湿度"
        },
        {
          name: "氧气浓度"
        },
        {
          name: "降雨量"
        },
        {
          name: "土壤温度"
        },
        {
          name: "土壤湿度"
        },
        {
          name: "风速"
        },
        {
          name: "风向"
        },
        {
          name: "大气压强"
        },
        {
          name: "光照强度"
        }
      ],
      tableData: [
        {
          max: "25",
          min: "23",
          median: "56",
          mode: "25",
          variance: "2.0"
        }
      ]
    };
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
    this.drawLine5();
    this.drawLine6();
    this.drawLine7();
    this.drawLine8();
    this.drawLine9();
    this.drawLine10();
  },
  methods: {
    // 空气温度
    drawLine() {
      var myChart = this.$echarts.init(document.getElementById("空气温度"));
      myChart.setOption({
        title: {
          text: "一个月内的气温变化"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "23",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [
              11,
              11,
              15,
              13,
              12,
              13,
              10,
              32,
              16,
              18,
              19,
              29,
              5,
              16,
              12,
              24,
              11,
              15,
              10,
              8,
              16,
              13,
              11,
              9,
              12,
              5,
              28,
              25,
              8,
              23
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气温",
            type: "line",
            data: [
              2,
              1,
              -2,
              2,
              5,
              3,
              2,
              0,
              5,
              2,
              6,
              -1,
              -2,
              2,
              3,
              4,
              -2,
              -4,
              3,
              5,
              0,
              -3,
              -2,
              1,
              2,
              2,
              -1,
              3,
              -4,
              5
            ],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    // 空气湿度
    drawLine2() {
      var myChart = this.$echarts.init(document.getElementById("空气湿度"));
      myChart.setOption({
        title: {
          text: "一个月内的空气湿度变化"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气湿", "最低气湿"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "最高气湿",
            type: "line",
            data: [
              11,
              11,
              15,
              13,
              12,
              13,
              10,
              32,
              16,
              18,
              19,
              29,
              5,
              16,
              12,
              24,
              11,
              15,
              10,
              8,
              16,
              13,
              11,
              9,
              12,
              5,
              28,
              25,
              8,
              23
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气湿",
            type: "line",
            data: [
              2,
              1,
              -2,
              2,
              5,
              3,
              2,
              0,
              5,
              2,
              6,
              -1,
              -2,
              2,
              3,
              4,
              -2,
              -4,
              3,
              5,
              0,
              -3,
              -2,
              1,
              2,
              2,
              -1,
              3,
              -4,
              5
            ],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    // 氧气浓度
    drawLine3() {
      var myCharts = this.$echarts.init(document.getElementById("氧气浓度"));
      myCharts.setOption({
        xAxis: {
          scale: true
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            }
          }
        ],
        series: [
          {
            type: "effectScatter",
            symbolSize: 20
          },
          {
            type: "scatter",
            data: [
              [1, 62.7],
              [2, 86.3],
              [3, 66.4],
              [4, 67.3],
              [5, 63.0],
              [6, 73.6],
              [7, 62.3],
              [8, 57.7],
              [9, 55.4],
              [10, 104.1],
              [11, 55.5],
              [12, 61.4],
              [13, 55.5],
              [14, 63.6],
              [15, 60.9],
              [16, 60.0],
              [17, 46.8],
              [18, 57.3],
              [19, 64.1],
              [20, 63.6],
              [21, 67.3],
              [22, 75.5],
              [23, 68.2],
              [24, 61.4],
              [25, 76.8],
              [26, 71.8],
              [27, 55.5],
              [28, 48.6],
              [29, 66.4],
              [30, 67.3]
            ]
          }
        ]
      });
    },
    // 降雨量
    drawLine4() {
      var myChart = this.$echarts.init(document.getElementById("降雨量"));
      var colors = ["#5793f3", "#d14a61", "#675bba"];
      myChart.setOption({
        color: colors,
        title: {
          text: "两年内降雨量分布"
          // subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          data: ["2015 降水量", "2016 降水量"]
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    "降水量  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                }
              }
            },
            data: [
              "2016-1",
              "2016-2",
              "2016-3",
              "2016-4",
              "2016-5",
              "2016-6",
              "2016-7",
              "2016-8",
              "2016-9",
              "2016-10",
              "2016-11",
              "2016-12"
            ]
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    "降水量  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                }
              }
            },
            data: [
              "2015-1",
              "2015-2",
              "2015-3",
              "2015-4",
              "2015-5",
              "2015-6",
              "2015-7",
              "2015-8",
              "2015-9",
              "2015-10",
              "2015-11",
              "2015-12"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} mm"
            }
          }
        ],
        series: [
          {
            name: "2015 降水量",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "2016 降水量",
            type: "line",
            smooth: true,
            data: [
              3.9,
              5.9,
              11.1,
              18.7,
              48.3,
              69.2,
              231.6,
              46.6,
              55.4,
              18.4,
              10.3,
              0.7
            ]
          }
        ]
      });
    },
    // 土壤温度
    drawLine5() {
      var myChart = this.$echarts.init(document.getElementById("土壤温度"));
      myChart.setOption({
        title: {
          text: "一个月内的气温变化"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [
              11,
              11,
              15,
              13,
              12,
              13,
              10,
              32,
              16,
              18,
              19,
              29,
              5,
              16,
              12,
              24,
              11,
              15,
              10,
              8,
              16,
              13,
              11,
              9,
              12,
              5,
              28,
              25,
              8,
              23
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气温",
            type: "line",
            data: [
              2,
              1,
              -2,
              2,
              5,
              3,
              2,
              0,
              5,
              2,
              6,
              -1,
              -2,
              2,
              3,
              4,
              -2,
              -4,
              3,
              5,
              0,
              -3,
              -2,
              1,
              2,
              2,
              -1,
              3,
              -4,
              5
            ],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    // 土壤湿度
    drawLine6() {
      var myChart = this.$echarts.init(document.getElementById("土壤湿度"));
      myChart.setOption({
        title: {
          text: "一个月内的空气湿度变化"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气湿", "最低气湿"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} %RH"
            }
          }
        ],
        series: [
          {
            name: "最高气湿",
            type: "line",
            data: [
              11,
              11,
              15,
              13,
              12,
              13,
              10,
              32,
              16,
              18,
              19,
              29,
              5,
              16,
              12,
              24,
              11,
              15,
              10,
              8,
              16,
              13,
              11,
              9,
              12,
              5,
              28,
              25,
              8,
              23
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气湿",
            type: "line",
            data: [
              2,
              1,
              -2,
              2,
              5,
              3,
              2,
              0,
              5,
              2,
              6,
              -1,
              -2,
              2,
              3,
              4,
              -2,
              -4,
              3,
              5,
              0,
              -3,
              -2,
              1,
              2,
              2,
              -1,
              3,
              -4,
              5
            ],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    },
    // 风速
    drawLine7() {
      var myChart = this.$echarts.init(document.getElementById("风速"));
      myChart.setOption({
        title: {
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["25%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: "1" },
              { value: 5, name: "2" },
              { value: 15, name: "3" },
              { value: 25, name: "4" },
              { value: 20, name: "5" },
              { value: 35, name: "6" },
              { value: 30, name: "7" },
              { value: 40, name: "8" },
              { value: 25, name: "9" },
              { value: 24, name: "10" },
              { value: 4, name: "11" },
              { value: 14, name: "12" },
              { value: 40, name: "13" },
              { value: 4, name: "14" },
              { value: 25, name: "15" },
              { value: 28, name: "16" },
              { value: 38, name: "17" },
              { value: 28, name: "18" },
              { value: 24, name: "19" },
              { value: 14, name: "20" },
              { value: 24, name: "21" },
              { value: 34, name: "22" },
              { value: 9, name: "23" },
              { value: 18, name: "24" },
              { value: 7, name: "25" },
              { value: 6, name: "26" },
              { value: 15, name: "27" },
              { value: 4, name: "28" },
              { value: 34, name: "29" },
              { value: 24, name: "30" }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["75%", "50%"],
            roseType: "area",
            data: [
              { value: 10, name: "1" },
              { value: 5, name: "2" },
              { value: 15, name: "3" },
              { value: 25, name: "4" },
              { value: 20, name: "5" },
              { value: 35, name: "6" },
              { value: 30, name: "7" },
              { value: 40, name: "8" },
              { value: 25, name: "9" },
              { value: 24, name: "10" },
              { value: 4, name: "11" },
              { value: 14, name: "12" },
              { value: 40, name: "13" },
              { value: 4, name: "14" },
              { value: 25, name: "15" },
              { value: 28, name: "16" },
              { value: 38, name: "17" },
              { value: 28, name: "18" },
              { value: 24, name: "19" },
              { value: 14, name: "20" },
              { value: 24, name: "21" },
              { value: 34, name: "22" },
              { value: 9, name: "23" },
              { value: 18, name: "24" },
              { value: 7, name: "25" },
              { value: 6, name: "26" },
              { value: 15, name: "27" },
              { value: 4, name: "28" },
              { value: 34, name: "29" },
              { value: 24, name: "30" }
            ]
          }
        ]
      });
    },
    // 风向
    drawLine8() {
      var myChart = this.$echarts.init(document.getElementById("风向"));
      myChart.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["风向"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ]
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} °"
            }
          }
        ],
        series: [
          {
            name: "风向",
            type: "line",
            stack: "总量",
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              120,
              50,
              60,
              142,
              156,
              210,
              230,
              186,
              250,
              360,
              480,
              250,
              30,
              40,
              102,
              105,
              180,
              134,
              136,
              187,
              192,
              50,
              65
            ]
          }
        ]
      });
    },
    // 大气压强
    drawLine9() {
      var myChart = this.$echarts.init(document.getElementById("大气压强"));
      myChart.setOption({
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["大气压强"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              520,
              690,
              360,
              540,
              680,
              590,
              560,
              1500,
              1420,
              880,
              963,
              1100,
              590,
              1470,
              280,
              630,
              965,
              840,
              492,
              680,
              650,
              580,
              630
            ]
          }
        ]
      });
    },
    // 光照强度
    drawLine10() {
      var myChart = this.$echarts.init(document.getElementById("光照强度"));
      myChart.setOption({
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          left: "left",
          data: ["2的指数", "3的指数"]
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "log",
          name: "y"
        },
        series: [
          {
            name: "光照强度",
            type: "line",
            data: [
              1000,
              3000,
              2999,
              2777,
              2181,
              2247,
              1741,
              2223,
              6669,
              2250,
              3210,
              4200,
              3600,
              1900,
              3300,
              2500,
              2470,
              2610,
              3200,
              2597,
              2600,
              1968,
              1540,
              2900,
              2400,
              3600,
              6500,
              2890,
              2781,
              2630
            ]
          }
        ]
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>

<style scoped>
.standard {
  float: right;
  margin-top: -100px;
  width: 300px;
  height: 100px;
  border-radius: 2px;
  box-sizing: border-box;
  padding-top: 25px;
  box-shadow: 2px 2px 14px #06c;
}
/* 提示设置为标准区 */
.tip {
  font-size: 16px;
  font-weight: 700;
}
.el-table {
  margin-left: 250px;
  font-size: 18px;
  color: #3a2a2a;
  text-align: center;
}
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>