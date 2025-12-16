export const sampleData = {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "669123456",
    educationData: [
        {
            id: crypto.randomUUID(),
            schoolName: "MIT",
            studyTitle: "Computer Science",
            coursework: "DSA, Web Development, Distributed Systems",
            dateFrom: "2025-12-15",
            dateTo: "2025-12-16",
        },
    ],
    experienceData: [
        {
            id: crypto.randomUUID(),
            jobName: "Google",
            jobTitle: "Full Stack Developer",
            jobDesc:
                "Worked on the design, development, and maintenance of scalable web applications used by large-scale internal and external users. Contributed across the full stack, including user interfaces, backend services, and data integration, within a highly collaborative, production-grade engineering environment.",
            dateFrom: "2026-12-16",
            dateTo: "2027-12-16",
        },
        {
            id: crypto.randomUUID(),
            jobName: "Microsoft",
            jobTitle: "Software Engineer (Full Stack)",
            jobDesc:
                "Developed and maintained enterprise-grade web applications with a focus on performance, security, and reliability. Worked across frontend and backend layers, integrating RESTful APIs, cloud-based services, and relational databases while collaborating with cross-functional teams in an agile development environment.",
            dateFrom: "2028-01-10",
            dateTo: "2029-01-10",
        },
    ],
};
