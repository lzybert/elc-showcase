import { JSX, useEffect, useState } from 'react';
import styles from '../index.module.css';
import SiteDetails from '@/components/siteDetails/SiteDetails.tsx';
import { useParams } from 'react-router-dom';

const SiteDetailsPage = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<ICardSite>();
  const { id } = useParams();

  const loadState = async (id: number) => {
    setLoading(true);
    const res = await fetch(`/api/v1/sites/${id}`);
    const data = await res.json();
    if (res.status === 404 || res.status === 400) {
      setError(data.message);
    } else {
      setData(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadState(id as unknown as number);
  }, []);

  if (loading || error) {
    return (
      <div className={styles.app}>
        {error ? error : 'Fetching data...'}
      </div>
    )
  }
  return (
    <div className={styles.app}>
      <h2>{data?.name}</h2>
      <SiteDetails {...data as ICardSite} />
    </div>
  );
};

export default SiteDetailsPage;
