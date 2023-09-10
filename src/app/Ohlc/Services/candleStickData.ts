import axios from 'axios';
import TimeCalculation from '@/app/Utils/TimeCalculation';
import { BASE_URL, TIMEFRAME } from '@/app/Utils/constants';

const candleStickData = async(selectedTime:string) => {
 try {
      const { start, end } = TimeCalculation(selectedTime);

      //different file for https req for axios
      const response = await axios.get(
        `${BASE_URL}/candles/trade:${TIMEFRAME[selectedTime]}:tBTCUSD/hist?start=${start}&end=${end}&limit=500`,
        {
          headers: {
          },
        }
      );
      response.headers.append('Access-Control-Allow-Credentials', "true")
      response.headers.append('Access-Control-Allow-Origin', '*') 
      response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
      response.headers.append(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      )

      if (response.status === 200) {
        const data = response.data.map((candle: number[]) => {
          //remove slice
          const [open, close, high, low] = candle.slice(1, 5);
          return {
              x: candle[0],
              y: [open, high, low, close],
            };
        });
        return {data,error:false}
      }
    }
    catch (error) {
      return {data:null,error}
    }
    return {data:null,error:null}
}

export default candleStickData