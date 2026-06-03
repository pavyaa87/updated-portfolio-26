import { FiExternalLink } from "react-icons/fi";
import "./styles/LiveProjects.css";

const liveProjects = [
  {
    title: "BNI Portal",
    url: "https://121.bnikolhapur.com",
    description:
      "A role-based portal (User, Admin, Supervisor) used to arrange meetings and manage referral information. Features include admin-created conclaves, supervisor management, and seamless user registration flows.",
    features: ["Role-based Access", "Meeting Scheduling", "Referral Management"],
  },
  {
    title: "Mango Export Web",
    url: "https://coral-crow-514214.hostingersite.com/#/login",
    description:
      "A comprehensive web platform for managing mango exports. It features location-based pricing, automated address and price fetching for user orders, dynamic product modification, and multi-format printing capabilities (challans, orders, and invoices).",
    features: ["Order Management", "Dynamic Pricing", "Multi-format Printing", "Automated Fetching"],
  },
];

const LiveProjects = () => {
  return (
    <div className="live-projects-section" id="live-projects">
      <div className="section-container">
        <h2>
          Live <span>Projects</span>
        </h2>
        <div className="live-projects-grid">
          {liveProjects.map((project, index) => (
            <div className="live-project-card" key={index}>
              <div className="live-project-header">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="live-project-features">
                {project.features.map((feature, idx) => (
                  <span key={idx}>{feature}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="live-project-link"
              >
                Visit Website <FiExternalLink />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
