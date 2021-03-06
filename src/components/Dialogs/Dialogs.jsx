import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    );
}
const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter U message' 
                validate={[required, maxLength50]} />
            </div>
            <div>
                <button >Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)


export default Dialogs;