import './style.scss';
import LogoPrimaryPage from '../../assets/img1.png';
import LogoSeconderyPage from '../../assets/Ecommerce-campaign-cuate.png';
import LogoThirdPage from '../../assets/In-no-time-pana.png';

export default function Banner({ page }) {

    const data = [{
        img: LogoPrimaryPage,
        title: 'Plant Lover Community',
        paragraph: 'Find gardening enthusiasts from all over the world'
    }, {
        img: LogoSeconderyPage,
        title: 'Get fast & safe delivery',
        paragraph: 'Get good quality products for your plants'
    },
    {
        img: LogoThirdPage,
        title: 'Buy & Sell Tools',
        paragraph: 'Buy & sell good quality products for your beautiful plants'
    }]

    return (
        <div className='banner'>
            <img src={data[page].img} alt="Ilustração da comunidade" />
            <h1 className='banner__title'>{data[page].title}</h1>
            <p className="banner__text">{data[page].paragraph}</p>
        </div>
    )
}