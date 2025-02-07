
import React from 'react';

function MainContent() {
    return (
        <main>

            <section id="about" className="max-w-5xl mx-auto px-6 ">
                <h2 className="text-3xl font-semibold text-blue-300">About Me</h2>
                <p className="mt-4 text-gray-300">As a software engineer at UHF Solutions, I develop and maintain web applications
                    using PHP. I also have experience in teaching and instructing programming languages and frameworks, such as
                    Python, R, and Laravel, at Aptech Pakistan and Mindscape Technologies. Additionally, I have completed
                    multiple certifications in data science and web development from DataCamp and IBM. With a master's degree in
                    computer science at MAJU. I am passionate about learning new technologies and collaborating with diverse and
                    talented teams.</p>
            </section>

            <section id="skills" className="max-w-5xl mx-auto px-6 mt-10">
                <h2 className="text-3xl font-semibold text-blue-300">Skills and Interests</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div
                        className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">
                        PHP & Laravel</div>
                    <div className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">JavaScript &
                        React.js</div>
                    <div className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">Python & Flask
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">SQL &
                        Databases</div>
                    <div className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">AI & NLP</div>
                    <div className="bg-gray-800 p-3 rounded-lg text-center hover:bg-blue-500 transition duration-300">REST APIs
                    </div>
                </div>
            </section>

            <section id="education" className="max-w-5xl mx-auto px-6 mt-10">
                <h2 className="text-3xl font-semibold text-blue-300">Education</h2>
                <div className="mt-4 space-y-6">
                    <div className="">
                        <h3 className="text-xl font-bold">Muhammad Ali Jinnah University, Karachi</h3>
                        <p className="text-gray-400">Master of Science in Computer Science, 2021 - 2023</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Bahria University, Karachi</h3>
                        <p className="text-gray-400">Bachelor of Science in Computer Science, 2014 - 2018</p>
                    </div>
                </div>
            </section>

            <section id="experience" className="max-w-5xl mx-auto px-6 mt-10">
                <h2 className="text-3xl font-semibold text-blue-300">Experience</h2>
                <div className="mt-4 ml-2 space-y-6">
                    <div className="">
                        <h3 className="text-xl font-bold">Software Engineer - UHF Solutions, Karachi (Oct 2023 – Present)</h3>
                        <ul className="list-disc list-inside text-gray-400 list-outside">
                            <li>Development and customization of CRM and CMS modules serving premier banks in Pakistan.</li>
                            <li>Collaborated with cross-functional teams, including business analysts, project managers, and
                                end-users, to gather comprehensive requirements and translate them into actionable features.
                            </li>
                            <li>Coordinated with system administrators and IT infrastructure teams to ensure smooth system
                                integration and performance optimization.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Software Engineer - Wavetec, Karachi (Jul 2022 – Sep 2023)</h3>
                        <ul className="list-disc list-inside text-gray-400 list-outside">
                            <li>Developing and maintaining the in-house ERP system serving over 200+ users across 6 different
                                companies.</li>
                            <li>Implemented 50+ modules/reports improving the overall user experience and productivity of users.
                            </li>
                            <li>Troubleshooting and resolving software defects and issues posted on ostickets on a daily basis.
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Associate Faculty - Aptech Computer Education, Karachi (Nov 2019 – June
                            2022)</h3>
                        <ul className="list-disc list-inside text-gray-400 list-outside">
                            <li>Taught Certificate of Proficiency in Information Systems Management (CPISM), Diploma in
                                Information Systems Management (DISM), Higher Diploma in Software Engineering (HDSE I & II).
                            </li>
                            <li>Conducted lectures and delivered course materials to students.</li>
                            <li>Assisted students with their projects and graded assignments/quizzes.</li>
                            <li>Organized workshops on emerging technologies.</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Laravel Developer (Remote) - AKDN, Karachi (Apr 2019 – Jul 2019)</h3>
                        <ul className="list-disc list-inside text-gray-400 list-outside">
                            <li>Developed an e-health application as a solo developer for a controlled trial of pregnant women
                                worldwide funded by Aga Khan University Hospital with over 300 participants.</li>
                            <li>Through this application the users reported their diet, supplement use and physical activity
                                which recommended them further actions based on their data.</li>
                            <li>Designed REST APIs for easy transition from web-based application into a hybrid mobile
                                application.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="projects" className="max-w-5xl mx-auto px-6 mt-10">
                <h2 className="text-3xl font-semibold text-blue-300">Projects and Contributions</h2>
                <div className="mt-4 space-y-6">
                    <div className="">
                        <h3 className="text-xl font-bold">Meezan ADC System</h3>
                        <p className="text-gray-400">Worked on Meezan ADC System to enhance the bank's digital channels. Implemented
                            features for secure and efficient transaction processing and complaint management.Developed using
                            PHP.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Sales CRM</h3>
                        <p className="text-gray-400">Worked on our in-house sales CRM.Implemented multiple features to replicate
                            salesforce for our domestic clients.Developed using PHP.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">In-house ERP System</h3>
                        <p className="text-gray-400">Worked on the in-house ERP system at Wavetec, based on the given requirements
                            from clients. Developed using Laravel and React.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Purumeed Aaghaz</h3>
                        <p className="text-gray-400">Developed web application to monitor nutrition of pregnant women for better
                            care of the unborn child. Developed using Laravel framework.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">Travelmaker</h3>
                        <p className="text-gray-400">Worked on the admin dashboard and resolved front-end and back-end issues
                            identified by beta testers. Developed using Laravel framework.</p>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold">SG Gaming</h3>
                        <p className="text-gray-400">Developed a website for a gaming company with WooCommerce integration.
                            Developed using WordPress.</p>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default MainContent;