import { JSX, useEffect, useState } from 'react';
import styles from './index.module.css';
import SiteDetails from '@/components/siteDetails/SiteDetails.tsx';

const SiteOfTheDayPage = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<ICardSite>();

  const loadState = async () => {
    setLoading(true);
    const res = await fetch(`/api/v1/promo`);
    const data = await res.json();
    if (res.status === 404 || res.status === 400) {
      setError(data.message);
    } else {
      setData(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadState();
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
      <h3>Today's Site of the Day</h3>
      <h2>{data?.name}</h2>
      <SiteDetails {...data as ICardSite} />
    </div>
  );
};

export default SiteOfTheDayPage;
