import { useState } from 'react';
import Switch from "react-switch";

const ToggleTheme = ({toggleHandling, darkTheme}) => {
    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
      console.log(darkTheme)
    };

    // const switchStyles = {
    //   marginLeft: '4px',
    //   verticalAlign: 'middle'
    // };
  
    return (
      <button 
        className="example"
        onClick={toggleHandling}
      >
        <label>
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor="#FFF"
            onHandleColor="#000"
            offColor="#000"
            offHandleColor="#FFF"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </label>
      </button>
    );
};

export default ToggleTheme;