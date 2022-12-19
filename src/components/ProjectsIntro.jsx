import '../output.css'
import Project from '../components//Project'
import maze from '../images/maze.gif'
import terrain from '../images/terrain.jpg'
import hospital from '../images/hospital.png'
import socialdistance from '../images/socialgif.gif'

const ProjectsIntro = () => {
    return (
        <div class="flex flex-col items-center space-y-16">
            <p class="text-3xl font-bold underline decoration-4 underline-offset-[0.5rem] decoration-yellow-500 dark:text-slate-100">
                Projects
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 place-items-center gap-y-8 px-16 py-4">
                <Project
                    name={'Maze'}
                    img={maze}
                    desc={
                        'The goal of this project is to create a fully connected map and find the ' +
                        'desirable random point on the map starting from the center. To achieve both ' +
                        'purposes I used the Breadth-First Search algorithm. '
                    }
                    url={'https://github.com/Volthai7us/Maze'}
                />
                <Project
                    name={'Procedural-Terrain'}
                    img={terrain}
                    desc={
                        'The goal of this project is to create a procedural terrain with find different ' +
                        'shading modes and camera modes. This project ' +
                        'written in c++ and glsl.'
                    }
                    url={'https://github.com/Volthai7us/Procedural-Terrain'}
                />
                <Project
                    name={'Social Distancing Simulation'}
                    img={socialdistance}
                    desc={
                        'The goal of this project simulate a epidemic under "number of people", "infection percent", "starting percent of patient" ' +
                        'and "percent of movement of people" conditions. '
                    }
                    url="https://github.com/Volthai7us/social-distancing-simulation"
                />
                <Project
                    name={'Hospital System'}
                    img={hospital}
                    desc={
                        'A hospital system provided for doctors and patients. System provides queries ' +
                        'between doctors and patients and allow create appointments. '
                    }
                    url="https://github.com/Volthai7us/Hospital-System"
                />
            </div>
        </div>
    )
}

export default ProjectsIntro
