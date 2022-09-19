import './style.scss'
import classNames from 'classnames';

export default function Pagination({ page, setPage }) {

    return (
        <div className='pagination'>
            <ul className='pagination__list'>
                <li onClick={() => setPage(0)} className={
                    classNames({
                        'pagination__item': true,
                        'pagination__item--active': page == 0 ? true : false
                    })}></li>
                <li onClick={() => setPage(1)} className={
                    classNames({
                        'pagination__item': true,
                        'pagination__item--active': page == 1 ? true : false
                    })}></li>
                <li onClick={() => setPage(2)} className={
                    classNames({
                        'pagination__item': true,
                        'pagination__item--active': page == 2 ? true : false
                    })}></li>
            </ul>
        </div >
    )
}