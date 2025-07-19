import { useState } from 'react';
import './Message.css';
import { UserContext } from '../../context/UserContext';
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
      <h2>Data for {data.name}</h2>
            <p>Message:{data.message}</p>
    </div>
  </div>
</div>
        </>
    );
}
export default Message;