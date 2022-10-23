import '../output.css'

const Footer = () => {
    return (
        <footer class="p-10 bg-gradient-to-b from-[#f4ecea] to-white">
            <div class="flex flex-row justify-center space-x-4 ">
                <a
                    href="https://www.instagram.com/emir.s.7/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        class="h-8"
                        src="https://cdn-icons-png.flaticon.com/512/1216/1216929.png"
                        alt=""
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/emir-soyt%C3%BCrk-6a8a451b3/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        class="h-8"
                        src="https://cdn-icons-png.flaticon.com/512/1051/1051333.png"
                        alt=""
                    />
                </a>
                <a href="mailto:emirsytrk@gmail.com">
                    <img
                        class="h-8"
                        src="https://cdn-icons-png.flaticon.com/512/1250/1250973.png"
                        alt=""
                    />
                </a>
            </div>
            <h1 class="text-center pt-4">Emir Soyturk - emirsytrk@gmail.com</h1>
        </footer>
    )
}

export default Footer
