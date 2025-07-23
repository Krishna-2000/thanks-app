import './Message.css';
import { useUserMessageGetter } from '../../hook/useUserMessageGetter';

function Message(){ 
    const {data, loading} = useUserMessageGetter();
    if (loading) return <p>Loading...</p>;

    if (!data) return <p>No data found for this name.</p>;

    return (
        <>
        <div className="scroll-container">
  <div className="scroll-inner">
    <div className="scroll-content">
      <h2>Hey {data.name} ...</h2>
            <p className="message-text">{data.message.split('\n').map((line, idx) => (
  <span key={idx}>
    {line}
    <br /><br/>
  </span>
))}</p>
    </div>
  </div>
</div>
        </>
    );
}
export default Message;