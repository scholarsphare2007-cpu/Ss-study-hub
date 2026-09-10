// database of all my data
const resourcesData = [
    // ==================== 12th Standard Mathematics ====================
    {
        course: "12th",
        semester: "NA",
        subject: "Mathematics",
        type: "Notes",
        title: "Class 12 Maths - All Differentiation Formulas (English Version)",
        link: "https://drive.google.com/file/d/1_ZORKsCIrFaaW-zx9GvsqY6A3DHe7sxX/view?usp=drivesdk"
    },
    
    // ==================== B.Sc - Physics - Syllabus ====================
    {
        course: "B.Sc",
        semester: "1st Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "1st sem. syll. physics, BSc UOR",
        link: "https://drive.google.com/file/d/18b06iJ7MdzjI3cpgcGdQqVjJmgyqGSjZ/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "2nd sem. syll. physics, BSc UOR",
        link: "https://drive.google.com/file/d/17024F_E9d5Adk_awdDuyIvaM6OosaAgP/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "2nd sem. syll. pract.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1QKbeXp5HNk2RU7NF-ymqouQHXcD2Qbdi/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "3rd sem. syll. physics, BSc UOR",
        link: "https://drive.google.com/file/d/19FLqdlrbmCl80G5fg7kO7M3B3MnNZrQr/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "3rd Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "3rd sem. syll. pract.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1XG0xzKkpIv6guEJoQmhesqGgdutrwxpe/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "4th sem. syll.physics, BSc UOR",
        link: "https://drive.google.com/file/d/11G7OyMcHwrIeG0qRYN_UaOnxCtUUpA7n/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "4th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "4th sem. syll. pract.physics, BSc UOR",
        link: "https://drive.google.com/file/d/17KkiGwIT0MywMBfRGIpF95nWjlUZ7da7/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "5th sem. syll.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1yIWLRxua7msNJE9yu2efy1i4zSX1tCHa/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "5th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "5th sem. syll. pract.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1Tnn_d6gX-85zSHiTh_bRm1Uh4rTOqyXN/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "6th sem. syll.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1YSsycbRXAspQfx1p6MmqQuclbHhUFkLq/view?usp=drivesdk"
    },
    {
        course: "B.Sc",
        semester: "6th Sem",
        subject: "Physics",
        type: "Syllabus",
        title: "6th sem. syll. pract.physics, BSc UOR",
        link: "https://drive.google.com/file/d/1W961NGhy-lx4PGrudVBZSG9i2tI6TxPc/view?usp=drivesdk"
    },

    // ==================== B.Sc 2nd Sem - Chemistry ====================
    {
        course: "B.Sc",
        semester: "2nd Sem",
        subject: "Chemistry",
        type: "Syllabus",
        title: "2nd sem Syllabus (2025-26) UOR",
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
        subject: "General Hindi",
        type: "Syllabus",
        title: "General Hindi Syllabus (2025-26)",
        link: "https://drive.google.com/file/d/1jfPjrPxiBlkVXoAtTmJPCYT1Bulps1dk/view?usp=sharing"
    }
];
