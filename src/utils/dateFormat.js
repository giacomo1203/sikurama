export default function formatDate (date) {
  const arrDate = date.split('/');
  if (arrDate.length !== 3) return {};
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Oct',
    'Nov',
    'Dic',
  ];
  return {
    day: arrDate[0],
    month: months[parseInt(arrDate[1]) - 1],
  }
}