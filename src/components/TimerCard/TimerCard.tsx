import "./TimerCard.scss";

interface ITimerCard {
  value: string;
}

const TimerCard = ({ value }: ITimerCard) => {
  return (
    <div className="timer-card">
      <p className="timer-card__value">{value}</p>

      <div className="timer-card__part timer-card__part--top">
        <span className="timer-card__glass-effect" />
        <span className="timer-card__glass-tint" />
        <span className="timer-card__glass-shine" />
      </div>

      <div className="timer-card__part timer-card__part--bottom">
        <span className="timer-card__glass-effect" />
        <span className="timer-card__glass-tint" />
        <span className="timer-card__glass-shine" />
      </div>
    </div>
  );
};

export default TimerCard;
