import { useState } from "react";
import { Input, DateInput } from "./Input.jsx";

function EducationForm({
    data,
    setData,
    hideEducationForm,
    editMode,
    selectedId,
    setEditMode,
    initialData,
}) {
    const [schoolInfo, setSchoolInfo] = useState(
        editMode
            ? { ...initialData }
            : {
                  id: crypto.randomUUID(),
                  schoolName: "",
                  studyTitle: "",
                  coursework: "",
                  dateFrom: "",
                  dateTo: "",
              }
    );

    function changeSchoolName(e) {
        setSchoolInfo({
            ...schoolInfo,
            schoolName: e.target.value,
        });
    }
    function changeStudyTitle(e) {
        setSchoolInfo({
            ...schoolInfo,
            studyTitle: e.target.value,
        });
    }

    function changeCoursework(e) {
        setSchoolInfo({
            ...schoolInfo,
            coursework: e.target.value,
        });
    }

    function changeDateFrom(e) {
        setSchoolInfo({
            ...schoolInfo,
            dateFrom: e.target.value,
        });
    }

    function changeDateTo(e) {
        setSchoolInfo({
            ...schoolInfo,
            dateTo: e.target.value,
        });
    }

    function addSchool() {
        //Set new school unique id
        setSchoolInfo({ ...schoolInfo, id: crypto.randomUUID() });
        setData({
            ...data,
            educationData: [...data.educationData, schoolInfo],
        });
        hideEducationForm();
    }

    function editSchool() {
        const selectedSchool = data.educationData.find(
            (school) => school.id === selectedId
        );

        const index = data.educationData.indexOf(selectedSchool);

        const dataCopy = data.educationData;
        dataCopy[index] = { ...schoolInfo, id: selectedSchool.id };
        setData({ ...data, educationData: [...dataCopy] });
        hideEducationForm();
        setEditMode(false);
    }

    return (
        <form action="">
            <Input
                label="School Name"
                value={schoolInfo.schoolName}
                onChange={changeSchoolName}
            ></Input>
            <Input
                label="Degree"
                value={schoolInfo.studyTitle}
                onChange={changeStudyTitle}
            ></Input>
            <Input
                label="Relevant Coursework"
                value={schoolInfo.coursework}
                onChange={changeCoursework}
            ></Input>
            <DateInput
                label={"Date From"}
                value={schoolInfo.dateFrom}
                onChange={changeDateFrom}
            ></DateInput>
            <DateInput
                label={"Date To"}
                value={schoolInfo.dateTo}
                onChange={changeDateTo}
            ></DateInput>
            <button
                type="button"
                onClick={editMode ? (e) => editSchool() : addSchool}
            >
                Save
            </button>
            <button
                type="button"
                onClick={(e) => {
                    hideEducationForm();
                    setEditMode(false);
                }}
            >
                Cancel
            </button>
        </form>
    );
}

export { EducationForm };
