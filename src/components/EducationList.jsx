import { useState } from "react";
import { EducationForm } from "./EducationForm.jsx";

function EducationList({ data, setData }) {
    const schoolList = data.educationData;
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [initialData, setInitialData] = useState({});

    function showEducationForm() {
        setShowForm(true);
    }

    function hideEducationForm() {
        setShowForm(false);
    }

    function deleteEducation(id) {
        setData({
            ...data,
            educationData: data.educationData.filter(
                (school) => school.id !== id
            ),
        });
    }

    function editEducation(id) {
        setShowForm(true);
        setEditMode(true);
        setSelectedId(id);
        setInitialData({
            ...data.educationData.find((school) => school.id === id),
        });
    }

    return (
        <div className="education-list">
            <p className="form-header">Education</p>
            {showForm ? (
                <EducationForm
                    data={data}
                    setData={setData}
                    hideEducationForm={hideEducationForm}
                    editMode={editMode}
                    selectedId={selectedId}
                    setEditMode={setEditMode}
                    initialData={initialData}
                />
            ) : (
                <>
                    {schoolList.map((school) => {
                        return (
                            <div
                                key={school.id}
                                className="education-list-item"
                            >
                                <p>{school.schoolName}</p>
                                <div className="list-item-buttons">
                                    <button
                                        onClick={(e) => {
                                            deleteEducation(school.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e) =>
                                            editEducation(school.id)
                                        }
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <button onClick={showEducationForm}>Add Education</button>
                </>
            )}
        </div>
    );
}

export { EducationList };
