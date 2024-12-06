// Grafik verilerini hazırlama
export const prepareChartData = (data, key) => {
    return data.map((item) => ({
      name: item.category,
      value: item[key],
    }));
  };
  