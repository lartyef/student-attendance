const form = document.querySelector('#form');
const attendanceList = document.querySelector('.attendance-display');

form.addEventListener('submit', function (event) {
   event.preventDefault();

   const studentName = document.getElementById('student_name').value;
   const  studentClass = document.getElementById('student-class').value;
   const seatNumber = document.getElementById('seat_number').value;

   const studentAttendance = {
       name: studentName,
       studentClass: studentClass,
       seat: seatNumber,
      
   };

   // Creating an <li> element to display the attendance information
   const listItem = document.createElement('li');
   listItem.textContent = `Student Name: ${studentName}, Seat Number: ${seatNumber}, Student Class: ${studentClass}`;
   
   // Creating buttons for marking attendance
   const presentButton = document.createElement('button');
   presentButton.textContent = 'Present';

   const absentButton = document.createElement('button');
   absentButton.textContent = 'Absent';

   // Attaching event listeners to the 'present' and 'absent' buttons
   presentButton.addEventListener('click', function () {
       presentButton.style.display = 'block';
       absentButton.style.display = 'none';
       studentAttendance.status = 'present';
   });
   absentButton.addEventListener('click', function () {
       presentButton.style.display = 'none';
       absentButton.style.display = 'block';
       studentAttendance.status = 'absent';
   });

   // Appending the buttons to the <li> element
   listItem.appendChild(presentButton);
   listItem.appendChild(absentButton);

   // Appending the <li> element to the attendance list
   attendanceList.appendChild(listItem);

   // Exploring local storage
   localStorage.setItem('attendanceRecord', JSON.stringify(studentAttendance));

   // Retrieving data from localStorage
   const storedData = JSON.parse(localStorage.getItem('attendanceRecord'));
});



