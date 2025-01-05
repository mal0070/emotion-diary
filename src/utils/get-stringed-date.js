//input 태그는 Date()객체를 이해하지 못한다.
export const getStringedDate = (targetDate) => {
    // 날짜 => YYYY-MM-DD
    const year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();
  
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };