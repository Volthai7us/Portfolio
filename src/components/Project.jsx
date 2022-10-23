import '../output.css'

const Project = ({ name, desc, img, url }) => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 bg-slate-200 shadow-2xl w-[22rem] md:w-[40rem] rounded-2xl h-[30rem] md:h-[20rem] place-items-center md:place-items-baseline">
            <div class="px-4 md:px-8 md:pt-4 flex flex-col space-y-8 justify-between items-center">
                <h1 class="text-2xl text-center font-bold"> {name} </h1>
                <h1 class="text-sm text-center"> {desc} </h1>

                {url.length > 0 && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        class="border-[1px] rounded-xl py-1 w-32 p-2 border-black text-center hover:cursor-pointer"
                    >
                        View Project
                    </a>
                )}
            </div>
            <div class="">
                <img
                    class="object-cover w-[12rem] h-[12rem] md:h-[20rem] md:w-[30rem] md:rounded-r-2xl "
                    src={img}
                    alt="Project"
                />
            </div>
        </div>
    )
}

export default Project
