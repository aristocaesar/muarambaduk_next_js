import MainLayout from "@/app/components/Main";
import PackagesData from "../../data/packages.json";
import { Package } from "@/app/types/packages";
import NotFound from "@/app/not-found";
import Currency from "@/app/utils/Currency";
import Link from "next/link";
import Article from "@/app/components/Article";
import Image from "next/image";

interface DetailPaketProps { 
    params: {
        slug: string
    }
}

const DetailPaket : React.FC<DetailPaketProps> = ({params}) => {
    
    const _package : Package = PackagesData.filter((item) => {
        return item.slug == params.slug
    })[0];

    if (_package == undefined) return NotFound();

    return <MainLayout title={`PAKET ${_package.title}`}>
        <Article>
            <div className="flex flex-col space-y-10 lg:space-y-20 justify-center text-cod-gray-950">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-10">
                    <div className="relative w-[100%] h-[250px]">
                        <Image src={_package.image} alt={_package.title}className="rounded" objectFit="cover" layout="fill"/>
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-[2rem] sm:text-[2.2rem] font-semibold">PAKET {_package.title}</h2>
                        <p className="font-base text-[2.2rem] text-denim-600 my-5">{Currency(_package.price)}</p>
                        <p className="font-base mb-5 ">{_package.description}</p>
                        <Link href="https://reservasi.muarambaduk.com" target="_blank" className="flex justify-center items-center space-x-2 bg-denim-600 hover:bg-denim-700 focus:bg-denim-700 text-white-50 py-3 max-w-[14.5rem] rounded-sm mb-10">
                            <span className="text-[0.9rem] md:text-[1rem] font-semibold">PESAN SEKARANG</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </Link>
                        <p className="font-semibold">Alat yang didapatkan</p>
                        <ul className="list-disc ml-4 mt-5 space-y-3 ">
                            {
                                _package.products.map((product, index) => {
                                    return <li key={index}>{product.title} - {product.quantity}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Article>
    </MainLayout>
}

export default DetailPaket;