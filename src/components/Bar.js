import React, { useRef, useLayoutEffect, useEffect } from 'react';

import { useData } from '@motor-js/engine';

// Configure any reguired theme
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
/* eslint-disable camelcase */
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const BarExampleCompact = () => {
  const colors = [
    '#B03060',
    '#FE9A76',
    '#FFD700',
    '#32CD32',
    '#016936',
    '#008080',
    '#0E6EB8',
    '#EE82EE',
    '#B413EC',
    '#FF1493',
    '#A52A2A',
    '#A0A0A0',
    '#000000',
  ];

  const cols = [
    {
      qField: '[RESTAURANT]',
      qLabel: 'Restaurant',
    },
    {
      qField: '=sum(BURGER_PRICE * SALES_QTY)',
      qLabel: 'Revenue',
      // useFormatting: true,
      // qNumType: "M",
      // qNumFmt: "£#,##0",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  const chart = useRef(null);

  useLayoutEffect(() => {
    const x = am4core.create('chartdiv', am4charts.XYChart);

    x.paddingRight = 20;

    x.data = data;

    const categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'Restaurant';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.title.text = 'Restaurant';
    categoryAxis.renderer.inside = true;

    const valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Revenue';
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'Restaurant';
    series.dataFields.valueY = 'Revenue';
    series.tooltipText = '{valueY.value}';
    series.columns.template.propertyFields.elemNumber = 'elemNumber';

    x.cursor = new am4charts.XYCursor();

    const columnTemplate = series.columns.template;

    columnTemplate.events.on(
      'hit',
      (ev) => {
        select(0, [ev.target.elemNumber], false);
      },
      this
    );

    columnTemplate.adapter.add('fill', (fill, target) => {
      return colors[target.dataItem.index];
    });

    columnTemplate.adapter.add('stroke', (stroke, target) => {
      return colors[target.dataItem.index];
    });

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  // Load data into chart
  useEffect(() => {
    if (chart.current) {
      chart.current.data = data;
    }
  }, [data]);

  return <div id="chartdiv" style={{ width: '75%', height: '300px' }}></div>;
};

export default BarExampleCompact;
