import '../output.css'

const Project = ({ name, desc, img, url }) => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 bg-slate-200 shadow-2xl lg:h-[30rem] rounded-2xl place-items-center lg:place-items-baseline">
            <div class="px-4 lg:px-8 lg:pt-32 flex flex-col space-y-8 justify-between items-center">
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
                    class="p-8 lg:p-0 object-cover lg:h-[30rem] lg:rounded-r-2xl lg:"
                    src={img}
                    alt="Project"
                />
            </div>
        </div>
    )
}

export default Project
