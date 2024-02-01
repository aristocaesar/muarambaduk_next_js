import Image from "next/image";
import Link from "next/link";

const Footer : React.FC = () => {
    return <footer className="bg-mine-shaft-900 pt-16 lg:pt-16 pb-14 flex flex-col items-center">
    <div className="container grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex flex-col">
            <div className="relative h-[120px] md:h-[150px] w-[200px]">
                <Image src="/logo-muara-mbaduk-2.png" alt="logo-muarambaduk" layout="fill" objectFit="cover" />
            </div>
            <div className="space-y-5 text-cod-gray-300 max-w-xs mt-5">
                <p>MuaraMbaduk adalah wisata alam yang menyajikan pantai, perbukitan hingga tempat berkemah</p>
                <p>Telepon / Whatapps : <br /> 0853 3334 2050</p>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/MuaraMbaduk/" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="facebook">
                            <path id="Vector" d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#939393" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>                        
                    </a>
                    <a href="https://www.instagram.com/muarambaduk/" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5932 15.1512 13.8416 15.5295C13.0901 15.9077 12.2385 16.0394 11.4078 15.9057C10.5771 15.7721 9.80977 15.3799 9.21485 14.785C8.61993 14.1901 8.22774 13.4227 8.09408 12.592C7.96042 11.7614 8.09208 10.9097 8.47034 10.1582C8.8486 9.40667 9.4542 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2649 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 6.5H17.51" stroke="#AAAAAA" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                    
                    </a>
                    <a href="mailto:info@muarambaduk.com">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="mail">
                            <path id="Vector" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#939393" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M22 6L12 13L2 6" stroke="#939393" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>                                                
                    </a>
                </div>
            </div>
        </div>
        <div className="flex flex-col space-y-5">
            <h6 className="text-white-50 font-semibold text-[1rem]">Informasi</h6>
            <ul className="text-cod-gray-300 space-y-2 list-none">
                <li>
                    <Link href="/paket-camping">Daftar Paket</Link>
                </li>
                <li>
                    <Link href="/tiket">Harga Tiket</Link>
                </li>
                <li>
                    <Link href="/tentang">Tentang</Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-col space-y-5">
            <h6 className="text-white-50 font-semibold text-[1rem]">Bantuan</h6>
            <ul className="text-cod-gray-300 space-y-2 list-none">
                <li>
                    <Link href="/kontak">Kontak</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/syarat-ketentuan">Syarat Dan Ketentuan</Link>
                </li>
                <li>
                    <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
                </li>
            </ul>
        </div>
    </div>
    <hr className="container border-t border-cod-gray-700 max-w-[70rem] my-14" />
    <div className="container flex flex-col lg:flex-row justify-start md:justify-between text-cod-gray-300">
        <p>Copyright &copy; muarambaduk.com</p>
        <p>PT. Sarongan Tourism IDN</p>
    </div>
</footer>
}

export default Footer;