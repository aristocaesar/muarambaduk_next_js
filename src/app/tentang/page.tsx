import { Metadata } from "next";
import Article from "../components/Article";
import MainLayout from "../components/Main";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Tentang',
}  

const Tentang : React.FC = () => {
    return <MainLayout title="Tentang Kami">
        <Article isContent>
            <p>
            Muara Mbaduk di Banyuwangi adalah kawasan wisata alam yang menawarkan pemandangan yang luar biasa indah. Terletak sekitar 25 km di sebelah barat kota Banyuwangi, Muara Mbaduk adalah tempat yang ideal bagi wisatawan yang mencari pengalaman wisata alam yang berbeda.
            </p>
            <p>
            Hamparan pasir putih dan lautan yang biru di Muara Mbaduk adalah salah satu daya tarik utama tempat ini. Wisatawan dapat menikmati aktivitas berenang, berjemur di pantai, atau sekadar menikmati pemandangan indah yang disajikan oleh alam.
            </p>
            <p>
            Di sepanjang sungai Mbaduk yang mengalir ke laut, tumbuh hutan bakau yang subur. Wisatawan dapat menaiki perahu nelayan atau perahu wisata untuk menjelajahi hutan bakau tersebut, sambil menikmati keindahan alam sekitar. Selain itu, Muara Mbaduk juga terkenal sebagai spot surfing yang menarik, karena ombaknya yang besar dan cocok untuk para surfer.
            </p>
            <p>
            Muara Mbaduk juga menawarkan berbagai aktivitas air seperti snorkeling dan diving untuk menikmati keindahan bawah laut. Terdapat pula beberapa warung makan di sekitar kawasan wisata Muara Mbaduk yang menyajikan makanan khas Banyuwangi yang lezat dan terjangkau.
            </p>
            <p>
            Secara keseluruhan, Muara Mbaduk adalah tempat yang ideal bagi wisatawan yang mencari pengalaman wisata alam yang berbeda di Banyuwangi. Dengan keindahan alamnya yang menakjubkan, Muara Mbaduk pasti akan meninggalkan kesan yang tak terlupakan bagi semua pengunjungnya.
            </p>
        </Article>
    </MainLayout>
}

export default Tentang;