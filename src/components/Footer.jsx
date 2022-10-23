import '../output.css'

const Footer = () => {
    return (
        <footer class="p-10 bg-gradient-to-b from-[#f4ecea] to-white">
            <div class="flex flex-row justify-center space-x-4 ">
                <img
                    class="h-8"
                    src="https://cdn-icons-png.flaticon.com/512/1216/1216929.png"
                    alt=""
                />
                <img
                    class="h-8"
                    src="https://cdn-icons-png.flaticon.com/512/1051/1051333.png"
                    alt=""
                />
                <img
                    class="h-8"
                    src="https://cdn-icons-png.flaticon.com/512/1250/1250973.png"
                    alt=""
                />
            </div>
            <h1 class="text-center pt-4"> Emir Soyturk </h1>
        </footer>
    )
}

export default Footer
