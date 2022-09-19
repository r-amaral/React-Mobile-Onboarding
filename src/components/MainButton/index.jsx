import './style.scss';

export default function MainButton({ page, setPage }) {

    return (
        <button onClick={() => page == 2 ? setPage(0) : setPage(page += 1)}
            className="buttons__content  buttons__content--main" >
            {page !== 2 ? 'Continue' : "Get started"}
        </button >
    )
}