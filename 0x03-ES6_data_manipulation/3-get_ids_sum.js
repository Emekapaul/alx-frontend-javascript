export default function getStudentIdsSum(students) {
  return students.reduce((sumOfIds, currentValue) => sumOfIds + currentValue.id, 0);
}
