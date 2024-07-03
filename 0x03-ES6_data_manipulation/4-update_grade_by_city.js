export default function getStudentsByLocation(arrayofobj, city, newGrades) {
  if (!Array.isArray(arrayofobj)) {
    return [];
  }
  const list = arrayofobj.filter((element) => element.location === city);
  const updatedStudents = list.map((element) => {
    const matchingGrade = newGrades.find((g) => g.studentId === element.id);

    // If a matching grade is found, use the provided grade, otherwise set it to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Return the updated student object
    return { ...element, grade };
  });
  return updatedStudents;
}
