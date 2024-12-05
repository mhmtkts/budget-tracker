export const groupDataByMonth = (income, expenses) => {
    const months = {
      '0': 'Jan', '1': 'Feb', '2': 'Mar', '3': 'Apr',
      '4': 'May', '5': 'Jun', '6': 'Jul', '7': 'Aug',
      '8': 'Sep', '9': 'Oct', '10': 'Nov', '11': 'Dec'
    };
  
    // Boş ay şablonu oluştur
    const monthlyData = Array.from({ length: 12 }, (_, i) => ({
      month: months[i],
      income: 0,
      expense: 0,
      monthIndex: i
    }));
  
    // Gelirleri aylara göre topla
    income.forEach(item => {
      const date = new Date(item.date);
      const monthIndex = date.getMonth();
      monthlyData[monthIndex].income += Number(item.amount);
    });
  
    // Giderleri aylara göre topla
    expenses.forEach(item => {
      const date = new Date(item.date);
      const monthIndex = date.getMonth();
      monthlyData[monthIndex].expense += Number(item.amount);
    });
  
    return monthlyData;
  };