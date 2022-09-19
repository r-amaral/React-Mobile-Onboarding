import './style.scss';

export default function SkipButton({ setPage }) {
    return (
        <button onClick={() => setPage(2)} className='buttons__content buttons__content--secondary'>Skip</button>
    )
}