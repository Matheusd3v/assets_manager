import { ICollection } from "../../types";
import type { EChartsOption } from "echarts";
import { ReactECharts } from "../ReactECharts";

interface IChartProps {
  collections: ICollection[];
}

interface DataItem {
  name: string;
  value: [string, number];
}

export const Chart = ({ collections }: IChartProps) => {
  const handleChart = () => {
    return collections.map((collection) =>
      parseData(collection.date, collection.value)
    );
  };

  const parseData = (dateString: string, value: number): DataItem => {
    const date = new Date(dateString);
    return {
      name: date.toString(),
      value: [
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/"),
        value,
      ],
    };
  };

  const option: EChartsOption = {
    title: {
      text: "Valor coleta x Data",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Chart",
        type: "line",
        showSymbol: false,
        data: handleChart(),
        smooth: true
      },
    ],
  };

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
};
