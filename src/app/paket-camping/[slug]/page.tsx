import MainLayout from "@/app/components/Main";
import { Package } from "@/app/types/packages";
import NotFound from "@/app/not-found";
import Currency from "@/app/utils/Currency";
import Link from "next/link";
import Article from "@/app/components/Article";
import Image from "next/image";
import MUARAMBADUK_API from "@/app/config/Muarambaduk_API";
import { Metadata } from "next";
import FeatherIcon from "feather-icons-react";
import { Ucword } from "@/app/utils/String/Strings";

interface DetailPaketProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: DetailPaketProps): Promise<Metadata> {
  const result: Package[] = await MUARAMBADUK_API.Get(
    `packages?slug=${params.slug}`
  );
  const _package: Package = result[0];

  if (!result)
    return {
      title: `Muarambaduk Camping Ground Banyuwangi - Halaman Tidak Ditemukan`,
      description: `Maaf, halaman yang Anda cari tidak ditemukan. Jangan khawatir, temukan informasi atau navigasi lainnya untuk melanjutkan eksplorasi situs kami. Temukan pengalaman baru dan menarik di muara mbaduk.`,
    };

  return {
    title: `Muarambaduk Camping Ground Banyuwangi - ${Ucword(params.slug)}`,
    description: `${_package.content.rendered}`,
    metadataBase: new URL(
      _package.featured_media ?? `${process.env.BASE_URL}/muarambaduk.png`
    ),
    openGraph: {
      title: `Muarambaduk Camping Ground Banyuwangi - ${Ucword(params.slug)}`,
      description: `${_package.content.rendered}`,
      images: {
        url:
          _package.featured_media ?? `${process.env.BASE_URL}/muarambaduk.png`,
      },
    },
  };
}

const DetailPaket: React.FC<DetailPaketProps> = async ({ params }) => {
  const result: Package[] = await MUARAMBADUK_API.Get(
    `packages?slug=${params.slug}`
  );
  const _package: Package = result[0];

  if (_package == undefined) return NotFound();

  return (
    <MainLayout
      data={{ title: `PAKET ${_package.title.rendered.toUpperCase()}` }}
    >
      <Article>
        <div className="flex flex-col space-y-10 lg:space-y-20 justify-center text-cod-gray-950">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-10">
            <div className="relative w-[100%] h-[250px]">
              <Image
                src={
                  _package.featured_media == null ||
                  _package.featured_media == ""
                    ? "/default-image.png"
                    : _package.featured_media
                }
                alt={_package.title.rendered}
                className="rounded"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-[2rem] sm:text-[2.2rem] font-semibold">
                PAKET {_package.title.rendered.toUpperCase()}
              </h2>
              <p className="font-base text-[2.2rem] text-denim-600 my-5">
                {Currency(_package.price)}
              </p>
              <div
                className="font-base mb-5 "
                dangerouslySetInnerHTML={{
                  __html: _package.content.rendered,
                }}
              ></div>
              <Link
                href={
                  process.env.NEXT_PUBLIC_RESERVATION_LINK?.toString() || "/"
                }
                target="_blank"
                className="flex justify-center items-center space-x-2 bg-denim-600 hover:bg-denim-700 focus:bg-denim-700 text-white-50 py-3 max-w-[14.5rem] rounded-sm mb-10"
              >
                <span className="text-[0.9rem] md:text-[1rem] font-semibold">
                  PESAN SEKARANG
                </span>
                <FeatherIcon
                  icon="chevron-right"
                  size={23}
                  className="text-white-50 font-bold"
                />
              </Link>
              <p className="font-semibold">Alat yang didapatkan</p>
              <ul className="list-disc ml-4 mt-5 space-y-3 ">
                {_package.products.map((product, index) => {
                  return (
                    <li key={index}>
                      {product.name} - {product.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Article>
    </MainLayout>
  );
};

export default DetailPaket;
