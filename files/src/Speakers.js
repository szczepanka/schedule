import './speakers.css'

function Speakers(props) {
  return (
    <div className="speaker">
        {props.name}
      <div className="speaker-content">
      {props.topic}
      </div>
    </div>
  );
}

export default Speakers;
