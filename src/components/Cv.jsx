export function Cv({ data }) {
    return (
        <div className="curriculum">
            <section className="general-cv-info">
                <p className="full-name">{data.name}</p>
                <ul className="contact-info">
                    <li>{data.email}</li>
                    <li>{data.phone}</li>
                </ul>
            </section>
            <p className="section-header"> Education </p>
            <section className="education">
                {data.educationData.map((school) => {
                    return (
                        <EducationInfo
                            key={school.id}
                            school={school}
                        ></EducationInfo>
                    );
                })}
            </section>
            <p className="section-header"> Experience </p>
            <section className="experience">
                {data.experienceData.map((job) => {
                    return <JobInfo key={job.id} job={job}></JobInfo>;
                })}
            </section>
        </div>
    );
}

function EducationInfo({ school }) {
    return (
        <div className="education-info">
            <p className="school-name">{school.schoolName}</p>
            <p className="school-dates">
                {school.dateFrom} - {school.dateTo}
            </p>
            <p className="study-title">{school.studyTitle}</p>
            <p className="coursework">
                Relevant Coursework: {school.coursework}
            </p>
        </div>
    );
}

function JobInfo({ job }) {
    return (
        <div className="job-info">
            <p className="job-name">{job.jobName}</p>
            <p className="job-dates">
                {job.dateFrom} - {job.dateTo}
            </p>
            <p className="job-title">{job.jobTitle}</p>
            <p className="job-description">{job.jobDesc}</p>
        </div>
    );
}
