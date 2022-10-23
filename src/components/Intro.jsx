import '../output.css'
import personal_photo from '../images/image-removebg-preview.png'

const Intro = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 px-16 py-8">
            <div class="col-start-1 col-span-1 space-y-2 ">
                <h1 class="text-2xl font-bold text-yellow-500"> Developer </h1>

                <h1 class="text-4xl font-bold font-sans dark:text-white">
                    Hello, my name <br />
                    is Emir Soyturk
                </h1>
                <p class="py-6 dark:text-white">
                    I am junior Computer Science Student at TOBB ETU. I enjoy
                    working with a problem and see the progress of how it's
                    become a product. To achieve this , I am writing projects
                    with Java, C#, React. You can check my some projects below
                    or you can directly go to my github pages.
                </p>
                <div class="flex space-x-4">
                    <a
                        href="https://github.com/Volthai7us"
                        target="_blank"
                        rel="noreferrer"
                        class="block border-2 border-black p-2 rounded-xl hover:bg-yellow-500 hover:scale-125 dark:bg-slate-100"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emir-soyt%C3%BCrk-6a8a451b3/"
                        target="_blank"
                        rel="noreferrer"
                        class="block border-2 border-black p-2 rounded-xl hover:bg-yellow-500 hover:scale-125 dark:bg-slate-100"
                    >
                        Linkedln
                    </a>
                </div>
            </div>
            <div class="col-start-1 col-span-1 hidden md:col-start-2 md:block">
                <img src={personal_photo} alt="Personal" />
            </div>
        </div>
    )
}

export default Intro
