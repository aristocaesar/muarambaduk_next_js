import { Metadata } from "next";
import MainLayout from "../components/Main";
import Article from "../components/Article";
import FeatherIcon from "feather-icons-react";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Kontak',
}  

const Kontak : React.FC = () => {
    return <MainLayout title="Kontak">
        <Article>
            <div className="flex justify-center">
                <div className="gap-y-10 xl:gap-y-0 xl:gap-x-14">
                    <div className="">
                        <h2 className="text-[2.5rem] text-cod-gray-950 font-bold hidden md:block">Hubungi Kami</h2>
                        <p className="text-cod-gray-950 mb-10 md:my-10 tex">Muara Mbaduk adalah destinasi wisata baru di Kabupaten Banyuwangi. Destinasi favorit untuk berkemah, bisa menampung hingga 1000 orang.</p>
                        <div className="flex flex-col space-y-8">
                            <div className="flex items-center space-x-5">
                                <FeatherIcon icon="map-pin" size={50} className="bg-denim-600 text-white-50 p-4 rounded-md" />
                                <p className="text-cod-gray-950 w-10/12">Jln.Sukamade No.234, Dsn. Krajan Desa Sarongan Kec. Pesanggaran , Kab. Banyuwangi </p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <FeatherIcon icon="phone-call" size={50} className="bg-denim-600 text-white-50 p-4 rounded-md" />
                                <p className="text-cod-gray-950 w-10/12">0853 3334 2050</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <FeatherIcon icon="mail" size={50} className="bg-denim-600 text-white-50 p-4 rounded-md" />
                                <p className="text-cod-gray-950 w-10/12">info@muarambaduk.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Article>
    </MainLayout>
}

export default Kontak;