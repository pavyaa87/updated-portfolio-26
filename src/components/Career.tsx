import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer (Intern)</h4>
                <h5>Kolhapur</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Working as a Flutter Developer Intern covering Mobile application Development, Hardware Management, and Website/App UI designing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
