import useTranslation from "../hooks/useTranslation.jsx";

const experienceItems = [
    ["accessProTitle", "accessProYear", "accessProDesc"],
    ["mentorTitle", "mentorYear", "mentorDesc"],
    ["careerTitle", "careerYear", "careerDesc"],
    ["entusiasmoTitle", "entusiasmoYear", "entusiasmoDesc"],
    ["managementTitle", "managementYear", "managementDesc"]
];

const educationItems = [
    ["fsAiCourse", "fsAiCourseDate"],
    ["aiEngineeringCourse", "aiEngineeringCourseDate"],
    ["fullStackCourse", "fullStackCourseDate"]
];

export default function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experiencia" className="my-12 px-4">
            <div className="container-narrow space-y-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/10 p-6 sm:p-8">
                <div>
                    <h2 className="section-title mb-8 text-center">{t("experience")}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {experienceItems.map(([title, date, description]) => (
                            <article className="ex-card group" key={title}>
                                <h3 className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                                    {t(title)}
                                </h3>
                                <div className="text-sm text-gray-500 mb-4 font-medium">{t(date)}</div>
                                <p className="text-gray-700 leading-relaxed">{t(description)}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="section-title mb-6 text-center">{t("educationTitle")}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {educationItems.map(([course, date]) => (
                            <article className="ex-card" key={course}>
                                <h3 className="ex-head text-base mb-2">{t(course)}</h3>
                                <p className="text-sm text-gray-500 font-medium">4Geeks Academy</p>
                                <p className="text-sm text-gray-500 font-medium">{t(date)}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
