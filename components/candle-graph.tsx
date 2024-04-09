import { Box } from "@chakra-ui/react"
import { ColorType, createChart } from "lightweight-charts"
import { useEffect, useRef } from "react"

interface Data {
  time: string,
  open: number,
  high: number,
  low: number,
  close: number
}

export default function CandleGraph() {
  const data1 = require("@/data/market_data.json")
  const initialData = data1["data"]
  const chartRef = useRef(null)

  const allKeys = Object.keys(initialData)
  var data: Data[] = []
  var data2: Data[] = []
  for (let i = 0; i < allKeys.length; i++) {
    data.push({time: allKeys[i], open: initialData[allKeys[i]]["open"], high: initialData[allKeys[i]]["high"], low: initialData[allKeys[i]]["low"], close: initialData[allKeys[i]]["last_price"]})
  }
  for (let i = 0; i < allKeys.length; i++) {
    data2.push(data[allKeys.length - 1 - i])
  }


  useEffect(() => {
    if (chartRef !== null) {
      const handleResize = () => {
        chart.applyOptions({ width: chartRef.current.clientWidth });
      }
      const chart = createChart(chartRef.current, {
        layout: {
          background: {type: ColorType.Solid, color: "#202C39"},
          textColor: "#EEE5E9"
        },
        grid: {
          vertLines: { color: '#444' },
          horzLines: { color: '#444' },
        },
        width: chartRef.current.clientWidth,
        height: 600
      })

      chart.priceScale("right").applyOptions({
        borderColor: '#89D2DC',
      });

      chart.timeScale().applyOptions({
          borderColor: '#89D2DC',
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a', downColor: '#ef5350', borderVisible: true,
        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
      });

      candlestickSeries.setData(data2)

      chart.timeScale().fitContent()
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      }
    }
  }, [])

  return(
    <div ref={chartRef} />
  )
}