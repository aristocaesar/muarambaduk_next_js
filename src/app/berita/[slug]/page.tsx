import Article from '@/app/components/Article';
import MainLayout from '@/app/components/Main';
import MUARAMBADUK_API from '@/app/config/Muarambaduk_API';
import NotFound from '@/app/not-found';
import { NewsType } from '@/app/types/news';
import DateWFormat from '@/app/utils/Date/format';
import { Ucword } from '@/app/utils/String/Strings';
import { Metadata } from 'next';
import Image from 'next/image';

interface DetailBeritaProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: DetailBeritaProps): Promise<Metadata> {
  return {
    title: `${Ucword(params.slug)}`,
  };
}

const DetailBerita: React.FC<DetailBeritaProps> = async ({ params }) => {
  const _NewsDetail: NewsType[] = await MUARAMBADUK_API.Get(
    `posts?slug=${params.slug}`
  ).catch(() => []);

  if (_NewsDetail.length == 0) return <NotFound />;

  return (
    <MainLayout
      data={{
        title: `${_NewsDetail[0].title.rendered}`,
        heading: DateWFormat(_NewsDetail[0].date),
      }}
    >
      <Article isContent>
        <div className="relative w-full h-[400px] mb-10 rounded-md">
          <Image
            src={
              _NewsDetail[0].featured_media == null ||
              _NewsDetail[0].featured_media == ''
                ? '/default-image.png'
                : _NewsDetail[0].featured_media
            }
            alt={_NewsDetail[0].title.rendered}
            fill
            style={{
              objectFit: 'cover',
            }}
            className="rounded-md"
          />
        </div>
        <div
          className="space-y-8"
          dangerouslySetInnerHTML={{ __html: _NewsDetail[0].content.rendered }}
        />
      </Article>
    </MainLayout>
  );
};

export default DetailBerita;
