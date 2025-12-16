import { useState } from "react";
import { Cv } from "./Cv.jsx";
import { GeneralInfo } from "./GeneralInfo.jsx";
import { EducationList } from "./EducationList.jsx";
import { sampleData } from "./sampleData.js";
import { ExperienceList } from "./ExperienceList.jsx";

export function App() {
    const [data, setData] = useState(sampleData);

    return (
        <>
            <div className="info-forms">
                <h1>Boring Ass™ CV Builder</h1>
                <GeneralInfo data={data} setData={setData}></GeneralInfo>
                <EducationList data={data} setData={setData}></EducationList>
                <ExperienceList data={data} setData={setData}></ExperienceList>
                <img src="/clippy.gif" alt=""></img>
                <div className="filler">Made to learn React</div>
            </div>
            <Cv data={data}></Cv>
        </>
    );
}
