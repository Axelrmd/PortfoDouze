import { useState } from "react"
import { Skills } from "../../Data/Donnees"

const PageSkills = () => {

    const [type, setType] = useState("Front-End");

    function changerType(event){
        setType(event.target.value)
    }


    return (
        <div className='skills'>
            <div className='requeteSql'>
                <span className='orange'>SELECT</span>
                <span>*</span>
                <span className="orange">FROM</span>
                <span>Skills</span>
                <span className="orange">WHERE</span>
                <span>type</span>
                <span className="orange">IS</span>
                <select value={type} onChange={changerType}>
                    <option value="Front-End">"Front-End"</option>
                    <option value="Back-End">"Back-End"</option>
                    <option value="BD">"Base De Donées"</option>
                    <option value="Framework">"Framework"</option>
                    <option value="Outil">"Outil"</option>
                </select>
            </div>

            <div className="mesSkills">
                {Skills.filter(item => item.type.includes(type)).map((item, index) => (
                    <div className="flipCarteSkill" key={index}>
                        <div className="int-flipCarteSkill">
                            <div className="faceCarteSkill">
                                <img src={item.image} alt={item.nom} />
                                <h3>{item.nom}</h3>
                            </div>
                            <div className="pileCarteSkill">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PageSkills