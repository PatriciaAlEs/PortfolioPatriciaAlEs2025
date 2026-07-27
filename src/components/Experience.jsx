import useTranslation from "../hooks/useTranslation.jsx";
import SectionHeading from "./SectionHeading.jsx";

const experienceItems = [
  ["accessProYear", "Acceso Pro", "accessProRole", "accessProDesc", ["n8n", "LLMs", "Google Drive"]],
  ["mentorYear", "4Geeks Academy", "mentorRole", "mentorDesc", ["React", "Python", "Flask", "JavaScript", "Code review"]],
  ["careerYear", "Career Insights", "careerTitleShort", "careerDesc", ["React", "TypeScript", "Tailwind CSS"]],
  ["entusiasmoYear", "Entusiasmao", "entusiasmoRole", "entusiasmoDesc", ["WordPress", "WooCommerce"]],
  ["managementYear", "PARTYFIESTA", "managementRole", "managementDesc", []]
];

const educationItems = [
  ["fsAiCourse", "fsAiCourseDate"],
  ["aiEngineeringCourse", "aiEngineeringCourseDate"],
  ["fullStackCourse", "fullStackCourseDate"]
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experiencia" className="experience-section">
      <div className="page-shell">
        <SectionHeading eyebrow={t("professionalExperience")} title={t("careerTitleSection")} />

        <div className="timeline">
          {experienceItems.map(([date, company, role, description, tags], index) => (
            <article className="timeline-item" key={`${company}-${date}`}>
              <div className="timeline-item__date">
                <span>0{index + 1}</span>
                <p>{t(date)}</p>
              </div>
              <div className="timeline-item__content">
                <p>{company}</p>
                <h3>{t(role)}</h3>
                <p>{t(description)}</p>
                {tags.length > 0 && <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
              </div>
            </article>
          ))}
        </div>

        <div className="education-strip">
          <p>{t("educationTitle")}</p>
          {educationItems.map(([course, date]) => (
            <article key={course}>
              <h3>{t(course)}</h3>
              <p>4Geeks Academy · {t(date)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
