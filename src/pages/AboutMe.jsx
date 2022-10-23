import '../output.css'
import personal_photo from '../images/image-removebg-preview.png'
import resume from '../images/Resume.pdf'

const AboutMe = () => {
    return (
        <div>
            <div class="grid grid-cols-5 px-16 py-16">
                <div class="col-start-1 col-span-3 space-y-4">
                    <h1 class="text-3xl font-bold"> About Me </h1>
                    <p class="block pb-8 ">
                        I am junior Computer Science Student at TOBB ETU. I
                        enjoy working with a problem and see the progress of how
                        it's become a product. To achieve this satisfaction, I
                        am writing projects with Java, C#, React. Common point
                        of them is graphical user interface.
                    </p>
                    <a
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                        class="bg-yellow-500 rounded p-2"
                    >
                        Resume
                    </a>
                </div>
                <div class="col-start-4 col-span-2">
                    <img src={personal_photo} alt="Personal" />
                </div>
            </div>

            <div class="flex flex-col justify-between items-center ">
                <h1 class="text-4xl font-bold font-sans underline underline-offset-8 decoration-yellow-500 pb-8">
                    Contact Me
                </h1>
                <form class="flex flex-col w-96 space-y-4">
                    <div class="flex flex-col w-full space-y-2.5">
                        <label class="text-lg font-semibold" for="name">
                            Name
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2"
                            type="text"
                            id="name"
                            placeholder=""
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2.5">
                        <label class="text-lg font-semibold" for="email">
                            Email
                        </label>
                        <input
                            class="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2"
                            type="email"
                            id="email"
                            placeholder=""
                            required
                        />
                    </div>
                    <div class="flex flex-col w-full space-y-2.5">
                        <label class="text-lg font-semibold" for="message">
                            Message
                        </label>
                        <textarea
                            class="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2 h-60"
                            type="text"
                            id="message"
                            placeholder=""
                        />
                    </div>
                    <div class="flow-root">
                        <button
                            type="submit"
                            class="float-right text-black bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 w-20 text-center"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AboutMe
