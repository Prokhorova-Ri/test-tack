import "./assets/main.css"
import { useState } from "react";

function App() {

    const [cars, setCars] = useState([
        { name: 'Марка', value: 'Мазда'},
        { name: 'Модель', value: '6'},
        { name: 'Год выпуска', value: '2020'},
        { name: 'Количество', value: '6'},
    ])

    const setNewValues = (payload) => {
        const { event, index } = payload
        let newValue = []
        newValue.push(...cars)
        newValue[index].value = event.target.value
        setCars(newValue)
    }

    const getLayoutValues = cars.map((item, index) => {
        return (
            <div className="items" key={ index }>
                <p className="items-title">{ item.name }</p>
                <input type="text"
                       defaultValue={ item.value }
                       onChange={(event) => setNewValues({ event, index })}/>
            </div>
        )
    })

    const saveFile = () => {
        alert(`Вы сохранили файл с данными \n: ${JSON.stringify(cars)}`);
    }

    return (
        <div className="App">
            <div className="item-wrapper">
                { getLayoutValues }
            </div>

            <div className="entry-field">
                <div className="entry-field-upload">
                    <textarea className="entry-field-upload-textarea" cols="1" rows="1" defaultValue='' />
                    <button className="entry-field-upload-btn">Загрузить</button>
                </div>
                <button className="entry-field-download" onClick={saveFile}>Сохранить</button>
            </div>
        </div>
    );
}

export default App;
