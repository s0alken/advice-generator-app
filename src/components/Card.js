import pattern_divider_desktop from '../images/pattern-divider-desktop.svg';
import pattern_divider_mobile from '../images/pattern-divider-mobile.svg';
import icon_dice from '../images/icon-dice.svg';

const Card = ({ slip, fetchSlip }) => {

    return (
        <div className="card">
            {slip ? (
                <>
                    <h1 className="card__heading">{`Advice #${slip.id}`}</h1>
                    <p className="card__quote">{`“${slip.advice}”`}</p>
                </>
            ) : <p className="card__quote">Loading...</p>}

            <picture className="card__divider">
                <source srcSet={pattern_divider_mobile} media="(max-width: 25em)" />
                <img src={pattern_divider_desktop} alt="Divider" />
            </picture>

            <button className="card__button" onClick={fetchSlip}>
                <img src={icon_dice} alt="Icon dice" />
            </button>
        </div>
    )
}

export default Card;