import React from 'react';

const FormFields = (props) => {
    const renderFields = () => {
        const fromArray = [];
        for(let elementName in props.formData) {
            fromArray.push({
                id: elementName,
                settings: props.formData[elementName]
            });
        }
        return fromArray.map((item, i) => {
            return (
                <div key={i} className='formn_element'>
                    {renderTemplates(item)}
                </div>
            );
        })
    }

    const showLabel = (show, text) => {
        return show ?
            <label>{text}</label> 
            : null
        
    }

    const changeHandler = (event, id) => {
        const newState = props.formData;
        newState[id].value = event.target.value;
        props.change(newState);
    }

    const renderTemplates = (data) => {
        let formTemplate = null;
        let values = data.settings;

        switch(values.element) {
            case 'input': 
                formTemplate = (
                    <div className='form_element'>
                        {showLabel(values.label, values.labelText)}
                        <input 
                            {...values.config}
                            value={values.value}
                            onChange={(event) => changeHandler(event, data.id) }
                        />
                    </div>
                )
            break;
            default: 
            formTemplate = null;
            break;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}

export default FormFields;