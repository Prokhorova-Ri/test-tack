import "./assets/main.css"
import { useState } from "react";

function App() {

    // Создаем переменную, где будут храниться массив данных

    const [data, setData] = useState([
        { name:"Категория", value:"" },
        { name:"Наименование", value:"" },
        { name:"Сумма", value:"" }
    ])

    // Создаем текстовыю переменную, где будем хранить входящие данные полученные от юзера

    const [textValue, setTextValue] = useState('')

    // Создаем булевую переменную, для перерисовки компонента

    const [loading, setLoading] = useState(false)

    // Создаем переменную для примера json

    const [example] = useState('[{"name":"Категория", "value":"Простуда и грипп"},{"name":"Наименование", "value":"Леденцы"},{"name":"Сумма", "value":"49 900"}]')

    // Полученные обновленные данные мы записываем в наш основной массив

    const setNewValues = (payload) => {
        const { event, index } = payload

        let newValue = []
        newValue.push(...data)
        newValue[index].value = event?.target?.value || []
        setData(newValue)
    }

    // Сохраняем файл (вывод данных в alert)

    const saveFile = () => {
        alert(`Вы сохранили файл с данными \n: ${JSON.stringify(data)}`);
    }

    // Сохраняем текстовые данные полученные от юзера

    const saveTextValueFromUser = (event) => {
        setTextValue(event?.target?.value || [])
    }

    // Делаем перерисовку компонента для отображение обновленной таблицы

    const startRerenderingLayout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    // Полученные данные от юзера в виде текста, переформирую в массив и запишу в data новый массив.
    // Запускаю функцию ререндер таблицы
    // Если ошибка, выведу в alert информацию

    const uploadFile = () => {
        try {
            const newFormatText = JSON.parse(textValue)
            setData(newFormatText)
            startRerenderingLayout()
        } catch (e) {
            alert('Пожалуйста введите массив правильных JSON объектов')
        }
    }

    // Формирую верстку наших полей c переменной data.

    const getLayoutValues = data.map((item, index) => {
        return (
            <div className="items" key={ index }>
                <p className="items-title">{ item.name }</p>
                <input type="text"
                       defaultValue={ item.value }
                       onChange={(event) => setNewValues({ event, index })}/>
            </div>
        )
    })


    return (
        <div className="App">
            <div className="item-wrapper">
                { !loading ? getLayoutValues : 'Загрузка данных' }
            </div>

            <div className="entry-field">
                <div className="entry-field-upload">
                    <textarea onChange={(event) => saveTextValueFromUser(event)} className="entry-field-upload-textarea" cols="1" rows="1" defaultValue='' />
                    <button onClick={uploadFile}  className="entry-field-upload-btn">Загрузить</button>
                </div>
                <button className="entry-field-download" onClick={saveFile}>Сохранить</button>
            </div>

            <div className="example">
                <p className="example-title">Пример для загрузки JSON: </p>
                <p>{example}</p>
            </div>
        </div>
    );
}

export default App;
