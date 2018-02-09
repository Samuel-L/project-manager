export default function priorityToString(priority) {
  switch (priority) {
    case 1:
      return 'NOT IMPORTANT';
    case 2:
      return 'IMPORANT';
    case 3:
      return 'VERY IMPORTANT';
    // no default
  }
  return null;
}
