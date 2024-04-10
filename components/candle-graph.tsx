import { Box } from "@chakra-ui/react"
import { ColorType, createChart } from "lightweight-charts"
import { useCallback, useEffect, useRef, useState } from "react"

interface Data {
  time: string,
  open: number,
  high: number,
  low: number,
  close: number
}

export default function CandleGraph() {
  const chartRef = useRef(null)
  const [data, setData] = useState<Data[]>([])
  const [keys, setKeys] = useState<string[]>(["2000-01-01"])
  const [isLoading, setLoading] = useState(true)

  const fetcher = useCallback(async () => {
    if (isLoading) {
      const initialData = await require("@/data/market_data.json")["data"]
      if (initialData !== undefined) {
        setKeys(Object.keys(initialData))
        var data1: Data[] = []
        var data2: Data[] = []
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] != "2000-01-01") {
            data1.push({time: keys[i], open: initialData[keys[i]]["open"], high: initialData[keys[i]]["high"], low: initialData[keys[i]]["low"], close: initialData[keys[i]]["last_price"]})
          }
        }
        for (let i = 0; i < keys.length; i++) {
          data2.push(data1[keys.length - 1 - i])
        }
        setData(data2)
      }
    }
    if (data[0] !== undefined) {
      setLoading(false)
    }

  }, [keys, data])

  useEffect(() => {
    fetcher()
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
        height: 1000
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

      if (!isLoading) {
        candlestickSeries.setData(data)
      }

      chart.timeScale().fitContent()
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      }
    }
  }, [fetcher])
  
  return(
    <div ref={chartRef} id="candle"/>
  )
}