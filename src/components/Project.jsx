import '../output.css'

const Project = ({ name, desc, img, url }) => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 bg-slate-200 h-full shadow-2xl rounded-2xl place-items-center dark:bg-slate-500">
            <div class="px-4 flex flex-col items-center">
                <h1 class="text-2xl mt-12 text-center font-bold dark:text-white"> {name} </h1>
                <h1 class="text-sm mt-24 text-center dark:text-white"> {desc} </h1>

                {url.length > 0 && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        class="border-[1px] my-20 dark:border-white rounded-xl w-32 p-2 border-black text-center hover:cursor-pointer hover:scale-125 hover:bg-gray-200 hover:font-semibold dark:text-white dark:hover:bg-yellow-500 dark:hover:text-black dark:hover:border-black" 
                    >
                        View Project
                    </a>
                )}
            </div>
            <div class="flex">
                <img
                    class="lg:rounded-r-2xl"
                    src={img}
                    alt="Project"
                />
            </div>
        </div>
    )
}

export default Project
