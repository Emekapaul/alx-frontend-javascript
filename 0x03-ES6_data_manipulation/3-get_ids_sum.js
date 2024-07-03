export default function getStudentIdsSum(arrayOfObj) {
  const initialValue = 0;

  // Check if the argument is an array
  if (!Array.isArray(arrayOfObj)) {
    return initialValue;
  }

  // Use the reduce function to sum the 'id' property of each object
  const sum = arrayOfObj.reduce((accumulator, student) => accumulator + student.id, initialValue);

  return sum;
}
