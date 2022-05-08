const students = [
    { 
      id: 1, 
      name: 'jose montoya', 
      qualifications: [
        { matter: 'html', value: 9, year: 2021 },
        { matter: 'computer science', value: 10, year: 2022 },
        { matter: 'git', value: 7, year: 2022 },
      ]
    },
    {
        id: 2, 
        name: 'victor reyes', 
        qualifications: [
            { matter: 'html', value: 6, year: 2021 },
            { matter: 'computer science', value: 10, year: 2021 },
            { matter: 'git', value: 9, year: 2021 }, // 1
        ]
    },
    { 
        id: 3, 
        name: 'victor torres', 
        qualifications: [
            { matter: 'html', value: 9, year: 2022 },
            { matter: 'computer science', value: 9, year: 2022 },
            { matter: 'git', value: 7, year: 2022 },
        ]
    },
    { 
        id: 4, 
        name: 'victor torres 2', 
        qualifications: [
            { matter: 'html', value: 9, year: 2021 },
            { matter: 'computer science', value: 9, year: 2021 },
            { matter: 'git', value: 8, year: 2021 }, // 2
        ]
    },
    { 
        id: 5, 
        name: 'victor torres 3', 
        qualifications: [
            { matter: 'html', value: 9, year: 2021 },
            { matter: 'computer science', value: 9, year: 2021 },
            { matter: 'git', value: 7.9, year: 2021 },
        ]
    },
    { 
        id: 5, 
        name: 'victor torres 4', 
        qualifications: [
            { matter: 'html', value: 9, year: 2020 },
            { matter: 'computer science', value: 9, year: 2020 },
            { matter: 'git', value: 7.9, year: 2020 },
        ]
    },
    { 
        id: 6, 
        name: 'victor torres 4', 
        qualifications: [
            { matter: 'html', value: 9, year: 2021 },
            { matter: 'computer science', value: 9, year: 2021 },
            { matter: 'git', value: 9, year: 2021 }, // 3
        ]
    }
];

// Imprimir todas las calificaciones de cada alumno
for (let i = 0; i < students.length; i++) { 
  const qualifications = students[i].qualifications;
  for (let j = 0; j < qualifications.length; j++) { 
    const qualification = qualifications[j]; 
    console.log('calificacion => ', qualification);
  }
}

// // Imprimir las calificaciones mayores a 9
for (let i = 0; i < students.length; i++) { 
const qualifications = students[i].qualifications;
    for (let j = 0; j < qualifications.length; j++) { 
        const qualification = qualifications[j]; 
        if (qualification.value > 9) {
            console.log('calificacion => ', qualification);
        }
    }
}

// // Mostrar el nombre de los estudiantes con 7 en la materia de git
for (let i = 0; i < students.length; i++) { 
    const student = students[i];
    const qualifications = student.qualifications;
    for (let j = 0; j < qualifications.length; j++) { 
        const qualification = qualifications[j]; 
        if (qualification.value === 7 && qualification.matter === 'git') {
          console.log('estudiante: ', student.name)
        }
    }
}

// Mostrar los alumnos que estudiaron git en el 2021 o el 2022 y obtuvieron entre 9 y 10 o un 8
for (let i = 0; i < students.length; i++) { 
    const student = students[i];
    const qualifications = student.qualifications;
    for (let j = 0; j < qualifications.length; j++) { 
        const qualification = qualifications[j]; 
        if ( 
          ((qualification.year === 2021 || qualification.year === 2022) && (qualification.matter === 'git')) 
          && ((qualification.value >= 9 && qualification.value <= 10) || (qualification.value === 8) ) 
        ) {
           console.log('student: ', student.name); 
        }
    }
}  
  