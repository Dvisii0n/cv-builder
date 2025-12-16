import { useState } from "react";
import { Input, DateInput } from "./Input.jsx";

function ExperienceForm({
    data,
    setData,
    hideExperienceForm,
    editMode,
    selectedId,
    setEditMode,
    initialData,
}) {
    const [experienceInfo, setExperienceInfo] = useState(
        editMode
            ? { ...initialData }
            : {
                  id: crypto.randomUUID(),
                  jobName: "",
                  jobTitle: "",
                  jobDesc: "",
                  dateFrom: "",
                  dateTo: "",
              }
    );

    function changeJobName(e) {
        setExperienceInfo({
            ...experienceInfo,
            jobName: e.target.value,
        });
    }
    function changeJobTitle(e) {
        setExperienceInfo({
            ...experienceInfo,
            jobTitle: e.target.value,
        });
    }

    function changeJobDesc(e) {
        setExperienceInfo({
            ...experienceInfo,
            jobDesc: e.target.value,
        });
    }

    function changeDateFrom(e) {
        setExperienceInfo({
            ...experienceInfo,
            dateFrom: e.target.value,
        });
    }

    function changeDateTo(e) {
        setExperienceInfo({
            ...experienceInfo,
            dateTo: e.target.value,
        });
    }

    function addJob() {
        setExperienceInfo({ ...experienceInfo, id: crypto.randomUUID() });
        setData({
            ...data,
            experienceData: [...data.experienceData, experienceInfo],
        });
        hideExperienceForm();
    }

    function editJob() {
        const selectedJob = data.experienceData.find(
            (school) => school.id === selectedId
        );

        const index = data.experienceData.indexOf(selectedJob);

        const dataCopy = data.experienceData;
        dataCopy[index] = { ...experienceInfo, id: selectedJob.id };
        setData({ ...data, experienceData: [...dataCopy] });
        hideExperienceForm();
        setEditMode(false);
    }

    return (
        <form action="">
            <Input
                label="Organization"
                value={experienceInfo.jobName}
                onChange={changeJobName}
            ></Input>
            <Input
                label="Position Title"
                value={experienceInfo.jobTitle}
                onChange={changeJobTitle}
            ></Input>
            <textarea
                label="Description"
                value={experienceInfo.jobDesc}
                onChange={changeJobDesc}
                rows="6"
            ></textarea>

            <DateInput
                label={"Date From"}
                value={experienceInfo.dateFrom}
                onChange={changeDateFrom}
            ></DateInput>
            <DateInput
                label={"Date To"}
                value={experienceInfo.dateTo}
                onChange={changeDateTo}
            ></DateInput>
            <button
                type="button"
                onClick={editMode ? (e) => editJob() : addJob}
            >
                Save
            </button>
            <button
                type="button"
                onClick={(e) => {
                    hideExperienceForm();
                    setEditMode(false);
                }}
            >
                Cancel
            </button>
        </form>
    );
}

export { ExperienceForm };
