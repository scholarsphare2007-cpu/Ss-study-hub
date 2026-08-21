// database of all my dat
const resourcesData= [
    // ==================== 12th Standard Mathematics ====================
    {
        course: "12th",
        semester: "12th Class",
        subject: "Mathematics",
        type: "Notes",
        title: "Class 12 Maths - All Differentiation Formulas (English Version)",
        link: "https://drive.google.com/file/d/1_ZORKsCiRFaaW-zx9GvsqY6A3DHe7sxX/view?usp=drivesdk"
    },

    // ==================== B.Sc 2nd Sem - Chemistry ====================
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "Chemistry 2nd sem Syllabus (2025-26) UOR",
        link: "https://drive.google.com/file/d/1g-Fk6cFBkMzsPwhV9vUAyqGBRWKtqOaU/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Important-Topics",
        title: "Chemistry Unit-1 Important Topics (Hindi Version) 2025-26",
        link: "https://drive.google.com/file/d/1EqMUNDuQYTFXTyKp_E9quHOOzehcaxQV/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Important-Topics",
        title: "Chemistry Unit-1 Important Topics (English Version) 2025-26",
        link: "https://drive.google.com/file/d/19OTo5BORHG5JlrYnWJd8JyyU1XIG0OrJ/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Important-Topics",
        title: "Chemistry Unit-2 Important Topics (Hindi Version) 2025-26",
        link: "https://drive.google.com/file/d/1sI0uNYKjdsYm5WWyycuT43O-I_zs6VKX/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Important-Topics",
        title: "Chemistry Unit-2 Important Topics (English Version) 2025-26",
        link: "https://drive.google.com/file/d/1U67FXq5n1Xwxg4Y6_DGPRUUBOo4XRQsY/view?usp=drivesdk"
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
        type: "Important-Topics",
        title: "Chemistry Unit-4 Important Topics (Hindi Version) 2025-26",
        link: "https://drive.google.com/file/d/1-uawrztn-ZTUIp23nfKMCy9FsEeVAYRc/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Important-Topics",
        title: "Chemistry Unit-4 Important Topics (English Version) 2025-26",
        link: "https://drive.google.com/file/d/1i_ArqPt3KNrhEYCFdY5J9WG8ZPatlL9A/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Practical-Files",
        title: "Chemistry lab file 2nd sem",
        link: "#"
    },

    // ==================== B.Sc 2nd Sem - Mathematics ====================
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Syllabus",
        title: "Mathematics 2nd sem Syllabus (2025-26) UOR",
        link: "https://drive.google.com/file/d/14qaUi_FcK-hgfuGyJgQ1Xp-1n-F5-ejj/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Asymptote Notes",
        link: "https://drive.google.com/file/d/15ttadd7u5tpGQ-102nrGtLIEUz3o1m5f/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Envelope Notes",
        link: "https://drive.google.com/file/d/13PLQcO993etoArrCf3GXtZNNftEnttXm/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Taylor's Theorem (Taylor Pramey) Notes (Hindi)",
        link: "https://drive.google.com/file/d/1h7goBxZBOANuDiKfXe4OFwvpvs1w3Xm/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Taylor's Theorem Notes",
        link: "https://drive.google.com/file/d/1fhRnQwg6zhJYlRf9KlWzTHzpleyo4BTA/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Maclaurin Theorem Notes",
        link: "https://drive.google.com/file/d/121DjEYba725eGrGYwOO_A7JArq8fz89k/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Maxima and Minima Notes",
        link: "https://drive.google.com/file/d/1OAbbsVKNrU17xBUvOMOajSwvYiZlRH54/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Mathematics",
        type: "Notes",
        title: "Calculus - Curve Tracing Notes",
        link: "https://drive.google.com/file/d/1oidoJA7VJtxayEL42m3sI2hmzthiB8Y3/view?usp=drivesdk"
    },

    // ==================== B.Sc 2nd Sem - Zoology ====================
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

    // ==================== B.Sc 2nd Sem - Languages ====================
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General English",
        type: "Syllabus",
        title: "General English Syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1B3ifIEmDWMtXB1T1GvILUAP5I13lx2Pf/view?usp=sharing"
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
        title: "General Hindi Syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1jfPjrPxiBlkVXoAtTmJPCYT1Bulps1dk/view?usp=sharing"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "General Hindi",
        type: "Notes",
        title: "General Hindi Notes",
        link: "#"
    },
]
