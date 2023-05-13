import styles from "@/styles/skillbar.module.css";
const SkillBar = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.titleText}>Skill Lavel</h2>
        {/* html skill part */}
        <div className={styles.skill}>
          <div className={styles.skillBox}>
            <span className={styles.title}>HTML </span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.html}`}>
                <span className={styles.tooltip}>95%</span>
              </span>
            </div>
          </div>
          {/* css skill part */}
          <div className={styles.skillBox}>
            <span className={styles.title}>CSS</span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.css}`}>
                <span className={styles.tooltip}>90%</span>
              </span>
            </div>
          </div>
          {/* javascript skill part */}
          <div className={styles.skillBox}>
            <span className={styles.title}>JavaScript </span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.javascript}`}>
                <span className={styles.tooltip}>70%</span>
              </span>
            </div>
          </div>
          {/* MongoDb server skill part */}
          <div className={styles.skillBox}>
            <span className={styles.title}> MongoDB </span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.mongodb}`}>
                <span className={styles.tooltip}>70%</span>
              </span>
            </div>
          </div>
          {/* MongoDb server skill part */}
          <div className={styles.skillBox}>
            <span className={styles.title}> NodeJs </span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.node}`}>
                <span className={styles.tooltip}>70%</span>
              </span>
            </div>
          </div>
          {/* Firebase server skill part */}
          <div className={styles.skillBox}>
            <span className={styles.title}> Google Firebase </span>
            <div className={styles.skillBar}>
              <span className={`${styles.skillPer} ${styles.firebase}`}>
                <span className={styles.tooltip}>90%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SkillBar;
