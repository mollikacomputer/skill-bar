import styles from "@/styles/skillbar.module.css";
const SkillBar = () => {
  return (
    <>
      <div className="container">
        <h2 className={styles.titleText}>Skill Lavel</h2>
      <div className="">
        <div className="skill-bar">
          <span className="title">HTML </span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-bar">
          <span className="title">CSS </span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
        <div className="skill-bar">
          <span className="title"> JavaScript </span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SkillBar;
