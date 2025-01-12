import './App.css'
import { InnerSection, Section, SectionHeader, SubSection, SubsectionHeader } from './components/Section';
import { TextBlock } from './components/TextBlock';
import li_logo from './assets/LI-Logo.png';
import { ContactTextBlock } from './components/ContactTextBlock';

function Header() {
    return (
        <Section fullscreen={true}>
            <header className="h-full px-8 lg:px-32 py-16 lg:py-32 flex flex-col">
                <div className="flex-grow text-right">
                    <h1 className="text-6xl font-bold text-gray-900">Henry Bley</h1>
                    <h2 className="text-3xl text-amber-700 mt-1">Developer</h2>
                    <div className='w-10 mt-1 float-right'>
                        <a href='https://www.linkedin.com/in/henry-bley-90295264'>
                            <div className='rounded-lg bg-gray-200 p-j'>
                                <img src={li_logo} />
                            </div>
                        </a>
                    </div>
                </div>
                <TextBlock>
                    I am an experienced developer who efficiently self-manages and respects deadlines.
                    Having an extensive customer service background guarantees effective, professional communication.
                    Recently returned to finish my diploma to complement my self-taught programming with a formal education.
                    Attention to detail with an eye for the big picture is my strength. Living in Europe, New Zealand,
                    and The United States has given me an international perspective.
                </TextBlock>
            </header>
        </Section>
    );
}

function Experience() {
    return (
        <Section fullscreen={false}>
            <InnerSection>
                <>
                    <SectionHeader content="Experience" />
                    <SubSection>
                        <>
                            <SubsectionHeader
                                content='Xplore, Antwerp, Belgium — Intern'
                                dates='April 2024 - June 2024'
                            />
                            <TextBlock>
                                Worked in a team of two developing an open-source service to track metrics for GitHub.
                                Built in Java and exposes a Prometheus end point and dashboards using Grafana.
                                Enhanced github organization visibility and performance monitoring.
                            </TextBlock>
                        </>
                    </SubSection>

                    <SubSection>
                        <>
                            <SubsectionHeader
                                content='Liftoff Digital, California, USA — Developer'
                                dates='April 2015 - July 2021'
                            />
                            <TextBlock>
                                My responsibilities include, but are not limited to: building e-commerce websites from scope to completion,
                                executing any custom requirements as needed, regularly updating and maintaining live websites,
                                building and maintaining in-house CMS, implementing new features regularly.
                            </TextBlock>
                        </>
                    </SubSection>
                </>
            </InnerSection>
        </Section>
    );
}

function Projects() {
    return (
        <Section fullscreen={false}>
            <InnerSection>
                <>
                    <SectionHeader content="Projects" />
                    <SubSection>
                        <>
                            <SubsectionHeader
                                content='Github Metrics — Xplore Internship Project'
                                dates=''
                            />

                            <TextBlock>
                                A highly configurable plug and play service to visualize all of your Github organizations Actions,
                                Pull requests, Self hosted Runners and more. Utilizing Java, Prometheus, Grafana.
                            </TextBlock>
                            <ul className="mt-2 text-blue-600">
                                <li>Repo: <a href='https://github.com/github-insights/github-metrics'>github.com/github-insights/github-metrics</a></li>
                                <li>Documentation: <a href="https://github-insights.github.io">github-insights.github.io</a></li>
                            </ul>
                        </>
                    </SubSection>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Third Life — KDG, The Lab Project
                        </h3>
                        <TextBlock>
                            Using Rust and the Bevy engine, in a team of three we built a simulation of basic human civilisation.
                            Implementing systems to replicate human reproduction, beef and wheat farming and simple economy to see
                            how different starting conditions could affect survivability.
                        </TextBlock>
                        <ul className="mt-2 text-blue-600">
                            <li>Repo: <a href='https://github.com/tomellm/third_life'>github.com/tomellm/third_life</a></li>
                            <li>Article: <a href='https://dev.to/tomellm/third-life-simulating-reality-41if'>dev.to/tomellm/third-life-simulating-reality-41if</a></li>
                        </ul>
                    </div>
                </>
            </InnerSection>
        </Section>
    );
}

function Skills() {
    return (
        <Section fullscreen={false}>
            <InnerSection>
                <>
                    <SectionHeader content='SKILLS' />
                    <TextBlock>
                        Java, PHP, Rust, Linux, Python, Bash, Javascript, Hexagonal Architecture,
                        Agile, Scrum, Spring, Gradle
                    </TextBlock>

                    <SectionHeader content='LANGUAGES' />
                    <TextBlock>English, German"</TextBlock>
                </>
            </InnerSection>
        </Section>
    );
}

function Education() {

    return (
        <Section fullscreen={false}>
            <InnerSection>
                <>
                    <SectionHeader content='EDUCATION' />
                    <SubsectionHeader
                        content='Karel De Grote Hogeschool'
                        dates='July 2021 - Sept 2024'
                    />
                    <p className="text-gray-700">
                        Professional Bachelors, Applied Computer Science
                    </p>
                </>
            </InnerSection>
        </Section >
    );
}

function Reference() {

    return (
        <Section fullscreen={false}>
            <InnerSection>
                <>
                    <SectionHeader content='Reference' />
                    <p className="text-gray-700">Tim Peeters - Xplore (Contact On Request)</p>
                </>
            </InnerSection>
        </Section>
    );
}

function Contact() {
    return (
        <Section fullscreen={false}>
            <div className="h-full px-32 py-32 flex flex-col items-center">
                <ContactTextBlock>I look forward to hearing from You.</ContactTextBlock>
                <div className='w-20 pt-10'>
                    <a href='https://www.linkedin.com/in/henry-bley-90295264'>
                        <div className='rounded-lg bg-gray-200 p-j'>
                            <img src={li_logo} />
                        </div>
                    </a>
                </div>
            </div>
        </Section>
    );
}
function App() {
    return (
        <div className="bg-amber-800 flex flex-col">
            <Header />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Reference />
            <Contact />
        </div >
    )
}

export default App
