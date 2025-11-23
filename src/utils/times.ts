export const getTime = () => {
  let message = '';
  // 通过内置构造函数Date获取当前时间
  const hours = new Date().getHours();
  if (hours <= 9) {
    message = '早上好';
  } else if (hours <= 12) {
    message = '上午好';
  } else if (hours <= 14) {
    message = '中午好';
  } else if (hours <= 17) {
    message = '下午好';
  } else if (hours <= 19) {
    message = '傍晚好';
  } else if (hours <= 21) {
    message = '晚上好';
  }
  return message;
};
