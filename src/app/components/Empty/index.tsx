import Article from '../Article';

interface EmptyProps {
  withSpace?: boolean;
  message?: string;
}

const Empty: React.FC<EmptyProps> = ({
  withSpace = true,
  message = 'Maaf, Terjadi Kesalahan Saat Memuat Data',
}) => {
  return withSpace ? (
    <Article isContent>
      <p className="text-center text-cod-gray-800">{message}</p>
    </Article>
  ) : (
    <p className="text-center text-cod-gray-800">{message}</p>
  );
};

export default Empty;
