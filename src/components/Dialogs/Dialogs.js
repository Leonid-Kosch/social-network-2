import React from 'react';
import Dialogsitem from './Dialogs-item/Dialogitem';
import './Dialogs.css';
import Messages from './Messages/Messages';
function Dialogs (props) {
    return(
        <div className='dialogs'>
            <div className='dialog__list'>
                {props.dialogPage.dialogNames.map((e)=><Dialogsitem name={e.name} id={e.id}/>)}
            </div>
            <Messages messageContent={props.dialogPage.messageContent}/>
        </div>
    );
}
export default Dialogs;