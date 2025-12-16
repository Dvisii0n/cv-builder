import { useState } from "react";
import { ExperienceForm } from "./ExperienceForm.jsx";

function ExperienceList({ data, setData }) {
    const expList = data.experienceData;
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [initialData, setInitialData] = useState({});

    function showExperienceForm() {
        setShowForm(true);
    }

    function hideExperienceForm() {
        setShowForm(false);
    }

    function deleteExperience(id) {
        setData({
            ...data,
            experienceData: data.experienceData.filter((job) => job.id !== id),
        });
    }

    function editExperience(id) {
        setShowForm(true);
        setEditMode(true);
        setSelectedId(id);
        setInitialData({
            ...data.experienceData.find((job) => job.id === id),
        });
    }

    return (
        <div className="experience-list">
            <p className="form-header">Experience</p>
            {showForm ? (
                <ExperienceForm
                    data={data}
                    setData={setData}
                    hideExperienceForm={hideExperienceForm}
                    editMode={editMode}
                    selectedId={selectedId}
                    setEditMode={setEditMode}
                    initialData={initialData}
                />
            ) : (
                <>
                    {expList.map((job) => {
                        return (
                            <div key={job.id} className="experience-list-item">
                                <p>{job.jobName}</p>
                                <div className="list-item-buttons">
                                    <button
                                        onClick={(e) => {
                                            deleteExperience(job.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={(e) => editExperience(job.id)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <button onClick={showExperienceForm}>Add Experience</button>
                </>
            )}
        </div>
    );
}

export { ExperienceList };
