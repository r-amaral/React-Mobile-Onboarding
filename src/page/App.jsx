import { useState } from 'react'
import './App.scss';
import Banner from '../components/Banner';
import Pagination from '../components/Pagination';
import MainButton from '../components/MainButton';
import SkipButton from '../components/SkipButton';

function App() {

  const [page, setPage] = useState(0);

  return (

    <section className='container community'>

      <Banner page={page} />
      <Pagination page={page} setPage={setPage} />
      <div className='buttons'>
        <MainButton page={page} setPage={setPage} />
        {page !== 2 && <SkipButton setPage={setPage} />}
      </div>

    </section>

  )
}

export default App;


