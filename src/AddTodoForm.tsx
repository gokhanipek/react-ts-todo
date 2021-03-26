import React, {useState} from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {

    const [text, setText] = useState('')

    const onClickHandler = (event:React.SyntheticEvent) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form className="form">
            <div>
              <label className="form__label" htmlFor="todo">~ Bugün ne yapsam? ~</label>
              <input className="form__input"
                  value={text}
                  type="text" 
                  id="todo" 
                  name="to-do"
                  size={30}
                  onChange={(e) => setText(e.target.value)}
                  required />
              <button onClick={onClickHandler} type="submit" className="button"><span>Ekle</span></button>
            </div>
          </form>
    )
}