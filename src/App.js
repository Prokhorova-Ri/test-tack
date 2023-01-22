import "./assets/main.css"
import { useState } from "react";

function App() {

    const [cars, useCars] = useState([
        { name: 'Марка', value: 'Мазда'},
        { name: 'Модель', value: '6'},
        { name: 'Год выпуска', value: '2020'},
        { name: 'Количество', value: '6'},
    ])

    const getLayoutValues = cars.map((item, index) => {
        return (
            <div className="items" key={ index }>
                <p className="items-title">{ item.name }</p>
                <input type="text" defaultValue={ item.value }/>
            </div>
        )
    })

    return (
        <div className="App">
            <div className="item-wrapper">
                { getLayoutValues }
            </div>

            <div className="entry-field">
                <textarea name="" id="" cols="1" rows="1"></textarea>
                <button>Загрузить</button>
            </div>
        </div>
    );
}

export default App;
