import React from "react";
import "./skills.css";
import SkillSet from "./SkillSet";
import "boxicons";
export default function Skills() {
    return (
        <div id="Skills">
            <h1 className="heading">Skills</h1>
            <div className="skills">
                <div className="skillSet">
                    <h3>Profesional Skills</h3>
                    <p>
                        A full stack developer, passionate about learning new
                        technologies.
                    </p>
                    <SkillSet
                        name="html and css"
                        percentage="80%"
                        icon={<box-icon type="logo" name="html5" />}
                    />
                    <SkillSet
                        name="react and react native"
                        percentage="80%"
                        icon={<box-icon type="logo" name="react" />}
                    />
                    <SkillSet
                        name="pwa"
                        percentage="70%"
                        icon={<box-icon name="mobile" />}
                    />
                    <SkillSet
                        name="UI/Ux"
                        percentage="70%"
                        icon={<box-icon name="paint"></box-icon>}
                    />
                    <SkillSet
                        name="node Js"
                        percentage="60%"
                        icon={<box-icon type="logo" name="nodejs" />}
                    />
                </div>
                <div className="skills__image">
                    <img
                        src="https://d3b8hk1o42ev08.cloudfront.net/wp-content/uploads/2018/09/Project-Management-752x440.jpg"
                        alt="skillset"
                    />
                </div>
            </div>
        </div>
    );
}
