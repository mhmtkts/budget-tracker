import { format, parseISO, compareAsc, differenceInCalendarDays } from 'date-fns';

// Tarih formatı: yyyy-MM-dd
export const formatDate = (date) => format(parseISO(date), 'yyyy-MM-dd');

// İki tarih arasındaki farkı gün cinsinden hesaplama
export const getDateDifference = (startDate, endDate) => {
  const start = parseISO(startDate);
  const end = parseISO(endDate);
  return differenceInCalendarDays(end, start);
};

// İki tarih karşılaştırma (büyükten küçüğe)
export const compareDates = (date1, date2) => compareAsc(parseISO(date1), parseISO(date2));
