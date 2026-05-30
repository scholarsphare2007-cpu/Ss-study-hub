// Database of all resources. Easy to update anytime!
const resourcesData = [
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 2nd sem Syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1dCy4U9F4qlwwmiTGUz5Tz8fjtZOufbRd/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 2nd sem syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1-dU37HUpf8ZCSFD9z9XX99QYMh7grFpO/view?usp=drive_link"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "https://drive.google.com/file/d/1K15rmp37ZQQ-061KHdxQNbDC0W_zlVkL/view?usp=sharing"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 2nd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 2nd sem syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1VOUyhNjNCV0vM5FRaBklEgBqdzPhzFS5/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 2nd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 2nd sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 2nd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 1st sem Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 1st sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 1st sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 1st sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 1st sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 1st sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 1st sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 3rd sem Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 3rd sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 3rd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 3rd sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 3rd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 3rd sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 3rd sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 4th sem Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 4th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 4th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 4th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 4th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 4th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 4th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 5th sem Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 5th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 5th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 5th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 5th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 5th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 5th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 6th sem Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Mathematics", 
        type: "Notes",
        title: "Matrices & Calculus - Unit 1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Matrices & Calculus - Unit 4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "Physics 6th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Notes",
        title: "Physics Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Practical-Files",
        title: "Physics lab file 6th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 6th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Notes",
        title: "Chemistry Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 6th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Syllabus",
        title: "Zoology 6th sem syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-1",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-2",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-3",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Notes",
        title: "Zoology Notes unit-4",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Zoology",
        type: "Practical-Files",
        title: "Zoology lab file 6th sem",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "General English",
        type: "Notes",
        title: "General English Notes",
        link: "#"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26) ",
        link: "#" 
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes ",
        link: "#" 
    },
    {
    course: "B.A",
    semester: "2nd Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "History", 
    type: "Notes",
    title: "History of India (c. 300 CE to 1206) - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 300 CE to 1206) - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 300 CE to 1206) - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 300 CE to 1206) - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian National Movement & Constitution - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian National Movement & Constitution - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian National Movement & Constitution - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian National Movement & Constitution - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Human Geography - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Human Geography - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Human Geography - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Human Geography - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 2nd sem",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Macroeconomics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Macroeconomics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Macroeconomics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Macroeconomics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Hindi Kavita Aur Sahitya - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Hindi Kavita Aur Sahitya - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Prose and Fiction - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "2nd Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Prose and Fiction - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "History", 
    type: "Notes",
    title: "History of India (From Earliest Times to 300 CE) - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (From Earliest Times to 300 CE) - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (From Earliest Times to 300 CE) - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (From Earliest Times to 300 CE) - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Political Theory - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Political Theory - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Political Theory - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Political Theory - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Notes",
    title: "Physical Geography - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Notes",
    title: "Physical Geography - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Notes",
    title: "Physical Geography - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Notes",
    title: "Physical Geography - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 1st sem",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Economics",
    type: "Notes",
    title: "Microeconomics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Economics",
    type: "Notes",
    title: "Microeconomics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Economics",
    type: "Notes",
    title: "Microeconomics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Economics",
    type: "Notes",
    title: "Microeconomics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Adikaal aur Bhaktikaal Kavya - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Adikaal aur Bhaktikaal Kavya - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Poetry and Drama - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "1st Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Poetry and Drama - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "History", 
    type: "Notes",
    title: "History of India (c. 1206 to 1707) - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1206 to 1707) - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1206 to 1707) - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1206 to 1707) - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Western Political Thought - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Western Political Thought - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Western Political Thought - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Western Political Thought - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Economic Geography - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Economic Geography - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Economic Geography - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Notes",
    title: "Economic Geography - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 3rd sem",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Indian Economy - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Indian Economy - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Indian Economy - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Economics",
    type: "Notes",
    title: "Indian Economy - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Ritikaal Kaavya - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Ritikaal Kaavya - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Drama and Fiction - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "3rd Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Drama and Fiction - Unit 2",
    link: "#"
}, 
{
    course: "B.A",
    semester: "4th Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "History", 
    type: "Notes",
    title: "History of India (c. 1707 to 1950) - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1707 to 1950) - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1707 to 1950) - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "History",
    type: "Notes",
    title: "History of India (c. 1707 to 1950) - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian Political Thought - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian Political Thought - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian Political Thought - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Indian Political Thought - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Environmental Geography - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Environmental Geography - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Environmental Geography - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Environmental Geography - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 4th sem",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Public Finance & International Trade - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Public Finance & International Trade - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Public Finance & International Trade - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Public Finance & International Trade - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Hindi Gadya Sahitya - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Hindi Gadya Sahitya - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Victorian Poetry & Fiction - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "4th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "Victorian Poetry & Fiction - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "History", 
    type: "Notes",
    title: "History of Modern World - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "History",
    type: "Notes",
    title: "History of Modern World - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "History",
    type: "Notes",
    title: "History of Modern World - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "History",
    type: "Notes",
    title: "History of Modern World - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "International Relations & Politics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "International Relations & Politics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "International Relations & Politics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "International Relations & Politics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Geography of India - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Geography of India - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Geography of India - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Notes",
    title: "Geography of India - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 5th sem",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Quantitative Methods in Economics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Quantitative Methods in Economics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Quantitative Methods in Economics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Quantitative Methods in Economics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Chhayavaad Aur Aadhunik Kavya - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Chhayavaad Aur Aadhunik Kavya - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "20th Century Indian English Lit - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "5th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "20th Century Indian English Lit - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "History",
    type: "Syllabus",
    title: "History 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "History", 
    type: "Notes",
    title: "Contemporary India (1950 - 1990s) - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "History",
    type: "Notes",
    title: "Contemporary India (1950 - 1990s) - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "History",
    type: "Notes",
    title: "Contemporary India (1950 - 1990s) - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "History",
    type: "Notes",
    title: "Contemporary India (1950 - 1990s) - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Political Science",
    type: "Syllabus",
    title: "Political Science 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Comparative Government and Politics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Comparative Government and Politics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Comparative Government and Politics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Political Science",
    type: "Notes",
    title: "Comparative Government and Politics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Syllabus",
    title: "Geography 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Notes",
    title: "World Regional Geography - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Notes",
    title: "World Regional Geography - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Notes",
    title: "World Regional Geography - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Notes",
    title: "World Regional Geography - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Geography",
    type: "Practical-Files",
    title: "Geography lab file 6th sem",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Economics",
    type: "Syllabus",
    title: "Economics 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Development Economics - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Development Economics - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Development Economics - Unit 3",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Economics",
    type: "Notes",
    title: "Development Economics - Unit 4",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Hindi Literature",
    type: "Syllabus",
    title: "Hindi Literature 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Nibandh Aur Hindi Vyakaran - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "Hindi Literature",
    type: "Notes",
    title: "Nibandh Aur Hindi Vyakaran - Unit 2",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "English Literature",
    type: "Syllabus",
    title: "English Literature 6th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "American & World Literature - Unit 1",
    link: "#"
},
{
    course: "B.A",
    semester: "6th Sem",
    subject: "English Literature",
    type: "Notes",
    title: "American & World Literature - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C",
    type: "Syllabus",
    title: "Programming in C 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C", 
    type: "Notes",
    title: "Introduction to C & Data Types - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C",
    type: "Notes",
    title: "Control Statements & Loops - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C",
    type: "Notes",
    title: "Arrays, Functions & Pointers - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C",
    type: "Notes",
    title: "Structures, Unions & File Handling - Unit 4",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Programming in C",
    type: "Practical-Files",
    title: "C Programming Lab File 1st sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Computer Fundamentals",
    type: "Syllabus",
    title: "Computer Fundamentals & Office Automation Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Computer Fundamentals",
    type: "Notes",
    title: "Hardware, Software & OS Concepts - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Computer Fundamentals",
    type: "Notes",
    title: "MS Word & Excel Automation - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Mathematical Foundations",
    type: "Syllabus",
    title: "Mathematical Foundations of Computer Science Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Mathematical Foundations",
    type: "Notes",
    title: "Matrices, Determinants & Set Theory - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "1st Sem",
    subject: "Mathematical Foundations",
    type: "Notes",
    title: "Logics, Graphs & Boolean Algebra - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Data Structures",
    type: "Syllabus",
    title: "Data Structures & Algorithms 2nd sem Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Data Structures",
    type: "Notes",
    title: "Arrays, Stacks & Queues - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Data Structures",
    type: "Notes",
    title: "Linked Lists & Trees - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Data Structures",
    type: "Notes",
    title: "Graphs & Searching-Sorting Techniques - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Data Structures",
    type: "Practical-Files",
    title: "Data Structures Lab File 2nd sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Web Development",
    type: "Syllabus",
    title: "Web Technology (HTML, CSS, JS) Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Web Development",
    type: "Notes",
    title: "HTML5 & Semantic Tags - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Web Development",
    type: "Notes",
    title: "CSS3 Layouts, Flexbox & Grid - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Web Development",
    type: "Notes",
    title: "JavaScript Basics & DOM Manipulation - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Web Development",
    type: "Practical-Files",
    title: "Web Tech Designing Project File",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Digital Electronics",
    type: "Syllabus",
    title: "Digital Electronics & Circuits Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Digital Electronics",
    type: "Notes",
    title: "Number Systems & Logic Gates - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "2nd Sem",
    subject: "Digital Electronics",
    type: "Notes",
    title: "Combinational & Sequential Circuits - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Syllabus",
    title: "Object Oriented Programming C++ Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Notes",
    title: "OOPs Concepts, Classes & Objects - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Notes",
    title: "Constructors, Destructors & Overloading - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Notes",
    title: "Inheritance & Polymorphism - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Notes",
    title: "Templates, Exceptions & File Streams - Unit 4",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "OOPs with C++",
    type: "Practical-Files",
    title: "C++ Lab Practical File 3rd sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "DBMS",
    type: "Syllabus",
    title: "Database Management Systems & SQL Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "DBMS",
    type: "Notes",
    title: "DBMS Architecture & ER Diagrams - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "DBMS",
    type: "Notes",
    title: "Relational Algebra & Normalization - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "DBMS",
    type: "Notes",
    title: "SQL Queries & PL/SQL Basics - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "DBMS",
    type: "Practical-Files",
    title: "SQL & Oracle Lab File 3rd sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "Operating Systems",
    type: "Syllabus",
    title: "Operating System Concepts 3rd sem Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "Operating Systems",
    type: "Notes",
    title: "Process Management & CPU Scheduling - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "3rd Sem",
    subject: "Operating Systems",
    type: "Notes",
    title: "Memory Management & Deadlocks - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming",
    type: "Syllabus",
    title: "Java Programming 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming", 
    type: "Notes",
    title: "Java Basics, Classes & Inheritance - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming",
    type: "Notes",
    title: "Packages, Interfaces & Exception Handling - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming",
    type: "Notes",
    title: "Multithreading & Applets / Swing Concepts - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming",
    type: "Notes",
    title: "Java I/O Streams & JDBC Database Connectivity - Unit 4",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Java Programming",
    type: "Practical-Files",
    title: "Core Java Practical Lab File 4th sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Software Engineering",
    type: "Syllabus",
    title: "Software Engineering & Project Management Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Software Engineering",
    type: "Notes",
    title: "SDLC Models (Waterfall, Spiral, Agile) - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Software Engineering",
    type: "Notes",
    title: "SRS Documentation, Testing & Quality Assurance - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Computer Networks",
    type: "Syllabus",
    title: "Data Communication & Computer Networks Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Computer Networks",
    type: "Notes",
    title: "Network Topologies, OSI & TCP/IP Models - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "4th Sem",
    subject: "Computer Networks",
    type: "Notes",
    title: "Routing Algorithms, IP Addressing & Protocols - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Python Programming",
    type: "Syllabus",
    title: "Python Programming & Applications Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Python Programming",
    type: "Notes",
    title: "Python Syntax, Data Types & Control Structures - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Python Programming",
    type: "Notes",
    title: "Functions, Modules, File Handling & OOPs - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Python Programming",
    type: "Notes",
    title: "Libraries (NumPy, Pandas) & GUI Intro - Unit 3",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Python Programming",
    type: "Practical-Files",
    title: "Python Programming Lab Practical File",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Web Frameworks",
    type: "Syllabus",
    title: "Advanced Web Development & PHP/PHP-MySql Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Web Frameworks",
    type: "Notes",
    title: "Server Side Scripting with PHP Basics - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Web Frameworks",
    type: "Notes",
    title: "Database Integration, Sessions & Cookies - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Web Frameworks",
    type: "Practical-Files",
    title: "PHP Advanced Web Dynamic Project File",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Linux & Shell",
    type: "Syllabus",
    title: "Linux OS & Shell Programming Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Linux & Shell",
    type: "Notes",
    title: "Linux Architecture, Commands & File Permissions - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Linux & Shell",
    type: "Notes",
    title: "Shell Scripting Loops, Conditions & Automation - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "5th Sem",
    subject: "Linux & Shell",
    type: "Practical-Files",
    title: "Linux Shell Practical Lab File 5th sem",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Information Security",
    type: "Syllabus",
    title: "Cyber Security & Information Security Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Information Security",
    type: "Notes",
    title: "Cryptography, Threats, Malware & Firewalls - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Information Security",
    type: "Notes",
    title: "Cyber Laws, IT Act 2000 & Digital Forensics - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Cloud Computing",
    type: "Syllabus",
    title: "Cloud Computing Technologies & Architecture Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Cloud Computing",
    type: "Notes",
    title: "Cloud Models (SaaS, PaaS, IaaS) & Virtualization - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Cloud Computing",
    type: "Notes",
    title: "Cloud Security, AWS & Google Cloud Basics - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "E-Commerce",
    type: "Syllabus",
    title: "E-Commerce Applications & Digital Marketing Syllabus",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "E-Commerce",
    type: "Notes",
    title: "E-Commerce Models, Electronic Payment Systems - Unit 1",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "E-Commerce",
    type: "Notes",
    title: "M-Commerce Introduction & Security Frameworks - Unit 2",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Major Project",
    type: "Syllabus",
    title: "Major Project Work Guidelines & Documentation",
    link: "#"
},
{
    course: "B.C.A",
    semester: "6th Sem",
    subject: "Major Project",
    type: "Practical-Files",
    title: "Final Year Capstone Project Report & Viva File",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Financial Accounting 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "ABST", 
    type: "Notes",
    title: "Accounting Principles & Depreciation - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "ABST",
    type: "Notes",
    title: "Consignment and Joint Ventures - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "ABST",
    type: "Notes",
    title: "Partnership Accounts (Admission & Retirement) - Unit 3",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Business Laws 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Indian Contract Act 1872 (Essentials) - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Special Contracts & Sale of Goods Act - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Business Economics 1st sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Demand Analysis & Consumer Behaviour - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "1st Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Production Function & Market Structures - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Business Statistics 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "ABST",
    type: "Notes",
    title: "Measures of Central Tendency & Dispersion - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "ABST",
    type: "Notes",
    title: "Correlation & Regression Analysis - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "ABST",
    type: "Notes",
    title: "Index Numbers & Time Series Analysis - Unit 3",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Business Management 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Planning & Decision Making - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Organization, Motivation & Control - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Indian Banking System 2nd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "EAFM",
    type: "Notes",
    title: "RBI Structure & Commercial Banks - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "2nd Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Banking Sector Reforms & Digital Banking - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Income Tax Law & Accounts 3rd sem Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "ABST",
    type: "Notes",
    title: "Residential Status & Income from Salaries - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "ABST",
    type: "Notes",
    title: "House Property & Business-Profession Income - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "ABST",
    type: "Notes",
    title: "Capital Gains & Deductions under Sec 80 - Unit 3",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Company Law 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Incorporation, MOA & AOA Guidelines - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Prospectus, Share Capital & Company Meetings - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Financial Management 3rd sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Ratio Analysis & Fund Flow Statements - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "3rd Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Working Capital Management & Budgetary Control - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Corporate Accounting 4th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "ABST", 
    type: "Notes",
    title: "Issue of Shares & Valuation of Goodwill - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "ABST",
    type: "Notes",
    title: "Amalgamation & Liquidation of Companies - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Company Law & Secretarial Practice 4th sem Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Directors (Appointment, Powers & Duties) - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Winding Up of Companies & Majority Rule - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Economic Environment in Rajasthan Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Characteristics of Rajasthan Economy & Agriculture - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "4th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Industrial Development & Tourism in Rajasthan - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Cost Accounting 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "ABST",
    type: "Notes",
    title: "Material, Labour and Overhead Cost Control - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "ABST",
    type: "Notes",
    title: "Unit Costing, Process & Contract Costing - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Functional Management 5th sem Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Human Resource & Marketing Management - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Financial & Production Management Concepts - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Financial Management II 5th sem Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Capital Budgeting & Cost of Capital - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "5th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Dividend Policy & Capital Structure Framework - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "ABST",
    type: "Syllabus",
    title: "Goods and Services Tax (GST) & Auditing Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "ABST",
    type: "Notes",
    title: "Introduction to GST, CGST, SGST & IGST Models - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "ABST",
    type: "Notes",
    title: "Auditing (Vouching, Verification & Valuation) - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "Business Administration",
    type: "Syllabus",
    title: "Industrial Laws & Insurance Syllabus (2025-26)",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Factories Act 1948 & Industrial Disputes Act - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "Business Administration",
    type: "Notes",
    title: "Principles of Life, Fire and Marine Insurance - Unit 2",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "EAFM",
    type: "Syllabus",
    title: "Rural Development & Cooperation 6th sem Syllabus",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Rural Infrastructure & Panchayati Raj Institutions - Unit 1",
    link: "#"
},
{
    course: "B.Com",
    semester: "6th Sem",
    subject: "EAFM",
    type: "Notes",
    title: "Cooperative Movement in India & Credit Societies - Unit 2",
    link: "#"
}
];
