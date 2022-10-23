import '../output.css'

const Navbar = () => {
    return (
        <nav class="bg-gradient-to-t from-slate-100 to-yellow-500 p-16 w-full dark:bg-gradient-to-t dark:from-slate-700 dark:to-slate-500">
            <div class="px-8">
                <div class="flex items-center">
                    <a href="/" class="text-3xl font-semibold dark:text-white">
                        Emir Soyturk
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
