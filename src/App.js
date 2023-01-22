import "./assets/main.css"
import { useEffect, useState } from "react";

function App() {

    const [value, setValue] = useState([])
    const [textValue, setTextValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [example] = useState('[{"name":"Категория", "value":"Простуда и грипп"},{"name":"Наименование", "value":"Леденцы"},{"name":"Сумма", "value":"49 900"}]')

    const setNewValues = (payload) => {
        const { event, index } = payload
        let newValue = []
        newValue.push(...value)
        newValue[index].value = event?.target?.value || []
        setValue(newValue)
    }


    const saveFile = () => {
        alert(`Вы сохранили файл с данными \n: ${JSON.stringify(value)}`);
    }

    const saveMassiveAreaNewValue = (event) => {
        setTextValue(event?.target?.value || [])
    }

    const uploadFile = () => {
        try {
            const newFormatText = JSON.parse(textValue)
            setValue(newFormatText)
        } catch (e) {
            alert('Пожалуйста введите массив правильных JSON объектов')
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        })
    }, [value])

    const getLayoutValues = value.map((item, index) => {
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
                    <textarea onChange={(event) => saveMassiveAreaNewValue(event)} className="entry-field-upload-textarea" cols="1" rows="1" defaultValue='' />
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
