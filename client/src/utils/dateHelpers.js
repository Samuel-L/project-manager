function appendOrdinalIndicator(date) {
  date = date.toString();

  switch (date.slice(-1)) {
    case '1':
      return `${date}st`;
    case '2':
      return `${date}nd`;
    case '3':
      return `${date}rd`;
    default:
      return `${date}th`;
  }
}

export default appendOrdinalIndicator;
